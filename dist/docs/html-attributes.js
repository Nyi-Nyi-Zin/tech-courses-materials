import { htmlSpec } from './examples.js';
import { browserDemo as demo, lesson, mdnSource as mdn } from './lesson-example.js';

const standardAttributes = lesson('standard-attributes',
  'Standard HTML Attributes', 'Standard HTML Attributes',
  'In HTML Document Structure, you saw how lang="en" describes a paragraph’s language. The HTML Standard defines attributes like lang and href, including which elements accept them and what their values mean.',
  'HTML Document Structure မှာ lang="en" နဲ့ စာပိုဒ်ရဲ့ ဘာသာစကား သတ်မှတ်ပုံကို တွေ့ခဲ့ပါတယ်။ HTML Standard က lang၊ href လို attribute တွေကို ဘယ် element တွေမှာ သုံးလို့ရလဲ၊ တန်ဖိုးတွေက ဘာကိုဆိုလိုလဲဆိုတာ သတ်မှတ်ပေးပါတယ်။',
  [
    demo('attribute-scope', 'Global and Element-Specific Attributes', 'Global Attributes နဲ့ Element-Specific Attributes',
      'Standard attribute is a general label for an attribute defined by the HTML Standard. It includes global attributes such as id and element-specific attributes such as href. Here id identifies an element, while href on the link supplies its destination. href also has defined uses on other elements such as <link>.',
      'Standard attribute ဆိုတာ HTML Standard မှာ သတ်မှတ်ထားတဲ့ attribute တွေကို ခေါ်တဲ့ ယေဘုယျအသုံးအနှုန်းပါ။ id လို Global Attributes နဲ့ href လို သက်ဆိုင်ရာ element တွေမှာ သုံးရတဲ့ Element-Specific Attributes နှစ်မျိုးလုံး ပါဝင်ပါတယ်။ ဒီနမူနာမှာ id က element တစ်ခုကို သတ်မှတ်ပေးပြီး <a> ထဲက href က link ရဲ့ သွားမယ့်နေရာကို သတ်မှတ်ပေးပါတယ်။ href ကို <link> လို တခြား element တွေမှာလည်း သတ်မှတ်ထားတဲ့အတိုင်း သုံးနိုင်ပါတယ်။',
      'Click Contact details. The browser moves to the section whose id is contact.',
      'Contact details link ကို နှိပ်ရင် id က contact ဖြစ်တဲ့ အပိုင်းဆီကို Browser က ရွှေ့ပေးပါမယ်။',
      `  <a id="contact-link" href="#contact">Contact details</a>
  <h2 id="contact">Contact</h2>
  <p>Email us for more information.</p>`,
      { css: '    h2:target, h2:focus { outline: 2px solid teal; }' }),
    demo('image-attributes', 'Image Source and Alternative Text', 'ပုံရဲ့ src နဲ့ alt Attributes',
      'The <img> element uses src for the image address and alt for a text alternative. These attributes have defined purposes on <img>. Check the attribute reference when you want to know which attributes an element supports.',
      '<img> မှာ src က ပုံရဲ့ လိပ်စာဖြစ်ပြီး alt က ပုံအစား အသုံးပြုနိုင်တဲ့ စာသားပါ။ <img> အတွက် attribute တစ်ခုစီမှာ သတ်မှတ်ထားတဲ့ တာဝန်ရှိပါတယ်။ Element တစ်ခုမှာ ဘယ် attributes တွေ သုံးလို့ရလဲ သိချင်ရင် HTML attribute reference မှာ ရှာကြည့်နိုင်ပါတယ်။',
      'The image shows rows of server racks. Change one character in the source address and run again to see the alternative text when the image fails to load.',
      'ပုံမှာ server rack တွေကို အတန်းလိုက် မြင်ရပါမယ်။ src လိပ်စာထဲက စာလုံးတစ်လုံး ပြောင်းပြီး ထပ် Run ကြည့်ပါ။ ပုံဖွင့်မရတဲ့အခါ alt စာသား ပေါ်လာပါမယ်။',
      `  <img src="https://javascript-training.cloudninemm.com/docs/media/database/what-is-a-server.webp"
       alt="Rows of server racks" width="320" height="180">`),
    demo('boolean-attributes', 'Boolean Attributes', 'Boolean Attributes',
      'Some attributes turn a setting on when they are present. When disabled is present on a button, the browser disables it. Remove the attribute to enable the button.',
      'Attribute တချို့က tag ထဲမှာ ပါတာနဲ့ သက်ဆိုင်ရာ setting ကို ဖွင့်ပေးပါတယ်။ Button မှာ disabled ပါရင် Browser က အဲဒီခလုတ်ကို နှိပ်မရအောင် လုပ်ပေးပါတယ်။ ပြန်နှိပ်လို့ရစေချင်ရင် disabled ကို ဖယ်ပါ။',
      'The first button is disabled. Remove disabled and run the example again to enable it.',
      'ပထမခလုတ်က နှိပ်လို့မရပါဘူး။ disabled ကို ဖယ်ပြီး ထပ် Run ကြည့်ရင် ပြန်နှိပ်လို့ရပါမယ်။',
      `  <button type="button" disabled>Register</button>
  <button type="button">Check schedule</button>`),
  ], [
    mdn('HTML attribute reference', 'Web/HTML/Reference/Attributes'),
    ['WHATWG · HTML attributes index', htmlSpec + 'indices.html#attributes-3'],
  ]);

const globalAttributes = lesson('global-attributes',
  'Global Attributes', 'Global Attributes',
  'The previous lesson used id on a link and on a heading. That works because id is a global attribute. Global attributes can be written on any HTML element. The result depends on what the attribute does and where it is used.',
  'ရှေ့သင်ခန်းစာမှာ id ကို link မှာရော ခေါင်းစဉ်မှာပါ သုံးခဲ့ပါတယ်။ id က Global Attribute ဖြစ်လို့ HTML element အားလုံးမှာ ထည့်ရေးလို့ရပါတယ်။ ဘာသက်ရောက်မှုရှိမလဲဆိုတာက attribute ရဲ့ တာဝန်နဲ့ သုံးထားတဲ့ နေရာပေါ် မူတည်ပါတယ်။',
  [
    demo('id', 'Identify One Element with id', 'id နဲ့ Element တစ်ခုကို သတ်မှတ်ခြင်း',
      'Give each id a unique value on the page. In this example, the link uses #schedule to find the heading with id="schedule".',
      'စာမျက်နှာတစ်ခုထဲမှာ id တန်ဖိုးတစ်ခုကို element တစ်ခုအတွက်ပဲ သုံးပါ။ ဒီနမူနာမှာ link က #schedule ကို သုံးပြီး id="schedule" လို့ ရေးထားတဲ့ ခေါင်းစဉ်ဆီ သွားပါတယ်။',
      'Click Jump to schedule to move to the Class Schedule heading.',
      'Jump to schedule ကို နှိပ်လိုက်ရင် Class Schedule ခေါင်းစဉ်ဆီ ရွှေ့ပေးပါမယ်။',
      `  <a href="#schedule">Jump to schedule</a>
  <h1>Learning Center</h1>
  <p>Registration opens on Monday.</p>
  <h2 id="schedule">Class Schedule</h2>
  <p>Classes begin at 10:00 AM.</p>`,
      { css: '    h2:target, h2:focus { outline: 2px solid teal; }' }),
    demo('class', 'Share a Class Across Elements', 'Element အများကြီးမှာ class တစ်ခုတည်း သုံးခြင်း',
      'Several elements can use the same class. A CSS selector such as .notice can style every element that has the notice class.',
      'Element အများကြီးကို class နာမည်တစ်ခုတည်း ပေးလို့ရပါတယ်။ .notice လို CSS selector နဲ့ notice class ပါတဲ့ element အားလုံးကို တစ်ပုံစံတည်း ပြင်နိုင်ပါတယ်။',
      'The two notices are teal. Add class="notice" to the last paragraph to give it the same color.',
      'အသိပေးစာနှစ်ကြောင်း စိမ်းပြာရောင်နဲ့ ပေါ်ပါမယ်။ နောက်ဆုံးစာပိုဒ်ကိုပါ အရောင်တူစေချင်ရင် class="notice" ထည့်ကြည့်ပါ။',
      `  <p class="notice">Registration opens on Monday.</p>
  <p class="notice">Bring a notebook.</p>
  <p>Room 2 is on the first floor.</p>`,
      { css: '    .notice { color: teal; }' }),
    demo('style', 'Apply CSS Directly with style', 'style နဲ့ CSS ကို တိုက်ရိုက် သတ်မှတ်ခြင်း',
      'The style attribute applies CSS directly to the element it is written on. To reuse a style across several elements, use a class like the one in the previous example.',
      'style attribute ထဲက CSS က အဲဒီ attribute ထည့်ထားတဲ့ element ပေါ်မှာ သက်ရောက်ပါတယ်။ Element အများကြီးကို ပုံစံတူ ပြင်ချင်ရင် အပေါ်နမူနာကလို class သုံးနိုင်ပါတယ်။',
      'The first paragraph is teal. Change teal to navy and run again.',
      'ပထမစာပိုဒ် စိမ်းပြာရောင်နဲ့ ပေါ်ပါမယ်။ teal ကို navy ပြောင်းပြီး ထပ် Run ကြည့်ပါ။',
      `  <p style="color: teal;">Registration is open.</p>
  <p>Classes begin at 10:00 AM.</p>`),
    demo('title', 'Add Supplementary Information with title', 'title နဲ့ ထပ်ဆောင်း အချက်အလက်ပေးခြင်း',
      'The title attribute adds supplementary information about an element. A desktop browser may show it as a tooltip when you point at the element. Put essential information in the visible text so people using touchscreens and keyboards can read it too.',
      'title attribute က element တစ်ခုအကြောင်း အချက်အလက် ထပ်ပေးပါတယ်။ Desktop Browser မှာ mouse နဲ့ ထောက်ထားရင် tooltip ပေါ်နိုင်ပါတယ်။ အရေးကြီးတဲ့ အချက်အလက်ကို မြင်ရတဲ့ စာသားထဲမှာ ရေးထားရင် ဖုန်းနဲ့ Keyboard သုံးသူတွေလည်း ဖတ်နိုင်ပါတယ်။',
      'On a desktop browser, point at the text to see the supplementary note.',
      'Desktop Browser မှာ စာသားပေါ် mouse ထောက်ပြီး ခဏစောင့်ရင် ထပ်ဆောင်းမှတ်ချက်ကို မြင်နိုင်ပါတယ်။',
      `  <p title="Last reviewed on Monday">The class begins at 10:00 AM.</p>`),
    demo('lang', 'Declare the Language with lang', 'lang နဲ့ ဘာသာစကား သတ်မှတ်ခြင်း',
      'Set lang on <html> to declare the default language. If part of the page uses a different language or regional variant, set lang on that element. In this example, the document uses en and the notice is marked en-GB for British English. Assistive tools can use this information when reading text aloud.',
      '<html> မှာ lang ထည့်ပြီး စာမျက်နှာရဲ့ မူလဘာသာစကားကို သတ်မှတ်ပါ။ စာမျက်နှာရဲ့ အပိုင်းတစ်ခုက တခြားဘာသာစကား ဒါမှမဟုတ် ဒေသသုံး ဘာသာစကားပုံစံဖြစ်ရင် အဲဒီ element မှာ lang ထည့်လို့ရပါတယ်။ ဒီနမူနာမှာ စာမျက်နှာက en သုံးပြီး အသိပေးစာထဲက British English ကို en-GB လို့ သတ်မှတ်ထားပါတယ်။ Screen reader လို ကိရိယာတွေက အသံထွက်ဖတ်တဲ့အခါ ဒီအချက်အလက်ကို သုံးနိုင်ပါတယ်။',
      'The notice is visible. Look at the opening <html> and <p> tags in the code to see the two language settings.',
      'အသိပေးစာ ပေါ်ပါမယ်။ Code ထဲက <html> နဲ့ <p> အဖွင့် tag တွေကို ကြည့်ပြီး lang သတ်မှတ်ချက် နှစ်ခုကို လိုက်ကြည့်ပါ။',
      `  <p lang="en-GB">The centre opens at 9:00 AM.</p>`),
    demo('hidden', 'Hide Content with hidden', 'hidden နဲ့ အကြောင်းအရာကို ဖျောက်ခြင်း',
      'Use hidden when a piece of content should be hidden from the current page view. Remove the attribute to display it again.',
      'လက်ရှိ စာမျက်နှာမှာ မပြသေးချင်တဲ့ အကြောင်းအရာကို hidden နဲ့ ဖျောက်ထားနိုင်ပါတယ်။ ပြန်ပြချင်ရင် attribute ကို ဖယ်ပါ။',
      'Only the first paragraph appears. Delete hidden from the second paragraph and run again to show it.',
      'ပထမစာပိုဒ်ပဲ ပေါ်ပါမယ်။ ဒုတိယစာပိုဒ်က hidden ကို ဖယ်ပြီး ထပ် Run ကြည့်ရင် အဲဒီစာပိုဒ်ပါ ပေါ်လာပါမယ်။',
      `  <p>Registration is open.</p>
  <p hidden>Seat assignments will appear here.</p>`),
    demo('data-attributes', 'Store Page Data with data-*', 'data-* နဲ့ စာမျက်နှာအတွက် Data သိမ်းခြင်း',
      'Use a data-* attribute to attach a value for your page’s code to read. Here the attribute data-course-id holds HTML101. JavaScript reads that value with dataset.courseId.',
      'စာမျက်နှာရဲ့ code က ပြန်ဖတ်နိုင်ဖို့ data-* attribute နဲ့ element မှာ တန်ဖိုးတစ်ခု တွဲထားနိုင်ပါတယ်။ ဒီနမူနာမှာ data-course-id က HTML101 ကို သိမ်းပြီး JavaScript က dataset.courseId နဲ့ ပြန်ဖတ်ပါတယ်။',
      'Click Show course ID to display Course ID: HTML101. Change the value in data-course-id and try again.',
      'Show course ID ကို နှိပ်ကြည့်ရင် Course ID: HTML101 လို့ ပေါ်ပါမယ်။ data-course-id ထဲက တန်ဖိုးကို ပြောင်းပြီး ထပ်စမ်းကြည့်ပါ။',
      `  <button type="button" id="course" data-course-id="HTML101">Show course ID</button>
  <p id="result" aria-live="polite"></p>`,
      { script: `    const course = document.querySelector("#course");
    const result = document.querySelector("#result");

    course.addEventListener("click", () => {
      result.textContent = "Course ID: " + course.dataset.courseId;
    });` }),
    demo('tabindex', 'Include an Element in Tab Navigation with tabindex', 'tabindex နဲ့ Tab နှိပ်လို့ ရောက်နိုင်အောင် သတ်မှတ်ခြင်း',
      'tabindex="0" allows an element to receive keyboard focus in the page’s natural tab order. Buttons and links with href already receive keyboard focus by default.',
      'tabindex="0" ထည့်ထားတဲ့ element ဆီကို စာမျက်နှာရဲ့ ပုံမှန်အစီအစဉ်အတိုင်း Tab နှိပ်ပြီး ရောက်နိုင်ပါတယ်။ Button တွေနဲ့ href ပါတဲ့ link တွေကတော့ ပုံမှန်အားဖြင့် Tab နဲ့ ရောက်ပြီးသားပါ။',
      'Tab to the Start button, then press Tab again. Focus moves to the paragraph, and the next Tab moves to Continue.',
      'Tab နှိပ်ပြီး Start ခလုတ်ဆီ ရောက်တဲ့အခါ Tab ထပ်နှိပ်ကြည့်ပါ။ Keyboard focus က စာပိုဒ်ဆီ ရောက်ပြီး Tab ထပ်နှိပ်ရင် Continue ခလုတ်ဆီ ရောက်ပါမယ်။',
      `  <button type="button">Start</button>
  <p tabindex="0">Read the class schedule.</p>
  <button type="button">Continue</button>`,
      { css: '    :focus-visible { outline: 2px solid teal; }' }),
  ], [
    mdn('Global attributes', 'Web/HTML/Reference/Global_attributes'),
    ['WHATWG · Global attributes', htmlSpec + 'dom.html#global-attributes'],
  ]);

export const htmlAttributes = [standardAttributes, globalAttributes];
