import { p, part, page, guide } from './content.js';

const html = guide('html', 'HTML', 'HTML Living Standard',
  p('Structure pages, name common sections, and build forms that work with a keyboard.', 'စာမျက်နှာဖွဲ့စည်းပုံ၊ အသုံးများတဲ့ အပိုင်းများနဲ့ keyboard ဖြင့် အသုံးပြုနိုင်တဲ့ form များကို လေ့လာပါ။'),
  [
    page('structure', p('Document structure', 'စာမျက်နှာ ဖွဲ့စည်းပုံ'),
      p('HTML describes the meaning and structure of a page. The browser uses it to build the document that users see and interact with.', 'HTML က စာမျက်နှာရဲ့ ဖွဲ့စည်းပုံနဲ့ အကြောင်းအရာရဲ့ အဓိပ္ပာယ်ကို ဖော်ပြပါတယ်။ Browser က အဲဒီ HTML ကိုဖတ်ပြီး သုံးလို့ရတဲ့ စာမျက်နှာကို တည်ဆောက်ပါတယ်။'),
      [
        part('document', p('A complete document', 'HTML Document အပြည့်အစုံ'),
          p('Use the doctype to select standards mode. Set lang for the page language. The head holds metadata. The body holds content such as headings, paragraphs, links, and images.', 'Standards mode သုံးဖို့ doctype ထည့်ပါ။ စာမျက်နှာဘာသာစကားကို lang နဲ့ သတ်မှတ်ပါ။ head ထဲမှာ metadata ထည့်ပြီး body ထဲမှာ headings၊ paragraphs၊ links နဲ့ pictures တွေ ထည့်ပါ။'),
          `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Café menu</title>
</head>
<body>
  <main>
    <h1>Café menu</h1>
    <p>Fresh drinks and snacks.</p>
  </main>
</body>
</html>`),
        part('headings', p('Headings and page regions', 'Headings နှင့် စာမျက်နှာ အပိုင်းများ'),
          p('Choose heading levels by the section hierarchy. Use main for the main content, nav for major navigation, and article for a piece of content that can stand on its own. Style their appearance with CSS.', 'Section အဆင့်အလိုက် heading level ရွေးပါ။ အဓိက content အတွက် main၊ အဓိက menu အတွက် nav၊ သီးသန့် ဖတ်လို့ရတဲ့ အကြောင်းအရာအတွက် article သုံးပါ။ မြင်ရမယ့်ပုံစံကို CSS နဲ့ ပြင်ပါ။')),
      ],
      [['WHATWG HTML Living Standard', 'https://html.spec.whatwg.org/'], ['HTML document metadata', 'https://html.spec.whatwg.org/multipage/semantics.html']]),
    page('content', p('Links, images, and tables', 'Links၊ Images နှင့် Tables'),
      p('Pick the element that matches what the content does.', 'အကြောင်းအရာရဲ့ လုပ်ဆောင်ချက်နဲ့ ကိုက်ညီတဲ့ element ကို ရွေးပါ။'),
      [
        part('links', p('Links and buttons', 'Links နှင့် Buttons'),
          p('Use an anchor with href to go to a page or a section. Use a button for an action such as opening a menu. Inside a form, give an action button type="button" if it should not submit the form.', 'စာမျက်နှာ သို့မဟုတ် section တစ်ခုဆီ သွားဖို့ href ပါတဲ့ anchor သုံးပါ။ Menu ဖွင့်တာလို အလုပ်တစ်ခု လုပ်ဖို့ button သုံးပါ။ Form မပို့စေချင်တဲ့ button မှာ type="button" ထည့်ပါ။')),
        part('images', p('Image text and responsive sources', 'Image Text နှင့် Responsive Sources'),
          p('Use alt to give meaningful images a text alternative. Use alt="" for decorative images. Use srcset and sizes for images of different sizes, or picture when the image itself needs to change at a breakpoint.', 'အဓိပ္ပာယ်ပါတဲ့ ပုံအတွက် alt စာသား ရေးပါ။ အလှဆင်ဖို့သက်သက် ပုံအတွက် alt="" သုံးပါ။ ပုံအရွယ်အစား ရွေးဖို့ srcset နဲ့ sizes သုံးပြီး breakpoint အလိုက် ပုံပြောင်းဖို့ picture သုံးပါ။'),
          `<picture>
  <source media="(min-width: 60rem)" srcset="cafe-wide.jpg">
  <img src="cafe-small.jpg" alt="Coffee and cake on a table">
</picture>`),
        part('tables', p('Data tables', 'Data Tables'),
          p('Use caption for the table title and th for header cells. Use scope="col" or scope="row" to show which cells a simple header describes.', 'Table ခေါင်းစဉ်ကို caption နဲ့ရေးပြီး header cell အတွက် th သုံးပါ။ ရိုးရှင်းတဲ့ table မှာ header နဲ့ဆိုင်တဲ့ column သို့ row ကို scope="col" သို့ scope="row" နဲ့ ပြပါ။')),
      ],
      [['Links and page sections', 'https://html.spec.whatwg.org/multipage/sections.html'], ['Embedded content and responsive images', 'https://html.spec.whatwg.org/multipage/embedded-content.html'], ['Tables', 'https://html.spec.whatwg.org/multipage/tables.html']]),
    page('forms', p('Forms and accessibility', 'Forms နှင့် အသုံးပြုရလွယ်ကူမှု'),
      p('HTML forms collect values and can send them to a server. Browser validation helps users spot missing or invalid input early.', 'HTML forms က input values တွေ စုပြီး server ဆီ ပို့နိုင်ပါတယ်။ Browser validation နဲ့ လိုနေတဲ့ သို့မဟုတ် မမှန်တဲ့ input ကို စောစော သိနိုင်ပါတယ်။'),
      [
        part('fields', p('Labels, fields, and validation', 'Labels၊ Fields နှင့် Validation'),
          p('A label can connect to an input through matching for and id values. The name is the key submitted with the field. Use input types and constraints such as required and minlength. Check the data on the server too.', 'label ရဲ့ for နဲ့ input ရဲ့ id တူရင် ချိတ်ပေးပါတယ်။ name က submit လုပ်တဲ့ field ရဲ့ key ပါ။ Input types၊ required နဲ့ minlength လို constraints တွေ သုံးနိုင်ပါတယ်။ Server မှာလည်း data ကို ပြန်စစ်ပါ။'),
          `<form action="/orders" method="post">
  <label for="email">Email address</label>
  <input id="email" name="email" type="email" required>
  <fieldset>
    <legend>Size</legend>
    <label><input type="radio" name="size" value="small" checked> Small</label>
    <label><input type="radio" name="size" value="large"> Large</label>
  </fieldset>
  <button type="submit">Order</button>
</form>`),
        part('keyboard', p('Keyboard navigation', 'Keyboard ဖြင့် သွားလာခြင်း'),
          p('Use standard links, buttons, and inputs so the browser provides built-in keyboard behavior. Keep focus visible. Read the page with the Tab key to check the interaction order, then activate a control using the keyboard.', 'Browser က keyboard အသုံးပြုမှုကို ပံ့ပိုးပေးနိုင်ဖို့ ပုံမှန် links၊ buttons နဲ့ inputs တွေ သုံးပါ။ Focus ကို မြင်ရအောင် ထားပါ။ Tab နဲ့ သွားလာတဲ့အစဉ်ကို စစ်ပြီး keyboard နဲ့ control တစ်ခုကို ဖွင့်ကြည့်ပါ။')),
      ],
      [['HTML forms', 'https://html.spec.whatwg.org/multipage/forms.html'], ['Focus and keyboard interaction', 'https://html.spec.whatwg.org/multipage/interaction.html#focus']]),
  ]);

const css = guide('css', 'CSS', 'W3C CSS Snapshot 2026',
  p('Control styles, layouts, and responsive behavior. CSS evolves as a set of modules with their own levels.', 'Styles၊ Layouts နဲ့ responsive ပုံစံတွေ ရေးပါ။ CSS က သီးသန့် level တွေရှိတဲ့ modules များအဖြစ် တိုးတက်လာပါတယ်။'),
  [
    page('cascade', p('Selectors and the cascade', 'Selectors နှင့် Cascade'),
      p('Selectors decide which elements a rule matches. The cascade decides which value wins when rules set the same property.', 'Selector က rule ဘယ် element နဲ့ ကိုက်လဲ ရွေးပါတယ်။ Property တူတဲ့ rules တွေရှိရင် cascade က ဘယ်တန်ဖိုး သုံးမလဲ ဆုံးဖြတ်ပါတယ်။'),
      [
        part('priority', p('Layers and specificity', 'Layers နှင့် Specificity'),
          p('The cascade considers origin, importance, and layer order before specificity. When comparable rules have the same specificity, a later one generally wins. Normal declarations outside a layer outrank normal declarations inside layers.', 'Cascade က specificity မတိုင်ခင် origin၊ importance နဲ့ layer order ကို ကြည့်ပါတယ်။ တန်းတူ rules တွေမှာ specificity တူရင် ယေဘုယျအားဖြင့် နောက်ဆုံး rule အနိုင်ရပါတယ်။ Layer အပြင်က normal declaration က layer ထဲက normal declaration ထက် ဦးစားပေးပါတယ်။'),
          `@layer base, components;
@layer base {
  p { color: #334155; }
}
@layer components {
  .notice { color: #075985; }
}`),
        part('variables', p('Inheritance and custom properties', 'Inheritance နှင့် Custom Properties'),
          p('Properties such as color usually inherit from a parent. A custom property provides a reusable value. Define --brand and use var(--brand) where you need it. A fallback can cover a missing custom property.', 'color လို properties အချို့ကို parent ကနေ အလိုအလျောက် ဆက်ခံပါတယ်။ ထပ်သုံးချင်တဲ့တန်ဖိုးကို --brand လို custom property နဲ့ သတ်မှတ်ပြီး var(--brand) နဲ့ ဖတ်ပါ။ တန်ဖိုး မရှိရင် fallback ထည့်နိုင်ပါတယ်။'),
          `:root { --brand: #14665b; }
a { color: var(--brand, teal); }`),
      ],
      [['CSS Snapshot 2026', 'https://www.w3.org/TR/css-2026/'], ['CSS cascade and layers', 'https://www.w3.org/TR/css-cascade-5/'], ['CSS custom properties', 'https://www.w3.org/TR/css-variables-1/']]),
    page('layout', p('Box model, Flexbox, and Grid', 'Box Model၊ Flexbox နှင့် Grid'),
      p('The box model explains element size. Flexbox and Grid control how boxes fit together.', 'Box model က element ရဲ့ အရွယ်အစားကို ရှင်းပြပါတယ်။ Flexbox နဲ့ Grid က boxes တွေကို စီပေးပါတယ်။'),
      [
        part('box', p('Sizing and spacing', 'အရွယ်အစားနှင့် ကြားအကွာအဝေး'),
          p('An element box has content, padding, border, and margin. With border-box, a declared width includes padding and border. The margin stays outside that width.', 'Element box မှာ content၊ padding၊ border နဲ့ margin ရှိပါတယ်။ border-box သုံးရင် သတ်မှတ်ထားတဲ့ width ထဲမှာ padding နဲ့ border ပါပါတယ်။ Margin က အပြင်မှာ ရှိပါတယ်။')),
        part('flex-grid', p('Flex and grid layout', 'Flex နှင့် Grid Layout'),
          p('Flexbox lays items out along one main axis and can wrap them onto new lines. Grid lets you plan rows and columns together. Use gap for spacing between items.', 'Flexbox က items တွေကို main axis တစ်လျှောက် စီပြီး နေရာမလောက်ရင် နောက်တန်းကို ဆင်းနိုင်ပါတယ်။ Grid က rows နဲ့ columns ကို တွဲပြီး စီနိုင်ပါတယ်။ Items ကြားအကွာအဝေးအတွက် gap သုံးပါ။'),
          `.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
  gap: 1rem;
}`),
      ],
      [['CSS box sizing', 'https://www.w3.org/TR/css-sizing-3/'], ['Flexbox', 'https://www.w3.org/TR/css-flexbox-1/'], ['CSS Grid', 'https://www.w3.org/TR/css-grid-2/']]),
    page('responsive', p('Responsive styles and focus', 'Responsive Styles နှင့် Focus'),
      p('Responsive styles adapt to the viewport or the space available to a component.', 'Responsive styles က viewport သို့ component အတွက် ရနိုင်တဲ့ နေရာအကျယ်နဲ့ ကိုက်ညီအောင် ပြောင်းပေးပါတယ်။'),
      [
        part('queries', p('Media and container queries', 'Media Queries နှင့် Container Queries'),
          p('A media query can change styling when the viewport meets a condition. A container query can change a component when a named or eligible parent container has enough space. Keep a usable base style for smaller sizes.', 'Media query က viewport အခြေအနေ ကိုက်တဲ့အခါ style ပြောင်းပါတယ်။ Container query က parent container မှာ နေရာလုံလောက်တဲ့အခါ component style ပြောင်းနိုင်ပါတယ်။ နေရာကျဉ်းတဲ့အခါ သုံးလို့ရမယ့် base style ထားပါ။'),
          `.panel { container-type: inline-size; }
.details { display: grid; gap: 0.75rem; }

@container (min-width: 35rem) {
  .details { grid-template-columns: 1fr 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .details { animation: none; transition: none; }
}`),
        part('focus', p('Focus and visual states', 'Focus နှင့် Visual States'),
          p('Use :focus-visible to style focus when the browser determines a visible indicator is needed. Pair mouse hover styles with a visible keyboard focus style for interactive elements.', 'Browser က focus အမှတ်အသား ပြသင့်တယ်လို့ ဆုံးဖြတ်တဲ့အခါ :focus-visible နဲ့ style ပေးနိုင်ပါတယ်။ Interactive elements မှာ mouse hover နဲ့အတူ keyboard focus ကိုပါ မြင်ရအောင် ပြင်ပါ။')),
      ],
      [['Media queries', 'https://www.w3.org/TR/mediaqueries-5/'], ['Container size queries', 'https://www.w3.org/TR/css-conditional-5/'], ['Selectors and focus states', 'https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo']]),
  ]);

const js = guide('js', 'JavaScript', 'ECMAScript 2026',
  p('Work with values, functions, browser events, and asynchronous requests.', 'Values၊ Functions၊ Browser Events နဲ့ Async Requests တွေကို လေ့လာပါ။'),
  [
    page('values', p('Values, functions, and modules', 'Values၊ Functions နှင့် Modules'),
      p('ECMAScript specifies the JavaScript language. Browsers add APIs such as document and fetch.', 'ECMAScript က JavaScript language ကို သတ်မှတ်ပါတယ်။ Browser က document နဲ့ fetch လို APIs တွေ ထပ်ပေးပါတယ်။'),
      [
        part('bindings', p('Values and bindings', 'Values နှင့် Bindings'),
          p('Use const for bindings you will not reassign and let for bindings you will reassign. A const object can still have mutable properties. Use === for comparisons that keep types distinct.', 'ပြန် assign မလုပ်တဲ့ binding အတွက် const၊ ပြန် assign လုပ်မယ့် binding အတွက် let သုံးပါ။ const object ရဲ့ properties ကို ပြောင်းနိုင်ပါသေးတယ်။ Type မတူတာကို ခွဲပြီး နှိုင်းယှဉ်ဖို့ === သုံးပါ။')),
        part('functions', p('Functions and array transforms', 'Functions နှင့် Arrays ပြောင်းလဲခြင်း'),
          p('Functions take inputs and may return a value. Use filter to keep selected items and map to turn each item into a new value. Use export and import to share functions between modules.', 'Function က input ယူပြီး value ပြန်ပေးနိုင်ပါတယ်။ ရွေးထားတဲ့ items ယူဖို့ filter၊ item ကို တခြား value ပြောင်းဖို့ map သုံးပါ။ Modules ကြား function မျှဝေဖို့ export နဲ့ import သုံးပါ။'),
          `export function availableNames(drinks) {
  return drinks
    .filter(drink => drink.inStock)
    .map(drink => drink.name);
}`),
      ],
      [['ECMAScript 2026', 'https://tc39.es/ecma262/2026/'], ['ECMAScript modules', 'https://tc39.es/ecma262/2026/#sec-modules'], ['Array methods', 'https://tc39.es/ecma262/2026/#sec-array.prototype.map']]),
    page('dom', p('DOM and events', 'DOM နှင့် Events'),
      p('The DOM represents the page as a tree of nodes. JavaScript can read and change that tree.', 'DOM က စာမျက်နှာကို node tree အဖြစ် ဖော်ပြပါတယ်။ JavaScript နဲ့ tree ကို ဖတ်နိုင်၊ ပြင်နိုင်ပါတယ်။'),
      [
        part('nodes', p('Find and change elements', 'Elements ရှာပြီး ပြင်ခြင်း'),
          p('querySelector returns the first matching element or null. createElement creates an element, append inserts it, and remove detaches it. Use textContent to show plain text.', 'querySelector က ပထမဆုံးကိုက်တဲ့ element သို့ null ပြန်ပါတယ်။ createElement နဲ့ element ဆောက်၊ append နဲ့ထည့်၊ remove နဲ့ဖယ်ပါ။ ရိုးရိုးစာသား ပြဖို့ textContent သုံးပါ။')),
        part('events', p('Bubbling and delegation', 'Bubbling နှင့် Delegation'),
          p('A bubbling event can reach a parent listener. event.target shows where it began, and currentTarget shows where the active listener is. Listen on a container when several buttons share one action.', 'Bubbling event က parent listener ကို ရောက်နိုင်ပါတယ်။ event.target က စတဲ့နေရာ၊ currentTarget က အခု listener ရှိတဲ့ element ပါ။ အလုပ်တူ buttons များအတွက် container မှာ listener တစ်ခုထားနိုင်ပါတယ်။'),
          `const list = document.querySelector("#menu");
list?.addEventListener("click", event => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("button[data-drink]");
  if (!button || !list.contains(button)) return;
  document.querySelector("#selected").textContent = button.dataset.drink;
});`),
      ],
      [['WHATWG DOM Standard', 'https://dom.spec.whatwg.org/'], ['Dispatching events', 'https://dom.spec.whatwg.org/#dispatching-events']]),
    page('async', p('Promises, event loop, and Fetch', 'Promises၊ Event Loop နှင့် Fetch'),
      p('Async code lets the program work while it waits for an operation such as a network request.', 'Network request လို အလုပ်တစ်ခု စောင့်နေချိန်မှာ async code က program ကို တခြားအလုပ် ဆက်လုပ်နိုင်စေပါတယ်။'),
      [
        part('loop', p('Tasks and microtasks', 'Tasks နှင့် Microtasks'),
          p('In the browser, Promise reactions run as microtasks. After current synchronous code finishes, queued microtasks are processed before the next timer task. await pauses its own async function while the awaited value settles.', 'Browser မှာ Promise reactions က microtasks ဖြစ်ပါတယ်။ လက်ရှိ synchronous code ပြီးရင် timer task မတိုင်ခင် စောင့်နေတဲ့ microtasks တွေကို အရင် လုပ်ပါတယ်။ await က စောင့်နေတဲ့ async function ကို ခဏရပ်ပေးပါတယ်။')),
        part('fetch', p('Check the HTTP response', 'HTTP Response ကို စစ်ခြင်း'),
          p('fetch returns a Promise for a Response. HTTP 404 or 500 can still produce a Response, so check response.ok. Use response.json() to read a JSON body and catch failures where you can show a useful message.', 'fetch က Response အတွက် Promise ပြန်ပါတယ်။ HTTP 404 သို့ 500 မှာလည်း Response ရနိုင်လို့ response.ok စစ်ပါ။ JSON body ကို response.json() နဲ့ဖတ်ပြီး အသုံးဝင်တဲ့ message ပြနိုင်မယ့်နေရာမှာ error ဖမ်းပါ။'),
          `export async function createOrder(item, quantity) {
  const response = await fetch("/api/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item, quantity }),
  });

  if (!response.ok) throw new Error("HTTP " + response.status);
  return response.json();
}`),
      ],
      [['ECMAScript promises', 'https://tc39.es/ecma262/2026/#sec-promise-objects'], ['HTML event loops', 'https://html.spec.whatwg.org/multipage/webappapis.html#event-loops'], ['WHATWG Fetch Standard', 'https://fetch.spec.whatwg.org/']]),
  ]);

export const webGuides = [html, css, js];
