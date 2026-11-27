import { p, page } from './content.js';

const dnsFigure = (name, en, my) => ({
  src: '/docs/media/web-fundamentals/' + name + '.jpg',
  width: 2048,
  height: 1143,
  alt: p(en, my),
  banner: true,
});

const introBlocks = p(
      [
        ["paragraph", "When you enter `https://www.example.com`, the browser needs an address to connect to before it can request the page. The URL gives it the name `www.example.com`. The browser uses **DNS (Domain Name System)** to look up the IP address for that name."],
        ["paragraph", "Think of tapping someone's name in your phone contacts. The phone looks up the saved number and calls it. The domain name is like the person's name, the IP address is like the number, and DNS is like the contacts list. In practice, many DNS servers share responsibility for the records."],
      ],
      [
        ["paragraph", "Browser မှာ `https://www.example.com` လို့ ရိုက်ထည့်လိုက်ရင် Browser က စာမျက်နှာကို တောင်းဖို့ ဘယ်လိပ်စာဆီ ချိတ်ရမလဲဆိုတာ သိဖို့လိုပါတယ်။ URL ထဲမှာတော့ `www.example.com` ဆိုတဲ့ နာမည်ပဲ ပါပါတယ်။ အဲဒီနာမည်အတွက် သုံးရမယ့် IP Address ကို **DNS (Domain Name System)** ကနေ ရှာယူပါတယ်။"],
        ["paragraph", "ဖုန်းထဲမှာ လူတစ်ယောက်ရဲ့ နာမည်ကို နှိပ်လိုက်ရင် သိမ်းထားတဲ့ ဖုန်းနံပါတ်နဲ့ ခေါ်ပေးသလို စဉ်းစားကြည့်လို့ရပါတယ်။ ဒီဥပမာမှာ Domain Name က လူနာမည်၊ IP Address က ဖုန်းနံပါတ်၊ DNS က နာမည်နဲ့ နံပါတ်ကို တွဲရှာပေးတဲ့ ဖုန်းစာအုပ်နဲ့ တူပါတယ်။ လက်တွေ့မှာတော့ DNS အချက်အလက်တွေကို DNS Server အများအပြားက တာဝန်ခွဲပြီး ကိုင်တွယ်ပါတယ်။"],
      ]
    );

const dns = page('dns', p("What Is DNS? How Does a Domain Name Lead to an IP Address?", "DNS ဆိုတာ ဘာလဲ။ Domain Name ကနေ IP Address ကို ဘယ်လိုရှာလဲ။"),
  p(...['en', 'my'].map(language => introBlocks[language][0][1].replaceAll('**', '').replaceAll('`', ''))), [
  {
    id: "ip-address",
    title: p("What Is an IP Address?", "IP Address ဆိုတာ ဘာလဲ။"),
    blocks: p(
      [
        ["paragraph", "Computers, phones, and servers use numeric **IP addresses** to communicate over a network. Like a phone number on a call, an IP address helps identify where to send data. There are two formats you will encounter."],
        ["table", [
          ["Format", "Example", "What it looks like"],
          ["IPv4", "`192.0.2.10`", "Four groups of decimal digits separated by dots."],
          ["IPv6", "`2001:db8::10`", "Groups of hexadecimal digits separated by colons. IPv6 supports more addresses than IPv4."],
        ]],
        ["paragraph", "A laptop connected to home Wi-Fi might have a **private IP address** such as `192.168.1.10`. It uses that address on the home network. When you open a website over the internet, the browser may connect to the **public IP address** of a web server, a load balancer that distributes requests, or a content delivery network (CDN)."],
        ["paragraph", "A domain name can resolve to several IP addresses. Several websites can also share one IP address. If moving to a new host changes the address, you can update the DNS records and keep the domain name."],
      ],
      [
        ["paragraph", "အင်တာနက်နဲ့ ချိတ်ထားတဲ့ ကွန်ပျူတာ၊ ဖုန်း၊ server တိုင်းမှာ **IP address** ဆိုတဲ့ နံပါတ်လိပ်စာ ရှိပါတယ်။ ဖုန်းနံပါတ်လိုပါပဲ၊ ဒီနံပါတ်မရှိရင် ဘယ်သူ့ဆီကမှ ခေါ်လို့မရသလို ဒေတာ ပို့လို့လည်း မရပါဘူး။ IP Address မှာ တွေ့ရမယ့် ပုံစံနှစ်မျိုး ရှိပါတယ်။"],
        ["table", [
          ["ပုံစံ", "နမူနာ", "ရေးပုံ"],
          ["IPv4", "`192.0.2.10`", "ဂဏန်းအစုလေးခုကို အစက်နဲ့ ခွဲရေးပါတယ်။"],
          ["IPv6", "`2001:db8::10`", "Hexadecimal အစုတွေကို `:` နဲ့ ခွဲရေးပါတယ်။ IPv4 ထက် အသုံးပြုနိုင်တဲ့ လိပ်စာ ပိုများပါတယ်။"],
        ]],
        ["paragraph", "အိမ်က Wi-Fi နဲ့ ချိတ်ထားတဲ့ Laptop မှာ `192.168.1.10` လို **Private IP** ရှိနိုင်ပါတယ်။ ဒီလိပ်စာကို အိမ်တွင်း Network လို သီးသန့် Network တွေမှာ သုံးပါတယ်။ အင်တာနက်ကနေ Website တစ်ခုဆီ ဝင်တဲ့အခါ Browser ချိတ်ဆက်တဲ့ **Public IP** က Web Server ရဲ့ လိပ်စာ ဖြစ်နိုင်သလို၊ Request တွေကို ဖြန့်ပေးတဲ့ Load Balancer သို့မဟုတ် CDN ရဲ့ လိပ်စာလည်း ဖြစ်နိုင်ပါတယ်။"],
        ["paragraph", "Domain Name တစ်ခုအတွက် IP Address တစ်ခုထက်ပိုပြီး ပြန်လာနိုင်ပါတယ်။ Website အများအပြားကလည်း IP Address တစ်ခုတည်းကို မျှဝေသုံးနိုင်ပါတယ်။ Hosting ပြောင်းလို့ ချိတ်ရမယ့် IP Address ပြောင်းသွားရင် DNS အချက်အလက်ကို ပြင်ပြီး အရင် Domain Name ကို ဆက်သုံးလို့ရပါတယ်။"],
      ]
    ),
  },
  {
    id: "domain-and-ip",
    title: p("How Is a Domain Name Structured?", "Domain Name ကို ဘယ်လို ဖွဲ့ထားလဲ။"),
    figure: dnsFigure('domain-name-structure',
      'In www.example.com, www is the subdomain label, example is the second-level label, and .com is the top-level domain. The registered domain is example.com.',
      'www.example.com မှာ www က Subdomain အပိုင်း၊ example က .com အောက်က နာမည်၊ .com က Top-Level Domain ဖြစ်ပါတယ်။ မှတ်ပုံတင်ထားတဲ့ Domain က example.com ပါ။'
    ),
    blocks: p(
      [
        ["paragraph", "Read `www.example.com` from right to left to see how the parts fit together."],
        ["table", [
          ["Part", "What it means"],
          ["`.com`", "A top-level domain (TLD). `.org`, `.net`, and `.mm` are other examples."],
          ["`example.com`", "The registered domain name in this example. `example` is the name under `.com`."],
          ["`www.example.com`", "A subdomain of `example.com`. Another possible subdomain is `blog.example.com`."],
        ]],
        ["paragraph", "To use your own domain name, register an available name through a domain registrar and renew the registration to keep using it after its term ends. Once you have a name, you need hosting to make the website available at that name."],
      ],
      [
        ["paragraph", "`www.example.com` ကို ညာဘက်ကနေ အဆင့်လိုက် ကြည့်ရင် နာမည်ရဲ့ ဖွဲ့စည်းပုံကို မြင်ရပါတယ်။"],
        ["table", [
          ["အပိုင်း", "ဘာကို ဆိုလိုလဲ။"],
          ["`.com`", "Top-Level Domain (TLD) ပါ။ `.org`၊ `.net` နဲ့ `.mm` တို့လည်း TLD တွေပါ။"],
          ["`example.com`", "ဒီဥပမာမှာ မှတ်ပုံတင်ထားတဲ့ Domain Name ပါ။ `example` က `.com` အောက်မှာ ရွေးထားတဲ့ နာမည်ပါ။"],
          ["`www.example.com`", "`example.com` အောက်က Subdomain ပါ။ `blog.example.com` လို Subdomain ကိုလည်း လိုအပ်သလို သတ်မှတ်နိုင်ပါတယ်။"],
        ]],
        ["paragraph", "ကိုယ်ပိုင် Domain Name သုံးဖို့ ရနိုင်တဲ့ နာမည်ကို Domain Registrar ဆီမှာ မှတ်ပုံတင်ရပါတယ်။ သတ်မှတ်ထားတဲ့ ကာလကုန်သွားရင် ဆက်သုံးဖို့ သက်တမ်းတိုးရပါတယ်။ နာမည်ရပြီးရင် အဲဒီနာမည်နဲ့ ဖွင့်ကြည့်လို့ရမယ့် Website ကို တင်ဖို့ Hosting လိုလာပါတယ်။"],
      ]
    ),
  },
  {
    id: "web-hosting",
    title: p("What Does Web Hosting Do?", "Web Hosting က ဘာလုပ်ပေးလဲ။"),
    figure: dnsFigure('web-hosting-types',
      'Four hosting options: shared hosting, VPS, dedicated server, and managed hosting.',
      'Shared Hosting၊ VPS၊ Dedicated Server နဲ့ Managed Hosting ဆိုတဲ့ Hosting ပုံစံ လေးမျိုး။'
    ),
    blocks: p(
      [
        ["paragraph", "**Web hosting** makes a website available over the internet. A basic site can include HTML, CSS, JavaScript, and images. A web app can also run a backend that receives requests and generates responses. If the app needs a database, it can connect to a separate database service."],
        ["paragraph", "A **web server** is software that accepts HTTP requests from the browser and sends responses. It can run on a physical server, a virtual machine, or infrastructure managed by a hosting provider."],
        ["table", [
          ["Hosting type", "How it works"],
          ["Shared hosting", "Several websites share resources such as CPU and memory on a server."],
          ["VPS", "You can install and manage software on a virtual machine allocated to you."],
          ["Dedicated server", "You get a physical server for your own use."],
          ["Managed hosting", "You deploy the website and the provider manages the infrastructure. Vercel and Firebase Hosting are examples."],
        ]],
        ["paragraph", "After deployment, the hosting provider may give you an IP address or a hostname. Add the value supplied by the provider to the DNS record so visitors can open the site at `www.example.com`."],
      ],
      [
        ["paragraph", "**Web Hosting** က Website ကို အင်တာနက်ကနေ ဝင်ကြည့်လို့ရအောင် တင်ထားပေးတဲ့ ဝန်ဆောင်မှုပါ။ ရိုးရိုး Website တစ်ခုမှာ HTML၊ CSS၊ JavaScript နဲ့ ပုံတွေကို တင်ထားနိုင်ပါတယ်။ Web App တစ်ခုဆိုရင် Request လက်ခံပြီး အဖြေထုတ်ပေးတဲ့ Backend ကိုပါ run ထားနိုင်ပါတယ်။ Database လိုအပ်ရင် သီးသန့် Database Service နဲ့လည်း ချိတ်သုံးနိုင်ပါတယ်။"],
        ["paragraph", "ဒီနေရာမှာ **Web Server** က Browser ရဲ့ HTTP Request ကို လက်ခံပြီး Response ပြန်ပေးတဲ့ Software ပါ။ အဲဒီ Software ကို Physical Server၊ Virtual Machine သို့မဟုတ် Hosting Provider စီမံပေးထားတဲ့ စနစ်ပေါ်မှာ run နိုင်ပါတယ်။"],
        ["table", [
          ["Hosting ပုံစံ", "ဘယ်လို သုံးလဲ။"],
          ["Shared Hosting", "Website အများအပြားက Server ရဲ့ CPU၊ Memory လို အရင်းအမြစ်တွေကို မျှဝေသုံးပါတယ်။"],
          ["VPS", "ကိုယ့်အတွက် ခွဲပေးထားတဲ့ Virtual Machine မှာ လိုအပ်တဲ့ Software တွေကို ကိုယ်တိုင် ထည့်သွင်းပြီး စီမံနိုင်ပါတယ်။"],
          ["Dedicated Server", "Physical Server တစ်လုံးကို သီးသန့်သုံးပါတယ်။"],
          ["Managed Hosting", "Website ကို deploy တင်ပြီး Server လည်ပတ်ရေးကို Provider က စီမံပေးပါတယ်။ Vercel နဲ့ Firebase Hosting တို့က ဥပမာတွေပါ။"],
        ]],
        ["paragraph", "Website တင်ပြီးသွားရင် Hosting Provider က IP Address တစ်ခု ဒါမှမဟုတ် ချိတ်ပေးရမယ့် Hostname တစ်ခု ပေးနိုင်ပါတယ်။ `www.example.com` နဲ့ Website ကို ဖွင့်လို့ရအောင် DNS Record မှာ Provider ပေးထားတဲ့ တန်ဖိုးကို ထည့်ရပါတယ်။"],
      ]
    ),
  },
  {
    id: "dns-lookup",
    title: p("How Does the Browser Look Up www.example.com?", "Browser က www.example.com ကို ဘယ်လို ရှာလဲ။"),
    figure: dnsFigure('dns-resolution',
      'When a browser asks for the IP address of example.com, the resolver follows referrals from the root and .com DNS servers, gets the IP address from the authoritative server, and returns it to the browser.',
      'Browser က example.com ရဲ့ IP Address ကို မေးတဲ့အခါ Resolver က Root DNS နဲ့ .com DNS ရဲ့ လမ်းညွှန်ချက်အတိုင်း Authoritative DNS ဆီ ဆက်မေးပြီး ရလာတဲ့ လိပ်စာကို Browser ဆီ ပြန်ပို့ပုံ။'
    ),
    blocks: p(
      [
        ["paragraph", "The browser or operating system can check whether it still has a cached DNS answer. If there is no usable answer, it asks a **recursive resolver**. Your network may provide one, or you can use a public resolver such as Cloudflare (`1.1.1.1`) or Google Public DNS (`8.8.8.8`)."],
        ["paragraph", "If the resolver has neither the answer nor the relevant referrals cached, it follows these steps."],
        ["list", [
          "The **root nameserver** directs the resolver to the TLD nameservers responsible for `.com`.",
          "The **`.com` TLD nameserver** directs it to the authoritative nameservers responsible for the `example.com` DNS records.",
          "The **authoritative nameserver** returns the record for `www.example.com`. The record can contain an IP address or another hostname that the resolver needs to look up.",
        ]],
        ["paragraph", "The resolver handles these queries and returns the resulting IP address. The browser connects to that address and, once the HTTPS connection is established, requests the page from the web server."],
      ],
      [
        ["paragraph", "အရင်က ရှာထားတဲ့ DNS အဖြေ ရှိသေးလားဆိုတာ Browser သို့မဟုတ် Operating System ရဲ့ Cache မှာ စစ်နိုင်ပါတယ်။ သုံးလို့ရတဲ့ အဖြေ မရှိရင် **Recursive Resolver** ဆီ မေးပါတယ်။ Resolver က ကိုယ့် Network က သတ်မှတ်ပေးထားတဲ့ DNS ဝန်ဆောင်မှု ဖြစ်နိုင်သလို Cloudflare (`1.1.1.1`) နဲ့ Google Public DNS (`8.8.8.8`) လို Public Resolver လည်း ဖြစ်နိုင်ပါတယ်။"],
        ["paragraph", "Resolver ရဲ့ Cache ထဲမှာပါ အဖြေနဲ့ လိုအပ်တဲ့ လမ်းညွှန်ချက်တွေ မရှိဘူးဆိုရင် ဒီလို ဆက်ရှာပါတယ်။"],
        ["list", [
          "**Root Nameserver** ကို မေးတဲ့အခါ `.com` အတွက် တာဝန်ယူထားတဲ့ TLD Nameserver တွေကို ညွှန်ပေးပါတယ်။",
          "**`.com` TLD Nameserver** ကို မေးတဲ့အခါ `example.com` ရဲ့ DNS Records တွေကို တာဝန်ယူထားတဲ့ Authoritative Nameserver တွေကို ညွှန်ပေးပါတယ်။",
          "**Authoritative Nameserver** ကို `www.example.com` အတွက် မေးတဲ့အခါ သတ်မှတ်ထားတဲ့ Record ကို ပြန်ပေးပါတယ်။ Record က IP Address ဖြစ်နိုင်သလို ဆက်ရှာရမယ့် တခြား Hostname တစ်ခုလည်း ဖြစ်နိုင်ပါတယ်။",
        ]],
        ["paragraph", "ဒီအဆင့်တွေကို Resolver က လိုက်မေးပေးပါတယ်။ IP Address ရပြီဆိုရင် Browser ဘက်ကို ပြန်ပေးပြီး Browser က အဲဒီလိပ်စာဆီ ချိတ်ဆက်ပါတယ်။ HTTPS ချိတ်ဆက်မှု ပြီးတဲ့အခါမှ Browser က Web Server ဆီ စာမျက်နှာကို တောင်းပါတယ်။"],
      ]
    ),
  },
  {
    id: "dns-records",
    title: p("What Does a DNS Record Specify?", "DNS Record တစ်ခုမှာ ဘာတွေ သတ်မှတ်ထားလဲ။"),
    figure: dnsFigure('dns-record-types',
      'Example DNS records: A points to IPv4, AAAA points to IPv6, CNAME points to another hostname, and MX specifies a mail server.',
      'DNS Record နမူနာများ။ A က IPv4၊ AAAA က IPv6၊ CNAME က တခြား Hostname ကို ညွှန်းပြီး MX က Email လက်ခံမယ့် Mail Server ကို သတ်မှတ်ပါတယ်။'
    ),
    blocks: p(
      [
        ["paragraph", "In the hosting example above, use an `A` record when the provider supplies an IPv4 address. If the provider supplies a hostname for `www` to point to, a `CNAME` record is commonly used."],
        ["table", [
          ["Record", "What it does", "Example"],
          ["`A`", "Maps a name to an IPv4 address.", "`example.com` → `192.0.2.10`"],
          ["`AAAA`", "Maps a name to an IPv6 address.", "`example.com` → `2001:db8::10`"],
          ["`CNAME`", "Makes a name an alias for another hostname. The resolver continues the lookup using that hostname.", "`www.example.com` → `example.com`"],
          ["`MX`", "Specifies the mail server that receives email for the domain.", "`example.com` → `mail.example.com`"],
        ]],
        ["paragraph", "In the `CNAME` example, the browser keeps using `www.example.com` while the resolver looks up the IP address for `example.com`. An HTTP redirect that changes the address in the browser is configured on the web server side."],
      ],
      [
        ["paragraph", "အပေါ်က Hosting ဥပမာကို ပြန်ကြည့်ပါ။ Provider က IPv4 ပေးရင် `A` Record သုံးနိုင်ပါတယ်။ Hostname ပေးပြီး `www` ကို အဲဒီနာမည်နဲ့ ချိတ်ခိုင်းရင် `CNAME` Record ကို သုံးလေ့ရှိပါတယ်။"],
        ["table", [
          ["Record", "ဘာအတွက် သုံးလဲ။", "နမူနာ"],
          ["`A`", "နာမည်တစ်ခုအတွက် IPv4 Address သတ်မှတ်ပါတယ်။", "`example.com` → `192.0.2.10`"],
          ["`AAAA`", "နာမည်တစ်ခုအတွက် IPv6 Address သတ်မှတ်ပါတယ်။", "`example.com` → `2001:db8::10`"],
          ["`CNAME`", "နာမည်တစ်ခုကို တခြား Hostname ရဲ့ Alias အဖြစ် သတ်မှတ်ပါတယ်။ Resolver က အဲဒီ Hostname အတွက် ဆက်ရှာပေးပါတယ်။", "`www.example.com` → `example.com`"],
          ["`MX`", "Domain ဆီ ဝင်လာတဲ့ Email ကို ဘယ် Mail Server က လက်ခံမလဲဆိုတာ သတ်မှတ်ပါတယ်။", "`example.com` → `mail.example.com`"],
        ]],
        ["paragraph", "`CNAME` နမူနာမှာ Browser က `www.example.com` ကို ဆက်သုံးပါတယ်။ Resolver ကသာ `example.com` အတွက် IP Address ကို ဆက်ရှာပေးတာပါ။ Browser ရဲ့ Address Bar ကို ပြောင်းပေးတဲ့ HTTP Redirect က Web Server ဘက်မှာ သတ်မှတ်ရတဲ့ အလုပ်တစ်ခုပါ။"],
      ]
    ),
  },
  {
    id: "try-dns",
    title: p("Try nslookup on Windows", "Windows မှာ nslookup နဲ့ စမ်းကြည့်မယ်"),
    blocks: p(
      [
        ["paragraph", "Run these commands one at a time in Command Prompt."],
      ],
      [
        ["paragraph", "Command Prompt မှာ အောက်က Command တွေကို တစ်ကြောင်းချင်း run ကြည့်ပါ။"],
      ]
    ),
    code: "nslookup -type=A example.com\nnslookup -type=A example.com 1.1.1.1\nnslookup -type=A example.com 8.8.8.8",
    displayOnly: true,
    codeLanguage: "shell",
    afterCode: p(
      [
        ["paragraph", "`-type=A` requests the `A` record, which contains an IPv4 address. The first command queries your device's configured resolver. The other two commands query the resolver specified at the end of the command, so you can try them without changing your device's DNS settings."],
        ["paragraph", "`Server` and `Address` at the top of the output show the resolver you queried. Look below for the IPv4 address returned for `example.com`. Replace `-type=A` with `-type=AAAA` to look for IPv6 addresses."],
      ],
      [
        ["paragraph", "`-type=A` က IPv4 Address ပါတဲ့ `A` Record ကို တောင်းတာပါ။ ပထမ Command က စက်မှာ သတ်မှတ်ထားတဲ့ Resolver ကို မေးပါတယ်။ ကျန်တဲ့ Command နှစ်ခုက နောက်ဆုံးမှာ ထည့်ပေးထားတဲ့ Resolver ဆီ တိုက်ရိုက်မေးတာဖြစ်လို့ စက်ရဲ့ DNS Setting ကို ပြောင်းစရာ မလိုပါဘူး။"],
        ["paragraph", "Output အပေါ်ပိုင်းက `Server` နဲ့ `Address` က ကိုယ်မေးခဲ့တဲ့ DNS Resolver ကို ပြတာပါ။ အောက်ပိုင်းမှာ `example.com` အတွက် ပြန်လာတဲ့ IPv4 Address ကို ကြည့်လို့ရပါတယ်။ IPv6 အတွက် စမ်းချင်ရင် `-type=A` နေရာမှာ `-type=AAAA` ပြောင်းပြီး run ကြည့်ပါ။"],
      ]
    ),
  },
], [
  [p("Cloudflare — What is DNS?", "Cloudflare — DNS ဆိုတာ ဘာလဲ။"), "https://www.cloudflare.com/learning/dns/what-is-dns/"],
  [p("Cloudflare — Types of DNS servers", "Cloudflare — DNS Server အမျိုးအစားများ"), "https://www.cloudflare.com/learning/dns/dns-server-types/"],
  ["Cloudflare — DNS Records", "https://www.cloudflare.com/learning/dns/dns-records/"],
  [p("ICANN — Registering a domain name", "ICANN — Domain Name မှတ်ပုံတင်ခြင်း"), "https://www.icann.org/resources/pages/register-domain-name-2017-06-20-en"],
  [p("ICANN — Renewing a domain name", "ICANN — Domain Name သက်တမ်းတိုးခြင်း"), "https://www.icann.org/resources/pages/renew-domain-name-2018-12-07-en"],
  [p("Vercel — Adding and configuring a custom domain", "Vercel — ကိုယ်ပိုင် Domain Name ချိတ်ဆက်ခြင်း"), "https://vercel.com/docs/domains/working-with-domains/add-a-domain"],
  ["Microsoft Learn — nslookup", "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/nslookup"],
]);

export const dnsLesson = {
  ...dns,
  introFigure: dnsFigure('dns-domain-to-ip',
    'DNS looks up the IP address for www.example.com so that the browser can connect to a web server. The diagram uses 192.0.2.1 as an illustrative address.',
    'Browser က Web Server ဆီ ချိတ်ဆက်နိုင်ဖို့ DNS က www.example.com ရဲ့ IP Address ကို ရှာပေးပုံ။ ပုံထဲက 192.0.2.1 က နမူနာလိပ်စာပါ။'
  ),
  introBlocks,
  referencesTitle: p("References", "ကိုးကားချက်များ"),
};
