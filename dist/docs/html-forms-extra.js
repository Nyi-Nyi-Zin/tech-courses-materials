import { p, snippet } from './content.js';
import { htmlSpec } from './examples.js';
import { browserDemo as demo, lesson, mdnSource as mdn } from './lesson-example.js';

const fileUploads = lesson('file-uploads', 'File Uploads', 'File Uploads',
  'A file picker lets a user select a file. To upload it, put the picker in a form that sends the selected file to a server that accepts it.',
  'File picker နဲ့ user က ဖိုင်ရွေးနိုင်ပါတယ်။ ရွေးထားတဲ့ဖိုင်ကို upload လုပ်ဖို့ File picker ကို form ထဲ ထည့်ပြီး ဖိုင်လက်ခံပေးမယ့် server ဆီ ပို့ရပါတယ်။',
  [
    demo('multipart-form', 'Submit a File with multipart/form-data', 'multipart/form-data နဲ့ ဖိုင်ပို့ခြင်း',
      'action="/upload" points to the server route. method="post" sends the form in the request body. enctype="multipart/form-data" tells the browser to send each field as a separate part, including the selected file’s contents. The input’s name="attachment" gives the file part a name the server can look up.',
      'action="/upload" က form ပို့မယ့် server route ကို သတ်မှတ်ပါတယ်။ method="post" က form data ကို request body ထဲ ထည့်ပို့ပါတယ်။ enctype="multipart/form-data" က form field တစ်ခုစီကို သီးခြားအပိုင်းအဖြစ် ပို့စေပြီး ရွေးထားတဲ့ဖိုင်ရဲ့ အကြောင်းအရာပါ ထည့်ပို့ပါတယ်။ Input ရဲ့ name="attachment" က server မှာ အဲဒီဖိုင်အပိုင်းကို ပြန်ရှာဖို့ သုံးတဲ့ နာမည်ပါ။',
      'Choose a small text file and click Upload file. The preview shows the method, destination, encoding, filename, and size using the file selected in the browser. Follow the next example to send the actual file to your local server.',
      'စာသားဖိုင်သေးသေးတစ်ဖိုင် ရွေးပြီး Upload file ကို နှိပ်ပါ။ Preview မှာ browser ထဲက ရွေးထားတဲ့ဖိုင်ကို သုံးပြီး method၊ destination၊ encoding၊ ဖိုင်နာမည်နဲ့ အရွယ်အစားကို ပြပါမယ်။ Local server ဆီ ဖိုင်တကယ်ပို့ဖို့ နောက်နမူနာအတိုင်း ဆက်စမ်းပါ။',
      `  <form action="/upload" method="post" enctype="multipart/form-data">
    <label for="attachment">Choose a text file</label>
    <input id="attachment" name="attachment" type="file" accept=".txt,text/plain" required>
    <button type="submit">Upload file</button>
  </form>`),
    {
      ...snippet('upload-server', p('Receive the File on a Local Server', 'Local Server မှာ ဖိုင်လက်ခံခြင်း'), p(
        'Save the previous HTML example as upload.html. Save the server code below as server.mjs in the same folder. Run node server.mjs with Node.js 22 or later, then open http://127.0.0.1:3000. Choose a nonempty .txt file and submit. The server reads the attachment part and returns its filename and byte count. This local demo limits the whole request to 1 MiB and discards the file after reading it.',
        'အပေါ်က HTML နမူနာကို upload.html အဖြစ် သိမ်းပါ။ အောက်က server code ကို folder တူတူထဲမှာ server.mjs အဖြစ် သိမ်းပါ။ Node.js 22 သို့မဟုတ် နောက်ပိုင်း version နဲ့ node server.mjs လို့ run ပြီး http://127.0.0.1:3000 ကို ဖွင့်ပါ။ စာသားပါတဲ့ .txt ဖိုင်တစ်ခု ရွေးပြီး submit လုပ်ပါ။ Server က attachment အပိုင်းကို ဖတ်ပြီး ရလာတဲ့ ဖိုင်နာမည်နဲ့ byte အရေအတွက်ကို ပြန်ပို့ပါတယ်။ ဒီ local နမူနာက request တစ်ခုလုံးကို 1 MiB အထိ လက်ခံပြီး ဖိုင်ကို ဖတ်ပြီးတာနဲ့ စွန့်ပစ်ပါတယ်။',
      ), `import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const page = await readFile(new URL("./upload.html", import.meta.url));
const maxRequestBytes = 1024 * 1024;

function send(response, status, body) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(body));
}

createServer(async (request, response) => {
  const path = request.url;
  if (request.method === "GET" && path === "/") {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(page);
    return;
  }
  if (request.method !== "POST" || path !== "/upload") {
    send(response, 404, { error: "Page not found" });
    return;
  }

  const contentType = request.headers["content-type"] ?? "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data;")) {
    send(response, 415, { error: "Send a multipart form" });
    return;
  }

  try {
    const chunks = [];
    let size = 0;
    for await (const chunk of request.iterator({ destroyOnReturn: false })) {
      size += chunk.length;
      if (size > maxRequestBytes) {
        response.setHeader("Connection", "close");
        send(response, 413, { error: "Request exceeds 1 MiB" });
        return;
      }
      chunks.push(chunk);
    }

    const multipart = new Response(Buffer.concat(chunks), {
      headers: { "Content-Type": contentType },
    });
    const form = await multipart.formData();
    const file = form.get("attachment");
    if (!(file instanceof File) || !file.name || file.size === 0) {
      send(response, 400, { error: "Choose a nonempty file" });
      return;
    }
    send(response, 200, { filename: file.name, bytes: file.size });
  } catch {
    send(response, 400, { error: "Could not read the upload" });
  }
}).listen(3000, "127.0.0.1", () => {
  console.log("Open http://127.0.0.1:3000");
});`),
      expected: p(
        'A successful upload shows JSON such as {"filename":"notes.txt","bytes":12}. The byte count depends on your file.',
        'Upload အောင်မြင်ရင် {"filename":"notes.txt","bytes":12} လို JSON ကို မြင်ရပါမယ်။ Byte အရေအတွက်က ကိုယ်ရွေးတဲ့ဖိုင်ပေါ် မူတည်ပါတယ်။',
      ),
    },
  ], [
    mdn('The form element', 'Web/HTML/Reference/Elements/form'),
    mdn('File input', 'Web/HTML/Reference/Elements/input/file'),
    mdn('Reading multipart data with formData()', 'Web/API/Response/formData'),
  ]);

const formConstraints = lesson('form-constraints', 'HTML Form Constraints', 'HTML Form Constraints',
  'Form validation checks whether a value follows the rules you set. A constraint is one of those rules. Choose attributes that express what the field accepts.',
  'Form validation က ဖြည့်ထားတဲ့တန်ဖိုးတွေ ကိုယ်သတ်မှတ်ထားတဲ့ စည်းမျဉ်းတွေနဲ့ ကိုက်မကိုက် စစ်ပါတယ်။ Constraint ဆိုတာ အဲဒီစည်းမျဉ်းတစ်ခုစီကို ခေါ်တာပါ။ Field တစ်ခုမှာ ဘယ်လိုတန်ဖိုးကို လက်ခံမလဲဆိုတာ attribute နဲ့ သတ်မှတ်နိုင်ပါတယ်။',
  [
    demo('required', 'Require a Value with required', 'required နဲ့ မဖြစ်မနေ ဖြည့်ခိုင်းခြင်း',
      'Use required when a field must have a value before the form is submitted. The visible label identifies what the user should enter.',
      'Form မပို့ခင် မဖြစ်မနေ ဖြည့်ရမယ့် field မှာ required ထည့်ပါ။ မြင်ရတဲ့ label က ဘာဖြည့်ရမလဲဆိုတာ ပြပေးပါတယ်။',
      'Submit with the field empty to see the browser ask for a value. Enter May and submit again.',
      'အကွက်လွတ်နဲ့ submit လုပ်ရင် Browser က ဖြည့်ခိုင်းပါမယ်။ May လို့ ရိုက်ပြီး ထပ် submit လုပ်ကြည့်ပါ။',
      `  <form>
    <label for="guest">Guest name (required)</label>
    <input id="guest" name="guest" type="text" required>
    <button type="submit">Continue</button>
  </form>`),
    demo('range-and-step', 'Set a Range and Step with min, max, and step', 'min၊ max နဲ့ step သုံးပြီး ဂဏန်းအကန့်အသတ် သတ်မှတ်ခြင်း',
      'min and max set the lowest and highest permitted values. With min="2" and step="2", valid values go up in steps of two from 2. max="10" places the upper limit at 10.',
      'min နဲ့ max က အနိမ့်ဆုံးနဲ့ အမြင့်ဆုံး လက်ခံမယ့် တန်ဖိုးကို သတ်မှတ်ပါတယ်။ min="2" နဲ့ step="2" ဆိုရင် 2 ကနေစပြီး နှစ်ခုစီ တိုးသွားတဲ့ တန်ဖိုးတွေကို လက်ခံပါတယ်။ max="10" ကြောင့် 10 အထိပဲ ရပါတယ်။',
      'Try 5 for a step mismatch, 12 for a value above the limit, and 6 for an accepted value.',
      '5 ထည့်ရင် step နဲ့ မကိုက်ပါဘူး။ 12 ထည့်ရင် သတ်မှတ်ထားတဲ့ အမြင့်ဆုံးတန်ဖိုးကို ကျော်ပါတယ်။ 6 ထည့်ရင် လက်ခံပါတယ်။',
      `  <form>
    <label for="tickets">Tickets (2 to 10, in pairs)</label>
    <input id="tickets" name="tickets" type="number" min="2" max="10" step="2" required>
    <button type="submit">Reserve</button>
  </form>`),
    demo('text-length', 'Limit Text Length with minlength and maxlength', 'minlength နဲ့ maxlength သုံးပြီး စာသားအရှည် သတ်မှတ်ခြင်း',
      'minlength gives an entered value a minimum length. maxlength sets the upper limit. A browser usually stops ordinary typing once that limit is reached. Add required if the field also needs to reject an empty value.',
      'minlength က ဖြည့်ထားတဲ့ စာသားအတွက် အနည်းဆုံးအရှည် သတ်မှတ်ပါတယ်။ maxlength က အများဆုံးအရှည် သတ်မှတ်ပါတယ်။ ပုံမှန်အားဖြင့် အဲဒီအရှည် ပြည့်သွားရင် Browser က စာထပ်ရိုက်လို့ မရအောင် တားပေးပါတယ်။ အလွတ်ထားလို့ မရစေချင်ရင် required ပါ ထည့်ပါ။',
      'Type AB and submit to see a message. Type ABCDEFGHI to see where typing stops. ABC123 passes the length check.',
      'AB ရိုက်ပြီး submit လုပ်ရင် စာပိုရေးခိုင်းပါမယ်။ ABCDEFGHI ကို ရိုက်ကြည့်ရင် ဘယ်နေရာမှာ ရပ်သွားလဲ မြင်ရပါမယ်။ ABC123 ဆိုရင် အရှည်စစ်ချက်ကို ကျော်ပါတယ်။',
      `  <form>
    <label for="reference">Reference (3 to 8 characters)</label>
    <input id="reference" name="reference" minlength="3" maxlength="8" required>
    <button type="submit">Continue</button>
  </form>`),
    demo('pattern', 'Check a Format with pattern', 'pattern နဲ့ ဖြည့်ရမယ့် ပုံစံ စစ်ခြင်း',
      'pattern uses a regular expression to check the entire entered value. [A-Z]{2}[0-9]{4} expects two uppercase English letters followed by four digits. Put the expected format in visible text so the user can see it before submitting.',
      'pattern က ဖြည့်ထားတဲ့ တန်ဖိုးတစ်ခုလုံးကို regular expression နဲ့ စစ်ပါတယ်။ [A-Z]{2}[0-9]{4} ဆိုရင် English စာလုံးအကြီး နှစ်လုံးနောက်မှာ ဂဏန်း လေးလုံး လိုက်ရပါမယ်။ Submit မလုပ်ခင် user သိနိုင်အောင် လိုအပ်တဲ့ပုံစံကို မြင်ရတဲ့စာသားနဲ့ ရေးပြပါ။',
      'Try ab1234 or AB123, then try AB1234. The browser accepts AB1234.',
      'ab1234 နဲ့ AB123 ကို အရင်စမ်းပြီး AB1234 ကို ထပ်စမ်းပါ။ Browser က AB1234 ကို လက်ခံပါတယ်။',
      `  <form>
    <label for="booking">Booking code</label>
    <p id="format">Enter two uppercase letters and four digits, such as AB1234.</p>
    <input id="booking" name="booking" pattern="[A-Z]{2}[0-9]{4}"
           aria-describedby="format" required>
    <button type="submit">Look up booking</button>
  </form>`),
  ], [
    mdn('HTML constraint validation', 'Web/HTML/Guides/Constraint_validation'),
    ['WHATWG · Constraint validation', htmlSpec + 'form-control-infrastructure.html#constraint-validation'],
  ]);

export const extraFormLessons = [fileUploads, formConstraints];
