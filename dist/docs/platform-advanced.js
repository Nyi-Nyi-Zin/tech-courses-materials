import { p, page, part } from './content.js';

export const advancedPlatform = {
  typescript: [
    page('mapped-types', p('Mapped types', 'Mapped Types'), p(
      'Build a new object type from the fields of an existing type. Use this for related shapes that should stay in sync.',
      'ရှိပြီးသား object type ရဲ့ fields တွေကနေ type အသစ် ဆောက်ပါ။ မူရင်း type ပြောင်းရင် လိုက်ပြောင်းသင့်တဲ့ type တွေမှာ သုံးပါ။',
    ), [
      part('keys', p('Visit each key in a type', 'Type ထဲက Key တစ်ခုချင်းစီကို သုံးပါ'), p(
        'keyof T gives the property names of T. The mapped type visits each key. T[Key] gives that property’s value type. Here every field becomes optional for a product update.',
        'keyof T က T ရဲ့ property names တွေကို ရယူပါတယ်။ Mapped type က key တစ်ခုချင်းကို သုံးပါတယ်။ T[Key] က အဲဒီ property ရဲ့ value type ပါ။ ဒီနမူနာမှာ product update အတွက် field တိုင်းကို optional လုပ်ထားပါတယ်။',
      ), `type Product = { name: string; quantity: number };

type Patch<T> = {
  [Key in keyof T]?: T[Key];
};

const update: Patch<Product> = { quantity: 8 };`),
      part('remap', p('Change keys and modifiers', 'Key နဲ့ Modifier ပြောင်းပါ'), p(
        'Use the as clause to rename keys. Use -? to remove optional and -readonly to make a field writable. These changes affect the type checked by the compiler.',
        'Key နာမည် ပြောင်းဖို့ as clause သုံးပါ။ Optional ကို ဖယ်ဖို့ -?၊ ရေးလို့ရအောင် readonly ဖယ်ဖို့ -readonly သုံးပါ။ ဒီပြောင်းလဲမှုတွေက compiler စစ်တဲ့ type အပေါ် သက်ရောက်ပါတယ်။',
      ), `type Getters<T> = {
  [Key in Extract<keyof T, string> as \`get\${Capitalize<Key>}\`]: () => T[Key];
};

type ProductGetters = Getters<Product>;
// { getName: () => string; getQuantity: () => number }`),
    ], [
      ['TypeScript Handbook · Mapped types', 'https://www.typescriptlang.org/docs/handbook/2/mapped-types.html'],
      ['TypeScript Handbook · Indexed access types', 'https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html'],
    ]),
    page('conditional-types', p('Conditional types and infer', 'Conditional Types နဲ့ infer'), p(
      'Choose a result type based on another type. Use infer to name a type found inside a matching structure.',
      'ပေးထားတဲ့ type ပေါ်မူတည်ပြီး result type ရွေးပါ။ ကိုက်ညီတဲ့ structure ထဲက type ကို နာမည်ပေးဖို့ infer သုံးပါ။',
    ), [
      part('infer', p('Read the item type of an array', 'Array ထဲက Item Type ယူပါ'), p(
        'The conditional reads like an if statement for types. If T matches a readonly array, infer Item names the type of the elements. Otherwise the result is T.',
        'Conditional type ကို type အတွက် if statement လို ဖတ်နိုင်ပါတယ်။ T က readonly array နဲ့ ကိုက်ရင် infer Item က element တွေရဲ့ type ကို နာမည်ပေးပါတယ်။ မကိုက်ရင် T ကိုပဲ result အဖြစ် ပြန်ပေးပါတယ်။',
      ), `type ItemOf<T> = T extends readonly (infer Item)[] ? Item : T;

type Name = ItemOf<readonly string[]>; // string
type Existing = ItemOf<number>; // number`),
      part('unions', p('Choose how to handle unions', 'Union ကို ဘယ်လို ကိုင်တွယ်မလဲ ရွေးပါ'), p(
        'When the checked side is a plain type parameter, the condition runs for each member of the union. Wrap both sides in square brackets when you want to check the union as a whole.',
        'စစ်မယ့်ဘက်က type parameter သက်သက် ဖြစ်ရင် union ထဲက member တစ်ခုချင်းစီကို စစ်ပါတယ်။ Union တစ်ခုလုံးကို တစ်ခါတည်း စစ်ချင်ရင် နှစ်ဘက်လုံးကို square brackets နဲ့ ခတ်ပါ။',
      ), `type ToArrays<T> = T extends unknown ? T[] : never;
type ToArray<T> = [T] extends [unknown] ? T[] : never;

type Separate = ToArrays<string | number>; // string[] | number[]
type Mixed = ToArray<string | number>; // (string | number)[]`),
    ], [
      ['TypeScript Handbook · Conditional types', 'https://www.typescriptlang.org/docs/handbook/2/conditional-types.html'],
    ]),
    page('declaration-files', p('Declaration files for JavaScript', 'JavaScript အတွက် Declaration Files'), p(
      'Use a .d.ts file to describe the types of JavaScript that already exists.',
      'ရှိပြီးသား JavaScript code ရဲ့ types တွေကို ဖော်ပြဖို့ .d.ts ဖိုင် သုံးပါ။',
    ), [
      part('pair', p('Match the JavaScript exports', 'JavaScript Exports နဲ့ ကိုက်ညီအောင် ရေးပါ'), p(
        'Keep declarations next to the JavaScript they describe. The example package has a named JavaScript export, so its declaration has the same named export. Declarations describe an implementation. The JavaScript still does the work at runtime.',
        'ဖော်ပြမယ့် JavaScript ဖိုင်နားမှာ declaration ထားပါ။ နမူနာ package မှာ named export သုံးထားလို့ declaration မှာလည်း အဲဒီ export နာမည်ကို သုံးပါတယ်။ Declaration က implementation ကို ဖော်ပြပါတယ်။ Runtime မှာ JavaScript ကပဲ အလုပ်လုပ်ပါတယ်။',
      ), `// index.js in an ESM package
export function formatSku(id) {
  return "SKU-" + String(id).padStart(3, "0");
}

// index.d.ts
export function formatSku(id: number): string;`),
      part('publish', p('Point consumers to the types', 'အသုံးပြုသူဆီ Types ရောက်အောင် သတ်မှတ်ပါ'), p(
        'For a simple ESM package, point main at the JavaScript entry and types at its declaration. Include both when publishing. If a package uses an exports map, give the appropriate entry a types condition. Check a small consumer project with strict checking.',
        'ရိုးရိုး ESM package မှာ main က JavaScript entry ကို ညွှန်ပြီး types က declaration ကို ညွှန်ပါ။ Publish လုပ်ရင် နှစ်ဖိုင်လုံး ထည့်ပါ။ exports map သုံးတဲ့ package မှာ သက်ဆိုင်ရာ entry ကို types condition ပေးပါ။ Package သုံးမယ့် project အသေးတစ်ခုမှာ strict checking နဲ့ စမ်းပါ။',
      ), `{
  "type": "module",
  "main": "./index.js",
  "types": "./index.d.ts",
  "files": ["index.js", "index.d.ts"]
}`),
    ], [
      ['TypeScript Handbook · Type declarations', 'https://www.typescriptlang.org/docs/handbook/2/type-declarations.html'],
      ['TypeScript Handbook · Publishing declarations', 'https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html'],
      ['TypeScript Handbook · Modules reference', 'https://www.typescriptlang.org/docs/handbook/modules/reference.html'],
    ]),
  ],
  database: [
    page('normalization', p('Design tables with normalization', 'Normalization နဲ့ Tables ဆောက်ပါ'), p(
      'Store each kind of fact in the table it belongs to. Join related tables when you need the full record.',
      'အချက်အလက် အမျိုးအစားတစ်ခုစီကို သက်ဆိုင်ရာ table မှာ သိမ်းပါ။ Record အပြည့်လိုရင် ဆက်စပ်နေတဲ့ tables တွေကို join ပါ။',
    ), [
      part('separate', p('Move repeating values into rows', 'ထပ်နေတဲ့ Values တွေကို Rows ခွဲပါ'), p(
        'For order items, use one row per product per order. This keeps the design from needing item_1 and item_2 columns. With a key made of order_id and product_id, quantity belongs to the whole key. Product name depends on product_id alone and belongs in products.',
        'Order တစ်ခုရဲ့ ပစ္စည်းတွေကို order နဲ့ product တစ်စုံစီအတွက် row တစ်ခုထားပါ။ ဒါဆို item_1 နဲ့ item_2 လို column တွေ ထပ်ထည့်စရာ မလိုပါဘူး။ order_id နဲ့ product_id ကို တွဲပြီး key လုပ်ရင် quantity က key နှစ်ခုလုံးပေါ် မူတည်ပါတယ်။ Product name က product_id တစ်ခုပေါ်ပဲ မူတည်လို့ products ထဲမှာ သိမ်းပါ။',
      ), `CREATE TABLE products (
  id integer PRIMARY KEY,
  name text NOT NULL
);
CREATE TABLE orders (id integer PRIMARY KEY);
CREATE TABLE order_items (
  order_id integer REFERENCES orders (id),
  product_id integer REFERENCES products (id),
  quantity integer NOT NULL CHECK (quantity > 0),
  unit_price numeric(10, 2) NOT NULL CHECK (unit_price >= 0),
  PRIMARY KEY (order_id, product_id)
);`),
      part('dependencies', p('Follow what each field depends on', 'Field တစ်ခုချင်းက ဘာပေါ် မှီလဲ စစ်ပါ'), p(
        'First normal form removes repeating groups. In second normal form, a non-key field cannot depend on just part of a candidate key. In a typical third normal form design, non-key facts do not depend on other non-key facts. For example, store category_name with category_id in categories. The sale’s unit_price stays on order_items because changing today’s price should preserve old receipts.',
        'First normal form က ထပ်နေတဲ့ column အုပ်စုတွေကို ဖယ်ပါတယ်။ Second normal form မှာ non-key field တစ်ခုက ပေါင်းထားတဲ့ key ရဲ့ အစိတ်အပိုင်းတစ်ခုပေါ်ပဲ မူတည်တာမျိုး မရှိပါဘူး။ Third normal form မှာ non-key fact တစ်ခုက တခြား non-key fact ပေါ် ထပ်မမှီအောင် စီပါတယ်။ ဥပမာ category_name ကို category_id နဲ့အတူ categories ထဲထားပါ။ ရောင်းခဲ့တဲ့ unit_price ကိုတော့ order_items မှာ သိမ်းတော့ ဒီနေ့ဈေးပြောင်းရင်လည်း ပြေစာအဟောင်း မပြောင်းပါဘူး။',
      )),
    ], [
      ['PostgreSQL 19 · Constraints', 'https://www.postgresql.org/docs/19/ddl-constraints.html'],
      ['Microsoft Learn · Database normalization', 'https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description'],
    ]),
    page('transaction-isolation', p('Transaction isolation and concurrent updates', 'Transaction Isolation နဲ့ တစ်ပြိုင်နက် Update များ'), p(
      'Choose what a transaction can see while other transactions read or change the same database.',
      'တခြား transaction တွေက database တစ်ခုတည်းကို ဖတ်တာ၊ ပြောင်းတာ လုပ်နေချိန် ကိုယ့် transaction က ဘာတွေမြင်ရမလဲ ရွေးပါ။',
    ), [
      part('levels', p('Choose an isolation level', 'Isolation Level ရွေးပါ'), p(
        'Read Committed is the PostgreSQL default. Each statement sees a fresh snapshot of committed data. Repeatable Read keeps one snapshot for ordinary reads after the first data statement. Serializable adds checks so committed transactions behave as if they ran in a serial order. PostgreSQL treats Read Uncommitted as Read Committed.',
        'Read Committed က PostgreSQL ရဲ့ default ပါ။ Statement တစ်ခုစီက အဲဒီအချိန်ထိ commit လုပ်ထားတဲ့ data ကို မြင်ရပါတယ်။ Repeatable Read က ပထမ data statement နောက်ပိုင်း ဖတ်တဲ့အခါ snapshot တစ်ခုတည်း သုံးပါတယ်။ Serializable က အောင်မြင်ပြီး commit ဖြစ်တဲ့ transaction တွေ တစ်ခုပြီးတစ်ခု run သလို ရလဒ်ရဖို့ ထပ်စစ်ပါတယ်။ PostgreSQL က Read Uncommitted ကို Read Committed အတိုင်း ကိုင်တွယ်ပါတယ်။',
      ), `BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT id, quantity FROM products WHERE id = 1;
-- Commit a quantity change in a second psql session.
SELECT id, quantity FROM products WHERE id = 1;
COMMIT;`),
      part('stock', p('Update stock in one statement', 'Stock ကို Statement တစ်ခုတည်းနဲ့ ပြင်ပါ'), p(
        'In Café Inventory, an absolute quantity is set by the admin. For a sale that removes two items, use a relative update with a quantity check in the same statement. Zero returned rows can mean there is too little stock or the product does not exist. If a transaction fails with SQLSTATE 40001, roll back and retry the whole transaction with a bounded retry policy.',
        'Café Inventory မှာ admin က quantity အတိအကျ ထည့်ပါတယ်။ နှစ်ခုရောင်းလို့ stock နှစ်ခု လျှော့မယ်ဆိုရင် quantity လောက်လား စစ်တာနဲ့ လျှော့တာကို statement တစ်ခုတည်းမှာ လုပ်ပါ။ Row မပြန်လာရင် stock မလောက်တာ ဒါမှမဟုတ် product မရှိတာ ဖြစ်နိုင်ပါတယ်။ SQLSTATE 40001 နဲ့ transaction ပျက်ရင် rollback လုပ်ပြီး အကြိမ်ရေ ကန့်သတ်ထားတဲ့ retry နဲ့ transaction အစကနေ ပြန် run ပါ။',
      ), `UPDATE products
SET quantity = quantity - 2
WHERE id = 1 AND quantity >= 2
RETURNING id, quantity;`),
    ], [
      ['PostgreSQL 19 · Transaction isolation', 'https://www.postgresql.org/docs/19/transaction-iso.html'],
      ['PostgreSQL 19 · UPDATE', 'https://www.postgresql.org/docs/19/sql-update.html'],
    ]),
    page('backup-and-restore', p('Back up and restore with PostgreSQL tools', 'PostgreSQL Tools နဲ့ Backup၊ Restore လုပ်ပါ'), p(
      'Create a logical backup of one database and prove you can restore it to a separate database.',
      'Database တစ်ခုကို logical backup ယူပြီး သီးသန့် database ထဲ ပြန်သွင်းလို့ရတာ စစ်ပါ။',
    ), [
      part('dump', p('Create a custom-format archive', 'Custom Format Backup ဖန်တီးပါ'), p(
        'Use pg_dump with -Fc. The source account needs read access to the objects and data being backed up. The pg_dump client must be at least as new as the server’s major version. Keep backup files private because they contain database contents.',
        'pg_dump ကို -Fc နဲ့ သုံးပါ။ Backup ယူမယ့် objects နဲ့ data ကို ဖတ်ခွင့်ရှိတဲ့ account သုံးပါ။ pg_dump client ရဲ့ major version က server နဲ့ တူရမယ် ဒါမှမဟုတ် ပိုအသစ်ဖြစ်ရပါမယ်။ Backup ဖိုင်ထဲမှာ database အချက်အလက် ပါလို့ သီးသန့် သိမ်းပါ။',
      ), `pg_dump -h localhost -U cafe -Fc -f cafe.dump cafe_inventory
pg_restore --list cafe.dump`),
      part('restore', p('Restore into a fresh database', 'Database အသစ်ထဲ Restore လုပ်ပါ'), p(
        'Create an empty test database with an account allowed to create databases. If another account owns the test database, connect as that account to restore. For this restore check, --no-owner and --no-privileges skip restoring the original owners and grants. Compare key table counts and check an app read. Plan a separate backup of roles and other cluster-wide objects, and use your host’s point-in-time recovery tools if you need replay to a particular time.',
        'Database ဆောက်ခွင့်ရှိတဲ့ account နဲ့ test database အလွတ် ဆောက်ပါ။ Database owner က တခြား account ဖြစ်ရင် အဲဒီ account နဲ့ restore လုပ်ပါ။ ဒီ restore စမ်းသပ်မှုမှာ --no-owner နဲ့ --no-privileges က မူလ owners နဲ့ grants ကို ပြန်မထည့်ပါဘူး။ အရေးကြီးတဲ့ table တွေရဲ့ row count တိုက်ပြီး app ကနေ data ဖတ်စမ်းပါ။ Roles နဲ့ cluster တစ်ခုလုံးသုံး objects တွေအတွက် သီးသန့် backup စီစဉ်ပါ။ သတ်မှတ်ထားတဲ့ အချိန်တစ်ခုဆီ ပြန်သွားဖို့ လိုရင် host ရဲ့ point-in-time recovery tools သုံးပါ။',
      ), `createdb -h localhost -U postgres -O cafe cafe_inventory_restore
pg_restore -h localhost -U cafe -d cafe_inventory_restore --exit-on-error --no-owner --no-privileges cafe.dump
psql -h localhost -U cafe -d cafe_inventory_restore -c "SELECT count(*) FROM products;"`),
    ], [
      ['PostgreSQL 19 · pg_dump', 'https://www.postgresql.org/docs/19/app-pgdump.html'],
      ['PostgreSQL 19 · pg_restore', 'https://www.postgresql.org/docs/19/app-pgrestore.html'],
      ['PostgreSQL 19 · SQL dumps', 'https://www.postgresql.org/docs/19/backup-dump.html'],
    ]),
  ],
};
