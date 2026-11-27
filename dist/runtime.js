export function readMedia() {
  return Promise.all(['lesson.ogg', 'lesson.webm', 'lesson-en.vtt'].map(async name => {
    const response = await fetch(new URL('./media/' + name, import.meta.url));
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
export function loadReact() {
  reactBundle ??= fetch(new URL('./vendor/react.js', import.meta.url)).then(response => {
    if (!response.ok) throw new Error('Could not load the React runtime.');
    return response.text();
  }).catch(error => {
    reactBundle = undefined;
    throw error;
  });
  return reactBundle;
}

export function runWorker(file, options, data, signal) {
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
