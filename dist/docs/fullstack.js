import { guide, p, page, part } from './content.js';

export const fullstackGuide = guide('fullstack', 'Fullstack', 'React 19.3 · NestJS 12.6 · TypeScript 7 · PostgreSQL 19 docs', p(
  'Follow one inventory app from the first database table to an HTTPS release.',
  'Inventory app တစ်ခုကို database table စဆောက်တာကနေ HTTPS နဲ့ အသုံးပြုနိုင်တဲ့အထိ လေ့လာပါ။',
), [
  {
    ...page('setup', p('Café Inventory project', 'Café Inventory Project'), p(
      'Build a small inventory system. Staff can view stock. Admins can add products, change quantities and remove products. Download the source to follow the complete example.',
      'ဆိုင်အတွက် ပစ္စည်းစာရင်း app တစ်ခု ဆောက်ပါမယ်။ Staff က stock ကြည့်နိုင်ပါတယ်။ Admin က ပစ္စည်းထည့်တာ၊ အရေအတွက်ပြင်တာနဲ့ ဖျက်တာ လုပ်နိုင်ပါတယ်။ နမူနာတစ်ခုလုံး လိုက်စမ်းဖို့ source code ကို ဒေါင်းလုဒ်ရယူပါ။',
    ), [
      part('flow', p('How the pieces fit together', 'အပိုင်းတွေ ဘယ်လိုချိတ်ဆက်လဲ'), p(
        'React sends a request to /api/products. A NestJS guard checks the session and role. The controller reads or writes PostgreSQL through node-postgres and returns JSON. React uses the response to update the screen.',
        'React က /api/products ကို request ပို့ပါတယ်။ NestJS guard က session နဲ့ role ကို စစ်ပါတယ်။ Controller က node-postgres နဲ့ PostgreSQL ကို ဖတ်တာ၊ ရေးတာလုပ်ပြီး JSON ပြန်ပေးပါတယ်။ React က အဲဒီ response ကိုယူပြီး screen ကို ပြန်ပြပါတယ်။',
      ), 'React → /api/products → NestJS guards → controller → PostgreSQL'),
      part('run', p('Run it on your computer', 'ကိုယ့်စက်မှာ စမ်းမောင်းပါ'), p(
        'Install Node.js 24.15 or later and PostgreSQL. Extract the ZIP and open its README for the psql setup, database URL and account settings. Copy .env.example to .env, set your own database URL and run these commands. Run user:create once per role with a different email, and remove the account settings from .env afterward.',
        'Node.js 24.15 သို့မဟုတ် ဒီထက်အသစ်နဲ့ PostgreSQL ကို install လုပ်ပါ။ ZIP ဖြည်ပြီး README ထဲက psql setup၊ database URL နဲ့ account settings ကို ကြည့်ပါ။ .env.example ကို .env အဖြစ် ကူးပါ။ ကိုယ့် database URL ဖြည့်ပြီး အောက်က command တွေ run ပါ။ Role တစ်ခုစီအတွက် မတူတဲ့ email နဲ့ user:create run ပြီးရင် account settings တွေကို .env ထဲက ဖယ်ပါ။',
      ), 'npm ci\nnpm run build:api\nnpm run migrate\nnpm run user:create'),
      part('open', p('Open the app', 'App ကို ဖွင့်ပါ'), p(
        'Run npm start and npm run dev:web in separate terminals. Open http://localhost:5173 and sign in with an account you created. Use the staff account to view stock, then use the admin account to add an item and reload the page to check that it was saved.',
        'Terminal တစ်ခုမှာ npm start၊ နောက်တစ်ခုမှာ npm run dev:web ကို run ပါ။ http://localhost:5173 ဖွင့်ပြီး ကိုယ်ဆောက်ထားတဲ့ account နဲ့ ဝင်ပါ။ Staff account နဲ့ stock ကိုကြည့်ပါ။ Admin account နဲ့ ပစ္စည်းတစ်ခု ထည့်ပြီး page reload လုပ်တဲ့အခါ ပြန်ပေါ်လား စစ်ပါ။',
      )),
    ], [
      ['React · createRoot', 'https://react.dev/reference/react-dom/client/createRoot'],
      ['NestJS · First steps', 'https://docs.nestjs.com/first-steps'],
      ['PostgreSQL · SQL tutorial', 'https://www.postgresql.org/docs/19/tutorial.html'],
    ]),
    download: { href: 'downloads/cafe-inventory.zip', label: p('Download Café Inventory source', 'Café Inventory source code ဒေါင်းလုဒ်ရယူရန်') },
  },
  page('migrations', p('Schema and migrations', 'Schema နဲ့ Migrations'), p(
    'Use numbered SQL files to create the first database and change it as the app grows.',
    'Database စဆောက်ဖို့နဲ့ app တိုးလာတဲ့အခါ schema ပြောင်းဖို့ နံပါတ်စဉ်ပါ SQL ဖိုင်တွေ သုံးပါ။',
  ), [
    part('tables', p('Decide what to store', 'ဘာတွေ သိမ်းမလဲ'), p(
      'The app uses users, sessions and products. Each session belongs to one user. The products table uses a unique SKU, which is the shop’s item code. A check constraint prevents negative stock.',
      'ဒီ app မှာ users၊ sessions နဲ့ products table သုံးခု ပါပါတယ်။ Session တစ်ခုစီမှာ သက်ဆိုင်ရာ user တစ်ယောက် ရှိပါတယ်။ SKU က ဆိုင်က သတ်မှတ်ထားတဲ့ ပစ္စည်းကုဒ်ဖြစ်ပြီး products ထဲမှာ ထပ်လို့မရပါဘူး။ Stock အရေအတွက် အနုတ်မဖြစ်အောင် CHECK constraint နဲ့ စစ်ပါတယ်။',
    )),
    part('existing', p('Fill in a new column for existing rows', 'ရှိပြီးသား row တွေအတွက် column အသစ်ဖြည့်ပါ'), p(
      'The first migration creates the products table. The second adds SKU. It fills in an ID-based SKU for every existing product before requiring it on every row. The unique constraint protects against duplicate SKUs even when requests arrive together.',
      'ပထမ migration က products table ကို ဆောက်ပါတယ်။ ဒုတိယ migration က SKU ထည့်ပါတယ်။ SKU ကို row တိုင်းမှာ မဖြစ်မနေရှိရမယ်လို့ မသတ်မှတ်ခင် ရှိပြီးသား product တိုင်းအတွက် ID ကိုသုံးပြီး SKU ဖြည့်ပါတယ်။ Request တွေ တစ်ပြိုင်နက် ရောက်လာရင်လည်း UNIQUE constraint က SKU ထပ်မသွားအောင် စစ်ပါတယ်။',
    ), 'ALTER TABLE products ADD COLUMN sku text;\nUPDATE products SET sku = \'SKU-\' || id;\nALTER TABLE products ALTER COLUMN sku SET NOT NULL;\nALTER TABLE products ADD CONSTRAINT products_sku_key UNIQUE (sku);'),
    part('release', p('Apply changes in order', 'အစဉ်လိုက် ပြောင်းလဲပါ'), p(
      'The runner applies pending files in a transaction, locks out a second migration runner and records each file with a checksum. Keep applied files in source control. Create a new numbered file for the next change. Try it on a copy with existing data before running it in a release.',
      'Migration runner က မလုပ်ရသေးတဲ့ SQL ဖိုင်တွေကို transaction တစ်ခုထဲ apply လုပ်ပါတယ်။ Migration နှစ်ခု တစ်ပြိုင်နက် run မဖြစ်အောင် lock သုံးပြီး apply လုပ်ထားတဲ့ဖိုင်တိုင်းကို checksum နဲ့ မှတ်ထားပါတယ်။ Apply လုပ်ပြီးသားဖိုင်တွေကို source control ထဲ သိမ်းထားပါ။ အပြောင်းအလဲအသစ်အတွက် file နံပါတ်အသစ်ပေးပြီး data ရှိတဲ့ database copy မှာ အရင်စမ်းပါ။',
    ), 'npm run migrate'),
  ], [
    ['PostgreSQL · ALTER TABLE', 'https://www.postgresql.org/docs/19/sql-altertable.html'],
    ['PostgreSQL · Transactions', 'https://www.postgresql.org/docs/19/tutorial-transactions.html'],
    ['PostgreSQL · Advisory locks', 'https://www.postgresql.org/docs/19/explicit-locking.html#ADVISORY-LOCKS'],
  ]),
  page('api', p('NestJS API and validation', 'NestJS API နဲ့ Validation'), p(
    'Make HTTP routes for reading stock, adding products, changing quantity and deleting products.',
    'Stock ကြည့်တာ၊ ပစ္စည်းထည့်တာ၊ အရေအတွက်ပြင်တာနဲ့ ပစ္စည်းဖျက်တာအတွက် HTTP route တွေ ဆောက်ပါ။',
  ), [
    part('routes', p('Map routes to actions', 'Route တစ်ခုချင်းစီရဲ့ လုပ်ဆောင်ချက်'), p(
      'GET lists products. POST creates a product. PATCH changes its quantity. DELETE removes it. A successful creation returns 201 and a successful deletion returns 204 with an empty body. An unknown product ID returns 404.',
      'GET က ပစ္စည်းစာရင်း ပြန်ပေးပါတယ်။ POST က ပစ္စည်းအသစ် ထည့်ပါတယ်။ PATCH က အရေအတွက် ပြင်ပါတယ်။ DELETE က ပစ္စည်းဖျက်ပါတယ်။ ပစ္စည်းထည့်ပြီးရင် 201၊ ဖျက်ပြီးရင် body မပါတဲ့ 204 ပြန်ပါတယ်။ မရှိတဲ့ product ID သုံးရင် 404 ပြန်ပါတယ်။',
    ), 'GET    /api/products\nPOST   /api/products\nPATCH  /api/products/:id\nDELETE /api/products/:id'),
    part('validate', p('Validate the request', 'Request data ကို စစ်ပါ'), p(
      'The global ValidationPipe uses each DTO to accept only known fields. Quantity must be an integer between zero and one million. The API replies with 400 when input fails validation, so bad data is stopped before it reaches the database.',
      'Global ValidationPipe က DTO မှာရှိတဲ့ field တွေကိုပဲ လက်ခံပါတယ်။ Quantity က သုညကနေ တစ်သန်းအတွင်း ကိန်းပြည့်ဖြစ်ရပါမယ်။ Input မှားရင် API က 400 ပြန်ပေးပြီး database ထဲ မရောက်ခင် တားထားပါတယ်။',
    ), 'class StockDto {\n  @IsInt()\n  @Min(0)\n  @Max(1000000)\n  quantity!: number;\n}'),
    part('sql', p('Pass input as query parameters', 'Input ကို query parameter အဖြစ် ထည့်ပါ'), p(
      'Send values separately from the SQL text. PostgreSQL uses the unique SKU constraint to handle competing inserts. When ON CONFLICT returns no row, the API sends 409 so the user can choose another SKU.',
      'Value တွေကို SQL စာသားနဲ့ သီးသန့် ပို့ပါ။ ပစ္စည်းတစ်မျိုးတည်းကို တစ်ပြိုင်နက် insert လုပ်လာရင် unique SKU constraint နဲ့ PostgreSQL က ထိန်းပါတယ်။ ON CONFLICT ကြောင့် row မပြန်လာရင် API က 409 ပြန်ပေးလို့ user က SKU တစ်ခု ပြောင်းသုံးနိုင်ပါတယ်။',
    ), 'const result = await pool.query(\n  "INSERT INTO products (sku, name, quantity) VALUES ($1, $2, $3) " +\n  "ON CONFLICT (sku) DO NOTHING RETURNING id, sku, name, quantity",\n  [product.sku, product.name, product.quantity],\n);'),
  ], [
    ['NestJS · Controllers', 'https://docs.nestjs.com/controllers'],
    ['NestJS · Validation', 'https://docs.nestjs.com/techniques/validation'],
    ['node-postgres · Parameterized queries', 'https://node-postgres.com/features/queries'],
  ]),
  page('react', p('Connect React to the API', 'React နဲ့ API ချိတ်ဆက်ခြင်း'), p(
    'Ask the API for the active session and product list. Keep loading, empty, success and error messages clear.',
    'လက်ရှိ session နဲ့ product list ကို API ဆီက တောင်းယူပါ။ Loading၊ စာရင်းအလွတ်၊ ပြီးမြောက်မှုနဲ့ error ကို ရှင်းရှင်းပြပါ။',
  ), [
    part('url', p('Use one browser origin', 'Browser origin တစ်ခုတည်း သုံးပါ'), p(
      'Use relative URLs such as /api/products. While developing, Vite forwards these requests to NestJS. After deployment, NestJS serves the built React files and the API from the same URL origin. The browser sends the session cookie with same-origin requests.',
      '/api/products လို relative URL သုံးပါ။ ကိုယ့်စက်မှာ development လုပ်ချိန် Vite က request ကို NestJS ဆီ ဆက်ပို့ပါတယ်။ Deploy ပြီးရင် NestJS က build လုပ်ထားတဲ့ React ဖိုင်တွေနဲ့ API ကို origin တစ်ခုတည်းက ထုတ်ပေးပါတယ်။ Same-origin request တွေမှာ browser က session cookie ပါ ပို့ပေးပါတယ်။',
    )),
    part('request', p('Handle HTTP results', 'HTTP result တွေကို ကိုင်တွယ်ပါ'), p(
      'Check response.ok before reading data. A 401 means the React screen should ask for a login. Show a clear message for a failed write and only update the list after the server confirms it. Wait for an in-progress write before letting the user submit again.',
      'Data မဖတ်ခင် response.ok ကို စစ်ပါ။ 401 ရရင် login ပြန်ဝင်ခိုင်းပါ။ Data ပြင်တာ မအောင်မြင်ရင် အကြောင်းပြပြီး server က အောင်မြင်ကြောင်း ပြန်မှ product list ကို ပြောင်းပါ။ Submit တစ်ခု လုပ်နေချိန်မှာ နောက်တစ်ခု ထပ်မပို့နိုင်အောင် စောင့်ပါ။',
    ), 'async function loadProducts(signal) {\n  const response = await fetch("/api/products", { signal });\n  if (!response.ok) throw new Error("Cannot load products");\n  return response.json();\n}'),
    part('restore', p('Restore the session when the page loads', 'Page ဝင်လာတိုင်း session ကို စစ်ပါ'), p(
      'Ask GET /api/session for the signed-in user when the page opens. Use the returned role to show the right controls. Cancel the initial requests when the component unmounts so old responses do not update its state.',
      'Page ဖွင့်ချိန်မှာ GET /api/session ကို ခေါ်ပြီး login ဝင်ထားတဲ့ user ကို ရယူပါ။ ပြန်လာတဲ့ role အတိုင်း သက်ဆိုင်ရာ ခလုတ်တွေ ပြပါ။ Component မရှိတော့ရင် အစပိုင်း request တွေ cancel လုပ်ပြီး နောက်ကျမှ ရောက်လာတဲ့ response တွေကြောင့် state မပြောင်းအောင် ထိန်းပါ။',
    )),
  ], [
    ['React · Synchronizing with Effects', 'https://react.dev/learn/synchronizing-with-effects'],
    ['MDN · Using Fetch', 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'],
    ['Vite · Server proxy', 'https://vite.dev/config/server-options.html#server-proxy'],
  ]),
  page('sessions', p('Login and cookie sessions', 'Login နဲ့ Cookie Sessions'), p(
    'Keep track of the signed-in user across requests without storing the password in the browser.',
    'Password ကို browser ထဲ သိမ်းစရာမလိုဘဲ request တစ်ခါချင်းစီမှာ ဘယ် user ဝင်ထားလဲ သိအောင်လုပ်ပါ။',
  ), [
    part('password', p('Check a password', 'Password ကို စစ်ပါ'), p(
      'The account command stores a salted scrypt hash. When the user signs in, the server derives a value from the submitted password and compares it with the stored hash. Login limits repeated requests and uses the same error message for an unknown email and a wrong password.',
      'Account ဆောက်တဲ့ command က salt ပါတဲ့ scrypt hash ကို သိမ်းပါတယ်။ Login ဝင်တဲ့အခါ user ပို့တဲ့ password ကနေ hash တွက်ပြီး database ထဲက hash နဲ့ တိုက်စစ်ပါတယ်။ Login request အကြိမ်ရေကို ကန့်သတ်ထားပြီး email မရှိတာနဲ့ password မှားတာအတွက် message တစ်မျိုးတည်း ပြပါတယ်။',
    )),
    part('cookie', p('Issue and check a session cookie', 'Session cookie ထုတ်ပေးပြီး ပြန်စစ်ပါ'), p(
      'After login, the server generates a random token. The browser receives it in an HttpOnly, SameSite=Lax cookie. PostgreSQL stores only a hash of that token and its expiry. The Secure flag is enabled in production. The server checks the request Origin against APP_ORIGIN on write requests.',
      'Login အောင်မြင်ရင် server က random token ထုတ်ပေးပါတယ်။ Browser က HttpOnly နဲ့ SameSite=Lax ပါတဲ့ cookie အဖြစ် လက်ခံပါတယ်။ PostgreSQL မှာ token hash နဲ့ သက်တမ်းကုန်မယ့်အချိန်ကိုပဲ သိမ်းပါတယ်။ Production မှာ Secure flag ဖွင့်ထားပြီး data ပြင်တဲ့ request တွေအတွက် Origin ကို APP_ORIGIN နဲ့ တိုက်စစ်ပါတယ်။',
    ), 'POST /api/session          # Sign in\nGET  /api/session          # Read the current user\nPOST /api/session/logout   # Revoke the session'),
    part('expiry', p('End the session', 'Session ကို ပိတ်ပါ'), p(
      'The sample sessions expire after eight hours. Logging out deletes the session row and clears the browser cookie. The guard returns 401 when there is no matching active session.',
      'နမူနာ app မှာ session က ရှစ်နာရီကြာရင် သက်တမ်းကုန်ပါတယ်။ Logout က session row ကို ဖျက်ပြီး browser cookie ကို ရှင်းပါတယ်။ ကိုက်ညီပြီး သက်တမ်းမကုန်သေးတဲ့ session မရှိရင် guard က 401 ပြန်ပေးပါတယ်။',
    )),
  ], [
    ['NestJS · Authentication', 'https://docs.nestjs.com/security/authentication'],
    ['NestJS · Rate limiting', 'https://docs.nestjs.com/security/rate-limiting'],
    ['MDN · Set-Cookie', 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie'],
    ['OWASP · Password storage', 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html'],
  ]),
  page('roles', p('Staff and admin permissions', 'Staff နဲ့ Admin Permissions'), p(
    'Use the signed-in user’s role to decide which inventory actions the API will allow.',
    'Login ဝင်ထားတဲ့ user ရဲ့ role ကို ကြည့်ပြီး inventory မှာ ဘာလုပ်ခွင့်ရှိလဲ API က ဆုံးဖြတ်ပါ။',
  ), [
    part('rules', p('Set the rules for each role', 'Role တစ်ခုချင်းစီရဲ့ လုပ်ပိုင်ခွင့်'), p(
      'Staff can read products. Admins can read, create, change stock and delete. The session guard identifies the user first. The role guard then checks the permissions for the route. An anonymous request receives 401. A signed-in staff user attempting an admin action receives 403.',
      'Staff က product list ကို ဖတ်နိုင်ပါတယ်။ Admin က ဖတ်တာ၊ ထည့်တာ၊ stock ပြင်တာနဲ့ ဖျက်တာ လုပ်နိုင်ပါတယ်။ Session guard က user ဘယ်သူလဲ အရင်စစ်ပြီး role guard က အဲဒီ route ကို သုံးခွင့်ရှိလား စစ်ပါတယ်။ Login မဝင်ရင် 401၊ login ဝင်ထားတဲ့ staff က admin action လုပ်ရင် 403 ပြန်ပါတယ်။',
    ), '@UseGuards(SessionGuard, RoleGuard)\n@Controller("products")\nclass ProductsController {\n  @Post()\n  @RequireRole("admin")\n  add(@Body() product: ProductDto) {\n    // Run the database insert here.\n  }\n}'),
    part('browser', p('Match the screen to the API rules', 'API rules အတိုင်း screen မှာ ပြပါ'), p(
      'React shows editing controls for admins. NestJS checks each request using the current role read from the database. The role comes from the server-side session lookup. The API responds with 403 even if a staff user sends a write directly.',
      'React က admin အတွက်ပဲ ပြင်ဖို့ခလုတ်တွေ ပြပါတယ်။ NestJS က request တစ်ခုချင်းစီအတွက် database ထဲက လက်ရှိ role ကို စစ်ပါတယ်။ Role က server ဘက်မှာ session တိုက်စစ်တဲ့အခါ ရလာတာပါ။ Staff က write request ကို API ဆီ တိုက်ရိုက်ပို့လာရင်လည်း 403 ပြန်ပါတယ်။',
    )),
  ], [
    ['NestJS · Authorization', 'https://docs.nestjs.com/security/authorization'],
    ['NestJS · Guards', 'https://docs.nestjs.com/guards'],
  ]),
  page('testing', p('Test the API with PostgreSQL', 'API ကို PostgreSQL နဲ့ တွဲစမ်းပါ'), p(
    'Run integration tests that start NestJS, send HTTP requests and read the rows saved in PostgreSQL.',
    'NestJS ကို တက်ခိုင်းပြီး HTTP request ပို့တာ၊ PostgreSQL ထဲ သိမ်းထားတဲ့ row တွေကို စစ်တာအထိ integration test နဲ့ လုပ်ပါ။',
  ), [
    part('database', p('Prepare a test database', 'Test database ပြင်ဆင်ပါ'), p(
      'Create a separate PostgreSQL database and set CAFE_TEST_DATABASE_URL in .env. The tests create and clean up a fresh schema with a random name. A test database user needs permission to create a schema in that database.',
      'သီးသန့် PostgreSQL database တစ်ခု ဆောက်ပြီး .env ထဲမှာ CAFE_TEST_DATABASE_URL ထည့်ပါ။ Test run တိုင်း နာမည်အသစ်နဲ့ schema ဆောက်ပြီး စမ်းသပ်ပြီးရင် ပြန်ရှင်းပါတယ်။ Test အတွက် database user က အဲဒီ database မှာ schema ဆောက်ခွင့် ရှိရပါမယ်။',
    ), 'npm test'),
    part('cases', p('Check the important flows', 'အဓိက လုပ်ဆောင်ချက်တွေ စစ်ပါ'), p(
      'The suite checks that a migration can upgrade old rows and run again. It verifies login, staff and admin access, invalid stock, duplicate SKU, saved quantity and session expiry. It also tests that an old cookie stops working after logout.',
      'Test suite က migration နဲ့ data အဟောင်းကို upgrade လုပ်လို့ရလား၊ ထပ် run လို့ရလား စစ်ပါတယ်။ Login၊ staff နဲ့ admin permissions၊ stock မှားတာ၊ SKU ထပ်တာ၊ ပြင်ထားတဲ့ quantity သိမ်းသွားတာနဲ့ session သက်တမ်းကုန်တာကို စစ်ပါတယ်။ Logout ပြီး cookie အဟောင်း သုံးလို့မရတော့တာလည်း စစ်ပါတယ်။',
    )),
    part('browser', p('Check the React screen', 'React screen ကို စစ်ပါ'), p(
      'Open the app and try both accounts. Check loading, empty inventory, invalid input, a page reload and logout. For example, add a product as admin, reload and sign in as staff to see the new product without editing controls.',
      'App ဖွင့်ပြီး account နှစ်မျိုးနဲ့ စမ်းပါ။ Loading၊ inventory အလွတ်၊ input မှားတာ၊ reload လုပ်တာနဲ့ logout ကို စစ်ပါ။ ဥပမာ admin နဲ့ product ထည့်ပြီး reload လုပ်ပါ။ Staff နဲ့ ပြန်ဝင်ကြည့်ပြီး product အသစ်ကို တွေ့ရသလို ပြင်ခလုတ် မပေါ်တာပါ စစ်ပါ။',
    )),
  ], [
    ['NestJS · Testing', 'https://docs.nestjs.com/fundamentals/testing'],
    ['Node.js · Test runner', 'https://nodejs.org/api/test.html'],
  ]),
  page('deployment', p('Deploy with HTTPS', 'HTTPS နဲ့ Deploy လုပ်ခြင်း'), p(
    'Build the React UI and NestJS API, then run them on one Node.js service backed by PostgreSQL.',
    'React UI နဲ့ NestJS API ကို build လုပ်ပြီး PostgreSQL နဲ့ ချိတ်ထားတဲ့ Node.js service တစ်ခုထဲမှာ run ပါ။',
  ), [
    part('build', p('Build the release', 'Release အတွက် Build လုပ်ပါ'), p(
      'npm ci installs the locked packages. npm run build compiles the API and builds the frontend. Deploy build/, database/ and both package files. Install the production packages on the host. The download also includes a Dockerfile for a container host.',
      'npm ci က lock file ထဲက version တွေကို install လုပ်ပါတယ်။ npm run build က API ကို compile လုပ်ပြီး frontend ကို build လုပ်ပါတယ်။ build/၊ database/ နဲ့ package file နှစ်ခုကို deploy လုပ်ပြီး host မှာ production packages တွေ install ပါ။ Container သုံးတဲ့ host အတွက် download ထဲမှာ Dockerfile ပါပါတယ်။',
    ), 'npm ci\nnpm run build\n\n# Run on the host after copying the release files.\nnpm ci --omit=dev'),
    part('database', p('Run migrations before starting the app', 'App မတက်ခင် Migration Run ပါ'), p(
      'Back up existing data before a schema change. Set a private database URL for the API and a separate migration URL for the release job. Give the runtime role only the permissions it needs. The README includes the SQL grants for this project.',
      'Schema မပြောင်းခင် ရှိပြီးသား data ကို backup လုပ်ပါ။ API အတွက် database URL ကို secret အဖြစ် ထည့်ပါ။ Release job အတွက် သီးသန့် migration URL သုံးပါ။ Runtime role ကို လိုအပ်တဲ့ permission တွေပဲ ပေးပါ။ ဒီ project အတွက် SQL grant တွေကို README ထဲမှာ ကြည့်နိုင်ပါတယ်။',
    ), 'npm run migrate'),
    part('serve', p('Start and check the release', 'Release တင်ပြီး စစ်ပါ'), p(
      'Set NODE_ENV=production, HOST=0.0.0.0 and APP_ORIGIN to the exact public HTTPS origin. Use the host’s PORT value. Route traffic through HTTPS, start the app and check GET /api/health for a 200 response. Open the site and verify that login and product reads work in the deployed browser.',
      'NODE_ENV=production၊ HOST=0.0.0.0 ထည့်ပြီး APP_ORIGIN မှာ public HTTPS origin အတိအကျ ထည့်ပါ။ Host ပေးတဲ့ PORT ကို သုံးပါ။ HTTPS ကနေ traffic ဝင်အောင် ချိတ်ပြီး app စတင်ပါ။ GET /api/health က 200 ပြန်လား စစ်ပါ။ Deploy လုပ်ထားတဲ့ site ကို browser မှာ ဖွင့်ပြီး login နဲ့ product list ကို စမ်းပါ။',
    ), 'npm start\n\ncurl -fsS https://inventory.example.com/api/health'),
  ], [
    ['NestJS · Serve static files', 'https://docs.nestjs.com/recipes/serve-static'],
    ['PostgreSQL · Privileges', 'https://www.postgresql.org/docs/19/ddl-priv.html'],
    ['Node.js · Environment variables', 'https://nodejs.org/api/environment_variables.html'],
  ]),
]);
