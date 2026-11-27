import apiReference from './pandas-api.js?v=73';

export default {
  "id": "pandas",
  "name": "pandas",
  "version": "3.1.1",
  "intro": {
    "en": "Read, clean, join, and summarize labeled data with Series and DataFrames.",
    "my": "Series နဲ့ DataFrame သုံးပြီး label ပါတဲ့ ဒေတာ ဖတ်၊ သန့်စင်၊ ဆက်ပြီး အနှစ်ချုပ်ပါ။"
  },
  "pages": [
    {
      "id": "dataframes",
      "title": {
        "en": "Series, DataFrames, and indexes",
        "my": "Series၊ DataFrames နှင့် Indexes"
      },
      "intro": {
        "en": "Understand the objects pandas uses for labeled tabular data and how they align values.",
        "my": "Label ပါတဲ့ table data သိမ်းဖို့ pandas သုံးတဲ့ object တွေနဲ့ value တွေကို ဘယ်လိုညှိလဲ လေ့လာပါ။"
      },
      "aliases": [
        "series-and-dataframes"
      ],
      "sources": [
        [
          "Intro to pandas data structures",
          "https://pandas.pydata.org/docs/user_guide/dsintro.html"
        ],
        [
          "Pandas user guide",
          "https://pandas.pydata.org/docs/user_guide/index.html"
        ]
      ],
      "sections": [
        {
          "id": "tabular-model",
          "title": {
            "en": "Series and DataFrame",
            "my": "Series နှင့် DataFrame"
          },
          "text": {
            "en": "A Series is one-dimensional and has an index. A DataFrame is a two-dimensional table whose columns can have different dtypes. Selecting one column by a scalar label generally gives a Series. Selecting a list of columns gives a DataFrame.",
            "my": "Series က တစ်ဖက်မြင် ဖြစ်ပြီး index ရှိပါတယ်။ DataFrame က နှစ်ဖက်မြင် table ဖြစ်ပြီး column အလိုက် dtype ကွာနိုင်ပါတယ်။ Column label တစ်ခု ရွေးရင် အများအားဖြင့် Series ရပါတယ်။ Column list ရွေးရင် DataFrame ရပါတယ်။"
          },
          "code": "import pandas as pd\n\nframe = pd.DataFrame({\"item\": [\"Coffee\", \"Tea\"], \"price\": [2.0, 1.5]})\nprint(frame.shape)\nprint(frame[\"price\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(2, 2)\n[2.0, 1.5]",
          "figure": {
            "src": "/docs/media/data/dataframes-tabular-model.png",
            "width": 720,
            "height": 328,
            "alt": {
              "en": "A DataFrame has item and price columns. Selecting price gives a Series with values 2.0 and 1.5 and the same index labels.",
              "my": "DataFrame မှာ item နဲ့ price column ရှိပါတယ်။ price ရွေးရင် value 2.0 နဲ့ 1.5 ပါတဲ့ Series ရပြီး index label အတူတူပါပဲ။"
            },
            "caption": {
              "en": "A single column selection keeps the row index.",
              "my": "Column တစ်ခု ရွေးပြီးရင် မူရင်း row index တွေ ပါလာပါတယ်။"
            }
          }
        },
        {
          "id": "alignment",
          "title": {
            "en": "Index alignment",
            "my": "Index အလိုက် ညှိခြင်း"
          },
          "text": {
            "en": "Arithmetic between Series aligns by label. If only one Series contains a label, the usual sum is missing at that label. Use add(fill_value=0) only when a missing side should count as zero.",
            "my": "Series နှစ်ခု တွက်တဲ့အခါ label တူတာတွေကို ညှိပါတယ်။ Label တစ်ခု တစ်ဖက်မှာပဲ ရှိရင် ပုံမှန်ပေါင်းလဒ်က missing ဖြစ်ပါတယ်။ တစ်ဖက်မရှိတာကို သုညလို့ သတ်မှတ်ချက်ရှိမှ add(fill_value=0) သုံးပါ။"
          },
          "code": "import pandas as pd\n\nmorning = pd.Series({\"Tea\": 2, \"Coffee\": 4})\nevening = pd.Series({\"Coffee\": 3, \"Cake\": 1})\nprint(morning.add(evening, fill_value=0).sort_index().to_dict())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "{'Cake': 1.0, 'Coffee': 7.0, 'Tea': 2.0}"
        }
      ]
    },
    {
      "id": "read-csv",
      "title": {
        "en": "Read and inspect a CSV",
        "my": "CSV ဖတ်၍ စစ်ဆေးခြင်း"
      },
      "intro": {
        "en": "Preserve identifiers, control missing-value parsing, and inspect the schema before analysis.",
        "my": "Identifier တွေ မပျက်အောင် ထားပါ။ Missing value ဖတ်ပုံကို သတ်မှတ်ပြီး မတွက်ခင် schema စစ်ပါ။"
      },
      "sources": [
        [
          "pandas.read_csv",
          "https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html"
        ],
        [
          "Input and output tools",
          "https://pandas.pydata.org/docs/user_guide/io.html"
        ]
      ],
      "sections": [
        {
          "id": "read-options",
          "title": {
            "en": "Choose CSV parsing rules",
            "my": "CSV ဖတ်မယ့် Rule ရွေးခြင်း"
          },
          "text": {
            "en": "read_csv accepts a path or a file-like object. Use dtype for identifiers with leading zeros. Set na_values for known missing codes. When keep_default_na=False is used without na_values, pandas does not use its default missing-string list.",
            "my": "read_csv က path သို့မဟုတ် file-like object လက်ခံပါတယ်။ ရှေ့မှာ သုညပါတဲ့ identifier တွေအတွက် dtype သတ်မှတ်ပါ။ သိပြီးသား missing code တွေအတွက် na_values သုံးပါ။ keep_default_na=False ထားပြီး na_values မပေးရင် pandas ရဲ့ default missing စာရင်းကို မသုံးပါ။"
          },
          "code": "from io import StringIO\nimport pandas as pd\n\nsource = StringIO(\"id,item,total\\n001,Tea,3\\n002,Cake,ERROR\\n\")\nframe = pd.read_csv(source, dtype={\"id\": \"string\"}, na_values={\"total\": [\"ERROR\"]})\nprint(frame[\"id\"].tolist())\nprint(frame[\"total\"].isna().sum())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['001', '002']\n1"
        },
        {
          "id": "inspect",
          "title": {
            "en": "Inspect shape and types",
            "my": "Shape နှင့် Type စစ်ခြင်း"
          },
          "text": {
            "en": "Use head() for examples, shape for counts, and dtypes for inferred types. DataFrame.info() prints a summary including column types. Check delimiters, encoding, parsing errors, and missing values when the output differs from the source schema.",
            "my": "နမူနာကြည့်ဖို့ head()၊ အရေအတွက်အတွက် shape၊ type ကြည့်ဖို့ dtypes သုံးပါ။ DataFrame.info() က column type တွေပါတဲ့ summary ထုတ်ပါတယ်။ မူရင်း schema နဲ့ ကွာရင် delimiter၊ encoding၊ parse error နဲ့ missing value တွေ စစ်ပါ။"
          }
        }
      ]
    },
    {
      "id": "indexing",
      "title": {
        "en": "Select, filter, sort, and assign",
        "my": "ရွေးခြင်း၊ စစ်ထုတ်ခြင်း၊ အစဉ်စီခြင်းနှင့် ပြင်ခြင်း"
      },
      "intro": {
        "en": "Use label-based and position-based selection, and update a DataFrame with Copy-on-Write in mind.",
        "my": "Label သို့မဟုတ် position နဲ့ ရွေးပါ။ Copy-on-Write ကို ထည့်စဉ်းစားပြီး DataFrame ပြင်ပါ။"
      },
      "aliases": [
        "filter-and-select",
        "sort-values"
      ],
      "sources": [
        [
          "Indexing and selecting data",
          "https://pandas.pydata.org/docs/user_guide/indexing.html"
        ],
        [
          "Copy-on-Write",
          "https://pandas.pydata.org/docs/user_guide/migration.html#copy-on-write-cow"
        ]
      ],
      "sections": [
        {
          "id": "selection",
          "title": {
            "en": "Select with loc and iloc",
            "my": "loc နှင့် iloc ဖြင့် ရွေးခြင်း"
          },
          "text": {
            "en": "loc selects by label and can apply a Boolean mask. A label slice includes both bounds when present. iloc selects by integer position and uses the usual exclusive stop for slices.",
            "my": "loc က label အလိုက် ရွေးပြီး Boolean mask သုံးနိုင်ပါတယ်။ Label slice မှာ အစွန်းနှစ်ခုရှိရင် နှစ်ခုလုံး ပါပါတယ်။ iloc က integer position အလိုက် ရွေးပြီး slice ရဲ့ stop မပါပါ။"
          },
          "code": "import pandas as pd\n\nframe = pd.DataFrame({\"item\": [\"Tea\", \"Cake\", \"Coffee\"], \"sales\": [8, 15, 12]})\nselected = frame.loc[frame[\"sales\"].ge(10)].sort_values(\"sales\", ascending=False)\nprint(selected[\"item\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Cake', 'Coffee']"
        },
        {
          "id": "copy-on-write",
          "title": {
            "en": "Assign with one loc operation",
            "my": "loc တစ်ခါတည်းနဲ့ ပြင်ခြင်း"
          },
          "text": {
            "en": "pandas 3.x uses Copy-on-Write. Chained assignment cannot update the original DataFrame. To update the original, select the matching rows and target column together inside a single loc assignment.",
            "my": "pandas 3.x မှာ Copy-on-Write သုံးပါတယ်။ Chained assignment နဲ့ မူရင်း DataFrame ကို မပြင်နိုင်ပါ။ မူရင်းကို ပြင်ဖို့ row condition နဲ့ ပြင်မယ့် column ကို loc တစ်ခါတည်းထဲ ထည့်ပါ။"
          },
          "code": "import pandas as pd\n\nframe = pd.DataFrame({\"item\": [\"Tea\", \"Cake\"], \"sales\": [8, 15]})\nframe.loc[frame[\"item\"].eq(\"Tea\"), \"sales\"] = 10\nprint(frame[\"sales\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[10, 15]"
        }
      ]
    },
    {
      "id": "missing-data",
      "title": {
        "en": "Missing data, data types, and duplicates",
        "my": "Missing Data၊ Data Types နှင့် Duplicates"
      },
      "intro": {
        "en": "Identify invalid values, choose nullable dtypes, and resolve duplicates using the correct row grain.",
        "my": "မမှန်တဲ့ value ရှာပါ။ Nullable dtype ရွေးပြီး row တစ်ကြောင်း ဘာကိုဆိုလိုလဲ ကြည့်ကာ duplicate ကို ကိုင်တွယ်ပါ။"
      },
      "aliases": [
        "numeric-and-missing",
        "duplicates"
      ],
      "sources": [
        [
          "Working with missing data",
          "https://pandas.pydata.org/docs/user_guide/missing_data.html"
        ],
        [
          "Migration to the new string dtype",
          "https://pandas.pydata.org/docs/user_guide/migration-3-strings.html"
        ],
        [
          "pandas.to_numeric",
          "https://pandas.pydata.org/docs/reference/api/pandas.to_numeric.html"
        ],
        [
          "DataFrame.duplicated",
          "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.duplicated.html"
        ]
      ],
      "sections": [
        {
          "id": "missing",
          "title": {
            "en": "Detect and convert missing values",
            "my": "Missing Value ရှာ၍ ပြောင်းခြင်း"
          },
          "text": {
            "en": "Use isna() and notna() to inspect missing values. to_numeric(errors=\"coerce\") converts invalid text into missing values. Keep original values or flags when the conversion needs an audit trail.",
            "my": "Missing value စစ်ဖို့ isna() နဲ့ notna() သုံးပါ။ to_numeric(errors=\"coerce\") က ကိန်းဂဏန်းပြောင်းမရတဲ့ စာသားကို missing value ပြောင်းပါတယ်။ ပြန်စစ်ဖို့လိုရင် မူရင်း value သို့မဟုတ် flag သိမ်းပါ။"
          },
          "code": "import pandas as pd\n\nraw = pd.Series([\"2\", \"ERROR\", \"4\"], dtype=\"string\")\nquantity = pd.to_numeric(raw, errors=\"coerce\").astype(\"Int64\")\nprint(quantity.isna().tolist())\nprint(quantity.sum())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[False, True, False]\n6"
        },
        {
          "id": "text-dtypes",
          "title": {
            "en": "Text and nullable dtypes in pandas 3.x",
            "my": "pandas 3.x မှာ Text နှင့် Nullable Dtypes"
          },
          "text": {
            "en": "Since pandas 3.0, text values are inferred as the dedicated str dtype instead of object. Inferred str typically represents missing values with NaN, while explicit string uses pd.NA. Use Int64 with a capital I for nullable pandas integers when missing values are allowed.",
            "my": "pandas 3.0 ကစပြီး text value တွေအတွက် object အစား str dtype ကို အလိုအလျောက် သတ်မှတ်ပါတယ်။ Inferred str က missing အတွက် NaN သုံးပြီး explicit string က pd.NA သုံးပါတယ်။ Missing value ပါနိုင်တဲ့ integer column အတွက် I အကြီးပါတဲ့ Int64 သုံးပါ။"
          }
        },
        {
          "id": "duplicates",
          "title": {
            "en": "Resolve exact and key duplicates",
            "my": "အတိအကျ ထပ်တာနှင့် Key ထပ်တာ ကိုင်တွယ်ခြင်း"
          },
          "text": {
            "en": "duplicated() flags repeated rows after the first by default. Pass subset to inspect key duplicates. A repeated ID can be valid in a line-item table, so verify the intended grain before dropping rows.",
            "my": "duplicated() က default အနေနဲ့ ပထမ row နောက်က ထပ်နေတဲ့ row တွေကို မှတ်ပါတယ်။ Key ထပ်တာ စစ်ဖို့ subset ပေးပါ။ Line-item table မှာ ID တူတာ မှန်ကန်နိုင်လို့ row မဖယ်ခင် grain စစ်ပါ။"
          },
          "code": "import pandas as pd\n\nframe = pd.DataFrame({\"id\": [1, 2, 2], \"total\": [2, 5, 5]})\nprint(frame.duplicated().sum())\nprint(len(frame.drop_duplicates()))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "1\n2"
        }
      ]
    },
    {
      "id": "groupby",
      "title": {
        "en": "Group, aggregate, and reshape",
        "my": "Group ဖွဲ့ခြင်း၊ တွက်ခြင်းနှင့် ပုံစံပြောင်းခြင်း"
      },
      "intro": {
        "en": "Summarize values by group and decide how missing categories affect the result.",
        "my": "Group အလိုက် အနှစ်ချုပ်တွက်ပြီး category ပျောက်တာကို ရလဒ်ထဲ ဘယ်လိုကိုင်တွယ်မလဲ သတ်မှတ်ပါ။"
      },
      "aliases": [
        "pivot-tables"
      ],
      "sources": [
        [
          "Group by, split, apply, combine",
          "https://pandas.pydata.org/docs/user_guide/groupby.html"
        ],
        [
          "Reshaping and pivot tables",
          "https://pandas.pydata.org/docs/user_guide/reshaping.html"
        ]
      ],
      "sections": [
        {
          "id": "summaries",
          "title": {
            "en": "Aggregate or transform",
            "my": "Aggregate သို့မဟုတ် Transform လုပ်ခြင်း"
          },
          "text": {
            "en": "groupby splits data by key. agg reduces each group into summary values. transform returns values aligned to the original rows, useful for group means or shares. Pass dropna=False if a missing group key should appear in the output.",
            "my": "groupby က key အလိုက် အုပ်စုခွဲပါတယ်။ agg က အုပ်စုတစ်စုစီကို အနှစ်ချုပ်တန်ဖိုးအဖြစ် တွက်ပေးပါတယ်။ transform က result ကို မူရင်း row အလိုက် ပြန်ညှိပေးလို့ group mean နဲ့ share အတွက် သုံးနိုင်ပါတယ်။ Key ပျောက်တဲ့ group ကိုလည်း ပြချင်ရင် dropna=False ထားပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.DataFrame({\"item\": [\"Tea\", \"Tea\", \"Cake\"], \"units\": [2, 4, 3]})\nprint(sales.groupby(\"item\")[\"units\"].sum().to_dict())\nprint(sales.groupby(\"item\")[\"units\"].transform(\"mean\").tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "{'Cake': 3, 'Tea': 6}\n[3.0, 3.0, 3.0]",
          "figure": {
            "src": "/docs/media/data/groupby-summaries.png",
            "width": 720,
            "height": 358,
            "alt": {
              "en": "Three input rows form two groups. Tea rows with 2 and 4 units sum to 6. Cake has 3 units.",
              "my": "Input row သုံးကြောင်းကို နှစ်စုခွဲပါတယ်။ Tea အတွက် 2 နဲ့ 4 ပေါင်းရင် 6 units၊ Cake အတွက် 3 units ပါ။"
            },
            "caption": {
              "en": "A sum aggregation returns one result per item group.",
              "my": "sum နဲ့ စုတွက်ရင် item group တစ်ခုစီအတွက် ရလဒ်တစ်ခု ရပါတယ်။"
            }
          }
        },
        {
          "id": "pivot",
          "title": {
            "en": "Compare groups with a pivot table",
            "my": "Pivot Table ဖြင့် Group တွေ ယှဉ်ခြင်း"
          },
          "text": {
            "en": "Use pivot when each index and column pair is unique. Use pivot_table with an explicit aggfunc when several records share a pair. Fill absent combinations with zero only if that matches what the missing combination means.",
            "my": "Index နဲ့ column အတွဲ တစ်မျိုးစီ တစ်ခုတည်းရှိရင် pivot သုံးပါ။ အတွဲတူ record တွေ ရှိရင် aggfunc သတ်မှတ်ပြီး pivot_table သုံးပါ။ မရှိတဲ့ အတွဲကို သုညဖြည့်တာ အဓိပ္ပာယ်ကိုက်မှ သုံးပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.DataFrame({\"item\": [\"Tea\", \"Tea\", \"Tea\"], \"store\": [\"A\", \"A\", \"B\"], \"units\": [2, 4, 3]})\ntable = sales.pivot_table(index=\"item\", columns=\"store\", values=\"units\", aggfunc=\"sum\")\nprint(table.loc[\"Tea\", [\"A\", \"B\"]].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[6, 3]"
        }
      ]
    },
    {
      "id": "merge",
      "title": {
        "en": "Merge and concatenate tables",
        "my": "Table များ Merge နှင့် Concatenate လုပ်ခြင်း"
      },
      "intro": {
        "en": "Combine data safely by checking keys, join type, and the expected relationship between tables.",
        "my": "Key၊ join type နဲ့ table တွေရဲ့ ဆက်နွှယ်မှုကို စစ်ပြီး ဒေတာ ပေါင်းပါ။"
      },
      "sources": [
        [
          "Merge, join, and concatenate",
          "https://pandas.pydata.org/docs/user_guide/merging.html"
        ],
        [
          "pandas.merge",
          "https://pandas.pydata.org/docs/reference/api/pandas.merge.html"
        ]
      ],
      "sections": [
        {
          "id": "join-types",
          "title": {
            "en": "Check the relationship before joining",
            "my": "Join မလုပ်မီ ဆက်နွှယ်မှု စစ်ခြင်း"
          },
          "text": {
            "en": "An inner merge retains matching keys. A left merge retains all left rows, and a match on multiple right rows can duplicate left rows. Use validate to assert key relationships. pandas merge can match null keys on both sides, so decide how to handle them.",
            "my": "Inner merge က key ကိုက်တာတွေ ထားပါတယ်။ Left merge က ဘယ်ဘက် row အားလုံး ထားပါတယ်။ ညာဘက်မှာ ကိုက်တာ တစ်ခုထက်ပိုရင် ဘယ်ဘက် row ပွားနိုင်ပါတယ်။ Key ဆက်နွှယ်မှုကို validate နဲ့ စစ်ပါ။ pandas merge က နှစ်ဖက်လုံး null ဖြစ်တဲ့ key တွေကိုလည်း တွဲနိုင်လို့ ဘယ်လို ကိုင်တွယ်မလဲ သတ်မှတ်ပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.DataFrame({\"item_id\": [2, 7], \"units\": [3, 1]})\nmenu = pd.DataFrame({\"item_id\": [1, 2], \"name\": [\"Tea\", \"Cake\"]})\nmerged = sales.merge(menu, on=\"item_id\", how=\"left\", validate=\"many_to_one\", indicator=True)\nprint(merged[\"_merge\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['both', 'left_only']",
          "figure": {
            "src": "/docs/media/data/merge-join-types.png",
            "width": 720,
            "height": 386,
            "alt": {
              "en": "Sales keys 2 and 7 remain after a left merge. Key 2 matches Cake, while key 7 has a missing name and left_only status.",
              "my": "Left merge ပြီးတဲ့အခါ sales key 2 နဲ့ 7 နှစ်ခုလုံး ပါပါတယ်။ Key 2 က Cake နဲ့ ကိုက်ပြီး key 7 က name မရှိလို့ left_only ဖြစ်ပါတယ်။"
            },
            "caption": {
              "en": "The merge indicator helps track unmatched keys.",
              "my": "Merge indicator နဲ့ တစ်ဖက်မှာ ကိုက်ညီမှုမရှိတဲ့ key တွေ ရှာနိုင်ပါတယ်။"
            }
          }
        },
        {
          "id": "concat",
          "title": {
            "en": "Append compatible batches",
            "my": "ပုံစံကိုက်တဲ့ Batch များ ဆက်ခြင်း"
          },
          "text": {
            "en": "concat combines objects along an axis and aligns labels on the other axis. Combine compatible batches together and choose ignore_index=True when old row indexes are irrelevant.",
            "my": "concat က axis တစ်ခုအတိုင်း ပေါင်းပြီး ကျန် axis ပေါ်က label တွေ ညှိပေးပါတယ်။ Schema ကိုက်တဲ့ batch တွေကို တစ်ခါတည်း ပေါင်းပါ။ Index အဟောင်း မလိုရင် ignore_index=True သုံးပါ။"
          },
          "code": "import pandas as pd\n\nbatches = [pd.DataFrame({\"total\": [3]}), pd.DataFrame({\"total\": [4]})]\nprint(pd.concat(batches, ignore_index=True)[\"total\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[3, 4]"
        }
      ]
    },
    {
      "id": "dates",
      "title": {
        "en": "Parse dates and group time series",
        "my": "ရက်စွဲပြောင်း၍ Time Series အုပ်စုခွဲခြင်း"
      },
      "intro": {
        "en": "Turn dates into usable values, choose a time grain, and handle invalid or time-zone-aware rows.",
        "my": "ရက်စွဲကို အသုံးပြုလို့ရအောင် ပြောင်းပါ။ အချိန်အုပ်စု ရွေးပြီး မမှန်တဲ့ရက်စွဲ သို့မဟုတ် timezone ပါတာတွေ ကိုင်တွယ်ပါ။"
      },
      "sources": [
        [
          "Time series and date functionality",
          "https://pandas.pydata.org/docs/user_guide/timeseries.html"
        ],
        [
          "pandas.to_datetime",
          "https://pandas.pydata.org/docs/reference/api/pandas.to_datetime.html"
        ]
      ],
      "sections": [
        {
          "id": "parse",
          "title": {
            "en": "Parse using a known format",
            "my": "သိထားတဲ့ Format နဲ့ Parse လုပ်ခြင်း"
          },
          "text": {
            "en": "Use to_datetime with a format when the source follows a fixed pattern. errors=\"coerce\" converts invalid inputs to NaT. Use utc=True if converting offset-aware values to a common UTC timeline, and choose the reporting timezone before grouping by local day.",
            "my": "Source က format တစ်မျိုးတည်း သုံးရင် to_datetime မှာ format ထည့်ပါ။ errors=\"coerce\" က မမှန်တဲ့ input ကို NaT ပြောင်းပါတယ်။ Offset ပါတဲ့ value တွေကို UTC တစ်ခုတည်းအဖြစ် ပြောင်းဖို့ utc=True သုံးနိုင်ပြီး local day အလိုက် မစုခင် reporting timezone ရွေးပါ။"
          },
          "code": "import pandas as pd\n\ndates = pd.to_datetime(pd.Series([\"2023-03-01\", \"ERROR\"]), format=\"%Y-%m-%d\", errors=\"coerce\")\nprint(dates.isna().tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[False, True]"
        },
        {
          "id": "monthly",
          "title": {
            "en": "Group by calendar month",
            "my": "ပြက္ခဒိန်လ အလိုက် စုခြင်း"
          },
          "text": {
            "en": "Use a monthly period to label records by calendar month. Resampling on a datetime index creates regular time bins. Choose explicit aggregation and distinguish empty months from months with meaningful zero sales.",
            "my": "ပြက္ခဒိန်လ အလိုက် တံဆိပ်ပေးဖို့ monthly period သုံးပါ။ Datetime index ပေါ် resample လုပ်ရင် အချိန်အပိုင်းတွေ ပုံမှန်ခွဲပေးပါတယ်။ ဘာတွက်မလဲ အတိအကျ သတ်မှတ်ပြီး data မရှိတဲ့လနဲ့ အရောင်းသုည ဖြစ်တဲ့လကို ခွဲပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.DataFrame({\"date\": pd.to_datetime([\"2023-01-05\", \"2023-01-09\", \"2023-02-02\"]), \"total\": [4, 2, 6]})\nmonthly = sales.groupby(sales[\"date\"].dt.to_period(\"M\"))[\"total\"].sum(min_count=1)\nprint({str(month): float(value) for month, value in monthly.items()})",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "{'2023-01': 6.0, '2023-02': 6.0}"
        }
      ]
    },
    {
      "id": "wide-and-long-tables",
      "title": {
        "en": "Reshape between wide and long tables",
        "my": "Wide နှင့် Long Table ပုံစံ ပြောင်းခြင်း"
      },
      "intro": {
        "en": "Move repeated measurement columns into rows and choose how to pivot them back.",
        "my": "ထပ်တလဲလဲ တိုင်းတာထားတဲ့ column တွေကို row အဖြစ် ပြောင်းပြီး table ပြန်ဖြန့်ပုံကို ရွေးပါ။"
      },
      "sources": [
        [
          "pandas reshaping and pivot tables",
          "https://pandas.pydata.org/docs/user_guide/reshaping.html"
        ],
        [
          "pandas.DataFrame.melt",
          "https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.melt.html"
        ]
      ],
      "sections": [
        {
          "id": "melt",
          "title": {
            "en": "Move measurement columns into rows",
            "my": "တိုင်းတာထားတဲ့ Column တွေကို Row အဖြစ် ပြောင်းခြင်း"
          },
          "text": {
            "en": "Wide data can store one column per month. melt keeps the identifier columns and puts the former column names and their values into two columns. The row grain changes from one row per store to one row per store and month.",
            "my": "Wide table မှာ တစ်လစီအတွက် column တစ်ခုထားနိုင်ပါတယ်။ melt က store လို identifier column ကို ထားပေးပြီး အရင် column နာမည်တွေကို month ထဲ၊ တန်ဖိုးတွေကို units ထဲ ပြောင်းထည့်ပေးပါတယ်။ အရင်က ဆိုင်တစ်ဆိုင်ကို row တစ်ကြောင်းရှိပြီး ပြောင်းပြီးရင် ဆိုင်နဲ့လ တွဲဖက်မှုတစ်ခုကို row တစ်ကြောင်း ရှိပါတယ်။"
          },
          "code": "import pandas as pd\n\nwide = pd.DataFrame({\"store\": [\"A\", \"B\"], \"Jan\": [8, 6], \"Feb\": [10, 9]})\nlong = wide.melt(id_vars=\"store\", var_name=\"month\", value_name=\"units\")\nfor row in long.itertuples(index=False):\n    print(row.store, row.month, row.units)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "A Jan 8\nB Jan 6\nA Feb 10\nB Feb 9",
          "figure": {
            "src": "/docs/media/data/wide-and-long-tables-melt.png",
            "width": 720,
            "height": 375,
            "alt": {
              "en": "The wide table has one row per store. The long table has four rows, one for each store and month pair.",
              "my": "Wide table မှာ ဆိုင်တစ်ဆိုင်ကို row တစ်ကြောင်း ရှိပါတယ်။ Long table မှာ ဆိုင်နဲ့လ တွဲဖက်မှုတစ်ခုစီအတွက် row တစ်ကြောင်းနဲ့ စုစုပေါင်း လေးကြောင်းရှိပါတယ်။"
            },
            "caption": {
              "en": "The value 10 moves from store A’s Feb column to a row labeled A and Feb.",
              "my": "ဆိုင် A ရဲ့ Feb column ထဲက 10 က A နဲ့ Feb လို့ မှတ်ထားတဲ့ row ထဲ ရောက်သွားပါတယ်။"
            }
          }
        },
        {
          "id": "pivot",
          "title": {
            "en": "Pivot unique pairs or aggregate repeats",
            "my": "ထပ်နေတဲ့ Key တွေရှိရင် စုတွက်ပြီး Pivot လုပ်ခြင်း"
          },
          "text": {
            "en": "pivot requires each index and column pair to be unique. If multiple rows for one store and month represent separate orders, use pivot_table with a deliberate aggregation. Verify the row grain before deciding whether summing is meaningful.",
            "my": "pivot သုံးတဲ့အခါ index နဲ့ column တွဲဖက်မှုတစ်ခုစီ မထပ်ရပါ။ ဆိုင်နဲ့လ တူတဲ့ row အများကြီးက သီးခြား order တွေဆိုရင် pivot_table မှာ စုတွက်မယ့် function သတ်မှတ်ပေးပါ။ ပေါင်းဖို့ သင့်မသင့် မဆုံးဖြတ်ခင် row တစ်ကြောင်းက ဘာကို ကိုယ်စားပြုလဲ စစ်ပါ။"
          },
          "code": "import pandas as pd\n\norders = pd.DataFrame({\n    \"store\": [\"A\", \"A\", \"A\"],\n    \"month\": [\"Jan\", \"Jan\", \"Feb\"],\n    \"units\": [3, 5, 10],\n})\nsummary = orders.pivot_table(index=\"store\", columns=\"month\", values=\"units\", aggfunc=\"sum\")\nprint(summary.loc[\"A\", [\"Jan\", \"Feb\"]].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[8, 10]"
        }
      ]
    },
    {
      "id": "strings-and-categories",
      "title": {
        "en": "Clean text and define categories",
        "my": "စာသားသန့်စင်ခြင်းနှင့် Category သတ်မှတ်ခြင်း"
      },
      "intro": {
        "en": "Normalize text labels and use ordered categoricals for levels with a known order.",
        "my": "စာသား label တွေ ညှိပါ။ အစဉ်သတ်မှတ်ထားတဲ့ အဆင့်တွေအတွက် ordered categorical သုံးပါ။"
      },
      "sources": [
        [
          "Working with text data",
          "https://pandas.pydata.org/docs/user_guide/text.html"
        ],
        [
          "Categorical data",
          "https://pandas.pydata.org/docs/user_guide/categorical.html"
        ]
      ],
      "sections": [
        {
          "id": "strings",
          "title": {
            "en": "Normalize labels with string methods",
            "my": "String Method များဖြင့် Label ညှိခြင်း"
          },
          "text": {
            "en": "Use Series.str methods to trim whitespace, standardize case, and test text. Preserve original labels if you need a record of the changes. When filtering, decide whether a missing label should count as a match.",
            "my": "Whitespace ဖြတ်ဖို့၊ စာလုံးအကြီးအသေး ညှိဖို့နဲ့ စာသား စစ်ဖို့ Series.str method သုံးပါ။ ဘာတွေ ပြောင်းခဲ့လဲ သိဖို့လိုရင် မူရင်း label သိမ်းပါ။ Filter လုပ်တဲ့အခါ missing label ကို ကိုက်ညီတယ်လို့ သတ်မှတ်မလား ဆုံးဖြတ်ပါ။"
          },
          "code": "import pandas as pd\n\nraw = pd.Series([\" Coffee \", \"tea\", None], dtype=\"string\")\nclean = raw.str.strip().str.casefold()\nprint(clean.fillna(\"unknown\").tolist())\nprint(clean.str.contains(\"coffee\", regex=False, na=False).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['coffee', 'tea', 'unknown']\n[True, False, False]"
        },
        {
          "id": "categories",
          "title": {
            "en": "Sort using category order",
            "my": "Category အစဉ်အတိုင်း စီခြင်း"
          },
          "text": {
            "en": "Use a categorical dtype for a known set of labels. Ordered categories sort in their declared order. Unexpected labels become missing when cast to a fixed category list, so check unknown values before casting.",
            "my": "ကြိုသိထားတဲ့ label အစုအတွက် categorical dtype သုံးပါ။ Ordered category က သတ်မှတ်ထားတဲ့ အစဉ်အတိုင်း စီပါတယ်။ Category စာရင်းထဲ မပါတဲ့ label က cast လုပ်တဲ့အခါ missing ဖြစ်လို့ မပြောင်းခင် စစ်ပါ။"
          },
          "code": "import pandas as pd\n\nlevels = pd.Categorical([\"high\", \"low\", \"medium\"], categories=[\"low\", \"medium\", \"high\"], ordered=True)\nprint(pd.Series(levels).sort_values().tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['low', 'medium', 'high']"
        }
      ]
    },
    {
      "id": "window-functions",
      "title": {
        "en": "Rolling windows and time zones",
        "my": "Rolling Windows နှင့် Time Zones"
      },
      "intro": {
        "en": "Calculate moving summaries and group timestamps using the intended local date.",
        "my": "ရွေ့လျားအနှစ်ချုပ် တွက်ပြီး ရည်ရွယ်တဲ့ ဒေသစံတော်ချိန်ရက်စွဲနဲ့ စုပါ။"
      },
      "sources": [
        [
          "Window operations",
          "https://pandas.pydata.org/docs/user_guide/window.html"
        ],
        [
          "Time series and date functionality",
          "https://pandas.pydata.org/docs/user_guide/timeseries.html"
        ]
      ],
      "sections": [
        {
          "id": "rolling",
          "title": {
            "en": "Choose a count-based or time-based window",
            "my": "Count သို့မဟုတ် Time အလိုက် Window ရွေးခြင်း"
          },
          "text": {
            "en": "rolling(3) uses a window of up to three observations at each position. rolling(\"7D\") uses time with a suitable datetime-like index. Specify min_periods to make the minimum usable observations explicit, and sort time data first.",
            "my": "rolling(3) က နေရာတစ်ခုစီမှာ observation သုံးခုအထိ ယူပါတယ်။ သင့်တော်တဲ့ datetime index ရှိရင် rolling(\"7D\") က အချိန်အလိုက် ယူပါတယ်။ အနည်းဆုံး observation ဘယ်နှခုလိုလဲ min_periods နဲ့ ရေးပြီး time data ကို အရင်စီပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.Series([2, 4, 6, 8])\nprint(sales.rolling(3, min_periods=1).mean().tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[2.0, 3.0, 4.0, 6.0]"
        },
        {
          "id": "timezone",
          "title": {
            "en": "Localize or convert timestamps",
            "my": "Timestamp ကို Localize သို့မဟုတ် Convert လုပ်ခြင်း"
          },
          "text": {
            "en": "tz_localize assigns a time zone to naive timestamps. tz_convert changes the displayed time zone of aware timestamps while preserving the instant. Convert before using a local day or month when the report is defined in local time.",
            "my": "tz_localize က timezone မပါတဲ့ timestamp ကို timezone သတ်မှတ်ပါတယ်။ tz_convert က aware timestamp ပြတဲ့ timezone ပြောင်းပြီး ဖြစ်တဲ့ အချိန်တစ်ချက်ကို ထိန်းထားပါတယ်။ Report က ဒေသစံတော်ချိန်အလိုက် ဖြစ်ရင် နေ့၊ လ မခွဲခင် ပြောင်းပါ။"
          },
          "code": "import pandas as pd\n\ninstant = pd.Timestamp(\"2023-02-28 21:00\", tz=\"UTC\")\nprint(instant.tz_convert(\"Asia/Yangon\").isoformat())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2023-03-01T03:30:00+06:30"
        }
      ]
    },
    {
      "id": "data-formats",
      "title": {
        "en": "Work with CSV, Excel, Parquet, and SQL",
        "my": "CSV၊ Excel၊ Parquet နှင့် SQL သုံးခြင်း"
      },
      "intro": {
        "en": "Choose an input format and control types, worksheets, or columns explicitly.",
        "my": "Input format ရွေးပြီး type၊ worksheet သို့မဟုတ် column တွေကို အတိအကျ သတ်မှတ်ပါ။"
      },
      "sources": [
        [
          "pandas input and output tools",
          "https://pandas.pydata.org/docs/user_guide/io.html"
        ],
        [
          "sqlite3 library reference",
          "https://docs.python.org/3.15/library/sqlite3.html"
        ]
      ],
      "sections": [
        {
          "id": "formats",
          "title": {
            "en": "Pick a format for the handoff",
            "my": "ဒေတာ ပေးပို့မှုအတွက် Format ရွေးခြင်း"
          },
          "text": {
            "en": "CSV exchanges plain text but requires explicit dtype and missing-value rules. Excel is useful when people need worksheets. Parquet stores typed columns and can read only selected columns. Install a compatible optional engine such as openpyxl for .xlsx or pyarrow for Parquet.",
            "my": "CSV က plain text မျှဝေလို့ရပြီး dtype နဲ့ missing rule သတ်မှတ်ရပါတယ်။ Worksheet လိုတဲ့လူတွေအတွက် Excel သင့်တော်ပါတယ်။ Parquet က column type သိမ်းပြီး လိုတဲ့ column တွေပဲ ဖတ်နိုင်ပါတယ်။ .xlsx အတွက် openpyxl၊ Parquet အတွက် pyarrow လို ကိုက်ညီတဲ့ optional engine ထည့်ပါ။"
          },
          "code": "import pandas as pd\n\nsales = pd.DataFrame({\"item\": [\"Tea\", \"Cake\"], \"units\": [4, 2]})\nprint(sales.to_csv(index=False).strip())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "item,units\nTea,4\nCake,2"
        },
        {
          "id": "sql",
          "title": {
            "en": "Read query results into pandas",
            "my": "SQL Query ရလဒ်ကို pandas ထဲ ဖတ်ခြင်း"
          },
          "text": {
            "en": "Use read_sql_query when a database should filter or aggregate data first. Use query parameters for values. This example uses an in-memory SQLite database and needs no database server.",
            "my": "Database မှာ အရင် filter သို့မဟုတ် aggregate လုပ်ချင်ရင် read_sql_query သုံးပါ။ Value တွေအတွက် query parameter သုံးပါ။ ဒီနမူနာက memory ထဲ SQLite သုံးလို့ သီးသန့် database server မလိုပါ။"
          },
          "code": "from contextlib import closing\nimport sqlite3\nimport pandas as pd\n\nwith closing(sqlite3.connect(\":memory:\")) as db:\n    db.execute(\"CREATE TABLE sales (item TEXT, units INTEGER)\")\n    db.executemany(\"INSERT INTO sales VALUES (?, ?)\", [(\"Tea\", 4), (\"Cake\", 2)])\n    rows = pd.read_sql_query(\"SELECT units FROM sales WHERE item = ?\", db, params=(\"Tea\",))\nprint(rows[\"units\"].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[4]"
        }
      ]
    },
    {
      "id": "larger-datasets",
      "title": {
        "en": "Read and summarize larger datasets",
        "my": "ပိုကြီးတဲ့ Dataset ဖတ်၍ အနှစ်ချုပ်ခြင်း"
      },
      "intro": {
        "en": "Read only needed data and compute summaries in batches with explicit aggregation.",
        "my": "လိုတဲ့ဒေတာပဲ ဖတ်ပြီး aggregation ကို သတ်မှတ်ကာ တစ်ပိုင်းချင်း အနှစ်ချုပ်ပါ။"
      },
      "sources": [
        [
          "Scaling to large datasets",
          "https://pandas.pydata.org/docs/user_guide/scale.html"
        ],
        [
          "CSV and text files",
          "https://pandas.pydata.org/docs/user_guide/io.html#csv-text-files"
        ]
      ],
      "sections": [
        {
          "id": "memory",
          "title": {
            "en": "Limit columns and inspect memory use",
            "my": "Column ကန့်သတ်၍ Memory သုံးစွဲမှု စစ်ခြင်း"
          },
          "text": {
            "en": "Read only needed columns with usecols for CSV or columns for Parquet. Choose appropriate dtypes and inspect memory_usage(deep=True) on the resulting frame. Measure before deciding whether an optimization helps.",
            "my": "CSV မှာ usecols၊ Parquet မှာ columns နဲ့ လိုတဲ့ column ပဲ ဖတ်ပါ။ ကိုက်ညီတဲ့ dtype ရွေးပြီး frame မှာ memory_usage(deep=True) စစ်ပါ။ တကယ်အကျိုးရှိမရှိ မဆုံးဖြတ်ခင် တိုင်းပါ။"
          }
        },
        {
          "id": "chunks",
          "title": {
            "en": "Accumulate partial sums and counts",
            "my": "Batch Sum နဲ့ Count တွေ စုခြင်း"
          },
          "text": {
            "en": "read_csv(chunksize=...) returns an iterator over chunks. For a global mean, add all valid values and divide by their total count. Chunk means can differ in sample size, so averaging them directly can skew the result.",
            "my": "read_csv(chunksize=...) က chunk iterator ပြန်ပေးပါတယ်။ အားလုံးရဲ့ ပျမ်းမျှအတွက် သုံးလို့ရတဲ့ value တွေ အကုန်ပေါင်းပြီး count အကုန်နဲ့ စားပါ။ Chunk တစ်ခုစီမှာ sample အရေအတွက် မတူနိုင်လို့ mean တွေကို တိုက်ရိုက် ပျမ်းမျှရင် လွဲနိုင်ပါတယ်။"
          },
          "code": "from io import StringIO\nimport pandas as pd\n\nsource = StringIO(\"amount\\n4\\n2\\n8\\n\")\ntotal = count = 0\nfor chunk in pd.read_csv(source, chunksize=2):\n    total += chunk[\"amount\"].sum()\n    count += chunk[\"amount\"].count()\nprint(total, count, round(float(total / count), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "14 3 4.67"
        }
      ]
    },
    apiReference
  ]
};
