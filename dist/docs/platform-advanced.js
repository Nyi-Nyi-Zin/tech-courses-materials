import { p, page, part, snippet } from './content.js';
import { schoolSeatSetup } from './postgresql-school.js';

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
      part('separate', p('Read a normalized enrollment list', 'Normalization လုပ်ထားတဲ့ Enrollment စာရင်း ဖတ်ခြင်း'), p(
        'Run this in learning_db after Setup. Each enrollment stores one student ID and one course ID. Joining with students and courses shows the names and titles. Aye can appear twice in the report while their name is stored once in students.',
        'Setup ပြီးရင် learning_db ထဲမှာ run ပါ။ Enrollment တစ်ကြောင်းမှာ student ID တစ်ခုနဲ့ course ID တစ်ခုပဲ သိမ်းတယ်။ နာမည်နဲ့ သင်တန်းခေါင်းစဉ်ကို ကြည့်ဖို့ students နဲ့ courses ကို JOIN လုပ်တယ်။ အစီရင်ခံစာထဲမှာ Aye နှစ်ကြောင်းပေါ်နိုင်ပြီး students ထဲမှာတော့ နာမည်ကို တစ်ကြောင်းပဲ သိမ်းတယ်။',
      ), `SELECT s.name AS student, c.title AS course, e.enrolled_on
FROM enrollments AS e
JOIN students AS s ON s.id = e.student_id
JOIN courses AS c ON c.id = e.course_id
ORDER BY s.id, c.id;`),
      snippet('dependencies', p('Follow what each field depends on', 'Field တစ်ခုချင်းက ဘာပေါ် မှီလဲ စစ်ပါ'), p(
        'For first normal form, store each registration in its own row instead of adding course_1 and course_2 fields to the student record. For second normal form, enrolled_on depends on the whole enrollment key (student_id, course_id). The title depends only on course_id, so it belongs in courses. For third normal form, if courses have a department_id, store department names in departments because department_id determines the department name.',
        'First normal form မှာ student record ထဲ course_1၊ course_2 လို column တွေ ထပ်ထည့်မယ့်အစား enrollment တစ်ခုစီကို row တစ်ကြောင်းစီ သိမ်းပါ။ Second normal form မှာ enrolled_on က student_id နဲ့ course_id နှစ်ခုလုံးကို မှီတယ်။ Course title က course_id တစ်ခုတည်းကို မှီလို့ courses ထဲမှာ သိမ်းတယ်။ Third normal form မှာ courses ထဲ department_id ပါလာရင် department နာမည်ကို departments ထဲမှာ သိမ်းပါ။ Department နာမည်ကို department_id က ဆုံးဖြတ်လို့ပါ။',
      ), `CREATE TABLE departments (
  id integer PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE courses (
  id integer PRIMARY KEY,
  title text NOT NULL,
  department_id integer REFERENCES departments(id)
);

CREATE TABLE enrollments (
  student_id integer REFERENCES students(id),
  course_id integer REFERENCES courses(id),
  enrolled_on date NOT NULL,
  PRIMARY KEY (student_id, course_id)
);`),
    ], [
      ['PostgreSQL 19 · Constraints', 'https://www.postgresql.org/docs/19/ddl-constraints.html'],
      ['Microsoft Learn · Database normalization', 'https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description'],
    ]),
    page('transaction-isolation', p('Transaction isolation and concurrent updates', 'Transaction Isolation နဲ့ တစ်ပြိုင်နက် Update များ'), p(
      'The previous lesson used one session to see what happens when changes are rolled back. With two sessions connected, we can see what one transaction reads while the other changes the data. Choose what a transaction can see while other transactions read or change the same database.',
      'Database တစ်ခုတည်းမှာ transaction နှစ်ခု တစ်ပြိုင်နက် လုပ်ဆောင်တဲ့အခါ တစ်ဖက်က ပြင်ထားတဲ့ data ကို ကျန်တစ်ဖက်က ဘယ်အချိန်မှာ မြင်ရလဲဆိုတာ isolation level ပေါ်မှာ မူတည်ပါတယ်။ ဒီနမူနာမှာ psql session နှစ်ခု သုံးထားပါတယ်။',
    ), [
      part('seat-setup', p('Create the course seats example', 'Course နေရာလွတ် နမူနာ ဆောက်ခြင်း'), p(
        'Complete Setup first, then connect two psql sessions to learning_db. Run this once in Session A before starting the transaction below. It sets the demo course to 10 open seats. Running it again resets the demo.',
        'Setup ပြီးရင် psql session နှစ်ခုကို learning_db ဆီ ချိတ်ပါ။ အောက်က transaction မစခင် ဒီ block ကို Session A မှာ တစ်ခါ run ပါ။ နမူနာ course အတွက် နေရာလွတ် 10 နေရာ သတ်မှတ်ပေးတယ်။ ထပ် run ရင် နမူနာကို အစကနေ ပြန်ထားပေးတယ်။',
      ), schoolSeatSetup),
      part('levels', p('Session A · Start Repeatable Read', 'Session A · Repeatable Read စတင်ခြင်း'), p(
        'Read Committed is the PostgreSQL default and takes a fresh snapshot for each statement. Repeatable Read keeps the snapshot established by the first query or data-modification statement. Run the following in Session A. It reads 10. Keep the transaction open and switch to Session B.',
        'Read Committed က PostgreSQL ရဲ့ default ဖြစ်ပြီး statement တစ်ခုချင်းစီအတွက် snapshot အသစ် ယူတယ်။ Repeatable Read က ပထမ query သို့မဟုတ် data ပြောင်းတဲ့ statement ယူထားတဲ့ snapshot ကို ဆက်သုံးတယ်။ ဒီ block ကို Session A မှာ run ပါ။ 10 ကို မြင်ရမယ်။ Transaction ကို ဖွင့်ထားပြီး Session B ဆီ ပြောင်းပါ။',
      ), `BEGIN ISOLATION LEVEL REPEATABLE READ;
SELECT seats_open FROM course_seats_demo WHERE course_id = 1;`),
      part('session-b', p('Session B · Change the number of seats', 'Session B · နေရာလွတ် အရေအတွက် ပြောင်းခြင်း'), p(
        'Run this in Session B and commit there. The new value is 15. Switch back to Session A when COMMIT succeeds.',
        'ဒီ block ကို Session B မှာ run ပြီး commit လုပ်ပါ။ တန်ဖိုးအသစ်က 15 ပါ။ COMMIT အောင်မြင်ရင် Session A ဆီ ပြန်သွားပါ။',
      ), `BEGIN;
UPDATE course_seats_demo SET seats_open = 15 WHERE course_id = 1;
COMMIT;`),
      part('session-a-again', p('Session A · Compare before and after COMMIT', 'Session A · COMMIT မတိုင်ခင်နဲ့ ပြီးနောက် တိုက်ကြည့်ခြင်း'), p(
        'The first SELECT still returns 10 because Session A is reading its original snapshot. The SELECT after COMMIT returns 15.',
        'Session A က မူလ snapshot ကို ဖတ်နေသေးလို့ ပထမ SELECT မှာ 10 ပဲ မြင်ရမယ်။ COMMIT ပြီးမှ ထပ်ဖတ်တဲ့ SELECT မှာ 15 ကို မြင်ရမယ်။',
      ), `SELECT seats_open FROM course_seats_demo WHERE course_id = 1;
COMMIT;
SELECT seats_open FROM course_seats_demo WHERE course_id = 1;`),
      part('stock', p('Reserve two seats in one statement', 'Statement တစ်ကြောင်းတည်းနဲ့ နေရာနှစ်ခု ယူခြင်း'), p(
        'The update reserves two seats only when two or more seats are available. Check RETURNING for the new total. Zero rows means no matching course has enough open seats. In the browser this example starts independently with 10 seats.',
        'နေရာလွတ် နှစ်ခုနဲ့အထက် ရှိမှ ဒီ update က နှစ်နေရာ ယူပေးတယ်။ RETURNING နဲ့ လက်ကျန်နေရာလွတ်ကို ကြည့်ပါ။ Row မရရင် ကိုက်ညီတဲ့ course မှာ နေရာနှစ်ခု မကျန်တာ သို့မဟုတ် course မရှိတာ ဖြစ်နိုင်တယ်။ Browser မှာ ဒီနမူနာကို သီးသန့် နေရာလွတ် 10 နေရာက စတယ်။',
      ), `UPDATE course_seats_demo
SET seats_open = seats_open - 2
WHERE course_id = 1 AND seats_open >= 2
RETURNING course_id, seats_open;`),
      snippet('serializable', p('Choose stricter isolation when needed', 'လိုအပ်ရင် ပိုတင်းကျပ်တဲ့ Isolation ကို ရွေးခြင်း'), p(
        'Serializable checks that successfully committed transactions behave as if they ran in some serial order. If a transaction fails with SQLSTATE 40001, roll it back and retry from the beginning. PostgreSQL treats Read Uncommitted as Read Committed.',
        'Serializable က commit အောင်မြင်တဲ့ transactions တွေ တစ်ခုစီ အစဉ်လိုက် လုပ်ထားသလို ရလဒ်တူမတူ စစ်ပေးတယ်။ SQLSTATE 40001 ဖြစ်ရင် transaction ကို rollback လုပ်ပြီး အစကနေ ပြန်စမ်းပါ။ PostgreSQL က Read Uncommitted ကို Read Committed အတိုင်း ကိုင်တွယ်တယ်။',
      ), `BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;

UPDATE course_seats_demo
SET seats_open = seats_open - 1
WHERE course_id = 1 AND seats_open > 0
RETURNING seats_open;

COMMIT;
-- On SQLSTATE 40001, roll back and retry the whole transaction.`),
    ], [
      ['PostgreSQL 19 · Transaction isolation', 'https://www.postgresql.org/docs/19/transaction-iso.html'],
      ['PostgreSQL 19 · UPDATE', 'https://www.postgresql.org/docs/19/sql-update.html'],
    ]),
    page('backup-and-restore', p('Back up and restore with PostgreSQL tools', 'PostgreSQL Tools နဲ့ Backup၊ Restore လုပ်ပါ'), p(
      'Create a logical backup of one database and prove you can restore it to a separate database.',
      'Database တစ်ခုကို logical backup ယူပြီး သီးသန့် database ထဲ ပြန်သွင်းလို့ရတာ စစ်ပါ။',
    ), [
      { ...part('dump', p('Create a custom-format archive', 'Custom Format Backup ဖန်တီးပါ'), p(
        'Use pg_dump with -Fc. After Setup, run this from the OS terminal. The source account needs read access to the objects and data being backed up. The pg_dump client must be at least as new as the server’s major version. Keep backup files private because they contain database contents.',
        'pg_dump ကို -Fc နဲ့ သုံးပါ။ Setup ပြီးရင် OS terminal မှာ run ပါ။ Backup ယူမယ့် objects နဲ့ data ကို ဖတ်ခွင့်ရှိတဲ့ account သုံးပါ။ pg_dump client ရဲ့ major version က server နဲ့ တူရမယ် ဒါမှမဟုတ် ပိုအသစ်ဖြစ်ရပါမယ်။ Backup ဖိုင်ထဲမှာ database အချက်အလက် ပါလို့ သီးသန့် သိမ်းပါ။',
      ), `pg_dump -h localhost -p 5432 -U postgres -Fc -f learning_db.dump learning_db
pg_restore --list learning_db.dump`),
        terms: [
          ['pg_dump -h localhost -p 5432 -U postgres -Fc -f learning_db.dump learning_db', p('Connect as postgres on localhost, read learning_db, and save a custom-format archive to learning_db.dump. The -f flag sets the output filename.', 'localhost မှာ postgres role နဲ့ ချိတ်ပြီး learning_db ကို ဖတ်တယ်။ -Fc နဲ့ custom-format archive ထုတ်ပြီး -f က သတ်မှတ်တဲ့ learning_db.dump ဖိုင်ထဲ သိမ်းတယ်။')],
          ['pg_restore --list learning_db.dump', p('List the objects in the archive without restoring them.', 'Archive ထဲက database objects စာရင်းကို ပြတယ်။ Database ထဲကို restore မလုပ်သေးပါဘူး။')],
        ],
      },
      { ...part('restore', p('Restore into a fresh database', 'Database အသစ်ထဲ Restore လုပ်ပါ'), p(
        'Create an empty test database with an account allowed to create databases. If another account owns the test database, connect as that account to restore. For this restore check, --no-owner and --no-privileges skip restoring the original owners and grants. Compare key table counts and check an app read. Plan a separate backup of roles and other cluster-wide objects, and use your host’s point-in-time recovery tools if you need replay to a particular time.',
        'Database ဆောက်ခွင့်ရှိတဲ့ account နဲ့ test database အလွတ် ဆောက်ပါ။ Database owner က တခြား account ဖြစ်ရင် အဲဒီ account နဲ့ restore လုပ်ပါ။ ဒီ restore စမ်းသပ်မှုမှာ --no-owner နဲ့ --no-privileges က မူလ owners နဲ့ grants ကို ပြန်မထည့်ပါဘူး။ အရေးကြီးတဲ့ table တွေရဲ့ row count တိုက်ပြီး app ကနေ data ဖတ်စမ်းပါ။ Roles နဲ့ cluster တစ်ခုလုံးသုံး objects တွေအတွက် သီးသန့် backup စီစဉ်ပါ။ သတ်မှတ်ထားတဲ့ အချိန်တစ်ခုဆီ ပြန်သွားဖို့ လိုရင် host ရဲ့ point-in-time recovery tools သုံးပါ။',
      ), `createdb -h localhost -p 5432 -U postgres learning_db_restore
pg_restore -h localhost -p 5432 -U postgres -d learning_db_restore --exit-on-error --no-owner --no-privileges learning_db.dump
psql -h localhost -p 5432 -U postgres -d learning_db_restore -c "SELECT count(*) FROM students;"`),
        terms: [
          ['createdb … learning_db_restore', p('Creates the empty target database as postgres.', 'Restore ပြန်သွင်းမယ့် database အလွတ်ကို postgres နဲ့ ဆောက်တယ်။')],
          ['pg_restore … -d learning_db_restore --exit-on-error', p('Restores learning_db.dump into the database selected by -d and stops on the first error.', 'learning_db.dump ကို -d နဲ့ ရွေးထားတဲ့ database ထဲ ပြန်သွင်းတယ်။ --exit-on-error ကြောင့် ပထမ error မှာ ရပ်တယ်။')],
          ['psql … -c "SELECT count(*) FROM students;"', p('Runs the quoted SQL once and exits. Compare the student row count with the source database.', 'Quote ထဲက SQL ကို တစ်ခါ run ပြီး terminal ဆီ ပြန်ထွက်တယ်။ students row အရေအတွက်ကို မူလ database နဲ့ တိုက်ကြည့်ပါ။')],
        ],
      },
    ], [
      ['PostgreSQL 19 · pg_dump', 'https://www.postgresql.org/docs/19/app-pgdump.html'],
      ['PostgreSQL 19 · pg_restore', 'https://www.postgresql.org/docs/19/app-pgrestore.html'],
      ['PostgreSQL 19 · SQL dumps', 'https://www.postgresql.org/docs/19/backup-dump.html'],
    ]),
  ],
};
