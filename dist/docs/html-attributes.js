import { browserDemo as demo, lesson, mdnSource as mdn } from './lesson-example.js';

export const htmlAttributes = lesson('attributes',
  'HTML Attributes', 'HTML Attributes',
  'An attribute in an opening tag gives an HTML element extra information or changes how it works. Standard attributes are the ones defined by the HTML Standard. These include global attributes and attributes that apply to specific elements.',
  'HTML element တစ်ခုရဲ့ အချက်အလက် ထပ်ဖြည့်ဖို့ ဒါမှမဟုတ် လုပ်ဆောင်ပုံ သတ်မှတ်ဖို့ အဖွင့် tag ထဲမှာ attribute ထည့်ရေးပါတယ်။ Standard Attributes ဆိုတာ HTML Standard က သတ်မှတ်ထားတဲ့ attribute တွေပါ။ အဲဒီထဲမှာ Global Attributes ရော သက်ဆိုင်ရာ element တွေမှာပဲ သုံးလို့ရတဲ့ attribute တွေရော ပါပါတယ်။',
  [
    demo('attribute-scope', 'How Attributes Work', 'Attribute တွေ အလုပ်လုပ်ပုံ',
      'Global attributes such as id and class can be used on any HTML element. Use a unique id for each element you want to identify and reuse a class to style multiple elements. Other attributes apply to specific elements. On an <a> element, href sets the link destination. On an <img> element, src sets the image address and alt provides a text alternative.',
      'id နဲ့ class လို Global Attributes တွေကို HTML element အားလုံးမှာ သုံးလို့ရပါတယ်။ id တန်ဖိုးတစ်ခုကို စာမျက်နှာတစ်ခုထဲမှာ element တစ်ခုအတွက်ပဲ သုံးပါ။ Element အများကြီးကို CSS နဲ့ ပုံစံတူ ပြင်ချင်ရင် class တစ်ခုတည်းကို ပြန်သုံးလို့ရပါတယ်။ တချို့ attribute တွေကိုတော့ သက်ဆိုင်ရာ element တွေမှာပဲ သုံးရပါတယ်။ <a> မှာ href က link ရဲ့ သွားမယ့်နေရာကို သတ်မှတ်ပါတယ်။ <img> မှာ src က ပုံရဲ့ လိပ်စာဖြစ်ပြီး alt က ပုံနေရာမှာ ဖတ်လို့ရမယ့် စာသားပါ။',
      'The link and heading are teal because both use class="highlight". Click View schedule to jump to the heading whose id matches the link’s href.',
      'Link နဲ့ ခေါင်းစဉ် နှစ်ခုလုံးမှာ class="highlight" ပါလို့ စိမ်းပြာရောင် ပေါ်ပါတယ်။ View schedule ကို နှိပ်ရင် link ရဲ့ href ထဲက #schedule နဲ့ ကိုက်ညီတဲ့ id="schedule" ရှိတဲ့ ခေါင်းစဉ်ဆီ ရောက်ပါမယ်။',
      `  <a class="highlight" href="#schedule">View schedule</a>
  <h2 id="schedule" class="highlight">Schedule</h2>
  <p>Classes begin at 10:00 AM.</p>`,
      { css: '    .highlight { color: teal; }\n    h2:target { outline: 2px solid teal; }' }),
  ], [
    mdn('HTML attribute reference', 'Web/HTML/Reference/Attributes'),
    mdn('Global attributes', 'Web/HTML/Reference/Global_attributes'),
  ]);
