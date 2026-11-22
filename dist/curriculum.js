import { learningPaths } from './learning-paths.js';
import { createWebExercises } from './web-exercises.js';

const HTML = 'HTML';
const CSS = 'CSS';
const JS = 'JavaScript';

const exercise = (id, title, lesson, task, hint, starter, solution, checks, visual = []) => ({
  id, title, lesson, task: Array.isArray(task) ? task : [task], hint, starter, solution,
  checks: checks.map(([label, expression, viewport]) => ({ label, expression, viewport })), visual,
});

const check = (label, expression, viewport) => [label, expression, viewport];
const h = (id, title, lesson, task, hint, starter, solution, ...checks) =>
  exercise(id, title, lesson, task, hint, { [HTML]: starter }, { [HTML]: solution }, checks);
const c = (id, title, lesson, task, hint, html, starter, solution, checks = [], visual = []) =>
  exercise(id, title, lesson, task, hint, { [HTML]: html, [CSS]: starter }, { [CSS]: solution }, checks, visual);
const j = (id, title, lesson, task, hint, starter, solution, checks, html = '') =>
  exercise(id, title, lesson, task, hint, html ? { [HTML]: html, [JS]: starter } : { [JS]: starter }, { [JS]: solution }, checks);
const module = (title, exercises) => ({ title, exercises });

const colorSwatches = '<source srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAwCAIAAABhdOiYAAAAZElEQVR4nO3QMQ0AIADAMBTy4xdhOICTHU0mYOmYa+vS+H4QDxAgQIAAhQMECBAgQOEAAQIECFA4QIAAAQIUDhAgQIAAhQMECBAgQOEAAQIECFA4QIAAAQIUDhAgQIAAhQP06AAA+Yd4tL6liAAAAABJRU5ErkJggg==">\n' +
  '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAHklEQVR4nGNg6K+jDho1aNSgUYNGDRo1aNSggTcIAHuiXV+7sLG6AAAAAElFTkSuQmCC">';

const html = {
  id: 'html', title: 'HTML', icon: 'code', description: 'Use HTML to structure a page with links, images, tables, and forms.',
  exercises: [
      h('first-heading', 'Your First Page',
        'A heading gives the page its main topic. A paragraph adds more detail.',
        ['Add one h1 with the text Hello, Frontend!', 'Add one p with the text I am learning HTML.'],
        'Put the text between an opening tag and a closing tag.',
        '<!-- Write your heading and paragraph below -->\n',
        '<h1>Hello, Frontend!</h1>\n<p>I am learning HTML.</p>',
        check('One h1 with the right text', "count('h1') === 1 && text('h1') === 'Hello, Frontend!'"),
        check('Paragraph has the right text', "text('p') === 'I am learning HTML.'")),
      h('document', 'HTML Document Structure',
        'The doctype tells the browser to use standard HTML rules. The head holds page settings. The body holds what people see.',
        'Write a full HTML page with a doctype, lang="en", UTF-8 charset, and the title Lab Notes.',
        'Start with <!doctype html>. Put the title and meta tags inside head.',
        '<html>\n<head>\n</head>\n<body>\n  <h1>Lab Notes</h1>\n</body>\n</html>',
        '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Lab Notes</title>\n</head>\n<body>\n  <h1>Lab Notes</h1>\n</body>\n</html>',
        check('HTML5 doctype is present', "parsed.doctype?.name === 'html'"),
        check('Language, charset, and title are set', "parsed.documentElement.lang === 'en' && parsed.querySelector('meta[charset]')?.getAttribute('charset').toLowerCase() === 'utf-8' && parsed.title === 'Lab Notes'")),
      h('text', 'Emphasis & Inline Code',
        'Use strong for important text, em for emphasis, and code for a piece of code.',
        'Wrap Save in strong, before in em, and index.html in code.',
        'Wrap each word or phrase in the matching tag.',
        '<p>Save before closing index.html.</p>',
        '<p><strong>Save</strong> <em>before</em> closing <code>index.html</code>.</p>',
        check('Each part uses the right tag', "text('strong') === 'Save' && text('em') === 'before' && text('code') === 'index.html'")),
      h('links', 'Links & Page Navigation',
        'The href of a link can point to another page or to a place on the same page. A link that starts with # points to an element with that ID.',
        'Link Learning resources to /resources. Link Jump to contact to the Contact heading.',
        'Use href="#contact" on the link and id="contact" on the heading.',
        '<nav>Learning resources · Jump to contact</nav>\n<h2>Contact</h2>',
        '<nav>\n  <a href="/resources">Learning resources</a>\n  <a href="#contact">Jump to contact</a>\n</nav>\n<h2 id="contact">Contact</h2>',
        check('Resources link points to /resources', "text('a[href=\"/resources\"]') === 'Learning resources'"),
        check('Contact link points to the heading', "exists('a[href=\"#contact\"]') && exists('h2#contact')")),
      h('images', 'Image & Alt Text',
        'Alt text describes an image for people who cannot see it. A figure and figcaption keep an image and its caption together.',
        'Put the image inside a figure. Set its alt text to Blue square and its caption to Color sample.',
        'Place figcaption after img inside figure.',
        '<img src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2272%22%20height=%2272%22%3E%3Crect%20width=%2272%22%20height=%2272%22%20fill=%22royalblue%22/%3E%3C/svg%3E">',
        '<figure>\n  <img src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2272%22%20height=%2272%22%3E%3Crect%20width=%2272%22%20height=%2272%22%20fill=%22royalblue%22/%3E%3C/svg%3E" alt="Blue square">\n  <figcaption>Color sample</figcaption>\n</figure>',
        check('Figure has an image with the right alt text', "Boolean(attr('figure img', 'src')) && attr('figure img', 'alt') === 'Blue square'"),
        check('Caption has the right text', "text('figure figcaption') === 'Color sample'")),
      h('lists', 'Ordered & Unordered Lists',
        'Use ol when the order matters and ul when it does not. Each item goes inside an li tag.',
        'Make an ordered list with Open editor and Save file. Make an unordered list with Keyboard and Mouse.',
        'Put each item in its own li tag.',
        '<h2>Steps</h2>\n<p>Open editor, Save file</p>\n<h2>Tools</h2>\n<p>Keyboard, Mouse</p>',
        '<h2>Steps</h2>\n<ol><li>Open editor</li><li>Save file</li></ol>\n<h2>Tools</h2>\n<ul><li>Keyboard</li><li>Mouse</li></ul>',
        check('Ordered list has the right items', "same(values('ol > li'), ['Open editor', 'Save file'])"),
        check('Unordered list has the right items', "same(values('ul > li'), ['Keyboard', 'Mouse'])")),
      h('landmarks', 'Semantic Page Regions',
        'Tags like header, nav, main, and footer name the main parts of a page. Screen readers can use them to move between sections.',
        'Put the site name and nav inside header, the News heading inside main, and © Cloud Nine Innovations inside footer.',
        'Wrap each part in the right tag. Use href="#news" for the News link.',
        '<h1>Cloud Nine Innovations</h1>\n<a href="#news">News</a>\n<h2 id="news">News</h2>\n<p>© Cloud Nine Innovations</p>',
        '<header>\n  <h1>Cloud Nine Innovations</h1>\n  <nav><a href="#news">News</a></nav>\n</header>\n<main><h2 id="news">News</h2></main>\n<footer>© Cloud Nine Innovations</footer>',
        check('The header contains the News link in a nav', "exists('header nav a[href=\"#news\"]')"),
        check('The main section and footer are in place', "text('main h2#news') === 'News' && ['© Cloud Nine Innovations', '© Frontend Lab'].includes(text('footer'))")),
      h('tables', 'Accessible Data Table',
        'A caption names the table. A th with scope="col" tells screen readers which column that heading describes.',
        'Add the caption Cafe menu, the column headings Item and Price, and one row with Coffee and 2.',
        'Put the header row in thead and the data row in tbody.',
        '<table>\n  <!-- Add the caption and rows -->\n</table>',
        '<table>\n  <caption>Cafe menu</caption>\n  <thead><tr><th scope="col">Item</th><th scope="col">Price</th></tr></thead>\n  <tbody><tr><td>Coffee</td><td>2</td></tr></tbody>\n</table>',
        check('Caption and column headings are correct', "text('table caption') === 'Cafe menu' && same(values('thead th[scope=\"col\"]'), ['Item', 'Price'])"),
        check('The data row contains Coffee and 2', "same(values('tbody tr td'), ['Coffee', '2'])")),
      h('disclosure', 'Show and Hide an Answer',
        'The details tag lets people show and hide content with a click or a keyboard. The summary tag is the label they use to open it.',
        'Use details for an FAQ. Set the summary to Where are drafts saved? and the answer to In this browser. Start with the answer hidden.',
        'Place summary first inside details. Leave out the open attribute to start closed.',
        '<h2>FAQ</h2>\n<p>Where are drafts saved?</p>\n<p>In this browser.</p>',
        '<h2>FAQ</h2>\n<details>\n  <summary>Where are drafts saved?</summary>\n  <p>In this browser.</p>\n</details>',
        check('The FAQ has the right text and starts closed', "text('details:not([open]) > summary:first-child') === 'Where are drafts saved?' && text('details p') === 'In this browser.'")),
      h('labels', 'Form Labels & Input Types',
        'A label\'s for value matches the input\'s id. Clicking the label then moves focus to the input. The input type tells the browser what kind of value to expect.',
        'Link the label Email address to an email input. Name the input email and add a submit button that says Join.',
        'Use for="email" on the label and id="email" on the input. Set the button type to submit.',
        '<form>\n  <input>\n  <button>Join</button>\n</form>',
        '<form>\n  <label for="email">Email address</label>\n  <input id="email" name="email" type="email">\n  <button type="submit">Join</button>\n</form>',
        check('Label and email input are linked', "text('form label[for=\"email\"]') === 'Email address' && exists('form input#email[type=\"email\"][name=\"email\"]')"),
        check('The Join submit button is present', "text('form button[type=\"submit\"]') === 'Join'")),
      h('validation', 'Native Form Validation',
        'required makes users fill in a field. For a number field, min and max set the allowed range.',
        'Make Guests a required number field. Set the range from 1 to 6.',
        'Add type="number", min, max, and required to the input.',
        '<form>\n  <label for="guests">Guests</label>\n  <input id="guests" name="guests">\n</form>',
        '<form>\n  <label for="guests">Guests</label>\n  <input id="guests" name="guests" type="number" min="1" max="6" required>\n</form>',
        check('Guests is required and accepts numbers from 1 to 6', "exists('input#guests[type=\"number\"][min=\"1\"][max=\"6\"][required]')")),
      h('media', 'Audio, Video & Captions',
        'The controls attribute lets users play and pause audio or video. A track tag adds captions to a video.',
        'Add controls to the audio and video. Add an English caption track inside the video. Keep the sample file paths.',
        'Set kind="captions", srclang="en", label="English", and src="lesson-en.vtt" on the track.',
        '<audio src="lesson.ogg"></audio>\n<video src="lesson.webm"></video>',
        '<audio src="lesson.ogg" controls></audio>\n<video src="lesson.webm" controls>\n  <track kind="captions" srclang="en" label="English" src="lesson-en.vtt">\n</video>',
        check('Audio and video have playback controls', "exists('audio[controls][src]') && exists('video[controls][src]')"),
        check('The video has an English caption track', "exists('video track[kind=\"captions\"][srclang=\"en\"][label=\"English\"][src]')")),
      h('metadata', 'Metadata & SEO Basics',
        'A page title appears in browser tabs and can show up in search results. A description sums up the page. The viewport setting helps the layout fit phones.',
        'Set the title to Cafe Menu and the description to Fresh coffee and snacks. Add a viewport setting that uses the device\'s width.',
        'Place the description and viewport meta tags in head.',
        '<!doctype html>\n<html lang="en">\n<head>\n  <title></title>\n</head>\n<body><h1>Cafe Menu</h1></body>\n</html>',
        '<!doctype html>\n<html lang="en">\n<head>\n  <title>Cafe Menu</title>\n  <meta name="description" content="Fresh coffee and snacks.">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n</head>\n<body><h1>Cafe Menu</h1></body>\n</html>',
        check('Page title and description are correct', "parsed.title === 'Cafe Menu' && parsed.querySelector('meta[name=\"description\"]')?.content === 'Fresh coffee and snacks.'"),
        check('Viewport is set to the device\'s width', "Boolean(parsed.querySelector('meta[name=\"viewport\"]')?.content.includes('width=device-width'))")),
      h('form-choices', 'Build a Form With Choices',
        'Checkboxes let people choose more than one option. Radio buttons with the same name let them choose one. A select shows a list of choices. Use labels for each control and a fieldset with a legend to name a group.',
        ['Add a select with id and name drink. Add Coffee and Tea with values coffee and tea.',
          'Use a fieldset named Size with required radio choices Small and Large. Give both radios the name size and the values small and large.',
          'Use another fieldset named Extras with checkboxes for Ice and Lemon. Give both boxes the name extra and the values ice and lemon. Label every control.'],
        'Wrap each radio or checkbox in a label, or connect it to a label with for and id. Put each legend first inside its fieldset.',
        `<form id="order">
  <!-- Add the drink select, size radios, and extra checkboxes. -->
  <button type="submit">Place order</button>
</form>`,
        `<form id="order">
  <label for="drink">Drink</label>
  <select id="drink" name="drink">
    <option value="coffee">Coffee</option>
    <option value="tea">Tea</option>
  </select>
  <fieldset>
    <legend>Size</legend>
    <label><input type="radio" name="size" value="small" required> Small</label>
    <label><input type="radio" name="size" value="large" required> Large</label>
  </fieldset>
  <fieldset>
    <legend>Extras</legend>
    <label><input type="checkbox" name="extra" value="ice"> Ice</label>
    <label><input type="checkbox" name="extra" value="lemon"> Lemon</label>
  </fieldset>
  <button type="submit">Place order</button>
</form>`,
        check('A labeled drink select sends the chosen value', `(() => {
          const select = one('#order select#drink[name="drink"]');
          if (!select?.labels[0]?.textContent.trim()) return false;
          select.value = 'tea';
          return same([...select.options].map(option => [option.value, option.text]), [['coffee', 'Coffee'], ['tea', 'Tea']])
            && new FormData(one('#order')).get('drink') === 'tea';
        })()`),
        check('Size radios are labeled, grouped, required, and allow one choice', `(() => {
          const radios = all('#order input[type="radio"][name="size"]');
          if (radios.length !== 2 || !radios.some(radio => radio.required)) return false;
          const labels = { small: 'Small', large: 'Large' };
          if (!radios.every(radio => radio.labels[0]?.textContent.trim() === labels[radio.value]
            && radio.closest('fieldset')?.querySelector('legend')?.textContent.trim() === 'Size')) return false;
          const small = radios.find(radio => radio.value === 'small');
          const large = radios.find(radio => radio.value === 'large');
          small.checked = true;
          large.checked = true;
          return !small.checked && new FormData(one('#order')).get('size') === 'large';
        })()`),
        check('Extras are labeled and allow more than one choice', `(() => {
          const extras = all('#order input[type="checkbox"][name="extra"]');
          const labels = { ice: 'Ice', lemon: 'Lemon' };
          if (extras.length !== 2 || !extras.every(extra => extra.labels[0]?.textContent.trim() === labels[extra.value]
            && extra.closest('fieldset')?.querySelector('legend')?.textContent.trim() === 'Extras')) return false;
          extras.forEach(extra => { extra.checked = true; });
          return same(new FormData(one('#order')).getAll('extra').sort(), ['ice', 'lemon']);
        })()`)),
      exercise('responsive-images', 'Choose an Image for Each Screen',
        'Use picture when you want a different image on a wider screen. A source with a media rule tells the browser when to use that image. The img tag holds the fallback image and the alt text.',
        ['Wrap the two starter tags in a picture element. Keep source before img and leave the image URLs in place.',
          'Use the wide image from 500px onward. Keep the fallback image for smaller screens and give it the alt text Color swatch.'],
        'Give source the attribute media="(min-width: 500px)". Use the Desktop and Mobile controls to see which image loads.',
        { [HTML]: colorSwatches },
        { [HTML]: '<picture>\n  ' + colorSwatches.replace('srcset=', 'media="(min-width: 500px)" srcset=')
          .replace('\n', '\n  ').replace('<img src=', '<img alt="Color swatch" src=') + '\n</picture>' },
        [
          check('At 320px, the fallback image loads and has alt text', `(async () => {
            const img = one('picture img[alt="Color swatch"]');
            await img.decode();
            return img.currentSrc === img.src && img.naturalWidth === 24;
          })()`, 320),
          check('At 680px, the wide image loads', `(async () => {
            const img = one('picture img');
            await img.decode();
            return img.currentSrc === attr('picture source', 'srcset') && img.naturalWidth === 96;
          })()`, 680),
        ]),
      exercise('keyboard-access', 'Make a Page Work With the Keyboard',
        'People can use Tab and Enter to move around a page. Real links and buttons work with the keyboard by default. A skip link lets people jump past the menu to the main content.',
        ['Before the navigation, add a link that says Skip to main content and points to #main-content.',
          'Give main the id main-content and tabindex="-1" so it can receive focus after a jump without adding an extra Tab stop.',
          'Replace the div that says Show menu with a real button with type="button".'],
        'Use an a tag for the jump and a button tag for the action. Click near the top of the preview, then use Tab and Enter to try the skip link.',
        { [HTML]: `<!-- Add the skip link here. -->
<nav><a href="#home">Home</a></nav>
<main>
  <h1>Events</h1>
  <div>Show menu</div>
</main>` },
        { [HTML]: `<a href="#main-content">Skip to main content</a>
<nav><a href="#home">Home</a></nav>
<main id="main-content" tabindex="-1">
  <h1>Events</h1>
  <button type="button">Show menu</button>
</main>` },
        [
          check('The skip link is first and points to a focusable main section', `text('body > a:first-child[href="#main-content"]') === 'Skip to main content' && exists('main#main-content[tabindex="-1"]')`),
          check('Show menu is a real, enabled button', `all('main button[type="button"]').some(button => button.textContent.trim() === 'Show menu' && !button.disabled && button.tabIndex === 0)`),
        ],
        ['Use Tab to reach the skip link. Press Enter to jump to the main content.',
          'After the jump, use Tab again to reach the Show menu button.']),
  ],
};

const cssTrack = {
  id: 'css', title: 'CSS', icon: 'palette', description: 'Style pages with CSS. Learn selectors, Flexbox, Grid, layouts that fit phones, and simple animations.',
  exercises: [
      c('selectors', 'Class & Descendant Selectors',
        'A class selector starts with a dot. A space between two selectors targets elements inside the first one.',
        'Make the paragraph inside .card blue. Keep the paragraph outside it black.',
        'Use .card p to select paragraphs inside the card.',
        '<section class="card"><p>Inside card</p></section><p>Outside card</p>',
        'p { color: black; }\n',
        'p { color: black; }\n.card p { color: blue; }',
        [check('Inside text is blue and outside text is black', "css('.card p','color') === 'rgb(0, 0, 255)' && css('body > p','color') === 'rgb(0, 0, 0)'")]),
      c('cascade', 'Specificity & Source Order',
        'When two rules set the same property, the more specific selector wins. If both selectors are equally specific, the later rule wins.',
        'Add a rule that makes Featured purple and keeps Standard green.',
        '.pill.featured has two classes, so it is more specific than .pill.',
        '<p class="pill featured">Featured</p><p class="pill">Standard</p>',
        '.pill { color: green; }\n',
        '.pill { color: green; }\n.pill.featured { color: purple; }',
        [check('Featured text is purple and Standard text is green', "css('.featured','color') === 'rgb(128, 0, 128)' && css('.pill:not(.featured)','color') === 'rgb(0, 128, 0)'")]),
      c('inheritance', 'Inherited Text Styles',
        'Child elements can take on text styles like color and font size from their parent. Some styles, such as borders, are not passed down.',
        'Set .article to teal with a font size of 20px. The paragraph inside it should take on both styles.',
        'Set both styles on the .article parent.',
        '<article class="article"><p>Inherited copy</p></article><p>Outside copy</p>',
        '.article {\n  /* Add styles here */\n}\n',
        '.article { color: teal; font-size: 20px; }',
        [check('The paragraph inside the article uses both styles', "css('.article p','color') === 'rgb(0, 128, 128)' && css('.article p','font-size') === '20px' && css('body > p','font-size') !== '20px'")]),
      c('box-model', 'The Box Model',
        'Every element has content, padding, a border, and a margin. With border-box, the set width includes the padding and border.',
        'Give .box a width of 240px, padding of 16px, a 2px solid border, a margin of 12px, and box-sizing: border-box.',
        'With border-box, the outside edge of the border should be 240px wide.',
        '<div class="box">Workshop card</div>',
        '.box {\n  /* Build the box */\n}',
        '.box { box-sizing: border-box; width: 240px; padding: 16px; border: 2px solid navy; margin: 12px; }',
        [check('Box width, padding, border, and margin are correct', "Math.round(one('.box').getBoundingClientRect().width) === 240 && css('.box','padding-top') === '16px' && css('.box','border-top-width') === '2px' && css('.box','margin-top') === '12px' && css('.box','box-sizing') === 'border-box'")]),
      c('units', 'Relative Units & Line Height',
        'rem uses the root font size. A width in percent uses the width of the parent box. A line height without a unit scales with the text size.',
        'Give the paragraph a font size of 1.25rem, a line height of 1.6, and a width of 75%.',
        'The starter sets the root size to 16px, so 1.25rem is 20px.',
        '<div class="sample"><p>Readable text needs enough room between lines.</p></div>',
        'html { font-size: 16px; }\n.sample { width: 200px; }\np {\n}\n',
        'html { font-size: 16px; }\n.sample { width: 200px; }\np { font-size: 1.25rem; line-height: 1.6; width: 75%; }',
        [check('Font size, line height, and width are correct', "css('p','font-size') === '20px' && css('p','line-height') === '32px' && css('p','width') === '150px'")]),
      c('display', 'Block, Inline & Inline Block',
        'Inline elements can sit on the same line as other text. An inline-block can also sit on that line and can have a set width and height.',
        'Set both .tag elements to inline-block and make them 80px wide.',
        'Style both tags with the same .tag selector.',
        '<span class="tag">Coffee</span> <span class="tag">Tea</span>',
        '.tag { background: aliceblue; }\n',
        '.tag { background: aliceblue; display: inline-block; width: 80px; }',
        [check('The tags use inline-block and are 80px wide', "css('.tag','display') === 'inline-block' && css('.tag','width') === '80px'")]),
      c('positioning', 'Position a Badge',
        'An absolutely positioned element is placed relative to its nearest positioned parent.',
        'Put the badge in the top-right corner of the card, 8px from the top and 8px from the right.',
        'Set position: relative on the card and position: absolute on the badge.',
        '<div class="tile">Coffee <span class="badge">New</span></div>',
        '.tile { width: 220px; padding: 26px; background: aliceblue; }\n.badge { background: lemonchiffon; }\n',
        '.tile { position: relative; width: 220px; padding: 26px; background: aliceblue; }\n.badge { position: absolute; top: 8px; right: 8px; background: lemonchiffon; }',
        [check('The badge sits 8px from the top and right of the card', "css('.tile','position') === 'relative' && css('.badge','position') === 'absolute' && css('.badge','top') === '8px' && css('.badge','right') === '8px'")]),
      c('flexbox', 'Flexbox Navigation',
        'Flexbox lines up items in a row or column. justify-content controls spacing along that line. align-items controls how items line up across it.',
        'Make nav a flex container. Put the brand and links at opposite ends and center them from top to bottom.',
        'Try display: flex, justify-content: space-between, and align-items: center.',
        '<nav><strong>Lab</strong><div><a href="#home">Home</a> · <a href="#about">About</a></div></nav>',
        'nav { padding: 12px; background: aliceblue; }\n',
        'nav { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: aliceblue; }',
        [check('The brand and links line up as requested', "css('nav','display') === 'flex' && css('nav','justify-content') === 'space-between' && css('nav','align-items') === 'center'")]),
      c('grid', 'Grid With Equal Columns',
        'Grid lays items out in rows and columns. The fr unit splits the space left over into shares.',
        'Give .grid three equal columns with a 12px gap.',
        'Try grid-template-columns: repeat(3, 1fr).',
        '<div class="grid"><div>HTML</div><div>CSS</div><div>JS</div></div>',
        '.grid > div { padding: 10px; background: aliceblue; }\n.grid {\n}\n',
        '.grid > div { padding: 10px; background: aliceblue; }\n.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }',
        [check('The grid has three equal columns and a 12px gap', "css('.grid','display') === 'grid' && css('.grid','gap') === '12px' && equalColumns('.grid', 3)")]),
      c('responsive', 'Responsive Product Cards',
        'A mobile-first layout starts with styles for small screens. A min-width media query adds styles when the screen is wider.',
        ['Use one column when the preview is less than 500px wide.', 'Use three equal columns at 500px and wider.'],
        'Start with one column using 1fr. Add three columns inside @media (min-width: 500px).',
        '<section class="products"><article>Coffee</article><article>Tea</article><article>Juice</article></section>',
        '.products { gap: 10px; }\narticle { background: lavender; padding: 12px; border-radius: 8px; }\n',
        '.products { display: grid; grid-template-columns: 1fr; gap: 10px; }\narticle { background: lavender; padding: 12px; border-radius: 8px; }\n@media (min-width: 500px) {\n  .products { grid-template-columns: repeat(3, 1fr); }\n}',
        [check('One column at 320px', "css('.products','display') === 'grid' && equalColumns('.products', 1)", 320),
          check('Three equal columns at 600px', "css('.products','display') === 'grid' && equalColumns('.products', 3)", 600)],
        ['Switch between Desktop and Mobile in the preview and check that the number of columns changes.']),
      c('states', 'Focus & Hover States',
        'A pseudo-class lets a style respond to a state. For example, :focus-visible helps people see what\'s focused when they use the keyboard.',
        'Give the button a navy background on hover and a 3px solid orange outline when it gets keyboard focus.',
        'Use button:hover and button:focus-visible in two rules. Test with a mouse and the Tab key.',
        '<button>Subscribe</button>',
        'button { padding: 10px 16px; background: royalblue; color: white; border: 0; }\n',
        'button { padding: 10px 16px; background: royalblue; color: white; border: 0; }\nbutton:hover { background: navy; }\nbutton:focus-visible { outline: 3px solid orange; }',
        [],
        ['The button turns navy when you point at it.', 'An orange outline appears when you reach the button with Tab.']),
      c('variables', 'CSS Custom Properties',
        'A CSS custom property starts with --. Use var() to reuse that value without writing it again.',
        'Set --brand to rebeccapurple on :root. Use it for the h2 text color.',
        'Set --brand on :root and use var(--brand) for the heading color.',
        '<h2>Brand color</h2>',
        ':root {\n}\nh2 {\n}\n',
        ':root { --brand: rebeccapurple; }\nh2 { color: var(--brand); }',
        [check('The heading takes its purple color from --brand', "css('html','--brand').trim() === 'rebeccapurple' && css('h2','color') === 'rgb(102, 51, 153)' && /var\\(\\s*--brand\\s*\\)/.test(source.css)")]),
      c('motion', 'Transitions & Keyframes',
        'A transition makes a change happen smoothly. Keyframes set what a style should look like at different points in an animation.',
        'Give the badge a 0.2-second opacity transition and a 0.4-second fade-in animation. In the keyframes, change opacity from 0 to 1.',
        'Try transition: opacity .2s and animation: fade-in .4s.',
        '<span class="badge">New</span>',
        '.badge { display: inline-block; padding: 10px; background: lavender; }\n',
        '.badge { display: inline-block; padding: 10px; background: lavender; transition: opacity .2s; animation: fade-in .4s; }\n@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }',
        [check('The opacity transition and fade-in animation are in place', "css('.badge','transition-property') === 'opacity' && css('.badge','transition-duration') === '0.2s' && css('.badge','animation-name') === 'fade-in' && css('.badge','animation-duration') === '0.4s' && /@keyframes\\s+fade-in/.test(source.css)")]),
      c('flex-wrap', 'Wrap and Align Flex Items',
        'Flex items normally try to stay on one line. flex-wrap lets them move to the next line. justify-content lines them up along the row, and align-items can center items of different heights.',
        ['Make .chips a flex container that wraps.',
          'Center each row from left to right, center the items from top to bottom, and add a 12px gap.'],
        'Use display: flex, flex-wrap: wrap, justify-content: center, and align-items: center on .chips.',
        '<div class="chips"><span class="chip">Coffee</span><span class="chip tall">Tea</span><span class="chip">Juice</span></div>',
        `.chip {
  flex: 0 0 130px;
  padding: 8px;
  box-sizing: border-box;
  background: aliceblue;
}
.tall { min-height: 60px; }

/* Add styles for .chips. */`,
        `.chip {
  flex: 0 0 130px;
  padding: 8px;
  box-sizing: border-box;
  background: aliceblue;
}
.tall { min-height: 60px; }

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;
}`,
        [
          check('Desktop has three items on a centered row with consistent spacing', `(() => {
            const boxes = all('.chip').map(el => el.getBoundingClientRect());
            const centers = boxes.map(box => (box.top + box.bottom) / 2);
            return boxes.length === 3 && css('.chips', 'display') === 'flex' && css('.chips', 'justify-content') === 'center'
              && css('.chips', 'align-items') === 'center' && css('.chips', 'gap') === '12px'
              && centers.every(center => Math.abs(center - centers[0]) < 1);
          })()`, 680),
          check('The third item wraps onto a second row on a narrow screen', `(() => {
            const boxes = all('.chip').map(el => el.getBoundingClientRect());
            return css('.chips', 'flex-wrap') === 'wrap' && boxes[2].top > Math.max(boxes[0].bottom, boxes[1].bottom);
          })()`, 320),
        ]),
      c('grid-page', 'Build a Page With Grid Areas',
        'Grid areas let you name sections and arrange them. A page can use one column on phones and put navigation next to content when there is more room.',
        ['Give header, nav, main, and footer the grid areas head, menu, content, and foot.',
          'Below 500px, place all four sections in one column in their listed order.',
          'From 500px onward, put nav and main side by side. Use a 140px menu column. Header and footer should span both columns.'],
        'Set grid-area on each section and use grid-template-areas on .layout. In the wider view, use the rows "head head", "menu content", and "foot foot".',
        '<div class="layout"><header>Header</header><nav>Menu</nav><main>Main content</main><footer>Footer</footer></div>',
        '.layout > * { background: aliceblue; padding: 12px; }\n/* Give the page a grid layout. */',
        `.layout > * { background: aliceblue; padding: 12px; }
header { grid-area: head; }
nav { grid-area: menu; }
main { grid-area: content; }
footer { grid-area: foot; }

.layout {
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  grid-template-areas: "head" "menu" "content" "foot";
}

@media (min-width: 500px) {
  .layout {
    grid-template-columns: 140px minmax(0, 1fr);
    grid-template-areas: "head head" "menu content" "foot foot";
  }
}`,
        [
          check('Mobile shows the four named sections in a single column', `(() => {
            const expected = ['head', 'menu', 'content', 'foot'];
            const boxes = all('.layout > *').map(el => el.getBoundingClientRect());
            return css('.layout', 'display') === 'grid'
              && all('.layout > *').every((el, index) => getComputedStyle(el).gridRowStart === expected[index])
              && boxes.every((box, index) => Math.abs(box.left - boxes[0].left) < 1 && (!index || box.top >= boxes[index - 1].bottom));
          })()`, 320),
          check('Desktop has a 140px menu beside the main content, with full-width header and footer', `(() => {
            const [head, menu, content, foot] = all('.layout > *').map(el => el.getBoundingClientRect());
            const near = (a, b) => Math.abs(a - b) < 1;
            return near(menu.top, content.top) && near(menu.width, 140) && menu.right <= content.left
              && near(head.left, menu.left) && near(foot.left, menu.left)
              && near(head.right, content.right) && near(foot.right, content.right);
          })()`, 680),
        ]),
      c('z-index', 'Bring a Badge to the Front',
        'When boxes overlap, z-index can change which one is on top. Here both boxes are positioned inside the same container, so the larger z-index appears in front.',
        'Give the photo box a z-index of 1 and the badge a z-index of 2, so the badge is visible in front of the photo.',
        'Both boxes already use position: absolute. Add z-index to their existing rules.',
        '<div class="stack"><span class="front-badge">New</span><div class="photo">Photo</div></div>',
        `.stack { position: relative; width: 200px; height: 120px; }
.front-badge { position: absolute; top: 15px; left: 18px; padding: 6px; background: gold; }
.photo { position: absolute; inset: 0; background: lightblue; padding: 50px 15px 0; }`,
        `.stack { position: relative; width: 200px; height: 120px; }
.front-badge { position: absolute; top: 15px; left: 18px; padding: 6px; background: gold; z-index: 2; }
.photo { position: absolute; inset: 0; background: lightblue; padding: 50px 15px 0; z-index: 1; }`,
        [check('The badge has the higher z-index and appears on top', `(() => {
          const badge = one('.front-badge');
          const box = badge.getBoundingClientRect();
          return css('.front-badge', 'z-index') === '2' && css('.photo', 'z-index') === '1'
            && document.elementFromPoint((box.left + box.right) / 2, (box.top + box.bottom) / 2) === badge;
        })()`)]),
      c('pseudo-elements', 'Decorate With Before and After',
        'CSS can draw small decorations before or after an element’s text using ::before and ::after. Put important words in the HTML so people can read them with or without CSS.',
        ['Use .tag::before to add a teal square that is 10px by 10px.',
          'Use .tag::after to add a teal line that is 24px wide and 2px high. Keep Featured as the actual HTML text.'],
        'Set content: "" on each pseudo-element so it appears. Use display: inline-block so you can set its width and height.',
        '<span class="tag">Featured</span>',
        '.tag { display: inline-flex; gap: 8px; align-items: center; }\n/* Add the two decorations. */',
        `.tag { display: inline-flex; gap: 8px; align-items: center; }
.tag::before, .tag::after {
  display: inline-block;
  content: "";
  background: teal;
}
.tag::before { width: 10px; height: 10px; }
.tag::after { width: 24px; height: 2px; }`,
        [
          check('Before draws a teal 10px square', `(() => {
            const style = getComputedStyle(one('.tag'), '::before');
            return style.content === '""' && style.width === '10px' && style.height === '10px'
              && style.backgroundColor === 'rgb(0, 128, 128)';
          })()`),
          check('After draws a teal 24px line and the HTML still says Featured', `(() => {
            const style = getComputedStyle(one('.tag'), '::after');
            return style.content === '""' && style.width === '24px' && style.height === '2px'
              && style.backgroundColor === 'rgb(0, 128, 128)' && text('.tag') === 'Featured';
          })()`),
        ]),
  ],
};

const result = (expected) => check('Console shows 12', 'logs.includes(' + JSON.stringify(expected) + ')');

const js = {
  id: 'js', title: 'JavaScript', icon: 'braces', description: 'Use JavaScript to make pages interactive. Practice functions, clicks, forms, and loading data.',
  exercises: [
      j('variables', 'Variables & Constants',
        'Use let when you need to give a variable a new value. Use const when that variable will keep the same value.',
        'Set drinks to 2 with let, then add 1. Set unitPrice to 4 with const. Log the total of 12.',
        'Multiply the new number of drinks by the price per drink.',
        '// Set drinks and unitPrice, then log the total.\n',
        'let drinks = 2;\nconst unitPrice = 4;\ndrinks += 1;\nconsole.log(drinks * unitPrice);',
        [result('12'), check('drinks is 3 and unitPrice is 4', 'drinks === 3 && unitPrice === 4')]),
      j('types', 'Types & Conversion',
        'Form inputs often give you text. Number() turns numeric text into a number. Use typeof to check the type of a value.',
        'Convert rawQuantity to a number. On separate console lines, log the value doubled, then its type. You should see 10 and number.',
        'Use Number(rawQuantity) first. Then use typeof to log the new value\'s type.',
        'const rawQuantity = "5";\n// Convert and log.\n',
        'const rawQuantity = "5";\nconst quantity = Number(rawQuantity);\nconsole.log(quantity * 2);\nconsole.log(typeof quantity);',
        [check('Console shows 10 and number in order', "same(logs, ['10', 'number'])")]),
      j('operators', 'Comparison & Logical Operators',
        'The === operator checks both value and type. The && operator gives true when both conditions are true.',
        'Write canBook(seats, isMember). Return true only when there is at least one seat and isMember is exactly true.',
        'Join seats >= 1 and isMember === true with &&.',
        'function canBook(seats, isMember) {\n  // Return true or false.\n}',
        'function canBook(seats, isMember) {\n  return seats >= 1 && isMember === true;\n}\nconsole.log(canBook(2, true));',
        [check('The function handles seats and membership correctly', "canBook(1, true) === true && canBook(4, true) === true && canBook(0, true) === false && canBook(4, false) === false && canBook(4, 'true') === false")]),
      j('conditions', 'If, Else & Score Ranges',
        'The order of your checks matters. When ranges overlap, check the higher score first so it gets the right result.',
        'Write grade(score). Return Excellent for 80 or more, Pass for 50 to 79, and Retry for less than 50.',
        'Check for 80 or more first, then for 50 or more.',
        'function grade(score) {\n  // Return a label.\n}',
        'function grade(score) {\n  if (score >= 80) return "Excellent";\n  if (score >= 50) return "Pass";\n  return "Retry";\n}',
        [check('The function gives the right grade at each cutoff', "same([grade(49), grade(50), grade(79), grade(80), grade(98)], ['Retry', 'Pass', 'Pass', 'Excellent', 'Excellent'])")]),
      j('switch', 'Switch & Default',
        'A switch compares one value with several cases. Use default when none of the cases match.',
        'Use switch in priceFor(item). Return 3 for coffee, 2 for tea, and null for anything else.',
        'Return directly from each case so the code stops there.',
        'function priceFor(item) {\n  switch (item) {\n    // Add cases.\n  }\n}',
        'function priceFor(item) {\n  switch (item) {\n    case "coffee": return 3;\n    case "tea": return 2;\n    default: return null;\n  }\n}',
        [check('The function returns the right prices and default', "same([priceFor('coffee'), priceFor('tea'), priceFor('water')], [3, 2, null])")]),
      j('loops', 'Add Numbers With a For Loop',
        'An accumulator is a variable that holds a running total. Start at 0 and add to it each time the loop runs.',
        'Write sumTo(n) to add the numbers from 1 through n. Return 0 when n is 0.',
        'Start i at 1. Add i to total while i is less than or equal to n.',
        'function sumTo(n) {\n  let total = 0;\n  // Write the loop.\n  return total;\n}',
        'function sumTo(n) {\n  let total = 0;\n  for (let i = 1; i <= n; i += 1) total += i;\n  return total;\n}',
        [check('The function adds the right numbers for different inputs', 'sumTo(0) === 0 && sumTo(1) === 1 && sumTo(5) === 15 && sumTo(12) === 78')]),
      j('while', 'While, Break & Continue',
        'A while loop repeats while its condition is true. continue skips to the next step. break exits the loop.',
        'Write beforeZero(values) to return all positive numbers before the first 0. Skip negative numbers. If there is no 0, read the full list.',
        'Move the index forward each time. Use break when you find 0 and continue when you find a negative number.',
        'function beforeZero(values) {\n  const result = [];\n  let index = 0;\n  // Read values using while.\n  return result;\n}',
        'function beforeZero(values) {\n  const result = [];\n  let index = 0;\n  while (index < values.length) {\n    const value = values[index++];\n    if (value === 0) break;\n    if (value < 0) continue;\n    result.push(value);\n  }\n  return result;\n}',
        [check('The function skips negatives and stops at 0', 'same(beforeZero([1, -2, 3, 0, 8]), [1, 3]) && same(beforeZero([-1, 5]), [5]) && same(beforeZero([]), [])')]),
      j('functions', 'Parameters, Defaults & Return',
        'Parameters let a function take inputs. A default value is used when an input is left out.',
        'Write lineTotal(price, qty). Use 1 when qty is left out. Return price times qty.',
        'Write qty = 1 in the parameter list.',
        'function lineTotal(price, qty) {\n  // Return the line total.\n}',
        'function lineTotal(price, qty = 1) {\n  return price * qty;\n}',
        [check('The function handles a missing quantity, other quantities, and zero', 'lineTotal(5) === 5 && lineTotal(2.5, 4) === 10 && lineTotal(5, 0) === 0')]),
      j('strings', 'String Methods',
        'String methods can clean up text. trim() removes spaces and other blank characters from the start and end.',
        'Write makeSlug(title). Remove whitespace at both ends, make the text lowercase, and replace each group of whitespace inside the title with one hyphen.',
        'Use trim(), toLowerCase(), and replace(/\\s+/g, "-") in that order.',
        'function makeSlug(title) {\n  // Return a normalized slug.\n}',
        'function makeSlug(title) {\n  return title.trim().toLowerCase().replace(/\\s+/g, "-");\n}',
        [check('The function makes the right slugs, even with extra spaces', "makeSlug('  Fresh  Coffee ') === 'fresh-coffee' && makeSlug('Tea') === 'tea' && makeSlug('   ') === ''")]),
      j('arrays', 'Filter, Map & Reduce',
        'filter keeps the items you choose. map turns each item into a new value. reduce combines all values into one result.',
        'Write paidTotal(orders). Keep the paid orders, get their amounts, and return the sum.',
        'Use filter, then map, then reduce. Start the total at 0.',
        'function paidTotal(orders) {\n  // Filter, map and reduce.\n}',
        'function paidTotal(orders) {\n  return orders\n    .filter(order => order.paid)\n    .map(order => order.amount)\n    .reduce((total, amount) => total + amount, 0);\n}',
        [check('Only paid orders are counted, and an empty list gives 0', 'paidTotal([{paid:true, amount:4}, {paid:false, amount:70}, {paid:true, amount:3}]) === 7 && paidTotal([]) === 0')]),
      j('objects', 'Objects, Destructuring & Spread',
        'Destructuring pulls values out of an object. Spread copies properties into another object.',
        'Write renameItem(item, name). Return a new object with the new name and all other properties, including id. Leave the original item as it was.',
        'Use const { name: previousName, ...details } = item, then return { ...details, name }.',
        'function renameItem(item, name) {\n  // Return a copied item with the new name.\n}',
        'function renameItem(item, name) {\n  const { name: previousName, ...details } = item;\n  return { ...details, name };\n}',
        [check('The new object has the new name, and the original stays the same', "(() => { const item = { name:'Tea', id:4, price:2 }; const changed = renameItem(item, 'Iced tea'); return changed !== item && item.name === 'Tea' && changed.name === 'Iced tea' && changed.id === 4 && changed.price === 2; })()")]),
      j('scope', 'Scope & Closures',
        'An inner function can keep using variables from the function around it. This is called a closure. Each call to the outer function starts a fresh set of variables.',
        'Write makeCounter(start) to return a function. Each time that function is called, it should add 1 and return the new count.',
        'Set let count = start in the outer function. Add 1 to count in the function you return.',
        'function makeCounter(start) {\n  // Return a function that remembers the count.\n}',
        'function makeCounter(start) {\n  let count = start;\n  return () => {\n    count += 1;\n    return count;\n  };\n}',
        [check('Each counter keeps its own count', '(() => { const a = makeCounter(0); const b = makeCounter(10); return same([a(), a(), b(), a(), b()], [1,2,11,3,12]); })()')]),
      j('classes', 'Classes & Methods',
        'A constructor sets up a new object created from a class. Methods use this to read or change that object\'s values.',
        'Write a Cart class. Start total at 0. Make add(price) add to the total and getTotal() return it.',
        'Store each cart\'s total in this.total.',
        'class Cart {\n  // Add a constructor and methods.\n}',
        'class Cart {\n  constructor() { this.total = 0; }\n  add(price) { this.total += price; }\n  getTotal() { return this.total; }\n}',
        [check('Each cart keeps its own total', '(() => { const a = new Cart(); const b = new Cart(); a.add(3); a.add(4); b.add(2); return a.getTotal() === 7 && b.getTotal() === 2; })()')]),
      j('modules', 'ES Modules',
        'A module can export a function so other modules can import it. This exercise runs the JavaScript file as a module.',
        'Export a named function called double. It should return twice the number it receives.',
        'Start with export function double(number).',
        '// Export a named function.\n',
        'export function double(number) {\n  return number * 2;\n}',
        [check('The named export double returns twice the input', "typeof exported.double === 'function' && exported.double(4) === 8 && exported.double(-3) === -6")]),
      j('dom', 'Find and Update Page Elements',
        'querySelector() finds the first element that matches a selector. textContent sets the text inside that element.',
        'Use JavaScript to change the text in #status to Ready to practice.',
        'Use document.querySelector("#status").textContent to set the text.',
        '// Update the status message.\n',
        'document.querySelector("#status").textContent = "Ready to practice";',
        [check('JavaScript sets the status text to Ready to practice', "text('#status') === 'Ready to practice' && !parsed.body.textContent.includes('Ready to practice')")],
        '<p id="status">Waiting…</p>'),
      j('events', 'Click Events',
        'addEventListener runs a function when an event happens. Keep the count outside the click handler so it is saved between clicks.',
        'Add 1 to the value shown in #count every time someone clicks Add.',
        'Start with let count = 0 outside the click handler. Inside it, update count and textContent.',
        'let count = 0;\n// Listen for clicks on #add.\n',
        'let count = 0;\ndocument.querySelector("#add").addEventListener("click", () => {\n  count += 1;\n  document.querySelector("#count").textContent = count;\n});',
        [check('The display starts at 0 and shows 1 and 2 after two clicks', "(() => { const start = text('#count'); one('#add').click(); const first = text('#count'); one('#add').click(); return same([start, first, text('#count')], ['0', '1', '2']); })()")],
        '<button id="add">Add</button> <output id="count">0</output>'),
      j('forms', 'Form Submit & Input Values',
        'A form\'s submit event works when someone clicks the button or presses Enter. preventDefault() stops the browser from submitting the form the usual way.',
        'When the form is submitted, read the name and show Hello, [name]! in #message. Stop the default form submission.',
        'Call event.preventDefault() and read the name with input.value.trim().',
        '// Listen for form submissions.\n',
        'document.querySelector("form").addEventListener("submit", event => {\n  event.preventDefault();\n  const name = document.querySelector("#name").value.trim();\n  document.querySelector("#message").textContent = "Hello, " + name + "!";\n});',
        [check('The page stays in place and the greeting uses the name', "submitForm('form', '#name', '  Aye  ') && text('#message') === 'Hello, Aye!'")],
        '<form><label for="name">Name</label> <input id="name" required> <button>Greet</button></form><p id="message" aria-live="polite"></p>'),
      j('promises', 'Promises & Then',
        'A Promise holds a result that might be ready later. Use then() to work with that result when it is ready.',
        'Write formatStatus(promise). Return a new Promise that adds Status: and a space before the original result.',
        'Try return promise.then(value => "Status: " + value).',
        'function formatStatus(promise) {\n  // Return a Promise.\n}',
        'function formatStatus(promise) {\n  return promise.then(value => "Status: " + value);\n}\nformatStatus(Promise.resolve("Ready")).then(console.log);',
        [check('Both sample results get the Status: prefix', "(await formatStatus(Promise.resolve('Ready'))) === 'Status: Ready' && (await formatStatus(Promise.resolve('Pending'))) === 'Status: Pending'")]),
      j('await', 'Async/Await',
        'An async function returns a Promise. await waits for a Promise and gives you its result.',
        'Write async totalFrom(loadPrices). Wait for loadPrices() to give you an array of prices, then return their sum.',
        'Use const prices = await loadPrices(), then add the prices with reduce.',
        'async function totalFrom(loadPrices) {\n  // Await the prices and add them.\n}',
        'async function totalFrom(loadPrices) {\n  const prices = await loadPrices();\n  return prices.reduce((sum, price) => sum + price, 0);\n}',
        [check('The sum is correct for both sample arrays', '(await totalFrom(() => Promise.resolve([1, 3, 8]))) === 12 && (await totalFrom(() => Promise.resolve([]))) === 0')]),
      j('fetch', 'Fetch API & JSON',
        'fetch() returns a Promise for a response. Check response.ok first. Use response.json() to read the data. sampleAPI is a sample URL you can use in this lab.',
        'Write loadNames(url). Use fetch to get the data. If the response is OK, return an array of names. If the response is not OK, throw an Error.',
        'Use await for both the response and its JSON data. Try loadNames(sampleAPI).then(console.log) to see the result.',
        'async function loadNames(url) {\n  // Fetch, check, parse and map.\n}',
        'async function loadNames(url) {\n  const response = await fetch(url);\n  if (!response.ok) throw new Error("Request failed");\n  const items = await response.json();\n  return items.map(item => item.name);\n}\nloadNames(sampleAPI).then(console.log);',
        [check('JSON is read and the item names are returned', "same(await loadNames(sampleAPI), ['Coffee', 'Tea', 'Juice'])"),
          check('A failed HTTP response causes an error', 'await rejectsHTTP(loadNames)')]),
      j('storage', 'Web Storage & JSON',
        'Web Storage saves values as text. Use JSON.stringify() to save an object and JSON.parse() to read it back. This lab has practiceStorage with getItem, setItem, removeItem, and clear.',
        'Make saveTheme(theme) save an object with the theme under the key theme. Make loadTheme() return that object, or null if nothing is saved.',
        'Start with practiceStorage.setItem("theme", JSON.stringify({ theme })).',
        'function saveTheme(theme) {\n}\n\nfunction loadTheme() {\n}',
        'function saveTheme(theme) {\n  practiceStorage.setItem("theme", JSON.stringify({ theme }));\n}\nfunction loadTheme() {\n  const draft = practiceStorage.getItem("theme");\n  return draft === null ? null : JSON.parse(draft);\n}\nsaveTheme("dark");\nconsole.log(loadTheme());',
        [check('The theme is saved as JSON and can be read back', "(() => { practiceStorage.removeItem('theme'); const empty = loadTheme(); saveTheme('light'); return empty === null && JSON.parse(practiceStorage.getItem('theme'))?.theme === 'light' && loadTheme()?.theme === 'light'; })()")]),
      j('errors', 'Try/Catch & Debugging',
        'Use try and catch to handle code that might fail. To find a bug, compare the input, the actual result, and the result you expected.',
        'Write safeParse(value). Return the parsed value if it is valid JSON. Return null if it is not.',
        'Call JSON.parse(value) inside try and return null from catch.',
        'function safeParse(value) {\n  return JSON.parse(value);\n}\nconsole.log(safeParse("invalid JSON"));',
        'function safeParse(value) {\n  try {\n    return JSON.parse(value);\n  } catch {\n    return null;\n  }\n}\nconsole.log(safeParse("invalid JSON"));',
        [check('Valid JSON is read and invalid JSON returns null', "same(safeParse('[1, 2]'), [1,2]) && safeParse('false') === false && safeParse('invalid JSON') === null")]),
      j('create-list-items', 'Create List Items With JavaScript',
        'document.createElement() makes a new element. Set textContent to put plain text inside it, then append it to the page.',
        ['Write addItem(name). Trim the name and skip it if it is empty.',
          'For each valid name, create a new li inside #drinks. Keep the name as plain text, even if it contains angle brackets.'],
        'Use document.createElement("li"), set its textContent, then use append() on #drinks.',
        `function addItem(name) {
  // Add one drink to the list.
}

addItem("Coffee");
addItem("Green tea");`,
        `function addItem(name) {
  const nameToShow = name.trim();
  if (!nameToShow) return;

  const item = document.createElement("li");
  item.textContent = nameToShow;
  document.querySelector("#drinks").append(item);
}

addItem("Coffee");
addItem("Green tea");`,
        [
          check('Each call adds a new list item without replacing past items', `(() => {
            const before = values('#drinks > li');
            addItem('  Juice  ');
            addItem('Milk');
            addItem('   ');
            return same(values('#drinks > li'), [...before, 'Juice', 'Milk']);
          })()`),
          check('Input with angle brackets is shown as plain text', `(() => {
            addItem('<b>Tea</b>');
            const item = one('#drinks li:last-child');
            return item.textContent === '<b>Tea</b>' && item.childElementCount === 0;
          })()`),
        ],
        '<h2>Drinks</h2>\n<ul id="drinks"></ul>'),
      j('update-remove-items', 'Update and Remove List Items',
        'You can update text and classes on an existing element. Use remove() to take the element out of the DOM. Look up the element first so a missing ID does not cause an error.',
        ['Write renameItem(id, name) to replace the text of the list item with that ID.',
          'Write toggleFeatured(id) to add or remove the featured class. Write removeItem(id) to remove that list item.',
          'If the ID does not match a list item inside #menu, each operation should leave the page as it is.'],
        'Find the item by ID, then use textContent, classList.toggle(), or remove(). Check that the item is in #menu before making a change.',
        `function renameItem(id, name) {
}

function toggleFeatured(id) {
}

function removeItem(id) {
}`,
        `function menuItem(id) {
  const item = document.getElementById(id);
  return item?.matches("#menu > li") ? item : null;
}

function renameItem(id, name) {
  const item = menuItem(id);
  if (item) item.textContent = name;
}

function toggleFeatured(id) {
  menuItem(id)?.classList.toggle("featured");
}

function removeItem(id) {
  menuItem(id)?.remove();
}`,
        [
          check('Rename updates the existing item and Featured can be turned on and off', `(() => {
            const item = one('#tea');
            renameItem('tea', 'Iced tea');
            if (one('#tea') !== item || item.textContent !== 'Iced tea') return false;
            toggleFeatured('tea');
            const marked = item.classList.contains('featured');
            toggleFeatured('tea');
            return marked && !item.classList.contains('featured');
          })()`),
          check('Remove deletes the chosen item and leaves other content in place', `(() => {
            removeItem('coffee');
            renameItem('title', 'Changed');
            toggleFeatured('title');
            removeItem('title');
            removeItem('missing');
            return !exists('#coffee') && exists('#tea') && text('#title') === 'Menu' && !exists('#title.featured');
          })()`),
        ],
        '<style>\n  .featured { background: gold; font-weight: bold; }\n</style>\n<h2 id="title">Menu</h2>\n<ul id="menu"><li id="coffee">Coffee</li><li id="tea">Tea</li></ul>'),
      j('event-bubbling', 'Follow a Click as It Bubbles',
        'A click can run handlers on the element you clicked and on its parents. This is called bubbling. event.target is where the click started. event.currentTarget is where the current handler is attached.',
        ['Add a click listener to #add and another to #panel. Both should call report(event).',
          'For each call, append a line to #event-log in the form targetId -> currentTargetId. Use the real IDs.'],
        'Read event.target.id and event.currentTarget.id. Click the label inside the button to see the same target follow the event up to the panel.',
        `function report(event) {
  // Add one line to the event log.
}

// Add both click listeners.`,
        `function report(event) {
  const entry = event.target.id + " -> " + event.currentTarget.id;
  document.querySelector("#event-log").textContent += entry + "\\n";
}

document.querySelector("#add").addEventListener("click", report);
document.querySelector("#panel").addEventListener("click", report);`,
        [
          check('A click reaches the button first and then its parent', `(() => {
            one('#event-log').textContent = '';
            one('#add').click();
            return text('#event-log') === 'add -> add\\nadd -> panel';
          })()`),
          check('The target stays the clicked label as the event bubbles', `(() => {
            one('#event-log').textContent = '';
            one('#button-label').click();
            return text('#event-log') === 'button-label -> add\\nbutton-label -> panel';
          })()`),
        ],
        '<section id="panel"><button id="add" type="button"><span id="button-label">Add</span></button></section>\n<pre id="event-log"></pre>'),
      j('event-delegation', 'Handle a List With One Click Listener',
        'You can listen for clicks on one parent instead of adding a listener to each child. This is called event delegation. The parent can also handle clicks from items added later.',
        ['Add one click listener to #catalog. When a button inside it is clicked, show Selected: followed by its data-item value in #selection.',
          'Support clicks on text inside the button and buttons added later. Ignore clicks that are outside a catalog button.'],
        'Use event.target.closest("button[data-item]") to find the closest matching button. Check that it is inside #catalog.',
        '// Add one listener to #catalog.\n',
        `const catalog = document.querySelector("#catalog");
const selection = document.querySelector("#selection");

catalog.addEventListener("click", event => {
  const button = event.target.closest("button[data-item]");
  if (!button || !catalog.contains(button)) return;

  selection.textContent = "Selected: " + button.dataset.item;
});`,
        [
          check('A nested click finds the right item and unrelated clicks are ignored', `(() => {
            one('#catalog button span').click();
            const selected = text('#selection') === 'Selected: Coffee';
            one('#catalog h2').click();
            one('#outside').click();
            return selected && text('#selection') === 'Selected: Coffee';
          })()`),
          check('The same listener works on a button added later', `(() => {
            const button = document.createElement('button');
            button.dataset.item = 'Juice';
            button.textContent = 'Juice';
            one('#catalog').append(button);
            button.click();
            return text('#selection') === 'Selected: Juice';
          })()`),
        ],
        '<section id="catalog"><h2>Drinks</h2><button data-item="Coffee"><span>Coffee</span></button><button data-item="Tea">Tea</button></section>\n<button id="outside" data-item="Water">Outside the catalog</button>\n<p id="selection">No selection</p>'),
      j('event-loop', 'See the Event Loop in Action',
        'JavaScript finishes the code it is running before starting queued work. A Promise callback is a microtask. The browser runs it before a timer task, even if you set the timer first.',
        ['Write showOrder(). Log Start, schedule a zero-delay timer that logs Timer, schedule a Promise callback that logs Promise, then log End.',
          'Run the function and check the console. The expected order is Start, End, Promise, Timer.'],
        'Use setTimeout(callback, 0) and Promise.resolve().then(callback). Write setTimeout first so you can see that the Promise still runs earlier.',
        `function showOrder() {
  // Log and schedule the work here.
}

showOrder();`,
        `function showOrder() {
  console.log("Start");
  setTimeout(() => console.log("Timer"), 0);
  Promise.resolve().then(() => console.log("Promise"));
  console.log("End");
}

showOrder();`,
        [
          check('Regular code runs first, then the Promise, then the timer', `(async () => {
            const start = logs.length;
            showOrder();
            if (!same(logs.slice(start), ['Start', 'End'])) return false;
            await Promise.resolve();
            if (!same(logs.slice(start), ['Start', 'End', 'Promise'])) return false;
            await new Promise(resolve => setTimeout(resolve, 0));
            return same(logs.slice(start), ['Start', 'End', 'Promise', 'Timer']);
          })()`),
        ]),
      j('post-json', 'Send JSON With an HTTP POST',
        'GET reads data. POST sends data for the server to handle. To send JSON with fetch(), set the method and Content-Type, then turn the data into a string. The lab uses a sample API so you can try the request without a server.',
        ['Write async createOrder(item, quantity). Send the item and quantity as JSON to samplePostAPI using POST.',
          'If response.ok is false, throw an error. Otherwise return the JSON from the response. Use the starter call to see the new order in the console.'],
        'Set method: "POST", a Content-Type header of application/json, and body: JSON.stringify({ item, quantity }). Then check response.ok and return response.json().',
        `async function createOrder(item, quantity) {
  // Send a JSON order and handle the response.
}

createOrder("Tea", 2).then(console.log);`,
        `async function createOrder(item, quantity) {
  const response = await fetch(samplePostAPI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ item, quantity }),
  });

  if (!response.ok) throw new Error("The order could not be created.");
  return response.json();
}

createOrder("Tea", 2).then(console.log);`,
        [
          check('A JSON POST returns the new order with the item and quantity sent', `(async () => {
            const first = await createOrder('Coffee', 3);
            const second = await createOrder('Juice', 1);
            return Number.isInteger(first?.id) && first.item === 'Coffee' && first.quantity === 3
              && Number.isInteger(second?.id) && second.item === 'Juice' && second.quantity === 1;
          })()`),
          check('An invalid order rejects when the API returns an error', `(async () => {
            try { await createOrder('Tea', 0); }
            catch (error) { return error instanceof Error; }
            return false;
          })()`),
        ]),
  ],
};

const projects = {
  id: 'projects', title: 'Combined Practice', icon: 'layers',
  description: 'Build small website features with HTML, CSS, and JavaScript together.',
  modules: [
    module('Layout & Interface', [
      exercise('navigation', 'Responsive Navigation',
        'A navigation menu uses HTML to give the links structure, CSS to fit the screen, and JavaScript to open or close the menu.',
        ['Show the links in a row on desktop.', 'On mobile, show a Menu button and hide the links at first.', 'Each click on Menu should open or close the links and update aria-expanded.'],
        'Use a media query to show or hide the menu button. Switch links.hidden in JavaScript and update aria-expanded to match. Use CSS to show the links on desktop.',
        {HTML:'<nav aria-label="Main"><strong>Lab</strong>\n  <button id="menu-toggle" aria-controls="links" aria-expanded="false">Menu</button>\n  <div id="links" hidden><a href="#home">Home</a> · <a href="#about">About</a></div>\n</nav>',CSS:'nav { padding: 12px; background: aliceblue; }\n',JavaScript:'// Toggle the menu.\n'},
        {CSS:'nav { display: flex; flex-wrap: wrap; gap: 12px; justify-content: space-between; padding: 12px; background: aliceblue; }\n#links { flex-basis: 100%; }\n@media (min-width: 500px) {\n  #menu-toggle { display: none; }\n  #links { display: block; flex-basis: auto; }\n}',JavaScript:'const toggle = document.querySelector("#menu-toggle");\nconst links = document.querySelector("#links");\ntoggle.addEventListener("click", () => {\n  links.hidden = !links.hidden;\n  toggle.setAttribute("aria-expanded", String(!links.hidden));\n});'},
        [check('The mobile button opens and closes the links and updates aria-expanded', "await togglesMenu()")],
        ['In Desktop preview, check that the links are in a row at 500px or wider.', 'In Mobile preview, click Menu and check that the links appear and disappear.']),
      exercise('registration', 'Registration Form',
        'HTML can check whether a form is filled in correctly. JavaScript can show a message when it is submitted.',
        ['Make name and email required. Use the email input type for the email field.', 'On submit, show a message like Thanks, Aye! without reloading the page.'],
        'Call preventDefault() in the submit handler, then change the textContent of #message.',
        {HTML:'<form id="register">\n  <label for="name">Name</label> <input id="name">\n  <label for="email">Email</label> <input id="email">\n  <button>Register</button>\n</form><p id="message" aria-live="polite"></p>',CSS:'form { display: grid; gap: 8px; max-width: 22rem; }\n',JavaScript:'// Handle form submission.\n'},
        {HTML:'<form id="register">\n  <label for="name">Name</label> <input id="name" required>\n  <label for="email">Email</label> <input id="email" type="email" required>\n  <button>Register</button>\n</form><p id="message" aria-live="polite"></p>',JavaScript:'document.querySelector("#register").addEventListener("submit", event => {\n  event.preventDefault();\n  const name = document.querySelector("#name").value.trim();\n  document.querySelector("#message").textContent = "Thanks, " + name + "!";\n});'},
        [check('Name and email are required, and the email field uses the right type', "exists('#name[required]') && exists('#email[type=\"email\"][required]')"), check('The form shows a thank-you message', "submitForm('#register', '#name', 'Aye') && text('#message') === 'Thanks, Aye!'")]),
      exercise('faq', 'Interactive FAQ',
        'The toggle event runs when a details element opens or closes. Use it to close the other answers when one opens.',
        'Add two questions using details and summary. When one question opens, close the other one.',
        'Select all the details elements. When one opens, set open to false on the others.',
        {HTML:'<section id="faq"><h2>FAQ</h2>\n  <!-- Add two questions and answers -->\n</section>',CSS:'#faq { max-width: 30rem; }\nsummary { cursor: pointer; padding: 8px 0; }\n',JavaScript:'// Keep only one question open.\n'},
        {HTML:'<section id="faq"><h2>FAQ</h2>\n  <details><summary>Where are drafts saved?</summary><p>In this browser.</p></details>\n  <details><summary>Can I try again?</summary><p>Yes, anytime.</p></details>\n</section>',JavaScript:'const items = document.querySelectorAll("#faq details");\nitems.forEach(item => item.addEventListener("toggle", () => {\n  if (!item.open) return;\n  items.forEach(other => { if (other !== item) other.open = false; });\n}));'},
        [check('Both questions have a summary', "count('#faq details > summary') === 2"), check('Only one answer stays open at a time', 'await faqSingleOpen()')]),
    ]),
    module('Data & State', [
      exercise('search', 'Product Search',
        'The input event runs when the search text changes. Make both texts lowercase to match words that use different capital letters.',
        'As people type, show only products with names that contain the search text. Show all products when the field is empty.',
        'Use includes() to compare the lowercase text. Set each product\'s hidden property based on the match.',
        {HTML:'<label for="search">Search</label> <input id="search">\n<ul id="products"><li>Coffee</li><li>Green Tea</li><li>Juice</li></ul>',CSS:'#products { padding-left: 22px; }\n',JavaScript:'// Filter the products as the user types.\n'},
        {JavaScript:'const search = document.querySelector("#search");\nconst products = document.querySelectorAll("#products li");\nsearch.addEventListener("input", () => {\n  const query = search.value.trim().toLowerCase();\n  products.forEach(product => {\n    product.hidden = !product.textContent.toLowerCase().includes(query);\n  });\n});'},
        [check('Search ignores capital letters and shows all items when cleared', "(() => { setInput('#search', 'TEA'); const tea = visibleValues('#products li'); setInput('#search', ''); return same(tea, ['Green Tea']) && same(visibleValues('#products li'), ['Coffee','Green Tea','Juice']); })()")]),
      exercise('todos', 'To-do List With Saved State',
        'Keep tasks in an array. When it changes, show the tasks on the page and save them as JSON. Read the saved list when the page loads.',
        ['When a task is added, show it as an li inside #tasks.', 'Skip tasks that are blank or only have spaces.', 'Save the array as JSON under tasks and show the saved list again when you click Run.'],
        'Read JSON.parse(practiceStorage.getItem("tasks") ?? "[]") first. Use textContent to put each task name in an li.',
        {HTML:'<form><label for="task">Task</label> <input id="task"> <button>Add task</button></form>\n<ul id="tasks"></ul>',CSS:'li { padding: 4px; }\n',JavaScript:'// Read tasks, render them and handle form submissions.\n'},
        {JavaScript:'const tasks = JSON.parse(practiceStorage.getItem("tasks") ?? "[]");\nconst list = document.querySelector("#tasks");\nconst input = document.querySelector("#task");\nfunction renderTasks() {\n  list.replaceChildren(...tasks.map(task => {\n    const item = document.createElement("li");\n    item.textContent = task;\n    return item;\n  }));\n}\nrenderTasks();\ndocument.querySelector("form").addEventListener("submit", event => {\n  event.preventDefault();\n  const task = input.value.trim();\n  if (!task) return;\n  tasks.push(task);\n  practiceStorage.setItem("tasks", JSON.stringify(tasks));\n  input.value = "";\n  renderTasks();\n});'},
        [check('New tasks are shown and saved, and blank tasks are skipped', 'todoCheck()')]),
      exercise('api-display', 'API Results With Loading & Error States',
        'Show a loading message before calling fetch. If the request works, show the results. If it fails, show a clear error message.',
        ['When Load items is clicked, get product names from sampleAPI and show them in #items.', 'Show Loading… while waiting, Loaded on success, and Unable to load items. on failure. Use sampleErrorAPI for the Try error button.'],
        'Connect both buttons to the same function with different URLs. Use try and catch to update #status.',
        {HTML:'<button id="load">Load items</button> <button id="error">Try error</button>\n<p id="status" aria-live="polite">Ready</p><ul id="items"></ul>',CSS:'#items { padding-left: 22px; }\n',JavaScript:'// Handle loading, success and failure states.\n'},
        {JavaScript:'const status = document.querySelector("#status");\nconst list = document.querySelector("#items");\nasync function loadItems(url) {\n  status.textContent = "Loading…";\n  list.replaceChildren();\n  try {\n    const response = await fetch(url);\n    if (!response.ok) throw new Error("Request failed");\n    const items = await response.json();\n    list.replaceChildren(...items.map(item => {\n      const li = document.createElement("li");\n      li.textContent = item.name;\n      return li;\n    }));\n    status.textContent = "Loaded";\n  } catch {\n    status.textContent = "Unable to load items.";\n  }\n}\ndocument.querySelector("#load").addEventListener("click", () => loadItems(sampleAPI));\ndocument.querySelector("#error").addEventListener("click", () => loadItems(sampleErrorAPI));'},
        [check('The page shows Loading, then Loaded and all item names', 'await apiResultCheck()'), check('The page shows the right error message', 'await apiErrorCheck()')]),
    ]),
  ],
};

const webExercises = createWebExercises(exercise, check);

export const tracks = [html, cssTrack, js, projects].map(track => {
  const path = learningPaths[track.id];
  if (!path) return { ...track, exercises: track.modules.flatMap(group => group.exercises) };

  const byId = Object.fromEntries([...track.exercises, ...webExercises[track.id]].map(item => [item.id, item]));
  const modules = path.map(({ title, lessons }) => ({
    title: title.en,
    exercises: Object.values(lessons).flat().map(id => byId[id]),
  }));
  return { ...track, modules, exercises: modules.flatMap(group => group.exercises) };
});
