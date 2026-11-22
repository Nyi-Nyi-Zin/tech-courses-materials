// Burmese lessons and task copy. Code and check logic live in curriculum.js.
export const myCurriculum = {
  "html": {
    "title": "HTML",
    "description": "Semantic tags၊ links၊ tables နဲ့ forms သုံးပြီး web page တစ်ခုရဲ့ ဖွဲ့စည်းပုံကို ရေးပါ။",
    "exercises": {
      "first-heading": {
        "title": "ပထမဆုံး HTML စာမျက်နှာ",
        "lesson": "Heading က စာမျက်နှာရဲ့ အဓိကအကြောင်းအရာကို ဖော်ပြပြီး paragraph က ဆက်ရှင်းပြပေးပါတယ်။",
        "hint": "စာသားကို opening tag နဲ့ closing tag ကြားမှာ ထည့်ပါ။",
        "task": [
          "h1 တစ်ခုထည့်ပြီး Hello, Frontend! လို့ရေးပါ။",
          "p တစ်ခုထည့်ပြီး I am learning HTML. လို့ရေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "h1 တစ်ခုနဲ့ သတ်မှတ်ထားတဲ့ heading စာသား",
          "Paragraph စာသား မှန်ကန်သည်"
        ]
      },
      "document": {
        "title": "HTML စာမျက်နှာ ဖွဲ့စည်းပုံ",
        "lesson": "DOCTYPE က browser ကို standards mode နဲ့ ဖတ်ခိုင်းပါတယ်။ head ထဲမှာ metadata၊ body ထဲမှာ မြင်ရမယ့် content ထည့်ပါတယ်။",
        "hint": "ပထမလိုင်းမှာ <!doctype html> ရေးပြီး title နဲ့ meta ကို head ထဲမှာ ထည့်ပါ။",
        "task": [
          "DOCTYPE၊ lang=\"en\"၊ UTF-8 charset နဲ့ Lab Notes ဆိုတဲ့ page title ပါအောင် document အပြည့်ရေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "HTML5 doctype ပါသည်",
          "Language, charset နဲ့ title ပါသည်"
        ]
      },
      "text": {
        "title": "စာသား အလေးပေးခြင်းနှင့် Inline Code",
        "lesson": "strong က အရေးကြီးတဲ့စာသား၊ em က ဖတ်တဲ့အချိန် အလေးပေးရမယ့်စာသား၊ code က code စာသားကို ဖော်ပြပါတယ်။",
        "hint": "စာသားရှိပြီးသားနေရာကို tag နဲ့ ဝန်းရံလိုက်ပါ။",
        "task": [
          "အောက်က sentence ထဲမှာ Save ကို strong၊ before ကို em၊ index.html ကို code ဖြင့် markup ထည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "strong, em, code မှန်ကန်သည်"
        ]
      },
      "links": {
        "title": "လင့်ခ် ချိတ်ဆက်ခြင်း",
        "lesson": "Anchor ရဲ့ href မှာ path သို့မဟုတ် fragment ID ထည့်နိုင်ပါတယ်။ Fragment link က စာမျက်နှာထဲက သက်ဆိုင်ရာနေရာကို သွားပေးပါတယ်။",
        "hint": "href=\"#contact\" နဲ့ id=\"contact\" ရဲ့ စာသားချင်း တူရပါမယ်။",
        "task": [
          "Learning resources ကို /resources ဆီ link ချိတ်ပါ။ Jump to contact ကို contact heading ဆီ fragment link ချိတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Resources link မှန်ကန်သည်",
          "Contact fragment ကို ချိတ်ထားသည်"
        ]
      },
      "images": {
        "title": "ပုံနှင့် Alt Text",
        "lesson": "Image ရဲ့ alt က ပုံအစား ပေးရမယ့် စာသားပါ။ Figure နဲ့ figcaption သုံးရင် ပုံနဲ့ caption ကို တွဲဖော်ပြနိုင်ပါတယ်။",
        "hint": "figcaption ကို figure ထဲမှာ img ရဲ့နောက်မှာ ထည့်ပါ။",
        "task": [
          "image ကို figure ထဲထည့်ပါ။ alt ကို Blue square လို့ထည့်ပြီး caption ကို Color sample လို့ရေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Figure, image source နဲ့ alt ပါသည်",
          "Caption ပါသည်"
        ]
      },
      "lists": {
        "title": "အမှတ်စဉ်ပါနှင့် အမှတ်စဉ်မပါ စာရင်းများ",
        "lesson": "အဆင့်လိုက်လုပ်ရမယ့် အစီအစဉ်အတွက် ol၊ အစီအစဉ်မလိုတဲ့ အချက်တွေအတွက် ul သုံးပါတယ်။",
        "hint": "List နှစ်ခုလုံးမှာ item တစ်ခုချင်းစီကို li နဲ့ ရေးပါ။",
        "task": [
          "Open editor နဲ့ Save file ကို ordered list၊ Keyboard နဲ့ Mouse ကို unordered list လုပ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Ordered list မှန်သည်",
          "Unordered list မှန်သည်"
        ]
      },
      "landmarks": {
        "title": "စာမျက်နှာ အပိုင်းများ သတ်မှတ်ခြင်း",
        "lesson": "header၊ nav၊ main နဲ့ footer တို့က စာမျက်နှာရဲ့ အပိုင်းတွေကို browser နဲ့ assistive technology နားလည်စေပါတယ်။",
        "hint": "Content ကို landmark tags နဲ့ ဝန်းရံပါ။ Navigation link ကို href=\"#news\" နဲ့ ချိတ်နိုင်ပါတယ်။",
        "task": [
          "အပေါ်ပိုင်းကို header လုပ်ပြီး navigation ကို အထဲထည့်ပါ။ News ကို main ထဲ၊ © Cloud Nine Innovations ကို footer ထဲ ထည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Header ထဲမှာ navigation ပါသည်",
          "Main နဲ့ footer ပါသည်"
        ]
      },
      "tables": {
        "title": "ဖတ်ရှုအသုံးပြုရလွယ်သော ဇယား",
        "lesson": "caption က ဇယားရဲ့ အကြောင်းအရာကို ဖော်ပြပါတယ်။ th နှင့် scope=\"col\" က column header ကို cell တွေနဲ့ ဆက်စပ်ပေးပါတယ်။",
        "hint": "Header row ကို thead ထဲ၊ data row ကို tbody ထဲရေးပါ။",
        "task": [
          "Cafe menu ဆိုတဲ့ caption၊ Item နဲ့ Price column headers၊ Coffee နဲ့ 2 ဆိုတဲ့ data row တစ်ခုပါသော table ရေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Caption နဲ့ column headers မှန်သည်",
          "Data row မှန်သည်"
        ]
      },
      "disclosure": {
        "title": "အဖြေ ပြခြင်းနှင့် ဖျောက်ခြင်း",
        "lesson": "details က click သို့မဟုတ် keyboard နဲ့ ဖွင့်ပိတ်နိုင်တဲ့ native HTML element ပါ။ summary က ဖွင့်ပိတ်ရမယ့် label ဖြစ်ပါတယ်။",
        "hint": "summary ကို details ရဲ့ ပထမဆုံး child အဖြစ် ထည့်ပါ။",
        "task": [
          "Where are drafts saved? ဆိုတဲ့ summary နဲ့ In this browser. ဆိုတဲ့ အဖြေကို details ထဲရေးပါ။ အစမှာ ပိတ်ထားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Summary နဲ့ အဖြေပါပြီး အစမှာ ပိတ်ထားသည်"
        ]
      },
      "labels": {
        "title": "Form Label နှင့် Input အမျိုးအစား",
        "lesson": "label for နဲ့ input id ကို ချိတ်ထားရင် label ကိုနှိပ်ပြီး field ကို focus လုပ်နိုင်ပါတယ်။ Input type က browser ကို ဘယ်လိုတန်ဖိုးမျိုး မျှော်မှန်းရမလဲ ပြောပေးပါတယ်။",
        "hint": "for=\"email\" နဲ့ id=\"email\" သုံးပါ။ Submit button မှာ type=\"submit\" ထည့်ပါ။",
        "task": [
          "Email address ဆိုတဲ့ label ကို email input နဲ့ ချိတ်ပါ။ input name ကို email၊ button ကို Join လို့ သတ်မှတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Email label နဲ့ field ချိတ်ထားသည်",
          "Submit button ပါသည်"
        ]
      },
      "validation": {
        "title": "Form အချက်အလက် စစ်ဆေးခြင်း",
        "lesson": "required က field အလွတ်မဖြစ်အောင် စစ်ပေးပြီး min/max က number တန်ဖိုးအပိုင်းအခြားကို သတ်မှတ်ပေးပါတယ်။",
        "hint": "input မှာ type=\"number\"၊ min၊ max နဲ့ required attributes ထည့်ပါ။",
        "task": [
          "Guests input ကို required number field လုပ်ပြီး အနည်းဆုံး 1၊ အများဆုံး 6 သတ်မှတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Number input နဲ့ validation rules မှန်သည်"
        ]
      },
      "media": {
        "title": "အသံ၊ ဗီဒီယိုနှင့် စာတန်းထိုး",
        "lesson": "audio နဲ့ video မှာ controls ထည့်ရင် browser က playback controls ပြပေးပါတယ်။ Video captions ကို track နဲ့ သတ်မှတ်နိုင်ပါတယ်။",
        "hint": "track မှာ kind=\"captions\"၊ srclang=\"en\"၊ label=\"English\" နဲ့ src ပါရမယ်။",
        "task": [
          "audio နဲ့ video တစ်ခုစီမှာ controls ထည့်ပါ။ Video ထဲမှာ English captions track ထည့်ပါ။ Sample media file အတွက် starter paths ကို သုံးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Audio နဲ့ video playback controls ပါသည်",
          "English captions metadata ပါသည်"
        ]
      },
      "metadata": {
        "title": "Metadata နှင့် SEO အခြေခံ",
        "lesson": "Page title ကို tab နဲ့ search results မှာ သုံးနိုင်ပါတယ်။ Description meta က စာမျက်နှာအကြောင်း အကျဉ်းဖော်ပြပေးပါတယ်။ Viewport meta က mobile layout အတွက် အရေးပါပါတယ်။",
        "hint": "meta name=\"description\" နဲ့ meta name=\"viewport\" ကို head ထဲ ထည့်ပါ။",
        "task": [
          "Page title ကို Cafe Menu ထားပါ။ Description ကို Fresh coffee and snacks. လို့ရေးပြီး mobile viewport ထည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Title နဲ့ description မှန်သည်",
          "Mobile viewport ပါသည်"
        ]
      },
      "form-choices": {
        "title": "ရွေးချယ်စရာများပါတဲ့ Form ရေးခြင်း",
        "lesson": "Checkbox နဲ့ ရွေးချယ်စရာ တစ်ခုထက်ပိုပြီး ရွေးလို့ရပါတယ်။ name တူတဲ့ radio buttons တွေထဲကတော့ တစ်ခုပဲ ရွေးလို့ရပါတယ်။ select က ရွေးချယ်စရာ စာရင်းကို ပြပေးပါတယ်။ Control တစ်ခုချင်းစီအတွက် label သုံးပြီး အုပ်စုလိုက် နာမည်ပေးဖို့ fieldset နဲ့ legend သုံးပါ။",
        "hint": "Radio နဲ့ checkbox တစ်ခုချင်းစီကို label ထဲထည့်ပါ။ ဒါမှမဟုတ် label ရဲ့ for နဲ့ input ရဲ့ id ကို ချိတ်ပါ။ legend ကို fieldset ထဲမှာ ပထမဆုံး ထည့်ပါ။",
        "task": [
          "id နဲ့ name ကို drink လို့ သတ်မှတ်ထားတဲ့ select ထည့်ပါ။ Coffee နဲ့ Tea ဆိုတဲ့ ရွေးချယ်စရာတွေကို coffee နဲ့ tea values တွေနဲ့ ထည့်ပါ။",
          "Size လို့ နာမည်ပေးထားတဲ့ fieldset ထဲမှာ Small နဲ့ Large radio နှစ်ခု ထည့်ပြီး ရွေးချယ်ဖို့ လိုအပ်ကြောင်း required သတ်မှတ်ပါ။ name နှစ်ခုလုံး size ဖြစ်ပြီး values က small နဲ့ large ဖြစ်ရပါမယ်။",
          "Extras လို့ နာမည်ပေးထားတဲ့ နောက် fieldset ထဲမှာ Ice နဲ့ Lemon checkboxes ထည့်ပါ။ name နှစ်ခုလုံး extra ဖြစ်ပြီး values က ice နဲ့ lemon ဖြစ်ရပါမယ်။ Control တစ်ခုချင်းစီကို label ပေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Label ပါတဲ့ drink select က ရွေးထားတဲ့ value ကို ပို့ပေးပါတယ်",
          "Size radios တွေက label နဲ့ အုပ်စုပါပြီး မဖြစ်မနေ တစ်ခုပဲ ရွေးလို့ရပါတယ်",
          "Extras တွေက label ပါပြီး တစ်ခုထက်ပို ရွေးလို့ရပါတယ်"
        ]
      },
      "responsive-images": {
        "title": "မျက်နှာပြင်အကျယ်အလိုက် ပုံပြခြင်း",
        "lesson": "မျက်နှာပြင်ကျယ်လာရင် တခြားပုံ သုံးချင်တဲ့အခါ picture သုံးပါ။ source ရဲ့ media rule က ဘယ်အချိန်မှာ အဲဒီပုံကို သုံးရမလဲ သတ်မှတ်ပေးပါတယ်။ img ထဲမှာ ပုံသေသုံးမယ့်ပုံနဲ့ alt စာသားကို ထည့်ပါတယ်။",
        "hint": "source မှာ media=\"(min-width: 500px)\" ထည့်ပါ။ Desktop နဲ့ Mobile ကို ပြောင်းကြည့်ပြီး ဘယ်ပုံ ပေါ်လဲ စစ်ပါ။",
        "task": [
          "ပေးထားတဲ့ tag နှစ်ခုကို picture ထဲ ထည့်ပါ။ source ကို img ရှေ့မှာ ထားပြီး ပုံ URL တွေကို ဒီအတိုင်း ထားပါ။",
          "500px ကစပြီး ပုံအကျယ်ကို သုံးပါ။ အဲဒီထက် သေးတဲ့ မျက်နှာပြင်မှာ ပုံသေပုံကို သုံးပြီး alt စာသားကို Color swatch လို့ ထည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "320px မှာ alt စာသားပါတဲ့ ပုံသေပုံ ပေါ်ပါတယ်",
          "680px မှာ ပုံအကျယ် ပေါ်ပါတယ်"
        ]
      },
      "keyboard-access": {
        "title": "Keyboard နဲ့ အသုံးပြုလို့ရတဲ့ စာမျက်နှာ",
        "lesson": "Tab နဲ့ Enter သုံးပြီး စာမျက်နှာထဲမှာ သွားလာလို့ရပါတယ်။ HTML links နဲ့ buttons တွေမှာ keyboard အသုံးပြုမှု ပါပြီးသား ဖြစ်ပါတယ်။ Skip link က မီနူးကို ကျော်ပြီး အဓိကအကြောင်းအရာဆီ တန်းသွားစေပါတယ်။",
        "hint": "ကျော်သွားဖို့ a tag သုံးပါ။ လုပ်ဆောင်ချက်အတွက် button tag သုံးပါ။ ရလဒ်မြင်ကွင်းထဲဝင်ပြီး Tab နဲ့ Enter သုံးကာ skip link ကို စမ်းကြည့်ပါ။",
        "task": [
          "Navigation မတိုင်ခင် Skip to main content လို့ ရေးထားတဲ့ link ထည့်ပြီး #main-content ဆီ ချိတ်ပါ။",
          "main ရဲ့ id ကို main-content လို့ပေးပြီး tabindex=\"-1\" သတ်မှတ်ပါ။ ဒါဆို link ကနေ ခုန်သွားတဲ့အခါ focus ရနိုင်ပြီး Tab အဆင့်တစ်ခု ထပ်မတိုးပါဘူး။",
          "Show menu လို့ ရေးထားတဲ့ div ကို type=\"button\" ပါတဲ့ button နဲ့ အစားထိုးပါ။"
        ],
        "visual": [
          "Tab နဲ့ skip link ဆီသွားပါ။ Enter နှိပ်ပြီး အဓိကအကြောင်းအရာဆီ ရောက်မရောက် ကြည့်ပါ။",
          "ခုန်သွားပြီးရင် Tab ထပ်နှိပ်ပြီး Show menu button ဆီ ရောက်မရောက် ကြည့်ပါ။"
        ],
        "checkLabels": [
          "Skip link က ရှေ့ဆုံးမှာ ရှိပြီး focus ရနိုင်တဲ့ main ဆီ ချိတ်ထားပါတယ်",
          "Show menu က အသုံးပြုလို့ရတဲ့ HTML button ဖြစ်ပါတယ်"
        ]
      }
    }
  },
  "css": {
    "title": "CSS",
    "description": "Selectors၊ Flexbox နဲ့ Grid ကနေ responsive layouts နဲ့ animations အထိ style ရေးပါ။",
    "exercises": {
      "selectors": {
        "title": "Class နှင့် Descendant Selectors",
        "lesson": "Class selector ကို . နဲ့စပါတယ်။ Selector နှစ်ခုကြား space ခြားရင် အတွင်းမှာရှိတဲ့ element တွေကို target လုပ်ပါတယ်။",
        "hint": ".card p ကို selector အဖြစ် သုံးပါ။",
        "task": [
          ".card ထဲက p စာသားကို blue လုပ်ပါ။ Card အပြင်က p ရဲ့ အရောင်ကို starter အတိုင်းထားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Card အတွင်း blue၊ အပြင် black"
        ]
      },
      "cascade": {
        "title": "Selector ဦးစားပေးပုံနှင့် ရေးစဉ်",
        "lesson": "တူညီတဲ့ property အတွက် specificity ပိုမြင့်တဲ့ selector ကို browser က ဦးစားပေးပါတယ်။ Specificity တူရင် နောက်က rule ကို သုံးပါတယ်။",
        "hint": ".pill.featured မှာ class နှစ်ခုပါတဲ့အတွက် .pill ထက် specificity ပိုမြင့်ပါတယ်။",
        "task": [
          "CSS declaration တစ်ခုထပ်ရေးပြီး Featured ကို purple၊ ကျန် pill ကို green အတိုင်းထားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Featured နဲ့ standard အရောင်ကွဲသည်"
        ]
      },
      "inheritance": {
        "title": "Parent ဆီမှ စာသား Style ဆက်ခံခြင်း",
        "lesson": "color နဲ့ font-size လို properties တွေကို child elements က parent ဆီကနေ ဆက်ခံနိုင်ပါတယ်။ Border လို properties တွေက အလိုအလျောက် မဆက်ခံပါဘူး။",
        "hint": "တန်ဖိုးနှစ်ခုကို parent class တစ်ခုတည်းမှာ သတ်မှတ်ပါ။",
        "task": [
          ".article မှာ color ကို teal နဲ့ font-size ကို 20px သတ်မှတ်ပါ။ အတွင်း paragraph က အဲဒီ style နှစ်ခုကို ရရမယ်။"
        ],
        "visual": [],
        "checkLabels": [
          "Article paragraph က style ကို ဆက်ခံထားသည်"
        ]
      },
      "box-model": {
        "title": "CSS Box Model",
        "lesson": "Box model မှာ content၊ padding၊ border နဲ့ margin ရှိပါတယ်။ border-box သုံးရင် width ထဲမှာ padding နဲ့ border ပါဝင်ပါတယ်။",
        "hint": "Browser က တိုင်းတဲ့ outer border width ဟာ 240px ဖြစ်ရပါမယ်။",
        "task": [
          ".box ကို width 240px၊ padding 16px၊ border 2px solid၊ margin 12px နဲ့ box-sizing: border-box ထည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Box width နဲ့ spacing မှန်သည်"
        ]
      },
      "units": {
        "title": "Relative Units နှင့် စာကြောင်းအမြင့်",
        "lesson": "rem က root font size ကို အခြေခံပြီး ရာခိုင်နှုန်းအကျယ်က containing block ကို အခြေခံပါတယ်။ Unitless line-height က ကိုယ့် font size နဲ့ လိုက်ပြောင်းပါတယ်။",
        "hint": "Starter ထဲက 16px root size အရ 1.25rem က 20px ဖြစ်ပါတယ်။",
        "task": [
          "p ကို font-size 1.25rem၊ line-height 1.6 နဲ့ width 75% သတ်မှတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Font size, line height နဲ့ width မှန်သည်"
        ]
      },
      "display": {
        "title": "Block၊ Inline နှင့် Inline Block",
        "lesson": "Inline elements က စာသားနဲ့ တစ်လိုင်းတည်း နေနိုင်ပါတယ်။ inline-block ကလည်း တစ်လိုင်းတည်း နေနိုင်ပြီး width နဲ့ height သတ်မှတ်လို့ရပါတယ်။",
        "hint": "Selector တစ်ခုနဲ့ tag နှစ်ခုစလုံးကို style လုပ်ပါ။",
        "task": [
          ".tag နှစ်ခုစလုံးကို inline-block လုပ်ပြီး width 80px သတ်မှတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Tags တွေက inline-block ဖြစ်ပြီး 80px ကျယ်သည်"
        ]
      },
      "positioning": {
        "title": "Badge ကို နေရာချခြင်း",
        "lesson": "position: absolute က element ကို normal flow ထဲကနေ ထုတ်ပြီး အနီးဆုံး positioned ancestor ကို အခြေခံကာ နေရာချပါတယ်။",
        "hint": "Card မှာ relative၊ badge မှာ absolute သုံးပါ။",
        "task": [
          "Badge ကို card ရဲ့ အပေါ်ညာဘက်မှာ top 8px၊ right 8px ထားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Badge ကို card နဲ့ အချိုးကျ position လုပ်ထားသည်"
        ]
      },
      "flexbox": {
        "title": "Flexbox ဖြင့် Navigation စီခြင်း",
        "lesson": "Flexbox က row သို့မဟုတ် column တစ်ဘက်အတိုင်း items တွေကို နေရာချဖို့ သုံးပါတယ်။ justify-content က main axis၊ align-items က cross axis ကို ချိန်ပါတယ်။",
        "hint": "display: flex၊ justify-content: space-between နဲ့ align-items: center သုံးပါ။",
        "task": [
          "nav ကို flex container လုပ်ပါ။ Brand နဲ့ link group ကို ဘေးနှစ်ဖက်မှာထားပြီး vertical center ချိန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Flex alignment မှန်သည်"
        ]
      },
      "grid": {
        "title": "Grid Column အကျယ် တူညီအောင်စီခြင်း",
        "lesson": "Grid က rows နဲ့ columns နှစ်ခုလုံး ထိန်းလို့ရပါတယ်။ fr က ကျန်နေတဲ့နေရာကို အချိုးနဲ့ ခွဲပေးပါတယ်။",
        "hint": "grid-template-columns: repeat(3, 1fr) နဲ့ စမ်းပါ။",
        "task": [
          ".grid ကို equal-width column သုံးခုနဲ့ gap 12px သတ်မှတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Grid မှာ တူညီအကျယ် column သုံးခုနဲ့ 12px gap ပါသည်"
        ]
      },
      "responsive": {
        "title": "Screen အကျယ်အလိုက် Product Cards စီခြင်း",
        "lesson": "Mobile-first CSS မှာ column တစ်ခုနဲ့ စပြီး ပိုကျယ်တဲ့ viewport အတွက် min-width media query နဲ့ layout ပြောင်းနိုင်ပါတယ်။",
        "hint": "ပုံမှန် rule မှာ 1fr သုံးပါ။ @media (min-width: 500px) ထဲမှာ columns သုံးခုထည့်ပါ။",
        "task": [
          "Viewport 500px အောက်မှာ product cards ကို column တစ်ခုနဲ့ ပြပါ။",
          "500px ကစပြီး equal-width columns သုံးခု ပြပါ။"
        ],
        "visual": [
          "Preview မှာ Desktop နဲ့ Mobile ကို ပြောင်းပြီး cards ကော်လံအရေအတွက် ပြောင်းတာ ကြည့်ပါ။"
        ],
        "checkLabels": [
          "320px မှာ ၁ ကော်လံ ပြသည်",
          "600px မှာ တူညီအကျယ် ၃ ကော်လံ ပြသည်"
        ]
      },
      "states": {
        "title": "Focus နှင့် Hover Styles",
        "lesson": "Pseudo-class က interaction state အလိုက် style ပြောင်းပေးပါတယ်။ :focus-visible က keyboard သုံးတဲ့အခါ focus ဘယ်မှာရှိလဲ မြင်နိုင်စေပါတယ်။",
        "hint": "button:hover နဲ့ button:focus-visible ကို rule နှစ်ခုနဲ့ ရေးပါ။ Preview ကို keyboard နဲ့ ဝင်စမ်းပါ။",
        "task": [
          "Button ကို hover လုပ်ရင် navy background ပြောင်းပါ။ Keyboard focus ရရင် 3px solid orange outline ပါစေ။"
        ],
        "visual": [
          "Pointer တင်ချိန် background က navy ပြောင်းသည်။",
          "Tab နဲ့ focus ရချိန် orange outline ပေါ်သည်။"
        ],
        "checkLabels": []
      },
      "variables": {
        "title": "CSS Custom Properties",
        "lesson": "Custom property ကို -- နဲ့ စရေးပါတယ်။ var() နဲ့ reference လုပ်ရင် style value ကို တစ်နေရာကနေ ထိန်းလို့ရပါတယ်။",
        "hint": "CSS value ထဲမှာ var(--brand) ကို သုံးပါ။",
        "task": [
          ":root မှာ --brand: rebeccapurple ထည့်ပြီး h2 ရဲ့ color အဖြစ် var(--brand) ကို သုံးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Brand variable နဲ့ heading အရောင် မှန်သည်"
        ]
      },
      "motion": {
        "title": "Transitions နှင့် Keyframes",
        "lesson": "Transition က property အပြောင်းအလဲကို ချောမွေ့စေပါတယ်။ Keyframes က အစနဲ့အဆုံး အပါအဝင် ကာလအဆင့်အလိုက် animation သတ်မှတ်ပေးပါတယ်။",
        "hint": "transition: opacity .2s နဲ့ animation: fade-in .4s သုံးနိုင်ပါတယ်။",
        "task": [
          "Badge မှာ opacity transition .2s နဲ့ fade-in animation .4s ထည့်ပါ။ fade-in ကို opacity 0 ကနေ 1 ပြောင်းတဲ့ keyframes ရေးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Transition နဲ့ fade-in animation ပါသည်"
        ]
      },
      "flex-wrap": {
        "title": "Flex Items တွေကို စာကြောင်းခွဲပြီး ညှိခြင်း",
        "lesson": "Flex items တွေက ပုံမှန်အားဖြင့် စာကြောင်းတစ်ကြောင်းတည်းမှာ နေပါတယ်။ flex-wrap သုံးရင် နေရာမလောက်တဲ့ item က နောက်စာကြောင်းကို ဆင်းနိုင်ပါတယ်။ justify-content က row တစ်လျှောက် ညှိပေးပြီး align-items က အမြင့်မတူတဲ့ items တွေကို အလယ်ညှိနိုင်ပါတယ်။",
        "hint": ".chips မှာ display: flex၊ flex-wrap: wrap၊ justify-content: center နဲ့ align-items: center သုံးပါ။",
        "task": [
          ".chips ကို နေရာမလောက်ရင် နောက်စာကြောင်း ဆင်းနိုင်တဲ့ flex container လုပ်ပါ။",
          "Row တစ်ကြောင်းချင်းစီကို ဘယ်ညာ အလယ်ညှိပါ။ Items တွေကို အပေါ်အောက် အလယ်ညှိပြီး 12px ခြားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Desktop မှာ item သုံးခု တစ်ကြောင်းတည်း အလယ်ညီပြီး ကြားအကွာအဝေး တူပါတယ်",
          "မျက်နှာပြင်ကျဉ်းရင် တတိယ item က ဒုတိယစာကြောင်းကို ဆင်းပါတယ်"
        ]
      },
      "grid-page": {
        "title": "Grid Areas သုံးပြီး စာမျက်နှာတည်ဆောက်ခြင်း",
        "lesson": "Grid areas နဲ့ စာမျက်နှာအပိုင်းတွေကို နာမည်ပေးပြီး စီလို့ရပါတယ်။ ဖုန်းမှာ column တစ်ခုပဲ သုံးပြီး နေရာပိုကျယ်တဲ့အခါ menu နဲ့ content ကို ဘေးချင်းကပ် ပြနိုင်ပါတယ်။",
        "hint": "အပိုင်းတစ်ခုချင်းစီကို grid-area ပေးပြီး .layout မှာ grid-template-areas သုံးပါ။ မျက်နှာပြင်ကျယ်ရင် \"head head\"၊ \"menu content\" နဲ့ \"foot foot\" ဆိုပြီး rows သုံးခု စီပါ။",
        "task": [
          "header၊ nav၊ main နဲ့ footer ကို head၊ menu၊ content နဲ့ foot လို့ grid areas သတ်မှတ်ပါ။",
          "500px အောက်မှာ အပိုင်းလေးခုလုံးကို ဖော်ပြထားတဲ့ အစဉ်အတိုင်း column တစ်ခုထဲ စီပါ။",
          "500px ကစပြီး nav နဲ့ main ကို ဘေးချင်းကပ်ထားပါ။ Menu column ကို 140px သတ်မှတ်ပါ။ Header နဲ့ footer တို့က columns နှစ်ခုလုံးကို ဖုံးရပါမယ်။"
        ],
        "visual": [],
        "checkLabels": [
          "Mobile မှာ နာမည်ပေးထားတဲ့ အပိုင်းလေးခုကို column တစ်ခုတည်းမှာ ပြထားပါတယ်",
          "Desktop မှာ 140px menu နဲ့ main ကို ဘေးချင်းကပ်ထားပြီး header နဲ့ footer က အကျယ်ပြည့်ပါတယ်"
        ]
      },
      "z-index": {
        "title": "Badge ကို အရှေ့ဆုံး တင်ခြင်း",
        "lesson": "Boxes တွေ ထပ်နေရင် z-index နဲ့ ဘယ်ဟာ အပေါ်မှာ ပေါ်မလဲ သတ်မှတ်နိုင်ပါတယ်။ ဒီဥပမာမှာ boxes နှစ်ခုကို container တစ်ခုတည်းထဲ နေရာချထားလို့ z-index ပိုကြီးတဲ့ box က အရှေ့မှာ ပေါ်ပါတယ်။",
        "hint": "Boxes နှစ်ခုလုံးမှာ position: absolute ပါပြီးသားပါ။ ရှိပြီးသား rules တွေထဲမှာ z-index ထည့်ပါ။",
        "task": [
          "Photo box ရဲ့ z-index ကို 1၊ badge ရဲ့ z-index ကို 2 သတ်မှတ်ပြီး badge ကို ပုံအရှေ့မှာ ပြပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Badge ရဲ့ z-index ပိုကြီးပြီး အရှေ့မှာ ပေါ်ပါတယ်"
        ]
      },
      "pseudo-elements": {
        "title": "Before နဲ့ After သုံးပြီး အလှဆင်ခြင်း",
        "lesson": "::before နဲ့ ::after သုံးပြီး element ရဲ့ စာသားရှေ့နဲ့ နောက်မှာ အလှဆင်လို့ရပါတယ်။ အရေးကြီးတဲ့ စာသားကို HTML မှာပဲ ထည့်ပါ။ ဒါဆို CSS မပေါ်ရင်တောင် ဖတ်လို့ရပါတယ်။",
        "hint": "Pseudo-element ပေါ်ဖို့ content: \"\" ထည့်ပါ။ Width နဲ့ height ပေးလို့ရအောင် display: inline-block သုံးပါ။",
        "task": [
          ".tag::before သုံးပြီး 10px ပတ်လည်ရှိတဲ့ teal ရောင် လေးထောင့်ကွက် ထည့်ပါ။",
          ".tag::after သုံးပြီး 24px ကျယ်၊ 2px မြင့်တဲ့ teal လိုင်း ထည့်ပါ။ Featured ကို HTML စာသားအဖြစ် ဒီအတိုင်း ထားပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Before က 10px ပတ်လည်ရှိတဲ့ teal ရောင် လေးထောင့်ကွက် ပြပါတယ်",
          "After က 24px teal လိုင်း ပြပြီး HTML စာသားက Featured ဖြစ်နေပါတယ်"
        ]
      }
    }
  },
  "js": {
    "title": "JavaScript",
    "description": "Functions၊ DOM events နဲ့ async code သုံးပြီး page တစ်ခုကို interactive ဖြစ်အောင် ရေးပါ။",
    "exercises": {
      "variables": {
        "title": "Variables နှင့် Constants",
        "lesson": "ပြန် assign လုပ်ရမယ့် variable ကို let နဲ့ ကြေညာပြီး value အသစ် မသတ်မှတ်မယ့် binding ကို const နဲ့ ကြေညာပါတယ်။",
        "hint": "Quantity အသစ်ကို unit price နဲ့ မြှောက်ပါ။",
        "task": [
          "drinks ကို let နဲ့ 2 သတ်မှတ်ပြီး 1 တိုးပါ။ unitPrice ကို const နဲ့ 4 သတ်မှတ်ပြီး total ကို console မှာ 12 ထုတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Console output မှန်ကန်သည်",
          "drinks နဲ့ unitPrice binding တန်ဖိုး မှန်သည်"
        ]
      },
      "types": {
        "title": "Value အမျိုးအစား ပြောင်းခြင်း",
        "lesson": "Input အများစုက string ပြန်ပေးပါတယ်။ Number() နဲ့ ပြောင်းပြီးမှ numeric calculation လုပ်နိုင်ပါတယ်။ typeof က value type ကို စစ်ပေးပါတယ်။",
        "hint": "Number(rawQuantity) အရင်တွက်ပြီး console.log(typeof quantity) သုံးပါ။",
        "task": [
          "rawQuantity ကို number အဖြစ်ပြောင်းပြီး နှစ်ဆတိုးပါ။ 10 နဲ့ number ကို console နှစ်လိုင်းမှာ ထုတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Console မှာ 10 နဲ့ number အစဉ်လိုက်ထွက်သည်"
        ]
      },
      "operators": {
        "title": "တန်ဖိုးနှင့် အခြေအနေများ စစ်ခြင်း",
        "lesson": "=== က type နဲ့ value နှစ်ခုစလုံး တူမတူစစ်ပါတယ်။ && က အခြေအနေနှစ်ခုလုံး မှန်မှ true ဖြစ်ပါတယ်။",
        "hint": "seats >= 1 နဲ့ isMember === true ကို && သုံးပြီး ပေါင်းပါ။",
        "task": [
          "canBook(seats, isMember) function ရေးပါ။ seats က 1 နှင့်အထက်ဖြစ်ပြီး isMember က true အတိအကျဖြစ်မှ true ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Boolean နဲ့ boundary cases မှန်သည်"
        ]
      },
      "conditions": {
        "title": "If၊ Else ဖြင့် အမှတ် ခွဲခြင်း",
        "lesson": "Conditions အစဉ်က ရလဒ်အပေါ် သက်ရောက်ပါတယ်။ ပိုကန့်သတ်ထားတဲ့ condition ကို အရင်စစ်ရင် threshold တွေ ထပ်နေတဲ့အခါ ခွဲခြားရလွယ်ပါတယ်။",
        "hint": "80 ကို အရင်စစ်ပြီး 50 threshold ကို ဒုတိယစစ်ပါ။",
        "task": [
          "grade(score) မှာ 80 နှင့်အထက် Excellent၊ 50 မှ 79 အထိ Pass၊ 50 အောက် Retry ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "အမှတ်အဆင့်နဲ့ boundary တန်ဖိုးများ မှန်သည်"
        ]
      },
      "switch": {
        "title": "Switch နှင့် Default",
        "lesson": "switch က value တစ်ခုကို ဖြစ်နိုင်တဲ့ cases တွေနဲ့ တိုက်စစ်ပါတယ်။ Case မကိုက်ရင် default ကို သုံးနိုင်ပါတယ်။",
        "hint": "Case တစ်ခုစီမှာ return ထည့်ရင် နောက် case ထဲ ဆက်မဆင်းတော့ပါဘူး။",
        "task": [
          "priceFor(item) မှာ coffee အတွက် 3၊ tea အတွက် 2၊ တခြား item ဆို null ပြန်ပါ။ switch သုံးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Coffee, tea နဲ့ default တန်ဖိုးများ မှန်သည်"
        ]
      },
      "loops": {
        "title": "For Loop ဖြင့် ဂဏန်းများ ပေါင်းခြင်း",
        "lesson": "Accumulator က loop တစ်ကြိမ်စီရတဲ့ value တွေကို စုပေးပါတယ်။ Sum တွက်ဖို့ အစတန်ဖိုးကို 0 ထားနိုင်ပါတယ်။",
        "hint": "i = 1 ကစပြီး i <= n ဖြစ်နေသရွေ့ total ထဲ i ကို ပေါင်းပါ။",
        "task": [
          "sumTo(n) မှာ 1 ကနေ n အထိ ပေါင်းပါ။ n က 0 ဆိုရင် 0 ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "n အမျိုးမျိုးအတွက် sum မှန်ကန်သည်"
        ]
      },
      "while": {
        "title": "While၊ Break နှင့် Continue",
        "lesson": "while က condition မှန်နေသရွေ့ loop လည်ပါတယ်။ continue က လက်ရှိအလှည့်ကို ကျော်ပေးပြီး break က loop ကနေ ထွက်စေပါတယ်။",
        "hint": "Index ကို တစ်ကြိမ်စီတိုးပါ။ 0 တွေ့ရင် break၊ negative တွေ့ရင် continue သုံးပါ။",
        "task": [
          "beforeZero(values) မှာ 0 မတွေ့ခင်ထိ ကြည့်ပါ။ Negative values ကိုကျော်ပြီး positive values တွေကို array နဲ့ ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Zeros နဲ့ negatives ကို စည်းမျဉ်းအတိုင်း ကိုင်တွယ်သည်"
        ]
      },
      "functions": {
        "title": "Parameters၊ Default တန်ဖိုးနှင့် Return",
        "lesson": "Parameters က function ကို input လက်ခံစေတယ်။ Default parameter က argument မပေးတဲ့အခါ သတ်မှတ်ထားတဲ့ value ကို သုံးစေပါတယ်။",
        "hint": "Parameter list မှာ qty = 1 လို့ ရေးနိုင်ပါတယ်။",
        "task": [
          "lineTotal(price, qty) function မှာ qty မပေးရင် 1 သုံးပါ။ price နဲ့ qty ရဲ့ မြှောက်လဒ် ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Default quantity, explicit quantity နဲ့ zero မှန်သည်"
        ]
      },
      "strings": {
        "title": "စာသား ပြုပြင်သည့် Methods",
        "lesson": "String methods သုံးပြီး user input ကို normalize လုပ်နိုင်ပါတယ်။ trim() က အစနဲ့အဆုံးက whitespace ကို ရှင်းပေးပါတယ်။",
        "hint": "trim()၊ toLowerCase() နဲ့ replace(/\\s+/g, \"-\") ကို အစဉ်လိုက် သုံးပါ။",
        "task": [
          "makeSlug(title) က အစနဲ့အဆုံး space ဖြုတ်၊ lowercase ပြောင်း၊ အလယ်က whitespace အစုတိုင်းကို hyphen တစ်ခုနဲ့ အစားထိုးရမယ်။"
        ],
        "visual": [],
        "checkLabels": [
          "String normalization မှန်သည်"
        ]
      },
      "arrays": {
        "title": "Filter၊ Map နှင့် Reduce",
        "lesson": "filter က လိုတဲ့ items ကို ရွေးပေးပြီး map က item တစ်ခုချင်းစီ ပြောင်းပေးပါတယ်။ reduce က array တစ်ခုလုံးကို တန်ဖိုးတစ်ခုအဖြစ် စုပေးတယ်။",
        "hint": "orders.filter(...) → .map(...) → .reduce(...) အစဉ်နဲ့ သုံးပါ။ reduce initial value ကို 0 ထားပါ။",
        "task": [
          "paidTotal(orders) မှာ paid ဖြစ်တဲ့ orders ပဲယူပါ။ amount တန်ဖိုးတွေကို ထုတ်ပြီး စုစုပေါင်းပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Paid orders ပဲ စုတွက်ပြီး empty input ကို ကိုင်တွယ်သည်"
        ]
      },
      "objects": {
        "title": "Objects၊ Destructuring နှင့် Spread",
        "lesson": "Destructuring က object ထဲက properties တွေကို ထုတ်ယူပေးပါတယ်။ Spread က object အသစ်ထဲ properties တွေ ကူးထည့်ပေးပါတယ်။",
        "hint": "const { name: previousName, ...details } = item သုံးပြီး { ...details, name } ပြန်နိုင်ပါတယ်။",
        "task": [
          "renameItem(item, name) က item အသစ် ပြန်ပါ။ name ကို အစားထိုးပြီး id နဲ့ ကျန် properties တွေကို ထိန်းပါ။ မူရင်း item ကို မပြောင်းပါနဲ့။"
        ],
        "visual": [],
        "checkLabels": [
          "Name အသစ်နဲ့ object အသစ်ပြန်ပြီး မူရင်းကို မပြောင်းထားပါ"
        ]
      },
      "scope": {
        "title": "Scope နှင့် Closures",
        "lesson": "Inner function က အပြင် function ရဲ့ variables တွေကို ဆက်သုံးနိုင်ပါတယ်။ Outer function တစ်ကြိမ်စီခေါ်ရင် ကိုယ်ပိုင် state အသစ် ရပါတယ်။",
        "hint": "Outer function မှာ let count = start ရေးပြီး inner function ထဲမှာ count += 1 လုပ်ပါ။",
        "task": [
          "makeCounter(start) က function တစ်ခု ပြန်ရမယ်။ အဲဒီ function ကို နှိပ်ခေါ်တိုင်း count ကို 1 တိုးပြီး တိုးပြီးသား value ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Counter တစ်ခုချင်းစီမှာ သီးခြား state ရှိသည်"
        ]
      },
      "classes": {
        "title": "Classes နှင့် Methods",
        "lesson": "Class ရဲ့ constructor က instance အသစ်ရဲ့ state ကို ပြင်ဆင်ပါတယ်။ Method က this သုံးပြီး instance တစ်ခုချင်းစီရဲ့ state ကို ဖတ်နိုင် ပြောင်းနိုင်ပါတယ်။",
        "hint": "Instance state ကို this.total မှာထားပါ။",
        "task": [
          "Cart class မှာ constructor က total ကို 0 ထားပါ။ add(price) က total ထဲ ပေါင်းပါ။ getTotal() က current total ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Cart instances တစ်ခုချင်းစီက ကိုယ်ပိုင် total ထိန်းထားသည်"
        ]
      },
      "modules": {
        "title": "ES Modules",
        "lesson": "Module တစ်ခုထဲက function ကို export လုပ်ပြီး အခြား module မှာ import လုပ်နိုင်ပါတယ်။ ဒီ lab မှာ JavaScript tab ကို module အဖြစ် run ပေးပါတယ်။",
        "hint": "export function double(number) လို့ စရေးပါ။",
        "task": [
          "double(number) ကို named export လုပ်ပါ။ number နှစ်ဆ ပြန်ပေးရမယ်။"
        ],
        "visual": [],
        "checkLabels": [
          "Named export double က number နှစ်ဆ ပြန်သည်"
        ]
      },
      "dom": {
        "title": "စာမျက်နှာထဲက Element ကို ရှာပြီး ပြင်ခြင်း",
        "lesson": "querySelector() က selector နဲ့ကိုက်တဲ့ ပထမ element ကို ရွေးပေးပြီး textContent က element စာသားကို သတ်မှတ်ပေးပါတယ်။",
        "hint": "document.querySelector(\"#status\").textContent သုံးပါ။",
        "task": [
          "#status element ကိုရွေးပြီး Ready to practice လို့ စာသားပြောင်းပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Status text ကို JavaScript နဲ့ ပြောင်းထားသည်"
        ]
      },
      "events": {
        "title": "Button နှိပ်မှုကို စစ်ခြင်း",
        "lesson": "addEventListener က event ဖြစ်တဲ့အချိန် callback ကို ခေါ်ပေးပါတယ်။ Counter တန်ဖိုးကို event handler အပြင်မှာထားရင် click တစ်ကြိမ်စီကြား မှတ်မိပါတယ်။",
        "hint": "let count = 0 ကို handler အပြင်မှာထားပြီး click တိုင်း count နဲ့ textContent နှစ်ခုလုံး update လုပ်ပါ။",
        "task": [
          "Add button ကို နှိပ်တိုင်း #count တန်ဖိုး 1 တိုးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Click နှစ်ကြိမ်မှာ Counter 0 → 1 → 2 ဖြစ်သည်"
        ]
      },
      "forms": {
        "title": "Form Submit နှင့် Input တန်ဖိုးများ",
        "lesson": "submit event ကို form မှာ နားထောင်ရင် button click နဲ့ Enter နှစ်မျိုးလုံးကို ကိုင်တွယ်လို့ရပါတယ်။ preventDefault() က browser ရဲ့ default submission ကို ရပ်ပေးပါတယ်။",
        "hint": "Event handler ထဲမှာ event.preventDefault() နဲ့ input.value.trim() သုံးပါ။",
        "task": [
          "Form submit လုပ်တဲ့အခါ name input ကို ဖတ်ပြီး #message ထဲမှာ Hello, [name]! လို့ပြပါ။ Default submission ရပ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Form submission ကို ရပ်ပြီး name ဖြင့် greeting ပြသည်"
        ]
      },
      "promises": {
        "title": "Promises နှင့် Then",
        "lesson": "Promise က နောက်မှသိရမယ့် result ကို ကိုယ်စားပြုပါတယ်။ then() နဲ့ resolve ဖြစ်တဲ့ value ကို ဆက်သုံးနိုင်ပါတယ်။",
        "hint": "return promise.then(value => \"Status: \" + value) သုံးနိုင်ပါတယ်။",
        "task": [
          "formatStatus(promise) မှာ promise resolve ဖြစ်လာတဲ့ value ကို Status: ရှေ့ကပ်ပြီး Promise အသစ်နဲ့ ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Resolve values နှစ်မျိုးကို မှန်ကန်စွာ format လုပ်သည်"
        ]
      },
      "await": {
        "title": "Async/Await",
        "lesson": "async function က Promise ပြန်ပေးပါတယ်။ Promise အဖြေကို await နဲ့ စောင့်ပြီး နောက်လိုင်းမှာ ပြန်သုံးနိုင်ပါတယ်။",
        "hint": "const prices = await loadPrices() ပြီးရင် reduce နဲ့ စုပါ။",
        "task": [
          "async totalFrom(loadPrices) ရေးပါ။ loadPrices() ပြန်တဲ့ Promise ကို await လုပ်ပြီး prices array ရဲ့ စုစုပေါင်း ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Asynchronous arrays အတွက် result မှန်သည်"
        ]
      },
      "fetch": {
        "title": "Fetch API နှင့် JSON",
        "lesson": "fetch() က Response promise ပြန်ပေးပါတယ်။ response.ok နဲ့ HTTP status ကို စစ်ပြီး response.json() နဲ့ JSON body ကို ဖတ်နိုင်ပါတယ်။ sampleAPI က lab ထဲက JSON sample URL ပါ။",
        "hint": "Response နဲ့ JSON body နှစ်ခုစလုံးကို await လုပ်ပါ။ အောင်မြင်တဲ့ result ကို loadNames(sampleAPI).then(console.log) နဲ့ မြင်နိုင်ပါတယ်။",
        "task": [
          "loadNames(url) ရေးပါ။ fetch နဲ့ url ကို ဖတ်ပါ။ Response အောင်မြင်ရင် records ထဲက name တွေကို array အဖြစ်ပြန်ပါ။ မအောင်မြင်ရင် Error throw လုပ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "JSON ကို ဖတ်ပြီး item names ပြန်သည်",
          "HTTP error response ကို reject လုပ်သည်"
        ]
      },
      "storage": {
        "title": "Web Storage နှင့် JSON",
        "lesson": "Web Storage မှာ values တွေကို string အဖြစ် သိမ်းပါတယ်။ Object သိမ်းဖို့ JSON.stringify()၊ ပြန်ဖတ်ဖို့ JSON.parse() သုံးပါ။ Lab ရဲ့ practiceStorage မှာ Web Storage နဲ့ ဆင်တူတဲ့ getItem၊ setItem၊ removeItem နဲ့ clear ရှိပါတယ်။",
        "hint": "practiceStorage.setItem(\"theme\", JSON.stringify({ theme })) နဲ့ စနိုင်ပါတယ်။",
        "task": [
          "saveTheme(theme) က theme key အောက်မှာ { theme } object ကို သိမ်းပါ။ loadTheme() က ပြန်ဖတ်ပြီး object ပြန်ပါ။ မရှိရင် null ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Theme ကို JSON ဖြင့် သိမ်းပြီး ပြန်ဖတ်နိုင်သည်"
        ]
      },
      "errors": {
        "title": "Try/Catch ဖြင့် Error ကိုင်တွယ်ခြင်း",
        "lesson": "try/catch က runtime exception ကို ကိုင်တွယ်ပေးပါတယ်။ Debug လုပ်ချိန် input၊ actual output နဲ့ expected output ကို ခွဲကြည့်ရင် အမှားရှာရလွယ်ပါတယ်။",
        "hint": "JSON.parse(value) ကို try block ထဲ ခေါ်ပြီး catch မှာ null ပြန်ပါ။",
        "task": [
          "safeParse(value) မှာ valid JSON ကို parse လုပ်ပြီး result ပြန်ပါ။ Invalid JSON ဆိုရင် null ပြန်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Valid JSON နဲ့ invalid input ကို မှန်ကန်စွာ ကိုင်တွယ်သည်"
        ]
      },
      "create-list-items": {
        "title": "JavaScript နဲ့ List Items ဖန်တီးခြင်း",
        "lesson": "document.createElement() နဲ့ element အသစ်လုပ်လို့ရပါတယ်။ textContent နဲ့ စာသားထည့်ပြီး append() နဲ့ စာမျက်နှာထဲ ထည့်ပါ။",
        "hint": "document.createElement(\"li\") သုံးပါ။ textContent ပေးပြီး #drinks မှာ append() သုံးပါ။",
        "task": [
          "addItem(name) ရေးပါ။ name ရဲ့ ဘေးက spaces တွေကို ဖြုတ်ပြီး အလွတ်ဖြစ်နေရင် ကျော်ပါ။",
          "အလွတ်မဟုတ်တဲ့ name တစ်ခုချင်းစီအတွက် #drinks ထဲ li အသစ် ထည့်ပါ။ Angle brackets ပါရင်တောင် name ကို ရိုးရိုးစာသားအဖြစ် ပြပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "အရင် items တွေကို အစားမထိုးဘဲ ခေါ်လိုက်တိုင်း list item အသစ် ထည့်ပါတယ်",
          "Angle brackets ပါတဲ့ input ကို ရိုးရိုးစာသားအဖြစ် ပြပါတယ်"
        ]
      },
      "update-remove-items": {
        "title": "List Items တွေကို ပြင်ခြင်း၊ ဖယ်ရှားခြင်း",
        "lesson": "ရှိပြီးသား element တစ်ခုရဲ့ စာသားနဲ့ classes တွေကို ပြင်နိုင်ပါတယ်။ DOM ကနေ ဖယ်ဖို့ remove() သုံးပါ။ ID မရှိလို့ error မဖြစ်စေဖို့ element ကို အရင်ရှာပါ။",
        "hint": "ID နဲ့ item ကို ရှာပါ။ ပြီးရင် textContent၊ classList.toggle() သို့မဟုတ် remove() သုံးပါ။ ပြောင်းလဲမှု မလုပ်ခင် item က #menu ထဲမှာ ရှိမရှိ စစ်ပါ။",
        "task": [
          "ID နဲ့ ကိုက်တဲ့ list item ရဲ့ စာသား ပြောင်းဖို့ renameItem(id, name) ရေးပါ။",
          "featured class ကို ထည့်ဖို့၊ ဖယ်ဖို့ toggleFeatured(id) ရေးပါ။ အဲဒီ list item ကို ဖယ်ဖို့ removeItem(id) ရေးပါ။",
          "ID က #menu ထဲက list item နဲ့ မကိုက်ရင် စာမျက်နှာကို မပြောင်းပါနဲ့။"
        ],
        "visual": [],
        "checkLabels": [
          "ရှိပြီးသား item နာမည်ကို ပြောင်းနိုင်ပြီး Featured ကို ဖွင့်ပိတ်နိုင်ပါတယ်",
          "ရွေးထားတဲ့ item ကို ဖယ်ပြီး ကျန်တဲ့အကြောင်းအရာတွေကို ဒီအတိုင်း ထားပါတယ်"
        ]
      },
      "event-bubbling": {
        "title": "Click Event က Parent ဆီ တက်သွားပုံ",
        "lesson": "Click တစ်ချက်က နှိပ်လိုက်တဲ့ element ရဲ့ handler နဲ့ သူ့ parent တွေရဲ့ handlers ကိုပါ ခေါ်နိုင်ပါတယ်။ ဒါကို bubbling လို့ ခေါ်ပါတယ်။ event.target က click စတဲ့နေရာဖြစ်ပြီး event.currentTarget က လက်ရှိ handler ချိတ်ထားတဲ့ element ဖြစ်ပါတယ်။",
        "hint": "event.target.id နဲ့ event.currentTarget.id ကို ဖတ်ပါ။ Button ထဲက label ကို နှိပ်ပြီး panel ဆီ event တက်သွားတဲ့အခါ target တူနေတာကို ကြည့်ပါ။",
        "task": [
          "#add နဲ့ #panel မှာ click listeners တစ်ခုစီ ထည့်ပြီး နှစ်ခုလုံးက report(event) ကို ခေါ်ပါစေ။",
          "ခေါ်လိုက်တိုင်း targetId -> currentTargetId ပုံစံနဲ့ စာကြောင်းတစ်ကြောင်း #event-log ထဲ ထပ်ထည့်ပါ။ တကယ့် IDs တွေ သုံးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Click က button ဆီ အရင်ရောက်ပြီး parent ဆီ တက်သွားပါတယ်",
          "Event တက်သွားချိန်မှာ နှိပ်ခဲ့တဲ့ label က target အဖြစ် ရှိနေပါတယ်"
        ]
      },
      "event-delegation": {
        "title": "Click Listener တစ်ခုနဲ့ စာရင်းတစ်ခုကို ကိုင်တွယ်ခြင်း",
        "lesson": "Child တစ်ခုချင်းစီမှာ listener တပ်မယ့်အစား parent မှာ listener တစ်ခုတည်း ထားလို့ရပါတယ်။ ဒါကို event delegation လို့ ခေါ်ပါတယ်။ နောက်ပိုင်းထပ်ထည့်တဲ့ items တွေပေါ်က clicks တွေကိုလည်း parent က ကိုင်တွယ်နိုင်ပါတယ်။",
        "hint": "အနီးဆုံး ကိုက်ညီတဲ့ button ကို ရှာဖို့ event.target.closest(\"button[data-item]\") သုံးပါ။ Button က #catalog ထဲမှာ ရှိမရှိ စစ်ပါ။",
        "task": [
          "#catalog မှာ click listener တစ်ခု ထည့်ပါ။ အထဲက button ကို နှိပ်ရင် Selected: ရဲ့နောက်မှာ data-item value ကို ထည့်ပြီး #selection မှာ ပြပါ။",
          "Button အထဲက စာသားကို နှိပ်လို့ရအောင်၊ နောက်မှ ထည့်တဲ့ buttons တွေလည်း အလုပ်လုပ်အောင် ရေးပါ။ Catalog button အပြင်က click တွေကို ကျော်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Button အထဲက click က မှန်တဲ့ item ကို ရွေးပြီး မဆိုင်တဲ့ clicks တွေကို ကျော်ပါတယ်",
          "Listener တစ်ခုတည်းက နောက်မှ ထည့်တဲ့ button မှာပါ အလုပ်လုပ်ပါတယ်"
        ]
      },
      "event-loop": {
        "title": "Event Loop အလုပ်လုပ်ပုံ စမ်းကြည့်ခြင်း",
        "lesson": "JavaScript က လက်ရှိ run နေတဲ့ code ပြီးမှ စောင့်နေတဲ့ အလုပ်တွေကို ဆက်လုပ်ပါတယ်။ Promise callback က microtask ပါ။ Timer ကို အရင်သတ်မှတ်ထားရင်တောင် browser က microtask ကို timer task မတိုင်ခင် run ပါတယ်။",
        "hint": "setTimeout(callback, 0) နဲ့ Promise.resolve().then(callback) သုံးပါ။ setTimeout ကို အရင်ရေးထားပြီး Promise က အရင် run တာကို ကြည့်ပါ။",
        "task": [
          "showOrder() ရေးပါ။ Start ကို log ထုတ်ပါ။ Timer လို့ ထုတ်မယ့် zero-delay timer နဲ့ Promise လို့ ထုတ်မယ့် Promise callback သတ်မှတ်ပါ။ ပြီးရင် End ကို log ထုတ်ပါ။",
          "Function ကို run ပြီး console မှာ စစ်ပါ။ Start၊ End၊ Promise၊ Timer အစဉ်အတိုင်း ပေါ်ရပါမယ်။"
        ],
        "visual": [],
        "checkLabels": [
          "ပုံမှန် code အရင် run ပါတယ်။ ပြီးရင် Promise၊ နောက်ဆုံးမှ timer ကို run ပါတယ်"
        ]
      },
      "post-json": {
        "title": "HTTP POST နဲ့ JSON ပို့ခြင်း",
        "lesson": "GET နဲ့ data ဖတ်နိုင်ပါတယ်။ POST ကတော့ server ဆီ data ပို့ပြီး လုပ်ဆောင်ခိုင်းတာပါ။ fetch() နဲ့ JSON ပို့ဖို့ method နဲ့ Content-Type သတ်မှတ်ပြီး data ကို string ပြောင်းပါ။ ဒီ Lab မှာ စမ်းသပ်ဖို့ sample API ပါပါတယ်။",
        "hint": "method: \"POST\"၊ Content-Type header ကို application/json နဲ့ body: JSON.stringify({ item, quantity }) သတ်မှတ်ပါ။ ပြီးရင် response.ok စစ်ပြီး response.json() ပြန်ပေးပါ။",
        "task": [
          "async createOrder(item, quantity) ရေးပါ။ item နဲ့ quantity ကို JSON ပြောင်းပြီး POST နဲ့ samplePostAPI ဆီ ပို့ပါ။",
          "response.ok က false ဖြစ်ရင် error ထုတ်ပါ။ အောင်မြင်ရင် response ရဲ့ JSON ကို ပြန်ပေးပါ။ ပေးထားတဲ့ function call နဲ့ console မှာ order အသစ်ကို ကြည့်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "JSON POST က ပို့ထားတဲ့ item နဲ့ quantity ပါတဲ့ order အသစ်ကို ပြန်ပေးပါတယ်",
          "API က အမှားပြန်တဲ့အခါ မမှန်တဲ့ order ကို error အဖြစ် ကိုင်တွယ်ပါတယ်"
        ]
      }
    }
  },
  "projects": {
    "title": "ပေါင်းစပ် လေ့ကျင့်ခန်း",
    "description": "HTML၊ CSS နဲ့ JavaScript ကို တွဲသုံးပြီး အသေးစား web features တွေ ဆောက်ပါ။",
    "modules": [
      "Layout နှင့် Interface",
      "Data နှင့် State"
    ],
    "exercises": {
      "navigation": {
        "title": "Screen အကျယ်အလိုက် ပြောင်းလဲသည့် Navigation",
        "lesson": "Navigation တစ်ခုမှာ semantic markup၊ screen width အလိုက် layout နဲ့ keyboard အသုံးပြုနိုင်တဲ့ toggle လိုပါတယ်။",
        "hint": "CSS media query နဲ့ #menu-toggle visibility ကို ထိန်းပါ။ JS မှာ links.hidden ကို toggle လုပ်ပြီး aria-expanded ကို လိုက်ပြောင်းပါ။ Desktop CSS မှာ links ကို ပြန်ပြပါ။",
        "task": [
          "Desktop မှာ nav အလျားလိုက် ပြပါ။",
          "Mobile မှာ Menu button ပေါ်ပြီး links ကို အစမှာ ဖျောက်ထားပါ။",
          "Menu နှိပ်တိုင်း links ဖွင့်ပိတ်ပြီး aria-expanded ကို update လုပ်ပါ။"
        ],
        "visual": [
          "Desktop preview ကို အနည်းဆုံး 500px ရှိတဲ့ screen မှာ ဖွင့်ပြီး links တွေ အလျားလိုက်ပေါ်တာ စစ်ပါ။",
          "Mobile preview မှာ Menu button နှိပ်ပြီး links ဖွင့်ပိတ်နိုင်တာ စစ်ပါ။"
        ],
        "checkLabels": [
          "Mobile menu က နှိပ်ရင် ဖွင့်ပိတ်ပြီး aria-expanded ကို update လုပ်သည်"
        ]
      },
      "registration": {
        "title": "စာရင်းသွင်း Form",
        "lesson": "HTML native validation နဲ့ JavaScript submit handling ကို တွဲသုံးပြီး valid input လက်ခံကာ user ကို feedback ပြနိုင်ပါတယ်။",
        "hint": "Submit event မှာ preventDefault() ခေါ်ပြီး #message ရဲ့ textContent ကို ပြောင်းပါ။",
        "task": [
          "Name နဲ့ email ကို required လုပ်ပြီး email type ထည့်ပါ။",
          "Submit လုပ်ရင် page refresh မဖြစ်ဘဲ Thanks, Aye! လို confirmation ပြပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Required name နဲ့ valid email input ပါသည်",
          "Submit ပြီး confirmation ပြသည်"
        ]
      },
      "faq": {
        "title": "အမေးအဖြေ ဖွင့်ပိတ်ခြင်း",
        "lesson": "Sibling sections တစ်ခုချင်းစီရဲ့ state ကို ထိန်းချင်ရင် toggle event နားထောင်ပြီး ဖွင့်ထားတဲ့ အခြား section တွေကို ပိတ်နိုင်ပါတယ်။",
        "hint": "details အားလုံးကို ရွေးပြီး toggle event မှာ item.open true ဖြစ်ရင် အခြား items ကို ပိတ်ပါ။",
        "task": [
          "မေးခွန်းနှစ်ခုကို details နဲ့ summary သုံးပါ။ တစ်ခုဖွင့်ရင် ဖွင့်ထားတဲ့ နောက်တစ်ခုကို ပိတ်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "FAQs နှစ်ခုနဲ့ summary labels ပါသည်",
          "တစ်ကြိမ်မှာ FAQ တစ်ခုပဲ ဖွင့်ထားသည်"
        ]
      },
      "search": {
        "title": "ပစ္စည်း ရှာဖွေခြင်း",
        "lesson": "input event က query တန်ဖိုးပြောင်းတိုင်း ရောက်လာပါတယ်။ String နှစ်ခုကို lowercase ပြောင်းပြီး စစ်ရင် case ကို မခွဲဘဲ ရှာနိုင်ပါတယ်။",
        "hint": "query နဲ့ product စာသား နှစ်ခုလုံး lowercase ပြောင်းပြီး includes() နဲ့ စစ်ပါ။ Product ရဲ့ hidden property ကို သတ်မှတ်ပါ။",
        "task": [
          "Search field ထဲ ရိုက်လိုက်တိုင်း name မှာ query ပါတဲ့ product တွေပဲ ပြပါ။ Field အလွတ်ဆိုရင် အားလုံး ပြန်ပြပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Search က case မခွဲဘဲ filter လုပ်ပြီး query ရှင်းရင် အားလုံးပြသည်"
        ]
      },
      "todos": {
        "title": "လုပ်စရာစာရင်း သိမ်းခြင်း",
        "lesson": "Task array ကို render လုပ်ပြီး update တိုင်း JSON အဖြစ် သိမ်းနိုင်ပါတယ်။ Page ကို ပြန်ဖွင့်တဲ့အခါ storage ဖတ်ပြီး list ကို ပြန်ဖော်နိုင်ပါတယ်။",
        "hint": "အစမှာ JSON.parse(practiceStorage.getItem(\"tasks\") ?? \"[]\") နဲ့ ဖတ်ပါ။ renderTasks() မှာ textContent သုံးပြီး task စာသား ထည့်ပါ။",
        "task": [
          "Form မှာ ရိုက်ထည့်တဲ့ task ကို #tasks ထဲ li အဖြစ် ထည့်ပါ။",
          "Blank task ကို ကျော်ပါ။",
          "Update တိုင်း tasks key အောက်မှာ JSON array သိမ်းပြီး Run ပြန်နှိပ်ရင် list ပြန်ဖော်ပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Task အသစ်ကို ပြပြီး သိမ်းထားသည်။ Blank input ကို ကျော်သည်။"
        ]
      },
      "api-display": {
        "title": "API ရလဒ်နှင့် အခြေအနေများ ပြခြင်း",
        "lesson": "Fetch မစခင် loading state ပြပါ။ အောင်မြင်ရင် list ကို render လုပ်ပြီး မအောင်မြင်ရင် user ဖတ်လို့ရတဲ့ error ပြပါ။",
        "hint": "Load နဲ့ Try error button ကို function တစ်ခုတည်း ချိတ်ပြီး URL မတူတာပဲ ပေးပါ။ try/catch သုံးပြီး #status ကို update လုပ်ပါ။",
        "task": [
          "Load items နှိပ်ရင် sampleAPI က product names တွေကို #items ထဲ ပြပါ။",
          "စောင့်နေချိန် Loading…၊ အောင်မြင်ရင် Loaded၊ request အမှားရင် Unable to load items. ပြပါ။ Try error က error sample ကို သုံးပါ။"
        ],
        "visual": [],
        "checkLabels": [
          "Loading နဲ့ success states မှန်ပြီး names အားလုံး ပြသည်",
          "Error state ကို ပြသည်"
        ]
      }
    }
  }
};
