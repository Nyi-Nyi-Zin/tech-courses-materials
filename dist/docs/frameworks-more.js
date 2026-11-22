import { p, part, page } from './content.js';

const react = 'https://react.dev/learn/';
const nest = 'https://docs.nestjs.com/';

export const frameworkArticles = {
  react: [
    page('shared-state', p('Share state between components', 'Components ကြား State မျှဝေခြင်း'),
      p('Put shared state in the closest common parent and pass values and event handlers to the children.', 'မျှဝေသုံးမယ့် state ကို components နှစ်ခုရဲ့ အနီးဆုံး common parent မှာ ထားပါ။ Values နဲ့ event handlers ကို children ဆီ props နဲ့ ပို့ပါ။'),
      [
        part('lift', p('Give each value one owner', 'Value တစ်ခုစီအတွက် Owner တစ်ခုထားခြင်း'),
          p('Two components that show the same selection should read the same state. If every child keeps its own copy, the values can drift apart. Store the selected ID in the parent and derive the selected item while rendering.', 'Selection တူတူ ပြတဲ့ components တွေက state တစ်ခုတည်း ဖတ်သင့်ပါတယ်။ Child တစ်ခုစီမှာ မိတ္တူသိမ်းရင် တန်ဖိုးတွေ ကွဲသွားနိုင်ပါတယ်။ ရွေးထားတဲ့ ID ကို parent မှာထားပြီး render ချိန်မှာ item ကို ရှာပါ။'),
          `import { useState } from "react";

function Choice({ label, selected, onChoose }) {
  return <button aria-pressed={selected} onClick={onChoose}>{label}</button>;
}

export default function DrinkPicker() {
  const [drink, setDrink] = useState("tea");
  return (
    <>
      <Choice label="Tea" selected={drink === "tea"} onChoose={() => setDrink("tea")} />
      <Choice label="Coffee" selected={drink === "coffee"} onChoose={() => setDrink("coffee")} />
      <p>Selected: {drink}</p>
    </>
  );
}`),
        part('controlled', p('Keep children reusable', 'Child Components ပြန်သုံးလို့ရအောင် ထားခြင်း'),
          p('A controlled child gets its current value from props and asks the parent to change it through a callback. Local state is still useful for things only one child cares about.', 'Controlled child က လက်ရှိ value ကို props ကနေ ယူပြီး ပြောင်းစေချင်ရင် callback နဲ့ parent ကို အသိပေးပါတယ်။ Child တစ်ခုတည်း လိုအပ်တဲ့ အချက်တွေ အတွက် local state သုံးနိုင်ပါတယ်။')),
      ],
      [['Sharing state between components', react + 'sharing-state-between-components'], ['Choosing the state structure', react + 'choosing-the-state-structure']]),
    page('context-and-reducers', p('Context and reducers', 'Context နှင့် Reducers'),
      p('Context passes values down a tree. A reducer puts state update rules in one function.', 'Context က component tree အောက်ဘက်ကို values ပေးပါတယ်။ Reducer က state update rules တွေကို function တစ်ခုထဲ စုပါတယ်။'),
      [
        part('context', p('Read the nearest provider', 'အနီးဆုံး Provider က Value ဖတ်ခြင်း'),
          p('Call useContext with the context object. React reads the value from the nearest matching provider above the component. With React 19 you can render the context object itself as the provider.', 'Context object နဲ့ useContext ခေါ်ပါ။ Component ရဲ့အပေါ်မှာ အနီးဆုံးကိုက်ညီတဲ့ provider က value ဖတ်ပါတယ်။ React 19 မှာ context object ကို provider အဖြစ် တိုက်ရိုက် render လုပ်နိုင်ပါတယ်။'),
          `import { createContext, useContext } from "react";

const Currency = createContext("USD");

function Price({ amount }) {
  return <span>{useContext(Currency)} {amount}</span>;
}

export default function App() {
  return <Currency value="MMK"><Price amount={3500} /></Currency>;
}`),
        part('reducer', p('Describe updates with actions', 'Actions နဲ့ Updates ဖော်ပြခြင်း'),
          p('useReducer takes a reducer and an initial value. Dispatch an action that describes what happened. The reducer must be pure and should return a new object for a changed state.', 'useReducer မှာ reducer နဲ့ initial value ပေးပါ။ ဘာဖြစ်ခဲ့လဲ ဖော်ပြတဲ့ action ကို dispatch လုပ်ပါ။ Reducer က pure ဖြစ်ရပြီး state ပြောင်းရင် object အသစ် ပြန်ပေးပါ။'),
          `function cartReducer(state, action) {
  if (action.type === "added") {
    return { ...state, units: state.units + 1 };
  }
  return state;
}

// Inside the component:
// const [cart, dispatch] = useReducer(cartReducer, { units: 0 });
// dispatch({ type: "added" });`),
      ],
      [['Passing data with context', react + 'passing-data-deeply-with-context'], ['Extracting state logic into a reducer', react + 'extracting-state-logic-into-a-reducer']]),
    page('custom-hooks', p('Reuse behavior with custom Hooks', 'Custom Hooks နဲ့ Behavior ပြန်သုံးခြင်း'),
      p('A custom Hook groups reusable stateful logic. Each component call gets its own state unless the Hook reads from a shared source.', 'Custom Hook က ပြန်သုံးလိုတဲ့ stateful logic ကို စုပါတယ်။ Shared source တစ်ခုကနေ မဖတ်ရင် ခေါ်တဲ့ component တစ်ခုစီမှာ ကိုယ်ပိုင် state ရပါတယ်။'),
      [
        part('online', p('Wrap an external subscription', 'External Subscription ကို Hook ထဲ ထည့်ခြင်း'),
          p('For a browser API with an external value and change events, useSyncExternalStore can subscribe and read a snapshot. In a client-only app, the example reads the online flag. If you render on the server, also supply a server snapshot.', 'External value နဲ့ change events ရှိတဲ့ browser API အတွက် useSyncExternalStore နဲ့ subscribe လုပ်ပြီး snapshot ဖတ်နိုင်ပါတယ်။ ဒီ client-only ဥပမာက online flag ဖတ်ပါတယ်။ Server မှာ render လုပ်ရင် server snapshot ပါ ပေးပါ။'),
          `import { useSyncExternalStore } from "react";

function subscribe(notify) {
  window.addEventListener("online", notify);
  window.addEventListener("offline", notify);
  return () => {
    window.removeEventListener("online", notify);
    window.removeEventListener("offline", notify);
  };
}

export function useOnlineStatus() {
  return useSyncExternalStore(subscribe, () => navigator.onLine);
}`),
        part('rules', p('Follow the Rules of Hooks', 'Rules of Hooks လိုက်နာခြင်း'),
          p('Name a custom Hook with a use prefix followed by a capital letter. Call Hooks at the top level of a component or custom Hook. A reusable function that calls no Hooks can remain a normal function.', 'Custom Hook နာမည်ကို use နဲ့ စပြီး နောက်မှာ စာလုံးအကြီး လိုက်ပါ။ Hooks တွေကို component သို့ custom Hook ရဲ့ top level မှာ ခေါ်ပါ။ Hook မခေါ်တဲ့ function က ပုံမှန် function အဖြစ် ထားနိုင်ပါတယ်။')),
      ],
      [['Reusing logic with custom Hooks', react + 'reusing-logic-with-custom-hooks'], ['useSyncExternalStore', 'https://react.dev/reference/react/useSyncExternalStore'], ['Rules of Hooks', 'https://react.dev/reference/rules/rules-of-hooks']]),
  ],
  nestjs: [
    page('request-lifecycle', p('Request lifecycle, guards, and interceptors', 'Request Lifecycle၊ Guards နှင့် Interceptors'),
      p('Nest runs different types of handlers before and after a controller. Put each job at the stage that fits it.', 'Nest က controller မတိုင်ခင်နဲ့ ပြီးတဲ့နောက် handler အမျိုးမျိုး run ပါတယ်။ အလုပ်တစ်ခုစီကို သင့်တော်တဲ့အဆင့်မှာ ထားပါ။'),
      [
        part('flow', p('Follow a request to the controller', 'Request က Controller ဆီ ရောက်ပုံ'),
          p('A typical request goes through middleware, guards, the incoming side of interceptors, and then pipes before the handler. The response returns through interceptors. An uncaught exception can be handled by exception filters.', 'ပုံမှန် request က middleware၊ guards၊ interceptors ရဲ့ အဝင်ဘက်၊ pipes အစဉ်အတိုင်း ဖြတ်ပြီး handler ဆီ ရောက်ပါတယ်။ Response က interceptors ကနေ ပြန်ထွက်ပါတယ်။ မဖမ်းထားတဲ့ exception ကို filters က ကိုင်တွယ်နိုင်ပါတယ်။')),
        part('pipe', p('Parse a route parameter at the boundary', 'Route Parameter ကို ဝင်ပေါက်မှာ Parse လုပ်ခြင်း'),
          p('Use ParseIntPipe to turn a route parameter into an integer and reject invalid input. A guard decides whether a handler can run. Use an interceptor for logic that wraps the handler, such as timing or response mapping.', 'Route parameter ကို ကိန်းပြည့် ပြောင်းပြီး မမှန်တဲ့ input ငြင်းဖို့ ParseIntPipe သုံးပါ။ Guard က handler run လို့ရမရ ဆုံးဖြတ်ပါတယ်။ ကြာချိန်တိုင်းတာတာ၊ response ပုံစံပြောင်းတာလို handler မတိုင်ခင်နဲ့ ပြီးတဲ့နောက် လုပ်ရမယ့်အလုပ်အတွက် interceptor သုံးပါ။'),
          `import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller("products")
export class ProductsController {
  @Get(":id")
  read(@Param("id", ParseIntPipe) id: number) {
    return { id };
  }
}`),
      ],
      [['NestJS request lifecycle', nest + 'faq/request-lifecycle'], ['Pipes', nest + 'pipes'], ['Guards', nest + 'guards'], ['Interceptors', nest + 'interceptors']]),
    page('configuration-and-data', p('Configuration and the database layer', 'Configuration နှင့် Database Layer'),
      p('Load configuration once, validate required settings on startup, and keep database access in a provider.', 'Configuration ကို တစ်ကြိမ် load လုပ်ပါ။ Startup မှာ လိုအပ်တဲ့ settings တွေ စစ်ပြီး database access ကို provider မှာ ထားပါ။'),
      [
        part('settings', p('Validate required settings on startup', 'Startup မှာ လိုအပ်တဲ့ Settings စစ်ခြင်း'),
          p('Install @nestjs/config, then register ConfigModule. A validation function can fail startup when a required setting is missing. Supply DATABASE_URL through the environment and inject ConfigService in the provider that creates the database connection.', '@nestjs/config ထည့်ပြီး ConfigModule ကို register လုပ်ပါ။ Setting လိုနေရင် validation function နဲ့ startup ကို ရပ်နိုင်ပါတယ်။ DATABASE_URL ကို environment ကနေ ပေးပြီး database connection ဆောက်တဲ့ provider မှာ ConfigService inject လုပ်ပါ။'),
          `import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      validate(config) {
        if (!config.DATABASE_URL) throw new Error("DATABASE_URL is required");
        return config;
      },
    }),
  ],
})
export class AppModule {}`),
        part('provider', p('Separate HTTP from persistence', 'HTTP နှင့် Data သိမ်းဆည်းမှု ခွဲထားခြင်း'),
          p('Controllers read inputs and give responses. A service runs business rules and calls a repository or database client. Nest can work with a driver or ORM through providers. Keep schema changes in migrations so environments can apply the same changes.', 'Controller က input ဖတ်ပြီး response ပြန်ပါတယ်။ Service က business rules ကိုင်ပြီး repository သို့ database client ကို ခေါ်ပါတယ်။ Nest က providers နဲ့ driver သို့ ORM သုံးနိုင်ပါတယ်။ Environments အားလုံး schema ပြောင်းလဲမှု တူတူလုပ်နိုင်ဖို့ migrations မှာ ထားပါ။')),
      ],
      [['Configuration and validation', nest + 'techniques/configuration'], ['Database integration', nest + 'techniques/database'], ['Providers', nest + 'providers']]),
    page('openapi-and-errors', p('Document routes and HTTP errors', 'Routes နှင့် HTTP Errors မှတ်တမ်းတင်ခြင်း'),
      p('An OpenAPI document describes how to call an API. Document status codes and payload shapes that clients can depend on.', 'OpenAPI document က API ကို ဘယ်လိုခေါ်ရမလဲ ဖော်ပြပါတယ်။ Client တွေ အသုံးပြုမယ့် status codes နဲ့ payload ပုံစံတွေ ရေးထားပါ။'),
      [
        part('openapi', p('Expose the OpenAPI document', 'OpenAPI Document ပြသခြင်း'),
          p('Install @nestjs/swagger and build an OpenAPI configuration during bootstrap. SwaggerModule can generate the document and serve Swagger UI. Describe request and response DTO fields with decorators or the CLI plugin where appropriate.', '@nestjs/swagger ထည့်ပြီး bootstrap မှာ OpenAPI configuration ဆောက်ပါ။ SwaggerModule က document ထုတ်ပြီး Swagger UI ပြနိုင်ပါတယ်။ Request နဲ့ response DTO fields တွေအတွက် လိုအပ်သလို decorators သို့ CLI plugin သုံးပါ။'),
          `// At the top of main.ts
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

// Inside bootstrap, after NestFactory.create(...)
const config = new DocumentBuilder()
  .setTitle("Café API")
  .setVersion("1.0")
  .build();

const documentFactory = () => SwaggerModule.createDocument(app, config);
SwaggerModule.setup("docs", app, documentFactory);`),
        part('errors', p('Return a status that matches the failure', 'အမှားနဲ့ ကိုက်ညီတဲ့ Status ပြန်ခြင်း'),
          p('BadRequestException suits invalid input. NotFoundException suits a missing resource. Add an exception filter when you need a defined error shape. Test the status and body of both successful responses and known errors.', 'Input မမှန်ရင် BadRequestException၊ resource မရှိရင် NotFoundException သုံးနိုင်ပါတယ်။ Error ပုံစံ တိကျသတ်မှတ်ချင်ရင် exception filter ထည့်ပါ။ အောင်မြင်တဲ့ response နဲ့ သိထားတဲ့ errors နှစ်မျိုးလုံးရဲ့ status နဲ့ body စမ်းပါ။')),
      ],
      [['NestJS OpenAPI introduction', nest + 'openapi/introduction'], ['Exception filters', nest + 'exception-filters'], ['Testing', nest + 'fundamentals/testing']]),
  ],
};
