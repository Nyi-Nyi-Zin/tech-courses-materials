import { p, page, part } from './content.js';

export const advancedFrameworks = {
  react: [
    page('routing', p('Routing with React Router', 'React Router နဲ့ Routing'), p(
      'Map URLs to screens. Give each important screen an address that people can bookmark or share.',
      'URL တစ်ခုစီမှာ ဘယ် screen ပြမလဲ သတ်မှတ်ပါ။ အရေးကြီးတဲ့ screen တိုင်းကို bookmark လုပ်လို့ရ၊ share လို့ရတဲ့ URL ပေးပါ။',
    ), [
      part('routes', p('Add links and routes', 'Links နဲ့ Routes ထည့်ပါ'), p(
        'Install react-router and wrap your route tree in BrowserRouter. Routes selects the matching route. NavLink shows which link is active. A path such as /products/:id captures the product ID for useParams.',
        'react-router ကို install လုပ်ပြီး route tree ကို BrowserRouter နဲ့ wrap လုပ်ပါ။ Routes က ကိုက်ညီတဲ့ route ရွေးပြီး NavLink က လက်ရှိ active link ကို သိစေပါတယ်။ /products/:id လို path က product ID ကို useParams နဲ့ ယူလို့ရစေပါတယ်။',
      ), `import React from "react";
import { BrowserRouter, NavLink, Route, Routes, useParams } from "react-router";

function Product() {
  const { id } = useParams();
  return <h1>Product {id}</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>{" "}
        <NavLink to="/products/42">Tea</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Inventory</h1>} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}`),
      part('refresh', p('Serve direct page requests', 'Page URL ကို တိုက်ရိုက် ဖွင့်လို့ရအောင် လုပ်ပါ'), p(
        'When a user reloads /products/42, the request reaches the host first. Configure a single-page app fallback to index.html for client page paths, while keeping API and asset routes separate. Test a link, a direct reload, the Back button, and an unknown URL. A client-side not-found screen does not set the server’s HTTP status.',
        'User က /products/42 ကို reload လုပ်ရင် request က host ဆီ အရင်ရောက်ပါတယ်။ Client page paths တွေအတွက် index.html ကို fallback ပြန်ပေးအောင် သတ်မှတ်ပါ။ API နဲ့ asset routes တွေကို သီးသန့် ဆက်ထားပါ။ Link၊ direct reload၊ Back ခလုတ်နဲ့ မရှိတဲ့ URL ကို စမ်းပါ။ Client ဘက်က not-found screen က server HTTP status မသတ်မှတ်ပေးပါဘူး။',
      )),
    ], [
      ['React Router · Declarative routing', 'https://reactrouter.com/start/declarative/routing'],
      ['React Router · NavLink', 'https://reactrouter.com/api/components/NavLink'],
    ]),
    page('error-boundaries', p('Recover from render errors', 'Render Error ဖြစ်ရင် ပြန်ထိန်းပါ'), p(
      'Put an error boundary around a part of the UI so a render failure can show a clear message in that area.',
      'UI ရဲ့ အပိုင်းတစ်ခုကို error boundary နဲ့ ခြံထားပါ။ Render ပျက်ရင် အဲဒီနေရာမှာ နားလည်လွယ်တဲ့ message ပြနိုင်ပါတယ်။',
    ), [
      part('boundary', p('Render a fallback', 'Fallback UI ပြပါ'), p(
        'A class boundary can turn a render error in a child into fallback UI. Use getDerivedStateFromError to switch what renders. componentDidCatch can report the error and component stack to your logging service.',
        'Class boundary က child render error ကို fallback UI အဖြစ် ပြောင်းပြနိုင်ပါတယ်။ ဘာပြမလဲ ပြောင်းဖို့ getDerivedStateFromError သုံးပါ။ componentDidCatch ကနေ error နဲ့ component stack ကို logging service ဆီ ပို့နိုင်ပါတယ်။',
      ), `import React, { Component } from "react";

class SectionBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed
      ? <p role="alert">This section could not load.</p>
      : this.props.children;
  }
}

export default SectionBoundary;`),
      part('recover', p('Handle other failures at the source', 'တခြား Error တွေကို ဖြစ်တဲ့နေရာမှာ ကိုင်တွယ်ပါ'), p(
        'Handle rejected fetch calls and event handler failures where they occur. A boundary does not catch its own errors or errors from server rendering. Change its key when switching to a different record if you want that record to start with a fresh boundary.',
        'fetch မအောင်တာနဲ့ event handler error တွေကို ဖြစ်တဲ့နေရာမှာ ကိုင်တွယ်ပါ။ Boundary က သူ့ကိုယ်ပိုင် error နဲ့ server rendering error ကို မဖမ်းပါဘူး။ Record ပြောင်းတိုင်း boundary အသစ်နဲ့ စဖို့ key ကို record ID အတိုင်း ပြောင်းပါ။',
      ), `<SectionBoundary key={productId}>
  <StockPanel productId={productId} />
</SectionBoundary>`),
    ], [
      ['React · Catching rendering errors', 'https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary'],
    ]),
    page('suspense', p('Show a loading fallback with Suspense', 'Suspense နဲ့ Loading ပြပါ'), p(
      'Wrap a lazily loaded part of the screen so visitors see a loading message while its code arrives.',
      'လိုအပ်မှ code load မယ့် screen အပိုင်းကို wrap လုပ်ပြီး load လုပ်နေချိန် loading message ပြပါ။',
    ), [
      part('lazy', p('Load a component on demand', 'လိုမှ Component Code ကို Load ပါ'), p(
        'Declare lazy outside the component. The import should resolve to a module with the component as its default export. Suspense shows its fallback while the code loads. A rejected import can be handled by an error boundary around Suspense.',
        'lazy ကို component အပြင်မှာ ကြေညာပါ။ import လုပ်တဲ့ module က component ကို default export ထုတ်ထားရပါမယ်။ Code တက်နေချိန် Suspense က fallback ပြပါတယ်။ Import ပျက်ရင် Suspense ကို wrap လုပ်ထားတဲ့ error boundary နဲ့ ကိုင်တွယ်ပါ။',
      ), `import React, { lazy, Suspense } from "react";
import SectionBoundary from "./SectionBoundary.jsx";

const StockChart = lazy(() => import("./StockChart.jsx"));

export default function Reports() {
  return (
    <SectionBoundary>
      <Suspense fallback={<p role="status">Loading chart…</p>}>
        <StockChart />
      </Suspense>
    </SectionBoundary>
  );
}`),
      part('place', p('Choose which part should wait', 'ဘယ်အပိုင်း Loading ပြမလဲ ရွေးပါ'), p(
        'Put the boundary close to the slow part so the page navigation and headings can stay visible. Suspense works with lazy and supported data sources. For fetch calls started in an effect, keep using an explicit loading and error state.',
        'Loading ကြာတဲ့အပိုင်းနားမှာ boundary ထားပါ။ ဒါဆို navigation နဲ့ headings ဆက်ပေါ်နေပါတယ်။ Suspense က lazy နဲ့ support လုပ်ထားတဲ့ data sources တွေနဲ့ အလုပ်လုပ်ပါတယ်။ Effect ထဲမှာ fetch စထားရင် loading နဲ့ error state ကို ကိုယ်တိုင် သတ်မှတ်ပါ။',
      )),
    ], [
      ['React · Suspense', 'https://react.dev/reference/react/Suspense'],
      ['React · lazy', 'https://react.dev/reference/react/lazy'],
    ]),
    page('component-testing', p('Test React components through the UI', 'React Components ကို UI ကနေ စမ်းပါ'), p(
      'Write a test that uses a component the way a person would use it, then assert what appears on screen.',
      'တကယ်သုံးမယ့်သူ လုပ်သလို component ကို စမ်းပြီး screen ပေါ်မှာ မျှော်လင့်ထားတာ ပေါ်လား စစ်ပါ။',
    ), [
      part('tools', p('Set up Vitest and Testing Library', 'Vitest နဲ့ Testing Library ပြင်ဆင်ပါ'), p(
        'In a React and Vite project, install the DOM environment and the testing libraries. The environment comment in the test below enables jsdom for that file. The cleanup hook removes the rendered component after each test.',
        'React နဲ့ Vite project မှာ DOM environment နဲ့ testing libraries တွေ install လုပ်ပါ။ အောက်က test ရဲ့ environment comment က အဲဒီဖိုင်အတွက် jsdom ဖွင့်ပါတယ်။ Cleanup hook က test တစ်ခုပြီးတိုင်း render လုပ်ထားတဲ့ component ကို ဖယ်ပါတယ်။',
      ), `npm install -D vitest jsdom @testing-library/react @testing-library/dom @testing-library/user-event
npx vitest run`),
      part('behavior', p('Click and check the visible output', 'Click လုပ်ပြီး မြင်ရတဲ့ ရလဒ်ကို စစ်ပါ'), p(
        'Find the button by its role and accessible name. Await the user action, then assert the new status text. Save this example as quantity.test.jsx. For network work, wait for the changed UI and cover both a successful response and a failure.',
        'Button ကို role နဲ့ accessible name သုံးပြီး ရှာပါ။ User action ပြီးတဲ့အထိ await လုပ်ပြီး status text အသစ်ကို စစ်ပါ။ ဒီနမူနာကို quantity.test.jsx အဖြစ် သိမ်းပါ။ Network request ပါရင် UI ပြောင်းတဲ့အထိ စောင့်ပြီး အောင်မြင်တာနဲ့ မအောင်တာ နှစ်မျိုးလုံး စမ်းပါ။',
      ), `// @vitest-environment jsdom
import React, { useState } from "react";
import { afterEach, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

function Quantity() {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <button onClick={() => setQuantity(value => value + 1)}>Add one</button>
      <p role="status">{quantity}</p>
    </>
  );
}

test("adds one to the visible quantity", async () => {
  const user = userEvent.setup();
  render(<Quantity />);
  await user.click(screen.getByRole("button", { name: "Add one" }));
  expect(screen.getByRole("status").textContent).toBe("1");
});`),
    ], [
      ['Vitest · Environment', 'https://vitest.dev/config/environment.html'],
      ['Testing Library · ByRole', 'https://testing-library.com/docs/queries/byrole/'],
      ['Testing Library · user-event', 'https://testing-library.com/docs/user-event/intro/'],
    ]),
  ],
  nestjs: [
    page('queues', p('Run background jobs with a queue', 'Queue နဲ့ Background Jobs လုပ်ပါ'), p(
      'Send slow work such as an export to a worker through a queue so the HTTP request can finish sooner.',
      'Export လို ကြာတဲ့အလုပ်ကို queue ကနေ worker ဆီ ပေးပါ။ ဒါဆို HTTP request ကို စောစော ပြန်ပေးနိုင်ပါတယ်။',
    ), [
      part('producer', p('Register a queue and add a job', 'Queue စာရင်းသွင်းပြီး Job ထည့်ပါ'), p(
        'Install @nestjs/bullmq and bullmq. Configure the Redis connection with BullModule.forRoot and register the named queue once in the module. Inject Queue into the service that adds work. An endpoint accepting work can return 202 and a job ID after enqueue succeeds.',
        '@nestjs/bullmq နဲ့ bullmq ကို install လုပ်ပါ။ Redis connection ကို BullModule.forRoot နဲ့ သတ်မှတ်ပြီး နာမည်ပေးထားတဲ့ queue ကို module မှာ register လုပ်ပါ။ Job ထည့်မယ့် service ထဲ Queue ကို inject လုပ်ပါ။ Queue ထဲ ထည့်ပြီးမှ endpoint က 202 နဲ့ job ID ပြန်ပေးနိုင်ပါတယ်။',
      ), `// Inside the module's imports
BullModule.forRoot({ connection: { host: "127.0.0.1", port: 6379 } }),
BullModule.registerQueue({ name: "exports" }),

// Inside an injectable service
constructor(@InjectQueue("exports") private readonly queue: Queue) {}

enqueue(orderId: number) {
  return this.queue.add("order-csv", { orderId }, {
    attempts: 3,
    backoff: { type: "exponential", delay: 1000 },
  });
}`),
      part('worker', p('Process a job safely when it retries', 'Retry ပြန်လာတဲ့ Job ကို ကိုင်တွယ်ပါ'), p(
        'Register the consumer in the providers list. WorkerHost uses one process method to handle jobs on that queue. A job can run again after a failure. Use the order ID or job ID as part of a stable output key and design the export service so another run has the same effect. Track failed jobs and queue wait time.',
        'Consumer ကို providers list ထဲ ထည့်ပါ။ WorkerHost က queue ထဲက jobs ကို process method တစ်ခုနဲ့ ကိုင်ပါတယ်။ ပျက်သွားတဲ့ job ပြန် run နိုင်ပါတယ်။ Output key အတွက် order ID သို့မဟုတ် job ID သုံးပြီး အကြိမ်ကြိမ် run ရင်လည်း တူညီတဲ့ result ရအောင် export service ကို ဆောက်ပါ။ Failed jobs နဲ့ queue စောင့်ချိန်ကို မှတ်ပါ။',
      ), `import { Processor, WorkerHost } from "@nestjs/bullmq";
import type { Job } from "bullmq";
import { ExportService } from "./export.service";

@Processor("exports")
export class ExportWorker extends WorkerHost {
  constructor(private readonly exports: ExportService) {
    super();
  }

  async process(job: Job<{ orderId: number }>) {
    if (job.name !== "order-csv") throw new Error("Unknown export job");
    return this.exports.writeOrderCsv(job.data.orderId);
  }
}`),
    ], [
      ['NestJS · Queues', 'https://docs.nestjs.com/techniques/queues'],
      ['BullMQ · Retrying failing jobs', 'https://docs.bullmq.io/guide/retrying-failing-jobs'],
    ]),
    page('websocket-gateways', p('Send live updates with WebSockets', 'WebSockets နဲ့ Live Updates ပို့ပါ'), p(
      'Keep a connection open when the server needs to send live changes to the browser.',
      'Server က ပြောင်းလဲမှုတွေကို browser ဆီ ချက်ချင်း ပို့ဖို့ လိုတဲ့အခါ connection ကို ဖွင့်ထားပါ။',
    ), [
      part('gateway', p('Create a Socket.IO gateway', 'Socket.IO Gateway ဆောက်ပါ'), p(
        'Install @nestjs/websockets and @nestjs/platform-socket.io. Add the gateway to module providers. The example handles a ping and returns an acknowledgement. A browser using the Socket.IO adapter also needs its matching client package, socket.io-client.',
        '@nestjs/websockets နဲ့ @nestjs/platform-socket.io install လုပ်ပါ။ Gateway ကို module providers ထဲ ထည့်ပါ။ နမူနာက ping ကို လက်ခံပြီး acknowledgement ပြန်ပေးပါတယ်။ Socket.IO adapter သုံးရင် browser ဘက်မှာ socket.io-client package သုံးပါ။',
      ), `import { SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";

@WebSocketGateway()
export class InventoryGateway {
  @SubscribeMessage("inventory:ping")
  ping() {
    return { status: "ok" };
  }
}

// Browser client, served from the same origin
// import { io } from "socket.io-client";
// const socket = io();
// socket.timeout(3000).emit("inventory:ping", (error, reply) => {
//   if (error) console.error("No reply");
//   else console.log(reply.status);
// });`),
      part('inventory', p('Send stock changes after they are saved', 'Stock သိမ်းပြီးမှ Change ပို့ပါ'), p(
        'For live inventory, authenticate each connection and check access before joining a shop room. After a database commit, send an event to that room. When a client reconnects, reload the list from the API so it can catch up on changes it may have missed.',
        'Live inventory အတွက် connection တိုင်းကို authenticate လုပ်ပြီး shop room ထဲ မထည့်ခင် access စစ်ပါ။ Database commit ပြီးမှ အဲဒီ room ဆီ event ပို့ပါ။ Client ပြန်ချိတ်တဲ့အခါ လွတ်သွားနိုင်တဲ့ changes တွေ ပြန်ရဖို့ API ကနေ list ပြန်ယူပါ။',
      )),
    ], [
      ['NestJS · Gateways', 'https://docs.nestjs.com/websockets/gateways'],
      ['Socket.IO · Acknowledgements', 'https://socket.io/docs/v4/emitting-events/#acknowledgements'],
      ['Socket.IO · Rooms', 'https://socket.io/docs/v4/rooms/'],
    ]),
    page('caching', p('Cache frequently read results', 'မကြာခဏ ဖတ်တဲ့ Result ကို Cache ထားပါ'), p(
      'Save a result for a short time to reduce repeated work. Set a clear rule for when to read fresh data.',
      'ထပ်တွက်ရတာ သက်သာဖို့ result ကို ခဏသိမ်းပါ။ ဘယ်အချိန် database ကနေ အသစ်ပြန်ဖတ်မလဲ စည်းမျဉ်း သတ်မှတ်ပါ။',
    ), [
      part('read', p('Read the cache first, then the database', 'Cache အရင်ဖတ်ပြီး Database ဖတ်ပါ'), p(
        'Install @nestjs/cache-manager and cache-manager, then register CacheModule. Inject CACHE_MANAGER in the service. The default store is in memory. Here the key identifies the shop and the result stays cached for 30,000 milliseconds.',
        '@nestjs/cache-manager နဲ့ cache-manager install လုပ်ပြီး CacheModule register လုပ်ပါ။ Service ထဲမှာ CACHE_MANAGER inject လုပ်ပါ။ Default store က memory ထဲမှာပါ။ ဒီနမူနာမှာ key က shop ကို ခွဲပြီး result ကို 30,000 milliseconds သိမ်းပါတယ်။',
      ), `// Inside the service with CACHE_MANAGER and a product repository injected
async list(shopId: number) {
  const key = "products:shop:" + shopId;
  const cached = await this.cache.get<Product[]>(key);
  if (cached != null) return cached;

  const products = await this.repository.list(shopId);
  await this.cache.set(key, products, 30_000);
  return products;
}`),
      part('refresh', p('Remove old entries after a write', 'Write ပြီးရင် Entry အဟောင်း ဖယ်ပါ'), p(
        'Delete the matching key after the database commit so the next read can load fresh data. An in-flight read can still refill a stale entry, so use a short TTL and choose a stronger design for data that needs immediate consistency. For several Nest processes, choose a shared store if they need to share cached values.',
        'Database commit ပြီးရင် သက်ဆိုင်ရာ key ဖျက်ပါ။ ဒါဆို နောက်တစ်ခါဖတ်တဲ့အခါ data အသစ်ယူနိုင်ပါတယ်။ လုပ်နေဆဲ read က data အဟောင်း ပြန်သိမ်းနိုင်သေးလို့ TTL တိုတိုထားပါ။ ချက်ချင်းမှန်ဖို့လိုတဲ့ data အတွက် ပိုသေချာတဲ့ design သုံးပါ။ Nest process အများကြီးက တူညီတဲ့ cache values သုံးဖို့လိုရင် shared store ရွေးပါ။',
      ), `await this.repository.updateQuantity(shopId, productId, quantity);
await this.cache.del("products:shop:" + shopId);`),
    ], [
      ['NestJS · Caching', 'https://docs.nestjs.com/techniques/caching'],
      ['Keyv · Redis store', 'https://keyv.org/docs/storage-adapters/redis/'],
    ]),
  ],
};
