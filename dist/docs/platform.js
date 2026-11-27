import { p, part, page, guide } from './content.js';
import { databaseFundamentals, postgresIntroduction } from './database-fundamentals.js?v=93';
import { databaseScaling, storageAndRecovery } from './database-learning.js?v=92';
import { postgresCommands, postgresConnection, postgresCrud, postgresInstall } from './postgresql-basics.js';
import { postgresRoles } from './postgresql-roles.js';
import { schoolQueries, schoolSchemaSection, schoolTableChanges } from './postgresql-school.js';

const ts = guide('typescript', 'TypeScript', '7.0.2',
  p('Check JavaScript code with types. Learn inference, narrowing, generics, and compiler setup.', 'JavaScript code ကို types နဲ့ စစ်ပါ။ Inference၊ Narrowing၊ Generics နဲ့ Compiler Setup ကို လေ့လာပါ။'),
  [
    page('setup', p('Set up TypeScript', 'TypeScript ထည့်သွင်းခြင်း'),
      p('TypeScript checks types before a program runs. Type annotations do not validate incoming data at runtime.', 'TypeScript က program မ run ခင် types စစ်ပါတယ်။ Type annotations က runtime မှာ ဝင်လာတဲ့ data ကို validate မလုပ်ပေးပါဘူး။'),
      [
        part('install', p('Install and check a project', 'Project ထဲ ထည့်ပြီး စစ်ခြင်း'),
          p('Install TypeScript as a development dependency so the team can share a compiler version. Start with a tsconfig.json. Run tsc with --noEmit when you want diagnostics without build files.', 'Team တစ်ခုလုံး compiler version တူတူသုံးဖို့ TypeScript ကို development dependency အဖြစ် ထည့်ပါ။ tsconfig.json နဲ့ စပါ။ Build files မထုတ်ဘဲ စစ်ချင်ရင် tsc --noEmit run ပါ။'),
          `npm install --save-dev typescript@7.0.2
npx tsc --init
npx tsc --noEmit`),
        part('strict', p('Strict checking and inference', 'Strict Checking နှင့် Inference'),
          p('Use strict checking for new projects. TypeScript can infer types from values and return expressions. Add annotations at boundaries such as function parameters or exported contracts.', 'Project အသစ်မှာ strict checking သုံးပါ။ TypeScript က values နဲ့ return expressions ကနေ type ကို ခန့်မှန်းပေးနိုင်ပါတယ်။ Function parameters နဲ့ export လုပ်တဲ့ contract လို နေရာတွေမှာ annotations ထည့်ပါ။'),
          `export function total(price: number, units: number) {
  return price * units;
}

const amount = total(3, 2); // inferred as number`),
      ],
      [['TypeScript 7.0.2 release', 'https://github.com/microsoft/TypeScript/releases/tag/v7.0.2'], ['TypeScript 7.0 announcement', 'https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/'], ['TSConfig strict', 'https://www.typescriptlang.org/tsconfig/strict.html'], ['TSConfig noEmit', 'https://www.typescriptlang.org/tsconfig/noEmit.html']]),
    page('types', p('Object types, unions, and narrowing', 'Object Types၊ Unions နှင့် Narrowing'),
      p('Use object types to describe fields and unions to express more than one valid shape.', 'Fields တွေ ဖော်ပြဖို့ object types၊ လက်ခံနိုင်တဲ့ ပုံစံတစ်ခုထက်ပိုရင် unions သုံးပါ။'),
      [
        part('objects', p('Required and optional fields', 'မဖြစ်မနေ ပါရမယ့် Fields နှင့် Optional Fields'),
          p('An interface or type alias can describe an object’s fields. A trailing question mark marks a field as optional. With strict null checks, handle the missing value before you use it as a string.', 'Interface သို့ type alias နဲ့ object fields သတ်မှတ်နိုင်ပါတယ်။ Field နောက်က ? က optional ဖြစ်ပါတယ်။ Strict null checks နဲ့ဆို မရှိနိုင်တဲ့ value ကို string လို မသုံးခင် စစ်ပါ။'),
          `interface Product {
  name: string;
  price: number;
  label?: string;
}

function displayName(product: Product) {
  return product.label ?? product.name;
}`),
        part('narrow', p('Narrow with a check', 'စစ်ဆေးပြီး Type ခွဲခြင်း'),
          p('Use typeof, equality, or a shared literal field to narrow a union. In the example, checking ok lets the compiler determine which fields exist in each branch.', 'Union ကို typeof၊ equality သို့ literal value ပါတဲ့ shared field နဲ့ ခွဲနိုင်ပါတယ်။ ဥပမာမှာ ok စစ်တာနဲ့ branch တစ်ခုစီမှာ ဘယ် fields ရှိလဲ compiler က သိနိုင်ပါတယ်။'),
          `type Result =
  | { ok: true; total: number }
  | { ok: false; message: string };

function describe(result: Result) {
  if (result.ok) return "Total: " + result.total;
  return result.message;
}`),
      ],
      [['Object types', 'https://www.typescriptlang.org/docs/handbook/2/objects.html'], ['Narrowing', 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html']]),
    page('generics', p('Generics and async types', 'Generics နှင့် Async Types'),
      p('Generics preserve a relationship between types without tying a function to one concrete type.', 'Generics က function တစ်ခုကို type တစ်ခုတည်း မကန့်သတ်ဘဲ types တွေရဲ့ ဆက်စပ်မှုကို ထိန်းပေးပါတယ်။'),
      [
        part('type-param', p('Reuse a function without losing types', 'Type မပျောက်ဘဲ Function ပြန်သုံးခြင်း'),
          p('The type parameter T connects the array element type to the return type. Include undefined when an empty array can have no result.', 'Type parameter T က array element type နဲ့ return type ကို ချိတ်ပေးပါတယ်။ Array အလွတ်အတွက် result မရှိနိုင်လို့ undefined ထည့်ပါ။'),
          `function first<T>(items: readonly T[]): T | undefined {
  return items[0];
}

const firstProduct = first(["Pen", "Notebook"]); // string | undefined`),
        part('promise', p('Describe an asynchronous result', 'Async Result Type သတ်မှတ်ခြင်း'),
          p('An async function returns a Promise. When an API response enters the program, check its data shape at runtime before treating it as a typed value.', 'Async function က Promise ပြန်ပါတယ်။ API response ဝင်လာတဲ့အခါ type သတ်မှတ်ပြီး အသုံးမပြုခင် data ပုံစံကို runtime မှာ စစ်ပါ။'),
          `async function positivePrices(load: () => Promise<number[]>): Promise<number[]> {
  const prices = await load();
  return prices.filter(price => price > 0);
}`),
      ],
      [['Generics', 'https://www.typescriptlang.org/docs/handbook/2/generics.html'], ['Everyday types', 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html']]),
  ]);

const database = guide('database', 'Database', 'PostgreSQL 19.0',
  p('Compare data models and learn to choose a database for an application. Practice SQL in PostgreSQL, then explore storage, recovery, and scaling.', 'Data model တွေကို နှိုင်းယှဉ်ပြီး software အတွက် database ရွေးချယ်ပုံကို လေ့လာပါ။ ပြီးရင် PostgreSQL မှာ SQL စမ်းရေးပြီး storage၊ recovery နဲ့ scaling ကို ဆက်လေ့လာပါ။'),
  [
    ...databaseFundamentals,
    postgresIntroduction,
    postgresInstall,
    page('setup', p('Connect with psql and create tables', 'psql နဲ့ ချိတ်ပြီး Tables တည်ဆောက်ခြင်း'),
      p('Start the server you installed in the previous lesson. Choose the connection command for your operating system, then create a practice database and set up students, courses, and enrollments.', 'အရင်သင်ခန်းစာမှာ ထည့်ထားတဲ့ server ကို ဖွင့်ထားပါ။ ကိုယ့် OS အတွက် connection command ကို ရွေးပြီး practice database ဆောက်မယ်။ ပြီးရင် students၊ courses နဲ့ enrollments tables တွေ ဆောက်ကြည့်မယ်။'),
      [
        ...postgresConnection,
        schoolSchemaSection,
      ],
      [['PostgreSQL 19 documentation', 'https://www.postgresql.org/docs/19/'], ['psql manual', 'https://www.postgresql.org/docs/19/app-psql.html'], ['Constraints', 'https://www.postgresql.org/docs/19/ddl-constraints.html']]),
    postgresCommands,
    postgresCrud,
    postgresRoles,
    schoolQueries,
    schoolTableChanges,
    page('transactions', p('Data changes, transactions, and indexes', 'Data ပြောင်းခြင်း၊ Transactions နှင့် Indexes'),
      p('Use transactions to keep related changes together. Use indexes to improve query access when they fit how the application reads data.', 'ဆက်စပ်ပြောင်းလဲမှုတွေကို transaction တစ်ခုထဲ ထားပါ။ Application က data ဖတ်ပုံနဲ့ ကိုက်ညီရင် index နဲ့ query access မြန်နိုင်ပါတယ်။'),
      [
        part('commit', p('Save or undo a group of changes', 'ပြောင်းလဲမှုများ သိမ်းခြင်း သို့မဟုတ် ပြန်ဖျက်ခြင်း'),
          p('BEGIN starts a transaction. COMMIT makes its changes permanent and ROLLBACK discards them. Use WHERE to target the intended rows when you update or delete. This example rolls back a course fee change.', 'BEGIN က transaction စပါတယ်။ COMMIT က changes သိမ်းပြီး ROLLBACK က ပယ်ဖျက်ပါတယ်။ Update သို့ delete လုပ်တဲ့အခါ ရည်ရွယ်တဲ့ rows ကို WHERE နဲ့ ရွေးပါ။ ဒီဥပမာက သင်တန်းကြေး ပြောင်းလိုက်တာကို ပြန်ဖျက်ပါတယ်။'),
          `BEGIN;
UPDATE courses SET fee = 35.00 WHERE id = 1;
SELECT title, fee FROM courses WHERE id = 1;
ROLLBACK;
SELECT title, fee FROM courses WHERE id = 1;`),
        {
          ...part('index', p('Compare plans before and after an index', 'Index မထည့်ခင်နဲ့ ထည့်ပြီးနောက် Query Plan နှိုင်းယှဉ်ခြင်း'),
            p(
              'A transaction controls which changes are saved together. The next example looks at a separate question about the same database work: how PostgreSQL finds the row a query asks for. Run the same query against a temporary table before and after adding a B-tree index on sku. Each SKU occurs once in this sample. ANALYZE updates the planner statistics. EXPLAIN ANALYZE runs the SELECT and reports the plan and observed results. The rollback cleans up the sample.',
              'Transaction က အပြောင်းအလဲတွေကို အတူသိမ်းဖို့ သုံးပါတယ်။ မှတ်တမ်းကို ပြန်ဖတ်တဲ့အခါ လိုတဲ့ row ကို မြန်မြန်ရှာနိုင်ဖို့ Index သုံးနိုင်ပါတယ်။ ယာယီ table တစ်ခုထဲမှာ sku ကို B-tree index မထည့်ခင်နဲ့ ထည့်ပြီးနောက် query တစ်ခုတည်းကို run ပါ။ နမူနာမှာ SKU တစ်ခုစီ တစ်ကြောင်းပဲ ရှိတယ်။ ANALYZE က planner သုံးတဲ့ စာရင်းအင်းတွေကို ပြန်တွက်တယ်။ EXPLAIN ANALYZE က SELECT ကို တကယ် run ပြီး plan နဲ့ တိုင်းထားတဲ့ ရလဒ်တွေကို ပြတယ်။ အဆုံးမှာ ROLLBACK နဲ့ နမူနာကို ပြန်ရှင်းတယ်။'
            ),
            `BEGIN;
CREATE TEMP TABLE lesson_index_products (sku text, name text);
INSERT INTO lesson_index_products (sku, name)
SELECT 'SKU-' || n, 'Product ' || n
FROM generate_series(1, 20000) AS sample(n);
ANALYZE lesson_index_products;

EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM lesson_index_products WHERE sku = 'SKU-18000';

CREATE INDEX ON lesson_index_products (sku);

EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM lesson_index_products WHERE sku = 'SKU-18000';
ROLLBACK;`),
          terms: [
            ['Seq Scan', p('Reads the table and checks rows against the filter.', 'Table ကို ဖတ်ပြီး row တွေက filter နဲ့ ကိုက်မကိုက် စစ်တယ်။')],
            ['Index Scan', p('Looks up matching entries in the index and fetches the corresponding table rows.', 'ကိုက်ညီတဲ့ records ကို index ထဲမှာ ရှာပြီး သက်ဆိုင်ရာ table rows တွေကို ဖတ်တယ်။')],
            ['Index trade-off', p('An index takes storage and adds work to writes. For small tables or queries returning much of a table, the planner may still choose a sequential scan.', 'Index က storage ယူပြီး data ရေးတဲ့အခါ ပြင်ရတာ ပိုလာတယ်။ Table သေးရင် သို့မဟုတ် row အများကြီး ပြန်ဖတ်ရရင် planner က Seq Scan ကို ရွေးနိုင်သေးတယ်။')],
          ],
          expected: p(
            'Both plans should report one actual matching row. The first plan typically shows Seq Scan and the second Index Scan. Compare the scan type and buffers. Elapsed time can vary by machine and cache state.',
            'Plan နှစ်ခုစလုံးမှာ query နဲ့ ကိုက်တဲ့ row တစ်ကြောင်း ရှိကြောင်း ပြမယ်။ ပထမ plan မှာ Seq Scan၊ ဒုတိယမှာ Index Scan ကို ပုံမှန်အားဖြင့် တွေ့ရမယ်။ Scan type နဲ့ buffers ကို တိုက်ကြည့်ပါ။ စက်နဲ့ cache အခြေအနေအလိုက် ကြာချိန် ကွာနိုင်တယ်။'
          ),
        },
      ],
      [['Transactions', 'https://www.postgresql.org/docs/19/tutorial-transactions.html'], ['Indexes', 'https://www.postgresql.org/docs/19/indexes.html'], ['Using EXPLAIN', 'https://www.postgresql.org/docs/19/using-explain.html']]),
    storageAndRecovery,
    databaseScaling,
  ]);

database.lessonOrder = [
  {
    title: p('Database fundamentals', 'Database အခြေခံ'),
    lessons: Object.fromEntries(databaseFundamentals.map(lesson => [lesson.id, []])),
  },
  {
    title: p('PostgreSQL and SQL', 'PostgreSQL နဲ့ SQL'),
    lessons: {
      'postgresql-introduction': [], install: [], setup: [], 'psql-commands': [], crud: [],
      queries: [], normalization: [],
    },
  },
  {
    title: p('Transactions, indexes, and advanced queries', 'Transactions၊ Indexes နဲ့ အဆင့်မြင့် Queries'),
    lessons: {
      transactions: [], 'transaction-isolation': [], cte: [], 'window-functions': [], upserts: [],
    },
  },
  {
    title: p('Database administration', 'Database စီမံခြင်း'),
    lessons: { 'roles-and-ownership': [], 'schema-and-access': [], 'backup-and-restore': [] },
  },
  {
    title: p('Storage, recovery, and scaling', 'Storage၊ Recovery နဲ့ Scaling'),
    lessons: { 'storage-and-recovery': [], 'database-scaling': [] },
  },
];

export const platformGuides = [ts, database];
