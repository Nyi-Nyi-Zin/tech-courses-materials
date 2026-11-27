export default {
  "id": "machine-learning",
  "name": "Machine Learning",
  "version": "scikit-learn 1.9.1",
  "intro": {
    "en": "Prepare features, train models, evaluate predictions, and avoid data leakage.",
    "my": "Feature ပြင်ဆင်၊ model train လုပ်၊ ခန့်မှန်းချက် အကဲဖြတ်ပြီး data leakage ရှောင်ပါ။"
  },
  "pages": [
    {
      "id": "features-and-target",
      "title": {
        "en": "Features, targets, and estimator basics",
        "my": "Features၊ Targets နှင့် Estimator အခြေခံ"
      },
      "intro": {
        "en": "Identify what the model sees, what it should predict, and how scikit-learn fits estimators.",
        "my": "Model က ဘာမြင်ရမလဲ၊ ဘာခန့်မှန်းမလဲ၊ scikit-learn က estimator ကို ဘယ်လို fit လုပ်လဲ လေ့လာပါ။"
      },
      "sources": [
        [
          "Getting started with scikit-learn",
          "https://scikit-learn.org/stable/getting_started.html"
        ],
        [
          "Common pitfalls and recommended practices",
          "https://scikit-learn.org/stable/common_pitfalls.html"
        ]
      ],
      "sections": [
        {
          "id": "supervised",
          "title": {
            "en": "Define X and y",
            "my": "X နဲ့ y သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "X is usually shaped as samples by features. y often contains one target per row. Regression predicts numerical values and classification predicts labels. Clustering groups rows without a labeled target.",
            "my": "X က ပုံမှန်အားဖြင့် sample ကို row၊ feature ကို column ထားပါတယ်။ y မှာ row တစ်ခုစီအတွက် target တစ်ခု ပါတတ်ပါတယ်။ Regression က ကိန်းဂဏန်း၊ classification က label ခန့်မှန်းပါတယ်။ Clustering က label target မရှိဘဲ row တွေကို အုပ်စုခွဲပါတယ်။"
          },
          "code": "import pandas as pd\n\nhomes = pd.DataFrame({\"area_m2\": [52, 64, 75], \"bedrooms\": [1, 2, 2], \"price_k\": [116, 153, 165]})\nX = homes[[\"area_m2\", \"bedrooms\"]]\ny = homes[\"price_k\"]\nprint(X.shape, y.shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(3, 2) (3,)"
        },
        {
          "id": "interface",
          "title": {
            "en": "Fit, predict, and transform",
            "my": "Fit၊ Predict နှင့် Transform"
          },
          "text": {
            "en": "fit learns from data. Predictive estimators use predict on new inputs. Transformers such as scalers learn parameters on training rows and apply them with transform. Keep features available at the moment a real prediction will be made.",
            "my": "fit က ဒေတာကနေ သင်ယူပါတယ်။ ခန့်မှန်းတဲ့ estimator က input အသစ်ကို predict နဲ့ ခန့်မှန်းပါတယ်။ Scaler လို transformer က training row ပေါ်မှာ parameter တွေ သင်ယူပြီး transform နဲ့ သုံးပါတယ်။ အပြင်မှာ ခန့်မှန်းမယ့်အချိန် တကယ်ရနိုင်တဲ့ feature တွေကိုပဲ ရွေးပါ။"
          }
        }
      ]
    },
    {
      "id": "train-test-split",
      "title": {
        "en": "Split data and compare with a baseline",
        "my": "ဒေတာခွဲ၍ Baseline နဲ့ ယှဉ်ခြင်း"
      },
      "intro": {
        "en": "Hold out rows for evaluation, and use a simple prediction rule as a reference.",
        "my": "အကဲဖြတ်ဖို့ row တစ်ချို့ ချန်ပါ။ နှိုင်းယှဉ်စံအဖြစ် ရိုးရှင်းတဲ့ ခန့်မှန်းနည်း သုံးပါ။"
      },
      "aliases": [
        "baseline"
      ],
      "sources": [
        [
          "train_test_split API",
          "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html"
        ],
        [
          "DummyRegressor API",
          "https://scikit-learn.org/stable/modules/generated/sklearn.dummy.DummyRegressor.html"
        ],
        [
          "Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ]
      ],
      "sections": [
        {
          "id": "split",
          "title": {
            "en": "Choose a split that matches the task",
            "my": "အလုပ်နဲ့ ကိုက်ညီတဲ့ Split ရွေးခြင်း"
          },
          "text": {
            "en": "For independent rows, train_test_split can shuffle and hold out part of the data. random_state makes that split repeatable. Consider stratify=y for classification when enough examples of each class exist. Use time-aware or group-aware splitting when rows are dependent.",
            "my": "Row တွေ သီးခြားဖြစ်ရင် train_test_split နဲ့ အစဉ်ရောပြီး တစ်ပိုင်း ချန်နိုင်ပါတယ်။ random_state နဲ့ တူညီတဲ့ split ပြန်ထုတ်နိုင်ပါတယ်။ Classification မှာ class တစ်ခုစီ sample လုံလောက်ရင် stratify=y သုံးနိုင်ပါတယ်။ Row တွေ အချိန်အလိုက် ဒါမှမဟုတ် group အလိုက် မှီခိုရင် အဲဒီပုံစံနဲ့ ခွဲပါ။"
          },
          "code": "from sklearn.model_selection import train_test_split\n\ntrain, test = train_test_split(list(range(20)), test_size=0.25, random_state=42)\nprint(len(train), len(test))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "15 5",
          "figure": {
            "src": "/docs/media/data/train-test-split-split.png",
            "width": 720,
            "height": 330,
            "alt": {
              "en": "Twenty records divide into fifteen training records and five test records.",
              "my": "Record 20 ကို training 15 ခုနဲ့ test 5 ခု ခွဲထားပါတယ်။"
            },
            "caption": {
              "en": "A test size of 0.25 holds out one-quarter of these records for evaluation.",
              "my": "test_size 0.25 ဆိုတော့ record ရဲ့ လေးပုံတစ်ပုံကို အကဲဖြတ်ဖို့ သီးခြားထားပါတယ်။"
            }
          }
        },
        {
          "id": "baseline",
          "title": {
            "en": "Build a simple comparison",
            "my": "ရိုးရှင်းတဲ့ နှိုင်းယှဉ်စံ တည်ဆောက်ခြင်း"
          },
          "text": {
            "en": "A median-price baseline learns the median of the training targets and predicts it for every test row. Compare models using the same untouched test rows and the same metric.",
            "my": "Median-price baseline က training target တွေရဲ့ median သင်ယူပြီး test row အားလုံးကို အဲဒီတန်ဖိုးပဲ ခန့်မှန်းပါတယ်။ Model တွေကို မထိထားတဲ့ test row တူတူ၊ metric တူတူနဲ့ ယှဉ်ပါ။"
          },
          "code": "from sklearn.dummy import DummyRegressor\n\nbaseline = DummyRegressor(strategy=\"median\")\nbaseline.fit([[1], [2], [3]], [5, 6, 20])\nprint(baseline.predict([[8], [9]]).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[6.0, 6.0]"
        }
      ]
    },
    {
      "id": "linear-regression",
      "title": {
        "en": "Linear regression and regression metrics",
        "my": "Linear Regression နှင့် Regression Metrics"
      },
      "intro": {
        "en": "Fit a numerical model and interpret prediction error in the target’s units.",
        "my": "ကိန်းဂဏန်း ခန့်မှန်းမော်ဒယ် fit လုပ်ပြီး အမှားပမာဏကို target ရဲ့ unit နဲ့ ဖတ်ပါ။"
      },
      "aliases": [
        "evaluate-metrics"
      ],
      "sources": [
        [
          "Linear models",
          "https://scikit-learn.org/stable/modules/linear_model.html"
        ],
        [
          "Model evaluation and scoring",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ]
      ],
      "sections": [
        {
          "id": "regression",
          "title": {
            "en": "Fit and predict",
            "my": "Fit လုပ်ပြီး ခန့်မှန်းခြင်း"
          },
          "text": {
            "en": "LinearRegression fits an intercept and coefficients by ordinary least squares. Predictions use the same feature columns in the same order. Coefficients alone do not establish a causal effect.",
            "my": "LinearRegression က ordinary least squares နဲ့ intercept နဲ့ coefficient တွေ fit လုပ်ပါတယ်။ ခန့်မှန်းတဲ့အခါ feature column တူတူကို အစဉ်တူတူ ပေးပါ။ Coefficient တစ်ခုတည်းနဲ့ အကြောင်းရင်းဖြစ်ကြောင်း မဆုံးဖြတ်နိုင်ပါ။"
          },
          "code": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression().fit([[1], [2], [3]], [3, 5, 7])\nprint(round(float(model.predict([[4]])[0]), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "9.0"
        },
        {
          "id": "metrics",
          "title": {
            "en": "Choose MAE, RMSE, or R²",
            "my": "MAE၊ RMSE သို့မဟုတ် R² ရွေးခြင်း"
          },
          "text": {
            "en": "MAE is the average absolute error and has the target’s units. RMSE gives greater weight to large errors and has the same units. R² describes performance relative to the mean-target baseline in the evaluation set and can be negative.",
            "my": "MAE က absolute error ပျမ်းမျှဖြစ်ပြီး target နဲ့ unit တူပါတယ်။ RMSE က error ကြီးတာကို ပိုအလေးပေးပြီး unit တူပါတယ်။ R² က evaluation set ရဲ့ target mean ကို baseline ထားပြီး ရလဒ်ကို ဖော်ပြပါတယ်။ အနုတ်လည်း ဖြစ်နိုင်ပါတယ်။"
          },
          "code": "from sklearn.metrics import mean_absolute_error\n\nactual = [100, 200, 300]\npredicted = [90, 210, 320]\nprint(round(mean_absolute_error(actual, predicted), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "13.33"
        }
      ]
    },
    {
      "id": "classification",
      "title": {
        "en": "Classification and confusion matrices",
        "my": "Classification နှင့် Confusion Matrices"
      },
      "intro": {
        "en": "Predict categorical labels and see which classes a classifier misses.",
        "my": "Category label ခန့်မှန်းပါ။ Classifier က ဘယ် class မှာ လွဲတတ်လဲ စစ်ပါ။"
      },
      "sources": [
        [
          "Decision trees",
          "https://scikit-learn.org/stable/modules/tree.html"
        ],
        [
          "Model evaluation and scoring",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ]
      ],
      "sections": [
        {
          "id": "classifier",
          "title": {
            "en": "Train a decision tree",
            "my": "Decision Tree Train လုပ်ခြင်း"
          },
          "text": {
            "en": "A decision tree learns feature splits that separate categories. Deep trees can memorize training details. Use a held-out set or cross-validation and choose tree settings on training data.",
            "my": "Decision tree က category တွေကို ခွဲပေးနိုင်တဲ့ feature split တွေ သင်ယူပါတယ်။ Tree နက်လွန်းရင် training data အသေးစိတ်တွေကို မှတ်မိသွားနိုင်ပါတယ်။ Held-out set ဒါမှမဟုတ် cross-validation သုံးပြီး tree setting ကို training data ပေါ်မှာ ရွေးပါ။"
          },
          "code": "from sklearn.tree import DecisionTreeClassifier\n\nX = [[40], [55], [95], [130]]\ny = [\"small\", \"small\", \"large\", \"large\"]\nmodel = DecisionTreeClassifier(max_depth=2, random_state=42).fit(X, y)\nprint(model.predict([[45], [120]]).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "['small', 'large']"
        },
        {
          "id": "confusion",
          "title": {
            "en": "Read errors by class",
            "my": "Class အလိုက် Error ဖတ်ခြင်း"
          },
          "text": {
            "en": "In scikit-learn’s confusion matrix, rows are true labels and columns are predicted labels. Precision asks how often positive predictions were correct. Recall asks how many true positives the model found. Inspect per-class scores when a class is rare.",
            "my": "scikit-learn confusion matrix မှာ row က label အမှန်၊ column က ခန့်မှန်း label ပါ။ Precision က positive လို့ ခန့်မှန်းတာထဲ ဘယ်လောက်မှန်လဲ စစ်ပါတယ်။ Recall က တကယ် positive ဖြစ်တာထဲ ဘယ်လောက် ရှာတွေ့လဲ စစ်ပါတယ်။ ရှားတဲ့ class ရှိရင် class တစ်ခုစီရဲ့ score ကြည့်ပါ။"
          },
          "code": "from sklearn.metrics import confusion_matrix\n\nprint(confusion_matrix([0, 0, 1, 1], [0, 1, 1, 1], labels=[0, 1]).tolist())",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[[1, 1], [0, 2]]",
          "figure": {
            "src": "/docs/media/data/classification-confusion.png",
            "width": 720,
            "height": 345,
            "alt": {
              "en": "Actual class 0 has one prediction of each class. Actual class 1 has zero predictions of class 0 and two of class 1.",
              "my": "Actual class 0 ကို 0 လို့ တစ်ကြိမ်၊ 1 လို့ တစ်ကြိမ် ခန့်မှန်းထားပါတယ်။ Actual class 1 ကို 0 လို့ မခန့်မှန်းခဲ့ဘဲ 1 လို့ နှစ်ကြိမ် ခန့်မှန်းထားပါတယ်။"
            },
            "caption": {
              "en": "With class 1 as positive, there is one false positive and zero false negatives.",
              "my": "Class 1 ကို positive လို့ယူရင် false positive တစ်ခုရှိပြီး false negative သုညပါ။"
            }
          }
        }
      ]
    },
    {
      "id": "pipeline-and-leakage",
      "title": {
        "en": "Preprocessing pipelines and data leakage",
        "my": "Preprocessing Pipelines နှင့် Data Leakage"
      },
      "intro": {
        "en": "Combine preprocessing and prediction so that each learned step sees only training data.",
        "my": "Preprocessing နဲ့ prediction ပေါင်းပါ။ သင်ယူတဲ့ step တစ်ခုစီကို training data ပဲ မြင်အောင် ထားပါ။"
      },
      "sources": [
        [
          "Pipelines and composite estimators",
          "https://scikit-learn.org/stable/modules/compose.html"
        ],
        [
          "Common pitfalls and recommended practices",
          "https://scikit-learn.org/stable/common_pitfalls.html"
        ]
      ],
      "sections": [
        {
          "id": "leakage",
          "title": {
            "en": "Keep the test set out of fitting",
            "my": "Test Set ကို Fit လုပ်ရာမှာ မသုံးခြင်း"
          },
          "text": {
            "en": "Leakage means information unavailable at prediction time affects training or evaluation. Split before fitting scalers, imputers, or feature selectors. A Pipeline fits transforms on training data and reuses those fitted transforms on test rows.",
            "my": "Leakage ဆိုတာ တကယ် ခန့်မှန်းတဲ့အချိန် မရနိုင်တဲ့ အချက်တွေ training သို့မဟုတ် evaluation ထဲ ပါသွားတာပါ။ Scaler၊ imputer၊ feature selector မ fit ခင် data ခွဲပါ။ Pipeline က transform တွေကို training data နဲ့ fit လုပ်ပြီး အဲဒီအတိုင်း test row ပေါ် ပြန်သုံးပါတယ်။"
          },
          "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nmodel = make_pipeline(StandardScaler(), LinearRegression())\nmodel.fit([[2], [4], [6]], [5, 9, 13])\nprint(round(float(model.predict([[8]])[0]), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "17.0",
          "figure": {
            "src": "/docs/media/data/pipeline-and-leakage-leakage.png",
            "width": 720,
            "height": 355,
            "alt": {
              "en": "Training data flows to fit preprocessing and the model. Validation data flows through the fitted steps for predictions.",
              "my": "Training data နဲ့ preprocessing နဲ့ model ကို fit လုပ်ပါတယ်။ Validation data အတွက် fit လုပ်ပြီးသား အဆင့်တွေကနေ ခန့်မှန်းချက် ထုတ်ပါတယ်။"
            },
            "caption": {
              "en": "Each cross-validation fold fits its own pipeline on that fold’s training portion.",
              "my": "Cross-validation fold တစ်ခုစီမှာ အဲဒီ fold ရဲ့ training data နဲ့ သီးသန့် pipeline fit လုပ်ပါတယ်။"
            }
          }
        },
        {
          "id": "mixed-columns",
          "title": {
            "en": "Handle mixed data types",
            "my": "ရောနေတဲ့ Data Types ကို ကိုင်တွယ်ခြင်း"
          },
          "text": {
            "en": "Use ColumnTransformer when different columns need different transformations. For example, impute or scale numeric values and one-hot encode category values. Put the ColumnTransformer inside the pipeline so its fitted parameters stay within each training fold.",
            "my": "Column အလိုက် transform နည်း ကွာရင် ColumnTransformer သုံးပါ။ ဥပမာ number တွေကို impute သို့မဟုတ် scale လုပ်ပြီး category တွေကို one-hot encode လုပ်ပါ။ Training fold တစ်ခုစီထဲမှာပဲ parameter တွေ fit ဖြစ်ဖို့ ColumnTransformer ကို pipeline ထဲ ထည့်ပါ။"
          }
        }
      ]
    },
    {
      "id": "validation-and-clustering",
      "title": {
        "en": "Cross-validation, overfitting, and clustering",
        "my": "Cross-validation၊ Overfitting နှင့် Clustering"
      },
      "intro": {
        "en": "Estimate performance across splits and learn how K-means groups unlabeled rows.",
        "my": "Split အမျိုးမျိုးမှာ model ရလဒ် တိုင်းပါ။ Label မပါတဲ့ row တွေကို K-means ဘယ်လို စုဖွဲ့လဲ လေ့လာပါ။"
      },
      "aliases": [
        "cross-validation",
        "clustering"
      ],
      "sources": [
        [
          "Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ],
        [
          "Clustering algorithms",
          "https://scikit-learn.org/stable/modules/clustering.html"
        ],
        [
          "Model evaluation and scoring",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ]
      ],
      "sections": [
        {
          "id": "cross-validation",
          "title": {
            "en": "Validate on several folds",
            "my": "Fold အများကြီးနဲ့ အကဲဖြတ်ခြင်း"
          },
          "text": {
            "en": "Cross-validation repeatedly fits on training folds and scores on their held-out validation folds. Use it on training data to choose settings, then evaluate once on the final test set. A gap between high training scores and lower validation scores can indicate overfitting.",
            "my": "Cross-validation က training fold တွေပေါ် ထပ်ခါတလဲလဲ fit လုပ်ပြီး ဖယ်ထားတဲ့ validation fold တွေပေါ် score တိုင်းပါတယ်။ Training data မှာပဲ setting ရွေးဖို့ သုံးပြီး နောက်ဆုံး test set ပေါ် တစ်ခါ အကဲဖြတ်ပါ။ Training score မြင့်ပြီး validation score သိသိသာသာ နိမ့်ရင် overfit ဖြစ်နိုင်ပါတယ်။"
          },
          "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import cross_val_score\n\nX = [[1], [2], [3], [4], [5], [6]]\ny = [3, 5, 7, 9, 11, 13]\nscores = cross_val_score(LinearRegression(), X, y, cv=3, scoring=\"neg_mean_absolute_error\")\nprint([round(-float(score) + 0.0, 6) for score in scores])",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[0.0, 0.0, 0.0]"
        },
        {
          "id": "clustering",
          "title": {
            "en": "Group rows without labels",
            "my": "Label မပါဘဲ အုပ်စုခွဲခြင်း"
          },
          "text": {
            "en": "K-means assigns points to centers by Euclidean distance and seeks low within-cluster squared distance. Scale features when their units would otherwise dominate the distances. Cluster label numbers can change without changing the grouping.",
            "my": "K-means က Euclidean distance နဲ့ အနီးဆုံး center ကို point တွဲပြီး cluster အတွင်း squared distance နည်းအောင် ရှာပါတယ်။ Unit ကွာတာကြောင့် distance ကို feature တစ်ခုက လွှမ်းမိုးရင် scale လုပ်ပါ။ အုပ်စုတူပေမယ့် label number ပြောင်းနိုင်ပါတယ်။"
          },
          "code": "from sklearn.cluster import KMeans\n\npoints = [[1], [2], [3], [9], [10], [11]]\nmodel = KMeans(n_clusters=2, n_init=10, random_state=42).fit(points)\nprint(sorted(model.cluster_centers_.ravel().tolist()))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "[2.0, 10.0]"
        }
      ]
    },
    {
      "id": "house-prices",
      "title": {
        "en": "House price prediction walkthrough",
        "my": "အိမ်ဈေးခန့်မှန်းခြင်း အစအဆုံး ရှင်းလင်းချက်"
      },
      "intro": {
        "en": "Fit a median baseline and a linear regression on the same data and compare test errors.",
        "my": "Data တူတူနဲ့ median baseline၊ linear regression နှစ်ခု fit လုပ်ပြီး test error ယှဉ်ပါ။"
      },
      "dataset": "house_prices.csv",
      "aliases": [
        "house-price-report"
      ],
      "sources": [
        [
          "Linear models",
          "https://scikit-learn.org/stable/modules/linear_model.html"
        ],
        [
          "Model evaluation and scoring",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ],
        [
          "Common pitfalls and recommended practices",
          "https://scikit-learn.org/stable/common_pitfalls.html"
        ]
      ],
      "sections": [
        {
          "id": "data-and-target",
          "title": {
            "en": "Define the prediction problem",
            "my": "ခန့်မှန်းမယ့် ပြဿနာ သတ်မှတ်ခြင်း"
          },
          "text": {
            "en": "Use area, bedroom count, and property age to estimate price_k, a price in thousands of the synthetic dataset’s units. The small example demonstrates a workflow from data to evaluation.",
            "my": "Area၊ bedroom အရေအတွက်နဲ့ အိမ်သက်တမ်းကို သုံးပြီး price_k ခန့်မှန်းပါ။ price_k က synthetic dataset unit ရဲ့ ထောင်ဂဏန်းပါ။ ဒီဖိုင်သေးသေးက ဒေတာကနေ အကဲဖြတ်တဲ့အထိ workflow ပြဖို့ပါ။"
          }
        },
        {
          "id": "fit-and-evaluate",
          "title": {
            "en": "Compare predictions on the same test rows",
            "my": "Test Row တူတူပေါ်မှာ ခန့်မှန်းချက် ယှဉ်ခြင်း"
          },
          "text": {
            "en": "Save the CSV next to your script. Split once, train both estimators only on the training data, and calculate MAE for their predictions on the same test rows.",
            "my": "CSV ကို script ဘေးမှာ သိမ်းပါ။ Data ကို တစ်ခါ ခွဲပြီး estimator နှစ်ခုလုံး training data နဲ့ပဲ train လုပ်ပါ။ Test row တူတူအတွက် ခန့်မှန်းချက် MAE တွက်ပါ။"
          },
          "code": "import pandas as pd\nfrom sklearn.dummy import DummyRegressor\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\nfrom sklearn.model_selection import train_test_split\n\nhomes = pd.read_csv(\"house_prices.csv\")\nX = homes[[\"area_m2\", \"bedrooms\", \"age_years\"]]\ny = homes[\"price_k\"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)\n\nmodels = {\"Median baseline\": DummyRegressor(strategy=\"median\"), \"Linear regression\": LinearRegression()}\nfor name, model in models.items():\n    predictions = model.fit(X_train, y_train).predict(X_test)\n    print(f\"{name}: {mean_absolute_error(y_test, predictions):.2f}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "Median baseline: 115.60\nLinear regression: 4.91"
        },
        {
          "id": "interpret",
          "title": {
            "en": "Interpret the result",
            "my": "ရလဒ် ဖတ်ခြင်း"
          },
          "text": {
            "en": "The trained model has lower test MAE on these five synthetic houses. Different splits can give different scores. Real-world performance needs representative data and validation that accounts for the market, time, or location of future predictions.",
            "my": "Train လုပ်ထားတဲ့ model က ဒီ synthetic test အိမ် ငါးလုံးမှာ MAE ပိုနည်းပါတယ်။ Split ကွာရင် score ကွာနိုင်ပါတယ်။ တကယ်သုံးဖို့ ကိုယ်စားပြုနိုင်တဲ့ data နဲ့ နောင်ခန့်မှန်းမယ့် ဈေးကွက်၊ အချိန် သို့မဟုတ် နေရာကို ထည့်တဲ့ validation လိုပါတယ်။"
          }
        }
      ]
    },
    {
      "id": "learning-curves",
      "title": {
        "en": "Diagnose models with learning curves",
        "my": "Learning Curve နဲ့ Model စွမ်းဆောင်ရည် စစ်ခြင်း"
      },
      "intro": {
        "en": "Compare training and validation scores as the amount of training data grows.",
        "my": "Training data များလာတာနဲ့အမျှ training score နဲ့ validation score ဘယ်လို ပြောင်းလဲလဲ ယှဉ်ကြည့်ပါ။"
      },
      "sources": [
        [
          "scikit-learn learning and validation curves",
          "https://scikit-learn.org/stable/modules/learning_curve.html"
        ],
        [
          "scikit-learn cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ],
        [
          "scikit-learn common pitfalls and data leakage",
          "https://scikit-learn.org/stable/common_pitfalls.html"
        ]
      ],
      "sections": [
        {
          "id": "training-size",
          "title": {
            "en": "Plot scores across training sizes",
            "my": "Training Size အလိုက် Score များ ဆွဲခြင်း"
          },
          "text": {
            "en": "learning_curve fits a fresh model with different training-set sizes in each cross-validation split. Plot the mean training and validation accuracy at each size. Shuffling the subset selection here suits the independent records in this example. Choose a splitter that matches time ordering or grouped data when those structures exist.",
            "my": "learning_curve က cross-validation split တစ်ခုစီမှာ training data အရွယ်အစား အမျိုးမျိုးနဲ့ model အသစ်စီ fit လုပ်ပါတယ်။ အရွယ်တစ်ခုစီအတွက် training နဲ့ validation accuracy ပျမ်းမျှကို ဆွဲပါ။ ဒီဥပမာမှာ record တွေ သီးခြားဖြစ်လို့ training subset ကို shuffle လုပ်ပါတယ်။ အချိန်အစဉ် သို့မဟုတ် group ရှိတဲ့ data အတွက် အဲဒီဖွဲ့စည်းပုံနဲ့ ကိုက်တဲ့ splitter ရွေးပါ။"
          },
          "code": "import matplotlib.pyplot as plt\nfrom sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import StratifiedKFold, learning_curve\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = load_iris(return_X_y=True)\nmodel = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nsizes, train, valid = learning_curve(\n    model, X, y, train_sizes=[0.15, 0.35, 0.60, 1.0], cv=cv,\n    scoring=\"accuracy\", shuffle=True, random_state=42,\n)\n\nfig, ax = plt.subplots(layout=\"constrained\")\nax.plot(sizes, train.mean(axis=1), \"o-\", label=\"Training\")\nax.plot(sizes, valid.mean(axis=1), \"s--\", label=\"Validation\")\nax.set(xlabel=\"Training examples per fold\", ylabel=\"Mean accuracy\")\nax.legend()\nplt.show()",
          "codeLanguage": "python",
          "displayOnly": true,
          "figure": {
            "src": "/docs/media/data/learning-curves-training-size.png",
            "width": 720,
            "height": 409,
            "alt": {
              "en": "A plot shows mean training and validation accuracy at four increasing training sizes, with one line for each score.",
              "my": "Training data အရွယ်အစား လေးမျိုးအတွက် ပျမ်းမျှ training accuracy နဲ့ validation accuracy ကို line တစ်ကြောင်းစီနဲ့ ပြပါတယ်။"
            },
            "caption": {
              "en": "At each training size, compare the two scores and the gap between them.",
              "my": "Training size တစ်ခုစီမှာ score နှစ်ခုနဲ့ အဲဒီကြားက ကွာဟချက်ကို ယှဉ်ကြည့်ပါ။"
            }
          }
        },
        {
          "id": "interpretation",
          "title": {
            "en": "Interpret the gap and the score levels",
            "my": "Score အဆင့်နှင့် ကွာဟချက်ကို ဖတ်ခြင်း"
          },
          "text": {
            "en": "A persistent gap with a high training score can suggest overfitting. Two similarly low curves can suggest underfitting or limited predictive features. Compare against a baseline and check variation across folds. Keep a separate test set for the final evaluation when choosing models based on validation results.",
            "my": "Training score မြင့်နေပြီး validation score နဲ့ ကွာဟချက် ဆက်ရှိရင် overfitting ဖြစ်နိုင်ပါတယ်။ နှစ်ခုလုံး နိမ့်ပြီး နီးကပ်နေရင် underfitting ဖြစ်နိုင်သလို feature တွေမှာ ခန့်မှန်းဖို့ လုံလောက်တဲ့ အချက်အလက် မပါနိုင်ပါ။ Baseline နဲ့ ယှဉ်ပြီး fold အလိုက် ကွာဟမှုကို စစ်ပါ။ Validation ရလဒ်နဲ့ model ရွေးပြီးရင် နောက်ဆုံး အကဲဖြတ်ဖို့ သီးခြား test set ထားပါ။"
          }
        }
      ]
    },
    {
      "id": "feature-engineering",
      "title": {
        "en": "Feature engineering for numeric and categorical data",
        "my": "Numeric နှင့် Categorical Data အတွက် Feature Engineering"
      },
      "intro": {
        "en": "Choose features available at prediction time and fit column-specific transforms inside a pipeline.",
        "my": "ခန့်မှန်းချိန်မှာ ရနိုင်တဲ့ feature တွေ ရွေးပြီး column အလိုက် transform ကို pipeline ထဲ fit လုပ်ပါ။"
      },
      "sources": [
        [
          "Preprocessing data",
          "https://scikit-learn.org/stable/modules/preprocessing.html"
        ],
        [
          "Pipelines and composite estimators",
          "https://scikit-learn.org/stable/modules/compose.html"
        ],
        [
          "Common pitfalls and data leakage",
          "https://scikit-learn.org/stable/common_pitfalls.html"
        ]
      ],
      "sections": [
        {
          "id": "design",
          "title": {
            "en": "Design features around prediction time",
            "my": "ခန့်မှန်းမယ့် အချိန်အလိုက် Feature ဆောက်ခြင်း"
          },
          "text": {
            "en": "Start with fields available when a prediction must be made. Logically useful features can include ratios, totals, or calendar parts. Compute historical aggregates from earlier data only. Apply the same feature definitions at training and inference time.",
            "my": "ခန့်မှန်းရမယ့် အချိန်မှာ တကယ်ရနိုင်တဲ့ field တွေနဲ့ စပါ။ Ratio၊ total သို့မဟုတ် calendar အပိုင်းတွေ အသုံးဝင်နိုင်ပါတယ်။ အရင်အချက်အလက် စုတွက်ရင် ရှေ့ကဒေတာပဲ သုံးပါ။ Training နဲ့ inference မှာ feature definition တူတူ သုံးပါ။"
          }
        },
        {
          "id": "pipeline",
          "title": {
            "en": "Impute, scale, and encode by column",
            "my": "Column အလိုက် Impute၊ Scale နှင့် Encode လုပ်ခြင်း"
          },
          "text": {
            "en": "ColumnTransformer applies different transformations to column groups. Use an imputer for missing values when appropriate. OneHotEncoder can ignore unknown categories for inference. Fit the transformer together with the estimator during validation.",
            "my": "ColumnTransformer က column group အလိုက် transformation မတူတာ သုံးပါတယ်။ သင့်တော်တဲ့အခါ missing value အတွက် imputer သုံးပါ။ OneHotEncoder က inference မှာ မတွေ့ဖူးတဲ့ category ကို ignore လုပ်နိုင်ပါတယ်။ Validation မှာ transformer နဲ့ estimator ကို အတူ fit လုပ်ပါ။"
          },
          "code": "import pandas as pd\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import OneHotEncoder, StandardScaler\n\ntrain = pd.DataFrame({\"price\": [2.0, 3.0, None, 8.0, 9.0, 7.0],\n                      \"store\": [\"A\", \"B\", \"A\", \"B\", \"A\", \"B\"]})\npreprocess = ColumnTransformer([\n    (\"num\", make_pipeline(SimpleImputer(strategy=\"median\"), StandardScaler()), [\"price\"]),\n    (\"store\", OneHotEncoder(handle_unknown=\"ignore\"), [\"store\"]),\n])\nmodel = make_pipeline(preprocess, LogisticRegression())\nmodel.fit(train, [0, 0, 0, 1, 1, 1])\nnew = pd.DataFrame({\"price\": [5.0], \"store\": [\"C\"]})\nprint(model.predict_proba(new).shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(1, 2)"
        }
      ]
    },
    {
      "id": "hyperparameter-tuning",
      "title": {
        "en": "Tune hyperparameters with cross-validation",
        "my": "Cross-validation ဖြင့် Hyperparameter Tuning လုပ်ခြင်း"
      },
      "intro": {
        "en": "Search a documented parameter space and keep the final test set for evaluation.",
        "my": "သတ်မှတ်ထားတဲ့ parameter အပိုင်းကို ရှာပြီး နောက်ဆုံး test set ကို evaluation အတွက် ချန်ထားပါ။"
      },
      "sources": [
        [
          "Tuning estimator hyperparameters",
          "https://scikit-learn.org/stable/modules/grid_search.html"
        ],
        [
          "Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ]
      ],
      "sections": [
        {
          "id": "search",
          "title": {
            "en": "Choose a search strategy and metric",
            "my": "Search နည်းနှင့် Metric ရွေးခြင်း"
          },
          "text": {
            "en": "Parameters are fitted from training data. Hyperparameters configure the estimator before fitting. GridSearchCV evaluates a supplied grid with cross-validation. RandomizedSearchCV samples from the search space using a fixed evaluation budget.",
            "my": "Parameter က training data ကနေ သင်ယူတာပါ။ Hyperparameter က fit မလုပ်ခင် estimator ကို ပြင်တာပါ။ GridSearchCV က ပေးထားတဲ့ grid ကို cross-validation နဲ့ စစ်ပါတယ်။ RandomizedSearchCV က အကြိမ်ရေ သတ်မှတ်ပြီး search space ထဲက ရွေးစစ်ပါတယ်။"
          }
        },
        {
          "id": "evaluate",
          "title": {
            "en": "Tune on training data, then evaluate on the holdout",
            "my": "Training Data မှာ Tune လုပ်ပြီး Holdout နဲ့ တိုင်းခြင်း"
          },
          "text": {
            "en": "Choose folds and a metric for your problem. Use pipeline step names such as model__C in a parameter grid. Evaluate the refitted best pipeline once on the holdout. Use an untouched test set or nested cross-validation when estimating the performance of the tuning process.",
            "my": "ပြဿနာနဲ့ ကိုက်တဲ့ fold နဲ့ metric ရွေးပါ။ Parameter grid မှာ model__C လို pipeline step နာမည်သုံးပါ။ Holdout မှာ ပြန် fit ထားတဲ့ best pipeline ကို တစ်ခါ အကဲဖြတ်ပါ။ Tuning အဆင့်က စွမ်းဆောင်ရည်ကို တိုင်းဖို့ မထိထားတဲ့ test set သို့မဟုတ် nested cross-validation သုံးပါ။"
          },
          "code": "from sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import GridSearchCV, train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=42)\npipeline = Pipeline([(\"scale\", StandardScaler()), (\"model\", LogisticRegression(max_iter=500))])\nsearch = GridSearchCV(pipeline, {\"model__C\": [0.1, 1, 10]}, cv=3, scoring=\"f1_macro\")\nsearch.fit(X_train, y_train)\nprint(len(search.cv_results_[\"params\"]))\nprint(search.score(X_test, y_test) > 0.8)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "3\nTrue"
        }
      ]
    },
    {
      "id": "classification-thresholds",
      "title": {
        "en": "Handle imbalanced classes and choose a threshold",
        "my": "Imbalanced Classes နှင့် Threshold ရွေးခြင်း"
      },
      "intro": {
        "en": "Use metrics that reflect decision costs and tune a threshold without using the final test set.",
        "my": "ဆုံးဖြတ်ချက်ကုန်ကျစရိတ်ကို ထင်ဟပ်တဲ့ metric သုံးပြီး နောက်ဆုံး test set မသုံးဘဲ threshold ရွေးပါ။"
      },
      "sources": [
        [
          "Model evaluation",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ],
        [
          "Decision threshold tuning",
          "https://scikit-learn.org/stable/modules/classification_threshold.html"
        ]
      ],
      "sections": [
        {
          "id": "metrics",
          "title": {
            "en": "Choose metrics for rare outcomes",
            "my": "ဖြစ်ခဲတဲ့ Outcome အတွက် Metric ရွေးခြင်း"
          },
          "text": {
            "en": "Accuracy can be high when the positive class is rare and the model predicts almost every row as negative. Inspect precision, recall, and the confusion matrix. Precision-recall curves show the trade-off as the classification threshold changes.",
            "my": "Positive class ရှားပြီး model က row အများစုကို negative ခန့်မှန်းရင် accuracy မြင့်နိုင်ပါတယ်။ Precision၊ recall နဲ့ confusion matrix စစ်ပါ။ Threshold ပြောင်းရင် precision နဲ့ recall ဘယ်လို လဲလှယ်ရလဲ precision-recall curve က ပြပါတယ်။"
          }
        },
        {
          "id": "threshold",
          "title": {
            "en": "Turn probabilities into a decision",
            "my": "Probability ကို ဆုံးဖြတ်ချက်အဖြစ် ပြောင်းခြင်း"
          },
          "text": {
            "en": "Lowering a threshold can detect more positive cases and produce more false alarms. Pick a threshold using validation data and explicit costs, then report performance on untouched test data.",
            "my": "Threshold လျှော့ရင် positive case ပိုတွေ့နိုင်သလို false alarm ပိုများနိုင်ပါတယ်။ Validation data နဲ့ သတ်မှတ်ထားတဲ့ cost တွေသုံးပြီး threshold ရွေးပါ။ ပြီးရင် မထိထားတဲ့ test data ပေါ် performance တင်ပြပါ။"
          },
          "code": "import numpy as np\nfrom sklearn.metrics import precision_score, recall_score\n\ny_true = [0, 0, 1, 1]\nscores = np.array([0.10, 0.55, 0.45, 0.80])\nfor cutoff in [0.60, 0.40]:\n    flags = scores >= cutoff\n    print(f\"{cutoff:.2f}: precision={precision_score(y_true, flags):.2f}, \"\n          f\"recall={recall_score(y_true, flags):.2f}\")",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "0.60: precision=1.00, recall=0.50\n0.40: precision=0.67, recall=1.00"
        }
      ]
    },
    {
      "id": "trees-and-ensembles",
      "title": {
        "en": "Decision trees, random forests, and boosting",
        "my": "Decision Trees၊ Random Forests နှင့် Boosting"
      },
      "intro": {
        "en": "Choose a tree-based baseline and understand how ensemble methods combine estimators.",
        "my": "Tree-based baseline ရွေးပြီး ensemble method က estimator တွေကို ဘယ်လို ပေါင်းလဲ နားလည်ပါ။"
      },
      "sources": [
        [
          "Decision trees",
          "https://scikit-learn.org/stable/modules/tree.html"
        ],
        [
          "Ensemble models",
          "https://scikit-learn.org/stable/modules/ensemble.html"
        ]
      ],
      "sections": [
        {
          "id": "tree",
          "title": {
            "en": "Control tree complexity",
            "my": "Tree ရှုပ်ထွေးမှုကို ထိန်းခြင်း"
          },
          "text": {
            "en": "Decision trees learn splits by feature and threshold. A deep tree can overfit. Limit parameters such as max_depth or min_samples_leaf, and evaluate on data outside training.",
            "my": "Decision tree က feature နဲ့ threshold အလိုက် ခွဲပုံ သင်ယူပါတယ်။ Tree အရမ်းနက်ရင် overfit ဖြစ်နိုင်ပါတယ်။ max_depth သို့မဟုတ် min_samples_leaf လို parameter နဲ့ ထိန်းပြီး training အပြင်က data ပေါ် အကဲဖြတ်ပါ။"
          }
        },
        {
          "id": "ensembles",
          "title": {
            "en": "Compare averaging and sequential improvement",
            "my": "ပျမ်းမျှယူခြင်းနှင့် အဆင့်လိုက် ပြင်ခြင်း ယှဉ်ခြင်း"
          },
          "text": {
            "en": "Random forests average many randomized trees. Gradient boosting adds trees sequentially to improve the current model for a loss function. Compare both to a simple baseline using the same validation plan.",
            "my": "Random forest က randomize လုပ်ထားတဲ့ tree အများကြီးရဲ့ result ပျမ်းမျှယူပါတယ်။ Gradient boosting က loss နည်းလာဖို့ tree တွေ အစဉ်လိုက် ထပ်ထည့်ပါတယ်။ Validation plan တူတူနဲ့ ရိုးရှင်းတဲ့ baseline ကိုပါ ယှဉ်ပါ။"
          },
          "code": "from sklearn.datasets import load_iris\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\n\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, stratify=y, random_state=42)\nmodel = RandomForestClassifier(n_estimators=30, max_depth=4, random_state=42)\nmodel.fit(X_train, y_train)\nprint(len(model.estimators_))\nprint(model.score(X_test, y_test) > 0.8)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "30\nTrue"
        }
      ]
    },
    {
      "id": "pca-and-dimensionality",
      "title": {
        "en": "Reduce dimensions with PCA",
        "my": "PCA ဖြင့် Dimension လျှော့ခြင်း"
      },
      "intro": {
        "en": "Project numeric features into fewer components, and validate what that choice does to a downstream model.",
        "my": "Numeric feature တွေကို component ပိုနည်းတဲ့ ပုံစံပြောင်းပြီး နောက်ဆက်တွဲ model ပေါ် သက်ရောက်မှု စစ်ပါ။"
      },
      "sources": [
        [
          "Decomposing signals into components",
          "https://scikit-learn.org/stable/modules/decomposition.html"
        ],
        [
          "Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ]
      ],
      "sections": [
        {
          "id": "components",
          "title": {
            "en": "Read components and explained variance",
            "my": "Components နှင့် Explained Variance ဖတ်ခြင်း"
          },
          "text": {
            "en": "Principal component analysis creates orthogonal directions that capture variance. scikit-learn PCA centers the input. Use a scaler first when feature units or scales would otherwise dominate. Explained variance measures how much variation the chosen components retain.",
            "my": "Principal component analysis က ပြောင်းလဲမှုကို ဖမ်းယူတဲ့ ထောင့်မှန်ကျ direction တွေ ဖန်တီးပါတယ်။ scikit-learn PCA က input ကို mean ဗဟိုညှိပါတယ်။ Feature unit နဲ့ scale ကွာလွန်းရင် အရင် scale လုပ်ပါ။ Explained variance က ရွေးထားတဲ့ component တွေ ဒေတာပြောင်းလဲမှု ဘယ်လောက် ထိန်းထားနိုင်လဲ ပြပါတယ်။"
          },
          "code": "from sklearn.datasets import load_iris\nfrom sklearn.decomposition import PCA\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nX, _ = load_iris(return_X_y=True)\nreducer = make_pipeline(StandardScaler(), PCA(n_components=2))\ncoordinates = reducer.fit_transform(X)\nprint(X.shape, coordinates.shape)",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "(150, 4) (150, 2)"
        },
        {
          "id": "tradeoffs",
          "title": {
            "en": "Compare a reduced model with a baseline",
            "my": "Dimension လျှော့ထားတဲ့ Model ကို Baseline နဲ့ ယှဉ်ခြင်း"
          },
          "text": {
            "en": "In a prediction pipeline, fit PCA on each training fold and transform its validation fold. Compare against the same estimator without PCA. A low-variance component can still carry predictive information, so use the appropriate validation metric to choose how many components to retain.",
            "my": "Prediction pipeline မှာ PCA ကို training fold တစ်ခုစီမှာ fit လုပ်ပြီး validation fold ကို transform လုပ်ပါ။ PCA မပါဘဲ estimator တူတူနဲ့ ယှဉ်ပါ။ Variance နည်းတဲ့ component ကလည်း ခန့်မှန်းဖို့ အသုံးဝင်နိုင်လို့ component အရေအတွက် ရွေးရာမှာ ကိုက်ညီတဲ့ validation metric သုံးပါ။"
          }
        }
      ]
    },
    {
      "id": "time-aware-validation",
      "title": {
        "en": "Validate models on time-ordered or grouped data",
        "my": "အချိန်အစဉ် သို့မဟုတ် Group အလိုက် Model စစ်ခြင်း"
      },
      "intro": {
        "en": "Avoid training on the future or on records from the same entity as the evaluation rows.",
        "my": "နောင်ကဒေတာကို training ထဲ မထည့်ပါနဲ့။ Evaluation row နဲ့ entity တူတဲ့ record တွေကို ခွဲရာမှာ သတိထားပါ။"
      },
      "sources": [
        [
          "Cross-validation",
          "https://scikit-learn.org/stable/modules/cross_validation.html"
        ],
        [
          "TimeSeriesSplit API",
          "https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.TimeSeriesSplit.html"
        ]
      ],
      "sections": [
        {
          "id": "time",
          "title": {
            "en": "Keep training before evaluation",
            "my": "Training ကို Evaluation ရှေ့မှာ ထားခြင်း"
          },
          "text": {
            "en": "In forecasting, a shuffled split can allow future observations into training. Sort by time and validate against later observations. TimeSeriesSplit expands training windows and can leave a gap before evaluation. Standard folds assume evenly spaced observations for comparable time intervals.",
            "my": "Forecasting မှာ shuffle split သုံးရင် နောင် observation က training ထဲ ဝင်နိုင်ပါတယ်။ အချိန်အစဉ်စီပြီး နောက်ကျ observation ပေါ် အကဲဖြတ်ပါ။ TimeSeriesSplit က training window ကို တဖြည်းဖြည်း ချဲ့ပြီး evaluation ရှေ့ gap ချန်နိုင်ပါတယ်။ ကြာချိန်တူ fold လိုရင် observation ကြား အချိန်အကွာ ညီဖို့ လိုပါတယ်။"
          },
          "code": "import numpy as np\nfrom sklearn.model_selection import TimeSeriesSplit\n\nrows = np.arange(8)\nfor train, test in TimeSeriesSplit(n_splits=2, test_size=2, gap=1).split(rows):\n    print(train[-1], test[0])",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "2 4\n4 6"
        },
        {
          "id": "groups",
          "title": {
            "en": "Keep each entity in one fold at a time",
            "my": "Entity တစ်ခုစီကို တစ်ကြိမ်မှာ Fold တစ်ခုထဲ ထားခြင်း"
          },
          "text": {
            "en": "If several rows share a customer, order, or session, group by that entity. GroupKFold keeps test groups disjoint from train groups in each split. Choose the group that matches what will be new at prediction time.",
            "my": "Customer၊ order သို့မဟုတ် session တူတဲ့ row တွေရှိရင် အဲဒီ entity နဲ့ စုပါ။ GroupKFold က split တစ်ခုစီမှာ test group ကို train group ထဲ မပါအောင် ခွဲပါတယ်။ ခန့်မှန်းချိန်မှာ ဘာအသစ်ဖြစ်မလဲနဲ့ ကိုက်တဲ့ group ရွေးပါ။"
          }
        }
      ]
    },
    {
      "id": "model-deployment",
      "title": {
        "en": "Save a model and deploy it for inference",
        "my": "Model သိမ်း၍ Inference အတွက် Deploy လုပ်ခြင်း"
      },
      "intro": {
        "en": "Package a fitted pipeline with an input contract and verify predictions in its serving environment.",
        "my": "Fit လုပ်ပြီးသား pipeline ကို input contract နဲ့ အတူ သိမ်းပြီး serving environment မှာ ခန့်မှန်းချက် စစ်ပါ။"
      },
      "sources": [
        [
          "Model persistence",
          "https://scikit-learn.org/stable/model_persistence.html"
        ],
        [
          "Model evaluation",
          "https://scikit-learn.org/stable/modules/model_evaluation.html"
        ]
      ],
      "sections": [
        {
          "id": "save",
          "title": {
            "en": "Save and reload a fitted pipeline",
            "my": "Fitted Pipeline ကို သိမ်းပြီး ပြန်ဖွင့်ခြင်း"
          },
          "text": {
            "en": "Save preprocessing and the estimator together. Record feature names, dependency versions, model version, and test metrics. joblib uses pickle-based loading, so load only a trusted artifact you created or verified. Use matching package versions for scikit-learn model persistence.",
            "my": "Preprocessing နဲ့ estimator ကို အတူ သိမ်းပါ။ Feature name၊ dependency version၊ model version နဲ့ test metric မှတ်ပါ။ joblib က pickle အခြေခံလို့ ကိုယ်ဖန်တီးထားတာ သို့မဟုတ် စစ်ထားတဲ့ ယုံကြည်ရသော artifact ပဲ ဖွင့်ပါ။ scikit-learn model ပြန်ဖွင့်ဖို့ package version ကိုက်ညီအောင် ထားပါ။"
          },
          "code": "from pathlib import Path\nfrom tempfile import TemporaryDirectory\nimport joblib\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nmodel = make_pipeline(StandardScaler(), LinearRegression())\nmodel.fit([[1], [2], [3]], [2, 4, 6])\nwith TemporaryDirectory() as folder:\n    artifact = Path(folder) / \"trusted-model.joblib\"\n    joblib.dump(model, artifact)\n    restored = joblib.load(artifact)\n    print(round(float(restored.predict([[4]])[0]), 2))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "8.0"
        },
        {
          "id": "serve",
          "title": {
            "en": "Start with an input contract and a smoke test",
            "my": "Input Contract နှင့် Smoke Test ဖြင့် စခြင်း"
          },
          "text": {
            "en": "Choose batch predictions for scheduled jobs or an HTTP endpoint for interactive calls. Load the trusted model at startup, validate feature names and types, and include a model version in the response or output. Run a known test input against the deployed service or job before switching traffic.",
            "my": "အချိန်ဇယားနဲ့ အလုပ်အတွက် batch prediction၊ အချိန်မီ ခေါ်သုံးရင် HTTP endpoint ရွေးပါ။ Start လုပ်ချိန် trusted model ဖွင့်ပြီး feature name နဲ့ type စစ်ပါ။ Response သို့မဟုတ် output ထဲ model version ပါပါစေ။ Traffic မပြောင်းခင် သိထားတဲ့ test input နဲ့ deploy လုပ်ထားတဲ့ service သို့မဟုတ် job ကို စမ်းပါ။"
          },
          "code": "import json\nimport math\nfrom sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression().fit([[1], [2], [3]], [2, 4, 6])\n\ndef predict_record(payload):\n    if not isinstance(payload, dict) or set(payload) != {\"area_m2\"}:\n        raise ValueError(\"Expected an area_m2 field\")\n    area = payload[\"area_m2\"]\n    if type(area) not in (int, float) or not math.isfinite(area) or area <= 0:\n        raise ValueError(\"Area must be a finite positive number\")\n    return {\"model_version\": \"area-v1\", \"predicted_price\": round(float(model.predict([[area]])[0]), 2)}\n\nprint(json.dumps(predict_record({\"area_m2\": 4})))",
          "codeLanguage": "python",
          "displayOnly": true,
          "output": "{\"model_version\": \"area-v1\", \"predicted_price\": 8.0}"
        },
        {
          "id": "monitor",
          "title": {
            "en": "Monitor inputs and outcomes",
            "my": "Input နှင့် ရလဒ် စောင့်ကြည့်ခြင်း"
          },
          "text": {
            "en": "Track latency, errors, missing-feature rates, and input distribution changes. When labels arrive, measure model performance on recent data and compare it to the baseline. Keep the previous model version available in case a rollout needs to be reversed.",
            "my": "Latency၊ error၊ feature ပျောက်နှုန်းနဲ့ input distribution ပြောင်းတာတွေ စောင့်ကြည့်ပါ။ Label ရလာရင် မကြာသေးတဲ့ data ပေါ် performance တိုင်းပြီး baseline နဲ့ ယှဉ်ပါ။ Rollout ပြန်လှန်ဖို့ လိုရင် သုံးနိုင်အောင် အရင် model version သိမ်းထားပါ။"
          }
        }
      ]
    }
  ]
};
