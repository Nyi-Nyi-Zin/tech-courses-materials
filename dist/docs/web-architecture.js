import { p, page, snippet } from './content.js';

const serverIntro = p(
  'In a computer network, a **client** is a device or application that requests information or services, and a **server** is a centralized computer or program that processes those requests and provides the data.',
  'ကွန်ပျူတာကွန်ရက်တစ်ခုမှာ အချက်အလက် ဒါမှမဟုတ် ဝန်ဆောင်မှုကို တောင်းတဲ့ စက်ပစ္စည်း သို့မဟုတ် app ကို **Client** လို့ ခေါ်ပါတယ်။ အဲဒီတောင်းဆိုချက်တွေကို လက်ခံပြီး လိုအပ်တာတွေ လုပ်ဆောင်ပေးကာ အချက်အလက် ပြန်ပို့ပေးတဲ့ ကွန်ပျူတာ သို့မဟုတ် program ကို **Server** လို့ ခေါ်ပါတယ်။'
);

const serverTypesFigure = {
  src: '/docs/media/database/server-types.jpg?v=80',
  width: 2048,
  height: 1529,
  alt: p(
    'Eight server types and their roles: web, database, file, game, mail, backend, DNS, and proxy.',
    'Web၊ Database၊ File၊ Game၊ Mail၊ Backend၊ DNS နဲ့ Proxy Server အမျိုးအစား ၈ မျိုးနဲ့ သူတို့ရဲ့ တာဝန်တွေကို ဖော်ပြထားတဲ့ပုံ။'
  ),
};

export const serverBasics = {
  ...page('client-server',
    p('Client and Server', 'Client and Server'),
    p(serverIntro.en.replaceAll('**', ''), serverIntro.my.replaceAll('**', '')),
    [
      {
        ...snippet('client-server', p('The Breakdown', 'Client နဲ့ Server ရဲ့ တာဝန်များ')),
        figure: {
          src: '/docs/media/web-fundamentals/client-server.jpg',
          width: 2048,
          height: 1143,
          alt: p(
            'Clients send requests to a server over the internet and receive responses. The server can exchange data with a database.',
            'Client တွေက အင်တာနက်ကနေ Server ဆီ request ပို့ပြီး response ပြန်ရပါတယ်။ Server က database နဲ့ အချက်အလက် အပြန်အလှန် ပို့နိုင်ပါတယ်။'
          ),
          banner: true,
        },
        blocks: p(
          [
            ['heading', 'The Client (The Requester)'],
            ['bullets', [
              'Initiates communication by sending a request over a network (like the internet).',
              'Focuses on the front-end user experience, displaying the returned data to the user.',
              '*Examples:* Web browsers (Chrome, Safari), mobile apps (Instagram, Spotify), desktop computers, and smart home devices.',
            ]],
            ['heading', 'The Server (The Provider)'],
            ['bullets', [
              'Runs continuously, listening passively for incoming client requests on specific ports.',
              'Handles the heavy lifting: processing logic, checking authentication, querying databases, and formulating a response to send back.',
              '*Examples:* Web servers (delivering website files), database servers (storing and retrieving records), and API backends.',
            ]],
          ],
          [
            ['heading', 'Client (တောင်းဆိုတဲ့ဘက်)'],
            ['bullets', [
              'အင်တာနက်လို ကွန်ရက်တစ်ခုကနေ request ပို့ပြီး ဆက်သွယ်မှုကို စတင်ပါတယ်။',
              'အသုံးပြုသူနဲ့ တိုက်ရိုက်ထိတွေ့တဲ့ frontend အပိုင်းကို တာဝန်ယူပြီး Server ဆီက ပြန်ရတဲ့ အချက်အလက်ကို ပြပေးပါတယ်။',
              '*ဥပမာများ* Chrome နဲ့ Safari လို Web Browser တွေ၊ Instagram နဲ့ Spotify လို Mobile App တွေ၊ Desktop Computer တွေနဲ့ Smart Home Device တွေ ဖြစ်ပါတယ်။',
            ]],
            ['heading', 'Server (ဝန်ဆောင်မှုပေးတဲ့ဘက်)'],
            ['bullets', [
              'ဆက်တိုက် အလုပ်လုပ်နေပြီး သတ်မှတ်ထားတဲ့ network port တွေမှာ Client ဆီက ဝင်လာမယ့် request တွေကို စောင့်လက်ခံပါတယ်။',
              'Request အတွက် လိုအပ်တဲ့ စည်းမျဉ်းတွေကို စစ်တာ၊ အသုံးပြုသူရဲ့ အထောက်အထားကို အတည်ပြုတာ၊ database ထဲက အချက်အလက် ရှာတာနဲ့ ပြန်ပို့မယ့် response ပြင်ဆင်တာတွေကို လုပ်ပေးပါတယ်။',
              '*ဥပမာများ* Website ဖိုင်တွေ ပို့ပေးတဲ့ Web Server၊ မှတ်တမ်းတွေ သိမ်းပေးပြီး ပြန်ရှာပေးတဲ့ Database Server နဲ့ API Backend တွေ ဖြစ်ပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('server-types', p('Types of Servers', 'Server အမျိုးအစားများ')),
        blocks: p(
          [
            ['paragraph', 'Servers are categorized based on the specific tasks they are designed to handle. Here is a breakdown of the 8 most common types of servers used in the industry and on the internet:'],
            ['figure', serverTypesFigure],
            ['list', [
              '**Web Server** Stores the files needed to run a website (HTML, CSS, JavaScript, and images) and delivers these web pages to the user’s browser when requested.',
              '**Backend Server** Acts as the "brain" behind the scenes, handling data processing, business logic, and API connections sent from the frontend. (e.g., Systems built with NestJS, Next.js API Routes, or Python). This is what was traditionally called an "Application Server."',
              '**Database Server** Responsible for systematically storing, retrieving, modifying, and securely managing data. It quickly fetches data requested by the Backend Server. (e.g., PostgreSQL, MySQL, MongoDB).',
              '**File Server** A central hub used to store and share files across a network of users. Instead of scattering large video files, course materials, or documents across individual laptops, they are stored and managed in one central location.',
              '**DNS Server** Often called the "phonebook of the internet." It automatically translates human-readable website names (like `cloudninemm.com`) into the numerical IP addresses (like `192.0.2.1`) that computers use to communicate with each other.',
              '**Proxy Server** Acts as a middleman between the user (client) and the internet. It is used for security filtering, managing network traffic, and masking the user’s original IP address to protect privacy.',
              '**Mail Server** Functions like a digital post office. It is responsible for receiving, storing, and routing incoming and outgoing emails to their correct destinations.',
              '**Game Server** Calculates and synchronizes player locations, movements, scores, and data in real-time when running online multiplayer games.',
            ]],
          ],
          [
            ['paragraph', 'Server တွေကို လုပ်ပေးတဲ့ အလုပ်ပေါ်မူတည်ပြီး အမျိုးအစား ခွဲနိုင်ပါတယ်။ လုပ်ငန်းသုံးစနစ်တွေနဲ့ အင်တာနက်ပေါ်မှာ တွေ့ရများတဲ့ Server အမျိုးအစား ၈ မျိုးကို ကြည့်ရအောင်။'],
            ['figure', serverTypesFigure],
            ['list', [
              '**Web Server** က HTML၊ CSS၊ JavaScript နဲ့ ပုံဖိုင်တွေလို website အတွက် လိုတဲ့ဖိုင်တွေကို သိမ်းထားပါတယ်။ Browser က တောင်းတဲ့အခါ စာမျက်နှာနဲ့ လိုအပ်တဲ့ဖိုင်တွေကို ပြန်ပို့ပေးပါတယ်။',
              '**Backend Server** က frontend ဆီက API request တွေကို လက်ခံပါတယ်။ အချက်အလက်တွေကို စီမံတွက်ချက်တာ၊ app ရဲ့ စည်းမျဉ်းတွေကို စစ်ဆေးတာနဲ့ အဖြေပြန်ပို့တာတွေကို လုပ်ပေးပါတယ်။ NestJS၊ Next.js API Routes သို့မဟုတ် Python နဲ့ ရေးထားတဲ့ backend တွေက ဥပမာတွေပါ။ ဒီလို server ကို Application Server လို့လည်း ခေါ်ပါတယ်။',
              '**Database Server** က အချက်အလက်တွေကို စနစ်တကျ သိမ်းဆည်း၊ ရှာဖွေ၊ ပြင်ဆင်ပြီး သုံးစွဲခွင့်ကို ထိန်းပေးပါတယ်။ Backend Server က query ပို့တဲ့အခါ တောင်းထားတဲ့ မှတ်တမ်းတွေကို ရှာပြီး ပြန်ပေးပါတယ်။ PostgreSQL၊ MySQL နဲ့ MongoDB တို့ကို ဥပမာအနေနဲ့ တွေ့နိုင်ပါတယ်။',
              '**File Server** က ကွန်ရက်တစ်ခုထဲက အသုံးပြုသူတွေ ဖိုင်တွေကို တစ်နေရာတည်းမှာ သိမ်းပြီး မျှဝေသုံးနိုင်အောင် လုပ်ပေးပါတယ်။ ဗီဒီယိုဖိုင်ကြီးတွေ၊ သင်ခန်းစာဖိုင်တွေနဲ့ စာရွက်စာတမ်းတွေကို လူတိုင်းရဲ့ laptop မှာ သီးသန့်သိမ်းစရာမလိုဘဲ ဒီ server ကနေ ရယူနိုင်ပါတယ်။',
              '**DNS Server** ကို အင်တာနက်ရဲ့ ဖုန်းစာအုပ်လို့ ခေါ်လေ့ရှိပါတယ်။ ကွန်ပျူတာတွေ ဆက်သွယ်နိုင်ဖို့ `cloudninemm.com` လို မှတ်ရလွယ်တဲ့ domain name အတွက် သက်ဆိုင်ရာ IP address ကို ရှာပေးပါတယ်။ `192.0.2.1` က IP address ပုံစံကို ပြထားတဲ့ ဥပမာပါ။',
              '**Proxy Server** က client နဲ့ အင်တာနက်ကြားမှာ ကြားခံအဖြစ် request တွေကို လက်ခံပြီး သက်ဆိုင်ရာ server ဆီ ဆက်ပို့ပေးပါတယ်။ Network traffic ကို စစ်ထုတ်တာ၊ စီမံတာနဲ့ လိုအပ်ရင် ဝင်ကြည့်တဲ့ website ဆီမှာ client ရဲ့ မူရင်း IP address ကို ဖုံးထားပေးတာတွေ လုပ်နိုင်ပါတယ်။',
              '**Mail Server** က email တွေကို လက်ခံ၊ သိမ်းဆည်းပြီး အဝင်နဲ့ အထွက် email တွေကို သက်ဆိုင်ရာ လက်ခံသူဆီ ရောက်အောင် ပို့ပေးပါတယ်။',
              '**Game Server** က online multiplayer game တစ်ခုမှာ ကစားသူတွေရဲ့ နေရာ၊ လှုပ်ရှားမှုနဲ့ ရမှတ်တွေကို တွက်ချက်ပါတယ်။ ကစားနေချိန်မှာ အဲဒီအချက်အလက်တွေကို ကစားသူတွေဆီ အချိန်နဲ့တစ်ပြေးညီ ပို့ပေးပါတယ်။',
            ]],
          ],
        ),
      },
      {
        ...snippet('server-hosting', p('Where Do Servers Exist? (On-Premises vs. Cloud)', 'Where Do Servers Exist? (On-Premises vs. Cloud)')),
        blocks: p(
          [
            ['paragraph', '**On-premises** and **cloud computing** are two ways organizations run their IT systems—essentially the difference between owning and renting.'],
            ['bullets', [
              '**On-Premises:** You buy your own physical servers and house them in your own building. You pay high upfront costs and handle all maintenance, security, power, and cooling with your own IT team. It offers maximum control, making it common in banking, healthcare, and government.',
              '**Cloud Computing:** You rent virtual servers over the internet from providers like AWS, Microsoft Azure, or Google Cloud. You pay only for what you use, scale resources up or down instantly, and leave hardware upkeep to the provider. It is ideal for flexibility, remote access, and rapid growth.',
            ]],
            ['paragraph', 'Think of it like **buying a house versus renting an apartment**: on-premises gives you total control along with all the maintenance, while the cloud trades physical ownership for convenience, lower upfront costs, and agility.'],
          ],
          [
            ['paragraph', '**On-premises** နဲ့ **Cloud Computing** က အဖွဲ့အစည်းတွေ IT စနစ်တွေ လည်ပတ်ဖို့ သုံးတဲ့ နည်းလမ်းနှစ်မျိုးပါ။ အဓိက ကွာခြားချက်က စက်ပစ္စည်းတွေကို ကိုယ်တိုင်ပိုင်ဆိုင်သုံးတာနဲ့ ဝန်ဆောင်မှုပေးသူဆီက ငှားသုံးတာပါ။'],
            ['bullets', [
              '**On-Premises** မှာ ကိုယ်ပိုင် server စက်တွေ ဝယ်ပြီး ကိုယ့်အဆောက်အအုံထဲမှာ ထားပါတယ်။ စက်ဝယ်ဖို့ အစပိုင်းမှာ ငွေပိုကုန်ပြီး စက်ထိန်းသိမ်းတာ၊ လုံခြုံရေး စီမံတာ၊ မီးပေးတာနဲ့ အအေးပေးစနစ် ထိန်းတာတွေကို ကိုယ့် IT အဖွဲ့က တာဝန်ယူရပါတယ်။ စက်နဲ့ စနစ်ကို အသေးစိတ် ထိန်းချုပ်နိုင်လို့ ဘဏ်၊ ကျန်းမာရေးနဲ့ အစိုးရအဖွဲ့အစည်းတွေမှာ သုံးလေ့ရှိပါတယ်။',
              '**Cloud Computing** မှာ AWS၊ Microsoft Azure သို့မဟုတ် Google Cloud လို provider ဆီက virtual server တွေကို အင်တာနက်ကနေ ငှားသုံးပါတယ်။ သုံးသလောက် ငွေပေးရတဲ့ ပုံစံနဲ့ သုံးနိုင်ပြီး လိုအပ်တဲ့ စက်စွမ်းရည်ကို မြန်မြန် တိုးလျှော့နိုင်ပါတယ်။ စက်ပစ္စည်း ထိန်းသိမ်းတာကို provider က တာဝန်ယူပါတယ်။ အဝေးကနေ သုံးဖို့၊ လိုအပ်သလို ပြောင်းလဲဖို့နဲ့ လုပ်ငန်း မြန်မြန် တိုးချဲ့ဖို့ အဆင်ပြေပါတယ်။',
            ]],
            ['paragraph', '**ကိုယ်ပိုင်အိမ် ဝယ်တာနဲ့ တိုက်ခန်း ငှားတာ** လို တွေးကြည့်နိုင်ပါတယ်။ On-premises မှာ ကိုယ့်စက်တွေကို ကိုယ်တိုင် ထိန်းချုပ်နိုင်သလို ပြုပြင်ထိန်းသိမ်းရေးလည်း တာဝန်ယူရပါတယ်။ Cloud မှာ စက်ဝယ်စရာမလိုတဲ့အတွက် ကနဦးကုန်ကျစရိတ် သက်သာပြီး လိုအပ်ချက်ပြောင်းလာရင် အသုံးပြုတဲ့ စက်စွမ်းရည်ကို မြန်မြန် ပြောင်းနိုင်ပါတယ်။'],
          ],
        ),
        figure: {
          src: '/docs/media/web-fundamentals/on-premises-vs-cloud.jpg',
          banner: true,
          width: 2048,
          height: 1529,
          alt: p(
            'On-premises and cloud server comparison covering hardware location, costs, maintenance, and scaling.',
            'On-premises နဲ့ Cloud server တို့ကို စက်တည်နေရာ၊ ကုန်ကျစရိတ်၊ ထိန်းသိမ်းပုံနဲ့ စက်စွမ်းရည် တိုးချဲ့ပုံအလိုက် နှိုင်းယှဉ်ထားတဲ့ပုံ။'
          ),
        },
      },
    ],
    [
      ['MDN · How the web works', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works'],
      ['MDN · What is a web server?', 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server'],
      ['AWS · What is cloud computing?', 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/what-is-cloud-computing.html'],
      ['AWS · Shared responsibility for cloud security', 'https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/shared-responsibility.html'],
    ]),
  introBlocks: p([['paragraph', serverIntro.en]], [['paragraph', serverIntro.my]]),
};

const webAppFlowText = p(
  "When a user accesses a web application, the browser retrieves and executes the frontend files from the Web Server. As the user interacts with the application—such as viewing data—the frontend initiates an API request. This request is sent to the backend over HTTPS, and the backend processes it to return a response. If the user uploads a file (e.g., a PDF), the backend stores the file as an object in an AWS S3 bucket and saves only the object's key in the database alongside the relevant record.",
  'အသုံးပြုသူက Web App တစ်ခုကို ဖွင့်တဲ့အခါ Browser က Web Server ဆီက Frontend ဖိုင်တွေကို ရယူပြီး run ပါတယ်။ App ထဲမှာ အချက်အလက်တွေ ဖွင့်ကြည့်တာမျိုး လုပ်တဲ့အခါ Frontend က API request စတင်ပါတယ်။ Browser က အဲဒီ request ကို HTTPS နဲ့ Backend ဆီ ပို့ပါတယ်။ Backend က request ကို လုပ်ဆောင်ပြီး response ပြန်ပို့ပါတယ်။ PDF လို ဖိုင်တစ်ခု တင်လိုက်ရင် Backend က ဖိုင်ကို AWS S3 bucket ထဲမှာ object အဖြစ် သိမ်းပါတယ်။ Database ထဲက သက်ဆိုင်ရာ မှတ်တမ်းနဲ့အတူ object ရဲ့ key ကိုပဲ သိမ်းထားပါတယ်။'
);

export const webAppArchitecture = {
  ...page('web-app-architecture', p('Web app request flow', 'Web App Request သွားလာပုံ'), webAppFlowText,
  [
    {
      ...snippet('web-app-flow', p('How a web app works', 'Web App တစ်ခု အလုပ်လုပ်ပုံ'), webAppFlowText),
      figure: {
        src: '/docs/media/database/web-app-flow.svg?v=6',
        width: 1600,
        height: 780,
        alt: p(
          'The Browser requests frontend files from the Web Server and receives HTML, CSS, and JavaScript. The Frontend inside the Browser initiates an HTTPS request to the Backend on the Application Server and receives JSON. The Backend connects to the optional Redis cache, PostgreSQL, and AWS S3 cloud storage over HTTPS as needed.',
          'Browser က Web Server ဆီက HTML၊ CSS နဲ့ JavaScript ဖိုင်တွေ ရယူတယ်။ Browser ထဲက Frontend က Application Server ပေါ်က Backend ဆီ HTTPS request စတင်ပြီး JSON အဖြေ ရတယ်။ Backend က လိုအပ်သလို Redis Cache Server၊ PostgreSQL Database Server နဲ့ AWS S3 Cloud Storage တို့ကို ချိတ်သုံးတယ်။ S3 API ကို HTTPS နဲ့ အသုံးပြုတယ်။'
        ),
        caption: p(
          'The upper arrows show the frontend files being loaded. The lower arrows show the API request from the frontend running inside the browser and the JSON response. The dashed line marks the optional Redis cache.',
          'အပေါ်လမ်းကြောင်းက frontend ဖိုင်တွေ ရယူပုံပါ။ အောက်လမ်းကြောင်းက Browser ထဲမှာ run နေတဲ့ Frontend ဆီက API request နဲ့ ပြန်လာတဲ့ JSON response ကို ပြတယ်။ အပြတ်မျဉ်းက လိုအပ်မှ ချိတ်သုံးတဲ့ Redis cache ကို ပြထားတာပါ။'
        ),
      },
      terms: [
        ['Browser', p('Downloads and runs the frontend files, then sends API requests initiated by the frontend.', 'Frontend ဖိုင်တွေကို ရယူပြီး run တယ်။ Frontend က API request စတင်တဲ့အခါ Browser က network ပေါ်မှာ ပို့ပေးတယ်။')],
        ['Web Server', p('Serves the frontend build, including the HTML, JavaScript, and CSS files that the browser needs.', 'Browser ဆီ HTML၊ JavaScript နဲ့ CSS frontend ဖိုင်တွေ ပို့ပေးတယ်။')],
        ['Application Server', p('Runs the backend API. For a course list request, it returns the course data and can read it from Redis or PostgreSQL.', 'Backend API ကို run တယ်။ သင်တန်းစာရင်း တောင်းလာရင် Redis သို့မဟုတ် PostgreSQL ကနေ ဖတ်ပြီး Browser ဆီ ပြန်ပို့နိုင်တယ်။')],
        ['Cache Server', p('Redis can temporarily store results such as a course list. The backend can return a cached result when available. On a cache miss, it can query PostgreSQL and cache the new result for a limited time.', 'Redis မှာ သင်တန်းစာရင်းလို ရလဒ်တွေကို ခဏသိမ်းထားလို့ရတယ်။ သိမ်းထားတဲ့ရလဒ် ရှိရင် Backend က အဲဒီကနေ ပြန်ပေးနိုင်တယ်။ မရှိရင် PostgreSQL ကနေ ဖတ်ပြီး ရလဒ်အသစ်ကို Redis ထဲမှာ သတ်မှတ်ထားတဲ့ အချိန်အထိ သိမ်းထားနိုင်တယ်။')],
        ['Database Server', p('Runs PostgreSQL, which executes SQL and manages records such as courses and enrollments. PostgreSQL keeps its data files on persistent storage so the records remain after the server process restarts.', 'PostgreSQL ကို run တယ်။ PostgreSQL က SQL query တွေကို လုပ်ဆောင်ပြီး သင်တန်းနဲ့ စာရင်းသွင်း မှတ်တမ်းတွေကို စီမံပေးတယ်။ Server process ပြန်စရင် မှတ်တမ်းတွေ ဆက်ရှိနေဖို့ PostgreSQL က data file တွေကို persistent storage ပေါ်မှာ သိမ်းတယ်။')],
        ['Cloud Storage', p('AWS S3 is an object storage service. The backend uses the S3 API over HTTPS to upload PDFs to a bucket and retrieve them for downloads.', 'AWS S3 က object storage service တစ်ခုပါ။ Backend က S3 API ကို HTTPS နဲ့ အသုံးပြုပြီး PDF ဖိုင်တွေကို bucket ထဲ သိမ်းနိုင်သလို download အတွက် ပြန်ရယူနိုင်ပါတယ်။')],
      ],
    },
  ],
  [
    ['MDN · Using the Fetch API', 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'],
    ['PostgreSQL · Client/server architecture', 'https://www.postgresql.org/docs/current/tutorial-arch.html'],
    ['Redis · Cache-aside', 'https://redis.io/docs/latest/develop/use-cases/cache-aside/'],
    ['AWS · Amazon S3', 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html'],
  ]),
  titleSection: 'web-app-flow',
  introBlocks: p([], []),
};
