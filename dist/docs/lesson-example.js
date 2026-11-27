import { p, page } from './content.js';
import { consoleSetup, demoPage, example, mdn, standalone } from './examples.js';

export const mdnSource = (label, path) => ['MDN · ' + label, mdn + path];
export const lesson = (id, en, my, introEn, introMy, sections, sources) =>
  page(id, p(en, my), p(introEn, introMy), sections, sources);

export function browserDemo(id, en, my, textEn, textMy, outputEn, outputMy, body, options = {}) {
  const { css, script, mistake, head } = options;
  const code = demoPage(en, body, css, script);
  return example(id, p(en, my), p(textEn, textMy),
    head ? code.replace('</head>', head + '\n</head>') : code,
    p(outputEn, outputMy), standalone, mistake);
}

export function consoleDemo(id, en, my, textEn, textMy, outputEn, outputMy, code, mistake) {
  return example(id, p(en, my), p(textEn, textMy), code,
    p(outputEn, outputMy), consoleSetup, mistake);
}
