/* global ts */
importScripts('./vendor/typescript.js');

let library;
function message(diagnostic) {
  const text = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
  if (!diagnostic.file || diagnostic.start == null) return text;
  if (diagnostic.file.fileName === '/expect.ts') return 'Type check: ' + text;
  const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
  return 'Line ' + (line + 1) + ':' + (character + 1) + ' ' + text;
}

async function compile({ code, runtime, probe }) {
  const options = {
    target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS,
    jsx: ts.JsxEmit.React, experimentalDecorators: true, strict: true,
  };
  if (runtime !== 'typescript') {
    const result = ts.transpileModule(code, {
      compilerOptions: options, reportDiagnostics: true,
      fileName: runtime === 'react' ? 'App.jsx' : 'app.ts',
    });
    return { code: result.outputText, diagnostics: result.diagnostics.map(message) };
  }

  library ??= fetch('./vendor/typescript-lib.d.ts').then(response => {
    if (!response.ok) throw new Error('Could not load the TypeScript standard library.');
    return response.text();
  });
  const files = new Map([['/lesson.ts', code], ['/lib.d.ts', await library]]);
  if (probe) files.set('/expect.ts', probe);
  let output = '';
  const host = {
    getSourceFile(name, version) {
      return files.has(name) ? ts.createSourceFile(name, files.get(name), version, true) : undefined;
    },
    getDefaultLibFileName: () => '/lib.d.ts',
    getCurrentDirectory: () => '/',
    getDirectories: () => [],
    fileExists: name => files.has(name),
    readFile: name => files.get(name),
    getCanonicalFileName: name => name,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => '\n',
    writeFile(name, content) { if (name === '/lesson.js') output = content; },
  };
  const program = ts.createProgram(probe ? ['/lesson.ts', '/expect.ts'] : ['/lesson.ts'], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program).map(message);
  if (diagnostics.length === 0) program.emit(program.getSourceFile('/lesson.ts'));
  return { code: output, diagnostics };
}

self.onmessage = async ({ data }) => {
  try { self.postMessage(await compile(data)); }
  catch (error) { self.postMessage({ error: error.message }); }
};
