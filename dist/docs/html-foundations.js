import { p, page, part } from './content.js';
import { demoPage, example, htmlSpec, mdn, standalone } from './examples.js';

const introSource = ['MDN · Basic HTML syntax', mdn + 'Learn_web_development/Core/Structuring_content/Basic_HTML_syntax'];

const documentExample = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Learning Center</title>
  </head>
  <body>
    <p>Welcome to the Learning Center!</p>
  </body>
</html>`;

export const htmlFoundations = [
  page('introduction', p('Introduction to HTML', 'HTML မိတ်ဆက်'), p(
    'In Web Fundamentals, you saw how a browser receives HTML from a web server. Now look at what that HTML tells the browser and how a few tags turn text into a web page.',
    'Web Fundamentals မှာ Web Server က Browser ဆီ HTML ပြန်ပို့ပုံကို ကြည့်ခဲ့ပါတယ်။ အခု HTML ထဲမှာ ဘာတွေရေးထားလဲ၊ tag အနည်းငယ်နဲ့ စာသားတွေကို web page တစ်ခုအဖြစ် ဘယ်လိုဖွဲ့စည်းလဲဆိုတာ ကြည့်ရအောင်။',
  ), [
    example('what-is-html', p('What is HTML?', 'HTML ဆိုတာ ဘာလဲ?'), p(
      'HTML stands for HyperText Markup Language. It describes the structure and meaning of a web page. Markup uses tags to label what a piece of content is. In this example, <h1> marks the main heading and <p> marks a paragraph.',
      'HTML ရဲ့ အရှည်ကောက်က HyperText Markup Language ပါ။ Web page တစ်ခုမှာ ဘာတွေပါလဲ၊ အဲဒီအကြောင်းအရာတွေက ဘာကို ဆိုလိုလဲဆိုတာ HTML နဲ့ ဖော်ပြပါတယ်။ Markup ဆိုတာ အကြောင်းအရာတစ်ခုစီကို tag နဲ့ မှတ်သားရေးတာပါ။ ဒီနမူနာမှာ <h1> က စာမျက်နှာရဲ့ အဓိကခေါင်းစဉ်၊ <p> က စာပိုဒ်ဖြစ်ကြောင်း Browser ကို ပြောပေးပါတယ်။',
    ), `<h1>Learning Center</h1>
<p>Registration opens on Monday.</p>`, p(
      'Run the example. The browser displays Learning Center as the main heading and the registration notice below it as a paragraph.',
      'နမူနာကို Run ကြည့်ပါ။ Learning Center က အဓိကခေါင်းစဉ်အဖြစ် ပေါ်ပြီး စာရင်းသွင်းရက်အကြောင်းက အောက်မှာ စာပိုဒ်အဖြစ် ပေါ်ပါမယ်။',
    ), null),
    example('hypertext', p('What does hypertext mean?', 'HyperText ဆိုတာ ဘာလဲ?'), p(
      'Hypertext is text that contains links to other pages or to another part of the same page. In HTML, an <a> element creates a link, and href tells the browser where to go when you click it.',
      'HyperText ဆိုတာ တခြားစာမျက်နှာ ဒါမှမဟုတ် လက်ရှိစာမျက်နှာထဲက တခြားအပိုင်းဆီ သွားလို့ရတဲ့ link ပါဝင်တဲ့ စာသားကို ဆိုလိုပါတယ်။ HTML မှာ <a> နဲ့ link ရေးပြီး နှိပ်လိုက်ရင် ဘယ်ဆီသွားရမလဲဆိုတာ href ထဲမှာ ထည့်ပေးပါတယ်။',
    ), `<a href="https://example.com/">Visit Example Domain</a>`, p(
      'The browser displays Visit Example Domain as a link. Its destination is https://example.com/.',
      'Browser မှာ Visit Example Domain ဆိုတဲ့ စာသားက link အဖြစ် ပေါ်ပါမယ်။ Link ရဲ့ သွားမယ့်လိပ်စာက https://example.com/ ပါ။',
    ), null),
    example('html-css-javascript', p('How HTML, CSS, and JavaScript work together', 'HTML၊ CSS နဲ့ JavaScript တွဲပြီး အလုပ်လုပ်ပုံ'), p(
      'On the Learning Center page, HTML supplies the heading, the button, and the notice text. CSS gives the heading its color. When you click the button, JavaScript reveals the notice. In the next lesson, you will save a page as index.html and open it in your browser.',
      'Learning Center စာမျက်နှာမှာ ခေါင်းစဉ်၊ ခလုတ်နဲ့ အသိပေးစာကို HTML နဲ့ ရေးပါတယ်။ ခေါင်းစဉ်ရဲ့ အရောင်ကို CSS နဲ့ သတ်မှတ်ပါတယ်။ ခလုတ်နှိပ်တဲ့အခါ အသိပေးစာကို JavaScript က ဖွင့်ပြပါတယ်။ နောက်သင်ခန်းစာမှာ စာမျက်နှာတစ်ခုကို index.html အဖြစ် သိမ်းပြီး Browser နဲ့ ဖွင့်ကြည့်ပါမယ်။',
    ), demoPage('Learning Center', `  <h1>Learning Center</h1>
  <button type="button" id="show-notice">Show notice</button>
  <p id="notice" hidden>Registration opens on Monday.</p>`, '    h1 { color: teal; }', `    document.querySelector("#show-notice").addEventListener("click", () => {
      document.querySelector("#notice").hidden = false;
    });`), p(
      'The heading is teal. Click Show notice and the registration notice appears below the button.',
      'ခေါင်းစဉ်က စိမ်းပြာရောင်နဲ့ ပေါ်ပါမယ်။ Show notice ခလုတ်ကို နှိပ်လိုက်ရင် စာရင်းသွင်းရက်အကြောင်း ခလုတ်အောက်မှာ ပေါ်လာပါမယ်။',
    ), null),
  ], [
    ['MDN · HTML overview', mdn + 'Web/HTML'],
    introSource,
    ['WHATWG · HTML introduction', htmlSpec + 'introduction.html'],
  ]),

  page('getting-started', p('Create Your First HTML Page', 'ပထမဆုံး HTML စာမျက်နှာ ဖန်တီးခြင်း'), p(
    'A web page is something you can open and read in a browser such as Chrome or Firefox. A browser can open a page from a file on your computer. HTML (HyperText Markup Language) is how we describe the content and structure of that page.',
    'Web page ဆိုတာ Chrome၊ Firefox လို browser မှာ ဖွင့်ဖတ်လို့ရတဲ့ စာမျက်နှာပါ။ ကိုယ့်စက်ထဲက ဖိုင်တစ်ခုကိုလည်း browser နဲ့ ဖွင့်ကြည့်လို့ရပါတယ်။ HTML (HyperText Markup Language) က အဲဒီစာမျက်နှာမှာ ဘာအကြောင်းအရာတွေ ပါပြီး ဘယ်လိုဖွဲ့ထားလဲ ရေးဖော်ပြတဲ့ ဘာသာစကားပါ။',
  ), [
    example('first-page', p('Save and open index.html', 'index.html ဖိုင်ကို သိမ်းပြီး ဖွင့်ခြင်း'), p(
      'A file extension is the part after the final dot in a file name. The .html extension identifies an HTML file. Use a text editor such as VS Code to write it, and a browser to see the result.',
      'ဖိုင်နာမည်ရဲ့ နောက်ဆုံးအစက်နောက်က အပိုင်းကို file extension လို့ခေါ်ပါတယ်။ .html ဆိုရင် HTML ဖိုင်ဖြစ်ပါတယ်။ VS Code လို text editor နဲ့ ရေးပြီး browser နဲ့ ရလဒ်ကြည့်ပါ။',
    ), 'Welcome to the learning center!', p('The browser shows “Welcome to the learning center!” on the page.', 'Browser ထဲက စာမျက်နှာမှာ “Welcome to the learning center!” လို့ ပေါ်ပါမယ်။'), p(
      'Create a folder called learning-center. In the editor make a new file, type the line below, and save it inside learning-center as index.html. Double-click the saved file, or open it from your browser.',
      'learning-center လို့ folder တစ်ခုလုပ်ပါ။ Editor မှာ ဖိုင်အသစ်ဖွင့်ပြီး အောက်က စာကြောင်းရေးပါ။ learning-center folder ထဲမှာ index.html နာမည်နဲ့ သိမ်းပါ။ သိမ်းထားတဲ့ဖိုင်ကို နှစ်ချက်နှိပ်ဖွင့်ပါ။ Browser ထဲကနေလည်း ဖိုင်ကို ရွေးဖွင့်နိုင်ပါတယ်။',
    ), p('Check the actual filename if the browser opens a download or another app opens the file. Some editors append .txt. The file should be index.html.', 'File download ဖြစ်တာ ဒါမှမဟုတ် တခြား app နဲ့ ပွင့်တာဆိုရင် ဖိုင်နာမည်အပြည့်အစုံကို စစ်ပါ။ Editor တချို့က .txt ထပ်ထည့်တတ်ပါတယ်။ index.html ဖြစ်ရပါမယ်။')),
    part('reload', p('Edit, save, and reload', 'ပြင်ခြင်း၊ သိမ်းခြင်းနဲ့ Reload လုပ်ခြင်း'), p(
      'In the editor, change “learning center” to “community center” and save. In the browser press Ctrl+R (Windows or Linux) or Command+R (Mac). Reload asks the browser to read the page again. You should now see “Welcome to the community center!”.',
      'Editor ထဲမှာ “learning center” ကို “community center” လို့ ပြင်ပြီး သိမ်းပါ။ Browser မှာ Windows သို့မဟုတ် Linux ဆို Ctrl+R၊ Mac ဆို Command+R နှိပ်ပါ။ Reload လုပ်တာက browser ကို စာမျက်နှာ ပြန်ဖတ်ခိုင်းတာပါ။ “Welcome to the community center!” လို့ ပြောင်းသွားပါမယ်။',
    ), `Welcome to the community center!`),
  ], [['MDN · Creating your first website', mdn + 'Learn_web_development/Getting_started/Your_first_website']]),

  page('structure', p('HTML Document Structure', 'HTML Document ဖွဲ့စည်းပုံ'), p(
    'An HTML document is the code for one page. Before reading the whole file, learn how HTML describes one piece of content and how pieces fit inside each other. Then put them together in the index.html you made in the previous lesson.',
    'HTML document ဆိုတာ စာမျက်နှာတစ်ခုအတွက် ရေးထားတဲ့ code ပါ။ ဖိုင်တစ်ခုလုံး မကြည့်ခင် အကြောင်းအရာတစ်ခုကို HTML နဲ့ ဘယ်လို မှတ်သားရေးလဲ၊ တစ်ခုထဲမှာ နောက်တစ်ခုကို ဘယ်လိုထည့်လဲဆိုတာ ကြည့်ပါမယ်။ ပြီးမှ ရှေ့သင်ခန်းစာမှာ ဖန်တီးထားတဲ့ index.html ဖိုင်ထဲမှာ အားလုံး တွဲစမ်းပါမယ်။',
  ), [
    example('tag', p('HTML Tags', 'HTML Tag ဆိုတာ ဘာလဲ?'), p(
      'A tag is a marker in the HTML code. It uses angle brackets. In <p>, p is the name of the tag and starts a paragraph. In </p>, the slash marks the end. The browser uses these markers when reading the file.',
      'Tag ဆိုတာ HTML code ထဲမှာ အကြောင်းအရာကို မှတ်သားဖို့ သုံးတဲ့ အမှတ်အသားပါ။ < နဲ့ > ကြားမှာ ရေးပါတယ်။ <p> မှာ p က tag နာမည်ပါ။ စာပိုဒ် စတယ်လို့ ပြောတာပါ။ </p> မှာ / ပါလာရင် စာပိုဒ် ဆုံးတယ်လို့ ပြောတာပါ။',
    ), '<p>Your page is ready.</p>', p('The page shows “Your page is ready.” as a paragraph.', 'စာမျက်နှာမှာ “Your page is ready.” ဆိုတဲ့ စာပိုဒ် ပေါ်ပါမယ်။'), p('Replace the first line you wrote in index.html with this line, save, and reload.', 'ရှေ့မှာ index.html ထဲ ရေးထားတဲ့ စာကြောင်းအစား ဒီစာကြောင်းကို ထည့်ပါ။ သိမ်းပြီး reload လုပ်ပါ။')),
    example('elements', p('HTML Elements', 'HTML Element ဆိုတာ ဘာလဲ?'), p(
      'An element is a piece of the page with a purpose. Here the paragraph element consists of the opening tag <p>, the text “Registration is open.”, and the closing tag </p>. The <hr> element marks a break between topics. It is a void element, so it has neither content nor a closing tag.',
      'Element ဆိုတာ စာမျက်နှာထဲက အစိတ်အပိုင်းတစ်ခုပါ။ ဒီနမူနာမှာ အဖွင့် tag <p>၊ “Registration is open.” ဆိုတဲ့ စာသားနဲ့ အပိတ် tag </p> ပေါင်းပြီး paragraph element တစ်ခု ဖြစ်ပါတယ်။ <hr> က အကြောင်းအရာနှစ်ပိုင်းကြား ခွဲပေးပါတယ်။ <hr> က void element ဖြစ်လို့ အထဲမှာ content မပါသလို အပိတ် tag လည်း မရေးရပါဘူး။',
    ), `<!-- Paragraph element: opening tag, text, and closing tag -->
<p>Registration is open.</p>

<!-- Void element: a break between topics -->
<hr>
<p>Classes start on Monday.</p>`, p('The browser usually displays a horizontal line between the paragraphs.', 'Browser မှာ ပုံမှန်အားဖြင့် စာပိုဒ်နှစ်ခုကြား အလျားလိုက် မျဉ်းတစ်ကြောင်း ပေါ်ပါမယ်။'), null),
    example('attribute', p('HTML Attributes', 'HTML Attribute ဆိုတာ ဘာလဲ?'), p(
      'An attribute gives the browser extra information about an element. Write it after the tag name in the start tag. Here lang is the attribute name and "en" is its value. It identifies the paragraph language as English.',
      'Attribute ဆိုတာ element အကြောင်း အချက်အလက် ထပ်ဖြည့်ပေးတာပါ။ အဖွင့် tag ထဲမှာ tag နာမည်နောက်ကနေ ရေးပါတယ်။ ဒီမှာ lang က attribute နာမည်ဖြစ်ပြီး "en" က တန်ဖိုးပါ။ ဒီစာပိုဒ်ကို English လို့ သတ်မှတ်ပေးတာပါ။',
    ), '<p lang="en">Your page is ready.</p>', p('The text still reads “Your page is ready.”. The language information belongs to the element.', '“Your page is ready.” လို့ ဆက်မြင်ရပါမယ်။ ဘာသာစကားအချက်အလက်က ဒီ element အတွက် သတ်မှတ်ထားတာပါ။'), p('Replace the paragraph in index.html with this line, save, and reload.', 'index.html ထဲက စာပိုဒ်ကို ဒီစာကြောင်းနဲ့ အစားထိုးပြီး save နဲ့ reload လုပ်ပါ။')),
    example('case-insensitivity', p('Case Insensitivity in HTML', 'HTML မှာ Case Insensitivity'), p(
      'HTML tag names and attribute names are case-insensitive. The browser reads <P> and <p> as the same tag, and CLASS and class as the same attribute name. Use lowercase names to keep your code consistent. Attribute values follow their own rules. In this example, the CSS selector .note matches the class value "note". The value "Note" has a different spelling for CSS matching.',
      'HTML မှာ tag နာမည်နဲ့ attribute နာမည်တွေကို Browser က စာလုံးအကြီး၊ အသေး မခွဲဘဲ ဖတ်ပါတယ်။ <P> နဲ့ <p> ကို တူညီတဲ့ tag အဖြစ် ဖတ်သလို CLASS နဲ့ class ကိုလည်း တူညီတဲ့ attribute နာမည်အဖြစ် ဖတ်ပါတယ်။ Code ပုံစံညီအောင် နာမည်တွေကို စာလုံးအသေး (lowercase) နဲ့ ရေးလေ့ရှိပါတယ်။ Attribute တန်ဖိုးတွေမှာတော့ သက်ဆိုင်ရာ စည်းမျဉ်းတွေ ရှိပါတယ်။ ဒီနမူနာမှာ CSS selector .note က class တန်ဖိုး "note" ရှိတဲ့ စာပိုဒ်တွေကို ရွေးပါတယ်။ "Note" က CSS အတွက် သီးခြား class တန်ဖိုးတစ်ခုပါ။',
    ), demoPage('HTML Case Insensitivity', `  <P CLASS="note">First paragraph</P>
  <p class="note">Second paragraph</p>
  <p class="Note">Third paragraph</p>`, '    .note { color: teal; }'), p(
      'All three lines appear as paragraphs. The first two are teal. The third uses the default text color. Change "Note" to "note" to give the third paragraph the same color.',
      'သုံးကြောင်းလုံး စာပိုဒ်အဖြစ် ပေါ်ပါမယ်။ ပထမနှစ်ကြောင်းက စိမ်းပြာရောင်ဖြစ်ပြီး တတိယကြောင်းက ပုံမှန်စာသားအရောင်နဲ့ ပေါ်ပါမယ်။ တတိယကြောင်းမှာ "Note" ကို "note" လို့ ပြောင်းပြီး အရောင်ပြောင်းသွားတာကို ကြည့်ပါ။',
    ), standalone),
    example('nesting', p('Nesting HTML Elements', 'HTML Element တစ်ခုထဲ နောက်တစ်ခု ထည့်ခြင်း (Nesting)'), p(
      'Nesting means putting one element inside another. Here <main> is the parent and its <h1> and <p> are its direct children. The closing tags for both children come before </main>.',
      'Nesting ဆိုတာ element တစ်ခုထဲမှာ နောက် element တစ်ခု ထည့်ရေးတာပါ။ ဒီနမူနာမှာ <main> က parent ဖြစ်ပြီး <h1> နဲ့ <p> က တိုက်ရိုက် child တွေပါ။ Child နှစ်ခုလုံးကို </main> မတိုင်ခင် အရင်ပိတ်ထားတာ သတိထားကြည့်ပါ။',
    ), `<main>
  <h1>Learning Center</h1>
  <p>Registration is open.</p>
</main>`, p('The heading and paragraph both belong to the same main content area.', 'Heading နဲ့ စာပိုဒ် နှစ်ခုလုံးက <main> အပိုင်းထဲမှာ ရှိပါတယ်။'), null),
    part('doctype', p('The HTML Doctype Declaration', 'HTML Doctype သတ်မှတ်ချက်'), p(
      'Start an HTML file with <!doctype html> on the first line, before the <html> tag. This declaration puts the browser in Standards Mode, which uses the normal layout rules for modern pages. After the declaration, write the <html> element.',
      'HTML ဖိုင်ရဲ့ ပထမဆုံးလိုင်းမှာ <html> မတိုင်ခင် <!doctype html> ကို ရေးပါ။ ဒီသတ်မှတ်ချက်ကြောင့် Browser က ယနေ့ခေတ် စာမျက်နှာတွေအတွက် ပုံမှန် layout စည်းမျဉ်းတွေ သုံးတဲ့ Standards Mode နဲ့ စာမျက်နှာကို ပြပါတယ်။ Doctype အောက်မှာ <html> element ကို ဆက်ရေးပါ။',
    ), '<!doctype html>'),
    part('html', p('What does <html> do?', '<html> က ဘာလုပ်လဲ။'), p(
      'The html element wraps the two main parts of the page, head and body. Because it is the outermost element, it is also called the root element. lang="en" sets the document’s default language to English. Screen readers can use this setting to choose how to pronounce the text.',
      '<html> က <head> နဲ့ <body> နှစ်ခုလုံးကို အပြင်ကနေ ခြုံထားပါတယ်။ အပြင်ဆုံး element ဖြစ်လို့ root element လို့ ခေါ်ပါတယ်။ lang="en" က စာမျက်နှာရဲ့ မူလဘာသာစကားကို English လို့ သတ်မှတ်ပေးပါတယ်။ Screen reader က ဒီသတ်မှတ်ချက်ကို သုံးပြီး စာသားကို သင့်တော်တဲ့ အသံထွက်နဲ့ ဖတ်နိုင်ပါတယ်။',
    ), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Learning Center</title>
  </head>
  <body>
    <p>Registration is open.</p>
  </body>
</html>`),
    part('head', p('What does <head> do?', '<head> က ဘာလုပ်လဲ။'), p(
      'Head holds information about the document for the browser and other tools. That information is called metadata. For example, the title names the document and the browser uses it as the tab label. A computer saves text as numbers; meta charset tells the browser how to turn them back into letters. Save the file as UTF-8 and write the matching charset near the start of head.',
      '<head> က document အကြောင်း browser နဲ့ တခြား tool တွေ သိဖို့ အချက်အလက် ထည့်တဲ့အပိုင်းပါ။ အဲဒီအချက်အလက်ကို metadata လို့ခေါ်ပါတယ်။ ဥပမာ <title> က document နာမည်ဖြစ်ပြီး browser က tab မှာ ပြပါတယ်။ ကွန်ပျူတာက စာသားကို ကိန်းဂဏန်းတွေအဖြစ် သိမ်းပါတယ်။ <meta charset> က အဲဒါတွေကို စာလုံးအဖြစ် ဘယ်လိုပြန်ဖတ်ရမလဲ သတ်မှတ်ပေးပါတယ်။ ဖိုင်ကို UTF-8 နဲ့ သိမ်းပြီး head အစပိုင်းမှာ charset ကိုလည်း UTF-8 လို့ ရေးပါ။',
    ), `<head>
  <meta charset="utf-8">
  <title>Learning Center</title>
</head>`),
    example('title', p('Document Title <title>', 'စာမျက်နှာနာမည် <title>'), p(
      'Write <title> inside <head> to name the document. The browser uses this name in its tab, and visitors can see it in their bookmarks. Write the main heading visitors read on the page with <h1> inside <body>.',
      'Document ရဲ့ နာမည်ကို <head> ထဲက <title> နဲ့ သတ်မှတ်ပါတယ်။ ဒီနာမည်ကို Browser tab မှာ မြင်ရသလို စာမျက်နှာကို bookmark လုပ်တဲ့အခါမှာလည်း တွေ့ရပါတယ်။ စာမျက်နှာပေါ်မှာ ဖတ်ရမယ့် အဓိကခေါင်းစဉ်ကိုတော့ <body> ထဲမှာ <h1> နဲ့ ရေးပါ။',
    ), demoPage('Opening Hours | Learning Center', '  <h1>Opening Hours</h1>'), p(
      'Open the file in a browser. The tab says “Opening Hours | Learning Center” and the page heading says “Opening Hours”.',
      'ဖိုင်ကို Browser နဲ့ ဖွင့်လိုက်ရင် tab မှာ “Opening Hours | Learning Center” လို့ ပေါ်ပြီး စာမျက်နှာပေါ်က ခေါင်းစဉ်မှာ “Opening Hours” လို့ ပေါ်ပါမယ်။',
    ), standalone),
    part('body', p('What does <body> do?', '<body> က ဘာလုပ်လဲ။'), p(
      'Body holds the content a visitor reads or uses on the page. Start <body> after </head> and close it before </html>. The paragraph below is the greeting the visitor sees on the page.',
      '<body> ထဲမှာ ဝင်ကြည့်သူ ဖတ်မယ့်၊ အသုံးပြုမယ့် အကြောင်းအရာတွေကို ထည့်ပါတယ်။ </head> ပြီးရင် <body> ကို ဖွင့်ပြီး </html> မတိုင်ခင် </body> နဲ့ ပိတ်ပါ။ အောက်က စာပိုဒ်ထဲက နှုတ်ဆက်စာကို browser မှာ မြင်ရပါမယ်။',
    ), `<body>
  <p>Welcome to the Learning Center!</p>
</body>`),
    example('document', p('Put the full document together', 'HTML Document အပြည့်အစုံ ရေးစမ်းခြင်း'), p(
      'The first line is the doctype declaration. It tells the browser to use its normal rules for modern pages; the next lesson explains how to see the difference. Below it, html wraps head and body. The same document can have one title in the tab and different text in the page.',
      'ပထမလိုင်းက doctype ဆိုတဲ့ သတ်မှတ်ချက်ပါ။ Browser ကို ယနေ့ခေတ် စာမျက်နှာတွေအတွက် ပုံမှန်စည်းမျဉ်းတွေ သုံးစေပါတယ်။ နောက် lesson မှာ ကွာခြားချက်ကို စမ်းပါမယ်။ Doctype အောက်မှာ html က head နဲ့ body ကို ခြုံထားပါတယ်။ Tab မှာ ပြမယ့် နာမည်နဲ့ စာမျက်နှာထဲက စာသားကို သီးသန့် ရေးနိုင်ပါတယ်။',
    ), documentExample, p('The tab shows “Learning Center” and the page shows “Welcome to the Learning Center!”. Change the paragraph text, save the file, and reload to see the greeting update.', 'Browser tab မှာ “Learning Center” လို့ ပေါ်ပြီး စာမျက်နှာမှာ “Welcome to the Learning Center!” လို့ မြင်ရပါမယ်။ စာပိုဒ်ထဲက နှုတ်ဆက်စာကို ပြောင်း၊ ဖိုင်သိမ်းပြီး reload လုပ်ကြည့်ပါ။'), p('Replace all of index.html with this code. Save it, then reload the browser.', 'index.html ထဲက code အားလုံးကို ဒီနမူနာနဲ့ အစားထိုးပါ။ Save လုပ်ပြီး browser မှာ reload လုပ်ပါ။'), p('If the browser shows the tags as text, check that the file ends in .html.', 'Tag တွေကို စာသားအဖြစ် မြင်ရရင် ဖိုင်နာမည်က .html နဲ့ ဆုံးလား စစ်ပါ။')),
    example('viewport', p('Set the layout width on phones', 'ဖုန်းပေါ်မှာ စာမျက်နှာအကျယ် သတ်မှတ်ခြင်း'), p(
      'The viewport is the part of the browser in which the page is displayed. Mobile browsers may lay out pages as if they had a wider screen. width=device-width asks the browser to use the device width for the page layout. initial-scale=1 sets the initial zoom.',
      'Viewport ဆိုတာ browser ထဲမှာ စာမျက်နှာပြတဲ့ မြင်ကွင်းပါ။ ဖုန်း browser က တစ်ခါတလေ ဖုန်းမျက်နှာပြင်ထက် ပိုကျယ်သလို တွက်ပြီး စာမျက်နှာကို စီတတ်ပါတယ်။ width=device-width က စာမျက်နှာစီတဲ့အခါ ဖုန်းမြင်ကွင်းအကျယ်ကို သုံးစေပြီး initial-scale=1 က စဖွင့်ချိန် zoom ကို သတ်မှတ်ပါတယ်။',
    ), '<meta name="viewport" content="width=device-width, initial-scale=1">', p('The greeting stays the same. On a phone the browser can use the phone width to lay out the page. Try it again when you build a responsive layout.', 'နှုတ်ဆက်စာက အတိုင်းပဲ မြင်ရပါမယ်။ ဖုန်းနဲ့ ဖွင့်ရင် browser က ဖုန်းအကျယ်ကို အခြေခံပြီး စာမျက်နှာကို စီနိုင်ပါတယ်။ Responsive Layout သင်ခန်းစာမှာ ထပ်စမ်းနိုင်ပါတယ်။'), p('Add this line inside the existing <head>, after the charset line.', 'ရှိပြီးသား <head> အထဲက charset စာကြောင်းအောက်မှာ ဒီလိုင်းကို ထည့်ပါ။')),
    part('dom', p('How can you see the DOM?', 'DOM ကို ဘယ်လိုကြည့်မလဲ။'), p(
      'The browser builds a tree called the Document Object Model (DOM) when it reads the file. Run this example or put it inside the body of index.html and open the file. Right-click “Registration is open.” and select Inspect. In Elements or Inspector, look for the paragraph inside <main> and expand <html> to find <head> and <body>.',
      'Browser က HTML ဖိုင်ကို ဖတ်ပြီး DOM (Document Object Model) လို့ခေါ်တဲ့ သစ်ပင်ပုံစံ ဖွဲ့စည်းပုံကို တည်ဆောက်ပါတယ်။ ဒီနမူနာကို Run လုပ်ပါ၊ ဒါမှမဟုတ် index.html ရဲ့ <body> ထဲမှာ ထည့်ပြီး ဖိုင်ကို ဖွင့်ပါ။ “Registration is open.” ပေါ် right-click နှိပ်ပြီး Inspect ရွေးပါ။ Elements ဒါမှမဟုတ် Inspector မှာ <main> ထဲက <p> ကို ရှာကြည့်ပါ။ <html> ကို ဖြန့်ရင် <head> နဲ့ <body> ကိုလည်း မြင်ရပါမယ်။',
    ), `<main>
  <p>Registration is open.</p>
</main>`),
  ], [introSource, ['WHATWG · HTML syntax', htmlSpec + 'syntax.html#syntax'], ['WHATWG · The DOCTYPE', htmlSpec + 'syntax.html#the-doctype'], ['WHATWG · Elements', htmlSpec + 'semantics.html'], ['WHATWG · The title element', htmlSpec + 'semantics.html#the-title-element'], ['WHATWG · The body element', htmlSpec + 'sections.html#the-body-element'], ['MDN · Introduction to the DOM', mdn + 'Web/API/Document_Object_Model/Introduction']]),

  page('doctype', p('HTML Doctype and Browser Modes', 'HTML Doctype နဲ့ Browser Modes'), p(
    'The browser decides how to lay out the page after reading an HTML file. A rendering mode is the set of rules it uses for that layout. The first line of the file can change the mode.',
    'Browser က HTML ဖိုင်ကို ဖတ်ပြီး စာသားနဲ့ အကွက်တွေကို ဘယ်လောက်ကျယ်မလဲ၊ ဘယ်နေရာမှာ ပေါ်မလဲ တွက်ပါတယ်။ တွက်တဲ့အခါ အသုံးပြုတဲ့ စည်းမျဉ်းအစုကို rendering mode လို့ခေါ်ပါတယ်။ ဖိုင်ရဲ့ ပထမလိုင်းက ဘယ် mode သုံးမလဲဆိုတာကို သက်ရောက်စေပါတယ်။',
  ), [
    part('standards', p('What is Standards Mode?', 'Standards Mode ဆိုတာဘာလဲ။'), p(
      'Standards Mode is the browser’s normal mode for modern web pages. You may see the name no-quirks mode in the specification. As an example of its layout rules, a CSS length such as 120px needs a unit when the number is nonzero. px is the unit for CSS pixels.',
      'Standards Mode ဆိုတာ ယနေ့ခေတ် web page တွေအတွက် browser သုံးတဲ့ ပုံမှန် mode ပါ။ HTML စံသတ်မှတ်ချက်မှာ no-quirks mode လို့ တွေ့ရနိုင်ပါတယ်။ ဥပမာ CSS နဲ့ အကွက်အကျယ်ကို 120 သတ်မှတ်ချင်ရင် 120px လို့ ယူနစ်ပါ ထည့်ရပါတယ်။ px က CSS pixel ရဲ့ ယူနစ်ပါ။',
    ), `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Standards Mode</title>
  </head>
  <body>
    <div style="width: 120px; background: lightblue">120 px</div>
  </body>
</html>`),
    part('quirks', p('Why does Quirks Mode exist?', 'Quirks Mode ဘာကြောင့် ရှိတာလဲ။'), p(
      'Some old pages relied on how earlier browsers lay out content. Quirks Mode keeps selected old layout rules so those pages can still work. For example, the browser may treat certain lengths without a unit as pixels. Certain historical doctypes can also select limited-quirks mode, which keeps fewer of the old rules.',
      'ဝဘ်ဆိုက် အဟောင်းတချို့က အရင် browser တွေ စာမျက်နှာစီပုံကို အားကိုးပြီး ရေးထားပါတယ်။ အဲဒီစာမျက်နှာတွေ ဆက်အလုပ်လုပ်ဖို့ Quirks Mode က စည်းမျဉ်းအဟောင်းတချို့ကို ဆက်သုံးပေးပါတယ်။ ဥပမာ ယူနစ်မပါတဲ့ အလျားတချို့ကို pixel အဖြစ် ယူပေးနိုင်ပါတယ်။ Doctype အဟောင်းတချို့ကြောင့် အဟောင်းစည်းမျဉ်း နည်းနည်းပဲ သုံးတဲ့ limited-quirks mode လည်း ဝင်နိုင်ပါတယ်။',
    ), `<!-- This legacy example omits the doctype. -->
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Quirks Mode</title>
  </head>
  <body>
    <div style="width: 120; background: lightblue">Sample</div>
  </body>
</html>`),
    example('declaration', p('What does <!doctype html> do?', '<!doctype html> က ဘာလုပ်ပေးလဲ။'), p(
      'Write this declaration before <html>. It is an instruction for the browser about how to process the document. This form selects Standards Mode. In a typical HTML file, omitting the declaration selects Quirks Mode.',
      'ဒီစာကြောင်းကို <html> မတိုင်ခင် ရေးပါ။ Document ကို ဘယ်စည်းမျဉ်းနဲ့ ကိုင်တွယ်မလဲ browser ကို ပြောတာပါ။ <!doctype html> ဆိုရင် Standards Mode ဝင်ပါတယ်။ ရိုးရိုး HTML ဖိုင်မှာ doctype ကို ဖြုတ်လိုက်ရင် Quirks Mode ဝင်ပါတယ်။',
    ), '<!doctype html>', p('The line is used by the browser. The text you wrote in body still appears as the page content.', 'ဒီလိုင်းက browser အတွက် ဖြစ်ပါတယ်။ စာမျက်နှာမှာ body ထဲရေးထားတဲ့ စာသားပဲ မြင်ရပါမယ်။'), p('Check that the first line of index.html is exactly the declaration below.', 'index.html ရဲ့ ပထမလိုင်းမှာ အောက်က သတ်မှတ်ချက် ရှိလား စစ်ပါ။')),
    example('modes', p('Compare the two modes in the browser', 'Browser မှာ Mode နှစ်ခု စမ်းနှိုင်းခြင်း'), p(
      'The blue box has a width without a unit. The script prints document.compatMode, the name exposed to JavaScript for the current mode. It also prints whether the width was accepted. CSS1Compat covers both Standards Mode and limited-quirks, while BackCompat indicates Quirks Mode.',
      'အပြာရောင်အကွက်အတွက် အကျယ်ရေးတဲ့အခါ ယူနစ်မထည့်ထားပါဘူး။ နမူနာထဲက script က လက်ရှိ mode ကို သိနိုင်တဲ့ document.compatMode နဲ့ အကျယ်တန်ဖိုးကို browser လက်ခံလားဆိုတာ ပြပေးပါတယ်။ CSS1Compat က Standards Mode နဲ့ limited-quirks နှစ်မျိုးလုံးအတွက်ဖြစ်ပြီး BackCompat က Quirks Mode အတွက် ဖြစ်ပါတယ်။',
    ), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Compare rendering modes</title>
</head>
<body>
  <div id="box" style="width: 120; background: lightblue">Sample</div>
  <p id="result"></p>
  <script>
    const box = document.querySelector("#box");
    document.querySelector("#result").textContent =
      document.compatMode + " | width = " + (box.style.width || "ignored");
  </script>
</body>
</html>`, p('The first file shows CSS1Compat | width = ignored. The file without a doctype shows BackCompat | width = 120px in browsers that implement this quirk. Change 120 to 120px to see both layouts accept the width.', 'ပထမဖိုင်မှာ CSS1Compat | width = ignored လို့ မြင်ရပါမယ်။ ဒီစည်းမျဉ်းအဟောင်းကို သုံးတဲ့ browser မှာ doctype မပါတဲ့ဖိုင်က BackCompat | width = 120px လို့ ပြပါမယ်။ 120 ကို 120px လို့ ပြောင်းရင် နှစ်ဖိုင်လုံး အကျယ်ကို လက်ခံတာ မြင်ရပါမယ်။'), p('Save the full code as standards.html. Save a second copy as quirks.html, remove its first line, and open both files in the same browser.', 'Code အပြည့်အစုံကို standards.html နဲ့ သိမ်းပါ။ နောက်တစ်ပွားကို quirks.html နဲ့ သိမ်းပြီး အဲဒီဖိုင်ရဲ့ ပထမလိုင်းကို ဖျက်ပါ။ နှစ်ဖိုင်လုံးကို browser တစ်ခုတည်းနဲ့ ဖွင့်ကြည့်ပါ။')),
  ], [['WHATWG · The DOCTYPE', htmlSpec + 'syntax.html#the-doctype'], ['MDN · Quirks and standards modes', mdn + 'Web/HTML/Guides/Quirks_mode_and_standards_mode'], ['WHATWG · The unitless length quirk', 'https://quirks.spec.whatwg.org/#the-unitless-length-quirk']]),

  page('headings', p('Headings <h1>–<h6>', 'ခေါင်းစဉ် <h1>–<h6>'), p(
    'Headings give a page a readable hierarchy. Each level tells the reader where a section fits under the page title and other sections.',
    'ခေါင်းစဉ်တွေက စာမျက်နှာကို အပိုင်းလိုက် ဖတ်ရလွယ်အောင် စီပေးပါတယ်။ Heading level တစ်ခုစီက အဲဒီအပိုင်းဟာ ဘယ်အဓိကခေါင်းစဉ်၊ ဘယ်အပိုင်းအောက်မှာ ရှိလဲဆိုတာ ပြောပေးပါတယ်။',
  ), [
    example('headings', p('Heading levels and hierarchy', 'Heading အဆင့်တွေ စီပုံ'), p(
      'Use h1 for the page’s main topic. Use h2 for each major section and h3 for a subsection inside an h2 section. Use h4 through h6 for deeper levels when needed. When opening a subsection, move down one level at a time. When you finish that subsection, you can go back to a higher level. A screen-reader user can navigate through these levels to find a section.',
      'စာမျက်နှာရဲ့ အဓိကခေါင်းစဉ်ကို h1 နဲ့ ရေးပါ။ အဓိကအပိုင်း တစ်ခုစီကို h2၊ h2 အောက်က အပိုင်းခွဲကို h3 နဲ့ ရေးပါ။ ဒီထက်ပိုပြီး ဆင့်ဖို့ လိုရင် h4 ကနေ h6 အထိ သုံးနိုင်ပါတယ်။ အပိုင်းခွဲ စတဲ့အခါ level တစ်ဆင့်ချင်း ဆင်းပါ။ အပိုင်းခွဲပြီးရင် အပေါ် level ကို ပြန်တက်နိုင်ပါတယ်။ Screen reader သုံးသူကလည်း heading အဆင့်တွေကို လိုက်ပြီး လိုတဲ့အပိုင်းဆီ သွားနိုင်ပါတယ်။',
    ), `<h1>Community library</h1>
<h2>Books</h2>
<h3>Fiction</h3>
<p>Novels and short stories.</p>
<h3>Nonfiction</h3>
<p>History and science books.</p>
<h2>Events</h2>
<p>Reading groups and workshops.</p>`, p('Books and Events are both level 2. Fiction and Nonfiction are level 3 under Books. The default font size usually reflects the level, but the elements define the structure.', 'Books နဲ့ Events နှစ်ခုလုံး level 2 ပါ။ Fiction နဲ့ Nonfiction က Books အောက်က level 3 တွေပါ။ Browser က ပုံမှန်အားဖြင့် စာလုံးအရွယ် ကွဲပြီး ပြသလို heading element က အကြောင်းအရာအဆင့်ကိုပါ သတ်မှတ်ထားပါတယ်။')),
    example('appearance', p('Heading appearance with CSS', 'Heading ပုံစံကို CSS နဲ့ ပြောင်းခြင်း'), p(
      'Pick the heading level based on where it belongs in the document. Use CSS font-size and margins to adjust its visual size and spacing. For example, a compact card section can still use an h2 even if its design uses a small heading.',
      'စာမျက်နှာထဲက အကြောင်းအရာအဆင့်အလိုက် heading level ရွေးပါ။ မြင်ရတဲ့ အရွယ်အစားနဲ့ အကွာအဝေးကို CSS font-size နဲ့ margin တို့ သုံးပြီး ပြင်ပါ။ Card အပိုင်းတစ်ခုရဲ့ ခေါင်းစဉ်ကို စာလုံးအသေးနဲ့ ပြချင်လည်း အဓိကအပိုင်းဆို h2 သုံးလို့ရပါတယ်။',
    ), demoPage("Heading style", `<h1>Community library</h1>
<h2 class="compact-heading">Today’s specials</h2>`, "    .compact-heading { font-size: 1rem; }"), p('“Today’s specials” looks smaller and still has level 2 semantics, which you can verify in the browser accessibility tree.', '“Today’s specials” က စာလုံးအသေးနဲ့ ပေါ်ပြီး heading level 2 အဖြစ် ရှိနေပါတယ်။ Browser DevTools ရဲ့ Accessibility အပိုင်းမှာ စစ်နိုင်ပါတယ်။'), standalone),
  ], [['WHATWG · The h1–h6 elements', htmlSpec + 'sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements'], ['W3C WAI · Headings', 'https://www.w3.org/WAI/tutorials/page-structure/headings/']]),
  page('paragraphs', p('Paragraphs, Line Breaks, and Thematic Breaks', 'စာပိုဒ်၊ လိုင်းချိုးခြင်းနဲ့ အကြောင်းအရာ ခွဲခြင်း'), p(
    'Use a paragraph for a group of sentences about one idea. Use a line break where a line needs to end within that paragraph. A thematic break marks a larger change, such as a change of scene in a story.',
    'အကြောင်းအရာတစ်ခုကို ရှင်းပြတဲ့ စာကြောင်းတွေကို စာပိုဒ်တစ်ပိုဒ်အဖြစ် စုပါ။ စာပိုဒ်တစ်ခုထဲမှာ လိုင်းဆင်းဖို့ လိုရင် line break သုံးပါ။ ဇာတ်လမ်းတစ်ပုဒ်မှာ ဇာတ်ဝင်ခန်းပြောင်းတာလို အကြောင်းအရာ အပိုင်းပြောင်းတဲ့နေရာကို thematic break နဲ့ မှတ်သားနိုင်ပါတယ်။',
  ), [
    example('paragraph', p('How a paragraph is rendered', 'Browser က စာပိုဒ်ကို ဘယ်လိုပြလဲ'), p(
      'Write a paragraph between <p> and </p>. The browser shows each paragraph separately, usually with space above and below. In normal whitespace handling, a line break or several spaces in the markup collapse to a single space between words. The browser wraps long text based on the available space.',
      'စာပိုဒ်တစ်ခုကို <p> နဲ့ </p> ကြားမှာ ရေးပါ။ Browser က စာပိုဒ်တစ်ခုစီကို သီးသန့်ပြပြီး အပေါ်နဲ့ အောက်မှာ အကွာအဝေး ထားပေးလေ့ရှိပါတယ်။ ပုံမှန် whitespace မှာ HTML ဖိုင်ထဲက line break နဲ့ space အများကြီးကို စကားလုံးနှစ်ခုကြား space တစ်ခုအဖြစ် စုပေးပါတယ်။ စာကြောင်းက ရနိုင်တဲ့ အကျယ်ပေါ်မူတည်ပြီး လိုင်းဆင်းပါတယ်။',
    ), `<p>The library lends books
   and magazines every morning.</p>
<p>Returns are accepted until 6:00 PM.</p>`, p('“books and magazines” flows as part of one paragraph even though it spans two source lines. “Returns” starts a new paragraph.', 'ဖိုင်ထဲမှာ “books” နဲ့ “and magazines” ကို လိုင်းခွဲရေးထားပေမယ့် browser မှာ စာပိုဒ်တစ်ပိုဒ်ထဲ ဆက်ဖတ်ရပါတယ်။ “Returns” က သီးခြားစာပိုဒ်အဖြစ် ပေါ်ပါတယ်။')),
    example('nesting', p('What can go inside <p>', '<p> ထဲမှာ ဘာတွေ ထည့်လို့ရလဲ'), p(
      'A paragraph can contain text and phrasing elements such as a, strong, and em. A list or heading belongs next to the paragraph in the HTML structure. If a div starts before you close p, the HTML parser closes the paragraph automatically and the DOM differs from what the indentation might suggest.',
      'စာပိုဒ်ထဲမှာ စာသားနဲ့ a၊ strong၊ em လို စာသားအတွင်းသုံးတဲ့ phrasing elements တွေ ထည့်လို့ရပါတယ်။ List ဒါမှမဟုတ် heading ကို စာပိုဒ်အပြင်မှာ သီးသန့်ရေးပါ။ p ကို မပိတ်ရသေးခင် div စလိုက်ရင် browser ရဲ့ HTML parser က p ကို အလိုအလျောက် ပိတ်ပါတယ်။ ဒါကြောင့် DevTools မှာ မြင်ရတဲ့ DOM က ဖိုင်ထဲက indent နဲ့ ထင်ရတဲ့ ဖွဲ့စည်းပုံအတိုင်း ဖြစ်ချင်မှ ဖြစ်ပါမယ်။',
    ), `<p>Choose <em>one</em> of the available books.</p>
<ul>
  <li>History</li>
  <li>Science</li>
</ul>`, p('DevTools shows the p and ul as siblings. The em element is a child of the paragraph.', 'DevTools မှာ p နဲ့ ul က အဆင့်တူ element နှစ်ခုဖြစ်ပြီး em က စာပိုဒ်အောက်မှာ ရှိပါတယ်။')),
    example('line-break', p('Intentional line breaks <br>', 'လိုင်းတစ်ကြောင်း ဆင်းဖို့ <br>'), p(
      'Use br when a line break is part of the content, such as an address or a poem. For a new idea, start a new paragraph. For more space between paragraphs, adjust their CSS margins.',
      'လိပ်စာ ဒါမှမဟုတ် ကဗျာလို လိုင်းခွဲထားတာကိုယ်တိုင်က အကြောင်းအရာအတွက် လိုအပ်တဲ့အခါ br သုံးပါ။ အကြောင်းအရာသစ် စရင် စာပိုဒ်အသစ်ရေးပါ။ စာပိုဒ်တွေကြား အကွာအဝေးကို CSS margin နဲ့ ထိန်းနိုင်ပါတယ်။',
    ), `<p>Library Desk<br>25 Market Street<br>Yangon</p>`, p('The address occupies three lines within one paragraph.', 'လိပ်စာက စာပိုဒ်တစ်ပိုဒ်ထဲမှာပဲ သုံးကြောင်းနဲ့ ပေါ်ပါမယ်။')),
    example('thematic-break', p('Thematic Break <hr>', 'အကြောင်းအရာ ပြောင်းတဲ့နေရာကို ခွဲဖို့ <hr>'), p(
      'Use <hr> between paragraphs where a story changes scene or a section switches to a different topic. Most browsers draw a horizontal line at that point. Write <hr> on its own because it is a void element.',
      'ဇာတ်ဝင်ခန်း ပြောင်းတဲ့နေရာ ဒါမှမဟုတ် အပိုင်းတစ်ခုထဲမှာ အကြောင်းအရာ ပြောင်းသွားတဲ့နေရာကို ဖော်ပြဖို့ စာပိုဒ်တွေကြားမှာ <hr> သုံးပါ။ Browser အများစုမှာ အဲဒီနေရာက အလျားလိုက်မျဉ်းတစ်ကြောင်း ပေါ်ပါတယ်။ <hr> က void element ဖြစ်လို့ အဖွင့် tag တစ်ခုတည်း ရေးပါ။',
    ), `<p>The hikers reached the campsite before sunset.</p>
<hr>
<p>Back in town, the team prepared for the next day.</p>`, p(
      'The line between the paragraphs marks the change of scene from the campsite to the town.',
      'စာပိုဒ်နှစ်ခုကြားက မျဉ်းက စခန်းချတဲ့နေရာကနေ မြို့ထဲက ဇာတ်ဝင်ခန်းကို ပြောင်းသွားတာကို ဖော်ပြပါတယ်။',
    )),
  ], [['WHATWG · The p element', htmlSpec + 'grouping-content.html#the-p-element'], ['WHATWG · The br element', htmlSpec + 'text-level-semantics.html#the-br-element'], ['WHATWG · The hr element', htmlSpec + 'grouping-content.html#the-hr-element'], ['MDN · Whitespace in the DOM', 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace']]),
  page('inline-text', p('Inline Text Elements', 'စာကြောင်းထဲက Inline Text Elements'), p(
    'Inline text elements mark a word or phrase inside a sentence. They can convey importance, stress, or code, and can also give CSS a span of text to style. These examples use the browser’s default styles unless CSS is shown.',
    'Inline text elements တွေက စာကြောင်းထဲက စကားလုံး ဒါမှမဟုတ် စကားစုတစ်ခုကို သီးသန့် အမှတ်အသားပေးပါတယ်။ အရေးကြီးတာ၊ ဖိပြောရတာ၊ code ဖြစ်တာတို့ကို ဖော်ပြနိုင်သလို စာသားတစ်ပိုင်းကို ရွေးပြီး CSS နဲ့ style ပေးဖို့လည်း သုံးနိုင်ပါတယ်။ CSS ထည့်ထားတဲ့ နမူနာကလွဲရင် browser ရဲ့ မူလပုံစံအတိုင်း မြင်ရပါမယ်။',
  ), [
    example('strong', p('Important text <strong>', 'အရေးကြီးတဲ့ စာသား <strong>'), p(
      'Use strong for a warning or a key part of a message. It tells the browser which part has strong importance. Browsers usually give it bold styling. Use CSS font-weight for purely visual bold styling.',
      'သတိပေးချက် ဒါမှမဟုတ် စာကြောင်းထဲက အရေးကြီးတဲ့အပိုင်းကို strong နဲ့ မှတ်ပါ။ Browser က အဲဒီစာသားရဲ့ အရေးပါမှုကို သိပြီး ပုံမှန်အားဖြင့် စာလုံးအထူနဲ့ ပြပါတယ်။ မြင်ရတဲ့ပုံစံအတွက် စာလုံးထူစေချင်ရုံဆို CSS font-weight သုံးနိုင်ပါတယ်။',
    ), `<p><strong>Allergy alert:</strong> This folder contains peanuts.</p>`, p('“Allergy alert:” usually appears bold and carries the importance of the warning.', '“Allergy alert:” က ပုံမှန်အားဖြင့် ထူပြီး ပေါ်ပါတယ်။ ဒီစာသားက သတိပေးချက်ရဲ့ အရေးကြီးတဲ့ အပိုင်းဖြစ်ကြောင်းကိုလည်း ဖော်ပြပါတယ်။')),
    example('emphasis', p('Stress emphasis <em>', 'ဖိပြောရမယ့် စာသား <em>'), p(
      'Use em on the part of a sentence you would stress when saying it aloud. Moving the emphasis can change what the sentence implies. Browsers usually display em in italics.',
      'စာကြောင်းတစ်ကြောင်းကို အသံထွက်ဖတ်တဲ့အခါ ဖိပြောမယ့် စကားလုံးကို em နဲ့ မှတ်ပါ။ ဖိပြောတဲ့ နေရာပြောင်းရင် စာကြောင်းက ဆိုလိုတဲ့သဘော ပြောင်းနိုင်ပါတယ်။ Browser က em ပါတဲ့ စာသားကို ပုံမှန်အားဖြင့် စာလုံးစောင်းနဲ့ ပြပါတယ်။',
    ), `<p>I borrowed <em>a book</em> today.</p>
<p>I borrowed a book <em>today</em>.</p>`, p('The first sentence emphasizes what was borrowed. The second emphasizes when it was borrowed.', 'ပထမစာကြောင်းက ဘာငှားတာလဲဆိုတာကို ဖိပြောပါတယ်။ ဒုတိယစာကြောင်းက ဘယ်နေ့ငှားတာလဲဆိုတာကို ဖိပြောပါတယ်။')),
    example('attention', p('Keywords and Labels <b>', 'သတိထားဖတ်စေချင်တဲ့ စကားလုံး <b>'), p(
      'Use <b> to draw attention to a word or phrase, such as a keyword or a product name in a review. Browsers usually display <b> in bold. For a warning or other text with strong importance, use <strong>.',
      'Keyword ဒါမှမဟုတ် သုံးသပ်ချက်ထဲက ပစ္စည်းနာမည်လို ဖတ်သူ သတိထားမိစေချင်တဲ့ စကားလုံးကို <b> နဲ့ မှတ်နိုင်ပါတယ်။ Browser က ပုံမှန်အားဖြင့် စာလုံးအထူနဲ့ ပြပါတယ်။ သတိပေးချက်လို အရေးကြီးကြောင်း ဖော်ပြရမယ့် စာသားအတွက် <strong> သုံးပါ။',
    ), '<p>The <b>Trail 20</b> backpack has an adjustable strap.</p>', p(
      '“Trail 20” usually appears in bold so the product name is easy to find.',
      'ပစ္စည်းနာမည်ကို ဖတ်ရင်း ရှာရလွယ်အောင် “Trail 20” က ပုံမှန်အားဖြင့် စာလုံးအထူနဲ့ ပေါ်ပါတယ်။',
    )),
    example('alternate-voice', p('Terms and Alternate Voice <i>', 'သီးသန့် ဝေါဟာရနဲ့ အသံနေအသံထား <i>'), p(
      'Use <i> to mark a phrase that reads differently from the surrounding text, such as a scientific name or a term from another language. Browsers usually display it in italics. Use <em> when a word needs to be stressed in the sentence.',
      'သိပ္ပံနာမည် ဒါမှမဟုတ် တခြားဘာသာစကားက စကားလုံးလို စာကြောင်းထဲမှာ သီးသန့်ဖော်ပြချင်တဲ့ ဝေါဟာရကို <i> သုံးပြီး မှတ်နိုင်ပါတယ်။ Browser က ပုံမှန်အားဖြင့် စာလုံးစောင်းနဲ့ ပြပါတယ်။ စာကြောင်းဖတ်တဲ့အခါ စကားလုံးတစ်လုံးကို ဖိပြောစေချင်ရင် <em> သုံးပါ။',
    ), '<p>The house cat is known as <i>Felis catus</i>.</p>', p(
      'The scientific name “Felis catus” usually appears in italics.',
      'သိပ္ပံနာမည် “Felis catus” က ပုံမှန်အားဖြင့် စာလုံးစောင်းနဲ့ ပေါ်ပါတယ်။',
    )),
    example('highlight', p('Highlighted Text <mark>', 'ဆက်စပ်တဲ့ စာသားကို Highlight လုပ်ဖို့ <mark>'), p(
      'Use <mark> to highlight a word that is relevant to what the reader is doing, such as a match for a search term. In this example, the reader searched for “library”.',
      'ဖတ်သူ လက်ရှိလုပ်နေတဲ့ အလုပ်နဲ့ ဆက်စပ်တဲ့ စာသားကို <mark> နဲ့ Highlight လုပ်နိုင်ပါတယ်။ ဥပမာ ဖတ်သူက “library” လို့ ရှာထားရင် ရှာဖွေမှုရလဒ်ထဲမှာ တွေ့တဲ့ “library” ကို အရောင်နဲ့ မှတ်ပြနိုင်ပါတယ်။',
    ), '<p>Opening hours for the <mark>library</mark> have changed.</p>', p(
      'The word “library” appears highlighted, usually with a yellow background.',
      '“library” ကို Browser က ပုံမှန်အားဖြင့် အဝါရောင်နောက်ခံနဲ့ ပြပါတယ်။',
    )),
    example('code', p('Code in a sentence <code>', 'စာကြောင်းထဲက Code <code>'), p(
      'Use code for a short piece of computer code, such as a function call or an HTML tag written in a sentence. Browsers normally use a fixed-width font. Encode the less-than and greater-than signs as &lt; and &gt; when you want the reader to see a literal tag. Wrap code in pre for an example that should preserve line breaks and indentation.',
      'Function call ဒါမှမဟုတ် HTML tag လို code အတိုကို စာကြောင်းထဲမှာ ထည့်ရှင်းချင်ရင် code element သုံးပါ။ Browser က ပုံမှန်အားဖြင့် စာလုံးအကျယ်ညီတဲ့ font နဲ့ ပြပါတယ်။ HTML tag ကို စာသားအတိုင်း မြင်ရဖို့ < နဲ့ > ကို &lt; နဲ့ &gt; အဖြစ် ရေးပါ။ လိုင်းအများကြီးပါတဲ့ နမူနာမှာ လိုင်းခွဲပုံနဲ့ indent ကို ထိန်းချင်ရင် code ကို pre ထဲမှာ ထည့်ပါ။',
    ), `<p>Write <code>&lt;p&gt;</code> to start a paragraph.</p>`, p('You see the literal text “<p>” inside the sentence.', '“<p>” ကို စာကြောင်းထဲမှာ စာသားအတိုင်း မြင်ရပါမယ်။')),
    example('preformatted-code', p('Preformatted Code <pre>', 'လိုင်းနဲ့ Space မူလအတိုင်း ပြဖို့ <pre>'), p(
      'Use <pre> when the line breaks and spaces are part of the example. Place <code> inside it for multiline code. The <pre> element belongs outside the paragraph.',
      'နမူနာထဲက လိုင်းခွဲထားပုံနဲ့ space တွေကို မူလအတိုင်း ပြချင်ရင် <pre> သုံးပါ။ လိုင်းအများကြီးပါတဲ့ code ဆိုရင် <pre> အထဲမှာ <code> ကို ထည့်ပါ။ <pre> ကိုတော့ စာပိုဒ်ရဲ့ အပြင်မှာ ရေးပါ။',
    ), `<pre><code>if (isOpen) {
  showHours();
}</code></pre>`, p(
      'The example keeps its three lines and the spaces before showHours().',
      'Code နမူနာက သုံးကြောင်းအတိုင်း ပေါ်ပြီး showHours() ရှေ့မှာ ထည့်ထားတဲ့ space တွေလည်း ဆက်ရှိနေပါတယ်။',
    )),
    example('subscript-superscript', p('Subscript and Superscript <sub> and <sup>', 'အောက်စာနဲ့ အပေါ်စာ <sub> နဲ့ <sup>'), p(
      'Use <sub> and <sup> when the position of a character is part of the notation, such as the 2 in the formula for water or the exponent in a mathematical expression.',
      'ရေရဲ့ ဓာတုဖော်မြူလာထဲက 2 ဒါမှမဟုတ် သင်္ချာထဲက ထပ်ကိန်းလို စာလုံးရဲ့ အပေါ်၊ အောက် နေရာက အဓိပ္ပာယ်ရှိတဲ့အခါ <sub> နဲ့ <sup> ကို သုံးပါ။',
    ), `<p>Water: H<sub>2</sub>O</p>
<p>Area: x<sup>2</sup></p>`, p(
      'The 2 in H₂O is below the text baseline. The 2 in x² is above it.',
      'H₂O ထဲက 2 က အောက်စာအဖြစ် ပေါ်ပြီး x² ထဲက 2 က အပေါ်စာအဖြစ် ပေါ်ပါတယ်။',
    )),
    example('span', p('Generic inline grouping <span>', 'စာကြောင်းထဲက စာသားကို စုဖို့ <span>'), p(
      'A span groups a bit of phrasing content without assigning importance or other specific meaning. Use it when CSS or JavaScript needs to target a phrase. In the example, stock is a class name and .stock is the CSS selector matching it.',
      'span က စာကြောင်းထဲက စာသားတစ်ပိုင်းကို စုပေးပါတယ်။ အရေးပါမှုလို သီးသန့်အဓိပ္ပာယ် သတ်မှတ်မထားပါဘူး။ စကားစုတစ်ခုကို CSS နဲ့ style ပေးဖို့၊ JavaScript နဲ့ ရွေးပြောင်းဖို့ သုံးနိုင်ပါတယ်။ ဒီမှာ stock က class နာမည်ဖြစ်ပြီး .stock က အဲဒီ class ကို ရွေးတဲ့ CSS selector ပါ။',
    ), demoPage("Inline text style", `<p>Pen is <span class="stock">in stock</span> today.</p>`, "    .stock { color: #166534; }"), p('Only “in stock” is green, and the sentence continues in the same line where space allows.', '“in stock” တစ်ပိုင်းပဲ အစိမ်းရောင် ဖြစ်ပါတယ်။ နေရာလောက်ရင် စာကြောင်းက အဲဒီလိုင်းထဲမှာပဲ ဆက်သွားပါတယ်။'), standalone),
  ], [['WHATWG · Text-level semantics', htmlSpec + 'text-level-semantics.html']]),
];
