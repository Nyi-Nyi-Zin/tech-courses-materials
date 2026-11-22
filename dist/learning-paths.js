const stage = (en, my, lessons) => ({ title: { en, my }, lessons });

export const learningPaths = {
  html: [
    stage('Document & Text', 'Document နဲ့ စာသား', {
      structure: ['first-heading', 'document', 'text'],
    }),
    stage('Links & Lists', 'Links နဲ့ Lists', {
      content: ['links'],
      'lists-and-disclosure': ['lists', 'disclosure'],
    }),
    stage('Images & Media', 'ပုံ၊ အသံနဲ့ ဗီဒီယို', {
      images: ['images', 'responsive-images'],
      media: ['media'],
    }),
    stage('Semantics & Accessibility', 'Semantic HTML နဲ့ Accessibility', {
      tables: ['tables'],
      accessibility: ['landmarks', 'keyboard-access'],
    }),
    stage('Forms', 'Forms', {
      forms: ['labels'],
      'form-controls': ['form-choices'],
      'form-validation': ['validation'],
    }),
    stage('Dialogs, Popovers & SEO', 'Dialogs၊ Popovers နဲ့ SEO', {
      'dialogs-and-popovers': ['dialog-popover'],
      'metadata-and-search': ['metadata'],
    }),
  ],
  css: [
    stage('Style Basics', 'CSS အခြေခံ', {
      cascade: ['selectors', 'cascade', 'inheritance', 'variables'],
      layout: ['box-model', 'display'],
      typography: ['units'],
    }),
    stage('Positioning, Flexbox & Grid', 'Positioning၊ Flexbox နဲ့ Grid', {
      positioning: ['positioning', 'z-index'],
      flexbox: ['flexbox', 'flex-wrap'],
      grid: ['grid', 'grid-page'],
    }),
    stage('Responsive Layout & Debugging', 'Responsive Layout နဲ့ Debugging', {
      responsive: ['responsive', 'container-queries', 'states'],
      'layout-debugging': ['layout-debugging'],
    }),
    stage('Visual Details, Themes & Motion', 'အလှဆင်ခြင်း၊ Themes နဲ့ Motion', {
      'pseudo-elements': ['pseudo-elements'],
      'dark-mode': ['dark-mode'],
      motion: ['motion'],
    }),
  ],
  js: [
    stage('Values & Control Flow', 'Values နဲ့ Control Flow', {
      values: ['variables', 'types', 'operators'],
      'conditions-and-loops': ['conditions', 'switch', 'loops', 'while'],
    }),
    stage('Functions, Data & Modules', 'Functions၊ Data နဲ့ Modules', {
      functions: ['functions', 'modules'],
      'arrays-and-objects': ['strings', 'arrays', 'objects'],
      'scope-and-classes': ['scope', 'classes'],
    }),
    stage('DOM, Events & Forms', 'DOM၊ Events နဲ့ Forms', {
      dom: ['dom', 'create-list-items', 'update-remove-items', 'events', 'event-bubbling', 'event-delegation', 'forms'],
    }),
    stage('Async, HTTP & Browser Storage', 'Async၊ HTTP နဲ့ Browser Storage', {
      async: ['promises', 'await', 'event-loop', 'fetch', 'post-json'],
      'storage-and-errors': ['storage', 'errors'],
    }),
    stage('Generators, Regex & Workers', 'Generators၊ Regex နဲ့ Workers', {
      'iterators-and-generators': ['generators'],
      'regular-expressions': ['regular-expressions'],
      'web-workers': ['web-workers'],
    }),
  ],
};

export function articleForExercise(trackId, exerciseId) {
  return learningPaths[trackId]?.flatMap(({ lessons }) => Object.entries(lessons))
    .find(([, exercises]) => exercises.includes(exerciseId))?.[0];
}
