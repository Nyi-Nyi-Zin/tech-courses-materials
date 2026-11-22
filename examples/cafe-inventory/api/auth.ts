import { createHash, randomBytes } from 'node:crypto';
import {
  Body, CanActivate, Controller, ExecutionContext, ForbiddenException, Get, HttpCode, Injectable, Post,
  Req, Res, SetMetadata, UnauthorizedException, UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Throttle } from '@nestjs/throttler';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import type { Request, Response } from 'express';
import { Database } from './db';
import { verifyPassword } from './password';

type Role = 'staff' | 'admin';
type Viewer = { id: number; email: string; role: Role };
export type ViewerRequest = Request & { viewer?: Viewer };

const cookieName = 'cafe_session';
const expiresIn = 8 * 60 * 60 * 1000;
const cookie = { httpOnly: true, sameSite: 'lax' as const, secure: process.env.NODE_ENV === 'production', path: '/api' };
const dummyHash = '0'.repeat(32) + ':' + '0'.repeat(128);
const fingerprint = (value: string) => createHash('sha256').update(value).digest('hex');

function readToken(request: Request) {
  return request.headers.cookie?.match(/(?:^|;\s*)cafe_session=([a-f0-9]{64})(?:;|$)/)?.[1];
}

class LoginDto {
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  password!: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly db: Database) {}

  async login(email: string, password: string, oldToken?: string) {
    const { rows } = await this.db.pool.query<Viewer & { password_hash: string }>(
      'SELECT id, email, role, password_hash FROM users WHERE email = $1', [email.trim().toLowerCase()],
    );
    const user = rows[0];
    const valid = await verifyPassword(password, user?.password_hash ?? dummyHash);
    if (!user || !valid) throw new UnauthorizedException('Invalid email or password.');

    const token = randomBytes(32).toString('hex');
    const client = await this.db.pool.connect();
    try {
      await client.query('BEGIN');
      await client.query('DELETE FROM sessions WHERE expires_at <= now()');
      if (oldToken) await client.query('DELETE FROM sessions WHERE token_hash = $1', [fingerprint(oldToken)]);
      await client.query('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES ($1, $2, $3)', [
        fingerprint(token), user.id, new Date(Date.now() + expiresIn),
      ]);
      await client.query('COMMIT');
    } catch (error) {
      await client.query('ROLLBACK').catch(() => {});
      throw error;
    } finally { client.release(); }
    return { token, viewer: { id: user.id, email: user.email, role: user.role } };
  }

  async viewer(token?: string) {
    if (!token) return null;
    const { rows } = await this.db.pool.query<Viewer>(`
      SELECT u.id, u.email, u.role
      FROM sessions s JOIN users u ON u.id = s.user_id
      WHERE s.token_hash = $1 AND s.expires_at > now()
    `, [fingerprint(token)]);
    return rows[0] ?? null;
  }

  async logout(token?: string) {
    if (token) await this.db.pool.query('DELETE FROM sessions WHERE token_hash = $1', [fingerprint(token)]);
  }
}

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private readonly auth: AuthService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<ViewerRequest>();
    const viewer = await this.auth.viewer(readToken(request));
    if (!viewer) throw new UnauthorizedException('Sign in to continue.');
    request.viewer = viewer;
    return true;
  }
}

const roleKey = 'inventory.roles';
export const RequireRole = (...roles: Role[]) => SetMetadata(roleKey, roles);

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector.getAllAndOverride<Role[]>(roleKey, [context.getHandler(), context.getClass()]);
    const viewer = context.switchToHttp().getRequest<ViewerRequest>().viewer;
    if (roles && (!viewer || !roles.includes(viewer.role))) throw new ForbiddenException('This role cannot change inventory.');
    return true;
  }
}

@Controller('session')
export class SessionController {
  constructor(private readonly auth: AuthService) {}

  @Post()
  @HttpCode(200)
  @Throttle({ default: { limit: 8, ttl: 60000 } })
  async login(@Body() input: LoginDto, @Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const { token, viewer } = await this.auth.login(input.email, input.password, readToken(request));
    response.cookie(cookieName, token, { ...cookie, maxAge: expiresIn });
    return viewer;
  }

  @Get()
  @UseGuards(SessionGuard)
  me(@Req() request: ViewerRequest) { return request.viewer; }

  @Post('logout')
  @HttpCode(204)
  async logout(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    await this.auth.logout(readToken(request));
    response.clearCookie(cookieName, cookie);
  }
}
