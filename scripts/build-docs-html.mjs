import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { guides as webGuides, developerGuides } from '../dist/docs/guides.js';
import { readingPath } from '../dist/docs/reading-paths.js';
import { pandasApiCatalog } from '../dist/docs/pandas-api-catalog.js';
import { lessonBlocks, sampleData, sampleOutput, sectionDetails, sectionFigure } from '../dist/docs/content.js';
import { lessonDestination, movedArticles, movedSections } from '../dist/docs/section-redirects.js';
import { practiceEnabled } from '../dist/site-config.js';

import { dataGuideIds, loadDataGuide } from '../dist/docs/data-guides.js';

import { pandasApiPages } from './pandas-api-pages.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const dataGuides = await Promise.all(dataGuideIds.map(loadDataGuide));
const guides = [...webGuides, ...developerGuides, ...dataGuides];
const outline = dataGuides.map(guide => ({
  ...guide,
  pages: guide.pages.map(({ id, title, intro, aliases, sections }) => ({
    id, title, intro, aliases, sections: sections.map(({ id, title }) => ({ id, title })),
  })),
}));
await writeFile(join(dist, 'docs/data-guides/outline.js'), 'export default ' + JSON.stringify(outline) + ';\n');

const origin = 'https://javascript-training.cloudninemm.com';
const brand = 'Cloud Nine Innovations';
const languages = ['en', 'my'];
const names = { en: 'English', my: 'မြန်မာ' };

const copy = {
  en: {
    title: 'Web development, Python, and data documentation', home: 'All documentation', subjects: 'Subjects',
    intro: 'Read lessons and code examples for web development, databases, Python, data analysis, and machine learning.',
    interactive: 'Open interactive docs', run: 'Open interactive lesson',
    contents: 'On this page', source: 'Official references', setup: 'How to try it',
    download: 'Download sample CSV', codeOutput: 'Example output', output: 'What to expect', check: 'If the result differs', mistake: 'Common mistake',
    previous: 'Previous lesson', next: 'Next lesson', relatedLessons: 'Related lessons', movedLesson: 'Open the lesson in Web Fundamentals',
  },
  my: {
    title: 'Web Development၊ Python နှင့် Data Documentation', home: 'သင်ခန်းစာအားလုံး', subjects: 'ဘာသာရပ်များ',
    intro: 'Web Development၊ Database၊ Python၊ Data Analysis နဲ့ Machine Learning သင်ခန်းစာတွေကို code နမူနာတွေနဲ့ ဖတ်ပါ။',
    interactive: 'Interactive Docs ဖွင့်ရန်', run: 'Code စမ်းလို့ရတဲ့ သင်ခန်းစာ ဖွင့်ရန်',
    contents: 'ဒီစာမျက်နှာမှာ', source: 'တရားဝင် ကိုးကားချက်များ', setup: 'စမ်းသပ်နည်း',
    download: 'နမူနာ CSV ရယူရန်', codeOutput: 'နမူနာ ရလဒ်', output: 'စမ်းကြည့်ရင် ဘာဖြစ်မလဲ', check: 'ရလဒ်ကွာနေရင်', mistake: 'မှားတတ်တဲ့အချက်',
    previous: 'အရင်သင်ခန်းစာ', next: 'နောက်သင်ခန်းစာ', relatedLessons: 'ဆက်လေ့လာရန် သင်ခန်းစာများ', movedLesson: 'Web Fundamentals ထဲက သင်ခန်းစာကို ဖွင့်ရန်',
  },
};

const escape = value => String(value).replace(/[&<>"']/g, char => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]
));
const localized = (field, language) => escape(field[language]);
const directory = path => join(dist, ...path.split('/').filter(Boolean));
const url = path => origin + path;
const interactiveRoot = practiceEnabled ? '/docs/' : '/';
const anchor = (href, label, attributes = '') => `<a href="${escape(href)}"${attributes}>${label}</a>`;
const interactivePath = (language, guide, page) =>
  (guide ? '/docs/' : interactiveRoot) + '?lang=' + language + '#/' + [guide?.id, page?.id].filter(Boolean).join('/');

const pages = new Map();
const sitemap = new Set([interactiveRoot]);

function switchLanguage(language, guide, page) {
  return languages.filter(other => other !== language).map(other =>
    anchor(readingPath(other, guide, page), names[other], ` lang="${other}" hreflang="${other}"`)
  ).join('');
}

function articleLinks(guide, language) {
  const list = pages => `<ul>${pages.map(page => `<li>${anchor(readingPath(language, guide, page), localized(page.title, language))}</li>`).join('\n')}</ul>`;
  return guide.groups
    ? guide.groups.map(group => `<h3>${localized(group.title, language)}</h3>\n${list(group.pages)}`).join('\n')
    : list(guide.pages);
}

function indexBody(language) {
  const labels = copy[language];
  const topics = guides.map(guide => `<section class="article-section" id="${guide.id}">
  <h2>${escape(guide.name)}</h2>
  <p>${localized(guide.intro, language)}</p>
  ${articleLinks(guide, language)}
</section>`).join('\n');
  return `<main id="main" class="reading-page">
<article>
  <h1>${labels.title}</h1>
  <p class="intro">${labels.intro}</p>
  <p class="reading-link">${anchor(interactivePath(language), labels.interactive)} · ${switchLanguage(language)}</p>
  <nav class="reading-subjects" aria-label="${labels.subjects}">
    ${guides.map(guide => anchor('#' + guide.id, escape(guide.name))).join('\n    ')}
  </nav>
  ${topics}
  <footer>${anchor('/sitemap.xml', 'Sitemap')} · ${anchor('/llms.txt', 'llms.txt')}</footer>
</article>
</main>`;
}

function labeledText(className, label, field, language) {
  return field ? `<p class="${className}"><strong>${label}</strong> ${localized(field, language)}</p>` : '';
}

function relocatedTopic(topic, article, section) {
  const [guideId, pageId] = lessonDestination(topic, article, section);
  const guide = guides.find(item => item.id === guideId);
  const page = guide.pages.find(item => item.id === pageId);
  return { guide, page };
}

function movedTopicLink(language, topic, article, id) {
  const { guide, page } = relocatedTopic(topic, article, id);
  const section = page.sections.find(item => item.id === id);
  return `<li id="${escape(id)}">${anchor(readingPath(language, guide, page) + '#' + id, localized(section.title, language))}</li>`;
}

const linkedMoves = {
  database: movedSections.database,
  html: { 'text-markup': movedSections.html['text-markup'] },
};

function movedTopicLinks(guide, page, language) {
  const moves = linkedMoves[guide.id]?.[page.id];
  if (!moves) return '';
  const links = Object.keys(moves).map(id => movedTopicLink(language, guide.id, page.id, id));
  return `<section class="article-section"><h2>${copy[language].relatedLessons}</h2><ul>${links.join('\n')}</ul></section>`;
}

function legacyLessonPage(language, topic, article, move) {
  const { guide, page } = relocatedTopic(topic, article);
  const labels = copy[language];
  const start = move.defaultSection ? '#' + move.defaultSection : '';
  const sectionIds = new Set([...page.sections.map(section => section.id), ...Object.keys(move.sections ?? {})]);
  const links = [...sectionIds]
    .map(id => movedTopicLink(language, topic, article, id));
  return document(language, page.title[language], page.intro[language], `<main id="main" class="reading-page">
<article>
  <h1>${localized(page.title, language)}</h1>
  <p>${anchor(readingPath(language, guide, page) + start, labels.movedLesson)}</p>
  <ul>${links.join('\n')}</ul>
</article>
</main>`, guide, page);
}

function lessonBody(guide, page, language) {
  const labels = copy[language];
  const referencesTitle = page.referencesTitle ? localized(page.referencesTitle, language) : labels.source;
  const version = page.version ?? guide.version;
  const introText = localized(page.intro, language);
  const intro = page.introBlocks ? lessonBlocks(page.introBlocks, language, escape, 'intro') : introText && `<p class="intro">${introText}</p>`;
  const lessonIndex = guide.pages.indexOf(page);
  const sections = page.sections.map(section => {
    const details = sectionDetails(section, language, escape);
    const body = section.blocks ? lessonBlocks(section.blocks, language, escape) : `<p>${localized(section.text, language)}</p>`;
    const heading = section.id === page.titleSection ? 'h1' : 'h2';
    const title = localized(section.title, language);
    return `<section class="article-section" id="${escape(section.id)}">
${title ? `  <${heading}>${title}</${heading}>` : ''}${section.figure?.banner ? '\n  ' + sectionFigure(section.figure, language, escape) : ''}
${body ? '  ' + body : ''}
${labeledText('example-setup', labels.setup, section.setup, language)}
${section.code ? `<pre><code>${escape(section.code)}</code></pre>` : ''}${section.afterCode ? '\n' + lessonBlocks(section.afterCode, language, escape) : ''}${details ? '\n' + details : ''}${section.apiCatalog ? '\n' + pandasApiCatalog(section.apiCatalog, language, escape) : ''}
${section.output ? sampleOutput(section, labels.codeOutput, escape) + '\n' : ''}${labeledText('example-result', labels.output, section.expected, language)}
${labeledText('example-check', page.id === 'reference' ? labels.mistake : labels.check, section.check, language)}
</section>`;
  }).join('\n');
  const contents = [...page.sections.map(section => [section.id, localized(section.title, language)]), ['references', referencesTitle]]
    .filter(([, title]) => title);
  const neighbors = [[lessonIndex - 1, labels.previous], [lessonIndex + 1, labels.next]].flatMap(([index, name]) => {
    const neighbor = guide.pages[index];
    return neighbor ? [anchor(readingPath(language, guide, neighbor), name + ' · ' + localized(neighbor.title, language))] : [];
  });
  return `<main id="main" class="reading-page">
<article>
  <nav aria-label="${labels.home}">${anchor(readingPath(language) + '#' + guide.id, labels.home + ' · ' + escape(guide.name))} ${switchLanguage(language, guide, page)}</nav>
${page.titleSection ? '' : `  <h1>${localized(page.title, language)}</h1>\n`}  ${version ? `<p class="article-version">${escape(version)}</p>` : ''}
${page.introFigure || intro ? `  ${page.introFigure ? sectionFigure(page.introFigure, language, escape) + '\n  ' : ''}${intro}\n` : ''}  <p class="reading-link">${anchor(interactivePath(language, guide, page), dataGuideIds.includes(guide.id) || developerGuides.includes(guide) ? labels.interactive : labels.run)}</p>
${page.dataset ? '  ' + sampleData(page, labels.download, escape) + '\n' : ''}
  <section class="article-section">
    <h2>${labels.contents}</h2>
    <ul>${contents.map(([id, title]) => `<li>${anchor('#' + id, title)}</li>`).join('\n')}</ul>
  </section>
  ${sections}${movedTopicLinks(guide, page, language)}
  <section class="references" id="references">
    <h2>${referencesTitle}</h2>
    <ul>${page.sources.map(([label, href]) => `<li>${anchor(href, typeof label === 'string' ? escape(label) : localized(label, language))}</li>`).join('\n')}</ul>
  </section>
  <footer><nav aria-label="${labels.home}">${neighbors.join('\n')}</nav></footer>
</article>
</main>`;
}

function document(language, title, description, body, guide, page) {
  const canonical = readingPath(language, guide, page);
  const titleText = escape(title + ' · ' + brand);
  const hasApiCatalog = page?.sections.some(section => section.apiCatalog);
  const hasFigure = page?.introFigure || page?.sections.some(section => section.figure);
  const styleVersion = hasFigure ? '?v=87' : page?.introBlocks ? '?v=75' : hasApiCatalog ? '?v=68'
    : guide && dataGuideIds.includes(guide.id) ? '?v=61' : '';
  const apiScript = hasApiCatalog ? "\n  <script type=\"module\">import { bindPandasApi } from '/docs/pandas-api-catalog.js?v=72'; bindPandasApi(document);</script>" : '';
  const metadata = languages.map(other =>
    `<link rel="alternate" hreflang="${other}" href="${escape(url(readingPath(other, guide, page)))}">`
  ).join('\n  ');
  return `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description)}">
  <title>${titleText}</title>
  <link rel="canonical" href="${escape(url(canonical))}">
  ${metadata}
  <link rel="icon" href="/cloud-nine-logo.png" type="image/png">
  <link rel="stylesheet" href="/docs/style.css${styleVersion}">${hasFigure ? '\n  <script type="module" src="/docs/image-preview.js?v=61"></script>' : ''}${apiScript}
</head>
<body>
${body}
</body>
</html>
`;
}

for (const language of languages) {
  const labels = copy[language];
  const home = readingPath(language);
  for (const [path, html] of pandasApiPages({ language, escape, origin, brand })) {
    sitemap.add(path);
    pages.set(path, html);
  }

  sitemap.add(home);
  pages.set(home, document(language, labels.title, labels.intro, indexBody(language)));
  for (const [topic, articles] of Object.entries(movedArticles)) {
    for (const [article, move] of Object.entries(articles)) {
      pages.set(`/docs/read/${language}/${topic}/${article}/`, legacyLessonPage(language, topic, article, move));
    }
  }
  for (const guide of guides) {
    for (const page of guide.pages) {
      const path = readingPath(language, guide, page);
      if (pages.has(path)) throw new Error('Duplicate lesson URL ' + path);
      sitemap.add(path);
      const description = page.intro[language] || page.sections[0]?.text?.[language] || '';
      pages.set(path, document(language, page.title[language], description, lessonBody(guide, page, language), guide, page));
    }
  }
}

// The dedicated read directory contains only files generated by this script.
const readRoot = directory('/docs/read/');
await mkdir(readRoot, { recursive: true });
for (const entry of await readdir(readRoot)) await rm(join(readRoot, entry), { recursive: true });
for (const [path, html] of pages) {
  const file = join(directory(path), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const indexFile = join(dist, 'docs/index.html');
const shell = await readFile(indexFile, 'utf8');
const region = /(<!-- docs-index:start -->)[\s\S]*(<!-- docs-index:end -->)/;
if (!region.test(shell)) throw new Error('Docs index is missing the static-content markers.');
const firstGuide = guides[0];
const firstLesson = lessonBody(firstGuide, firstGuide.pages[0], 'en').replace(/^[ \t]+$/gm, '');
const docsIndex = shell
  .replace(/(<link rel="canonical" href=")[^"]*(")/, (_, start, end) => start + url(interactiveRoot) + end)
  .replace(region, (_, start, end) => start + '\n' + firstLesson + '\n    ' + end);
await writeFile(indexFile, docsIndex);
const homeIndex = practiceEnabled
  ? await readFile(new URL('./practice-index.html', import.meta.url), 'utf8')
  : docsIndex;
await writeFile(join(dist, 'index.html'), homeIndex);

await writeFile(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...sitemap].map(path => `  <url><loc>${escape(url(path))}</loc></url>`).join('\n')}
</urlset>
`);

await writeFile(join(dist, 'llms.txt'), `# ${brand} documentation

> Public web development, Python, data analysis, and machine learning lessons in English and Burmese. The reading URLs serve article text, headings, code examples, and references as HTML without running JavaScript or signing in.

## Lesson indexes

- [English lessons](${url(readingPath('en'))}): All guides and individual lesson URLs.
- [Burmese lessons](${url(readingPath('my'))}): All guides and individual lesson URLs in Burmese.
- [Sitemap](${url('/sitemap.xml')}): Direct reading URLs for both languages.

## Interactive docs

- [Run the examples](${url(interactiveRoot)}): The interactive site opens code editors and browser previews. To read or cite a lesson from an automated client, follow its reading URL from one of the language indexes.
`);

console.log('Generated ' + (pages.size - languages.length) + ' static lesson pages and ' + languages.length + ' language indexes.');
