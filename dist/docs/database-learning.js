import { p, page, part, snippet } from './content.js';

const pg = 'https://www.postgresql.org/docs/19/';

export const databaseSelection = {
  ...page('choosing-a-database',
    p('How to Choose a Database for Your Application', 'Software တစ်ခုအတွက် Database ဘယ်လို ရွေးမလဲ'),
    p(
      'Selecting a database requires aligning data structure, access patterns, consistency guarantees, and scaling demands against the architectural trade-offs of each storage engine.',
      'Software အတွက် Database ရွေးတဲ့အခါ data ဖွဲ့စည်းပုံ၊ ဖတ်ပုံရေးပုံ၊ data တစ်သမတ်တည်းဖြစ်ဖို့ လိုအပ်ချက်နဲ့ workload တိုးလာမယ့်ပုံတို့ကို Database Engine တစ်ခုချင်းစီရဲ့ အားသာချက်၊ အကန့်အသတ်တွေနဲ့ တိုက်ဆိုင်စစ်ဆေးပါ။'
    ),
    [
      {
        ...snippet('requirements', p('1. Core Evaluation Dimensions', '1. Database ရွေးရာမှာ စစ်ဆေးရမယ့် အချက်များ')),
        blocks: p(
          [
            ['paragraph', 'Evaluate five technical dimensions before selecting a database engine.'],
            ['bullets', [
              '**Data model and schema stability.** Related records with well-defined fields fit tables. Frequent multi-hop relationship queries can favor a graph, and nested records with varying fields can fit documents.',
              '**Access and query patterns.** List what the app reads and writes. Ad hoc filters, joins, and aggregations benefit from a flexible query planner. Predictable single-key lookups can use a simpler access path.',
              '**Consistency and transaction guarantees.** Decide whether reads can briefly return stale data and which writes must succeed or fail together. Check transaction scope and read guarantees for the specific engine and configuration.',
              '**Scale and throughput.** Separate a larger server from distributing work across servers. Read replicas and caching can offload reads. For write-heavy workloads, evaluate partitioning or sharding, including how writes spread across partitions.',
              '**Operations and ecosystem.** Compare deployment, backup and restore, licensing, query language familiarity, and managed-service options. Operational cost can outweigh a small throughput advantage.',
            ]],
          ],
          [
            ['paragraph', 'Database Engine မရွေးခင် အောက်ပါအချက် 5 ခုကို စစ်ဆေးပါ။'],
            ['bullets', [
              '**Data model နဲ့ schema တည်ငြိမ်မှု။** Field တွေ သတ်မှတ်ပြီး တစ်ခုနဲ့တစ်ခု ဆက်စပ်နေတဲ့ မှတ်တမ်းတွေကို table တွေနဲ့ သိမ်းလို့ရပါတယ်။ ဆက်စပ်မှု အဆင့်ဆင့်ကို မကြာခဏ လိုက်ရှာရင် graph ကို စဉ်းစားပါ။ အတွင်းမှာ data ထပ်ဆင့်ပါပြီး record တစ်ခုနဲ့တစ်ခု field ကွာနိုင်ရင် document ပုံစံ သင့်တော်နိုင်ပါတယ်။',
              '**Data ဖတ်ရေးပုံနဲ့ query များ။** App က ဘာတွေကို ဖတ်မလဲ၊ ဘာတွေကို ရေးမလဲ စာရင်းချပါ။ Filter ပုံစံမျိုးစုံ၊ join နဲ့ စုတွက်ချက်မှုတွေ လိုရင် query ပုံစံမျိုးစုံကို ကိုင်တွယ်နိုင်ဖို့ လိုပါတယ်။ သိပြီးသား key တစ်ခုနဲ့ပဲ ရှာရရင် ပိုရိုးရှင်းတဲ့ ရှာဖွေနည်းကို သုံးနိုင်ပါတယ်။',
              '**Consistency နဲ့ transaction အာမခံချက်များ။** Data အဟောင်းကို ခဏဖတ်မိတာ လက်ခံနိုင်လား၊ ဘယ်အပြောင်းအလဲတွေက အားလုံးအတူ အောင်မြင်ရမလဲ သတ်မှတ်ပါ။ ရွေးမယ့် engine နဲ့ settings က ပေးနိုင်တဲ့ transaction နယ်ပယ်နဲ့ ဖတ်ရှုမှု အာမခံချက်တွေကို စစ်ပါ။',
              '**စက်စွမ်းရည်နဲ့ တစ်ချိန်တည်း လုပ်ဆောင်နိုင်တဲ့ ပမာဏ။** စက်တစ်လုံးကို အဆင့်မြှင့်တာနဲ့ စက်အများအပြားကို ဖြန့်သုံးတာကို ခွဲစဉ်းစားပါ။ ဖတ်တာများရင် read replica နဲ့ cache က ဝန်ခွဲပေးနိုင်ပါတယ်။ ရေးတာများရင် partitioning သို့မဟုတ် sharding လုပ်နိုင်ပုံနဲ့ ရေးတဲ့ဝန် ဘယ်လို ပြန့်သွားမလဲ စစ်ပါ။',
              '**ထိန်းသိမ်းရတဲ့ ဝန်နဲ့ ရနိုင်တဲ့ ဝန်ဆောင်မှုများ။** Deploy လုပ်ပုံ၊ backup နဲ့ restore၊ license၊ query language ကျွမ်းကျင်မှုနဲ့ managed service ရနိုင်မှုကို နှိုင်းယှဉ်ပါ။ မြန်နှုန်း အနည်းငယ် ပိုကောင်းပေမယ့် ထိန်းသိမ်းရတဲ့ ဝန် ပိုများနိုင်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('compare-models', p('2. Database Paradigm Comparison', '2. Database ပုံစံများ နှိုင်းယှဉ်ခြင်း')),
        blocks: p(
          [
            ['paragraph', 'These are common patterns. Consistency guarantees and scaling options vary by engine and configuration.'],
            ['table', [
              ['Paradigm', 'Data Structure', 'Query Strength', 'Consistency', 'Scaling Model', 'Primary Fit'],
              ['**Relational (SQL)**', 'Tables with typed columns and constraints', 'Joins, ad hoc filters, aggregations', 'ACID transactions. Isolation and replica reads depend on configuration.', 'Larger primary, read replicas, or distributed SQL depending on the engine', 'Structured records with relational integrity'],
              ['**Document**', 'Nested JSON or BSON-like documents', 'Indexed field queries and nested document retrieval', 'Many engines support atomic document writes. Multi-document guarantees vary.', 'Some engines shard documents horizontally', 'Semi-structured records with evolving fields'],
              ['**Key-Value**', 'Unique keys mapped to values', 'Direct lookup by key', 'May be strong, eventual, or tunable', 'Cluster or partition data when supported', 'Caching, sessions, and other key-based access'],
              ['**Wide-Column**', 'Partitioned rows. Some engines organize columns into column families.', 'Lookups by partition key and ordered scans within a partition', 'Often tunable', 'Distributes writes across nodes when partition keys spread the load', 'High-ingest logs and time-ordered records'],
              ['**Graph**', 'Nodes, relationships, and properties', 'Multi-hop traversal and path queries', 'Transaction and read guarantees vary by engine', 'Scale-up, replication, or partitioning depending on the engine', 'Queries over densely connected data'],
              ['**Specialized (Time-Series / Vector)**', 'Timestamped measurements or embeddings', 'Time-window rollups or nearest-neighbor search', 'Depends on storage and indexing guarantees', 'Time-based partitions or distributed indexes, depending on the engine', 'Telemetry and semantic similarity'],
            ], 'Database paradigm comparison'],
          ],
          [
            ['paragraph', 'ဇယားက အသုံးများတဲ့ ပုံစံတွေကို ပြထားပါတယ်။ Consistency နဲ့ scale လုပ်နိုင်ပုံက engine နဲ့ settings ပေါ် မူတည်ပါတယ်။'],
            ['table', [
              ['Database ပုံစံ', 'Data ဖွဲ့စည်းပုံ', 'အားသာတဲ့ Query', 'Consistency', 'Scale လုပ်ပုံ', 'သင့်တော်တဲ့ အလုပ်'],
              ['**Relational (SQL)**', 'Data type နဲ့ constraint သတ်မှတ်ထားတဲ့ table များ', 'Join၊ filter မျိုးစုံနဲ့ စုတွက်ချက်ခြင်း', 'ACID transaction ပါတယ်။ Isolation နဲ့ replica က ဖတ်ပုံက settings ပေါ် မူတည်ပါတယ်။', 'Primary စက် အဆင့်မြှင့်ခြင်း၊ read replica သို့မဟုတ် distributed SQL', 'ဆက်စပ်မှတ်တမ်းတွေ စည်းကမ်းနဲ့ ကိုက်ညီဖို့ လိုတဲ့အလုပ်'],
              ['**Document**', 'JSON သို့မဟုတ် BSON ပုံစံ အထပ်ဆင့် document များ', 'Index ပါတဲ့ field နဲ့ ရှာခြင်း၊ အထပ်ဆင့် document ဖတ်ခြင်း', 'Engine အများအပြားက document တစ်ခုကို atomic ဖြစ်အောင် ရေးနိုင်ပါတယ်။ Document အများအပြားအတွက် အာမခံချက် ကွာပါတယ်။', 'တချို့ engine တွေက document တွေကို shard တွေအလိုက် ဖြန့်နိုင်ပါတယ်။', 'Record တစ်ခုနဲ့တစ်ခု field ကွာနိုင်တဲ့ data'],
              ['**Key-Value**', 'မထပ်တဲ့ key နဲ့ သက်ဆိုင်ရာ value', 'Key နဲ့ တိုက်ရိုက် ရှာခြင်း', 'Strong၊ eventual သို့မဟုတ် ချိန်ညှိနိုင်တဲ့ ပုံစံ ရှိပါတယ်။', 'Engine ပံ့ပိုးရင် cluster သို့မဟုတ် partition ခွဲနိုင်ပါတယ်။', 'Cache၊ session နဲ့ key အခြေခံ ဖတ်ရှုမှု'],
              ['**Wide-Column**', 'Partition ခွဲထားတဲ့ row များ။ တချို့ engine တွေက column family နဲ့ စုပါတယ်။', 'Partition key နဲ့ ရှာခြင်း၊ partition အတွင်း အစဉ်လိုက်ဖတ်ခြင်း', 'အများအားဖြင့် ချိန်ညှိနိုင်ပါတယ်။', 'Partition key တွေက ဝန်ကို ဖြန့်ပေးနိုင်ရင် node အများအပြားက ရေးပေးနိုင်ပါတယ်။', 'ဝင်လာတဲ့ log အများအပြားနဲ့ အချိန်စဉ်လိုက် record များ'],
              ['**Graph**', 'Node၊ ဆက်စပ်မှုနဲ့ property များ', 'ဆက်စပ်မှု အဆင့်ဆင့် လိုက်ရှာခြင်း', 'Transaction နဲ့ ဖတ်ရှုမှု အာမခံချက်က engine ပေါ် မူတည်ပါတယ်။', 'စက်အဆင့်မြှင့်ခြင်း၊ replication သို့မဟုတ် partition ခွဲခြင်း', 'ဆက်စပ်မှုများတဲ့ data ကို လိုက်ရှာတဲ့ query များ'],
              ['**Specialized (Time-Series / Vector)**', 'အချိန်ပါ တိုင်းတာချက်များ သို့မဟုတ် embedding များ', 'အချိန်ပိုင်းအလိုက် စုတွက်ခြင်း သို့မဟုတ် အနီးစပ်ဆုံး ရှာခြင်း', 'သိမ်းဆည်းပုံနဲ့ index အာမခံချက်ပေါ် မူတည်ပါတယ်။', 'အချိန်အလိုက် partition ခွဲခြင်း သို့မဟုတ် index ဖြန့်ခြင်း', 'Telemetry နဲ့ အဓိပ္ပါယ်အရ ဆင်တူမှု ရှာဖွေခြင်း'],
            ], 'Database ပုံစံများ နှိုင်းယှဉ်ဇယား'],
          ],
        ),
      },
      {
        ...snippet('project-mapping', p('3. Project-to-Database Mapping', '3. Project အမျိုးအစားအလိုက် Database ရွေးချယ်ခြင်း')),
        blocks: p(
          [['table', [
            ['Project Type', 'Database Paradigm', 'Common Engines', 'Primary Rationale'],
            ['**Banking, Fintech, ERP & E-commerce**', 'Relational (SQL)', 'PostgreSQL, MySQL, Oracle, SQL Server', 'ACID transactions and relational constraints across accounts, orders, and inventory'],
            ['**CMS, Product Catalogs & Mobile Backends**', 'Document (NoSQL)', 'MongoDB, Firestore, Couchbase', 'Nested documents can accommodate fields that vary by record'],
            ['**Caching, Session Storage & Real-Time Leaderboards**', 'Key-Value', 'Redis, Valkey, Memcached, DynamoDB', 'Fast key-based lookup. Choose an engine with suitable persistence or ranking support for the job.'],
            ['**Social Networks, Fraud Detection & Recommendations**', 'Graph', 'Neo4j, Amazon Neptune', 'Traverse several connected entities to find paths or neighborhoods'],
            ['**IoT Sensors, Server Monitoring & Financial Tick Data**', 'Time-Series', 'TimescaleDB, InfluxDB, Prometheus', 'Ingest timestamped data and aggregate it over time windows. Prometheus is primarily for monitoring metrics.'],
            ['**Chat, Event Logging & Activity Feeds**', 'Wide-Column', 'Apache Cassandra, ScyllaDB', 'Distribute writes and retrieve ordered records by a known partition key'],
            ['**AI / LLM Apps, RAG & Semantic Search**', 'Vector', 'Pinecone, Qdrant, Milvus, pgvector', 'Store embeddings and retrieve nearest matches. pgvector adds this capability to PostgreSQL.'],
            ['**Site Search & Log Analytics**', 'Search Engine', 'Elasticsearch, OpenSearch, Meilisearch', 'Index text for full-text search and, where supported, fuzzy matching and faceted filtering'],
            ['**BI & Data Warehousing**', 'Columnar (OLAP)', 'ClickHouse, BigQuery, Snowflake', 'Scan the columns needed for large analytical queries and aggregations'],
          ], 'Project-to-database mapping']],
          [['table', [
            ['Project အမျိုးအစား', 'Database ပုံစံ', 'အသုံးများတဲ့ Engine များ', 'အဓိက ရွေးချယ်ရတဲ့ အကြောင်းရင်း'],
            ['**ဘဏ်လုပ်ငန်း၊ Fintech၊ ERP နဲ့ E-commerce**', 'Relational (SQL)', 'PostgreSQL, MySQL, Oracle, SQL Server', 'Account၊ order နဲ့ inventory မှတ်တမ်းတွေကို ACID transaction နဲ့ constraint သုံးပြီး စည်းကမ်းနဲ့ ကိုက်ညီအောင် ထိန်းနိုင်ပါတယ်။'],
            ['**CMS၊ ကုန်ပစ္စည်းစာရင်းနဲ့ Mobile Backend**', 'Document (NoSQL)', 'MongoDB, Firestore, Couchbase', 'Record တစ်ခုနဲ့တစ်ခု မတူတဲ့ field တွေကို အထပ်ဆင့် document ပုံစံနဲ့ သိမ်းနိုင်ပါတယ်။'],
            ['**Cache၊ Session နဲ့ အချိန်နှင့်တစ်ပြေးညီ အဆင့်စာရင်း**', 'Key-Value', 'Redis, Valkey, Memcached, DynamoDB', 'Key နဲ့ မြန်မြန် ရှာနိုင်ပါတယ်။ Data တည်မြဲဖို့ သို့မဟုတ် အဆင့်စီဖို့ လိုရင် အဲဒီအလုပ်ကို ပံ့ပိုးတဲ့ engine ကို ရွေးပါ။'],
            ['**Social Network၊ လိမ်လည်မှု ရှာဖွေခြင်းနဲ့ အကြံပြုစနစ်**', 'Graph', 'Neo4j, Amazon Neptune', 'အရာဝတ္ထုတွေကြား ဆက်စပ်မှု အဆင့်ဆင့်ကို လိုက်ပြီး လမ်းကြောင်းနဲ့ အနီးစပ်ဆုံး ဆက်စပ်မှုတွေ ရှာနိုင်ပါတယ်။'],
            ['**IoT Sensor၊ Server Monitoring နဲ့ ဈေးနှုန်း အပြောင်းအလဲမှတ်တမ်း**', 'Time-Series', 'TimescaleDB, InfluxDB, Prometheus', 'အချိန်ပါတဲ့ data ကို လက်ခံပြီး အချိန်ပိုင်းအလိုက် စုတွက်နိုင်ပါတယ်။ Prometheus ကို monitoring metrics အတွက် အဓိက သုံးပါတယ်။'],
            ['**Chat၊ Event Log နဲ့ Activity Feed**', 'Wide-Column', 'Apache Cassandra, ScyllaDB', 'ရေးတဲ့ဝန်ကို ဖြန့်ပြီး သိထားတဲ့ partition key နဲ့ မှတ်တမ်းတွေကို အစဉ်လိုက် ပြန်ဖတ်နိုင်ပါတယ်။'],
            ['**AI / LLM App၊ RAG နဲ့ Semantic Search**', 'Vector', 'Pinecone, Qdrant, Milvus, pgvector', 'Embedding တွေ သိမ်းပြီး အနီးစပ်ဆုံးကို ပြန်ရှာနိုင်ပါတယ်။ pgvector က ဒီလုပ်ဆောင်ချက်ကို PostgreSQL မှာ ထည့်ပေးတဲ့ extension ပါ။'],
            ['**ဆိုက်အတွင်း ရှာဖွေမှုနဲ့ Log ခွဲခြမ်းခြင်း**', 'Search Engine', 'Elasticsearch, OpenSearch, Meilisearch', 'စာသားကို index လုပ်ပြီး full-text search လုပ်နိုင်ပါတယ်။ တချို့ engine တွေက စာလုံးပေါင်း အနည်းငယ်လွဲရင် ရှာပေးတာနဲ့ အမျိုးအစားအလိုက် filter လုပ်တာကိုလည်း ပံ့ပိုးပါတယ်။'],
            ['**BI နဲ့ Data Warehouse**', 'Columnar (OLAP)', 'ClickHouse, BigQuery, Snowflake', 'Data အများအပြားကို ခွဲခြမ်းတဲ့အခါ လိုတဲ့ column တွေကို ဖတ်ပြီး စုတွက်နိုင်ပါတယ်။'],
          ], 'Project အမျိုးအစားအလိုက် Database ရွေးချယ်ဇယား']],
        ),
      },
      {
        ...snippet('multi-database', p('4. Multi-Database Combinations in Production Systems', '4. Production စနစ်မှာ Database မျိုးစုံ တွဲသုံးပုံ')),
        blocks: p(
          [
            ['paragraph', 'A production system can combine several stores when different workloads have different needs.'],
            ['bullets', [
              '**E-commerce platform.** PostgreSQL for accounts, orders, and payments. MongoDB or PostgreSQL JSONB for flexible product specifications. Redis for carts and sessions. Elasticsearch for product search.',
              '**Social media platform.** MySQL or PostgreSQL for core profiles. A graph database for social links and recommendations. Redis for feed caching. Cassandra for high-volume messaging and activity logs.',
              '**AI knowledge application.** PostgreSQL for users and app metadata. A vector database or `pgvector` for semantic retrieval. Redis for caching frequently requested results.',
            ]],
          ],
          [
            ['paragraph', 'Production စနစ်တစ်ခုမှာ အလုပ်တစ်မျိုးစီရဲ့ လိုအပ်ချက် ကွာရင် Database မျိုးစုံ တွဲသုံးနိုင်ပါတယ်။'],
            ['bullets', [
              '**E-commerce platform။** Account၊ order နဲ့ ငွေပေးချေမှုအတွက် PostgreSQL သုံးနိုင်ပါတယ်။ ပစ္စည်းတစ်မျိုးနဲ့တစ်မျိုး specification ကွာရင် MongoDB သို့မဟုတ် PostgreSQL JSONB သုံးနိုင်ပါတယ်။ Cart နဲ့ session အတွက် Redis၊ ပစ္စည်းရှာဖို့ Elasticsearch သုံးနိုင်ပါတယ်။',
              '**Social media platform။** Profile မှတ်တမ်းတွေအတွက် MySQL သို့မဟုတ် PostgreSQL၊ ဆက်စပ်မှုနဲ့ အကြံပြုချက်တွေအတွက် graph database သုံးနိုင်ပါတယ်။ Feed တွေကို Redis မှာ cache ထားနိုင်ပြီး message နဲ့ activity log အများအပြားကို Cassandra မှာ သိမ်းနိုင်ပါတယ်။',
              '**AI knowledge application။** User နဲ့ app metadata အတွက် PostgreSQL၊ အဓိပ္ပါယ်အရ ဆင်တူတဲ့ အကြောင်းအရာ ရှာဖို့ vector database သို့မဟုတ် `pgvector` သုံးနိုင်ပါတယ်။ မကြာခဏ တောင်းတဲ့ရလဒ်တွေကို Redis မှာ cache ထားနိုင်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('workload-decision-tree', p('5. Workload Decision Tree', '5. Workload အလိုက် ရွေးချယ်ပုံ')),
        blocks: p(
          [
            ['heading', 'Text Decision Tree'],
            ['paragraph', 'Start with the primary operation the project must handle well.'],
            ['bullets', [
              '**Transactional accuracy and structured relations → Relational (SQL).** Banking, orders and payments, ERP, or inventory. PostgreSQL, MySQL, and SQL Server support transactions and multi-table joins.',
              '**Flexible, evolving records → Document (NoSQL).** CMS, product catalogs, or mobile backends. MongoDB, Firestore, and Couchbase support nested documents with varying fields.',
              '**Fast key lookups or high write throughput → Key-Value or Wide-Column.** Redis or DynamoDB for key-based access, such as sessions. Cassandra for partitioned writes and ordered reads, such as event logs.',
              '**Multi-hop relationships → Graph.** Social networks, fraud detection, or recommendations. Neo4j and Amazon Neptune are designed to traverse connected records.',
              '**Time-series, search, AI, or analytics → Specialized engine.** TimescaleDB for time-window queries, Qdrant or pgvector for similarity search, Elasticsearch for full-text search, and ClickHouse for large aggregations.',
            ]],
            ['heading', 'Mermaid Flowchart'],
          ],
          [
            ['heading', 'စာသားဖြင့် ရွေးချယ်ပုံ'],
            ['paragraph', 'Project မှာ အကောင်းဆုံး လုပ်ပေးနိုင်ဖို့ လိုတဲ့ အဓိက အလုပ်ကနေ စပါ။'],
            ['bullets', [
              '**Transaction တိကျမှုနဲ့ ဆက်စပ်မှတ်တမ်းများ → Relational (SQL)။** ဘဏ်လုပ်ငန်း၊ order နဲ့ ငွေပေးချေမှု၊ ERP သို့မဟုတ် inventory အတွက် PostgreSQL၊ MySQL နဲ့ SQL Server တို့က transaction နဲ့ table အများအပြား join လုပ်တာကို ပံ့ပိုးပါတယ်။',
              '**Field တွေ ပြောင်းလဲနိုင်တဲ့ မှတ်တမ်းများ → Document (NoSQL)။** CMS၊ ပစ္စည်းစာရင်းနဲ့ mobile backend အတွက် MongoDB၊ Firestore၊ Couchbase တို့မှာ field ကွာနိုင်တဲ့ အထပ်ဆင့် document တွေ သုံးနိုင်ပါတယ်။',
              '**Key နဲ့ မြန်မြန်ရှာဖို့ သို့မဟုတ် ရေးတဲ့ပမာဏ များခြင်း → Key-Value သို့မဟုတ် Wide-Column။** Session လို key နဲ့ ပြန်ရှာတဲ့ အလုပ်အတွက် Redis သို့မဟုတ် DynamoDB ကို စဉ်းစားပါ။ Event log လို ဖြန့်ရေးပြီး အစဉ်လိုက် ပြန်ဖတ်ဖို့ Cassandra ကို စဉ်းစားပါ။',
              '**ဆက်စပ်မှု အဆင့်ဆင့်ကို လိုက်ရှာခြင်း → Graph။** Social network၊ လိမ်လည်မှု ရှာဖွေခြင်းနဲ့ အကြံပြုစနစ်အတွက် Neo4j နဲ့ Amazon Neptune တို့က ဆက်စပ်မှတ်တမ်းတွေကို တစ်ဆင့်ပြီးတစ်ဆင့် လိုက်ရှာနိုင်ပါတယ်။',
              '**Time-Series၊ Search၊ AI သို့မဟုတ် Analytics → အထူးပြု Engine။** အချိန်ပိုင်း query အတွက် TimescaleDB၊ ဆင်တူတာ ရှာဖို့ Qdrant သို့မဟုတ် pgvector၊ စာသားအပြည့် ရှာဖို့ Elasticsearch၊ data အများအပြား စုတွက်ဖို့ ClickHouse သုံးနိုင်ပါတယ်။',
            ]],
            ['heading', 'Mermaid Flowchart'],
          ],
        ),
        figure: {
          src: p('/docs/media/database/database-workload-en.svg', '/docs/media/database/database-workload-my.svg'),
          width: 894,
          height: 610,
          alt: p(
            'Decision tree mapping transactions to relational, evolving records to document, key lookups or write-heavy loads to key-value or wide-column, connected records to graph, and time-series, search, AI, or analytics to specialized engines.',
            'Transaction အတွက် relational၊ field ပြောင်းနိုင်တဲ့ record အတွက် document၊ key နဲ့ရှာခြင်း သို့မဟုတ် ရေးတာများရင် key-value သို့မဟုတ် wide-column၊ ဆက်စပ်မှုအတွက် graph နဲ့ time-series၊ search၊ AI၊ analytics အတွက် အထူးပြု engine တွေကို ရွေးချယ်ပုံ။'
          ),
        },
      },
      {
        ...snippet('architecture-principles', p('6. Architectural & Starting Principles', '6. Architecture ရွေးချယ်ရာမှာ အခြေခံထားရမယ့် အချက်များ')),
        blocks: p(
          [['bullets', [
            '**Start with a relational engine when it fits.** PostgreSQL supports structured schemas, JSONB, full-text search, and vector search through `pgvector`. Consider a specialized engine when an important requirement remains unmet or a measurable bottleneck persists.',
            '**Optimize the busiest access paths.** Storage engines trade off write amplification, read latency, and storage density. Match indexes to frequent, latency-sensitive operations, and benchmark on representative data.',
            '**Add stores selectively.** Multiple stores can address distinct workloads, but they add synchronization work and new failure modes. For an MVP, start with the fewest stores that meet the requirements and add a specialized engine when the benefit is measurable.',
          ]]],
          [['bullets', [
            '**လိုအပ်ချက်နဲ့ ကိုက်ရင် relational engine နဲ့ စပါ။** PostgreSQL မှာ schema သတ်မှတ်ပြီး data သိမ်းတာ၊ JSONB နဲ့ ပုံစံပြောင်းနိုင်တဲ့ data သိမ်းတာ၊ full-text search နဲ့ `pgvector` သုံးပြီး vector search လုပ်တာတွေ ရပါတယ်။ အရေးကြီးတဲ့ လိုအပ်ချက်တစ်ခုကို မဖြည့်နိုင်ရင် သို့မဟုတ် တိုင်းတာလို့ရတဲ့ စွမ်းဆောင်ရည်ပြဿနာ ရှိရင် အထူးပြု engine ကို စဉ်းစားပါ။',
            '**အများဆုံး သုံးမယ့် ဖတ်ရေးပုံကို ဦးစားပေးပါ။** Storage engine တစ်ခုနဲ့တစ်ခုမှာ လိုအပ်တာထက် data ပိုရေးရတဲ့ပမာဏ၊ ဖတ်ဖို့ ကြာချိန်နဲ့ သိုလှောင်နေရာ သုံးစွဲပုံ ကွာပါတယ်။ မကြာခဏ သုံးပြီး မြန်ဖို့လိုတဲ့ query တွေနဲ့ index တွေကို ကိုက်ညီအောင် စီပြီး လက်တွေ့နီးစပ်တဲ့ data နဲ့ တိုင်းပါ။',
            '**Database ထပ်ထည့်ရာမှာ လိုအပ်သလောက် ရွေးပါ။** Database အများအပြားက မတူတဲ့ အလုပ်တွေကို ကိုင်တွယ်နိုင်ပေမယ့် data ကိုက်ညီအောင် ထိန်းရတာနဲ့ စနစ်တစ်ပိုင်း ပျက်သွားရင် ပြန်ကိုင်တွယ်ရတာ ပိုများလာပါတယ်။ MVP မှာ လိုအပ်ချက်ဖြည့်နိုင်တဲ့ အနည်းဆုံး အရေအတွက်နဲ့ စပြီး အကျိုးရှိတာကို တိုင်းလို့ရမှ အထူးပြု engine ထည့်ပါ။',
          ]]],
        ),
      },
    ],
    [
      ['AWS Well-Architected · Data management', 'https://docs.aws.amazon.com/wellarchitected/latest/performance-efficiency-pillar/data-management.html'],
      ['PostgreSQL · JSON types', 'https://www.postgresql.org/docs/current/datatype-json.html'],
      ['PostgreSQL · Full-text search types', 'https://www.postgresql.org/docs/current/datatype-textsearch.html'],
      ['pgvector · Vector similarity search for PostgreSQL', 'https://github.com/pgvector/pgvector'],
      ['MongoDB · Transactions', 'https://www.mongodb.com/docs/manual/core/transactions/'],
      ['Amazon DynamoDB · Read consistency', 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html'],
      ['Apache Cassandra · Tunable consistency', 'https://cassandra.apache.org/doc/stable/cassandra/architecture/dynamo.html'],
    ]),
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
