import { PGlite } from './vendor/postgres/index.js';
import { schoolSchema, schoolSeatSetup } from './docs/postgresql-school.js';

const seed = [
  'CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT NOT NULL)',
  'CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT NOT NULL, price INTEGER NOT NULL CHECK (price > 0))',
  'CREATE TABLE sales (id INTEGER PRIMARY KEY, customer_id INTEGER REFERENCES customers(id), product_id INTEGER REFERENCES products(id), quantity INTEGER NOT NULL CHECK (quantity > 0))',
  "INSERT INTO customers VALUES (1,'Aye'),(2,'Min'),(3,'Su'),(4,'Htet')",
  "INSERT INTO products VALUES (1,'Coffee',3),(2,'Tea',2),(3,'Cake',4),(4,'Juice',5),(5,'Water',1)",
  'INSERT INTO sales VALUES (1,1,1,2),(2,2,2,3),(3,1,3,1),(4,3,1,1),(5,3,2,2)',
].join(';\n') + ';';

function table(result) {
  const columns = result.fields.map(field => field.name);
  const rows = result.rows.map(row => columns.map(column => {
    const value = row[column];
    if (value instanceof Date) return value.toISOString();
    return typeof value === 'bigint' ? value.toString() : value;
  }));
  return { columns, rows };
}

async function run({ sql, checks, dataset = 'practice' }) {
  const db = new PGlite();
  try {
    if (dataset === 'school' || dataset === 'school-seats') {
      // Commit the fixture before running examples that start and roll back a transaction.
      await db.exec(schoolSchema);
      if (dataset === 'school-seats') await db.exec(schoolSeatSetup);
    } else if (dataset !== 'empty') await db.exec(seed);
    const output = (await db.exec(sql)).filter(result => result.fields.length > 0).map(table);
    const results = [];
    for (const test of checks) {
      let passed;
      try {
        const actual = test.query ? table(await db.query(test.query)).rows : output[test.table ?? 0]?.rows;
        passed = !test.errorCode && JSON.stringify(actual) === JSON.stringify(test.rows);
      } catch (error) {
        passed = Boolean(test.errorCode) && error.code === test.errorCode;
      }
      results.push({ label: test.label, passed });
    }
    return { tables: output.map(result => ({ ...result, rows: result.rows.slice(0, 200) })), results };
  } finally { await db.close(); }
}

self.onmessage = async ({ data }) => {
  try { self.postMessage(await run(data)); }
  catch (error) { self.postMessage({ error: error.message, results: [] }); }
};
