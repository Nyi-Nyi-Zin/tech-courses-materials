import { bindPandasRunner } from './pandas-runner.js?v=5';

const reading = document.querySelector('[data-docs-route]');
if (new URL(location.href).searchParams.get('view') === 'reading') {
  bindPandasRunner(reading, document.documentElement.lang);
} else {
  const destination = new URL('/docs/', location.origin);
  destination.searchParams.set('lang', document.documentElement.lang);
  const section = location.hash.slice(1);
  destination.hash = reading.dataset.docsRoute + (section ? '/' + section : '');
  location.replace(destination);
}
