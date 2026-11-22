import { p, part, page, guide } from './content.js';

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

const firstDrink = first(["Tea", "Coffee"]); // string | undefined`),
        part('promise', p('Describe an asynchronous result', 'Async Result Type သတ်မှတ်ခြင်း'),
          p('An async function returns a Promise. When an API response enters the program, check its data shape at runtime before treating it as a typed value.', 'Async function က Promise ပြန်ပါတယ်။ API response ဝင်လာတဲ့အခါ type သတ်မှတ်ပြီး အသုံးမပြုခင် data ပုံစံကို runtime မှာ စစ်ပါ။'),
          `async function positivePrices(load: () => Promise<number[]>): Promise<number[]> {
  const prices = await load();
  return prices.filter(price => price > 0);
}`),
      ],
      [['Generics', 'https://www.typescriptlang.org/docs/handbook/2/generics.html'], ['Everyday types', 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html']]),
  ]);

const postgres = guide('database', 'PostgreSQL', '19.0',
  p('Model related tables, write queries, and use transactions to keep related changes together.', 'ဆက်စပ်တဲ့ tables တည်ဆောက်ပါ။ Queries ရေးပြီး ဆက်စပ်ပြောင်းလဲမှုတွေကို transactions နဲ့ အတူတူ ကိုင်တွယ်ပါ။'),
  [
    page('setup', p('Connect with psql and create tables', 'psql နဲ့ ချိတ်ပြီး Tables တည်ဆောက်ခြင်း'),
      p('PostgreSQL stores related data in tables. psql is its terminal client. The examples use PostgreSQL 19 and assume a local server and a role you can sign in with.', 'PostgreSQL က ဆက်စပ်တဲ့ data ကို tables တွေထဲ သိမ်းပါတယ်။ psql က terminal client ပါ။ ဥပမာတွေက PostgreSQL 19 သုံးပြီး local server နဲ့ ဝင်လို့ရတဲ့ role ရှိတယ်လို့ ယူဆထားပါတယ်။'),
      [
        part('psql', p('Inspect your connection', 'Connection စစ်ခြင်း'),
          p('In the terminal, connect to the postgres database using your local role. Replace postgres following -U if your role is different. Inside psql, use the backslash commands to inspect databases, roles, and tables. These are psql commands.', 'Terminal ကနေ local role နဲ့ postgres database ကို ချိတ်ပါ။ Role နာမည် မတူရင် -U နောက်က postgres ကို အစားထိုးပါ။ psql ထဲမှာ backslash commands နဲ့ databases၊ roles နဲ့ tables ကြည့်ပါ။ ဒါတွေက psql commands ပါ။'),
          `# Terminal
psql -h localhost -U postgres -d postgres

-- Inside psql
\\conninfo
\\l
\\du
\\dt
SELECT version();`),
        part('schema', p('Model products and sales', 'Products နှင့် Sales Tables တည်ဆောက်ခြင်း'),
          p('A primary key identifies a row. A foreign key requires a matching row in the referenced table for a non-null value. Combine it with NOT NULL when every sale must refer to a product.', 'Primary key က row တစ်ခုကို ခွဲသိစေပါတယ်။ Foreign key က null မဟုတ်တဲ့ value အတွက် ချိတ်ထားတဲ့ table မှာ ကိုက်ညီတဲ့ row ရှိဖို့ လိုပါတယ်။ Sale တိုင်းမှာ product ရှိရမယ်ဆို NOT NULL ပေါင်းပါ။'),
          `CREATE TABLE products (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  price numeric(10, 2) NOT NULL CHECK (price >= 0)
);

CREATE TABLE sales (
  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  product_id integer NOT NULL REFERENCES products(id),
  quantity integer NOT NULL CHECK (quantity > 0)
);

INSERT INTO products (name, price) VALUES ('Tea', 2.00), ('Coffee', 3.00);
INSERT INTO sales (product_id, quantity)
SELECT id, 2 FROM products WHERE name = 'Tea';`),
      ],
      [['PostgreSQL 19 documentation', 'https://www.postgresql.org/docs/19/'], ['psql manual', 'https://www.postgresql.org/docs/19/app-psql.html'], ['Constraints', 'https://www.postgresql.org/docs/19/ddl-constraints.html']]),
    page('queries', p('Queries, joins, and groups', 'Queries၊ Joins နှင့် Groups'),
      p('SQL queries select, combine, and summarize rows. Request an explicit order when the order matters.', 'SQL queries နဲ့ rows ရွေး၊ ပေါင်း၊ အနှစ်ချုပ်နိုင်ပါတယ်။ ရလဒ် အစဉ်အရေးကြီးရင် ORDER BY ထည့်ပါ။'),
      [
        part('filter', p('Filter rows before grouping', 'အုပ်စုမခွဲခင် Rows စစ်ခြင်း'),
          p('SELECT chooses columns, WHERE filters rows, and ORDER BY sorts the result. Use LIMIT with a sort if you want a predictable first group of rows. GROUP BY collects rows and HAVING filters groups after aggregation.', 'SELECT က columns ရွေး၊ WHERE က rows စစ်၊ ORDER BY က ရလဒ်စီပါတယ်။ ပထမ rows တွေ တိကျစေဖို့ LIMIT နဲ့ sort တွဲသုံးပါ။ GROUP BY က အုပ်စုခွဲပြီး HAVING က aggregation နောက် အုပ်စုတွေ စစ်ပါတယ်။')),
        part('join', p('Keep products with zero sales', 'Sales မရှိတဲ့ Products ပါ ထည့်ခြင်း'),
          p('INNER JOIN keeps matching rows. LEFT JOIN also keeps every unmatched row from the left table. COUNT(s.id) counts matching sale rows, while SUM(s.quantity) adds the units sold.', 'INNER JOIN က ကိုက်ညီတဲ့ rows ကို ယူပါတယ်။ LEFT JOIN က ဘယ်ဘက် table မှာ match မရှိတဲ့ row တွေပါ ထည့်ပါတယ်။ COUNT(s.id) က sale rows ရေတွက်ပြီး SUM(s.quantity) က ရောင်းရတဲ့ units ပေါင်းပါတယ်။'),
          `SELECT p.name,
       COUNT(s.id) AS sale_count,
       COALESCE(SUM(s.quantity), 0) AS units_sold
FROM products AS p
LEFT JOIN sales AS s ON s.product_id = p.id
GROUP BY p.id, p.name
ORDER BY units_sold DESC, p.id;`),
      ],
      [['Querying a table', 'https://www.postgresql.org/docs/19/tutorial-select.html'], ['Joins', 'https://www.postgresql.org/docs/19/tutorial-join.html'], ['Aggregate functions', 'https://www.postgresql.org/docs/19/tutorial-agg.html']]),
    page('transactions', p('Data changes, transactions, and indexes', 'Data ပြောင်းခြင်း၊ Transactions နှင့် Indexes'),
      p('Use transactions to keep related changes together. Use indexes to improve query access when they fit how the application reads data.', 'ဆက်စပ်ပြောင်းလဲမှုတွေကို transaction တစ်ခုထဲ ထားပါ။ Application က data ဖတ်ပုံနဲ့ ကိုက်ညီရင် index နဲ့ query access မြန်နိုင်ပါတယ်။'),
      [
        part('commit', p('Save or undo a group of changes', 'ပြောင်းလဲမှုများ သိမ်းခြင်း သို့မဟုတ် ပြန်ဖျက်ခြင်း'),
          p('BEGIN starts a transaction. COMMIT makes its changes permanent and ROLLBACK discards them. Use WHERE to target the intended rows when you update or delete. This example rolls back a price change.', 'BEGIN က transaction စပါတယ်။ COMMIT က changes သိမ်းပြီး ROLLBACK က ပယ်ဖျက်ပါတယ်။ Update သို့ delete လုပ်တဲ့အခါ ရည်ရွယ်တဲ့ rows ကို WHERE နဲ့ ရွေးပါ။ ဒီဥပမာက ဈေးနှုန်းပြောင်းတာကို ပြန်ဖျက်ပါတယ်။'),
          `BEGIN;
UPDATE products SET price = 2.50 WHERE name = 'Tea';
SELECT name, price FROM products WHERE name = 'Tea';
ROLLBACK;`),
        part('index', p('Measure before adding an index', 'Index မထည့်ခင် တိုင်းတာခြင်း'),
          p('An index can reduce work when a query filters on a matching column. Indexes take storage and add write work. EXPLAIN shows the planned query. EXPLAIN ANALYZE actually runs the statement.', 'Query က ကိုက်ညီတဲ့ column ပေါ် စစ်တဲ့အခါ index က လုပ်ရမယ့်အလုပ် နည်းစေနိုင်ပါတယ်။ Index အတွက် storage နဲ့ write အလုပ် ပိုလိုပါတယ်။ EXPLAIN က plan ပြပြီး EXPLAIN ANALYZE က statement ကို တကယ် run ပါတယ်။'),
          `CREATE INDEX sales_product_id_idx ON sales (product_id);
EXPLAIN SELECT * FROM sales WHERE product_id = 1;`),
      ],
      [['Transactions', 'https://www.postgresql.org/docs/19/tutorial-transactions.html'], ['Indexes', 'https://www.postgresql.org/docs/19/indexes.html'], ['Using EXPLAIN', 'https://www.postgresql.org/docs/19/using-explain.html']]),
  ]);

export const platformGuides = [ts, postgres];
