// Entry module for previously cached home pages. New visits load the Docs shell.
import { practiceEnabled } from './site-config.js';

if (practiceEnabled) {
  await Promise.all(['./site-header.css', './style.css'].map(href => new Promise((resolve, reject) => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = href;
    stylesheet.addEventListener('load', resolve, { once: true });
    stylesheet.addEventListener('error', reject, { once: true });
    document.head.append(stylesheet);
  })));
  await import('./app.js');
} else {
  const destination = new URL(document.querySelector('#entry-docs')?.href ?? './docs/', location.href);
  const [track, exercise] = location.hash.replace(/^#\/?/, '').split('/');
  const guides = ['html', 'css', 'js', 'typescript', 'database', 'react', 'nestjs'];
  if (guides.includes(track)) {
    const article = exercise ? (await import('./learning-paths.js')).articleForExercise(track, exercise) : undefined;
    destination.hash = '#/' + track + (article ? '/' + article : '');
  }
  location.replace(destination.href);
}
