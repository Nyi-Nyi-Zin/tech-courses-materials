export function readingPath(language, guide, page) {
  const segments = [language, guide?.id, page?.id].filter(Boolean);
  return '/docs/read/' + segments.join('/') + '/';
}
