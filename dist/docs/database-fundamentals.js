import { p, page, part, snippet } from './content.js';
import { databaseSelection, documentModel } from './database-learning.js';

const illustrated = (id, title, text, file, height, alt, caption, code) => ({
  ...snippet(id, title, text, code),
  figure: { src: '/docs/media/database/' + file + '.jpg', width: 1536, height, alt, caption },
});

export const databaseFundamentals = [
  {
    ...page('fundamentals', p('What is a database?', 'Database ဆိုတာ ဘာလဲ'),
      p(
        'A database is an organized collection of data that you can search and retrieve when you need it.',
        'Database ဆိုတာ လိုအပ်တဲ့အခါ ပြန်ရှာဖတ်နိုင်အောင် စနစ်တကျ စုစည်းသိမ်းထားတဲ့ အချက်အလက်တွေ (data) ပါ။'
      ),
      [
        snippet('database-example', p('How an online store uses a database', 'အွန်လိုင်းဆိုင်တစ်ခုမှာ Database သုံးပုံ'),
          p(
            'An online store can use a database to keep product names, prices, stock quantities, and orders. When you open a product page, the store reads the saved price and shows it to you. When you place an order, it saves a new order record.',
            'အွန်လိုင်းဆိုင်တစ်ခုက ကုန်ပစ္စည်းအမည်၊ ဈေးနှုန်း၊ လက်ကျန်အရေအတွက်နဲ့ အော်ဒါမှတ်တမ်းတွေကို Database ထဲမှာ သိမ်းထားနိုင်ပါတယ်။ ပစ္စည်းတစ်ခုရဲ့ စာမျက်နှာကို ဖွင့်ကြည့်တဲ့အခါ ဆိုင်ရဲ့စနစ်က သိမ်းထားတဲ့ ဈေးနှုန်းကို ပြန်ဖတ်ပြီး ပြပေးပါတယ်။ အော်ဒါတင်လိုက်ရင်လည်း အော်ဒါမှတ်တမ်းအသစ် ထည့်သိမ်းပေးပါတယ်။'
          ), `-- Read the saved price when a product page opens.
SELECT name, price
FROM products
WHERE id = 1;

-- Record a new order at checkout.
INSERT INTO orders (id) VALUES (101);`),
        part('database-and-dbms', p('Database and DBMS', 'Database နဲ့ DBMS'),
          p(
            'In the shop example, opening a product page reads a saved price and placing an order writes a new record. What handles those reads and writes? A database management system (DBMS) is the software that manages a database and handles operations such as reading, adding, and updating its data. PostgreSQL, MySQL, and MongoDB are examples.',
            'အွန်လိုင်းဆိုင်မှာ ဈေးနှုန်းဖတ်တာ၊ အော်ဒါအသစ် သိမ်းတာနဲ့ လက်ကျန်အရေအတွက် ပြင်တာတွေကို Database Management System (DBMS) က ကိုင်တွယ်ပေးပါတယ်။ DBMS ဆိုတာ Database ထဲက data ကို စီမံပေးတဲ့ software ပါ။ PostgreSQL၊ MySQL နဲ့ MongoDB တို့က DBMS ဥပမာတွေပါ။'
          ), `SELECT current_database() AS connected_database,
       version() AS database_server;`),
        {
          ...illustrated('sql-and-nosql', p('SQL and NoSQL databases', 'SQL နဲ့ NoSQL Database တွေ'),
            p(
              'A DBMS handles reads and writes, and different database systems organize the records in different ways. You will often hear two broad labels, SQL and NoSQL. SQL is a language, and “SQL databases” commonly refers to relational databases that use it to work with tables. NoSQL covers other data models, such as documents and graphs. In the shop example, order 101 contains two notebooks. The picture shows that same order item as a row in a relational table and as a MongoDB document.',
              'DBMS တွေဟာ data ကို စီထားပုံမှာ ကွာခြားပါတယ်။ အသုံးများတဲ့ အုပ်စုနှစ်ခုက SQL Database နဲ့ NoSQL Database ပါ။ SQL ဆိုတာ table တွေ ဖန်တီးဖို့၊ data ဖတ်ဖို့နဲ့ ပြင်ဖို့ သုံးတဲ့ language ပါ။ SQL သုံးတဲ့ relational database တွေကို SQL Database လို့ ခေါ်လေ့ရှိပါတယ်။ NoSQL အုပ်စုမှာ document၊ key-value နဲ့ graph စတဲ့ data model တွေ ပါဝင်ပါတယ်။ အောက်ကပုံမှာ အော်ဒါတစ်ခုထဲက ပစ္စည်းမှတ်တမ်းကို relational table ရဲ့ row နဲ့ MongoDB document အဖြစ် ယှဉ်ပြထားပါတယ်။'
            ), 'sql-and-nosql-orders', 1024,
            p('The same order item is shown in two forms. The table row and the MongoDB document both contain order_id 101, item Notebook, and quantity 2.', 'Relational table ရဲ့ row နဲ့ MongoDB ရဲ့ document နှစ်ခုလုံးမှာ order_id က 101၊ item က Notebook၊ quantity က 2 ဖြစ်ပါတယ်။'),
            p('The SQL side shows column headers and a row. The MongoDB side shows field names and their values.', 'SQL ဘက်မှာ column ခေါင်းစဉ်တွေနဲ့ row တစ်ကြောင်းကို မြင်ရပြီး MongoDB ဘက်မှာ field နာမည်နဲ့ တန်ဖိုးကို တွဲမြင်ရပါတယ်။'), `-- PostgreSQL: read the order item row
SELECT order_id, item, quantity
FROM order_items
WHERE order_id = 101;

-- MongoDB shell: read the order item document
db.order_items.findOne({ order_id: 101 });`),
          terms: [
            ['SQL / Relational', p(
              'PostgreSQL, MySQL, SQLite, and Microsoft SQL Server organize records into tables with rows and columns. SQL is the language used to create tables, query their data, and make changes.',
              'PostgreSQL၊ MySQL၊ SQLite နဲ့ Microsoft SQL Server တို့က data ကို row နဲ့ column ပါတဲ့ table တွေထဲမှာ စီထားတယ်။ SQL က table ဆောက်ဖို့၊ data ရှာဖတ်ဖို့နဲ့ ပြင်ဆင်ဖို့ သုံးတဲ့ language ပါ။'
            )],
            ['NoSQL', p(
              'NoSQL covers several data models. MongoDB stores documents, Redis is commonly used as a key-value store, Cassandra uses a wide-column model, and Neo4j stores nodes and relationships in a graph.',
              'NoSQL မှာ data သိမ်းပုံ အမျိုးမျိုး ပါတယ်။ MongoDB က document တွေနဲ့ သိမ်းတယ်။ Redis ကို key-value store အဖြစ် အသုံးများတယ်။ Cassandra က wide-column model သုံးပြီး Neo4j က node တွေနဲ့ သူတို့ရဲ့ ဆက်စပ်မှုတွေကို graph ပုံစံနဲ့ သိမ်းတယ်။'
            )],
          ],
        },
      ],
      [['MongoDB · Documents', 'https://www.mongodb.com/docs/manual/core/document/']]),
    version: '',
  },
  {
    ...page('relational-model', p('How databases connect related data', 'Database တွေမှာ ဆက်စပ်နေတဲ့ Data ကို သိမ်းပုံ'),
      p(
        'The previous lesson showed one order item as a SQL table row and as a NoSQL document. Now look at how that item is connected to the rest of the order. When you open an order, how does the shop know which product you bought and how many you ordered? Follow the same order through PostgreSQL, MongoDB, and Neo4j.',
        'အော်ဒါတစ်ခုမှာ ဘာပစ္စည်းကို ဘယ်နှခု မှာထားလဲဆိုတာ ပြဖို့ အော်ဒါနဲ့ ပစ္စည်းမှတ်တမ်းတွေကို ချိတ်ဆက်ထားရပါတယ်။ PostgreSQL၊ MongoDB နဲ့ Neo4j မှာ ဒီဆက်စပ်မှုကို သိမ်းပုံ ကွာပါတယ်။'
      ),
      [
        {
          ...snippet('order-item-relationships', p('One order in three databases', 'အော်ဒါနဲ့ ပစ္စည်းအကြား ဆက်စပ်မှု'),
            p('The four panels show three databases. MongoDB appears twice because an order can hold item details directly or point to a separate product document.',
              'ပုံမှာ အော်ဒါ 101 အတွက် Notebook ၂ အုပ် မှာထားတဲ့ မှတ်တမ်းကို ပြထားပါတယ်။ MongoDB အတွက် အကွက်နှစ်ခု ပါတာက ပစ္စည်းအချက်အလက်ကို အော်ဒါထဲမှာ တွဲသိမ်းနိုင်သလို သီးခြားပစ္စည်းမှတ်တမ်းကို ID နဲ့လည်း ညွှန်းနိုင်လို့ပါ။'), `{
  "orderId": 101,
  "items": [
    { "productId": 1, "name": "Notebook", "quantity": 2 }
  ]
}`),
          figure: {
            src: '/docs/media/database/database-relationships-en.png', width: 1480, height: 1050,
            alt: p('PostgreSQL links an order line to order and product rows. MongoDB embeds item details or references a product ID. Neo4j connects order and product nodes with a CONTAINS relationship.',
              'အော်ဒါ 101 မှာ Notebook ၂ အုပ် ပါဝင်ပုံ။ PostgreSQL မှာ order_items က အော်ဒါနဲ့ ပစ္စည်းကို ချိတ်ပေးတယ်။ MongoDB မှာ ပစ္စည်းအမည်ကို အော်ဒါထဲမှာ သိမ်းနိုင်သလို ပစ္စည်းမှတ်တမ်းကို ID နဲ့လည်း ညွှန်းနိုင်တယ်။ Neo4j မှာ အရေအတွက်ကို CONTAINS ဆက်စပ်မှုပေါ်မှာ သိမ်းတယ်။'),
          },
        },
        snippet('relational-tables', p('PostgreSQL · Follow the foreign keys', 'PostgreSQL မှာ Foreign Key သုံးပုံ'),
          p('Start with the middle table, order_items. In this row, order_id points to order 101 and product_id points to product 1, the Notebook. These two columns are foreign keys. The quantity of 2 belongs to this order line. A JOIN matches the IDs so the shop can display the product name and quantity together.',
            'PostgreSQL မှာ orders နဲ့ products ကို order_items table က ချိတ်ပေးပါတယ်။ ပုံထဲက row မှာ order_id က orders ထဲက အော်ဒါ 101 ကို ညွှန်းပြီး product_id က products ထဲက ပစ္စည်း 1 ကို ညွှန်းပါတယ်။ ဒီ column နှစ်ခုက Foreign Key တွေပါ။ JOIN သုံးပြီး သက်ဆိုင်ရာ row တွေကို တွဲဖတ်ရင် products ထဲက ပစ္စည်းအမည် Notebook နဲ့ order_items ထဲက အရေအတွက် 2 ကို အတူပြနိုင်ပါတယ်။'), `SELECT products.name, order_items.quantity
FROM order_items
JOIN products ON products.id = order_items.product_id
WHERE order_items.order_id = 101;`),
        snippet('mongodb-embedding', p('MongoDB · Store details inside the order', 'MongoDB မှာ Embedding သုံးပုံ'),
          p('PostgreSQL matched IDs across tables to get the name and quantity. With MongoDB, one option is to keep both values inside the order. In the upper-right panel, the order document contains an items list. One entry holds both the name Notebook and the quantity 2. This is embedding. Reading the order also retrieves those details. It works well for a receipt that should keep the item name as it was at checkout.',
            'MongoDB မှာ အော်ဒါတစ်ခုကို document တစ်ခုအဖြစ် သိမ်းနိုင်ပါတယ်။ ညာဘက်အပေါ်ပုံမှာ ပစ္စည်းအမည် Notebook နဲ့ အရေအတွက် 2 ကို အော်ဒါရဲ့ items စာရင်းထဲမှာ ထည့်ထားပါတယ်။ ဒီလို တွဲသိမ်းတာကို Embedding လို့ ခေါ်ပါတယ်။ ပြေစာထုတ်တဲ့အခါ အော်ဒါကို ဖတ်ရုံနဲ့ ဝယ်ယူစဉ်က မှတ်ထားတဲ့ ပစ္စည်းအမည်နဲ့ အရေအတွက်ကို ရပါတယ်။'), `db.orders.findOne({ _id: 101 }, { items: 1 });

// Example result:
// { _id: 101, items: [{ name: "Notebook", quantity: 2 }] }`),
        snippet('mongodb-referencing', p('MongoDB · Link to a product by ID', 'MongoDB မှာ Referencing သုံးပုံ'),
          p('In the lower-left panel, the order item stores product_id and quantity. To find the name, use product_id 1 to look up the product document whose _id is 1. This is referencing. Many orders can refer to the same product, so its current catalog details can be updated in one place.',
            'ပစ္စည်းအချက်အလက်ကို သီးခြားစီမံဖို့ လိုရင် အော်ဒါထဲမှာ product_id ကို သိမ်းပြီး products collection ထဲက မှတ်တမ်းကို ညွှန်းနိုင်ပါတယ်။ ဒီနည်းကို Referencing လို့ ခေါ်ပါတယ်။ ဘယ်ဘက်အောက်ပုံမှာ product_id က 1 ဖြစ်လို့ ပစ္စည်းအမည်ကို _id တန်ဖိုး 1 ရှိတဲ့ document ကနေ ဖတ်ရပါတယ်။ ဆိုင်က အမည်ကို A5 Notebook လို့ ပြင်လိုက်ရင် အဲဒီ ID နဲ့ ပြန်ရှာတဲ့အခါ အမည်အသစ်ကို ရပါတယ်။ အော်ဒါထဲမှာ ကူးသိမ်းထားတဲ့ အမည်ကတော့ အလိုအလျောက် ပြောင်းသွားမှာ မဟုတ်ပါဘူး။'), `const order = db.orders.findOne({ _id: 101 });
const item = order.items[0];
const product = db.products.findOne({ _id: item.product_id });
printjson({ name: product.name, quantity: item.quantity });`),
        snippet('neo4j-graph', p('Neo4j · Connect the order and product directly', 'Neo4j မှာ Node နဲ့ Relationship သုံးပုံ'),
          p('A MongoDB reference points to the product by ID. In a graph database the connection itself is stored as a relationship. In the lower-right panel, Order and Product are nodes. Follow the arrow from Order to Product. Its label, CONTAINS, tells you the product is part of the order. The quantity of 2 is stored on that relationship because it describes how many notebooks this particular order contains.',
            'Neo4j မှာ အော်ဒါနဲ့ ပစ္စည်းကို node တစ်ခုစီအဖြစ် သိမ်းပြီး node နှစ်ခုကြားက ဆက်စပ်မှုကို relationship အဖြစ် မှတ်ထားပါတယ်။ ပုံထဲက CONTAINS ဆိုတဲ့ မြားက အော်ဒါ 101 ထဲမှာ Notebook ပါဝင်ကြောင်း ဖော်ပြပါတယ်။ အရေအတွက်က အော်ဒါတစ်ခုနဲ့တစ်ခု ကွာနိုင်လို့ quantity တန်ဖိုး 2 ကို ဒီအော်ဒါနဲ့ ပစ္စည်းကြားက relationship ပေါ်မှာ သိမ်းထားပါတယ်။'), `MATCH (:Order {id: 101})-[line:CONTAINS]->(product:Product)
RETURN product.name AS product, line.quantity AS quantity;`),
      ],
      [
        ['PostgreSQL · Foreign keys', 'https://www.postgresql.org/docs/19/ddl-constraints.html'],
        ['PostgreSQL · Joins', 'https://www.postgresql.org/docs/19/tutorial-join.html'],
        ['MongoDB · Map schema relationships', 'https://www.mongodb.com/docs/manual/data-modeling/schema-design-process/map-relationships/'],
        ['Neo4j · Graph database concepts', 'https://neo4j.com/docs/getting-started/appendix/graphdb-concepts/'],
      ]),
    version: '',
  },
  documentModel,
  {
    ...page('database-deployment', p('Where a database server runs', 'Database Server ဘယ်မှာ Run လဲ'),
      p(
        'A database server is one of the servers an application can talk to. Once you know its job, the next question is where to run it. Run a database server on your computer while learning. For a deployed application, compare company-managed equipment with cloud hosting.',
        'Database server ကို လေ့ကျင့်ဖို့ ကိုယ့်ကွန်ပျူတာပေါ်မှာ run နိုင်ပါတယ်။ လုပ်ငန်းသုံး software အတွက်တော့ ကိုယ်ပိုင်စက်ပေါ်မှာ ထားနိုင်သလို Cloud provider ဆီမှာလည်း ထားနိုင်ပါတယ်။'
      ),
      [
        illustrated('hosting', p('Database Deployment: On-premises and Cloud', 'Database Deployment (On-premises နဲ့ Cloud)'),
          p(
            'With on-premises deployment, a company runs the database server on equipment it manages at its office, shop, or data center. In the cloud, a provider maintains the underlying hardware and charges for the plan or usage. Who updates the database software and manages backups depends on whether you rent a virtual machine or use a managed database service.',
            'On-premises မှာ ကုမ္ပဏီက ရုံး၊ ဆိုင် ဒါမှမဟုတ် data center ထဲမှာ ကိုယ်တိုင်စီမံတဲ့ စက်ပေါ် database server ကို run တယ်။ Cloud မှာ provider က အခြေခံ hardware ကို ထိန်းပေးပြီး plan သို့မဟုတ် သုံးစွဲမှုပေါ်မူတည်ပြီး ကောက်ခံတယ်။ Database software update နဲ့ backup ကို ဘယ်သူကိုင်မလဲဆိုတာ virtual machine ငှားတာလား၊ managed database service သုံးတာလားပေါ် မူတည်တယ်။'
          ), 'on-premises-and-cloud', 864,
          p('On-premises and cloud compared by location, hardware maintenance, scaling, and cost.', 'တည်နေရာ၊ hardware ထိန်းသိမ်းမှု၊ စက်စွမ်းရည်တိုးချဲ့မှုနဲ့ ကုန်ကျစရိတ်အလိုက် on-premises နဲ့ cloud ကို နှိုင်းယှဉ်ထားတယ်။'),
          p('For a software application, you can run PostgreSQL on a server your company manages or host it with a cloud provider.', 'Software တစ်ခုအတွက် PostgreSQL ကို ကုမ္ပဏီက စီမံတဲ့ server ပေါ်မှာ run လို့ရသလို cloud ပေါ်မှာလည်း တင်ထားလို့ရပါတယ်။'), `# Company-managed PostgreSQL
psql -h db.office.example.com -U school_app -d learning_db

# Cloud PostgreSQL, with the provider CA trusted by the client
psql "host=db.cloud.example.com dbname=learning_db user=school_app sslmode=verify-full"`),
      ],
      [['PostgreSQL · Client/server architecture', 'https://www.postgresql.org/docs/19/tutorial-arch.html']]),
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
