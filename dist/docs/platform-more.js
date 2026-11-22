import { p, part, page } from './content.js';

const handbook = 'https://www.typescriptlang.org/docs/handbook/';
const pg = 'https://www.postgresql.org/docs/19/';

export const platformArticles = {
  typescript: [
    page('function-contracts', p('Callbacks and function signatures', 'Callbacks နှင့် Function Signatures'),
      p('Write types for functions you pass as values and be clear about which arguments callers must provide.', 'Value အဖြစ် ပေးလိုက်တဲ့ function တွေအတွက် type ရေးပါ။ ခေါ်တဲ့ဘက်က ဘယ် arguments တွေ ပေးရမလဲ ပြတ်ပြတ်သားသား သတ်မှတ်ပါ။'),
      [
        part('callback', p('Type a callback', 'Callback Type သတ်မှတ်ခြင်း'),
          p('Use a function type to describe the parameters and return value of a callback. Callers can then use the same function contract with different implementations.', 'Callback ရဲ့ parameters နဲ့ return value ကို function type နဲ့ ဖော်ပြပါ။ ခေါ်တဲ့ဘက်က implement ပုံ မတူပေမယ့် contract တစ်မျိုးတည်း သုံးနိုင်ပါတယ်။'),
          `type PriceRule = (price: number) => number;

function applyRule(price: number, rule: PriceRule): number {
  return rule(price);
}

const salePrice = applyRule(5, amount => amount * 0.8);`),
        part('parameters', p('Choose optional or default parameters', 'Optional သို့ Default Parameter ရွေးခြင်း'),
          p('A parameter marked with ? may be omitted, so handle undefined in the body. A default is used when the caller omits the argument or passes undefined. Use an overload only where a union parameter cannot express the relationship clearly.', 'Parameter မှာ ? ပါရင် ခေါ်တဲ့အခါ ချန်ထားနိုင်လို့ function ထဲမှာ undefined ကို ကိုင်တွယ်ပါ။ Argument ချန်ထားရင် သို့ undefined ပေးရင် default သုံးပါတယ်။ Union parameter နဲ့ ဆက်စပ်မှု ရှင်းရှင်း မဖော်ပြနိုင်တဲ့အခါ overload သုံးပါ။')),
      ],
      [['TypeScript function types', handbook + '2/functions.html'], ['Everyday types', handbook + '2/everyday-types.html']]),
    page('type-tools', p('keyof and utility types', 'keyof နှင့် Utility Types'),
      p('Derive related types from the original type to keep field names consistent.', 'Field နာမည်တွေ တူညီနေဖို့ မူလ type ကနေ ဆက်စပ် types တွေ ဆောက်ပါ။'),
      [
        part('keyof', p('Allow only real field names', 'တကယ်ရှိတဲ့ Field နာမည်တွေပဲ လက်ခံခြင်း'),
          p('keyof makes a union of the keys of a type. With a generic constraint, the caller can only supply a key that belongs to the object. T[K] gives the type of that property.', 'keyof က type တစ်ခုရဲ့ keys တွေကို union အဖြစ် ထုတ်ပေးပါတယ်။ Generic constraint နဲ့ object မှာ တကယ်ရှိတဲ့ key ကိုပဲ ပေးနိုင်ပါတယ်။ T[K] က အဲဒီ property ရဲ့ type ပြန်ပါတယ်။'),
          `function readField<T, K extends keyof T>(row: T, key: K): T[K] {
  return row[key];
}

const price = readField({ name: "Tea", price: 2 }, "price");`),
        part('utility', p('Describe a view or a patch', 'View သို့ Patch အတွက် Type ဆောက်ခြင်း'),
          p('Pick selects fields. Omit removes fields. Partial makes fields optional at the top level. These types describe values for the compiler. They do not remove fields from runtime objects.', 'Pick က fields ရွေးပြီး Omit က fields ဖယ်ပါတယ်။ Partial က top level fields ကို optional လုပ်ပါတယ်။ အဲဒီ types တွေက compiler အတွက် သတ်မှတ်ချက်ပါ။ Runtime object ထဲက fields ကို မဖယ်ပေးပါဘူး။'),
          `type Product = { id: number; name: string; price: number };
type ProductCard = Pick<Product, "name" | "price">;
type ProductUpdate = Partial<Omit<Product, "id">>;`),
      ],
      [['keyof type operator', handbook + '2/keyof-types.html'], ['Utility types', handbook + 'utility-types.html']]),
    page('modules', p('Modules and type-only imports', 'Modules နှင့် Type-only Imports'),
      p('Modules define which types and values other files can use.', 'Modules က တခြား files တွေ သုံးနိုင်တဲ့ types နဲ့ values ကို သတ်မှတ်ပါတယ်။'),
      [
        part('imports', p('Keep type imports explicit', 'Type Imports ကို သီးသန့် ဖော်ပြခြင်း'),
          p('Use import type for declarations that are only used in type positions. It is removed from the JavaScript output. Use a normal import for values you call or read at runtime.', 'Type နေရာမှာပဲ သုံးမယ့် declarations အတွက် import type သုံးပါ။ JavaScript output မှာ အဲဒီ import မပါပါဘူး။ Runtime မှာ ခေါ်မယ့်၊ ဖတ်မယ့် values အတွက် ပုံမှန် import သုံးပါ။'),
          `// product.ts
export type Product = { name: string; price: number };
export const currency = "USD";

// label.ts
import { currency } from "./product.js";
import type { Product } from "./product.js";

export function label(item: Product) {
  return item.name + ": " + currency + " " + item.price;
}`),
        part('resolution', p('Match module settings to your runtime', 'Runtime နဲ့ Module Settings ကိုက်ညီအောင် ထားခြင်း'),
          p('Use settings that match the environment loading your files. In a Node ESM project, relative paths to compiled files normally include the .js extension. A bundler can use different resolution rules, so use the settings recommended by your build tool.', 'Files တွေ load မယ့် environment နဲ့ကိုက်တဲ့ settings သုံးပါ။ Node ESM project မှာ compile ပြီးတဲ့ file ဆီ relative path က ပုံမှန်အားဖြင့် .js extension ပါပါတယ်။ Bundler rules က မတူနိုင်လို့ build tool အကြံပြုတဲ့ settings သုံးပါ။')),
      ],
      [['TypeScript modules', handbook + '2/modules.html'], ['Module resolution reference', 'https://www.typescriptlang.org/docs/handbook/modules/reference.html']],
    ),
  ],
  database: [
    page('cte', p('Break down queries with CTEs', 'CTE နဲ့ Queries ကို အဆင့်ခွဲခြင်း'),
      p('A common table expression names a query result within one statement. Use it to separate steps that are easier to understand on their own.', 'CTE က statement တစ်ခုထဲက query ရလဒ်ကို နာမည်ပေးပါတယ်။ သီးသန့်ကြည့်ရင် ပိုရှင်းတဲ့ အဆင့်တွေကို ခွဲနိုင်ပါတယ်။'),
      [
        part('reuse', p('Summarize before joining', 'Join မလုပ်ခင် အနှစ်ချုပ်ခြင်း'),
          p('First total the sales by product. Then join the named result to products. This example uses the products and sales tables from the setup guide.', 'အရင်ဆုံး product အလိုက် sales ပေါင်းပါ။ နာမည်ပေးထားတဲ့ ရလဒ်ကို products နဲ့ join ပါ။ ဒီဥပမာက setup guide ထဲက products နဲ့ sales tables ကို သုံးပါတယ်။'),
          `WITH sold AS (
  SELECT product_id, SUM(quantity) AS units
  FROM sales
  GROUP BY product_id
)
SELECT p.name, COALESCE(s.units, 0) AS units_sold
FROM products AS p
LEFT JOIN sold AS s ON s.product_id = p.id
ORDER BY units_sold DESC, p.id;`),
        part('planner', p('Look at the actual query plan', 'တကယ်သုံးမယ့် Query Plan ကြည့်ခြင်း'),
          p('A CTE can improve readability. PostgreSQL may fold a nonrecursive, side-effect-free CTE into its parent query when it is referenced once. Use EXPLAIN to see whether restructuring changed the plan.', 'CTE နဲ့ query ဖတ်ရလွယ်လာနိုင်ပါတယ်။ Nonrecursive ဖြစ်ပြီး side effect မရှိတဲ့ CTE ကို တစ်ကြိမ်ပဲ သုံးရင် PostgreSQL က parent query ထဲ ပေါင်းနိုင်ပါတယ်။ ပြန်ဖွဲ့တာနဲ့ plan ပြောင်းမပြောင်း EXPLAIN နဲ့ ကြည့်ပါ။')),
      ],
      [['PostgreSQL WITH queries', pg + 'queries-with.html'], ['Using EXPLAIN', pg + 'using-explain.html']]),
    page('window-functions', p('Rank and total rows with window functions', 'Window Functions နဲ့ Rank နှင့် Total တွက်ခြင်း'),
      p('Window functions calculate across related rows while keeping one output row for each input row.', 'Window functions က ဆက်စပ် rows တွေပေါ်မှာ တွက်ပေမယ့် input row တစ်ခုစီအတွက် output row တစ်ခု ထားပေးပါတယ်။'),
      [
        part('running-total', p('Keep each row in a running total', 'Running Total တွက်ရင်း Row တစ်ခုစီ ထားခြင်း'),
          p('PARTITION BY creates independent groups. ORDER BY inside OVER controls the calculation order, and the explicit ROWS frame ends at the current row. The final ORDER BY controls display order.', 'PARTITION BY က သီးခြားအုပ်စုတွေ ခွဲပါတယ်။ OVER ထဲက ORDER BY က တွက်မယ့်အစဉ်၊ ROWS frame က လက်ရှိ row ထိ သတ်မှတ်ပါတယ်။ နောက်ဆုံး ORDER BY က ပြမယ့်အစဉ်ကို ထိန်းပါတယ်။'),
          `SELECT product_id, id, quantity,
       SUM(quantity) OVER (
         PARTITION BY product_id
         ORDER BY id
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_units
FROM sales
ORDER BY product_id, id;`),
        part('rank', p('Choose how to handle ties', 'ရလဒ်တူတဲ့ Rows တွေကို ကိုင်တွယ်ခြင်း'),
          p('row_number gives each row its own number. rank gives tied rows the same rank and leaves gaps. dense_rank gives tied rows the same rank without gaps. Add a tie-breaker when you need a repeatable row_number for equal values.', 'row_number က row တစ်ခုစီကို သီးခြားနံပါတ်ပေးပါတယ်။ rank က တန်ဖိုးတူရင် rank တူပြီး နောက်နံပါတ် ကျော်နိုင်ပါတယ်။ dense_rank က rank တူပေမယ့် နံပါတ်မကျော်ပါဘူး။ တန်ဖိုးတူတဲ့ rows တွေမှာ row_number တိကျစေဖို့ tie-breaker ထည့်ပါ။')),
      ],
      [['PostgreSQL window tutorial', pg + 'tutorial-window.html'], ['Window function reference', pg + 'functions-window.html']]),
    page('upserts', p('Insert or update with ON CONFLICT', 'ON CONFLICT နဲ့ Insert သို့ Update လုပ်ခြင်း'),
      p('Use an upsert when a key should identify the same record across repeated writes.', 'တူညီတဲ့ key ပါတဲ့ data ကို ထပ်ရေးတဲ့အခါ record တစ်ခုတည်းကိုပဲ ရည်ညွှန်းချင်ရင် upsert သုံးပါ။'),
      [
        part('constraint', p('Define the conflict key', 'Conflict Key သတ်မှတ်ခြင်း'),
          p('ON CONFLICT (sku) uses a matching unique rule to detect a conflict. EXCLUDED contains the proposed row. RETURNING gives you back the inserted or updated fields.', 'ON CONFLICT (sku) က ကိုက်ညီတဲ့ unique rule နဲ့ တန်ဖိုးထပ်တာ စစ်ပါတယ်။ EXCLUDED ထဲမှာ ထည့်ဖို့ ပေးလိုက်တဲ့ row ပါပါတယ်။ RETURNING က ထည့်လိုက်တဲ့ သို့ ပြင်လိုက်တဲ့ fields ပြန်ပေးပါတယ်။'),
          `CREATE TABLE stock_levels (
  sku text PRIMARY KEY,
  units integer NOT NULL CHECK (units >= 0)
);

INSERT INTO stock_levels (sku, units)
VALUES ('TEA-001', 15)
ON CONFLICT (sku) DO UPDATE
SET units = EXCLUDED.units
RETURNING sku, units;`),
        part('skip', p('Choose whether to skip a conflict', 'Conflict ဖြစ်ရင် ကျော်မကျော် ရွေးခြင်း'),
          p('Use DO NOTHING when an existing record should be kept as it is. A skipped row is not returned by RETURNING. Use DO UPDATE when you have a defined rule for changing the existing record.', 'ရှိပြီးသား record ကို ဒီအတိုင်းထားမယ်ဆို DO NOTHING သုံးပါ။ ကျော်သွားတဲ့ row ကို RETURNING က ပြန်မပေးပါဘူး။ ရှိပြီးသား record ကို ဘယ်လိုပြင်မလဲ သတ်မှတ်ထားရင် DO UPDATE သုံးပါ။')),
      ],
      [['PostgreSQL INSERT', pg + 'sql-insert.html'], ['Unique constraints', pg + 'ddl-constraints.html']],
    ),
  ],
};
