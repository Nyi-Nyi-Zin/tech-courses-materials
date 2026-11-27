import { pandasApiRoute } from './pandas-api-paths.js';

const copy = {
  en: {
    back: 'pandas API reference', version: 'pandas 3.1.1', syntax: 'Call syntax',
    args: 'Parameters', parameter: 'Parameter', requirement: 'Requirement', allowed: 'Accepted values and behavior',
    required: 'Required', optional: 'Optional', positional: 'Positional only', keyword: 'Keyword only', either: 'Positional or keyword',
    extra_positional: 'Additional positional arguments', extra_keyword: 'Additional keyword arguments',
    default: 'Default', none: 'This call takes no arguments.',
    fullSyntax: 'Full signature',
    returns: 'Returns', example: 'Run the example', inspect: 'Inspect the call',
    aboutDemo: 'Edit the example and select Run Python to see the result.',
    aboutInspect: 'Run this code to inspect the callable and its parameters. Its data, backend, or environment is needed to execute the operation itself.',
    run: 'Run Python', stop: 'Stop', reset: 'Reset code', output: 'Output', edit: 'Python code',
    localExample: 'Example for a local Python session', reference: 'Official pandas API source', prev: 'Previous in this category', next: 'Next in this category',
  },
  my: {
    back: 'pandas API Reference', version: 'pandas 3.1.1', syntax: 'ခေါ်သုံးပုံ',
    args: 'ထည့်သွင်းနိုင်တဲ့ Arguments', parameter: 'Parameter', requirement: 'ထည့်သွင်းပုံ', allowed: 'လက်ခံတဲ့ တန်ဖိုးနဲ့ သုံးပုံ',
    required: 'ထည့်ပေးရမယ်', optional: 'ချန်ထားလို့ရတယ်', positional: 'အစဉ်အတိုင်းပဲ ထည့်ပါ', keyword: 'အမည်နဲ့ပဲ ထည့်ပါ', either: 'အမည်နဲ့ဖြစ်ဖြစ် အစဉ်အတိုင်းဖြစ်ဖြစ် ထည့်နိုင်တယ်',
    extra_positional: 'အစဉ်အတိုင်း တန်ဖိုးထပ်ထည့်နိုင်တယ်', extra_keyword: 'အမည်နဲ့ တန်ဖိုးထပ်ထည့်နိုင်တယ်',
    default: 'ပုံမှန်တန်ဖိုး', none: 'ဒီ method သို့မဟုတ် function မှာ argument ထည့်စရာ မရှိပါ။',
    fullSyntax: 'ခေါ်သုံးပုံ အပြည့်အစုံ',
    returns: 'ပြန်ပေးတဲ့ ရလဒ်', example: 'နမူနာ စမ်းကြည့်ရန်', inspect: 'ခေါ်သုံးပုံကို စစ်ကြည့်ရန်',
    aboutDemo: 'နမူနာကုဒ်ကို ပြင်ပြီး Run Python နှိပ်ပါ။ ရလဒ်ကို အောက်မှာ ကြည့်နိုင်ပါတယ်။',
    aboutInspect: 'လက်ခံတဲ့ parameter တွေကို ဒီကုဒ်နဲ့ စစ်ကြည့်နိုင်ပါတယ်။ လုပ်ဆောင်ချက်ကို စမ်းဖို့ လိုတဲ့ ဖိုင်၊ package သို့မဟုတ် Python ပတ်ဝန်းကျင်ကို ကိုယ့်စက်မှာ ပြင်ဆင်ပါ။',
    run: 'Run Python', stop: 'ရပ်ရန်', reset: 'မူလကုဒ် ပြန်ထားရန်', output: 'ရလဒ်', edit: 'Python ကုဒ်',
    localExample: 'ကိုယ့်စက်မှာ စမ်းကြည့်ရန်', reference: 'pandas တရားဝင် ကိုးကားချက်', prev: 'အရင် API', next: 'နောက် API',
  },
};

const parameterKinds = {
  POSITIONAL_ONLY: 'positional',
  KEYWORD_ONLY: 'keyword',
  POSITIONAL_OR_KEYWORD: 'either',
  VAR_POSITIONAL: 'extra_positional',
  VAR_KEYWORD: 'extra_keyword',
};

function parameterSection(args, labels, language, escape) {
  const cells = args.map(([name, kind, value, allowed, note, translated, allowedMy]) => {
    const requirement = kind.startsWith('VAR_') ? labels.optional : value === null ? labels.required : labels.optional;
    const defaultValue = value === null || value === '<no_default>' ? ''
      : `${labels.default} <code>${escape(value)}</code>`;
    const displayName = (kind === 'VAR_POSITIONAL' ? '*' : kind === 'VAR_KEYWORD' ? '**' : '') + name;
    const content = language === 'my' ? translated : note;
    const values = language === 'my' ? allowedMy : allowed;
    return `<tr><th scope="row"><code>${escape(displayName)}</code></th>
      <td>${requirement}<br><small>${labels[parameterKinds[kind]]}</small>${defaultValue ? '<br>' + defaultValue : ''}</td>
      <td>${values ? `<span>${escape(values)}</span>` : ''}${content ? `<p>${escape(content)}</p>` : ''}</td></tr>`;
  }).join('\n');
  const summary = args.length
    ? `<div class="api-argument-table" tabindex="0"><table><thead><tr><th scope="col">${labels.parameter}</th><th scope="col">${labels.requirement}</th><th scope="col">${labels.allowed}</th></tr></thead><tbody>${cells}</tbody></table></div>`
    : `<p>${labels.none}</p>`;
  return `<section class="article-section" id="parameters" tabindex="-1"><h2>${labels.args}</h2>${summary}</section>`;
}

export function pandasApiArticle({ entry, usage, meta, group, language, escape, backPath, interactive = false, languageLink = '', neighborHref = interactive ? pandasApiRoute : undefined }) {
  const labels = copy[language];
  const [name, kind, officialPath] = entry;
  const [english, , , burmese] = usage;
  const description = language === 'my' ? burmese : english;
  const callHint = meta.callHint?.[language];
  const groupTitle = escape(group.title[language]);
  const official = 'https://pandas.pydata.org/docs/reference/' + (officialPath ?? `api/${name}.html#${name}`);
  const sections = [
    ['syntax', labels.syntax],
    ['example', meta.inspection ? labels.inspect : labels.example],
    ['parameters', labels.args],
    ...(meta.returns ? [['returns', labels.returns]] : []),
  ];
  const toc = `<ul>${sections.map(([id, title]) =>
    `<li><a href="${interactive ? pandasApiRoute(name, id) : '#' + id}">${title}</a></li>`
  ).join('')}</ul>`;
  const contents = language === 'my' ? 'ဒီစာမျက်နှာမှာ' : 'On this page';
  const breadcrumbs = `<nav class="api-breadcrumbs" aria-label="${labels.back}">
    <a href="${backPath}">${labels.back}</a><span aria-hidden="true">/</span><span>${groupTitle}</span>${languageLink}
  </nav>`;
  const mobileContents = interactive
    ? `\n    <details class="mobile-contents"><summary>${contents}</summary><nav aria-label="${contents}">${toc}</nav></details>`
    : `\n    <nav class="api-breadcrumbs" aria-label="${contents}">${toc}</nav>`;
  const position = group.entries.findIndex(item => item[0] === name);
  const adjacent = [[position - 1, labels.prev], [position + 1, labels.next]].map(([index, label]) => {
    const entry = group.entries[index];
    return entry && neighborHref ? `<a href="${neighborHref(entry[0])}"><span>${label}</span><strong>${escape(entry[0])}</strong></a>` : '';
  }).join('');
  const fullSignature = `<pre><code lang="en">${escape(meta.signature)}</code></pre>`;
  const signature = meta.signature.split('\n').length > 8
    ? `<details class="api-full-signature"><summary><code lang="en">${escape(meta.signature.split('(')[0])}(…)</code> <span>${labels.fullSyntax}</span></summary>${fullSignature}</details>`
    : fullSignature;
  const article = `<article class="api-reading-page">
    ${breadcrumbs}
    <h1><code>${escape(name).replaceAll('.', '.<wbr>')}</code></h1>
    <p class="article-version">${labels.version} · ${groupTitle} · <span lang="en">${kind}</span></p>
    <p class="intro">${escape(description)}</p>
${mobileContents}
    <section class="article-section" id="syntax" tabindex="-1"><h2>${labels.syntax}</h2>${signature}${callHint ? `<p class="api-call-note">${escape(callHint)}</p>` : ''}</section>
    <section class="article-section" id="example" tabindex="-1" data-pandas-runner>
      <h2>${meta.inspection ? labels.inspect : labels.example}</h2>
      <p>${meta.inspection ? labels.aboutInspect : labels.aboutDemo}</p>
      <label><span>${labels.edit}</span><textarea rows="${Math.min(16, Math.max(5, meta.code.split('\n').length))}" lang="en" dir="ltr" spellcheck="false" autocapitalize="off" autocomplete="off">${escape(meta.code)}</textarea></label>
      <div class="api-run-actions">
        <button type="button" data-run disabled>${labels.run}</button>
        <button type="button" data-stop disabled>${labels.stop}</button>
        <button type="button" data-reset disabled>${labels.reset}</button>
      </div>
      <p role="status"></p>
      <div class="api-output" aria-label="${labels.output}"><pre dir="ltr" tabindex="0"></pre></div>
    </section>
    ${parameterSection(meta.args, labels, language, escape)}
${meta.returns ? `    <section class="article-section" id="returns" tabindex="-1"><h2>${labels.returns}</h2><p>${escape(language === 'my' ? meta.returnsMy : meta.returns)}</p></section>\n` : ''}${meta.localExample ? `    <section class="article-section"><h2>${labels.localExample}</h2><pre><code lang="en">${escape(meta.localExample)}</code></pre></section>\n` : ''}    <footer class="article-section">
      <a href="${escape(official)}">${labels.reference}</a>${adjacent ? `\n      <nav class="pagination" aria-label="${labels.back}">${adjacent}</nav>` : ''}
    </footer>
  </article>`;
  if (!interactive) return article;
  return `<div class="article-layout api-article-layout">
    ${article}
    <nav class="contents" aria-label="${contents}"><p>${contents}</p>${toc}</nav>
  </div>`;
}
