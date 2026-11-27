import { nestPractice } from './nest-practice.js';

// This function runs inside a sandboxed frame with a separate origin.
function boot(config, makeNest) {
  const { token, source, initialStorage, checkMode, moduleMode, media } = config;
  const send = (type, data) => window.parent.postMessage({ token, type, data }, '*');
  const appendScript = (code) => {
    const script = document.createElement('script');
    script.textContent = code;
    document.head.append(script);
  };
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  let runtimeError = false;
  const logs = [];
  const display = (value) => {
    if (typeof value === 'string') return value;
    if (value instanceof Error) return value.message;
    try { return JSON.stringify(value) ?? String(value); } catch { return String(value); }
  };
  const record = (values, level) => {
    const line = values.map(display).join(' ').slice(0, 3500);
    if (logs.length >= 160) return;
    logs.push(line);
    send('log', { line, level });
  };
  const reportError = (message) => {
    runtimeError = true;
    record([message || 'Unknown JavaScript error'], 'error');
  };
  for (const level of ['log', 'info', 'warn', 'error']) {
    const original = console[level];
    console[level] = (...values) => {
      record(values, level);
      original.apply(console, values);
    };
  }
  window.addEventListener('error', event => reportError(event.message));
  window.addEventListener('unhandledrejection', event => reportError(display(event.reason)));

  const storage = new Map(Object.entries(initialStorage));
  const changed = () => {
    if (!checkMode) send('storage', Object.fromEntries(storage));
  };
  window.practiceStorage = {
    get length() { return storage.size; },
    key(index) { return [...storage.keys()][index] ?? null; },
    getItem(key) { return storage.get(String(key)) ?? null; },
    setItem(key, value) { storage.set(String(key), String(value)); changed(); },
    removeItem(key) { storage.delete(String(key)); changed(); },
    clear() { storage.clear(); changed(); },
  };

  const apiItems = [{ name: 'Coffee' }, { name: 'Tea' }, { name: 'Juice' }];
  window.sampleAPI = 'data:application/json,' + encodeURIComponent(JSON.stringify(apiItems));
  window.sampleErrorAPI = 'https://practice.invalid/sample-error';
  window.samplePostAPI = 'https://practice.invalid/sample-orders';

  let nextOrderId = 101;
  async function sampleOrder(input, options) {
    const request = new Request(input, options);
    if (request.method !== 'POST') return Response.json({ error: 'Use POST.' }, { status: 405 });
    const contentType = request.headers.get('content-type')?.split(';')[0].trim().toLowerCase();
    if (contentType !== 'application/json') return Response.json({ error: 'Send JSON.' }, { status: 415 });
    const data = await request.json().catch(() => null);
    if (typeof data?.item !== 'string' || !data.item.trim() || !Number.isInteger(data.quantity) || data.quantity < 1) {
      return Response.json({ error: 'Enter an item and a positive whole quantity.' }, { status: 400 });
    }
    return Response.json({ id: nextOrderId++, item: data.item, quantity: data.quantity }, { status: 201 });
  }

  const nativeFetch = window.fetch.bind(window);
  window.fetch = async (input, options) => {
    const uri = typeof input === 'string' ? input : input?.url;
    if (uri === window.sampleErrorAPI) {
      await wait(55);
      return new Response('Service unavailable', { status: 503 });
    }
    if (uri === window.samplePostAPI) return sampleOrder(input, options);
    if (uri === window.sampleAPI) await wait(55);
    return nativeFetch(input, options);
  };

  const parsed = new DOMParser().parseFromString(source.html, 'text/html');
  document.documentElement.lang = parsed.documentElement.lang || 'en';
  document.title = parsed.title || config.previewTitle || 'Exercise preview';
  for (const attr of parsed.body.attributes) {
    if (['id', 'class', 'dir', 'lang', 'style'].includes(attr.name)) document.body.setAttribute(attr.name, attr.value);
  }
  document.body.innerHTML = parsed.body.innerHTML;

  // Keep fragment links inside the srcdoc preview so keyboard users can jump to a section.
  document.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element && event.target.closest('a[href^="#"]');
    if (!link || link.target || link.hasAttribute('download')) return;
    let target;
    try { target = document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1))); }
    catch { return; }
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView();
    if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
  });
  for (const element of document.querySelectorAll('audio[src], video[src], track[src]')) {
    if (media[element.getAttribute('src')]) element.src = media[element.getAttribute('src')];
  }
  const style = document.createElement('style');
  style.textContent = [...parsed.head.querySelectorAll('style')].map(node => node.textContent).concat(source.css).join('\n');
  document.head.append(style);

  const one = (selector) => document.querySelector(selector);
  const all = (selector) => [...document.querySelectorAll(selector)];
  const text = (selector) => one(selector)?.textContent.trim();
  const count = (selector) => all(selector).length;
  const exists = (selector) => Boolean(one(selector));
  const attr = (selector, name) => one(selector)?.getAttribute(name);
  const values = (selector) => all(selector).map(element => element.textContent.trim());
  const css = (selector, property) => getComputedStyle(one(selector)).getPropertyValue(property);
  const same = (actual, expected) => JSON.stringify(actual) === JSON.stringify(expected);
  const visibleValues = (selector) => all(selector).filter(element => getComputedStyle(element).display !== 'none')
    .map(element => element.textContent.trim());
  function equalColumns(element, expected, win = window) {
    const columns = win.getComputedStyle(typeof element === 'string' ? one(element) : element)
      .gridTemplateColumns.split(/\s+/).map(value => Number.parseFloat(value));
    return columns.length === expected && Number.isFinite(columns[0]) &&
      columns.every(value => Math.abs(value - columns[0]) < 1);
  }
  function submitForm(formSelector, inputSelector, value) {
    one(inputSelector).value = value;
    return !one(formSelector).dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  }
  function setInput(selector, value) {
    const input = one(selector);
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
  async function rejectsHTTP(loader) {
    try { await loader(window.sampleErrorAPI); return false; }
    catch { return true; }
  }
  function togglesMenu() {
    const button = one('#menu-toggle');
    const links = one('#links');
    const start = links.hidden && button.getAttribute('aria-expanded') === 'false';
    button.click();
    const opened = !links.hidden && button.getAttribute('aria-expanded') === 'true';
    button.click();
    return start && opened && links.hidden && button.getAttribute('aria-expanded') === 'false';
  }
  async function faqSingleOpen() {
    const [first, second] = all('#faq details');
    first.open = true;
    await wait(35);
    second.open = true;
    await wait(35);
    return !first.open && second.open;
  }
  function todoCheck() {
    const before = values('#tasks li');
    const label = 'Test task ' + before.length;
    const submitted = submitForm('form', '#task', label);
    submitForm('form', '#task', '   ');
    const expected = [...before, label];
    return submitted && same(values('#tasks li'), expected) &&
      same(JSON.parse(window.practiceStorage.getItem('tasks')), expected);
  }
  async function waitFor(test, duration = 1000) {
    const end = performance.now() + duration;
    while (performance.now() < end) {
      if (test()) return true;
      await wait(25);
    }
    return test();
  }
  async function apiResultCheck() {
    one('#load').click();
    const loading = text('#status') === 'Loading…';
    const loaded = await waitFor(() => text('#status') === 'Loaded');
    return loading && loaded && same(values('#items li'), apiItems.map(item => item.name));
  }
  async function apiErrorCheck() {
    one('#error').click();
    return waitFor(() => text('#status') === 'Unable to load items.');
  }

  // Trusted curriculum checks are evaluated as a separate script in the same frame
  // so that authored functions and top-level let/const declarations are visible.
  const toolkit = {
    source, parsed, logs, one, all, count, exists, text, attr, values, css, same, visibleValues,
    equalColumns, submitForm, setInput, rejectsHTTP, togglesMenu, faqSingleOpen,
    todoCheck, apiResultCheck, apiErrorCheck,
  };
  const bridge = '__lab' + token.replace(/[^a-z0-9]/gi, '');
  let request;
  let react;

  function runCompiled() {
    const nest = makeNest?.();
    if (config.runtime === 'react') {
      appendScript(source.reactScript);
      react = window.FrontendReact;
      window.React = react.ReactExports;
      document.body.innerHTML = '<div id="root"></div>';
    }
    const packages = {
      ...(react ? { react: react.ReactExports, 'react-dom/client': { createRoot: react.createRoot } } : {}),
      ...(nest ? { '@nestjs/common': nest.core } : {}),
    };
    const contextKey = bridge + 'Module';
    const context = {
      module: { exports: {} },
      require(name) {
        if (!Object.hasOwn(packages, name)) throw new Error('This practice lab cannot load ' + name + '.');
        return packages[name];
      },
    };
    window[contextKey] = context;
    appendScript('(function ({ module, require }) {\nconst exports = module.exports;\n' +
      source.js + '\n})(window[' + JSON.stringify(contextKey) + ']);');
    delete window[contextKey];
    const exported = context.module.exports;
    if (react && !config.reactEntry) {
      if (typeof exported.default !== 'function') throw new Error('Export a default App component.');
      const root = react.createRoot(document.querySelector('#root'));
      react.flushSync(() => root.render(react.React.createElement(exported.default)));
    }
    if (nest) {
      if (!exported.AppModule) throw new Error('Export AppModule so the practice API knows which routes to run.');
      request = nest.testApp(exported.AppModule);
    }
    return exported;
  }

  function reactClick(selector) {
    react.flushSync(() => one(selector).click());
  }

  function reactInput(selector, value) {
    const input = one(selector);
    react.flushSync(() => {
      Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
  }

  async function showNestRequests() {
    const panel = document.createElement('pre');
    panel.style.whiteSpace = 'pre-wrap';
    document.body.append(panel);
    const outputs = [];
    for (const [verb, path, body] of config.examples ?? []) {
      const result = await request(verb, path, body);
      outputs.push(verb + ' ' + path + ' → ' + result.status + '\n' + JSON.stringify(result.body, null, 2));
    }
    panel.textContent = outputs.join('\n\n');
  }

  async function run() {
    let exported = {};
    if (config.runtime) {
      exported = runCompiled();
      if (request && !checkMode) await showNestRequests();
    } else if (moduleMode && source.js.trim()) {
      const url = URL.createObjectURL(new Blob([source.js], { type: 'text/javascript' }));
      try { exported = await import(url); } catch (error) { reportError(display(error)); }
      finally { URL.revokeObjectURL(url); }
    } else if (source.js.trim()) {
      appendScript(source.js);
    }
    if (!checkMode) { send('ready'); return; }

    if (config.viewport) await waitFor(() => window.innerWidth === config.viewport, 900);
    await wait(70);
    if (runtimeError) { send('results', { results: [], runtimeError: true }); return; }
    window[bridge] = { ...toolkit, exported, reactClick, reactInput, request, send };
    const checks = config.checks.map(({ label, expression }) =>
      'await test(' + JSON.stringify(label) + ', async () => (' + expression + '));').join('\n');
    appendScript('(async function () {\n' +
      'const lab = window[' + JSON.stringify(bridge) + '];\n' +
      'const {' + [...Object.keys(toolkit), 'exported', 'reactClick', 'reactInput', 'request'].join(',') + '} = lab;\n' +
      'const results = [];\n' +
      'const test = async (label, expression) => {\n' +
      '  try { results.push({ label, passed: Boolean(await expression()) }); }\n' +
      '  catch { results.push({ label, passed: false }); }\n' +
      '};\n' + checks + '\n' +
      'lab.send("results", { results, runtimeError: false });\n' +
      '})();');
  }
  run().catch(error => {
    reportError(display(error));
    if (checkMode) send('results', { results: [], runtimeError: true });
  });
}

export function previewDocument(config) {
  const argument = JSON.stringify(config).replace(/</g, '\\u003c');
  return '<!doctype html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' blob:; ' +
    'style-src \'unsafe-inline\'; img-src data: blob:; media-src data: blob:; connect-src data:; frame-src \'self\' about:; form-action \'none\'; base-uri \'none\'">' +
    '<style>body{font:16px/1.5 system-ui,sans-serif;color:#182439;margin:12px;}img,video{max-width:100%;}button,input,select{font:inherit;}a{color:#244bc2;}</style>' +
    '</head><body><script>(' + boot.toString() + ')(' + argument + (config.runtime === 'nest' ? ', ' + nestPractice.toString() : '') + ');<\/script></body></html>';
}
