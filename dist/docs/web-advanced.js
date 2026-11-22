import { p, page, part } from './content.js';

export const advancedWeb = {
  html: [
    page('dialogs-and-popovers', p('Dialogs and popovers', 'Dialogs နဲ့ Popovers'), p(
      'Use a modal dialog when a decision needs the user’s attention. Use a popover for extra content that can sit above the page.',
      'User ဆုံးဖြတ်ချက် လိုတဲ့အခါ modal dialog သုံးပါ။ Page ပေါ်မှာ ထပ်ပြမယ့် အပိုအချက်အလက်အတွက် popover သုံးပါ။',
    ), [
      part('modal', p('Open a modal dialog', 'Modal dialog ဖွင့်ပါ'), p(
        'Call showModal() to open the dialog and make the rest of the page inactive. Give it a visible title and a close button. A form with method="dialog" closes the dialog on submit. Test with Tab and Escape, then check that focus returns to the opener.',
        'showModal() နဲ့ dialog ဖွင့်ရင် နောက်ခံ page ကို ယာယီ သုံးလို့မရပါဘူး။ မြင်ရတဲ့ title နဲ့ ပိတ်ခလုတ် ထည့်ပါ။ method="dialog" ပါတဲ့ form ကို submit လုပ်ရင် dialog ပိတ်ပါတယ်။ Tab နဲ့ Escape သုံးပြီး ပိတ်ပြီးချိန် focus က ဖွင့်ခဲ့တဲ့ခလုတ်ဆီ ပြန်ရောက်လား စစ်ပါ။',
      ), `<button id="open" type="button">View order</button>
<dialog id="order" aria-labelledby="order-title">
  <h2 id="order-title">Order details</h2>
  <p>Two cups of tea are ready.</p>
  <form method="dialog"><button autofocus>Close</button></form>
</dialog>
<script>
  const dialog = document.querySelector("#order");
  document.querySelector("#open").addEventListener("click", () => {
    dialog.showModal();
  });
</script>`),
      part('commands', p('Open a dialog from a button', 'Button ကနေ Dialog ဖွင့်ပါ'), p(
        'In browsers that support button commands, match commandfor to the dialog id. Use show-modal to open it and close on the button inside it. The earlier showModal() example opens the same dialog from JavaScript.',
        'Button commands သုံးလို့ရတဲ့ browser မှာ commandfor နဲ့ dialog id ကို တူအောင်ထားပါ။ ဖွင့်ဖို့ show-modal၊ အထဲက ပိတ်ခလုတ်မှာ close သုံးပါ။ အပေါ်က showModal() နမူနာကတော့ JavaScript ကနေ ဖွင့်ပေးပါတယ်။',
      ), `<button type="button" commandfor="order" command="show-modal">View order</button>
<dialog id="order" aria-label="Order details">
  <p>Two cups of tea are ready.</p>
  <button type="button" commandfor="order" command="close">Close</button>
</dialog>`),
      part('popover', p('Show optional information', 'အပိုအချက်အလက် ပြပါ'), p(
        'Set popovertarget to the popover’s id. An auto popover closes when the user clicks outside or presses Escape. The page remains interactive while it is open.',
        'popovertarget မှာ popover ရဲ့ id ကို ထည့်ပါ။ Auto popover က အပြင်ဘက်ကို click လုပ်ရင်၊ Escape နှိပ်ရင် ပိတ်ပါတယ်။ Popover ဖွင့်ထားချိန်မှာ page ကို ဆက်သုံးလို့ရပါတယ်။',
      ), `<button type="button" popovertarget="sku-help">What is a SKU?</button>
<p id="sku-help" popover>A SKU is a code that identifies a product.</p>`),
    ], [
      ['MDN · The dialog element', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog'],
      ['MDN · Button commands', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#command'],
      ['MDN · The popover attribute', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover'],
    ]),
    page('metadata-and-search', p('Page metadata and search', 'Page Metadata နဲ့ Search'), p(
      'Describe each page in its head so browsers and search engines can understand it.',
      'Browser နဲ့ search engine က စာမျက်နှာတစ်ခုချင်းစီကို နားလည်နိုင်အောင် head ထဲမှာ ဖော်ပြပါ။',
    ), [
      part('head', p('Write a clear title and description', 'Title နဲ့ Description ရှင်းရှင်းရေးပါ'), p(
        'Give every page a short, distinct title and a description about its actual content. Keep the visible main heading consistent with the title. Google may choose other text for the search title or snippet.',
        'Page တစ်ခုစီအတွက် တိုပြီး ခွဲသိနိုင်တဲ့ title နဲ့ တကယ်ပါဝင်တဲ့ အကြောင်းအရာကို ဖော်ပြတဲ့ description ရေးပါ။ Page ပေါ်က main heading နဲ့ title ကို ကိုက်ညီအောင်ထားပါ။ Google က search result မှာ တခြားစာသားကို title ဒါမှမဟုတ် snippet အနေနဲ့ ရွေးပြနိုင်ပါတယ်။',
      ), `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Café Menu | Tea House</title>
  <meta name="description" content="See our teas, coffee, and prices.">
  <link rel="canonical" href="https://example.com/menu">
</head>`),
      part('canonical', p('Choose a preferred URL', 'ဦးစားပေး URL သတ်မှတ်ပါ'), p(
        'When the same content has several URLs, rel="canonical" signals which one you prefer. Link internally to that URL and include it in the sitemap if you use one. Use a distinct canonical URL for each genuinely different page.',
        'အကြောင်းအရာတူတဲ့ URL အများကြီး ရှိရင် ဘယ် URL ကို ဦးစားပေးမလဲ rel="canonical" နဲ့ ပြပါ။ Site ထဲက link တွေနဲ့ sitemap သုံးထားရင် အဲဒီ URL ကိုပဲ သုံးပါ။ အကြောင်းအရာ မတူတဲ့ page တိုင်းအတွက် သက်ဆိုင်ရာ canonical URL ကို သီးသန့်ထားပါ။',
      )),
    ], [
      ['Google Search Central · Title links', 'https://developers.google.com/search/docs/appearance/title-link'],
      ['Google Search Central · Snippets', 'https://developers.google.com/search/docs/appearance/snippet'],
      ['Google Search Central · Canonical URLs', 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls'],
    ]),
  ],
  css: [
    page('typography', p('Fonts and readable text', 'Fonts နဲ့ ဖတ်ရလွယ်တဲ့ စာသား'), p(
      'Set a readable type scale, line height, and text width before adding a custom font.',
      'Custom font မထည့်ခင် စာလုံးအရွယ်၊ စာကြောင်းအမြင့်နဲ့ စာပိုဒ်အကျယ်ကို ဖတ်ရလွယ်အောင် သတ်မှတ်ပါ။',
    ), [
      part('scale', p('Set the size and line height', 'စာလုံးအရွယ်နဲ့ စာကြောင်းအမြင့် သတ်မှတ်ပါ'), p(
        'Use rem for sizes that follow the root font size. A unitless line-height scales with the element’s own font size. Keep paragraphs narrow enough to read and check the result at browser zoom and on a small screen.',
        'Root font size နဲ့ လိုက်ပြောင်းရမယ့် အရွယ်အတွက် rem သုံးပါ။ Unit မပါတဲ့ line-height က element ရဲ့ font size နဲ့ လိုက်ပြောင်းပါတယ်။ စာကြောင်းတွေ အရမ်းမရှည်အောင်ထားပြီး browser zoom နဲ့ ဖုန်းအရွယ်မှာ စစ်ပါ။',
      ), `article {
  max-inline-size: 65ch;
  line-height: 1.65;
}
h1 { font-size: clamp(1.75rem, 1rem + 3vw, 3rem); }`),
      part('load', p('Load a font with a fallback', 'Fallback နဲ့ Font တင်ပါ'), p(
        'Point @font-face at a WOFF2 file you have permission to serve. font-display: swap shows a fallback first if the font takes time to load. Choose a fallback that supports the page’s language and test when the custom font fails to load.',
        'သုံးခွင့်ရှိတဲ့ WOFF2 font file ကို @font-face မှာ ထည့်ပါ။ Font တက်ဖို့ ကြာတဲ့အခါ font-display: swap က fallback font နဲ့ အရင်ပြပါတယ်။ Page ရဲ့ ဘာသာစကားကို support လုပ်တဲ့ fallback ထားပြီး custom font မတက်တဲ့အခါ စမ်းပါ။',
      ), `@font-face {
  font-family: "Cafe Sans";
  src: url("./fonts/cafe-sans.woff2") format("woff2");
  font-display: swap;
}
body { font-family: "Cafe Sans", "Noto Sans Myanmar", system-ui, sans-serif; }`),
    ], [
      ['MDN · @font-face', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face'],
      ['MDN · line-height', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/line-height'],
      ['MDN · clamp()', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp'],
    ]),
    page('dark-mode', p('Build a light and dark theme', 'Light နဲ့ Dark Theme ဆောက်ပါ'), p(
      'Use custom properties for page colors and let the browser’s preference pick the default theme.',
      'Page အရောင်တွေကို custom properties နဲ့ သတ်မှတ်ပြီး browser preference အတိုင်း မူလ theme ရွေးပါ။',
    ), [
      part('preference', p('Follow the system preference', 'System preference ကို လိုက်ပါ'), p(
        'Set colors once for light mode, then override the variables in prefers-color-scheme: dark. color-scheme also tells the browser how to paint built-in controls and scrollbars.',
        'အရင်ဆုံး light mode အရောင်တွေ သတ်မှတ်ပါ။ ပြီးရင် prefers-color-scheme: dark ထဲမှာ variables တွေ ပြောင်းပါ။ color-scheme က browser ရဲ့ form controls နဲ့ scrollbars ကို ဘယ် theme နဲ့ပြမလဲ သိစေပါတယ်။',
      ), `:root {
  color-scheme: light;
  --page: #ffffff;
  --ink: #202124;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    color-scheme: dark;
    --page: #17191c;
    --ink: #f1f4f8;
  }
}
:root[data-theme="dark"] {
  color-scheme: dark;
  --page: #17191c;
  --ink: #f1f4f8;
}
body { background: var(--page); color: var(--ink); }`),
      part('override', p('Let the reader choose', 'ဖတ်သူ ရွေးနိုင်အောင် လုပ်ပါ'), p(
        'Set data-theme to "light" or "dark" for a manual choice. Remove it to follow the system again. If you save the choice in localStorage, apply it when the page starts. Check text contrast and keyboard focus in both themes.',
        'User က ကိုယ်တိုင်ရွေးရင် data-theme ကို "light" ဒါမှမဟုတ် "dark" ထားပါ။ System အတိုင်း ပြန်သုံးဖို့ attribute ဖယ်ပါ။ ရွေးထားတာကို localStorage ထဲ သိမ်းရင် page စဖွင့်ချိန်မှာ ပြန်သုံးပါ။ Theme နှစ်မျိုးလုံးမှာ စာသား contrast နဲ့ keyboard focus စစ်ပါ။',
      )),
    ], [
      ['MDN · prefers-color-scheme', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme'],
      ['MDN · color-scheme', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme'],
    ]),
    page('layout-debugging', p('Debug a broken layout', 'Layout ပြဿနာ ရှာပြီးပြင်ပါ'), p(
      'Use DevTools to find which CSS rule or element makes a page wider, shorter, or harder to use than expected.',
      'Page ကျယ်လွန်းတာ၊ တိုလွန်းတာ၊ သုံးရခက်တာ ဘယ် CSS rule ဒါမှမဟုတ် element ကြောင့် ဖြစ်လဲ DevTools နဲ့ ရှာပါ။',
    ), [
      part('inspect', p('Follow the computed values', 'Computed values ကို ကြည့်ပါ'), p(
        'Reproduce the issue at the same viewport width. Inspect the element and its parent. Use Styles to see rules that were overridden, then use Computed to see the winning values. Turn on the Grid or Flexbox overlay to check tracks, gaps, and alignment.',
        'ပြဿနာဖြစ်တဲ့ viewport အကျယ်မှာ ပြန်စမ်းပါ။ Element နဲ့ သူ့ parent ကို Inspect လုပ်ပါ။ Styles မှာ အစားထိုးခံထားရတဲ့ rules တွေ၊ Computed မှာ တကယ်သုံးနေတဲ့ values တွေ ကြည့်ပါ။ Tracks၊ gaps နဲ့ alignment စစ်ဖို့ Grid သို့မဟုတ် Flexbox overlay ဖွင့်ပါ။',
      )),
      part('overflow', p('Find what causes horizontal overflow', 'ဘေးတိုက် Overflow ဖြစ်တဲ့အကြောင်း ရှာပါ'), p(
        'Check fixed widths, large images, and long strings. A flex child can keep its minimum content width. Allow it to shrink with min-inline-size: 0, then let the long text wrap. Recheck at narrow widths and with longer text.',
        'အကျယ်အသေ သတ်မှတ်ထားတာ၊ ပုံကြီးတာနဲ့ စာသားဆက်တိုက်ရှည်တာတွေ စစ်ပါ။ Flex child က content အကျယ်အတိုင်း အနည်းဆုံးနေရာ ယူထားနိုင်ပါတယ်။ min-inline-size: 0 နဲ့ ကျုံ့ခွင့်ပေးပြီး စာသားရှည်ကို လိုင်းခွဲပါ။ Screen ကျဉ်းကျဉ်းနဲ့ စာသားအရှည်ကို ထပ်စမ်းပါ။',
      ), `.row { display: flex; gap: 1rem; }
.row__text { min-inline-size: 0; overflow-wrap: anywhere; }
img { max-inline-size: 100%; block-size: auto; }`),
    ], [
      ['Chrome DevTools · Inspect CSS grid', 'https://developer.chrome.com/docs/devtools/css/grid/'],
      ['Chrome DevTools · Inspect Flexbox', 'https://developer.chrome.com/docs/devtools/css/flexbox/'],
      ['MDN · overflow-wrap', 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-wrap'],
    ]),
  ],
  js: [
    page('iterators-and-generators', p('Iterators and generators', 'Iterators နဲ့ Generators'), p(
      'Produce and read values one at a time. This is useful when the whole sequence does not need to be stored in an array.',
      'တန်ဖိုးတွေကို တစ်ခုစီ ထုတ်ပြီး ဖတ်ပါ။ Sequence တစ်ခုလုံးကို array ထဲ ကြိုသိမ်းဖို့ မလိုတဲ့အခါ သုံးလို့ကောင်းပါတယ်။',
    ), [
      part('protocol', p('Read values with next()', 'next() နဲ့ တန်ဖိုးဖတ်ပါ'), p(
        'An iterator has next(), which returns value and done. An iterable exposes Symbol.iterator to provide an iterator. Arrays are iterable, and for...of uses this protocol to read the values.',
        'Iterator မှာ next() ပါပြီး value နဲ့ done ပြန်ပေးပါတယ်။ Iterable တစ်ခုက Symbol.iterator ကနေ iterator ထုတ်ပေးပါတယ်။ Array တွေက iterable ဖြစ်ပြီး for...of က ဒီစည်းမျဉ်းနဲ့ value တွေကို ဖတ်ပါတယ်။',
      ), `const iterator = ["Tea", "Coffee"][Symbol.iterator]();
console.log(iterator.next()); // { value: "Tea", done: false }
console.log(iterator.next()); // { value: "Coffee", done: false }
console.log(iterator.next().done); // true`),
      part('generate', p('Pause a generator with yield', 'yield နဲ့ Generator ကို ခဏရပ်ပါ'), p(
        'Calling a generator function creates a generator object. Each next() resumes the function until it yields or ends. Create a new generator to start reading from the beginning again.',
        'Generator function ကို ခေါ်ရင် generator object ရပါတယ်။ next() တစ်ခါခေါ်တိုင်း yield တစ်ခုရောက်တာ ဒါမှမဟုတ် function ပြီးတာအထိ ဆက် run ပါတယ်။ အစကနေ ပြန်ဖတ်ဖို့ generator အသစ် ဆောက်ပါ။',
      ), `function* orderNumbers(first, last) {
  for (let number = first; number <= last; number++) yield number;
}

for (const number of orderNumbers(101, 103)) {
  console.log(number); // 101, 102, 103 on separate lines
}`),
    ], [
      ['MDN · Iteration protocols', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols'],
      ['MDN · Iterators and generators', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators'],
    ]),
    page('regular-expressions', p('Regular expressions', 'Regular Expressions'), p(
      'Use a pattern to check a text format or find matching parts of a string.',
      'စာသား format စစ်ဖို့နဲ့ string ထဲက ကိုက်ညီတဲ့အပိုင်း ရှာဖို့ pattern သုံးပါ။',
    ), [
      part('check', p('Check a whole input', 'Input တစ်ခုလုံးကို စစ်ပါ'), p(
        'Use ^ and $ to mark the ends of an input pattern. Character classes such as [A-Z] match one character from a range. A quantifier such as {3} repeats the preceding part. Test examples that should pass and fail.',
        'Pattern အစနဲ့ အဆုံးအတွက် ^ နဲ့ $ သုံးပါ။ [A-Z] လို character class က သတ်မှတ်ထားတဲ့ အပိုင်းထဲက စာလုံးတစ်လုံးကို ကိုက်ပါတယ်။ {3} က အရှေ့က အပိုင်းကို သုံးကြိမ် ထပ်စစ်ပါတယ်။ အောင်ရမယ့် input နဲ့ မအောင်ရမယ့် input နှစ်မျိုးလုံး စမ်းပါ။',
      ), `const orderCode = /^[A-Z]{2}-[0-9]{3}$/;
console.log(orderCode.test("TE-104")); // true
console.log(orderCode.test("TE-10"));  // false`),
      part('find', p('Find several matches', 'ကိုက်ညီတာ အများကြီး ရှာပါ'), p(
        'Use matchAll with the g flag to read every match and its capture groups. A reused regular expression with g or y advances lastIndex when test() succeeds, so use a regex without those flags for independent yes-or-no checks.',
        'ကိုက်ညီတာတစ်ခုချင်းနဲ့ capture groups တွေယူဖို့ g flag ပါတဲ့ matchAll သုံးပါ။ g သို့မဟုတ် y flag ပါတဲ့ regex ကို ပြန်သုံးရင် test() အောင်တိုင်း lastIndex ရွှေ့ပါတယ်။ Input တစ်ခုစီကို true/false သီးသန့်စစ်ဖို့ အဲဒီ flags မပါတဲ့ regex သုံးပါ။',
      ), `const text = "tea:3, coffee:2";
const pairs = [...text.matchAll(/([a-z]+):(\\d+)/g)]
  .map(([, item, count]) => [item, Number(count)]);
console.log(pairs); // [["tea", 3], ["coffee", 2]]`),
    ], [
      ['MDN · Regular expressions', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions'],
      ['MDN · RegExp.lastIndex', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex'],
      ['MDN · String.matchAll()', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll'],
    ]),
    page('web-workers', p('Move slow work to a Web Worker', 'ကြာတဲ့အလုပ်ကို Web Worker ထဲ ရွှေ့ပါ'), p(
      'Run CPU-heavy JavaScript in a worker so the browser’s main thread can respond to the user.',
      'တွက်ချက်မှုများတဲ့ JavaScript ကို worker ထဲ run ပြီး browser ရဲ့ main thread က user action တွေကို ဆက်တုံ့ပြန်နိုင်အောင် လုပ်ပါ။',
    ), [
      part('page', p('Set up the page', 'Page အတွက် ပြင်ဆင်ပါ'), p(
        'Put these three files in the same folder and serve them over HTTP or HTTPS. Open index.html through the server. The output starts with a loading message and changes when the worker replies.',
        'ဖိုင်သုံးခုကို folder တစ်ခုထဲ ထားပြီး HTTP သို့မဟုတ် HTTPS ကနေ serve ပါ။ Server ကနေ index.html ဖွင့်ပါ။ အစမှာ loading message ပေါ်ပြီး worker ဆီက reply ရရင် result ပြောင်းသွားပါတယ်။',
      ), `<!-- index.html -->
<p id="total" role="status">Adding values…</p>
<script type="module" src="./main.js"></script>`),
      part('start-worker', p('Start a module worker', 'Module Worker စတင်ပါ'), p(
        'Load main.js as a module over HTTP or HTTPS. It starts a separate worker script and sends a message. The main page uses the reply to update the DOM. Handle worker errors and close the worker once this one-time job ends.',
        'main.js ကို HTTP သို့မဟုတ် HTTPS ကနေ module အဖြစ် load ပါ။ သီးသန့် worker script ကို စပြီး message ပို့ပါတယ်။ ပြန်လာတဲ့ result နဲ့ main page မှာ DOM ကို update လုပ်ပါ။ Worker error ကို ကိုင်တွယ်ပြီး ဒီတစ်ခါတွက်ရုံ အလုပ်ပြီးတာနဲ့ worker ပိတ်ပါ။',
      ), `// main.js
const worker = new Worker(new URL("./total-worker.js", import.meta.url), {
  type: "module",
});
worker.onmessage = event => {
  document.querySelector("#total").textContent = String(event.data);
  worker.terminate();
};
worker.onerror = () => {
  document.querySelector("#total").textContent = "Could not total the values.";
  worker.terminate();
};
worker.postMessage([12, 18, 24]);`),
      part('receive', p('Receive and reply from the worker', 'Worker ကနေ လက်ခံပြီး ပြန်ပို့ပါ'), p(
        'A worker has its own global scope and cannot read the page DOM. postMessage copies supported values with the structured clone algorithm. For a large ArrayBuffer, consider transferring it and let the receiving side own the buffer.',
        'Worker မှာ ကိုယ်ပိုင် global scope ရှိပြီး page ရဲ့ DOM ကို တိုက်ရိုက် မဖတ်နိုင်ပါဘူး။ postMessage က support လုပ်တဲ့ data ကို structured clone algorithm နဲ့ ကူးပေးပါတယ်။ ArrayBuffer ကြီးရင် transfer လုပ်ပြီး လက်ခံတဲ့ဘက်ကို buffer ownership လွှဲပေးနိုင်ပါတယ်။',
      ), `// total-worker.js
self.onmessage = ({ data }) => {
  const total = data.reduce((sum, value) => sum + value, 0);
  self.postMessage(total);
};`),
    ], [
      ['MDN · Using Web Workers', 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers'],
      ['MDN · Structured clone algorithm', 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm'],
    ]),
  ],
};
