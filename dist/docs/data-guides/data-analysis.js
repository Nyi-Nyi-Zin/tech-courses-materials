export default {
  "id": "data-analysis",
  "name": "Data Analysis",
  "version": "",
  "intro": {
    "en": "Define KPIs, check data quality, and turn a raw store sales CSV into a clear finding.",
    "my": "KPI သတ်မှတ်ပါ။ ဒေတာအရည်အသွေး စစ်ပြီး store sales CSV ကနေ ရှင်းလင်းတဲ့ တွေ့ရှိချက် ထုတ်ပါ။"
  },
  "pages": [
    {
      "id": "questions-and-kpis",
      "title": {
        "en": "Define a business question and KPI",
        "my": "လုပ်ငန်းမေးခွန်းနှင့် KPI သတ်မှတ်ခြင်း"
      },
      "intro": {
        "en": "Decide what the analysis should answer and write down how each number will be calculated.",
        "my": "ဆန်းစစ်ချက်က ဘာကို ဖြေမလဲ ဆုံးဖြတ်ပြီး တန်ဖိုးတစ်ခုစီ ဘယ်လိုတွက်မလဲ ရေးပါ။"
      },
      "aliases": [
        "define-the-question"
      ],
      "sources": [
        [
          "NIST Engineering Statistics Handbook — exploratory data analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm"
        ],
        [
          "pandas GroupBy guide",
          "https://pandas.pydata.org/docs/user_guide/groupby.html"
        ]
      ],
      "sections": [
        {
          "id": "decision",
          "title": {
            "en": "Start from a decision",
            "my": "ဆုံးဖြတ်ချက်တစ်ခုကနေ စခြင်း"
          },
          "text": {
            "en": "A store manager might ask which month had the most recorded sales. Define the audience, date range, unit, and comparison before aggregating. If the dataset has no reliable currency metadata, describe values in recorded units.",
            "my": "ဆိုင်မန်နေဂျာက ဘယ်လမှာ မှတ်တမ်းတင် အရောင်းအများဆုံးလဲ မေးနိုင်ပါတယ်။ မတွက်ခင် ဖတ်မယ့်သူ၊ ရက်စွဲအပိုင်းအခြား၊ unit နဲ့ ဘာနှိုင်းယှဉ်မလဲ သတ်မှတ်ပါ။ Currency metadata ယုံကြည်လို့မရရင် မှတ်တမ်းထဲက unit လို့ ဖော်ပြပါ။"
          },
          "figure": {
            "src": "/docs/media/data/questions-and-kpis-decision.png",
            "width": 720,
            "height": 367,
            "alt": {
              "en": "Define the question, collect data, inspect, clean, analyze and verify, then report. The verification step can lead back to inspection.",
              "my": "မေးခွန်းသတ်မှတ်၊ ဒေတာစု၊ စစ်၊ သန့်စင်၊ ဆန်းစစ်ပြီး တိုက်စစ်ကာ နောက်ဆုံး တင်ပြပါတယ်။ တိုက်စစ်ရင်း အစောပိုင်း ဒေတာစစ်တဲ့အဆင့်ကို ပြန်သွားနိုင်ပါတယ်။"
            },
            "caption": {
              "en": "Define the metric before collecting and summarizing the data.",
              "my": "ဒေတာမစုခင်နဲ့ အနှစ်ချုပ်မတွက်ခင် metric ကို သတ်မှတ်ပါ။"
            }
          }
        },
        {
          "id": "metric",
          "title": {
            "en": "Write a metric definition",
            "my": "Metric အဓိပ္ပာယ် ရေးခြင်း"
          },
          "text": {
            "en": "For this guide, usable recorded sales means the sum of readable totals plus totals recovered from readable quantity and unit price. Monthly sales also require a readable date. Define those rules so someone else can reproduce the result.",
            "my": "ဒီ guide မှာ သုံးလို့ရတဲ့ မှတ်တမ်းတင်အရောင်းက ဖတ်လို့ရတဲ့ total နဲ့ quantity၊ unit price ဖတ်လို့ရလို့ ပြန်တွက်ထားတဲ့ total တွေ ပေါင်းထားတာပါ။ လစဉ်အရောင်းအတွက် ရက်စွဲပါ ဖတ်လို့ရရပါမယ်။ တခြားသူတွေလည်း တူညီတဲ့ရလဒ် ပြန်ထုတ်နိုင်အောင် rule ရေးထားပါ။"
          }
        }
      ]
    },
    {
      "id": "data-collection",
      "title": {
        "en": "Collect data and record its context",
        "my": "ဒေတာစုဆောင်း၍ နောက်ခံအချက် မှတ်တမ်းတင်ခြင်း"
      },
      "intro": {
        "en": "Record provenance and identify what a single row represents before comparing or joining datasets.",
        "my": "ဒေတာ ဘယ်ကရလဲ မှတ်ပါ။ Dataset တွေ မနှိုင်းယှဉ်ခင်၊ မဆက်ခင် row တစ်ကြောင်း ဘာကိုယ်စားပြုလဲ စစ်ပါ။"
      },
      "aliases": [
        "collect-and-document"
      ],
      "sources": [
        [
          "NIST Engineering Statistics Handbook — exploratory data analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm"
        ],
        [
          "pandas.read_csv",
          "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
        ]
      ],
      "sections": [
        {
          "id": "source",
          "title": {
            "en": "Record provenance and coverage",
            "my": "မူရင်းရင်းမြစ်နှင့် ကာလ မှတ်ခြင်း"
          },
          "text": {
            "en": "Record the source and extraction date, the calendar period, filters, and column definitions. The extraction date tells you when you obtained the file. The covered period describes the events included. Keep the original file so you can repeat the checks.",
            "my": "Source၊ ဖိုင်ရယူတဲ့ရက်၊ ပါဝင်တဲ့ ကာလ၊ filter နဲ့ column အဓိပ္ပာယ်တွေ မှတ်ပါ။ ရယူတဲ့ရက်က ဖိုင်ကို ဘယ်နေ့ရလဲ ပြပါတယ်။ ပါဝင်တဲ့ကာလက ဖိုင်ထဲက ဖြစ်ရပ်တွေ ဘယ်ကာလကို ကိုယ်စားပြုလဲ ပြပါတယ်။ ပြန်စစ်လို့ရဖို့ မူရင်းဖိုင် သိမ်းပါ။"
          }
        },
        {
          "id": "row-grain",
          "title": {
            "en": "Identify the row grain",
            "my": "Row တစ်ကြောင်းရဲ့ အဓိပ္ပာယ် သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "Grain means what one row represents. A transaction table can have one row per sale. A line-item table can repeat the same transaction ID for several products. This distinction changes how you check duplicates and count sales.",
            "my": "Grain ဆိုတာ row တစ်ကြောင်းက ဘာကိုယ်စားပြုလဲဆိုတာပါ။ Transaction table မှာ အရောင်းတစ်ခုကို row တစ်ကြောင်းနဲ့ မှတ်နိုင်ပါတယ်။ Line-item table မှာ product အများကြီး ပါရင် transaction ID တူတူ ထပ်လာနိုင်ပါတယ်။ ဒီကွာခြားချက်ကြောင့် duplicate စစ်ပုံနဲ့ အရောင်းရေတွက်ပုံ ပြောင်းပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "initial-eda",
      "title": {
        "en": "Initial EDA and data-quality checks",
        "my": "Initial EDA နှင့် ဒေတာအရည်အသွေး စစ်ခြင်း"
      },
      "intro": {
        "en": "Inspect types, missing values, duplicate candidates, and unusual patterns before writing cleaning rules.",
        "my": "Cleaning rule မရေးခင် type၊ missing value၊ duplicate ဖြစ်နိုင်တာနဲ့ ထူးခြားတဲ့ pattern တွေ စစ်ပါ။"
      },
      "dataset": "store_sales.csv",
      "sources": [
        [
          "NIST Engineering Statistics Handbook — exploratory data analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm"
        ],
        [
          "pandas.read_csv",
          "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
        ],
        [
          "pandas DataFrame.duplicated",
          "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html"
        ]
      ],
      "sections": [
        {
          "id": "profile",
          "title": {
            "en": "Profile the raw file",
            "my": "Raw ဖိုင်ကို စစ်ခြင်း"
          },
          "text": {
            "en": "Read the original values as strings when you want to see how source codes are represented. Inspect shape and column names first, then count blanks and unexpected labels in the columns you need.",
            "my": "Source code တွေကို မူရင်းအတိုင်း မြင်ချင်ရင် value တွေကို string အနေနဲ့ ဖတ်ပါ။ Shape နဲ့ column name တွေ အရင်စစ်ပါ။ ပြီးရင် သုံးမယ့် column တွေမှာ အလွတ်နဲ့ မျှော်မှန်းမထားတဲ့ label တွေ ရေတွက်ပါ။"
          },
          "code": "import pandas as pd\n\nraw = pd.read_csv(\"store_sales.csv\", dtype=\"string\", keep_default_na=False)\nprint(raw.shape)\nprint(raw.duplicated().sum())\nprint(raw[\"Location\"].str.strip().eq(\"\").sum())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(15, 8)\n1\n1"
        },
        {
          "id": "quality",
          "title": {
            "en": "Check patterns, not just null counts",
            "my": "Null အရေအတွက်နှင့် Pattern များ စစ်ခြင်း"
          },
          "text": {
            "en": "Confirm ID uniqueness against the row grain. Validate date range, allowed categories, and numeric rules. Inspect candidate outliers before deciding they are errors or legitimate observations.",
            "my": "ID တစ်ခုချင်း မထပ်သင့်တာကို row grain နဲ့ တိုက်စစ်ပါ။ ရက်စွဲအပိုင်း၊ လက်ခံနိုင်တဲ့ category နဲ့ numeric rules တွေ စစ်ပါ။ ထူးခြားတဲ့ value ကို အမှားလား၊ တကယ်ဖြစ်ခဲ့တာလား မဆုံးဖြတ်ခင် ကြည့်ပါ။"
          }
        }
      ]
    },
    {
      "id": "cleaning-rules",
      "title": {
        "en": "Clean data and retain evidence",
        "my": "ဒေတာ သန့်စင်၍ အထောက်အထား ထားခြင်း"
      },
      "intro": {
        "en": "Convert values deliberately, recover amounts when inputs support it, and record exclusions.",
        "my": "Value တွေကို သတ်မှတ်ချက်နဲ့ ပြောင်းပါ။ Input အထောက်အထားရှိမှ ပျောက်တာ ပြန်တွက်ပြီး ဖယ်ထားတာတွေကို မှတ်ပါ။"
      },
      "dataset": "store_sales.csv",
      "sources": [
        [
          "pandas.to_numeric",
          "https://pandas.pydata.org/docs/reference/api/pandas.to_numeric.html"
        ],
        [
          "Working with missing data",
          "https://pandas.pydata.org/docs/user_guide/missing_data.html"
        ]
      ],
      "sections": [
        {
          "id": "rules",
          "title": {
            "en": "Convert and recover amounts",
            "my": "Amount ပြောင်း၍ ပြန်တွက်ခြင်း"
          },
          "text": {
            "en": "Keep the recorded total if readable. If it is missing, compute quantity × unit price only when both are available. Flag totals you recovered and keep unresolved amounts missing. On real data, first check whether discounts, tax, or refunds invalidate that formula.",
            "my": "မူရင်း total ဖတ်လို့ရရင် အတိုင်းထားပါ။ ပျောက်နေရင် quantity နဲ့ unit price နှစ်ခုစလုံး ရမှ မြှောက်ပြီး ပြန်တွက်ပါ။ ပြန်တွက်ထားတာ မှတ်ပြီး မတွက်နိုင်တာကို missing ထားပါ။ တကယ့် data မှာ discount၊ tax သို့မဟုတ် refund ကြောင့် ဒီ formula သုံးလို့မရတာ ရှိမရှိ အရင်စစ်ပါ။"
          },
          "code": "import pandas as pd\n\nraw = pd.read_csv(\"store_sales.csv\", dtype=\"string\", keep_default_na=False)\nclean = raw.drop_duplicates().copy()\nquantity = pd.to_numeric(clean[\"Quantity\"], errors=\"coerce\")\nprice = pd.to_numeric(clean[\"Price Per Unit\"], errors=\"coerce\")\nrecorded = pd.to_numeric(clean[\"Total Spent\"], errors=\"coerce\")\ncomputed = quantity * price\nclean[\"sales\"] = recorded.fillna(computed)\nclean[\"is_recovered\"] = recorded.isna() & computed.notna()\nprint(clean[\"is_recovered\"].sum(), clean[\"sales\"].isna().sum())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "1 1"
        },
        {
          "id": "validate",
          "title": {
            "en": "Validate each rule against the raw data",
            "my": "Rule တစ်ခုစီကို Raw Data နဲ့ တိုက်စစ်ခြင်း"
          },
          "text": {
            "en": "Measure row counts and missing values before and after each change. Keep the original amount alongside a recovered amount when you need to explain differences. If you drop rows, record the count and reason.",
            "my": "ပြောင်းလဲမှုတစ်ခုစီ မလုပ်မီနဲ့ လုပ်ပြီးမှ row အရေအတွက်၊ missing value အရေအတွက် မှတ်ပါ။ ကွာခြားချက် ရှင်းဖို့လိုရင် ပြန်တွက်ထားတဲ့ amount နဲ့ မူရင်း amount နှစ်ခုလုံး ထားပါ။ Row ဖယ်ရင် အရေအတွက်နဲ့ အကြောင်းရင်း မှတ်ပါ။"
          }
        }
      ]
    },
    {
      "id": "analysis-and-validation",
      "title": {
        "en": "Analyze trends and reconcile results",
        "my": "Trend ဆန်းစစ်၍ ရလဒ်များ တိုက်စစ်ခြင်း"
      },
      "intro": {
        "en": "Calculate grouped metrics, track coverage, and explain differences between views.",
        "my": "Group အလိုက် metric တွက်ပါ။ ဘယ်လောက် ပါဝင်လဲ မှတ်ပြီး view အလိုက် ဘာကြောင့် ကွာလဲ ရှင်းပါ။"
      },
      "aliases": [
        "monthly-kpis",
        "validate-results"
      ],
      "sources": [
        [
          "pandas GroupBy guide",
          "https://pandas.pydata.org/docs/user_guide/groupby.html"
        ],
        [
          "pandas.to_datetime",
          "https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html"
        ],
        [
          "NIST Engineering Statistics Handbook — exploratory data analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm"
        ]
      ],
      "sections": [
        {
          "id": "grouped-metrics",
          "title": {
            "en": "Use the correct denominator and coverage",
            "my": "ပိုင်းခြေနှင့် ပါဝင်မှုကို မှန်ကန်စွာ သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "Choose usable rows for each question. Overall sales can include a usable amount on a row with no readable date. Monthly sales need both. Averages also need an explicit denominator, such as transactions with usable totals.",
            "my": "မေးခွန်းတစ်ခုစီအတွက် သုံးလို့ရတဲ့ row ကို ရွေးပါ။ စုစုပေါင်းအရောင်းမှာ amount ရပြီး ရက်စွဲဖတ်မရတဲ့ row ထည့်နိုင်ပါတယ်။ လစဉ် အရောင်းမှာ နှစ်ခုလုံး လိုပါတယ်။ ပျမ်းမျှတွက်ရင်လည်း အသုံးပြုလို့ရတဲ့ total ပါတဲ့ transaction အရေအတွက်လို ပိုင်းခြေ သတ်မှတ်ပါ။"
          }
        },
        {
          "id": "totals-check",
          "title": {
            "en": "Reconcile overall and dated totals",
            "my": "စုစုပေါင်းနှင့် ရက်စွဲပါတဲ့ အရောင်း တိုက်စစ်ခြင်း"
          },
          "text": {
            "en": "Use the cleaned frame from the previous guide. The difference here is one usable amount with an unreadable date. The equality check is approximate so it also works with small floating-point rounding differences.",
            "my": "အရင် guide မှာ သန့်စင်ထားတဲ့ DataFrame ကို သုံးပါ။ ဒီမှာ ကွာနေတာက amount ရပြီး ရက်စွဲ မဖတ်နိုင်တဲ့ row တစ်ခုပါ။ Floating-point အနည်းငယ်ကွာတာကိုလည်း ကိုင်တွယ်နိုင်ဖို့ အနီးစပ်ဆုံး တိုက်စစ်ထားပါတယ်။"
          },
          "code": "from math import isclose\n\n# Continue from the cleaned store sales example.\ndates = pd.to_datetime(clean[\"Transaction Date\"], format=\"%Y-%m-%d\", errors=\"coerce\")\noverall = clean[\"sales\"].sum()\ndated = clean.loc[dates.notna(), \"sales\"].sum()\nexcluded = clean.loc[dates.isna(), \"sales\"].sum()\nprint(float(overall), float(dated), float(excluded))\nassert isclose(overall, dated + excluded)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "67.0 65.0 2.0"
        }
      ]
    },
    {
      "id": "store-sales",
      "title": {
        "en": "Store Sales Analysis walkthrough",
        "my": "Store Sales Analysis အစအဆုံး ရှင်းလင်းချက်"
      },
      "intro": {
        "en": "Go from a raw CSV to a monthly sales chart with an explanation of what it includes.",
        "my": "Raw CSV ကနေ လစဉ် အရောင်း chart ထုတ်ပါ။ ရလဒ်ထဲ ဘာတွေ ပါဝင်တယ်ဆိုတာ ရှင်းပါ။"
      },
      "dataset": "store_sales.csv",
      "aliases": [
        "store-report"
      ],
      "sources": [
        [
          "pandas.read_csv",
          "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
        ],
        [
          "pandas GroupBy guide",
          "https://pandas.pydata.org/docs/user_guide/groupby.html"
        ],
        [
          "Matplotlib quick start",
          "https://matplotlib.org/stable/users/explain/quick_start.html"
        ]
      ],
      "sections": [
        {
          "id": "question",
          "title": {
            "en": "Define the result",
            "my": "ထုတ်မယ့် ရလဒ် သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "Which calendar month has the most usable recorded sales? This small synthetic file is for demonstrating the workflow. Its amounts have no specified currency. Each non-duplicate row represents one store transaction.",
            "my": "သုံးလို့ရတဲ့ မှတ်တမ်းတင်အရောင်း ဘယ်ပြက္ခဒိန်လမှာ အများဆုံးလဲ။ ဒီ synthetic ဖိုင်သေးသေးကို workflow ပြဖို့ သုံးထားပါတယ်။ Amount တွေအတွက် currency မသတ်မှတ်ထားပါ။ ထပ်နေတဲ့ row ဖယ်ပြီးရင် row တစ်ကြောင်းက အရောင်းတစ်ခုပါ။"
          }
        },
        {
          "id": "worked-example",
          "title": {
            "en": "Clean, group, and plot",
            "my": "သန့်စင်၍ Group စုကာ Chart ဆွဲခြင်း"
          },
          "text": {
            "en": "Save the supplied CSV next to your script. Read source codes intact, deduplicate exact rows, and use numeric conversion before recovering amounts. Group by month and use min_count=1 so an all-missing group stays missing.",
            "my": "ပေးထားတဲ့ CSV ကို script ဘေးမှာ သိမ်းပါ။ Source code တွေကို အတိုင်းဖတ်၊ အချက်အလက်အားလုံး တူတဲ့ row ဖယ်ပြီး ကိန်းဂဏန်း ပြောင်းပြီးမှ amount ပြန်တွက်ပါ။ လအလိုက် စုတဲ့အခါ value အားလုံး ပျောက်တဲ့ group ကို missing ထားဖို့ min_count=1 သုံးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\nimport pandas as pd\n\nraw = pd.read_csv(\"store_sales.csv\", dtype=\"string\", keep_default_na=False)\ndata = raw.drop_duplicates().copy()\ndate = pd.to_datetime(data[\"Transaction Date\"], format=\"%Y-%m-%d\", errors=\"coerce\")\nquantity = pd.to_numeric(data[\"Quantity\"], errors=\"coerce\")\nprice = pd.to_numeric(data[\"Price Per Unit\"], errors=\"coerce\")\nrecorded = pd.to_numeric(data[\"Total Spent\"], errors=\"coerce\")\nsales = recorded.fillna(quantity * price)\nmonthly = sales.groupby(date.dt.to_period(\"M\")).sum(min_count=1)\n\nfig, ax = plt.subplots(layout=\"constrained\")\nax.plot(monthly.index.astype(str), monthly, marker=\"o\")\nax.set(title=\"Store sales by month\", xlabel=\"Month\", ylabel=\"Recorded sales\")\nprint(str(monthly.idxmax()), float(monthly.max()))\nprint(float(sales.sum()), float(monthly.sum()), int(sales.isna().sum()))\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2023-04 21.5\n67.0 65.0 1",
          "figure": {
            "src": "/docs/media/data/store-sales-worked-example.png",
            "width": 659,
            "height": 499,
            "alt": {
              "en": "Store sales by month are 11.5, 17, 15, and 21.5 from January to April. April is highest.",
              "my": "January ကနေ April အထိ အရောင်း 11.5၊ 17၊ 15၊ 21.5 ဖြစ်ပြီး April မှာ အများဆုံးပါ။"
            }
          }
        },
        {
          "id": "findings",
          "title": {
            "en": "Report the finding and its limitations",
            "my": "တွေ့ရှိချက်နှင့် ကန့်သတ်ချက် တင်ပြခြင်း"
          },
          "text": {
            "en": "April 2023 recorded the highest usable monthly sales, at 21.5. The monthly sum is 65 versus 67 overall because one usable amount of 2 has an unreadable date. One other transaction has an unresolved amount. The series falls in March before increasing in April.",
            "my": "April 2023 မှာ လစဉ်အသုံးပြုလို့ရတဲ့ အရောင်း 21.5 နဲ့ အများဆုံးပါ။ လစဉ်ရလဒ်တွေ ပေါင်းရင် 65 ဖြစ်ပြီး စုစုပေါင်းက 67 ပါ။ Amount 2 ရှိတဲ့ transaction တစ်ခုက ရက်စွဲဖတ်မရလို့ ကွာတာပါ။ နောက်ထပ် transaction တစ်ခုရဲ့ amount ပြန်မတွက်နိုင်ပါ။ March မှာ အရောင်းကျပြီးမှ April မှာ ပြန်တက်ပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "metric-coverage",
      "title": {
        "en": "Measure coverage and test missing-data assumptions",
        "my": "ဒေတာပါဝင်မှုနှင့် Missing Data ယူဆချက်များ စစ်ခြင်း"
      },
      "intro": {
        "en": "Check whether a conclusion changes across groups or under different assumptions.",
        "my": "Group အလိုက်နဲ့ ယူဆချက် အမျိုးမျိုးအောက်မှာ ဆန်းစစ်ချက်ရလဒ် ပြောင်းမပြောင်း စစ်ပါ။"
      },
      "sources": [
        [
          "NIST handbook on exploratory data analysis",
          "https://www.itl.nist.gov/div898/handbook/eda/section1/eda11.htm"
        ],
        [
          "pandas working with missing data",
          "https://pandas.pydata.org/docs/user_guide/missing_data.html"
        ],
        [
          "pandas GroupBy guide",
          "https://pandas.pydata.org/docs/user_guide/groupby.html"
        ]
      ],
      "sections": [
        {
          "id": "coverage-by-group",
          "title": {
            "en": "Compare coverage across groups",
            "my": "Group အလိုက် ပါဝင်မှုကို ယှဉ်ခြင်း"
          },
          "text": {
            "en": "Coverage is the share of eligible rows with a usable value for a specific KPI. For feedback scores, all requests in this example are eligible. count counts valid scores, while size counts all eligible requests. Report the number of valid scores alongside any comparison of averages.",
            "my": "Coverage က KPI တစ်ခုအတွက် ပါသင့်တဲ့ row တွေထဲ အသုံးပြုလို့ရတဲ့ value ပါတဲ့ အချိုးပါ။ ဒီဥပမာမှာ feedback တောင်းထားတဲ့ request အားလုံး ပါသင့်ပါတယ်။ count က score ရှိတာတွေကို ရေတွက်ပြီး size က ပါသင့်တဲ့ request အားလုံးကို ရေတွက်ပါတယ်။ ပျမ်းမျှ score တွေ ယှဉ်တဲ့အခါ score ရှိတဲ့ အရေအတွက်ကိုပါ တွဲဖော်ပြပါ။"
          },
          "code": "import pandas as pd\n\nfeedback = pd.DataFrame({\n    \"channel\": [\"Web\", \"Web\", \"App\", \"App\"],\n    \"score\": [4, None, 3, 5],\n})\nsummary = feedback.groupby(\"channel\")[\"score\"].agg(usable=\"count\", eligible=\"size\")\nsummary[\"coverage\"] = summary[\"usable\"] / summary[\"eligible\"]\nfor row in summary.itertuples():\n    print(row.Index, f\"{row.usable}/{row.eligible}\", f\"{row.coverage:.0%}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "App 2/2 100%\nWeb 1/2 50%",
          "figure": {
            "src": "/docs/media/data/metric-coverage-coverage-by-group.png",
            "width": 720,
            "height": 315,
            "alt": {
              "en": "Two of two App requests have scores. One of two Web requests has a score.",
              "my": "App request နှစ်ခုလုံးမှာ score ရှိပြီး Web request နှစ်ခုထဲက တစ်ခုမှာပဲ score ရှိပါတယ်။"
            },
            "caption": {
              "en": "The App mean uses both records while the Web mean uses half of its eligible records.",
              "my": "App ပျမ်းမျှမှာ record နှစ်ခုလုံးပါပြီး Web ပျမ်းမျှမှာ ပါသင့်တဲ့ record ရဲ့ တစ်ဝက်ပဲ ပါပါတယ်။"
            }
          }
        },
        {
          "id": "sensitivity",
          "title": {
            "en": "Calculate bounds when scores are missing",
            "my": "Score ပျောက်နေရင် ဖြစ်နိုင်တဲ့ အနိမ့်ဆုံးနှင့် အမြင့်ဆုံး တွက်ခြင်း"
          },
          "text": {
            "en": "If the Web score scale runs from 1 to 5 and its missing value could be anywhere on that scale, the mean across both eligible requests could range from 2.5 to 4.5. The App mean is 4.0. The order of the two means can therefore change with the missing value. These are bounds under a stated assumption.",
            "my": "Web score က 1 ကနေ 5 အထိ ဖြစ်ပြီး ပျောက်နေတဲ့ value က အဲဒီ range ထဲက ဘယ်တန်ဖိုးမဆို ဖြစ်နိုင်တယ်လို့ ယူဆကြည့်ပါ။ Web request နှစ်ခုလုံးရဲ့ ပျမ်းမျှက 2.5 ကနေ 4.5 ကြား ဖြစ်နိုင်ပါတယ်။ App ပျမ်းမျှက 4.0 ပါ။ ဒါကြောင့် ပျောက်နေတဲ့ score ပေါ်မူတည်ပြီး ဘယ်ဘက်က ပျမ်းမျှ ပိုမြင့်လဲဆိုတာ ပြောင်းနိုင်ပါတယ်။"
          },
          "code": "from statistics import mean\n\nweb_observed = 4\nprint(mean([web_observed, 1]), mean([web_observed, 5]))\nprint(mean([3, 5]))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2.5 4.5\n4",
          "figure": {
            "src": "/docs/media/data/metric-coverage-sensitivity.png",
            "width": 720,
            "height": 360,
            "alt": {
              "en": "A Web mean interval from 2.5 through 4.5 overlaps the App mean at 4.0.",
              "my": "Web ပျမ်းမျှ ဖြစ်နိုင်တဲ့ 2.5 ကနေ 4.5 အတွင်းမှာ App ပျမ်းမျှ 4.0 ပါဝင်နေပါတယ်။"
            },
            "caption": {
              "en": "The possible Web mean can fall below, equal, or rise above the App mean.",
              "my": "ပျောက်နေတဲ့ score ပေါ်မူတည်ပြီး Web ပျမ်းမျှက App ပျမ်းမျှထက် နိမ့်နိုင်၊ တူနိုင်၊ မြင့်နိုင်ပါတယ်။"
            }
          }
        }
      ]
    },
    {
      "id": "sampling-and-bias",
      "title": {
        "en": "Sampling, bias, and representative data",
        "my": "Sampling၊ Bias နှင့် ကိုယ်စားပြုနိုင်သော ဒေတာ"
      },
      "intro": {
        "en": "Define the population, sampling unit, and likely reasons that your data omit important cases.",
        "my": "Population၊ sampling unit နဲ့ လိုအပ်တဲ့ case တွေ ဘာကြောင့် ဒေတာထဲ မပါနိုင်လဲ သတ်မှတ်ပါ။"
      },
      "sources": [
        [
          "NIST sampling guidance",
          "https://www.itl.nist.gov/div898/handbook/ppc/section3/ppc33.htm"
        ],
        [
          "pandas GroupBy.sample",
          "https://pandas.pydata.org/docs/reference/api/pandas.api.typing.DataFrameGroupBy.sample.html"
        ]
      ],
      "sections": [
        {
          "id": "population",
          "title": {
            "en": "Define what the data should represent",
            "my": "ဒေတာက ဘာကို ကိုယ်စားပြုရမလဲ သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "A population is the group you want to describe, and a sample is the subset observed. Identify the unit before drawing rows. Several line items from one order are dependent, so sampling rows can overrepresent orders with many items.",
            "my": "Population က ဖော်ပြချင်တဲ့ အုပ်စုတစ်ခုလုံး၊ sample က လက်တွေ့တိုင်းထားတဲ့ အစိတ်အပိုင်းပါ။ Row မရွေးခင် sampling unit သတ်မှတ်ပါ။ Order တစ်ခုထဲ line item တွေက ဆက်နွှယ်နေလို့ row အလိုက် ရွေးရင် item များတဲ့ order ဘက် ပိုကိုယ်စားပြုနိုင်ပါတယ်။"
          }
        },
        {
          "id": "coverage",
          "title": {
            "en": "Measure coverage before estimating",
            "my": "မခန့်မှန်းခင် ပါဝင်မှု တိုင်းခြင်း"
          },
          "text": {
            "en": "Look for missing stores, time periods, or groups. Stratified sampling draws within defined groups. If group representation in the dataset differs from the target population, an overall estimate may need weights or a narrower claim.",
            "my": "မပါတဲ့ ဆိုင်၊ အချိန်ကာလ သို့မဟုတ် group တွေ ရှာပါ။ Stratified sampling က သတ်မှတ်ထားတဲ့ group တစ်ခုစီထဲက ရွေးပါတယ်။ Dataset ထဲ ပါဝင်မှုအချိုးနဲ့ population ထဲ အချိုးကွာရင် overall estimate အတွက် weight သုံးဖို့ သို့မဟုတ် အဆိုကို ကျဉ်းဖို့ လိုနိုင်ပါတယ်။"
          },
          "code": "import pandas as pd\n\norders = pd.DataFrame({\"store\": [\"A\", \"A\", \"A\", \"B\", \"B\"], \"total\": [4, 7, 6, 8, 9]})\nsample = orders.groupby(\"store\").sample(n=1, random_state=42)\nprint(sample[\"store\"].value_counts().sort_index().to_dict())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "{'A': 1, 'B': 1}"
        }
      ]
    },
    {
      "id": "distributions-and-outliers",
      "title": {
        "en": "Summarize distributions and investigate outliers",
        "my": "Distribution အနှစ်ချုပ်၍ Outlier များ စစ်ခြင်း"
      },
      "intro": {
        "en": "Describe center and spread, flag unusual observations, and review them in their original context.",
        "my": "အလယ်တန်ဖိုးနဲ့ ပြန့်နှံ့မှု ဖော်ပြပါ။ ထူးခြားတဲ့ observation တွေကို မှတ်ပြီး မူရင်း အခြေအနေနဲ့ တွဲစစ်ပါ။"
      },
      "sources": [
        [
          "NumPy quantile",
          "https://numpy.org/doc/stable/reference/generated/numpy.quantile.html"
        ],
        [
          "NIST box plots",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/boxplot.htm"
        ]
      ],
      "sections": [
        {
          "id": "summary",
          "title": {
            "en": "Compare the mean, median, and quartiles",
            "my": "Mean၊ Median နှင့် Quartile များ ယှဉ်ခြင်း"
          },
          "text": {
            "en": "The median and interquartile range are less sensitive to extreme values than the mean and full range. Check the number of observations and use a histogram or box plot to see shape and skew. State how missing values were handled.",
            "my": "Median နဲ့ interquartile range က mean နဲ့ range အပြည့်ထက် အစွန်းရောက်တန်ဖိုးတွေကြောင့် အပြောင်းအလဲ နည်းပါတယ်။ Observation အရေအတွက် စစ်ပြီး ပုံစံနဲ့ တိမ်းစောင်းမှုကို histogram သို့မဟုတ် box plot နဲ့ ကြည့်ပါ။ Missing value ကို ဘယ်လို ကိုင်တွယ်လဲ ရေးပါ။"
          }
        },
        {
          "id": "iqr",
          "title": {
            "en": "Flag values beyond an IQR fence",
            "my": "IQR Fence ကျော်တဲ့ Value တွေ မှတ်ခြင်း"
          },
          "text": {
            "en": "The IQR is the difference between the third and first quartiles. A common exploratory fence is 1.5 IQRs past either quartile. A flagged value could be a data error, a legitimate rare event, or evidence of a different group. Inspect it before deciding what to do.",
            "my": "IQR က တတိယ quartile နဲ့ ပထမ quartile ကြား ကွာဟချက်ပါ။ စစ်ဆေးရာမှာ quartile နှစ်ဖက်ကနေ IQR 1.5 ဆအကွာကို fence အဖြစ် သုံးလေ့ရှိပါတယ်။ အမှတ်အသားပြထားတဲ့ value က data error၊ တကယ်ဖြစ်တဲ့ ရှားပါးဖြစ်ရပ် သို့မဟုတ် group ကွာတာ ဖြစ်နိုင်လို့ မဆုံးဖြတ်ခင် စစ်ပါ။"
          },
          "code": "import numpy as np\n\norders = np.array([10, 11, 12, 13, 14, 45])\nq1, q3 = np.quantile(orders, [0.25, 0.75])\niqr = q3 - q1\nflag = (orders < q1 - 1.5 * iqr) | (orders > q3 + 1.5 * iqr)\nprint(float(np.median(orders)), float(iqr))\nprint(orders[flag].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "12.5 2.5\n[45]",
          "figure": {
            "src": "/docs/media/data/distributions-and-outliers-iqr.png",
            "width": 720,
            "height": 385,
            "alt": {
              "en": "A horizontal box plot shows fences at 7.5 and 17.5. The point at 45 lies beyond the upper fence.",
              "my": "Horizontal box plot မှာ IQR fence 7.5 နဲ့ 17.5 ကို ပြပါတယ်။ 45 က အပေါ်ဘက် fence ကို ကျော်နေပါတယ်။"
            },
            "caption": {
              "en": "The rule flags 45 orders for investigation.",
              "my": "ဒီ rule က order 45 ခု ဆိုတဲ့ တန်ဖိုးကို ဆက်လက်စစ်ဖို့ အမှတ်အသား ပြပေးပါတယ်။"
            }
          }
        }
      ]
    },
    {
      "id": "confidence-intervals",
      "title": {
        "en": "Estimate uncertainty with confidence intervals",
        "my": "Confidence Intervals ဖြင့် မသေချာမှု ခန့်မှန်းခြင်း"
      },
      "intro": {
        "en": "Interpret a confidence interval and bootstrap a statistic when resampling matches the data design.",
        "my": "Confidence interval ကို ဖတ်ပါ။ Observation ရယူပုံနဲ့ ကိုက်ညီတဲ့အခါ statistic ကို bootstrap လုပ်ပါ။"
      },
      "sources": [
        [
          "NIST confidence limits for the mean",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm"
        ],
        [
          "scipy.stats.bootstrap",
          "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.bootstrap.html"
        ]
      ],
      "sections": [
        {
          "id": "interpret",
          "title": {
            "en": "Read a 95 percent confidence interval",
            "my": "95 ရာခိုင်နှုန်း Confidence Interval ဖတ်ခြင်း"
          },
          "text": {
            "en": "Under its assumptions, a 95 percent confidence-interval procedure captures the fixed population parameter in about 95 percent of repeated samples. A confidence interval for a mean describes uncertainty about the mean. Predicting individual future values needs a different interval.",
            "my": "ယူဆချက်တွေ မှန်ရင် sample အသစ်တွေ ထပ်ခါထပ်ခါယူပြီး 95 ရာခိုင်နှုန်း confidence interval တွက်တဲ့နည်းက population parameter အမှန်ကို အကြမ်းဖျင်း 95 ရာခိုင်နှုန်း ဖမ်းမိပါတယ်။ Mean interval က mean ကို ခန့်မှန်းရာမှာ မသေချာမှု ပြပါတယ်။ နောင် individual value ခန့်မှန်းဖို့ interval သီးခြား လိုပါတယ်။"
          }
        },
        {
          "id": "bootstrap",
          "title": {
            "en": "Bootstrap the mean of independent observations",
            "my": "သီးခြား Observation များရဲ့ Mean ကို Bootstrap လုပ်ခြင်း"
          },
          "text": {
            "en": "A bootstrap draws samples with replacement and recalculates the statistic. This example uses a percentile interval and a fixed random seed. Match the resampling unit to the design, especially with repeated orders, clustered users, or time series.",
            "my": "Bootstrap က အစားပြန်ထည့်ပြီး sample ယူကာ statistic ပြန်တွက်ပါတယ်။ ဒီနမူနာမှာ percentile interval နဲ့ seed တစ်ခု သုံးထားပါတယ်။ Order ထပ်တာ၊ user group နဲ့ time series တွေမှာ resampling unit ကို ဒေတာယူပုံနဲ့ ကိုက်အောင် ရွေးပါ။"
          },
          "code": "import numpy as np\nfrom scipy.stats import bootstrap\n\nunits = np.array([8, 10, 12, 14, 16, 18])\nresult = bootstrap((units,), np.mean, confidence_level=0.95, method=\"percentile\",\n                   n_resamples=4_999, rng=np.random.default_rng(42))\nlow, high = result.confidence_interval\nprint(f\"Mean: {units.mean():.1f}\")\nprint(f\"95% CI: {low:.2f} to {high:.2f}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Mean: 13.0\n95% CI: 10.33 to 15.67"
        }
      ]
    },
    {
      "id": "hypothesis-testing",
      "title": {
        "en": "Hypothesis testing and experiment results",
        "my": "Hypothesis Testing နှင့် Experiment ရလဒ်"
      },
      "intro": {
        "en": "Define a comparison, apply an independent-samples test, and read the result with an effect size.",
        "my": "နှိုင်းယှဉ်မယ့်အရာ သတ်မှတ်ပါ။ Independent sample test သုံးပြီး ရလာတဲ့ result ကို effect size နဲ့ တွဲဖတ်ပါ။"
      },
      "sources": [
        [
          "NIST two-sample t-test",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda353.htm"
        ],
        [
          "scipy.stats.ttest_ind",
          "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html"
        ]
      ],
      "sections": [
        {
          "id": "design",
          "title": {
            "en": "Specify the question before testing",
            "my": "Test မလုပ်ခင် မေးခွန်း သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "Write the null hypothesis, alternative, metric, and threshold before looking at results. A p-value describes how unusual the result is under the null and test assumptions. Report the effect size and uncertainty alongside the p-value. For A/B tests, use the randomization unit and account for repeated measurements.",
            "my": "ရလဒ်မကြည့်ခင် null hypothesis၊ alternative၊ metric နဲ့ threshold သတ်မှတ်ပါ။ p-value က null hypothesis နဲ့ test ယူဆချက်အောက်မှာ ရလဒ် ဘယ်လောက်ရှားလဲ ဖော်ပြပါတယ်။ p-value နဲ့အတူ effect size နဲ့ မသေချာမှု တင်ပြပါ။ A/B test မှာ randomize လုပ်တဲ့ unit သုံးပြီး ထပ်တိုင်းထားတာတွေကို ထည့်စဉ်းစားပါ။"
          }
        },
        {
          "id": "welch",
          "title": {
            "en": "Compare two independent means",
            "my": "သီးခြား Sample Mean နှစ်ခု ယှဉ်ခြင်း"
          },
          "text": {
            "en": "Welch’s t-test compares means from two independent groups without assuming equal variances. Start with a meaningful measurement, independent units, and a suitable sampling design. For the same units measured twice, use a paired analysis. A small p-value does not tell you whether the improvement matters to the business.",
            "my": "Welch t-test က variance တူရမယ်လို့ မယူဆဘဲ သီးခြား group နှစ်ခုရဲ့ mean ယှဉ်ပါတယ်။ အဓိပ္ပာယ်ရှိတဲ့ measurement၊ သီးခြား unit နဲ့ ကိုက်ညီတဲ့ sample design ကနေ စပါ။ Unit တူတူကို နှစ်ကြိမ်တိုင်းရင် paired analysis သုံးပါ။ p-value သေးတာက လုပ်ငန်းအတွက် အကျိုးသက်ရောက်မှု ဘယ်လောက်အရေးပါလဲ မပြပါ။"
          },
          "code": "import numpy as np\nfrom scipy.stats import ttest_ind\n\nold = np.array([11, 12, 10, 14, 13, 12])\nnew = np.array([15, 16, 14, 18, 17, 16])\nresult = ttest_ind(new, old, equal_var=False)\nprint(f\"Difference: {new.mean() - old.mean():.1f}\")\nprint(f\"p-value: {result.pvalue:.4f}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Difference: 4.0\np-value: 0.0006"
        }
      ]
    },
    {
      "id": "correlation-and-confounding",
      "title": {
        "en": "Correlation, confounding, and practical interpretation",
        "my": "Correlation၊ Confounding နှင့် လက်တွေ့ အဓိပ္ပာယ်ဖတ်ခြင်း"
      },
      "intro": {
        "en": "Measure a relationship and check how outliers, subgroup mix, and study design affect the claim.",
        "my": "ဆက်နွှယ်မှု တိုင်းပြီး outlier၊ subgroup အချိုးနဲ့ study design က ကောက်ချက်ကို ဘယ်လို သက်ရောက်လဲ စစ်ပါ။"
      },
      "sources": [
        [
          "scipy.stats.pearsonr",
          "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.pearsonr.html"
        ],
        [
          "scipy.stats.spearmanr",
          "https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html"
        ],
        [
          "NIST scatter plots",
          "https://www.itl.nist.gov/div898/handbook/eda/section3/eda33q.htm"
        ]
      ],
      "sections": [
        {
          "id": "association",
          "title": {
            "en": "Choose a measure and inspect the data",
            "my": "Measure ရွေးပြီး ဒေတာကို ကြည့်ခြင်း"
          },
          "text": {
            "en": "Pearson correlation measures linear association. Spearman correlation uses ranks and can describe a monotonic but nonlinear relationship. Look at a scatter plot, check constant variables and outliers, and use rows where both values are available.",
            "my": "Pearson correlation က တန်းဖြောင့် ဆက်နွှယ်မှု တိုင်းပါတယ်။ Spearman က rank ကို သုံးလို့ တန်းဖြောင့်မဟုတ်ဘဲ ဦးတည်ချက်တစ်ခုတည်း ရှိတဲ့ ဆက်နွှယ်မှုကို ဖော်ပြနိုင်ပါတယ်။ Scatter plot ကြည့်၊ တန်ဖိုးတူနေတဲ့ variable နဲ့ outlier စစ်ပြီး နှစ်ခုလုံးရှိတဲ့ row တွေ သုံးပါ။"
          },
          "code": "from scipy.stats import pearsonr, spearmanr\n\nx = [1, 2, 3, 4, 5]\ny = [1, 4, 9, 16, 25]\nprint(round(float(pearsonr(x, y).statistic), 2))\nprint(round(float(spearmanr(x, y).statistic), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "0.98\n1.0"
        },
        {
          "id": "confounding",
          "title": {
            "en": "Check other explanations",
            "my": "တခြား ရှင်းလင်းချက်များ စစ်ခြင်း"
          },
          "text": {
            "en": "A relationship between promotions and sales can reflect season, store size, or product mix. Compare relevant subgroups and document limits before making a causal claim. A randomized design or another justified causal method is needed to estimate effects in many settings.",
            "my": "Promotion နဲ့ sales ဆက်နွှယ်မှုမှာ ရာသီ၊ ဆိုင်အရွယ်အစား သို့မဟုတ် product အချိုး ပါနိုင်ပါတယ်။ အကြောင်းရင်းလို့ မဆိုခင် သက်ဆိုင်တဲ့ subgroup တွေ ယှဉ်ပြီး ကန့်သတ်ချက် မှတ်ပါ။ သက်ရောက်မှု ခန့်မှန်းဖို့ အခြေအနေများစွာမှာ randomized design သို့မဟုတ် အထောက်အထားရှိတဲ့ causal method လိုပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "reproducible-report",
      "title": {
        "en": "Build a reproducible analysis report",
        "my": "ပြန်လုပ်လို့ရတဲ့ Analysis Report တည်ဆောက်ခြင်း"
      },
      "intro": {
        "en": "Keep the raw input, document transformations, and report both a result and its coverage.",
        "my": "Raw input သိမ်း၊ ပြောင်းလဲမှုတွေ မှတ်ပြီး ရလဒ်နဲ့ ပါဝင်မှုကို တွဲတင်ပြပါ။"
      },
      "sources": [
        [
          "Jupyter Notebook documentation",
          "https://jupyter-notebook.readthedocs.io/en/stable/notebook.html"
        ],
        [
          "pandas missing data guide",
          "https://pandas.pydata.org/docs/user_guide/missing_data.html"
        ]
      ],
      "sections": [
        {
          "id": "reproduce",
          "title": {
            "en": "Record inputs and build reusable steps",
            "my": "Input မှတ်ပြီး ပြန်သုံးနိုင်တဲ့ အဆင့်တွေ ဆောက်ခြင်း"
          },
          "text": {
            "en": "Keep a read-only source copy and record the extraction date, filters, covered period, column meanings, and software versions. Store transformation code and parameter values. In a notebook, restart and run all cells in order to check that hidden state is unnecessary.",
            "my": "မူရင်းဖိုင်ကို read-only မိတ္တူထားပြီး ရယူရက်၊ filter၊ ပါဝင်ကာလ၊ column အဓိပ္ပာယ်နဲ့ software version တွေ မှတ်ပါ။ Transformation code နဲ့ parameter value တွေ သိမ်းပါ။ Notebook မှာ restart လုပ်ပြီး cell အားလုံး အစဉ်လိုက် run ကာ အရင် state မလိုကြောင်း စစ်ပါ။"
          }
        },
        {
          "id": "coverage",
          "title": {
            "en": "Calculate and report coverage with a KPI",
            "my": "KPI နဲ့အတူ ပါဝင်မှု တွက်ပြီး တင်ပြခြင်း"
          },
          "text": {
            "en": "Present the metric, units, comparison, and exclusions in the same report. Distinguish the eligible records from those with usable values. Add checks that catch schema changes or unexpected row losses before writing the final chart.",
            "my": "Metric၊ unit၊ နှိုင်းယှဉ်ချက်နဲ့ ဖယ်ထားတာတွေကို report တစ်ခုထဲ ဖော်ပြပါ။ ပါသင့်တဲ့ record နဲ့ တန်ဖိုးသုံးလို့ရတဲ့ record ကို ခွဲပါ။ နောက်ဆုံး chart မရေးခင် schema ပြောင်းတာ၊ row မျှော်လင့်မထားဘဲ လျော့တာကို စစ်ပါ။"
          },
          "code": "import pandas as pd\n\namount = pd.Series([4.0, None, 8.0, 2.0])\nused = int(amount.notna().sum())\nassert 0 < used <= len(amount)\nprint(f\"Usable total: {amount.sum(min_count=1):.1f}\")\nprint(f\"Coverage: {used}/{len(amount)}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Usable total: 14.0\nCoverage: 3/4"
        }
      ]
    }
  ]
};
