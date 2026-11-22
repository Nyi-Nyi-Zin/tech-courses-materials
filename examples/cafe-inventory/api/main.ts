import 'reflect-metadata';
import { Controller, Get, Module, ServiceUnavailableException, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import express, { type NextFunction, type Request, type Response } from 'express';
import { resolve } from 'node:path';
import { AuthService, RoleGuard, SessionController, SessionGuard } from './auth';
import { Database, required } from './db';
import { ProductsController } from './products';

@Controller('health')
class HealthController {
  constructor(private readonly db: Database) {}

  @Get()
  async get() {
    try { await this.db.pool.query('SELECT 1 FROM products LIMIT 1'); }
    catch { throw new ServiceUnavailableException('Database unavailable.'); }
    return { status: 'ok' };
  }
}

@Module({
  imports: [ThrottlerModule.forRoot([{ ttl: 60000, limit: 150 }])],
  controllers: [HealthController, ProductsController, SessionController],
  providers: [Database, AuthService, SessionGuard, RoleGuard, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
class AppModule {}

export async function createApp() {
  const production = process.env.NODE_ENV === 'production';
  const origin = new URL(production ? required('APP_ORIGIN') : required('APP_ORIGIN', 'http://localhost:5173'));
  if (production && origin.protocol !== 'https:') throw new Error('Set APP_ORIGIN to the public HTTPS origin.');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { bodyParser: false });
  app.disable('x-powered-by');
  app.setGlobalPrefix('api');
  app.use('/api', (request: Request, response: Response, next: NextFunction) => {
    response.setHeader('Cache-Control', 'no-store');
    if (['GET', 'HEAD', 'OPTIONS'].includes(request.method) || request.get('Origin') === origin.origin) return next();
    response.status(403).json({ message: 'Request origin is not allowed.' });
  });
  app.use('/api', express.json({ limit: '16kb' }));
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }));
  if (production) app.use(express.static(resolve('build/web')));
  return app;
}

async function start() {
  const app = await createApp();
  app.enableShutdownHooks();
  await app.listen(Number(process.env.PORT ?? 3000), process.env.HOST ?? '127.0.0.1');
}

if (require.main === module) start().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
