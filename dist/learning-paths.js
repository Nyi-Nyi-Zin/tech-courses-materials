const stage = (en, my, lessons) => ({ title: { en, my }, lessons });

export const learningPaths = {
  html: [
    stage('Basic HTML Tags', 'အခြေခံ HTML Tags', {
      introduction: [],
      'getting-started': [],
      structure: ['document'],
      'standard-attributes': [],
      'global-attributes': [],
      doctype: [],
    }),
    stage('Textual Tags', 'စာသားအတွက် HTML Tags', {
      headings: ['first-heading'],
      paragraphs: [],
      'inline-text': ['text'],
      content: ['links'],
      'file-paths': [],
      containers: [],
      'text-markup': [],
      entities: [],
    }),
    stage('Lists & Expandable Content', 'စာရင်းများနဲ့ ဖွင့်ပိတ်နိုင်သော အကြောင်းအရာ', {
      'lists-and-disclosure': ['lists'],
      disclosure: ['disclosure'],
    }),
    stage('Images & Media', 'ပုံ၊ အသံနဲ့ ဗီဒီယို', {
      images: ['images', 'responsive-images'],
      media: ['media'],
      'icons-and-frames': [],
    }),
    stage('Tables', 'ဇယားများ', {
      tables: ['tables'],
      'table-spans': [],
    }),
    stage('Semantics & Accessibility', 'Semantic HTML နဲ့ Accessibility', {
      accessibility: ['landmarks', 'keyboard-access'],
    }),
    stage('Forms', 'Forms', {
      forms: ['labels'],
      'form-controls': ['form-choices'],
      'form-field-types': [],
      'file-uploads': [],
      'form-validation': ['validation'],
      'form-constraints': [],
      buttons: [],
    }),
    stage('Dialogs & Popovers', 'Dialogs နဲ့ Popovers', {
      'dialogs-and-popovers': ['dialog-popover'],
      popovers: ['dialog-popover'],
    }),
    stage('SEO', 'SEO', {
      'metadata-and-search': ['metadata'],
    }),
    stage('Reference', 'အမြန်ရှာရန်', { reference: [] }),
  ],
  css: [
    stage('Style Basics', 'CSS အခြေခံ', {
      'getting-started': [],
      cascade: ['selectors', 'cascade', 'inheritance', 'variables'],
      layout: ['box-model', 'display'],
      typography: ['units'],
      colors: [],
      'backgrounds-and-borders': [],
      'spacing-and-visibility': [],
    }),
    stage('Flexbox, Grid & Positioning', 'Flexbox၊ Grid နဲ့ Positioning', {
      flexbox: ['flexbox', 'flex-wrap'],
      grid: ['grid', 'grid-page'],
      'flex-and-grid-sizing': [],
      positioning: ['positioning', 'z-index'],
    }),
    stage('Responsive Layout & Debugging', 'Responsive Layout နဲ့ Debugging', {
      responsive: ['responsive', 'container-queries', 'states'],
      'layout-debugging': ['layout-debugging'],
    }),
    stage('Visual Details, Themes & Motion', 'အလှဆင်ခြင်း၊ Themes နဲ့ Motion', {
      'pseudo-elements': ['pseudo-elements'],
      'images-and-transforms': [],
      'form-and-table-styling': [],
      'dark-mode': ['dark-mode'],
      motion: ['motion'],
    }),
    stage('Reference', 'အမြန်ရှာရန်', { reference: [] }),
  ],
  js: [
    stage('Values & Control Flow', 'Values နဲ့ Control Flow', {
      'getting-started': [],
      values: ['variables', 'types', 'operators'],
      'missing-values-and-templates': [],
      'conditions-and-loops': ['conditions', 'switch', 'loops', 'while'],
    }),
    stage('Functions, Data & Modules', 'Functions၊ Data နဲ့ Modules', {
      functions: ['functions', 'modules'],
      'declarations-and-this': [],
      'arrays-and-objects': ['strings', 'arrays', 'objects'],
      'array-methods': [],
      'date-and-math': [],
      'map-and-set': [],
      'scope-and-classes': ['scope', 'classes'],
    }),
    stage('DOM, Events & Forms', 'DOM၊ Events နဲ့ Forms', {
      dom: ['dom', 'create-list-items', 'update-remove-items', 'events', 'event-bubbling', 'event-delegation', 'forms'],
      'dom-selectors-and-events': [],
    }),
    stage('Async, HTTP & Browser Storage', 'Async၊ HTTP နဲ့ Browser Storage', {
      async: ['promises', 'await', 'event-loop'],
      http: ['fetch', 'post-json'],
      'storage-and-errors': ['storage', 'errors'],
      debugging: [],
    }),
    stage('Generators, Regex & Workers', 'Generators၊ Regex နဲ့ Workers', {
      'iterators-and-generators': ['generators'],
      'regular-expressions': ['regular-expressions'],
      'web-workers': ['web-workers'],
    }),
    stage('Reference', 'အမြန်ရှာရန်', { reference: [] }),
  ],
};

export function articleForExercise(trackId, exerciseId) {
  return learningPaths[trackId]?.flatMap(({ lessons }) => Object.entries(lessons))
    .find(([, exercises]) => exercises.includes(exerciseId))?.[0];
}
