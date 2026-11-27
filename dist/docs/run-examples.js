import { previewDocument } from '../runner.js';
import { loadReact, runWorker } from '../runtime.js';
import { browserExampleDocument } from './browser-example.js';
import { browserExample } from './browser-data.js?v=98';
import { exampleMode, frameworkExample, nestRequests, sqlExample, typeExample } from './example-data.js';

const workerURL = name => new URL('../' + name, import.meta.url);

export function exampleMarkup(guide, page, section, tr, esc) {
  const mode = section.displayOnly ? null : exampleMode(guide.id, page.id, section.id);
  const language = { python: 'Python', shell: 'Terminal' }[section.codeLanguage];
  const runnable = mode && mode !== 'project' && mode !== 'terminal';
  if (!runnable) {
    return `<div class="snippet">${language ? `<span class="snippet-language">${language}</span>` : ''}<button type="button" class="copy" data-copy="${section.id}">${tr('copy')}</button><pre><code>${esc(section.code)}</code></pre></div>` +
      (mode ? `<p class="run-note">${tr(mode)}</p>` : '');
  }
  const topic = `${guide.id}/${page.id}/${section.id}`;
  const note = mode === 'browser' && /^js\/http\/(?:post|fetch)$/.test(topic) ? tr('sampleApi') :
    mode === 'browser' && topic === 'js/storage-and-errors/storage' ? tr('sampleStorage') :
    mode === 'nest' ? tr('sampleNest') : mode === 'sql' ? tr('sampleSql') : '';
  const sizing = topic.startsWith('css/responsive/') || topic === 'html/images-media/responsive-images';
  const sourceFormat = { sql: 'SQL', typescript: 'TypeScript', react: 'JSX', nest: 'TypeScript' }[mode] ?? (
    section.code.startsWith('WEBVTT') ? 'WebVTT' :
    section.code.trimStart().startsWith('<') ? (guide.id === 'css' ? 'HTML + CSS' : 'HTML') :
    guide.id === 'html' ? 'HTML' :
    guide.id === 'css' ? 'CSS' : topic === 'js/http/json' ? 'JSON' : 'JavaScript'
  );
  const rows = Math.min(12, Math.max(4, section.code.split('\n').length + 1));
  return `<div class="example-runner" data-example="${section.id}" data-mode="${mode}">
    <div class="example-toolbar">
      <span class="example-kind">${sourceFormat}</span>
      <button type="button" class="run-example">${tr('runExample')}</button>
      <button type="button" class="reset-example">${tr('resetExample')}</button>
      <button type="button" class="copy" data-copy="${section.id}">${tr('copy')}</button>
    </div>
    <textarea rows="${rows}" aria-label="${tr('editExample')}" spellcheck="false" autocapitalize="off" autocomplete="off" wrap="off">\n${esc(section.code)}</textarea>
    ${note ? `<p class="run-note">${note}</p>` : ''}
    <section class="example-output" aria-label="${tr('exampleOutput')}" hidden>
      <p class="run-status" role="status"></p>
      ${sizing ? `<div class="run-sizes" role="group" aria-label="${tr('previewWidth')}">
        <button type="button" data-preview-width="fit" aria-pressed="true">${tr('previewFit')}</button>
        <button type="button" data-preview-width="360" aria-pressed="false">360 px</button>
        <button type="button" data-preview-width="1024" aria-pressed="false">1024 px</button>
      </div>` : ''}
      <div class="run-preview" hidden></div>
      <div class="run-console" hidden><strong>${tr('exampleConsole')}</strong><pre></pre></div>
    </section>
  </div>`;
}

function displayTables(host, tables, tr, esc) {
  if (!tables.length) return false;
  const cell = value => esc(value === null ? 'NULL' : typeof value === 'object' ? JSON.stringify(value) : value);
  host.innerHTML = tables.map(({ columns, rows }) => `<div class="result-table" tabindex="0" aria-label="${tr('exampleOutput')}">
      <table><thead><tr>${columns.map(name => `<th scope="col">${cell(name)}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(row => `<tr>${row.map(value => `<td>${cell(value)}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </div>${rows.length ? '' : `<p>${tr('exampleNoRows')}</p>`}`).join('');
  return true;
}

export function bindExamples(app, guide, page, tr, esc) {
  if (!page) return () => {};
  const sections = Object.fromEntries(page.sections.filter(section => section.code).map(section => [section.id, section.code]));
  const live = new Map();
  const frames = new Map();
  const keepFocus = container => container.querySelector('textarea').focus({ preventScroll: true });

  function stop(container) {
    const current = live.get(container);
    if (!current) return;
    live.delete(container);
    clearTimeout(current.timer);
    current.controller.abort();
    if (current.frame) frames.delete(current.frame.contentWindow);
    if (current.url) URL.revokeObjectURL(current.url);
    current.frame?.remove();
  }

  function bind(container) {
    const id = container.dataset.example;
    const topic = `${guide.id}/${page.id}/${id}`;
    const mode = container.dataset.mode;
    const editor = container.querySelector('textarea');
    const output = container.querySelector('.example-output');
    const status = container.querySelector('.run-status');
    const host = container.querySelector('.run-preview');
    const consolePanel = container.querySelector('.run-console');
    const consoleText = consolePanel.querySelector('pre');
    const run = container.querySelector('.run-example');
    const sizes = container.querySelectorAll('[data-preview-width]');
    const logs = [];
    let previewWidth = '';
    for (const size of sizes) {
      size.addEventListener('click', () => {
        for (const option of sizes) option.setAttribute('aria-pressed', String(option === size));
        previewWidth = size.dataset.previewWidth === 'fit' ? '' : size.dataset.previewWidth + 'px';
        const frame = host.querySelector('iframe');
        if (frame) frame.style.width = previewWidth;
      });
    }

    function record(level, line) {
      if (logs.length >= 80) logs.shift();
      logs.push((level === 'error' ? tr('exampleError') + ' · ' : '') + line.slice(0, 3500));
      consolePanel.hidden = false;
      consoleText.textContent = logs.join('\n');
      if (level === 'error') live.get(container)?.finish('exampleFailed');
    }

    function setStatus(key, pending = false) {
      status.textContent = key ? tr(key) : '';
      status.classList.toggle('loading-status', pending);
      run.setAttribute('aria-disabled', String(pending));
      host.setAttribute('aria-busy', String(pending));
    }

    async function execute() {
      if (run.getAttribute('aria-disabled') === 'true') return;
      stop(container);
      const current = {
        controller: new AbortController(),
        record,
        pending: true,
        finish(key) {
          current.pending = false;
          clearTimeout(current.timer);
          setStatus(key);
        },
      };
      live.set(container, current);
      const signal = current.controller.signal;
      const code = editor.value;
      logs.length = 0;
      consoleText.textContent = '';
      consolePanel.hidden = true;
      host.replaceChildren();
      host.hidden = true;
      output.hidden = false;
      const startingStatus = {
        sql: 'exampleSqlLoading', react: 'exampleReactLoading',
        typescript: 'exampleCompiling', nest: 'exampleCompiling',
      }[mode] ?? 'examplePreparing';
      setStatus(startingStatus, true);
      current.timer = setTimeout(() => {
        stop(container);
        setStatus('exampleTimeout');
      }, 30000);
      try {
        const token = crypto.randomUUID();
        if (mode === 'sql') {
          const result = await runWorker(workerURL('sql-worker.js'), { type: 'module' }, sqlExample(topic, code), signal);
          if (signal.aborted) return;
          if (result.error) throw new Error(result.error);
          host.hidden = !displayTables(host, result.tables, tr, esc);
          current.finish(host.hidden ? 'exampleNoTable' : 'exampleDone');
          return;
        }
        let prepared;
        if (mode === 'browser') {
          prepared = await browserExample(topic, code, sections);
        } else {
          const input = mode === 'typescript' ? typeExample(topic, code) : frameworkExample(topic, code, sections);
          const [compiled, reactScript] = await Promise.all([
            runWorker(workerURL('compiler-worker.js'), {}, { code: input, runtime: mode }, signal),
            mode === 'react' ? loadReact() : undefined,
          ]);
          const issue = compiled.error || compiled.diagnostics?.join('\n');
          if (issue) throw new Error(issue);
          current.success = mode === 'typescript' ? 'exampleTypeCheck' : 'exampleDone';
          prepared = { srcdoc: previewDocument({ token, runtime: mode,
            source: { html: '', css: '', js: compiled.code, reactScript }, initialStorage: {}, media: {},
            reactEntry: topic === 'react/components/root', examples: nestRequests[topic],
          }) };
        }
        if (signal.aborted) return;
        setStatus('examplePreviewLoading', true);
        const frame = document.createElement('iframe');
        frame.title = tr('exampleOutput');
        frame.setAttribute('sandbox', 'allow-scripts');
        frame.classList.toggle('console-example', mode === 'typescript' ||
          (mode === 'browser' && topic.startsWith('js/') && !topic.startsWith('js/web-workers/') && !code.trimStart().startsWith('<')));
        if (prepared.srcdoc) {
          frame.srcdoc = prepared.srcdoc;
        } else {
          current.url = URL.createObjectURL(new Blob([
            browserExampleDocument(prepared.html, token, prepared.options),
          ], { type: 'text/html;charset=utf-8' }));
          frame.src = current.url;
        }
        frame.style.width = previewWidth;
        current.frame = frame;
        current.token = token;
        host.append(frame);
        host.hidden = frame.classList.contains('console-example');
        frames.set(frame.contentWindow, current);
      } catch (error) {
        if (!signal.aborted) record('error', error.message);
      }
    }
    run.addEventListener('click', execute);
    editor.addEventListener('keydown', event => {
      if (!(event.ctrlKey || event.metaKey) || event.key !== 'Enter') return;
      event.preventDefault();
      execute();
    });
    container.querySelector('.reset-example').addEventListener('click', () => {
      stop(container);
      editor.value = sections[id];
      output.hidden = true;
      setStatus('');
      keepFocus(container);
    });
  }

  function onMessage(event) {
    const current = frames.get(event.source);
    const { token, type, data } = event.data ?? {};
    if (!current || token !== current.token || event.origin !== 'null') return;
    if (type === 'log' && typeof data?.line === 'string') current.record(data.level, data.line);
    if (type === 'ready' && current.pending) {
      current.finish(current.success ?? 'exampleDone');
    }
  }
  window.addEventListener('message', onMessage);
  app.querySelectorAll('.example-runner').forEach(bind);
  return () => {
    window.removeEventListener('message', onMessage);
    for (const container of live.keys()) stop(container);
  };
}
