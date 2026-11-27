import { webFundamentals } from './web-fundamentals.js?v=96';
import { htmlGuide } from './html.js?v=98';
import { cssGuide } from './css-learning.js';
import { jsGuide } from './js-learning.js';
import { cssAdditions } from './css-additions.js';
import { jsAdditions } from './js-additions.js';

export const webGuides = [
  webFundamentals,
  htmlGuide,
  { ...cssGuide, pages: [...cssGuide.pages, ...cssAdditions] },
  { ...jsGuide, pages: [...jsGuide.pages, ...jsAdditions] },
];
