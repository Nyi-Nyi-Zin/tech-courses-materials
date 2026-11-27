const stage = (en, my, lessons) => ({ title: { en, my }, lessons });

export const learningPaths = {
  html: [
    stage("Web Fundamentals & HTML", "Web အခြေခံနှင့် HTML", {
      'introduction': [],
      'getting-started': [],
      'structure': ['document'],
      'attributes': [],
      'doctype': [],
    }),
    stage("Text & Hierarchy", "စာသားနှင့် ခေါင်းစဉ်အဆင့်များ", {
      'headings': ['first-heading'],
      'paragraphs': [],
      'inline-text': ['text'],
      'text-markup': [],
      'entities': [],
    }),
    stage("Lists & Navigation", "စာရင်းများနှင့် လင့်ခ်များ", {
      'lists-and-disclosure': ['lists'],
      'content': ['links'],
      'file-paths': [],
    }),
    stage("Images & Media", "ပုံ၊ အသံနှင့် ဗီဒီယို", {
      'images': ['images', 'responsive-images'],
      'media': ['media'],
      'icons-and-frames': [],
    }),
    stage("Data Tables", "ဒေတာဇယားများ", {
      'tables': ['tables'],
      'table-spans': [],
    }),
    stage("Forms & Validation", "Forms နှင့် ထည့်သွင်းထားသော တန်ဖိုးများ စစ်ဆေးခြင်း", {
      'forms': ['labels'],
      'form-controls': ['form-choices'],
      'form-field-types': [],
      'file-uploads': [],
      'buttons': [],
      'form-validation': ['validation'],
      'form-constraints': [],
    }),
    stage("Semantic HTML", "Semantic HTML နှင့် စာမျက်နှာဖွဲ့စည်းပုံ", {
      'containers': [],
      'accessibility': ['landmarks', 'keyboard-access'],
      'disclosure': ['disclosure'],
      'dialogs-and-popovers': ['dialog-popover'],
      'popovers': ['dialog-popover'],
    }),
    stage("Accessibility, SEO & Best Practices", "Accessibility၊ SEO နှင့် HTML စစ်ဆေးနည်း", {
      'metadata-and-search': ['metadata'],
      'reference': [],
    }),
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
