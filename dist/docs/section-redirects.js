// Keep old Docs links working after moving sections into their own articles.
export const movedSections = {
  html: {
    structure: { headings: 'headings', text: 'inline-text' },
    content: { images: 'images', tables: 'tables' },
    'text-markup': { 'character-references': 'entities' },
    'lists-and-disclosure': { disclosure: 'disclosure' },
    forms: { keyboard: 'accessibility' },
    'dialogs-and-popovers': { popover: 'popovers' },
  },
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
    'standard-attributes': { page: 'attributes' },
    'global-attributes': { page: 'attributes' },
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
    sectionId ?? moved?.defaultSection,
  ];
}
