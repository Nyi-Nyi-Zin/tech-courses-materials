const assert = require('node:assert/strict');
const { createHash, randomBytes } = require('node:crypto');
const { readFile } = require('node:fs/promises');
const { test } = require('node:test');
const { Pool } = require('pg');
const { applyMigrations } = require('../build/api/migrate');
const { hashPassword } = require('../build/api/password');

test('Café Inventory API with PostgreSQL', async t => {
  const testUrl = process.env.CAFE_TEST_DATABASE_URL;
  assert.ok(testUrl, 'Set CAFE_TEST_DATABASE_URL to a dedicated test database.');
  const url = new URL(testUrl);
  for (const existing of [process.env.DATABASE_URL, process.env.MIGRATION_DATABASE_URL]) {
    if (existing) {
      const current = new URL(existing);
      assert.notEqual(url.host + url.pathname, current.host + current.pathname, 'Use a separate test database.');
    }
  }
  const schema = 'cafe_test_' + randomBytes(8).toString('hex');
  const admin = new Pool({ connectionString: testUrl });
  t.after(() => admin.end());
  await admin.query('CREATE SCHEMA ' + schema);
  url.searchParams.set('options', '-c search_path=' + schema);
  const pool = new Pool({ connectionString: url.href });
  let app;
  try {
    await t.test('upgrades an existing database and can run again', async () => {
      const migration = '001_initial.sql';
      const initialSql = await readFile('database/' + migration, 'utf8');
      await pool.query(initialSql);
      await pool.query('CREATE TABLE schema_migrations (name text PRIMARY KEY, checksum text NOT NULL)');
      await pool.query('INSERT INTO schema_migrations VALUES ($1, $2)', [
        migration, createHash('sha256').update(initialSql).digest('hex'),
      ]);
      await pool.query("INSERT INTO products (name) VALUES ('Existing tea')");
      await applyMigrations(pool);
      await applyMigrations(pool);
      assert.equal((await pool.query('SELECT count(*)::int AS total FROM schema_migrations')).rows[0].total, 2);
      assert.deepEqual((await pool.query('SELECT sku, quantity FROM products')).rows, [{ sku: 'SKU-1', quantity: 0 }]);
    });

    const password = randomBytes(18).toString('hex');
    for (const role of ['admin', 'staff']) {
      await pool.query('INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3)', [
        role + '@example.test', await hashPassword(password), role,
      ]);
    }
    const origin = 'http://localhost:5173';
    process.env.NODE_ENV = 'test';
    process.env.APP_ORIGIN = origin;
    process.env.DATABASE_URL = url.href;
    const { createApp } = require('../build/api/main');
    app = await createApp();
    await app.listen(0, '127.0.0.1');
    const base = await app.getUrl();

    function request(path, { method = 'GET', cookie, body, from = origin } = {}) {
      const headers = { Origin: from };
      if (cookie) headers.Cookie = cookie;
      if (body !== undefined) headers['Content-Type'] = 'application/json';
      return fetch(base + '/api' + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
    }

    async function login(role) {
      const response = await request('/session', { method: 'POST', body: { email: role + '@example.test', password } });
      assert.equal(response.status, 200);
      const cookie = response.headers.get('set-cookie');
      assert.match(cookie, /HttpOnly/);
      assert.match(cookie, /SameSite=Lax/);
      assert.match(cookie, /Path=\/api/);
      assert.equal((await response.json()).role, role);
      return cookie.split(';')[0];
    }

    await t.test('requires login and rejects bad credentials and unapproved origins', async () => {
      assert.equal((await request('/health')).status, 200);
      assert.equal((await request('/products')).status, 401);
      const body = { email: 'staff@example.test', password: 'incorrect' };
      assert.equal((await request('/session', { method: 'POST', body })).status, 401);
      assert.equal((await request('/session', { method: 'POST', body, from: 'https://other.example' })).status, 403);
    });

    await t.test('enforces roles and persists product changes', async () => {
      const staff = await login('staff');
      const cookie = await login('admin');
      const body = { sku: 'tea-10', name: 'Milk tea', quantity: 12 };
      assert.equal((await request('/products', { cookie: staff })).status, 200);
      assert.equal((await request('/products', { method: 'POST', cookie: staff, body })).status, 403);
      const added = await request('/products', { method: 'POST', cookie, body });
      assert.equal(added.status, 201);
      const product = await added.json();
      assert.equal(product.sku, 'TEA-10');
      assert.equal((await request('/products', { method: 'POST', cookie, body })).status, 409);
      const path = '/products/' + product.id;
      assert.equal((await request(path, { method: 'PATCH', cookie, body: { quantity: -1 } })).status, 400);
      assert.equal((await request(path, { method: 'PATCH', cookie, body: { quantity: 4 } })).status, 200);
      assert.equal((await pool.query('SELECT quantity FROM products WHERE id = $1', [product.id])).rows[0].quantity, 4);
      assert.equal((await request(path, { method: 'DELETE', cookie: staff })).status, 403);
      assert.equal((await request(path, { method: 'DELETE', cookie })).status, 204);
      assert.equal((await request(path, { method: 'DELETE', cookie })).status, 404);
    });

    await t.test('revokes expired and logged-out sessions', async () => {
      const expired = await login('staff');
      const tokenHash = createHash('sha256').update(expired.split('=')[1]).digest('hex');
      await pool.query("UPDATE sessions SET expires_at = now() - interval '1 second' WHERE token_hash = $1", [tokenHash]);
      assert.equal((await request('/session', { cookie: expired })).status, 401);
      const cookie = await login('staff');
      assert.equal((await request('/session', { cookie })).status, 200);
      assert.equal((await request('/session/logout', { method: 'POST', cookie })).status, 204);
      assert.equal((await request('/session', { cookie })).status, 401);
    });
  } finally {
    if (app) await app.close();
    await pool.end();
    await admin.query('DROP SCHEMA ' + schema + ' CASCADE');
  }
});
