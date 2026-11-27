const labels = {
  en: { preview: 'Image preview', close: 'Close', loading: 'Loading image…', failed: 'The image could not load.', open: 'Open image file' },
  my: { preview: 'ပုံအကြီး ကြည့်ရန်', close: 'ပိတ်ရန်', loading: 'ပုံ ဖွင့်နေပါတယ်…', failed: 'ပုံ ဖွင့်မရပါ။', open: 'ပုံဖိုင် ဖွင့်ရန်' },
};

let dialog;
let sourceLink;

function createPreview() {
  const dialog = document.createElement('dialog');
  dialog.className = 'image-preview';
  dialog.innerHTML = '<form method="dialog"><button type="submit" autofocus></button></form>' +
    '<p class="image-preview-status loading-status" role="status" hidden></p><div class="image-preview-body"></div>';
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const { left, top, right, bottom } = dialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      dialog.close();
    }
  });
  dialog.addEventListener('close', () => {
    if (sourceLink?.isConnected) sourceLink.focus({ preventScroll: true });
    sourceLink = null;
  });
  document.body.append(dialog);
  return dialog;
}

document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('[data-image-preview]');
  if (!link || typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;
  event.preventDefault();

  dialog ??= createPreview();
  sourceLink = link;
  const text = labels[document.documentElement.lang] ?? labels.en;
  dialog.setAttribute('aria-label', text.preview);
  dialog.querySelector('button').textContent = text.close;

  const status = dialog.querySelector('.image-preview-status');
  const body = dialog.querySelector('.image-preview-body');
  const image = document.createElement('img');
  image.alt = link.querySelector('img').alt;
  image.hidden = true;
  body.replaceChildren(image);

  status.classList.add('loading-status');
  status.textContent = text.loading;
  status.hidden = false;
  image.addEventListener('load', () => {
    if (body.firstChild !== image) return;
    status.hidden = true;
    image.hidden = false;
  }, { once: true });
  image.addEventListener('error', () => {
    if (body.firstChild !== image) return;
    status.classList.remove('loading-status');
    status.textContent = text.failed;
    const fallback = document.createElement('a');
    fallback.href = link.href;
    fallback.target = '_blank';
    fallback.rel = 'noopener';
    fallback.textContent = text.open;
    body.replaceChildren(fallback);
  }, { once: true });
  image.src = link.href;
  dialog.showModal();
});
