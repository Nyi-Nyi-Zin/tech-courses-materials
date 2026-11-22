import { p, page, part } from './content.js';

export const advancedFullstack = [
  page('ci-cd', p('Build and release with CI/CD', 'CI/CD နဲ့ Build၊ Release လုပ်ပါ'), p(
    'Run the build and integration tests on every code change. Then release a tested build through a controlled deployment step.',
    'Code ပြောင်းတိုင်း build နဲ့ integration tests run ပါ။ စစ်ပြီးသား build ကို deployment အဆင့် သတ်မှတ်ပြီး release လုပ်ပါ။',
  ), [
    part('ci', p('Check a pull request with PostgreSQL', 'Pull Request ကို PostgreSQL နဲ့ စစ်ပါ'), p(
      'Put the extracted Café Inventory project at the root of a GitHub repository. Save the file below as .github/workflows/check.yml. The runner brings up a temporary PostgreSQL 19 service and waits until it accepts connections. The credentials shown are only for this disposable CI database.',
      'ZIP ဖြည်ထားတဲ့ Café Inventory project ကို GitHub repository ရဲ့ root မှာ ထားပါ။ အောက်ကဖိုင်ကို .github/workflows/check.yml အဖြစ် သိမ်းပါ။ Runner က ယာယီ PostgreSQL 19 service တက်ခိုင်းပြီး connection လက်ခံတဲ့အထိ စောင့်ပါတယ်။ အောက်မှာပါတဲ့ credentials တွေက ယာယီ CI database အတွက်ပါ။',
    ), `name: Check Café Inventory
on: [pull_request, push]

permissions:
  contents: read

jobs:
  check:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:19
        env:
          POSTGRES_USER: cafe
          POSTGRES_PASSWORD: ci_only
          POSTGRES_DB: cafe_inventory_test
        ports:
          - "5432:5432"
        options: >-
          --health-cmd "pg_isready -U cafe -d cafe_inventory_test"
          --health-interval 5s
          --health-timeout 3s
          --health-retries 10
    env:
      CAFE_TEST_DATABASE_URL: postgresql://cafe:ci_only@localhost:5432/cafe_inventory_test
    steps:
      - uses: actions/checkout@v7
      - uses: actions/setup-node@v7
        with:
          node-version: "24"
          cache: npm
      - run: npm ci
      - run: npm run build
      - run: npm test`),
    part('release', p('Promote the build that passed the checks', 'စစ်ပြီးသား Build ကို Release တင်ပါ'), p(
      'Connect a production deployment job to CI success on your default branch. Use a GitHub deployment environment for production secrets and apply any available approval or branch rules. Build a versioned artifact or image from the checked commit. Run the matching migration once as a release job, deploy the same version, then check HTTPS health and the main user flow. Keep the migration URL limited to the release job.',
      'Default branch မှာ CI အောင်မှ production deployment job ဆက် run အောင် ချိတ်ပါ။ Production secrets ကို GitHub deployment environment ထဲ ထည့်ပြီး သုံးလို့ရတဲ့ approval နဲ့ branch rules တွေ သတ်မှတ်ပါ။ စစ်ပြီးသား commit ကနေ version ပါတဲ့ artifact ဒါမှမဟုတ် image build ပါ။ ကိုက်ညီတဲ့ migration ကို release job အနေနဲ့ run ပြီး အဲဒီ version ကိုပဲ deploy ပါ။ ပြီးရင် HTTPS health နဲ့ အဓိက user flow စစ်ပါ။ Migration URL ကို release job သုံးဖို့ပဲ ပေးပါ။',
    )),
    part('rollback', p('Plan backward-compatible changes', 'Version အဟောင်းနဲ့ အလုပ်လုပ်နိုင်တဲ့ အပြောင်းအလဲ စီစဉ်ပါ'), p(
      'If old and new app instances may run together, add the new column first and copy existing data. Switch the app to the new column in a later release. Remove the old column only after all versions that use it have been retired. Roll an unhealthy release back to the last good build only after checking that it supports the current database schema.',
      'App version အဟောင်းနဲ့ အသစ် တစ်ချိန်တည်း run နိုင်ရင် column အသစ် အရင်ထည့်ပြီး data အဟောင်း ကူးပါ။ နောက် release မှာ app ကို column အသစ် သုံးအောင် ပြောင်းပါ။ Column အဟောင်း သုံးတဲ့ version တွေ အားလုံး ရပ်ပြီးမှ column ဖယ်ပါ။ Release အသစ် ပြဿနာတက်ရင် နောက်ဆုံးအဆင်ပြေခဲ့တဲ့ build က လက်ရှိ database schema နဲ့ ကိုက်ညီလား အရင်စစ်ပြီးမှ rollback ပါ။',
    )),
  ], [
    ['GitHub Actions · PostgreSQL service containers', 'https://docs.github.com/en/actions/tutorials/use-containerized-services/create-postgresql-service-containers'],
    ['GitHub Actions · Set up Node.js', 'https://github.com/actions/setup-node'],
    ['GitHub Actions · Deployment environments', 'https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments'],
    ['Docker Hub · PostgreSQL official image', 'https://hub.docker.com/_/postgres'],
  ]),
  page('production-monitoring', p('Monitor the app in production', 'Production App ကို စောင့်ကြည့်ပါ'), p(
    'Know when users cannot reach the app, when it gets slower, and which request failed.',
    'User တွေ app သုံးမရတဲ့အချိန်၊ App နှေးလာတဲ့အချိန်နဲ့ ပျက်သွားတဲ့ request ကို သိအောင် စောင့်ကြည့်ပါ။',
  ), [
    part('probes', p('Check the app from outside', 'App အပြင်ကနေ စစ်ပါ'), p(
      'Point an uptime check at the public HTTPS URL. Café Inventory’s /api/health checks that the API can query PostgreSQL. This makes it a readiness signal. If your host supports a separate liveness probe, use a simple process check there. A temporary database outage should not cause constant restarts. Keep health responses small and leave internal details in logs.',
      'Public HTTPS URL ကို uptime check နဲ့ စစ်ပါ။ Café Inventory ရဲ့ /api/health က API ကနေ PostgreSQL ကို query လုပ်လို့ရလား စစ်တဲ့အတွက် readiness signal အဖြစ် သုံးနိုင်ပါတယ်။ Host မှာ သီးသန့် liveness probe ရရင် process အလုပ်လုပ်နေသေးလားပဲ စစ်ပါ။ Database ခဏပြတ်လို့ app တောက်လျှောက် restart မဖြစ်သင့်ပါဘူး။ Health response ကို တိုတိုထားပြီး အသေးစိတ်ကို logs ထဲမှာပဲ ထည့်ပါ။',
    ), `curl --fail --silent --show-error --max-time 5 \\
  https://inventory.example.com/api/health
# Expected: {"status":"ok"}`),
    part('signals', p('Connect logs, metrics, and traces', 'Logs၊ Metrics နဲ့ Traces တွဲသုံးပါ'), p(
      'Log the request ID, route template, status, latency, and release ID. Measure request rate, error rate, and p95 latency. p95 is the time at or below which 95% of requests complete. Use a trace to follow a slow request from HTTP into the database. Keep passwords, cookies, tokens, and full request bodies out of logs. Use route templates such as /api/products/:id for metric labels.',
      'Request ID၊ route template၊ status၊ ကြာချိန်နဲ့ release ID ကို log ထည့်ပါ။ Request rate၊ error rate နဲ့ p95 latency ကို တိုင်းပါ။ p95 က request ၉၅ ရာခိုင်နှုန်း ပြီးတဲ့ အချိန်အတိုင်းအတာပါ။ နှေးတဲ့ request တစ်ခုကို HTTP ကနေ database ထိ လိုက်ကြည့်ဖို့ trace သုံးပါ။ Passwords၊ cookies၊ tokens နဲ့ request body အပြည့်အစုံကို logs ထဲ မထည့်ပါနဲ့။ Metric labels အတွက် /api/products/:id လို route template သုံးပါ။',
    ), `{
  "requestId": "req-example",
  "route": "GET /api/products",
  "status": 200,
  "durationMs": 43,
  "release": "v1.2.0"
}`),
    part('alerts', p('Set alerts and investigate a release', 'Alert သတ်မှတ်ပြီး Release ပြဿနာ ရှာပါ'), p(
      'Set alerts for sustained health failures, a rising 5xx rate, or higher latency than your normal baseline. For a low-traffic app, also use an uptime check because one request can skew a percentage. Compare the change with the deployment time, find a failing request in the logs, then inspect the matching trace and database health. Record the steps so another person can respond.',
      'Health check ဆက်တိုက်ပျက်တာ၊ 5xx rate တက်တာ ဒါမှမဟုတ် ပုံမှန်ထက် နှေးလာတာအတွက် alert သတ်မှတ်ပါ။ Traffic နည်းတဲ့ app မှာ request တစ်ခုတည်းက ရာခိုင်နှုန်းကို သိသိသာသာ ပြောင်းစေနိုင်လို့ uptime check ပါ သုံးပါ။ ပြဿနာစချိန်နဲ့ deployment အချိန် တိုက်ကြည့်ပါ။ Logs ထဲက ပျက်တဲ့ request ရှာပြီး သက်ဆိုင်ရာ trace နဲ့ database health ကို စစ်ပါ။ တခြားသူပါ ကိုင်တွယ်နိုင်ဖို့ အဆင့်တွေ မှတ်ထားပါ။',
    )),
  ], [
    ['OpenTelemetry · Signals', 'https://opentelemetry.io/docs/concepts/signals/'],
    ['OpenTelemetry · JavaScript', 'https://opentelemetry.io/docs/languages/js/'],
    ['Kubernetes · Liveness, readiness, and startup probes', 'https://kubernetes.io/docs/concepts/workloads/pods/probes/'],
  ]),
];
