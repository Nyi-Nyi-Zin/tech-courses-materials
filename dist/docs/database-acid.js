import { p, page, snippet } from './content.js';

const subtitle = p(
  'Core guarantees for reliable database transactions',
  'Database transaction တွေ ယုံကြည်စိတ်ချရဖို့ အခြေခံ အာမခံချက်များ'
);

const intro = p(
  'A database transaction groups one or more read or write operations into a single unit of work. A bank transfer, for example, groups the debit from one account and the credit to another. ACID describes four properties that keep those operations reliable when a step fails, several transactions run at once, or a server crashes.',
  'Database transaction ဆိုတာ data ဖတ်တာ၊ ရေးတာလို လုပ်ဆောင်ချက် တစ်ခု သို့မဟုတ် အများအပြားကို အလုပ်တစ်ခုအဖြစ် စုထားတာပါ။ ဥပမာ ငွေလွှဲရာမှာ ပို့သူရဲ့ အကောင့်က ငွေနုတ်တာနဲ့ လက်ခံသူရဲ့ အကောင့်ထဲ ငွေထည့်တာကို transaction တစ်ခုထဲမှာ စုလုပ်နိုင်ပါတယ်။ အဆင့်တစ်ခုမှာ အမှားဖြစ်ရင်၊ transaction တွေ တစ်ပြိုင်နက် run ရင်၊ server ရုတ်တရက် ရပ်သွားရင် ဒီလုပ်ဆောင်ချက်တွေကို ယုံကြည်စိတ်ချရအောင် ACID ရဲ့ အခြေခံ အာမခံချက် 4 ခုက ကူညီပေးပါတယ်။'
);

export const databaseAcid = {
  ...page('acid', p('ACID Database Properties', 'Database ရဲ့ ACID အာမခံချက်များ'), intro,
    [
      {
        ...snippet('atomicity', p('Atomicity — All or Nothing', 'Atomicity — အပြောင်းအလဲအားလုံး အတူသိမ်းခြင်း')),
        blocks: p(
          [
            ['paragraph', 'Atomicity treats a transaction as an indivisible unit. The database commits all its transactional changes together or discards them together.'],
            ['bullets', [
              '**Core guarantee.** A failed transfer cannot leave the sender’s balance reduced with no corresponding credit to the recipient.',
              '**Mechanism.** If the transaction cannot complete or is explicitly cancelled with `ROLLBACK`, the database discards its uncommitted changes. How rollback works internally depends on the engine.',
            ]],
          ],
          [
            ['paragraph', 'Atomicity အရ transaction တစ်ခုထဲက အပြောင်းအလဲတွေကို database က အားလုံး အတူသိမ်းပါတယ်။ Transaction ပျက်သွားရင် အဲဒီအပြောင်းအလဲတွေကို အားလုံး အတူပယ်ဖျက်ပါတယ်။'],
            ['bullets', [
              '**အဓိက အာမခံချက်။** ငွေလွှဲတာ မအောင်မြင်ရင် ပို့သူဆီက ငွေနုတ်ထားပြီး လက်ခံသူဆီ ငွေမဝင်ဘဲ ကျန်နေတဲ့ အခြေအနေ မဖြစ်ပါဘူး။',
              '**ဘယ်လို အလုပ်လုပ်လဲ။** Transaction မပြီးဆုံးနိုင်ရင် သို့မဟုတ် `ROLLBACK` နဲ့ ပယ်ဖျက်လိုက်ရင် database က commit မလုပ်ရသေးတဲ့ အပြောင်းအလဲတွေကို ပယ်ဖျက်ပါတယ်။ အတွင်းမှာ rollback လုပ်ပုံက database engine အလိုက် ကွာနိုင်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('consistency', p('Consistency — Valid State Transitions', 'Consistency — သတ်မှတ်ထားတဲ့ စည်းကမ်းတွေကို ထိန်းခြင်း')),
        blocks: p(
          [
            ['paragraph', 'A successful transaction takes the database from one valid state to another. The committed data must satisfy the rules defined for it.'],
            ['bullets', [
              '**Core guarantee.** For example, a `CHECK` constraint can require each account balance to stay at or above zero.',
              '**Mechanism.** The database enforces rules such as column types, uniqueness, foreign keys, and check constraints. Some rules are checked at the end of each statement, and deferrable constraints can be checked at commit. The transaction also needs to implement business rules, such as debiting and crediting the same amount.',
            ]],
          ],
          [
            ['paragraph', 'Transaction တစ်ခု အောင်မြင်ပြီးတဲ့အခါ database ထဲက data က သတ်မှတ်ထားတဲ့ စည်းကမ်းတွေနဲ့ ဆက်ပြီး ကိုက်ညီနေရပါတယ်။'],
            ['bullets', [
              '**အဓိက အာမခံချက်။** ဥပမာ အကောင့်လက်ကျန် 0 အောက် မရောက်စေဖို့ `CHECK` constraint နဲ့ သတ်မှတ်နိုင်ပါတယ်။',
              '**ဘယ်လို အလုပ်လုပ်လဲ။** Database က column type၊ တန်ဖိုး မထပ်ရတဲ့ စည်းကမ်း၊ foreign key နဲ့ check constraint တို့ကို စစ်ပါတယ်။ တချို့ စည်းကမ်းတွေကို SQL statement တစ်ခုစီ ပြီးချိန်မှာ စစ်ပြီး စစ်ချိန်ရွှေ့လို့ရတဲ့ constraint တွေကို commit လုပ်ချိန်မှာ စစ်နိုင်ပါတယ်။ ငွေနုတ်တဲ့ ပမာဏနဲ့ ငွေထည့်တဲ့ ပမာဏ တူရမယ်ဆိုတဲ့ လုပ်ငန်းစည်းကမ်းမျိုးကိုလည်း transaction ရေးတဲ့အခါ ထည့်စဉ်းစားရပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('isolation', p('Isolation — Independent Execution', 'Isolation — Transaction တွေ တစ်ပြိုင်နက် Run တဲ့အခါ ထိန်းပေးခြင်း')),
        blocks: p(
          [
            ['paragraph', 'Isolation controls what transactions can see and how they can affect one another when they run concurrently. In PostgreSQL, another transaction cannot read an uncommitted debit during the transfer.'],
            ['bullets', [
              '**Core guarantee.** At the `SERIALIZABLE` level, successfully committed transactions produce the same result as running them one at a time in some order.',
              '**Mechanism.** Database engines coordinate concurrent work with techniques such as two-phase locking or multi-version concurrency control (MVCC). MVCC lets queries read a snapshot of the data.',
              '**Performance trade-off.** Isolation levels differ in the anomalies they prevent, such as dirty reads, non-repeatable reads, phantom reads, and serialization anomalies. Stricter levels can require additional coordination or cause transactions to retry.',
            ]],
          ],
          [
            ['paragraph', 'Transaction တွေ တစ်ပြိုင်နက် run တဲ့အခါ တစ်ခုက တခြားတစ်ခုရဲ့ data ကို ဘယ်အခြေအနေမှာ မြင်ရမလဲ၊ တစ်ခုနဲ့တစ်ခု ဘယ်လို သက်ရောက်နိုင်လဲဆိုတာ Isolation က ထိန်းပေးပါတယ်။ PostgreSQL မှာ ငွေလွှဲနေတုန်း commit မလုပ်ရသေးတဲ့ ငွေနုတ်မှုကို တခြား transaction က ဖတ်လို့မရပါဘူး။'],
            ['bullets', [
              '**အဓိက အာမခံချက်။** `SERIALIZABLE` level မှာ အောင်မြင်စွာ commit လုပ်ပြီးတဲ့ transaction တွေရဲ့ ရလဒ်က အဲဒီ transaction တွေကို အစဉ်တစ်ခုနဲ့ တစ်ခုပြီးတစ်ခု run တဲ့ ရလဒ်နဲ့ တူပါတယ်။',
              '**ဘယ်လို အလုပ်လုပ်လဲ။** Database engine တွေက two-phase locking သို့မဟုတ် multi-version concurrency control (MVCC) လို နည်းလမ်းတွေနဲ့ တစ်ပြိုင်နက် run တဲ့ အလုပ်တွေကို ထိန်းပေးပါတယ်။ MVCC သုံးရင် query က သက်ဆိုင်ရာ အချိန်က data အခြေအနေ (snapshot) ကို ဖတ်နိုင်ပါတယ်။',
              '**စွမ်းဆောင်ရည်အပေါ် သက်ရောက်မှု။** Dirty read၊ non-repeatable read၊ phantom read နဲ့ serialization anomaly တို့ထဲက ဘာတွေကို ကာကွယ်ပေးနိုင်လဲဆိုတာ isolation level အလိုက် ကွာပါတယ်။ ပိုတင်းကျပ်တဲ့ level သုံးရင် database က ပိုညှိနှိုင်းရနိုင်သလို transaction တချို့ကို အစက ပြန် run ရနိုင်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('durability', p('Durability — Permanent Storage', 'Durability — သိမ်းပြီးတဲ့ အပြောင်းအလဲတွေ တည်မြဲခြင်း')),
        blocks: p(
          [
            ['paragraph', 'Once the database confirms a durable commit, the changes survive a crash, restart, or power loss.'],
            ['bullets', [
              '**Core guarantee.** If the server crashes after confirming a durable commit, the completed transfer stays recorded even though the data in memory is lost.',
              '**Mechanism.** With PostgreSQL’s default durability settings, it writes the required write-ahead log (WAL) records to durable storage before confirming the commit. After a crash, PostgreSQL can replay the WAL to recover changes that had yet to reach the data files.',
            ]],
          ],
          [
            ['paragraph', 'Database က transaction ကို အတည်တကျ သိမ်းပြီးကြောင်း ပြန်ပြောပြီးရင် server crash ဖြစ်တာ၊ restart လုပ်တာ၊ မီးပြတ်တာတွေ ကြုံရရင်လည်း အပြောင်းအလဲတွေကို ပြန်ရနိုင်ပါတယ်။'],
            ['bullets', [
              '**အဓိက အာမခံချက်။** ငွေလွှဲပြီးကြောင်း database က အတည်ပြုပြီးမှ server crash ဖြစ်ရင် memory ထဲက data ပျောက်သွားလည်း ငွေလွှဲမှတ်တမ်း ကျန်ပါတယ်။',
              '**ဘယ်လို အလုပ်လုပ်လဲ။** PostgreSQL ရဲ့ ပုံမှန် durability settings တွေနဲ့ဆို commit အောင်မြင်ကြောင်း မပြောခင် လိုအပ်တဲ့ write-ahead log (WAL) မှတ်တမ်းတွေကို အတည်တကျ သိမ်းပါတယ်။ Crash ဖြစ်ပြီး ပြန်စတဲ့အခါ data file ထဲ မရောက်သေးတဲ့ အပြောင်းအလဲတွေကို WAL မှတ်တမ်းကနေ ပြန်လုပ်နိုင်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('summary', p('Summary of Guarantees', 'အာမခံချက် 4 ခု အနှစ်ချုပ်')),
        blocks: p(
          [
            ['table', [
              ['Property', 'Focus', 'Primary protection'],
              ['**Atomicity**', 'Completeness', 'Prevents a partial transaction from being committed'],
              ['**Consistency**', 'Validity', 'Keeps committed data within defined rules'],
              ['**Isolation**', 'Concurrency', 'Controls interactions between concurrent transactions'],
              ['**Durability**', 'Persistence', 'Preserves committed changes across crashes'],
            ], 'Summary of ACID guarantees'],
            ['paragraph', 'Relational systems such as PostgreSQL support ACID transactions. In distributed systems, check which operations can share a transaction, which isolation levels are available, and how quickly replicas reflect committed writes. These guarantees vary by engine and configuration.'],
          ],
          [
            ['table', [
              ['အာမခံချက်', 'အဓိက အချက်', 'ဘာကို ကာကွယ်ပေးလဲ'],
              ['**Atomicity**', 'အဆင့်တွေ အတူပြီးဆုံးခြင်း', 'Transaction တစ်ပိုင်းတည်းကို commit မဖြစ်အောင် ကာကွယ်ပေးပါတယ်။'],
              ['**Consistency**', 'စည်းကမ်းနဲ့ ကိုက်ညီခြင်း', 'Commit လုပ်ပြီးသား data ကို သတ်မှတ်ထားတဲ့ စည်းကမ်းတွေနဲ့ ကိုက်ညီအောင် ထိန်းပေးပါတယ်။'],
              ['**Isolation**', 'တစ်ပြိုင်နက် လုပ်ဆောင်ခြင်း', 'တစ်ပြိုင်နက် run တဲ့ transaction တွေ တစ်ခုနဲ့တစ်ခု ဘယ်လို သက်ရောက်နိုင်လဲဆိုတာ ထိန်းပေးပါတယ်။'],
              ['**Durability**', 'သိမ်းပြီးသား data တည်မြဲခြင်း', 'Crash ဖြစ်ပြီး ပြန်စရင် commit လုပ်ပြီးသား အပြောင်းအလဲတွေ ကျန်နေအောင် ထိန်းပေးပါတယ်။'],
            ], 'ACID အာမခံချက် 4 ခု အနှစ်ချုပ်'],
            ['paragraph', 'PostgreSQL လို relational database တွေမှာ ACID transaction သုံးနိုင်ပါတယ်။ Server အများအပြားပေါ် ဖြန့်ထားတဲ့ စနစ်တွေမှာတော့ ဘယ်လုပ်ဆောင်ချက်တွေကို transaction တစ်ခုထဲ စုလို့ရသလဲ၊ ဘယ် isolation level တွေ သုံးလို့ရသလဲ၊ replica တွေမှာ commit လုပ်ပြီးသား data ဘယ်လောက်မြန်မြန် ရောက်သလဲဆိုတာကို database engine နဲ့ settings အလိုက် စစ်ကြည့်ရပါတယ်။'],
          ],
        ),
      },
    ],
    [
      [p('PostgreSQL · Transactions', 'PostgreSQL · Transaction လုပ်ဆောင်ပုံ'), 'https://www.postgresql.org/docs/current/tutorial-transactions.html'],
      [p('PostgreSQL · Constraints', 'PostgreSQL · Data စည်းကမ်းများ'), 'https://www.postgresql.org/docs/current/ddl-constraints.html'],
      [p('PostgreSQL · Transaction isolation', 'PostgreSQL · Transaction Isolation Levels'), 'https://www.postgresql.org/docs/current/transaction-iso.html'],
      [p('PostgreSQL · Write-ahead logging', 'PostgreSQL · Write-Ahead Log'), 'https://www.postgresql.org/docs/current/wal-intro.html'],
      [p('MongoDB · Distributed transactions', 'MongoDB · Distributed Transactions'), 'https://www.mongodb.com/docs/manual/core/transactions/'],
    ]),
  introBlocks: p(
    [['paragraph', '*' + subtitle.en + '*'], ['paragraph', intro.en]],
    [['paragraph', '*' + subtitle.my + '*'], ['paragraph', intro.my]],
  ),
  introFigure: {
    src: '/docs/media/database/acid-properties.jpg',
    width: 2048,
    height: 1143,
    banner: true,
    alt: p(
      'ACID overview showing complete transactions, valid data, isolation between concurrent operations, and committed changes that survive a crash.',
      'Transaction တစ်ခုလုံး အတူသိမ်းခြင်း၊ data စည်းကမ်းတွေနဲ့ ကိုက်ညီခြင်း၊ တစ်ပြိုင်နက် run တဲ့ transaction တွေကို ထိန်းခြင်းနဲ့ crash ပြီးနောက် သိမ်းပြီးသား data တည်မြဲခြင်းတို့ကို ပြထားတဲ့ ACID ပုံ။'
    ),
  },
  version: '',
};
