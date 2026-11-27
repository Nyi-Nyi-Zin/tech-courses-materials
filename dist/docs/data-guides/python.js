export default {
  "id": "python",
  "name": "Python",
  "version": "3.15.2",
  "intro": {
    "en": "Set up Python and understand its syntax, data types, functions, files, and classes.",
    "my": "Python ပြင်ဆင်ပြီး syntax၊ data type၊ function၊ ဖိုင်နဲ့ class တွေ လေ့လာပါ။"
  },
  "pages": [
    {
      "id": "setup",
      "title": {
        "en": "Install Python and set up a project",
        "my": "Python ထည့်သွင်း၍ Project ပြင်ဆင်ခြင်း"
      },
      "intro": {
        "en": "Check your Python version, create an isolated environment, and run a script from the terminal.",
        "my": "Python version စစ်ပါ။ Project တစ်ခုအတွက် သီးခြား environment ဆောက်ပြီး terminal မှာ script run ပါ။"
      },
      "aliases": [
        "first-program"
      ],
      "sources": [
        [
          "Python 3.15.2 release",
          "https://www.python.org/downloads/release/python-3152/"
        ],
        [
          "Virtual environments and packages",
          "https://docs.python.org/3.15/tutorial/venv.html"
        ]
      ],
      "sections": [
        {
          "id": "check-version",
          "title": {
            "en": "Check the interpreter",
            "my": "Interpreter စစ်ခြင်း"
          },
          "text": {
            "en": "Use the Python command that resolves to your installation. On Windows with the Python install manager, use py -3.15 to explicitly choose that series. On macOS and Linux, use python3.15 when available, or check the version behind python3 before following version-specific examples.",
            "my": "ကိုယ့်စက်မှာ Python installation ကို ညွှန်းတဲ့ command သုံးပါ။ Windows မှာ Python install manager သုံးရင် 3.15 ကို ရွေးဖို့ py -3.15 သုံးနိုင်ပါတယ်။ macOS နဲ့ Linux မှာ python3.15 ရှိရင် သုံးပါ။ မရှိရင် python3 ရဲ့ version ကို အရင်စစ်ပါ။"
          },
          "code": "python --version",
          "codeLanguage": "shell",
          "displayOnly": true
        },
        {
          "id": "virtual-environment",
          "title": {
            "en": "Create a virtual environment",
            "my": "Virtual environment ဆောက်ခြင်း"
          },
          "text": {
            "en": "A virtual environment gives the project its own installed packages. Run venv in the project folder using the interpreter you intend to use.",
            "my": "Virtual environment က project ကိုယ်ပိုင် package တွေ ထားပေးပါတယ်။ Project folder ထဲမှာ သုံးချင်တဲ့ interpreter နဲ့ venv ဆောက်ပါ။"
          },
          "code": "python -m venv .venv",
          "codeLanguage": "shell",
          "displayOnly": true
        },
        {
          "id": "activate-windows",
          "title": {
            "en": "Activate on Windows",
            "my": "Windows မှာ Activate လုပ်ခြင်း"
          },
          "text": {
            "en": "In PowerShell, run the activation script below. Activation changes command lookup for this shell. You can also run the environment’s Python directly at .venv/Scripts/python.exe.",
            "my": "PowerShell မှာ အောက်က activation script ကို run ပါ။ Activate လုပ်ရင် ဒီ shell မှာ command ရှာပုံ ပြောင်းပါတယ်။ .venv/Scripts/python.exe ကို တိုက်ရိုက်လည်း သုံးနိုင်ပါတယ်။"
          },
          "code": ".venv\\Scripts\\Activate.ps1",
          "codeLanguage": "shell",
          "displayOnly": true
        },
        {
          "id": "activate-posix",
          "title": {
            "en": "Activate on macOS or Linux",
            "my": "macOS သို့မဟုတ် Linux မှာ Activate လုပ်ခြင်း"
          },
          "text": {
            "en": "In Bash or Zsh, activate the environment with source. The virtual environment’s Python executable is also available at .venv/bin/python.",
            "my": "Bash သို့မဟုတ် Zsh မှာ source နဲ့ environment activate လုပ်ပါ။ Virtual environment ရဲ့ Python ကို .venv/bin/python ကနေလည်း သုံးနိုင်ပါတယ်။"
          },
          "code": "source .venv/bin/activate",
          "codeLanguage": "shell",
          "displayOnly": true
        },
        {
          "id": "run-a-file",
          "title": {
            "en": "Run a Python file",
            "my": "Python ဖိုင် run ခြင်း"
          },
          "text": {
            "en": "Save the code below as hello.py. From its folder, run python hello.py. Use python -m pip to install project packages with the same interpreter you use to run the script.",
            "my": "အောက်က code ကို hello.py အဖြစ် သိမ်းပါ။ အဲဒီ folder ထဲကနေ python hello.py လို့ run ပါ။ Script run တဲ့ interpreter အတူတူနဲ့ package ထည့်ဖို့ python -m pip သုံးပါ။"
          },
          "code": "print(\"Hello, Python!\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Hello, Python!"
        }
      ]
    },
    {
      "id": "values-and-strings",
      "title": {
        "en": "Variables, data types, and strings",
        "my": "Variables၊ Data Types နှင့် Strings"
      },
      "intro": {
        "en": "Work with numbers and text, convert input, and format values for display.",
        "my": "ကိန်းဂဏန်းနဲ့ စာသားသုံးပါ။ Input ကို type ပြောင်းပြီး တန်ဖိုးတွေကို ဖတ်ရလွယ်အောင် ပုံစံချပါ။"
      },
      "aliases": [
        "variables",
        "strings",
        "input-casting"
      ],
      "sources": [
        [
          "An informal introduction to Python",
          "https://docs.python.org/3.15/tutorial/introduction.html"
        ],
        [
          "Built-in functions",
          "https://docs.python.org/3.15/library/functions.html"
        ],
        [
          "Formatted string literals",
          "https://docs.python.org/3.15/tutorial/inputoutput.html#formatted-string-literals"
        ]
      ],
      "sections": [
        {
          "id": "names-and-types",
          "title": {
            "en": "Names and types",
            "my": "နာမည်နှင့် Type များ"
          },
          "text": {
            "en": "Assignment binds a name to an object. Common types include int for whole numbers, float for floating-point numbers, str for text, bool for True or False, and NoneType for None. Use / for true division and // for floor division.",
            "my": "Assignment က နာမည်တစ်ခုကို object တစ်ခုနဲ့ ချိတ်ပေးပါတယ်။ int က ကိန်းပြည့်၊ float က floating-point ကိန်း၊ str က စာသား၊ bool က True သို့မဟုတ် False ပါ။ None ရဲ့ type က NoneType ဖြစ်ပါတယ်။ ပုံမှန်စားဖို့ /၊ အောက်ဘက်ကိန်းပြည့်ရအောင် စားဖို့ // သုံးပါ။"
          },
          "code": "quantity = 3\nunit_price = 2.5\nprint(quantity * unit_price)\nprint(7 / 2, 7 // 2)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "7.5\n3.5 3"
        },
        {
          "id": "clean-and-format",
          "title": {
            "en": "Clean and format strings",
            "my": "စာသား သန့်စင်၍ ပုံစံချခြင်း"
          },
          "text": {
            "en": "Strings are immutable. strip() and title() return new strings. An f-string evaluates expressions inside braces, and .2f displays a number with two decimal places.",
            "my": "String ကို နေရာမှာတင် ပြောင်းလို့မရပါ။ strip() နဲ့ title() က string အသစ် ပြန်ပေးပါတယ်။ f-string မှာ ကွင်းတွန့်ထဲက expression ကို တွက်ပြီး .2f က ဒဿမနှစ်နေရာနဲ့ ပြပါတယ်။"
          },
          "code": "item = \"  iced coffee  \".strip().title()\nprice = 7.5\nprint(f\"{item} — {price:.2f}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Iced Coffee — 7.50"
        },
        {
          "id": "conversion",
          "title": {
            "en": "Convert input explicitly",
            "my": "Input ကို Type ပြောင်းခြင်း"
          },
          "text": {
            "en": "input() returns a string. Convert it with int() or float() before arithmetic. int(\"3.5\") raises ValueError. When using whole numbers for money, decide the smallest unit for storage, such as cents.",
            "my": "input() က string ပြန်ပေးပါတယ်။ မတွက်ခင် int() သို့မဟုတ် float() နဲ့ ပြောင်းပါ။ int(\"3.5\") က ValueError ဖြစ်ပါတယ်။ ငွေပမာဏကို ကိန်းပြည့်များနဲ့ သိမ်းရင် cents လို အငယ်ဆုံး unit ကို သတ်မှတ်ပါ။"
          },
          "code": "text = \"4\"\nprint(int(text) * 3)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "12"
        }
      ]
    },
    {
      "id": "control-flow",
      "title": {
        "en": "Conditions, loops, and pattern matching",
        "my": "Conditions၊ Loops နှင့် Pattern Matching"
      },
      "intro": {
        "en": "Choose a branch, iterate over collections, and stop or skip loop iterations.",
        "my": "Condition အလိုက် code လမ်းကြောင်း ရွေးပါ။ Collection ထဲက value တွေကို loop ပတ်ပြီး လိုရင် ရပ်ပါ သို့မဟုတ် ကျော်ပါ။"
      },
      "aliases": [
        "conditionals",
        "for-loops",
        "while-loops"
      ],
      "sources": [
        [
          "More control flow tools",
          "https://docs.python.org/3.15/tutorial/controlflow.html"
        ]
      ],
      "sections": [
        {
          "id": "branching",
          "title": {
            "en": "Choose a branch",
            "my": "Code လမ်းကြောင်း ရွေးခြင်း"
          },
          "text": {
            "en": "if checks a condition, elif adds another test, and else handles the remaining case. Python uses indentation to mark the block. For equality use ==; use = when binding a name.",
            "my": "if က condition စစ်ပါတယ်။ elif နဲ့ နောက်ထပ် condition ထည့်စစ်နိုင်ပြီး else က ကျန်တဲ့အခြေအနေကို ကိုင်တွယ်ပါတယ်။ Block သတ်မှတ်ဖို့ indentation သုံးပါတယ်။ တူမတူ == နဲ့ စစ်ပြီး value သတ်မှတ်ဖို့ = သုံးပါ။"
          },
          "code": "total = 20\nif total >= 20:\n    print(\"Free delivery\")\nelse:\n    print(\"Add delivery fee\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Free delivery",
          "figure": {
            "src": "/docs/media/data/control-flow-branching.png",
            "width": 720,
            "height": 350,
            "alt": {
              "en": "A flowchart tests total >= 20. True prints Free delivery and false prints Add delivery fee.",
              "my": "total >= 20 စစ်တဲ့ flowchart ပါ။ မှန်ရင် Free delivery၊ မှားရင် Add delivery fee ထုတ်ပါတယ်။"
            },
            "caption": {
              "en": "With total set to 20, the True branch runs.",
              "my": "total က 20 ဖြစ်လို့ True ဘက်က code ကို run ပါတယ်။"
            }
          }
        },
        {
          "id": "loops",
          "title": {
            "en": "Iterate with for and while",
            "my": "for နှင့် while သုံး၍ ထပ်လုပ်ခြင်း"
          },
          "text": {
            "en": "for visits an iterable’s items. range(start, stop) excludes stop. while repeats while its condition is true. break exits the innermost loop, continue skips to the next iteration, and pass is an empty statement.",
            "my": "for က iterable ထဲက value တစ်ခုချင်း ယူပါတယ်။ range(start, stop) ထဲ stop မပါပါ။ while က condition မှန်သမျှ ထပ်လုပ်ပါတယ်။ break က အတွင်းဆုံး loop ကနေ ထွက်ပါတယ်။ continue က လက်ရှိအကြိမ်ကို ကျော်ပြီး pass က ဘာမှမလုပ်တဲ့ statement ပါ။"
          },
          "code": "for number in range(1, 6):\n    if number == 2:\n        continue\n    if number == 5:\n        break\n    print(number)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "1\n3\n4"
        },
        {
          "id": "match",
          "title": {
            "en": "Match a value or shape",
            "my": "Value သို့မဟုတ် ပုံစံကို match လုပ်ခြင်း"
          },
          "text": {
            "en": "match selects the first case whose pattern matches and whose guard, if any, is true. A bare name in a pattern usually captures the value. Use quoted literals for exact text and _ as the wildcard.",
            "my": "match က pattern ကိုက်ပြီး guard ပါရင် guard မှန်တဲ့ ပထမဆုံး case ကို ရွေးပါတယ်။ Pattern ထဲက သာမန်နာမည်က value ကို ဖမ်းသိမ်းတတ်ပါတယ်။ စာသားအတိအကျ စစ်ဖို့ quotation marks သုံးပြီး အားလုံးနဲ့ကိုက်ဖို့ _ သုံးပါ။"
          },
          "code": "command = [\"show\", \"Coffee\"]\nmatch command:\n    case [\"show\", item]:\n        print(item)\n    case _:\n        print(\"Unknown command\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Coffee"
        }
      ]
    },
    {
      "id": "collections",
      "title": {
        "en": "Lists, tuples, sets, and dictionaries",
        "my": "Lists၊ Tuples၊ Sets နှင့် Dictionaries"
      },
      "intro": {
        "en": "Choose a collection by how you need to access, update, or deduplicate its contents.",
        "my": "Value တွေကို ဘယ်လိုယူမလဲ၊ ပြင်မလဲ၊ ထပ်နေတာ ဖယ်မလဲဆိုတာနဲ့ ကိုက်တဲ့ collection ရွေးပါ။"
      },
      "aliases": [
        "lists",
        "tuples-sets",
        "dictionaries",
        "comprehensions"
      ],
      "sources": [
        [
          "Python data structures",
          "https://docs.python.org/3.15/tutorial/datastructures.html"
        ],
        [
          "Built-in types",
          "https://docs.python.org/3.15/library/stdtypes.html"
        ]
      ],
      "sections": [
        {
          "id": "sequence",
          "title": {
            "en": "Ordered sequences",
            "my": "အစဉ်ရှိတဲ့ Sequences"
          },
          "text": {
            "en": "Lists are mutable. Tuples have fixed slots, though an object inside a tuple can itself be mutable. A sequence slice includes its start and excludes its stop. A simple list slice makes a shallow copy.",
            "my": "List ကို ပြင်နိုင်ပါတယ်။ Tuple ရဲ့ နေရာတွေကို ပြန်အစားထိုးလို့မရပေမယ့် ထဲက object က ပြင်လို့ရတဲ့ အမျိုးအစား ဖြစ်နိုင်ပါတယ်။ Slice မှာ start ပါပြီး stop မပါပါ။ List slice က shallow copy ရပါတယ်။"
          },
          "code": "items = [\"Coffee\", \"Tea\", \"Cake\", \"Juice\"]\nprint(items[1:3])\nprint(items[-2:])",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Tea', 'Cake']\n['Cake', 'Juice']"
        },
        {
          "id": "unique-and-keyed",
          "title": {
            "en": "Distinct values and keyed lookup",
            "my": "ထပ်မနေတဲ့ Value နှင့် Key ဖြင့် ရှာခြင်း"
          },
          "text": {
            "en": "A set holds distinct hashable values and has no guaranteed iteration order. A dictionary stores values by hashable keys and preserves insertion order. get() supplies a default when a key is absent.",
            "my": "Set မှာ hash လုပ်လို့ရတဲ့ တန်ဖိုးတူတွေကို တစ်ခုပဲ သိမ်းပြီး loop ပတ်တဲ့ အစဉ်ကို အာမမခံပါ။ Dictionary က hash လုပ်လို့ရတဲ့ key အလိုက် value သိမ်းပြီး ထည့်ထားတဲ့အစဉ်ကို ထိန်းထားပါတယ်။ Key မရှိရင် get() နဲ့ default ယူနိုင်ပါတယ်။"
          },
          "code": "orders = [\"Tea\", \"Coffee\", \"Tea\"]\ncounts = {}\nfor item in orders:\n    counts[item] = counts.get(item, 0) + 1\nprint(sorted(set(orders)))\nprint(counts)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Coffee', 'Tea']\n{'Tea': 2, 'Coffee': 1}"
        },
        {
          "id": "comprehensions",
          "title": {
            "en": "Build collections with comprehensions",
            "my": "Comprehension ဖြင့် Collection ဆောက်ခြင်း"
          },
          "text": {
            "en": "A list comprehension adds the expression result for each matching input. Dict and set comprehensions use braces. A generator expression produces values as they are consumed.",
            "my": "List comprehension က condition ကိုက်တဲ့ input တစ်ခုစီအတွက် expression ရလဒ်ကို list ထဲ ထည့်ပါတယ်။ Dict နဲ့ set comprehension မှာ braces သုံးပါတယ်။ Generator expression က လိုအပ်တဲ့အချိန်မှ value ထုတ်ပါတယ်။"
          },
          "code": "quantities = [1, 4, 2, 5]\nprint([n * 2 for n in quantities if n > 2])",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[8, 10]"
        }
      ]
    },
    {
      "id": "functions",
      "title": {
        "en": "Functions, modules, and type hints",
        "my": "Functions၊ Modules နှင့် Type Hints"
      },
      "intro": {
        "en": "Write reusable functions, define clear inputs and return values, and organize related code.",
        "my": "ပြန်သုံးနိုင်တဲ့ function ရေးပါ။ Input နဲ့ return value ကို ရှင်းရှင်းသတ်မှတ်ပြီး ဆက်စပ် code ကို စုစည်းပါ။"
      },
      "aliases": [
        "modules"
      ],
      "sources": [
        [
          "Defining functions",
          "https://docs.python.org/3.15/tutorial/controlflow.html#defining-functions"
        ],
        [
          "Modules",
          "https://docs.python.org/3.15/tutorial/modules.html"
        ],
        [
          "Typing support",
          "https://docs.python.org/3.15/library/typing.html"
        ]
      ],
      "sections": [
        {
          "id": "parameters",
          "title": {
            "en": "Parameters and return values",
            "my": "Parameters နှင့် Return Values"
          },
          "text": {
            "en": "def defines a function. Arguments can be passed by position or by keyword when the signature permits. A function with no explicit return value returns None. Type annotations help tools and readers understand the interface.",
            "my": "def နဲ့ function သတ်မှတ်ပါတယ်။ Signature ခွင့်ပြုရင် argument ကို အစဉ်လိုက်ဖြစ်စေ keyword နဲ့ဖြစ်စေ ပေးနိုင်ပါတယ်။ Return value မရေးရင် None ပြန်ပါတယ်။ Type annotation က tool တွေနဲ့ ဖတ်သူကို interface နားလည်စေပါတယ်။"
          },
          "code": "def line_total(quantity: int, unit_price: float, *, discount: float = 0.0) -> float:\n    return quantity * unit_price * (1 - discount)\n\nprint(line_total(4, 2.5, discount=0.1))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "9.0"
        },
        {
          "id": "defaults",
          "title": {
            "en": "Default arguments and scope",
            "my": "Default Arguments နှင့် Scope"
          },
          "text": {
            "en": "Python evaluates default arguments when the function is defined. If the default should be a fresh list each call, use None and create the list inside the function. Assigning a name inside a function normally makes it local.",
            "my": "Default argument ကို function သတ်မှတ်ချိန်မှာ တွက်ပါတယ်။ Call တိုင်း list အသစ်လိုရင် None ထားပြီး function ထဲမှာ list ဆောက်ပါ။ Function ထဲ assign လုပ်တဲ့ name က ပုံမှန်အားဖြင့် local ဖြစ်ပါတယ်။"
          },
          "code": "def add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items\n\nprint(add_item(\"Tea\"), add_item(\"Cake\"))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Tea'] ['Cake']"
        },
        {
          "id": "modules",
          "title": {
            "en": "Import modules",
            "my": "Modules Import လုပ်ခြင်း"
          },
          "text": {
            "en": "A module groups Python definitions. Import a module to use its public names. In a script, the __name__ check keeps command-line entry code from running when the file is imported.",
            "my": "Module တစ်ခုမှာ Python definition တွေ စုထားပါတယ်။ Public name တွေ သုံးဖို့ import လုပ်ပါ။ Script ထဲ __name__ စစ်ထားရင် ဖိုင်ကို import လုပ်ချိန် command-line မှာ သုံးမယ့် code မ run ပါ။"
          },
          "code": "import math\n\ndef main():\n    print(math.ceil(14 / 3))\n\nif __name__ == \"__main__\":\n    main()",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "5"
        }
      ]
    },
    {
      "id": "files",
      "title": {
        "en": "Files, exceptions, and debugging",
        "my": "Files၊ Exceptions နှင့် Debugging"
      },
      "intro": {
        "en": "Read and write files, catch expected failures, and locate errors with tracebacks.",
        "my": "ဖိုင်ဖတ်၊ ရေးပါ။ ဖြစ်နိုင်တဲ့ error ကို ကိုင်တွယ်ပြီး traceback နဲ့ မှားတဲ့ code ကို ရှာပါ။"
      },
      "aliases": [
        "exceptions",
        "debugging"
      ],
      "sources": [
        [
          "Reading and writing files",
          "https://docs.python.org/3.15/tutorial/inputoutput.html#reading-and-writing-files"
        ],
        [
          "Errors and exceptions",
          "https://docs.python.org/3.15/tutorial/errors.html"
        ],
        [
          "pathlib",
          "https://docs.python.org/3.15/library/pathlib.html"
        ]
      ],
      "sections": [
        {
          "id": "files-and-context",
          "title": {
            "en": "Use a context manager",
            "my": "Context Manager သုံးခြင်း"
          },
          "text": {
            "en": "with closes the file after the block, including when an exception is raised. Specify an encoding for text you control. Path handles filesystem paths, and encoding matters when a file comes from an external system.",
            "my": "with က block ပြီးရင် ဖိုင်ကို ပိတ်ပေးပါတယ်။ Exception ဖြစ်ရင်လည်း ပိတ်ပေးပါတယ်။ ကိုယ်ထိန်းချုပ်တဲ့ text file အတွက် encoding သတ်မှတ်ပါ။ Path က ဖိုင်လမ်းကြောင်းကို ကိုင်တွယ်ပါတယ်။ ပြင်ပစနစ်က ဖိုင်တွေအတွက် encoding ကို စစ်ပါ။"
          },
          "code": "from pathlib import Path\n\npath = Path(\"orders.txt\")\npath.write_text(\"Coffee\\nTea\\n\", encoding=\"utf-8\")\nwith path.open(encoding=\"utf-8\") as handle:\n    orders = handle.read().splitlines()\nprint(orders)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Coffee', 'Tea']"
        },
        {
          "id": "exceptions",
          "title": {
            "en": "Catch an expected exception",
            "my": "မျှော်မှန်းထားတဲ့ Exception ကို ဖမ်းခြင်း"
          },
          "text": {
            "en": "Catch the specific exception you can handle. else runs after a try block that raises no exception. finally runs when control leaves the try statement and is useful for cleanup.",
            "my": "ကိုင်တွယ်နိုင်တဲ့ exception type ကို အတိအကျ ဖမ်းပါ။ try block မှာ exception မဖြစ်ရင် else run ပါတယ်။ try statement ကနေ ထွက်တိုင်း finally run လို့ cleanup အတွက် သုံးနိုင်ပါတယ်။"
          },
          "code": "def parse_quantity(text):\n    try:\n        return int(text)\n    except ValueError:\n        return None\n\nprint(parse_quantity(\"4\"), parse_quantity(\"ERROR\"))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "4 None"
        },
        {
          "id": "tracebacks",
          "title": {
            "en": "Read a traceback",
            "my": "Traceback ဖတ်ခြင်း"
          },
          "text": {
            "en": "The final line names the error and message. Find the last relevant frame in your own code and inspect the values on that line. For invalid data, decide whether to reject it, report it, or use a documented fallback.",
            "my": "နောက်ဆုံးကြောင်းမှာ error type နဲ့ message ပါပါတယ်။ ကိုယ့် code ထဲက နောက်ဆုံးသက်ဆိုင်ရာ frame ကို ရှာပြီး အဲဒီ line ရဲ့ value တွေ စစ်ပါ။ Data မမှန်ရင် ငြင်းပယ်မလား၊ မှတ်တမ်းတင်မလား၊ သတ်မှတ်ထားတဲ့ fallback သုံးမလား ဆုံးဖြတ်ပါ။"
          }
        }
      ]
    },
    {
      "id": "classes",
      "title": {
        "en": "Classes, instances, and Python 3.15",
        "my": "Classes၊ Instances နှင့် Python 3.15"
      },
      "intro": {
        "en": "Use classes to keep state and behavior together, and see selected changes in the current Python series.",
        "my": "State နဲ့ behavior အတူထားဖို့ class သုံးပါ။ လက်ရှိ Python series ရဲ့ အပြောင်းအလဲတချို့ကိုလည်း ကြည့်ပါ။"
      },
      "sources": [
        [
          "Python classes",
          "https://docs.python.org/3.15/tutorial/classes.html"
        ],
        [
          "What’s new in Python 3.15",
          "https://docs.python.org/3.15/whatsnew/3.15.html"
        ]
      ],
      "sections": [
        {
          "id": "instances",
          "title": {
            "en": "Instance attributes and methods",
            "my": "Instance Attributes နှင့် Methods"
          },
          "text": {
            "en": "__init__ initializes an instance. self names the instance passed to a method. Use instance attributes for values that differ per object. A class attribute belongs to the class and is shared by instances until shadowed.",
            "my": "__init__ က instance ကို စတင်ပြင်ဆင်ပါတယ်။ self က method ဆီ ပေးလိုက်တဲ့ instance ကို ညွှန်းပါတယ်။ Object တစ်ခုစီ ကွာမယ့် value တွေအတွက် instance attribute သုံးပါ။ Class attribute ကို class က ပိုင်ပြီး instance က နာမည်တူ attribute မသတ်မှတ်မချင်း မျှဝေသုံးပါတယ်။"
          },
          "code": "class OrderLine:\n    def __init__(self, quantity, unit_price):\n        self.quantity = quantity\n        self.unit_price = unit_price\n\n    def total(self):\n        return self.quantity * self.unit_price\n\nprint(OrderLine(3, 2.5).total())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "7.5"
        },
        {
          "id": "inheritance",
          "title": {
            "en": "Inheritance and composition",
            "my": "Inheritance နှင့် Composition"
          },
          "text": {
            "en": "A subclass can override inherited behavior. super() delegates according to Python’s method resolution order. Use composition when an object should hold another object that provides a service, such as an order holding a list of order lines.",
            "my": "Subclass က inherited behavior ကို override လုပ်နိုင်ပါတယ်။ super() က Python method resolution order အတိုင်း ဆက်ခေါ်ပါတယ်။ Order ထဲမှာ order line list ထားသလို object တစ်ခုထဲ နောက် object ထည့်သုံးချင်ရင် composition သုံးပါ။"
          }
        },
        {
          "id": "current-series",
          "title": {
            "en": "Selected changes in Python 3.15",
            "my": "Python 3.15 မှာ ပြောင်းလဲထားတာများ"
          },
          "text": {
            "en": "Python 3.15 enables UTF-8 Mode by default and adds language features such as explicit lazy imports and unpacking in comprehensions. Explicitly specifying external data encodings remains useful. Ordinary import and standard comprehensions work in these examples.",
            "my": "Python 3.15 မှာ UTF-8 Mode ကို default ဖွင့်ထားပြီး explicit lazy import နဲ့ comprehension ထဲ unpack လုပ်တာလို language feature အသစ်တွေ ပါလာပါတယ်။ ပြင်ပဒေတာရဲ့ encoding ကို သိရင် အတိအကျ သတ်မှတ်တာ အသုံးဝင်ဆဲပါ။ ဒီဥပမာတွေမှာ သာမန် import နဲ့ comprehension သုံးထားပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "names-and-objects",
      "title": {
        "en": "Names, mutable objects, and copies",
        "my": "Names၊ Mutable Objects နှင့် Copies"
      },
      "intro": {
        "en": "See when two names share an object and choose how to copy a nested collection.",
        "my": "နာမည်နှစ်ခုက object တစ်ခုတည်းကို ဘယ်အချိန်မှာ ညွှန်းလဲ၊ အဆင့်ဆင့် ထည့်ထားတဲ့ collection ကို ဘယ်လို copy ကူးမလဲ လေ့လာပါ။"
      },
      "sources": [
        [
          "Python scopes and namespaces",
          "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces"
        ],
        [
          "Python shallow and deep copy operations",
          "https://docs.python.org/3/library/copy.html"
        ]
      ],
      "sections": [
        {
          "id": "assignment",
          "title": {
            "en": "Assignment and mutation",
            "my": "Assignment နှင့် Mutation"
          },
          "text": {
            "en": "Assignment binds a name to an object. After alias = original, both names refer to the same list. Mutating the list through either name changes what both can see. Assigning alias to a different list later changes only that binding.",
            "my": "Assignment က နာမည်တစ်ခုကို object တစ်ခုနဲ့ ချိတ်ပေးပါတယ်။ alias = original လို့ ရေးလိုက်ရင် နာမည်နှစ်ခုလုံးက list တစ်ခုတည်းကို ညွှန်းပါတယ်။ ဘယ်နာမည်ကတစ်ဆင့် list ထဲကို ပြင်ပြင် နှစ်ခုလုံးက အပြောင်းအလဲကို မြင်ရပါတယ်။ နောက်မှ alias ကို တခြား list နဲ့ ချိတ်လိုက်ရင် alias ရဲ့ ချိတ်ဆက်မှုသာ ပြောင်းပါတယ်။"
          },
          "code": "original = [10, 20]\nalias = original\nalias.append(30)\nprint(original)\nalias = [5]\nprint(original, alias)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[10, 20, 30]\n[10, 20, 30] [5]",
          "figure": {
            "src": "/docs/media/data/names-and-objects-assignment.png",
            "width": 720,
            "height": 370,
            "alt": {
              "en": "Both names point to [10, 20, 30] after the append. Reassignment then makes alias point to [5].",
              "my": "append လုပ်ပြီးရင် နာမည်နှစ်ခုလုံးက [10, 20, 30] ကို ညွှန်းပါတယ်။ ပြန် assign လုပ်ပြီးမှ alias က [5] ကို ညွှန်းပါတယ်။"
            },
            "caption": {
              "en": "Changing the list and changing what a name points to have different effects.",
              "my": "List ထဲက တန်ဖိုးပြင်တာနဲ့ နာမည်က ညွှန်းတဲ့ object ပြောင်းတာမှာ သက်ရောက်မှု မတူပါ။"
            }
          }
        },
        {
          "id": "nested-copies",
          "title": {
            "en": "Shallow and deep copies",
            "my": "Shallow Copy နှင့် Deep Copy"
          },
          "text": {
            "en": "A shallow copy makes a new outer list and reuses references to its elements. A nested mutable list is therefore still shared. deepcopy creates independent copies of nested lists in this example. Copy only as much as the code needs.",
            "my": "Shallow copy က အပြင်ဘက် list အသစ် ဆောက်ပေးပြီး အတွင်းက element တွေရဲ့ reference ကို ပြန်သုံးပါတယ်။ အတွင်းမှာ ပြင်လို့ရတဲ့ list ရှိရင် အဲဒီ list ကို မျှသုံးနေဆဲပါ။ ဒီဥပမာမှာ deepcopy သုံးရင် အတွင်း list တွေပါ သီးခြား ကူးပေးပါတယ်။"
          },
          "code": "from copy import deepcopy\n\noriginal = [[10], [20]]\nshallow = original.copy()\ndeep = deepcopy(original)\n\noriginal[0].append(15)\nprint(shallow)\nprint(deep)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[[10, 15], [20]]\n[[10], [20]]",
          "figure": {
            "src": "/docs/media/data/names-and-objects-nested-copies.png",
            "width": 720,
            "height": 335,
            "alt": {
              "en": "Three separate outer lists. Original and shallow show [10, 15] for the first inner list, while deep shows [10].",
              "my": "အပြင် list သုံးခု သီးခြားစီပါ။ ပထမ အတွင်း list မှာ original နဲ့ shallow က [10, 15] မြင်ရပြီး deep က [10] အတိုင်း ရှိပါတယ်။"
            },
            "caption": {
              "en": "The mutation reaches the shallow copy through the shared inner list.",
              "my": "အတွင်း list ကို မျှသုံးထားလို့ ပြောင်းလဲမှုကို shallow copy မှာပါ မြင်ရပါတယ်။"
            }
          }
        }
      ]
    },
    {
      "id": "iterators-and-generators",
      "title": {
        "en": "Iterators and generators",
        "my": "Iterators နှင့် Generators"
      },
      "intro": {
        "en": "Process records one at a time and understand why an iterator can be exhausted.",
        "my": "Record တွေကို တစ်ခုချင်း ကိုင်တွယ်ပြီး iterator ဘာကြောင့် ကုန်သွားနိုင်လဲ နားလည်ပါ။"
      },
      "sources": [
        [
          "Functional programming and iterators",
          "https://docs.python.org/3.15/howto/functional.html"
        ],
        [
          "Yield expressions",
          "https://docs.python.org/3.15/reference/expressions.html#yield-expressions"
        ]
      ],
      "sections": [
        {
          "id": "iteration",
          "title": {
            "en": "Iterable and iterator",
            "my": "Iterable နှင့် Iterator"
          },
          "text": {
            "en": "An iterable can produce an iterator. Call iter() to obtain one and next() to advance it. An exhausted iterator raises StopIteration unless you supply a default to next(). A list can create a new iterator whenever you need another pass.",
            "my": "Iterable က iterator ထုတ်ပေးနိုင်ပါတယ်။ iter() နဲ့ ယူပြီး next() နဲ့ တစ်ဆင့်ချင်း ရွှေ့ပါ။ Iterator ကုန်သွားရင် next() ကို default မပေးထားပါက StopIteration ဖြစ်ပါတယ်။ List က ပြန်ပတ်တိုင်း iterator အသစ် ထုတ်ပေးနိုင်ပါတယ်။"
          },
          "code": "values = iter([10, 20])\nprint(next(values), next(values), next(values, None))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "10 20 None"
        },
        {
          "id": "yield",
          "title": {
            "en": "Yield records when needed",
            "my": "လိုအပ်ချိန်မှ Record ထုတ်ခြင်း"
          },
          "text": {
            "en": "A function containing yield returns a generator iterator. Each iteration resumes its body until the next yield. This lets you filter a large file without holding every row in memory, as long as the caller does not collect them all.",
            "my": "yield ပါတဲ့ function က generator iterator ပြန်ပေးပါတယ်။ Iteration တစ်ကြိမ်စီမှာ နောက် yield အထိ function body ဆက် run ပါတယ်။ Caller က အားလုံး list အဖြစ် မစုထားရင် ဖိုင်ကြီးကို row အားလုံး memory ထဲ မတင်ဘဲ စစ်ထုတ်နိုင်ပါတယ်။"
          },
          "code": "def valid_amounts(values):\n    for value in values:\n        if value is not None:\n            yield value\n\nprint(sum(valid_amounts([3, None, 7])))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "10"
        }
      ]
    },
    {
      "id": "decorators",
      "title": {
        "en": "Decorators and reusable wrappers",
        "my": "Decorators နှင့် ပြန်သုံးနိုင်တဲ့ Wrappers"
      },
      "intro": {
        "en": "Wrap a function to add reusable behavior and preserve useful function metadata.",
        "my": "Function ကို wrapper နဲ့ ပတ်ပြီး ပြန်သုံးနိုင်တဲ့ behavior ထည့်ပါ။ မူရင်း function metadata ကိုလည်း ထိန်းထားပါ။"
      },
      "sources": [
        [
          "Function definitions and decorators",
          "https://docs.python.org/3.15/reference/compound_stmts.html#function-definitions"
        ],
        [
          "functools.wraps",
          "https://docs.python.org/3.15/library/functools.html"
        ],
        [
          "contextlib",
          "https://docs.python.org/3.15/library/contextlib.html"
        ]
      ],
      "sections": [
        {
          "id": "wrapper",
          "title": {
            "en": "Wrap a call with a decorator",
            "my": "Decorator နဲ့ Function Call ကို ပတ်ခြင်း"
          },
          "text": {
            "en": "A decorator takes a function and returns a replacement callable. @announce applies the decorator when Python defines the function. The wrapper forwards arguments and returns the original result. functools.wraps keeps metadata such as the name and documentation.",
            "my": "Decorator က function တစ်ခု လက်ခံပြီး အစားထိုးခေါ်နိုင်တဲ့ callable ပြန်ပေးပါတယ်။ @announce က function သတ်မှတ်ချိန်မှာ decorator သုံးပါတယ်။ Wrapper က argument တွေ ပေးပို့ပြီး မူရင်း result ပြန်ပေးပါတယ်။ functools.wraps က နာမည်နဲ့ documentation လို metadata ထိန်းပေးပါတယ်။"
          },
          "code": "from functools import wraps\n\ndef announce(function):\n    @wraps(function)\n    def wrapped(*args, **kwargs):\n        print(\"Running\", function.__name__)\n        return function(*args, **kwargs)\n    return wrapped\n\n@announce\ndef total(quantity, price):\n    return quantity * price\n\nprint(total(2, 3.5), total.__name__)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Running total\n7.0 total"
        },
        {
          "id": "resources",
          "title": {
            "en": "Use context managers for cleanup",
            "my": "Cleanup အတွက် Context Manager သုံးခြင်း"
          },
          "text": {
            "en": "A with block ties setup and cleanup to a scope. Use contextlib.contextmanager to express setup before yield and cleanup in finally. This is useful for files, transactions, temporary directories, and measured sections of code.",
            "my": "with block က ပြင်ဆင်တာနဲ့ cleanup ကို scope တစ်ခုနဲ့ ချိတ်ပါတယ်။ contextlib.contextmanager မှာ yield မတိုင်ခင် ပြင်ဆင်ပြီး finally ထဲ cleanup ရေးပါ။ File၊ transaction၊ temporary directory နဲ့ code အပိုင်းတိုင်းတာရာမှာ အသုံးဝင်ပါတယ်။"
          },
          "code": "from contextlib import contextmanager\n\n@contextmanager\ndef operation():\n    print(\"open\")\n    try:\n        yield \"ready\"\n    finally:\n        print(\"close\")\n\nwith operation() as status:\n    print(status)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "open\nready\nclose"
        }
      ]
    },
    {
      "id": "async-await",
      "title": {
        "en": "Concurrency with async and await",
        "my": "async နှင့် await ဖြင့် Concurrency"
      },
      "intro": {
        "en": "Use coroutines, schedule independent I/O tasks, and handle cancellation.",
        "my": "Coroutine သုံးပါ။ သီးခြား I/O အလုပ်တွေ တစ်ပြိုင်နက် စီမံပြီး cancellation ကို ကိုင်တွယ်ပါ။"
      },
      "sources": [
        [
          "asyncio coroutines and tasks",
          "https://docs.python.org/3.15/library/asyncio-task.html"
        ],
        [
          "asyncio runners",
          "https://docs.python.org/3.15/library/asyncio-runner.html"
        ]
      ],
      "sections": [
        {
          "id": "coroutines",
          "title": {
            "en": "Coroutines and the event loop",
            "my": "Coroutines နှင့် Event Loop"
          },
          "text": {
            "en": "Calling an async def function creates a coroutine object. await waits for an awaitable and can suspend the current task so other tasks can run. Use asyncio.run() as a normal script entry point. A notebook with an active event loop can typically use top-level await.",
            "my": "async def function ကို ခေါ်ရင် coroutine object ရပါတယ်။ await က awaitable ကို စောင့်ပြီး လက်ရှိ task ကို ခဏရပ်လို့ တခြား task တွေ run နိုင်ပါတယ်။ ပုံမှန် script စဖို့ asyncio.run() သုံးပါ။ Event loop ဖွင့်ထားတဲ့ notebook မှာ ပုံမှန်အားဖြင့် top-level await သုံးနိုင်ပါတယ်။"
          },
          "code": "import asyncio\n\nasync def main():\n    await asyncio.sleep(0)\n    print(\"Ready\")\n\nasyncio.run(main())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Ready"
        },
        {
          "id": "task-group",
          "title": {
            "en": "Run independent tasks together",
            "my": "သီးခြား Task တွေ အတူ Run ခြင်း"
          },
          "text": {
            "en": "TaskGroup schedules coroutines and waits for the group before leaving its block. A task failure generally cancels its sibling tasks. Prefer asynchronous I/O inside the event loop and keep CPU-heavy or blocking work away from it. Use try/finally for cleanup and let cancellation propagate.",
            "my": "TaskGroup က coroutine တွေ schedule လုပ်ပြီး block မထွက်ခင် group အားလုံးကို စောင့်ပါတယ်။ Task တစ်ခု fail ရင် ပုံမှန်အားဖြင့် ကျန် task တွေ cancel လုပ်ပါတယ်။ Loop ထဲ asynchronous I/O သုံးပြီး CPU အများကြီးစားတာနဲ့ blocking အလုပ်တွေကို သီးခြားလုပ်ပါ။ Cleanup အတွက် try/finally သုံးပြီး cancellation ဆက်သွားခွင့်ပေးပါ။"
          },
          "code": "import asyncio\n\nasync def read_source(name):\n    await asyncio.sleep(0.01)\n    return name\n\nasync def main():\n    async with asyncio.TaskGroup() as group:\n        sales = group.create_task(read_source(\"sales\"))\n        inventory = group.create_task(read_source(\"inventory\"))\n    print(sales.result(), inventory.result())\n\nasyncio.run(main())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "sales inventory"
        }
      ]
    },
    {
      "id": "dataclasses-and-typing",
      "title": {
        "en": "Dataclasses and typed interfaces",
        "my": "Dataclasses နှင့် Typed Interfaces"
      },
      "intro": {
        "en": "Model structured values and communicate the expected types at a function boundary.",
        "my": "ပုံစံသတ်မှတ်ထားတဲ့ value တွေကို class နဲ့ ဖော်ပြပြီး function က ဘယ် type ကို မျှော်လင့်လဲ ရေးပါ။"
      },
      "sources": [
        [
          "dataclasses",
          "https://docs.python.org/3.15/library/dataclasses.html"
        ],
        [
          "typing",
          "https://docs.python.org/3.15/library/typing.html"
        ]
      ],
      "sections": [
        {
          "id": "dataclass",
          "title": {
            "en": "Represent a record with a dataclass",
            "my": "Record ကို Dataclass ဖြင့် ဖော်ပြခြင်း"
          },
          "text": {
            "en": "@dataclass can generate methods such as __init__, __repr__, and __eq__ from annotated fields. Use field(default_factory=list) to create a fresh list for each record. Add explicit validation when invalid inputs are possible.",
            "my": "@dataclass က annotated field တွေပေါ်ကနေ __init__၊ __repr__ နဲ့ __eq__ တို့ ထုတ်ပေးနိုင်ပါတယ်။ Record တစ်ခုစီအတွက် list အသစ်ရဖို့ field(default_factory=list) သုံးပါ။ Input မှားနိုင်ရင် သီးသန့် validation ထည့်ပါ။"
          },
          "code": "from dataclasses import dataclass, field\n\n@dataclass\nclass Order:\n    order_id: int\n    items: list[str] = field(default_factory=list)\n\nfirst, second = Order(1), Order(2)\nfirst.items.append(\"Tea\")\nprint(first.items, second.items)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Tea'] []"
        },
        {
          "id": "type-hints",
          "title": {
            "en": "Make optional values explicit",
            "my": "Optional Value ကို အတိအကျ ဖော်ပြခြင်း"
          },
          "text": {
            "en": "Type hints describe the intended values for tools and readers. str | None says the value can be text or None. Python generally does not enforce function annotations at runtime, so validate inputs from files, APIs, and users.",
            "my": "Type hint က tool တွေနဲ့ ဖတ်သူအတွက် ရည်ရွယ်ထားတဲ့ value ကို ဖော်ပြပါတယ်။ str | None က စာသား သို့မဟုတ် None ဖြစ်နိုင်တယ်လို့ ဆိုပါတယ်။ Python က function annotation ကို ပုံမှန်အားဖြင့် runtime မှာ မစစ်လို့ file၊ API နဲ့ user ဘက်က input တွေကို စစ်ပါ။"
          },
          "code": "def normalize(name: str | None) -> str:\n    return name.strip() if name is not None else \"Unknown\"\n\nprint(normalize(\" Tea \"), normalize(None))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Tea Unknown"
        }
      ]
    },
    {
      "id": "testing-and-logging",
      "title": {
        "en": "Testing and logging Python programs",
        "my": "Python Program စမ်းသပ်ခြင်းနှင့် Logging"
      },
      "intro": {
        "en": "Write tests for return values and edge cases, and record events that explain a run.",
        "my": "Return value နဲ့ edge case တွေအတွက် test ရေးပြီး run တစ်ခုကို ရှင်းပြနိုင်တဲ့ ဖြစ်ရပ်တွေ မှတ်ပါ။"
      },
      "sources": [
        [
          "unittest",
          "https://docs.python.org/3.15/library/unittest.html"
        ],
        [
          "logging",
          "https://docs.python.org/3.15/library/logging.html"
        ]
      ],
      "sections": [
        {
          "id": "tests",
          "title": {
            "en": "Test a normal input and a boundary",
            "my": "ပုံမှန် Input နှင့် အစွန်းတန်ဖိုး စမ်းခြင်း"
          },
          "text": {
            "en": "Put calculation code in functions so tests can call it directly. Test a representative case, boundary values, and invalid input where relevant. unittest assertions report what differs. The example runs a tiny test suite and prints the result.",
            "my": "Test က တိုက်ရိုက်ခေါ်နိုင်ဖို့ တွက်ချက်မှုကို function ထဲ ထားပါ။ ပုံမှန် case၊ အစွန်းတန်ဖိုးနဲ့ လိုအပ်ရင် မမှန်တဲ့ input တွေ စမ်းပါ။ unittest assertion က ဘာကွာလဲ ပြပါတယ်။ နမူနာက test suite သေးသေး run ပြီး result ပြပါတယ်။"
          },
          "code": "from io import StringIO\nimport unittest\n\ndef line_total(qty, price):\n    if qty < 0:\n        raise ValueError(\"Negative quantity\")\n    return qty * price\n\nclass OrderTests(unittest.TestCase):\n    def test_total(self):\n        self.assertEqual(line_total(2, 3), 6)\n        self.assertEqual(line_total(0, 3), 0)\n\n    def test_invalid_quantity(self):\n        with self.assertRaises(ValueError):\n            line_total(-1, 3)\n\nsuite = unittest.defaultTestLoader.loadTestsFromTestCase(OrderTests)\nresult = unittest.TextTestRunner(stream=StringIO()).run(suite)\nprint(result.testsRun, result.wasSuccessful())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2 True"
        },
        {
          "id": "logging",
          "title": {
            "en": "Record meaningful events",
            "my": "အရေးပါတဲ့ ဖြစ်ရပ်များ မှတ်ခြင်း"
          },
          "text": {
            "en": "Use a module-level logger and configure handlers at the program entry point. Use INFO for milestones, WARNING for recoverable problems, and exception() inside an exception handler if the traceback helps. Keep secrets and private records out of logs.",
            "my": "Module အဆင့် logger သုံးပြီး program ဝင်ပေါက်မှာ handler ပြင်ပါ။ အဆင့်ပြီးတာအတွက် INFO၊ ပြန်ကိုင်တွယ်နိုင်တဲ့ ပြဿနာအတွက် WARNING သုံးပါ။ Handler ထဲ traceback လိုရင် exception() သုံးပါ။ လျှို့ဝှက်ချက်နဲ့ ကိုယ်ရေးဒေတာကို log ထဲ မထည့်ပါနဲ့။"
          },
          "code": "import logging\n\nlogging.basicConfig(level=logging.INFO, format=\"%(levelname)s %(message)s\")\nlogger = logging.getLogger(__name__)\nlogger.info(\"Loaded %d rows\", 120)",
          "codeLanguage": "python",
          "displayOnly": true
        }
      ]
    },
    {
      "id": "project-structure",
      "title": {
        "en": "Reusable modules and project dependencies",
        "my": "ပြန်သုံးနိုင်တဲ့ Modules နှင့် Project Dependencies"
      },
      "intro": {
        "en": "Organize application code, define a script entry point, and record dependency versions.",
        "my": "Application code စုစည်းပါ။ Script entry point သတ်မှတ်ပြီး dependency version တွေ မှတ်ပါ။"
      },
      "sources": [
        [
          "Python modules",
          "https://docs.python.org/3.15/tutorial/modules.html"
        ],
        [
          "Virtual environments and packages",
          "https://docs.python.org/3.15/tutorial/venv.html"
        ],
        [
          "Writing pyproject.toml",
          "https://packaging.python.org/en/latest/guides/writing-pyproject-toml/"
        ]
      ],
      "sections": [
        {
          "id": "entry",
          "title": {
            "en": "Separate calculations from the entry point",
            "my": "တွက်ချက်မှုနှင့် Entry Point ခွဲခြင်း"
          },
          "text": {
            "en": "Put calculations and data transformations in importable functions. A main() function handles workflow, messages, and inputs. The __name__ guard runs main only when the file is launched as the top-level program.",
            "my": "တွက်ချက်မှုနဲ့ data transformation ကို import လုပ်လို့ရတဲ့ function ထဲထားပါ။ main() က workflow၊ message နဲ့ input တွေ ကိုင်တွယ်ပါတယ်။ __name__ guard က ဖိုင်ကို ပင်မ program အဖြစ် run မှ main ခေါ်ပါတယ်။"
          },
          "code": "def total(values):\n    return sum(values)\n\ndef main():\n    print(total([2, 3]))\n\nif __name__ == \"__main__\":\n    main()",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "5"
        },
        {
          "id": "dependencies",
          "title": {
            "en": "Record the environment",
            "my": "Environment ကို မှတ်တမ်းတင်ခြင်း"
          },
          "text": {
            "en": "Use a virtual environment per project. Record the Python version and dependencies so colleagues can reproduce the run. A requirements file can pin an application environment, and pyproject.toml can declare project metadata and dependency requirements for packaging.",
            "my": "Project တစ်ခုစီအတွက် virtual environment သုံးပါ။ တခြားသူတွေ ပြန် run နိုင်ဖို့ Python version နဲ့ dependency တွေ မှတ်ပါ။ Requirements ဖိုင်က application environment ရဲ့ version တွေ သတ်မှတ်ပေးနိုင်ပြီး pyproject.toml က package အတွက် project metadata နဲ့ dependency လိုအပ်ချက်တွေ ဖော်ပြနိုင်ပါတယ်။"
          },
          "code": "python -m pip freeze > requirements.txt\npython -m pip install -r requirements.txt",
          "codeLanguage": "shell",
          "displayOnly": true
        }
      ]
    }
  ]
};
