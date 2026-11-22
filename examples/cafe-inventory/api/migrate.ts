import { createHash } from 'node:crypto';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Pool } from 'pg';

export async function applyMigrations(pool: Pool) {
  const directory = join(process.cwd(), 'database');
  const files = (await readdir(directory)).filter(name => /^\d{3}_.+\.sql$/.test(name)).sort();
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('SELECT pg_advisory_xact_lock(73201626)');
    await client.query('CREATE TABLE IF NOT EXISTS schema_migrations (name text PRIMARY KEY, checksum text NOT NULL)');
    const applied = await client.query<{ name: string; checksum: string }>('SELECT name, checksum FROM schema_migrations');
    const known = new Map(applied.rows.map(row => [row.name, row.checksum]));
    for (const file of known.keys()) {
      if (!files.includes(file)) throw new Error('An applied migration is missing: ' + file);
    }
    for (const file of files) {
      const sql = await readFile(join(directory, file), 'utf8');
      const checksum = createHash('sha256').update(sql).digest('hex');
      if (known.has(file)) {
        if (known.get(file) !== checksum) throw new Error('An applied migration was edited: ' + file);
        continue;
      }
      await client.query(sql);
      await client.query('INSERT INTO schema_migrations (name, checksum) VALUES ($1, $2)', [file, checksum]);
    }
    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    throw error;
  } finally {
    client.release();
  }
}

if (require.main === module) {
  const connectionString = process.env.MIGRATION_DATABASE_URL || process.env.DATABASE_URL;
  if (!connectionString) throw new Error('Set MIGRATION_DATABASE_URL or DATABASE_URL.');
  const pool = new Pool({ connectionString, connectionTimeoutMillis: 5000 });
  applyMigrations(pool)
    .then(() => console.log('Migrations applied.'))
    .catch(error => { console.error(error.message); process.exitCode = 1; })
    .finally(() => pool.end());
}
