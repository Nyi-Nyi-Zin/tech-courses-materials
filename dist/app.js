import { curricula, languageOptions, messages } from './locales.js';
import { previewDocument } from './runner.js';
import { articleForExercise, learningPaths } from './learning-paths.js';
import { attachSidebar, sidebarToggle } from './sidebar.js';

const icons = {
  home: '<path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 21v-7h6v7"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-2-15-4 18"/>',
  palette: '<path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 1.2-2.4 1.5 1.5 0 0 1 1.2-2.4H18a3 3 0 0 0 3-3c0-5.6-4-10.2-9-10.2Z"/><path d="M7 12h.01M9 7h.01m5 0h.01m3 4h.01" stroke-width="3"/>',
  braces: '<path d="M9 4H7a2 2 0 0 0-2 2v3a3 3 0 0 1-3 3 3 3 0 0 1 3 3v3a2 2 0 0 0 2 2h2m6-16h2a2 2 0 0 1 2 2v3a3 3 0 0 0 3 3 3 3 0 0 0-3 3v3a2 2 0 0 1-2 2h-2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  database: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  server: '<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  drive: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 13h18m-13 3h.01m3 0h.01"/>',
  play: '<path d="M7 4v16l13-8L7 4Z"/>',
  circle: '<circle cx="12" cy="12" r="8"/>',
  desktop: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M9 21h6m-3-4v4"/>',
  mobile: '<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 17h2"/>',
  reset: '<path d="M3 5v6h6m-6 0a9 9 0 1 1 2 7"/>',
};

const icon = (name, size = 19) =>
  '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icons[name] + '</svg>';
const escapeHTML = value => String(value).replace(/[&<>"']/g, character =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const route = (track, exercise) => '#/' + track.id + (exercise ? '/' + exercise.id : '');
const keyFor = (track, exercise) => track.id + '/' + exercise.id;
const languages = {
  HTML: 'index.html', CSS: 'style.css', JavaScript: 'script.js',
  TypeScript: 'lesson.ts', JSX: 'App.jsx', NestJS: 'app.ts', SQL: 'query.sql',
};
const app = document.querySelector('#app');
const updateSidebar = attachSidebar(app, '(max-width: 780px)', t);
const storageKey = 'frontend-lab-v1';

const languageKey = 'frontend-lab-language';
let language = savedLanguage();
let tracks;
let allExercises;

function savedLanguage() {
  try { return localStorage.getItem(languageKey) === 'my' ? 'my' : 'en'; }
  catch { return 'en'; }
}

function t(key, values = {}) {
  return messages[language][key].replace(/\{(\w+)\}/g, (_, name) => values[name]);
}

function applyLanguage() {
  tracks = curricula[language];
  allExercises = tracks.flatMap(track => track.exercises.map(exercise => ({ track, exercise })));
  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').content = t('description');
  document.querySelector('.skip-link').textContent = t('skip');
}

function changeLanguage(code) {
  if (code === language) return;
  const workspace = document.querySelector('.workspace-grid');
  let view;
  if (workspace) {
    const [hint, solution] = workspace.querySelectorAll('.task-panel details');
    view = {
      file: workspace.querySelector('[data-file][aria-selected="true"]').dataset.file,
      mobile: workspace.dataset.mobile,
      size: workspace.querySelector('[data-size][aria-pressed="true"]').dataset.size,
      hintOpen: hint.open,
      solutionOpen: solution.open,
      consoleOpen: workspace.querySelector('.console').open,
    };
  }
  const scroll = window.scrollY;
  language = code;
  try { localStorage.setItem(languageKey, language); } catch {}
  applyLanguage();
  render(false, view);
  window.scrollTo(0, scroll);
  document.querySelector('[data-language="' + language + '"]').focus({ preventScroll: true });
}

applyLanguage();

function restoredState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey)) ?? {};
    return { completed: stored.completed ?? {}, drafts: stored.drafts ?? {}, last: stored.last ?? '', previews: stored.previews ?? {} };
  } catch {
    return { completed: {}, drafts: {}, last: '', previews: {} };
  }
}

const state = restoredState();
function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch {
    const note = document.querySelector('.sidebar-note span');
    if (note) note.textContent = t('storageError');
  }
}
const completed = (track, exercise) => Boolean(state.completed[keyFor(track, exercise)]);
const countDone = track => track.exercises.filter(exercise => completed(track, exercise)).length;
const totalDone = () => allExercises.filter(({ track, exercise }) => completed(track, exercise)).length;
const progress = (value, max, label) => '<progress value="' + value + '" max="' + max + '" aria-label="' + escapeHTML(label) + '"></progress>';

function sidebar(active) {
  const links = tracks.map(track => {
    const isActive = track.id === active;
    return `<a class="nav-link${isActive ? ' active' : ''}" ${isActive ? 'aria-current="location"' : ''} href="${route(track)}">
      <span class="nav-icon tone-${track.id}">${icon(track.icon)}</span>
      <span>${escapeHTML(track.title)}</span>
      <span class="nav-count" data-track-count="${track.id}">${countDone(track)}/${track.exercises.length}</span>
    </a>`;
  }).join('');
  return `<aside id="sidebar" class="sidebar">
    <nav aria-label="${t('mainNav')}">
      <a class="nav-link${active ? '' : ' active'}" ${active ? '' : 'aria-current="page"'} href="#/"><span class="nav-icon">${icon('home')}</span>${t('overview')}</a>
      <div class="nav-label">${t('paths')}</div>
      ${links}
    </nav>
    <div class="sidebar-note">${icon('drive', 16)}<span>${t('storageNote')}</span></div>
  </aside>`;
}

function layout(active, content, extraClass = '', docsHref = learningPaths[active] ? './docs/#/' + active : './docs/') {
  const count = totalDone();
  const languageButtons = languageOptions.map(({ code, label }) => `
    <button class="language-button" type="button" lang="${code}" data-language="${code}" aria-pressed="${language === code}">${label}</button>
  `).join('');
  return `<header class="topbar">
    <div class="top-left">
      ${sidebarToggle}
      <a class="brand" href="#/" aria-label="Cloud Nine Innovations"><img src="./icon.svg" alt=""><span>Cloud Nine Innovations</span></a>
    </div>
    <div class="top-actions">
      <a class="docs-link" href="${docsHref}">${t('docs')}</a>
      <div class="language-switch" role="group" aria-label="${t('language')}">${languageButtons}</div>
      <div class="top-progress">
        <span class="progress-word">${t('progress')}</span><strong id="total-progress">${count} / ${allExercises.length}</strong>
        ${progress(count, allExercises.length, t('overallProgress'))}
      </div>
    </div>
  </header>
  <div class="frame">${sidebar(active)}<main id="main" tabindex="-1"><div class="wrap ${extraClass}">${content}</div></main></div>`;
}

function overview() {
  const last = allExercises.find(({ track, exercise }) => keyFor(track, exercise) === state.last);
  const first = allExercises.find(({ track, exercise }) => !completed(track, exercise)) ?? allExercises[0];
  const nextInTrack = last?.track.exercises.slice(last.track.exercises.indexOf(last.exercise) + 1)
    .find(exercise => !completed(last.track, exercise));
  const resume = last && !completed(last.track, last.exercise)
    ? last : nextInTrack ? { track: last.track, exercise: nextInTrack } : first;
  const cards = tracks.filter(track => track.id !== 'projects').map(track => {
    const done = countDone(track);
    const total = track.exercises.length;
    return `<a class="track-card" href="${route(track)}">
      <div class="card-top"><span class="track-glyph tone-${track.id}">${icon(track.icon, 23)}</span>
        <span class="exercise-count">${t('exerciseCount', { count: total })}</span></div>
      <h3>${escapeHTML(track.title)}</h3><p>${escapeHTML(track.description)}</p>
      ${progress(done, total, t('trackProgress', { track: track.title }))}
      <div class="card-foot"><span>${t('completedCount', { done, total })}</span><span class="card-action">${t('viewTrack')}</span></div>
    </a>`;
  }).join('');
  const projectTrack = tracks.find(track => track.id === 'projects');
  const demo = `<div class="hero-demo" aria-hidden="true">
    <div class="demo-head"><i></i><i></i><i></i><span>index.html</span></div>
    <pre><span class="syntax-tag">&lt;main&gt;</span>
  <span class="syntax-tag">&lt;h1&gt;</span>Hello, Frontend!<span class="syntax-tag">&lt;/h1&gt;</span>
  <span class="syntax-tag">&lt;button&gt;</span><span class="syntax-value">Try it</span><span class="syntax-tag">&lt;/button&gt;</span>
<span class="syntax-tag">&lt;/main&gt;</span></pre>
    <div class="demo-result"><span>${t('preview')}</span><strong>${icon('check', 14)} ${t('demoReady')}</strong></div>
  </div>`;
  return layout('', `<section class="hero">
    <div><h1>${t('heroTitle')}<span>${t('heroSubtitle')}</span></h1><p>${t('heroCopy')}</p>
      <div class="hero-actions">
        <a class="button primary" href="${route(resume.track, resume.exercise)}">${t(last ? 'resume' : 'start')}</a>
        <button class="button secondary" id="browse-tracks" type="button">${t('browseTracks')}</button>
      </div>
    </div>${demo}
  </section>
  <section class="section" id="learning-tracks">
    <div class="section-heading"><h2 tabindex="-1">${t('learningTracks')}</h2><span>${t('totalExercises', { count: allExercises.length })}</span></div>
    <div class="track-grid">${cards}</div>
  </section>
  <section class="section">
    <div class="section-heading"><h2>${t('build')}</h2></div>
    <a class="project-card" href="${route(projectTrack)}">
      <span class="track-glyph tone-projects">${icon('layers', 22)}</span>
      <div><h3>${escapeHTML(projectTrack.title)}</h3><p>${escapeHTML(projectTrack.description)}</p></div>
      <span class="card-action">${t('completedCount', { done: countDone(projectTrack), total: projectTrack.exercises.length })}</span>
    </a>
  </section>`);
}

function breadcrumbs(track, exercise) {
  const trackTitle = escapeHTML(track.title);
  const current = exercise
    ? `<a href="${route(track)}">${trackTitle}</a><span aria-hidden="true">/</span><span>${escapeHTML(track.modules.find(group => group.exercises.includes(exercise)).title)}</span>`
    : `<span aria-current="page">${trackTitle}</span>`;
  return `<nav class="breadcrumb" aria-label="${t('breadcrumb')}">
    <a href="#/">${t('overview')}</a><span aria-hidden="true">/</span>${current}
  </nav>`;
}

function trackPage(track) {
  const modules = track.modules.map(group => {
    const rows = group.exercises.map(exercise => {
      const done = completed(track, exercise);
      const draft = state.drafts[keyFor(track, exercise)];
      return `<li><a class="exercise-row${done ? ' done' : ''}" href="${route(track, exercise)}">
        <span class="row-icon">${icon(done ? 'check' : 'circle', 17)}</span>
        <strong>${escapeHTML(exercise.title)}</strong><span class="row-state">${t(done ? 'completed' : draft ? 'inProgress' : 'openExercise')}</span>
      </a></li>`;
    }).join('');
    const done = group.exercises.filter(exercise => completed(track, exercise)).length;
    return `<section class="module"><div class="module-heading"><h2>${escapeHTML(group.title)}</h2>
      <span>${done}/${group.exercises.length}</span></div><ul class="exercise-list">${rows}</ul></section>`;
  }).join('');
  const done = countDone(track);
  const total = track.exercises.length;
  return layout(track.id, `${breadcrumbs(track)}
    <div class="page-heading"><span class="track-glyph tone-${track.id}">${icon(track.icon, 26)}</span>
      <div><h1>${escapeHTML(track.title)}</h1><p>${escapeHTML(track.description)}</p></div></div>
    <div class="track-status"><p>${t('totalCompleted', { done, total })}</p>${progress(done, total, t('trackProgress', { track: track.title }))}</div>
    ${modules}`);
}

const list = items => '<ul>' + items.map(item => '<li>' + escapeHTML(item) + '</li>').join('') + '</ul>';

function exercisePage(track, exercise, view) {
  const article = articleForExercise(track.id, exercise.id);
  const docsHref = article ? './docs/#/' + track.id + '/' + article : undefined;
  const exerciseFiles = Object.keys(exercise.starter);
  const sqlLab = track.runtime === 'sql';
  const activeFile = view?.file ?? exerciseFiles.at(-1);
  const mobileView = view?.mobile ?? 'task';
  const previewSize = view?.size ?? 'wide';
  const files = exerciseFiles.map(file => {
    const selected = file === activeFile;
    return `<button id="tab-${file}" class="file-tab" type="button" role="tab" data-file="${file}"
      aria-controls="file-panel" aria-selected="${selected}" tabindex="${selected ? '0' : '-1'}">${languages[file]}</button>`;
  }).join('');
  const samples = Object.entries(exercise.solution).map(([file, sample]) => `<div class="solution-entry">
    <strong>${languages[file]}</strong><pre><code>${escapeHTML(sample)}</code></pre></div>`).join('');
  const position = track.exercises.indexOf(exercise);
  const prev = track.exercises[position - 1];
  const next = track.exercises[position + 1];
  return layout(track.id, `${breadcrumbs(track, exercise)}
    <header class="workspace-head">
      <h1>${escapeHTML(exercise.title)}</h1>
      <span class="exercise-position">${t('exercisePosition', { position: position + 1, total: track.exercises.length })}</span>
    </header>
    <div class="mobile-switch" role="group" aria-label="${t('workspaceView')}">
      ${['task', 'code', 'preview'].map(tab => `<button type="button" class="view-tab" data-mobile-view="${tab}" aria-pressed="${tab === mobileView}">${t(tab)}</button>`).join('')}
    </div>
    <div class="workspace-grid" data-mobile="${mobileView}">
      <section class="task-panel" aria-label="${t('instructions')}">
        <h2>${t('lesson')}</h2><p>${escapeHTML(exercise.lesson)}</p>
        ${docsHref ? `<a class="task-guide" href="${docsHref}">${t('relatedGuide')}</a>` : ''}
        <h3>${t('yourTask')}</h3>${list(exercise.task)}
        ${track.note ? `<p class="lab-note">${escapeHTML(track.note)}</p>` : ''}
        ${exercise.visual.length ? `<h3>${t('visualChecks')}</h3>${list(exercise.visual)}` : ''}
        <details${view?.hintOpen ? ' open' : ''}><summary>${t('hint')}</summary><p>${escapeHTML(exercise.hint)}</p></details>
        <details${view?.solutionOpen ? ' open' : ''}><summary>${t('solution')}</summary><p>${escapeHTML(exercise.hint)}</p>${samples}</details>
      </section>
      <div>
        <section class="work-panel" aria-label="${t('codeWorkspace')}">
          <div class="editor-area">
            <div class="work-toolbar">
              <div class="file-tabs" role="tablist" aria-label="${t('codeFiles')}">${files}</div>
              <div class="toolbar-actions">
                <button id="reset" type="button" class="button reset-btn" aria-label="${t('resetDraft')}" title="${t('resetDraft')}">${icon('reset', 15)}${t('reset')}</button>
                <button id="run" type="button" class="button">${icon('play', 14)}${t('run')}</button>
                <button id="check" type="button" class="button primary">${icon('check', 15)}${t('check')}</button>
              </div>
            </div>
            <div class="editor" id="file-panel" role="tabpanel" aria-labelledby="tab-${activeFile}">
              <pre class="line-numbers" aria-hidden="true"></pre><textarea id="code" aria-label="${t('editor', { file: activeFile })}" wrap="off" spellcheck="false" autocapitalize="off" autocomplete="off" placeholder="${t('editorPlaceholder')}"></textarea>
            </div>
          </div>
          <div class="preview-area">
            <div class="preview-toolbar"><h2>${t(sqlLab ? 'queryResults' : 'preview')}</h2>
              <div class="file-tabs" role="group" aria-label="${t('viewport')}"${sqlLab ? ' hidden' : ''}>
                <button class="view-tab" type="button" data-size="wide" aria-pressed="${previewSize === 'wide'}">${icon('desktop', 15)} ${t('desktop')}</button>
                <button class="view-tab" type="button" data-size="narrow" aria-pressed="${previewSize === 'narrow'}">${icon('mobile', 15)} ${t('mobile')}</button>
              </div>
            </div>
            <div id="preview-host"${previewSize === 'narrow' ? ' class="narrow"' : ''}>${track.runtime ? `<p class="lab-placeholder">${t('runLab')}</p>` : ''}</div>
            <details class="console"${(view?.consoleOpen ?? (track.id === 'js' || track.runtime === 'typescript')) ? ' open' : ''}><summary>${t('console')}</summary>
              <pre id="console-output">${t('noOutput')}</pre>
            </details>
          </div>
        </section>
        <div class="results-area"><section class="feedback" aria-label="${t('feedback')}" hidden>
          <div id="feedback-status" role="status" aria-live="polite"></div>
          <label class="visual-confirm" hidden><input type="checkbox" id="visual-check">${t('visualConfirmation')}</label>
        </section></div>
      </div>
    </div>
    <span id="preview-status" class="preview-status" role="status"></span>
    <nav class="exercise-footer" aria-label="${t('exerciseNav')}">
      <a class="button" href="${route(track, prev)}">${t(prev ? 'previous' : 'backToTrack')}</a>
      <a class="button" href="${route(track, next)}">${t(next ? 'next' : 'seeProgress')}</a>
    </nav>
    <dialog id="reset-dialog" aria-labelledby="reset-title">
      <h2 id="reset-title">${t('resetTitle')}</h2><p>${t('resetBody')}</p>
      <form method="dialog"><button class="button" value="cancel" autofocus>${t('cancel')}</button><button class="button primary" value="reset">${t('resetCode')}</button></form>
    </dialog>`, 'workspace-wrap', docsHref);
}

function updateProgress(track) {
  const total = totalDone();
  document.querySelector('#total-progress').textContent = total + ' / ' + allExercises.length;
  document.querySelector('.top-progress progress').value = total;
  document.querySelector('[data-track-count="' + track.id + '"]').textContent = countDone(track) + '/' + track.exercises.length;
}

function readMedia() {
  return Promise.all(['lesson.ogg', 'lesson.webm', 'lesson-en.vtt'].map(async name => {
    const response = await fetch('./media/' + name);
    if (!response.ok) return [name, ''];
    const blob = await response.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = () => resolve([name, reader.result]);
      reader.onerror = () => resolve([name, '']);
      reader.readAsDataURL(blob);
    });
  })).then(Object.fromEntries).catch(() => ({}));
}

let reactBundle;
function loadReact() {
  reactBundle ??= fetch('./vendor/react.js').then(response => {
    if (!response.ok) throw new Error('Could not load the React runtime.');
    return response.text();
  }).catch(error => {
    reactBundle = undefined;
    throw error;
  });
  return reactBundle;
}

function runWorker(file, options, data, signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) { reject(signal.reason); return; }
    const worker = new Worker(new URL(file, import.meta.url), options);
    const timeout = setTimeout(() => finish(reject, new Error('The practice runtime took too long.')), 25000);
    const cancel = () => finish(reject, signal.reason);
    function finish(callback, value) {
      clearTimeout(timeout);
      signal.removeEventListener('abort', cancel);
      worker.terminate();
      callback(value);
    }
    signal.addEventListener('abort', cancel, { once: true });
    worker.onmessage = ({ data: result }) => finish(resolve, result);
    worker.onerror = () => finish(reject, new Error('The practice runtime could not start.'));
    worker.postMessage(data);
  });
}

let stopWorkspace = () => {};
function bindWorkspace(track, exercise) {
  const key = keyFor(track, exercise);
  state.last = key;
  persist();

  const workspace = document.querySelector('.workspace-grid');
  const editor = document.querySelector('#code');
  const gutter = document.querySelector('.line-numbers');
  const filePanel = document.querySelector('#file-panel');
  const fileButtons = [...document.querySelectorAll('[data-file]')];
  const host = document.querySelector('#preview-host');
  const consoleOutput = document.querySelector('#console-output');
  const previewStatus = document.querySelector('#preview-status');
  const feedback = document.querySelector('.feedback');
  const feedbackStatus = document.querySelector('#feedback-status');
  const visualCheck = document.querySelector('#visual-check');
  const checkButton = document.querySelector('#check');
  const runButton = document.querySelector('#run');
  const dialog = document.querySelector('#reset-dialog');
  const media = exercise.id === 'media' ? readMedia() : Promise.resolve({});
  let draft = { ...exercise.starter, ...state.drafts[key] };
  let activeFile = fileButtons.find(button => button.getAttribute('aria-selected') === 'true').dataset.file;
  let frame;
  let currentToken;
  let checkSequence = 0;
  let previewSequence = 0;
  let consoleLines = [];
  let disposed = false;
  let verified = false;
  const pending = new Map();
  const runtimeController = new AbortController();

  function saveDraft() {
    state.drafts[key] = { ...draft };
    persist();
  }
  function drawLines() {
    const count = editor.value.split('\n').length;
    gutter.textContent = Array.from({ length: count }, (_, index) => index + 1).join('\n');
    gutter.scrollTop = editor.scrollTop;
  }
  function changeFile(file) {
    activeFile = file;
    editor.value = draft[file];
    editor.setAttribute('aria-label', t('editor', { file }));
    filePanel.setAttribute('aria-labelledby', 'tab-' + file);
    for (const button of fileButtons) {
      const selected = button.dataset.file === file;
      button.setAttribute('aria-selected', String(selected));
      button.tabIndex = selected ? 0 : -1;
    }
    drawLines();
  }
  changeFile(activeFile);
  for (const button of fileButtons) {
    button.addEventListener('click', () => changeFile(button.dataset.file));
    button.addEventListener('keydown', event => {
      const index = fileButtons.indexOf(button);
      let next;
      switch (event.key) {
        case 'ArrowRight': next = (index + 1) % fileButtons.length; break;
        case 'ArrowLeft': next = (index - 1 + fileButtons.length) % fileButtons.length; break;
        case 'Home': next = 0; break;
        case 'End': next = fileButtons.length - 1; break;
        default: return;
      }
      event.preventDefault();
      changeFile(fileButtons[next].dataset.file);
      fileButtons[next].focus();
    });
  }

  function setMobileView(view) {
    workspace.dataset.mobile = view;
    for (const button of document.querySelectorAll('[data-mobile-view]')) {
      button.setAttribute('aria-pressed', String(button.dataset.mobileView === view));
    }
  }
  for (const button of document.querySelectorAll('[data-mobile-view]')) {
    button.addEventListener('click', () => setMobileView(button.dataset.mobileView));
  }
  for (const button of document.querySelectorAll('[data-size]')) {
    button.addEventListener('click', () => {
      host.classList.toggle('narrow', button.dataset.size === 'narrow');
      for (const option of document.querySelectorAll('[data-size]')) {
        option.setAttribute('aria-pressed', String(option === button));
      }
    });
  }

  function stopCheckers() {
    for (const job of pending.values()) {
      clearTimeout(job.timeout);
      job.frame.remove();
      job.resolve({ results: [], cancelled: true });
    }
    pending.clear();
  }
  function invalidateCheck() {
    checkSequence += 1;
    stopCheckers();
    verified = false;
    feedback.hidden = true;
    visualCheck.checked = false;
    checkButton.disabled = false;
    checkButton.innerHTML = icon('check', 15) + t('check');
  }
  editor.addEventListener('input', () => {
    draft[activeFile] = editor.value;
    drawLines();
    invalidateCheck();
    saveDraft();
  });
  editor.addEventListener('scroll', () => { gutter.scrollTop = editor.scrollTop; });
  editor.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      event.preventDefault();
      launchVisible(true);
    }
  });

  function addConsole(line, level) {
    consoleLines.push((level === 'error' ? t('errorPrefix') + ': ' : level === 'warn' ? t('warningPrefix') + ': ' : '') + line);
    if (consoleLines.length > 160) consoleLines.shift();
    consoleOutput.textContent = consoleLines.join('\n');
    if (level === 'error') document.querySelector('.console').open = true;
  }

  function source() {
    return {
      html: draft.HTML ?? '', css: draft.CSS ?? '', js: draft.JavaScript ?? '',
      typed: draft.TypeScript ?? draft.JSX ?? draft.NestJS ?? '', sql: draft.SQL ?? '',
    };
  }

  async function compileSource(snapshot, probe) {
    const runtime = track.runtime;
    const [compiled, reactScript] = await Promise.all([
      runWorker('./compiler-worker.js', {}, { code: snapshot.typed, runtime, probe }, runtimeController.signal),
      runtime === 'react' ? loadReact() : undefined,
    ]);
    if (compiled.error || compiled.diagnostics?.length) {
      throw new Error(compiled.error ?? compiled.diagnostics.join('\n'));
    }
    return { ...snapshot, js: compiled.code, reactScript };
  }

  function makeFrame(config) {
    const element = document.createElement('iframe');
    element.title = t(config.checkMode ? 'checkTitle' : 'livePreview');
    element.setAttribute('sandbox', 'allow-scripts');
    element.srcdoc = previewDocument({
      moduleMode: track.id === 'js' && exercise.id === 'modules',
      runtime: track.runtime,
      examples: exercise.examples,
      previewTitle: t('previewDocument'),
      ...config,
    });
    return element;
  }

  function beginPreview(switchView) {
    const id = ++previewSequence;
    consoleLines = [];
    consoleOutput.textContent = t('noOutput');
    previewStatus.textContent = t('previewRunning');
    if (track.runtime) {
      currentToken = undefined;
      host.innerHTML = '<p class="lab-placeholder">' + t('previewRunning') + '</p>';
    }
    if (switchView && matchMedia('(max-width: 780px)').matches) {
      setMobileView('preview');
      document.querySelector('[data-mobile-view="preview"]').focus();
    }
    return id;
  }

  function showFrame(id, snapshot, mediaFiles) {
    if (disposed || id !== previewSequence) return;
    const token = crypto.randomUUID();
    const newFrame = makeFrame({ token, source: snapshot, initialStorage: state.previews[key] ?? {}, media: mediaFiles });
    host.replaceChildren(newFrame);
    frame = newFrame;
    currentToken = token;
  }

  function showLabError(id, error) {
    if (disposed || id !== previewSequence) return;
    host.innerHTML = '<p class="lab-placeholder">' + t('seeConsole') + '</p>';
    addConsole(error, 'error');
    previewStatus.textContent = t('seeConsole');
  }

  async function runSql(id, snapshot, checks) {
    const result = await runWorker('./sql-worker.js', { type: 'module' }, {
      sql: snapshot.sql, checks,
    }, runtimeController.signal);
    if (result.error) throw new Error(result.error);
    if (!disposed && id === previewSequence) {
      const cell = value => escapeHTML(value === null ? 'NULL' : typeof value === 'object' ? JSON.stringify(value) : value);
      host.innerHTML = result.tables.length
        ? '<div class="sql-output">' + result.tables.map(table =>
          '<table><thead><tr>' + table.columns.map(name => '<th scope="col">' + cell(name) + '</th>').join('') +
          '</tr></thead><tbody>' + table.rows.map(row =>
            '<tr>' + row.map(value => '<td>' + cell(value) + '</td>').join('') + '</tr>').join('') +
          '</tbody></table>' + (table.rows.length ? '' : '<p>' + t('noRows') + '</p>')).join('') + '</div>'
        : '<p class="lab-placeholder">' + t('queryDone') + '</p>';
      previewStatus.textContent = t('previewUpdated');
    }
    return result;
  }

  async function launchVisible(switchView = false) {
    const id = beginPreview(switchView);
    const snapshot = source();
    try {
      if (track.runtime === 'sql') {
        await runSql(id, snapshot, []);
      } else {
        const [mediaFiles, prepared] = await Promise.all([media, track.runtime ? compileSource(snapshot) : snapshot]);
        showFrame(id, prepared, mediaFiles);
      }
    } catch (error) {
      showLabError(id, error.message);
    }
  }

  function launchCheck(width, checks, snapshot, mediaFiles, initialStorage) {
    const token = crypto.randomUUID();
    const element = makeFrame({ token, source: snapshot, initialStorage, checkMode: true, checks, viewport: width, media: mediaFiles });
    element.className = 'check-frame';
    element.setAttribute('aria-hidden', 'true');
    element.tabIndex = -1;
    element.style.width = width + 'px';
    return new Promise(resolve => {
      const timeout = setTimeout(() => {
        pending.delete(token);
        element.remove();
        resolve({ results: [], timedOut: true });
      }, 6000);
      pending.set(token, { frame: element, resolve, timeout });
      document.body.append(element);
    });
  }

  function onMessage(event) {
    const { token, type, data } = event.data ?? {};
    if (token === currentToken && event.source === frame?.contentWindow) {
      if (type === 'ready') previewStatus.textContent = t('previewUpdated');
      if (type === 'log' && typeof data?.line === 'string') addConsole(data.line, data.level);
      if (type === 'storage' && data && Object.keys(data).length <= 300 && JSON.stringify(data).length < 100000) {
        state.previews[key] = data;
        persist();
      }
      return;
    }
    const job = pending.get(token);
    if (job?.frame.contentWindow !== event.source || !job || type !== 'results' || !Array.isArray(data?.results)) return;
    clearTimeout(job.timeout);
    job.frame.remove();
    pending.delete(token);
    job.resolve(data);
  }
  window.addEventListener('message', onMessage);

  function complete() {
    state.completed[key] = true;
    persist();
    updateProgress(track);
    visualCheck.closest('label').hidden = true;
    feedbackStatus.querySelector('p').textContent = t('exerciseComplete');
  }

  async function checkAnswer() {
    const sequence = ++checkSequence;
    const snapshot = source();
    const initialStorage = state.previews[key] ?? {};
    verified = false;
    visualCheck.checked = false;
    visualCheck.closest('label').hidden = true;
    feedback.hidden = false;
    feedbackStatus.innerHTML = '<p>' + t('checkingAnswer') + '</p>';
    checkButton.disabled = true;
    checkButton.textContent = t('checking');
    let groups;
    if (track.runtime) {
      const id = beginPreview(true);
      try {
        if (track.runtime === 'sql') {
          groups = [await runSql(id, snapshot, exercise.checks)];
        } else {
          const prepared = await compileSource(snapshot, exercise.probe);
          if (disposed || sequence !== checkSequence) return;
          showFrame(id, prepared, {});
          groups = [await launchCheck(680, exercise.checks, prepared, {}, initialStorage)];
        }
      } catch (error) {
        showLabError(id, error.message);
        groups = [{ results: [], runtimeError: true }];
      }
    } else {
      launchVisible(true);
      const mediaFiles = await media;
      if (disposed || sequence !== checkSequence) return;
      const checksByWidth = new Map();
      for (const check of exercise.checks) {
        const width = check.viewport ?? 680;
        if (!checksByWidth.has(width)) checksByWidth.set(width, []);
        checksByWidth.get(width).push(check);
      }
      if (checksByWidth.size === 0) checksByWidth.set(680, []);
      groups = await Promise.all([...checksByWidth].map(([width, checks]) =>
        launchCheck(width, checks, snapshot, mediaFiles, initialStorage)));
    }
    if (disposed || sequence !== checkSequence) return;
    checkButton.disabled = false;
    checkButton.innerHTML = icon('check', 15) + t('check');

    const results = groups.flatMap(group => group.results);
    const timedOut = groups.some(group => group.timedOut);
    const runtimeError = groups.some(group => group.runtimeError);
    verified = !timedOut && !runtimeError && results.length === exercise.checks.length && results.every(result => result.passed);
    let status;
    if (timedOut) status = t('checkTimeout');
    else if (runtimeError) status = t(track.runtime ? 'seeConsole' : 'checkError');
    else if (!verified) status = t('checkRetry');
    else if (exercise.visual.length) status = t('checkVisual');
    else status = t('checkSuccess');

    feedbackStatus.innerHTML = '<p>' + status + '</p>' + (results.length ? '<ul>' + results.map(result =>
      '<li class="' + (result.passed ? 'pass' : 'fail') + '">' + (result.passed ? '✓ ' : '× ') + escapeHTML(result.label) + '</li>'
    ).join('') + '</ul>' : '');
    if (verified && exercise.visual.length) visualCheck.closest('label').hidden = false;
    else if (verified) complete();
  }

  visualCheck.addEventListener('change', () => { if (verified && visualCheck.checked) complete(); });
  runButton.addEventListener('click', () => launchVisible(true));
  checkButton.addEventListener('click', checkAnswer);
  document.querySelector('#reset').addEventListener('click', () => {
    dialog.returnValue = 'cancel';
    dialog.showModal();
  });
  dialog.addEventListener('close', () => {
    if (dialog.returnValue !== 'reset') return;
    draft = { ...exercise.starter };
    delete state.drafts[key];
    delete state.previews[key];
    persist();
    changeFile(activeFile);
    invalidateCheck();
    launchVisible();
  });
  if (!track.runtime) launchVisible();

  return () => {
    disposed = true;
    runtimeController.abort();
    stopCheckers();
    window.removeEventListener('message', onMessage);
  };
}

function render(shouldFocus = false, view) {
  stopWorkspace();
  stopWorkspace = () => {};
  const [trackId, exerciseId, extra] = location.hash.replace(/^#\/?/, '').split('/');
  const track = tracks.find(item => item.id === trackId);
  const exercise = track?.exercises.find(item => item.id === exerciseId);

  if (!trackId) {
    document.title = 'Cloud Nine Innovations';
    app.innerHTML = overview();
    document.querySelector('#browse-tracks').addEventListener('click', () => {
      const heading = document.querySelector('#learning-tracks h2');
      heading.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
      heading.focus({ preventScroll: true });
    });
  } else if (track && exercise && !extra) {
    document.title = exercise.title + ' · Cloud Nine Innovations';
    app.innerHTML = exercisePage(track, exercise, view);
    stopWorkspace = bindWorkspace(track, exercise);
  } else if (track && !exerciseId && !extra) {
    document.title = track.title + ' · Cloud Nine Innovations';
    app.innerHTML = trackPage(track);
  } else {
    document.title = t('unavailable') + ' · Cloud Nine Innovations';
    app.innerHTML = layout('', '<section class="message-card"><h1>' + t('notFound') + '</h1><p>' + t('notFoundBody') +
      '</p><a class="button primary" href="#/">' + t('backToOverview') + '</a></section>');
  }
  for (const button of document.querySelectorAll('[data-language]')) {
    button.addEventListener('click', () => changeLanguage(button.dataset.language));
  }
  updateSidebar();
  if (shouldFocus) {
    window.scrollTo(0, 0);
    document.querySelector('#main').focus({ preventScroll: true });
  }
}

document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#main').focus();
});
window.addEventListener('hashchange', () => render(true));
render();
