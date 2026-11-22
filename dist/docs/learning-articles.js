import { p, page, part } from './content.js';
import { webGuides } from './web.js';

const [html, css, js] = webGuides;
const [structure, content, forms] = html.pages;
const [links, imageText, tableHeaders] = content.sections;
const [fields, keyboard] = forms.sections;
const [, layout] = css.pages;
const [values] = js.pages;
const [bindings, functions] = values.sections;

export const learningArticles = {
  html: [
    {
      ...structure,
      sections: [...structure.sections,
        part('text', p('Headings, paragraphs, and inline text', 'Headings၊ Paragraphs နဲ့ Inline Text'), p(
          'Use p for a paragraph, strong for important text, em for stress emphasis, and code to mark part of a program. Choose each element for its meaning.',
          'စာပိုဒ်အတွက် p၊ အရေးကြီးတဲ့စာသားအတွက် strong၊ ဖတ်တဲ့အခါ ဖိပြောရမယ့်စာသားအတွက် em၊ program code အပိုင်းအတွက် code သုံးပါ။ Element တစ်ခုချင်းကို အဓိပ္ပါယ်အတိုင်း ရွေးပါ။',
        ), '<p><strong>Save</strong> <em>before</em> closing <code>index.html</code>.</p>'),
      ],
      sources: [...structure.sources, ['WHATWG · Text-level semantics', 'https://html.spec.whatwg.org/multipage/text-level-semantics.html']],
    },
    {
      ...content,
      title: p('Links and buttons', 'Links နဲ့ Buttons'),
      intro: p('Choose an anchor for navigation and a button for a page action.', 'တစ်နေရာကနေ တစ်နေရာ သွားဖို့ anchor သုံးပြီး page ပေါ်က လုပ်ဆောင်ချက်အတွက် button သုံးပါ။'),
      sections: [
        links,
        part('anchors', p('Link to a page or section', 'Page သို့မဟုတ် Section ကို ချိတ်ပါ'), p(
          'An href starting with a slash starts from the site root. An href starting with # jumps to the matching id on the same page. Give the link a label that tells the reader where it goes.',
          'href မှာ slash နဲ့စရင် site အစကနေ path လိုက်ပါတယ်။ # နဲ့စရင် စာမျက်နှာတစ်ခုတည်းထဲက id တူတဲ့နေရာကို ခုန်ပါတယ်။ Link စာသားကို ဘယ်နေရာသွားမလဲ သိအောင် ရေးပါ။',
        ), `<a href="/resources">Learning resources</a>
<a href="#contact">Jump to contact</a>
<h2 id="contact">Contact</h2>`),
      ],
      sources: [['WHATWG · The a element', 'https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element'],
        ['WHATWG · The button element', 'https://html.spec.whatwg.org/multipage/form-elements.html#the-button-element']],
    },
    page('images', p('Images, alt text, and picture', 'Images၊ Alt Text နဲ့ Picture'), p(
      'Describe an image with alt text, add a visible caption when useful, and change the image when the layout needs a different crop.',
      'ပုံကို alt စာသားနဲ့ ဖော်ပြပါ။ လိုရင် မြင်ရတဲ့ caption ထည့်ပြီး layout အလိုက် ပုံဖြတ်ပုံ ပြောင်းဖို့လိုရင် picture သုံးပါ။',
    ), [
      part('figure', p('Group an image and its caption', 'ပုံနဲ့ Caption ကို အတူထားပါ'), p(
        'Use figure and figcaption to keep an image and its caption together. The alt text gives a text alternative for the image. The caption can add context for everyone.',
        'ပုံနဲ့ caption ကို အတူထားဖို့ figure နဲ့ figcaption သုံးပါ။ Alt စာသားက ပုံကို စာသားနဲ့ ပြန်ဖော်ပြပြီး caption က ဖတ်သူအားလုံးအတွက် အကြောင်းအရာ ဖြည့်ပေးနိုင်ပါတယ်။',
      ), `<figure>
  <img src="cafe.jpg" alt="Coffee and cake on a table">
  <figcaption>Our afternoon menu</figcaption>
</figure>`),
      imageText,
    ], [['WHATWG · Images and picture', 'https://html.spec.whatwg.org/multipage/embedded-content.html'],
      ['WHATWG · figure and figcaption', 'https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element']]),
    page('tables', p('Accessible data tables', 'အသုံးပြုရလွယ်တဲ့ Data Tables'), p(
      'Use a table for related data that readers should compare across rows and columns.',
      'Rows နဲ့ columns အလိုက် နှိုင်းယှဉ်ဖတ်ရမယ့် ဆက်စပ် data တွေအတွက် table သုံးပါ။',
    ), [
      { ...tableHeaders, code: `<table>
  <caption>Cafe menu</caption>
  <thead><tr><th scope="col">Item</th><th scope="col">Price</th></tr></thead>
  <tbody><tr><td>Coffee</td><td>2</td></tr></tbody>
</table>` },
    ], [['WHATWG · Tables', 'https://html.spec.whatwg.org/multipage/tables.html']]),
    page('accessibility', p('Page regions and keyboard access', 'Page Regions နဲ့ Keyboard အသုံးပြုမှု'), p(
      'Give the page named regions and let people reach the main content and controls with the keyboard.',
      'စာမျက်နှာမှာ အဓိက အပိုင်းတွေကို semantic tags နဲ့ သတ်မှတ်ပြီး keyboard နဲ့ main content နဲ့ controls ဆီ ရောက်နိုင်အောင် လုပ်ပါ။',
    ), [
      part('landmarks', p('Mark the main regions', 'အဓိက Page Regions ကို သတ်မှတ်ပါ'), p(
        'Use header for introductory content, nav for major navigation, main for the main content, and footer for closing information. Put a skip link before recurring navigation so a keyboard user can jump to the main content.',
        'မိတ်ဆက်အပိုင်းအတွက် header၊ အဓိက menu အတွက် nav၊ အဓိကအကြောင်းအရာအတွက် main၊ အပိတ်အချက်အလက်အတွက် footer သုံးပါ။ Keyboard နဲ့ main ဆီ ချက်ချင်းသွားလို့ရဖို့ menu အရင်မှာ skip link ထည့်ပါ။',
      ), `<a href="#main-content">Skip to main content</a>
<header><nav><a href="/">Home</a></nav></header>
<main id="main-content" tabindex="-1"><h1>Events</h1></main>
<footer>Cloud Nine Innovations</footer>`),
      keyboard,
    ], [['WHATWG · Page sections', 'https://html.spec.whatwg.org/multipage/sections.html'],
      ['WHATWG · Focus', 'https://html.spec.whatwg.org/multipage/interaction.html#focus'],
      ['W3C WAI · Bypass blocks', 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html']]),
    {
      ...forms,
      title: p('Form labels and input types', 'Form Labels နဲ့ Input Types'),
      sections: [fields],
      sources: [['WHATWG · Forms', 'https://html.spec.whatwg.org/multipage/forms.html']],
    },
    page('form-validation', p('Native form validation', 'Native Form Validation'), p(
      'Use HTML constraints to show input errors before a form is sent.',
      'Form မပို့ခင် input မှားတာကို ပြနိုင်ဖို့ HTML constraints သုံးပါ။',
    ), [
      part('constraints', p('Set the allowed inputs', 'လက်ခံမယ့် Input ကို သတ်မှတ်ပါ'), p(
        'required makes the field mandatory. min and max set bounds for number inputs. Try 0, 1, 6, and 7 in this example. Validate again on the server when accepting submitted data.',
        'required က field ကို မဖြစ်မနေဖြည့်ခိုင်းပါတယ်။ Number input အတွက် min နဲ့ max က အနည်းဆုံးနဲ့ အများဆုံး တန်ဖိုး သတ်မှတ်ပေးပါတယ်။ ဒီနမူနာကို 0၊ 1၊ 6 နဲ့ 7 ဖြည့်ပြီး စမ်းပါ။ Submit လုပ်တဲ့ data ကို server ဘက်မှာ ထပ်စစ်ပါ။',
      ), `<form>
  <label for="guests">Guests</label>
  <input type="number" id="guests" name="guests" min="1" max="6" required>
  <button type="submit">Reserve</button>
</form>`),
    ], [['WHATWG · Constraint validation', 'https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api']]),
  ],
  css: [
    {
      ...layout,
      title: p('Box model and display', 'Box Model နဲ့ Display'),
      sections: [
        layout.sections[0],
        part('display', p('Choose how a box fits the line', 'Box ကို Line ပေါ်မှာ ဘယ်လိုထားမလဲ ရွေးပါ'), p(
          'In normal flow, a block box starts on a new line. An inline box can sit inside text. An inline-block box can sit on the same line and also accept a width and height.',
          'Normal flow မှာ block box က လိုင်းအသစ်ကနေ စပါတယ်။ Inline box က စာသားလိုင်းထဲ နေနိုင်ပါတယ်။ Inline-block က လိုင်းတူမှာ နေနိုင်ပြီး width နဲ့ height သတ်မှတ်လို့ရပါတယ်။',
        ), `.badge { display: inline-block; padding: 4px 8px; }
.panel { display: block; box-sizing: border-box; padding: 12px; }`),
        layout.sections[1],
      ],
      sources: [...layout.sources, ['W3C · CSS Display', 'https://www.w3.org/TR/css-display-3/']],
    },
    page('flexbox', p('Flexbox alignment and wrapping', 'Flexbox Alignment နဲ့ Wrapping'), p(
      'Use Flexbox to arrange items along a row or column, and wrap them when space runs out.',
      'Items တွေကို row ဒါမှမဟုတ် column တစ်လျှောက် စီဖို့ Flexbox သုံးပါ။ နေရာမလောက်ရင် လိုင်းအသစ် ဆင်းအောင်လည်း လုပ်နိုင်ပါတယ်။',
    ), [
      part('axis', p('Align items along both axes', 'Axes နှစ်ခုလုံးမှာ Items စီပါ'), p(
        'flex-direction sets the main axis. justify-content works along that axis, and align-items works across it. Use flex-wrap to let items move to a new line and gap to space them.',
        'flex-direction က main axis ကို သတ်မှတ်ပါတယ်။ justify-content က အဲဒီ axis အတိုင်း အလုပ်လုပ်ပြီး align-items က ကန့်လန့်ဖြတ် axis ပေါ်မှာ အလုပ်လုပ်ပါတယ်။ နေရာမလောက်ရင် လိုင်းခွဲဖို့ flex-wrap၊ ကြားနေရာအတွက် gap သုံးပါ။',
      ), `.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}`),
    ], [['W3C · Flexbox', 'https://www.w3.org/TR/css-flexbox-1/']]),
    page('grid', p('Grid columns and named areas', 'Grid Columns နဲ့ Named Areas'), p(
      'Use Grid for a layout that needs both rows and columns.',
      'Rows နဲ့ columns နှစ်မျိုးလုံးလိုတဲ့ layout အတွက် Grid သုံးပါ။',
    ), [
      part('columns', p('Set columns and place named areas', 'Columns နဲ့ Named Areas သတ်မှတ်ပါ'), p(
        'Use grid-template-columns to size the columns. To place page sections, write one string for each row in grid-template-areas and assign each section a grid-area name.',
        'Column အကျယ်တွေကို grid-template-columns နဲ့ သတ်မှတ်ပါ။ Page sections နေရာချဖို့ grid-template-areas မှာ row တစ်ခုစီအတွက် string တစ်ခု ရေးပါ။ Section တစ်ခုစီကို grid-area နာမည် ပေးပါ။',
      ), `.page {
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  grid-template-areas: "header header" "sidebar main";
  gap: 1rem;
}
.page > header { grid-area: header; }
.page > aside { grid-area: sidebar; }
.page > main { grid-area: main; }`),
    ], [['W3C · CSS Grid', 'https://www.w3.org/TR/css-grid-2/']]),
  ],
  js: [
    {
      ...values,
      title: p('Values, types, and operators', 'Values၊ Types နဲ့ Operators'),
      sections: [bindings, part('conversion', p('Convert inputs and compare values', 'Input Type ပြောင်းပြီး Values နှိုင်းပါ'), p(
        'A form input value is a string. Use Number to convert a numeric string and Number.isNaN to detect a failed conversion. Use logical operators to combine checks.',
        'Form input ရဲ့ value က string ပါ။ ဂဏန်း string ကို Number နဲ့ ပြောင်းပါ။ ပြောင်းလို့မရတဲ့ တန်ဖိုးကို Number.isNaN နဲ့ စစ်နိုင်ပါတယ်။ စစ်ချက်တွေ ပေါင်းဖို့ logical operators သုံးပါ။',
      ), `const quantity = Number("3");
const allowed = !Number.isNaN(quantity) && quantity >= 1 && quantity <= 6;
console.log(allowed); // true`)],
    },
    page('conditions-and-loops', p('Conditions and loops', 'Conditions နဲ့ Loops'), p(
      'Use conditions to decide what runs and loops to repeat a task.',
      'ဘာကို run မလဲ ရွေးဖို့ condition၊ အလုပ်တစ်ခု ထပ်လုပ်ဖို့ loop သုံးပါ။',
    ), [
      part('if-else', p('Choose with if, else if, and else', 'if၊ else if နဲ့ else သုံးပြီး ရွေးပါ'), p(
        'JavaScript runs the first matching branch. Use else for the remaining cases. Here boundary tests such as 80 and 79 show whether the comparisons match the grading rule.',
        'JavaScript က ပထမဆုံး ကိုက်တဲ့ branch ကို run ပါတယ်။ ကျန်တဲ့အခြေအနေတွေကို else နဲ့ ကိုင်ပါ။ 80 နဲ့ 79 လို နယ်နိမိတ်တန်ဖိုးတွေကို စမ်းပြီး အမှတ်ပေးစည်းမျဉ်းနဲ့ ကိုက်လား စစ်ပါ။',
      ), `function grade(score) {
  if (score >= 80) return "Great";
  else if (score >= 50) return "Pass";
  else return "Try again";
}
console.log(grade(80), grade(79), grade(49)); // Great Pass Try again`),
      part('switch', p('Choose among exact values', 'တန်ဖိုး အတိအကျတွေအတွက် switch သုံးပါ'), p(
        'switch compares one value to several case labels. Use return in a function or break to stop after a match. default handles a value with no matching case.',
        'switch က value တစ်ခုကို case တန်ဖိုးတွေနဲ့ တိုက်စစ်ပါတယ်။ ကိုက်တဲ့ case ပြီးရင် ရပ်ဖို့ function ထဲမှာ return သို့မဟုတ် break သုံးပါ။ Case တစ်ခုမှ မကိုက်ရင် default ကို run ပါတယ်။',
      ), `function drinkName(code) {
  switch (code) {
    case "T": return "Tea";
    case "C": return "Coffee";
    default: return "Unknown";
  }
}`),
      part('loops', p('Repeat with for and while', 'for နဲ့ while သုံးပြီး ထပ်လုပ်ပါ'), p(
        'Use for when the setup, condition, and update fit together. Use while when the termination condition is the main idea. continue skips to the next pass and break stops the loop. Make sure a while loop can reach its stopping condition.',
        'စတင်တန်ဖိုး၊ စစ်ချက်နဲ့ တန်ဖိုးပြောင်းတာကို တစ်နေရာတည်း ရေးချင်ရင် for သုံးပါ။ ဘယ်အချိန်ရပ်မလဲက အဓိကဆို while သုံးပါ။ continue က နောက်တစ်ပတ်ဆီ ကျော်ပြီး break က loop ရပ်ပါတယ်။ while loop က ရပ်မယ့်အခြေအနေ ရောက်နိုင်အောင် စစ်ပါ။',
      ), `let sum = 0;
for (let number = 1; number <= 4; number++) sum += number;
console.log(sum); // 10

const orders = ["tea", "", "coffee", "done", "juice"];
let index = 0;
while (index < orders.length) {
  const order = orders[index++];
  if (order === "done") break;
  if (order === "") continue;
  console.log(order);
} // tea, coffee`),
    ], [['MDN · Control flow and error handling', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling'],
      ['MDN · Loops and iteration', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration'],
      ['ECMAScript 2026 · Statements and declarations', 'https://tc39.es/ecma262/2026/#sec-ecmascript-language-statements-and-declarations']]),
    page('functions', p('Functions and modules', 'Functions နဲ့ Modules'), p(
      'Give reusable logic a name, pass it inputs, and share it with other files.',
      'ထပ်သုံးမယ့် logic ကို နာမည်ပေးပြီး inputs လက်ခံပါ။ တခြားဖိုင်တွေနဲ့လည်း မျှဝေသုံးနိုင်ပါတယ်။',
    ), [
      part('parameters', p('Set defaults and return a value', 'Default Parameter နဲ့ Return Value သုံးပါ'), p(
        'A parameter gives an input a name. A default parameter supplies a value when the caller skips that input or passes undefined. return sends the result back to the caller.',
        'Parameter က input ကို နာမည်ပေးပါတယ်။ Caller က အဲဒီ input မထည့်ရင် သို့မဟုတ် undefined ပို့ရင် default parameter က တန်ဖိုး ဖြည့်ပေးပါတယ်။ return က result ကို caller ဆီ ပြန်ပို့ပါတယ်။',
      ), `// total.js
export function total(price, quantity = 1) {
  return price * quantity;
}

// app.js
import { total } from "./total.js";
console.log(total(2500), total(2500, 2)); // 2500 5000`),
      functions,
    ], [['MDN · Functions', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions'],
      ['MDN · JavaScript modules', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules']]),
  ],
};

// Keep old Docs links working after moving sections into their own articles.
export const movedSections = {
  html: { content: { images: 'images', tables: 'tables' }, forms: { keyboard: 'accessibility' } },
  js: { values: { functions: 'functions' } },
};
