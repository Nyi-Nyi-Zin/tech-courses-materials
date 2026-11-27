// Keep old Docs links working after moving sections into their own articles.
export const movedSections = {
  js: { values: { functions: 'functions' }, async: { fetch: 'http' } },
  database: {
    fundamentals: {
      'client-server': 'client-server',
      'server-types': 'client-server',
      'web-app-flow': 'web-app-architecture',
    },
  },
};

export const movedArticles = {
  html: {
    'introduction': { page: 'web-fundamentals' },
    'getting-started': { page: 'web-fundamentals', defaultSection: 'document' },
    'structure': { page: 'web-fundamentals', defaultSection: 'document' },
    'doctype': { page: 'web-fundamentals', defaultSection: 'document' },
    'attributes': { page: 'web-fundamentals', defaultSection: 'attributes' },
    'standard-attributes': { page: 'web-fundamentals', defaultSection: 'attributes' },
    'global-attributes': { page: 'web-fundamentals', defaultSection: 'attributes' },
    'headings': { page: 'text-hierarchy', defaultSection: 'headings' },
    'paragraphs': { page: 'text-hierarchy', defaultSection: 'paragraphs' },
    'inline-text': { page: 'text-hierarchy', defaultSection: 'inline-text' },
    'text-markup': { page: 'text-hierarchy', defaultSection: 'entities' },
    'entities': { page: 'text-hierarchy', defaultSection: 'entities' },
    'content': { page: 'lists-navigation', defaultSection: 'links' },
    'file-paths': { page: 'lists-navigation', defaultSection: 'file-paths' },
    'lists-and-disclosure': { page: 'lists-navigation', defaultSection: 'lists' },
    'images': { page: 'images-media', defaultSection: 'images' },
    'media': { page: 'images-media', defaultSection: 'media' },
    'icons-and-frames': { page: 'images-media', defaultSection: 'media' },
    'tables': { page: 'data-tables', defaultSection: 'tables' },
    'table-spans': { page: 'data-tables', defaultSection: 'table-spans' },
    'forms': { page: 'interactive-forms', defaultSection: 'forms' },
    'form-controls': { page: 'interactive-forms', defaultSection: 'labels' },
    'form-field-types': { page: 'interactive-forms', defaultSection: 'input-types' },
    'file-uploads': { page: 'interactive-forms', defaultSection: 'input-types' },
    'buttons': { page: 'interactive-forms', defaultSection: 'forms' },
    'form-validation': { page: 'interactive-forms', defaultSection: 'validation' },
    'form-constraints': { page: 'interactive-forms', defaultSection: 'validation' },
    'containers': { page: 'semantic-html5', defaultSection: 'containers' },
    'accessibility': { page: 'semantic-html5', defaultSection: 'landmarks' },
    'disclosure': { page: 'semantic-html5', defaultSection: 'section-article-div' },
    'dialogs-and-popovers': { page: 'semantic-html5' },
    'popovers': { page: 'semantic-html5' },
    'metadata-and-search': { page: 'accessibility-seo', defaultSection: 'metadata' },
    'reference': { page: 'accessibility-seo', defaultSection: 'capstone' },
  },
  database: {
    'client-server': { guide: 'web-fundamentals' },
    'web-app-architecture': { guide: 'web-fundamentals' },
  },
  'web-fundamentals': {
    'server-types': {
      page: 'client-server',
      defaultSection: 'server-types',
    },
    'server-hosting': { page: 'client-server', defaultSection: 'server-hosting' },
  },
};

export function lessonDestination(topic, article, section) {
  const isWebAppLesson = (topic === 'web-fundamentals' && article === 'web-app-architecture') ||
    (topic === 'database' && ['fundamentals', 'web-app-architecture'].includes(article));
  const sectionId = isWebAppLesson && section === 'request-lifecycle' ? 'web-app-flow' : section;
  const articleId = movedSections[topic]?.[article]?.[sectionId] ?? article;
  const moved = movedArticles[topic]?.[articleId];
  return [
    moved?.guide ?? topic,
    moved?.sections?.[sectionId] ?? moved?.page ?? articleId,
    topic === 'html' && moved ? moved.defaultSection : sectionId ?? moved?.defaultSection,
  ];
}
