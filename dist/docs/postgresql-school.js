import { p, page, part } from './content.js';

const pg = 'https://www.postgresql.org/docs/19/';
const ref = (name, path) => [name, pg + path + '.html'];

export const schoolSchema = `CREATE TABLE IF NOT EXISTS students (
  id integer PRIMARY KEY,
  name text NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
  id integer PRIMARY KEY,
  title text NOT NULL,
  fee numeric(10, 2) NOT NULL CHECK (fee >= 0)
);

CREATE TABLE IF NOT EXISTS enrollments (
  student_id integer REFERENCES students(id),
  course_id integer REFERENCES courses(id),
  enrolled_on date NOT NULL,
  PRIMARY KEY (student_id, course_id)
);

INSERT INTO students (id, name)
VALUES (1, 'Aye'), (2, 'Min'), (3, 'Su')
ON CONFLICT (id) DO NOTHING;

INSERT INTO courses (id, title, fee)
VALUES (1, 'SQL Basics', 30.00), (2, 'Web Development', 25.00),
       (3, 'Computer Fundamentals', 20.00)
ON CONFLICT (id) DO NOTHING;

INSERT INTO enrollments (student_id, course_id, enrolled_on)
VALUES (1, 1, DATE '2026-01-05'), (2, 1, DATE '2026-01-06'),
       (1, 2, DATE '2026-01-07')
ON CONFLICT (student_id, course_id) DO NOTHING;`;

export const schoolSeatSetup = `CREATE TABLE IF NOT EXISTS course_seats_demo (
  course_id integer PRIMARY KEY REFERENCES courses(id),
  seats_open integer NOT NULL CHECK (seats_open >= 0)
);

INSERT INTO course_seats_demo (course_id, seats_open)
VALUES (1, 10)
ON CONFLICT (course_id) DO UPDATE SET seats_open = EXCLUDED.seats_open;`;

export const schoolSchemaSection = {
  ...part('schema', p('Create students, courses, and enrollments', 'Students၊ Courses နဲ့ Enrollments Tables ဆောက်ခြင်း'),
    p(
      'Run this in learning_db. Each enrollment links one student to one course. A student can take several courses, and a course can have several students. Create the two parent tables before creating enrollments. Run the whole example if you already have learning_db from an earlier lesson.',
      'learning_db ထဲမှာ run ပါ။ Enrollment row တစ်ကြောင်းက student တစ်ယောက်နဲ့ course တစ်ခုကို ချိတ်ပါတယ်။ Student တစ်ယောက်က course အများကြီး တက်နိုင်သလို course တစ်ခုမှာလည်း student အများကြီး ရှိနိုင်တယ်။ Parent table နှစ်ခုကို အရင်ဆောက်ပြီးမှ enrollments ဆောက်ပါ။ အရင်သင်ခန်းစာက learning_db ရှိပြီးသားဆိုရင်လည်း ဒီ block တစ်ခုလုံး run လို့ရပါတယ်။'
    ), schoolSchema),
  terms: [
    ['students / courses', p('The two parent tables store student names and course details. Each table uses its own ID as the primary key.', 'Parent table နှစ်ခုက student နာမည်နဲ့ course အချက်အလက်တွေကို သိမ်းတယ်။ Table တစ်ခုစီရဲ့ ID က သူ့ primary key ပါ။')],
    ['enrollments / REFERENCES', p('The foreign keys require both IDs to exist. The two-column primary key prevents a student from enrolling in the same course twice.', 'Foreign key နှစ်ခုကြောင့် ID နှစ်ခုလုံး သက်ဆိုင်ရာ table မှာ ရှိရတယ်။ Column နှစ်ခုပေါင်းထားတဲ့ primary key က student တစ်ယောက် course တစ်ခုတည်းမှာ နှစ်ခါစာရင်းသွင်းတာကို တားတယ်။')],
    ['IF NOT EXISTS / ON CONFLICT', p('Running the example again keeps the existing tables and skips seed rows whose keys are already present.', 'ထပ် run ရင် ရှိပြီးသား table တွေကို ဆက်သုံးပြီး key တူတဲ့ နမူနာ row တွေကို ကျော်သွားတယ်။')],
  ],
  expected: p('A fresh example has three students, three courses, and three enrollments. Aye takes two courses and Computer Fundamentals has no enrollments.', 'နမူနာအသစ်မှာ student သုံးယောက်၊ course သုံးခုနဲ့ enrollment သုံးကြောင်း ရှိမယ်။ Aye က course နှစ်ခု တက်ပြီး Computer Fundamentals မှာ စာရင်းသွင်းသူ မရှိသေးဘူး။'),
};

export const schoolQueries = page('queries', p('Queries, joins, and groups', 'Queries၊ Joins နဲ့ Groups'),
  p('Use the students, courses, and enrollments tables from Setup. Run each query independently to see how it changes the result.', 'Setup မှာ ဆောက်ထားတဲ့ students၊ courses နဲ့ enrollments tables ကို သုံးပါ။ Query တစ်ခုချင်းစီကို သီးသန့် run ပြီး ရလဒ် ဘယ်လိုကွာလဲ ကြည့်ပါ။'),
  [
    part('filter', p('Filter rows with WHERE', 'WHERE နဲ့ Row စစ်ခြင်း'),
      p('WHERE keeps rows that meet the condition. This example selects courses with a fee of 25.00 or more. In the sample data, SQL Basics and Web Development match.', 'WHERE က သတ်မှတ်ချက်နဲ့ကိုက်တဲ့ row တွေကို ရွေးတယ်။ ဒီနမူနာက သင်တန်းကြေး 25.00 နဲ့အထက် course တွေကို ရွေးလို့ SQL Basics နဲ့ Web Development ကို ရမယ်။'),
      'SELECT title, fee\nFROM courses\nWHERE fee >= 25.00\nORDER BY id;'),
    part('order-by', p('Sort rows with ORDER BY', 'ORDER BY နဲ့ အစဉ်လိုက်စီခြင်း'),
      p('DESC shows the highest fee first. For equal fees, id ASC puts the lower ID first.', 'DESC က သင်တန်းကြေး ပိုမြင့်တာကို အရင်ပြတယ်။ သင်တန်းကြေး တူရင် id ASC က ID ပိုငယ်တာကို အရင်ပြတယ်။'),
      'SELECT title, fee\nFROM courses\nORDER BY fee DESC, id ASC;'),
    part('limit', p('Return the first row with LIMIT', 'LIMIT နဲ့ ပထမ Row ထုတ်ခြင်း'),
      p('LIMIT 1 returns at most one row. ORDER BY makes the first row predictable. SQL Basics comes first in this sample.', 'LIMIT 1 က အများဆုံး တစ်ကြောင်းပဲ ထုတ်တယ်။ ORDER BY ပါလို့ ဘယ် row အရင်လာမလဲ သိနိုင်တယ်။ ဒီနမူနာမှာ SQL Basics အရင်လာတယ်။'),
      'SELECT title, fee\nFROM courses\nORDER BY fee DESC, id ASC\nLIMIT 1;'),
    part('group-by', p('Count enrollments with GROUP BY', 'GROUP BY နဲ့ စာရင်းသွင်းသူ ရေတွက်ခြင်း'),
      p('Filtering and ordering help us find individual rows. To answer how many students are enrolled in each course, we have to combine rows by course first. GROUP BY makes one group for each course ID present in enrollments. COUNT(*) counts the enrolled students in each group.', 'WHERE က row တစ်ကြောင်းချင်းစီကို စစ်ထုတ်ပေးပါတယ်။ သင်တန်းအလိုက် စာရင်းသွင်းသူဦးရေ တွက်ဖို့တော့ ရွေးထားတဲ့ row တွေကို သင်တန်းအလိုက် စုရပါတယ်။ GROUP BY က enrollments ထဲမှာရှိတဲ့ course_id တစ်မျိုးစီကို အုပ်စုတစ်ခုစီ ခွဲတယ်။ COUNT(*) က အုပ်စုတစ်ခုစီမှာ စာရင်းသွင်းထားတဲ့ student တွေကို ရေတွက်တယ်။'),
      'SELECT course_id, COUNT(*) AS student_count\nFROM enrollments\nGROUP BY course_id\nORDER BY course_id;'),
    part('having', p('Filter grouped results with HAVING', 'HAVING နဲ့ အုပ်စုရလဒ် စစ်ခြင်း'),
      p('HAVING checks each group’s count after grouping. This query keeps courses with at least two students. WHERE is applied before groups are formed.', 'HAVING က အုပ်စုခွဲပြီးမှ အုပ်စုတစ်ခုချင်းရဲ့ count ကို စစ်တယ်။ ဒီ query က student နှစ်ယောက်နဲ့အထက် ရှိတဲ့ course တွေကို ရွေးတယ်။ WHERE ကတော့ အုပ်စုမခွဲခင် row တွေကို စစ်တယ်။'),
      'SELECT course_id, COUNT(*) AS student_count\nFROM enrollments\nGROUP BY course_id\nHAVING COUNT(*) >= 2\nORDER BY course_id;'),
    part('join', p('Keep courses with zero enrollments', 'စာရင်းသွင်းသူ မရှိတဲ့ Course တွေပါ ပြခြင်း'),
      p('Counting enrollments by course ID tells us the total for each ID that appears in the enrollment table. To include course names and courses with zero enrollments, start from the course table. LEFT JOIN keeps every course. COUNT(e.student_id) counts matching students and skips the NULLs from an unmatched course. Computer Fundamentals therefore shows 0. An INNER JOIN would return courses with a matching enrollment.', 'သင်တန်း ID အလိုက် တွက်ထားတဲ့ လူဦးရေကို သင်တန်းနာမည်နဲ့ တွဲပြဖို့ courses နဲ့ enrollments ကို ချိတ်ဖတ်ရပါတယ်။ LEFT JOIN က course အားလုံးကို ပြတယ်။ COUNT(e.student_id) က ကိုက်ညီတဲ့ student တွေကို ရေတွက်ပြီး enrollment မရှိတဲ့ course ရဲ့ NULL ကို ကျော်တယ်။ ဒါကြောင့် Computer Fundamentals မှာ 0 ပြမယ်။ INNER JOIN သုံးရင် enrollment ကိုက်ညီတဲ့ course တွေပဲ ပြမယ်။'),
      'SELECT c.title, COUNT(e.student_id) AS student_count\nFROM courses AS c\nLEFT JOIN enrollments AS e ON e.course_id = c.id\nGROUP BY c.id, c.title\nORDER BY student_count DESC, c.id;'),
  ], [ref('Querying a table', 'tutorial-select'), ref('Joins', 'tutorial-join'), ref('Table expressions', 'queries-table-expressions'), ref('Sorting and limiting rows', 'queries-limit')]);

export const schoolTableChanges = page('schema-and-access',
  p('Change tables, manage access, and create views', 'Table ပြင်ခြင်း၊ Access သတ်မှတ်ခြင်းနဲ့ View ဆောက်ခြင်း'),
  p('Use the school tables from Setup in learning_db. Each example runs in its own transaction and rolls back at the end so you can repeat it.', 'learning_db ထဲမှာ Setup က school tables တွေကို သုံးပါ။ နမူနာတစ်ခုစီကို transaction သီးသန့်နဲ့ run ပြီး အဆုံးမှာ rollback လုပ်ထားလို့ ထပ်စမ်းလို့ရတယ်။'),
  [
    part('alter-table', p('Add a column with ALTER TABLE', 'ALTER TABLE နဲ့ Column ထည့်ခြင်း'),
      p('Add room_code to courses, fill it for SQL Basics, and read the result. ROLLBACK returns the table to its original structure.', 'courses ထဲကို room_code ထည့်ပြီး SQL Basics အတွက် အခန်းနံပါတ် ဖြည့်ကြည့်ပါ။ ပြီးရင် ရလဒ်ကို ပြန်ဖတ်ပါ။ ROLLBACK က table ကို မူလပုံစံ ပြန်ရောက်စေတယ်။'),
      "BEGIN;\nALTER TABLE courses ADD COLUMN room_code text;\nUPDATE courses SET room_code = 'A-01' WHERE id = 1;\nSELECT title, room_code FROM courses ORDER BY id;\nROLLBACK;"),
    part('grant-revoke', p('Grant and revoke read access', 'GRANT နဲ့ REVOKE သုံးပြီး ဖတ်ခွင့် ပေးခြင်းနဲ့ ပြန်ရုပ်ခြင်း'),
      p('Run as the practice table owner with permission to create roles. The temporary role has no login. With default table permissions, the privilege check returns true after GRANT and false after REVOKE. ROLLBACK removes the temporary role too.', 'Role ဆောက်ခွင့်ရှိတဲ့ စမ်းသပ် table owner နဲ့ run ပါ။ ယာယီ role မှာ login ခွင့် မပါဘူး။ Table ရဲ့ ပုံမှန် permissions အတိုင်းဆို GRANT ပြီးရင် true၊ REVOKE ပြီးရင် false ပြမယ်။ ROLLBACK က ယာယီ role ကိုပါ ပြန်ဖယ်ပေးတယ်။'),
      "BEGIN;\nCREATE ROLE lesson_course_reader NOLOGIN;\nGRANT USAGE ON SCHEMA public TO lesson_course_reader;\nGRANT SELECT ON TABLE public.courses TO lesson_course_reader;\nSELECT has_table_privilege('lesson_course_reader', 'public.courses', 'SELECT');\nREVOKE SELECT ON TABLE public.courses FROM lesson_course_reader;\nSELECT has_table_privilege('lesson_course_reader', 'public.courses', 'SELECT');\nROLLBACK;"),
    part('create-view', p('Read course enrollment totals through a view', 'CREATE VIEW နဲ့ Course အလိုက် စာရင်းသွင်းသူ အရေအတွက် ဖတ်ခြင်း'),
      p('A view gives a query a reusable name. This view reads the underlying tables each time you query it. It includes courses with no enrollments.', 'View က query တစ်ခုကို နာမည်ပေးပြီး ပြန်သုံးလို့ရစေတယ်။ ဒီ view ကို query လုပ်တိုင်း မူရင်း tables က data ကို ဖတ်တယ်။ စာရင်းသွင်းသူ မရှိတဲ့ course တွေပါ ပြတယ်။'),
      'BEGIN;\nCREATE VIEW lesson_course_enrollments AS\nSELECT c.id, c.title, COUNT(e.student_id) AS student_count\nFROM courses AS c\nLEFT JOIN enrollments AS e ON e.course_id = c.id\nGROUP BY c.id, c.title;\n\nSELECT title, student_count FROM lesson_course_enrollments\nORDER BY student_count DESC, id;\nROLLBACK;'),
  ],
  [ref('ALTER TABLE', 'sql-altertable'), ref('GRANT', 'sql-grant'), ref('REVOKE', 'sql-revoke'), ref('CREATE VIEW', 'sql-createview')]);

