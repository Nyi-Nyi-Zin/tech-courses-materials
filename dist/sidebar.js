const preferenceKey = 'frontend-lab-sidebar-hidden';
export const narrowScreenQuery = '(max-width: 780px)';
export const sidebarBackdrop = '<div class="sidebar-backdrop" hidden aria-hidden="true"></div>';

const toggleButton = (icon, classes = 'sidebar-toggle') => `<button class="${classes}" type="button" aria-controls="sidebar">
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon}</svg>
  <span></span>
</button>`;

export const sidebarToggle = toggleButton('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>');
export const sidebarEdgeToggle = toggleButton('<path d="m15 5-7 7 7 7"/>', 'sidebar-toggle sidebar-edge-toggle');

export function attachSidebar(app, translate) {
  const narrow = window.matchMedia(narrowScreenQuery);
  let desktopHidden = false;
  try { desktopHidden = localStorage.getItem(preferenceKey) === 'true'; } catch {}
  let mobileOpen = false;

  function setDesktopHidden(hidden) {
    desktopHidden = hidden;
    try { localStorage.setItem(preferenceKey, String(hidden)); } catch {}
  }

  function focusToggle() {
    const edgeToggle = !narrow.matches && app.querySelector('.sidebar-edge-toggle');
    (edgeToggle || app.querySelector('.sidebar-toggle')).focus({ preventScroll: true });
  }

  function update() {
    const sidebar = app.querySelector('#sidebar');
    const drawerOpen = narrow.matches && mobileOpen;
    const open = narrow.matches ? mobileOpen : !desktopHidden;
    if (!open && sidebar.contains(document.activeElement)) focusToggle();
    sidebar.hidden = !open;
    app.querySelector('.sidebar-backdrop').hidden = !drawerOpen;
    app.querySelector('main').inert = drawerOpen;
    const label = translate(open ? 'hideSidebar' : 'showSidebar');
    for (const toggle of app.querySelectorAll('.sidebar-toggle')) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', label);
      toggle.title = label;
      toggle.querySelector('span').textContent = label;
    }
    if (drawerOpen && !sidebar.contains(document.activeElement)) {
      const currentLink = sidebar.querySelector('a[aria-current="page"]') ?? sidebar.querySelector('a');
      currentLink?.focus({ preventScroll: true });
    }
  }

  app.addEventListener('click', event => {
    if (event.target.closest('.sidebar-toggle')) {
      if (narrow.matches) {
        mobileOpen = !mobileOpen;
      } else {
        setDesktopHidden(!desktopHidden);
      }
      update();
      return;
    }
    if (mobileOpen && event.target.closest('.sidebar-backdrop')) {
      mobileOpen = false;
      update();
      focusToggle();
      return;
    }
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const category = event.target.closest('a[data-sidebar-category]');
    if (category) {
      if (narrow.matches) mobileOpen = true;
      else if (desktopHidden) setDesktopHidden(false);
      if (category.hash === location.hash) update();
    } else if (mobileOpen && event.target.closest('#sidebar a')) {
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
