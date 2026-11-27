const indexURL = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/';
const pandasWheel = 'https://files.pythonhosted.org/packages/37/39/46c0cc0c270e084af94f112f958c338c3ef067be38d2cfa34fe7a7c8f110/pandas-3.1.1-cp312-cp312-pyemscripten_2024_0_wasm32.whl';

let runtime;

const bundled = new Set(['pyarrow', 'scipy', 'matplotlib', 'lxml', 'pytest', 'sqlite3']);
const purePython = {
  jinja2: 'jinja2==3.1.6',
  openpyxl: 'openpyxl==3.1.5',
  sqlalchemy: 'sqlalchemy==2.0.48',
  tabulate: 'tabulate==0.9.0',
  xarray: 'xarray==2025.7.1',
};

async function start() {
  const { loadPyodide } = await import(indexURL + 'pyodide.mjs');
  const python = await loadPyodide({ indexURL });
  await python.loadPackage(['numpy', 'python-dateutil', 'tzdata', 'micropip']);
  await python.loadPackage(pandasWheel);
  await python.runPythonAsync('import pandas as pd\nassert pd.__version__ == "3.1.1", pd.__version__');
  return python;
}

self.onmessage = async ({ data: { action, code } }) => {
  try {
    runtime ??= start();
    const python = await runtime;
    if (action === 'prepare') {
      self.postMessage({ type: 'ready' });
      return;
    }
    python.setStdout({ batched: () => {} });
    python.setStderr({ batched: () => {} });
    const output = (message) => self.postMessage({ type: 'output', message });
    // Resolve the requested optional imports without asking Pyodide to
    // install its bundled version of pandas.
    const codeModule = python.pyimport('pyodide.code');
    const findImports = codeModule.find_imports;
    const packages = findImports(code);
    let imports;
    try {
      imports = packages.toJs();
    } finally {
      packages.destroy();
      findImports.destroy();
      codeModule.destroy();
    }
    const packagesAvailable = imports.filter(name => bundled.has(name));
    if (imports.includes('jinja2')) packagesAvailable.push('markupsafe');
    if (imports.includes('sqlalchemy') && !packagesAvailable.includes('sqlite3')) packagesAvailable.push('sqlite3');
    if (packagesAvailable.length) await python.loadPackage(packagesAvailable);
    const packagesToInstall = imports.filter(name => purePython[name]).map(name => purePython[name]);
    if (packagesToInstall.length) {
      const micropip = python.pyimport('micropip');
      try {
        await micropip.install(packagesToInstall);
      } finally {
        micropip.destroy();
      }
    }
    python.setStdout({ batched: output });
    python.setStderr({ batched: output });
    const globals = python.runPython('dict(__name__="__main__")');
    try {
      const result = await python.runPythonAsync(code, { globals });
      if (result !== undefined) output(String(result));
      result?.destroy?.();
    } finally {
      globals.destroy();
    }
    self.postMessage({ type: 'done' });
  } catch (error) {
    self.postMessage({ type: action === 'prepare' ? 'startup-error' : 'error', message: error.message });
  }
};
