import { Injectable, type OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';

export function required(name: string, fallback?: string): string {
  const value = process.env[name] || fallback;
  if (!value) throw new Error('Set the ' + name + ' environment variable.');
  return value;
}

@Injectable()
export class Database implements OnModuleDestroy {
  readonly pool = new Pool({
    connectionString: required('DATABASE_URL'),
    connectionTimeoutMillis: 5000,
  });

  async onModuleDestroy() {
    await this.pool.end();
  }
}
