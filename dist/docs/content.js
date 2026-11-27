export const p = (en, my) => ({ en, my });
export const part = (id, title, text, code) => ({ id, title, text, code });
export const snippet = (id, title, text, code) => ({ ...part(id, title, text, code), displayOnly: true });
export const page = (id, title, intro, sections, sources) => ({ id, title, intro, sections, sources });
export const guide = (id, name, version, intro, pages) => ({ id, name, version, intro, pages });

export function lessonBlocks(blocks, language, escape, paragraphClass = '') {
  const inline = value => value.split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (index % 2 === 0) return escape(part);
    if (part.startsWith('`')) return `<code>${escape(part.slice(1, -1))}</code>`;
    if (part.startsWith('**')) return `<strong>${inline(part.slice(2, -2))}</strong>`;
    return `<em>${inline(part.slice(1, -1))}</em>`;
  }).join('');
  return (blocks?.[language] ?? []).map(([type, value, label]) => {
    if (type === 'figure') return sectionFigure(value, language, escape);
    if (type === 'table') {
      const [head, ...rows] = value;
      const scroll = label ? ` role="region" aria-label="${escape(label)}" tabindex="0" style="overflow-x:auto"` : '';
      const tableWidth = label ? ` style="min-width:${head.length * 8}rem"` : '';
      return `<div class="lesson-table"${scroll}><table${tableWidth}>
        <thead><tr>${head.map(cell => `<th scope="col">${inline(cell)}</th>`).join('')}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
      </table></div>`;
    }
    if (type === 'list') return `<ol class="lesson-list">${value.map(item => `<li>${inline(item)}</li>`).join('')}</ol>`;
    if (type === 'bullets') return `<ul class="lesson-list">${value.map(item => `<li>${inline(item)}</li>`).join('')}</ul>`;
    if (type === 'heading') return `<h3>${inline(value)}</h3>`;
    const attr = paragraphClass ? ` class="${paragraphClass}"` : '';
    return `<p${attr}>${inline(value)}</p>`;
  }).join('\n');
}

export function sectionFigure(figure, language, escape) {
  const src = typeof figure.src === 'string' ? figure.src : figure.src[language];
  return `<figure class="lesson-figure${figure.banner ? ' lesson-figure--banner' : ''}">
    <a href="${escape(src)}" data-image-preview><img src="${escape(src)}" alt="${escape(figure.alt[language])}" width="${figure.width}" height="${figure.height}" loading="lazy" decoding="async"></a>${figure.caption ? `\n    <figcaption>${escape(figure.caption[language])}</figcaption>` : ''}
  </figure>`;
}

export function sectionDetails({ figure, terms }, language, escape) {
  const illustration = figure && !figure.banner ? sectionFigure(figure, language, escape) : '';
  const definitions = terms ? `<dl class="lesson-terms">${terms.map(([term, definition]) =>
    `<div><dt><code>${escape(term)}</code></dt><dd>${escape(definition[language])}</dd></div>`
  ).join('')}</dl>` : '';
  return illustration + definitions;
}

export function sampleData(page, label, escape) {
  if (!page.dataset) return '';
  return `<p class="reading-link"><a href="/docs/media/data/${escape(page.dataset)}" download>${label}</a></p>`;
}

export function sampleOutput(section, label, escape) {
  if (!section.output) return '';
  return `<div class="example-result"><strong>${label}</strong><pre class="sample-output" dir="ltr">${escape(section.output)}</pre></div>`;
}
