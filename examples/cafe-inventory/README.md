# Café Inventory

A working example with React 19, NestJS 12, TypeScript 7 and PostgreSQL. Staff can read stock. Admins can add products, change quantity and remove products. The full guide is available in [Cloud Nine Innovations Docs](https://javascript-training.cloudninemm.com/docs/#/fullstack/setup).

## Set up locally

1. Install Node.js 24.15 or later, npm, PostgreSQL and the `psql` command. Run the commands below from this folder.
2. Open `psql` as your existing local PostgreSQL administrator and create a role and database.

   ```sql
   CREATE ROLE cafe LOGIN;
   \password cafe
   CREATE DATABASE cafe_inventory OWNER cafe;
   \q
   ```

3. Copy `.env.example` to `.env`. Set `DATABASE_URL` to the database you just created. Use URL encoding for special characters in the database password. Keep `APP_ORIGIN=http://localhost:5173` for local development.
4. Install packages, compile the API and run the database migrations.

   ```sh
   npm ci
   npm run build:api
   npm run migrate
   ```

5. Create an admin. Temporarily add the following values to your local `.env` and run `npm run user:create`. Replace the password example with a unique password of 12 to 128 characters. Repeat with a different email and `staff` to create a staff login. Remove all three values after creating the accounts.

   ```dotenv
   CREATE_USER_EMAIL=admin@example.test
   CREATE_USER_PASSWORD="replace-with-your-own-password"
   CREATE_USER_ROLE=admin
   ```

6. Run `npm start` and `npm run dev:web` in separate terminals. Open [http://localhost:5173](http://localhost:5173). Use the email and password you set in step 5. Vite forwards `/api` to Nest and uses port 5173 by default. Keep the browser URL and `APP_ORIGIN` in sync if you change it. Re-run `npm run build:api` and restart Nest after editing the API.

## Test against PostgreSQL

Create a separate `cafe_inventory_test` database owned by `cafe` with `psql`. Set `CAFE_TEST_DATABASE_URL` in `.env`, then run `npm test`. The suite creates and cleans up a randomly named schema inside this database. It checks the upgrade from an older schema, role permissions, write validation, stock persistence and session expiry. The test login passwords are generated per run.

## Run a release

Run `npm ci` and `npm run build` to build the frontend and API. Deploy `build/`, `database/`, `package.json` and `package-lock.json` to a Node.js host. On that host install runtime packages with `npm ci --omit=dev`. Keep the working directory at the project root.

- Set `NODE_ENV=production`, `HOST=0.0.0.0` and `APP_ORIGIN` to the exact public HTTPS origin. The host can provide `PORT`. Use a managed secret for `DATABASE_URL` and use the database provider's verified TLS connection options.
- Back up the database before schema changes. Run `npm run migrate` as a release step before starting the new app. Run `npm run user:create` with the restricted provisioning account when adding users. Use `MIGRATION_DATABASE_URL` for these operations if the runtime account has limited permissions, and make it available only to the release or provisioning job.
- Start the app with `npm start` behind the host's HTTPS endpoint. Nest serves the built React UI and the API on the same origin. Confirm that `GET /api/health` returns 200 and review one login and product read over HTTPS.
- The default Nest throttle uses memory in a single process. If you use more than one instance, configure shared throttler storage and configure trusted proxies according to the hosting platform.

For a database whose objects are in `public`, a separate runtime login can use the grants below. Run these statements as the object owner after applying migrations. Give the login its password through your database provider or the `psql` password prompt.

```sql
GRANT CONNECT ON DATABASE cafe_inventory TO cafe_app;
GRANT USAGE ON SCHEMA public TO cafe_app;
GRANT SELECT ON users TO cafe_app;
GRANT SELECT, INSERT, DELETE ON sessions TO cafe_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON products TO cafe_app;
GRANT USAGE ON SEQUENCE products_id_seq TO cafe_app;
```

The sample covers one shop, two roles and current stock. The app models stock quantity as a single value.
