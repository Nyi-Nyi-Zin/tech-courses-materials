import { isEmail } from 'class-validator';
import { Pool } from 'pg';
import { required } from './db';
import { hashPassword } from './password';

async function createUser() {
  const email = required('CREATE_USER_EMAIL').trim().toLowerCase();
  const password = required('CREATE_USER_PASSWORD');
  const role = required('CREATE_USER_ROLE');
  if (!isEmail(email) || email.length > 254) throw new Error('Enter a valid email.');
  if (password.length < 12 || password.length > 128) throw new Error('Use a password 12 to 128 characters long.');
  if (role !== 'staff' && role !== 'admin') throw new Error('Choose staff or admin.');
  const pool = new Pool({
    connectionString: process.env.MIGRATION_DATABASE_URL || required('DATABASE_URL'),
    connectionTimeoutMillis: 5000,
  });
  try {
    const passwordHash = await hashPassword(password);
    await pool.query('INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3)', [email, passwordHash, role]);
    console.log('User added.');
  } finally { await pool.end(); }
}

createUser().catch(error => {
  console.error(error.code === '23505' ? 'That email is already registered.' : error.message);
  process.exitCode = 1;
});
