import { guides as webGuides, developerGuides } from './guides.js?v=88';
import { curricula } from '../locales.js';
import { articleForExercise } from '../learning-paths.js';
import { lessonDestination } from './section-redirects.js?v=85';
import { attachSidebar, sidebarBackdrop, sidebarEdgeToggle, sidebarToggle } from '../sidebar.js';
import { bindExamples, exampleMarkup } from './run-examples.js?v=61';
import { savedLanguage, saveLanguage, siteHeader } from '../site-header.js?v=2';
import { practiceEnabled } from '../site-config.js';
import { lessonBlocks, sampleData, sampleOutput, sectionDetails, sectionFigure } from './content.js?v=85';
import './image-preview.js?v=61';
import { loadDataGuide } from './data-guides.js?v=73';
import dataGuides from './data-guides/outline.js?v=73';
import { bindPandasApi, pandasApiCatalog } from './pandas-api-catalog.js?v=72';
import { readingPath } from './reading-paths.js';
import { pandasApiArticle } from './pandas-api-article.js?v=3';
import { loadPandasApiDetails, pandasApiIndex, pandasApiSidebar, pandasReferenceRoute } from './pandas-api-navigation.js?v=3';
import { pandasApiPath, pandasApiRoute } from './pandas-api-paths.js';
import { bindPandasRunner, prewarmPandas } from './pandas-runner.js?v=5';

const app = document.querySelector('#app');
const brandName = 'Cloud Nine Innovations';
const copy = {
  en: {
    webTopics: 'Web Development', developerTopics: 'Developer Tools', dataTopics: 'Python & Data',
    lessonLoading: 'Loading lesson…', lessonFailed: 'The lesson could not load.', readLesson: 'Open the reading page',
    searchLoading: 'Searching Python & Data lessons…', searchPartial: 'Some lesson details could not load. Titles are still searchable.',
    download: 'Download sample CSV', codeOutput: 'Example output',
    exampleSqlLoading: 'Starting PostgreSQL and running the query…',
    exampleCompiling: 'Compiling the example…', exampleReactLoading: 'Loading React and compiling the example…',
    examplePreparing: 'Preparing the preview…', examplePreviewLoading: 'Opening the preview…',
    exampleTimeout: 'The example took too long. Try running it again.',
    practice: 'Practice exercises', browse: 'Topics', search: 'Search docs', darkMode: 'Dark mode', subjects: 'Subjects',
    showSidebar: 'Show sidebar', hideSidebar: 'Hide sidebar',
    placeholder: 'Search titles and topics', close: 'Close', noResults: 'No matching articles.',
    skip: 'Skip to content',
    contents: 'On this page',
    references: 'Official references', setup: 'How to try it', check: 'If the result differs', commonMistake: 'Common mistake', expected: 'What to expect', copy: 'Copy', copied: 'Copied', copyError: 'Copy failed',
    previous: 'Previous topic', next: 'Next topic', articles: 'Articles',
    relatedPractice: 'Practice this topic',
    runExample: 'Run code', resetExample: 'Reset', editExample: 'Edit example code', exampleOutput: 'Example output',
    previewWidth: 'Preview width', previewFit: 'Fit',
    exampleConsole: 'Console', exampleError: 'Error', exampleDone: 'Run complete',
    exampleFailed: 'The example reported an error.', exampleTypeCheck: 'Type check passed',
    exampleNoRows: 'No rows returned.', exampleNoTable: 'SQL ran successfully. No result table was returned.',
    sampleApi: 'The preview uses a sample API response.', sampleStorage: 'The preview keeps storage in memory for this run.',
    sampleNest: 'The browser preview sends sample requests to these routes.',
    sampleSql: 'Runs in a temporary PostgreSQL database in this browser. Each run starts fresh.',
    terminal: 'Run these commands in your terminal using the lesson setup.',
    project: 'Run this example in the local project environment described in the lesson.',
  },
  my: {
    webTopics: 'Web Development', developerTopics: 'Developer Tools', dataTopics: 'Python နှင့် Data',
    lessonLoading: 'သင်ခန်းစာ ဖွင့်နေပါတယ်…', lessonFailed: 'သင်ခန်းစာ ဖွင့်မရပါ။', readLesson: 'သင်ခန်းစာ ဖတ်ရန်',
    searchLoading: 'Python နဲ့ Data သင်ခန်းစာတွေ ရှာနေပါတယ်…', searchPartial: 'သင်ခန်းစာတချို့ရဲ့ အသေးစိတ်ကို ဖွင့်မရပါ။ ခေါင်းစဉ်နဲ့ ဆက်ရှာနိုင်ပါတယ်။',
    download: 'နမူနာ CSV ရယူရန်', codeOutput: 'နမူနာ ရလဒ်',
    exampleSqlLoading: 'PostgreSQL ဖွင့်ပြီး query run နေပါတယ်…',
    exampleCompiling: 'နမူနာ code ကို compile လုပ်နေပါတယ်…', exampleReactLoading: 'React ဖွင့်ပြီး နမူနာ code ကို compile လုပ်နေပါတယ်…',
    examplePreparing: 'Preview ပြင်ဆင်နေပါတယ်…', examplePreviewLoading: 'Preview ဖွင့်နေပါတယ်…',
    exampleTimeout: 'နမူနာ run ဖို့ ကြာနေပါတယ်။ ထပ်စမ်းကြည့်ပါ။',
    practice: 'လေ့ကျင့်ခန်းများ', browse: 'သင်ခန်းစာများ', search: 'သင်ခန်းစာ ရှာရန်', darkMode: 'အမှောင်မုဒ်', subjects: 'ဘာသာရပ်များ',
    showSidebar: 'ဘေးမီနူး ပြရန်', hideSidebar: 'ဘေးမီနူး ဖျောက်ရန်',
    placeholder: 'ခေါင်းစဉ်နဲ့ အကြောင်းအရာ ရှာပါ', close: 'ပိတ်ရန်', noResults: 'ကိုက်ညီတဲ့ သင်ခန်းစာ မတွေ့ပါ။',
    skip: 'အကြောင်းအရာဆီ သွားရန်',
    contents: 'ဒီစာမျက်နှာမှာ',
    references: 'တရားဝင် ကိုးကားချက်များ', setup: 'စမ်းသပ်နည်း', check: 'ရလဒ်ကွာနေရင်', commonMistake: 'မှားတတ်တဲ့အချက်', expected: 'စမ်းကြည့်ရင် ဘာဖြစ်မလဲ', copy: 'ကူးရန်', copied: 'ကူးပြီးပါပြီ', copyError: 'ကူးမရပါ',
    previous: 'အရင် သင်ခန်းစာ', next: 'နောက် သင်ခန်းစာ', articles: 'ဆောင်းပါးများ',
    relatedPractice: 'ဒီအကြောင်းအရာကို လေ့ကျင့်ပါ',
    runExample: 'Code Run ရန်', resetExample: 'မူလ Code ပြန်ထားရန်', editExample: 'နမူနာ Code ပြင်ရန်', exampleOutput: 'နမူနာ ရလဒ်',
    previewWidth: 'Preview အကျယ်', previewFit: 'အံကိုက်',
    exampleConsole: 'Console', exampleError: 'အမှား', exampleDone: 'Run ပြီးပါပြီ',
    exampleFailed: 'နမူနာ Run ရာမှာ အမှားတွေ့ပါတယ်။', exampleTypeCheck: 'Type စစ်ဆေးမှု အောင်မြင်ပါတယ်။',
    exampleNoRows: 'Row တစ်ခုမှ မရပါ။', exampleNoTable: 'SQL Run ပြီးပါပြီ။ Result table ပြန်မလာပါ။',
    sampleApi: 'Preview မှာ နမူနာ API response ကို သုံးထားပါတယ်။', sampleStorage: 'ဒီတစ်ကြိမ် Run ထားတဲ့အတွင်း Storage ကို memory ထဲမှာ ယာယီ သိမ်းပေးပါတယ်။',
    sampleNest: 'Browser preview က ဒီ routes တွေကို နမူနာ requests နဲ့ စမ်းပေးပါတယ်။',
    sampleSql: 'Browser ထဲက ယာယီ PostgreSQL database မှာ Run ပါတယ်။ တစ်ကြိမ်စီ အသစ်ပြန်စပါတယ်။',
    terminal: 'သင်ခန်းစာထဲက setup အတိုင်း ပြင်ဆင်ပြီး terminal မှာ ဒီ commands တွေ Run ပါ။',
    project: 'သင်ခန်းစာထဲမှာ ဖော်ပြထားတဲ့ local project မှာ ဒီနမူနာကို Run ပါ။',
  },
};
const icons = {
  practice: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
  'web-security': '<path d="m12 3 8 3v5c0 5-3.3 8-8 10-4.7-2-8-5-8-10V6z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  'web-fundamentals': '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4.5" ry="9"/><path d="M3 12h18"/>',
  html: '<path d="m9 6-6 6 6 6m6-12 6 6-6 6"/>',
  css: '<path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 1.2-2.4 1.5 1.5 0 0 1 1.2-2.4H18a3 3 0 0 0 3-3c0-5.6-4-10.2-9-10.2Z"/><path d="M7 12h.01M9 7h.01m5 0h.01m3 4h.01" stroke-width="2.8"/>',
  js: '<path d="M9 4H7a2 2 0 0 0-2 2v3a3 3 0 0 1-3 3 3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h2m6-16h2a2 2 0 0 1 2 2v3a3 3 0 0 0 3 3 3 3 0 0 0-3 3v3a2 2 0 0 1-2 2h-2"/>',
  typescript: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M6 9h6m-3 0v7m9-7h-2.5a1.75 1.75 0 0 0 0 3.5h.75a1.75 1.75 0 0 1 0 3.5H14"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  react: '<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
  nestjs: '<rect x="3" y="3.5" width="18" height="7" rx="2"/><rect x="3" y="13.5" width="18" height="7" rx="2"/><path d="M7 7h.01M7 17h.01" stroke-width="2.8"/>',
  git: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10m0-3h4a8 8 0 0 0 8-7"/>',
  github: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18m-12 4-2 2 2 2m6-4 2 2-2 2"/>',
  python: '<path d="M8 8V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v6H8a3 3 0 1 0 0 6"/><path d="M16 16v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6h9a3 3 0 1 0 0-6M11 6h.01M13 18h.01"/>',
  numpy: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16M12 4v16"/>',
  pandas: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M3 14h18M9 9v11"/>',
  matplotlib: '<path d="M4 4v16h16M8 16l4-5 3 2 5-6"/>',
  'data-analysis': '<path d="M4 4v16h16M8 16v-3m5 3V7m5 9v-6"/>',
  'machine-learning': '<path d="m8 7 8 4m-8 6 8-4"/><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="12" r="2"/>',
  article: '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10m-7-7 7 7h-5a2 2 0 0 1-2-2V3ZM8 14h8m-8 3h6"/>',
  section: '<path d="M9 4 7 20m10-16-2 16M4 9h17M3 15h17"/>',
  moon: '<path d="M20.5 15.3A9 9 0 0 1 8.7 3.5 9 9 0 1 0 20.5 15.3Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19m0-14-1.5 1.5m-11 11L5 19"/>',
  search: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/>',
  external: '<path d="M13 5h6v6m0-6-8 8m8 1v5H5V5h5"/>',
};
const symbol = name => '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const navIcon = topic => '<span class="nav-icon tone-' + topic + '">' + symbol(topic) + '</span>';
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const path = (guide, page, section) => '#/' + [guide.id, page.id, section?.id].filter(Boolean).join('/');
let language = savedLanguage();
const initialURL = new URL(location.href);
const requestedLanguage = initialURL.searchParams.get('lang');
if (requestedLanguage === 'en' || requestedLanguage === 'my') {
  language = requestedLanguage;
  saveLanguage(language);
  initialURL.searchParams.delete('lang');
  history.replaceState(history.state, '', initialURL);
}
const tr = key => copy[language][key];
const updateSidebar = attachSidebar(app, tr);
const tx = value => esc(value[language]);
const guideGroups = [['webTopics', webGuides], ['developerTopics', developerGuides], ['dataTopics', dataGuides]];
const guides = guideGroups.flatMap(([, guides]) => guides);
const firstGuide = guides[0];
const firstLesson = path(firstGuide, firstGuide.pages[0]);
const colorPreference = window.matchMedia('(prefers-color-scheme: dark)');
const themeStorageKey = 'frontend-lab-theme';
const isDark = () => (document.documentElement.dataset.theme ?? (colorPreference.matches ? 'dark' : 'light')) === 'dark';

function updateTheme() {
  const dark = isDark();
  app.querySelector('#theme-toggle').setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]').content = dark ? '#101622' : '#f7f9fc';
}

function normalizeEntryRoute() {
  if (['', '#', '#/', '#/overview'].includes(location.hash)) {
    history.replaceState(history.state, '', firstLesson);
  }
}
const loadedGuides = new Map();
const guideRequests = new Map();
let apiDetails;
let openApiGroups = new Set();

function requestGuide(id) {
  if (loadedGuides.has(id)) return Promise.resolve(loadedGuides.get(id));
  if (!guideRequests.has(id)) {
    const request = loadDataGuide(id).then(guide => {
      loadedGuides.set(id, guide);
      return guide;
    }).finally(() => guideRequests.delete(id));
    guideRequests.set(id, request);
  }
  return guideRequests.get(id);
}

function currentRoute() {
  const [topic, article, segment, apiLeaf, apiSection] = location.hash.replace(/^#\/?/, '').split('/');
  const isApi = topic === 'pandas' && article === 'api-reference' && segment === 'api';
  const apiName = isApi ? 'pandas.' + (apiLeaf ?? '') : undefined;
  const [guideId, articleId, section] = lessonDestination(topic, article, isApi ? apiSection : segment);
  const outline = guides.find(group => group.id === guideId);
  if (!outline) return { guide: firstGuide, page: firstGuide.pages[0] };
  const loaded = loadedGuides.get(guideId);
  const guide = loaded ?? outline;
  const directPage = guide.pages.find(page => page.id === articleId || page.aliases?.includes(articleId));
  const legacyArticle = !directPage && articleId ? articleForExercise(guideId, articleId) : undefined;
  const page = directPage ?? guide.pages.find(page => page.id === legacyArticle) ?? guide.pages[0];
  const index = guideId === 'pandas' ? pandasApiIndex(guide) : undefined;
  const selected = apiName ? index?.byName.get(apiName) : undefined;
  return { guide, page, section, apiName, index, selected,
    needsGuide: !loaded && dataGuides.includes(outline),
    needsApi: Boolean(apiName && !apiDetails && (selected || !loaded)),
  };
}

function header(guide, page) {
  const practiceTrack = practiceEnabled && curricula[language].find(track => track.id === guide?.id);
  const exercise = page?.exercises?.[0];
  const practice = practiceTrack ? '/#/' + practiceTrack.id + (exercise ? '/' + exercise : '') : '/';
  const action = `<button id="open-search" class="search-button" type="button">${symbol('search')}<span>${tr('search')}</span></button>`;
  const themeLabel = tr('darkMode');
  const appearance = `<button id="theme-toggle" class="theme-toggle" type="button" aria-label="${themeLabel}" title="${themeLabel}">
    <span class="theme-moon">${symbol('moon')}</span><span class="theme-sun">${symbol('sun')}</span>
  </button>`;
  return siteHeader({
    active: 'docs', language, root: '/', practice: practiceEnabled ? practice : undefined,
    docs: firstLesson, action, appearance, secondary: subjectNavigation(guide),
  });
}

function subjectNavigation(currentGuide) {
  const subjects = guides.map(guide => `<li><a data-sidebar-category href="${path(guide, guide.pages[0])}"${guide.id === currentGuide?.id ? ' aria-current="location"' : ''}>${navIcon(guide.id)}<span>${esc(guide.name)}</span></a></li>`).join('');
  return `<div class="subject-bar"><div class="subject-bar-inner">
    ${sidebarToggle}
    <nav class="subject-nav" aria-label="${tr('subjects')}"><ul class="subject-list">${subjects}</ul></nav>
  </div></div>`;
}

function pandasSidebar(route) {
  const { page, selected, index, apiName } = route;
  const current = page.id === 'api-reference' && !apiName;
  return `<div class="pandas-sidebar" data-pandas-sidebar>
    <a class="page-link api-sidebar-heading" href="${pandasReferenceRoute}"${current ? ' aria-current="page"' : ''}>${symbol('article')}<span>${language === 'my' ? 'pandas API Reference' : 'pandas API reference'}</span></a>
    ${pandasApiSidebar(index, selected, openApiGroups, language, esc)}
  </div>`;
}

function navigation(route) {
  const { guide: current, page: article } = route;
  return `<aside id="sidebar" class="sidebar"><nav aria-label="${tr('browse')}">
    ${practiceEnabled ? `<a class="nav-link home-link" href="/">${navIcon('practice')}<span>${tr('practice')}</span></a>` : ''}
    ${guideGroups.map(([label, topics]) => `<p class="nav-heading">${tr(label)}</p>
    ${topics.map(guide => `<div class="nav-group">
      <a class="nav-link guide-link ${guide.id === current?.id ? 'active' : ''}" data-sidebar-category href="${path(guide, guide.pages[0])}">${navIcon(guide.id)}<span>${guide.name}</span></a>
      ${guide.id === current?.id ? `${guide.id === 'pandas' ? pandasSidebar(route) : ''}
        ${articleList(current, page => `<a class="page-link" href="${path(guide, page)}" ${page === article ? 'aria-current="page"' : ''}>${symbol('article')}<span>${tx(page.title)}</span></a>`, guide.id === 'pandas' ? current.pages.filter(page => page.id !== 'api-reference') : current.pages)}` : ''}
    </div>`).join('')}`).join('')}
  </nav></aside>`;
}

function articleList(guide, link, pages = guide.pages) {
  const list = (pages, label) => `<ul aria-label="${label}">${pages.map(page => `<li>${link(page)}</li>`).join('')}</ul>`;
  if (!guide.groups) return list(pages, tr('articles'));
  return guide.groups.map(group => `<div class="path-group">
    <p class="path-label">${tx(group.title)}</p>${list(group.pages, tx(group.title))}
  </div>`).join('');
}

function practiceLinks(guide, page) {
  if (!practiceEnabled || !page.exercises?.length) return '';
  const track = curricula[language].find(track => track.id === guide.id);
  const links = page.exercises.map(id => {
    const exercise = track.exercises.find(exercise => exercise.id === id);
    return `<li><a href="/#/${guide.id}/${exercise.id}">${symbol('practice')}<span>${esc(exercise.title)}</span></a></li>`;
  }).join('');
  return `<section class="related-practice" aria-labelledby="related-practice">
    <h2 id="related-practice">${tr('relatedPractice')}</h2><ul>${links}</ul>
  </section>`;
}

function article(guide, page) {
  const position = guide.pages.indexOf(page);
  const version = page.version ?? guide.version;
  const step = (index, name) => guide.pages[index] ? `<a href="${path(guide, guide.pages[index])}">
      <span>${tr(name)}</span><strong>${tx(guide.pages[index].title)}</strong></a>` : '';
  const referencesTitle = page.referencesTitle ?? copyTitle('references');
  const contents = `<ul>${[...page.sections, {id: 'references', title: referencesTitle}].map(item => `<li><a href="${path(guide, page, item)}">${symbol(item.id === 'references' ? 'article' : 'section')}<span>${tx(item.title)}</span></a></li>`).join('')}</ul>`;
  return `<div class="article-layout">
    <article>
      <div class="crumb"><a href="${path(guide, guide.pages[0])}">${esc(guide.name)}</a></div>
      ${page.titleSection ? '' : `<h1>${tx(page.title)}</h1>`}
      ${version ? `<p class="article-version">${esc(version)}</p>` : ''}
      ${page.introFigure ? sectionFigure(page.introFigure, language, esc) : ''}
      ${page.introBlocks ? lessonBlocks(page.introBlocks, language, esc, 'intro') : `<p class="intro">${tx(page.intro)}</p>`}
      ${sampleData(page, tr('download'), esc)}
      <details class="mobile-contents">
        <summary>${tr('contents')}</summary>
        <nav aria-label="${tr('contents')}">${contents}</nav>
      </details>
      ${page.sections.map(item => {
        const heading = item.id === page.titleSection ? 'h1' : 'h2';
        return `<section class="article-section" tabindex="-1" id="${item.id}">
        <${heading}>${tx(item.title)}</${heading}>
        ${item.figure?.banner ? sectionFigure(item.figure, language, esc) : ''}
        ${item.blocks ? lessonBlocks(item.blocks, language, esc) : `<p>${tx(item.text)}</p>`}
        ${item.setup ? `<p class="example-setup"><strong>${tr('setup')}</strong> ${tx(item.setup)}</p>` : ''}
        ${item.code ? exampleMarkup(guide, page, item, tr, esc) : ''}
        ${lessonBlocks(item.afterCode, language, esc)}
        ${sectionDetails(item, language, esc)}
        ${item.apiCatalog ? pandasApiCatalog(item.apiCatalog, language, esc, pandasApiRoute) : ''}
        ${sampleOutput(item, tr('codeOutput'), esc)}
        ${item.expected ? `<p class="example-result"><strong>${tr('expected')}</strong> ${tx(item.expected)}</p>` : ''}
        ${item.check ? `<p class="example-check"><strong>${tr(page.id === 'reference' ? 'commonMistake' : 'check')}</strong> ${tx(item.check)}</p>` : ''}
      </section>`;
      }).join('')}
      <section class="references" tabindex="-1" id="references">
        <h2>${tx(referencesTitle)}</h2>
        <ul>${page.sources.map(([label, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(typeof label === 'string' ? label : label[language])} ${symbol('external')}</a></li>`).join('')}</ul>
      </section>
      ${practiceLinks(guide, page)}
      <nav class="pagination" aria-label="${tr('browse')}">${step(position - 1, 'previous')}${step(position + 1, 'next')}</nav>
    </article>
    <nav class="contents" aria-label="${tr('contents')}">
      <p>${tr('contents')}</p>
      ${contents}
    </nav>
  </div>`;
}
const copyTitle = key => ({ en: copy.en[key], my: copy.my[key] });

function searchDialog() {
  return `<dialog id="search-dialog" aria-labelledby="search-title">
    <div class="search-head"><h2 id="search-title">${tr('search')}</h2><form method="dialog"><button type="submit">${tr('close')}</button></form></div>
    <input type="search" aria-label="${tr('placeholder')}" placeholder="${tr('placeholder')}" autofocus>
    <p class="search-status" role="status" hidden></p>
    <div class="search-results"></div>
  </dialog>`;
}

function bindSearch() {
  const dialog = document.querySelector('#search-dialog');
  const input = dialog.querySelector('input');
  const target = dialog.querySelector('.search-results');
  const status = dialog.querySelector('.search-status');
  let searchRequest;
  let searchIncomplete = false;

  function results() {
    const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const flat = guides.flatMap(outline => {
      const guide = loadedGuides.get(outline.id) ?? outline;
      return guide.pages.map(page => ({ guide, page }));
    });
    const matches = flat.filter(({guide, page}) => {
      const content = [guide.name, ...Object.values(page.title), ...Object.values(page.intro), JSON.stringify(page.introBlocks ?? ''),
        ...page.sections.flatMap(section => [section.code ?? '', ...Object.values(section.title), ...Object.values(section.text ?? {}), ...Object.values(section.setup ?? {}), ...Object.values(section.expected ?? {}), ...Object.values(section.check ?? {}),
          JSON.stringify(section.blocks ?? ''), JSON.stringify(section.afterCode ?? ''),
          ...(section.terms ?? []).flatMap(([term, definition]) => [term, ...Object.values(definition)])])]
        .join(' ').toLowerCase();
      return terms.every(term => content.includes(term));
    });
    const resultsMarkup = matches.map(({ guide, page }) => {
      const section = terms.length ? page.sections.find(item =>
        Object.values(item.title).some(title => terms.every(term => title.toLowerCase().includes(term)))
      ) : undefined;
      return `<li><a href="${path(guide, page, section)}"><span>${guide.name}</span><strong>${tx(page.title)}${section ? ' · ' + tx(section.title) : ''}</strong></a></li>`;
    });
    target.innerHTML = resultsMarkup.length ? `<ul>${resultsMarkup.join('')}</ul>`
      : searchRequest ? '' : `<p role="status">${tr('noResults')}</p>`;
  }
  document.querySelector('#open-search').addEventListener('click', () => {
    results();
    dialog.showModal();
  });
  input.addEventListener('input', () => {
    if (input.value.trim() && !searchRequest && !searchIncomplete && dataGuides.some(guide => !loadedGuides.has(guide.id))) {
      status.textContent = tr('searchLoading');
      status.classList.add('loading-status');
      status.hidden = false;
      searchRequest = Promise.allSettled(dataGuides.map(guide => requestGuide(guide.id))).then(outcomes => {
        searchRequest = undefined;
        searchIncomplete = outcomes.some(outcome => outcome.status === 'rejected');
        status.classList.remove('loading-status');
        status.textContent = searchIncomplete ? tr('searchPartial') : '';
        status.hidden = !searchIncomplete;
        if (dialog.open) results();
      });
    }
    results();
  });
  target.addEventListener('click', event => {
    if (event.target.closest('a')) dialog.close();
  });
}

let stopExamples = () => {};
let renderedPage;
let renderedApiName;
let stopPandasRunner = () => {};
let renderVersion = 0;

function markContents(section) {
  for (const link of app.querySelectorAll('.contents a, .mobile-contents a')) {
    if (link.hash.split('/').at(-1) === section) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

function focusSection(page, section, apiName) {
  const contents = app.querySelector('.mobile-contents');
  if (contents?.open) contents.open = false;
  markContents(section);
  const isSection = apiName ? ['syntax', 'parameters', 'returns', 'example'].includes(section)
    : page && (section === 'references' || page.sections.some(item => item.id === section));
  const target = isSection ? document.getElementById(section) : null;
  if (target) {
    target.scrollIntoView();
    target.focus({ preventScroll: true });
  } else {
    window.scrollTo(0, 0);
    document.querySelector('#main').focus({ preventScroll: true });
  }
}

function bindArticle(guide, page, apiName) {
  if (apiName) {
    stopPandasRunner = bindPandasRunner(app, language);
    return;
  }
  bindPandasApi(app);
  stopExamples = bindExamples(app, guide, page, tr, esc);
  app.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const edited = button.closest('.example-runner')?.querySelector('textarea');
      const code = edited ? edited.value : page.sections.find(item => item.id === button.dataset.copy).code;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = tr('copied');
      } catch { button.textContent = tr('copyError'); }
      setTimeout(() => { button.textContent = tr('copy'); }, 1800);
    });
  });
  app.querySelector('.mobile-contents')?.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (link?.hash === location.hash && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      focusSection(page, currentRoute().section);
    }
  });
}

function routeContent(route) {
  const { guide, page, apiName, selected, needsGuide, needsApi } = route;
  if (needsGuide || needsApi) return `<article class="lesson-loading"><h1>${apiName ? esc(apiName) : tx(page.title)}</h1>
    <p class="loading-status lesson-status" role="status">${tr('lessonLoading')}</p></article>`;
  if (!apiName) return article(guide, page);
  const meta = selected && apiDetails?.[apiName];
  if (!meta) {
    const missing = language === 'my' ? 'ဒီ API အမည်ကို ရှာမတွေ့ပါ။' : 'This API name could not be found.';
    return `<article><h1>${esc(apiName)}</h1><p>${missing}</p><a href="${pandasReferenceRoute}">${tx(page.title)}</a></article>`;
  }
  return pandasApiArticle({ ...selected, meta, language, escape: esc, backPath: pandasReferenceRoute, interactive: true });
}

function showSelectedApi() {
  const sidebar = app.querySelector('#sidebar');
  const link = sidebar.querySelector('.api-sidebar-method[aria-current], .api-sidebar-heading[aria-current]');
  if (!link || sidebar.hidden) return;
  const viewport = sidebar.getBoundingClientRect();
  const item = link.getBoundingClientRect();
  if (item.height && (item.top < viewport.top + 40 || item.bottom > viewport.bottom)) {
    sidebar.scrollTop += item.top - viewport.top - sidebar.clientHeight / 3;
  }
}

function render(resetScroll = true) {
  const version = ++renderVersion;
  const route = currentRoute();
  if (route.page?.id === 'api-reference' && route.guide?.id === 'pandas') prewarmPandas().catch(() => {});
  const { guide, page, section, needsGuide, needsApi, apiName, selected } = route;
  const subjectScroll = app.querySelector('.subject-nav')?.scrollLeft ?? 0;
  const previousSidebar = app.querySelector('#sidebar');
  const previousTree = previousSidebar?.querySelector('.api-sidebar-tree');
  const sidebarScroll = previousTree && guide?.id === 'pandas' ? previousSidebar.scrollTop : 0;
  if (previousTree) {
    openApiGroups = new Set([...previousTree.querySelectorAll('details[open]')].map(detail => detail.dataset.apiGroup));
  }
  const apiChanged = renderedApiName !== apiName;
  if (selected && apiChanged) openApiGroups.add(selected.group.id);
  const currentEditors = page && page === renderedPage ? app.querySelectorAll('.example-runner') : [];
  const drafts = new Map([...currentEditors].map(runner => [runner.dataset.example, runner.querySelector('textarea').value]));
  const apiDraft = apiName && !apiChanged ? app.querySelector('[data-pandas-runner] textarea')?.value : undefined;
  stopExamples();
  stopPandasRunner();
  stopPandasRunner = () => {};
  renderedPage = page;
  renderedApiName = apiName;
  document.documentElement.lang = language;
  const title = apiName ?? page?.title[language];
  document.title = (title ? title + ' · ' : '') + brandName + ' Documentation';
  document.querySelector('.skip').textContent = tr('skip');
  app.innerHTML = header(guide, page) + `<div class="shell">${sidebarEdgeToggle}${navigation(route)}${sidebarBackdrop}
    <main id="main" tabindex="-1">${routeContent(route)}</main></div>` + searchDialog();

  updateTheme();
  updateSidebar();
  app.querySelector('#sidebar').scrollTop = sidebarScroll;
  if (apiChanged || (page?.id === 'api-reference' && !previousTree)) showSelectedApi();
  const subjects = app.querySelector('.subject-nav');
  subjects.scrollLeft = subjectScroll;
  subjects.querySelector('[aria-current]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  for (const runner of app.querySelectorAll('.example-runner')) {
    if (drafts.has(runner.dataset.example)) runner.querySelector('textarea').value = drafts.get(runner.dataset.example);
  }
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      if (language === button.dataset.language) return;
      language = button.dataset.language;
      saveLanguage(language);
      render(false);
      document.querySelector('[data-language="' + language + '"]').focus({ preventScroll: true });
    });
  });
  bindSearch();
  if (!needsGuide && !needsApi) {
    bindArticle(guide, page, apiName);
    if (apiDraft !== undefined) app.querySelector('[data-pandas-runner] textarea').value = apiDraft;
  }
  if (resetScroll) focusSection(page, section, apiName);
  else markContents(section);

  if (!needsGuide && !needsApi) return;
  const guideReady = needsGuide ? requestGuide(guide.id) : Promise.resolve();
  const apiReady = needsApi ? loadPandasApiDetails().then(details => { apiDetails = details; }) : Promise.resolve();
  Promise.all([guideReady, apiReady]).then(() => {
    if (version !== renderVersion) return;
    const next = currentRoute();
    const main = app.querySelector('#main');
    const shouldFocus = document.activeElement === main ||
      (Boolean(next.section) && !app.querySelector('#search-dialog').open);
    const sidebar = app.querySelector('[data-pandas-sidebar]');
    if (sidebar && needsGuide) {
      if (next.selected) openApiGroups.add(next.selected.group.id);
      sidebar.outerHTML = pandasSidebar(next);
      if (next.page.id === 'api-reference') showSelectedApi();
    }
    renderedPage = next.page;
    main.innerHTML = routeContent(next);
    bindArticle(next.guide, next.page, next.apiName);
    if (shouldFocus) focusSection(next.page, next.section, next.apiName);
    else markContents(next.section);
  }, () => {
    if (version !== renderVersion) return;
    const status = app.querySelector('.lesson-status');
    status.classList.remove('loading-status');
    status.textContent = tr('lessonFailed');
    const currentSection = currentRoute().section;
    const fallback = (apiName ? pandasApiPath(language, apiName) + '?view=reading' : readingPath(language, guide, page))
      + (currentSection ? '#' + encodeURIComponent(currentSection) : '');
    status.insertAdjacentHTML('afterend', `<p class="reading-link"><a href="${esc(fallback)}">${tr('readLesson')}</a></p>`);
  });
}
colorPreference.addEventListener('change', updateTheme);
app.addEventListener('click', event => {
  if (event.target.closest('#theme-toggle')) {
    const theme = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(themeStorageKey, theme); } catch {}
    updateTheme();
  }
  const toggle = event.target.closest('.sidebar-toggle');
  if (toggle?.getAttribute('aria-expanded') === 'true') showSelectedApi();
});
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#main').focus();
});
window.addEventListener('hashchange', () => {
  normalizeEntryRoute();
  const { page, section, apiName } = currentRoute();
  if (page && page === renderedPage && apiName === renderedApiName) {
    updateSidebar();
    focusSection(page, section, apiName);
  } else render();
});
const hasLessonLink = Boolean(location.hash);
normalizeEntryRoute();
render(hasLessonLink);
