export default {
  "id": "matplotlib",
  "name": "Matplotlib",
  "version": "3.11.2",
  "intro": {
    "en": "Choose suitable charts, build figures, and export them for reports or the web.",
    "my": "ကိုက်ညီတဲ့ chart ရွေးပါ။ Figure ဆောက်ပြီး report သို့မဟုတ် web အတွက် ထုတ်ပါ။"
  },
  "pages": [
    {
      "id": "figures-and-axes",
      "title": {
        "en": "Figures, Axes, and the plotting interface",
        "my": "Figures၊ Axes နှင့် Plotting Interface"
      },
      "intro": {
        "en": "Create a figure and draw on an Axes object using the explicit plotting interface.",
        "my": "Figure တစ်ခု ဆောက်ပြီး explicit plotting interface နဲ့ Axes object ပေါ် ဆွဲပါ။"
      },
      "sources": [
        [
          "Matplotlib quick start",
          "https://matplotlib.org/stable/users/explain/quick_start.html"
        ],
        [
          "matplotlib.pyplot.show",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.show.html"
        ]
      ],
      "sections": [
        {
          "id": "figure-axes-axis",
          "title": {
            "en": "Figure, Axes, and Axis",
            "my": "Figure၊ Axes နှင့် Axis"
          },
          "text": {
            "en": "A Figure contains one or more plotting areas called Axes. Each Axes has Axis objects that handle ticks and scales. Use the object-oriented interface when building several charts or sharing code.",
            "my": "Figure ထဲမှာ Axes လို့ခေါ်တဲ့ chart ဆွဲရမယ့် နေရာ တစ်ခု သို့မဟုတ် အများကြီး ပါနိုင်ပါတယ်။ Axes တစ်ခုစီမှာ tick နဲ့ scale ကို စီမံတဲ့ Axis object တွေ ပါပါတယ်။ Chart အများကြီးဆွဲရင် သို့မဟုတ် code မျှဝေမယ်ဆို object-oriented interface သုံးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [6, 9, 8], marker=\"o\")\nax.set(title=\"Orders by month\", xlabel=\"Month\", ylabel=\"Orders\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/figures-and-axes-figure-axes-axis.png",
            "width": 575,
            "height": 463,
            "alt": {
              "en": "Line chart of 6, 9, and 8 orders across three months.",
              "my": "သုံးလအတွက် order 6၊ 9၊ 8 ခု ပြတဲ့ line chart။"
            }
          }
        },
        {
          "id": "chart-anatomy",
          "title": {
            "en": "Identify the parts of a chart",
            "my": "Chart ထဲက အစိတ်အပိုင်းများ ခွဲသိခြင်း"
          },
          "text": {
            "en": "The Figure is the whole canvas, including the margins. The Axes is the chart area that contains the plotted line and points. The x-axis and y-axis encode the scales. The title describes the chart and the axis labels give the meaning of the values.",
            "my": "Figure က ဘေးနေရာလွတ်တွေ အပါအဝင် ပုံတစ်ခုလုံးပါ။ Axes က line နဲ့ point တွေ ဆွဲထားတဲ့ chart နေရာပါ။ x-axis နဲ့ y-axis မှာ scale တွေ ရှိပါတယ်။ Title က chart က ဘာအကြောင်းလဲ ပြပြီး axis label တွေက တန်ဖိုးတွေ ဘာကို ဆိုလိုလဲ ဖော်ပြပါတယ်။"
          },
          "figure": {
            "src": "/docs/media/data/figures-and-axes-chart-anatomy.png",
            "width": 720,
            "height": 470,
            "alt": {
              "en": "The order chart labels the outer Figure, the Axes plot area, the x-axis, the y-axis, and the point at month 2 and 9 orders.",
              "my": "Orders chart မှာ Figure တစ်ခုလုံး၊ Axes ဆွဲတဲ့နေရာ၊ x-axis၊ y-axis နဲ့ လ 2 မှာ order 9 ခုရှိတဲ့ point ကို ပြထားပါတယ်။"
            },
            "caption": {
              "en": "The example creates the Figure and Axes together with plt.subplots().",
              "my": "ဥပမာမှာ plt.subplots() က Figure နဲ့ Axes ကို အတူတူ ဆောက်ပေးပါတယ်။"
            }
          }
        },
        {
          "id": "output",
          "title": {
            "en": "Display or save a figure",
            "my": "Figure ပြခြင်း သို့မဟုတ် သိမ်းခြင်း"
          },
          "text": {
            "en": "plt.show() displays open figures in an interactive environment. A headless script can save the Figure to a file. Save before a blocking show when using pyplot, or retain the Figure and call its savefig method.",
            "my": "Interactive environment မှာ plt.show() က ဖွင့်ထားတဲ့ figure တွေ ပြပါတယ်။ Display မရှိတဲ့ script က Figure ကို ဖိုင်အဖြစ် သိမ်းနိုင်ပါတယ်။ pyplot သုံးရင် blocking show မတိုင်ခင် သိမ်းပါ။ Figure object ရှိရင် figure ရဲ့ savefig ကို ခေါ်နိုင်ပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "chart-selection",
      "title": {
        "en": "Choose a chart for the question",
        "my": "မေးခွန်းနဲ့ ကိုက်တဲ့ Chart ရွေးခြင်း"
      },
      "intro": {
        "en": "Choose how to display categories, trends, distributions, and relationships.",
        "my": "Category၊ trend၊ distribution နဲ့ ဆက်နွှယ်မှုတွေကို ဘယ် chart နဲ့ ပြမလဲ ရွေးပါ။"
      },
      "sources": [
        [
          "Matplotlib gallery of plot types",
          "https://matplotlib.org/stable/plot_types/"
        ],
        [
          "Matplotlib bar labels",
          "https://matplotlib.org/stable/gallery/lines_bars_and_markers/bar_label_demo.html"
        ]
      ],
      "sections": [
        {
          "id": "categories-and-time",
          "title": {
            "en": "Compare categories and show changes over time",
            "my": "Category များ ယှဉ်ခြင်းနှင့် အချိန်အလိုက် ပြောင်းလဲမှု ပြခြင်း"
          },
          "text": {
            "en": "Use a bar chart to compare distinct categories. Start a magnitude bar chart at zero because bar length encodes size. Use a line chart when the horizontal axis has a meaningful sequence such as time. For irregularly spaced dates, plot date values so the spacing reflects elapsed time.",
            "my": "သီးခြား category တွေ ယှဉ်ဖို့ bar chart သုံးပါ။ တန်ဖိုးပမာဏကို bar အရှည်နဲ့ ပြတဲ့အတွက် axis ကို သုညကနေ စပါ။ အချိန်လို အစဉ်လိုက်ကြည့်ရတဲ့ data အတွက် line chart သုံးပါ။ ရက်စွဲတွေ အညီအမျှ မခြားရင် ရက်စွဲတန်ဖိုးအတိုင်း ဆွဲမှ အကွာအဝေးက ကြားကာလကို ကိုယ်စားပြုပါမယ်။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, (by_store, by_month) = plt.subplots(1, 2, layout=\"constrained\")\nbars = by_store.bar([\"A\", \"B\", \"C\"], [8, 12, 6])\nby_store.bar_label(bars)\nby_store.set(ylim=(0, 14), xlabel=\"Store\", ylabel=\"Orders\")\n\nby_month.plot([\"Jan\", \"Feb\", \"Mar\"], [20, 24, 22], marker=\"o\")\nby_month.set(xlabel=\"Month\", ylabel=\"Orders\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/chart-selection-categories-and-time.png",
            "width": 720,
            "height": 375,
            "alt": {
              "en": "Bars compare stores A, B, and C at 8, 12, and 6 orders. A line shows 20, 24, and 22 orders from January to March.",
              "my": "Bar chart က ဆိုင် A၊ B၊ C ရဲ့ order 8၊ 12၊ 6 ကို ယှဉ်ပြပါတယ်။ Line chart က January ကနေ March အထိ order 20၊ 24၊ 22 ကို ပြပါတယ်။"
            },
            "caption": {
              "en": "Both examples measure orders. The horizontal axis determines what each chart compares.",
              "my": "Chart နှစ်ခုလုံး order အရေအတွက်ကို တိုင်းတာပါတယ်။ Chart တစ်ခုစီ ဘာကို ယှဉ်ပြလဲဆိုတာ x-axis မှာ ကြည့်နိုင်ပါတယ်။"
            }
          }
        },
        {
          "id": "distributions-and-relationships",
          "title": {
            "en": "Show a distribution or a relationship",
            "my": "Distribution သို့မဟုတ် ဆက်နွှယ်မှု ပြခြင်း"
          },
          "text": {
            "en": "A histogram groups one numeric measure into intervals. Change the bin width to check whether the visible pattern is stable. A scatter plot places each observation at its two numeric coordinates. Inspect overlap, unusual points, and possible subgroups before interpreting the pattern.",
            "my": "Histogram က ကိန်းဂဏန်း column တစ်ခုရဲ့ တန်ဖိုးတွေကို range အလိုက် စုပါတယ်။ Bin အကျယ် ပြောင်းပြီး မြင်ရတဲ့ pattern တည်ငြိမ်လား စစ်ပါ။ Scatter plot မှာ observation တစ်ခုစီကို ကိန်းဂဏန်းနှစ်ခုက သတ်မှတ်တဲ့ နေရာမှာ အမှတ်တစ်ခုနဲ့ ပြပါတယ်။ Pattern ကို အဓိပ္ပာယ်မဖော်ခင် အမှတ်ထပ်နေတာ၊ ထူးခြားတဲ့ အမှတ်နဲ့ အုပ်စုခွဲတွေ ရှိမရှိ ကြည့်ပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, (histogram, scatter) = plt.subplots(1, 2, layout=\"constrained\")\ndurations = [12, 16, 17, 22, 24, 28, 33, 35]\nhistogram.hist(durations, bins=[10, 20, 30, 40], edgecolor=\"white\")\nhistogram.set(xlabel=\"Duration (min)\", ylabel=\"Deliveries\")\n\ndistance = [1, 2, 2.5, 3, 4, 5, 5.5, 6]\nscatter.scatter(distance, durations)\nscatter.set(xlabel=\"Distance (km)\", ylabel=\"Duration (min)\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/chart-selection-distributions-and-relationships.png",
            "width": 720,
            "height": 375,
            "alt": {
              "en": "The histogram counts durations in three bins with 3, 3, and 2 deliveries. The scatter plot shows eight distances and their paired durations.",
              "my": "Histogram မှာ ကြာချိန်အုပ်စု သုံးစုထဲ delivery 3၊ 3၊ 2 ခု အသီးသီးရှိပါတယ်။ Scatter plot မှာ delivery ရှစ်ခုရဲ့ အကွာအဝေးနဲ့ ကြာချိန်ကို ပြပါတယ်။"
            },
            "caption": {
              "en": "The same delivery durations answer two different questions when plotted alone or paired with distance.",
              "my": "Delivery ကြာချိန် data တစ်မျိုးတည်းကို သီးခြားဆွဲတာနဲ့ အကွာအဝေးနဲ့ တွဲဆွဲတာက မေးခွန်းနှစ်မျိုးကို ဖြေပေးပါတယ်။"
            }
          }
        }
      ]
    },
    {
      "id": "lines-and-bars",
      "title": {
        "en": "Line charts and bar charts",
        "my": "Line Charts နှင့် Bar Charts"
      },
      "intro": {
        "en": "Use lines for ordered measurements and bars to compare discrete categories.",
        "my": "အစဉ်ရှိတဲ့ တိုင်းတာမှုအတွက် line၊ သီးခြား category တွေ ယှဉ်ဖို့ bar သုံးပါ။"
      },
      "aliases": [
        "line-chart",
        "bar-chart"
      ],
      "sources": [
        [
          "Plot types",
          "https://matplotlib.org/stable/plot_types/index.html"
        ],
        [
          "Matplotlib quick start",
          "https://matplotlib.org/stable/users/explain/quick_start.html"
        ]
      ],
      "sections": [
        {
          "id": "lines",
          "title": {
            "en": "Plot an ordered trend",
            "my": "အစဉ်ရှိတဲ့ Trend ဆွဲခြင်း"
          },
          "text": {
            "en": "A line connects values in the order supplied. Sort chronological observations before plotting. Markers can distinguish measured points from the lines that connect them.",
            "my": "Line က ပေးလိုက်တဲ့ အစဉ်အတိုင်း value တွေကို ဆက်ပါတယ်။ အချိန်အလိုက် မှတ်တမ်းတွေကို အရင်စီပါ။ Marker နဲ့ တကယ်တိုင်းထားတဲ့ point နဲ့ ဆက်ထားတဲ့ line ကို ခွဲမြင်နိုင်ပါတယ်။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([\"Jan\", \"Feb\", \"Mar\"], [11.5, 17, 15], marker=\"o\")\nax.set(xlabel=\"Month\", ylabel=\"Recorded sales\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/lines-and-bars-lines.png",
            "width": 571,
            "height": 440,
            "alt": {
              "en": "Recorded sales rise from 11.5 in January to 17 in February, then fall to 15 in March.",
              "my": "January အရောင်း 11.5 ကနေ February မှာ 17 အထိ တက်ပြီး March မှာ 15 ပြန်ကျပါတယ်။"
            }
          }
        },
        {
          "id": "bars",
          "title": {
            "en": "Compare categories with bars",
            "my": "Bar များဖြင့် Category ယှဉ်ခြင်း"
          },
          "text": {
            "en": "bar draws one bar per category and starts at zero by default. Keep a zero baseline for ordinary comparisons. Use barh to keep long category names readable.",
            "my": "bar က category တစ်ခုစီအတွက် bar တစ်ခု ဆွဲပြီး default မှာ သုညကနေ စပါတယ်။ ပုံမှန်နှိုင်းယှဉ်ရာမှာ သုည baseline ထားပါ။ Category နာမည်ရှည်ရင် barh သုံးနိုင်ပါတယ်။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.bar([\"Tea\", \"Coffee\", \"Cake\"], [6, 10, 6])\nax.set(ylabel=\"Units sold\", title=\"Units sold by item\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/lines-and-bars-bars.png",
            "width": 570,
            "height": 443,
            "alt": {
              "en": "Tea and cake have six units sold each. Coffee leads with ten.",
              "my": "Tea နဲ့ Cake တစ်ခုစီ 6 unit ရောင်းရပြီး Coffee က 10 unit နဲ့ အများဆုံးပါ။"
            }
          }
        }
      ]
    },
    {
      "id": "scatter-and-distributions",
      "title": {
        "en": "Scatter plots, histograms, and box plots",
        "my": "Scatter Plots၊ Histograms နှင့် Box Plots"
      },
      "intro": {
        "en": "Choose a chart for paired values, distributions, or comparisons of spread.",
        "my": "တွဲထားတဲ့ value၊ distribution သို့မဟုတ် ပျံ့နှံ့မှု ယှဉ်ဖို့ ကိုက်ညီတဲ့ chart ရွေးပါ။"
      },
      "aliases": [
        "scatter-plot",
        "histogram",
        "box-plot"
      ],
      "sources": [
        [
          "Plot types",
          "https://matplotlib.org/stable/plot_types/index.html"
        ],
        [
          "Axes.boxplot API",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.boxplot.html"
        ]
      ],
      "sections": [
        {
          "id": "scatter",
          "title": {
            "en": "Show paired values",
            "my": "တွဲထားတဲ့ Value တွေ ပြခြင်း"
          },
          "text": {
            "en": "Use scatter for one point per paired observation. If many points overlap, smaller markers or partial transparency help reveal dense areas. An association in a scatter plot does not establish causation.",
            "my": "တွဲထားတဲ့ observation တစ်ခုစီအတွက် point တစ်ခု ပြဖို့ scatter သုံးပါ။ Point အများကြီး ထပ်နေရင် marker သေးသေး သို့မဟုတ် transparency သုံးနိုင်ပါတယ်။ Scatter plot မှာ ဆက်နွှယ်မှု တွေ့တာနဲ့ အကြောင်းရင်းလို့ သတ်မှတ်လို့မရပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.scatter([55, 85, 120], [115, 190, 270], alpha=0.75)\nax.set(xlabel=\"Floor area (m²)\", ylabel=\"Price (thousands)\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/scatter-and-distributions-scatter.png",
            "width": 579,
            "height": 440,
            "alt": {
              "en": "Three houses are plotted by floor area and price. The larger houses have higher prices in this sample.",
              "my": "အိမ်သုံးလုံးကို ကြမ်းခင်းဧရိယာနဲ့ ဈေးအလိုက် ပြထားပါတယ်။ ဒီနမူနာမှာ အိမ်ကြီးလေ ဈေးမြင့်လေပါ။"
            }
          }
        },
        {
          "id": "histogram",
          "title": {
            "en": "Show a distribution with bins",
            "my": "Bin များဖြင့် Distribution ပြခြင်း"
          },
          "text": {
            "en": "A histogram counts observations within numerical intervals by default. Bin width changes the visible shape. Use the same bin edges when comparing two distributions.",
            "my": "Histogram က default မှာ ကိန်းဂဏန်းအပိုင်းတစ်ခုစီထဲက observation အရေအတွက် ပြပါတယ်။ Bin အကျယ်ပြောင်းရင် မြင်ရတဲ့ပုံ ပြောင်းပါတယ်။ Distribution နှစ်ခု ယှဉ်ရင် bin အစွန်းတူတူ သုံးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\ncounts, _, _ = ax.hist([1, 2, 3, 6, 8, 12], bins=[0, 5, 10, 15])\nprint(counts.astype(int).tolist())\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[3, 2, 1]",
          "figure": {
            "src": "/docs/media/data/scatter-and-distributions-histogram.png",
            "width": 555,
            "height": 421,
            "alt": {
              "en": "Histogram with three bins containing three, two, and one observation respectively.",
              "my": "Bin သုံးခုမှာ observation 3၊ 2၊ 1 ခုစီ ပါတဲ့ histogram။"
            }
          }
        },
        {
          "id": "box-plot",
          "title": {
            "en": "Compare centers and spreads",
            "my": "အလယ်တန်ဖိုးနှင့် ကွာဟမှု ယှဉ်ခြင်း"
          },
          "text": {
            "en": "A box plot shows the median and the first and third quartiles. By default, whiskers reach the most extreme data points within 1.5 times the interquartile range from the quartiles. Points outside are plotted as fliers.",
            "my": "Box plot က median နဲ့ ပထမ၊ တတိယ quartile ပြပါတယ်။ Default whisker က quartile ကနေ interquartile range ရဲ့ 1.5 ဆ အတွင်းက အစွန်းဆုံး point ထိ ရောက်ပါတယ်။ အပြင်က point တွေကို flier အဖြစ် ပြပါတယ်။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.boxplot([[2, 4, 6], [4, 8, 10]], tick_labels=[\"Store A\", \"Store B\"])\nax.set(ylabel=\"Units sold\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/scatter-and-distributions-box-plot.png",
            "width": 570,
            "height": 421,
            "alt": {
              "en": "Box plots for two stores, with median units of four and eight respectively.",
              "my": "ဆိုင်နှစ်ဆိုင်အတွက် median unit 4 နဲ့ 8 အသီးသီးရှိတဲ့ box plot။"
            }
          }
        }
      ]
    },
    {
      "id": "chart-design",
      "title": {
        "en": "Labels, scales, legends, and color",
        "my": "Labels၊ Scales၊ Legends နှင့် Color"
      },
      "intro": {
        "en": "Make chart units, series, and numeric ranges easy to interpret.",
        "my": "Chart ပေါ်က unit၊ series နဲ့ ကိန်းဂဏန်းအပိုင်းအခြားကို နားလည်လွယ်အောင် ပြင်ပါ။"
      },
      "aliases": [
        "labels-legends"
      ],
      "sources": [
        [
          "Matplotlib quick start",
          "https://matplotlib.org/stable/users/explain/quick_start.html"
        ],
        [
          "Choosing colormaps",
          "https://matplotlib.org/stable/users/explain/colors/colormaps.html"
        ]
      ],
      "sections": [
        {
          "id": "labels",
          "title": {
            "en": "Identify each series",
            "my": "Series တစ်ခုစီကို အမည်ပေးခြင်း"
          },
          "text": {
            "en": "Use a title to state the comparison and axis labels to name each measure and unit. Give series readable labels and call legend after drawing them. Add markers or line styles when color alone may be hard to distinguish.",
            "my": "ဘာနှိုင်းယှဉ်လဲကို title မှာ၊ တိုင်းတာတဲ့အရာနဲ့ unit ကို axis label မှာ ထည့်ပါ။ Series တွေကို ဖတ်လွယ်တဲ့ label ပေးပြီး ဆွဲပြီးမှ legend ခေါ်ပါ။ အရောင်နဲ့ပဲ ခွဲရခက်ရင် marker သို့မဟုတ် line style ထည့်ပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([3, 5, 4], marker=\"o\", label=\"Coffee\")\nax.plot([2, 2, 4], marker=\"s\", linestyle=\"--\", label=\"Tea\")\nax.set(title=\"Daily orders\", xlabel=\"Day index\", ylabel=\"Orders\")\nax.legend()\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/chart-design-labels.png",
            "width": 575,
            "height": 463,
            "alt": {
              "en": "Coffee and tea trend lines use different markers and line styles and appear in a legend.",
              "my": "Coffee နဲ့ Tea trend line တွေမှာ marker၊ line style မတူဘဲ legend ထဲ ပြထားပါတယ်။"
            }
          }
        },
        {
          "id": "scales",
          "title": {
            "en": "Choose scales and color maps",
            "my": "Scale နှင့် Color Map ရွေးခြင်း"
          },
          "text": {
            "en": "Use log scales for positive magnitudes when ratios matter. Values at zero or below do not belong on a standard log axis. Use sequential colors for ordered intensity and a diverging color map when values differ around a meaningful midpoint.",
            "my": "အချိုးက အရေးပါပြီး တန်ဖိုးတွေ အပေါင်းဖြစ်ရင် log scale သုံးနိုင်ပါတယ်။ သုညနဲ့ အနုတ်ကို ပုံမှန် log axis မှာ ပြလို့မရပါ။ အစဉ်ရှိတဲ့ intensity အတွက် sequential color၊ အရေးပါတဲ့ အလယ်တန်ဖိုးတစ်ခုရဲ့ ဘက်နှစ်ဘက်မှာ ကွာတာကို ပြဖို့ diverging color map သုံးပါ။"
          }
        }
      ]
    },
    {
      "id": "subplots",
      "title": {
        "en": "Subplots and constrained layout",
        "my": "Subplots နှင့် Constrained Layout"
      },
      "intro": {
        "en": "Arrange several plotting areas and share scales when the measurements are comparable.",
        "my": "Chart ဆွဲတဲ့နေရာ အများကြီး စီပါ။ နှိုင်းယှဉ်လို့ရတဲ့ တိုင်းတာမှုတွေမှာ scale မျှဝေပါ။"
      },
      "sources": [
        [
          "Constrained layout guide",
          "https://matplotlib.org/stable/users/explain/axes/constrainedlayout_guide.html"
        ],
        [
          "pyplot.subplots API",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.subplots.html"
        ]
      ],
      "sections": [
        {
          "id": "grid",
          "title": {
            "en": "Organize plots in a grid",
            "my": "Chart များ Grid ဖြင့် စီခြင်း"
          },
          "text": {
            "en": "subplots creates a Figure plus Axes. For a 1×2 grid, unpack the two Axes or use squeeze=False to always receive a 2D array. Use layout=\"constrained\" to help fit axes labels and titles.",
            "my": "subplots က Figure နဲ့ Axes တွေ ဆောက်ပေးပါတယ်။ 1×2 grid မှာ Axes နှစ်ခုကို unpack လုပ်နိုင်ပါတယ်။ 2D array အမြဲလိုရင် squeeze=False သုံးပါ။ Label နဲ့ title တွေ နေရာအဆင်ပြေဖို့ layout=\"constrained\" သုံးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, (left, right) = plt.subplots(1, 2, layout=\"constrained\")\nleft.plot([2, 4, 3])\nleft.set_title(\"Daily volume\")\nright.bar([\"Tea\", \"Cake\"], [6, 4])\nright.set_title(\"Item volume\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/subplots-grid.png",
            "width": 659,
            "height": 499,
            "alt": {
              "en": "A line chart of daily volume and a bar chart of item volume sit side by side.",
              "my": "နေ့စဉ်အရောင်းပမာဏပြ line chart နဲ့ item အလိုက်ပမာဏပြ bar chart ကို ဘေးချင်းကပ် ထားပါတယ်။"
            }
          }
        },
        {
          "id": "shared-axes",
          "title": {
            "en": "Share axes when useful",
            "my": "လိုအပ်ရင် Axis မျှသုံးခြင်း"
          },
          "text": {
            "en": "sharex and sharey link axes. Share a scale when units and ranges should be directly comparable. For charts with different units, label each Axes clearly.",
            "my": "sharex နဲ့ sharey က axes တွေ ချိတ်ပေးပါတယ်။ Unit နဲ့ range ကို တိုက်ရိုက် ယှဉ်ချင်ရင် scale မျှသုံးပါ။ Unit မတူတဲ့ chart တွေမှာ Axes label ကို အတိအကျ ရေးပါ။"
          }
        }
      ]
    },
    {
      "id": "export-chart",
      "title": {
        "en": "Export charts to files",
        "my": "Chart များကို ဖိုင်ထုတ်ခြင်း"
      },
      "intro": {
        "en": "Select an output format and export at a size suitable for reports, slides, or the web.",
        "my": "Report၊ slide သို့မဟုတ် web အတွက် format နဲ့ အရွယ်အစား ရွေးပြီး ဖိုင်ထုတ်ပါ။"
      },
      "sources": [
        [
          "Figure.savefig API",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.figure.Figure.savefig.html"
        ],
        [
          "What’s new in Matplotlib 3.11",
          "https://matplotlib.org/stable/release/prev_whats_new/whats_new_3.11.0.html"
        ]
      ],
      "sections": [
        {
          "id": "formats",
          "title": {
            "en": "Choose raster or vector",
            "my": "Raster သို့မဟုတ် Vector ရွေးခြင်း"
          },
          "text": {
            "en": "PNG is a raster format. figsize in inches and dpi determine pixel dimensions before cropping. SVG and PDF can preserve vector lines and text for scaling, although some elements can be rasterized.",
            "my": "PNG က raster format ဖြစ်ပါတယ်။ မဖြတ်ခင် pixel အရွယ်အစားကို figsize လက်မနဲ့ dpi က သတ်မှတ်ပါတယ်။ SVG နဲ့ PDF က line နဲ့ စာသားကို အရွယ်ချဲ့လို့ရတဲ့ vector အဖြစ် ထိန်းထားနိုင်ပြီး element တချို့ raster ပြောင်းနိုင်ပါတယ်။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(figsize=(6, 4), layout=\"constrained\")\nax.bar([\"Tea\", \"Cake\"], [6, 4])\nax.set(ylabel=\"Units sold\")\nfig.savefig(\"sales.png\", dpi=150, bbox_inches=\"tight\")\nfig.savefig(\"sales.svg\", bbox_inches=\"tight\")",
          "codeLanguage": "python",
          "displayOnly": true
        },
        {
          "id": "verify",
          "title": {
            "en": "Check the exported file",
            "my": "Export ဖိုင် ပြန်စစ်ခြင်း"
          },
          "text": {
            "en": "bbox_inches=\"tight\" crops around figure content and can change final pixel dimensions. Open the saved file to check for clipped labels. For batch rendering, close each figure when finished.",
            "my": "bbox_inches=\"tight\" က figure content ပတ်လည်အတိုင်း ဖြတ်ပေးလို့ နောက်ဆုံး pixel အရွယ်အစား ပြောင်းနိုင်ပါတယ်။ Label မပြတ်ကြောင်း ထုတ်ထားတဲ့ဖိုင် ဖွင့်စစ်ပါ။ Batch render လုပ်ရင် figure တစ်ခုစီ ပြီးတာနဲ့ ပိတ်ပါ။"
          }
        }
      ]
    },
    {
      "id": "uncertainty-charts",
      "title": {
        "en": "Show uncertainty with error bars and bands",
        "my": "Error Bars နှင့် Bands ဖြင့် မသေချာမှု ပြခြင်း"
      },
      "intro": {
        "en": "Plot lower and upper error distances and label what uncertainty represents.",
        "my": "အောက်၊ အပေါ် error အကွာအဝေး ဆွဲပါ။ မသေချာမှုတန်ဖိုးက ဘာကို ပြလဲ label ရေးပါ။"
      },
      "sources": [
        [
          "Axes.errorbar",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.errorbar.html"
        ],
        [
          "Axes.fill_between",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.fill_between.html"
        ]
      ],
      "sections": [
        {
          "id": "error-bars",
          "title": {
            "en": "Use nonnegative distances from the estimate",
            "my": "Estimate ကနေ အပေါင်းအကွာအဝေး သုံးခြင်း"
          },
          "text": {
            "en": "Pass yerr as error distances, measured from each estimate. With asymmetric intervals, pass lower distances first and upper distances second. Label whether the bars show confidence intervals, standard error, or another quantity.",
            "my": "yerr မှာ estimate တစ်ခုစီကနေ error အကွာအဝေး ပေးပါ။ ဘက်မညီတဲ့ interval ဆိုရင် အောက်ဘက်အကွာ အရင်၊ အပေါ်ဘက်အကွာ နောက် ပေးပါ။ Bar က confidence interval၊ standard error ဒါမှမဟုတ် တခြားတန်ဖိုး ဘာပြလဲ label ရေးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.errorbar([\"A\", \"B\"], [8, 10], yerr=[[1, 2], [2, 1]], fmt=\"o\", capsize=5)\nax.set(ylabel=\"Estimated units\", title=\"Estimates with illustrative intervals\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/uncertainty-charts-error-bars.png",
            "width": 584,
            "height": 443,
            "alt": {
              "en": "Store A’s estimate is 8, with bounds 7 and 10. Store B’s is 10, with bounds 8 and 11.",
              "my": "ဆိုင် A ရဲ့ estimate က 8 ဖြစ်ပြီး 7 ကနေ 10 အထိပါ။ ဆိုင် B ရဲ့ estimate က 10 ဖြစ်ပြီး 8 ကနေ 11 အထိပါ။"
            }
          }
        },
        {
          "id": "bands",
          "title": {
            "en": "Show a continuous interval",
            "my": "ဆက်တိုက် Interval ပြခြင်း"
          },
          "text": {
            "en": "fill_between draws a band between lower and upper values along x. Use it for an interval that varies over time, and align each lower and upper value with the matching x position.",
            "my": "fill_between က x တစ်လျှောက် အောက်နဲ့ အပေါ်တန်ဖိုးကြား band ဆွဲပါတယ်။ အချိန်အလိုက် ပြောင်းလဲတဲ့ interval အတွက် သုံးပြီး အောက်၊ အပေါ် value ကို ဆိုင်ရာ x နဲ့ ကိုက်အောင် စီပါ။"
          }
        }
      ]
    },
    {
      "id": "heatmaps-and-colorbars",
      "title": {
        "en": "Heatmaps and colorbars",
        "my": "Heatmaps နှင့် Colorbars"
      },
      "intro": {
        "en": "Display a numerical matrix and report how values map to color.",
        "my": "Numeric matrix ကို ပြပြီး တန်ဖိုးတွေ ဘယ်အရောင်နဲ့ ကိုက်လဲ ဖော်ပြပါ။"
      },
      "sources": [
        [
          "Axes.imshow",
          "https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.imshow.html"
        ],
        [
          "Choosing colormaps",
          "https://matplotlib.org/stable/users/explain/colors/colormaps.html"
        ]
      ],
      "sections": [
        {
          "id": "heatmap",
          "title": {
            "en": "Map a matrix to pixels",
            "my": "Matrix ကို Pixel တွေနဲ့ ကိုယ်စားပြုခြင်း"
          },
          "text": {
            "en": "imshow displays a regular matrix as an image. Add a colorbar to describe the scale. Label both axes so rows and columns retain their meaning.",
            "my": "imshow က ပုံစံညီတဲ့ matrix ကို image အဖြစ် ပြပါတယ်။ Scale ပြဖို့ colorbar ထည့်ပါ။ Row၊ column အဓိပ္ပာယ် မပျောက်ဖို့ axis နှစ်ခုလုံး label ထည့်ပါ။"
          },
          "code": "import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots(layout=\"constrained\")\nimage = ax.imshow([[4, 7, 5], [8, 6, 3]], cmap=\"viridis\", vmin=0, vmax=10)\nax.set_xticks([0, 1, 2], [\"Mon\", \"Tue\", \"Wed\"])\nax.set_yticks([0, 1], [\"Store A\", \"Store B\"])\nfig.colorbar(image, ax=ax, label=\"Units\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/heatmaps-and-colorbars-heatmap.png",
            "width": 658,
            "height": 499,
            "alt": {
              "en": "Heatmap of units sold at two stores from Monday to Wednesday. The colorbar ranges from zero to ten units.",
              "my": "တနင်္လာကနေ ဗုဒ္ဓဟူးအထိ ဆိုင်နှစ်ဆိုင်က units sold heatmap ပါ။ Colorbar က သုညကနေ ဆယ် unit အထိပါ။"
            }
          }
        },
        {
          "id": "normalization",
          "title": {
            "en": "Use the same scale for comparisons",
            "my": "နှိုင်းယှဉ်ရာမှာ Scale တူတူ သုံးခြင်း"
          },
          "text": {
            "en": "Comparable heatmaps need a shared normalization or the same vmin and vmax. Select a diverging scale when deviations on both sides of a meaningful midpoint matter.",
            "my": "ယှဉ်မယ့် heatmap တွေမှာ normalization တူတူ ဒါမှမဟုတ် vmin၊ vmax တူတူ လိုပါတယ်။ အရေးပါတဲ့ midpoint ရဲ့ ဘက်နှစ်ဘက်က ကွာဟချက်တွေ ပြချင်ရင် diverging scale ရွေးပါ။"
          }
        }
      ]
    },
    {
      "id": "annotations-and-ticks",
      "title": {
        "en": "Annotate points and format ticks",
        "my": "Point များ မှတ်သား၍ Tick ပုံစံချခြင်း"
      },
      "intro": {
        "en": "Highlight a meaningful point and control labels without changing the plotted values.",
        "my": "အရေးပါတဲ့ point ကို ထင်ရှားအောင် ပြပြီး chart data ကို မပြောင်းဘဲ label ပုံစံချပါ။"
      },
      "sources": [
        [
          "Annotations",
          "https://matplotlib.org/stable/users/explain/text/annotations.html"
        ],
        [
          "Axis ticks and tick formatters",
          "https://matplotlib.org/stable/users/explain/axes/axes_ticks.html"
        ]
      ],
      "sections": [
        {
          "id": "annotate",
          "title": {
            "en": "Point to a meaningful observation",
            "my": "အရေးပါတဲ့ Observation ကို ညွှန်းခြင်း"
          },
          "text": {
            "en": "annotate separates the data point xy from the text position xytext. Use offset points for short labels that should remain near a point when the axis limits change.",
            "my": "annotate မှာ data point xy နဲ့ စာသားနေရာ xytext သီးခြား သတ်မှတ်နိုင်ပါတယ်။ Axis limit ပြောင်းရင်လည်း point နားမှာ label တိုတို ထားဖို့ offset points သုံးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\nfrom matplotlib.ticker import PercentFormatter\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [0.18, 0.22, 0.20], marker=\"o\")\nax.annotate(\"Peak\", xy=(2, 0.22), xytext=(10, -14), textcoords=\"offset points\")\nax.yaxis.set_major_formatter(PercentFormatter(xmax=1))\nax.set(xlabel=\"Week\", ylabel=\"Conversion\")\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/annotations-and-ticks-annotate.png",
            "width": 606,
            "height": 440,
            "alt": {
              "en": "Conversion peaks at 22 percent in week two. The second point is labeled Peak.",
              "my": "ဒုတိယပတ်မှာ conversion 22 ရာခိုင်နှုန်းနဲ့ အများဆုံးပါ။ ဒုတိယ point ကို Peak လို့ label ပေးထားပါတယ်။"
            }
          }
        },
        {
          "id": "ticks",
          "title": {
            "en": "Separate tick positions from formatting",
            "my": "Tick နေရာနဲ့ ပုံစံ သီးခြား ထားခြင်း"
          },
          "text": {
            "en": "A tick locator chooses positions. A formatter turns each value into display text. For proportions stored from zero to one, PercentFormatter(xmax=1) displays 0.22 as 22 percent.",
            "my": "Tick locator က နေရာ ရွေးပြီး formatter က တန်ဖိုးကို ပြမယ့်စာသား ပြောင်းပေးပါတယ်။ သုညကနေ တစ်အတွင်း proportion အတွက် PercentFormatter(xmax=1) က 0.22 ကို 22 ရာခိုင်နှုန်းအဖြစ် ပြပါတယ်။"
          }
        }
      ]
    }
  ]
};
