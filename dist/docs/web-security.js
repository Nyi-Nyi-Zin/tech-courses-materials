import { guide, p, page, snippet } from './content.js';

const owasp = (slug, label) => ['OWASP · ' + label, 'https://cheatsheetseries.owasp.org/cheatsheets/' + slug + '_Cheat_Sheet.html'];
const mdn = (path, label) => ['MDN · ' + label, 'https://developer.mozilla.org/en-US/docs/' + path];
const top10 = ['OWASP Top 10 (2025)', 'https://owasp.org/Top10/2025/'];
const asvs = ['OWASP Application Security Verification Standard', 'https://asvs.owasp.org/'];

export const webSecurityGuide = guide('web-security', 'Web Security', '', p(
  'Follow a shared document from browser to database. Learn who can read it, how to protect each request, and how to check those protections before release.',
  'လူအများ ပူးပေါင်းသုံးတဲ့ app တစ်ခုမှာ document တစ်စောင်ကို ဘယ်သူဖတ်နိုင်လဲ၊ ဘယ်သူပြင်နိုင်လဲဆိုတာကနေ စပါမယ်။ Browser ကနေ database အထိ request တစ်ခုကို ဘယ်လိုကာကွယ်ပြီး release မလုပ်ခင် ဘယ်လိုစစ်ဆေးမလဲဆိုတာ လေ့လာရပါမယ်။'
), [
  page('introduction', p('Introduction to Web Security', 'Web Security ဆိုတာ ဘာလဲ'), p(
    'Web security protects the people, data, and operations of a web application. Consider a private document shared by an author with one editor. Opening it, changing it, and recovering it after an outage pose different security questions.',
    'Web Security ဆိုတာ web application သုံးသူတွေ၊ သူတို့ရဲ့ data နဲ့ app ရဲ့ လုပ်ဆောင်ချက်တွေကို ကာကွယ်တာပါ။ စာရေးသူက private document တစ်စောင်ကို editor တစ်ယောက်နဲ့ မျှဝေထားတယ်ဆိုပါစို့။ စာကို ဘယ်သူဖတ်နိုင်လဲ၊ ဘယ်သူပြင်နိုင်လဲ၊ စက်ပျက်သွားရင် မူပြန်ရနိုင်လားဆိုတာ သီးခြား စဉ်းစားရပါတယ်။'
  ), [
    snippet('security-goals', p('Confidentiality, integrity, and availability', 'လျှို့ဝှက်မှု၊ အချက်အလက် မှန်ကန်မှုနဲ့ အသုံးပြုနိုင်မှု'), p(
      'Confidentiality limits disclosure. Integrity preserves authorized changes and protects against unintended ones. Availability keeps the service and its data accessible when needed. Each goal can be expressed as an observable outcome.',
      'Confidentiality က ကြည့်ခွင့်ရှိသူတွေပဲ စာကို ဖတ်နိုင်ဖို့ပါ။ Integrity က ခွင့်ပြုထားတဲ့ ပြင်ဆင်ချက်အတိုင်း စာသားကို ထိန်းထားဖို့ပါ။ Availability က လိုတဲ့အချိန် စာပြန်ဖွင့်နိုင်ဖို့ပါ။ အောက်က မျှော်မှန်းရလဒ်တွေက ဒီရည်ရွယ်ချက် သုံးခုကို ဘယ်လိုစစ်ရမလဲဆိုတာ ပြပါတယ်။'
    ), `Confidentiality   An uninvited reader sees no document content.
Integrity         A viewer cannot save a revision.
Availability      A restored backup opens at the expected revision.`),
    snippet('threat-model', p('Model the data flow and its trust boundaries', 'Data ဘယ်ကိုသွားလဲ၊ ဘယ်နေရာမှာ ပြန်စစ်ရမလဲ'), p(
      'A threat is something that could cause harm. A vulnerability is a weakness that makes the harm possible. At each trust boundary, record the asset, what could go wrong, and which component enforces the rule. In this example the browser proposes an edit and the API decides whether to accept it.',
      'Threat ဆိုတာ ထိခိုက်မှု ဖြစ်စေနိုင်တဲ့ အရာပါ။ Vulnerability ဆိုတာ အဲဒီထိခိုက်မှု ဖြစ်လာစေနိုင်တဲ့ အားနည်းချက်ပါ။ Trust boundary ဆိုတာ ယုံကြည်ရတဲ့အဆင့် ပြောင်းသွားတဲ့ နေရာပါ။ Browser က စာပြင်ချင်ကြောင်း ပို့လာတဲ့အခါ API ဘက်က editor ဟုတ်မဟုတ် စစ်ရပါတယ်။'
    ), `Asset       Private document and revision history
Boundary    Browser sends a proposed revision to the API
Risk        A former editor could retain write access
Control     Check current membership on each save
Evidence    Revoking the editor prevents the next save`),
  ], [owasp('Threat_Modeling', 'Threat modeling'), top10]),

  page('https-and-tls', p('HTTPS, TLS, and HSTS', 'HTTPS၊ TLS နဲ့ HSTS'), p(
    'Before sending a login or a document, the browser needs a protected connection to the right server. HTTPS carries HTTP over TLS.',
    'Login အချက်အလက်နဲ့ စာသားတွေ မပို့ခင် browser က သက်ဆိုင်ရာ server ဆီ လုံလုံခြုံခြုံ ချိတ်ဆက်နိုင်ဖို့ လိုပါတယ်။ HTTPS ဆိုတာ TLS နဲ့ ကာကွယ်ထားတဲ့ ချိတ်ဆက်မှုကနေ HTTP သုံးတာပါ။'
  ), [
    snippet('transport', p('Protect each network hop', 'ချိတ်ဆက်မှု တစ်ဆင့်ချင်းကို ကာကွယ်ခြင်း'), p(
      'The browser checks the server certificate for the hostname and a trusted issuer. TLS protects data in transit against reading and modification. If a proxy terminates TLS, review the next connection separately. Load scripts, styles, and images over HTTPS too.',
      'Browser က certificate ကို ယုံကြည်ရတဲ့ အဖွဲ့အစည်းက ထုတ်ပေးထားလား၊ ဖွင့်ထားတဲ့ hostname နဲ့ ကိုက်လား စစ်ပါတယ်။ TLS က လမ်းမှာ data ကို ကြားဖတ်တာ၊ ပြောင်းတာတွေကနေ ကာကွယ်ပါတယ်။ Proxy မှာ TLS ချိတ်ဆက်မှု ဆုံးသွားရင် proxy နဲ့ API ကြားက ချိတ်ဆက်မှုကိုလည်း သီးခြား ကာကွယ်ပါ။ Page ထဲက script၊ CSS၊ ပုံတွေကိုလည်း HTTPS နဲ့ ခေါ်ပါ။'
    ), `Browser to reverse proxy    HTTPS, valid certificate for docs.example
Reverse proxy to API        Authenticated TLS on the internal connection`),
    snippet('hsts', p('Remember HTTPS on later visits', 'နောက်တစ်ကြိမ် ဝင်တဲ့အခါ HTTPS ကို သုံးစေခြင်း'), p(
      'Redirect HTTP to HTTPS. Once HTTPS works reliably, send Strict-Transport-Security on the HTTPS response. The browser remembers the rule for max-age seconds. Start with a short rollout. Enable includeSubDomains only after every affected subdomain supports HTTPS.',
      'HTTP နဲ့ ဝင်လာရင် HTTPS ဆီ redirect လုပ်ပါ။ HTTPS အဆင်ပြေကြောင်း စစ်ပြီးမှ HTTPS response မှာ အောက်က header ထည့်ပါ။ Browser က max-age မှာ သတ်မှတ်ထားတဲ့ စက္ကန့်အတွင်း ဒီ host ကို HTTPS နဲ့ပဲ ပြန်ချိတ်ပါမယ်။ အစမှာ သက်တမ်းတိုတိုနဲ့ စမ်းပါ။ Subdomain အားလုံး HTTPS ရပြီဆိုမှ includeSubDomains ထည့်ပါ။'
    ), `Strict-Transport-Security: max-age=300`),
  ], [owasp('Transport_Layer_Security', 'TLS'), mdn('Web/HTTP/Reference/Headers/Strict-Transport-Security', 'Strict-Transport-Security')]),

  page('origins-and-cors', p('Same-Origin Policy and CORS', 'Same-Origin Policy နဲ့ CORS'), p(
    'A web page may call an API on a different origin. The browser has rules about which responses JavaScript may read. The API still decides who may use the data.',
    'Frontend နဲ့ API ကို domain ခွဲတင်တဲ့အခါ JavaScript က API response ကို ဖတ်လို့ရမရ browser က စစ်ပါတယ်။ အဲဒီ data ကို ဘယ်သူအသုံးပြုခွင့်ရှိလဲဆိုတာတော့ API ဘက်က စစ်ရပါတယ်။'
  ), [
    snippet('origin', p('Compare two origins', 'Origin နှစ်ခုကို နှိုင်းယှဉ်ခြင်း'), p(
      'An origin consists of scheme, host, and port. A different path can share an origin. Changing the subdomain or port changes the origin. By default, the same-origin policy restricts a script from reading many cross-origin responses.',
      'Origin တစ်ခုမှာ scheme၊ host နဲ့ port ပါပါတယ်။ Path ပြောင်းပေမဲ့ origin တူနိုင်ပါတယ်။ Subdomain ဒါမှမဟုတ် port ပြောင်းရင်တော့ origin ကွဲပါတယ်။ ပုံမှန်အားဖြင့် တခြား origin ရဲ့ response တွေကို script က ဖတ်နိုင်တဲ့ အခြေအနေကို browser က ကန့်သတ်ထားပါတယ်။'
    ), `const app = new URL("https://app.example/documents");
new URL("/settings", app).origin === app.origin;          // true
new URL("https://api.example").origin === app.origin;     // false`),
    snippet('cors', p('Share a response with an approved frontend', 'ခွင့်ပြုထားတဲ့ frontend က response ဖတ်နိုင်အောင် ပြင်ဆင်ခြင်း'), p(
      'For cookie-authenticated cross-origin fetches, the client needs credentials set to include and applicable cookies. Return the exact approved origin and allow credentials. If the header varies by Origin, use Vary. For requests requiring preflight, the API also answers OPTIONS with the allowed method and headers. CORS governs browser reads and some request dispatch. Every endpoint needs its own access checks.',
      'Cookie သုံးတဲ့ cross-origin fetch မှာ client က credentials ကို include သတ်မှတ်ရပြီး browser ရဲ့ cookie စည်းမျဉ်းတွေနဲ့လည်း ကိုက်ရပါမယ်။ API က ခွင့်ပြုထားတဲ့ origin အတိအကျကိုသာ ပြန်ပေးပါ။ Origin အလိုက် header ပြောင်းရင် Vary ထည့်ပါ။ Preflight လိုတဲ့ request မှာ browser က OPTIONS နဲ့ အရင်မေးပြီး API က ခွင့်ပြုတဲ့ method နဲ့ header တွေကို ဖြေရပါတယ်။ Endpoint တိုင်းမှာ အသုံးပြုသူရဲ့ လုပ်ပိုင်ခွင့်ကိုလည်း စစ်ပါ။'
    ), `Access-Control-Allow-Origin: https://app.example
Access-Control-Allow-Credentials: true
Vary: Origin`),
  ], [mdn('Web/Security/Defenses/Same-origin_policy', 'Same-origin policy'), mdn('Web/HTTP/Guides/CORS', 'CORS')]),

  page('authentication', p('Authentication, Passwords, and Account Recovery', 'Authentication၊ Password နဲ့ Account ပြန်ရယူခြင်း'), p(
    'Authentication establishes who signed in. The same account can often be reached through a password, a passkey, or a recovery flow. Each entry point needs protection.',
    'Authentication ဆိုတာ ဝင်လာသူဟာ ဘယ် account ပိုင်ရှင်လဲဆိုတာ အတည်ပြုခြင်းပါ။ Password၊ passkey ဒါမှမဟုတ် account recovery ကနေ account တစ်ခုတည်းကို ဝင်နိုင်လို့ လမ်းကြောင်းတစ်ခုချင်းစီကို ကာကွယ်ရပါတယ်။'
  ), [
    snippet('passwords', p('Store a password verifier', 'Password ကို စစ်ဆေးနိုင်မယ့် hash သိမ်းခြင်း'), p(
      'Use a maintained password library with a slow password hash such as Argon2id. Let it generate a unique salt and store the encoded result including the work settings. At login use its verify function. Choose a cost your service can sustain and increase it over time. The example shows the library workflow in pseudocode.',
      'Argon2id လို password hash ကို ပံ့ပိုးတဲ့ library သုံးပါ။ Password တစ်ခုစီအတွက် salt အသစ်ကို library က ထုတ်ပေးပြီး သုံးထားတဲ့ setting တွေနဲ့အတူ hash ကို သိမ်းပါ။ Login ဝင်ချိန်မှာ library ရဲ့ verify နဲ့ တိုက်စစ်ပါ။ Server ခံနိုင်တဲ့ တွက်ချက်မှုကုန်ကျစရိတ်ကို တိုင်းပြီး သတ်မှတ်ပါ။ အောက်မှာ library သုံးပုံကို pseudocode နဲ့ ပြထားပါတယ်။'
    ), `registration: encoded = passwordLibrary.hash(password, algorithm="argon2id")
login:        valid = passwordLibrary.verify(encoded, submittedPassword)`),
    snippet('factors', p('Use independent authentication factors', 'MFA မှာ သီးခြားအထောက်အထားတွေ သုံးခြင်း'), p(
      'Multifactor authentication (MFA) combines independent factors such as a password and possession of a registered authenticator. A second password is still the same factor. For sensitive accounts, offer phishing-resistant passkeys with user verification. Protect factor enrollment and replacement with reauthentication and notify the owner of changes.',
      'Multifactor authentication (MFA) မှာ ကိုယ်သိတဲ့ password နဲ့ ကိုယ့်လက်ဝယ်ရှိတဲ့ authenticator လို သီးခြားအထောက်အထားတွေကို တွဲစစ်ပါတယ်။ Password နှစ်ခု တောင်းတာက သိထားတဲ့အရာ တစ်မျိုးတည်းကိုပဲ စစ်တာပါ။ အရေးကြီးတဲ့ account တွေအတွက် user verification ပါတဲ့ passkey သုံးနိုင်ပါတယ်။ Authenticator အသစ်ထည့်တာ၊ အဟောင်းလဲတာတွေမှာ ထပ်မံအတည်ပြုခိုင်းပြီး ပိုင်ရှင်ကို အကြောင်းကြားပါ။'
    ), `Knowledge    Account password
Possession   Registered security key or authenticator
Recovery     Single-use backup codes stored securely by the owner`),
    snippet('mfa-recovery', p('Protect sign-in and recovery together', 'Login နဲ့ recovery နှစ်ခုစလုံးကို ကာကွယ်ခြင်း'), p(
      'Use throttling and offer phishing-resistant authentication such as WebAuthn passkeys. For a reset request, return the same public message and comparable response timing whether the email exists or not. Deliver a random, expiring, single-use token through the verified recovery channel. After reset, notify the owner and revoke existing sessions according to policy.',
      'အကြိမ်များစွာ login ဝင်ဖို့ ကြိုးစားတာကို ကန့်သတ်ပြီး WebAuthn passkey လို phishing ကို ခံနိုင်တဲ့ နည်းလမ်း ထည့်ပါ။ Password ပြန်တောင်းတဲ့ email ကို စာရင်းထဲမှာ တွေ့သည်ဖြစ်စေ၊ မတွေ့သည်ဖြစ်စေ တူညီတဲ့ message ကို အချိန်အလားတူနဲ့ ပြန်ပေးပါ။ အတည်ပြုပြီးသား လမ်းကြောင်းကနေ သက်တမ်းတိုပြီး တစ်ကြိမ်ပဲ သုံးနိုင်တဲ့ random token ပို့ပါ။ ပြောင်းပြီးရင် ပိုင်ရှင်ကို အကြောင်းကြားပြီး session အဟောင်းတွေကို သတ်မှတ်ချက်အတိုင်း ပိတ်ပါ။'
    ), `Public response    If the account exists, recovery instructions will follow.
Recovery token     Random, short-lived, single use
Sensitive change   Reauthenticate before changing the recovery address`),
  ], [owasp('Authentication', 'Authentication'), owasp('Password_Storage', 'Password storage'), owasp('Forgot_Password', 'Account recovery'), owasp('Multifactor_Authentication', 'MFA')]),

  page('sessions-and-tokens', p('Sessions, Cookies, OAuth, and OpenID Connect', 'Session၊ Cookie၊ OAuth နဲ့ OpenID Connect'), p(
    'After sign-in the app needs to recognize later requests. A first-party app can use a server-side session. An app working with an identity provider can also receive identity information and delegated access tokens.',
    'Login ပြီးရင် နောက်ထပ် request တွေက ဘယ်သူ့ဆီက လာလဲဆိုတာ app က မှတ်မိဖို့ လိုပါတယ်။ ကိုယ့် app မှာ server-side session သုံးနိုင်ပါတယ်။ ပြင်ပ identity provider နဲ့ ချိတ်ရင်လည်း ဝင်လာသူရဲ့ အထောက်အထားနဲ့ API ခေါ်ခွင့်တွေကို ရယူနိုင်ပါတယ်။'
  ), [
    snippet('cookie', p('Issue and revoke a server-side session', 'Session ထုတ်ပေးခြင်းနဲ့ ပိတ်သိမ်းခြင်း'), p(
      'Use a framework-generated unpredictable identifier in a host-only cookie. Secure restricts transmission to HTTPS, HttpOnly prevents JavaScript from reading the cookie, and SameSite limits cross-site sending. The __Host- prefix requires Secure, Path=/, and no Domain. Rotate the ID on login or privilege changes. Enforce idle and absolute expiry on the server and revoke it at logout.',
      'Framework က ထုတ်ပေးတဲ့ ခန့်မှန်းလို့မရတဲ့ session ID ကို ဒီ host အတွက်ပဲ cookie ထဲမှာ ထားပါ။ Secure က HTTPS ကနေပဲ ပို့စေပြီး HttpOnly က JavaScript နဲ့ cookie ဖတ်တာကို ပိတ်ပါတယ်။ SameSite က တခြား site ကနေ request ပို့ရင် cookie လိုက်မလိုက် ကန့်သတ်ပါတယ်။ __Host- သုံးရင် Secure နဲ့ Path=/ လိုပြီး Domain မထည့်ရပါ။ Login ဝင်ချိန်နဲ့ လုပ်ပိုင်ခွင့် ပြောင်းချိန်မှာ ID အသစ်ထုတ်ပါ။ Server မှာ session သက်တမ်းနဲ့ အသုံးမပြုဘဲ ထားနိုင်တဲ့အချိန် သတ်မှတ်ပြီး logout လုပ်ရင် session ကို ပိတ်ပါ။'
    ), `Set-Cookie: __Host-session=<opaque-random-id>; Path=/; Secure; HttpOnly; SameSite=Lax`),
    snippet('oidc', p('Choose the right token for the recipient', 'Token ကို လက်ခံမယ့်သူနဲ့ ကိုက်ညီအောင် သုံးခြင်း'), p(
      'OAuth delegates access to an API. OpenID Connect adds sign-in and an ID token for the client. Use a maintained library for authorization code flow with PKCE and exact redirect URIs. Validate tokens for their intended use. For signed JWT access tokens the API checks the expected algorithm, signature, issuer, audience, expiry, and permissions. Signed claims can be read, so keep secrets out.',
      'OAuth နဲ့ API သုံးခွင့် လွှဲပေးနိုင်ပါတယ်။ OpenID Connect က login အတွက် ID token ကို client ဆီ ပြန်ပေးပါတယ်။ Authorization code flow ကို PKCE၊ အတိအကျ သတ်မှတ်ထားတဲ့ redirect URI နဲ့အတူ library သုံးပြီး ချိတ်ပါ။ JWT access token ရလာရင် API က လက်ခံထားတဲ့ algorithm၊ signature၊ ထုတ်ပေးသူ၊ လက်ခံမယ့် API၊ သက်တမ်းနဲ့ လုပ်ပိုင်ခွင့်ကို စစ်ရပါတယ်။ Signed token ထဲက data ကို ဖတ်လို့ရတဲ့အတွက် secret တွေ မထည့်ပါနဲ့။'
    ), `ID token       Client verifies sign-in for this client
Access token   Resource server verifies access for this API
Refresh token  Client uses the token endpoint to renew access`),
  ], [owasp('Session_Management', 'Session management'), mdn('Web/HTTP/Reference/Headers/Set-Cookie', 'Set-Cookie'), owasp('OAuth2', 'OAuth 2.0'), owasp('REST_Security', 'Token validation')]),

  page('authorization', p('Authorization and Object-Level Access Control', 'Authorization နဲ့ Document တစ်စောင်ချင်းစီရဲ့ လုပ်ပိုင်ခွင့်'), p(
    'A signed-in person may be an editor of one document and a viewer of another. Authorization decides whether this person may perform this action on this specific resource.',
    'Login ဝင်ထားသူတစ်ယောက်က document တစ်စောင်မှာ editor ဖြစ်ပြီး နောက်တစ်စောင်မှာ viewer ဖြစ်နိုင်ပါတယ်။ ဒီလူက ဒီ document ပေါ်မှာ အခုလုပ်ချင်တဲ့ အလုပ်ကို လုပ်ခွင့်ရှိလားဆိုတာ Authorization က ဆုံးဖြတ်ပါတယ်။'
  ), [
    snippet('access-matrix', p('Describe the roles and permitted actions', 'Role တစ်ခုချင်းစီရဲ့ လုပ်ပိုင်ခွင့် သတ်မှတ်ခြင်း'), p(
      'Start with no access and grant only the operations each role needs. Define who may invite collaborators as well as who may edit content. Check current membership on the server for every request, including downloads and background exports.',
      'မည်သူ့ကိုမှ အလိုအလျောက် ခွင့်မပေးဘဲ role တစ်ခုစီအတွက် လိုသလောက်ပဲ သတ်မှတ်ပါ။ စာပြင်ခွင့်အပြင် နောက်တစ်ယောက်ကို ဖိတ်ခွင့်ပါ ထည့်တွက်ပါ။ Download နဲ့ export အပါအဝင် request တိုင်းမှာ လက်ရှိ membership ကို server က စစ်ပါ။'
    ), `Role      Read    Edit    Invite
Owner     Yes     Yes     Yes
Editor    Yes     Yes     No
Viewer    Yes     No      No
Guest     No      No      No`),
    snippet('scoped-update', p('Enforce the rule when writing the row', 'Database မှာ စာပြင်တဲ့အချိန် လုပ်ပိုင်ခွင့် စစ်ခြင်း'), p(
      'Suppose each document has a tenant and a membership row for every collaborator, including its owner. Scope the write to both tenant and current membership. Bind user and tenant identifiers from verified server context. Only report success when a row was updated. Hiding the Edit button helps the interface, while this check protects the data.',
      'Document တိုင်းမှာ အဖွဲ့အစည်းကို ဖော်ပြတဲ့ tenant ID ရှိပြီး owner အပါအဝင် ပါဝင်သူတိုင်းအတွက် membership row ရှိတယ်ဆိုပါစို့။ ပြင်ချိန်မှာ tenant ရော၊ လက်ရှိ membership ရော ကိုက်မှ update လုပ်ပါ။ User နဲ့ tenant ID ကို server က အတည်ပြုထားတဲ့ session ကနေ ယူပါ။ Row တကယ်ပြောင်းမှသာ အောင်မြင်ကြောင်း ပြန်ပါ။ UI မှာ Edit ခလုတ် ဖျောက်ထားရင်တောင် data ကို ကာကွယ်ပေးတာက ဒီစစ်ဆေးချက်ပါ။'
    ), `UPDATE documents AS d SET title = $1
WHERE d.id = $2 AND d.tenant_id = $3
  AND EXISTS (
    SELECT 1 FROM document_members AS m
    WHERE m.document_id = d.id AND m.user_id = $4
      AND m.role IN ('owner', 'editor')
  )
RETURNING d.id;`),
  ], [owasp('Authorization', 'Authorization'), ['OWASP · API Security Top 10', 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/']]),

  page('csrf', p('Cross-Site Request Forgery (CSRF)', 'Cross-Site Request Forgery (CSRF) ကာကွယ်ခြင်း'), p(
    'A browser can attach a session cookie automatically. For actions such as changing a recovery email, the server needs evidence that the request came through the intended application flow.',
    'Browser က request နဲ့အတူ session cookie ကို အလိုအလျောက် ပို့နိုင်ပါတယ်။ Recovery email ပြောင်းတာလို အရေးကြီးတဲ့ အလုပ်အတွက် ဒီ request ဟာ ကိုယ့် app ရဲ့ သတ်မှတ်ထားတဲ့ လမ်းကြောင်းက လာတာကိုပါ server က စစ်ရပါတယ်။'
  ), [
    snippet('csrf-token', p('Bind a form submission to its session', 'Form ပို့တဲ့အခါ လက်ရှိ session နဲ့ တွဲစစ်ခြင်း'), p(
      'CSRF occurs when another site causes a signed-in browser to send an unwanted action. Use the framework’s CSRF middleware for cookie-authenticated changes. In this template the server inserts a session-bound token. The middleware verifies it before the handler saves a change. Keep the token out of URLs and logs.',
      'တခြား site တစ်ခုကြောင့် login ဝင်ထားတဲ့ browser က အသုံးပြုသူ မရည်ရွယ်တဲ့ အပြောင်းအလဲတစ်ခုကို တောင်းဆိုမိတာက CSRF ပါ။ Cookie နဲ့ login စစ်တဲ့ app မှာ data ပြောင်းတဲ့ request တွေအတွက် framework ရဲ့ CSRF middleware သုံးပါ။ အောက်က template မှာ server က session နဲ့ တွဲထားတဲ့ token ဖြည့်ပေးပြီး middleware က token ကို စစ်ပြီးမှ email ပြောင်းခွင့် ပေးပါတယ်။ Token ကို URL နဲ့ log ထဲ မထည့်ပါနဲ့။'
    ), `<form action="/settings/email" method="post">
  <input type="hidden" name="csrf_token" value="{{ csrf_token }}">
  <label>New email <input type="email" name="email" required></label>
  <button>Save email</button>
</form>`),
    snippet('safe-methods', p('Keep reads and changes separate', 'ဖတ်တဲ့ request နဲ့ ပြောင်းတဲ့ request ခွဲခြင်း'), p(
      'Keep GET read-only. Verify the CSRF token on state-changing requests and apply relevant Origin checks. SameSite cookies add protection. A request that fails verification must leave the stored record untouched.',
      'GET နဲ့ data ဖတ်ဖို့ပဲ သုံးပါ။ Data ပြောင်းတဲ့ request မှာ CSRF token စစ်ပြီး လိုအပ်သလို Origin ကိုပါ စစ်ပါ။ SameSite cookie က ထပ်ဆောင်း ကာကွယ်ပေးပါတယ်။ စစ်ဆေးမှု မအောင်မြင်ရင် database ထဲက မူလစာရင်းအတိုင်း ကျန်ရပါမယ်။'
    ), `GET  /settings/email    Show the form
POST /settings/email    Verify session and CSRF token, then validate the change
Missing token           Reject the request and preserve the current email`),
  ], [owasp('Cross-Site_Request_Forgery_Prevention', 'CSRF prevention'), mdn('Web/HTTP/Reference/Headers/Set-Cookie', 'SameSite cookies')]),

  page('xss-and-browser-headers', p('Cross-Site Scripting, CSP, and Clickjacking', 'Cross-Site Scripting၊ CSP နဲ့ Clickjacking'), p(
    'A document title should appear as text, even when it contains angle brackets. Cross-site scripting (XSS) occurs when untrusted content is interpreted as executable page content.',
    'စာခေါင်းစဉ်ထဲမှာ ထောင့်ကွင်းတွေ ပါနေရင်လည်း ရိုက်ထည့်ထားတဲ့ စာသားအတိုင်းပဲ ပြသင့်ပါတယ်။ ပြင်ပက ရလာတဲ့ content ကို browser က page ရဲ့ code အဖြစ် အလုပ်လုပ်လိုက်တဲ့အခါ Cross-Site Scripting (XSS) ဖြစ်နိုင်ပါတယ်။'
  ), [
    snippet('output-context', p('Render text in its intended context', 'စာသားကို သက်ဆိုင်ရာနေရာနဲ့ ကိုက်အောင် ပြသခြင်း'), p(
      'For ordinary text in the DOM, assign textContent or use framework text interpolation with automatic escaping. Stored XSS starts with saved data, reflected XSS uses data returned in a response, and DOM-based XSS arises in client-side processing. Rich HTML needs a maintained HTML sanitizer. For links, separately validate the URL scheme and destination.',
      'ရိုးရိုးစာသား ပြဖို့ DOM မှာ textContent သုံးပါ။ Framework သုံးရင် စာသားကို အလိုအလျောက် escape လုပ်ပေးတဲ့ နည်း သုံးပါ။ Stored XSS က သိမ်းထားတဲ့ data ကနေ၊ reflected XSS က request ထဲက data ကို response ထဲ ပြန်ထည့်ရာကနေ ဖြစ်နိုင်ပါတယ်။ DOM-based XSS က browser ထဲမှာ data ကို ကိုင်တွယ်ပုံနဲ့ ဆိုင်ပါတယ်။ Rich HTML လက်ခံမယ်ဆိုရင် ထိန်းသိမ်းမွမ်းမံနေတဲ့ HTML sanitizer သုံးပါ။ Link အတွက်တော့ URL ရဲ့ scheme နဲ့ သွားမယ့်နေရာကိုပါ စစ်ရပါတယ်။'
    ), `const heading = document.createElement("h2");
heading.textContent = "Draft <April>";
document.body.append(heading);
// The page displays the literal text: Draft <April>`),
    snippet('headers', p('Limit scripts and frame embedding', 'Script နဲ့ frame အသုံးပြုခွင့်ကို ကန့်သတ်ခြင်း'), p(
      'This policy suits a page with external scripts from its own origin and no embedding. frame-ancestors prevents another page from framing it, reducing clickjacking, where a person is misled into clicking a disguised control. Test a policy with Content-Security-Policy-Report-Only before enforcement. For apps needing inline scripts, design a nonce- or hash-based policy. Send these headers on the HTML response.',
      'အောက်က policy က script ဖိုင်တွေကို ကိုယ့် origin ကပဲ ယူပြီး တခြား page ထဲမှာ frame အဖြစ် ထည့်ပြစရာမလိုတဲ့ page အတွက်ပါ။ frame-ancestors က တခြား page ထဲမှာ ကိုယ့် page ကို ဖုံးအုပ်ပြပြီး ခလုတ်မှားနှိပ်အောင် လုပ်နိုင်တဲ့ clickjacking ကို ကာကွယ်ပေးပါတယ်။ ပထမဆုံး Content-Security-Policy-Report-Only နဲ့ စမ်းပြီး လိုတဲ့ resource တွေကို စစ်ပါ။ Inline script လိုရင် nonce ဒါမှမဟုတ် hash အခြေခံ policy သုံးပါ။ Header တွေကို HTML response မှာ ပို့ရပါတယ်။'
    ), `Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin`),
  ], [owasp('Cross_Site_Scripting_Prevention', 'XSS prevention'), mdn('Web/HTTP/Guides/CSP', 'Content Security Policy'), owasp('Clickjacking_Defense', 'Clickjacking defense')]),

  page('input-and-injection', p('Input Validation and Injection Prevention', 'Input Validation နဲ့ Injection ကာကွယ်ခြင်း'), p(
    'A rename request contains a proposed title. First decide which values the application accepts. Then pass the accepted value to the database as data, keeping it separate from query instructions.',
    'စာခေါင်းစဉ် ပြောင်းတဲ့ request မှာ တန်ဖိုးအသစ် ပါလာပါတယ်။ ပထမဆုံး ဘယ်လိုတန်ဖိုးမျိုး လက်ခံမလဲ သတ်မှတ်ပါ။ လက်ခံပြီးတဲ့ တန်ဖိုးကို database ဆီ ပို့ချိန်မှာ SQL command နဲ့ ခွဲပြီး data အဖြစ် ပေးရပါတယ်။'
  ), [
    snippet('validation', p('Validate type, length, and business rules on the server', 'Server မှာ အမျိုးအစား၊ အရှည်နဲ့ လုပ်ငန်းစည်းမျဉ်း စစ်ခြင်း'), p(
      'The browser can give quick feedback, but the server validates all inputs before saving. A title may contain an apostrophe. Trim surrounding whitespace and apply the product length rule. Also validate relationships, such as an end date following a start date. Accept only fields the operation can change.',
      'Browser မှာ အမြန်အသိပေးလို့ရပေမဲ့ မသိမ်းခင် server မှာ ထပ်စစ်ရပါတယ်။ စာခေါင်းစဉ်ထဲမှာ apostrophe ပါနိုင်ပါတယ်။ ရှေ့နောက် နေရာလွတ်တွေ ဖယ်ပြီး app က သတ်မှတ်ထားတဲ့ အရှည်နဲ့ ကိုက်မကိုက် စစ်ပါ။ ရက်စွဲဆိုရင်လည်း အဆုံးရက်က အစရက်နောက်မှာ ရှိလား စစ်ရပါတယ်။ ဒီလုပ်ဆောင်ချက်က ပြင်ခွင့်ပေးတဲ့ field တွေကိုပဲ လက်ခံပါ။'
    ), `function readTitle(value) {
  if (typeof value !== "string") return null;
  const title = value.trim();
  const length = Array.from(title).length;
  return length >= 1 && length <= 120 ? title : null;
}`),
    snippet('parameterized-queries', p('Bind SQL values and allowlist structural choices', 'SQL တန်ဖိုးကို parameter နဲ့ ပို့ပြီး column ရွေးချယ်မှုကို ကန့်သတ်ခြင်း'), p(
      'With a PostgreSQL client, placeholders keep the query structure fixed even when the title contains punctuation. Column names and sort directions must come from trusted choices in your code. For other interpreters, choose APIs that accept structured arguments. Prefer a filesystem API to constructing shell commands for file operations.',
      'PostgreSQL client မှာ placeholder သုံးရင် title ထဲမှာ punctuation ပါလည်း query ဖွဲ့စည်းပုံ မပြောင်းပါဘူး။ Column နာမည်နဲ့ sort direction လို SQL ဖွဲ့စည်းပုံကို ပြောင်းမယ့် အရာတွေကိုတော့ code ထဲမှာ ကြိုသတ်မှတ်ထားတဲ့ ရွေးချယ်စရာတွေကနေ ယူပါ။ File ဖတ်ဖို့ဆိုရင်လည်း user ထည့်တဲ့ နာမည်နဲ့ shell command ဆောက်တာထက် filesystem API သုံးပါ။'
    ), `const result = await pool.query(
  "SELECT id, title FROM documents WHERE owner_id = $1 AND title = $2",
  [session.userId, "Editor's notes"]
);`),
  ], [owasp('Input_Validation', 'Input validation'), owasp('SQL_Injection_Prevention', 'SQL injection prevention')]),

  page('api-security', p('API Security and Resource Limits', 'API Security နဲ့ Resource ကန့်သတ်ချက်များ'), p(
    'A client may need only a document title and update time. An API defines which fields it accepts and returns, who may call it, and how much work one request can trigger.',
    'Client က document ရဲ့ ခေါင်းစဉ်နဲ့ ပြင်ထားတဲ့အချိန်ပဲ လိုနိုင်ပါတယ်။ API က လက်ခံမယ့် field၊ ပြန်ပေးမယ့် field၊ ခေါ်ခွင့်ရှိသူနဲ့ request တစ်ခုအတွက် အများဆုံး အလုပ်လုပ်ပေးမယ့် ပမာဏကို သတ်မှတ်ရပါတယ်။'
  ), [
    snippet('field-access', p('Control both incoming and outgoing fields', 'အဝင်နဲ့ အထွက် field နှစ်မျိုးလုံးကို ရွေးချယ်ခြင်း'), p(
      'After checking membership, copy allowed input fields explicitly. Ownership and billing flags belong to separate privileged operations. Select response fields explicitly too. Keep an inventory of supported endpoint versions so that retired versions stop serving private data.',
      'Membership စစ်ပြီးချိန်မှာ ပြင်ခွင့်ရှိတဲ့ field ကိုပဲ ရွေးယူပါ။ ပိုင်ရှင်ပြောင်းတာ၊ ငွေပေးချေမှုအခြေအနေ ပြောင်းတာတွေက သီးခြား လုပ်ပိုင်ခွင့် လိုပါတယ်။ Response မှာလည်း ပြန်ပေးမယ့် field တွေကို ရွေးပါ။ API version တွေကို မှတ်တမ်းထားပြီး အဟောင်းတွေ ပိတ်သိမ်းတဲ့အခါ private data ကို ဆက်ရယူလို့ မရတော့ကြောင်း စစ်ပါ။'
    ), `// Run after authorization and title validation.
const changes = { title: validatedTitle };
const publicFields = { id: document.id, title: document.title };`),
    snippet('resource-limits', p('Bound expensive work before starting it', 'အလုပ်များတဲ့ request တွေကို ကြိုတင် ကန့်သတ်ခြင်း'), p(
      'Limit body size, page size, execution time, and concurrent jobs. Rate-limit by an appropriate account or tenant as well as network signals. Return 429 with Retry-After when the client should slow down. For operations such as paid exports, scope an idempotency key to the caller and record it atomically so a retry cannot charge twice. These numbers illustrate a policy.',
      'Request body အရွယ်အစား၊ တစ်မျက်နှာမှာ ပြမယ့် row အရေအတွက်၊ အလုပ်လုပ်ချိန်နဲ့ တစ်ပြိုင်နက် run နိုင်တဲ့ job အရေအတွက်ကို ကန့်သတ်ပါ။ Rate limit ကို သက်ဆိုင်ရာ account သို့မဟုတ် tenant အလိုက်ပါ သတ်မှတ်ပါ။ ခဏစောင့်ဖို့ လိုရင် 429 နဲ့ Retry-After ပြန်ပေးပါ။ ငွေကောက်ခံရတဲ့ export တစ်ခုကို ထပ်ပို့မိလို့ နှစ်ကြိမ်ငွေမဖြတ်အောင် caller နဲ့ တွဲထားတဲ့ idempotency key ကို ငွေစာရင်းသွင်းတာနဲ့အတူ တစ်ခါတည်း မှတ်ပါ။ အောက်က ကိန်းဂဏန်းတွေက နမူနာ သတ်မှတ်ချက်ပါ။'
    ), `List documents    50 rows per page maximum
Export queue      2 active exports per account
Quota response    429 Too Many Requests
Retry-After: 60`),
  ], [owasp('REST_Security', 'REST security'), ['OWASP · API Security Top 10', 'https://owasp.org/API-Security/editions/2023/en/0x11-t10/']]),

  page('files-and-outbound-requests', p('File Uploads and Server-Side Requests', 'File Upload နဲ့ Server က ပြင်ပကို ပို့တဲ့ Request များ'), p(
    'An attachment can arrive as uploaded bytes or through an import feature. Uploads introduce untrusted files into storage. URL imports also give the application a reason to open a network connection.',
    'Attachment ကို file အဖြစ် တင်နိုင်သလို ပြင်ပက import လုပ်နိုင်ပါတယ်။ Upload မှာ မစစ်ရသေးတဲ့ file ကို storage ထဲ ထည့်ရပါတယ်။ URL ကနေ import လုပ်ရင် server ကိုယ်တိုင် ပြင်ပကို network ချိတ်ဆက်ရတာလည်း ပါလာပါတယ်။'
  ), [
    snippet('upload', p('Validate, isolate, then publish an attachment', 'File စစ်ပြီးမှ သက်ဆိုင်သူကို ဖွင့်ခွင့်ပေးခြင်း'), p(
      'Check permission and size before expensive parsing. The filename extension and declared MIME type are hints. Verify expected content with a maintained parser and apply scanning or re-encoding as appropriate. Generate a storage key, keep pending files private outside the web root, and recheck access on download. A failed scan must leave the file unavailable.',
      'File ကို အသေးစိတ် မဖတ်ခင် တင်ခွင့်နဲ့ အရွယ်အစားကို အရင်စစ်ပါ။ Extension နဲ့ browser ပို့တဲ့ MIME type က ကနဦးအချက်အလက်ပဲ ဖြစ်ပါတယ်။ File အတွင်းက data ကို သက်ဆိုင်ရာ parser နဲ့ စစ်ပြီး လိုအပ်ရင် scan လုပ်ပါ၊ ပုံဆိုရင် ပြန် encode လုပ်ပါ။ Storage key အသစ်ထုတ်ပြီး စစ်ဆေးဆဲ file တွေကို web root အပြင်ဘက် private နေရာမှာ ထားပါ။ Download လုပ်ချိန်မှာ ခွင့်ပြုချက် ပြန်စစ်ပါ။ Scan မအောင်မြင်ရင် file ကို ဆက်ပိတ်ထားပါ။'
    ), `Upload received   Private quarantine, generated storage key
Checks passed     Mark available to authorized document members
Check failed      Keep unavailable; record the reason internally`),
    snippet('ssrf', p('Constrain outbound connections to known destinations', 'Server ချိတ်ဆက်နိုင်တဲ့ နေရာတွေကို ကန့်သတ်ခြင်း'), p(
      'Server-side request forgery (SSRF) is a risk when an input influences where the backend connects. For a known provider, accept a file ID and construct a URL from a fixed origin. Restrict network egress, disable redirects or validate every hop, and set time and byte limits. Require access to the requested remote object.',
      'User input က backend ချိတ်ဆက်မယ့် နေရာကို ဆုံးဖြတ်နိုင်တဲ့အခါ SSRF အန္တရာယ် ရှိပါတယ်။ Provider ကို ကြိုသိထားရင် URL အပြည့်အစုံ လက်ခံစရာမလိုပါဘူး။ File ID ကို စစ်ပြီး သတ်မှတ်ထားတဲ့ origin နဲ့ URL ဆောက်ပါ။ Network အထွက်ကို ကန့်သတ်ပါ။ Redirect ကို ပိတ်ပါ၊ လိုအပ်ရင် သွားမယ့်နေရာတိုင်းကို ပြန်စစ်ပါ။ ကြာချိန်နဲ့ data ပမာဏ ကန့်သတ်ပြီး အဲဒီ file ကို ရယူခွင့်ပါ စစ်ပါ။'
    ), `function providerFileUrl(fileId) {
  if (!/^[a-zA-Z0-9_-]{1,64}$/.test(fileId)) {
    throw new Error("Invalid file ID");
  }
  return new URL("/files/" + fileId, "https://files.example");
}`),
  ], [owasp('File_Upload', 'File upload'), owasp('Server_Side_Request_Forgery_Prevention', 'SSRF prevention')]),

  page('webhooks-and-data-integrity', p('Webhooks and Data Integrity', 'Webhook နဲ့ ပြင်ပက လက်ခံတဲ့ Data မှန်ကန်မှု'), p(
    'A webhook is an HTTP notification from another service. An integration might post a notice when a document is published. Before changing local state, verify who sent the message, whether its contents are expected, and whether you already processed it.',
    'Webhook ဆိုတာ တခြား service တစ်ခုက HTTP နဲ့ ပို့တဲ့ အကြောင်းကြားချက်ပါ။ ဥပမာ document ထုတ်ဝေပြီးချိန်မှာ ချိတ်ထားတဲ့ service က ကိုယ့် app ကို အသိပေးနိုင်ပါတယ်။ ကိုယ့်ဘက်က data မပြောင်းခင် ဘယ်သူပို့တာလဲ၊ မျှော်မှန်းထားတဲ့ data ဟုတ်လား၊ အရင်တစ်ခါ လုပ်ပြီးပြီလားဆိုတာ စစ်ပါ။'
  ), [
    snippet('verify-message', p('Verify the original bytes', 'ပို့လာတဲ့ မူရင်း data ကို အတည်ပြုခြင်း'), p(
      'Use the provider’s documented verification library. For a signed webhook such as GitHub’s, verify the signature over the original request body with the configured secret before processing the event. Parsing and serializing JSON again can change the bytes. A valid signature establishes message integrity but a repeated genuine message can still arrive.',
      'Provider သတ်မှတ်ထားတဲ့ verification library သုံးပါ။ GitHub လို signed webhook မှာ သတ်မှတ်ထားတဲ့ secret နဲ့ မူရင်း request body ပေါ်က signature ကို အရင်စစ်ပါ။ JSON ကို ဖတ်ပြီး စာသားပြန်ပြောင်းလိုက်ရင် စာလုံးကြား နေရာလွတ်ကအစ bytes ပြောင်းနိုင်ပါတယ်။ Signature ကိုက်ရင်တောင် မူလ event တစ်ခုတည်းကို နောက်တစ်ခါ ပြန်ရနိုင်ပါတယ်။'
    ), `Receive     Apply a body size limit and preserve the raw bytes
Verify      Use the provider verifier and configured secret
Interpret   Accept the expected event type, account, and payload schema`),
    snippet('safe-processing', p('Read plain data and handle retries', 'Data ကို စစ်ပြီး ထပ်ရောက်လာတဲ့ event ကို ကိုင်တွယ်ခြင်း'), p(
      'Parse external messages as plain data and validate the expected fields. Avoid formats that construct executable or application-defined objects from input. Use a stable authenticated event or business identifier and a uniqueness constraint. Record the identifier and local change in one transaction, so a retry cannot apply the change twice.',
      'ပြင်ပ message ကို ရိုးရိုး data အဖြစ် ဖတ်ပြီး မျှော်မှန်းထားတဲ့ field တွေကို စစ်ပါ။ Input ကနေ အလုပ်လုပ်နိုင်တဲ့ object တွေ တိုက်ရိုက် ဖန်တီးပေးတဲ့ format တွေကို ရှောင်ပါ။ အတည်ပြုပြီးသား message ထဲက တည်ငြိမ်တဲ့ event ID သို့မဟုတ် လုပ်ငန်းမှတ်တမ်း ID ကို သုံးပါ။ အဲဒီ ID ကို ထပ်မဝင်နိုင်အောင် database မှာ သတ်မှတ်ပြီး ID သိမ်းတာနဲ့ data ပြောင်းတာကို transaction တစ်ခုထဲ လုပ်ပါ။ ဒါမှ ပြန်ပို့လာတဲ့ event ကြောင့် data နှစ်ခါ မပြောင်းမှာပါ။'
    ), `First verified publication event    Record the event and publish the notice
Same verified event delivered again  Keep the existing notice
Unrecognized event type              Make no document changes`),
  ], [['GitHub Docs · Validating webhook deliveries', 'https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries'], owasp('Deserialization', 'Deserialization')]),

  page('data-and-secrets', p('Private Data, Encryption, and Secrets', 'Private Data၊ Encryption နဲ့ Secret ထိန်းသိမ်းခြင်း'), p(
    'Protecting a private document includes its copies in caches, logs, and backups. Application credentials also need an owner, a purpose, and a way to replace them.',
    'Private document ကာကွယ်ရာမှာ မူရင်းဖိုင်အပြင် cache၊ log နဲ့ backup ထဲ ရောက်နေတဲ့ မိတ္တူတွေကိုပါ စဉ်းစားရပါတယ်။ App က သုံးတဲ့ credential တစ်ခုစီအတွက်လည်း တာဝန်ရှိသူ၊ အသုံးပြုရတဲ့ ရည်ရွယ်ချက်နဲ့ အသစ်လဲနိုင်မယ့် နည်းလမ်း ရှိရပါတယ်။'
  ), [
    snippet('data-lifecycle', p('Decide where each copy belongs', 'Data မိတ္တူတွေ ဘယ်မှာ ဘယ်လောက်ကြာ ထားမလဲ'), p(
      'Collect the minimum needed. Encrypt sensitive data and backups at rest using managed, authenticated encryption and separate key access from data access. Hashing supports one-way verification. Encryption allows authorized recovery with a key. Define retention and test restoring encrypted backups with authorized keys. For sensitive account responses instruct caches not to store the response.',
      'တကယ်လိုတဲ့ data ကိုပဲ စုပါ။ သိမ်းထားတဲ့ sensitive data နဲ့ backup ကို ပြောင်းလဲထားမှုပါ စစ်နိုင်တဲ့ managed encryption နဲ့ ကာကွယ်ပြီး key ကို သုံးခွင့်နဲ့ data ကို ဖတ်ခွင့် ခွဲပါ။ Hash က မူရင်းနဲ့ ကိုက်မကိုက် တစ်ဖက်သတ်စစ်ဖို့ပါ။ Encryption က သင့်တော်တဲ့ key ရှိရင် မူရင်း ပြန်ဖတ်ဖို့ပါ။ ဘယ်လောက်ကြာ သိမ်းမလဲ သတ်မှတ်ပြီး backup ကို key နဲ့ တကယ်ပြန်ဖွင့်ကြည့်ပါ။ Sensitive account response အတွက် cache ထဲ မသိမ်းစေချင်ရင် အောက်က header ပို့ပါ။'
    ), `Cache-Control: no-store`),
    snippet('secret-lifecycle', p('Deliver and rotate a service credential', 'Service credential ထုတ်ပေးခြင်းနဲ့ အသစ်လဲခြင်း'), p(
      'Issue scoped, short-lived credentials from a secret manager or workload identity system. Keep them in the server environment. Code shipped to the browser is public. If a credential is exposed, revoke or rotate it, update consumers, and review use during the exposure window. Removing a string from source alone leaves the old credential valid.',
      'Server အတွက် လိုသလောက်လုပ်ခွင့်ပဲ ပါတဲ့ သက်တမ်းတို credential ကို secret manager ဒါမှမဟုတ် workload identity ကနေ ထုတ်ယူပါ။ Browser ကို ပို့လိုက်တဲ့ code ကို အသုံးပြုသူ ဖတ်လို့ရပါတယ်။ Credential ပေါက်ကြားရင် key အဟောင်းကို ပိတ်ခြင်း သို့မဟုတ် အသစ်လဲခြင်း၊ သုံးနေတဲ့ service တွေကို update လုပ်ခြင်းနဲ့ ကြားကာလ အသုံးပြုမှု စစ်ခြင်းတို့ လုပ်ပါ။ Source ထဲက စာသားဖျက်လိုက်ရုံနဲ့ key အဟောင်းရဲ့ သက်တမ်း မကုန်သေးပါဘူး။'
    ), `Browser bundle    Public application settings
API runtime       Read one service credential from the secret manager
Audit event       Credential identifier, rotation time, responsible service`),
  ], [owasp('Cryptographic_Storage', 'Cryptographic storage'), owasp('Secrets_Management', 'Secrets management')]),

  page('secure-deployment', p('Deployment and Software Supply Chain Security', 'Deployment နဲ့ Software Supply Chain Security'), p(
    'A release includes code from your team, dependencies from other maintainers, and the configuration of the build and hosting systems. Each can change what reaches users.',
    'Release တစ်ခုမှာ ကိုယ့်အဖွဲ့ရေးတဲ့ code၊ တခြားသူတွေ ထိန်းသိမ်းတဲ့ dependency တွေအပြင် build နဲ့ hosting ဘက်က setting တွေပါ ပါဝင်ပါတယ်။ အဲဒီထဲက တစ်ခုပြောင်းရင် user ဆီ ရောက်သွားတဲ့ software လည်း ပြောင်းနိုင်ပါတယ်။'
  ), [
    snippet('dependencies', p('Review what enters the build', 'Build ထဲ ပါလာမယ့် dependency တွေ စစ်ခြင်း'), p(
      'Commit the lockfile and review its changes alongside the dependency manifest. In an npm project, npm ci installs from the lockfile and fails if the manifest and lockfile disagree. Review advisories and test upgrades. Inventory direct and transitive packages so you can identify affected releases. A clean advisory report alone cannot establish package integrity.',
      'Lockfile ကို commit တင်ပြီး dependency စာရင်းနဲ့အတူ ပြောင်းသွားတာတွေကို review လုပ်ပါ။ npm project မှာ npm ci က lockfile အတိုင်း install လုပ်ပြီး manifest နဲ့ lockfile မကိုက်ရင် ရပ်ပါတယ်။ Security advisory တွေကို ဖတ်ပြီး update စမ်းပါ။ ကိုယ်တိုင် ထည့်ထားတဲ့ package အပြင် အဲဒီ package တွေကနေ ပါလာတဲ့ package တွေကိုပါ မှတ်ထားရင် ဘယ် release ထိခိုက်လဲ ရှာလို့ရပါတယ်။'
    ), `# Run in the reviewed project checkout with its committed package-lock.json.
npm ci
npm audit`),
    snippet('release-integrity', p('Promote the reviewed artifact', 'စစ်ပြီးသား build ကို production တင်ခြင်း'), p(
      'Restrict CI credentials, protect release branches, and keep untrusted changes away from deployment secrets. Build once and verify trusted provenance or signatures before promoting the same artifact. Disable debug output, remove sample accounts, and grant the runtime only its required permissions. For pinned third-party browser assets, Subresource Integrity can verify expected bytes.',
      'CI credential တွေရဲ့ လုပ်ပိုင်ခွင့်ကို ကန့်သတ်ပါ။ Release branch ကို ကာကွယ်ပြီး မစစ်ရသေးတဲ့ changes တွေ run တဲ့နေရာမှာ deployment secret မပေးပါနဲ့။ တစ်ကြိမ် build လုပ်ပြီး ဘယ် source ကနေ ဘယ် build စနစ်က ထုတ်သလဲဆိုတဲ့ အထောက်အထား သို့မဟုတ် signature ကို စစ်ပါ။ အဲဒီ artifact ကိုပဲ production တင်ပါ။ Debug output ပိတ်၊ sample account ဖယ်ပြီး runtime အတွက် လိုသလောက် ခွင့်ပေးပါ။ Browser က ယူတဲ့ version အသေသတ်မှတ်ထားသော ပြင်ပဖိုင်တွေအတွက် Subresource Integrity နဲ့ ဖိုင်ကိုက်မကိုက် စစ်နိုင်ပါတယ်။'
    ), `Pull request   Review code and lockfile; run checks without deploy credentials
Build          Produce the artifact and trusted provenance
Production     Verify provenance, then deploy the approved artifact`),
  ], [owasp('Software_Supply_Chain_Security', 'Software supply chain security'), mdn('Web/Security/Defenses/Subresource_Integrity', 'Subresource Integrity'), ['npm · npm ci', 'https://docs.npmjs.com/cli/commands/npm-ci/']]),

  page('monitoring-and-incidents', p('Errors, Security Logging, and Incident Response', 'Error ကိုင်တွယ်ခြင်း၊ Security Log နဲ့ Incident Response'), p(
    'A failed permission check and a failed database connection need different responses. Users need a clear outcome. Operators need enough evidence to determine whether access was denied, a dependency failed, or data changed.',
    'လုပ်ပိုင်ခွင့် စစ်တာ မအောင်မြင်တာနဲ့ database ချိတ်လို့ မရတာဟာ မတူတဲ့ ဖြစ်ရပ်တွေပါ။ User က လုပ်ထားတာ အောင်မြင်လား သိဖို့လိုပြီး တာဝန်ရှိသူက ဘာပျက်သလဲ၊ data တကယ်ပြောင်းသွားလား ပြန်စစ်နိုင်ဖို့ လိုပါတယ်။'
  ), [
    snippet('fail-closed', p('Fail safely and preserve consistency', 'အမှားဖြစ်ချိန်မှာ ခွင့်ပြုချက်နဲ့ data ကို ထိန်းထားခြင်း'), p(
      'If authorization is unavailable, stop the operation. Use a transaction for related writes so a partial change rolls back. Give the user a neutral error and a request ID. Keep stack traces and database details in protected diagnostics. Retry only operations designed to be safe to repeat.',
      'လုပ်ပိုင်ခွင့်ကို အတည်မပြုနိုင်ရင် အလုပ်ကို ရပ်ပါ။ အတူပြောင်းရမယ့် record တွေကို transaction တစ်ခုထဲ ထည့်ပါ။ တစ်ဝက်မှာ ပျက်သွားရင် မူလအတိုင်း ပြန်ထားနိုင်ပါတယ်။ User ကို ဖြစ်ခဲ့တာနဲ့ request ID ပေးပြီး stack trace နဲ့ database အသေးစိတ်ကို access ကန့်သတ်ထားတဲ့ diagnostic log ထဲမှာ ထားပါ။ ထပ်လုပ်လည်း အကျိုးဆက် မထပ်တဲ့ အလုပ်မျိုးကိုပဲ retry လုပ်ပါ။'
    ), `HTTP/1.1 503 Service Unavailable
Content-Type: application/json

{"message":"Could not save your changes. Try again later.","requestId":"req-57"}`),
    snippet('alert-and-recover', p('Turn a security event into a response', 'Security event ကနေ အရေးယူဆောင်ရွက်ခြင်း'), p(
      'Record structured events for significant authorization denials, permission changes, and credential rotation. Exclude passwords, tokens, and document contents. Restrict log access and retention. Give important alerts an owner. During an incident, preserve evidence, contain the affected access, recover from a known-good state, and verify the original control before closing.',
      'အရေးပါတဲ့ access ငြင်းပယ်မှု၊ လုပ်ပိုင်ခွင့် ပြောင်းလဲမှုနဲ့ key အသစ်လဲမှုတွေကို ရှာဖတ်လို့ရတဲ့ field တွေနဲ့ မှတ်ပါ။ Password၊ token နဲ့ စာအကြောင်းအရာတွေ ဖယ်ထားပါ။ Log ဖတ်ခွင့်နဲ့ သိမ်းထားမယ့် သက်တမ်းကို သတ်မှတ်ပါ။ အရေးကြီးတဲ့ alert ကို ဘယ်သူလက်ခံမလဲ ကြိုသတ်မှတ်ပါ။ Incident ဖြစ်ရင် အထောက်အထား ထိန်းသိမ်း၊ ထိခိုက်တဲ့ access ကို ပိတ်၊ စစ်ပြီးသား အခြေအနေကနေ ပြန်ဖွင့်ပြီး မူလကာကွယ်မှုကို ပြန်စစ်ပါ။'
    ), `{"event":"document.edit.denied","actorId":"user-7","requestId":"req-57"}
Alert owner     On-call application team
Recovery check  Revoked sessions are denied; authorized readers can reopen files`),
  ], [owasp('Logging', 'Logging'), owasp('Error_Handling', 'Error handling'), top10]),

  page('owasp-and-release-review', p('OWASP Top 10 and Release Verification', 'OWASP Top 10 နဲ့ Release မလုပ်ခင် စစ်ဆေးခြင်း'), p(
    'Use the OWASP Top 10 (2025) to discuss common categories of risk. Use the Application Security Verification Standard (ASVS) to select verifiable requirements for the features you actually ship. The document-sharing example ties both to concrete evidence.',
    'Web app မှာ ဘယ်လိုအန္တရာယ်တွေ ရှိနိုင်လဲ ဆွေးနွေးဖို့ OWASP Top 10 (2025) ကို သုံးနိုင်ပါတယ်။ ကိုယ်တင်မယ့် feature အတွက် ဘယ်အချက်တွေ အောင်မြင်ရမလဲ အသေးစိတ် သတ်မှတ်ဖို့ Application Security Verification Standard (ASVS) ကို သုံးပါ။ Document မျှဝေတဲ့ နမူနာနဲ့ ပြန်ချိတ်ကြည့်ရအောင်။'
  ), [
    snippet('risk-map', p('Map the ten categories to a control', 'အန္တရာယ် ၁၀ မျိုးနဲ့ သက်ဆိုင်တဲ့ ကာကွယ်မှုများ'), p(
      'Read each row as a question about a real feature. For example, a new dependency raises a supply chain question. Knowing which build actually reached production raises an integrity question. One feature can belong to several categories.',
      'အောက်က တစ်ကြောင်းချင်းကို ကိုယ့် app အတွက် မေးခွန်းတစ်ခုလို ဖတ်ပါ။ ဥပမာ dependency အသစ်တစ်ခု ပါလာတာက supply chain နဲ့ ဆိုင်ပါတယ်။ Production တင်လိုက်တဲ့ build က တကယ်စစ်ထားတဲ့ build ဟုတ်လားဆိုတာ integrity နဲ့ ဆိုင်ပါတယ်။ Feature တစ်ခုကို အမျိုးအစား မျိုးစုံကနေ စစ်လို့ရပါတယ်။'
    ), `A01  Broken Access Control                    Check document membership on save
A02  Security Misconfiguration                Disable production debug output
A03  Software Supply Chain Failures           Review dependencies and build access
A04  Cryptographic Failures                   Protect keys and encrypt sensitive copies
A05  Injection                                Bind values in database queries
A06  Insecure Design                          Model risks before adding sharing
A07  Authentication Failures                  Protect sign-in and recovery
A08  Software or Data Integrity Failures      Verify release artifacts before use
A09  Security Logging and Alerting Failures   Route actionable events to an owner
A10  Mishandling of Exceptional Conditions    Roll back incomplete changes`),
    snippet('acceptance', p('Verify a private document release', 'Private document feature ကို စစ်ဆေးခြင်း'), p(
      'Use seeded test accounts and synthetic documents in the project test environment. For each rule record the starting state, action, expected response, and stored result. Include a successful action as well as a denied one. Retain the results with the release and rerun them when permissions or storage change.',
      'Project ရဲ့ test environment မှာ နမူနာ account နဲ့ နမူနာ document ကို သုံးပါ။ စည်းမျဉ်းတစ်ခုစီအတွက် မူလအခြေအနေ၊ လုပ်ဆောင်ချက်၊ မျှော်မှန်းတဲ့ response နဲ့ database ထဲက နောက်ဆုံးရလဒ်ကို မှတ်ပါ။ ခွင့်ပြုရမယ့်အလုပ်ရော၊ ငြင်းပယ်ရမယ့်အလုပ်ပါ စစ်ပါ။ Release နဲ့အတူ ရလဒ်ကို မှတ်ထားပြီး permission ဒါမှမဟုတ် storage ပြောင်းရင် ပြန်စစ်ပါ။'
    ), `Given                 When                    Expected evidence
Current editor        Save a valid title      New title persists after reload
Invited viewer        Request an edit         Access denied; revision unchanged
Expired session       Open private document   Sign-in required; no private content
Scanning unavailable  Upload an attachment    File remains private and pending
Backup restored       Open sample document    Expected revision and permissions`),
  ], [top10, asvs]),
]);
