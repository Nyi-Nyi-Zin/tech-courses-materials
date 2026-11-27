// The adapters provide the files, fixtures, or calls otherwise supplied by the lesson setup.
const browser = 'browser';
const sql = 'sql';
const project = 'project';
const terminal = 'terminal';

export function exampleMode(guide, page, section) {
  const topic = page + '/' + section;
  switch (guide) {
    case 'html': case 'css': case 'js': return browser;
    case 'typescript':
      if (topic === 'setup/install') return terminal;
      if (page === 'modules' || page === 'declaration-files') return project;
      return 'typescript';
    case 'database':
      if (['install', 'psql-commands', 'crud', 'roles-and-ownership', 'backup-and-restore'].includes(page) ||
        (page === 'setup' && section !== 'schema') ||
        (page === 'transaction-isolation' && section !== 'stock')) return terminal;
      return sql;
    case 'react':
      if (topic === 'component-testing/tools') return terminal;
      if (['routing', 'suspense', 'component-testing'].includes(page)) return project;
      return 'react';
    case 'nestjs':
      if (topic === 'setup/cli') return terminal;
      if (['setup/route', 'providers/service', 'request-lifecycle/pipe'].includes(topic)) return 'nest';
      return project;
    default: return project;
  }
}

export function sqlExample(topic, code) {
  if (topic === 'database/setup/schema') {
    const preview = 'SELECT * FROM students ORDER BY id;\nSELECT * FROM courses ORDER BY id;\nSELECT * FROM enrollments ORDER BY student_id, course_id;';
    return { sql: code + '\n\n' + preview, checks: [], dataset: 'empty' };
  }
  const dataset = topic === 'database/transaction-isolation/stock' ? 'school-seats' : 'school';
  return { sql: code, checks: [], dataset };
}

const typeCalls = {
  'typescript/setup/strict': 'console.log(amount);',
  'typescript/types/objects': 'console.log(displayName({ name: "Pen", price: 2 }));',
  'typescript/types/narrow': 'console.log(describe({ ok: true, total: 6 }));\nconsole.log(describe({ ok: false, message: "Try again" }));',
  'typescript/generics/type-param': 'console.log(firstProduct);',
  'typescript/generics/promise': 'positivePrices(async () => [-2, 0, 5]).then(console.log);',
  'typescript/function-contracts/callback': 'console.log(salePrice);',
  'typescript/type-tools/keyof': 'console.log(price);',
  'typescript/mapped-types/keys': 'console.log(update);',
};

export function typeExample(topic, code) {
  const prefix = topic === 'typescript/mapped-types/remap' ? 'type Product = { name: string; quantity: number };\n' : '';
  const suffix = typeCalls[topic];
  return prefix + code + (suffix ? '\n\n' + suffix : '');
}

export function frameworkExample(topic, code, sections) {
  switch (topic) {
    case 'react/components/root':
      return sections.jsx.replace('export default function Catalog', 'function Catalog') + '\n' +
        code.replace(/^\s*import Catalog from .*;\n/m, '');
    case 'react/effects/cleanup':
      return code + '\nexport default function App() {\n' +
        '  return <><ResizeLogger /><button onClick={() => window.dispatchEvent(new Event("resize"))}>Dispatch a resize event</button></>;\n}';
    case 'react/context-and-reducers/reducer':
      return 'import { useReducer } from "react";\n' + code + '\nexport default function App() {\n' +
        '  const [cart, dispatch] = useReducer(cartReducer, { units: 0 });\n' +
        '  return <button onClick={() => dispatch({ type: "added" })}>Units: {cart.units}</button>;\n}';
    case 'react/custom-hooks/online':
      return code + '\nexport default function App() { return <p>{useOnlineStatus() ? "Online" : "Offline"}</p>; }';
    case 'react/error-boundaries/boundary':
      return code.replace('export default SectionBoundary;', '') + '\n' +
        'function BrokenPanel() { throw new Error("Sample rendering error"); }\n' +
        'export default function App() { return <SectionBoundary><BrokenPanel /></SectionBoundary>; }';
    case 'react/error-boundaries/recover':
      return sections.boundary.replace('export default SectionBoundary;', '') + '\n' +
        'function StockPanel({ productId }) { if (productId === 1) throw new Error("Stock unavailable"); return <p>Pen is in stock.</p>; }\n' +
        'export default function App() {\n  const [productId, selectProduct] = React.useState(1);\n  return <><button onClick={() => selectProduct(2)}>Try product 2</button>' + code + '</>;\n}';
    case 'nestjs/providers/service':
      return code.replace('Controller, Get, Injectable', 'Controller, Get, Inject, Injectable')
        .replace('constructor(private readonly catalog: CatalogService)', 'constructor(@Inject(CatalogService) private readonly catalog: CatalogService)')
        .replace('export class CatalogModule', 'export class AppModule');
    case 'nestjs/request-lifecycle/pipe':
      return code.replace('Controller, Get, Param', 'Controller, Get, Module, Param') +
        '\n@Module({ controllers: [ProductsController] })\nexport class AppModule {}';
    default: return code;
  }
}

export const nestRequests = {
  'nestjs/setup/route': [['GET', '/catalog/featured']],
  'nestjs/providers/service': [['GET', '/catalog']],
  'nestjs/request-lifecycle/pipe': [['GET', '/products/42'], ['GET', '/products/pen']],
};
