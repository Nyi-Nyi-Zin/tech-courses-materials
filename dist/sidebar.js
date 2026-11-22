const preferenceKey = 'frontend-lab-sidebar-hidden';

export const sidebarToggle = `<button class="sidebar-toggle" type="button" aria-controls="sidebar">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>
  </svg>
  <span></span>
</button>`;

export function attachSidebar(app, narrowQuery, translate) {
  const narrow = window.matchMedia(narrowQuery);
  let desktopHidden = false;
  try { desktopHidden = localStorage.getItem(preferenceKey) === 'true'; } catch {}
  let mobileOpen = false;

  function update() {
    const sidebar = app.querySelector('#sidebar');
    const toggle = app.querySelector('.sidebar-toggle');
    const open = narrow.matches ? mobileOpen : !desktopHidden;
    if (!open && sidebar.contains(document.activeElement)) toggle.focus();
    sidebar.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    const label = translate(open ? 'hideSidebar' : 'showSidebar');
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    toggle.querySelector('span').textContent = label;
  }

  app.addEventListener('click', event => {
    if (event.target.closest('.sidebar-toggle')) {
      if (narrow.matches) {
        mobileOpen = !mobileOpen;
      } else {
        desktopHidden = !desktopHidden;
        try { localStorage.setItem(preferenceKey, String(desktopHidden)); } catch {}
      }
      update();
    } else if (mobileOpen && event.target.closest('#sidebar a') &&
      !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      mobileOpen = false;
      update();
    }
  });

  app.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !mobileOpen || !event.target.closest('#sidebar, .sidebar-toggle')) return;
    mobileOpen = false;
    update();
  });

  narrow.addEventListener('change', () => {
    mobileOpen = false;
    update();
  });
  window.addEventListener('storage', event => {
    if (event.key !== preferenceKey && event.key !== null) return;
    desktopHidden = event.newValue === 'true';
    update();
  });

  return update;
}
