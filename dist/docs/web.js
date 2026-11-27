import { webFundamentals } from './web-fundamentals.js?v=86';
import { htmlGuide } from './html.js';
import { cssGuide } from './css-learning.js';
import { jsGuide } from './js-learning.js';
import { htmlAdditions } from './html-additions.js';
import { cssAdditions } from './css-additions.js';
import { jsAdditions } from './js-additions.js';

export const webGuides = [
  webFundamentals,
  { ...htmlGuide, pages: [...htmlGuide.pages, ...htmlAdditions] },
  { ...cssGuide, pages: [...cssGuide.pages, ...cssAdditions] },
  { ...jsGuide, pages: [...jsGuide.pages, ...jsAdditions] },
];
