import { pandasApiRoute } from './pandas-api-paths.js';

export const pandasReferenceRoute = '#/pandas/api-reference';

let cachedCatalog;
let cachedIndex;
let detailsRequest;

export function pandasApiIndex(guide) {
  const catalog = guide?.pages.find(page => page.id === 'api-reference')
    ?.sections.find(section => section.apiCatalog)?.apiCatalog;
  if (!catalog) return;
  if (catalog !== cachedCatalog) {
    const groups = catalog.groups.map(({ id, title }) => ({ id, title, entries: [] }));
    const byId = new Map(groups.map(group => [group.id, group]));
    const byName = new Map();
    for (const group of catalog.groups) {
      for (const entry of group.entries) {
        const [name] = entry;
        const usage = catalog.usage[name];
        if (!usage?.[1]) continue;
        const id = name.startsWith('pandas.DataFrame.') ? 'frame'
          : name.startsWith('pandas.Series.') ? 'series' : group.id;
        const selectedGroup = byId.get(id);
        selectedGroup.entries.push(entry);
        byName.set(name, { entry, group: selectedGroup, usage });
      }
    }
    for (const group of groups) {
      group.entries.sort(([left], [right]) => left.localeCompare(right, 'en'));
    }
    cachedCatalog = catalog;
    cachedIndex = { groups: groups.filter(group => group.entries.length), byName };
  }
  return cachedIndex;
}

export function loadPandasApiDetails() {
  if (!detailsRequest) {
    detailsRequest = fetch('/docs/data-guides/pandas-api-details.json?v=3')
      .then(response => {
        if (!response.ok) throw new Error('Unable to load the pandas API reference');
        return response.json();
      })
      .catch(error => {
        detailsRequest = undefined;
        throw error;
      });
  }
  return detailsRequest;
}

export function pandasApiSidebar(index, selected, opened, language, escape) {
  if (!index) return '';
  return `<div class="api-sidebar-tree">${index.groups.map(group => {
    const active = selected?.group === group;
    const entries = group.entries.map(([name]) => {
      const current = selected?.entry[0] === name;
      const label = group.id === 'frame' || group.id === 'series'
        ? name.split('.').slice(2).join('.') : name.slice('pandas.'.length);
      return `<li><a class="page-link api-sidebar-method" href="${pandasApiRoute(name)}"${current ? ' aria-current="page"' : ''} title="${escape(name)}"><code>${escape(label)}</code></a></li>`;
    }).join('');
    return `<details data-api-group="${escape(group.id)}"${opened.has(group.id) ? ' open' : ''}>
      <summary${active ? ' class="active"' : ''}>${escape(group.title[language])}</summary>
      <ul>${entries}</ul>
    </details>`;
  }).join('')}</div>`;
}
