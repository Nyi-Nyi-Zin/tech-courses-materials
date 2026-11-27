import { p } from '../content.js';
import { pandasReferenceUrl } from '../pandas-api-catalog.js';
import groups from './pandas-api-data.js';
import usage from './pandas-api-usage.js?v=3';

export default {
  id: 'api-reference',
  title: p('pandas API reference', 'pandas API Reference'),
  intro: p(
    'Find out what pandas 3.1.1 functions and methods do, how to call them, and how to combine them in your own code.',
    'pandas 3.1.1 ရဲ့ function နဲ့ method တွေ ဘာလုပ်လဲ၊ ဘယ်လို ခေါ်သုံးရလဲဆိုတာ ကြည့်နိုင်ပါတယ်။ အသုံးများတဲ့ API တွေအတွက် code နမူနာတွေပါ ပါပါတယ်။',
  ),
  sources: [
    ['pandas API reference', pandasReferenceUrl],
    ['pandas user guide', 'https://pandas.pydata.org/docs/user_guide/'],
  ],
  sections: [
    {
      id: 'api-names',
      title: p('Functions, methods, and attributes', 'Functions၊ Methods နှင့် Attributes'),
      text: p(
        'Call a function from pandas, such as pd.to_numeric(). Call a method on an object, such as frame.head(). Read an attribute or property, such as frame.shape, without parentheses. In the reference, names start with pandas, and methods show the class they belong to.',
        'pd.to_numeric() လို function ကို pandas ကနေ ခေါ်သုံးပါတယ်။ frame.head() လို method ကို object တစ်ခုကနေ ခေါ်သုံးပါတယ်။ frame.shape လို attribute သို့မဟုတ် property ကို ကွင်းစကွင်းပိတ် မထည့်ဘဲ ဖတ်ပါတယ်။ Reference မှာ API အမည်တွေကို pandas နဲ့ စရေးထားပြီး method တစ်ခုက ဘယ် class မှာ ပါလဲဆိုတာ အမည်ထဲမှာ ကြည့်နိုင်ပါတယ်။',
      ),
      code: `import pandas as pd

frame = pd.DataFrame({"units": ["4", "7", "invalid"]})
units = pd.to_numeric(frame["units"], errors="coerce")
print(units.head(2).tolist())
print(frame.shape)
print(units.isna().sum())`,
      codeLanguage: 'python',
      displayOnly: true,
      output: '[4.0, 7.0]\n(3, 1)\n1',
    },
    {
      id: 'sample-data',
      title: p('Data for the examples', 'နမူနာ Code တွေအတွက် Data'),
      text: p(
        'Run this setup once in a notebook or Python session. The examples below use the same orders and teams tables. The three orders include one missing quantity so you can compare counting rows with counting usable values.',
        'ဒီ setup code ကို notebook သို့မဟုတ် Python session မှာ တစ်ကြိမ် run ပါ။ အောက်က နမူနာတွေမှာ orders နဲ့ teams ဇယားတွေကို သုံးထားပါတယ်။ Order သုံးခုထဲက တစ်ခုမှာ quantity မရှိတာကြောင့် row အားလုံးရေတွက်တာနဲ့ value ရှိတဲ့ row တွေကိုပဲ ရေတွက်တာကို ယှဉ်ကြည့်နိုင်ပါတယ်။',
      ),
      code: `from io import StringIO
import pandas as pd

orders = pd.DataFrame({
    "team": ["North", "North", "South"],
    "day": pd.to_datetime(["2025-01-01", "2025-01-02", "2025-01-03"]),
    "units": [4, None, 7],
})
teams = pd.DataFrame({
    "team": ["North", "South"],
    "region": ["A", "B"],
})

print(orders.groupby("team")["units"].agg(["size", "count", "sum"]).to_dict())`,
      codeLanguage: 'python',
      displayOnly: true,
      output: "{'size': {'North': 2, 'South': 1}, 'count': {'North': 1, 'South': 1}, 'sum': {'North': 4.0, 'South': 7.0}}",
    },
    {
      id: 'find-an-api',
      title: p('Find an API', 'API ရှာဖွေရန်'),
      text: p(
        'Expand a group in the sidebar or search below for read_csv, groupby, or str.strip. Select a name to see its parameters and run its example.',
        'Sidebar မှာ အုပ်စုတစ်ခု ဖွင့်ကြည့်ပါ။ အောက်မှာလည်း read_csv၊ groupby၊ str.strip လို အမည်တွေ ရှာနိုင်ပါတယ်။ အမည်တစ်ခု ရွေးပြီး parameters ဖတ်တာနဲ့ နမူနာ code ကို run တာ လုပ်နိုင်ပါတယ်။',
      ),
      apiCatalog: { groups, usage },
    },
  ],
};
