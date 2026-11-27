const messages = {
  my: {
    preparing: 'Python နမူနာကို စမ်းလို့ရအောင် ပြင်ဆင်နေပါတယ်…',
    queued: 'ပြင်ဆင်ပြီးတာနဲ့ နမူနာကို စမ်းပေးပါမယ်…',
    running: 'ကုဒ်ကို စမ်းနေပါတယ်…',
    done: 'စမ်းသပ်ပြီးပါပြီ။',
    blank: 'ကုဒ် အလုပ်လုပ်ပြီးပါပြီ။ ရလဒ်ကို ပြချင်ရင် print() သုံးပါ။',
    error: 'ကုဒ်ကို စမ်းရာမှာ အမှားတစ်ခု ဖြစ်သွားပါတယ်။',
    startupError: 'Python ပြင်ဆင်လို့ မရသေးပါ။ Run Python ကို ထပ်နှိပ်ပြီး စမ်းကြည့်ပါ။',
    stopped: 'ရပ်လိုက်ပါပြီ။',
  },
  en: {
    preparing: 'Preparing Python for the example…',
    queued: 'The example will run when Python is ready…',
    running: 'Running…',
    done: 'Run complete.',
    blank: 'Run complete. Use print() to display output.',
    error: 'The code could not run.',
    startupError: 'Python could not start. Select Run Python to try again.',
    stopped: 'Run stopped.',
  },
};

let runtime;
let active;

function disposeRuntime(session, reason) {
  if (runtime !== session) return;
  clearTimeout(session.timeout);
  session.worker.terminate();
  runtime = undefined;
  session.reject(reason);
  active?.fail();
}

function getRuntime() {
  if (runtime) return runtime;
  const worker = new Worker('/docs/pandas-runner-worker.js?v=4', { type: 'module' });
  const session = { worker, ready: false };
  session.initialized = new Promise((resolve, reject) => {
    session.resolve = resolve;
    session.reject = reject;
  });
  runtime = session;
  worker.addEventListener('message', ({ data }) => {
    if (runtime !== session) return;
    if (data.type === 'ready') {
      clearTimeout(session.timeout);
      session.ready = true;
      session.resolve();
    } else if (data.type === 'startup-error') {
      disposeRuntime(session, new Error(data.message));
    } else {
      active?.report(data);
    }
  });
  worker.addEventListener('error', event => disposeRuntime(session, new Error(event.message)));
  session.timeout = setTimeout(() => disposeRuntime(session, new Error('Python did not start in time.')), 90000);
  worker.postMessage({ action: 'prepare' });
  return session;
}

export async function prewarmPandas() {
  await getRuntime().initialized;
}

export function bindPandasRunner(root, language) {
  const runner = root.querySelector('[data-pandas-runner]');
  if (!runner) return () => {};
  const editor = runner.querySelector('textarea');
  const output = runner.querySelector('pre');
  const run = runner.querySelector('[data-run]');
  const stop = runner.querySelector('[data-stop]');
  const reset = runner.querySelector('[data-reset]');
  const status = runner.querySelector('[role="status"]');
  const original = editor.value;
  const copy = messages[language];
  let mounted = true;
  let job;

  function finish(message) {
    clearTimeout(job?.timeout);
    if (active === job) active = undefined;
    job = undefined;
    status.textContent = message;
    run.disabled = false;
    stop.disabled = true;
  }

  function cancel(message) {
    const pending = job;
    finish(message);
    if (pending?.started) disposeRuntime(pending.session, new Error('Run stopped.'));
  }

  function report({ type, message }) {
    switch (type) {
      case 'output':
        output.textContent += (message + '\n').slice(0, Math.max(0, 24000 - output.textContent.length));
        break;
      case 'done':
        finish(output.textContent ? copy.done : copy.blank);
        break;
      case 'error':
        output.textContent += message;
        finish(copy.error);
        break;
    }
  }

  run.disabled = false;
  reset.disabled = false;
  if (!runtime?.ready) {
    status.textContent = copy.preparing;
    prewarmPandas().then(() => {
      if (mounted && !job && status.textContent === copy.preparing) status.textContent = '';
    }, () => {
      if (mounted && !job && status.textContent === copy.preparing) status.textContent = copy.startupError;
    });
  }

  run.addEventListener('click', async () => {
    const request = { code: editor.value, report, fail: () => finish(copy.error) };
    job = request;
    output.textContent = '';
    run.disabled = true;
    stop.disabled = false;
    try {
      const session = getRuntime();
      request.session = session;
      if (!session.ready) {
        status.textContent = copy.queued;
        await session.initialized;
        if (job !== request) return;
      }
      status.textContent = copy.running;
      active = request;
      request.started = true;
      request.timeout = setTimeout(() => cancel(copy.stopped), 90000);
      session.worker.postMessage({ action: 'run', code: request.code });
    } catch (error) {
      if (job !== request) return;
      output.textContent = error.message;
      finish(request.started ? copy.error : copy.startupError);
    }
  });

  stop.addEventListener('click', () => cancel(copy.stopped));
  reset.addEventListener('click', () => {
    editor.value = original;
    output.textContent = '';
    cancel('');
  });

  return () => {
    mounted = false;
    if (job) cancel('');
  };
}
