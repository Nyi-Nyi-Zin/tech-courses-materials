import { pandasApiPath } from './pandas-api-paths.js';

export const pandasReferenceUrl = 'https://pandas.pydata.org/docs/reference/';

const labels = {
  en: {
    search: 'Search API names',
    category: 'Category',
    all: 'All categories',
    syntax: 'Call syntax',
    example: 'Example',
    count: (visible, total) => `${visible.toLocaleString('en')} of ${total.toLocaleString('en')} entries`,
    empty: 'No API names match. Try a different search or category.',
  },
  my: {
    search: 'API အမည် ရှာရန်',
    category: 'အုပ်စု',
    all: 'အုပ်စုအားလုံး',
    syntax: 'ခေါ်သုံးပုံ',
    example: 'နမူနာ',
    count: (visible, total) => `စုစုပေါင်း ${total.toLocaleString('en')} ခုအနက် ${visible.toLocaleString('en')} ခု`,
    empty: 'ကိုက်ညီတဲ့ API အမည် မရှိပါ။ အခြားအမည် သို့မဟုတ် အုပ်စုနဲ့ ရှာကြည့်ပါ။',
  },
};

export function pandasApiCatalog({ groups, usage }, language, escape, entryHref = name => pandasApiPath(language, name)) {
  const copy = labels[language];
  const total = groups.reduce((count, group) => count + group.entries.length, 0);
  const options = groups.map(({ id, title }) =>
    `<option value="${escape(id)}">${escape(title[language])}</option>`
  ).join('');
  const categories = groups.map(({ id, title, entries }) => {
    const listing = entries.map(([name, kind]) => {
      const [summary, signature, example, translated] = usage[name] ?? [];
      const description = language === 'my' && translated ? translated : summary;
      const descriptionLanguage = language === 'my' && translated ? 'my' : 'en';
      const label = kind === 'method' && summary && !signature ? 'accessor' : kind;
      const identifier = signature
        ? `<a href="${entryHref(name)}"><code>${escape(name)}</code></a>`
        : `<code>${escape(name)}</code>`;
      const metadata = [
        `<div class="pandas-api-name">${identifier}<span lang="en">${escape(label)}</span></div>`,
        description && `<p class="pandas-api-description" lang="${descriptionLanguage}">${escape(description)}</p>`,
        signature && `<p class="pandas-api-signature"><span>${escape(copy.syntax)}</span> <code lang="en">${escape(signature)}</code></p>`,
        example && `<details class="pandas-api-example"><summary>${escape(copy.example)}</summary><pre><code lang="en">${escape(example)}</code></pre></details>`,
      ].filter(Boolean);
      return `<li>${metadata.join('\n')}</li>`;
    }).join('\n');
    return `<details class="pandas-api-group" data-category="${escape(id)}">
      <summary>${escape(title[language])} <span data-group-count>(${entries.length})</span></summary>
      <ul>${listing}</ul>
    </details>`;
  }).join('\n');
  return `<div class="pandas-api" data-pandas-api data-language="${language}">
    <div class="pandas-api-controls" hidden>
      <label>${escape(copy.search)}<input type="search" placeholder="groupby, read_csv, str.strip" autocomplete="off" spellcheck="false"></label>
      <label>${escape(copy.category)}<select><option value="">${escape(copy.all)}</option>${options}</select></label>
    </div>
    <p class="pandas-api-count" role="status">${escape(copy.count(total, total))}</p>
    <p data-pandas-empty hidden>${escape(copy.empty)}</p>
    ${categories}
  </div>`;
}

export function bindPandasApi(root) {
  const catalog = root.querySelector('[data-pandas-api]');
  if (!catalog) return;

  const { count } = labels[catalog.dataset.language];
  const search = catalog.querySelector('input');
  const category = catalog.querySelector('select');
  const status = catalog.querySelector('[role="status"]');
  const empty = catalog.querySelector('[data-pandas-empty]');
  const groups = [...catalog.querySelectorAll('.pandas-api-group')].map(element => ({
    element,
    count: element.querySelector('[data-group-count]'),
    entries: [...element.querySelectorAll('li')].map(row => ({
      row,
      name: row.querySelector('code').textContent.toLowerCase(),
    })),
  }));
  const total = groups.reduce((sum, group) => sum + group.entries.length, 0);
  let wasFiltering = false;

  function filter() {
    const query = search.value.toLowerCase().replace(/\(\)/g, '').trim();
    const terms = query.split(/\s+/).filter(Boolean).map(term =>
      term.replace(/^pd\./, 'pandas.').replace(/^(df|series)\./, '')
    );
    const filtering = Boolean(terms.length || category.value);
    let visible = 0;
    for (const group of groups) {
      const inCategory = !category.value || category.value === group.element.dataset.category;
      let matches = 0;
      for (const { row, name } of group.entries) {
        const match = inCategory && terms.every(term => name.includes(term));
        row.hidden = !match;
        matches += Number(match);
      }
      group.element.hidden = matches === 0;
      group.count.textContent = `(${matches})`;
      if (filtering || wasFiltering) group.element.open = filtering && matches > 0;
      visible += matches;
    }
    wasFiltering = filtering;
    empty.hidden = visible > 0;
    status.textContent = count(visible, total);
  }

  catalog.querySelector('.pandas-api-controls').hidden = false;
  search.addEventListener('input', filter);
  category.addEventListener('change', filter);
}
