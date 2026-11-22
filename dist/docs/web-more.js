import { p, part, page } from './content.js';

const htmlStandard = 'https://html.spec.whatwg.org/multipage/';

export const webArticles = {
  html: [
    page('lists-and-disclosure', p('Lists and expandable content', 'Lists နှင့် ချဲ့ဖတ်နိုင်သော Content'),
      p('HTML has built-in elements for lists and sections users can open and close.', 'စာရင်းနဲ့ ဖတ်ချင်မှ ဖွင့်ကြည့်လို့ရတဲ့ section အတွက် HTML မှာ သီးသန့် elements တွေ ရှိပါတယ်။'),
      [
        part('list-types', p('Choose a list by its meaning', 'အဓိပ္ပာယ်အလိုက် List ရွေးခြင်း'),
          p('Use ol if changing item order changes the meaning, as with instructions. Use ul if order is unimportant. Both use li for each item. A dl groups terms or names with their descriptions using dt and dd.', 'လုပ်ရမယ့်အဆင့်တွေလို အစဉ်ပြောင်းရင် အဓိပ္ပာယ်ပါ ပြောင်းသွားတဲ့စာရင်းအတွက် ol သုံးပါ။ အစဉ်မလိုရင် ul သုံးပါ။ နှစ်မျိုးလုံးမှာ item တစ်ခုစီအတွက် li သုံးပါတယ်။ Term နဲ့ ရှင်းလင်းချက် တွဲပြဖို့ dl ထဲမှာ dt နဲ့ dd သုံးပါ။'),
          `<ol>
  <li>Choose a drink.</li>
  <li>Pick a size.</li>
  <li>Check your order.</li>
</ol>`),
        part('disclosure', p('Use details and summary', 'details နှင့် summary သုံးခြင်း'),
          p('Place a summary first inside details to name the control. The remaining content is displayed when the element is open. Add the open attribute if it should start expanded.', 'Control ပေါ်မှာ ပြမယ့် စာသားကို details ထဲ ပထမဆုံး summary နဲ့ ရေးပါ။ ဖွင့်လိုက်တဲ့အခါ ကျန်တဲ့ content ပေါ်ပါတယ်။ အစကတည်းက ဖွင့်ထားချင်ရင် open attribute ထည့်ပါ။'),
          `<details>
  <summary>Can I change my order?</summary>
  <p>You can change it before payment.</p>
</details>`),
      ],
      [['WHATWG lists and grouping', htmlStandard + 'grouping-content.html'], ['The details element', htmlStandard + 'interactive-elements.html#the-details-element']]),
    page('media', p('Audio, video, and captions', 'အသံ၊ ဗီဒီယိုနှင့် စာတန်းထိုး'),
      p('Use audio and video to embed playable media, and provide a way to access what the media says.', 'ဖွင့်ကြည့်၊ နားထောင်လို့ရတဲ့ media အတွက် audio နဲ့ video သုံးပါ။ Media ထဲက ပြောထားတာကိုလည်း တခြားနည်းနဲ့ သိနိုင်အောင် ထည့်ပေးပါ။'),
      [
        part('playback', p('Provide playback controls', 'Media ထိန်းချုပ်ဖို့ Controls ထည့်ခြင်း'),
          p('The controls attribute asks the browser to display its playback controls. A source element can identify a media file and its type. A poster is the image shown before video playback when appropriate.', 'controls attribute ထည့်ရင် browser က ဖွင့်၊ ရပ် စတဲ့ controls တွေ ပြပေးပါတယ်။ source element မှာ ဖိုင်နဲ့ type ကို ဖော်ပြနိုင်ပါတယ်။ poster က ဗီဒီယို မဖွင့်မီ ပြနိုင်တဲ့ ပုံပါ။'),
          `<video controls preload="metadata" poster="coffee-cover.jpg">
  <source src="coffee-demo.mp4" type="video/mp4">
  <track kind="captions" srclang="en" label="English"
         src="coffee-demo.en.vtt" default>
</video>
<p><a href="coffee-demo-transcript.html">Read the transcript</a></p>`),
        part('captions', p('Describe speech and meaningful sounds', 'စကားသံနဲ့ အရေးပါတဲ့ အသံများ ဖော်ပြခြင်း'),
          p('Use a captions track for speech and relevant sounds. Set its language with srclang and give it a readable label. A separate transcript also lets people read the media content at their own pace.', 'စကားပြောတာနဲ့ အရေးပါတဲ့ အသံတွေအတွက် captions track သုံးပါ။ srclang နဲ့ ဘာသာစကား၊ label နဲ့ ဖတ်လို့ရတဲ့ နာမည် သတ်မှတ်ပါ။ Transcript ကိုလည်း သီးသန့် ထည့်ထားရင် ကိုယ့်အရှိန်နဲ့ ဖတ်နိုင်ပါတယ်။')),
      ],
      [['WHATWG media elements', htmlStandard + 'media.html'], ['The track element', htmlStandard + 'media.html#the-track-element']]),
    page('form-controls', p('Checkboxes, radio buttons, and selects', 'Checkboxes၊ Radio Buttons နှင့် Selects'),
      p('Choose a form control based on how many answers a person can select.', 'လူတစ်ယောက် ရွေးလို့ရတဲ့ အဖြေအရေအတွက်ပေါ် မူတည်ပြီး form control ရွေးပါ။'),
      [
        part('choices', p('One choice or many choices', 'တစ်ခုရွေးခြင်းနှင့် အများကြီးရွေးခြင်း'),
          p('Radio buttons with the same name in the same form work as one group. Each checkbox can be selected independently. Keep a visible label for each control and use fieldset with legend to describe a group.', 'Form တစ်ခုထဲမှာ name တူတဲ့ radio buttons တွေက group တစ်ခုအဖြစ် အလုပ်လုပ်ပါတယ်။ Checkbox တစ်ခုစီကို သီးသန့် ရွေးနိုင်ပါတယ်။ Control တိုင်းမှာ label ပြပြီး group အတွက် fieldset နဲ့ legend သုံးပါ။'),
          `<fieldset>
  <legend>Extras</legend>
  <label><input type="checkbox" name="extra" value="ice"> Ice</label>
  <label><input type="checkbox" name="extra" value="lemon"> Lemon</label>
</fieldset>`),
        part('values', p('Read what the form submits', 'Form က ပို့တဲ့ Values ဖတ်ခြင်း'),
          p('Set a name on each field you want to submit. Unchecked checkboxes send no entry. Checked boxes with the same name can send several values. In JavaScript, FormData.getAll reads all of them. A select sends the value of the selected option, or several values if multiple selection is allowed.', 'ပို့ချင်တဲ့ field တိုင်းကို name ပေးပါ။ အမှန်ခြစ်မထားတဲ့ checkbox က entry မပို့ပါဘူး။ Name တူတဲ့ boxes အများကြီး ရွေးထားရင် value အများကြီး ပို့နိုင်ပါတယ်။ JavaScript မှာ FormData.getAll နဲ့ အကုန်ဖတ်ပါ။ Select က ရွေးထားတဲ့ option ရဲ့ value ကို ပို့ပြီး multiple ခွင့်ပြုရင် အများကြီး ပို့နိုင်ပါတယ်။'),
          `<label for="drink">Drink</label>
<select id="drink" name="drink" required>
  <option value="">Choose a drink</option>
  <option value="tea">Tea</option>
  <option value="coffee">Coffee</option>
</select>`),
      ],
      [['HTML input controls', htmlStandard + 'input.html'], ['Select and form submission', htmlStandard + 'form-elements.html#the-select-element'], ['FormData Standard', 'https://xhr.spec.whatwg.org/#interface-formdata']]),
  ],
  css: [
    page('positioning', p('Positioning and stacking order', 'နေရာချခြင်းနှင့် အလွှာအစဉ်'),
      p('Positioning lets you place a box relative to another box or keep it visible during scroll.', 'Positioning နဲ့ box တစ်ခုကို တခြား box ပေါ် မူတည်ပြီး နေရာချနိုင်သလို scroll လုပ်ချိန်မှာလည်း မြင်နေအောင် ထားနိုင်ပါတယ်။'),
      [
        part('position', p('Anchor an overlay to its card', 'Overlay ကို Card နဲ့ ချိတ်ခြင်း'),
          p('An absolutely positioned box is removed from normal flow. A relatively positioned parent can give it a containing block. Sticky positioning keeps the box in normal flow and uses an inset such as top to constrain it near a scroll edge.', 'Absolute box က ပုံမှန် layout flow ထဲက ထွက်ပါတယ်။ Relative parent က သူ့နေရာတွက်ဖို့ containing block ဖြစ်နိုင်ပါတယ်။ Sticky box က flow ထဲမှာ နေပြီး top လို inset တန်ဖိုးနဲ့ scroll edge နားမှာ ထိန်းထားနိုင်ပါတယ်။'),
          `.card { position: relative; }
.card-label {
  position: absolute;
  inset-block-start: .75rem;
  inset-inline-end: .75rem;
}`),
        part('layers', p('Read z-index within its context', 'z-index ကို Context အလိုက် ဖတ်ခြင်း'),
          p('Compare z-index values within a stacking context. A child cannot move outside its parent stacking context just by using a larger z-index. When an overlay is stuck behind another box, inspect ancestor positioning, transforms, and opacity.', 'z-index တန်ဖိုးတွေကို stacking context တစ်ခုအတွင်း နှိုင်းပါ။ Child မှာ z-index ပိုကြီးအောင်ပေးတာနဲ့ parent context အပြင် မထွက်နိုင်ပါဘူး။ Overlay နောက်ရောက်နေရင် ancestor တွေရဲ့ positioning၊ transform နဲ့ opacity ကို စစ်ပါ။')),
      ],
      [['CSS Positioned Layout', 'https://www.w3.org/TR/css-position-3/'], ['CSS transforms', 'https://www.w3.org/TR/css-transforms-1/']]),
    page('pseudo-elements', p('Pseudo-elements and generated content', 'Pseudo-elements နှင့် Generated Content'),
      p('Pseudo-elements let CSS style part of an element or generate a decorative child-like box.', 'Pseudo-element နဲ့ element ရဲ့ အပိုင်းတစ်ခုကို style ပေးနိုင်သလို အလှဆင် box တစ်ခုလည်း ဖန်တီးနိုင်ပါတယ်။'),
      [
        part('generated', p('Draw decoration with before and after', 'before နှင့် after နဲ့ အလှဆင်ခြင်း'),
          p('Use ::before or ::after with content to generate a box. An empty content string works for a decorative shape. Keep meaningful labels in HTML so the interface still makes sense without the CSS.', 'Box တစ်ခုဖန်တီးဖို့ ::before သို့ ::after နဲ့ content သုံးပါ။ အလှဆင်ပုံအတွက် content ကို string အလွတ် ပေးနိုင်ပါတယ်။ အရေးပါတဲ့ label တွေကို HTML မှာ ထားပါ။ ဒါဆို CSS မပါရင်လည်း နားလည်ရပါတယ်။'),
          `.in-stock::before {
  content: "";
  display: inline-block;
  width: .6em;
  height: .6em;
  margin-inline-end: .4em;
  border-radius: 50%;
  background: #167452;
}`),
        part('states', p('Distinguish a state from a part', 'State နဲ့ အစိတ်အပိုင်းကို ခွဲခြင်း'),
          p('A pseudo-class such as :checked matches an element in a state. A pseudo-element such as ::marker represents a part of the list item. ::marker supports a narrower set of properties than a normal box.', ':checked လို pseudo-class က သတ်မှတ်ထားတဲ့ state ဝင်နေတဲ့ element ကို ရွေးပါတယ်။ ::marker လို pseudo-element က list item ရဲ့ အစိတ်အပိုင်းကို ကိုယ်စားပြုပါတယ်။ ::marker မှာ သာမန် box ထက် သုံးနိုင်တဲ့ properties နည်းပါတယ်။')),
      ],
      [['CSS Pseudo-Elements', 'https://www.w3.org/TR/css-pseudo-4/'], ['CSS Selectors', 'https://www.w3.org/TR/selectors-4/']]),
    page('motion', p('Transitions, animations, and reduced motion', 'Transitions၊ Animations နှင့် Reduced Motion'),
      p('Use transitions for changes between two states and keyframes for a sequence of styles.', 'State နှစ်ခုကြား ပြောင်းလဲမှုအတွက် transition၊ style အဆင့်ဆင့် အတွက် keyframes သုံးပါ။'),
      [
        part('transition', p('Animate the property that changes', 'ပြောင်းမယ့် Property ကို Animate လုပ်ခြင်း'),
          p('Name the property and duration in transition. A change such as a hover background can then animate between values. Choose the few properties you intend to animate.', 'transition မှာ ပြောင်းမယ့် property နဲ့ ကြာချိန် ရေးပါ။ Hover background လို ပြောင်းလဲမှုကို တန်ဖိုးနှစ်ခုကြား တဖြည်းဖြည်း ပြောင်းနိုင်ပါတယ်။ Animate လုပ်မယ့် properties တွေကို ရွေးရေးပါ။'),
          `.order-button {
  background: #14665b;
  color: white;
  transition: background-color 180ms ease;
}
.order-button:hover,
.order-button:focus-visible { background-color: #0c4a42; }`),
        part('keyframes', p('Offer a reduced-motion style', 'လှုပ်ရှားမှု လျှော့ထားတဲ့ Style ပေးခြင်း'),
          p('A keyframes rule names the animation and describes how values change over time. Use prefers-reduced-motion to remove nonessential movement for users who request less motion.', 'Keyframes rule က animation ကို နာမည်ပေးပြီး အချိန်အလိုက် တန်ဖိုး ပြောင်းပုံ ရေးပါတယ်။ လှုပ်ရှားမှု လျှော့ချင်တဲ့သူတွေအတွက် prefers-reduced-motion နဲ့ မလိုအပ်တဲ့ motion ကို ဖယ်ပေးပါ။'),
          `@keyframes appear {
  from { opacity: 0; }
  to { opacity: 1; }
}
.notice { animation: appear 220ms ease-out; }

@media (prefers-reduced-motion: reduce) {
  .notice { animation: none; }
  .order-button { transition: none; }
}`),
      ],
      [['CSS Transitions', 'https://www.w3.org/TR/css-transitions-1/'], ['CSS Animations', 'https://www.w3.org/TR/css-animations-1/'], ['Reduced motion media feature', 'https://www.w3.org/TR/mediaqueries-5/#prefers-reduced-motion']]),
  ],
  js: [
    page('arrays-and-objects', p('Arrays, objects, and data transforms', 'Arrays၊ Objects နှင့် Data ပြောင်းလဲခြင်း'),
      p('Use arrays for ordered collections and objects for named properties. Transform collections in small steps.', 'အစဉ်ရှိတဲ့ data အစုအတွက် array၊ နာမည်နဲ့ property ဖတ်ဖို့ object သုံးပါ။ Collection ကို အဆင့်လေးတွေခွဲပြီး ပြောင်းပါ။'),
      [
        part('aggregate', p('Filter, map, and total', 'Filter၊ Map နှင့် Total တွက်ခြင်း'),
          p('filter keeps items that pass a test. map builds an array with a result for each item. reduce combines items into one value. Give reduce an initial value so an empty input has a defined result.', 'filter က စစ်ချက်ကိုက်တဲ့ items ကို ယူပါတယ်။ map က item တစ်ခုစီရဲ့ result နဲ့ array အသစ် ဆောက်ပါတယ်။ reduce က items တွေကို တန်ဖိုးတစ်ခုဖြစ်အောင် စုပါတယ်။ Input အလွတ်ကို ကိုင်တွယ်ဖို့ reduce မှာ initial value ထည့်ပါ။'),
          `const sales = [{ price: 3, paid: true }, { price: 4, paid: false }];
const total = sales
  .filter(sale => sale.paid)
  .map(sale => sale.price)
  .reduce((sum, price) => sum + price, 0);`),
        part('copy', p('Know what a spread copies', 'Spread က ဘာတွေ ကူးလဲ သိခြင်း'),
          p('Destructuring reads fields into local variables. Object spread copies own enumerable properties into a new object. It is a shallow copy, so nested objects are still shared unless you copy them as well.', 'Destructuring နဲ့ fields ကို local variables အဖြစ် ဖတ်နိုင်ပါတယ်။ Object spread က ကိုယ်ပိုင် enumerable properties ကို object အသစ်ထဲ ကူးပါတယ်။ Shallow copy ဖြစ်လို့ အတွင်းက nested object တွေကို သီးသန့် မကူးရင် အတူတူ ရည်ညွှန်းနေပါတယ်။'),
          `const product = { name: "Tea", details: { stock: 5 } };
const { name } = product;
const updated = { ...product, details: { ...product.details, stock: 4 } };`),
      ],
      [['ECMAScript indexed collections', 'https://tc39.es/ecma262/2026/#sec-indexed-collections'], ['Object initializers', 'https://tc39.es/ecma262/2026/#sec-object-initializer']]),
    page('scope-and-classes', p('Scope, closures, and classes', 'Scope၊ Closures နှင့် Classes'),
      p('Organize data and behavior so each part of a program can stay independent.', 'Program ရဲ့ အပိုင်းတွေ သီးသန့် အလုပ်လုပ်နိုင်အောင် data နဲ့ behavior ကို စီပါ။'),
      [
        part('closures', p('Keep values in a closure', 'Closure ထဲမှာ Values ထိန်းထားခြင်း'),
          p('A function can use bindings from where it was created. A function returned by another function can keep using those bindings after the outer call finishes. Calling the factory again creates a different set of bindings.', 'Function က ဖန်တီးခဲ့တဲ့နေရာက bindings တွေကို သုံးနိုင်ပါတယ်။ Outer function ပြီးသွားရင်တောင် ပြန်ပေးလိုက်တဲ့ function က အဲဒီ bindings တွေ ဆက်သုံးနိုင်ပါတယ်။ Factory ကို ထပ်ခေါ်ရင် သီးသန့် bindings အသစ် ရပါတယ်။'),
          `function createCounter() {
  let value = 0;
  return () => ++value;
}

const first = createCounter();
const second = createCounter();
first();  // 1
first();  // 2
second(); // 1`),
        part('classes', p('Create instances with a class', 'Class နဲ့ Instances ဆောက်ခြင်း'),
          p('A class can initialize instance data in its constructor and expose methods for behavior. Use new to create each instance. A private field begins with # and is accessed inside the class that declares it.', 'Class က constructor ထဲမှာ instance data ကို စတင်သတ်မှတ်ပြီး methods နဲ့ behavior ပေးနိုင်ပါတယ်။ Instance အသစ်တိုင်းကို new နဲ့ ဆောက်ပါ။ Private field က # နဲ့ စပြီး ကြေညာထားတဲ့ class အတွင်းကနေ သုံးပါတယ်။'),
          `class Stock {
  #units;
  constructor(units) { this.#units = units; }
  get units() { return this.#units; }
}

const tea = new Stock(12);`),
      ],
      [['ECMAScript functions', 'https://tc39.es/ecma262/2026/#sec-ecmascript-function-objects'], ['Class definitions', 'https://tc39.es/ecma262/2026/#sec-class-definitions']]),
    page('storage-and-errors', p('Browser storage and error handling', 'Browser Storage နှင့် Errors ကိုင်တွယ်ခြင်း'),
      p('Save small preferences between visits and handle errors when data is missing or invalid.', 'လာသုံးတဲ့အကြိမ်ကြား preferences လေးတွေ သိမ်းထားပြီး data မရှိတာ၊ ပုံစံမကိုက်တာတွေကို ကိုင်တွယ်ပါ။'),
      [
        part('storage', p('Store strings and parse when reading', 'String သိမ်းပြီး ဖတ်တဲ့အချိန် Parse လုပ်ခြင်း'),
          p('localStorage stores strings by origin. sessionStorage also separates data by top-level tab or window. JSON.stringify converts suitable objects to text, and JSON.parse reads them back. Missing keys return null.', 'localStorage က origin အလိုက် strings တွေ သိမ်းပါတယ်။ sessionStorage က tab သို့ window အလိုက် ထပ်ခွဲပါတယ်။ Object ကို text ပြောင်းဖို့ JSON.stringify၊ ပြန်ဖတ်ဖို့ JSON.parse သုံးပါ။ Key မရှိရင် null ပြန်ပါတယ်။'),
          `function readPageSize() {
  try {
    const saved = localStorage.getItem("menu-settings");
    const value = saved === null ? null : JSON.parse(saved);
    return Number.isInteger(value?.pageSize) && value.pageSize > 0
      ? value.pageSize
      : 10;
  } catch {
    return 10;
  }
}`),
        part('errors', p('Handle a failure where you can respond', 'ဖြေရှင်းနိုင်တဲ့နေရာမှာ Error ဖမ်းခြင်း'),
          p('Use try and catch when an operation can throw and you have a clear response, such as a default value. With async code, await the promise inside try to catch its rejection there. Use finally for cleanup that must happen on success or failure.', 'Operation က error ထုတ်နိုင်ပြီး default ပြန်ပေးတာလို တုံ့ပြန်နိုင်ရင် try နဲ့ catch သုံးပါ။ Async code မှာ promise reject ဖြစ်တာကို ဖမ်းဖို့ try ထဲမှာ await လုပ်ပါ။ အောင်မြင်သည်ဖြစ်စေ မအောင်မြင်သည်ဖြစ်စေ လုပ်ရမယ့် cleanup အတွက် finally သုံးပါ။')),
      ],
      [['WHATWG Web Storage', htmlStandard + 'webstorage.html'], ['ECMAScript JSON object', 'https://tc39.es/ecma262/2026/#sec-json-object'], ['ECMAScript try statement', 'https://tc39.es/ecma262/2026/#sec-try-statement']]),
  ],
};
