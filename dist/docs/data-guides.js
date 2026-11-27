const lessons = {
  python: () => import('./data-guides/python.js'),
  numpy: () => import('./data-guides/numpy.js'),
  pandas: () => import('./data-guides/pandas.js?v=73'),
  matplotlib: () => import('./data-guides/matplotlib.js'),
  'data-analysis': () => import('./data-guides/data-analysis.js'),
  'machine-learning': () => import('./data-guides/machine-learning.js'),
};

export const dataGuideIds = Object.keys(lessons);
export const loadDataGuide = async id => (await lessons[id]()).default;
