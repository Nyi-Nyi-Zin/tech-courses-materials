import { p, part, page, guide } from './content.js';
import { demoPage, example, mdn, standalone } from './examples.js';

const cssRef = (label, name) => ['MDN · ' + label, mdn + 'Web/CSS/' + name];
const notices = '<p class="notice">Your order is ready.</p>\n<p>Your package is on the way.</p>';
const cards = '<div class="cards"><div>Pen</div><div>Notebook</div><div>Folder</div></div>';

function css(id, title, text, rules, expected, body = notices, check) {
  return example(id, title, text, demoPage(title.en, body, rules), expected, standalone, check);
}

export const cssGuide = guide('css', 'CSS', 'W3C CSS Snapshot 2026', p(
  'Start with one style rule, then learn how the browser chooses styles and arranges boxes on screens of different sizes.',
  'CSS rule တစ်ကြောင်းနဲ့ စပြီး browser က style ဘယ်လိုရွေးလဲ၊ မျက်နှာပြင် အကျယ်အမျိုးမျိုးမှာ အကွက်တွေကို ဘယ်လိုနေရာချလဲ လေ့လာပါ။',
), [
  page('getting-started', p('Your first CSS rule', 'ပထမဆုံး CSS Rule ရေးခြင်း'), p(
    'CSS (Cascading Style Sheets) describes how HTML looks. HTML gives a paragraph its role on the page; CSS can change its color, spacing, and position. This lesson uses the HTML document structure you already built.',
    'CSS (Cascading Style Sheets) က HTML ကို browser ပေါ်မှာ ဘယ်လိုပုံပေါ်စေမလဲ သတ်မှတ်ပါတယ်။ HTML နဲ့ စာပိုဒ်တစ်ခု ရေးပြီး CSS နဲ့ အရောင်၊ အကွာအဝေးနဲ့ နေရာကို ပြောင်းနိုင်ပါတယ်။ ဒီ lesson မှာ HTML document ဖွဲ့စည်းပုံကို ပြန်သုံးပါမယ်။',
  ), [
    css('rule', p('Read one CSS rule', 'CSS Rule တစ်ခုကို ဖတ်ပုံ'), p(
      'A rule selects HTML elements and lists what to change. Here p is the selector, so the rule applies to paragraph elements. The braces hold declarations. In color: teal, color is the property you change, and teal is the value you give it. A semicolon ends the declaration.',
      'Rule တစ်ခုမှာ ဘယ် HTML element တွေကို ရွေးမလဲ၊ ဘာပြောင်းမလဲ ရေးပါတယ်။ ဒီမှာ p က selector ဖြစ်လို့ စာပိုဒ်တွေကို ရွေးပါတယ်။ { } ကြားမှာ ပြောင်းမယ့် သတ်မှတ်ချက်တွေကို ရေးပါတယ်။ color: teal မှာ color က ပြောင်းမယ့် property ဖြစ်ပြီး teal က ပေးထားတဲ့ value ပါ။ သတ်မှတ်ချက်တစ်ခုကို ; နဲ့ ပိတ်ပါတယ်။',
    ), '    p { color: teal; }', p('Both paragraphs are teal. Change teal to purple and reload to see both change.', 'စာပိုဒ်နှစ်ခုလုံး စိမ်းပြာရောင် ဖြစ်ပါမယ်။ teal ကို purple လို့ ပြောင်းပြီး reload လုပ်ကြည့်ပါ။')),
    part('style', p('Where does <style> go?', '<style> ကို ဘယ်မှာရေးလဲ။'), p(
      'The previous example puts a <style> element in <head>. The browser reads its CSS when it opens that HTML file. This is convenient for a small example you can copy into one file.',
      'အပေါ်က နမူနာမှာ <head> ထဲကို <style> element ထည့်ထားပါတယ်။ Browser က HTML ဖိုင်ဖွင့်တဲ့အခါ အတွင်းက CSS ကိုပါ ဖတ်ပါတယ်။ ဖိုင်တစ်ခုတည်းနဲ့ စမ်းတဲ့ နမူနာတိုတွေမှာ ဒီပုံစံ သုံးလို့လွယ်ပါတယ်။',
    ), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>CSS in the head</title>
    <style>
      p { color: teal; }
    </style>
  </head>
  <body>
    <p>Registration is open.</p>
  </body>
</html>`),
    example('stylesheet', p('Link a separate CSS file', 'CSS ဖိုင်သီးသန့် ချိတ်ခြင်း'), p(
      'A stylesheet can live in its own .css file. In head, rel="stylesheet" tells the browser what the link is for, and href gives the file location. With both files in the same folder, the file name is enough.',
      'Stylesheet ကို .css ဖိုင်သီးသန့်မှာလည်း ရေးနိုင်ပါတယ်။ head ထဲက link မှာ rel="stylesheet" က CSS ဖိုင်ချိတ်တာလို့ browser ကို ပြောပြီး href က ဖိုင်လိပ်စာ ပြောပါတယ်။ ဖိုင်နှစ်ခု folder တူရင် ဖိုင်နာမည်ပဲ ရေးလို့ရပါတယ်။',
    ), 'p { color: purple; }', p('The browser reads style.css and makes the paragraphs purple.', 'Browser က style.css ကို ဖတ်ပြီး စာပိုဒ်တွေကို ခရမ်းရောင် ပြပေးပါမယ်။'), p(
      'Save the rule below in style.css beside the previous .html file. Remove its <style> block. In its place, inside <head>, write <link rel="stylesheet" href="style.css">. Save both files and reload.',
      'အောက်က rule ကို အရင် .html ဖိုင်နဲ့ folder တူတဲ့ style.css ထဲ သိမ်းပါ။ HTML ထဲက <style> အပိုင်းကို ဖယ်ပြီး အဲဒီ <head> ထဲမှာ <link rel="stylesheet" href="style.css"> ထည့်ပါ။ ဖိုင်နှစ်ခုလုံး သိမ်းပြီး reload လုပ်ပါ။',
    ), p('If the text stays unchanged, check that the link and file use exactly the same name and that both files are saved in the same folder.', 'စာသားအရောင် မပြောင်းရင် link မှာ ရေးထားတဲ့နာမည်နဲ့ CSS ဖိုင်နာမည် တိတိကျကျ တူလား၊ folder တူလား စစ်ပါ။')),
  ], [['MDN · Getting started with CSS', mdn + 'Learn_web_development/Core/Styling_basics/Getting_started']]),

  page('cascade', p('Selectors, cascade, and inheritance', 'ရွေးချယ်ပုံ၊ Cascade နဲ့ Inheritance'), p(
    'The browser first finds rules that match an element. It then chooses the winning value when rules set the same property. Finally, some properties can take a value from a parent.',
    'Browser က element နဲ့ ကိုက်တဲ့ rule တွေကို အရင်ရှာပါတယ်။ ကိုက်တဲ့ rule တွေက property တစ်ခုတည်းကို သတ်မှတ်ရင် ဘယ်တန်ဖိုးကို သုံးမလဲ ရွေးပါတယ်။ Property တချို့မှာ parent ဆီက တန်ဖိုးကိုလည်း ဆက်ယူနိုင်ပါတယ်။',
  ), [
    css('selectors', p('Select elements by tag, class, or ID', 'Tag၊ Class၊ ID နဲ့ Element ရွေးခြင်း'), p(
      'A selector is a pattern for matching elements. p matches every paragraph. A dot followed by a class name matches elements with that class. A hash followed by an ID matches the element with that id. Use classes for styles you plan to reuse.',
      'Selector ဆိုတာ ဘယ် element တွေနဲ့ ကိုက်ရမလဲ ရေးထားတဲ့ ပုံစံပါ။ p က စာပိုဒ်တိုင်းကို ရွေးပါတယ်။ . နောက်မှာ class နာမည်ရေးရင် အဲဒီ class ပါတဲ့ element တွေကို ရွေးပါတယ်။ # နောက်မှာ id နာမည်ရေးရင် အဲဒီ id နဲ့ element ကို ရွေးပါတယ်။ ပြန်သုံးမယ့် style တွေအတွက် class သုံးလို့ရပါတယ်။',
    ), '    p { color: teal; }\n    .notice { font-weight: bold; }\n    #catalog-title { color: purple; }', p('Both paragraphs are teal, the first is bold, and the heading is purple.', 'စာပိုဒ်နှစ်ခုလုံး စိမ်းပြာရောင်၊ ပထမစာပိုဒ် စာလုံးထူ၊ ခေါင်းစဉ် ခရမ်းရောင် ဖြစ်ပါမယ်။'), '<h1 id="catalog-title">Product catalog</h1>\n' + notices),
    css('descendants', p('Select an element inside another element', 'Element တစ်ခုအတွင်းက Element ကို ရွေးခြင်း'), p(
      'A space between selectors means the element on the right must be somewhere inside an element matching the selector on the left. A greater-than sign narrows that relationship to a direct child.',
      'Selector နှစ်ခုကြားမှာ space ခြားရင် ညာဘက်က element ဟာ ဘယ်ဘက်က selector နဲ့ ကိုက်တဲ့ element အတွင်း တစ်နေရာရာမှာ ရှိရပါတယ်။ > သင်္ကေတ သုံးရင် တိုက်ရိုက် child ကိုပဲ ရွေးပါတယ်။',
    ), '    .card p { color: blue; }', p('Only “Your order is ready.” becomes blue because it is the paragraph inside the card.', 'Card ထဲက စာပိုဒ်ဖြစ်တဲ့ “Your order is ready.” တစ်ကြောင်းပဲ အပြာရောင် ဖြစ်ပါမယ်။'), '<div class="card"><p>Your order is ready.</p></div>\n<p>Your package is on the way.</p>'),
    css('priority', p('How does the cascade choose?', 'Cascade က တန်ဖိုး ဘယ်လိုရွေးလဲ။'), p(
      'The cascade is the procedure for resolving competing declarations. In this example, the two rules have the same selector and set the same property. Other priorities are equal, so the rule written later wins. The border from the first rule still applies because the second rule does not set border.',
      'Cascade ဆိုတာ သတ်မှတ်ချက်တွေ တိုက်နေတဲ့အခါ ဘယ်တန်ဖိုးသုံးမလဲ browser က ဆုံးဖြတ်တဲ့ အစီအစဉ်ပါ။ ဒီနမူနာမှာ selector တူ၊ property တူပြီး တခြားဦးစားပေးမှုတွေ တူနေလို့ နောက်မှရေးထားတဲ့ color ကို သုံးပါတယ်။ ဒုတိယ rule မှာ border မသတ်မှတ်ထားလို့ ပထမ rule ရဲ့ border ကို ဆက်သုံးပါတယ်။',
    ), '    .notice { color: teal; border: 1px solid; }\n    .notice { color: purple; }', p('The first paragraph is purple and still has a border. Reverse the two rules to make it teal.', 'ပထမစာကြောင်းက ခရမ်းရောင်ဖြစ်ပြီး အနားသတ် ဆက်ရှိပါမယ်။ Rule နှစ်ခု ရှေ့နောက် လဲကြည့်ရင် စိမ်းပြာရောင် ပြောင်းပါမယ်။')),
    css('specificity', p('Which selector has greater specificity?', 'Specificity ဆိုတာ ဘာလဲ။'), p(
      'Specificity compares matching selectors after higher-priority cascade rules tie. An ID selector is stronger than a class selector, and a class selector is stronger than a type selector such as p. Source order breaks a tie when their priorities and specificity match.',
      'Specificity က အထက်အဆင့် ဦးစားပေးမှုတွေ တူတဲ့အခါ ကိုက်နေတဲ့ selector တွေကို နှိုင်းတာပါ။ ID selector က class selector ထက် ဦးစားပိုရပြီး class selector က p လို tag နာမည်နဲ့ ရွေးတာထက် ဦးစားပိုရပါတယ်။ ဦးစားပေးမှုနဲ့ specificity တူရင် ရေးထားတဲ့ အစီအစဉ်ကို ကြည့်ပါတယ်။',
    ), '    .notice { color: purple; }\n    p { color: teal; }', p('The first paragraph is purple even though the p rule comes later. The second paragraph is teal.', 'p rule ကို နောက်မှ ရေးထားပေမယ့် ပထမစာပိုဒ်က ခရမ်းရောင် ဖြစ်ပါမယ်။ ဒုတိယစာပိုဒ်က စိမ်းပြာရောင် ဖြစ်ပါမယ်။')),
    css('inheritance', p('How does inheritance work?', 'Inheritance ဘယ်လိုအလုပ်လုပ်လဲ။'), p(
      'Inheritance means an element can get a computed property value from its parent. Properties such as color normally inherit. A property like border does not normally inherit; the parent and child each have a separate box.',
      'Inheritance ဆိုတာ element တစ်ခုက parent ရဲ့ တွက်ပြီးသား property တန်ဖိုးကို ဆက်ယူတာပါ။ color လို property က ပုံမှန်အားဖြင့် ဆက်ယူပါတယ်။ border ကတော့ parent တစ်ကွက်၊ child တစ်ကွက် သီးသန့်ရှိလို့ ပုံမှန်အားဖြင့် ဆက်မယူပါဘူး။',
    ), '    .orders { color: teal; border: 2px solid; }\n    .notice { color: purple; }', p('The container has one border. “Your order is ready” is purple, and “Your package is on the way” inherits teal.', 'အပြင်အကွက်မှာ အနားသတ်တစ်ခု ပေါ်ပါတယ်။ “Your order is ready” က ခရမ်းရောင်၊ “Your package is on the way” က parent ဆီက စိမ်းပြာရောင် ရပါမယ်။'), '<div class="orders">\n' + notices + '\n</div>'),
    css('variables', p('Reuse values with custom properties', 'Custom Properties နဲ့ တန်ဖိုးပြန်သုံးခြင်း'), p(
      'A custom property is a value you name yourself. Names start with --. :root matches the root element so descendants can inherit the value. var(--accent, teal) reads that value and uses teal as a fallback if the custom property is missing.',
      'Custom property က ကိုယ်ပေးထားတဲ့ နာမည်နဲ့ CSS တန်ဖိုးတစ်ခုပါ။ နာမည်ကို -- နဲ့ စပါတယ်။ :root က အပြင်ဆုံး element ကို ရွေးလို့ အောက်က element တွေက တန်ဖိုးကို ဆက်ယူနိုင်ပါတယ်။ var(--accent, teal) က --accent တန်ဖိုးကို ဖတ်ပြီး အဲဒီ property မရှိရင် teal ကို အစားထိုးသုံးပါတယ်။',
    ), '    :root { --accent: purple; }\n    .notice { color: var(--accent, teal); }', p('The first paragraph is purple. Delete the --accent declaration to make it teal.', 'ပထမစာပိုဒ်က ခရမ်းရောင် ဖြစ်ပါမယ်။ --accent သတ်မှတ်ချက်ကို ဖျက်ရင် စိမ်းပြာရောင် ပြောင်းပါမယ်။')),
    css('layers', p('Order groups of rules with @layer', '@layer နဲ့ Rule အုပ်စုတွေကို အစဉ်သတ်မှတ်ခြင်း'), p(
      'A cascade layer is a named priority group. With normal declarations in the same origin, a later layer wins over an earlier layer before specificity is compared. Declare the intended layer order first. Normal declarations outside any layer outrank normal declarations in layers.',
      'Cascade layer ဆိုတာ rule တွေကို ဦးစားပေးအုပ်စု နာမည်တပ်ပြီး ခွဲထားတာပါ။ တူညီတဲ့ရင်းမြစ်က ပုံမှန်သတ်မှတ်ချက်တွေမှာ selector အား ဘယ်လောက်ရှိလဲ မနှိုင်းခင် နောက်အလွှာက ရှေ့အလွှာထက် အနိုင်ရပါတယ်။ Layer အစဉ်ကို အရင် ကြေညာပါ။ Layer အပြင်မှာရှိတဲ့ ပုံမှန်သတ်မှတ်ချက်က layer ထဲက သတ်မှတ်ချက်တွေထက် ဦးစားရပါတယ်။',
    ), '    @layer base, theme;\n    @layer base { .notice { color: teal; } }\n    @layer theme { p { color: purple; } }', p('Both paragraphs are purple because theme is the later layer.', 'theme က နောက်အလွှာဖြစ်လို့ စာပိုဒ်နှစ်ခုလုံး ခရမ်းရောင် ဖြစ်ပါမယ်။')),
  ], [cssRef('CSS selectors', 'Guides/Selectors'), cssRef('Cascade', 'Guides/Cascade/Introduction'), cssRef('Inheritance', 'Guides/Cascade/Inheritance'), ['W3C · Cascade layers', 'https://www.w3.org/TR/css-cascade-5/#layering']]),

  page('layout', p('Normal flow, box model, and display', 'Normal Flow၊ Box Model နဲ့ Display'), p(
    'The browser lays out HTML as boxes. Start by looking at what happens before you choose Flexbox, Grid, or positioning.',
    'Browser က HTML အကြောင်းအရာကို အကွက်တွေအဖြစ် နေရာချပါတယ်။ Flexbox၊ Grid ဒါမှမဟုတ် Positioning မသုံးခင် မူလပုံစံမှာ ဘယ်လိုနေရာယူလဲ အရင်ကြည့်ပါ။',
  ), [
    css('flow', p('What is normal flow?', 'Normal Flow ဆိုတာဘာလဲ။'), p(
      'Normal flow is the default arrangement of boxes. In the usual horizontal writing mode, paragraphs are block boxes and appear one below another. Inline text flows along a line and wraps when it runs out of space.',
      'Normal flow ဆိုတာ browser က အကွက်တွေကို မူလအတိုင်း နေရာချတဲ့ပုံပါ။ ပုံမှန် အလျားလိုက်စာရေးပုံမှာ စာပိုဒ်တွေက သီးသန့် block အကွက်တွေဖြစ်လို့ တစ်ခုပြီးတစ်ခု အောက်ဆင်းပါတယ်။ စာကြောင်းထဲက inline စာသားကတော့ လိုင်းတစ်ကြောင်းပေါ် ဆက်ပြီး နေရာမလောက်မှ လိုင်းဆင်းပါတယ်။',
    ), '    p { background: #d6efea; }', p('Two colored blocks appear on separate lines. Bold text stays within the first paragraph’s line.', 'ရောင်စုံအကွက်နှစ်ခု သီးသန့်လိုင်းပေါ်လာပါမယ်။ စာလုံးထူက ပထမစာပိုဒ်ရဲ့ စာကြောင်းထဲမှာပဲ ဆက်နေတာ မြင်ရပါမယ်။'), '<p><strong>Your order</strong> is ready.</p>\n<p>Your package is on the way.</p>'),
    css('box', p('What are the four parts of a box?', 'CSS Box မှာ ဘာအပိုင်းတွေ ပါလဲ။'), p(
      'Content is what the element contains. Padding is the space between content and the border. The border is the edge around it. Margin adds space outside the border. With content-box, a declared width of 120px plus 10px padding and a 2px border on both sides makes a 144px border box.',
      'Content က element ထဲက အကြောင်းအရာပါ။ Padding က content နဲ့ အနားသတ်ကြားက နေရာ၊ border က အနားသတ်၊ margin က အနားသတ် အပြင်ဘက်က အကွာအဝေးပါ။ content-box မှာ width 120px နဲ့ ဘယ်ညာ padding 10px၊ border 2px စီဆိုရင် အနားသတ်အပါ အကျယ် 144px ဖြစ်ပါတယ်။',
    ), '    .notice { width: 120px; padding: 10px; border: 2px solid teal; margin: 16px; }', p('The first box has empty space inside its border and a gap around it. Inspect it and find the box model in DevTools.', 'ပထမအကွက်မှာ အနားသတ်အတွင်း ချန်ထားတဲ့နေရာနဲ့ အပြင်ဘက်ကွာတဲ့နေရာတွေ မြင်ရပါမယ်။ Inspect လုပ်ပြီး DevTools မှာ box model ကို ရှာကြည့်ပါ။')),
    css('sizing', p('How does box-sizing change width?', 'box-sizing က အကျယ်တွက်ပုံ ဘယ်လိုပြောင်းလဲ။'), p(
      'With border-box, the declared width includes content, padding and border. The margin still sits outside that total. The two boxes here have the same width declaration but different sizing rules.',
      'border-box ဆိုရင် သတ်မှတ်ထားတဲ့ width ထဲမှာ content၊ padding နဲ့ border အားလုံး ပါပါတယ်။ Margin က အဲဒီအကျယ်အပြင်မှာပဲ ရှိပါတယ်။ ဒီနမူနာက အကွက်နှစ်ခု width တန်ဖိုးတူပြီး တွက်ပုံပဲ ကွာပါတယ်။',
    ), '    p { width: 120px; padding: 10px; border: 2px solid teal; }\n    .notice { box-sizing: border-box; }', p('The first outer border is 120px wide. The second is 144px wide.', 'ပထမအကွက် အနားသတ်အပါ 120px၊ ဒုတိယအကွက်က 144px ကျယ်ပါမယ်။')),
    css('display', p('How do block, inline, and inline-block fit?', 'Block၊ Inline နဲ့ Inline-block နေရာယူပုံ'), p(
      'display describes how a box participates in layout. A block box starts on its own line. Normal inline text may share or wrap across lines. An inline-block box stays on one line as a unit and can have a set width and height.',
      'display က အကွက်တစ်ခု စာမျက်နှာပေါ်မှာ ဘယ်လိုနေရာယူမလဲ သတ်မှတ်ပါတယ်။ Block က ကိုယ်ပိုင်လိုင်းပေါ် စပါတယ်။ Inline စာသားက လိုင်းတူမှာ ဆက်နိုင်ပြီး နေရာမလောက်ရင် ခွဲဆင်းနိုင်ပါတယ်။ Inline-block က တစ်စုတည်း လိုင်းတူအောင် နေနိုင်ပြီး width၊ height ပေးလို့ရပါတယ်။',
    ), '    span { background: #d6efea; width: 90px; }\n    .block { display: block; }\n    .badge { display: inline-block; }', p('Block takes its own line. Pen stays next to the rest of the text and is 90px wide; the normal inline label uses its text width.', 'Block က ကိုယ်ပိုင်လိုင်းမှာ ပေါ်ပါမယ်။ Pen က ကျန်တဲ့စာနဲ့ လိုင်းတူပြီး 90px ကျယ်ပါမယ်။ ပုံမှန် inline က စာသားအကျယ်အတိုင်းပဲ နေပါတယ်။'), '<span class="block">Block</span>\n<p>Product: <span class="badge">Pen</span> <span>Inline</span></p>'),
    part('flex-grid', p('Choose a layout for a group of boxes', 'အကွက်အစုကို စီဖို့ Layout ရွေးခြင်း'), p(
      'Use normal flow for content that simply follows the previous content. The Flexbox lesson shows how to align a row or column of items. The Grid lesson shows how to design columns and rows together.',
      'အပေါ်က အကြောင်းအရာပြီးမှ နောက်တစ်ခု ဆက်ပေါ်ရင် normal flow နဲ့ ရပါတယ်။ Flexbox lesson မှာ အကွက်တွေကို အတန်း ဒါမှမဟုတ် ကော်လံတစ်လျှောက် ညှိပုံကို ကြည့်ပါမယ်။ Grid lesson မှာ row နဲ့ column နှစ်မျိုးတွဲပြီး စီပုံကို ကြည့်ပါမယ်။',
    ), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Flexbox and Grid</title>
    <style>
      .row { display: flex; gap: 1rem; }
      .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    </style>
  </head>
  <body>
    <h2>Flexbox row</h2>
    <div class="row"><div>Books</div><div>Notes</div></div>

    <h2>Grid with two columns</h2>
    <div class="grid">
      <div>Books</div><div>Notes</div>
      <div>Maps</div><div>Guides</div>
    </div>
  </body>
</html>`),
  ], [cssRef('Normal flow', 'Guides/Display/Flow_layout'), cssRef('Box model', 'Guides/Box_model/Introduction'), cssRef('Display', 'Reference/Properties/display')]),

  page('typography', p('Text size, units, and fonts', 'စာသားအရွယ်၊ ယူနစ်နဲ့ Font'), p(
    'Typography is how text is set so people can read it. CSS lets you choose the size, the space between lines, and the font the browser tries first.',
    'Typography ဆိုတာ ဖတ်ရလွယ်ဖို့ စာသားကို စီစဉ်ပြသပုံပါ။ CSS နဲ့ စာလုံးအရွယ်၊ စာကြောင်းကြား အကွာအဝေးနဲ့ browser က အရင်သုံးမယ့် font ကို ရွေးနိုင်ပါတယ်။',
  ), [
    css('scale', p('Set font size with px, em, and rem', 'px၊ em၊ rem နဲ့ စာလုံးအရွယ် သတ်မှတ်ခြင်း'), p(
      'px is a CSS pixel. For font-size, em uses the parent’s text size as its reference. rem uses the root element’s text size. If the root size is 16px, 1.25rem is 20px. Percentages for font-size refer to the parent’s size.',
      'px က CSS pixel ယူနစ်ပါ။ font-size ရေးတဲ့အခါ em က parent ရဲ့ စာလုံးအရွယ်ကို အခြေခံပြီး rem က root element ရဲ့ စာလုံးအရွယ်ကို အခြေခံပါတယ်။ Root 16px ရှိရင် 1.25rem က 20px ပါ။ font-size မှာ % သုံးရင် parent ရဲ့ အရွယ်အပေါ် တွက်ပါတယ်။',
    ), '    html { font-size: 16px; }\n    .notices { font-size: 20px; }\n    .em { font-size: 1.25em; }\n    .rem { font-size: 1.25rem; }', p('In the same parent, the em paragraph is 25px and the rem paragraph is 20px. Confirm in DevTools → Computed.', 'Parent တူပေမယ့် em ပါတဲ့ စာပိုဒ်က 25px၊ rem ပါတဲ့ စာပိုဒ်က 20px ဖြစ်ပါမယ်။ DevTools → Computed မှာ ကြည့်နိုင်ပါတယ်။'), '<div class="notices"><p class="em">Sized in em</p><p class="rem">Sized in rem</p></div>'),
    css('percentage', p('Size a box relative to its parent', 'Parent အကျယ်နဲ့ တိုင်းပြီး Box အကျယ် ပေးခြင်း'), p(
      'For width in normal flow, a percentage uses the width of the containing block. For example, 75% of a 240px-wide content area is 180px. Change the parent’s width and the child’s width updates too.',
      'Normal flow မှာ width ကို % နဲ့ပေးရင် အပြင်က နေရာချဖို့ အခြေခံတဲ့ အကွက်ရဲ့ အကျယ်ကနေ တွက်ပါတယ်။ ဥပမာ content အကျယ် 240px ရဲ့ 75% က 180px ပါ။ Parent အကျယ် ပြောင်းရင် child ရဲ့ အကျယ်လည်း လိုက်ပြောင်းပါတယ်။',
    ), '    .panel { width: 240px; outline: 1px solid teal; }\n    .panel p { width: 75%; background: #d6efea; }', p('The colored paragraph is 180px wide inside the 240px panel.', '240px ကျယ်တဲ့ panel ထဲက ရောင်စုံစာပိုဒ်က 180px ကျယ်ပါမယ်။'), '<div class="panel"><p>Your order is ready.</p></div>'),
    css('line-height', p('Adjust line spacing with line-height', 'line-height နဲ့ စာကြောင်းအကွာ ပြောင်းခြင်း'), p(
      'line-height sets the height of each text line. A number such as 1.5 multiplies the element’s font size. With a 20px font, 1.5 produces a 30px line height.',
      'line-height က စာကြောင်းတစ်ကြောင်းစီရဲ့ အမြင့် သတ်မှတ်ပါတယ်။ 1.5 လို ကိန်းဂဏန်းသုံးရင် element ရဲ့ စာလုံးအရွယ်နဲ့ မြှောက်တွက်ပါတယ်။ 20px စာလုံးမှာ 1.5 ဆို စာကြောင်းအမြင့် 30px ဖြစ်ပါတယ်။',
    ), '    p { font-size: 20px; line-height: 1.5; width: 20ch; }', p('The text wraps, and each line has room around it. Compare 1.5 with 1.1.', 'စာသား လိုင်းဆင်းပြီး စာကြောင်းတွေကြား နေရာမြင်ရပါမယ်။ 1.5 နဲ့ 1.1 ပြောင်းပြီး နှိုင်းကြည့်ပါ။'), '<p>The library is open every morning and lends books to local residents.</p>'),
    css('load', p('Choose fallback fonts', 'Fallback Font ရွေးခြင်း'), p(
      'font-family is a list the browser tries in order. If the first font is unavailable or cannot display a character, the browser tries another. A generic name like sans-serif lets the browser choose a suitable font. @font-face lets you supply a font file your site owns or is licensed to use; font-display: swap allows fallback text while that file loads.',
      'font-family က browser အစဉ်လိုက် စမ်းမယ့် font စာရင်းပါ။ ပထမ font မရှိရင် ဒါမှမဟုတ် စာလုံးတစ်လုံး မပြနိုင်ရင် နောက် font ကို စမ်းပါတယ်။ sans-serif လို အမျိုးအစားနာမည် ရေးရင် browser က သင့်တော်ရာ font ရွေးပါတယ်။ ကိုယ်ပိုင် ဒါမှမဟုတ် သုံးခွင့်ရှိတဲ့ font ဖိုင်ကို @font-face နဲ့ ချိတ်နိုင်ပါတယ်။ font-display: swap ထည့်ရင် ဖိုင်လာနေချိန် fallback font နဲ့ စာသား အရင်ပေါ်နိုင်ပါတယ်။',
    ), '    .notice { font-family: "Noto Sans Myanmar", Arial, sans-serif; }\n    p { font-family: Georgia, serif; }', p('The first paragraph uses the first suitable sans-serif font in its list. The second uses a serif font.', 'ပထမစာပိုဒ်မှာ စာရင်းထဲက သင့်တော်တဲ့ sans-serif font ကို သုံးပါမယ်။ ဒုတိယစာပိုဒ်မှာ serif font သုံးပါမယ်။')),
  ], [cssRef('Length units', 'Reference/Values/length'), cssRef('Font family', 'Reference/Properties/font-family'), cssRef('Font files', 'Reference/At-rules/@font-face')]),

  page('positioning', p('Positioning and stacking order', 'နေရာချခြင်းနဲ့ အလွှာအစဉ်'), p(
    'CSS positioning changes where a box is drawn. Stacking order determines which box appears on top when two boxes overlap.',
    'CSS positioning က အကွက်တစ်ခု ဘယ်နေရာမှာ ပေါ်မလဲ ပြောင်းပေးပါတယ်။ အကွက်တွေ ထပ်နေတဲ့အခါ ဘယ်အကွက် အပေါ်မှာ ပေါ်မလဲဆိုတာ stacking order က ဆုံးဖြတ်ပါတယ်။',
  ), [
    css('position', p('Place a badge inside its card', 'Card ထဲမှာ တံဆိပ်ကို နေရာသတ်မှတ်ခြင်း'), p(
      'Normal flow uses position: static. With position: relative, the card keeps its normal place and becomes a positioning reference. The badge uses position: absolute, so it leaves normal flow. top and right measure from the nearest positioned ancestor in this example.',
      'Normal flow မှာ position: static က မူလတန်ဖိုးပါ။ Card ကို position: relative လုပ်ရင် မူလနေရာယူထားပြီး အတွင်းက အကွက်တွေအတွက် တိုင်းလို့ရတဲ့ အခြေခံအကွက် ဖြစ်လာပါတယ်။ တံဆိပ်မှာ position: absolute ပါလို့ normal flow က ထွက်ပါတယ်။ ဒီမှာ top နဲ့ right က အနီးဆုံး position သတ်မှတ်ထားတဲ့ ancestor ဆီကနေ တိုင်းပါတယ်။',
    ), '    .card { position: relative; width: 220px; padding: 24px; border: 2px solid teal; }\n    .badge { position: absolute; top: 4px; right: 4px; background: gold; }', p('Sale sits near the top-right of the card. Remove position: relative to see the reference change.', 'Sale က card ညာဘက်အပေါ်ထောင့်နားမှာ ပေါ်ပါမယ်။ position: relative ဖြုတ်ပြီး တိုင်းတဲ့နေရာ ပြောင်းပုံကို ကြည့်ပါ။'), '<div class="card">Pen <span class="badge">Sale</span></div>'),
    css('sticky', p('How do fixed and sticky positions work?', 'Fixed နဲ့ Sticky နေရာယူပုံ'), p(
      'Fixed typically uses the viewport as its reference and stays in place during scrolling. Sticky starts in flow and sticks to a scroll container edge after reaching its offset, until the box reaches the boundary of its containing block.',
      'Fixed က များသောအားဖြင့် browser မြင်ကွင်းကို အခြေခံပြီး scroll လုပ်လည်း နေရာမြဲပါတယ်။ Sticky က ပုံမှန်နေရာက စတယ်။ Scroll လုပ်ရင်း သတ်မှတ်တဲ့ အကွာအဝေးရောက်ရင် scroll container အနားမှာ ကပ်ပြီး မိဘအကွက် သတ်မှတ်နယ်နိမိတ်အထိပဲ ကပ်နိုင်ပါတယ်။',
    ), '    body { min-height: 150vh; }\n    header { position: sticky; top: 0; background: #d6efea; padding: 8px; }\n    aside { position: fixed; right: 12px; bottom: 12px; }', p('Scroll the page. The Catalog heading stays at the top and “Help” stays at the bottom right.', 'Scroll လုပ်ကြည့်ပါ။ Catalog ခေါင်းစဉ်က အပေါ်မှာ ကပ်ပြီး “Help” က ညာဘက်အောက်ခြေမှာ နေရာမြဲပါမယ်။'), '<h1>Example Store</h1><header>Catalog</header><p>Pens and notebooks</p><aside>Help</aside>'),
    css('layers', p('What does z-index compare?', 'z-index က ဘာကို နှိုင်းလဲ။'), p(
      'A stacking context is a group of elements stacked together. z-index changes the order of applicable elements within their context. A child cannot move above a higher sibling context by increasing only its own z-index.',
      'Stacking context ဆိုတာ အလွှာအစဉ်ကို အုပ်စုလိုက် တွက်တဲ့ နယ်ပယ်ပါ။ z-index သက်ရောက်တဲ့ element တွေကို အဲဒီနယ်ပယ်အတွင်း အပေါ်အောက်စီပါတယ်။ Child ရဲ့ z-index တစ်ခုတည်း တိုးတာနဲ့ တခြား အပေါ်မှာရှိတဲ့ context အုပ်စုကို မကျော်နိုင်ပါဘူး။',
    ), '    .board { position: relative; height: 100px; }\n    .card { position: absolute; width: 100px; padding: 12px; }\n    .pen { z-index: 2; background: gold; }\n    .notebook { z-index: 1; top: 20px; left: 24px; background: lightblue; }', p('Pen covers part of Notebook. Give Notebook z-index: 3 and reload to change the order.', 'Pen က Notebook အကွက်တစ်ပိုင်းကို ဖုံးပါမယ်။ Notebook ကို z-index: 3 ပြောင်းပြီး reload လုပ်ရင် အလွှာအစဉ် ပြောင်းပါမယ်။'), '<div class="board"><div class="card pen">Pen</div><div class="card notebook">Notebook</div></div>'),
  ], [cssRef('Position', 'Reference/Properties/position'), cssRef('Stacking context', 'Guides/Positioned_layout/Stacking_context')]),

  page('flexbox', p('Flexbox', 'Flexbox နဲ့ အတန်းလိုက် စီခြင်း'), p(
    'Flexbox arranges a group of boxes in one direction at a time. The box with display: flex is the flex container. Its direct children are the flex items.',
    'Flexbox က အကွက်အစုကို တစ်ကြိမ်မှာ ဦးတည်ချက်တစ်ခုအတိုင်း စီပေးပါတယ်။ display: flex ပါတဲ့ အပြင်အကွက်က flex container ပါ။ အဲဒါရဲ့ တိုက်ရိုက် children တွေကို flex items လို့ ခေါ်ပါတယ်။',
  ), [
    css('axis', p('Choose the direction of the main axis', 'Main Axis ရဲ့ ဦးတည်ချက် ရွေးခြင်း'), p(
      'The main axis is the direction items follow. flex-direction: row follows the horizontal writing direction in this example. column places items vertically. The cross axis goes across the main axis.',
      'Main axis ဆိုတာ items တွေ တန်းစီမယ့် ဦးတည်ချက်ပါ။ ဒီမှာ flex-direction: row က အလျားလိုက် စာရေးတဲ့အတိုင်း စီပါတယ်။ column ဆိုရင် ဒေါင်လိုက် စီပါတယ်။ Cross axis က main axis ကို ကန့်လန့်ဖြတ်တဲ့ ဦးတည်ချက်ပါ။',
    ), '    .cards { display: flex; flex-direction: row; gap: 12px; }\n    .cards > div { background: #d6efea; padding: 8px; }', p('Three items appear in a row. Change row to column to stack them.', 'အကွက်သုံးခု အတန်းတစ်တန်းပေါ် ပါလာပါမယ်။ row ကို column ပြောင်းရင် အောက်ဆင်းပြီး စီပါမယ်။'), cards),
    css('alignment', p('Align items on each axis', 'Axis တစ်ခုစီမှာ Items ညှိခြင်း'), p(
      'justify-content uses extra space along the main axis. align-items aligns items across it. With a row direction here, those are horizontal and vertical respectively.',
      'justify-content က main axis ပေါ်က ပိုနေတဲ့နေရာကို ခွဲပေးပါတယ်။ align-items က ဖြတ်နေတဲ့ axis ပေါ်မှာ items တွေကို ညှိပါတယ်။ ဒီ row နမူနာမှာ ပထမတစ်ခုက အလျားလိုက်၊ ဒုတိယတစ်ခုက ဒေါင်လိုက် ဖြစ်ပါတယ်။',
    ), '    .cards { display: flex; min-height: 100px; justify-content: space-between; align-items: center; border: 2px solid; }\n    .cards > div { background: #d6efea; padding: 8px; }', p('Items spread across the row and sit at the vertical center.', 'အကွက်တွေက အတန်းအကျယ်တစ်လျှောက် ခွဲစီပြီး အမြင့်အလယ်မှာ ရှိပါမယ်။'), cards),
    css('wrap', p('Wrap items when a row runs out of room', 'နေရာမလောက်ရင် Flex Item တွေ လိုင်းဆင်းခြင်း'), p(
      'Flexbox uses one line by default. flex-wrap: wrap allows more lines. A flex item can get a starting size with flex-basis; here each uses 100px. gap separates items and the lines when they wrap.',
      'Flexbox မှာ မူလအားဖြင့် လိုင်းတစ်ကြောင်းပဲ သုံးပါတယ်။ flex-wrap: wrap ဆို လိုင်းထပ်ဆင်းနိုင်ပါတယ်။ Item တစ်ခုရဲ့ စတင်အရွယ်ကို flex-basis နဲ့ ပေးနိုင်ပါတယ်။ ဒီမှာ 100px စီယူပါတယ်။ gap က item တွေကြားနဲ့ လိုင်းတွေကြား အကွာအဝေးပါ။',
    ), '    .cards { display: flex; flex-wrap: wrap; width: 240px; gap: 10px; }\n    .cards > div { flex-basis: 100px; background: #d6efea; }', p('Pen and Notebook fit on line one. Folder moves to line two.', 'Pen နဲ့ Notebook က ပထမလိုင်းမှာ ဆံ့ပြီး Folder က ဒုတိယလိုင်း ဆင်းပါမယ်။'), cards),
  ], [['W3C · Flexbox', 'https://www.w3.org/TR/css-flexbox-1/'], cssRef('Basic concepts of flexbox', 'Guides/Flexible_box_layout/Basic_concepts')]),

  page('grid', p('Grid', 'Grid နဲ့ Row၊ Column စီခြင်း'), p(
    'Grid arranges the direct children of a container in rows and columns. Each row or column track has a size. Use display: grid on the parent to enable this layout.',
    'Grid က အပြင်အကွက်တစ်ခုရဲ့ တိုက်ရိုက် children တွေကို row နဲ့ column တွေမှာ စီပေးပါတယ်။ Row သို့ column တစ်တန်းစီကို track လို့ ခေါ်ပြီး အရွယ်အစား သတ်မှတ်နိုင်ပါတယ်။ Parent မှာ display: grid ထည့်ပြီး ဒီ layout ကို စသုံးပါ။',
  ), [
    css('columns', p('Divide the available width with fr', 'fr နဲ့ Column အကျယ် ခွဲပုံ'), p(
      'grid-template-columns sets the size of each column. fr divides available space after fixed sizes and gaps. Two values of 1fr share that space equally. Items are placed across the track columns and then onto the next row.',
      'grid-template-columns မှာ column တစ်ခုစီရဲ့ အကျယ်သတ်မှတ်ပါတယ်။ fr က ပုံသေအကျယ်နဲ့ gap တွေ နုတ်ပြီး ကျန်တဲ့နေရာကို ခွဲပေးပါတယ်။ 1fr နှစ်ခုဆို နေရာတူတူ ရပါတယ်။ Items တွေက column အစဉ်လိုက်ဝင်ပြီး ပြည့်ရင် နောက် row ဆင်းပါတယ်။',
    ), '    .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }\n    .cards > div { background: #d6efea; padding: 12px; }', p('Pen and Notebook fill the first row; Folder starts the next one. Try 1fr 2fr.', 'Pen နဲ့ Notebook က ပထမ row မှာ၊ Folder က နောက် row မှာ ပေါ်ပါမယ်။ 1fr 2fr ပြောင်းစမ်းပါ။'), cards),
    css('areas', p('Place page regions with named areas', 'Named Area နဲ့ Page အပိုင်း နေရာချခြင်း'), p(
      'grid-template-areas draws a map using one quoted string per row. Repeating a name within a row lets that area span columns. grid-area assigns an item to a named spot.',
      'grid-template-areas ထဲမှာ row တစ်ကြောင်းစီကို quotation marks နဲ့ ရေးပြီး layout ပုံစံ ချပါတယ်။ Row တစ်ခုထဲမှာ နာမည်တူ ထပ်ရေးရင် အဲဒီနာမည်က column တွေကို ဖြတ်ယူပါတယ်။ grid-area နဲ့ item ကို သက်ဆိုင်ရာ နာမည်ပေးထားတဲ့ နေရာမှာ ထားပါတယ်။',
    ), '    .page { display: grid; gap: 8px; grid-template-columns: 7rem minmax(0, 1fr);\n      grid-template-areas: "head head" "side content"; }\n    .page > * { background: #d6efea; padding: 8px; }\n    header { grid-area: head; }\n    aside { grid-area: side; }\n    main { grid-area: content; }', p('The header spans both columns. Categories appears next to the product list in the second row.', 'ခေါင်းစဉ်က column နှစ်ခုလုံး ယူပါတယ်။ ဒုတိယ row မှာ Categories နဲ့ product list ဘေးချင်းကပ် ပေါ်ပါမယ်။'), '<div class="page"><header>Example Store</header><aside>Categories</aside><main>Pens and notebooks</main></div>'),
    css('auto-fit', p('Let the grid decide how many columns fit', 'ဆံ့တဲ့ Column အရေအတွက်ကို Grid နဲ့ ရွေးခြင်း'), p(
      'repeat(auto-fit, ...) fills the row with as many tracks as fit and collapses unused tracks. minmax sets a minimum and maximum track size. min(100%, 150px) lets the minimum fit very narrow screens.',
      'repeat(auto-fit, ...) က ဆံ့သလောက် track တွေ စီပြီး မသုံးတဲ့ track တွေကို ခေါက်ပေးပါတယ်။ minmax က track အတွက် အငယ်ဆုံးနဲ့ အကြီးဆုံး သတ်မှတ်တာပါ။ min(100%, 150px) က မြင်ကွင်း အရမ်းကျဉ်းရင် အငယ်ဆုံးအကျယ်ကိုပါ အထဲဆံ့စေပါတယ်။',
    ), '    .cards { display: grid; gap: 8px; grid-template-columns: repeat(auto-fit, minmax(min(100%, 150px), 1fr)); }\n    .cards > div { background: #d6efea; padding: 8px; }', p('Resize the browser. The cards use fewer columns as the available width shrinks.', 'Browser အကျယ်ပြောင်းကြည့်ပါ။ နေရာကျဉ်းလာရင် column အရေအတွက် လျော့သွားပါမယ်။'), cards),
  ], [['W3C · CSS Grid', 'https://www.w3.org/TR/css-grid-2/'], cssRef('Basic concepts of grid layout', 'Guides/Grid_layout/Basic_concepts')]),

  page('responsive', p('Responsive styles and focus', 'Responsive Styles နဲ့ Focus'), p(
    'A responsive layout adapts to the space it has. Start with a usable narrow layout, then add rules when there is more room. Keyboard users also need a visible indicator of which control is active.',
    'Responsive layout က ရရှိတဲ့ နေရာအကျယ်အလိုက် ပုံစံပြောင်းပါတယ်။ ကျဉ်းတဲ့နေရာမှာ သုံးလို့ရတဲ့ပုံစံက စပြီး နေရာပိုရမှ rule ထပ်ထည့်ပါ။ Keyboard သုံးသူတွေအတွက် ဘယ်ခလုတ်ရောက်နေပြီလဲ သိနိုင်တဲ့ အမှတ်အသားလည်း လိုပါတယ်။',
  ), [
    css('queries', p('When does a media query apply?', 'Media Query က ဘယ်အခါ အလုပ်လုပ်လဲ။'), p(
      'A media query is a condition about the browser environment. @media (min-width: 600px) applies its rules when the viewport is at least 600 CSS pixels wide. The viewport meta line in the example lets a phone use its device width for layout.',
      'Media query ဆိုတာ browser ပတ်ဝန်းကျင်ကို စစ်တဲ့ စည်းကမ်းပါ။ မြင်ကွင်းက အနည်းဆုံး CSS pixel 600 ကျယ်ရင် @media (min-width: 600px) အတွင်းက rule တွေ သက်ရောက်ပါတယ်။ နမူနာထဲက viewport meta စာကြောင်းကြောင့် ဖုန်းမှာ ဖုန်းအကျယ်နဲ့ စီနိုင်ပါတယ်။',
    ), '    .cards { display: grid; gap: 10px; }\n    .cards > div { background: #d6efea; padding: 8px; }\n    @media (min-width: 600px) { .cards { grid-template-columns: 1fr 1fr 1fr; } }', p('Below 600px the cards stack. At 600px and above they share a row. Use the DevTools device toolbar or resize the window.', '600px အောက်မှာ card တွေ အောက်ဆင်းစီပါတယ်။ 600px နဲ့အထက်မှာ တန်းတစ်တန်းတည်း နေပါတယ်။ DevTools ရဲ့ device toolbar သို့မဟုတ် window အရွယ်ပြောင်းပြီး စမ်းပါ။'), cards),
    css('container-queries', p('Respond to a component’s own space', 'Component ရဲ့ နေရာအကျယ်နဲ့ ပြောင်းခြင်း'), p(
      'Container queries check a containing element rather than the whole viewport. container-type: inline-size enables width queries for this wrapper. The query changes a descendant inside the wrapper. This is useful when an identical component can live in a main area or in a narrow sidebar.',
      'Container query က မြင်ကွင်းအပြည့်ကို မူတည်မယ့်အစား component ကို ခြုံထားတဲ့ element ကို စစ်ပါတယ်။ container-type: inline-size နဲ့ ဒီအပြင်အကွက်ရဲ့ အကျယ်ကို စစ်နိုင်ပါတယ်။ Rule က အတွင်းက descendant ကို ပြောင်းပေးပါတယ်။ Component တူတူကို main အပိုင်းနဲ့ နေရာကျဉ်းတဲ့ sidebar မှာ သုံးတဲ့အခါ အသုံးဝင်ပါတယ်။',
    ), '    .panel { container-type: inline-size; width: 100%; max-width: 480px; }\n    .cards { display: grid; gap: 8px; }\n    .cards > div { background: #d6efea; padding: 8px; }\n    @container (min-width: 360px) { .cards { grid-template-columns: repeat(3, 1fr); } }', p('At a panel width of 360px and above the cards sit in a row. Change max-width to 300px to stack them even in a wide browser.', 'Panel 360px ကျယ်တာနဲ့အထက်မှာ တစ်တန်းတည်း စီပါတယ်။ Browser ကျယ်နေရင်တောင် max-width ကို 300px ပြောင်းရင် card တွေ အောက်ဆင်းပါမယ်။'), '<section class="panel">' + cards + '</section>'),
    css('focus', p('Show keyboard focus', 'Keyboard Focus ကို မြင်ရအောင် ပြခြင်း'), p(
      'Focus is the current keyboard destination. Press Tab to move between controls. :hover matches a pointer resting on a control. :focus-visible lets you style focus when a visible indicator is appropriate, such as keyboard navigation.',
      'Focus က keyboard နဲ့ လုပ်ဆောင်ချက်ပေးလို့ရတဲ့ လက်ရှိနေရာပါ။ Tab နှိပ်ပြီး တစ်ခုကနေ တစ်ခု သွားနိုင်ပါတယ်။ :hover က mouse pointer ခလုတ်ပေါ် ရှိချိန် ကိုက်ပါတယ်။ Keyboard နဲ့ သွားလာတဲ့အခါလို focus အမှတ်အသားလိုတဲ့ အခြေအနေမှာ :focus-visible နဲ့ style သတ်မှတ်နိုင်ပါတယ်။',
    ), '    button:hover { background: #d6efea; }\n    button:focus-visible { outline: 3px solid purple; outline-offset: 3px; }', p('Moving the mouse over a button changes its background. Press Tab to see the purple focus ring move.', 'Mouse တင်ရင် ခလုတ်နောက်ခံ ပြောင်းပါမယ်။ Tab နှိပ်ပြီး ခရမ်းရောင် focus အနားသတ် နေရာရွှေ့ပုံကို ကြည့်ပါ။'), '<button type="button">Pen</button> <button type="button">Notebook</button>'),
  ], [cssRef('Using media queries', 'Guides/Media_queries/Using'), cssRef('CSS container queries', 'Guides/Containment/Container_queries'), cssRef('Focus visible', 'Reference/Selectors/:focus-visible')]),

  page('layout-debugging', p('Debug a broken layout', 'Layout ပြဿနာ ရှာပြီး ပြင်ခြင်း'), p(
    'Start with the element that looks wrong. The browser’s Developer Tools show rules that match and the final values the browser calculated.',
    'ပုံစံလွဲနေတဲ့ element ကနေ စပါ။ Browser ရဲ့ Developer Tools မှာ ကိုက်နေတဲ့ rule တွေနဲ့ browser တွက်ထားတဲ့ နောက်ဆုံးတန်ဖိုးကို ကြည့်နိုင်ပါတယ်။',
  ), [
    css('inspect', p('Read Styles and Computed', 'Styles နဲ့ Computed ကို ဖတ်ခြင်း'), p(
      'Right-click the teal-colored target and select Inspect. Styles shows the matching rules and crosses out a declaration when another wins. Computed shows the resolved values. Toggle a competing rule in DevTools to see its effect before editing the file.',
      'စိမ်းပြာရောင် စာကြောင်းကို right-click နှိပ်ပြီး Inspect လုပ်ပါ။ Styles မှာ ကိုက်တဲ့ rule တွေကို ပြပြီး တခြားသတ်မှတ်ချက် အနိုင်ရတဲ့အခါ မသုံးတဲ့ စာကြောင်းကို ဖြတ်မျဉ်းနဲ့ ပြပါတယ်။ Computed မှာ browser နောက်ဆုံးတွက်ထားတဲ့ တန်ဖိုးကို ကြည့်နိုင်ပါတယ်။ ဖိုင်မပြင်ခင် DevTools မှာ rule တစ်ခု ပိတ်စမ်းနိုင်ပါတယ်။',
    ), '    .notice { color: purple; }\n    .notice { color: teal; }', p('The first paragraph is teal. Disable the later color declaration in Styles; it becomes purple. Reloading restores the file’s styles.', 'ပထမစာပိုဒ်က စိမ်းပြာရောင်ပါ။ Styles ထဲက နောက်ဆုံး color ကို ပိတ်ရင် ခရမ်းရောင် ဖြစ်ပါမယ်။ Reload လုပ်ရင် ဖိုင်ထဲက style ပြန်သုံးပါမယ်။')),
    css('overflow', p('Find a box that is wider than its parent', 'Parent ထက် ပိုကျယ်တဲ့ အကွက် ရှာခြင်း'), p(
      'Overflow happens when content exceeds the available space. Inspect the parent and child widths first. For a box meant to shrink, max-width: 100% limits its width to the parent’s available width.',
      'ရထားတဲ့နေရာထက် အကြောင်းအရာ ပိုကြီးလာတာကို overflow လို့ခေါ်ပါတယ်။ Parent နဲ့ child အကျယ်တွေကို Inspect နဲ့ အရင်တိုင်းပါ။ ကျဉ်းသွားလို့ရတဲ့ အကွက်ကို max-width: 100% ပေးရင် အပြင်အကွက်ရဲ့ ရနိုင်တဲ့ အကျယ်ထက် မပိုအောင် ကန့်သတ်ပါတယ်။',
    ), '    .panel { width: 180px; outline: 2px solid purple; }\n    .wide { width: 280px; background: #d6efea; }', p('The teal box extends past the purple boundary. Add max-width: 100% to .wide to fit it inside.', 'စိမ်းပြာရောင်အကွက်က ခရမ်းရောင်နယ်နိမိတ်ကို ကျော်ပါမယ်။ .wide မှာ max-width: 100% ထည့်ရင် အတွင်း ဝင်ဆံ့ပါမယ်။'), '<div class="panel"><div class="wide">Product list</div></div>'),
    css('long-text', p('Let long text wrap inside a flex item', 'Flex Item ထဲက စာလုံးရှည်ကို လိုင်းဆင်းစေခြင်း'), p(
      'A long string with no spaces can force a flex item to stay wider than the row. Give that text item min-width: 0 so it can shrink, and use overflow-wrap: anywhere so the browser can wrap the string. Keep a separate button readable with flex-shrink: 0.',
      'Space မပါတဲ့ စာလုံးတွဲရှည်ကြောင့် flex item က အတန်းထက် ပိုကျယ်နေတတ်ပါတယ်။ စာသားအကွက် ကျဉ်းလို့ရအောင် min-width: 0 ပေးပြီး browser က စာကြောင်း ခွဲလို့ရအောင် overflow-wrap: anywhere ပေးပါ။ သီးသန့်ခလုတ် ကျုံ့မသွားဖို့ flex-shrink: 0 သုံးနိုင်ပါတယ်။',
    ), '    .toolbar { display: flex; gap: 8px; width: 240px; outline: 1px solid teal; }\n    .reference { min-width: 0; overflow-wrap: anywhere; }\n    button { flex-shrink: 0; align-self: start; }', p('The entire reference wraps and the Save button fits beside it. Remove both text rules to reproduce the overflow.', 'Reference စာသား အပြည့်အစုံ လိုင်းဆင်းပြီး Save ခလုတ် ဘေးမှာ ဆံ့ပါမယ်။ စာသား rule နှစ်ခု ဖြုတ်ပြီး overflow ဖြစ်ပုံ ပြန်စမ်းပါ။'), '<div class="toolbar"><span class="reference">ITEM-2026-YANGON-0044-1C31B3B8097AE57E</span><button type="button">Save</button></div>'),
  ], [cssRef('Overflow', 'Reference/Properties/overflow'), ['Chrome DevTools · View and change CSS', 'https://developer.chrome.com/docs/devtools/css/']]),

  page('pseudo-elements', p('Pseudo-elements', 'Pseudo-element နဲ့ အစိတ်အပိုင်း ပြင်ခြင်း'), p(
    'A pseudo-element targets or creates a styleable part of an element. Its syntax begins with two colons.',
    'Pseudo-element က element ရဲ့ အစိတ်အပိုင်းတစ်ခုကို ရွေးပေးတာ ဒါမှမဟုတ် style ပေးလို့ရမယ့် အစိတ်အပိုင်းတစ်ခု ဖန်တီးပေးတာပါ။ နာမည်ရှေ့မှာ :: နဲ့ စရေးပါတယ်။',
  ), [
    css('generated', p('Add decoration with ::before and ::after', '::before နဲ့ ::after သုံးပြီး အလှဆင်ခြင်း'), p(
      '::before and ::after create generated content around the element’s contents when content is set. An empty string creates an empty box you can style. Keep important information in HTML so it is available to readers and assistive tools.',
      'content သတ်မှတ်ရင် ::before နဲ့ ::after က element ထဲက အကြောင်းအရာ မတိုင်ခင်နဲ့ ပြီးတဲ့နောက်မှာ နှစ်ဖက်စလုံး ထပ်ထည့်နိုင်ပါတယ်။ စာသားအလွတ်ဆို style ပေးလို့ရမယ့် အကွက်အလွတ် ရပါတယ်။ အရေးကြီးတဲ့အချက်ကို ဖတ်သူနဲ့ assistive tools တွေ သိနိုင်ဖို့ HTML ထဲမှာ ရေးထားပါ။',
    ), '    .notice::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-right: 6px; border-radius: 50%; background: teal; }\n    .notice::after { content: ""; display: inline-block; width: 16px; height: 2px; margin-left: 6px; background: teal; }', p('A small teal dot appears before “Your order is ready.” and a line appears after it. Remove content from either rule and its decoration disappears.', '“Your order is ready.” ရှေ့မှာ စိမ်းပြာရောင် အစက်၊ နောက်မှာ မျဉ်းတို ပေါ်ပါမယ်။ Rule တစ်ခုက content ကို ဖြုတ်ရင် အဲဒီ rule ရဲ့ အလှဆင်အပိုင်း ပျောက်ပါမယ်။')),
    css('states', p('Style a part or match a state', 'အစိတ်အပိုင်းနဲ့ အခြေအနေကို ရွေးခြင်း'), p(
      '::first-letter styles a part of a paragraph. A pseudo-class such as :hover matches a state of the whole element. You can combine a base selector with either one.',
      '::first-letter က စာပိုဒ်ထဲက ပထမစာလုံးကို style ပေးပါတယ်။ :hover လို pseudo-class ကတော့ element တစ်ခုလုံးရဲ့ လက်ရှိအခြေအနေကို စစ်ပါတယ်။ Selector နောက်မှာ လိုတဲ့တစ်မျိုးကို တွဲရေးနိုင်ပါတယ်။',
    ), '    .notice::first-letter { font-weight: bold; font-size: 1.8em; }\n    .notice:hover { color: purple; }', p('The first letter of Pen is larger. Hover the paragraph to change its color.', 'Pen ရဲ့ ပထမစာလုံး ပိုကြီးပါမယ်။ စာပိုဒ်ပေါ် mouse တင်ပြီး အရောင်ပြောင်းပုံကို ကြည့်ပါ။')),
  ], [cssRef('Pseudo-elements', 'Reference/Selectors/Pseudo-elements'), cssRef('Pseudo-classes', 'Reference/Selectors/Pseudo-classes')]),

  page('dark-mode', p('Light and dark themes', 'Light Theme နဲ့ Dark Theme'), p(
    'A theme is a set of colors used together. Name shared colors with CSS custom properties, then change those properties when the chosen theme changes.',
    'Theme ဆိုတာ စာမျက်နှာတစ်လျှောက် တွဲသုံးတဲ့ အရောင်အစုပါ။ ပြန်သုံးမယ့်အရောင်တွေကို CSS custom property နာမည်ပေးထားပြီး theme ပြောင်းတဲ့အခါ အဲဒီတန်ဖိုးတွေ ပြင်နိုင်ပါတယ်။',
  ), [
    css('preference', p('Follow the system’s color preference', 'System ရဲ့ အရောင်ရွေးထားမှုကို လိုက်ခြင်း'), p(
      'prefers-color-scheme is a media feature. It can match the user’s dark preference. color-scheme tells the browser which theme to use for native controls as well.',
      'prefers-color-scheme က media query မှာ စစ်လို့ရတဲ့ အချက်တစ်ခုပါ။ User ရဲ့ system မှာ dark ရွေးထားရင် တွဲသုံးနိုင်ပါတယ်။ color-scheme က browser ပိုင် form controls တွေကိုပါ ဘယ် theme နဲ့ ပြရမလဲ ပြောပါတယ်။',
    ), '    :root { --page: #fff; --ink: #17233a; color-scheme: light; }\n    @media (prefers-color-scheme: dark) {\n      :root { --page: #17233a; --ink: #fff; color-scheme: dark; }\n    }\n    body { background: var(--page); color: var(--ink); }', p('Toggle your system color preference or emulate prefers-color-scheme in DevTools to see the page colors swap.', 'System theme ကို toggle လုပ်ပါ။ DevTools မှာ prefers-color-scheme ပြောင်းစမ်းလို့လည်း ရပါတယ်။ နောက်ခံနဲ့ စာအရောင် ပြောင်းပါမယ်။')),
    css('override', p('Set a page theme with an attribute', 'Attribute နဲ့ Page Theme သတ်မှတ်ခြင်း'), p(
      'An attribute selector can select a specific setting on an element. [data-theme="dark"] matches an element with that exact attribute value. A future JavaScript button can change the attribute when the reader chooses a theme.',
      'Attribute selector က element တစ်ခုမှာ သတ်မှတ်တဲ့ တန်ဖိုးရှိလား ရွေးပေးပါတယ်။ [data-theme="dark"] က attribute တန်ဖိုး dark အတိအကျပါတာကို ရွေးပါတယ်။ နောက်ပိုင်း JavaScript နဲ့ ခလုတ်တစ်ခု လုပ်ပြီး ဖတ်သူရွေးတဲ့အခါ attribute ကို ပြောင်းပေးနိုင်ပါတယ်။',
    ), '    .panel { --page: #fff; --ink: #17233a; }\n    .panel[data-theme="dark"] { --page: #17233a; --ink: #fff; }\n    .panel { background: var(--page); color: var(--ink); padding: 12px; }', p('The panel is dark. Change data-theme to light, save, and reload to use the base colors.', 'Panel က နောက်ခံအမှောင်နဲ့ ပေါ်ပါမယ်။ data-theme ကို light ပြောင်းပြီး save၊ reload လုပ်ရင် မူလအရောင်တွေ ပြန်သုံးပါမယ်။'), '<section class="panel" data-theme="dark"><p>Pens and notebooks</p></section>'),
  ], [cssRef('Prefers color scheme', 'Reference/At-rules/@media/prefers-color-scheme'), cssRef('Color scheme', 'Reference/Properties/color-scheme')]),

  page('motion', p('Transitions and animations', 'Transition နဲ့ Animation'), p(
    'CSS can make a change happen gradually. A transition responds to a change in value. An animation follows a named sequence of steps.',
    'CSS နဲ့ ပုံစံပြောင်းတဲ့အခါ ဖြည်းဖြည်းချင်း ပြောင်းစေနိုင်ပါတယ်။ Transition က တန်ဖိုးတစ်ခု ပြောင်းတာကို တဖြည်းဖြည်း ဖြစ်စေပါတယ်။ Animation က နာမည်ပေးထားတဲ့ အဆင့်အစဉ်အတိုင်း လှုပ်ရှားစေပါတယ်။',
  ), [
    css('transition', p('Transition a changed value', 'ပြောင်းတဲ့တန်ဖိုးကို Transition နဲ့ ပြခြင်း'), p(
      'Set transition on the base rule so it applies as a state starts and ends. The first value names the property; the second sets the duration. The hover or focus rule provides the new value.',
      'အခြေအနေ စဝင်တာနဲ့ ပြန်ထွက်တာ နှစ်ဖက်လုံး သက်ရောက်ဖို့ transition ကို မူလ rule မှာ ထည့်ပါ။ ပထမတန်ဖိုးက ပြောင်းမယ့် property၊ ဒုတိယတန်ဖိုးက ကြာချိန်ပါ။ Hover သို့မဟုတ် focus rule မှာ တန်ဖိုးအသစ် ပေးပါတယ်။',
    ), '    button { background: lightblue; transition: background-color 250ms; }\n    button:hover, button:focus-visible { background: gold; }', p('Hover or Tab to the button. The background changes gradually over a quarter of a second.', 'Mouse တင်ပါ၊ ဒါမှမဟုတ် Tab နဲ့ ခလုတ်ဆီ သွားပါ။ နောက်ခံအရောင် စက္ကန့်တစ်စိတ်မှာ ဖြည်းဖြည်း ပြောင်းပါမယ်။'), '<button type="button">View product</button>'),
    css('keyframes', p('Define animation steps with @keyframes', '@keyframes နဲ့ Animation အဆင့် သတ်မှတ်ခြင်း'), p(
      '@keyframes names a sequence and gives it values at points in time. from is the start and to is the end. animation connects the sequence to the element and sets a duration.',
      '@keyframes က အဆင့်အစဉ်ကို နာမည်ပေးပြီး အချိန်တစ်ခုချင်းမှာ သုံးမယ့်တန်ဖိုး သတ်မှတ်ပါတယ်။ from က အစ၊ to က အဆုံးပါ။ animation နဲ့ အဲဒီအဆင့်အစဉ်ကို element နဲ့ ချိတ်ပြီး ကြာချိန် သတ်မှတ်ပါတယ်။',
    ), '    .notice { animation: appear 800ms; }\n    @keyframes appear { from { opacity: 0; } to { opacity: 1; } }', p('Reload to see the first paragraph fade in once. The other paragraph is visible immediately.', 'Reload လုပ်ရင် ပထမစာပိုဒ် တစ်ခါ ဖြည်းဖြည်းပေါ်လာပါမယ်။ နောက်စာပိုဒ်က ချက်ချင်း မြင်ရပါမယ်။')),
    css('reduced-motion', p('Respect a reduced-motion preference', 'Reduced Motion ရွေးထားမှုကို လိုက်ခြင်း'), p(
      'Some users set their system to reduce motion. The prefers-reduced-motion media feature can detect that preference. Remove an optional effect while leaving the content available.',
      'User တချို့က system မှာ လှုပ်ရှားမှု လျှော့ထားတတ်ပါတယ်။ prefers-reduced-motion media feature နဲ့ အဲဒါကို သိနိုင်ပါတယ်။ အလှအတွက် effect ကို ဖယ်ပေးပြီး မူလအကြောင်းအရာကို ဆက်ဖတ်လို့ရစေပါ။',
    ), '    .notice { animation: appear 1s; }\n    @keyframes appear { from { opacity: 0; } to { opacity: 1; } }\n    @media (prefers-reduced-motion: reduce) { .notice { animation: none; } }', p('Enable reduced motion in the system or emulate it in DevTools and reload. The notice appears immediately.', 'System သို့မဟုတ် DevTools မှာ reduced motion ဖွင့်ပြီး reload လုပ်ပါ။ Notice စာသား ချက်ချင်း မြင်ရပါမယ်။')),
  ], [cssRef('Using CSS transitions', 'Guides/Transitions/Using'), cssRef('Using CSS animations', 'Guides/Animations/Using'), cssRef('Prefers reduced motion', 'Reference/At-rules/@media/prefers-reduced-motion')]),
]);
