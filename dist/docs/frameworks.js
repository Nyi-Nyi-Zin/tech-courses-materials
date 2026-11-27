import { p, part, page, guide } from './content.js';

const react = guide('react', 'React', '19.3',
  p('Build interfaces with components, props, state, and effects.', 'Components၊ Props၊ State နဲ့ Effects သုံးပြီး interface တည်ဆောက်ပါ။'),
  [
    page('components', p('Components, JSX, and props', 'Components၊ JSX နှင့် Props'),
      p('A component is a reusable piece of UI. A function component returns JSX and receives one props object.', 'Component က ပြန်သုံးလို့ရတဲ့ UI အပိုင်းတစ်ခုပါ။ Function component က props object တစ်ခု လက်ခံပြီး JSX ပြန်ပါတယ်။'),
      [
        part('jsx', p('Compose components', 'Components ပေါင်းစပ်ခြင်း'),
          p('Start a component name with a capital letter. JSX lets you write elements close to their display logic. Use braces for JavaScript expressions and close every tag. Parents pass props to children.', 'Component နာမည်ကို စာလုံးအကြီးနဲ့ စပါ။ JSX က elements တွေကို display logic နားမှာ ရေးနိုင်စေပါတယ်။ JavaScript expressions အတွက် braces သုံးပြီး tag တိုင်း ပိတ်ပါ။ Parent က child ဆီ props ပို့ပါတယ်။'),
          `function ProductCard({ name, available }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{available ? "Available" : "Sold out"}</p>
    </article>
  );
}

export default function Catalog() {
  return <ProductCard name="Pen" available={true} />;
}`),
        part('root', p('Mount a client-side app', 'Client-side App ကို Mount လုပ်ခြင်း'),
          p('In a project with JSX support, install matching react and react-dom versions. Put a div with id="root" in your HTML. In your entry file, use createRoot once to render the exported Catalog component.', 'JSX support ပါတဲ့ project မှာ react နဲ့ react-dom version တူတူ ထည့်ပါ။ HTML မှာ id="root" ပါတဲ့ div ထည့်ပါ။ Entry file မှာ export လုပ်ထားတဲ့ Catalog component ကို createRoot နဲ့ တစ်ကြိမ် render လုပ်ပါ။'),
          `import { createRoot } from "react-dom/client";
import Catalog from "./Catalog.jsx";

const container = document.getElementById("root");
createRoot(container).render(<Catalog />);`),
        part('lists', p('Use stable keys in lists', 'List တွေမှာ Stable Keys သုံးခြင်း'),
          p('Use map to turn data into elements. Give each sibling a stable key from the data, such as an ID. Keys help React match items when rows move, appear, or disappear.', 'Data ကို elements အဖြစ် ပြောင်းဖို့ map သုံးပါ။ Sibling တစ်ခုချင်းစီကို ID လို data ထဲက stable key ပေးပါ။ Row တွေ ရွှေ့၊ ထည့်၊ ဖယ်တဲ့အခါ React က item တွေ ပြန်ချိတ်နိုင်ပါတယ်။'), `const products = [
  { id: 101, name: "Notebook" },
  { id: 102, name: "Pencil" },
];

export default function ProductList() {
  return (
    <ul>
      {products.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>
  );
}`),
      ],
      [['React version and releases', 'https://react.dev/versions'], ['React quick start', 'https://react.dev/learn'], ['Rendering lists', 'https://react.dev/learn/rendering-lists'], ['createRoot', 'https://react.dev/reference/react-dom/client/createRoot']]),
    page('state', p('State, events, and forms', 'State၊ Events နှင့် Forms'),
      p('State holds values that affect the component’s output. Set state from event handlers to update the UI.', 'State က component ရဲ့ output ကို ပြောင်းစေတဲ့ values တွေကို သိမ်းပါတယ်။ Event handlers ကနေ state ပြောင်းပြီး UI ကို update လုပ်ပါ။'),
      [
        part('updater', p('Update from previous state', 'အရင် State ကနေ တွက်ပြီး ပြောင်းခြင်း'),
          p('Call Hooks at the top level of a component or custom Hook. When the next value depends on the previous value, pass an updater function. For objects and arrays, build a new value and pass it to the setter.', 'Hooks ကို component သို့ custom Hook ရဲ့ top level မှာ ခေါ်ပါ။ နောက်တန်ဖိုးက အရင်တန်ဖိုးပေါ် မူတည်ရင် updater function ပေးပါ။ Object နဲ့ array အတွက် value အသစ် ဆောက်ပြီး setter ဆီ ပေးပါ။'),
          `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(value => value + 1)}>{count}</button>;
}`),
        part('input', p('Keep an input in sync', 'Input နဲ့ State ကိုက်ညီအောင် ထားခြင်း'),
          p('A controlled text input gets its value from state and updates it in onChange. Start with an empty string if there is no value. In a form handler, call preventDefault when you intend to handle submission in JavaScript.', 'Controlled text input က state ကနေ value ယူပြီး onChange မှာ ပြောင်းပါတယ်။ မူလတန်ဖိုး မရှိရင် string အလွတ်နဲ့ စပါ။ Form submit ကို JavaScript မှာ ကိုင်မယ်ဆို handler ထဲမှာ preventDefault ခေါ်ပါ။'), `import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Find a product
        <input value={query} onChange={event => setQuery(event.target.value)} />
      </label>
      <p>Search term: {query}</p>
    </form>
  );
}`),
      ],
      [['useState', 'https://react.dev/reference/react/useState'], ['Rules of Hooks', 'https://react.dev/reference/rules/rules-of-hooks'], ['Input reference', 'https://react.dev/reference/react-dom/components/input']]),
    page('effects', p('Effects and synchronization', 'Effects နှင့် Synchronization'),
      p('Use an effect to keep something outside React in sync, such as a browser API, connection, or third-party widget.', 'Browser API၊ connection သို့ widget လို React အပြင်က system ကို ကိုက်ညီအောင် effect သုံးပါ။'),
      [
        part('cleanup', p('Set up and clean up a listener', 'Listener ချိတ်ပြီး ပြန်ဖြုတ်ခြင်း'),
          p('Dependencies tell React when the effect needs to run again. Return cleanup for subscriptions you set up. In development, Strict Mode can run an extra setup and cleanup cycle to help reveal bugs.', 'Dependencies က effect ဘယ်အချိန် ပြန် run မလဲ ပြောပေးပါတယ်။ Subscription ချိတ်ထားရင် cleanup ပြန်ပါ။ Development မှာ Strict Mode က bugs ရှာဖို့ setup နဲ့ cleanup တစ်ကြိမ်ပို လုပ်နိုင်ပါတယ်။'),
          `import { useEffect } from "react";

export function ResizeLogger() {
  useEffect(() => {
    const logWidth = () => console.log(window.innerWidth);
    window.addEventListener("resize", logWidth);
    return () => window.removeEventListener("resize", logWidth);
  }, []);

  return null;
}`),
        part('derived', p('Calculate derived values during render', 'Derived Values ကို Render အချိန် တွက်ခြင်း'),
          p('A filtered list can often be calculated from current props and state during render. Keep work caused by a specific click inside the event handler. Reserve effects for synchronization that comes from the component being displayed.', 'Filtered list ကို render အချိန် လက်ရှိ props နဲ့ state ကနေ တွက်နိုင်ပါတယ်။ Click တစ်ခုကြောင့် လုပ်ရမယ့်အလုပ်ကို event handler ထဲ ထားပါ။ Component ပေါ်နေတာကြောင့် အပြင်ဘက် system နဲ့ ကိုက်ညီအောင် လုပ်ဖို့ effect သုံးပါ။'), `import { useState } from "react";

const products = ["Notebook", "Pencil", "Backpack"];

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const visibleProducts = products.filter(product =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <label>
        Filter products
        <input value={query} onChange={event => setQuery(event.target.value)} />
      </label>
      <ul>{visibleProducts.map(product => <li key={product}>{product}</li>)}</ul>
    </>
  );
}`),
      ],
      [['Synchronizing with effects', 'https://react.dev/learn/synchronizing-with-effects'], ['When to skip an effect', 'https://react.dev/learn/you-might-not-need-an-effect'], ['useEffect reference', 'https://react.dev/reference/react/useEffect']]),
  ]);

const nest = guide('nestjs', 'NestJS', '12.6.0',
  p('Build Node.js APIs with controllers, providers, modules, validation, and tests.', 'Controllers၊ Providers၊ Modules၊ Validation နဲ့ Tests သုံးပြီး Node.js API တည်ဆောက်ပါ။'),
  [
    page('setup', p('Set up an app and serve a route', 'App စပြီး Route တစ်ခု ရေးခြင်း'),
      p('NestJS organizes a Node.js server into modules, controllers, and providers. This guide uses NestJS 12.6.0.', 'NestJS က Node.js server ကို modules၊ controllers နဲ့ providers အဖြစ် စီပေးပါတယ်။ ဒီ guide က NestJS 12.6.0 ကို သုံးပါတယ်။'),
      [
        part('cli', p('Create a project with the CLI', 'CLI နဲ့ Project တည်ဆောက်ခြင်း'),
          p('Use the Node.js version recommended in the official first-steps guide. The CLI generators require Node.js 22.22.3+ on 22.x, 24.15+ on 24.x, or 26+. The first-steps guide lists the app runtime requirements separately.', 'Official first-steps guide မှာ အကြံပြုထားတဲ့ Node.js version သုံးပါ။ CLI generators အတွက် 22.x မှာ 22.22.3+၊ 24.x မှာ 24.15+၊ သို့ 26+ လိုပါတယ်။ App runtime လိုအပ်ချက်တွေကို first-steps guide မှာ သီးသန့် ကြည့်နိုင်ပါတယ်။'),
          `node --version
npm install -g @nestjs/cli
nest new catalog-api --strict
cd catalog-api
npm run start:dev`),
        part('route', p('Match a controller route', 'Controller Route သတ်မှတ်ခြင်း'),
          p('The controller prefix and method path combine. Register the controller in a module. When the example controller is registered, GET /catalog/featured returns the object as JSON.', 'Controller prefix နဲ့ method path ပေါင်းပြီး route ဖြစ်ပါတယ်။ Controller ကို module မှာ register လုပ်ပါ။ ဒီဥပမာကို register လုပ်ထားရင် GET /catalog/featured က object ကို JSON အဖြစ် ပြန်ပေးပါတယ်။'),
          `import { Controller, Get, Module } from "@nestjs/common";

@Controller("catalog")
class CatalogController {
  @Get("featured")
  featured() {
    return { name: "Pen" };
  }
}

@Module({ controllers: [CatalogController] })
export class AppModule {}`),
      ],
      [['NestJS 12.6.0 release', 'https://github.com/nestjs/nest/releases/tag/v12.6.0'], ['First steps and Node.js requirements', 'https://docs.nestjs.com/first-steps'], ['Controllers', 'https://docs.nestjs.com/controllers']]),
    page('providers', p('Providers, modules, and dependency injection', 'Providers၊ Modules နှင့် Dependency Injection'),
      p('Put reusable behavior in a provider. A module registers the providers and controllers that belong to a feature.', 'ပြန်သုံးမယ့် logic ကို provider ထဲ ထားပါ။ Module က feature နဲ့ဆိုင်တဲ့ providers နဲ့ controllers ကို register လုပ်ပေးပါတယ်။'),
      [
        part('service', p('Inject a service into a controller', 'Controller ထဲ Service Inject လုပ်ခြင်း'),
          p('Mark the service with Injectable and register it under providers. A controller can ask for that service in its constructor. Nest resolves the dependency when it creates the controller.', 'Service မှာ Injectable ထည့်ပြီး providers ထဲ register လုပ်ပါ။ Controller က constructor မှာ အဲဒီ service ကို တောင်းနိုင်ပါတယ်။ Nest က controller ဆောက်တဲ့အခါ dependency ကို ထည့်ပေးပါတယ်။'),
          `import { Controller, Get, Injectable, Module } from "@nestjs/common";

@Injectable()
class CatalogService {
  list() {
    return ["Pen", "Notebook"];
  }
}

@Controller("catalog")
class CatalogController {
  constructor(private readonly catalog: CatalogService) {}

  @Get()
  list() {
    return this.catalog.list();
  }
}

@Module({ controllers: [CatalogController], providers: [CatalogService] })
export class CatalogModule {}`),
        part('visibility', p('Share providers between modules', 'Modules ကြား Providers မျှဝေခြင်း'),
          p('By default, a provider belongs to its module. Export a provider from its module and import that module where the provider is needed. Register a feature module in the root module’s imports to include it in the app.', 'ပုံမှန်အားဖြင့် provider က သူ့ module ထဲမှာ သုံးပါတယ်။ တခြား module ကနေ သုံးဖို့ provider ကို export လုပ်ပြီး လိုတဲ့ module မှာ အဲဒီ module ကို import လုပ်ပါ။ App ထဲ ပါစေချင်တဲ့ feature module ကို root module ရဲ့ imports မှာ ထည့်ပါ။'), `import { Module } from "@nestjs/common";
import { CatalogService } from "./catalog.service";
import { OrdersController } from "./orders.controller";

@Module({ providers: [CatalogService], exports: [CatalogService] })
class CatalogModule {}

@Module({ imports: [CatalogModule], controllers: [OrdersController] })
class OrdersModule {}

@Module({ imports: [OrdersModule] })
export class AppModule {}`),
      ],
      [['Providers', 'https://docs.nestjs.com/providers'], ['Modules', 'https://docs.nestjs.com/modules']]),
    page('validation', p('Validate requests and test routes', 'Requests Validate လုပ်ပြီး Routes စမ်းခြင်း'),
      p('Validate inputs at the API boundary. Return a clear HTTP status for invalid input and missing records.', 'API ဝင်ပေါက်မှာ inputs တွေကို စစ်ပါ။ Input မမှန်ရင်၊ record မရှိရင် သင့်တော်တဲ့ HTTP status ပြန်ပါ။'),
      [
        part('pipes', p('Use a DTO with a validation pipe', 'DTO နဲ့ Validation Pipe သုံးခြင်း'),
          p('Install class-validator and class-transformer for ValidationPipe. Create DTOs as classes and add validation decorators. With whitelist enabled, properties without validation decorators are removed. Add forbidNonWhitelisted to reject those properties instead.', 'ValidationPipe အတွက် class-validator နဲ့ class-transformer ထည့်ပါ။ DTO ကို class နဲ့ရေးပြီး validation decorators ထည့်ပါ။ whitelist ဖွင့်ရင် validation decorator မပါတဲ့ properties ကို ဖယ်ပါတယ်။ အဲဒါတွေကို ငြင်းဖို့ forbidNonWhitelisted ပေါင်းပါ။'),
          `import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { IsInt, IsNotEmpty, IsString, Min } from "class-validator";

class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  item!: string;

  @IsInt()
  @Min(1)
  quantity!: number;
}

@Controller("orders")
export class OrdersController {
  @Post()
  create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    input: CreateOrderDto) {
    return input;
  }
}`),
        part('testing', p('Check both valid and invalid requests', 'မှန်တဲ့ Requests နဲ့ မှားတဲ့ Requests နှစ်မျိုး စစ်ခြင်း'),
          p('Test service logic in isolation. Use an end-to-end test for the HTTP route to verify request parsing, validation, status, and response together. Cover a valid body and an invalid body, such as quantity 0.', 'Service logic ကို သီးသန့်စမ်းပါ။ HTTP route ကို end-to-end test နဲ့ စမ်းပြီး request parsing၊ validation၊ status နဲ့ response ကို တွဲစစ်ပါ။ မှန်တဲ့ body နဲ့ quantity 0 လို မမှန်တဲ့ body နှစ်မျိုးလုံး စမ်းပါ။'), `// In the end-to-end suite with the Nest application started.
import request from "supertest";

it("accepts an order with a positive quantity", async () => {
  const order = { item: "Notebook", quantity: 2 };
  await request(app.getHttpServer()).post("/orders").send(order).expect(201, order);
});

it("rejects an order with quantity zero", async () => {
  await request(app.getHttpServer())
    .post("/orders")
    .send({ item: "Notebook", quantity: 0 })
    .expect(400);
});`),
      ],
      [['Validation', 'https://docs.nestjs.com/techniques/validation'], ['Exception filters', 'https://docs.nestjs.com/exception-filters'], ['Testing', 'https://docs.nestjs.com/fundamentals/testing']]),
  ]);

export const frameworkGuides = [react, nest];
