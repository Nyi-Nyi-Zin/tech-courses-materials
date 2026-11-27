import { readFile } from 'node:fs/promises';
import groups from '../dist/docs/data-guides/pandas-api-data.js';
import usage from '../dist/docs/data-guides/pandas-api-usage.js';
import { pandasApiPath, pandasApiRoute } from '../dist/docs/pandas-api-paths.js';
import { pandasApiArticle } from '../dist/docs/pandas-api-article.js';

const details = JSON.parse(await readFile(new URL('../dist/docs/data-guides/pandas-api-details.json', import.meta.url), 'utf8'));

export function pandasApiPages({ language, escape, origin, brand }) {
  const secondary = language === 'my' ? 'en' : 'my';
  const records = [];
  for (const group of groups) {
    const documented = { ...group, entries: group.entries.filter(([name]) => details[name]) };
    for (const entry of documented.entries) {
      const [name] = entry;
      const meta = details[name];
      const [english, , , burmese] = usage[name];
      const description = language === 'my' ? burmese : english;
      if (!burmese || (meta.returns && !meta.returnsMy) ||
          meta.args.some(([, , , values, note, translated, translatedValues]) =>
            (values && !translatedValues) || (note && !translated))) {
        throw new Error(`Missing Burmese API documentation for ${name}`);
      }
      const path = pandasApiPath(language, name);
      const otherPath = pandasApiPath(secondary, name);
      const backPath = `/docs/read/${language}/pandas/api-reference/#find-an-api`;
      const languageLink = `<a href="${otherPath}" lang="${secondary}" hreflang="${secondary}">${secondary === 'my' ? 'မြန်မာ' : 'English'}</a>`;
      const article = pandasApiArticle({ entry, usage: usage[name], meta, group: documented, language, escape, backPath, languageLink, neighborHref: next => pandasApiPath(language, next) });
      records.push([path, `<!doctype html>
<html lang="${language}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description)}">
  <title>${escape(name)} · ${escape(brand)}</title>
  <link rel="canonical" href="${origin + path}">
  <link rel="alternate" hreflang="${secondary}" href="${origin + otherPath}">
  <link rel="icon" href="/cloud-nine-logo.png" type="image/png">
  <link rel="stylesheet" href="/docs/style.css?v=68">
  <script type="module" src="/docs/pandas-api-reading.js?v=2"></script>
</head>
<body>
<main id="main" class="reading-page" data-docs-route="${pandasApiRoute(name)}">
  ${article}
</main>
</body>
</html>
`]);
    }
  }
  return records;
}
