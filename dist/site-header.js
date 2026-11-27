import { sidebarToggle } from './sidebar.js';

const languageKey = 'frontend-lab-language';
const brand = 'Cloud Nine Innovations';
const labels = {
  en: { nav: 'Learning site', practice: 'Practice', docs: 'Docs', language: 'Language' },
  my: { nav: 'သင်ယူရန် လမ်းညွှန်', practice: 'လေ့ကျင့်ရန်', docs: 'လမ်းညွှန်', language: 'ဘာသာစကား' },
};
const icons = {
  practice: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6"/>',
  docs: '<path d="M12 6v14M3 4.5h4.5A4.5 4.5 0 0 1 12 9a4.5 4.5 0 0 1 4.5-4.5H21v13h-4.5A4.5 4.5 0 0 0 12 22a4.5 4.5 0 0 0-4.5-4.5H3z"/>',
};
const icon = name => `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;

export function savedLanguage() {
  try { return localStorage.getItem(languageKey) === 'my' ? 'my' : 'en'; }
  catch { return 'en'; }
}

export function saveLanguage(language) {
  try { localStorage.setItem(languageKey, language); } catch {}
}

export function siteHeader({ active, language, root, practice, docs, action, appearance = '', secondary = '' }) {
  const text = labels[language];
  const links = practice ? [['practice', practice], ['docs', docs]].map(([key, href]) =>
    `<a href="${href}"${active === key ? ' aria-current="location"' : ''}>${icon(key)}<span>${text[key]}</span></a>`).join('') : '';
  return `<header class="site-header${practice ? '' : ' docs-only'}">
    <div class="site-toolbar">
      <div class="site-identity">
        ${active === 'practice' ? sidebarToggle : ''}
        <a class="site-brand" href="${practice ? root : docs}" aria-label="${brand}">
          <img src="${root}cloud-nine-logo.png" alt="" width="34" height="34"><span>${brand}</span>
        </a>
      </div>
      ${links ? `<nav class="site-tabs" aria-label="${text.nav}">${links}</nav>` : ''}
      <div class="site-tools">
        <div class="site-action">${action}</div>
        ${appearance}
        <div class="language-control" role="group" aria-label="${text.language}">
          <button type="button" lang="en" aria-label="English" data-language="en" aria-pressed="${language === 'en'}">EN</button>
          <button type="button" lang="my" data-language="my" aria-pressed="${language === 'my'}">မြန်မာ</button>
        </div>
      </div>
    </div>
    ${secondary}
  </header>`;
}
