import { p, page, guide } from './content.js';
import { htmlAttributes } from './html-attributes.js';
import { extraFormLessons } from './html-forms-extra.js';
import { htmlFoundations } from './html-foundations.js';
import { demoPage, example, htmlSpec, standalone } from './examples.js';

const sampleMedia = 'https://javascript-training.cloudninemm.com/media/';
const headSetup = p('In index.html, place the code inside the existing <head>. Replace any existing tag for the same setting, then save and reload.', 'index.html ထဲက ရှိပြီးသား <head> အတွင်း ဒီ code ကို ထည့်ပါ။ တူညီတဲ့ setting အတွက် tag ရှိပြီးသားဆို အစားထိုးပြီး save နဲ့ reload လုပ်ပါ။');

const links = page('content', p('HTML Links <a>', 'HTML Links <a>'), p(
  'An anchor with href gives the browser a destination. The visible label tells people where following the link takes them.',
  'a element ထဲက href က သွားရမယ့်နေရာကို browser ကို ပြောပါတယ်။ နှိပ်လို့ရတဲ့စာသားကို ဖတ်ရုံနဲ့ ဘယ်ကိုရောက်မလဲ သိနိုင်အောင် ရေးပါ။',
), [
  example('link-basics', p('What is a link?', 'Link ဆိုတာဘာလဲ။'), p(
    'A link gives the reader a way to open a destination. The a element, also called an anchor, creates a link when href supplies its destination address. The words between the tags are what the reader sees and activates.',
    'Link က ဖတ်သူကို တခြားနေရာတစ်ခုဆီ သွားလို့ရစေပါတယ်။ Anchor လို့လည်းခေါ်တဲ့ <a> element မှာ href နဲ့ သွားမယ့် လိပ်စာ ပေးရင် link ဖြစ်ပါတယ်။ Tag ကြားက စာသားက ဖတ်သူမြင်ပြီး နှိပ်မယ့် စာသားပါ။',
  ), `<a href="https://developer.mozilla.org/">Read MDN Web Docs</a>`, p('Click the link to open MDN. Use the browser’s Back button to return to your file.', 'Link နှိပ်ရင် MDN ဆီ ရောက်ပါမယ်။ Browser ရဲ့ Back ခလုတ်နဲ့ ကိုယ့်ဖိုင်ဆီ ပြန်သွားပါ။')),
  example('links', p('How a link opens a URL', 'Link က URL ကို ဘယ်လိုဖွင့်လဲ'), p(
    'The browser resolves href against the current page URL. An absolute URL includes the protocol and host. A path such as catalog.html is relative to the current directory. A path beginning with / starts at the website root. A link with href is normally reachable with Tab and activated with Enter.',
    'Browser က လက်ရှိ page URL ကို ကြည့်ပြီး href ရဲ့ လိပ်စာကို တွက်ပါတယ်။ https:// နဲ့ host အပြည့်ပါတာက absolute URL ပါ။ catalog.html လို path က လက်ရှိဖိုင်ရှိတဲ့ folder ကို အခြေခံပြီး ရှာပါတယ်။ / နဲ့စတဲ့ path က website root ကနေ စပါတယ်။ href ပါတဲ့ link ကို ပုံမှန်အားဖြင့် Tab နဲ့ ရောက်နိုင်ပြီး Enter နဲ့ ဖွင့်နိုင်ပါတယ်။',
  ), `<a href="https://developer.mozilla.org/">Read MDN Web Docs</a>
<a href="catalog.html">Open the product catalog</a>
<a href="/resources">Learning resources</a>`, p('If the page URL is https://example.com/shop/index.html, catalog.html resolves to /shop/catalog.html and /resources resolves to https://example.com/resources.', 'လက်ရှိ page URL က https://example.com/shop/index.html ဆို catalog.html က /shop/catalog.html ဆီ သွားပြီး /resources က https://example.com/resources ဆီ သွားပါမယ်။')),
  example('anchors', p('Jump to a section with #id', '#id သုံးပြီး သက်ဆိုင်ရာအပိုင်းဆီ သွားခြင်း'), p(
    'A fragment starts with #. The browser finds the element whose id matches the fragment and brings it into view. Each id in one document should be unique. Give the link a label that names the destination so it makes sense even when read by itself.',
    'URL အဆုံးမှာ # နဲ့စတဲ့အပိုင်းကို fragment လို့ခေါ်ပါတယ်။ Browser က fragment နဲ့ တူတဲ့ id ရှိတဲ့ element ကို ရှာပြီး မြင်ရတဲ့နေရာဆီ ရွှေ့ပေးပါတယ်။ Document တစ်ခုထဲမှာ id တစ်ခုကို တစ်ခါပဲ သုံးပါ။ Link စာသားကို သီးသန့်ဖတ်ရင်တောင် ဘယ်ကိုသွားမလဲ သိအောင် ရေးပါ။',
  ), `<a href="#contact">Jump to contact details</a>
<h2 id="contact">Contact</h2>
<p>Visit us on Market Street.</p>`, p('Activate the link. The address ends with #contact and the browser scrolls to the heading if needed.', 'Link ကိုနှိပ်ရင် URL အဆုံးမှာ #contact ပေါ်ပါတယ်။ ခေါင်းစဉ်က လက်ရှိမြင်ကွင်းအပြင်မှာ ရှိရင် အဲဒီနေရာဆီ ရွှေ့ပေးပါတယ်။')),
], [['WHATWG · The a element', htmlSpec + 'text-level-semantics.html#the-a-element'], ['WHATWG · Links', htmlSpec + 'links.html']]);

const buttons = page('buttons', p('HTML Buttons <button>', 'HTML Buttons <button>'), p(
  'A button starts an action such as revealing information or submitting a form. The browser supplies built-in keyboard behavior.',
  'အချက်အလက် ဖွင့်ပြတာ၊ form ပို့တာလို လုပ်ဆောင်ချက်တစ်ခု စဖို့ button သုံးပါတယ်။ Keyboard ကနေ နှိပ်လို့ရတာကို browser က ကိုင်ပေးပါတယ်။',
), [
  example('basics', p('What does a button provide?', '<button> က ဘာလုပ်ပေးလဲ။'), p(
    'A button is a control the user can activate. The contents supply the label. A normal button can receive keyboard focus; the disabled attribute makes a button unavailable. A custom action needs an instruction such as JavaScript, which the next example adds.',
    'Button ဆိုတာ user နှိပ်လို့ရတဲ့ control ပါ။ Tag ကြားက စာသားက ခလုတ်နာမည်ပါ။ ပုံမှန် button ကို Tab နဲ့ ရောက်နိုင်ပါတယ်။ disabled ထည့်ရင် နှိပ်လို့မရတော့ပါဘူး။ ခလုတ်နှိပ်လို့ ကိုယ်ပေးချင်တဲ့ အလုပ်ကို လုပ်စေဖို့ JavaScript လို ညွှန်ကြားချက် ထည့်နိုင်ပါတယ်။ နောက်နမူနာမှာ ထည့်ပါမယ်။',
  ), `<button type="button">Add to cart</button>
<button type="button" disabled>Out of stock</button>`, p('Press Tab to reach the first button. The disabled button is skipped. The first button is ready for a custom action.', 'Tab နှိပ်ရင် ပထမ button ဆီ ရောက်ပါတယ်။ Disabled button ကို ကျော်သွားပါမယ်။ ပထမ button မှာ လုပ်ဆောင်ချက် ထည့်လို့ရပါတယ်။')),
  example('action', p('Trigger an action with type="button"', 'type="button" နဲ့ လုပ်ဆောင်ချက်တစ်ခု စခြင်း'), p(
    'Use type="button" for a custom action that needs JavaScript, especially inside a form. The browser generates a click when a user activates the button with a mouse or with Enter or Space while it has focus. The example listens for that event and toggles an element’s hidden state.',
    'JavaScript နဲ့ ကိုယ်ပိုင်လုပ်ဆောင်ချက် လုပ်မယ့်ခလုတ်မှာ type="button" လို့ ရေးပါ။ Form ထဲမှာဆို အထူးသဖြင့် အရေးကြီးပါတယ်။ Mouse နဲ့ နှိပ်တဲ့အခါ ဒါမှမဟုတ် button ကို focus ရောက်နေချိန် Enter၊ Space နဲ့ နှိပ်လိုက်တဲ့အခါ browser က click event ထုတ်ပေးပါတယ်။ ဒီနမူနာမှာ JavaScript က click ကို စောင့်ပြီး paragraph ကို ပြတာနဲ့ ဖျောက်တာ ပြောင်းပေးပါတယ်။',
  ), `<button type="button" id="toggle" aria-expanded="false" aria-controls="hours">Show hours</button>
<p id="hours" hidden>Open 9:00 AM to 6:00 PM.</p>
<script>
  const button = document.querySelector("#toggle");
  const hours = document.querySelector("#hours");
  button.addEventListener("click", () => {
    hours.hidden = !hours.hidden;
    button.textContent = hours.hidden ? "Show hours" : "Hide hours";
    button.setAttribute("aria-expanded", String(!hours.hidden));
  });
</script>`, p('The first click shows the hours and the second hides them. aria-expanded mirrors the state for assistive tools.', 'ပထမတစ်ချက် နှိပ်ရင် ဆိုင်ဖွင့်ချိန် ပေါ်ပြီး နောက်တစ်ချက် နှိပ်ရင် ပြန်ပျောက်ပါတယ်။ ဖွင့်ထားလား၊ ပိတ်ထားလားကို assistive tools တွေ သိနိုင်ဖို့ aria-expanded ကိုပါ ပြောင်းပေးထားပါတယ်။')),
  example('submit', p('Submit a form with type="submit"', 'type="submit" နဲ့ Form ပို့ခြင်း'), p(
    'A submit button asks the browser to validate and submit its form. For a regular button inside a form, leaving out type generally makes it a submit button. Write the type explicitly to make the intended behavior clear.',
    'Submit button ကို နှိပ်ရင် browser က form ကို စစ်ပြီး ပို့ဖို့ ကြိုးစားပါတယ်။ Form ထဲက ပုံမှန် button မှာ type မရေးရင် အများအားဖြင့် submit button အဖြစ် အလုပ်လုပ်ပါတယ်။ Click တစ်ချက်နဲ့ ဘာဖြစ်မလဲ ရှင်းအောင် type ကို ထည့်ရေးပါ။',
  ), `<form method="get">
  <label for="query">Search term</label>
  <input id="query" name="q" required>
  <button type="submit">Search</button>
</form>`, p('The browser blocks an empty submission. Enter pen and submit in a standalone HTML file to see ?q=pen in the URL. A search service would still need to handle the query.', 'အကွက်လွတ်ရင် browser က submit မလုပ်ပေးပါဘူး။ HTML ဖိုင်သီးသန့်မှာ pen ရိုက်ပြီး submit လုပ်ရင် URL မှာ ?q=pen ပေါ်ပါတယ်။ ရှာဖွေမှုရလဒ် ထုတ်ပေးဖို့တော့ query ကို ကိုင်တွယ်မယ့် search service လိုပါတယ်။')),
], [['WHATWG · The button element', htmlSpec + 'form-elements.html#the-button-element']]);

const lists = page('lists-and-disclosure', p('HTML lists', 'HTML စာရင်းများ'), p(
  'The list element tells the browser whether items form a sequence, an unordered group, or a set of names and descriptions.',
  'List element ကိုကြည့်ပြီး browser က ဒီစာရင်းဟာ အစဉ်လိုက် ဖတ်ရတာလား၊ အစဉ်မလိုတဲ့ အစုလား၊ နာမည်နဲ့ ရှင်းလင်းချက်တွေ တွဲထားတာလားဆိုတာ သိနိုင်ပါတယ်။',
), [
  example('items', p('What is a list item?', 'List Item <li> ဆိုတာဘာလဲ။'), p(
    'An li represents one item. Put each item in its own pair of li tags and place them inside the list element. ul wraps the whole group in this example.',
    '<li> က စာရင်းထဲက အချက်တစ်ချက်ကို ကိုယ်စားပြုပါတယ်။ အချက်တစ်ချက်စီကို li tag အဖွင့်အပိတ်ကြားမှာထားပြီး list element အတွင်း စုထည့်ပါ။ ဒီမှာ ul က စာရင်းအစုကို ခြုံထားပါတယ်။',
  ), `<ul>
  <li>Pen</li>
  <li>Notebook</li>
</ul>`, p('Pen and Notebook appear as two items. Try adding another li before </ul>.', 'Pen နဲ့ Notebook က အချက်နှစ်ချက်အဖြစ် ပေါ်ပါမယ်။ </ul> မတိုင်ခင် li တစ်ခု ထပ်ထည့်ကြည့်ပါ။')),
  example('list-types', p('Ordered lists <ol>', 'အစဉ်လိုက် စာရင်း <ol>'), p(
    'Use ol when rearranging the items would change their meaning, such as a recipe or a set of instructions. Each item is an li. The browser normally adds numbers in order.',
    'လုပ်ဆောင်ရမယ့်အဆင့်တွေ၊ ချက်ပြုတ်နည်းတွေလို အစဉ်ပြောင်းရင် အဓိပ္ပာယ်ပါ ပြောင်းတဲ့စာရင်းမှာ ol သုံးပါတယ်။ တစ်ခုစီကို li နဲ့ရေးပြီး browser က ပုံမှန်အားဖြင့် နံပါတ်စဉ် တပ်ပေးပါတယ်။',
  ), `<ol>
  <li>Choose a product.</li>
  <li>Pick a size.</li>
  <li>Review your order.</li>
</ol>`, p('The browser displays three numbered steps. Add an li between two steps and their numbers adjust automatically.', 'နံပါတ်စဉ်နဲ့ အဆင့်သုံးခု မြင်ရပါမယ်။ ကြားထဲမှာ li တစ်ခုထည့်ရင် နံပါတ်တွေ အလိုအလျောက် ပြန်စီပေးပါတယ်။')),
  example('unordered', p('Unordered lists <ul>', 'အစဉ်မလိုတဲ့ စာရင်း <ul>'), p(
    'Use ul for a group of related items where their order does not change the meaning. The browser usually draws a bullet for each li. To create a nested list, place it inside the li it belongs to.',
    'အကြောင်းအရာ ဆက်စပ်ပြီး အစဉ်ပြောင်းလည်း အဓိပ္ပာယ်တူတဲ့ စာရင်းမှာ ul သုံးပါတယ်။ Browser က li တစ်ခုစီကို ပုံမှန်အားဖြင့် bullet နဲ့ ပြပါတယ်။ စာရင်းခွဲ ထည့်ချင်ရင် သက်ဆိုင်ရာ li ရဲ့ အထဲမှာ list ထပ်ထည့်ပါ။',
  ), `<ul>
  <li>Pen
    <ul>
      <li>Blue pen</li>
      <li>Black pen</li>
    </ul>
  </li>
  <li>Notebook</li>
</ul>`, p('Pen and Notebook have bullets at the outer level. The two pen colors appear indented under Pen.', 'Pen နဲ့ Notebook က အပြင်ဘက်စာရင်းမှာ bullet နဲ့ ပေါ်ပါတယ်။ Pen အရောင် နှစ်မျိုးက Pen အောက်မှာ တစ်ဆင့်ဝင်ပြီး ပေါ်ပါတယ်။')),
  example('descriptions', p('Description lists <dl>', 'ရှင်းလင်းချက် တွဲထားတဲ့ စာရင်း <dl>'), p(
    'Use dl for name–description pairs. Write the name in dt and its description in dd. A group can have multiple names or descriptions. Glossaries and item specifications are common uses.',
    'ဝေါဟာရ ဒါမှမဟုတ် ပစ္စည်းအချက်အလက်ကို ရှင်းလင်းချက်နဲ့ တွဲပြချင်ရင် dl သုံးပါတယ်။ နာမည်ကို dt၊ ရှင်းလင်းချက်ကို dd နဲ့ ရေးပါ။ အုပ်စုတစ်ခုမှာ နာမည် ဒါမှမဟုတ် ရှင်းလင်းချက် တစ်ခုထက်ပိုပြီး ထည့်နိုင်ပါတယ်။',
  ), `<dl>
  <dt>Viewport</dt>
  <dd>The visible area of a web page.</dd>
  <dt>Alt text</dt>
  <dd>A text alternative for an image.</dd>
</dl>`, p('Each name appears with its description beneath it. Browsers usually indent the descriptions.', 'နာမည် တစ်ခုစီရဲ့ အောက်မှာ သက်ဆိုင်ရာ ရှင်းလင်းချက် ပေါ်ပါတယ်။ Browser က ရှင်းလင်းချက်တွေကို ပုံမှန်အားဖြင့် တစ်ဆင့် ချိုးဝင်ပြီး ပြပါတယ်။')),
], [['WHATWG · Grouping content', htmlSpec + 'grouping-content.html']]);

const disclosure = page('disclosure', p('Expandable Content <details>', 'ဖွင့်ပိတ်လို့ရတဲ့ အကြောင်းအရာ <details>'), p(
  'Use details to let readers expand supporting information when they need it, such as the answer to a frequently asked question.',
  'FAQ အဖြေလို လိုအပ်မှ ထပ်ဖွင့်ဖတ်ချင်တဲ့ အကြောင်းအရာကို details နဲ့ ထည့်နိုင်ပါတယ်။',
), [
  example('disclosure', p('How <details> and <summary> work', '<details> နဲ့ <summary> အလုပ်လုပ်ပုံ'), p(
    'Place summary first inside details. It is the label and the control users activate. The browser shows the remaining content when details is open and hides it when closed. Add the boolean open attribute to start expanded. Remove the attribute completely to start closed because open="false" still counts as present.',
    'details ရဲ့ ပထမဆုံး child အဖြစ် summary ထည့်ပါ။ အဲဒါက ဖွင့်ပိတ်ဖို့ user နှိပ်မယ့် စာသားပါ။ ဖွင့်ထားရင် ကျန်တဲ့ content ကို browser က ပြပြီး ပိတ်ရင် ဖျောက်ပါတယ်။ အစကတည်းက ဖွင့်ပြချင်ရင် open attribute ထည့်နိုင်ပါတယ်။ open="false" လို့ရေးလည်း attribute ပါနေသေးလို့ ဖွင့်ပါမယ်။ အစမှာ ပိတ်ထားချင်ရင် open attribute ကို အကုန်ဖယ်ပါ။',
  ), `<details>
  <summary>Can I change my order?</summary>
  <p>You can change it before payment.</p>
</details>`, p('The question starts visible. Click it, or focus it and press Enter or Space, to show and hide the answer. The browser does this without any JavaScript.', 'အစမှာ မေးခွန်းကို မြင်ရပါမယ်။ Click နှိပ်တာ ဒါမှမဟုတ် focus ရောက်နေချိန် Enter၊ Space နှိပ်တာနဲ့ အဖြေ ပြလိုက် ဖျောက်လိုက် လုပ်ပေးပါတယ်။ ဒါကို browser က JavaScript မလိုဘဲ ကိုင်ပေးပါတယ်။')),
], [['WHATWG · The details element', htmlSpec + 'interactive-elements.html#the-details-element']]);

const images = page('images', p('HTML Images', 'HTML မှာ ပုံထည့်ခြင်း'), p(
  'An img embeds an image in the page. Its attributes can describe the image, reserve space for it, and tell the browser where to find suitable versions.',
  'img က စာမျက်နှာထဲမှာ ပုံတစ်ပုံ ထည့်ပေးပါတယ်။ Image attributes နဲ့ ပုံအကြောင်း ဖော်ပြတာ၊ ပုံပေါ်လာဖို့ နေရာကြိုချန်တာ၊ သင့်တဲ့ပုံဖိုင် ရွေးဖို့ browser ကို ပြောတာတို့ လုပ်နိုင်ပါတယ်။',
), [
  example('img', p('How does <img> show a picture?', '<img> က ပုံ ဘယ်လိုပြလဲ။'), p(
    'The img element reserves a place for an image. src gives the browser the address of the image file. The browser reads that file separately and draws it in the page. img is a void element with no closing tag.',
    '<img> က စာမျက်နှာပေါ်မှာ ပုံပြမယ့်နေရာကို သတ်မှတ်ပါတယ်။ src နဲ့ ပုံဖိုင်လိပ်စာ ပေးပါတယ်။ Browser က အဲဒီဖိုင်ကို သီးသန့် ဖတ်ပြီး စာမျက်နှာပေါ် ပြပါတယ်။ img က void element ဖြစ်လို့ အပိတ် tag မပါပါဘူး။',
  ), `<img src="https://javascript-training.cloudninemm.com/cloud-nine-logo.png" width="64" height="64" alt="Cloud Nine Innovations logo">`, p('With an internet connection, the site logo appears. Change the URL to a missing image and observe the alternative text.', 'Internet ရှိရင် site logo ပေါ်ပါမယ်။ URL ကို မရှိတဲ့ ပုံလိပ်စာနဲ့ အစားထိုးပြီး အစားထိုးစာသား ပြပုံ စမ်းပါ။')),
  example('alt', p('Image source and alternative text', 'ပုံဖိုင် src နဲ့ ပုံကို ဖော်ပြတဲ့ alt'), p(
    'The browser loads the URL in src. Write alt to communicate what the image contributes in its present context. A meaningful image needs a useful text alternative. Give a purely decorative image alt="" so assistive tools can skip it. Include width and height using the image’s proportions so the browser can reserve space before the file arrives.',
    'Browser က src ထဲက URL ကို သွားပြီး ပုံဖိုင်ယူပါတယ်။ alt မှာ ဒီနေရာက ပုံကြောင့် ဖတ်သူသိရမယ့် အချက်ကို ရေးပါ။ အလှအတွက်သက်သက် ပုံဆို assistive tools တွေ ကျော်သွားနိုင်ဖို့ alt="" ရေးပါ။ ပုံရဲ့ အချိုးနဲ့ ကိုက်တဲ့ width၊ height ကို ထည့်ထားရင် ပုံမရောက်သေးခင် browser က နေရာကြိုချန်ပေးနိုင်ပါတယ်။',
  ), `<img src="mountains.jpg" width="640" height="480" alt="Mountain landscape">
<img src="flourish.svg" alt="">`, p('With mountains.jpg in the same folder, the first image appears. Change its src to a missing file to see how your browser shows a broken image and its alternative text.', 'mountains.jpg ကို ဖိုင်နဲ့ folder တူတူ ထားရင် ပထမပုံ ပေါ်ပါတယ်။ src ကို မရှိတဲ့ဖိုင်နာမည် ပြောင်းစမ်းရင် browser က ပုံမတက်တာနဲ့ alt စာသားကို ဘယ်လို ပြလဲ မြင်နိုင်ပါတယ်။'), p('Place your photo mountains.jpg beside index.html. For the decoration, add any SVG named flourish.svg or leave out the second img. Put the HTML inside body.', 'mountains.jpg ပုံကို index.html ဘေးမှာ ထားပါ။ အလှဆင်ဖို့ flourish.svg နာမည်နဲ့ ကိုယ်ပိုင် SVG သုံးပါ။ ဒီပုံ မရှိရင် ဒုတိယ img ကို ဖယ်ထားနိုင်ပါတယ်။ Code ကို body ထဲ ထည့်ပါ။')),
  example('figure', p('Visible captions with <figure>', '<figure> နဲ့ မြင်ရတဲ့ Caption ထည့်ခြင်း'), p(
    'Use figure around a self-contained illustration. Put figcaption at the beginning or end of it for a visible caption. The caption can explain the photo’s context. The alt text still gives the information a reader would get from the image itself.',
    'သီးသန့် တွဲဖတ်လို့ရတဲ့ ပုံကို figure နဲ့ စုထားနိုင်ပါတယ်။ ပုံအတွက် မြင်ရတဲ့ caption လိုရင် figure အစ ဒါမှမဟုတ် အဆုံးမှာ figcaption ထည့်ပါ။ Caption က ပုံနဲ့ ဆက်စပ်တဲ့ အကြောင်းအရာ ထည့်ပေးနိုင်ပြီး alt က ပုံကိုယ်တိုင်က ပေးတဲ့ အချက်ကို စာသားနဲ့ ဖော်ပြပေးပါတယ်။',
  ), `<figure>
  <img src="mountains.jpg" alt="Mountain landscape">
  <figcaption>A view of the mountains at sunrise.</figcaption>
</figure>`, p('The caption appears under the image, and the alt text is available when readers cannot access the image.', 'ပုံအောက်မှာ caption ပေါ်ပါတယ်။ ပုံကို မမြင်နိုင်တဲ့အခါ alt စာသားက ပုံထဲက အချက်ကို သယ်ပေးပါတယ်။'), p('Use the mountains.jpg photo from the previous example and place this figure inside body.', 'အရင်နမူနာက mountains.jpg ကို ဆက်သုံးပါ။ figure ကို body ထဲ ထည့်ပါ။')),
  example('srcset', p('Choose a file size with srcset and sizes', 'srcset နဲ့ sizes သုံးပြီး ပုံဖိုင်အရွယ် ရွေးခြင်း'), p(
    'Use srcset to supply the same image at different pixel widths. Each w descriptor is the actual width of that file. sizes tells the browser roughly how wide the image will appear in the layout. The browser uses that information and the screen’s pixel density to select a suitable file. Use CSS to set the displayed size itself.',
    'ပုံတူကို pixel အကျယ် ကွဲတဲ့ဖိုင်တွေနဲ့ ပေးချင်ရင် srcset သုံးပါ။ 480w လို တန်ဖိုးဟာ သက်ဆိုင်ရာဖိုင်ရဲ့ တကယ့် pixel အကျယ်ပါ။ sizes က layout ပေါ်မှာ ပုံကို ဘယ်လောက်အကျယ်နဲ့ ပြမလဲဆိုတာ browser ကို ပြောပါတယ်။ Browser က အဲဒီအကျယ်နဲ့ screen ရဲ့ pixel density ကိုကြည့်ပြီး ပုံဖိုင်ရွေးပါတယ်။ ပုံပေါ်မယ့် တကယ့်အကျယ်ကို CSS နဲ့ သတ်မှတ်ပါတယ်။',
  ), `<img src="mountains-480.jpg"
     srcset="mountains-480.jpg 480w, mountains-960.jpg 960w"
     sizes="(max-width: 479px) 100vw, 480px"
     style="width: min(480px, 100vw); height: auto"
     alt="Mountain landscape">`, p('With both files available, inspect the image’s currentSrc in DevTools to see the selected URL. Selection can vary by screen density and browser behavior.', 'ပုံဖိုင်နှစ်ခုလုံးရှိရင် DevTools မှာ image ရဲ့ currentSrc ကို စစ်ပြီး ဘယ်ဖိုင်ရွေးထားလဲ ကြည့်ပါ။ Screen density နဲ့ browser ပေါ်မူတည်ပြီး ရွေးတဲ့ဖိုင် ကွာနိုင်ပါတယ်။'), p('Save two versions of the same image beside index.html. Use a 480px-wide mountains-480.jpg and a 960px-wide mountains-960.jpg. Place the img inside body.', 'ပုံတူ နှစ်ဖိုင်ကို index.html ဘေးမှာ သိမ်းပါ။ အကျယ် 480px ကို mountains-480.jpg၊ 960px ကို mountains-960.jpg ပေးပါ။ img ကို body ထဲ ထည့်ပါ။')),
  example('images', p('Choose a different crop with <picture>', '<picture> နဲ့ ဖြတ်ပုံကွဲတဲ့ ပုံပြောင်းပြခြင်း'), p(
    'Use picture for a different crop or composition at a breakpoint. The browser checks source elements in order and uses the first suitable source. The img at the end supplies the fallback, display element, and alternative text.',
    'Screen အကျယ်တစ်ခုကစပြီး ပုံဖြတ်ပုံ ဒါမှမဟုတ် ပုံဖွဲ့ပုံ ပြောင်းချင်ရင် picture သုံးပါ။ Browser က source တွေကို အစဉ်လိုက် ကြည့်ပြီး ပထမဆုံး ကိုက်တာကို ရွေးပါတယ်။ အဆုံးက img က မကိုက်ရင် သုံးမယ့်ပုံ၊ ပုံပြမယ့် element နဲ့ alt စာသားကို ပေးပါတယ်။',
  ), `<picture>
  <source media="(min-width: 60rem)" srcset="landscape-wide.jpg">
  <img src="landscape-small.jpg" alt="Mountain landscape near a lake">
</picture>`, p('The wide crop is selected at 60rem and above. Below that width the img URL supplies the image. Save both image files alongside the HTML to try this example.', 'Viewport က 60rem နဲ့အထက်ဆို wide crop ကို ရွေးပါတယ်။ အဲဒီအောက်ဆို img ရဲ့ src ထဲကပုံ သုံးပါတယ်။ စမ်းဖို့ ပုံဖိုင်နှစ်ခုကို HTML နဲ့ folder တူတူ ထားပါ။'), p('Put a wide landscape photo or crop named landscape-wide.jpg and a tighter crop named landscape-small.jpg beside index.html, then place picture inside body. Resize the browser to compare both.', 'landscape-wide.jpg နာမည်နဲ့ အကျယ်ပုံတစ်ခု၊ landscape-small.jpg နာမည်နဲ့ ချုံ့ဖြတ်ထားတဲ့ပုံတစ်ခုကို index.html ဘေးမှာ ထားပါ။ picture ကို body ထဲ ထည့်ပြီး browser အကျယ် ပြောင်းစမ်းပါ။')),
  example('fetchpriority', p('Image Fetch Priority (Priority Hints)', 'ပုံဖိုင်ယူရာမှာ ဦးစားပေးမှု သတ်မှတ်ခြင်း (Priority Hints)'), p(
    'Once the browser knows which image file to use, fetchpriority can suggest how urgently to download it. Use high for a key image visible when the page opens, such as a banner that is likely to be the Largest Contentful Paint (LCP) element. Use low for a secondary image you still want the browser to request normally. With auto, the default, the browser chooses the priority. Treat these values as hints and reserve high for the few images that really need it. The loading attribute controls when an image can start loading. Use loading="lazy" for images farther down the page and leave it off the main banner.',
    'Browser က သုံးမယ့်ပုံဖိုင်ကို သိပြီဆိုရင် ဘယ်ပုံကို ပိုဦးစားပေးပြီး download လုပ်သင့်လဲဆိုတာ fetchpriority နဲ့ အကြံပြုနိုင်ပါတယ်။ Page ဖွင့်တာနဲ့ မြင်ရတဲ့ အဓိက banner ပုံလို Largest Contentful Paint (LCP) ဖြစ်နိုင်တဲ့ပုံမှာ high သုံးနိုင်ပါတယ်။ ပုံမှန်အတိုင်း request လုပ်စေချင်ပေမဲ့ ဦးစားပေးမှု လျှော့ချင်တဲ့ ဒုတိယပုံမှာ low သုံးနိုင်ပါတယ်။ မရေးထားရင် default က auto ဖြစ်ပြီး browser က ဦးစားပေးမှုကို ရွေးပါတယ်။ ဒီတန်ဖိုးတွေက browser ကို အကြံပြုတာဖြစ်လို့ တကယ်အရေးကြီးတဲ့ပုံ အနည်းငယ်မှာပဲ high သုံးပါ။ ပုံကို ဘယ်အချိန်မှာ စတင် load လုပ်နိုင်မလဲဆိုတာကိုတော့ loading attribute က ထိန်းပါတယ်။ အောက်ကို scroll ဆင်းမှ မြင်ရမယ့်ပုံတွေမှာ loading="lazy" သုံးနိုင်ပါတယ်။ အဓိက banner ပုံမှာတော့ lazy မထည့်ပါနဲ့။',
  ), `<h1>Mountain Trail Guide</h1>
<img src="mountains.jpg" alt="Mountains along the hiking trail"
     width="640" height="480" style="max-width: 100%; height: auto"
     fetchpriority="high">

<h2>Photo Gallery</h2>
<img src="landscape-small.jpg" alt="Mountain landscape near a lake"
     width="160" height="160" fetchpriority="low">`, p(
    'Both images appear. In Chrome DevTools, open Network, enable the Priority column and Disable cache, then reload your saved page to inspect the priority assigned to each image request. Exact priorities and download times can vary.',
    'ပုံနှစ်ပုံလုံး ပေါ်ပါမယ်။ Chrome DevTools ရဲ့ Network မှာ Priority column ကို ဖွင့်ပြီး Disable cache ကို ရွေးပါ။ သိမ်းထားတဲ့ page ကို reload လုပ်ပြီး ပုံတစ်ပုံစီရဲ့ request ကို browser က ဘယ်လောက် ဦးစားပေးထားလဲ ကြည့်ပါ။ ဦးစားပေးအဆင့်နဲ့ download ကြာချိန်က ပြောင်းနိုင်ပါတယ်။',
  ), p(
    'Use Run example to see the layout. To inspect actual network requests, serve index.html from a local web server with mountains.jpg and landscape-small.jpg in the same folder. Place the example inside body.',
    'Layout ကို Run example နဲ့ ကြည့်နိုင်ပါတယ်။ တကယ့် network request တွေကို စစ်ချင်ရင် index.html နဲ့ folder တူတူမှာ mountains.jpg နဲ့ landscape-small.jpg ထားပြီး local web server ကနေ ဖွင့်ပါ။ နမူနာ code ကို body ထဲ ထည့်ပါ။',
  )),
], [
  ['WHATWG · Images and picture', htmlSpec + 'embedded-content.html'],
  ['WHATWG · Responsive images', htmlSpec + 'images.html'],
  ['WHATWG · Figure and figcaption', htmlSpec + 'grouping-content.html#the-figure-element'],
  ['WHATWG · Image fetch priority', htmlSpec + 'embedded-content.html#attr-img-fetchpriority'],
  ['web.dev · Optimize resource loading with Fetch Priority', 'https://web.dev/articles/fetch-priority'],
]);

const media = page('media', p('HTML Audio and Video', 'HTML မှာ အသံနဲ့ ဗီဒီယို ထည့်ခြင်း'), p(
  'Browsers can play media directly. Add controls so viewers can start and stop playback, and provide text for spoken and important non-speech audio.',
  'Browser က media ဖိုင်ကို တိုက်ရိုက် ဖွင့်နိုင်ပါတယ်။ ဖွင့်တာ၊ ရပ်တာကို user က ထိန်းနိုင်ဖို့ controls ပေးပါ။ စကားသံနဲ့ အရေးပါတဲ့ တခြားအသံတွေကို စာသားနဲ့လည်း ပံ့ပိုးပါ။',
), [
  example('audio', p('Play audio with <audio>', '<audio> နဲ့ အသံဖွင့်ခြင်း'), p(
    'Add controls to show the browser’s audio player. With source elements, the browser tries available files in order. A type can let it skip formats it knows it cannot play. Keep a text transcript near the player so people can read the same information.',
    'Browser ရဲ့ audio player ကို မြင်ရဖို့ controls ထည့်ပါ။ source တစ်ခုထက်ပိုရင် browser က အစဉ်လိုက် စမ်းပါတယ်။ type ထည့်ထားရင် မဖွင့်နိုင်မှန်း သိတဲ့ format ကို ကျော်နိုင်ပါတယ်။ အသံထဲက အချက်အလက် အတူတူ ဖတ်လို့ရဖို့ player အနားမှာ စာသားအပြည့်အစုံဖြစ်တဲ့ transcript ထည့်ပါ။',
  ), `<audio controls>
  <source src="${sampleMedia}lesson.ogg" type="audio/ogg">
  Your browser does not support this audio player.
</audio>
<p>Sample audio: a short tone.</p>`, p('With an internet connection, the player plays a short tone when you press Play.', 'Internet ချိတ်ထားပြီး Play နှိပ်ရင် အသံတိုတစ်ခု ကြားရပါမယ်။')),
  example('playback', p('Play video with <video>', '<video> နဲ့ ဗီဒီယိုဖွင့်ခြင်း'), p(
    'A video element displays moving pictures and can play audio. controls shows the browser’s buttons and timeline. preload="metadata" hints that the browser can read the duration first. If you have a separate cover image, add its URL in poster to display it before playback.',
    'Video element က လှုပ်ရှားနေတဲ့ ပုံတွေ ပြပြီး အသံပါ ဖွင့်နိုင်ပါတယ်။ controls က browser ရဲ့ ခလုတ်တွေနဲ့ အချိန်တန်းကို ပြပါတယ်။ preload="metadata" က ကြာချိန်လို အချက်အလက်တွေ အရင်ဖတ်နိုင်တယ်လို့ browser ကို ပြောပါတယ်။ မဖွင့်ခင် ပြမယ့် ကာဗာပုံ သီးသန့်ရှိရင် poster မှာ အဲဒီပုံလိပ်စာ ထည့်နိုင်ပါတယ်။',
  ), `<video controls preload="metadata" width="360">
  <source src="${sampleMedia}lesson.webm" type="video/webm">
  Your browser does not support this video player.
</video>`, p('With an internet connection, use Play to see a short video with moving color bars.', 'Internet ချိတ်ထားပြီး Play နှိပ်ရင် အရောင်တန်းတွေ ရွေ့နေတဲ့ video အတိုကို မြင်ရပါမယ်။')),
  example('captions', p('Timed captions with <track>', '<track> နဲ့ အချိန်ကိုက် စာတန်းထိုးခြင်း'), p(
    'A track uses a WebVTT file containing timestamps and the text to display. A captions track includes speech and relevant sounds. srclang tells the browser the language, label names it in the player, and default requests that the track be enabled initially if the user’s preferences do not override it. Serve the HTML, video, and VTT from the same local web server when trying the sample.',
    'track က ဘယ်အချိန်မှာ ဘာစာသားပြမလဲ ရေးထားတဲ့ WebVTT ဖိုင်ကို သုံးပါတယ်။ Captions မှာ စကားသံနဲ့ အရေးပါတဲ့ အသံတွေ ပါပါတယ်။ srclang က ဘာသာစကား၊ label က player ထဲမှာ ရွေးမယ့်နာမည်၊ default က user setting နဲ့ မငြိရင် အစကတည်းက ဖွင့်ပြဖို့ browser ကို ပြောပါတယ်။ နမူနာ စမ်းတဲ့အခါ HTML၊ video နဲ့ VTT ကို local web server တစ်ခုတည်းကနေ ဖွင့်ပါ။',
  ), `<video controls src="lesson.webm">
  <track kind="captions" src="lesson-en.vtt" srclang="en" label="English" default>
</video>`, p('Play the video or select English in the player’s caption menu. The browser loads lesson-en.vtt from the URL you provided.', 'Video ဖွင့်ပါ။ လိုရင် player ရဲ့ caption menu မှာ English ရွေးပါ။ Browser က ပေးထားတဲ့ URL ကနေ lesson-en.vtt ကို ယူသုံးပါတယ်။'), p('Download lesson.webm and lesson-en.vtt from https://javascript-training.cloudninemm.com/media/lesson.webm and https://javascript-training.cloudninemm.com/media/lesson-en.vtt. Put them beside index.html and place this HTML in body. Serve the folder using Live Server or python -m http.server 8000 and open http://localhost:8000.', 'https://javascript-training.cloudninemm.com/media/lesson.webm နဲ့ https://javascript-training.cloudninemm.com/media/lesson-en.vtt ကနေ sample ဖိုင်နှစ်ခုကို ယူပြီး index.html ဘေးမှာ ထားပါ။ ဒီ code ကို body ထဲ ထည့်ပါ။ Live Server သုံးပါ။ ဒါမှမဟုတ် folder ထဲ python -m http.server 8000 run ပြီး http://localhost:8000 က ဖွင့်ပါ။')),
  example('webvtt', p('Write a WebVTT cue', 'WebVTT စာတန်းတစ်ခု ရေးခြင်း'), p(
    'Save this example as lesson-en.vtt beside the video. WEBVTT identifies the format. A cue starts with a time range and is followed by the text that should appear. Separate successive cues with a blank line.',
    'ဒီနမူနာကို video နဲ့ folder တူတူမှာ lesson-en.vtt ဆိုပြီး သိမ်းပါ။ WEBVTT က ဖိုင် format ကို ဖော်ပြပါတယ်။ စာတန်းတစ်ခုကို ဘယ်အချိန်ကနေ ဘယ်အချိန်အထိ ပြမလဲ အရင်ရေးပြီး အောက်မှာ ပြမယ့်စာသား ထည့်ပါတယ်။ နောက်စာတန်း မစခင် တစ်လိုင်းခြားပါ။',
  ), `WEBVTT

00:00:00.000 --> 00:00:03.000
[Color bars move across the screen.]`, p('With captions enabled, the new cue displays from 0 to 3 seconds. It describes what happens in this sample clip.', 'Caption ဖွင့်ထားရင် 0 ကနေ 3 စက္ကန့်အထိ စာတန်းပေါ်ပါမယ်။ နမူနာ video ထဲမှာ ဘာဖြစ်နေလဲ ဖော်ပြပါတယ်။'), p('Replace the contents of lesson-en.vtt with the code below, save it, and reload the page on the same local server.', 'lesson-en.vtt ထဲက စာသားကို ဒီ code နဲ့ အစားထိုးပါ။ သိမ်းပြီး အရင် local server က page ကို reload လုပ်ပါ။')),

], [['WHATWG · Media elements', htmlSpec + 'media.html'], ['WHATWG · The track element', htmlSpec + 'media.html#the-track-element'], ['W3C · WebVTT', 'https://www.w3.org/TR/webvtt1/']]);

const tables = page('tables', p('HTML Tables <table>', 'HTML ဇယားများ <table>'), p(
  'A data table expresses relationships across rows and columns. HTML can label those relationships so readers can tell what each value means.',
  'Data table က row နဲ့ column တစ်လျှောက် တန်ဖိုးတွေ ဘယ်လို ဆက်စပ်လဲ ပြပါတယ်။ တန်ဖိုးတစ်ခုချင်း ဘာကို ဆိုလိုလဲ သိဖို့ HTML နဲ့ ခေါင်းစဉ်တွေ သတ်မှတ်ပေးနိုင်ပါတယ်။',
), [
  example('tables', p('Table rows, cells, and caption', 'Table ရဲ့ Row၊ Cell နဲ့ Caption'), p(
    'A table contains rows written with tr. Use td for a data cell and th for a header cell. Put the visible caption first inside the table. Thead groups header rows and tbody groups body rows. The browser aligns cells into columns even without added CSS.',
    'table ထဲမှာ row တစ်ကြောင်းစီကို tr နဲ့ ရေးပါတယ်။ Data cell ကို td၊ header cell ကို th နဲ့ ရေးပါ။ မြင်ရတဲ့ table ခေါင်းစဉ်ဖြစ်တဲ့ caption ကို အစမှာ ထားပါတယ်။ thead က header rows တွေကို စုပေးပြီး tbody က data rows တွေကို စုပေးပါတယ်။ CSS မထည့်သေးလည်း browser က cells တွေကို columns အလိုက် စီပေးပါတယ်။',
  ), `<table>
  <caption>Product catalog</caption>
  <thead>
    <tr><th>Item</th><th>Price (MMK)</th></tr>
  </thead>
  <tbody>
    <tr><td>Pen</td><td>1500</td></tr>
    <tr><td>Notebook</td><td>2500</td></tr>
  </tbody>
</table>`, p('You see a caption and two columns. Each product’s price appears on the same row as its name.', 'Caption နဲ့ column နှစ်ခု ပေါ်ပါတယ်။ ပစ္စည်းတစ်ခုစီရဲ့ ဈေးနှုန်းက နာမည်နဲ့ row တစ်တန်းတည်းမှာ ပေါ်ပါတယ်။')),
  example('table-footer', p('Table Footer <tfoot>', 'ဇယားအောက်ဆုံး အနှစ်ချုပ် <tfoot>'), p(
    'After the data rows in <tbody>, put summary rows such as a total or average inside <tfoot>. Each footer row still uses <tr> with cells inside it. Enter the summary value yourself in this example. If a price changes, update the total too.',
    '<tbody> ထဲက data rows တွေပြီးရင် စုစုပေါင်း၊ ပျမ်းမျှလို အနှစ်ချုပ် row တွေကို <tfoot> ထဲမှာ ထည့်ပါ။ Footer မှာလည်း row တစ်ကြောင်းစီကို <tr> နဲ့ ရေးပြီး အထဲမှာ cell တွေ ထည့်ပါတယ်။ ဒီနမူနာမှာ စုစုပေါင်းတန်ဖိုးကို ကိုယ်တိုင် ရေးထားပါတယ်။ ဈေးနှုန်းတစ်ခု ပြောင်းရင် စုစုပေါင်းကိုပါ ပြင်ပါ။',
  ), `<table>
  <caption>Order summary</caption>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Price (MMK)</th></tr>
  </thead>
  <tbody>
    <tr><td>Pen</td><td>1500</td></tr>
    <tr><td>Notebook</td><td>2500</td></tr>
  </tbody>
  <tfoot>
    <tr><th scope="row">Total</th><td>4000</td></tr>
  </tfoot>
</table>`, p(
    'The Total row appears below the product rows and shows 4000 MMK.',
    'ပစ္စည်းစာရင်းရဲ့ အောက်မှာ Total row ပေါ်ပြီး စုစုပေါင်း 4000 MMK ကို ပြပါတယ်။',
  )),
  example('scope', p('Connect headers to cells with scope', 'scope နဲ့ Header ကို သက်ဆိုင်ရာ Cell တွေနဲ့ ချိတ်ခြင်း'), p(
    'In a simple data table, scope="col" marks a header for its column and scope="row" marks a header for its row. Assistive technology can use the relationships to announce meaningful context as someone moves through the table.',
    'ရိုးရှင်းတဲ့ data table မှာ scope="col" က သူ့ column ရဲ့ ခေါင်းစဉ်၊ scope="row" က သူ့ row ရဲ့ ခေါင်းစဉ်ဆိုတာ ပြပေးပါတယ်။ Screen reader လို assistive tool က cell တစ်ခုကို ဖတ်တဲ့အခါ သက်ဆိုင်ရာ ခေါင်းစဉ်တွေကိုပါ တွဲဖတ်ပေးနိုင်ပါတယ်။',
  ), `<table>
  <caption>Product prices</caption>
  <tr><th scope="col">Product</th><th scope="col">Price (MMK)</th></tr>
  <tr><th scope="row">Pen</th><td>1500</td></tr>
  <tr><th scope="row">Notebook</th><td>2500</td></tr>
</table>`, p('The cell containing 1500 has Pen as its row header and Price (MMK) as its column header.', '1500 ပါတဲ့ cell ရဲ့ row header က Pen ဖြစ်ပြီး column header က Price (MMK) ဖြစ်ပါတယ်။')),
  example('table-columns', p('Table Columns with <colgroup> and <col>', '<colgroup> နဲ့ <col> သုံးပြီး ဇယား Column သတ်မှတ်ခြင်း'), p(
    'Use <colgroup> to group columns. Place it after <caption> and before <thead>. Inside it, each <col> in this example represents one column, from left to right. A class on the second <col> lets CSS color the background of the price column. Keep the actual headings and values in <th> and <td> as usual.',
    'ဇယားထဲက column တွေကို အုပ်စုဖွဲ့ဖို့ <colgroup> သုံးပါ။ <caption> နောက်၊ <thead> မတိုင်ခင် ထားပါ။ ဒီနမူနာထဲက <col> တစ်ခုစီက ဘယ်ကနေ ညာကို column တစ်ခုစီ ကိုယ်စားပြုပါတယ်။ ဒုတိယ <col> မှာ class ထည့်ထားလို့ ဈေးနှုန်း column ရဲ့ နောက်ခံအရောင်ကို CSS နဲ့ ပြောင်းနိုင်ပါတယ်။ ခေါင်းစဉ်နဲ့ တန်ဖိုးတွေကိုတော့ ပုံမှန်အတိုင်း <th> နဲ့ <td> ထဲမှာ ရေးပါ။',
  ), demoPage('Product prices', `<table>
  <caption>Product prices</caption>
  <colgroup>
    <col>
    <col class="price-column">
  </colgroup>
  <thead>
    <tr><th scope="col">Item</th><th scope="col">Price (MMK)</th></tr>
  </thead>
  <tbody>
    <tr><td>Pen</td><td>1500</td></tr>
    <tr><td>Notebook</td><td>2500</td></tr>
  </tbody>
</table>`, '    .price-column { background-color: #dbeafe; }'), p(
    'The price column has a light blue background. Move the class to the first <col> to color the item column instead.',
    'ဈေးနှုန်း column ရဲ့ နောက်ခံမှာ အပြာနုရောင် ပေါ်ပါတယ်။ Class ကို ပထမ <col> ဆီ ရွှေ့ကြည့်ရင် ပစ္စည်းနာမည် column မှာ အရောင် ပေါ်ပါမယ်။',
  ), standalone),
], [['WHATWG · Tables', htmlSpec + 'tables.html'], ['MDN · The col element', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/col'], ['W3C WAI · Tables with two headers', 'https://www.w3.org/WAI/tutorials/tables/two-headers/']]);

const accessibility = page('accessibility', p('Semantic HTML and Keyboard Accessibility', 'Semantic HTML နဲ့ Keyboard Accessibility'), p(
  'Semantic elements state what part of the page they represent. Assistive tools can expose important regions as landmarks users can jump between.',
  'Semantic elements တွေက စာမျက်နှာထဲမှာ အပိုင်းတစ်ခုရဲ့ တာဝန်ကို ဖော်ပြပေးပါတယ်။ Screen reader လို tools တွေက အရေးပါတဲ့ အပိုင်းတွေကို landmark အဖြစ် ပြပြီး တစ်နေရာကနေ တစ်နေရာ သွားနိုင်စေပါတယ်။',
), [
  example('landmarks', p('The main content <main>', 'အဓိက အကြောင်းအရာ <main>'), p(
    'Place the page’s primary content inside main. Repeated site navigation usually sits outside it. Use one visible main landmark per page so visitors can quickly find the content unique to that page.',
    'ဒီစာမျက်နှာကို ဖွင့်လာတဲ့သူ အဓိကဖတ်ရမယ့် content ကို main ထဲမှာ ထည့်ပါ။ Page တိုင်းမှာ ထပ်ပါတဲ့ site menu ကို ပုံမှန်အားဖြင့် main အပြင်မှာ ထားပါတယ်။ အဓိက content ကို ရှာလွယ်ဖို့ စာမျက်နှာတစ်ခုမှာ မြင်ရတဲ့ main တစ်ခုထားပါ။',
  ), `<main id="main-content">
  <h1>Product catalog</h1>
  <p>See our available products and prices.</p>
</main>`, p('The accessibility tree exposes a main landmark containing the heading and paragraph.', 'Browser ရဲ့ accessibility tree ထဲမှာ ခေါင်းစဉ်နဲ့ စာပိုဒ် ပါတဲ့ main landmark ကို တွေ့နိုင်ပါတယ်။')),
  example('navigation', p('Major navigation <nav>', 'အဓိက သွားလာစရာ Links <nav>'), p(
    'Use nav for an important set of navigation links, such as the main menu or a table of contents. When several navigation landmarks have different purposes, give each a descriptive label.',
    'အဓိက menu ဒါမှမဟုတ် မာတိကာလို အရေးပါတဲ့ navigation links အစုကို nav နဲ့ ဖော်ပြပါ။ ရည်ရွယ်ချက်ကွဲတဲ့ nav အများကြီး ရှိရင် ဘယ် nav က ဘာအတွက်လဲ သိအောင် label တစ်ခုစီ ပေးပါ။',
  ), `<nav aria-label="Main navigation">
  <a href="/catalog">Catalog</a>
  <a href="/contact">Contact</a>
</nav>`, p('The browser exposes a navigation landmark named Main navigation. Tab reaches the two links in source order.', 'Main navigation နာမည်နဲ့ navigation landmark တစ်ခု ရှိလာပါတယ်။ Tab နှိပ်ရင် HTML မှာ ရေးထားတဲ့ အစဉ်အတိုင်း link နှစ်ခုဆီ ရောက်ပါတယ်။')),
  example('header-footer', p('Introduce the page with <header>', '<header> နဲ့ စာမျက်နှာကို မိတ်ဆက်ခြင်း'), p(
    'A header marks introductory material. A page header often contains the site name or navigation and typically acts as the banner landmark. A header inside an article introduces that article instead.',
    '<header> က မိတ်ဆက်အပိုင်းကို သတ်မှတ်တာပါ။ Page ရဲ့ header မှာ site နာမည် ဒါမှမဟုတ် navigation ပါလေ့ရှိပြီး banner landmark အဖြစ် သတ်မှတ်ပေးပါတယ်။ Article ထဲက header ကတော့ အဲဒီ article အတွက် မိတ်ဆက်ပိုင်းပါ။',
  ), `<header><a href="./index.html">Example Store</a></header>
<main><h1>Product catalog</h1></main>`, p('The site name appears before the main content. Find the banner landmark in the browser’s accessibility tree.', 'Site နာမည်က အဓိကအကြောင်းအရာမတိုင်ခင် ပေါ်ပါမယ်။ Browser ရဲ့ accessibility tree ထဲမှာ banner landmark ကို ရှာကြည့်ပါ။')),
  example('footer', p('Place closing information with <footer>', '<footer> နဲ့ အပိတ်အချက်အလက် ထည့်ခြင်း'), p(
    'A footer marks closing information, such as contact information, copyright, or details about the author. At page level it usually forms a contentinfo landmark. In an article, it describes the end of that article.',
    '<footer> က ဆက်သွယ်ရန်၊ မူပိုင်ခွင့်၊ ရေးသားသူအကြောင်းလို အပိတ်အချက်အလက်တွေကို မှတ်ပေးပါတယ်။ Page အဆင့်မှာ contentinfo landmark ဖြစ်လေ့ရှိပါတယ်။ Article ထဲမှာ သုံးရင် အဲဒီ article ရဲ့ အပိတ်အချက်အလက် ဖြစ်ပါတယ်။',
  ), `<main><h1>Product catalog</h1></main>
<footer><p>© Example Store</p></footer>`, p('The copyright line appears after the main content. Inspect the footer to see its contentinfo role.', 'အဓိကအကြောင်းအရာပြီးရင် မူပိုင်ခွင့်စာသား ပေါ်ပါမယ်။ Footer ကို Inspect လုပ်ပြီး contentinfo role ကြည့်ပါ။')),
  example('sections', p('Group related content with <section>', '<section> နဲ့ ဆက်စပ်တဲ့ အကြောင်းအရာ စုခြင်း'), p(
    'A section gives a distinct topic a place within the page. Give it a heading that describes the topic. For a region assistive tools can name, use aria-labelledby to point at the heading’s ID.',
    '<section> က သီးခြားအကြောင်းအရာတစ်ခုအတွက် စာမျက်နှာထဲမှာ အပိုင်းတစ်ပိုင်း သတ်မှတ်ပါတယ်။ အကြောင်းအရာ ရှင်းတဲ့ ခေါင်းစဉ် ထည့်ပါ။ Assistive tools တွေက အပိုင်းနာမည် သိစေချင်ရင် aria-labelledby မှာ ခေါင်းစဉ်ရဲ့ id ကို ထည့်နိုင်ပါတယ်။',
  ), `<main>
  <h1>Product catalog</h1>
  <section aria-labelledby="stationery-heading">
    <h2 id="stationery-heading">Stationery</h2>
    <p>Blue and black pens are available.</p>
  </section>
</main>`, p('Stationery appears as a section title below Product catalog. The named region is available in the accessibility tree.', 'Product catalog အောက်မှာ Stationery က အပိုင်းခေါင်းစဉ်အဖြစ် ပေါ်ပါမယ်။ Accessibility tree မှာလည်း နာမည်နဲ့ တွေ့နိုင်ပါတယ်။')),
  example('article', p('Mark independently readable content with <article>', '<article> နဲ့ သီးခြားဖတ်လို့ရတဲ့ အကြောင်းအရာ ရေးခြင်း'), p(
    'An article is a complete piece of content, such as a news update, blog post, or review. A section can contain several articles when each can be read on its own.',
    '<article> က သတင်းတို၊ blog post၊ review လို တစ်ခုတည်း ထုတ်ဖတ်ရင်လည်း အဓိပ္ပာယ်ပြည့်တဲ့ အကြောင်းအရာပါ။ တစ်ခုချင်း သီးသန့်ဖတ်လို့ရတဲ့ article တွေကို section တစ်ခုထဲ စုထားနိုင်ပါတယ်။',
  ), `<section>
  <h2>Store news</h2>
  <article>
    <h3>New products</h3>
    <p>Three new products arrive Friday.</p>
  </article>
</section>`, p('You can move the New products article to another page and its heading and message still make sense together.', 'New products article တစ်ခုလုံးကို တခြား page ဆီ ရွှေ့လည်း အဲဒီ ခေါင်းစဉ်နဲ့ စာသားကို တွဲဖတ်ပြီး နားလည်နိုင်ပါတယ်။')),
  example('keyboard', p('Keyboard focus and skip links', 'Keyboard Focus နဲ့ Skip Link'), p(
    'Focus is the element that currently receives keyboard input. Tab moves through links and form controls in the document’s usual order. Keep a visible focus indicator. A skip link before the site menu lets keyboard users move directly to the main content. tabindex="-1" allows main to receive focus as the target without placing main itself in the normal Tab sequence.',
    'Focus ဆိုတာ လက်ရှိ keyboard input လက်ခံနေတဲ့ element ပါ။ Tab နှိပ်ရင် ပုံမှန်အားဖြင့် document ထဲက links နဲ့ form controls တွေဆီ အစဉ်လိုက် သွားပါတယ်။ Focus ရောက်နေတဲ့နေရာကို မြင်ရအောင် ထားပါ။ Menu မတိုင်ခင် skip link ထည့်ရင် keyboard သုံးသူက main content ဆီ တန်းသွားနိုင်ပါတယ်။ tabindex="-1" က main ကို ပုံမှန် Tab အစဉ်ထဲ မထည့်ဘဲ link ကနေ ရောက်တဲ့အခါ focus လက်ခံနိုင်စေပါတယ်။',
  ), `<a href="#main-content">Skip to main content</a>
<header><nav aria-label="Main"><a href="/">Home</a></nav></header>
<main id="main-content" tabindex="-1">
  <h1>Events</h1>
  <a href="/events">View upcoming events</a>
</main>`, p('Press Tab to focus the skip link and Enter to reach main. Press Tab again to move to the events link.', 'Tab နဲ့ skip link ဆီ သွားပြီး Enter နှိပ်ရင် main ကို ရောက်ပါတယ်။ နောက်တစ်ခါ Tab နှိပ်ရင် Events link ဆီ ရောက်ပါတယ်။')),
], [['WHATWG · Page sections', htmlSpec + 'sections.html'], ['WHATWG · The main element', htmlSpec + 'grouping-content.html#the-main-element'], ['WHATWG · Focus', htmlSpec + 'interaction.html#focus'], ['W3C WAI · Bypass blocks', 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html']]);

const forms = page('forms', p('HTML Forms, Labels, and Inputs', 'HTML Form၊ Label နဲ့ Input များ'), p(
  'A form collects data from controls. The browser can validate those controls, turn their selected values into name–value pairs, and send them to a URL.',
  'Form က user ဖြည့်ထားတဲ့ အကွက်တွေကနေ data စုပါတယ်။ Browser က ဖြည့်ထားတာ မှန်မမှန် စစ်နိုင်သလို ရွေးထားတဲ့ တန်ဖိုးတွေကို name၊ value အတွဲအဖြစ် စုပြီး URL တစ်ခုဆီ ပို့နိုင်ပါတယ်။',
), [
  example('form', p('What does <form> do?', '<form> က ဘာလုပ်လဲ။'), p(
    'A form groups controls used for answering a question or sending information. An input is a control the reader can type into. A submit button asks the browser to send the form. The name on an input determines the name used in the submitted data.',
    '<form> က မေးခွန်းဖြေဖို့၊ အချက်အလက် ပို့ဖို့ သုံးမယ့် အကွက်တွေကို စုထားပါတယ်။ Input က user စာရိုက်လို့ရတဲ့ အကွက်တစ်ခုပါ။ Submit ခလုတ်က form ပို့ဖို့ browser ကို ပြောပါတယ်။ Input ရဲ့ name က ပို့မယ့် data မှာ အဲဒီတန်ဖိုးရဲ့ နာမည် ဖြစ်ပါတယ်။',
  ), demoPage('First form', `  <form method="get">
    <label for="product">Product</label>
    <input id="product" name="product">
    <button type="submit">Submit</button>
  </form>`), p('Type pen and submit. ?product=pen appears in the browser address. This sample reloads the page with that query in its URL.', 'pen ရိုက်ပြီး submit နှိပ်ပါ။ Browser လိပ်စာမှာ ?product=pen ပေါ်ပါမယ်။ ဒီနမူနာက အဲဒီ query ပါတဲ့ URL နဲ့ စာမျက်နှာ ပြန်ဖွင့်ပါတယ်။'), standalone),
  example('fields', p('Connect a label to a field', 'Label နဲ့ ဖြည့်ရမယ့်အကွက် ချိတ်ခြင်း'), p(
    'Match the label’s for to the input’s id. The id identifies the element in the document. The name is the key used when the form sends the field. A visible label gives readers a stable cue even after they start typing.',
    'label ရဲ့ for နဲ့ input ရဲ့ id ကို တူအောင် ရေးပါ။ id က document ထဲမှာ element ကို ရှာဖို့ သုံးပြီး name က form ပို့တဲ့အခါ value ကို ဘယ် key အောက်မှာ ထည့်မလဲ သတ်မှတ်ပါတယ်။ မြင်ရတဲ့ label ထားရင် user စာရိုက်ပြီးနောက်လည်း ဒီအကွက်မှာ ဘာဖြည့်ရမယ်ဆိုတာ သိနိုင်ပါတယ်။',
  ), `<label for="customer-email">Email address</label>
<input id="customer-email" name="email" type="email" autocomplete="email">`, p('Click the label to move focus to the input. An email typed into this control will use email as its submission key.', 'Label ကို click နှိပ်ရင် input ဆီ focus ရောက်ပါတယ်။ ဒီ input ကို form နဲ့ ပို့တဲ့အခါ ရိုက်ထားတဲ့ email ကို email ဆိုတဲ့ key နဲ့ ပို့ပါမယ်။')),
  example('input-types', p('Choose input types by data', 'ဖြည့်မယ့် Data အလိုက် Input Type ရွေးခြင်း'), p(
    'The type can change the browser’s control, validation, or on-screen keyboard. Use email for email addresses, number for quantities, and date for calendar dates. An email field checks the syntax of a value. It cannot verify that the address belongs to the user.',
    'type အလိုက် browser က ပြတဲ့ control၊ data စစ်ပုံ ဒါမှမဟုတ် ဖုန်းပေါ်က keyboard ကွာနိုင်ပါတယ်။ Email လိပ်စာအတွက် email၊ အရေအတွက်အတွက် number၊ နေ့စွဲအတွက် date သုံးပါ။ email input က ရိုက်ထားတဲ့ပုံစံ မှန်မမှန် စစ်နိုင်ပါတယ်။ လိပ်စာကို ဒီ user တကယ်ပိုင်လားဆိုတာ စစ်ဖို့ သီးသန့်နည်းလမ်း လိုပါတယ်။',
  ), `<form>
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>
  <label for="quantity">Quantity</label>
  <input id="quantity" name="quantity" type="number" min="1" value="1">
  <label for="pickup">Pickup date</label>
  <input id="pickup" name="pickup" type="date">
  <button type="submit">Continue</button>
</form>`, p('Try entering pen in Email and submitting. The browser asks for a valid email address. The date field can offer a calendar picker, and its submitted value uses YYYY-MM-DD.', 'Email မှာ pen လို့ရိုက်ပြီး submit စမ်းပါ။ Browser က email ပုံစံမှန်အောင် ပြန်ဖြည့်ခိုင်းပါတယ်။ Date အကွက်မှာ ရက်စွဲရွေးဖို့ calendar ပေါ်နိုင်ပြီး form ပို့တဲ့ date တန်ဖိုးက YYYY-MM-DD ပုံစံပါ။')),
  example('submission', p('Send form data with GET or POST', 'GET၊ POST နဲ့ Form Data ပို့ခြင်း'), p(
    'The action identifies the request destination. GET adds the submitted values to the URL query string and fits actions such as search. POST puts the submitted form data in the request body and is commonly used for changes such as placing an order. A form sends values from named, eligible controls. A server route handles the request.',
    'action က request ပို့မယ့်လိပ်စာကို ပြောပါတယ်။ GET က ဖြည့်ထားတဲ့ တန်ဖိုးတွေကို URL ရဲ့ query string ထဲ ထည့်ပြီး ရှာဖွေမှုလို အလုပ်အတွက် သုံးနိုင်ပါတယ်။ POST က data ကို request body ထဲ ထည့်ပို့ပြီး order တင်တာလို အခြေအနေ ပြောင်းစေတဲ့အလုပ်တွေမှာ သုံးလေ့ရှိပါတယ်။ name ပါပြီး ပို့လို့ရတဲ့ controls တွေဆီက တန်ဖိုးတွေကို form က စုပေးပါတယ်။ Request ကို server route က လက်ခံ ကိုင်တွယ်ပါတယ်။',
  ), `<form action="/orders" method="post">
  <label for="order-email">Email address</label>
  <input id="order-email" name="email" type="email" required>
  <button type="submit">Place order</button>
</form>`, p('On a server that handles POST /orders, the browser sends a request whose form body includes email. In a standalone HTML file you can still test whether the browser blocks invalid input.', 'POST /orders လက်ခံတဲ့ server ရှိရင် browser က email ပါတဲ့ form body ကို request နဲ့ ပို့ပါတယ်။ HTML ဖိုင်သီးသန့် ဖွင့်စမ်းရင်တော့ input မမှန်တဲ့အခါ browser က မပို့အောင် တားတာကို စမ်းနိုင်ပါတယ်။')),
], [['WHATWG · Forms', htmlSpec + 'forms.html'], ['WHATWG · The input element', htmlSpec + 'input.html'], ['WHATWG · Form submission', htmlSpec + 'form-control-infrastructure.html#form-submission-algorithm']]);

const controls = page('form-controls', p('Checkboxes, Radio Buttons, and Select Menus', 'Checkbox၊ Radio Button နဲ့ Select Menu များ'), p(
  'HTML offers different controls for independent options, mutually exclusive choices, and dropdowns. Each uses attributes to decide which values are submitted.',
  'သီးသန့်ဖွင့်ပိတ် ရွေးတာ၊ အဖြေတစ်ခုပဲ ရွေးတာ၊ dropdown ကနေ ရွေးတာတို့အတွက် HTML မှာ control ကွဲတွေ ရှိပါတယ်။ ဘယ်တန်ဖိုး ပို့မလဲဆိုတာကို attributes နဲ့ သတ်မှတ်နိုင်ပါတယ်။',
), [
  example('choices', p('Check any number of options with checkboxes', 'Checkbox နဲ့ ကြိုက်သလောက် ရွေးခြင်း'), p(
    'Each checkbox has its own checked state. The fieldset groups related controls and its legend names the group. Checked boxes with the same name can contribute multiple values. An unchecked box contributes no entry. In JavaScript read them with FormData.getAll(name).',
    'Checkbox တစ်ခုစီကို သီးခြား အမှန်ခြစ်နိုင်ပါတယ်။ fieldset က ဆက်စပ် controls တွေကို စုပေးပြီး legend က အုပ်စုကို နာမည်ပေးပါတယ်။ name တူတဲ့ checkbox တွေ အများကြီး ခြစ်ထားရင် တန်ဖိုး အများကြီး ပို့နိုင်ပါတယ်။ မခြစ်ထားတဲ့ box က entry မပို့ပါဘူး။ JavaScript မှာ FormData.getAll(name) နဲ့ အကုန်ဖတ်နိုင်ပါတယ်။',
  ), `<form id="extras-form">
  <fieldset>
    <legend>Extras</legend>
    <label><input type="checkbox" name="extra" value="gift-wrap"> Gift wrap</label>
    <label><input type="checkbox" name="extra" value="note"> Gift note</label>
  </fieldset>
</form>`, p('Select both. In the console, new FormData(document.querySelector("#extras-form")).getAll("extra") produces ["gift-wrap", "note"]. Uncheck both and it produces [].', 'နှစ်ခုလုံး ခြစ်ပြီး Console မှာ new FormData(document.querySelector("#extras-form")).getAll("extra") ရိုက်ရင် ["gift-wrap", "note"] ရပါတယ်။ နှစ်ခုလုံး ဖြုတ်ရင် [] ရပါမယ်။')),
  example('radio', p('Choose one option with radio buttons', 'Radio Button နဲ့ အဖြေတစ်ခု ရွေးခြင်း'), p(
    'Radio buttons with the same name in the same form form a group. Selecting one clears the previous choice. Give each option a distinct value. The checked attribute sets the initial selection.',
    'Form တစ်ခုတည်းမှာ name တူတဲ့ radio buttons တွေက အုပ်စုတစ်စု ဖြစ်ပါတယ်။ တစ်ခု ရွေးလိုက်ရင် အရင်ရွေးထားတာကို browser က ဖြုတ်ပေးပါတယ်။ တစ်ခုစီမှာ မတူတဲ့ value ထည့်ပါ။ checked က အစမှာ ရွေးထားမယ့် option ကို သတ်မှတ်ပါတယ်။',
  ), `<fieldset>
  <legend>Paper size</legend>
  <label><input type="radio" name="size" value="small" checked> Small</label>
  <label><input type="radio" name="size" value="large"> Large</label>
</fieldset>`, p('Small starts selected. Click Large and Small becomes unselected. In a form, the submission would include size=large.', 'အစမှာ Small ရွေးထားပါတယ်။ Large နှိပ်ရင် Small ပြန်ပြုတ်ပါတယ်။ Form နဲ့ ပို့လိုက်ရင် size=large ပါသွားပါမယ်။')),
  example('values', p('Choose from a dropdown with <select>', '<select> နဲ့ Dropdown ထဲက ရွေးခြင်း'), p(
    'The select holds options. Each option has text the reader sees and a value the form sends. Use a first option with an empty value alongside required for a prompt that needs a real choice. Add multiple only when several selections are appropriate. Each selected option then contributes its own value.',
    'select ထဲမှာ ရွေးလို့ရတဲ့ options တွေ ထည့်ပါတယ်။ တစ်ခုစီမှာ user မြင်ရတဲ့စာသားနဲ့ form ပို့မယ့် value ရှိပါတယ်။ သေချာရွေးခိုင်းချင်ရင် အစ option ကို value အလွတ်နဲ့ ထားပြီး select မှာ required ထည့်ပါ။ အများကြီး ရွေးလို့ရဖို့ လိုမှ multiple ထည့်ပါ။ ဒါဆို ရွေးထားတဲ့ option တစ်ခုစီရဲ့ value ကို ပို့ပါတယ်။',
  ), `<form>
  <label for="product">Product</label>
  <select id="product" name="product" required>
    <option value="">Choose a product</option>
    <option value="pen">Pen</option>
    <option value="notebook">Notebook</option>
  </select>
  <button type="submit">Continue</button>
</form>`, p('The prompt is initially visible, and the browser blocks submission until you choose Pen or Notebook. Choosing Pen sends the value pen.', 'အစမှာ ရွေးဖို့ စာသား ပြထားပါတယ်။ Pen ဒါမှမဟုတ် Notebook မရွေးသေးရင် browser က မပို့ပါဘူး။ Pen ရွေးရင် pen ဆိုတဲ့ value ကို ပို့ပါတယ်။')),
], [['WHATWG · Input controls', htmlSpec + 'input.html'], ['WHATWG · The select element', htmlSpec + 'form-elements.html#the-select-element'], ['WHATWG · FormData', 'https://xhr.spec.whatwg.org/#interface-formdata']]);

const validation = page('form-validation', p('HTML Form Validation', 'HTML Form Validation'), p(
  'Constraint validation is the browser’s built-in check that form controls satisfy the rules declared in HTML. It catches simple input mistakes before normal submission.',
  'Constraint validation ဆိုတာ HTML မှာ သတ်မှတ်ထားတဲ့ စည်းမျဉ်းတွေနဲ့ user ဖြည့်ထားတာ ကိုက်မကိုက် browser က စစ်ပေးတာပါ။ ရိုးရိုး submit မလုပ်ခင်မှာ အခြေခံ input အမှားတွေ ပြပေးနိုင်ပါတယ်။',
), [
  example('constraints', p('Validate required values and numeric ranges', 'မဖြစ်မနေ ဖြည့်ခိုင်းတာနဲ့ ဂဏန်းအကန့်အသတ် စစ်ခြင်း'), p(
    'required prevents an empty value in this number field. min and max set inclusive bounds. When you activate the submit button, the browser blocks submission on invalid input and usually shows a message by the field. The message varies depending on the browser and language.',
    'ဒီ number input မှာ required ကြောင့် အကွက်လွတ်နေလို့ မရပါဘူး။ min နဲ့ max မှာ သတ်မှတ်တဲ့ အနိမ့်ဆုံး၊ အမြင့်ဆုံး တန်ဖိုးတွေကိုပါ လက်ခံပါတယ်။ Submit နှိပ်တဲ့အခါ input မမှန်ရင် browser က form မပို့ဘဲ အကွက်နားမှာ message ပြလေ့ရှိပါတယ်။ Message စာသားက browser နဲ့ ဘာသာစကားအလိုက် ကွာနိုင်ပါတယ်။',
  ), `<form>
  <label for="guests">Guests</label>
  <input type="number" id="guests" name="guests" min="1" max="6" required>
  <button type="submit">Reserve</button>
</form>`, p('Try an empty value, 0, and 7. The browser blocks all three. Try 1 or 6 and the form passes these rules.', 'အလွတ်၊ 0၊ 7 တို့ကို စမ်းပါ။ သုံးခုလုံးမှာ browser က form ပို့တာကို တားပါတယ်။ 1 ဒါမှမဟုတ် 6 ရိုက်ရင် ဒီစည်းမျဉ်းတွေကို ကျော်နိုင်ပါတယ်။')),
  example('length', p('Validate text length with minlength', 'minlength နဲ့ စာသားအရှည် စစ်ခြင်း'), p(
    'minlength sets the minimum length of a nonempty value the user types into a text field. Add required if the field must also be present. A real server should check incoming values again because requests can be sent without going through this page.',
    'Text input မှာ user ရိုက်ထားတဲ့ စာသား အနည်းဆုံး ဘယ်လောက်ရှည်ရမလဲ minlength နဲ့ သတ်မှတ်ပါတယ်။ အကွက်လွတ်ကိုပါ တားချင်ရင် required တွဲထည့်ပါ။ ဒီစာမျက်နှာကို မဖြတ်ဘဲ server ဆီ request ပို့နိုင်တာကြောင့် server ကလည်း ရောက်လာတဲ့ တန်ဖိုးတွေကို ပြန်စစ်ရပါတယ်။',
  ), `<form>
  <label for="order-name">Name on the order (at least 2 characters)</label>
  <input id="order-name" name="customer" minlength="2" required>
  <button type="submit">Continue</button>
</form>`, p('Type A and submit. The browser asks for a longer value. Type May and the field passes its length check.', 'A တစ်လုံး ရိုက်ပြီး submit နှိပ်ပါ။ Browser က စာပိုရှည်အောင် ဖြည့်ခိုင်းပါမယ်။ May ရိုက်ရင် စာသားအရှည် စစ်ချက်ကို ကျော်ပါတယ်။')),
], [['WHATWG · Constraint validation', htmlSpec + 'form-control-infrastructure.html#the-constraint-validation-api'], ['MDN · Client-side form validation', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation']]);

const dialogs = page('dialogs-and-popovers', p('Modal Dialogs <dialog>', 'Modal Dialogs <dialog>'), p(
  'Use a modal dialog for a short task or decision the user needs to address before returning to the page.',
  'စာမျက်နှာကို ဆက်မသုံးခင် user က အရင်ကြည့်ရမယ့် အချက်၊ ဆုံးဖြတ်ရမယ့် အလုပ်တိုအတွက် modal dialog သုံးနိုင်ပါတယ်။',
), [
  example('modal', p('Open and close a modal with JavaScript', 'JavaScript နဲ့ Modal ဖွင့်ပိတ်ခြင်း'), p(
    'Calling showModal() puts a dialog above the page and makes the rest of the document temporarily inert. That means the user cannot interact with the background while the modal is active. aria-labelledby points to the visible title so assistive tools can name the dialog. Submitting a form with method="dialog" closes it without sending a network request.',
    'showModal() ကို ခေါ်ရင် dialog ကို page အပေါ်မှာ ပြပြီး ကျန်တဲ့ page ကို ယာယီ အသုံးပြုလို့ မရအောင် browser က ထားပေးပါတယ်။ aria-labelledby က မြင်ရတဲ့ heading ကို ချိတ်ပေးလို့ assistive tools တွေက dialog နာမည်ကို သိနိုင်ပါတယ်။ method="dialog" ပါတဲ့ form ကို submit လုပ်ရင် request မပို့ဘဲ dialog ပိတ်ပါတယ်။',
  ), `<button id="open-order" type="button">View order</button>
<dialog id="order" aria-labelledby="order-title">
  <h2 id="order-title">Order details</h2>
  <p>Your order is ready.</p>
  <form method="dialog"><button autofocus>Close</button></form>
</dialog>
<script>
  const dialog = document.querySelector("#order");
  document.querySelector("#open-order").addEventListener("click", () => {
    dialog.showModal();
  });
</script>`, p('Open View order. Focus starts on Close. Close or Escape dismisses the modal, and focus returns to the opener in this example.', 'View order နှိပ်ပြီး ဖွင့်ပါ။ Focus က Close ခလုတ်မှာ စပါတယ်။ Close ဒါမှမဟုတ် Escape နဲ့ ပိတ်ရင် ဒီနမူနာမှာ focus က ဖွင့်ခဲ့တဲ့ ခလုတ်ဆီ ပြန်ရောက်ပါတယ်။')),
  example('commands', p('Open a modal with HTML button commands', 'HTML Button Commands နဲ့ Modal ဖွင့်ခြင်း'), p(
    'In a browser that supports invoker commands, commandfor names the target dialog by id. command tells the browser what to do with it. show-modal opens it in modal mode and close dismisses it. The browser provides the same modal behavior as the JavaScript example.',
    'Invoker commands ကို ပံ့ပိုးတဲ့ browser မှာ commandfor ကို dialog id နဲ့ တူအောင် ရေးပါ။ command မှာ browser ဘာလုပ်ရမလဲ သတ်မှတ်ပါတယ်။ show-modal က modal အဖြစ် ဖွင့်ပြီး close က ပိတ်ပါတယ်။ Browser က JavaScript နမူနာထဲက modal အတိုင်း ကိုင်ပေးပါတယ်။',
  ), `<button type="button" commandfor="order" command="show-modal">View order</button>
<dialog id="order" aria-label="Order details">
  <p>Your order is ready.</p>
  <button type="button" commandfor="order" command="close">Close</button>
</dialog>`, p('You can open and close the dialog with these buttons in a supporting browser. Each command targets the same order id.', 'ပံ့ပိုးတဲ့ browser မှာ ဒီ buttons နှစ်ခုနဲ့ dialog ကို ဖွင့်ပိတ်နိုင်ပါတယ်။ Command နှစ်ခုလုံးက order ဆိုတဲ့ id တစ်ခုတည်းကို ချိတ်ထားပါတယ်။')),
], [['MDN · The dialog element', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog'], ['MDN · Button commands', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#command']]);

const popovers = page('popovers', p('HTML Popovers', 'HTML Popovers'), p(
  'Use a popover for optional information the user can glance at while continuing to use the page.',
  'စာမျက်နှာကို ဆက်သုံးရင်း လိုအပ်တဲ့အချိန်မှ ဖွင့်ကြည့်နိုင်မယ့် အပိုအချက်အလက်အတွက် popover သုံးနိုင်ပါတယ်။',
), [
  example('popover', p('Open and dismiss an auto popover', 'Auto Popover ဖွင့်ပိတ်ပုံ'), p(
    'Add popover to the element you want to show above the page. Match the button’s popovertarget to that element’s id. The browser keeps the popover hidden at first and toggles it when the button is activated. With the default auto behavior, clicking outside or pressing Escape also closes it. The rest of the page remains interactive.',
    'Page အပေါ်ထပ်မှာ ပြချင်တဲ့ element ကို popover attribute ထည့်ပါ။ Button ရဲ့ popovertarget ကို အဲဒီ element ရဲ့ id နဲ့ တူအောင် ရေးပါ။ Browser က အစမှာ popover ကို ဖျောက်ထားပြီး button နှိပ်ရင် ဖွင့်ပိတ်ပေးပါတယ်။ ပုံမှန် auto behavior မှာ အပြင်ဘက်ကို click နှိပ်တာ၊ Escape နှိပ်တာနဲ့လည်း ပိတ်ပါတယ်။ Page ရဲ့ ကျန်တဲ့အပိုင်းတွေကို ဆက်သုံးနိုင်ပါတယ်။',
  ), `<button type="button" popovertarget="sku-help">What is a SKU?</button>
<p id="sku-help" popover>A SKU is a code that identifies a product.</p>`, p('Activate the button to show the explanation. Click outside or press Escape to dismiss it.', 'Button ကို နှိပ်ရင် ရှင်းလင်းချက် ပေါ်ပါတယ်။ အပြင်ဘက်ကို click နှိပ်တာ ဒါမှမဟုတ် Escape နှိပ်တာနဲ့ ပိတ်ပါတယ်။')),
], [['MDN · The popover attribute', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover']]);

const seo = page('metadata-and-search', p('Search Engine Optimization (SEO)', 'Search Engine Optimization (SEO)'), p(
  'How do people find a web page through Google? Learn how search works and what you can do when writing your page’s content, headings, links, and metadata.',
  'Google မှာ ရှာတဲ့သူတွေ ကိုယ့်ဝက်ဘ်စာမျက်နှာကို ဘယ်လို ရှာတွေ့နိုင်လဲ။ Search engine က စာမျက်နှာတွေကို ဘယ်လို ရှာဖတ်လဲဆိုတာက စပြီး HTML ထဲမှာ အကြောင်းအရာ၊ ခေါင်းစဉ်၊ link နဲ့ metadata တွေ ဘယ်လိုရေးနိုင်လဲဆိုတာ လေ့လာပါမယ်။',
), [
  example('basics', p('What is SEO?', 'SEO ဆိုတာ ဘာလဲ။'), p(
    'Search Engine Optimization (SEO) means improving a website so people can find it more easily through unpaid search results. A search engine discovers and reads pages (crawling), then decides which pages to add to its index (indexing). When someone searches for “what is a server”, it picks and orders relevant results from that index.',
    'Search Engine Optimization (SEO) ဆိုတာ ကြော်ငြာခ ပေးစရာမလိုတဲ့ ရှာဖွေမှုရလဒ်တွေကနေ ကိုယ့်ဝက်ဘ်ဆိုက်ကို လူတွေ ပိုလွယ်လွယ် ရှာတွေ့နိုင်အောင် ပြင်ဆင်တာပါ။ Search engine က စာမျက်နှာတွေကို ရှာပြီး ဖတ်ပါတယ်။ ဒီအဆင့်ကို crawling လို့ခေါ်ပါတယ်။ ဖတ်ပြီးရင် ရှာဖွေတဲ့အခါ ပြန်ထုတ်သုံးနိုင်ဖို့ ဘယ်စာမျက်နှာတွေကို သူ့စာရင်းထဲ ထည့်မလဲ ဆုံးဖြတ်ပါတယ်။ ဒါကို indexing လို့ခေါ်ပါတယ်။ တစ်ယောက်ယောက်က “what is a server” လို့ ရှာတဲ့အခါ အဲဒီစာရင်းထဲက ကိုက်ညီတဲ့ စာမျက်နှာတွေကို ရွေးပြီး အစဉ်လိုက် ပြပါတယ်။',
  ), `<article>
  <h2>What Is a Server? | Web Development Guide</h2>
  <p>A server responds to requests from browsers and other clients.</p>
</article>`, p(
    'This is a mock search result. The heading and short description help someone decide whether the page answers their question.',
    'ဒါက ရှာဖွေမှုရလဒ် ဘယ်လိုပုံစံရှိလဲဆိုတာ ပြထားတဲ့ နမူနာပါ။ ခေါင်းစဉ်နဲ့ စာတိုကို ဖတ်ပြီး ဒီစာမျက်နှာက ကိုယ်သိချင်တာကို ဖြေထားလားဆိုတာ ဆုံးဖြတ်နိုင်ပါတယ်။',
  )),
  example('content-and-headings', p('Answer the search and organize the page', 'ဖတ်သူ ရှာနေတဲ့အဖြေကို ပေးပြီး ခေါင်းစဉ်တွေ စီပါ'), p(
    'Start with a direct answer to the visitor’s question. Use an h1 for the main heading and h2 elements for related sections. Put the main topic where it reads naturally. Add examples or details that help the visitor understand the answer.',
    'ဖတ်သူ မေးထားတဲ့ မေးခွန်းကို အစမှာပဲ တိုက်ရိုက် ဖြေပေးပါ။ စာမျက်နှာရဲ့ အဓိကခေါင်းစဉ်ကို <h1> နဲ့ ရေးပြီး ဆက်စပ်တဲ့ အပိုင်းတွေကို <h2> နဲ့ ခွဲပါ။ ဖတ်သူ ရှာတတ်တဲ့ စကားလုံးတွေကို အကြောင်းအရာနဲ့ ကိုက်တဲ့နေရာမှာ သဘာဝကျကျ သုံးပါ။ နားလည်လွယ်ဖို့ နမူနာ ဒါမှမဟုတ် လိုတဲ့အသေးစိတ်ကို ဆက်ထည့်ပါ။',
  ), `<main>
  <h1>What Is a Server?</h1>
  <p>A server is a computer or program that responds to requests from clients.</p>

  <h2>How a Web Server Responds</h2>
  <p>When you open a website, your browser requests a page.
     The web server can respond with an HTML document.</p>
</main>`, p(
    'The first paragraph answers the question. The subheading then leads into a concrete example.',
    'ပထမစာပိုဒ်မှာ server ဆိုတာ ဘာလဲ သိရပါတယ်။ အောက်က ခေါင်းစဉ်ခွဲမှာတော့ website တစ်ခု ဖွင့်လိုက်တဲ့အခါ server ဘာလုပ်လဲဆိုတာ ဆက်ဖတ်နိုင်ပါတယ်။',
  )),
  example('head', p('Page title <title>', 'စာမျက်နှာ နာမည် <title>'), p(
    'The title names the entire HTML document and appears in the tab. Search engines can also consider it when generating the title link on a results page. Give each page a short distinct title and use a consistent visible heading so the topic is clear.',
    'title က HTML document တစ်ခုလုံးရဲ့ နာမည်ဖြစ်ပြီး browser tab မှာ ပေါ်ပါတယ်။ Search engine က ရှာဖွေမှုရလဒ်မှာ နှိပ်လို့ရတဲ့ ခေါင်းစဉ်ကို ရွေးတဲ့အခါလည်း သုံးနိုင်ပါတယ်။ Page တစ်ခုစီမှာ ခွဲသိနိုင်တဲ့ title အတိုရေးပြီး စာမျက်နှာပေါ်က heading ကိုလည်း အကြောင်းအရာ ကိုက်ညီအောင် ရေးပါ။',
  ), `<title>What Is a Server? | Web Development Guide</title>`, p('Reload and look at the browser tab. In the interactive preview, the title is printed in the preview pane. Google may use other text from the page to generate a title link.', 'Reload လုပ်ပြီး browser tab ကို ကြည့်ပါ။ Interactive preview မှာ title စာသားကို preview ထဲမှာ ပြပေးပါတယ်။ Google က ရှာဖွေမှုရလဒ်အတွက် စာမျက်နှာထဲက တခြားစာသားကိုလည်း ခေါင်းစဉ်အဖြစ် သုံးနိုင်ပါတယ်။'), headSetup),
  example('description', p('Page summary with meta description', 'Meta Description နဲ့ စာမျက်နှာ အကျဉ်းရေးခြင်း'), p(
    'A meta description gives a short summary of what is available on the page. Google may use it to generate the snippet below a result’s title, or pick text from the page that better answers the search. Write descriptions that reflect the content of each page.',
    'Meta description က စာမျက်နှာမှာ ဘာတွေ ဖတ်နိုင်မလဲဆိုတာ အတိုချုပ် ပြောပါတယ်။ Google က result ခေါင်းစဉ်အောက်က စာတိုအဖြစ် သုံးနိုင်သလို မေးထားတာနဲ့ ပိုကိုက်ညီတဲ့ စာကြောင်းကို page ထဲကနေ ယူပြနိုင်ပါတယ်။ Page တစ်ခုစီရဲ့ တကယ့်အကြောင်းအရာကို ထင်ဟပ်အောင် ရေးပါ။',
  ), `<meta name="description"
      content="Learn what a server is and how it responds to a browser request.">`, p('Inspect the head in DevTools to find the description. The interactive preview prints the tag so you can see its content.', 'DevTools မှာ <head> ကို ကြည့်ရင် description ကို တွေ့ပါမယ်။ Interactive preview မှာတော့ အထဲက စာသားကို မြင်ရအောင် tag ကို ပြပေးပါတယ်။'), headSetup),
  example('crawlable-links', p('Link to related pages with <a href>', '<a href> နဲ့ ဆက်စပ်တဲ့ စာမျက်နှာတွေကို ချိတ်ပါ'), p(
    'Once a reader understands what a server is, offer a relevant next step. Use an anchor with an href that points to a real page. Search engines can follow these links to discover other pages. Clear link text tells readers and search engines what they will find there.',
    'ဖတ်သူက server ဆိုတာ ဘာလဲ သိသွားရင် ဆက်ဖတ်လို့ရမယ့် စာမျက်နှာကို ချိတ်ပေးပါ။ <a> ရဲ့ href ထဲမှာ ဖွင့်လို့ရတဲ့ URL ထည့်ထားရင် search engine က link အတိုင်း လိုက်ပြီး အခြားစာမျက်နှာတွေကို ရှာတွေ့နိုင်ပါတယ်။ Link စာသားကို ဖတ်ရုံနဲ့ သွားမယ့်နေရာမှာ ဘာအကြောင်း ဖတ်ရမလဲ သိအောင် ရေးပါ။',
  ), `<p>See also:
  <a href="https://javascript-training.cloudninemm.com/docs/read/en/database/fundamentals/">
    Learn about databases and database servers
  </a>
</p>`, p(
    'The link text names the linked lesson. In the interactive preview, clicking the link shows its URL in the console.',
    'Link စာသားမှာ ဆက်ဖတ်ရမယ့် အကြောင်းအရာကို မြင်ရပါမယ်။ Interactive preview ထဲမှာ link နှိပ်ရင် သွားမယ့် URL ကို console မှာ ပြပေးပါတယ်။',
  )),
  example('image-alt', p('Describe meaningful images with alt text', 'အကြောင်းအရာပါတဲ့ ပုံတွေကို alt စာသားနဲ့ ဖော်ပြပါ'), p(
    'When an image explains part of the topic, use alt to describe the point the image makes in that context. It helps people who cannot see the image and helps search engines understand it. For a purely decorative image, use alt="".',
    'ပုံက သင်ခန်းစာအကြောင်းအရာကို ရှင်းပြပေးတဲ့အခါ ဒီပုံကနေ ဖတ်သူ ဘာသိရမလဲဆိုတာ alt ထဲမှာ ရေးပါ။ ပုံမမြင်ရတဲ့ ဖတ်သူတွေနဲ့ search engine တွေကို ပုံရဲ့ အကြောင်းအရာ နားလည်ဖို့ ကူညီပါတယ်။ အလှဆင်ဖို့သက်သက် ထည့်တဲ့ပုံမှာ alt="" လို့ ရေးပါ။',
  ), `<img src="https://javascript-training.cloudninemm.com/docs/media/database/what-is-a-server.webp"
     alt="Rows of server racks in a data center."
     width="320"
     height="180">`, p(
    'The photo shows server racks. Inspect the image element in DevTools to read its alt text.',
    'ပုံမှာ server rack တွေကို မြင်ရပါမယ်။ DevTools မှာ image element ကို ကြည့်ရင် alt စာသားကို ဖတ်နိုင်ပါတယ်။',
  )),
  example('viewport', p('Set the mobile viewport', 'ဖုန်းအတွက် Viewport သတ်မှတ်ခြင်း'), p(
    'The viewport is the area in which the browser displays the page. The device-width setting helps mobile browsers lay out this page at the actual device width. This metadata supports responsive design and applies when a visitor opens the page.',
    'Viewport က browser ထဲမှာ စာမျက်နှာပြတဲ့ နေရာပါ။ device-width ကြောင့် ဖုန်း browser က ဖုန်းရဲ့ အကျယ်အတိုင်း စာမျက်နှာ စီနိုင်ပါတယ်။ ဒီ metadata က responsive design အတွက် အသုံးဝင်ပြီး ဝင်ဖတ်သူ ဖွင့်တဲ့အခါ သက်ရောက်ပါတယ်။',
  ), '<meta name="viewport" content="width=device-width, initial-scale=1">', p('The tag is in head. On a phone or in the device toolbar, the layout can use the phone’s viewport width.', 'Tag က head ထဲမှာ ရှိပါတယ်။ ဖုန်းနဲ့ ဖွင့်ရင် ဒါမှမဟုတ် device toolbar မှာ ကြည့်ရင် layout က ဖုန်းမြင်ကွင်းအကျယ်ကို သုံးနိုင်ပါတယ်။'), headSetup),
  example('canonical', p('Preferred URL with rel="canonical"', 'rel="canonical" နဲ့ ဦးစားပေး URL သတ်မှတ်ခြင်း'), p(
    'If several URLs show equivalent content, a canonical link signals the preferred URL to a search engine. It can evaluate other signals too, such as internal links and a sitemap. Put the canonical link in head and use the preferred URL consistently in those other places.',
    'URL အများကြီးမှာ အကြောင်းအရာတူနေရင် canonical link နဲ့ ဘယ် URL ကို ဦးစားပေးချင်လဲ search engine ကို ပြောပါတယ်။ Search engine က site ထဲက links နဲ့ sitemap လို တခြားအချက်တွေကိုပါ ကြည့်နိုင်ပါတယ်။ canonical link ကို head ထဲ ထည့်ပြီး အဲဒီ ဦးစားပေး URL ကို site ထဲက links နဲ့ sitemap မှာလည်း တူတူ သုံးပါ။',
  ), `<link rel="canonical" href="https://example.com/guides/what-is-a-server">`, p(
    'If /guides/what-is-a-server and /guides/what-is-a-server?ref=home show the same content, both can signal the URL without ?ref=home as preferred. The visitor’s address bar stays on the URL they opened.',
    '/guides/what-is-a-server နဲ့ /guides/what-is-a-server?ref=home မှာ အကြောင်းအရာတူရင် နှစ်ခုလုံးက ?ref=home မပါတဲ့ URL ကို ဦးစားပေးဖို့ ညွှန်းနိုင်ပါတယ်။ Browser ရဲ့ address bar မှာတော့ ဖတ်သူ ဖွင့်ခဲ့တဲ့ URL ကိုပဲ မြင်ရပါမယ်။',
  ), headSetup),
], [
  ['Google Search Central · SEO Starter Guide', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'],
  ['Google Search Central · Title links', 'https://developers.google.com/search/docs/appearance/title-link'],
  ['Google Search Central · Snippets', 'https://developers.google.com/search/docs/appearance/snippet'],
  ['Google Search Central · Crawlable links', 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable'],
  ['Google Search Central · Image SEO', 'https://developers.google.com/search/docs/appearance/google-images'],
  ['Google Search Central · Canonical URLs', 'https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls'],
]);

export const htmlGuide = guide('html', 'HTML', 'HTML Living Standard', p(
  'Start with a document and its text, then work through links, images, semantic regions, forms, and interactive elements. Each topic explains how the browser handles it and includes code you can try.',
  'Document ဖွဲ့စည်းပုံနဲ့ စာသားက စပြီး links၊ ပုံတွေ၊ semantic regions၊ forms နဲ့ interactive elements တွေကို ဆက်လေ့လာပါ။ ခေါင်းစဉ်တစ်ခုစီမှာ browser က ဘယ်လို ကိုင်တွယ်လဲဆိုတာနဲ့ စမ်းလို့ရတဲ့ code ပါပါတယ်။',
), [...htmlFoundations, ...htmlAttributes, ...extraFormLessons, links, buttons, lists, disclosure, images, media, tables, accessibility, forms, controls, validation, dialogs, popovers, seo]);
