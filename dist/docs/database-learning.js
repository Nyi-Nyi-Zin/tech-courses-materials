import { p, page, part, snippet } from './content.js';

const pg = 'https://www.postgresql.org/docs/19/';

export const databaseSelection = {
  ...page('choosing-a-database', p('Choose a database for your application', 'Software တစ်ခုအတွက် Database ရွေးချယ်ပုံ'),
    p('Use an inventory app to see how query patterns, transaction needs, and reporting shape the database choice.', 'Inventory app တစ်ခုကို နမူနာယူပြီး data ဖတ်ရေးပုံ၊ transaction နဲ့ report လိုအပ်ချက်တွေက database ရွေးချယ်မှုအပေါ် ဘယ်လို သက်ရောက်လဲ ကြည့်ပါ။'),
    [
      {
        ...snippet('requirements', p('Start with what the app must do', 'App က လုပ်ပေးရမယ့် အလုပ်တွေကနေ စခြင်း'),
          p('Write down the queries and updates the app needs. Estimate how often they run and what the app must guarantee when changes happen together.', 'App မှာ ဘယ်လို query တွေ run မလဲ၊ ဘာတွေ update လုပ်မလဲ ချရေးပါ။ ဘယ်လောက် မကြာခဏ လုပ်မလဲ၊ အပြောင်းအလဲတွေ အတူလုပ်တဲ့အခါ ဘာတွေ သေချာရမလဲ စဉ်းစားပါ။'), `-- Can warehouse 3 fulfill a request for 5 units of product 42?
SELECT quantity
FROM stock_balances
WHERE warehouse_id = 3
  AND product_id = 42
  AND quantity >= 5;`),
        terms: [
          ['Queries', p('Find a product by SKU. Show stock by warehouse. Read movement history for the last month.', 'SKU နဲ့ product ရှာမယ်။ ဂိုဒေါင်အလိုက် stock ပြမယ်။ ပြီးခဲ့တဲ့လက stock အဝင်အထွက်ကို ဖတ်မယ်။')],
          ['Transactions', p('When moving stock, record the movement and update both warehouse balances together.', 'Stock ရွှေ့ရင် အဝင်အထွက်မှတ်တမ်း သိမ်းတာနဲ့ ဂိုဒေါင်နှစ်ခုရဲ့ လက်ကျန် ပြင်တာကို အတူလုပ်မယ်။')],
          ['Operational requirements', p('Estimate reads and writes, acceptable response times, and data growth. Decide who can run backups and test restores.', 'ဖတ်ရေးပမာဏ၊ လက်ခံနိုင်တဲ့ တုံ့ပြန်ချိန်နဲ့ data တိုးလာမယ့်နှုန်းကို ခန့်မှန်းပါ။ Backup ယူတာနဲ့ restore စမ်းတာ ဘယ်သူတာဝန်ယူမလဲ သတ်မှတ်ပါ။')],
        ],
      },
      {
        ...snippet('compare-models', p('Match the data model to the queries', 'Query လုပ်ပုံနဲ့ ကိုက်တဲ့ Data Model ရွေးခြင်း'),
          p(
            'Start with the hardest operation on that list. For inventory, one example is transferring stock while keeping the movement record and both balances in sync. A relational database is a reasonable starting point for inventory because the application relates products, warehouses, stock balances, and movement records and needs consistent updates. Add another store when you have a specific access pattern or performance requirement to satisfy.',
            'ဂိုဒေါင်တစ်ခုကနေ တစ်ခုဆီ ပစ္စည်းရွှေ့တဲ့အခါ အဝင်အထွက်မှတ်တမ်းနဲ့ လက်ကျန်တွေ ကိုက်ညီဖို့ လိုပါတယ်။ Inventory app က products၊ warehouses၊ stock balances နဲ့ movement records တွေကို ချိတ်ဖတ်ပြီး data တွေကို အတူပြင်ရလို့ relational database နဲ့ စလို့ကောင်းတယ်။ ဖတ်ရေးပုံ သို့မဟုတ် မြန်နှုန်းလိုအပ်ချက် သီးသန့်ပေါ်လာမှ နောက်ထပ် store ထည့်သုံးဖို့ စဉ်းစားပါ။'
          ), `-- Assume both balance rows exist and quantity has CHECK (quantity >= 0).
BEGIN;

UPDATE stock_balances SET quantity = quantity - 5
WHERE warehouse_id = 3 AND product_id = 42;

UPDATE stock_balances SET quantity = quantity + 5
WHERE warehouse_id = 4 AND product_id = 42;

INSERT INTO stock_movements
  (product_id, from_warehouse_id, to_warehouse_id, quantity)
VALUES (42, 3, 4, 5);

COMMIT;`),
        terms: [
          ['Relational · PostgreSQL / MySQL', p('Keep products, warehouse balances, and stock movements in linked tables.', 'Products၊ ဂိုဒေါင်လက်ကျန်နဲ့ stock အဝင်အထွက်မှတ်တမ်းတွေကို ချိတ်ဆက်ထားတဲ့ tables တွေမှာ သိမ်းနိုင်တယ်။')],
          ['Document · MongoDB', p('A catalog that usually reads an entire product with its category-specific attributes can represent each product as a document.', 'အမျိုးအစားအလိုက် field တွေ ကွာပြီး product အသေးစိတ်ကို တစ်စုတည်း ဖတ်ရတဲ့ catalog မှာ product တစ်ခုစီကို document တစ်ခုအဖြစ် သိမ်းနိုင်တယ်။')],
          ['Key-value · Redis', p('Cache a frequently read product listing under a known key. Set an expiry and refresh or remove the cached entry after catalog changes as needed.', 'မကြာခဏ ဖတ်တဲ့ product စာရင်းကို သတ်မှတ်ထားတဲ့ key နဲ့ cache ထားနိုင်တယ်။ သက်တမ်း သတ်မှတ်ပြီး catalog ပြောင်းတဲ့အခါ လိုအပ်ရင် cache ကို အသစ်ပြန်ဖြည့်ပါ သို့မဟုတ် ဖယ်ပါ။')],
          ['Graph · Neo4j', p('A graph suits queries that follow several links, such as tracing dependencies between parts.', 'Part တစ်ခုက ဘယ် part တွေအပေါ် မှီလဲဆိုပြီး အဆင့်ဆင့်လိုက်ရှာရင် graph model ကို စဉ်းစားပါ။')],
          ['Wide-column · Cassandra', p('Use a known partition-key-based access pattern, such as retrieving movement events by warehouse and day.', 'ဂိုဒေါင်နဲ့ ရက်အလိုက် movement events ဖတ်တာလို partition key နဲ့ ရှာမယ့်ပုံစံ ကြိုသိထားရင် wide-column model ကို စဉ်းစားနိုင်တယ်။')],
        ],
      },
      {
        ...snippet('oltp-olap', p('Compare operational queries and analytics', 'နေ့စဉ်လုပ်ငန်းနဲ့ Data ခွဲခြမ်းမှုကို နှိုင်းယှဉ်ခြင်း'),
          p('The same inventory app may record a transfer in the morning and summarize months of transfers in an afternoon report. Those two jobs read and write data in different ways. OLTP and OLAP describe workloads. Measure the cost of reports on the operational database before introducing a separate analytical store.', 'Stock အပြောင်းအလဲတစ်ခုကို ချက်ချင်းမှတ်တမ်းတင်တာနဲ့ လပေါင်းများစွာက မှတ်တမ်းတွေကို စုတွက်ပြီး report ထုတ်တာမှာ ဖတ်ရေးပမာဏ ကွာပါတယ်။ OLTP နဲ့ OLAP က database က ကိုင်တွယ်ရတဲ့ အလုပ်ပုံစံတွေပါ။ Analytics အတွက် သီးသန့် store မထည့်ခင် report တွေ run လိုက်တဲ့အခါ လက်ရှိ database ပေါ် ဘယ်လောက် သက်ရောက်လဲ တိုင်းပါ။'), `-- OLTP: read one balance while taking an order.
SELECT quantity FROM stock_balances
WHERE warehouse_id = 3 AND product_id = 42;

-- OLAP: summarize movements across several months.
SELECT date_trunc('month', moved_at) AS month, SUM(quantity) AS units_moved
FROM stock_movements
WHERE moved_at >= DATE '2026-01-01'
GROUP BY month
ORDER BY month;`),
        terms: [
          ['OLTP', p('Record a stock transfer as the user submits it and update the affected balances.', 'User က stock transfer တင်လိုက်တာနဲ့ မှတ်တမ်းသိမ်းပြီး သက်ဆိုင်ရာ လက်ကျန်တွေကို ပြင်တယ်။')],
          ['OLAP', p('Summarize months of movements across products and warehouses to see stock trends. Many small teams can start with SQL reports in their relational database and move heavier reporting elsewhere as it grows.', 'Stock အပြောင်းအလဲ သိဖို့ လပေါင်းများစွာက မှတ်တမ်းတွေကို product နဲ့ ဂိုဒေါင်အလိုက် စုပေါင်းတွက်တယ်။ အစမှာ လက်ရှိ relational database ထဲက SQL report နဲ့ စပြီး report workload ကြီးလာရင် သီးသန့်ခွဲနိုင်တယ်။')],
        ],
      },
    ],
    [['AWS Well-Architected · Data management', 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/data-management.html'],
     ['IBM · OLAP and OLTP', 'https://www.ibm.com/think/topics/olap-vs-oltp'],
     ['MongoDB · NoSQL database types', 'https://www.mongodb.com/resources/basics/databases/nosql-explained']]),
  version: '',
};

export const storageAndRecovery = {
  ...page('storage-and-recovery', p('Database storage and crash recovery', 'Database Storage နဲ့ Crash Recovery'),
    p('Follow a stock update from memory to storage and see how PostgreSQL recovers after an unexpected shutdown.', 'Stock ပြင်တဲ့အခါ memory နဲ့ storage မှာ ဘာဖြစ်လဲ၊ PostgreSQL ရုတ်တရက် ရပ်သွားရင် ဘယ်လို ပြန်တက်လာလဲ လေ့လာပါ။'),
    [
      snippet('pages-and-buffers', p('Data pages and memory buffers', 'Data Pages နဲ့ Memory Buffers'),
        p('PostgreSQL organizes table and index data into pages. When a query needs a page, PostgreSQL can use a copy already in shared buffers or load the page if needed. A changed page in memory is called dirty until it is written out.', 'PostgreSQL က table နဲ့ index data ကို page တွေအဖြစ် စီထားတယ်။ Query တစ်ခုက page လိုလာရင် shared buffers ထဲမှာ ရှိပြီးသားကို သုံးနိုင်တယ်၊ မရှိရင် လိုတဲ့ page ကို ဖတ်ယူတယ်။ Memory ထဲမှာ ပြောင်းထားပြီး storage ဆီ မရေးရသေးတဲ့ page ကို dirty page လို့ ခေါ်တယ်။'), `-- Run twice and compare shared buffer hits and reads.
EXPLAIN (ANALYZE, BUFFERS)
SELECT title
FROM courses
WHERE id = 1;`),
      {
        ...snippet('wal-and-checkpoints', p('Write-ahead log and checkpoints', 'Write-Ahead Log နဲ့ Checkpoints'),
          p('A dirty page can still be in memory when a transaction commits. How can PostgreSQL recover the stock update if the server loses power before that page is written? PostgreSQL records page changes in write-ahead log (WAL) before the corresponding changed data pages reach durable storage. With normal durability settings, it flushes the required WAL before confirming a commit. It can write the data pages later.', 'Transaction က commit ဖြစ်ချိန်မှာ ပြင်ထားတဲ့ data page က memory ထဲမှာပဲ ရှိနေနိုင်ပါတယ်။ မီးပြတ်သွားရင်လည်း ဒီပြောင်းလဲမှုကို ပြန်ယူနိုင်ဖို့ log လိုအပ်ပါတယ်။ ပြောင်းထားတဲ့ data pages တွေကို storage မှာ အတည်တကျ မရေးခင် PostgreSQL က ပြောင်းလဲမှုတွေကို Write-Ahead Log (WAL) မှာ အရင်မှတ်တယ်။ ပုံမှန် durability setting တွေနဲ့ဆို commit အောင်မြင်ကြောင်း မပြောခင် လိုတဲ့ WAL records ကို storage ဆီ ရေးတယ်။ Data pages ကို နောက်မှ ရေးလို့ရတယ်။'), `-- PostgreSQL: compare these statistics before and after a write.
SELECT wal_records, wal_bytes
FROM pg_stat_wal;

SELECT num_timed, num_requested
FROM pg_stat_checkpointer;`),
        terms: [
          ['Checkpoint', p('Writes dirty pages as part of establishing a recovery point. Recovery can start replaying WAL from the redo point associated with the checkpoint.', 'Recovery စနိုင်မယ့် အမှတ်တစ်ခု ထားဖို့ dirty pages တွေကို storage ဆီ ရေးတယ်။ Recovery လုပ်ရင် checkpoint နဲ့ ဆက်စပ်တဲ့ redo point ကနေ WAL ပြန်ဖတ်ပြီး ပြောင်းလဲမှုတွေ ပြန်သုံးနိုင်တယ်။')],
          ['Crash recovery', p('If the server stops after confirming a stock update but before writing its data page, recovery can replay the logged change on startup.', 'Stock ပြင်တာ commit အောင်မြင်ပြီး data page မရေးရသေးခင် server ရပ်သွားရင် ပြန်ဖွင့်တဲ့အခါ WAL မှာ ရေးထားတဲ့ ပြောင်းလဲမှုကို ပြန်သုံးနိုင်တယ်။')],
        ],
      },
      snippet('backup-and-recovery', p('When a restore is needed', 'Backup ကနေ Restore လုပ်ရမယ့် အချိန်'),
        p('WAL replay can recover after a crash when the server still has the data files and WAL it needs. Restoring a deleted record or recovering from storage loss needs another source for the data. Crash recovery brings a database with intact storage back to a consistent state. For accidental deletion or storage loss, use a tested backup and restore procedure. Point-in-time recovery requires an appropriate base backup and the archived WAL needed to reach the target time.', 'Data files နဲ့ လိုအပ်တဲ့ WAL ရှိနေသေးရင် PostgreSQL က crash ဖြစ်ပြီးနောက် data ကို ပြန်လည်တည်ငြိမ်အောင် လုပ်နိုင်ပါတယ်။ Data မှားဖျက်မိတာ၊ storage ပျက်တာဆိုရင် စမ်းသပ်ထားတဲ့ backup နဲ့ restore လုပ်နည်းကို သုံးပါ။ သတ်မှတ်ချိန်တစ်ခုဆီ ပြန်သွားဖို့ကိုတော့ သင့်တော်တဲ့ base backup နဲ့ အဲဒီအချိန်ထိ လိုတဲ့ archived WAL တွေ လိုတယ်။'), `# Restore a custom-format backup into a separate test database.
createdb learning_restore
pg_restore --exit-on-error -d learning_restore learning_db.dump

# Verify the restored course data.
psql -d learning_restore -c "SELECT COUNT(*) FROM courses;"`),
    ],
    [['PostgreSQL · Database page layout', pg + 'storage-page-layout.html'],
     ['PostgreSQL · Write-ahead log', pg + 'wal-intro.html'],
     ['PostgreSQL · Checkpoints', pg + 'wal-configuration.html'],
     ['PostgreSQL · Continuous archiving and point-in-time recovery', pg + 'continuous-archiving.html']]),
  version: '',
};

export const databaseScaling = {
  ...page('database-scaling', p('Database scaling, replication, and sharding', 'Database Scaling၊ Replication နဲ့ Sharding'),
    p('Compare adding capacity to one server, copying data to replicas, and distributing different parts of a dataset across servers.', 'Server တစ်လုံးကို စွမ်းရည်တိုးတာ၊ data ကို servers အများကြီးဆီ ကူးတာနဲ့ dataset ကို အပိုင်းခွဲပြီး servers အများကြီးမှာ ထားတာတို့ကို နှိုင်းယှဉ်ပါ။'),
    [
      {
        ...snippet('capacity', p('Identify what is reaching its limit', 'ဘယ်အပိုင်းမှာ စွမ်းရည် ကန့်သတ်လာလဲ စစ်ခြင်း'),
          p('Look at query time, CPU, memory and disk usage, and read and write traffic. Adding CPU, memory, or storage to one server is vertical scaling. Using additional servers to share work is horizontal scaling.', 'Query ကြာချိန်၊ CPU၊ memory၊ disk သုံးစွဲမှုနဲ့ အဖတ်အရေးပမာဏကို ကြည့်ပါ။ Server တစ်လုံးကို CPU၊ memory သို့မဟုတ် storage တိုးပေးတာက vertical scaling ပါ။ အလုပ်မျှဝေဖို့ server တွေ ထပ်သုံးတာက horizontal scaling ပါ။'), `-- Find the queries that use the most shared block reads.
-- Requires pg_stat_statements to be enabled.
SELECT calls, total_exec_time, shared_blks_read, query
FROM pg_stat_statements
ORDER BY shared_blks_read DESC
LIMIT 5;`),
        terms: [
          ['Replication', p('Copy changes from a primary to other servers. Read replicas can serve read traffic and a suitable standby can support failover. With asynchronous replication, recent writes can take time to appear on a replica.', 'Primary server က အပြောင်းအလဲတွေကို တခြား servers ဆီ ကူးပေးတယ်။ Read replica က ဖတ်တဲ့ request တွေကို ကိုင်တွယ်နိုင်ပြီး standby ကို failover အတွက် သုံးနိုင်တယ်။ Asynchronous replication မှာ နောက်ဆုံးရေးထားတာ replica မှာ ပေါ်လာဖို့ အချိန်နည်းနည်း ကြာနိုင်တယ်။')],
          ['Table partitioning', p('Split a logical table into smaller parts, such as one partition per month, so the engine can skip irrelevant partitions for suitable queries. These partitions can live on one server.', 'Table တစ်ခုကို လအလိုက်လိုမျိုး အပိုင်းခွဲထားရင် သင့်တော်တဲ့ query တွေမှာ မဆိုင်တဲ့အပိုင်းကို engine က ကျော်နိုင်တယ်။ ဒီ partitions တွေကို server တစ်လုံးတည်းမှာလည်း ထားနိုင်တယ်။')],
          ['Sharding', p('Distribute different parts of the same dataset across servers. A shard key helps route reads and writes to the right shard. A query spanning several shards may need extra work to gather and combine results.', 'Dataset တစ်ခုတည်းကို အပိုင်းခွဲပြီး မတူတဲ့ servers တွေပေါ် ဖြန့်ထားတယ်။ Shard key က ဖတ်ရမယ့်၊ ရေးရမယ့် shard ကို ရွေးဖို့ ကူညီတယ်။ Shard အများကြီးက data လိုတဲ့ query ဆိုရင် ရလဒ်တွေ ပြန်စုဖို့ အလုပ်ပိုလာနိုင်တယ်။')],
        ],
      },
      snippet('warehouse-example', p('Apply the choices to inventory', 'Inventory App မှာ Scaling ရွေးပုံ'),
        p('Apply the two mechanisms to different requests. A replica can serve another copy of the data, and a shard can hold just the records for one part of the inventory. If a read-heavy report can tolerate a short delay, examine whether a read replica helps. For a dataset distributed by warehouse ID, a query for one warehouse can target fewer shards, while a cross-warehouse report may have to read many. Check how traffic is distributed so that one busy warehouse does not dominate a shard.', 'Inventory app မှာ report ဖတ်တဲ့ အလုပ်ကို replica ဆီ ခွဲပေးနိုင်သလို သိမ်းရမယ့် မှတ်တမ်းတွေကိုလည်း ဂိုဒေါင်အလိုက် shard ခွဲနိုင်ပါတယ်။ Report ဖတ်တာ များပြီး data နောက်ကျနည်းနည်းကို လက်ခံနိုင်ရင် read replica သုံးလို့ အဆင်ပြေမပြေ စမ်းကြည့်ပါ။ Warehouse ID နဲ့ shard ခွဲထားရင် ဂိုဒေါင်တစ်ခုတည်းကို ဖတ်တဲ့ query က shard နည်းနည်းပဲ ဖတ်ရနိုင်ပြီး ဂိုဒေါင်အားလုံးပါတဲ့ report က shard အများကြီး ဖတ်ရနိုင်တယ်။ ဂိုဒေါင်တစ်ခုတည်းက traffic အများကြီးကို ကိုင်နေရလားဆိုတာလည်း တိုင်းပါ။'), `-- The backend can route this report to a read replica if
-- it can tolerate replication lag.
SELECT SUM(quantity) AS total_units
FROM stock_balances
WHERE warehouse_id = 3;

-- In a sharded design, warehouse_id = 3 also tells the
-- shard router which part of the inventory to query.`),
    ],
    [['PostgreSQL · Replication and standby servers', pg + 'high-availability.html'],
     ['PostgreSQL · Table partitioning', pg + 'ddl-partitioning.html'],
     ['MongoDB · Sharding', 'https://www.mongodb.com/docs/manual/sharding/']]),
  version: '',
};
