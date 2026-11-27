import { readMedia } from '../runtime.js';

const root = new URL('../', import.meta.url);
const lessonImageURL = /https:\/\/javascript-training\.cloudninemm\.com\/docs\/media\/html\/(workshop-(?:480|960|square)\.webp)/g;
const safeJSON = value => JSON.stringify(value).replaceAll('<', '\\u003c');
const script = code => '<script>' + code + '</script>';
const document = body => '<!doctype html><html lang="en"><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>' + body + '</body></html>';

function userScript(code, type = '') {
  return script(`{
    const element = window.document.createElement('script');
    element.type = ${safeJSON(type)};
    element.textContent = ${safeJSON(code)};
    window.document.body.append(element);
  }`);
}

async function imageDataURL(path) {
  const response = await fetch(new URL(path, root));
  if (!response.ok) throw new Error('Could not load the example image.');
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

let media;
export async function browserExample(topic, code, sections) {
  const options = {};
  let html = code;
  if (topic === 'js/functions/export') {
    html = document(userScript(code + '\nconsole.log(total(2500, 2));', 'module'));
  } else if (topic === 'js/functions/modules') {
    const moduleURL = 'data:text/javascript,' + encodeURIComponent(sections.export);
    html = code.replace('"./total.js"', JSON.stringify(moduleURL));
  } else if (topic === 'js/http/json') {
    html = document(userScript('console.log(JSON.parse(' + safeJSON(code) + '));'));
  } else if (topic.startsWith('js/web-workers/')) {
    const worker = topic.endsWith('/receive') ? code : sections.receive;
    const start = topic.endsWith('/start-worker') ? code : sections['start-worker'];
    const page = topic.endsWith('/page') ? code : sections.page;
    const workerURL = 'data:text/javascript;charset=utf-8,' + encodeURIComponent(worker);
    const setup = `const totalWorkerURL = ${safeJSON(workerURL)};\n`;
    const startWorker = start.replace('new URL("./total-worker.js", import.meta.url)', 'totalWorkerURL');
    html = page.replace(/<script type="module" src="\.\/main\.js"><\/script>/, () => userScript(setup + startWorker, 'module'));
  } else if (topic.startsWith('js/') && !code.trimStart().startsWith('<')) {
    options.storage = topic === 'js/storage-and-errors/storage';
    html = document(userScript(code));
  } else if (topic === 'css/getting-started/stylesheet') {
    html = document('<p>Your order is ready.</p>\n<p>Your package is on the way.</p>' + script(
      `const link = window.document.createElement('link');
      link.rel = 'stylesheet';
      link.href = URL.createObjectURL(new Blob([${safeJSON(code)}], { type: 'text/css' }));
      window.document.head.append(link);`));
  } else if (topic.startsWith('html/images-media/')) {
    const imageURLs = new Map(Array.from(html.matchAll(lessonImageURL), ([url, file]) => [url, file]));
    for (const [url, file] of imageURLs) {
      html = html.replaceAll(url, await imageDataURL('docs/media/html/' + file));
    }
    if (topic.endsWith('/media')) {
      media ??= readMedia();
      const files = await media;
      html = html.replace(/https:\/\/javascript-training\.cloudninemm\.com\/media\/(lesson\.(?:ogg|webm)|lesson-en\.vtt)/g,
        (source, name) => files[name] || source);
    }
  }
  if (topic === 'js/http/fetch') options.fetch = 'product';
  if (topic === 'js/http/post') options.fetch = 'order';
  if (!/^(?:\s|<!--[\s\S]*?-->)*<(?:!doctype|html\b|head\b|body\b)/i.test(html)) {
    html = document(html);
  }
  return { html, options };
}
