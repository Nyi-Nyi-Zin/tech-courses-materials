// Implements the NestJS decorator and request features used in the lessons.
export function nestPractice() {
  const modules = new WeakMap();
  const controllers = new WeakMap();
  const routes = new WeakMap();
  const parameters = new WeakMap();
  const dependencies = new WeakMap();
  const segments = (...paths) => paths.join('/').split('/').filter(Boolean);
  const method = verb => (path = '') => (target, name) => {
    const list = routes.get(target) ?? [];
    list.push({ verb, path, name });
    routes.set(target, list);
  };
  const param = read => (target, name, index) => {
    const methods = parameters.get(target) ?? new Map();
    const args = methods.get(name) ?? [];
    args[index] = read;
    methods.set(name, args);
    parameters.set(target, methods);
  };
  const exception = (status, fallback) => class extends Error {
    constructor(message = fallback) { super(message); this.status = status; }
  };
  const core = {
    Module: config => type => { modules.set(type, config); },
    Controller: (prefix = '') => type => { controllers.set(type, prefix); },
    Injectable: () => () => {},
    Inject: token => (type, _key, index) => {
      const args = dependencies.get(type) ?? [];
      args[index] = token;
      dependencies.set(type, args);
    },
    Get: method('GET'),
    Post: method('POST'),
    Param: (name, pipe) => param(({ params }) => {
      const parser = typeof pipe === 'function' ? new pipe() : pipe;
      return parser ? parser.transform(params[name]) : params[name];
    }),
    Body: () => param(({ body }) => body),
    BadRequestException: exception(400, 'Bad Request'),
    NotFoundException: exception(404, 'Not Found'),
  };
  core.ParseIntPipe = class {
    transform(value) {
      if (!/^-?\d+$/.test(value ?? '')) throw new core.BadRequestException('A whole number is required.');
      return Number(value);
    }
  };

  function testApp(root) {
    const handled = new Set();
    const providers = new Set();
    const visited = new Set();
    function collect(type) {
      if (visited.has(type)) return;
      visited.add(type);
      const info = modules.get(type);
      if (!info) throw new Error('Add @Module to register controllers and providers.');
      (info.imports ?? []).forEach(collect);
      (info.providers ?? []).forEach(provider => providers.add(provider));
      (info.controllers ?? []).forEach(controller => handled.add(controller));
    }
    collect(root);
    const instances = new Map();
    function instantiate(type) {
      if (instances.has(type)) return instances.get(type);
      const required = dependencies.get(type) ?? [];
      if (required.length !== type.length || required.some(token => !providers.has(token))) {
        throw new Error('Register the service as a provider and name it with @Inject in this lab.');
      }
      const instance = new type(...required.map(instantiate));
      instances.set(type, instance);
      return instance;
    }
    return async (verb, path, body) => {
      const requested = segments(path);
      for (const controller of handled) {
        if (!controllers.has(controller)) continue;
        for (const route of routes.get(controller.prototype) ?? []) {
          const template = segments(controllers.get(controller), route.path);
          if (route.verb !== verb || template.length !== requested.length ||
              !template.every((part, index) => part.startsWith(':') || part === requested[index])) continue;
          const params = Object.fromEntries(template.flatMap((part, index) =>
            part.startsWith(':') ? [[part.slice(1), decodeURIComponent(requested[index])]] : []));
          try {
            const reads = parameters.get(controller.prototype)?.get(route.name) ?? [];
            const args = reads.map(read => read?.({ params, body }));
            const value = await instantiate(controller)[route.name](...args);
            return { status: verb === 'POST' ? 201 : 200, body: value ?? null };
          } catch (error) {
            if (!error.status) throw error;
            return { status: error.status, body: { message: error.message } };
          }
        }
      }
      return { status: 404, body: { message: 'Route not found.' } };
    };
  }
  return { core, testApp };
}
