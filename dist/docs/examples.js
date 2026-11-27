import { p, part } from './content.js';

export const htmlSpec = 'https://html.spec.whatwg.org/multipage/';
export const mdn = 'https://developer.mozilla.org/en-US/docs/';
export const htmlBody = p('In index.html, replace the content between <body> and </body> with this example. Save the file and reload it in the browser.', 'index.html ထဲက <body> နဲ့ </body> ကြားမှာ ဒီနမူနာကို ထည့်ပါ။ ဖိုင်ကို သိမ်းပြီး browser မှာ reload လုပ်ပါ။');
export const standalone = p('Save this example as a new .html file, then open it in your browser. After a change, save and reload.', 'ဒီနမူနာကို .html ဖိုင်အသစ်အဖြစ် သိမ်းပြီး browser နဲ့ ဖွင့်ပါ။ ပြင်ပြီးတိုင်း save နဲ့ reload လုပ်ပါ။');
export const consoleSetup = p('Open a browser tab, then open Developer Tools → Console. Type the example or paste it into the Console after reviewing it, then run it. Reload before repeating declarations with the same names.', 'Browser tab တစ်ခုမှာ Developer Tools → Console ကို ဖွင့်ပါ။ နမူနာကို ဖတ်ကြည့်ပြီး Console မှာ ရိုက်ကာ run ပါ။ နာမည်တူတဲ့ variable တွေကို ထပ်ကြေညာမယ်ဆိုရင် အရင် reload လုပ်ပါ။');

export function example(id, title, text, code, expected, setup = htmlBody, check) {
  return { ...part(id, title, text, code), setup, expected, check };
}

export function demoPage(title, body, css = '', script = '') {
  const titleText = title.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  return [
    '<!doctype html>', '<html lang="en">', '<head>', '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    '  <title>' + titleText + '</title>',
    ...(css ? ['  <style>', css, '  </style>'] : []),
    '</head>', '<body>', body,
    ...(script ? ['  <script>', script, '  </script>'] : []),
    '</body>', '</html>',
  ].join('\n');
}
