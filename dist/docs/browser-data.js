import { readMedia } from '../runtime.js';

const root = new URL('../', import.meta.url);
const serverImage = 'https://javascript-training.cloudninemm.com/docs/media/database/what-is-a-server.webp';
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

function exampleImage(width, height, label, color) {
  const canvas = window.document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.fillStyle = color;
  context.fillRect(0, 0, width, height);
  context.fillStyle = '#fff8e7';
  context.fillRect(width * .24, height * .22, width * .39, height * .38);
  context.strokeStyle = '#fff8e7';
  context.lineWidth = Math.max(3, height * .045);
  context.beginPath();
  context.arc(width * .63, height * .42, height * .12, -Math.PI / 2, Math.PI / 2);
  context.stroke();
  context.fillStyle = '#15243b';
  context.font = Math.round(height * .1) + 'px sans-serif';
  context.textAlign = 'center';
  context.fillText(label, width * .5, height * .83);
  return canvas.toDataURL('image/png');
}

let assets;
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

function imageAssets() {
  assets ??= (async () => {
    const icon = await imageDataURL('cloud-nine-logo.png');
    return {
      'https://javascript-training.cloudninemm.com/cloud-nine-logo.png': icon,
      'mountains.jpg': exampleImage(640, 480, 'Mountain landscape', '#759a7e'),
      'flourish.svg': exampleImage(64, 48, '', '#f2f4ee'),
      'mountains-480.jpg': exampleImage(480, 320, '480px', '#8ca99a'),
      'mountains-960.jpg': exampleImage(960, 640, '960px', '#8ca99a'),
      'landscape-wide.jpg': exampleImage(960, 300, 'Wide crop', '#b2a18a'),
      'landscape-small.jpg': exampleImage(400, 400, 'Square crop', '#b2a18a'),
    };
  })().catch(error => { assets = undefined; throw error; });
  return assets;
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
  } else if (topic.startsWith('html/images/')) {
    for (const [name, url] of Object.entries(await imageAssets())) html = html.replaceAll(name, url);
  } else if (['html/metadata-and-search/image-alt', 'html/standard-attributes/image-attributes'].includes(topic) &&
      html.includes(serverImage)) {
    html = html.replaceAll(serverImage, await imageDataURL('docs/media/database/what-is-a-server.webp'));
  } else if (topic.startsWith('html/media/')) {
    media ??= readMedia();
    const files = await media;
    const caption = topic.endsWith('/webvtt') ? 'data:text/vtt;charset=utf-8,' + encodeURIComponent(code) : files['lesson-en.vtt'];
    if (topic.endsWith('/webvtt')) html = sections.captions;
    html = html.replace(/(?:https:\/\/javascript-training\.cloudninemm\.com\/media\/)?(lesson\.(?:ogg|webm)|lesson-en\.vtt)/g,
      (source, name) => (name.endsWith('.vtt') ? caption : files[name]) || source);
  }
  if (topic === 'js/http/fetch') options.fetch = 'product';
  if (topic === 'js/http/post') options.fetch = 'order';
  if (topic === 'html/doctype/declaration') {
    html += script('window.document.body.append(window.document.compatMode);');
    // Ensure the body exists before reading the document mode.
    html = html.replace('<script>', '<body><script>');
  }
  if (/^html\/metadata-and-search\/(head|description|viewport|canonical)$/.test(topic) ||
      topic === 'html/structure/viewport') {
    html = '<!doctype html><head>' + html + '</head><body>' + script(`
      const value = window.document.title || window.document.querySelector('meta[name], link[rel="canonical"]')?.outerHTML || '';
      window.document.body.append(value);`);
  } else if (!/^(?:\s|<!--[\s\S]*?-->)*<(?:!doctype|html\b|head\b|body\b)/i.test(html) && topic !== 'html/doctype/modes') {
    html = document(html);
  }
  return { html, options };
}
