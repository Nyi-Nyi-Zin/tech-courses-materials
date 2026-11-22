export function createWebExercises(exercise, check) {
  function bilingual(id, title, lesson, task, hint, starter, solution, checks) {
    const entry = exercise(id, title[0], lesson[0], task[0], hint[0], starter, solution,
      checks.map(([en, , expression]) => check(en, expression)));
    return {
      ...entry,
      my: { title: title[1], lesson: lesson[1], task: [task[1]], hint: hint[1],
        checkLabels: checks.map(([, my]) => my) },
    };
  }

  const help = '<button id="terms-open" type="button">View terms</button>\n<button id="delivery-open" type="button">Delivery info</button>';
  const cards = `<section class="panel narrow"><div class="cards"><span>Tea</span><span>Coffee</span></div></section>
<section class="panel wide"><div class="cards"><span>Juice</span><span>Water</span></div></section>`;
  const panelCss = `.panel { margin-block: 10px; }
.narrow { width: 220px; }
.wide { width: 380px; }
.cards { display: grid; gap: 8px; grid-template-columns: 1fr; }
.cards span { background: #e9efff; padding: 7px; }
`;
  const themeCss = `:root {
  --surface: #ffffff;
  --ink: #17233b;
}
.card {
  padding: 16px;
  background: var(--surface);
  color: var(--ink);
}
`;
  const toolbarCss = `.toolbar { display: flex; width: 240px; gap: 8px; align-items: start; }
.reference { background: #e9efff; }
`;

  return {
    html: [
      bilingual('dialog-popover', ['Open a Dialog and a Popover', 'Dialog နဲ့ Popover ဖွင့်ပါ'],
        ['A modal dialog asks for attention. A popover shows extra information while the page stays interactive.', 'Modal dialog က user ရဲ့အာရုံစိုက်မှု လိုတဲ့အခါ သုံးပါတယ်။ Popover က page ဆက်သုံးလို့ရနေစဉ် အပိုအချက်အလက် ပြပါတယ်။'],
        ['Connect View terms to a dialog with id="terms" and a Close button. Connect Delivery info to a popover with id="delivery" and the text Orders ship tomorrow.',
          'View terms ကို id="terms" ပါတဲ့ dialog နဲ့ ချိတ်ပြီး Close ခလုတ် ထည့်ပါ။ Delivery info ကို id="delivery" ပါတဲ့ popover နဲ့ ချိတ်ပြီး Orders ship tomorrow. လို့ ရေးပါ။'],
        ['Use commandfor="terms" with command="show-modal" to open it and command="close" on the button inside. Use popovertarget="delivery" for Delivery info.',
          'Dialog ဖွင့်ဖို့ commandfor="terms" နဲ့ command="show-modal" တွဲသုံးပါ။ အထဲက ခလုတ်မှာ command="close" သုံးပါ။ Delivery info အတွက် popovertarget="delivery" သုံးပါ။'],
        { HTML: help },
        { HTML: `<button id="terms-open" type="button" commandfor="terms" command="show-modal">View terms</button>
<dialog id="terms" aria-labelledby="terms-title">
  <h2 id="terms-title">Order terms</h2>
  <button type="button" commandfor="terms" command="close">Close</button>
</dialog>
<button id="delivery-open" type="button" popovertarget="delivery">Delivery info</button>
<p id="delivery" popover>Orders ship tomorrow.</p>` },
        [
          ['The terms dialog opens as a modal and closes', 'Terms dialog ကို modal အဖြစ် ဖွင့်၊ ပိတ်လို့ရတယ်', `(() => {
  const dialog = one('dialog#terms');
  if (!dialog || dialog.open) return false;
  one('#terms-open').click();
  const open = dialog.matches(':modal');
  const close = all('#terms button').find(button => button.textContent.trim() === 'Close');
  close?.click();
  return open && !dialog.open;
})()`],
          ['Delivery info toggles the popover', 'Delivery info က popover ဖွင့်၊ ပိတ်ပေးတယ်', `(() => {
  const panel = one('#delivery[popover]');
  if (panel?.textContent.trim() !== 'Orders ship tomorrow.') return false;
  const button = one('#delivery-open');
  button.click();
  const open = panel.matches(':popover-open');
  button.click();
  return open && !panel.matches(':popover-open');
})()`],
        ]),
    ],
    css: [
      bilingual('container-queries', ['Adapt Cards to Their Container', 'Container အကျယ်အလိုက် Cards စီပါ'],
        ['A container query reacts to the space around a component. Two copies on the same page can use different layouts.', 'Container query က component ပတ်လည် ရနိုင်တဲ့နေရာအကျယ်ကို ကြည့်ပါတယ်။ Page တစ်ခုတည်းမှာရှိတဲ့ component နှစ်ခုတောင် layout မတူနိုင်ပါတယ်။'],
        ['Keep one column inside the narrow panel and use two equal columns inside a panel at least 320px wide. Both panels share one stylesheet.',
          'Panel ကျဉ်းရင် column တစ်ခုထားပြီး အကျယ် 320px နဲ့အထက်မှာ အကျယ်တူ column နှစ်ခု သုံးပါ။ Panel နှစ်ခုလုံး stylesheet တစ်ခုတည်း သုံးပါတယ်။'],
        ['Set container-type: inline-size on .panel, then put the two-column rule for .cards inside @container (min-width: 320px).',
          '.panel မှာ container-type: inline-size ထည့်ပါ။ .cards အတွက် column နှစ်ခု သတ်မှတ်တဲ့ rule ကို @container (min-width: 320px) ထဲမှာ ထည့်ပါ။'],
        { HTML: cards, CSS: panelCss },
        { CSS: panelCss + `.panel { container-type: inline-size; }
@container (min-width: 320px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}` },
        [
          ['The narrow panel has one column', 'Panel ကျဉ်းမှာ column တစ်ခုရှိတယ်', "equalColumns('.narrow .cards', 1)"],
          ['The wider panel has two equal columns', 'Panel ကျယ်မှာ အကျယ်တူ column နှစ်ခုရှိတယ်', "equalColumns('.wide .cards', 2)"],
        ]),
      bilingual('layout-debugging', ['Fix an Overflowing Toolbar', 'Toolbar ဘေးထွက်နေတာ ပြင်ပါ'],
        ['A flex item can stay as wide as a long, unbroken word. Let it shrink and make the word wrap inside the available space.', 'Flex item က ကြားမှာ space မပါတဲ့ စာလုံးရှည်အတိုင်း ကျယ်နေနိုင်ပါတယ်။ ကျုံ့လို့ရအောင် လုပ်ပြီး ရနိုင်တဲ့နေရာထဲမှာ စာကြောင်းခွဲပေးပါ။'],
        ['Make the full reference wrap so both it and the Save button fit inside the 240px toolbar.', 'Reference စာသား အပြည့်ကို လိုင်းခွဲပြီး Save ခလုတ်နဲ့အတူ 240px ကျယ်တဲ့ toolbar ထဲ ဝင်အောင်လုပ်ပါ။'],
        ['Use min-inline-size: 0 and overflow-wrap: anywhere on .reference. In DevTools, compare the width of the toolbar and its children.', '.reference မှာ min-inline-size: 0 နဲ့ overflow-wrap: anywhere သုံးပါ။ DevTools မှာ toolbar နဲ့ child elements တွေရဲ့ အကျယ်ကို တိုက်ကြည့်ပါ။'],
        { HTML: '<div class="toolbar"><span class="reference">CAFEORDERSREFERENCE1234567890ABCDEFGH</span><button type="button">Save</button></div>', CSS: toolbarCss },
        { CSS: toolbarCss + '.reference { min-inline-size: 0; overflow-wrap: anywhere; }' },
        [
          ['The full reference and Save button fit inside the toolbar', 'Reference နဲ့ Save ခလုတ်က toolbar ထဲ အပြည့်ဝင်တယ်', `(() => {
  const toolbar = one('.toolbar');
  const reference = one('.reference');
  const button = one('.toolbar button');
  return toolbar.clientWidth === 240 && toolbar.scrollWidth <= toolbar.clientWidth
    && reference.scrollWidth <= reference.clientWidth && reference.clientHeight > 24
    && button.offsetWidth > 0 && button.getBoundingClientRect().right <= toolbar.getBoundingClientRect().right + 1;
})()`],
        ]),
      bilingual('dark-mode', ['Style a Dark Theme', 'Dark Theme ပုံစံ သတ်မှတ်ပါ'],
        ['Theme variables keep colors together. Here a data-theme attribute selects the dark colors.', 'Theme variables နဲ့ အရောင်တွေကို တစ်နေရာတည်းမှာ သိမ်းနိုင်ပါတယ်။ ဒီမှာ data-theme attribute က dark အရောင်တွေကို ရွေးပေးပါတယ်။'],
        ['Keep the light colors as the default. When the .theme wrapper has data-theme="dark", make the card background #17233b and the text #f1f5ff.',
          'Light အရောင်ကို default အဖြစ်ထားပါ။ .theme wrapper မှာ data-theme="dark" ရှိရင် card background ကို #17233b၊ စာသားကို #f1f5ff ထားပါ။'],
        ['Override --surface and --ink on .theme[data-theme="dark"]. The card already reads those variables.', '.theme[data-theme="dark"] မှာ --surface နဲ့ --ink တန်ဖိုး ပြောင်းပါ။ Card က အဲဒီ variables တွေကို သုံးပြီးသားပါ။'],
        { HTML: '<section class="theme" data-theme="dark"><article class="card">Café menu</article></section>', CSS: themeCss },
        { CSS: themeCss + '.theme[data-theme="dark"] { --surface: #17233b; --ink: #f1f5ff; }' },
        [
          ['The card uses both dark colors', 'Card က dark အရောင်နှစ်ခုလုံး သုံးတယ်', "css('.card', 'background-color') === 'rgb(23, 35, 59)' && css('.card', 'color') === 'rgb(241, 245, 255)'"],
          ['Removing the theme brings back the light colors', 'Theme attribute ဖယ်ရင် light အရောင်တွေ ပြန်ပေါ်တယ်', `(() => {
  one('.theme').removeAttribute('data-theme');
  return css('.card', 'background-color') === 'rgb(255, 255, 255)'
    && css('.card', 'color') === 'rgb(23, 35, 59)';
})()`],
        ]),
    ],
    js: [
      bilingual('generators', ['Generate a Range With yield', 'yield နဲ့ ကိန်းစဉ် ထုတ်ပါ'],
        ['A generator uses yield to hand back one value at a time and pause until the next value is requested.', 'Generator က yield နဲ့ value တစ်ခုစီ ပြန်ပေးပြီး နောက် value တောင်းတဲ့အထိ ခဏရပ်ပါတယ်။'],
        ['Complete range(start, end) so it yields every integer from start to end, including both ends. Yield no values when start is greater than end.',
          'range(start, end) မှာ start ကနေ end အထိ အစနဲ့အဆုံး အပါအဝင် ကိန်းပြည့်အားလုံး yield လုပ်ပါ။ start က end ထက်ကြီးရင် value မထုတ်ပါနဲ့။'],
        ['Use a for loop and yield the counter on each pass.', 'for loop သုံးပြီး တစ်ပတ်စီမှာ counter ကို yield လုပ်ပါ။'],
        { JavaScript: 'function* range(start, end) {\n  // Yield each value.\n}' },
        { JavaScript: 'function* range(start, end) {\n  for (let value = start; value <= end; value++) yield value;\n}\nconsole.log([...range(2, 4)]);' },
        [
          ['Values arrive one at a time', 'Value တွေ တစ်ခုစီ ပြန်ရတယ်', `(() => {
  const iterator = range(2, 4);
  return same(iterator.next(), { value: 2, done: false }) && same([...iterator], [3, 4]);
})()`],
          ['Equal and reversed bounds work', 'အစနဲ့အဆုံး တူတာ၊ ပြောင်းပြန်ဖြစ်တာ မှန်တယ်', "same([...range(3, 3)], [3]) && same([...range(4, 3)], [])"],
        ]),
      bilingual('regular-expressions', ['Check a Product Code With Regex', 'Product Code ကို Regex နဲ့ စစ်ပါ'],
        ['A regular expression can match a whole input when its pattern starts with ^ and ends with $.', 'Regular expression pattern ကို ^ နဲ့စပြီး $ နဲ့ပိတ်ရင် input တစ်ခုလုံး ကိုက်လား စစ်နိုင်ပါတယ်။'],
        ['Return true only for codes with two uppercase English letters, a hyphen, and three digits such as TE-104. Reject extra characters and empty input.',
          'TE-104 လို English စာလုံးအကြီး နှစ်လုံး၊ hyphen တစ်ခုနဲ့ ဂဏန်း သုံးလုံး ပါမှ true ပြန်ပါ။ အပိုစာလုံးတွေ၊ input အလွတ်တွေကို false ပြန်ပါ။'],
        ['Use [A-Z]{2}, a hyphen, and [0-9]{3}. Call .test() on the regular expression.', '[A-Z]{2}၊ hyphen တစ်ခုနဲ့ [0-9]{3} သုံးပါ။ Regex ပေါ်မှာ .test() ခေါ်ပါ။'],
        { JavaScript: 'function isProductCode(value) {\n  // Return whether the input matches.\n}' },
        { JavaScript: 'function isProductCode(value) {\n  return /^[A-Z]{2}-[0-9]{3}$/.test(value);\n}\nconsole.log(isProductCode("TE-104"));' },
        [
          ['Valid codes pass more than once', 'ပုံစံမှန်တဲ့ code တွေ အကြိမ်ကြိမ် စစ်လို့ရတယ်', 'isProductCode("TE-104") === true && isProductCode("AA-000") === true && isProductCode("TE-104") === true'],
          ['Wrong formats and extra characters fail', 'ပုံစံမှားတာနဲ့ အပိုစာလုံးပါတာ false ပြန်တယ်', '["", "te-104", "TE-10", "XTE-104", "TE-1045"].every(value => isProductCode(value) === false)'],
        ]),
      bilingual('web-workers', ['Add Numbers in a Web Worker', 'Web Worker ထဲမှာ ကိန်းတွေ ပေါင်းပါ'],
        ['A worker can process a message away from the main thread. This practice uses one editor, so the worker script is stored in a Blob.', 'Worker က message ကို main thread အပြင်ဘက်မှာ ကိုင်တွယ်နိုင်ပါတယ်။ ဒီလေ့ကျင့်ခန်းမှာ editor တစ်ခုပဲ သုံးလို့ worker script ကို Blob ထဲမှာ ထားပါတယ်။'],
        ['Complete the worker handler so it receives the array, adds its values, and posts the total back. Use 0 for an empty array.',
          'Worker handler မှာ array လက်ခံပြီး တန်ဖိုးတွေ ပေါင်းပါ။ ပြီးရင် စုစုပေါင်းကို ပြန်ပို့ပါ။ Array အလွတ်ဆို 0 ပြန်ပါ။'],
        ['Inside the worker, read data from the message event, use reduce with an initial value of 0, and call self.postMessage(total).',
          'Worker ထဲမှာ message event ကနေ data ယူပါ။ Initial value 0 နဲ့ reduce လုပ်ပြီး self.postMessage(total) ခေါ်ပါ။'],
        { JavaScript: workerExample('  // Calculate and send the total.') },
        { JavaScript: workerExample('  const total = data.reduce((sum, value) => sum + value, 0);\n  self.postMessage(total);') },
        [
          ['The worker returns totals for different arrays', 'မတူတဲ့ arrays တွေအတွက် Worker က total မှန်မှန် ပြန်ပေးတယ်',
            'same(await Promise.all([totalInWorker([12, 18, 24]), totalInWorker([-5, 2]), totalInWorker([])]), [54, -3, 0])'],
        ]),
    ],
  };
}

function workerExample(handlerBody) {
  return `const workerSource = \`
self.onmessage = ({ data }) => {
${handlerBody}
};
\`;

function totalInWorker(values) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(new Blob([workerSource], { type: "text/javascript" }));
    function finish() {
      clearTimeout(timeout);
      worker.terminate();
      URL.revokeObjectURL(url);
    }

    const worker = new Worker(url);
    const timeout = setTimeout(() => {
      finish();
      reject(new Error("The worker did not reply"));
    }, 1500);
    worker.onmessage = event => {
      finish();
      resolve(event.data);
    };
    worker.onerror = event => {
      finish();
      reject(new Error(event.message || "Worker failed"));
    };
    worker.postMessage(values);
  });
}

totalInWorker([12, 18, 24]).then(console.log).catch(console.error);`;
}
