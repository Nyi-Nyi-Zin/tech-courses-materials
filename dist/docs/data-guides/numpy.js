export default {
  "id": "numpy",
  "name": "NumPy",
  "version": "2.5.5",
  "intro": {
    "en": "Work with multidimensional arrays, broadcasting, numerical summaries, and matrices.",
    "my": "Multidimensional array၊ broadcasting၊ ကိန်းဂဏန်းအနှစ်ချုပ်နဲ့ matrix တွေ သုံးပါ။"
  },
  "pages": [
    {
      "id": "arrays",
      "title": {
        "en": "Arrays, shape, and dtype",
        "my": "Arrays၊ Shape နှင့် dtype"
      },
      "intro": {
        "en": "Create arrays and inspect how NumPy stores their values.",
        "my": "Array ဆောက်ပြီး NumPy က value တွေကို ဘယ်လိုသိမ်းလဲ ကြည့်ပါ။"
      },
      "aliases": [
        "create-arrays",
        "shape-and-dtype"
      ],
      "sources": [
        [
          "NumPy absolute basics",
          "https://numpy.org/doc/stable/user/absolute_beginners.html"
        ],
        [
          "Data types",
          "https://numpy.org/doc/stable/user/basics.types.html"
        ]
      ],
      "sections": [
        {
          "id": "array-object",
          "title": {
            "en": "The ndarray",
            "my": "ndarray အကြောင်း"
          },
          "text": {
            "en": "An ndarray has a shape and a dtype. shape lists the length of each axis, ndim counts the axes, and size counts all elements. A two-dimensional array uses axis 0 for rows and axis 1 for columns.",
            "my": "ndarray မှာ shape နဲ့ dtype ရှိပါတယ်။ shape က axis တစ်ခုစီရဲ့ အရှည်၊ ndim က axis အရေအတွက်၊ size က element စုစုပေါင်း ဖြစ်ပါတယ်။ 2D array မှာ axis 0 က row၊ axis 1 က column ပါ။"
          },
          "code": "import numpy as np\n\nsales = np.array([[2, 4, 3], [3, 1, 2]], dtype=np.int32)\nprint(sales.shape, sales.ndim, sales.size)\nprint(sales.dtype.name)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(2, 3) 2 6\nint32",
          "figure": {
            "src": "/docs/media/data/arrays-array-object.png",
            "width": 720,
            "height": 325,
            "alt": {
              "en": "A grid of two rows and three columns, with zero-based labels and shape (2, 3).",
              "my": "Row နှစ်ခု၊ column သုံးခုရှိတဲ့ grid ပါ။ Index က သုညကစပြီး shape က (2, 3) ဖြစ်ပါတယ်။"
            },
            "caption": {
              "en": "The first shape entry counts rows and the second counts columns.",
              "my": "Shape ရဲ့ ပထမတန်ဖိုးက row အရေအတွက်၊ ဒုတိယတန်ဖိုးက column အရေအတွက်ပါ။"
            }
          }
        },
        {
          "id": "constructors",
          "title": {
            "en": "Choose a constructor",
            "my": "Constructor ရွေးခြင်း"
          },
          "text": {
            "en": "array converts supplied values, zeros creates a filled shape, and arange generates values with an exclusive stop. For evenly spaced samples with a specified count, use linspace. It includes the endpoint by default.",
            "my": "array က ပေးထားတဲ့ value တွေ ပြောင်းပေးပြီး zeros က သုညတွေ ဖြည့်ပေးပါတယ်။ arange မှာ stop မပါပါ။ အရေအတွက် သတ်မှတ်ပြီး အညီအမျှ ခွဲချင်ရင် linspace သုံးပါ။ Default အနေနဲ့ endpoint ပါပါတယ်။"
          },
          "code": "import numpy as np\n\nprint(np.arange(2, 10, 2).tolist())\nprint(np.linspace(0, 1, 3).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[2, 4, 6, 8]\n[0.0, 0.5, 1.0]"
        },
        {
          "id": "dtype",
          "title": {
            "en": "Choose and convert a dtype",
            "my": "dtype ရွေး၍ ပြောင်းခြင်း"
          },
          "text": {
            "en": "astype converts values to another dtype. Narrow integer types save space but have limited ranges. Inspect dtype before arithmetic on fixed-width integers, especially with large counts.",
            "my": "astype နဲ့ value တွေကို dtype တစ်မျိုး ပြောင်းနိုင်ပါတယ်။ Integer type အသေးက memory သက်သာပြီး သိမ်းနိုင်တဲ့ range ကျဉ်းပါတယ်။ Count ကြီးတွေကို fixed-width integer နဲ့ တွက်ခါနီး dtype ကို စစ်ပါ။"
          },
          "code": "import numpy as np\n\nvalues = np.array([2, 4], dtype=np.int32)\nprint(values.astype(np.float64).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[2.0, 4.0]"
        }
      ]
    },
    {
      "id": "indexing",
      "title": {
        "en": "Indexing, slices, and masks",
        "my": "Indexing၊ Slices နှင့် Masks"
      },
      "intro": {
        "en": "Read or update array values by position, condition, and dimension.",
        "my": "Position၊ condition နဲ့ dimension အလိုက် array value တွေ ယူပါ သို့မဟုတ် ပြင်ပါ။"
      },
      "aliases": [
        "array-indexing",
        "boolean-masks"
      ],
      "sources": [
        [
          "Indexing on ndarrays",
          "https://numpy.org/doc/stable/user/basics.indexing.html"
        ],
        [
          "Copies and views",
          "https://numpy.org/doc/stable/user/basics.copies.html"
        ]
      ],
      "sections": [
        {
          "id": "positions",
          "title": {
            "en": "Index by axis",
            "my": "Axis အလိုက် Index ယူခြင်း"
          },
          "text": {
            "en": "Use array[row, column] to select a cell in a 2D array. An index of -1 means the last position, and a colon can select every position along that axis.",
            "my": "2D array ထဲက cell ယူဖို့ array[row, column] သုံးပါ။ -1 က နောက်ဆုံးနေရာ ဖြစ်ပြီး colon က axis တစ်ခုလုံး ရွေးပေးနိုင်ပါတယ်။"
          },
          "code": "import numpy as np\n\ndata = np.array([[10, 3, 7], [12, 4, 8]])\nprint(data[0, -1])\nprint(data[:, -1].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "7\n[7, 8]"
        },
        {
          "id": "masks",
          "title": {
            "en": "Apply a Boolean mask",
            "my": "Boolean Mask သုံးခြင်း"
          },
          "text": {
            "en": "A comparison yields a Boolean array. Wrap each comparison in parentheses when combining masks with & or |. Use ~ to invert a mask.",
            "my": "Comparison တစ်ခုက Boolean array ပြန်ပေးပါတယ်။ & သို့မဟုတ် | နဲ့ mask တွေ ချိတ်ရင် comparison တစ်ခုစီကို ကွင်းခတ်ပါ။ ပြောင်းပြန်ယူဖို့ ~ သုံးပါ။"
          },
          "code": "import numpy as np\n\nmarks = np.array([80, 32, 50, 91, 67])\nmask = (marks >= 50) & (marks <= 80)\nprint(marks[mask].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[80, 50, 67]"
        },
        {
          "id": "views",
          "title": {
            "en": "Know when memory is shared",
            "my": "Memory မျှဝေမှု သိထားခြင်း"
          },
          "text": {
            "en": "Basic slicing returns views of array data. Integer-array and Boolean-array indexing return copies when used to retrieve values. Use copy() when you need an independent result.",
            "my": "Basic slice က မူရင်း array data ကို မျှသုံးတဲ့ view ပြန်ပေးပါတယ်။ Integer-array နဲ့ Boolean-array indexing နဲ့ value ယူရင် copy ပြန်ရပါတယ်။ သီးခြား result လိုရင် copy() သုံးပါ။"
          },
          "code": "import numpy as np\n\na = np.array([10, 20, 30])\nb = a[:2]\nb[0] = 99\nprint(a.tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[99, 20, 30]"
        }
      ]
    },
    {
      "id": "reshaping",
      "title": {
        "en": "Reshape, transpose, and combine arrays",
        "my": "Array ပုံစံပြောင်း၍ ပေါင်းစပ်ခြင်း"
      },
      "intro": {
        "en": "Change how existing values are arranged and distinguish joining an axis from adding one.",
        "my": "ရှိပြီးသား value တွေရဲ့ စီပုံ ပြောင်းပါ။ Axis တစ်ခုမှာ ဆက်တာနဲ့ axis အသစ်ထည့်တာကို ခွဲသိပါ။"
      },
      "aliases": [
        "reshape"
      ],
      "sources": [
        [
          "NumPy absolute basics",
          "https://numpy.org/doc/stable/user/absolute_beginners.html"
        ],
        [
          "Copies and views",
          "https://numpy.org/doc/stable/user/basics.copies.html"
        ]
      ],
      "sections": [
        {
          "id": "reshape",
          "title": {
            "en": "Reshape or transpose",
            "my": "Reshape သို့မဟုတ် Transpose လုပ်ခြင်း"
          },
          "text": {
            "en": "reshape keeps the element count fixed and can infer one axis set to -1. T transposes a 2D array. A reshape can return a view or a copy depending on the memory layout.",
            "my": "reshape က element စုစုပေါင်းကို ထိန်းထားပြီး -1 ထားတဲ့ axis တစ်ခုကို တွက်ပေးပါတယ်။ T က 2D array ကို transpose လုပ်ပါတယ်။ Reshape က memory layout ပေါ်မူတည်ပြီး view သို့မဟုတ် copy ပြန်ပေးနိုင်ပါတယ်။"
          },
          "code": "import numpy as np\n\na = np.arange(1, 7).reshape(2, -1)\nprint(a.tolist())\nprint(a.T.shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[[1, 2, 3], [4, 5, 6]]\n(3, 2)"
        },
        {
          "id": "combine",
          "title": {
            "en": "Concatenate or stack",
            "my": "Concatenate သို့မဟုတ် Stack လုပ်ခြင်း"
          },
          "text": {
            "en": "concatenate joins arrays along an existing axis. stack adds a new axis. For stack, all input arrays must have the same shape.",
            "my": "concatenate က ရှိပြီးသား axis တစ်ခုအတိုင်း array တွေ ဆက်ပါတယ်။ stack က axis အသစ်ထည့်ပြီး အဝင် array အားလုံး shape တူရပါမယ်။"
          },
          "code": "import numpy as np\n\na, b = np.array([1, 2]), np.array([3, 4])\nprint(np.concatenate([a, b]).shape)\nprint(np.stack([a, b]).shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(4,)\n(2, 2)"
        }
      ]
    },
    {
      "id": "broadcasting",
      "title": {
        "en": "Broadcasting, vectorization, and reductions",
        "my": "Broadcasting၊ Vectorization နှင့် Reductions"
      },
      "intro": {
        "en": "Apply element-wise operations and summarize over a chosen axis.",
        "my": "နေရာတူ value ချင်း တွက်ပြီး ရွေးထားတဲ့ axis အလိုက် အနှစ်ချုပ်ပါ။"
      },
      "aliases": [
        "vectorization",
        "axis-reductions"
      ],
      "sources": [
        [
          "Broadcasting rules",
          "https://numpy.org/doc/stable/user/basics.broadcasting.html"
        ],
        [
          "NumPy absolute basics",
          "https://numpy.org/doc/stable/user/absolute_beginners.html"
        ]
      ],
      "sections": [
        {
          "id": "elementwise",
          "title": {
            "en": "Element-wise calculations",
            "my": "နေရာတူချင်း တွက်ခြင်း"
          },
          "text": {
            "en": "Array arithmetic applies operations element by element. The * operator multiplies matching elements. Use @ or matmul for matrix multiplication.",
            "my": "Array arithmetic က element တစ်ခုချင်း တွက်ပါတယ်။ * က နေရာတူ element ချင်း မြှောက်ပါတယ်။ Matrix multiplication အတွက် @ သို့မဟုတ် matmul သုံးပါ။"
          },
          "code": "import numpy as np\n\nquantity = np.array([2, 4, 3])\nprice = np.array([1.5, 2, 4])\nprint((quantity * price).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[3.0, 8.0, 12.0]"
        },
        {
          "id": "align",
          "title": {
            "en": "Align shapes from the right",
            "my": "Shape ကို ညာဘက်ကနေ တိုက်ခြင်း"
          },
          "text": {
            "en": "NumPy compares dimensions starting from the right. Two dimensions are compatible when equal or when one is 1. Missing leading dimensions are treated as 1. Use a new axis when aligning a column vector with a matrix.",
            "my": "NumPy က dimension တွေကို ညာဘက်ကနေ စတိုက်ပါတယ်။ အရွယ်တူရင် ဒါမှမဟုတ် တစ်ဖက် 1 ဖြစ်ရင် ကိုက်ပါတယ်။ ရှေ့မှာ မရှိတဲ့ dimension ကို 1 လို့ သတ်မှတ်ပါတယ်။ Column vector ကို matrix နဲ့ညှိဖို့ axis အသစ် ထည့်နိုင်ပါတယ်။"
          },
          "code": "import numpy as np\n\nmarks = np.array([[50, 60], [65, 70]])\nprint((marks + [5, 3]).tolist())\nprint(marks.sum(axis=0).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[[55, 63], [70, 73]]\n[115, 130]",
          "figure": {
            "src": "/docs/media/data/broadcasting-align.png",
            "width": 720,
            "height": 316,
            "alt": {
              "en": "Adding [5, 3] to each of two marks rows produces [55, 63] and [70, 73].",
              "my": "Marks row နှစ်ခုစလုံးကို [5, 3] နဲ့ ပေါင်းတော့ [55, 63] နဲ့ [70, 73] ရပါတယ်။"
            },
            "caption": {
              "en": "The length-2 vector matches the last dimension of the matrix.",
              "my": "အရှည် 2 ရှိတဲ့ vector က matrix ရဲ့ နောက်ဆုံး dimension နဲ့ ကိုက်ပါတယ်။"
            }
          }
        },
        {
          "id": "reduce",
          "title": {
            "en": "Reduce one axis",
            "my": "Axis တစ်ခုကို စုချုံ့ခြင်း"
          },
          "text": {
            "en": "In a rows-by-columns array, sum(axis=0) combines rows and returns one value per column. sum(axis=1) combines columns and returns one value per row. keepdims=True retains the reduced axis with length 1.",
            "my": "Row နဲ့ column ပါတဲ့ array မှာ sum(axis=0) က row တွေကို စုပြီး column တစ်ခုစီအတွက် value တစ်ခု ပြန်ပေးပါတယ်။ sum(axis=1) က column တွေကို စုပြီး row တစ်ခုစီအတွက် value တစ်ခု ပြန်ပေးပါတယ်။ keepdims=True က စုလိုက်တဲ့ axis ကို အရှည် 1 နဲ့ ထားပါတယ်။"
          },
          "code": "import numpy as np\n\nmarks = np.array([[50, 60], [65, 70]])\nprint(marks.sum(axis=0).tolist())\nprint(marks.sum(axis=1).tolist())\nprint(marks.sum(axis=0, keepdims=True).shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[115, 130]\n[110, 135]\n(1, 2)",
          "figure": {
            "src": "/docs/media/data/broadcasting-reduce.png",
            "width": 720,
            "height": 345,
            "alt": {
              "en": "Summing four marks by axis 0 gives [115, 130]. Summing by axis 1 gives [110, 135].",
              "my": "Marks လေးခုကို axis 0 အလိုက် ပေါင်းရင် [115, 130]၊ axis 1 အလိုက် ပေါင်းရင် [110, 135] ရပါတယ်။"
            },
            "caption": {
              "en": "axis=0 returns one total per column and axis=1 returns one total per row.",
              "my": "axis=0 က column တစ်ခုစီအတွက် စုစုပေါင်း၊ axis=1 က row တစ်ခုစီအတွက် စုစုပေါင်း ပြန်ပေးပါတယ်။"
            }
          }
        }
      ]
    },
    {
      "id": "statistics",
      "title": {
        "en": "Descriptive statistics and random sampling",
        "my": "အနှစ်ချုပ်စာရင်းအင်း နှင့် Random Sampling"
      },
      "intro": {
        "en": "Measure center and spread, handle NaN deliberately, and use a reproducible random generator.",
        "my": "အလယ်တန်ဖိုးနဲ့ ကွာဟမှု တိုင်းပါ။ NaN ကို ရည်ရွယ်ချက်နဲ့ ကိုင်တွယ်ပြီး ပြန်ထုတ်နိုင်တဲ့ random generator သုံးပါ။"
      },
      "aliases": [
        "mean-and-spread"
      ],
      "sources": [
        [
          "numpy.std and ddof",
          "https://numpy.org/doc/stable/reference/generated/numpy.std.html"
        ],
        [
          "Random Generator",
          "https://numpy.org/doc/stable/reference/random/generator.html"
        ]
      ],
      "sections": [
        {
          "id": "center-and-spread",
          "title": {
            "en": "Mean, variance, and standard deviation",
            "my": "Mean၊ Variance နှင့် Standard Deviation"
          },
          "text": {
            "en": "Mean gives the arithmetic average. Variance measures squared deviations, and standard deviation is its square root. NumPy uses N − ddof in the denominator. Use ddof=1 for the usual sample variance estimate. The standard deviation itself is still a biased estimate of the population standard deviation.",
            "my": "Mean က ပျမ်းမျှပါ။ Variance က ကွာဟချက်ရဲ့ နှစ်ထပ်ကိန်းနဲ့ တွက်ပြီး standard deviation က variance ရဲ့ square root ပါ။ NumPy က ပိုင်းခြေမှာ N − ddof သုံးပါတယ်။ ပုံမှန် sample variance ခန့်မှန်းချက်အတွက် ddof=1 သုံးပါ။ Standard deviation ကတော့ population standard deviation အတွက် bias ရှိနိုင်ဆဲပါ။"
          },
          "code": "import numpy as np\n\nmarks = np.array([60, 70, 80])\nprint(float(marks.mean()))\nprint(float(marks.var(ddof=1)), float(marks.std(ddof=1)))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "70.0\n100.0 10.0"
        },
        {
          "id": "nan-and-random",
          "title": {
            "en": "NaN and reproducible randomness",
            "my": "NaN နှင့် ထပ်တူပြန်ထုတ်နိုင်တဲ့ Random Data"
          },
          "text": {
            "en": "np.nanmean ignores NaN while calculating a mean. Track how many values you exclude. For simulation, default_rng creates a Generator. A fixed seed lets you repeat a run within the same environment and call sequence.",
            "my": "np.nanmean က NaN မထည့်ဘဲ ပျမ်းမျှတွက်ပါတယ်။ ဖယ်ခဲ့တဲ့ value အရေအတွက်ကို မှတ်ပါ။ Simulation လုပ်ဖို့ default_rng နဲ့ Generator ဆောက်ပါ။ Environment နဲ့ call အစဉ်တူရင် seed တူတဲ့ run ကို ပြန်ထုတ်နိုင်ပါတယ်။"
          },
          "code": "import numpy as np\n\nrng = np.random.default_rng(42)\nsample = rng.integers(1, 7, size=4)\nprint(sample.shape)\nprint(float(np.nanmean([1.0, np.nan, 3.0])))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(4,)\n2.0"
        }
      ]
    },
    {
      "id": "linear-algebra",
      "title": {
        "en": "Matrix operations and linear systems",
        "my": "Matrix တွက်ချက်မှုနှင့် Linear Systems"
      },
      "intro": {
        "en": "Multiply matrices and solve a system of linear equations with NumPy.",
        "my": "Matrix တွေ မြှောက်ပြီး NumPy နဲ့ linear equation တွေ ဖြေရှင်းပါ။"
      },
      "sources": [
        [
          "NumPy linear algebra",
          "https://numpy.org/doc/stable/reference/routines.linalg.html"
        ]
      ],
      "sections": [
        {
          "id": "multiply",
          "title": {
            "en": "Matrix and vector multiplication",
            "my": "Matrix နှင့် Vector မြှောက်ခြင်း"
          },
          "text": {
            "en": "For a 2D matrix with n columns, a 1D vector of length n can be multiplied using @. The result has one value per matrix row. Verify compatible shapes before combining arrays.",
            "my": "2D matrix မှာ column n ခုရှိရင် အရှည် n ရှိတဲ့ 1D vector နဲ့ @ သုံးပြီး မြှောက်နိုင်ပါတယ်။ Result မှာ matrix row တစ်ခုစီအတွက် value တစ်ခု ရပါတယ်။ မတွက်ခင် shape ကိုက်မကိုက် စစ်ပါ။"
          },
          "code": "import numpy as np\n\ncosts = np.array([[2, 1], [4, 2]])\nprices = np.array([3, 5])\nprint((costs @ prices).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[11, 22]"
        },
        {
          "id": "solve",
          "title": {
            "en": "Solve a linear system",
            "my": "Linear System ဖြေရှင်းခြင်း"
          },
          "text": {
            "en": "Use linalg.solve for a square full-rank system A @ x = b. For a rectangular system, consider least squares. Check whether the computed solution approximately satisfies the original equation.",
            "my": "Square ဖြစ်ပြီး full rank ရှိတဲ့ A @ x = b အတွက် linalg.solve သုံးပါ။ Rectangular system အတွက် least squares စဉ်းစားပါ။ ရလာတဲ့ x က မူရင်း equation နဲ့ အနီးစပ်ဆုံး ကိုက်မကိုက် စစ်ပါ။"
          },
          "code": "import numpy as np\n\nA = np.array([[2, 1], [1, -1]])\nb = np.array([7, 2])\nx = np.linalg.solve(A, b)\nprint(x.round(2).tolist())\nprint(np.allclose(A @ x, b))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[3.0, 1.0]\nTrue"
        }
      ]
    },
    {
      "id": "ufuncs-and-masks",
      "title": {
        "en": "Universal functions and masked calculations",
        "my": "Universal Functions နှင့် Mask သုံးပြီး တွက်ခြင်း"
      },
      "intro": {
        "en": "Apply operations element by element and protect calculations with an explicit mask.",
        "my": "Element တစ်ခုချင်း တွက်ပြီး ဘယ်နေရာတွေမှာ တွက်သင့်လဲဆိုတာ mask နဲ့ သတ်မှတ်ပါ။"
      },
      "sources": [
        [
          "NumPy universal functions",
          "https://numpy.org/doc/stable/user/basics.ufuncs.html"
        ],
        [
          "numpy.divide",
          "https://numpy.org/doc/stable/reference/generated/numpy.divide.html"
        ],
        [
          "numpy.where",
          "https://numpy.org/doc/stable/reference/generated/numpy.where.html"
        ]
      ],
      "sections": [
        {
          "id": "divide",
          "title": {
            "en": "Divide where the denominator is valid",
            "my": "ပိုင်းခြေ သုညမဟုတ်တဲ့ နေရာတွေမှာ စားခြင်း"
          },
          "text": {
            "en": "A universal function, or ufunc, applies an operation element by element. In np.divide, where controls which entries are calculated. Initialize out to NaN so positions excluded by the mask retain a known value.",
            "my": "Universal function (ufunc) က element တစ်ခုချင်းအလိုက် တွက်ပေးပါတယ်။ np.divide မှာ where နဲ့ ဘယ်နေရာတွေ တွက်မလဲ သတ်မှတ်နိုင်ပါတယ်။ out ကို NaN နဲ့ အစပြုထားရင် mask က ချန်ထားတဲ့ နေရာတွေမှာ NaN အတိုင်း ကျန်ပါတယ်။"
          },
          "code": "import numpy as np\n\norders = np.array([12, 0, 18])\nvisitors = np.array([60, 0, 90])\nrate = np.full(visitors.shape, np.nan)\nnp.divide(orders, visitors, out=rate, where=visitors != 0)\nprint(rate.tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[0.2, nan, 0.2]",
          "figure": {
            "src": "/docs/media/data/ufuncs-and-masks-divide.png",
            "width": 720,
            "height": 350,
            "alt": {
              "en": "The orders and visitors arrays yield rates 0.2, NaN, and 0.2. The center position has zero visitors and a False mask.",
              "my": "Orders နဲ့ visitors array တွေက rate 0.2၊ NaN၊ 0.2 ထုတ်ပေးပါတယ်။ အလယ်နေရာမှာ visitor သုညဖြစ်ပြီး mask က False ပါ။"
            },
            "caption": {
              "en": "The mask skips the zero denominator and preserves the initialized NaN.",
              "my": "ပိုင်းခြေ သုညဖြစ်တဲ့နေရာမှာ mask က မတွက်ဘဲ အစက ထားခဲ့တဲ့ NaN ကို ဆက်ထားပါတယ်။"
            }
          }
        },
        {
          "id": "choose",
          "title": {
            "en": "Choose values with np.where",
            "my": "np.where နဲ့ Value ရွေးခြင်း"
          },
          "text": {
            "en": "np.where(condition, x, y) selects values from x or y after its arguments have been evaluated. When the operation itself needs masking, such as division by zero, use the where argument of the ufunc.",
            "my": "np.where(condition, x, y) က argument တွေကို တွက်ပြီးမှ condition အလိုက် x သို့မဟုတ် y ထဲက value ကို ရွေးပါတယ်။ သုညနဲ့စားတာလို တွက်ချက်မှုကိုယ်တိုင်ကို ရှောင်ဖို့လိုရင် ufunc ရဲ့ where argument ကို သုံးပါ။"
          },
          "code": "import numpy as np\n\nstock = np.array([3, 8, 0])\nprint(np.where(stock < 5, \"Restock\", \"OK\").tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Restock', 'OK', 'Restock']"
        }
      ]
    },
    {
      "id": "sorting-and-searching",
      "title": {
        "en": "Sort, rank, and search arrays",
        "my": "Array များ အစဉ်စီ၊ အဆင့်သတ်မှတ်၍ ရှာခြင်း"
      },
      "intro": {
        "en": "Use positions for indirect sorting, find matching locations, and search a sorted array.",
        "my": "Index တွေနဲ့ အစဉ်စီပါ။ ကိုက်ညီတဲ့ နေရာရှာပြီး စီပြီးသား array ထဲ ရှာပါ။"
      },
      "sources": [
        [
          "Sorting, searching, and counting",
          "https://numpy.org/doc/stable/reference/routines.sort.html"
        ]
      ],
      "sections": [
        {
          "id": "indirect-sort",
          "title": {
            "en": "Preserve alignment with argsort",
            "my": "argsort ဖြင့် ဆက်စပ် Array များ အစဉ်ညှိခြင်း"
          },
          "text": {
            "en": "np.sort returns sorted values. np.argsort returns positions, which you can reuse to sort related arrays together. Set stable=True when tied values should keep their original order.",
            "my": "np.sort က အစဉ်စီပြီးသား value တွေ ပြန်ပေးပါတယ်။ np.argsort က index တွေ ပြန်ပေးလို့ ဆက်စပ် array တွေကို အစဉ်တူတူ စီနိုင်ပါတယ်။ တန်ဖိုးတူတာတွေ မူရင်းအစဉ်အတိုင်း ထားဖို့ stable=True သုံးပါ။"
          },
          "code": "import numpy as np\n\nnames = np.array([\"Tea\", \"Cake\", \"Coffee\"])\ncounts = np.array([4, 1, 3])\norder = np.argsort(counts, stable=True)\nprint(names[order].tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['Cake', 'Coffee', 'Tea']"
        },
        {
          "id": "search",
          "title": {
            "en": "Find positions and insertion points",
            "my": "Index နှင့် ထည့်ရမည့် နေရာ ရှာခြင်း"
          },
          "text": {
            "en": "flatnonzero gives positions of true entries in a flattened mask. searchsorted gives insertion positions for sorted arrays. side=\"left\" finds the first valid position before equal values.",
            "my": "flatnonzero က flatten လုပ်ထားတဲ့ mask ထဲ True ဖြစ်တဲ့ index တွေ ပေးပါတယ်။ searchsorted က စီပြီးသား array မှာ ထည့်ရမယ့် နေရာ ပေးပါတယ်။ side=\"left\" က တန်ဖိုးတူတာတွေရဲ့ ရှေ့ဆုံးနေရာ ရှာပါတယ်။"
          },
          "code": "import numpy as np\n\nscores = np.array([10, 20, 20, 50])\nprint(np.flatnonzero(scores >= 20).tolist())\nprint(np.searchsorted(scores, 20, side=\"left\"))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[1, 2, 3]\n1"
        }
      ]
    },
    {
      "id": "numerical-accuracy",
      "title": {
        "en": "Floating-point accuracy and missing values",
        "my": "Floating-point တိကျမှုနှင့် Missing Values"
      },
      "intro": {
        "en": "Choose tolerances, identify finite values, and keep track of excluded data.",
        "my": "Tolerance ရွေးပါ။ Finite value တွေ စစ်ပြီး တွက်ချက်မှုကနေ ဖယ်ထားတာတွေ မှတ်ပါ။"
      },
      "sources": [
        [
          "numpy.isclose",
          "https://numpy.org/doc/stable/reference/generated/numpy.isclose.html"
        ],
        [
          "numpy.isfinite",
          "https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html"
        ],
        [
          "numpy.nanmean",
          "https://numpy.org/doc/stable/reference/generated/numpy.nanmean.html"
        ]
      ],
      "sections": [
        {
          "id": "tolerances",
          "title": {
            "en": "Compare using a tolerance",
            "my": "Tolerance ဖြင့် တိုက်စစ်ခြင်း"
          },
          "text": {
            "en": "Binary floating-point arithmetic can produce small rounding differences. isclose combines a relative tolerance based on the reference value and an absolute tolerance. Set the tolerances according to the scale and meaning of the numbers.",
            "my": "Binary floating-point တွက်ချက်မှုမှာ အနည်းငယ် rounding ကွာနိုင်ပါတယ်။ isclose က reference တန်ဖိုးပေါ် မူတည်တဲ့ relative tolerance နဲ့ absolute tolerance ကို တွဲသုံးပါတယ်။ ကိန်းဂဏန်းရဲ့ scale နဲ့ အဓိပ္ပာယ်အလိုက် tolerance ရွေးပါ။"
          },
          "code": "import numpy as np\n\nprint(np.isclose(0.1 + 0.2, 0.3, rtol=0, atol=1e-12))\nprint(np.isclose(0.02, 0.0, rtol=0, atol=0.01))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "True\nFalse"
        },
        {
          "id": "finite",
          "title": {
            "en": "Distinguish NaN and infinity",
            "my": "NaN နှင့် Infinity ခွဲသိခြင်း"
          },
          "text": {
            "en": "isfinite excludes both NaN and positive or negative infinity. nanmean ignores NaN but can still include infinity. Choose a rule for invalid measurements and report how many observations each calculation actually used.",
            "my": "isfinite က NaN နဲ့ အပေါင်း၊ အနုတ် infinity ကို ဖယ်ပါတယ်။ nanmean က NaN ကို ကျော်ပေမယ့် infinity ပါနိုင်ပါတယ်။ မမှန်တဲ့ measurement အတွက် rule သတ်မှတ်ပြီး တွက်ရာမှာ တကယ်ပါဝင်တဲ့ observation အရေအတွက်ကို မှတ်ပါ။"
          },
          "code": "import numpy as np\n\na = np.array([2.0, np.nan, np.inf, 6.0])\nvalid = a[np.isfinite(a)]\nprint(valid.size, float(valid.mean()))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2 4.0"
        }
      ]
    },
    {
      "id": "array-io",
      "title": {
        "en": "Read, save, and share arrays",
        "my": "Array များ ဖတ်ခြင်း၊ သိမ်းခြင်းနှင့် မျှဝေခြင်း"
      },
      "intro": {
        "en": "Choose NumPy binary formats or text files, and preserve format and dtype expectations.",
        "my": "NumPy binary format သို့မဟုတ် text file ရွေးပြီး format နဲ့ dtype ကို တိတိကျကျ ထိန်းပါ။"
      },
      "sources": [
        [
          "Input and output",
          "https://numpy.org/doc/stable/reference/routines.io.html"
        ],
        [
          "numpy.load",
          "https://numpy.org/doc/stable/reference/generated/numpy.load.html"
        ]
      ],
      "sections": [
        {
          "id": "binary",
          "title": {
            "en": "Store an array with its shape and dtype",
            "my": "Shape နှင့် dtype ပါအောင် Array သိမ်းခြင်း"
          },
          "text": {
            "en": "Use .npy for one array and .npz to store several named arrays. Load numerical files with allow_pickle=False, and avoid object arrays in files you plan to exchange. Use a context manager when opening .npz archives.",
            "my": "Array တစ်ခုအတွက် .npy၊ နာမည်ပေးထားတဲ့ array အများကြီးအတွက် .npz သုံးပါ။ Numeric ဖိုင်ဖတ်ရင် allow_pickle=False ထားပြီး မျှဝေမယ့်ဖိုင်မှာ object array ရှောင်ပါ။ .npz archive ဖွင့်ရင် context manager သုံးပါ။"
          },
          "code": "from io import BytesIO\nimport numpy as np\n\nbuffer = BytesIO()\nnp.save(buffer, np.array([[2, 3]], dtype=np.int16))\nbuffer.seek(0)\na = np.load(buffer, allow_pickle=False)\nprint(a.shape, a.dtype.name)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(1, 2) int16"
        },
        {
          "id": "text",
          "title": {
            "en": "Read straightforward numeric text",
            "my": "ရိုးရှင်းတဲ့ Numeric Text ဖတ်ခြင်း"
          },
          "text": {
            "en": "loadtxt suits regularly shaped numeric text. Set the delimiter and skip header rows. Try genfromtxt when you need missing-value handling, or pandas when columns have names, mixed types, or richer parsing needs.",
            "my": "ပုံစံညီတဲ့ numeric text အတွက် loadtxt သုံးနိုင်ပါတယ်။ Delimiter နဲ့ header row ကျော်မယ့် အရေအတွက် သတ်မှတ်ပါ။ Missing value ကိုင်တွယ်ဖို့ genfromtxt၊ နာမည်နဲ့ type မျိုးစုံပါရင် pandas သုံးပါ။"
          },
          "code": "from io import StringIO\nimport numpy as np\n\ndata = StringIO(\"units,price\\n2,3.5\\n4,2.0\\n\")\na = np.loadtxt(data, delimiter=\",\", skiprows=1)\nprint(a.tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[[2.0, 3.5], [4.0, 2.0]]"
        }
      ]
    }
  ]
};
