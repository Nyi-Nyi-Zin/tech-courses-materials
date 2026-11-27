import { guide, p, page, part, snippet } from './content.js';
import { demoPage, example, mdn, standalone } from './examples.js';

const learn = mdn + 'Learn_web_development/';
const html = mdn + 'Web/HTML/';
const media = 'https://javascript-training.cloudninemm.com/media/';
const images = 'https://javascript-training.cloudninemm.com/docs/media/html/';

const sample = (id, title, text, code, result) => example(id, title, text, code, result);
const exercise = (en, my) => part('practice', p('Hands-on exercise', 'လက်တွေ့လေ့ကျင့်ခန်း'), p(en, my));

export const htmlGuide = guide('html', 'HTML', 'HTML Living Standard', p(
  'Start by opening your first document. Over eight modules you will turn plain text into structured pages, add links and media, build tables and forms, and finish a three-page website.',
  'ပထမဆုံး HTML ဖိုင်ကို browser မှာ ဖွင့်ကြည့်ခြင်းကနေ စပါမယ်။ အခန်း ၈ ခန်းမှာ စာသားကို ဖွဲ့စည်းတာ၊ link နဲ့ media ထည့်တာ၊ ဇယားနဲ့ form ရေးတာတွေ လေ့ကျင့်ပြီး နောက်ဆုံးမှာ စာမျက်နှာ ၃ ခုပါ website တစ်ခု တည်ဆောက်ပါမယ်။',
), [
  page('web-fundamentals', p('Web Fundamentals & How HTML Works', 'Web အခြေခံနှင့် HTML အလုပ်လုပ်ပုံ'), p(
    'Create index.html, open it in your browser, and use DevTools to connect the source you wrote to the elements on the screen.',
    'index.html ဖိုင်တစ်ခုရေးပြီး browser မှာ ဖွင့်ပါ။ ကိုယ်ရေးထားတဲ့ HTML နဲ့ စာမျက်နှာပေါ်မှာ မြင်ရတဲ့ element တွေ ဘယ်လိုဆက်စပ်လဲ DevTools နဲ့ ကြည့်ပါမယ်။',
  ), [
    sample('browser-and-server', p('From a URL to a page', 'URL ကနေ စာမျက်နှာပေါ်လာပုံ'), p(
      'When you open an HTTPS URL, the browser requests a resource from a server. An HTML response is parsed into a tree called the DOM, which the browser uses to display the page. Opening a local .html file gives the browser the same kind of markup directly from disk. Inspect a heading in the Elements panel to find its place in the DOM.',
      'HTTPS URL ဖွင့်လိုက်ရင် browser က server ဆီ resource တောင်းပါတယ်။ HTML ပြန်ရလာတဲ့အခါ browser က ဖတ်ပြီး element တွေကို DOM လို့ခေါ်တဲ့ သစ်ပင်ပုံစံနဲ့ ဖွဲ့ပါတယ်။ ကိုယ့်စက်ထဲက .html ဖိုင်ဖွင့်ရင်တော့ browser က ဖိုင်ထဲက HTML ကို တိုက်ရိုက်ဖတ်ပါတယ်။ DevTools ရဲ့ Elements panel မှာ ခေါင်းစဉ်ကို Inspect လုပ်ပြီး DOM ထဲက နေရာကို ရှာကြည့်ပါ။',
    ), '<main>\n  <h1>City Workshop</h1>\n  <p>Doors open at 9 AM.</p>\n</main>', p('In the DOM, h1 and p are children of main.', 'DOM ထဲမှာ h1 နဲ့ p က main ရဲ့ အတွင်းက children တွေ ဖြစ်ပါတယ်။')),
    sample('html-css-javascript', p('What HTML, CSS, and JavaScript do', 'HTML၊ CSS နှင့် JavaScript ရဲ့ တာဝန်များ'), p(
      'HTML is a markup language. It identifies the content and its meaning. CSS sets how the content looks. JavaScript responds to events and can change the page. This button starts as a labelled HTML element. CSS colors it and an event listener updates the message.',
      'HTML က markup language ပါ။ စာသားတစ်ခုက ခေါင်းစဉ်လား၊ ခလုတ်လားဆိုတဲ့ အဓိပ္ပာယ်ကို သတ်မှတ်ပါတယ်။ CSS က မြင်ရမယ့်ပုံစံ သတ်မှတ်ပြီး JavaScript က နှိပ်တာလို event တွေကို တုံ့ပြန်ပေးပါတယ်။ နမူနာမှာ HTML နဲ့ ခလုတ်ရေးထားပြီး CSS နဲ့ အရောင်ပေးကာ နှိပ်လိုက်တဲ့အခါ JavaScript နဲ့ စာသားပြောင်းပါတယ်။',
    ), demoPage('Workshop check-in', '  <button type="button" id="check-in">Check in</button>\n  <p id="status">Waiting for check-in.</p>', '    button { color: white; background: #245672; }', '    document.querySelector("#check-in").addEventListener("click", () => {\n      document.querySelector("#status").textContent = "You are checked in.";\n    });'), p('Click Check in to update the status text.', 'Check in ခလုတ်နှိပ်လိုက်ရင် အောက်က status စာသား ပြောင်းပါမယ်။')),
    example('document', p('Write a complete HTML document', 'HTML Document အပြည့်အစုံ ရေးခြင်း'), p(
      'The doctype selects standards mode. Set the document language on html, put metadata in head, and put visible content in body. The UTF-8 declaration tells the browser how to decode the file. The title appears in the browser tab. The viewport setting lets mobile layouts use the device width.',
      'Doctype ကြောင့် browser က standards mode သုံးပါတယ်။ စာမျက်နှာရဲ့ ဘာသာစကားကို html မှာ သတ်မှတ်ပါ။ head မှာ metadata၊ body မှာ စာမျက်နှာပေါ် မြင်ရမယ့် content ထည့်ပါ။ UTF-8 က ဖိုင်ထဲက စာသားကို ဘယ် encoding နဲ့ ဖတ်ရမလဲ ပြောပေးပါတယ်။ title က browser tab မှာ ပေါ်ပြီး viewport က ဖုန်းမျက်နှာပြင်အကျယ်နဲ့ layout ကိုက်အောင် ကူညီပါတယ်။',
    ), demoPage('About City Workshop', '  <h1>Welcome to City Workshop</h1>\n  <p>We run weekend classes.</p>'), p('The tab title and the visible heading show different text.', 'Tab ပေါ်က title နဲ့ စာမျက်နှာထဲက ခေါင်းစဉ်က သီးခြားစီ ပေါ်ပါတယ်။'), standalone),
    sample('attributes', p('Elements, tags, attributes, and nesting', 'Elements၊ Tags၊ Attributes နှင့် အတွင်းထည့်ရေးပုံ'), p(
      'A paragraph element includes its opening tag, content, and closing tag. Put attributes in the opening tag. Global attributes such as id, class, and title work on all HTML elements. Element-specific attributes such as href have meaning on particular elements. Keep id values unique, close nested elements inside their parents, and omit end tags for void elements such as br and img.',
      'Paragraph element တစ်ခုမှာ အဖွင့် tag၊ အတွင်းကစာသားနဲ့ အပိတ် tag ပါပါတယ်။ Attribute ကို အဖွင့် tag မှာ ရေးပါ။ id၊ class၊ title တို့က HTML element အားလုံးမှာ သုံးနိုင်တဲ့ global attributes ပါ။ href လို attribute က သက်ဆိုင်ရာ element မှာ သုံးမှ အဓိပ္ပာယ်ရှိပါတယ်။ id တန်ဖိုးကို တစ်မျက်နှာအတွင်း ထပ်မသုံးပါနဲ့။ အတွင်းက element ကို အပြင်က element မပိတ်ခင် ပိတ်ပါ။ br နဲ့ img လို void element တွေမှာ အပိတ် tag မပါပါဘူး။',
    ), '<p id="hours" class="notice">\n  Doors open at <strong>9 AM</strong>.<br>\n  <a href="#hours">Check opening time</a>\n</p>', p('The time has strong importance. The link leads to the paragraph with id="hours".', 'အချိန်ကို strong နဲ့ အရေးကြီးကြောင်း ဖော်ပြထားပါတယ်။ Link က id="hours" ပါတဲ့ စာပိုဒ်ကို ညွှန်းပါတယ်။')),
    exercise('Save about-me.html. Set a tab title, a visible heading, and a paragraph about a hobby. Inspect the heading, edit it in DevTools, and reload. Then edit the file itself and see which change survives reload.', 'about-me.html ကို သိမ်းပါ။ Tab title၊ စာမျက်နှာခေါင်းစဉ်နဲ့ ဝါသနာအကြောင်း စာပိုဒ်တစ်ခု ထည့်ပါ။ DevTools မှာ ခေါင်းစဉ်ကို ပြင်ပြီး reload လုပ်ကြည့်ပါ။ ဖိုင်ထဲက ခေါင်းစဉ်ကိုပါ ပြင်ပြီး reload လုပ်တဲ့အခါ ဘယ်ပြောင်းလဲမှု ကျန်လဲ စစ်ပါ။'),
  ], [['MDN · Basic HTML syntax', learn + 'Core/Structuring_content/Basic_HTML_syntax'], ['WHATWG · HTML Living Standard', 'https://html.spec.whatwg.org/']]),

  page('text-hierarchy', p('Text Content & Heading Hierarchy', 'စာသားနှင့် ခေါင်းစဉ်အဆင့်များ'), p(
    'Turn a plain text article into a document with meaningful headings, paragraphs, emphasis, quotations, and code.',
    'ရိုးရိုးစာသားနဲ့ ရေးထားတဲ့ ဆောင်းပါးကို ခေါင်းစဉ်၊ စာပိုဒ်၊ အလေးပေးစာသား၊ ကိုးကားချက်နဲ့ code နမူနာတွေ ပါတဲ့ HTML document အဖြစ် ပြောင်းရေးပါမယ်။',
  ), [
    sample('headings', p('Choose heading levels by structure', 'အကြောင်းအရာအလိုက် ခေါင်းစဉ်အဆင့် ရွေးခြင်း'), p(
      'Use h1 for the main topic. Use h2 for sections and h3 for subdivisions of an h2. HTML offers levels through h6. Follow the content hierarchy and use CSS when you only want a different font size. Returning from h3 to h2 starts the next peer section.',
      'အဓိက ခေါင်းစဉ်ကို h1 သုံးပါ။ အပိုင်းတစ်ခုစီကို h2၊ h2 အောက်က အပိုင်းငယ်ကို h3 သုံးပါ။ h6 အထိ ရှိပါတယ်။ စာလုံးအရွယ် ပြောင်းချင်ရင် CSS သုံးပါ။ h3 ရေးပြီးနောက် h2 ကို ပြန်သုံးရင် တန်းတူ အပိုင်းအသစ်တစ်ခု စတာ ဖြစ်ပါတယ်။',
    ), '<h1>Workshop Guide</h1>\n<h2>Before You Arrive</h2>\n<h3>What to Bring</h3>\n<p>Bring a notebook.</p>\n<h2>After the Workshop</h2>\n<p>Share your project with the group.</p>', p('What to Bring is part of Before You Arrive.', 'What to Bring က Before You Arrive အောက်က အပိုင်းငယ် ဖြစ်ပါတယ်။')),
    sample('paragraphs', p('Paragraphs, line breaks, and whitespace', 'စာပိုဒ်၊ စာကြောင်းချိုးခြင်းနှင့် Whitespace'), p(
      'Use p for a paragraph, br when the line break is part of the content, and hr for a shift in topic between paragraphs. With ordinary rendering, repeated spaces and source line breaks collapse. Use separate paragraphs and CSS margins to control spacing.',
      'စာပိုဒ်အတွက် p၊ လိပ်စာလို နေရာမျိုးမှာ စာကြောင်းတစ်ကြောင်း တိတိကျကျ ချိုးဖို့ br၊ အကြောင်းအရာအပိုင်း ကူးပြောင်းတဲ့နေရာအတွက် hr သုံးပါ။ ပုံမှန် ပြသပုံမှာ HTML ဖိုင်ထဲက space တွေနဲ့ line break တွေကို browser က စုလိုက်ပါတယ်။ စာပိုဒ်ကြား အကွာအဝေးကို CSS margin နဲ့ ချိန်နိုင်ပါတယ်။',
    ), '<p>Find us here:</p>\n<p>12 Market Street<br>North Entrance</p>\n<hr>\n<p>The next      session\nstarts in June.</p>', p('The address uses two lines. The repeated spaces in the last paragraph collapse.', 'လိပ်စာကို နှစ်ကြောင်းနဲ့ မြင်ရပြီး နောက်ဆုံး စာပိုဒ်ထဲက space အများကြီးက တစ်ခုအဖြစ် ပေါ်ပါတယ်။')),
    sample('inline-text', p('Give inline text meaning', 'စာကြောင်းအတွင်း စာသားကို အဓိပ္ပာယ်ပေးခြင်း'), p(
      'Use strong for importance and em for stress. Use b to draw attention without extra importance, i for alternate voice or terms, and mark to highlight relevance. Use small for side comments, del for deleted text, and sub or sup for subscripts and superscripts.',
      'အရေးကြီးတာကို strong၊ အသံအလေးပေး ဖတ်ရမယ့်နေရာကို em သုံးပါ။ အထူးသတိပြုစေချင်တဲ့ စကားလုံးကို b၊ အသုံးအနှုန်း သီးခြားဖော်ပြဖို့ i၊ လက်ရှိအကြောင်းအရာနဲ့ သက်ဆိုင်လို့ highlight လုပ်ချင်တာကို mark သုံးနိုင်ပါတယ်။ မှတ်ချက်အတိုကို small၊ ပယ်ဖျက်ထားတဲ့စာသားကို del၊ အောက်ညွှန်းနဲ့ အပေါ်ညွှန်းကို sub နဲ့ sup သုံးပါ။',
    ), '<p><strong>Registration closes today.</strong> Bring <em>your own</em> laptop.</p>\n<p><b>Materials</b> include a note on <i>in situ</i> measurement.</p>\n<p>Search result: <mark>workshop</mark> · Price: <del>$25</del> $20</p>\n<p>H<sub>2</sub>O and 3<sup>2</sup> <small>(examples)</small></p>', p('Each tag marks a different meaning within its paragraph.', 'Tag တစ်ခုစီက စာပိုဒ်ထဲမှာ မတူတဲ့ အဓိပ္ပာယ်ကို ဖော်ပြပါတယ်။')),
    sample('entities', p('Quote material and show code', 'ကိုးကားစာသားနှင့် Code ဖော်ပြခြင်း'), p(
      'Use blockquote for a quoted passage, q for a short inline quote, and cite for the title of a work. Use code for a code fragment and wrap multi-line code in pre to retain line breaks and indentation. Character references such as &lt;, &gt;, and &amp; let you display reserved characters as text.',
      'ကိုးကားစာပိုဒ်အတွက် blockquote၊ စာကြောင်းထဲက ကိုးကားချက်အတိုအတွက် q၊ ကိုးကားထားတဲ့ လက်ရာအမည်အတွက် cite သုံးပါ။ Code အတိုကို code နဲ့ ဖော်ပြပြီး အကြောင်းများတဲ့ code မှာ line break နဲ့ indentation ထိန်းဖို့ pre နဲ့ ပတ်ပါ။ &lt;၊ &gt; နဲ့ &amp; လို character references သုံးရင် reserved character တွေကို စာသားအဖြစ် ပြနိုင်ပါတယ်။',
    ), '<blockquote><p>Start with a small example.</p></blockquote>\n<p><cite>Workshop Notes</cite> says <q>Save often.</q></p>\n<pre><code>&lt;h1&gt;News &amp; Events&lt;/h1&gt;\n&lt;p&gt;Open from 9 AM.&lt;/p&gt;</code></pre>\n<p>&copy; City Workshop</p>', p('The code is printed as text over two lines.', 'Code ကို စာသားအဖြစ် နှစ်ကြောင်းနဲ့ ပြထားပါတယ်။')),
    exercise('Write blog-article.html with a main title, two sections, one quotation, and a two-line code example. Read only the headings to check whether they describe the article.', 'blog-article.html မှာ အဓိကခေါင်းစဉ်၊ အပိုင်းနှစ်ခု၊ ကိုးကားချက်တစ်ခုနဲ့ နှစ်ကြောင်းပါ code နမူနာ ထည့်ပါ။ ခေါင်းစဉ်တွေချည်း ဖတ်ကြည့်ပြီး ဆောင်းပါးအကြောင်း ခန့်မှန်းနိုင်လား စစ်ပါ။'),
  ], [['MDN · Headings and paragraphs', learn + 'Core/Structuring_content/Headings_and_paragraphs'], ['MDN · Character references', html + 'Guides/Character_references']]),

  page('lists-navigation', p('Lists & Navigation', 'စာရင်းများနှင့် လင့်ခ်များ'), p(
    'Turn items into lists and connect pages using readable links, file paths, and fragment identifiers.',
    'Item တွေကို စာရင်းအဖြစ် ဖွဲ့ပြီး လင့်ခ်စာသား၊ ဖိုင်လမ်းကြောင်းနဲ့ fragment identifier တွေကို သုံးကာ စာမျက်နှာတွေ ချိတ်ဆက်ပါမယ်။',
  ), [
    sample('lists', p('Choose among three list types', 'စာရင်းအမျိုးအစား သုံးမျိုး ရွေးခြင်း'), p(
      'Use ul when order is incidental, ol when sequence or ranking matters, and dl for terms with descriptions. A nested list belongs inside the li it expands. Set start on ol to continue numbering or type to choose a numbering style.',
      'အစီအစဉ် မအရေးကြီးရင် ul၊ အဆင့်လိုက် လုပ်ရတာ ဒါမှမဟုတ် အဆင့်သတ်မှတ်တာအတွက် ol၊ ဝေါဟာရနဲ့ ရှင်းလင်းချက် တွဲဖို့ dl သုံးပါ။ Nested list ကို သက်ဆိုင်ရာ li အထဲမှာ ထည့်ပါ။ နံပါတ်ဆက်ပေးဖို့ ol မှာ start၊ နံပါတ်ရေးပုံ ရွေးဖို့ type သတ်မှတ်နိုင်ပါတယ်။',
    ), '<ul>\n  <li>Supplies<ul><li>Notebook</li><li>Pencil</li></ul></li>\n</ul>\n<ol start="3" type="1"><li>Open your file</li><li>Check the page</li></ol>\n<dl><dt>DOM</dt><dd>The page represented as a tree.</dd></dl>', p('The numbered steps start at 3. The supplies have a nested list.', 'အဆင့်နံပါတ်က 3 ကနေ စပါတယ်။ Supplies အောက်မှာ စာရင်းတစ်ခု ထပ်ဝင်ပါတယ်။')),
    sample('links', p('Write links that name their destination', 'သွားမယ့်နေရာကို ဖော်ပြတဲ့ Link ရေးခြင်း'), p(
      'The href holds the destination. The text inside a should help people predict what opens. For an intentional new tab, use target="_blank" and rel="noopener" and say that a new tab opens.',
      'href က သွားမယ့်လိပ်စာပါ။ a ထဲက စာသားကို ဖတ်ရုံနဲ့ ဘယ်စာမျက်နှာရောက်မယ်ဆိုတာ သိနိုင်အောင် ရေးပါ။ Tab အသစ်မှာ ဖွင့်စေချင်ရင် target="_blank" နဲ့ rel="noopener" သုံးပြီး tab အသစ် ဖွင့်မယ်ဆိုတာ ထည့်ပြောပါ။',
    ), '<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/"\n   target="_blank" rel="noopener">Read the HTML reference (new tab)</a>', p('The label identifies the destination before you select it.', 'Link မနှိပ်ခင် ဘယ်အကြောင်းအရာကို ဖွင့်မယ်ဆိုတာ ဖတ်လို့ရပါတယ်။')),
    snippet('file-paths', p('Relative and absolute file paths', 'Relative နှင့် Absolute File Paths'), p(
      'Relative paths start from the current document’s folder. From work/project.html, ./notes.html stays inside work and ../index.html goes up one folder. A leading slash starts from the website root. An absolute URL includes the scheme and host and can point to another site. Save the matching files first, then test each link.',
      'Relative path ကို လက်ရှိ document ရှိတဲ့ folder ကနေ တွက်ပါတယ်။ work/project.html ကနေ ./notes.html ဆို work ထဲမှာပဲ ရှာပြီး ../index.html ဆို folder တစ်ဆင့် အပေါ်တက်ပါတယ်။ / နဲ့ စတဲ့ path က website root ကနေ စရှာပါတယ်။ Absolute URL မှာ scheme နဲ့ host ပါပြီး တခြား website ကို ချိတ်နိုင်ပါတယ်။ သက်ဆိုင်ရာ ဖိုင်တွေ ရေးသိမ်းပြီးမှ link တစ်ခုစီ စမ်းပါ။',
    ), '<a href="./notes.html">Project notes</a>\n<a href="../index.html">Home</a>\n<a href="https://example.com/">Partner website</a>'),
    sample('fragments', p('Jump to a section or start an action', 'အပိုင်းတစ်ခုဆီ ခုန်သွားခြင်းနှင့် Action Links'), p(
      'Use # plus an id to target a section on the same page. mailto: and tel: hand off to a configured email or phone app. The download attribute requests downloading a linked file and works with same-origin URLs and blob or data URLs.',
      'စာမျက်နှာထဲက အပိုင်းတစ်ခုဆီ သွားဖို့ # နောက်မှာ သက်ဆိုင်ရာ id ထည့်ပါ။ mailto: နဲ့ tel: က စက်မှာ သတ်မှတ်ထားတဲ့ email သို့မဟုတ် ဖုန်း app ကို ဖွင့်ပေးပါတယ်။ download attribute က ချိတ်ထားတဲ့ ဖိုင်ကို download လုပ်ဖို့ browser ကို ပြောပါတယ်။ Same-origin URL၊ blob URL နဲ့ data URL တွေမှာ သုံးနိုင်ပါတယ်။',
    ), '<p><a href="#contact">Jump to contact</a></p>\n<h2 id="contact">Contact</h2>\n<a href="mailto:hello@example.com">Email us</a>\n<a href="tel:+12025550140">Call the office</a>\n<a href="data:text/plain,Workshop%20checklist" download="checklist.txt">Download checklist</a>', p('The first link targets the Contact heading.', 'ပထမ link က Contact ခေါင်းစဉ်ဆီ ညွှန်းပါတယ်။')),
    exercise('Make index.html, projects.html, and contact.html. Give each page links to the other two. Move projects.html into a work folder and update the links both ways.', 'index.html၊ projects.html နဲ့ contact.html ရေးပါ။ တစ်မျက်နှာစီကနေ ကျန်နှစ်မျက်နှာကို သွားတဲ့ link ထည့်ပါ။ projects.html ကို work folder ထဲ ရွှေ့ပြီး အဝင်နဲ့ အပြန် link နှစ်ဖက်စလုံး ပြင်စမ်းပါ။'),
  ], [['MDN · Lists', learn + 'Core/Structuring_content/Lists'], ['MDN · Creating links', learn + 'Core/Structuring_content/Creating_links']]),

  page('images-media', p('Images, Media & External Embeds', 'ပုံ၊ အသံ၊ ဗီဒီယိုနှင့် Embed များ'), p(
    'Add images and playable media with text alternatives, captions, and files sized for the reader’s screen.',
    'ပုံ၊ အသံနဲ့ ဗီဒီယို ထည့်ပါမယ်။ ပုံအတွက် စာသား၊ ဗီဒီယိုအတွက် captions နဲ့ မျက်နှာပြင်အရွယ်လိုက် ရွေးနိုင်တဲ့ image ဖိုင်တွေကိုလည်း သုံးပါမယ်။',
  ), [
    sample('images', p('Image files, dimensions, and alt text', 'ပုံဖိုင်၊ အရွယ်အစားနှင့် Alt Text'), p(
      'The src points to a file. Use JPEG for photos, PNG for lossless graphics or transparency, SVG for scalable diagrams, and WebP when it gives a smaller suitable file. Set width and height to reserve space at the correct aspect ratio. Describe what matters in alt. Use alt="" for decoration.',
      'src မှာ ပုံဖိုင်လိပ်စာ ထည့်ပါတယ်။ ဓာတ်ပုံအတွက် JPEG၊ အသေးစိတ်အရည်အသွေး ထိန်းဖို့ သို့မဟုတ် နောက်ခံဖောက်ဖို့ PNG၊ ချဲ့ကြည့်လို့ရတဲ့ diagram အတွက် SVG သုံးနိုင်ပါတယ်။ သင့်တော်တဲ့ ပုံကို ဖိုင်အရွယ်ပိုသေးအောင် သိမ်းလို့ရရင် WebP သုံးနိုင်ပါတယ်။ ပုံမပေါ်ခင် နေရာချန်ထားဖို့ width နဲ့ height ရေးပါ။ ပုံထဲက ဖတ်သူသိဖို့လိုတဲ့အချက်ကို alt မှာ ရေးပါ။ အလှဆင်ပုံဆို alt="" ထားပါ။',
    ), `<img src="${images}workshop-480.webp"
     alt="Diagram illustrating a client communicating with a server"
     width="480" height="270">`, p('The diagram loads into a reserved 480-by-270 area.', 'ပုံအတွက် 480 × 270 နေရာ ချန်ထားပြီး ပုံပေါ်လာပါတယ်။')),
    sample('figure', p('Connect a figure to its visible caption', 'ပုံနှင့် မြင်ရမယ့် ပုံစာကို ချိတ်ခြင်း'), p(
      'Use figure for self-contained material worth referring to as a unit. A figcaption gives readers visible context. The alt text still explains meaningful visual information to readers who cannot see the image.',
      'ပုံနဲ့ ပုံစာကို တစ်စုတည်း ညွှန်းလိုတဲ့အခါ figure သုံးပါ။ figcaption က ဖတ်သူအားလုံး မြင်ရတဲ့ ပုံစာဖြစ်ပြီး alt က ပုံမမြင်နိုင်တဲ့သူအတွက် ပုံထဲက အရေးပါတဲ့အချက်ကို ပြောပါတယ်။',
    ), `<figure>
  <img src="${images}workshop-480.webp"
       width="480" height="270"
       alt="Client and server connected over a network">
  <figcaption>Figure 1. The two sides of a web request.</figcaption>
</figure>`, p('The caption appears directly below the diagram.', 'ပုံရဲ့ အောက်မှာ ပုံစာ ပေါ်ပါတယ်။')),
    sample('responsive-images', p('Choose a file based on the available space', 'နေရာအကျယ်အလိုက် ပုံဖိုင် ရွေးခြင်း'), p(
      'Use width descriptors in srcset and tell the browser the intended layout width with sizes. It can pick a candidate using the layout width and display density. Use picture for a different crop, for example a square image on a narrow screen. Use loading="lazy" on images farther down the page.',
      'srcset ထဲမှာ ပုံဖိုင်တစ်ခုစီရဲ့ pixel အကျယ် ထည့်ပြီး layout ထဲမှာ ပုံအတွက် သုံးမယ့်အကျယ်ကို sizes နဲ့ ပြောပါ။ Browser က layout အကျယ်နဲ့ screen density ကို ကြည့်ပြီး ဖိုင်ရွေးပါတယ်။ အကျယ်နည်းတဲ့ screen မှာ စတုရန်း crop သုံးတာလို ပုံဖွဲ့ပုံ ပြောင်းချင်ရင် picture သုံးပါ။ အောက်ပိုင်းက ပုံတွေကို loading="lazy" ထားနိုင်ပါတယ်။',
    ), `<picture>
  <source media="(max-width: 500px)" srcset="${images}workshop-square.webp"
          width="480" height="480">
  <img src="${images}workshop-480.webp"
       srcset="${images}workshop-480.webp 480w, ${images}workshop-960.webp 960w"
       sizes="(max-width: 600px) 100vw, 480px"
       width="480" height="270" style="max-width:100%;height:auto"
       loading="lazy" alt="A diagram of a client and a server">
</picture>`, p('Resize the preview and look at the requested file in DevTools.', 'Preview ကို ကျဉ်းကြည့်ပြီး DevTools မှာ browser ဘယ်ဖိုင် တောင်းသွားလဲ စစ်ပါ။')),
    sample('media', p('Play audio and video or embed a page', 'အသံ၊ ဗီဒီယို ဖွင့်ခြင်းနှင့် Page Embed လုပ်ခြင်း'), p(
      'The controls attribute adds a player. List available files with source and supply a video poster to show before playback. A track links to a WebVTT captions file. Give an iframe a descriptive title so its purpose is clear when a reader reaches it.',
      'controls ထည့်ရင် play၊ pause စတဲ့ ခလုတ်တွေ ပေါ်ပါတယ်။ ရနိုင်တဲ့ ဖိုင်တွေကို source နဲ့ သတ်မှတ်ပြီး video မဖွင့်ခင် ပြမယ့်ပုံအတွက် poster သုံးပါ။ WebVTT captions ဖိုင်ကို track နဲ့ ချိတ်ပါ။ iframe ဘာပြမလဲ သိနိုင်ဖို့ title မှာ ရေးပါ။',
    ), `<audio controls preload="none">
  <source src="${media}lesson.ogg" type="audio/ogg">
</audio>
<video controls width="420" style="max-width:100%"
       poster="${images}workshop-480.webp">
  <source src="${media}lesson.webm" type="video/webm">
  <track kind="captions" src="${media}lesson-en.vtt" srclang="en" label="English">
</video>
<iframe title="Workshop location note"
        srcdoc="<p>Location: North Hall, Room 2.</p>"></iframe>`, p('Try the audio and the video controls. Turn on English captions in the video player.', 'အသံနဲ့ video player က ခလုတ်တွေ စမ်းပြီး video player မှာ English captions ဖွင့်ကြည့်ပါ။')),
    exercise('Create a three-image gallery. Give each figure a caption and an alt attribute. Test one broken image path, then restore it. Add a video with controls and captions.', 'ပုံသုံးပုံပါ gallery ရေးပါ။ Figure တိုင်းမှာ ပုံစာနဲ့ alt attribute ထည့်ပါ။ ပုံလမ်းကြောင်းတစ်ခု ခဏမှားအောင် ပြင်ပြီး ရလဒ်ကြည့်ပါ။ ပြီးရင် အမှန်ပြန်ထားပြီး controls နဲ့ captions ပါတဲ့ video ထည့်ပါ။'),
  ], [['MDN · Responsive images', html + 'Guides/Responsive_images'], ['MDN · Video and audio content', learn + 'Core/Structuring_content/HTML_video_and_audio']]),

  page('data-tables', p('Data Tables & Structured Information', 'ဇယားများနှင့် အချက်အလက်ဖွဲ့စည်းပုံ'), p(
    'Represent information that readers compare by row and column, such as a workshop schedule or a price list.',
    'သင်တန်းအချိန်ဇယား၊ ဈေးနှုန်းစာရင်းလို row နဲ့ column အလိုက် ယှဉ်ဖတ်ရတဲ့ အချက်အလက်ကို HTML ဇယားနဲ့ ရေးပါမယ်။',
  ), [
    sample('tables', p('Build rows, headers, and data cells', 'Row၊ Header နှင့် Data Cell များ ရေးခြင်း'), p(
      'Wrap the grid in table and put each row in tr. Use th for a header and td for a value. Read each value together with the header that explains what it means.',
      'ဇယားတစ်ခုလုံးကို table နဲ့ ပတ်ပြီး row တစ်ကြောင်းစီကို tr နဲ့ ရေးပါ။ အမည်တပ်တဲ့ cell အတွက် th၊ တန်ဖိုးအတွက် td သုံးပါ။ Cell တစ်ကွက်ကို ဖတ်တဲ့အခါ အပေါ်က header နဲ့ တွဲဖတ်မှ တန်ဖိုးရဲ့ အဓိပ္ပာယ် သိရပါတယ်။',
    ), '<table>\n  <tr><th>Session</th><th>Seats</th></tr>\n  <tr><td>HTML Basics</td><td>12</td></tr>\n  <tr><td>Web Forms</td><td>8</td></tr>\n</table>', p('The header row identifies what the cells below it represent.', 'အပေါ်က header row က အောက်မှာပါတဲ့ အချက်အလက် အမျိုးအစားကို ပြပါတယ်။')),
    sample('table-sections', p('Name the table and group related rows', 'ဇယားအမည်ပေးပြီး Row များ စုဖွဲ့ခြင်း'), p(
      'Place caption first to describe the table’s topic. Put column headings in thead, data in tbody, and totals or summary rows in tfoot. These elements describe the role of the rows. Border, padding, and other appearance settings belong in CSS.',
      'ဇယားအကြောင်း ပြောတဲ့ caption ကို အစမှာ ထည့်ပါ။ Column ခေါင်းစဉ်တွေကို thead၊ data တွေကို tbody၊ စုစုပေါင်းတန်ဖိုးလို အနှစ်ချုပ် row ကို tfoot ထဲ ထည့်ပါ။ ဒီ element တွေက row တွေရဲ့ တာဝန်ကို ပြပါတယ်။ အနားသတ်၊ padding နဲ့ မြင်ရမယ့်ပုံစံကို CSS မှာ ရေးပါ။',
    ), '<table>\n  <caption>Seats available this week</caption>\n  <thead><tr><th scope="col">Session</th><th scope="col">Seats</th></tr></thead>\n  <tbody>\n    <tr><th scope="row">HTML Basics</th><td>12</td></tr>\n    <tr><th scope="row">Web Forms</th><td>8</td></tr>\n  </tbody>\n  <tfoot><tr><th scope="row">Total</th><td>20</td></tr></tfoot>\n</table>', p('The table starts with its name and ends with the total.', 'ဇယားက အမည်နဲ့ စပြီး စုစုပေါင်းတန်ဖိုးနဲ့ ဆုံးပါတယ်။')),
    sample('table-spans', p('Span cells and associate headers', 'Cell ပေါင်းခြင်းနှင့် Header ချိတ်ဆက်ခြင်း'), p(
      'Use colspan to cover more than one column and rowspan to cover more than one row. Leave out the cells already covered by a span. Scope col and row on th identify the corresponding data. Keep table structure simple so the headers are easy to follow.',
      'Column တစ်ခုထက်ပို ဖုံးဖို့ colspan၊ row တစ်ကြောင်းထက်ပို ဖုံးဖို့ rowspan သုံးပါ။ ပေါင်းထားတဲ့ cell က ဖုံးပြီးသားနေရာမှာ td ထပ်ရေးစရာမလိုပါ။ th မှာ scope="col" နဲ့ scope="row" သုံးပြီး အောက်ဘက် column သို့မဟုတ် ဘေးဘက် row က data တွေနဲ့ ချိတ်ဆက်ပါ။',
    ), '<table>\n  <caption>Monday and Tuesday schedule</caption>\n  <thead><tr><th scope="col">Time</th><th scope="col">Monday</th><th scope="col">Tuesday</th></tr></thead>\n  <tbody>\n    <tr><th scope="row">09:00</th><td rowspan="2">Group project</td><td>HTML</td></tr>\n    <tr><th scope="row">10:00</th><td>CSS</td></tr>\n    <tr><th scope="row">12:00</th><td colspan="2">Lunch break</td></tr>\n  </tbody>\n</table>', p('Group project spans two time slots and Lunch break spans both days.', 'Group project က အချိန်နှစ်ခုကို ဖုံးပြီး Lunch break က နှစ်ရက်လုံးကို ဖုံးပါတယ်။')),
    sample('layout', p('Use CSS for page layout', 'စာမျက်နှာ Layout ကို CSS နဲ့ ရေးခြင်း'), p(
      'A data table communicates relationships between cells and their headers. For visual arrangements such as a row of cards, use ordinary content elements and CSS Grid or Flexbox. Then the HTML still describes the content when styles are unavailable.',
      'Data table မှာ cell နဲ့ header ကြား ဆက်စပ်မှု ရှိပါတယ်။ Card တွေ ဘေးချင်းယှဉ်ဖို့လို မြင်ရမယ့် အစီအမံမျိုးအတွက် သင့်တော်တဲ့ HTML element တွေ ရွေးပြီး CSS Grid သို့မဟုတ် Flexbox နဲ့ စီပါ။ CSS မရတဲ့အခါမှာလည်း HTML ထဲက အကြောင်းအရာကို ဖတ်လို့ရနေပါတယ်။',
    ), '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">\n  <article><h2>HTML Basics</h2><p>Plan your first page.</p></article>\n  <article><h2>Web Forms</h2><p>Collect input.</p></article>\n</div>', p('The two cards display side by side without table markup.', 'Card နှစ်ခုကို CSS Grid နဲ့ ဘေးချင်းယှဉ် ပြထားပါတယ်။')),
    exercise('Make a five-day timetable with a caption and scoped headers. Add a lunch row spanning all five day columns. Choose a cell and explain which day and time its headers identify.', 'ငါးရက်စာ အချိန်ဇယားကို caption နဲ့ scope ပါတဲ့ header တွေသုံးပြီး ရေးပါ။ နားချိန် row မှာ နေ့ငါးရက်လုံးကို ပေါင်းပြပါ။ Cell တစ်ကွက် ရွေးပြီး header တွေကို ကြည့်ကာ ဘယ်နေ့ ဘယ်အချိန်လဲ ပြောကြည့်ပါ။'),
  ], [['MDN · HTML table basics', learn + 'Core/Structuring_content/HTML_table_basics'], ['MDN · Table element', html + 'Reference/Elements/table']]),

  page('interactive-forms', p('Interactive Forms & Input Validation', 'Forms နှင့် ထည့်ထားတဲ့ တန်ဖိုးတွေ စစ်ဆေးပုံ'), p(
    'Build a form with labelled controls, decide how its values are submitted, and use the browser to check input before submission.',
    'Label ပါတဲ့ form controls တွေ ရေးပါမယ်။ ဖြည့်ထားတဲ့ တန်ဖိုးတွေ ဘယ်လိုပို့မလဲ ရွေးပြီး submit မလုပ်ခင် browser နဲ့ စစ်ဆေးပါမယ်။',
  ), [
    part('forms', p('Submit named values with GET or POST', 'အမည်ပါတဲ့ တန်ဖိုးတွေကို GET သို့မဟုတ် POST နဲ့ ပို့ခြင်း'), p(
      'The form action identifies the URL that receives the submission. Use GET for lookups such as search. The browser adds submitted name=value pairs to the URL query. Use POST for actions that change state. The browser puts the values in the request body. A control without a name is omitted from the submitted data. These action URLs illustrate endpoints your application would provide. Run the example and submit either form to see the simulated request in the console.',
      'form ရဲ့ action မှာ data လက်ခံမယ့် URL ရေးပါတယ်။ ရှာဖွေတာလို data ဖတ်တဲ့အလုပ်အတွက် GET သုံးပါ။ ပို့မယ့် name=value တွေကို browser က URL ရဲ့ query ထဲ ပေါင်းပါတယ်။ မှတ်တမ်းအသစ် ဖန်တီးတာလို data ပြောင်းတဲ့အလုပ်အတွက် POST သုံးပါ။ တန်ဖိုးတွေ request body ထဲ ပါသွားပါတယ်။ name မပါတဲ့ control ရဲ့ တန်ဖိုးကို ပေးပို့တဲ့ data ထဲ မထည့်ပါဘူး။ နမူနာက action URL တွေမှာ ကိုယ့် application က လက်ခံမယ့် လမ်းကြောင်း ရှိဖို့လိုပါတယ်။ ဒီနမူနာကို Run ပြီး form တစ်ခု submit လုပ်ရင် ပေးပို့မယ့် request ပုံစံကို console မှာ တွေ့ရပါတယ်။',
    ), '<form action="/search" method="get">\n  <label>Search workshops <input type="search" name="q"></label>\n  <button type="submit">Search</button>\n</form>\n<form action="/registrations" method="post">\n  <label>Email <input type="email" name="email" required></label>\n  <button type="submit">Register</button>\n</form>'),
    sample('input-types', p('Choose a control for each value', 'တန်ဖိုးအလိုက် Control ရွေးခြင်း'), p(
      'Use text for ordinary text, email for an email address, password for masked entry, number for quantities, and date for dates. Radio buttons with a shared name offer a single choice. Checkboxes allow independent choices. Use file to choose a local file. To send a file to a server, use POST with enctype="multipart/form-data". Use HTTPS for real submissions.',
      'ရိုးရိုးစာသားအတွက် text၊ email လိပ်စာအတွက် email၊ ရိုက်နေတဲ့ စာသားဖုံးဖို့ password၊ အရေအတွက်အတွက် number၊ ရက်စွဲအတွက် date သုံးပါ။ name တူတဲ့ radio တွေထဲက တစ်ခုကို ရွေးနိုင်ပါတယ်။ Checkbox တွေကို သီးခြားစီ ရွေးနိုင်ပါတယ်။ စက်ထဲက ဖိုင်ရွေးဖို့ file သုံးပါ။ Server ဆီ ဖိုင်ပို့ရင် POST နဲ့ enctype="multipart/form-data" ထည့်ပါ။ တကယ် data ပို့တဲ့အခါ HTTPS သုံးပါ။',
    ), '<p><label>Name <input type="text" name="name"></label></p>\n<p><label>Email <input type="email" name="email"></label></p>\n<p><label>Password <input type="password" name="password"></label></p>\n<p><label>Seats <input type="number" name="seats" min="1"></label></p>\n<p><label>Date <input type="date" name="date"></label></p>\n<fieldset>\n  <legend>Session time</legend>\n  <label><input type="radio" name="time" value="am"> Morning</label>\n  <label><input type="radio" name="time" value="pm"> Afternoon</label>\n</fieldset>\n<p><label><input type="checkbox" name="updates"> Send updates</label></p>\n<p><label>Attachment <input type="file" name="attachment"></label></p>', p('Select both radio choices in turn. Each selection clears the other.', 'Radio နှစ်ခုကို တစ်လှည့်စီ ရွေးကြည့်ပါ။ တစ်ခုရွေးတိုင်း အရင်ရွေးထားတာ ပျောက်ပါတယ်။')),
    sample('labels', p('Label fields and group related controls', 'Field ကို Label ပေးပြီး ဆက်စပ်တာတွေ စုခြင်း'), p(
      'Match a label’s for with the field’s unique id. Clicking the label focuses the field. Use fieldset and legend to describe a group. A select presents options with submitted values. A textarea accepts multiple lines.',
      'label ရဲ့ for တန်ဖိုးကို field ရဲ့ သီးခြား id နဲ့ တူအောင် ရေးပါ။ Label နှိပ်ရင် field ကို focus ရောက်ပါတယ်။ ဆက်စပ်တဲ့ controls တွေ စုဖို့ fieldset သုံးပြီး အုပ်စုအမည်ကို legend နဲ့ ရေးပါ။ select ထဲက option တစ်ခုစီမှာ ပို့မယ့် value သတ်မှတ်နိုင်ပါတယ်။ စာကြောင်းများများ လက်ခံဖို့ textarea သုံးပါ။',
    ), '<fieldset>\n  <legend>Workshop preferences</legend>\n  <label for="course">Course</label>\n  <select id="course" name="course">\n    <option value="html">HTML Basics</option>\n    <option value="forms">Web Forms</option>\n  </select>\n  <label for="notes">Notes</label>\n  <textarea id="notes" name="notes" rows="3"></textarea>\n</fieldset>', p('Click Notes to focus the textarea. Type a message on multiple lines.', 'Notes ကို နှိပ်ရင် textarea ကို focus ရောက်ပါတယ်။ စာကြောင်းအများကြီး ရိုက်ကြည့်ပါ။')),
    sample('validation', p('Check input before submission', 'Submit မလုပ်ခင် ဖြည့်ထားတာကို စစ်ခြင်း'), p(
      'Use required for mandatory input, minlength for text length, max for numeric limits, and pattern for a text format. A placeholder is a hint and disappears as people type. Keep a visible label. The browser reports failed constraints and stops normal submission. The server must validate the data it receives. This preview displays a message instead of sending a request.',
      'မဖြစ်မနေ ဖြည့်ရမယ့် field မှာ required၊ စာသားအနည်းဆုံး အရှည်အတွက် minlength၊ ကိန်းဂဏန်း အများဆုံးတန်ဖိုးအတွက် max၊ စာသားပုံစံအတွက် pattern သုံးပါ။ Placeholder က ရိုက်ရမယ့် နမူနာပဲဖြစ်ပြီး စရိုက်တာနဲ့ ပျောက်ပါတယ်။ Label ကို သီးခြား မြင်ရအောင် ထားပါ။ တန်ဖိုးစစ်လို့ မအောင်ရင် browser က အသိပေးပြီး ပေးမပို့သေးပါဘူး။ Server မှာလည်း လက်ခံရရှိတဲ့ data ကို ပြန်စစ်ရပါတယ်။ ဒီ preview မှာ data ပို့မယ့်အစား ရလဒ်စာသား ပေါ်ပါတယ်။',
    ), demoPage('Workshop registration', `  <form id="registration">
    <p><label>Name <input name="name" required minlength="3"></label></p>
    <p><label>Email <input type="email" name="email" required></label></p>
    <p><label>Seats <input type="number" name="seats" required min="1" max="4"></label></p>
    <p><label>Code (two capital letters)
      <input name="code" pattern="[A-Z]{2}" placeholder="AB">
    </label></p>
    <button type="submit">Check registration</button>
  </form>
  <p id="status" role="status"></p>`, '', `    document.querySelector("#registration").addEventListener("submit", (event) => {
      event.preventDefault();
      document.querySelector("#status").textContent = "All fields passed browser validation.";
    });`), p('Submit once with empty fields and again with valid test values to compare the feedback.', 'အလွတ်နဲ့ တစ်ကြိမ်၊ စည်းမျဉ်းနဲ့ကိုက်တဲ့ စမ်းသပ်တန်ဖိုးတွေနဲ့ တစ်ကြိမ် submit လုပ်ပြီး ပြတဲ့စာသား ယှဉ်ကြည့်ပါ။')),
    exercise('Create registration.html with a name, email, course selector, and comments. Test an empty name, an invalid email, and a valid submission in that order. Add a phone field with a visible label.', 'registration.html မှာ အမည်၊ email၊ သင်တန်းရွေးစရာနဲ့ မှတ်ချက် ထည့်ပါ။ အမည်အလွတ်၊ email ပုံစံမှား၊ အားလုံးမှန်ဆိုပြီး အစဉ်လိုက် စမ်းပါ။ ပြီးရင် မြင်ရတဲ့ label နဲ့ ဖုန်းနံပါတ် field ထပ်ထည့်ပါ။'),
  ], [['MDN · Forms and buttons', learn + 'Core/Structuring_content/HTML_forms'], ['MDN · Form validation', learn + 'Extensions/Forms/Form_validation']]),

  page('semantic-html5', p('Semantic HTML & Page Architecture', 'Semantic HTML နှင့် စာမျက်နှာဖွဲ့စည်းပုံ'), p(
    'Choose elements that describe the purpose of each region, then check how those regions appear in the browser’s accessibility tree.',
    'စာမျက်နှာတစ်ပိုင်းစီရဲ့ တာဝန်ကို ဖော်ပြတဲ့ element တွေ ရွေးပါမယ်။ ပြီးရင် browser ရဲ့ accessibility tree မှာ ဘယ်လို ပေါ်လဲ ကြည့်ပါမယ်။',
  ), [
    sample('containers', p('Choose a semantic element or a generic container', 'Semantic Element သို့မဟုတ် Generic Container ရွေးခြင်း'), p(
      'Use div to group content for styling and span to mark an inline phrase for styling when no specific element fits. Use a semantic element when the content has a clear purpose. For example, nav identifies major navigation and helps assistive technology expose it as a landmark.',
      'အကြောင်းအရာတွေကို CSS နဲ့ အုပ်စုလိုက် ချိန်ဖို့ div၊ စာကြောင်းထဲက အပိုင်းတိုတစ်ခုကို ချိန်ဖို့ span သုံးနိုင်ပါတယ်။ အကြောင်းအရာရဲ့ တာဝန် ရှင်းရင် သင့်တော်တဲ့ semantic element သုံးပါ။ ဥပမာ အဓိက navigation အတွက် nav သုံးတာကြောင့် assistive technology က သွားလို့ရတဲ့ landmark အဖြစ် ပြနိုင်ပါတယ်။',
    ), '<div class="site-bar">\n  <span class="brand">City Workshop</span>\n  <nav aria-label="Main"><a href="#sessions">Find sessions</a></nav>\n</div>\n<h2 id="sessions">Sessions</h2>', p('The nav has a navigation role. The outer div groups it with the brand.', 'nav က navigation role ရပြီး အပြင်က div က brand နဲ့ nav ကို တစ်စုတည်း ထားပေးပါတယ်။')),
    sample('landmarks', p('Structure a page with seven semantic elements', 'Semantic Elements ခုနစ်မျိုးနဲ့ စာမျက်နှာ ဖွဲ့စည်းခြင်း'), p(
      'A page-level header introduces the site, nav holds major links, and main wraps the dominant content. Use section for a thematic group, article for a self-contained item, aside for related material, and footer for closing details. Landmark roles depend on context. For example, a header inside an article is the article’s header, whereas a page-level header is the banner. A named section can be exposed as a region.',
      'စာမျက်နှာအဆင့် header က site ကို မိတ်ဆက်ပြီး nav မှာ အဓိက link တွေ ထည့်ပါတယ်။ အဓိက content ကို main နဲ့ ပတ်ပါ။ အကြောင်းအရာတူတဲ့ အုပ်စုကို section၊ သီးခြားဖတ်လို့ရတဲ့ အပိုင်းကို article၊ ဆက်စပ်အကြောင်းအရာကို aside၊ အောက်ဆုံး အချက်အလက်ကို footer သုံးပါ။ Landmark role က element ရဲ့ နေရာပေါ် မူတည်ပါတယ်။ Article ထဲက header က article အတွက်ဖြစ်ပြီး စာမျက်နှာအဆင့် header က banner ဖြစ်ပါတယ်။ အမည်ပေးထားတဲ့ section က region ဖြစ်နိုင်ပါတယ်။',
    ), '<header>\n  <h1>City Workshop News</h1>\n  <nav aria-label="Main"><a href="#updates">Updates</a></nav>\n</header>\n<main>\n  <section id="updates" aria-labelledby="updates-title">\n    <h2 id="updates-title">Latest updates</h2>\n    <article><h3>New weekend sessions</h3><p>Registration opens next week.</p></article>\n  </section>\n  <aside><h2>Related information</h2><p>Bring a notebook.</p></aside>\n</main>\n<footer><p>Contact the workshop team.</p></footer>', p('Inspect main and the named Updates region in the accessibility tree.', 'Accessibility tree မှာ main နဲ့ အမည်ပေးထားတဲ့ Updates region ကို ရှာပါ။')),
    sample('section-article-div', p('Decide between section, article, and div', 'section၊ article နှင့် div ရွေးနည်း'), p(
      'Ask what the block represents. If the block would make sense when published on its own, it can be an article. If it groups one topic within the page, use a section with a heading. If it only creates a styling wrapper, use a div.',
      'အပိုင်းက ဘာကို ကိုယ်စားပြုလဲ အရင်ကြည့်ပါ။ သီးသန့် ထုတ်ဖတ်လို့ နားလည်ရင် article သုံးနိုင်ပါတယ်။ စာမျက်နှာထဲက အကြောင်းအရာတစ်မျိုးကို စုပြချင်ရင် ခေါင်းစဉ်နဲ့ section သုံးပါ။ CSS နဲ့ အုပ်စုလိုက် ချိန်ဖို့သာဆို div သုံးပါ။',
    ), '<section>\n  <h2>Events this month</h2>\n  <div class="event-grid">\n    <article><h3>Build a Portfolio</h3><p>Starts June 12 at North Hall.</p></article>\n    <article><h3>Learn Web Forms</h3><p>Starts June 19 at North Hall.</p></article>\n  </div>\n</section>', p('Each event can be read independently. Both belong to Events this month.', 'Event တစ်ခုစီကို သီးသန့် ဖတ်လို့ရပြီး နှစ်ခုလုံးက Events this month အောက်မှာ ပါပါတယ်။')),
    sample('block-inline', p('Recognize block and inline layout', 'Block နှင့် Inline Layout ကြည့်ခြင်း'), p(
      'In normal flow, a block box starts on a new line and generally stretches across its container. An inline box flows with surrounding text. CSS display changes layout while the HTML element retains its meaning. A span styled as a block is still a span.',
      'ပုံမှန် layout ထဲမှာ block box က လိုင်းအသစ်ကနေ စပြီး အပြင် container အကျယ်အတိုင်း နေရာယူလေ့ရှိပါတယ်။ Inline box က ဘေးချင်းက စာသားနဲ့ တစ်ကြောင်းတည်း စီးသွားပါတယ်။ CSS display နဲ့ layout ပြောင်းတာကြောင့် HTML element ရဲ့ အဓိပ္ပာယ် မပြောင်းပါဘူး။ Block အဖြစ် ပြထားတဲ့ span က span ပဲ ဖြစ်ပါတယ်။',
    ), '<div style="background:#e9f1f7">This div starts on its own line.</div>\n<p>Read this <span style="background:#ffe9a8">highlighted phrase</span> in the same line.</p>\n<p>Now <span style="display:block;background:#ffe9a8">this span starts on a new line.</span></p>', p('Compare the two spans. Only the last one starts a new line.', 'Span နှစ်ခုကို ယှဉ်ပါ။ နောက်ဆုံး span ပဲ လိုင်းအသစ်ကနေ စပါတယ်။')),
    exercise('Refactor a div-only news page. Give it a header, nav, main, two articles in a titled section, a related-links aside, and a footer. Inspect the page landmarks in DevTools.', 'div တွေနဲ့ပဲ ရေးထားတဲ့ သတင်းစာမျက်နှာတစ်ခုကို ပြန်ဖွဲ့ပါ။ header၊ nav၊ main၊ ခေါင်းစဉ်ပါတဲ့ section ထဲက article နှစ်ခု၊ ဆက်စပ် link အတွက် aside နဲ့ footer ထည့်ပါ။ DevTools မှာ page landmarks တွေ စစ်ပါ။'),
  ], [['MDN · Structuring documents', learn + 'Core/Structuring_content/Structuring_documents'], ['MDN · HTML accessibility', learn + 'Core/Accessibility/HTML']]),

  page('accessibility-seo', p('Accessibility, SEO & Production Best Practices', 'Accessibility၊ SEO နှင့် HTML စစ်ဆေးခြင်း'), p(
    'Check keyboard navigation, describe each page with metadata, validate your markup, and assemble the pieces into a small website.',
    'Keyboard နဲ့ သွားလို့ရလား စမ်းပါမယ်။ စာမျက်နှာတစ်ခုစီအတွက် metadata ရေး၊ HTML စစ်ပြီး လေ့လာခဲ့တာတွေကို website တစ်ခုအဖြစ် ပေါင်းပါမယ်။',
  ), [
    sample('keyboard-access', p('Test the page with a keyboard', 'Keyboard နဲ့ စာမျက်နှာကို စမ်းသပ်ခြင်း'), p(
      'Use Tab and Shift+Tab to move through links and form controls. Use Enter to follow a link and Enter or Space to operate a button. Check that focus is visible. Put a skip link before repeated navigation. Name navigation regions when more than one appears. Prefer a visible label on a control. Use aria-label when the control needs a name and has no suitable visible text, such as an icon-only button.',
      'Link နဲ့ form controls တွေကြား Tab နဲ့ Shift+Tab ကို သုံးပြီး ရွှေ့ကြည့်ပါ။ Link ဖွင့်ဖို့ Enter၊ ခလုတ်သုံးဖို့ Enter သို့မဟုတ် Space နှိပ်ပါ။ ဘယ် element ကို focus ရောက်လဲ မြင်ရဖို့လိုပါတယ်။ စာမျက်နှာတိုင်း ထပ်ပါတဲ့ navigation မတိုင်ခင် skip link ထားပါ။ Navigation တစ်ခုထက်ပိုရှိရင် အမည်ခွဲပေးပါ။ Control မှာ မြင်ရတဲ့ label ထားပါ။ Icon-only button လို အမည်ပေးဖို့ မြင်ရတဲ့စာသား မရှိရင် aria-label သုံးပါ။',
    ), '<a href="#main-content">Skip to main content</a>\n<nav aria-label="Main"><a href="#sessions">Sessions</a></nav>\n<main id="main-content" tabindex="-1">\n  <h1 id="sessions">Workshop sessions</h1>\n  <button type="button" aria-label="Close information panel">×</button>\n</main>', p('Press Tab to reach the skip link, then Enter to move to main.', 'Tab နဲ့ skip link ဆီ ရောက်အောင်သွားပါ။ Enter နှိပ်ပြီး main ဆီ ကူးပါ။')),
    snippet('metadata', p('Describe the page for browsers, search, and sharing', 'Browser၊ ရှာဖွေမှုနှင့် Share အတွက် Page အချက်အလက်'), p(
      'Give each page a unique title and a concise description in head. Search engines can use the description when creating a result snippet. The viewport describes mobile layout behavior. Open Graph metadata such as og:title is used by services that build link previews. Link a favicon file for the browser tab.',
      'စာမျက်နှာတစ်ခုစီမှာ သီးခြား title နဲ့ အကြောင်းအရာအတိုချုံး description ကို head ထဲ ရေးပါ။ Search engine က result အတိုချုံးစာသား ဖန်တီးတဲ့အခါ description ကို ယူသုံးနိုင်ပါတယ်။ Viewport က ဖုန်းပေါ် layout အတွက် လိုပါတယ်။ og:title လို Open Graph metadata က link share လုပ်တဲ့အခါ preview ဖန်တီးတဲ့ service တွေအတွက် ဖြစ်ပါတယ်။ Browser tab အတွက် favicon ဖိုင် ချိတ်ပါ။',
    ), '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>Services | City Workshop</title>\n  <meta name="description" content="Browse workshop sessions and compare prices.">\n  <meta property="og:title" content="City Workshop Services">\n  <link rel="icon" href="favicon.svg" type="image/svg+xml">\n</head>'),
    example('validation', p('Read and validate your markup', 'ကိုယ်ရေးထားတဲ့ HTML ကို ဖတ်ပြီး စစ်ဆေးခြင်း'), p(
      'Use lowercase tag names and consistent indentation so nesting is easy to scan. Paste the complete document in the Nu HTML Checker or upload the file. Fix the first markup error and recheck because incorrect nesting can cause later messages. Then test links, keyboard focus, and media in the browser.',
      'Tag နာမည်တွေကို lowercase နဲ့ ရေးပြီး အတွင်းက element တွေကို indent တူတူ ထားပါ။ Nu HTML Checker ထဲကို document အပြည့်အစုံ paste လုပ်နိုင်သလို ဖိုင်တင်ပြီးလည်း စစ်နိုင်ပါတယ်။ ပထမ markup error ကို အရင်ပြင်ပြီး ပြန်စစ်ပါ။ အတွင်းထည့်ပုံ လွဲတာတစ်ခုက နောက်ဆက်တွဲ error တွေ ဖြစ်စေနိုင်ပါတယ်။ ပြီးရင် link၊ keyboard focus နဲ့ media ကို browser ထဲမှာပါ စမ်းပါ။',
    ), demoPage('Workshop updates', '  <main>\n    <h1>Workshop updates</h1>\n    <p>See the <a href="#schedule">schedule</a>.</p>\n    <h2 id="schedule">Schedule</h2>\n    <p>Next session: Saturday at 9 AM.</p>\n  </main>'), p('Validate the complete example. Then make a copy, remove the closing a tag, and check what the validator reports.', 'နမူနာအပြည့်အစုံကို စစ်ပါ။ ကူးထားတဲ့ copy ထဲက a အပိတ် tag ကို ဖြုတ်ပြီး checker ဘာပြလဲ ကြည့်ပါ။'), standalone),
    part('capstone', p('Final project: a three-page website', 'နောက်ဆုံးလက်တွေ့ သုံးမျက်နှာပါ Website'), p(
      'Create index.html (Home), services.html (Services), and contact.html (Contact) in one folder. Start every page with the full document skeleton, its own title and description, the shared navigation, a skip link, and one main heading. On Home, add an introduction and a captioned image. On Services, add a captioned price table with scoped headers. On Contact, build a labelled form using a required email field and a message textarea. This is an HTML-only project. Test the form’s browser feedback with sample data. Follow every link, navigate with the keyboard, and validate all three documents.',
      'Folder တစ်ခုထဲမှာ index.html (Home)၊ services.html (Services) နဲ့ contact.html (Contact) ရေးပါ။ စာမျက်နှာတိုင်းကို HTML document အပြည့်အစုံနဲ့ ရေးပြီး သက်ဆိုင်ရာ title နဲ့ description၊ တူညီတဲ့ navigation၊ skip link နဲ့ အဓိကခေါင်းစဉ်တစ်ခု ထည့်ပါ။ Home မှာ မိတ်ဆက်စာနဲ့ ပုံစာပါပုံ၊ Services မှာ caption နဲ့ scope သတ်မှတ်ထားတဲ့ ဈေးနှုန်းဇယား ထည့်ပါ။ Contact မှာ label တွေ၊ required email field နဲ့ message textarea ပါတဲ့ form ရေးပါ။ ဒီ project ကို HTML သီးသန့်နဲ့ လုပ်ပါ။ နမူနာ data သုံးပြီး browser ရဲ့ form တုံ့ပြန်ပုံကို စမ်းပါ။ Link အားလုံးကို လိုက်နှိပ်၊ keyboard နဲ့ သွားကြည့်ပြီး ဖိုင်သုံးခုလုံးကို validate လုပ်ပါ။',
    ), '<a href="#main-content">Skip to main content</a>\n<header>\n  <nav aria-label="Main">\n    <a href="index.html" aria-current="page">Home</a>\n    <a href="services.html">Services</a>\n    <a href="contact.html">Contact</a>\n  </nav>\n</header>\n<main id="main-content" tabindex="-1">\n  <h1>City Workshop</h1>\n  <p>Find a class and start building.</p>\n</main>'),
    exercise('Review your final project in a browser. Check that the shared menu links work on each page, only the current link has aria-current="page", and the skip link moves to the main region. Try the Contact form with missing and malformed values. Record the validator results for all three files.', 'နောက်ဆုံး project ကို browser နဲ့ ပြန်စစ်ပါ။ စာမျက်နှာတိုင်းက menu link တွေ အလုပ်လုပ်လား၊ လက်ရှိ page link မှာပဲ aria-current="page" ပါလား၊ skip link က main ဆီ ရောက်လား စစ်ပါ။ Contact form ကို အလွတ်နဲ့ ပုံစံမှားတဲ့ တန်ဖိုးတွေ သုံးပြီး စမ်းပါ။ ဖိုင်သုံးခုလုံးရဲ့ validator ရလဒ်ကို မှတ်ထားပါ။'),
  ], [['MDN · HTML accessibility', learn + 'Core/Accessibility/HTML'], ['MDN · Webpage metadata', learn + 'Core/Structuring_content/Webpage_metadata'], ['Nu HTML Checker', 'https://validator.w3.org/nu/']]),
]);
