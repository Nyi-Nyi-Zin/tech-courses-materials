// This bridge runs in the sandboxed preview, before the example's scripts.
function bootExample(token, options) {
  const send = (type, data) => parent.postMessage({ token, type, data }, '*');
  const format = value => {
    if (typeof value === 'string' || value instanceof Error) return String(value);
    try { return JSON.stringify(value) ?? String(value); } catch { return String(value); }
  };
  const log = (level, values) => send('log', { level, line: values.map(format).join(' ').slice(0, 3500) });
  for (const level of ['log', 'info', 'warn', 'error']) {
    console[level] = (...values) => log(level, values);
  }
  addEventListener('error', event => log('error', [event.message || 'A preview resource could not load.']));
  addEventListener('unhandledrejection', event => log('error', [event.reason]));
  addEventListener('load', () => send('ready'), { once: true });

  if (options.storage) {
    const entries = new Map();
    Object.defineProperty(window, 'localStorage', { value: {
      getItem: key => entries.get(String(key)) ?? null,
      setItem: (key, value) => entries.set(String(key), String(value)),
      removeItem: key => entries.delete(String(key)),
      clear: () => entries.clear(),
      key: index => [...entries.keys()][index] ?? null,
      get length() { return entries.size; },
    } });
  }

  const nativeFetch = fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = typeof input === 'string' ? input : input.url;
    if (options.fetch === 'product' && url === './product.json') {
      return Response.json({ name: 'Pen', price: 2500 });
    }
    if (options.fetch === 'order' && url === 'https://jsonplaceholder.typicode.com/posts') {
      if (init?.method?.toUpperCase() !== 'POST') return Response.json({}, { status: 405 });
      try { return Response.json({ ...JSON.parse(init.body), id: 101 }, { status: 201 }); }
      catch { return Response.json({}, { status: 400 }); }
    }
    return nativeFetch(input, init);
  };

  document.addEventListener('click', event => {
    if (event.defaultPrevented) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    event.preventDefault();
    if (href.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      target?.scrollIntoView();
      if (target && target.tabIndex < 0 && !target.hasAttribute('tabindex')) target.tabIndex = -1;
      target?.focus({ preventScroll: true });
    } else {
      console.log(href);
    }
  });
  document.addEventListener('submit', event => {
    if (event.defaultPrevented || event.target.method === 'dialog') return;
    event.preventDefault();
    const form = event.target;
    const fields = new FormData(form);
    const method = form.method.toUpperCase();
    const action = form.getAttribute('action') || '/';
    if (method === 'POST' && form.enctype === 'multipart/form-data') {
      const parts = Array.from(fields, ([name, value]) =>
        name + ': ' + (value instanceof File ? value.name + ' (' + value.size + ' bytes)' : value)
      );
      console.log([method + ' ' + action, form.enctype, ...parts].join('\n'));
      return;
    }
    const data = new URLSearchParams(fields);
    console.log(method === 'GET' ? method + ' ' + action + '?' + data : method + ' ' + action + '\n' + data);
  });
}

export function browserExampleDocument(html, token, options) {
  const config = JSON.stringify(options).replaceAll('<', '\\u003c');
  const content = '<meta http-equiv="Content-Security-Policy" content="' +
    "default-src 'none'; script-src 'unsafe-inline' blob: data:; style-src 'unsafe-inline' blob:; " +
    "img-src data: blob:; media-src data: blob:; worker-src blob: data:; connect-src data: blob:; " +
    "form-action 'none'; base-uri 'none'\">" +
    '<meta charset="utf-8"><script>(' + bootExample.toString() + ')(' + JSON.stringify(token) + ', ' + config + ');</script>';
  const prologue = html.match(/^(?:\s|<!--[\s\S]*?-->)*(?:<!doctype\b[^>]*>(?:\s|<!--[\s\S]*?-->)*)?(?:<html\b[^>]*>(?:\s|<!--[\s\S]*?-->)*)?/i)[0];
  const head = html.slice(prologue.length).match(/^<head\b[^>]*>/i)?.[0] ?? '';
  const insertion = prologue.length + head.length;
  return html.slice(0, insertion) + content + html.slice(insertion);
}
