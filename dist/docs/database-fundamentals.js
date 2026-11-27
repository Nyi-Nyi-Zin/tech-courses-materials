import { p, page, part, snippet } from './content.js';
import { databaseSelection } from './database-learning.js?v=91';

const databaseDefinition = p(
  'A **database** is **an organized collection of data stored electronically so it can be easily accessed, managed, and updated**. Software called a **database management system (DBMS)** controls the database, handling security, backups, multi-user access, and queries.',
  '**Database** ဆိုတာ အလွယ်တကူ ရှာဖတ်၊ စီမံ၊ ပြင်ဆင်နိုင်အောင် **အီလက်ထရွန်နစ်စနစ်နဲ့ စနစ်တကျ စုစည်းသိမ်းထားတဲ့ အချက်အလက်တွေ** ပါ။ Database ကို **Database Management System (DBMS)** လို့ခေါ်တဲ့ software က စီမံပေးပါတယ်။ လုံခြုံရေးနဲ့ backup ကို စီမံတာ၊ အသုံးပြုသူအများအပြား တစ်ပြိုင်နက် သုံးနိုင်အောင် ထိန်းပေးတာနဲ့ query တွေကို လုပ်ဆောင်ပေးတာတွေ ပါဝင်ပါတယ်။'
);

export const databaseFundamentals = [
  {
    ...page('fundamentals', p('What is a database?', 'Database ဆိုတာ ဘာလဲ'),
      p(databaseDefinition.en.replaceAll('**', ''), databaseDefinition.my.replaceAll('**', '')),
      [
        {
          ...snippet('sql-and-nosql', p('Types of Databases', 'Database အမျိုးအစားများ')),
          figure: {
            src: '/docs/media/database/types-of-databases.jpg',
            width: 2048,
            height: 1143,
            banner: true,
            alt: p(
              'Six database models illustrated as a relational table, a JSON-like document, key-value pairs, a wide-column row with column families, a graph with nodes and an edge, and vectors with numerical values.',
              'Database အမျိုးအစား ခြောက်မျိုးကို relational table၊ JSON ပုံစံ document၊ key-value အတွဲ၊ column family ပါတဲ့ row၊ node နဲ့ edge ပါတဲ့ graph၊ ဂဏန်းတန်ဖိုးတွေ ပါတဲ့ vector တို့နဲ့ ပြထားပါတယ်။'
            ),
          },
          blocks: p(
            [
              ['heading', '1. Relational Database (SQL)'],
              ['paragraph', 'Stores data in structured tables with rows and columns. A defined schema and constraints help maintain data integrity. Relational databases work well for complex queries and transactions, such as recording a bank transfer. Examples include PostgreSQL and MySQL.'],
              ['heading', '2. Document Store (NoSQL)'],
              ['paragraph', 'Stores data in flexible, JSON-like documents. Documents can have different fields, so you can add fields as your application grows. Some systems also let you validate document fields. Examples include MongoDB and Cloud Firestore from Firebase.'],
              ['heading', '3. Key-Value Store (NoSQL)'],
              ['paragraph', 'Stores data as pairs of unique keys and their corresponding values, like a dictionary. Fast lookup by key makes this model useful for API response caching and user sessions. Redis is an example. Memcached uses the same model as an in-memory cache.'],
              ['heading', '4. Wide-Column Store (NoSQL)'],
              ['paragraph', 'Stores data in rows identified by keys. A system such as HBase groups related columns into column families. Wide-column stores can distribute large volumes of data across servers and are used for applications such as high-volume logs, IoT telemetry, and large-scale analytics. Examples include Apache Cassandra and Apache HBase.'],
              ['heading', '5. Graph Database (NoSQL)'],
              ['paragraph', 'Stores entities as nodes and their relationships as edges. Graph databases make it efficient to follow multiple connections, such as finding mutual friends or generating recommendations. Neo4j is an example.'],
              ['heading', '6. Vector Database (NoSQL / AI)'],
              ['paragraph', 'Stores and indexes embeddings, which are high-dimensional vectors that represent data such as text or images. Vector databases use similarity search to find related content and can retrieve relevant documents for Retrieval-Augmented Generation (RAG). Examples include Pinecone and Milvus.'],
            ],
            [
              ['heading', '1. Relational Database (SQL)'],
              ['paragraph', 'Data ကို row နဲ့ column ပါတဲ့ table တွေထဲမှာ သိမ်းပါတယ်။ Schema နဲ့ constraint တွေ သတ်မှတ်ပြီး မှတ်တမ်းတွေ စည်းကမ်းနဲ့ ကိုက်ညီအောင် ထိန်းထားနိုင်ပါတယ်။ ဆက်စပ်မှတ်တမ်းတွေကို query တစ်ခုနဲ့ ရှာဖတ်တာ၊ ဘဏ်ငွေလွှဲလို transaction တွေ မှတ်တမ်းတင်တာအတွက် သင့်တော်ပါတယ်။ PostgreSQL နဲ့ MySQL တို့က ဥပမာတွေပါ။'],
              ['heading', '2. Document Store (NoSQL)'],
              ['paragraph', 'Data ကို JSON နဲ့ ဆင်တူတဲ့ document တွေအဖြစ် သိမ်းပါတယ်။ Document တစ်ခုနဲ့တစ်ခုမှာ field တွေ ကွာနိုင်တာကြောင့် app ကြီးလာတဲ့အခါ field အသစ်တွေ ထည့်နိုင်ပါတယ်။ တချို့စနစ်တွေမှာ field တွေကို သတ်မှတ်ချက်နဲ့ ကိုက်ညီလားဆိုတာလည်း စစ်နိုင်ပါတယ်။ MongoDB နဲ့ Firebase ရဲ့ Cloud Firestore တို့က ဥပမာတွေပါ။'],
              ['heading', '3. Key-Value Store (NoSQL)'],
              ['paragraph', 'ထပ်မနေတဲ့ key တစ်ခုစီနဲ့ သက်ဆိုင်ရာ value ကို တွဲသိမ်းပါတယ်။ Key ကို သိရင် value ကို မြန်မြန် ပြန်ယူနိုင်တာကြောင့် API response တွေကို cache လုပ်ဖို့နဲ့ user session တွေ သိမ်းဖို့ သုံးလေ့ရှိပါတယ်။ Redis က ဥပမာတစ်ခုပါ။ Memcached ကလည်း ဒီပုံစံကို သုံးတဲ့ in-memory cache ပါ။'],
              ['heading', '4. Wide-Column Store (NoSQL)'],
              ['paragraph', 'Data ကို key နဲ့ ခွဲခြားသတ်မှတ်ထားတဲ့ row တွေထဲမှာ သိမ်းပါတယ်။ HBase မှာ ဆက်စပ်တဲ့ column တွေကို column family အလိုက် စုထားပါတယ်။ Data အများအပြားကို server အများအပြားပေါ် ဖြန့်သိမ်းနိုင်တာကြောင့် ဝင်လာတဲ့ log အများအပြား၊ IoT စက်တွေဆီက ပို့တဲ့ တိုင်းတာချက်တွေနဲ့ data အများကြီး ခွဲခြမ်းစိတ်ဖြာတဲ့ အလုပ်တွေမှာ သုံးနိုင်ပါတယ်။ Apache Cassandra နဲ့ Apache HBase တို့က ဥပမာတွေပါ။'],
              ['heading', '5. Graph Database (NoSQL)'],
              ['paragraph', 'လူ၊ ပစ္စည်း စတဲ့ အရာတွေကို node အဖြစ် သိမ်းပြီး သူတို့ကြားက ဆက်စပ်မှုကို edge အဖြစ် သိမ်းပါတယ်။ နှစ်ယောက်လုံးနဲ့ သူငယ်ချင်းဖြစ်သူကို ရှာတာ၊ သုံးစွဲသူ စိတ်ဝင်စားနိုင်တဲ့ အရာတွေ အကြံပြုတာလို ဆက်စပ်မှုအဆင့်ဆင့်ကို လိုက်ရှာရာမှာ သုံးပါတယ်။ Neo4j က ဥပမာတစ်ခုပါ။'],
              ['heading', '6. Vector Database (NoSQL / AI)'],
              ['paragraph', 'စာသား၊ ပုံ စတဲ့ data ကို ကိုယ်စားပြုတဲ့ ဂဏန်းတန်ဖိုး အများအပြားပါဝင်သော vector တွေကို embedding လို့ ခေါ်ပါတယ်။ Vector database က embedding တွေကို သိမ်းပြီး index လုပ်ပေးပါတယ်။ ဆင်တူတဲ့ content ကို ရှာဖို့နဲ့ Retrieval-Augmented Generation (RAG) မှာ သက်ဆိုင်ရာ document တွေ ပြန်ရှာပေးဖို့ သုံးနိုင်ပါတယ်။ Pinecone နဲ့ Milvus တို့က ဥပမာတွေပါ။'],
            ],
          ),
        },
      ],
      [
        ['MongoDB · Documents', 'https://www.mongodb.com/docs/manual/core/document/'],
        ['Apache HBase · Data model', 'https://hbase.apache.org/docs/datamodel/'],
        ['Milvus · What is Milvus?', 'https://milvus.io/docs/overview.md'],
      ]),
    introBlocks: p(
      [
        ['paragraph', databaseDefinition.en],
        ['paragraph', 'PostgreSQL, MySQL, SQLite, and MongoDB are examples of DBMS software.'],
      ],
      [
        ['paragraph', databaseDefinition.my],
        ['paragraph', 'PostgreSQL၊ MySQL၊ SQLite နဲ့ MongoDB တို့က DBMS နမူနာတွေပါ။'],
      ],
    ),
    version: '',
  },
  databaseSelection,
];

export const postgresIntroduction = page('postgresql-introduction',
  p('Introduction to PostgreSQL', 'PostgreSQL မိတ်ဆက်'),
  p(
    'We compared databases by the jobs an application needs to do. Now take one of the relational options and see how an application uses it to read and change related records. PostgreSQL, often called Postgres, is a free, open-source object-relational database management system. It organizes data into tables with rows and columns. You use SQL to create tables, query data, and make changes.',
    'ဆက်စပ်မှတ်တမ်းတွေကို table တွေနဲ့ စီမံဖို့ ရွေးချယ်နိုင်တဲ့ DBMS တစ်ခုက PostgreSQL ပါ။ Postgres လို့လည်း ခေါ်တဲ့ PostgreSQL က အခမဲ့သုံးလို့ရတဲ့ open-source object-relational database management system တစ်ခုပါ။ Data ကို row နဲ့ column ပါတဲ့ table တွေထဲမှာ စီပြီးသိမ်းတယ်။ Table ဆောက်တာ၊ data ရှာဖတ်တာနဲ့ ပြင်ဆင်တာတို့အတွက် SQL သုံးပါတယ်။'
  ),
  [
    {
      ...part('what-is-postgresql', p('PostgreSQL, SQL, and psql', 'PostgreSQL၊ SQL နဲ့ psql က ဘာကွာလဲ'),
        p('When you ask for the list of students enrolled in a course, you can type an SQL query into psql. The client sends that query to the PostgreSQL server, which reads the database and sends the results back.',
          'သင်တန်းတစ်ခုမှာ စာရင်းသွင်းထားတဲ့ ကျောင်းသားစာရင်းကို ကြည့်ချင်ရင် psql ထဲမှာ SQL query ရိုက်လို့ရတယ်။ psql က query ကို PostgreSQL server ဆီ ပို့တယ်။ Server က database ထဲက data ကို ဖတ်ပြီး ရလဒ်ပြန်ပို့တယ်။'), `SELECT students.name
FROM enrollments
JOIN students ON students.id = enrollments.student_id
WHERE enrollments.course_id = 1
ORDER BY students.name;`),
      terms: [
        ['PostgreSQL', p('The database software. It manages the data and executes queries. It is an object-relational system, so it also supports extensions and custom data types.', 'Data ကို စီမံပြီး query တွေ run ပေးတဲ့ database software ပါ။ Object-relational system ဖြစ်လို့ extension တွေ၊ ကိုယ်ပိုင် data type တွေလည်း ထည့်သုံးနိုင်တယ်။')],
        ['SQL', p('The language for creating tables, reading data, and making changes.', 'Table ဆောက်ဖို့၊ data ဖတ်ဖို့နဲ့ ပြင်ဖို့ သုံးတဲ့ language ပါ။')],
        ['psql', p('The terminal client you will use to connect to the PostgreSQL server and run SQL.', 'PostgreSQL server ကို ချိတ်ပြီး SQL run ဖို့ သုံးမယ့် terminal client ပါ။')],
      ],
    },
    part('project-history', p('History and SQL standards', 'သမိုင်းကြောင်းနဲ့ SQL စံနှုန်း'),
      p(
        'PostgreSQL traces its roots to the POSTGRES research project at the University of California, Berkeley, which began in 1986. The project has been developed for more than 40 years and is known for reliability, data integrity, and extensibility. PostgreSQL implements many features of the SQL standard. Syntax and behavior can still differ across database engines.',
        'PostgreSQL ရဲ့ အစက University of California, Berkeley မှာ 1986 ခုနှစ်က စခဲ့တဲ့ POSTGRES သုတေသန project ပါ။ ဖွံ့ဖြိုးလာတာ နှစ် ၄၀ ကျော်ရှိပြီး ယုံကြည်စိတ်ချရမှု၊ data စည်းကမ်းတွေကို ထိန်းပေးနိုင်မှုနဲ့ feature ထပ်ဖြည့်နိုင်မှုတို့ကြောင့် လူသိများပါတယ်။ PostgreSQL က SQL စံနှုန်းမှာပါတဲ့ feature အများအပြားကို ပံ့ပိုးပါတယ်။ Database engine တစ်ခုနဲ့တစ်ခုမှာတော့ SQL ရေးပုံနဲ့ အလုပ်လုပ်ပုံ ကွာနိုင်ပါတယ်။'
      ), `-- Standard SQL that PostgreSQL supports
SELECT CURRENT_DATE AS today;

-- PostgreSQL's shorthand cast syntax
SELECT '42'::integer AS number;`),
    {
      ...snippet('acid-transactions', p('ACID transactions', 'ACID Transactions'),
        p('A single SQL query can read a record. Some application actions, such as enrolling a student, need several changes to succeed together. In a course registration app, you can save the enrollment and reduce the number of available seats in one transaction. COMMIT saves the changes. ROLLBACK discards the uncommitted changes. ACID describes four properties of a transaction.',
          'App မှာ အသုံးပြုသူတစ်ယောက် လုပ်လိုက်တဲ့ အလုပ်တစ်ခုက Database ထဲက မှတ်တမ်းအများအပြားကို ပြောင်းလဲစေနိုင်ပါတယ်။ သင်တန်းစာရင်းသွင်းတဲ့အခါ စာရင်းသွင်းမှတ်တမ်း သိမ်းတာနဲ့ လက်ကျန်နေရာ တစ်နေရာလျှော့တာကို transaction တစ်ခုထဲမှာ လုပ်လို့ရပါတယ်။ COMMIT က အပြောင်းအလဲတွေကို သိမ်းတယ်။ ROLLBACK က commit မလုပ်ရသေးတဲ့ အပြောင်းအလဲတွေကို ပယ်ဖျက်တယ်။ ACID ဆိုတာ transaction ရဲ့ အောက်ပါ လက္ခဏာလေးခုကို ဆိုလိုပါတယ်။'), `-- The course_seats_demo table tracks seats for course 1.
BEGIN;

WITH reserved_seat AS (
  UPDATE course_seats_demo
  SET seats_open = seats_open - 1
  WHERE course_id = 1 AND seats_open > 0
  RETURNING course_id
)
INSERT INTO enrollments (student_id, course_id, enrolled_on)
SELECT 3, course_id, CURRENT_DATE
FROM reserved_seat
RETURNING student_id, course_id;

-- When no seat is available, the insert returns zero rows.
COMMIT;`),
      terms: [
        ['Atomicity', p('Both changes succeed together. If reducing the available seats fails and the transaction is aborted, the enrollment is discarded too.', 'အပြောင်းအလဲနှစ်ခုလုံး အတူတူ အောင်မြင်ရပါတယ်။ လက်ကျန်နေရာလျှော့တဲ့အဆင့်မှာ အမှားဖြစ်ပြီး transaction ပျက်သွားရင် စာရင်းသွင်းမှတ်တမ်းကိုပါ ပယ်ဖျက်ပါတယ်။')],
        ['Consistency', p('The saved data must satisfy the rules you define. A foreign key can require a valid course, and a CHECK constraint can require the remaining seats to be zero or more.', 'သိမ်းပြီးတဲ့ data က သတ်မှတ်ထားတဲ့ database စည်းကမ်းတွေကို လိုက်နာရပါတယ်။ Foreign key နဲ့ သင်တန်းတကယ်ရှိကြောင်း စစ်နိုင်ပြီး CHECK constraint နဲ့ လက်ကျန်နေရာ 0 ထက် မနည်းအောင် သတ်မှတ်နိုင်ပါတယ်။')],
        ['Isolation', p('Other transactions cannot see the unfinished changes. The isolation level controls what each transaction can observe when several run at once.', 'မပြီးသေးတဲ့ အပြောင်းအလဲတွေကို တခြား transaction တွေက မမြင်ရပါဘူး။ Transaction တွေ တစ်ပြိုင်နက် run နေချိန်မှာ တစ်ခုက တခြားတစ်ခုရဲ့ data ကို ဘယ်အခြေအနေမှာ မြင်နိုင်လဲဆိုတာ isolation level က သတ်မှတ်ပါတယ်။')],
        ['Durability', p('With the default durability settings, changes remain saved after a successful COMMIT even if PostgreSQL crashes afterward.', 'ပုံမှန် durability setting တွေနဲ့ဆိုရင် COMMIT အောင်မြင်ပြီးနောက် PostgreSQL ရုတ်တရက် ရပ်သွားရင်တောင် သိမ်းပြီးသား data က ဆက်ရှိပါတယ်။')],
      ],
    },
    snippet('mvcc', p('Concurrent reads and writes with MVCC', 'MVCC နဲ့ Data တစ်ပြိုင်နက် ဖတ်ခြင်း၊ ပြင်ခြင်း'),
      p(
        'A transaction keeps the steps of one enrollment together. What will another user see if they read the data while those changes are in progress? Multi-Version Concurrency Control (MVCC) lets a query read a snapshot of the data. If an administrator is updating a course fee, a plain SELECT can still read the previously committed fee while that update is in progress. Ordinary reads and writes can proceed together. If two transactions try to update the same row, one can still have to wait for a lock.',
        'Transaction တစ်ခုက data ပြင်နေချိန်မှာ တခြား transaction က အဲဒီ data ကို ဖတ်ဖို့ လိုနိုင်ပါတယ်။ Multi-Version Concurrency Control (MVCC) ကြောင့် query တစ်ခုက သက်ဆိုင်ရာ အချိန်က data အခြေအနေ (snapshot) ကို ဖတ်နိုင်ပါတယ်။ Admin က သင်တန်းကြေး ပြင်နေတုန်း ရိုးရိုး SELECT က အရင် commit လုပ်ထားတဲ့ သင်တန်းကြေးကို ဖတ်လို့ရတယ်။ ဒီလိုနဲ့ ဖတ်တာနဲ့ ပြင်တာ တစ်ပြိုင်နက် လုပ်နိုင်ပါတယ်။ Transaction နှစ်ခုက row တစ်ကြောင်းတည်းကို ပြင်ရင်တော့ lock လွတ်တဲ့အထိ တစ်ခုက စောင့်ရနိုင်ပါတယ်။'
      ), `-- Session A: run these two statements and leave the transaction open.
BEGIN;
UPDATE courses SET fee = 45.00 WHERE id = 1;

-- Session B: run this query while Session A is open.
SELECT fee FROM courses WHERE id = 1;
-- The query sees the previously committed fee.

-- Session A: finish the demonstration and restore the original fee.
ROLLBACK;`),
    {
      ...part('types-and-extensions', p('Data types, text search, and extensions', 'Data Types၊ Text Search နဲ့ Extensions'),
        p('PostgreSQL provides column types for structured and flexible data, and it can be extended for specialized searches.',
          'PostgreSQL မှာ ပုံစံသတ်မှတ်ထားတဲ့ data နဲ့ ပုံစံပြောင်းနိုင်တဲ့ data တွေအတွက် column type တွေ ပါပါတယ်။ သီးသန့် ရှာဖွေမှုတွေ လုပ်ဖို့ feature ထပ်ဖြည့်လို့လည်း ရပါတယ်။'), `SELECT CAST(19.95 AS numeric(10, 2)) AS price,
       ARRAY['html', 'css'] AS tags,
       '{"level":"beginner"}'::jsonb ->> 'level' AS course_level,
       to_tsvector('english', 'Learning HTML') @@
         plainto_tsquery('english', 'learn') AS text_matches;`),
      terms: [
        ['Built-in types', p('Use numeric for exact amounts, arrays for lists such as tags, and UUID for identifiers. JSON keeps the original JSON text. JSONB stores a parsed representation and can be indexed for many JSON queries.', 'တိကျတဲ့ ငွေပမာဏအတွက် numeric၊ tag တွေလို တန်ဖိုးစာရင်းအတွက် array၊ ID အတွက် UUID သုံးလို့ရပါတယ်။ JSON က မူရင်း JSON စာသားကို သိမ်းပါတယ်။ JSONB က ဖတ်ခွဲပြီးသားပုံစံနဲ့ သိမ်းပြီး JSON query အများအပြားအတွက် index သုံးလို့ရပါတယ်။')],
        ['Full-text search', p('Search course descriptions by words, match word forms for a configured language, and rank results by relevance.', 'သင်တန်းဖော်ပြချက်ထဲက စကားလုံးတွေ ရှာနိုင်ပါတယ်။ သတ်မှတ်ထားတဲ့ ဘာသာစကားအလိုက် စကားလုံးပုံစံကွဲတွေကို တွဲရှာနိုင်ပြီး ရလဒ်တွေကို ဆက်စပ်မှုအလိုက် စီနိုင်ပါတယ်။')],
        ['Extensions and custom code', p('You can define custom data types and functions. When available on your server, PostGIS adds geographic queries such as finding nearby branches. The pgvector extension stores embeddings and searches them by similarity.', 'ကိုယ်ပိုင် data type နဲ့ function တွေ သတ်မှတ်နိုင်ပါတယ်။ Server မှာ extension သုံးလို့ရရင် PostGIS နဲ့ အနီးဆုံးဆိုင်ခွဲ ရှာတာလို နေရာဒေသ query တွေ လုပ်နိုင်ပါတယ်။ pgvector နဲ့ embedding တွေ သိမ်းပြီး ဆင်တူတာတွေ ရှာနိုင်ပါတယ်။')],
      ],
    },
    {
      ...snippet('strengths', p('Data integrity and growing workloads', 'Data စည်းကမ်းနဲ့ တိုးလာတဲ့ Workload ကို ကိုင်တွယ်ခြင်း'),
        p('Constraints enforce data rules. Indexes, partitioning, and replication address different needs as a database grows.',
          'Constraints က data စည်းကမ်းတွေကို ထိန်းပေးပါတယ်။ Database ကြီးလာတဲ့အခါ index၊ partitioning နဲ့ replication တို့က မတူတဲ့ လိုအပ်ချက်တွေကို ဖြေရှင်းပေးပါတယ်။'), `-- The enrollment's course_id must reference an existing course.
CREATE TEMP TABLE enrollment_example (
  student_id integer NOT NULL REFERENCES students(id),
  course_id integer NOT NULL REFERENCES courses(id),
  PRIMARY KEY (student_id, course_id)
);

-- Support lookups that filter on course_id.
CREATE INDEX ON enrollment_example (course_id);`),
      terms: [
        ['Constraints', p('UNIQUE can prevent duplicate student emails. A foreign key prevents an enrollment from pointing to a missing course.', 'UNIQUE က student email ထပ်တာကို တားနိုင်ပါတယ်။ Foreign key က မရှိတဲ့ course ကို enrollment က ညွှန်းတာကို တားပေးပါတယ်။')],
        ['Indexes', p('A suitable index can speed up frequent lookups, such as finding enrollments by course ID. Indexes also use storage and add work when data changes.', 'သင့်တော်တဲ့ index က course ID နဲ့ စာရင်းသွင်းထားသူတွေ ရှာတာလို မကြာခဏလုပ်တဲ့ query ကို ပိုမြန်စေနိုင်ပါတယ်။ Index အတွက် storage လိုသလို data ပြင်တဲ့အခါ index ကိုပါ ပြင်ပေးရပါတယ်။')],
        ['Partitioning', p('Split one logical table into parts, such as enrollments by year. A query that filters on the partition key can skip parts it does not need.', 'Table တစ်ခုကို သင်တန်းစာရင်းသွင်းတဲ့ နှစ်အလိုက်လိုမျိုး အပိုင်းခွဲ သိမ်းလို့ရပါတယ်။ Partition key နဲ့ filter လုပ်တဲ့ query က မလိုတဲ့အပိုင်းတွေကို ကျော်သွားနိုင်ပါတယ်။')],
        ['Replication', p('Copy data changes to another PostgreSQL server. A standby configured for reads can serve queries, and a standby can be promoted if the primary fails. In a typical primary–standby setup, application writes go to the primary.', 'Data အပြောင်းအလဲတွေကို တခြား PostgreSQL server ဆီ ကူးပေးပါတယ်။ Read အတွက် ပြင်ဆင်ထားတဲ့ standby က query တွေကို ဖြေကြားနိုင်ပါတယ်။ Primary ပျက်ရင် standby ကို primary အဖြစ် ပြောင်းနိုင်ပါတယ်။ ပုံမှန် primary–standby ပုံစံမှာ app က data ရေးဖို့ primary ဆီ ပို့ပါတယ်။')],
      ],
    },
    {
      ...snippet('compare-databases', p('PostgreSQL compared with other databases', 'PostgreSQL နဲ့ တခြား Database တွေ ဘာကွာလဲ'),
        p('These databases differ in how they organize data, what features they offer, and how applications connect to them.',
          'Database တစ်ခုနဲ့တစ်ခုက data စီထားပုံ၊ ပံ့ပိုးတဲ့ feature တွေနဲ့ app က ချိတ်ဆက်သုံးပုံ ကွာပါတယ်။'), `-- PostgreSQL: read a field from a JSONB document.
SELECT '{"name":"Notebook","stock":12}'::jsonb ->> 'name' AS product;

-- MongoDB shell: read that field from a stored BSON document.
db.products.findOne({ _id: 1 }, { name: 1, _id: 0 });`),
      terms: [
        ['MySQL and MariaDB', p('Both are relational database servers with open-source editions. The SQL features and syntax you can use depend on the engine and version. For example, a project built around PostGIS requires PostgreSQL with PostGIS available.', 'နှစ်ခုလုံးက open-source edition ရှိတဲ့ relational database server တွေပါ။ သုံးလို့ရတဲ့ SQL feature နဲ့ ရေးပုံက database engine နဲ့ version အလိုက် ကွာပါတယ်။ ဥပမာ PostGIS ကို အခြေခံတဲ့ project ဆိုရင် PostGIS သုံးလို့ရတဲ့ PostgreSQL လိုပါတယ်။')],
        ['MongoDB', p('MongoDB stores BSON documents in collections. PostgreSQL can store and query flexible documents in a JSONB column while retaining relational tables, joins, and foreign keys for the surrounding data.', 'MongoDB က BSON document တွေကို collection ထဲမှာ သိမ်းပါတယ်။ PostgreSQL မှာ ပုံစံပြောင်းနိုင်တဲ့ document တွေကို JSONB column မှာ သိမ်းပြီး query လုပ်နိုင်ပါတယ်။ ကျန်တဲ့ ဆက်စပ် data တွေအတွက် table၊ JOIN နဲ့ foreign key တွေကို တွဲသုံးလို့ရပါတယ်။')],
        ['SQLite', p('SQLite runs inside the application and usually reads and writes a local database file directly. PostgreSQL runs as a separate server that many clients can connect to over a network.', 'SQLite က app ထဲမှာပဲ အလုပ်လုပ်ပြီး ပုံမှန်အားဖြင့် စက်ထဲက database file ကို တိုက်ရိုက် ဖတ်၊ ရေးပါတယ်။ PostgreSQL က သီးခြား server အဖြစ် run ပြီး client အများကြီးက network ကတစ်ဆင့် ချိတ်သုံးနိုင်ပါတယ်။')],
      ],
    },
    {
      ...snippet('fullstack-use', p('Use cases and cloud hosting', 'အသုံးပြုပုံနဲ့ Cloud Hosting'),
        p('In a course registration app, the frontend requests a course list from the backend API. The API checks permissions, sends SQL to PostgreSQL through a database client library, and returns the results. In the next lesson, you will install PostgreSQL and connect directly with psql.',
          'သင်တန်းစာရင်းသွင်းတဲ့ app မှာ Frontend က သင်တန်းစာရင်းကို Backend API ဆီ တောင်းပါတယ်။ API က ကြည့်ခွင့်ရှိမရှိ စစ်ပြီး database client library ကတစ်ဆင့် PostgreSQL ဆီ SQL ပို့တယ်။ ရလဒ်ကို Frontend ဆီ ပြန်ပေးပါတယ်။ နောက်သင်ခန်းစာမှာ PostgreSQL ထည့်သွင်းပြီး psql နဲ့ ကိုယ်တိုင်ချိတ်ကြည့်ပါမယ်။'), `// Backend: a database pool configured for your PostgreSQL server.
app.get("/api/courses", requireSignIn, async (_request, response) => {
  const { rows } = await pool.query("SELECT id, title FROM courses ORDER BY id");
  response.json(rows);
});`),
      terms: [
        ['Web and mobile backends', p('Store accounts, orders, or enrollments behind the app’s API.', 'App ရဲ့ API ကတစ်ဆင့် account၊ order နဲ့ သင်တန်းစာရင်းသွင်းမှတ်တမ်းတွေ သိမ်းနိုင်ပါတယ်။')],
        ['Analytics and reporting', p('Use SQL to count enrollments by course or compare registrations by month.', 'SQL သုံးပြီး သင်တန်းအလိုက် စာရင်းသွင်းသူအရေအတွက် တွက်နိုင်သလို လအလိုက်လည်း နှိုင်းယှဉ်နိုင်ပါတယ်။')],
        ['Geospatial and AI applications', p('Use PostGIS to find nearby locations, or use pgvector to find course descriptions with similar meanings using their embeddings.', 'PostGIS နဲ့ အနီးအနားက နေရာတွေ ရှာနိုင်ပါတယ်။ သင်တန်းဖော်ပြချက်တွေကို embedding အဖြစ် သိမ်းထားရင် pgvector နဲ့ အဓိပ္ပာယ်ဆင်တူတာတွေ ပြန်ရှာနိုင်ပါတယ်။')],
        ['Managed PostgreSQL', p('Examples include Amazon RDS for PostgreSQL, Google Cloud SQL for PostgreSQL, Azure Database for PostgreSQL, Supabase, and Neon. Supported versions and extensions vary by service.', 'Managed service ဥပမာတွေက Amazon RDS for PostgreSQL၊ Google Cloud SQL for PostgreSQL၊ Azure Database for PostgreSQL၊ Supabase နဲ့ Neon တို့ပါ။ ပံ့ပိုးတဲ့ version နဲ့ extension တွေက service အလိုက် ကွာနိုင်ပါတယ်။')],
      ],
    },
  ],
  [
    ['PostgreSQL · About and features', 'https://www.postgresql.org/about/'],
    ['PostgreSQL · Tables', 'https://www.postgresql.org/docs/19/tutorial-concepts.html'],
    ['PostgreSQL · Primary and foreign keys', 'https://www.postgresql.org/docs/19/ddl-constraints.html'],
    ['PostgreSQL · Transactions', 'https://www.postgresql.org/docs/19/tutorial-transactions.html'],
    ['PostgreSQL · MVCC', 'https://www.postgresql.org/docs/19/mvcc-intro.html'],
    ['PostgreSQL · Locking', 'https://www.postgresql.org/docs/19/explicit-locking.html'],
    ['PostgreSQL · Data types', 'https://www.postgresql.org/docs/19/datatype.html'],
    ['PostgreSQL · Full-text search', 'https://www.postgresql.org/docs/19/textsearch.html'],
    ['PostgreSQL · Indexes', 'https://www.postgresql.org/docs/19/indexes-intro.html'],
    ['PostgreSQL · Partitioning', 'https://www.postgresql.org/docs/19/ddl-partitioning.html'],
    ['PostgreSQL · Replication and standby servers', 'https://www.postgresql.org/docs/19/high-availability.html'],
    ['PostGIS · Documentation', 'https://postgis.net/documentation/'],
    ['pgvector · Documentation', 'https://github.com/pgvector/pgvector'],
    ['MySQL · About', 'https://dev.mysql.com/doc/refman/8.4/en/what-is-mysql.html'],
    ['MariaDB · Documentation', 'https://mariadb.org/documentation/'],
    ['MongoDB · Documents', 'https://www.mongodb.com/docs/manual/core/document/'],
    ['SQLite · Embedded architecture', 'https://www.sqlite.org/serverless.html'],
    ['AWS · Amazon RDS for PostgreSQL', 'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html'],
    ['Google Cloud · Cloud SQL for PostgreSQL', 'https://docs.cloud.google.com/sql/docs/postgres'],
    ['Microsoft Azure · Azure Database for PostgreSQL', 'https://learn.microsoft.com/en-us/azure/postgresql/overview'],
    ['Supabase · PostgreSQL database', 'https://supabase.com/docs/guides/database/overview'],
    ['Neon · Documentation', 'https://neon.com/docs'],
  ]);
