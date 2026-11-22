import { webGuides } from './web.js';
import { platformGuides } from './platform.js';
import { frameworkGuides } from './frameworks.js';

import { webArticles } from './web-more.js';
import { platformArticles } from './platform-more.js';
import { frameworkArticles } from './frameworks-more.js';
import { fullstackGuide } from './fullstack.js';
import { advancedWeb } from './web-advanced.js';
import { advancedPlatform } from './platform-advanced.js';
import { advancedFrameworks } from './frameworks-advanced.js';
import { advancedFullstack } from './fullstack-advanced.js';
import { learningPaths } from '../learning-paths.js';
import { curricula } from '../locales.js';
import { learningArticles, movedSections } from './learning-articles.js';
import { attachSidebar, sidebarToggle } from '../sidebar.js';

const moreArticles = { ...webArticles, ...platformArticles, ...frameworkArticles };
const advancedArticles = { ...advancedWeb, ...advancedPlatform, ...advancedFrameworks, fullstack: advancedFullstack };
const guides = [...webGuides, ...platformGuides, ...frameworkGuides, fullstackGuide].map(guide => {
  const pages = [...guide.pages, ...(moreArticles[guide.id] ?? []), ...advancedArticles[guide.id]];
  const path = learningPaths[guide.id];
  if (!path) return { ...guide, pages };

  const byId = Object.fromEntries([...pages, ...learningArticles[guide.id]].map(page => [page.id, page]));
  const groups = path.map(({ title, lessons }) => ({
    title,
    pages: Object.entries(lessons).map(([id, exercises]) => ({ ...byId[id], exercises })),
  }));
  return { ...guide, groups, pages: groups.flatMap(group => group.pages) };
});
const app = document.querySelector('#app');
const brandName = 'Cloud Nine Innovations';
const copy = {
  en: {
    home: 'Overview', practice: 'Practice exercises', browse: 'Topics', search: 'Search docs',
    showSidebar: 'Show sidebar', hideSidebar: 'Hide sidebar',
    placeholder: 'Search titles and topics', close: 'Close', noResults: 'No matching articles.',
    language: 'Language', skip: 'Skip to content', title: 'Web development documentation',
    intro: 'Read practical guides for the browser, database, and API. Each guide includes examples and links to official documentation.',
    updated: 'Versions checked November 22, 2026', contents: 'On this page',
    references: 'Official references', copy: 'Copy', copied: 'Copied', copyError: 'Copy failed',
    previous: 'Previous topic', next: 'Next topic', all: 'All topics', articles: 'Articles',
    relatedPractice: 'Practice this topic',
  },
  my: {
    home: 'ခြုံငုံကြည့်ရန်', practice: 'လေ့ကျင့်ခန်းများ', browse: 'သင်ခန်းစာများ', search: 'သင်ခန်းစာ ရှာရန်',
    showSidebar: 'ဘေးမီနူး ပြရန်', hideSidebar: 'ဘေးမီနူး ဖျောက်ရန်',
    placeholder: 'ခေါင်းစဉ်နဲ့ အကြောင်းအရာ ရှာပါ', close: 'ပိတ်ရန်', noResults: 'ကိုက်ညီတဲ့ သင်ခန်းစာ မတွေ့ပါ။',
    language: 'ဘာသာစကား', skip: 'အကြောင်းအရာဆီ သွားရန်', title: 'Web Development လေ့လာရန်',
    intro: 'Browser၊ Database နဲ့ API အတွက် လေ့လာစရာတွေကို ဖတ်ပါ။ သင်ခန်းစာတိုင်းမှာ code နမူနာနဲ့ official documentation links ပါပါတယ်။',
    updated: '၂၀၂၆ နိုဝင်ဘာ ၂၂ ရက်တွင် Versions စစ်ထားသည်', contents: 'ဒီစာမျက်နှာမှာ',
    references: 'တရားဝင် ကိုးကားချက်များ', copy: 'ကူးရန်', copied: 'ကူးပြီးပါပြီ', copyError: 'ကူးမရပါ',
    previous: 'အရင် သင်ခန်းစာ', next: 'နောက် သင်ခန်းစာ', all: 'သင်ခန်းစာ အားလုံး', articles: 'ဆောင်းပါးများ',
    relatedPractice: 'ဒီအကြောင်းအရာကို လေ့ကျင့်ပါ',
  },
};
const icons = {
  overview: '<rect x="3" y="3" width="7" height="7" rx="1.4"/><rect x="14" y="3" width="7" height="7" rx="1.4"/><rect x="3" y="14" width="7" height="7" rx="1.4"/><rect x="14" y="14" width="7" height="7" rx="1.4"/>',
  practice: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3m6 0h4"/>',
  html: '<path d="m9 6-6 6 6 6m6-12 6 6-6 6"/>',
  css: '<path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 1.2-2.4 1.5 1.5 0 0 1 1.2-2.4H18a3 3 0 0 0 3-3c0-5.6-4-10.2-9-10.2Z"/><path d="M7 12h.01M9 7h.01m5 0h.01m3 4h.01" stroke-width="2.8"/>',
  js: '<path d="M9 4H7a2 2 0 0 0-2 2v3a3 3 0 0 1-3 3 3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h2m6-16h2a2 2 0 0 1 2 2v3a3 3 0 0 0 3 3 3 3 0 0 0-3 3v3a2 2 0 0 1-2 2h-2"/>',
  typescript: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M6 9h6m-3 0v7m9-7h-2.5a1.75 1.75 0 0 0 0 3.5h.75a1.75 1.75 0 0 1 0 3.5H14"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  react: '<ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>',
  nestjs: '<rect x="3" y="3.5" width="18" height="7" rx="2"/><rect x="3" y="13.5" width="18" height="7" rx="2"/><path d="M7 7h.01M7 17h.01" stroke-width="2.8"/>',
  fullstack: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5"/>',
  article: '<path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10m-7-7 7 7h-5a2 2 0 0 1-2-2V3ZM8 14h8m-8 3h6"/>',
  section: '<path d="M9 4 7 20m10-16-2 16M4 9h17M3 15h17"/>',
  search: '<circle cx="10.5" cy="10.5" r="5.5"/><path d="m15 15 5 5"/>',
  external: '<path d="M13 5h6v6m0-6-8 8m8 1v5H5V5h5"/>',
};
const symbol = name => '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const navIcon = topic => '<span class="nav-icon tone-' + topic + '">' + symbol(topic) + '</span>';
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const path = (guide, page, section) => '#/' + [guide.id, page.id, section?.id].filter(Boolean).join('/');
const languageKey = 'frontend-lab-language';
let language = 'en';
try { language = localStorage.getItem(languageKey) === 'my' ? 'my' : 'en'; } catch {}
const tr = key => copy[language][key];
const updateSidebar = attachSidebar(app, '(max-width: 700px)', tr);
const tx = value => esc(value[language]);
const flat = guides.flatMap(guide => guide.pages.map(page => ({ guide, page })));

function currentRoute() {
  const [topic, article, section] = location.hash.replace(/^#\/?/, '').split('/');
  const guide = guides.find(group => group.id === topic);
  if (!guide) return {};
  const articleId = movedSections[topic]?.[article]?.[section] ?? article;
  const page = guide.pages.find(page => page.id === articleId) ?? guide.pages[0];
  return { guide, page, section };
}

function header() {
  return `<header class="header">
    <div class="header-brand">
      ${sidebarToggle}
      <a class="brand" href="../"><img src="../icon.svg" alt="" width="34" height="34"><span>${brandName}</span></a>
    </div>
    <div class="header-actions">
      <button id="open-search" class="search-button" type="button">${symbol('search')}<span>${tr('search')}</span></button>
      <div class="language" role="group" aria-label="${tr('language')}">
        ${[['en', 'English'], ['my', 'မြန်မာ']].map(([key, label]) => `<button type="button" lang="${key}" data-language="${key}" aria-pressed="${key === language}">${label}</button>`).join('')}
      </div>
    </div>
  </header>`;
}

function navigation(current, article) {
  return `<aside id="sidebar" class="sidebar"><nav aria-label="${tr('browse')}">
    <a class="nav-link home-link" href="#/" ${current ? '' : 'aria-current="page"'}>${navIcon('overview')}<span>${tr('home')}</span></a>
    <a class="nav-link home-link" href="../">${navIcon('practice')}<span>${tr('practice')}</span></a>
    <p class="nav-heading">${tr('browse')}</p>
    ${guides.map(guide => `<div class="nav-group">
      <a class="nav-link guide-link ${guide === current ? 'active' : ''}" href="${path(guide, guide.pages[0])}">${navIcon(guide.id)}<span>${guide.name}</span></a>
      ${guide === current ? articleList(guide, page => `<a class="page-link" href="${path(guide, page)}" ${page === article ? 'aria-current="page"' : ''}>${symbol('article')}<span>${tx(page.title)}</span></a>`) : ''}
    </div>`).join('')}
  </nav></aside>`;
}

function articleList(guide, link) {
  const list = (pages, label) => `<ul aria-label="${label}">${pages.map(page => `<li>${link(page)}</li>`).join('')}</ul>`;
  if (!guide.groups) return list(guide.pages, tr('articles'));
  return guide.groups.map(group => `<div class="path-group">
    <p class="path-label">${tx(group.title)}</p>${list(group.pages, tx(group.title))}
  </div>`).join('');
}

function home() {
  return `<div class="home">
    <div class="hero">
      <h1>${tr('title')}</h1>
      <p>${tr('intro')}</p>
      <p class="date">${tr('updated')}</p>
    </div>
    <section aria-labelledby="topics">
      <h2 id="topics">${tr('all')}</h2>
      <div class="topic-grid">${guides.map(guide => `<section class="topic-card">
        <h3><a href="${path(guide, guide.pages[0])}">${guide.name}</a></h3>
        <p class="version">${guide.version}</p>
        <p>${tx(guide.intro)}</p>
        ${articleList(guide, page => `<a href="${path(guide, page)}">${tx(page.title)}</a>`)}
      </section>`).join('')}</div>
    </section>
  </div>`;
}

function practiceLinks(guide, page) {
  if (!page.exercises?.length) return '';
  const track = curricula[language].find(track => track.id === guide.id);
  const links = page.exercises.map(id => {
    const exercise = track.exercises.find(exercise => exercise.id === id);
    return `<li><a href="../#/${guide.id}/${exercise.id}">${symbol('practice')}<span>${esc(exercise.title)}</span></a></li>`;
  }).join('');
  return `<section class="related-practice" aria-labelledby="related-practice">
    <h2 id="related-practice">${tr('relatedPractice')}</h2><ul>${links}</ul>
  </section>`;
}

function article(guide, page) {
  const position = guide.pages.indexOf(page);
  const step = (index, name) => guide.pages[index] ? `<a href="${path(guide, guide.pages[index])}">
      <span>${tr(name)}</span><strong>${tx(guide.pages[index].title)}</strong></a>` : '';
  return `<div class="article-layout">
    <article>
      <div class="crumb"><a href="#/">${tr('home')}</a><span aria-hidden="true">/</span><span>${guide.name}</span></div>
      <h1>${tx(page.title)}</h1>
      <p class="article-version">${guide.version}</p>
      <p class="intro">${tx(page.intro)}</p>
      ${page.download ? `<p><a class="project-download" href="${esc(page.download.href)}" download>${tx(page.download.label)}</a></p>` : ''}
      ${page.sections.map(item => `<section class="article-section" tabindex="-1" id="${item.id}">
        <h2>${tx(item.title)}</h2><p>${tx(item.text)}</p>
        ${item.code ? `<div class="snippet"><button type="button" class="copy" data-copy="${item.id}">${tr('copy')}</button><pre><code>${esc(item.code)}</code></pre></div>` : ''}
      </section>`).join('')}
      <section class="references" tabindex="-1" id="references">
        <h2>${tr('references')}</h2>
        <ul>${page.sources.map(([label, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ${symbol('external')}</a></li>`).join('')}</ul>
      </section>
      ${practiceLinks(guide, page)}
      <nav class="pagination" aria-label="${tr('browse')}">${step(position - 1, 'previous')}${step(position + 1, 'next')}</nav>
    </article>
    <nav class="contents" aria-label="${tr('contents')}">
      <p>${tr('contents')}</p>
      <ul>${[...page.sections, {id: 'references', title: copyTitle('references')}].map(item => `<li><a href="${path(guide, page, item)}">${symbol(item.id === 'references' ? 'article' : 'section')}<span>${tx(item.title)}</span></a></li>`).join('')}</ul>
    </nav>
  </div>`;
}
const copyTitle = key => ({ en: copy.en[key], my: copy.my[key] });

function searchDialog() {
  return `<dialog id="search-dialog" aria-labelledby="search-title">
    <div class="search-head"><h2 id="search-title">${tr('search')}</h2><form method="dialog"><button type="submit">${tr('close')}</button></form></div>
    <input type="search" aria-label="${tr('placeholder')}" placeholder="${tr('placeholder')}" autofocus>
    <div class="search-results"></div>
  </dialog>`;
}

function bindSearch() {
  const dialog = document.querySelector('#search-dialog');
  const input = dialog.querySelector('input');
  const target = dialog.querySelector('.search-results');
  function results() {
    const terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    const matches = flat.filter(({guide, page}) => {
      const content = [guide.name, ...Object.values(page.title), ...Object.values(page.intro),
        ...page.sections.flatMap(section => [...Object.values(section.title), ...Object.values(section.text)])]
        .join(' ').toLowerCase();
      return terms.every(term => content.includes(term));
    });
    target.innerHTML = matches.length ? `<ul>${matches.map(({guide, page}) => `<li><a href="${path(guide, page)}"><span>${guide.name}</span><strong>${tx(page.title)}</strong></a></li>`).join('')}</ul>`
      : `<p role="status">${tr('noResults')}</p>`;
  }
  document.querySelector('#open-search').addEventListener('click', () => {
    results();
    dialog.showModal();
  });
  input.addEventListener('input', results);
  target.addEventListener('click', event => {
    if (event.target.closest('a')) dialog.close();
  });
}

function render(resetScroll = true) {
  const { guide, page, section } = currentRoute();
  document.documentElement.lang = language;
  document.title = (page ? page.title[language] + ' · ' : '') + brandName + ' Documentation';
  document.querySelector('.skip').textContent = tr('skip');
  app.innerHTML = header() + `<div class="shell">${navigation(guide, page)}
    <main id="main" tabindex="-1">${page ? article(guide, page) : home()}</main></div>` + searchDialog();

  updateSidebar();
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
      if (language === button.dataset.language) return;
      language = button.dataset.language;
      try { localStorage.setItem(languageKey, language); } catch {}
      render(false);
      document.querySelector('[data-language="' + language + '"]').focus({ preventScroll: true });
    });
  });
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const code = page.sections.find(item => item.id === button.dataset.copy).code;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = tr('copied');
      } catch { button.textContent = tr('copyError'); }
      setTimeout(() => { button.textContent = tr('copy'); }, 1800);
    });
  });
  bindSearch();
  if (resetScroll) {
    const target = page && (section === 'references' || page.sections.some(item => item.id === section))
      ? document.getElementById(section)
      : null;
    if (target) {
      target.scrollIntoView();
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      document.querySelector('#main').focus({ preventScroll: true });
    }
  }
}
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#main').focus();
});
window.addEventListener('hashchange', () => render());
render(Boolean(location.hash));
