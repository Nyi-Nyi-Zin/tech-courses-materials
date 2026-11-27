import { p, page, guide } from './content.js';
import { consoleSetup, demoPage, example, htmlSpec, mdn, standalone } from './examples.js';

const jsRef = (label, path) => ['MDN · ' + label, mdn + 'Web/JavaScript/' + path];
const apiRef = (label, path) => ['MDN · ' + label, mdn + 'Web/API/' + path];
const js = (id, title, text, code, expected, check) => example(id, title, text, code, expected, consoleSetup, check);
const browser = (id, title, text, body, script, expected, check) =>
  example(id, title, text, demoPage(title.en, body, '', script), expected, standalone, check);

export const jsGuide = guide('js', 'JavaScript', 'ECMAScript 2026', p(
  'Write your first instruction in the browser, then learn to calculate values, respond to clicks, and request data.',
  'Browser မှာ ပထမဆုံး ညွှန်ကြားချက် ရေးပြီး တန်ဖိုးတွက်တာ၊ click ကို တုံ့ပြန်တာနဲ့ data တောင်းယူတာတွေကို ဆက်လေ့လာပါ။',
), [
  page('getting-started', p('Run your first JavaScript', 'ပထမဆုံး JavaScript Run ခြင်း'), p(
    'JavaScript is a programming language. It gives the browser instructions it can run, such as calculating a price or changing a message after a button click. Start by making the browser write one message.',
    'JavaScript က programming language တစ်ခုပါ။ ဈေးတွက်တာ၊ ခလုတ်နှိပ်ပြီး စာသားပြောင်းတာလို browser ကို လုပ်စေချင်တဲ့ အလုပ်ကို ညွှန်ကြားနိုင်ပါတယ်။ Browser မှာ စာတစ်ကြောင်း ထုတ်ကြည့်တာကနေ စပါမယ်။',
  ), [
    example('console', p('Use the browser Console', 'Browser Console သုံးခြင်း'), p(
      'Developer Tools lets you inspect a web page. The Console tab lets you run JavaScript and see messages from the page. console.log() is an instruction for printing a message there. The quotes mark the text you want to print.',
      'Developer Tools နဲ့ web page ကို စစ်ကြည့်လို့ရပါတယ်။ Console tab မှာ JavaScript စမ်း run ပြီး စာမျက်နှာက ထုတ်တဲ့ message တွေကို ကြည့်နိုင်ပါတယ်။ console.log() က အဲဒီနေရာမှာ စာထုတ်ဖို့ ညွှန်ကြားချက်ပါ။ ထုတ်ချင်တဲ့ စာသားကို quotation marks ကြားမှာ ရေးပါ။',
    ), 'console.log("Your order is ready.");', p('The Console shows “Your order is ready.”. It may also show undefined as the result of the instruction itself.', 'Console မှာ “Your order is ready.” ပေါ်ပါမယ်။ ညွှန်ကြားချက်ရဲ့ ပြန်ရလဒ်အဖြစ် undefined ကိုပါ ပြနိုင်ပါတယ်။'), p(
      'Open a page in your browser. Right-click the page and choose Inspect, find the Console tab, type this line, and press Enter.',
      'Browser နဲ့ စာမျက်နှာတစ်ခု ဖွင့်ပါ။ Right-click နှိပ်၊ Inspect ရွေးပြီး Console tab ကို သွားပါ။ ဒီစာကြောင်းကို ရိုက်ပြီး Enter နှိပ်ပါ။',
    )),
    browser('script', p('Place JavaScript in a <script> element', '<script> ထဲမှာ JavaScript ရေးခြင်း'), p(
      'The browser executes code inside a script element when it reaches that element. This example places the script near the end of body. The paragraph belongs to the visible page; the log goes to the Console.',
      'Browser က <script> element ကို ရောက်တဲ့အခါ အထဲက code ကို run ပါတယ်။ နမူနာမှာ script ကို body အဆုံးနားမှာ ထားပါတယ်။ စာပိုဒ်က စာမျက်နှာမှာ ပေါ်ပြီး log က Console မှာ ပေါ်ပါတယ်။',
    ), '<p>Product catalog</p>', '    console.log("The catalog page loaded.");', p('“Product catalog” appears on the page. Open Console and reload to see “The catalog page loaded.”.', 'စာမျက်နှာမှာ “Product catalog” ပေါ်ပါမယ်။ Console ဖွင့်ပြီး reload လုပ်ရင် “The catalog page loaded.” မြင်ရပါမယ်။')),
    example('external-script', p('Link a separate JavaScript file', 'JavaScript ဖိုင်သီးသန့် ချိတ်ခြင်း'), p(
      'A .js file can contain the JavaScript for a page. src on a script element gives the browser the file path. With a classic external script in head, defer tells the browser to wait until it has finished reading the HTML before running it.',
      '.js ဖိုင်ထဲမှာ page အတွက် JavaScript ရေးနိုင်ပါတယ်။ script ရဲ့ src က browser ကို ဖိုင်လိပ်စာ ပြောပေးပါတယ်။ ပုံမှန် external script ကို head မှာ ထားတဲ့အခါ defer ပါရင် HTML ကို ဖတ်ပြီးမှ script run ပါတယ်။',
    ), 'console.log("app.js is linked.");', p('After reloading, the Console logs “app.js is linked.”.', 'Reload လုပ်ပြီးရင် Console မှာ “app.js is linked.” ပေါ်ပါမယ်။'), p(
      'Save this line in app.js beside your HTML file. Remove the old inline <script> block and add <script defer src="app.js"></script> inside <head>. Save both files and reload.',
      'ဒီစာကြောင်းကို HTML ဖိုင်နဲ့ folder တူတဲ့ app.js ထဲ သိမ်းပါ။ အရင် <script> block ကို ဖယ်ပြီး <head> အတွင်း <script defer src="app.js"></script> ထည့်ပါ။ ဖိုင်နှစ်ခုလုံး သိမ်းပြီး reload လုပ်ပါ။',
    ), p('Check the filename and the browser Console for a load error if the new message is missing.', 'စာအသစ် မပေါ်ရင် ဖိုင်နာမည်ကို စစ်ပါ။ Browser Console မှာ ဖိုင်မတွေ့တဲ့ error ရှိလား ကြည့်ပါ။')),
  ], [jsRef('JavaScript Guide', 'Guide'), ['WHATWG · The script element', htmlSpec + 'scripting.html#the-script-element']]),

  page('values', p('Values, types, variables, and operators', 'Value၊ Type၊ Variable နဲ့ Operator'), p(
    'A value is a piece of data a program works with. Learn to identify its kind, keep it under a name, and use it in a calculation or comparison.',
    'Value ဆိုတာ program က သုံးမယ့် အချက်အလက်တစ်ခုပါ။ အမျိုးအစား ခွဲသိပုံ၊ နာမည်တပ်ပြီး ပြန်သုံးပုံ၊ တွက်တာနဲ့ နှိုင်းတာတွေမှာ သုံးပုံကို ကြည့်ပါမယ်။',
  ), [
    js('types', p('Recognize strings, numbers, and booleans', 'String၊ Number နဲ့ Boolean ခွဲသိခြင်း'), p(
      'The type describes what kind of value you have. Text in quotes is a string. An unquoted value such as 2500 is a number. true and false are boolean values. typeof reports a type name as a string.',
      'Type က value အမျိုးအစားကို ပြောပါတယ်။ Quotation marks ကြားက စာသားက string ပါ။ Quote မပါတဲ့ 2500 လို တန်ဖိုးက number ပါ။ true နဲ့ false က boolean တန်ဖိုးတွေပါ။ typeof က type နာမည်ကို string အဖြစ် ပြန်ပေးပါတယ်။',
    ), 'console.log(typeof "Pen");\nconsole.log(typeof 2500);\nconsole.log(typeof true);', p('The Console prints string, number, and boolean on separate lines.', 'Console မှာ string၊ number၊ boolean ဆိုပြီး သုံးကြောင်း ပေါ်ပါမယ်။')),
    js('bindings', p('Name a value with const or let', 'const နဲ့ let သုံးပြီး တန်ဖိုး နာမည်ပေးခြင်း'), p(
      'A variable is a name you use to refer to a value. A declaration introduces the name. The equal sign assigns a value. Use const when the name should keep pointing to the value assigned at creation, and let when the assignment may change.',
      'Variable ဆိုတာ တန်ဖိုးကို ပြန်သုံးဖို့ ပေးထားတဲ့ နာမည်ပါ။ Declaration နဲ့ နာမည်အသစ် မိတ်ဆက်ပါတယ်။ = နဲ့ တန်ဖိုး ထည့်ပေးပါတယ်။ စရေးတုန်းက ထည့်ထားတဲ့ တန်ဖိုးကိုပဲ နာမည်က ဆက်ရည်ညွှန်းစေချင်ရင် const သုံးပါ။ နောက်ပိုင်း ထပ်ထည့်ပြောင်းဖို့ လိုရင် let သုံးပါ။',
    ), 'const price = 2500;\nlet quantity = 1;\ncups = 2;\nconsole.log(price, quantity);', p('The Console prints 2500 and 2. Changing quantity does not affect price.', 'Console မှာ 2500 နဲ့ 2 ပေါ်ပါမယ်။ quantity ပြောင်းတာကြောင့် price မပြောင်းပါဘူး။'), p('If you get an error about a name already being declared, reload the browser tab before running the example again.', 'နာမည်ကြေညာပြီးသားလို့ error ပြရင် အဲဒီ browser tab ကို reload လုပ်ပြီးမှ ထပ်စမ်းပါ။')),
    js('operators', p('Calculate and compare with operators', 'Operator နဲ့ တွက်ခြင်း၊ နှိုင်းခြင်း'), p(
      'An operator acts on values. * multiplies, + adds two numbers, and >= checks whether the left side is at least the right side. === checks strict equality; the number 3 and the string "3" have different types. Use && when both checks have to be true.',
      'Operator ဆိုတာ တန်ဖိုးတွေပေါ်မှာ အလုပ်လုပ်တဲ့ သင်္ကေတပါ။ * က မြှောက်၊ + က ဂဏန်းနှစ်ခု ပေါင်း၊ >= က ဘယ်တန်ဖိုးက ညာတန်ဖိုးထက် ကြီးလား သို့မဟုတ် ညီလား စစ်တာပါ။ === က type ပါ တူမတူ စစ်လို့ number 3 နဲ့ string "3" က မတူပါဘူး။ စစ်ချက်နှစ်ခုလုံး မှန်ရမယ်ဆို && သုံးပါ။',
    ), 'console.log(2500 * 2);\nconsole.log(3 === "3");\nconsole.log(3 >= 1 && 3 <= 6);', p('The results are 5000, false, and true, in that order.', '5000၊ false၊ true ဆိုပြီး အစဉ်လိုက် ထွက်ပါမယ်။')),
    js('conversion', p('Convert text before calculating', 'မတွက်ခင် စာသားကို ဂဏန်း ပြောင်းခြင်း'), p(
      'A value typed into an HTML input is commonly read as a string. Number() converts numeric text. NaN is a special number value that can signal failed conversion. Check it with Number.isNaN(). Treat blank input separately because Number("") gives 0.',
      'HTML input မှာ ရိုက်ထားတဲ့ တန်ဖိုးကို ပုံမှန်အားဖြင့် string အနေနဲ့ ဖတ်ပါတယ်။ Number() နဲ့ ဂဏန်းပုံစံ စာသားကို number ပြောင်းနိုင်ပါတယ်။ NaN က ဂဏန်းပြောင်းလို့မရတာကို ဖော်ပြနိုင်တဲ့ အထူးတန်ဖိုးပါ။ Number.isNaN() နဲ့ စစ်နိုင်ပါတယ်။ Number("") က 0 ရလို့ အကွက်လွတ်ကို သီးသန့် စစ်ပါ။',
    ), 'const count = Number("3");\nconsole.log(count + 1);\nconsole.log(Number.isNaN(Number("three")));', p('The Console prints 4, then true. Try "3" + 1 to see string concatenation produce "31".', 'Console မှာ 4 နဲ့ true ပေါ်ပါမယ်။ "3" + 1 စမ်းရင် စာသားဆက်သွားလို့ "31" ရတာ မြင်ရပါမယ်။')),
  ], [jsRef('Grammar and types', 'Guide/Grammar_and_types'), jsRef('Expressions and operators', 'Guide/Expressions_and_operators')]),

  page('conditions-and-loops', p('Conditions and loops', 'Condition နဲ့ Loop'), p(
    'A condition lets the program choose an action. A loop lets it repeat an action. First try each idea with one simple rule.',
    'Condition နဲ့ အခြေအနေအလိုက် ဘာလုပ်မလဲ ရွေးနိုင်ပါတယ်။ Loop နဲ့ အလုပ်တစ်ခုကို ထပ်လုပ်နိုင်ပါတယ်။ နှစ်ခုစလုံးကို ရိုးရိုး စည်းကမ်းတစ်ခုစီနဲ့ အရင်စမ်းပါ။',
  ), [
    js('if-else', p('Choose a branch with if, else if, and else', 'if၊ else if၊ else နဲ့ လုပ်မယ့် အပိုင်းရွေးခြင်း'), p(
      'A condition is an expression JavaScript evaluates to make a decision. Code between braces forms a block. If the first condition is true it runs that block. Otherwise it checks else if. The final else covers what is left.',
      'Condition ဆိုတာ ဆုံးဖြတ်ချက်ချဖို့ JavaScript က စစ်မယ့် အချက်ပါ။ { } ကြားက code အစုကို block လို့ ခေါ်ပါတယ်။ ပထမ condition မှန်ရင် ပထမ block run တယ်။ မမှန်ရင် else if ကို ထပ်စစ်တယ်။ ကျန်တဲ့ အခြေအနေမှာ else block ကို run ပါတယ်။',
    ), 'const quantity = 3;\nif (quantity >= 5) {\n  console.log("Group order");\n} else if (quantity >= 1) {\n  console.log("Regular order");\n} else {\n  console.log("Choose at least one item");\n}', p('The result is “Regular order”. Try 5 and 0 to check the two boundaries.', '“Regular order” လို့ ထွက်ပါမယ်။ 5 နဲ့ 0 ထည့်ပြီး နယ်စည်းနှစ်ခု စစ်ပါ။')),
    js('switch', p('Match an exact value with switch', 'switch နဲ့ တန်ဖိုးအတိအကျ တိုက်စစ်ခြင်း'), p(
      'switch compares a single value against case labels. break exits the switch after the matching case runs. Without it, execution can continue into the next case. default handles unmatched values.',
      'switch က တန်ဖိုးတစ်ခုကို case တန်ဖိုးတွေနဲ့ တိုက်စစ်ပါတယ်။ ကိုက်တဲ့ case လုပ်ပြီး switch ကနေ ထွက်ဖို့ break သုံးပါတယ်။ break မပါရင် နောက် case အထဲ ဆက် run နိုင်ပါတယ်။ ဘာနဲ့မှ မကိုက်ရင် default အပိုင်းကို သုံးပါတယ်။',
    ), 'const productCode = "P";\nswitch (productCode) {\n  case "P":\n    console.log("Pen");\n    break;\n  case "N":\n    console.log("Notebook");\n    break;\n  default:\n    console.log("Unknown product");\n}', p('It prints Pen. Change the code to N or X to try the other cases.', 'Pen လို့ ပေါ်ပါမယ်။ N နဲ့ X ပြောင်းပြီး ကျန်တဲ့ case တွေ စမ်းပါ။')),
    js('loops', p('Repeat a counted task with for', 'for နဲ့ အကြိမ်ရေတွက်ပြီး ထပ်လုပ်ခြင်း'), p(
      'A for loop has a start, a test, and an update. JavaScript runs the start once. Before each pass it tests the condition. After each pass it runs the update. itemNumber += 1 adds one to itemNumber.',
      'for loop မှာ စတင်တန်ဖိုး၊ စစ်ချက်နဲ့ ပြောင်းမယ့် အပိုင်း ရှိပါတယ်။ စတင်တာကို တစ်ခါပဲ run ပါတယ်။ တစ်ပတ်မစခင် စစ်ချက်ကို စစ်ပြီး ပြီးတိုင်း တန်ဖိုး ပြောင်းတဲ့အပိုင်းကို run ပါတယ်။ itemNumber += 1 ဆို itemNumber ကို တစ်တိုးပေးတာပါ။',
    ), 'for (let itemNumber = 1; itemNumber <= 3; itemNumber += 1) {\n  console.log("Item", itemNumber);\n}', p('Item 1, Item 2, and Item 3 appear on separate lines. The next test fails when itemNumber reaches 4.', 'Item 1၊ Item 2၊ Item 3 သုံးကြောင်း ပေါ်ပါမယ်။ itemNumber 4 ရောက်ရင် စစ်ချက် မမှန်တော့လို့ ရပ်ပါတယ်။')),
    js('while', p('Repeat while a condition is true', 'while နဲ့ စစ်ချက်မှန်နေသရွေ့ ထပ်လုပ်ခြင်း'), p(
      'while tests before every pass. Update the variables it checks so the condition can become false. break stops the current loop; continue starts the next pass early. Place the update where it will still run on any pass that continues.',
      'while က တစ်ပတ်မစခင် အကြိမ်တိုင်း စစ်ပါတယ်။ နောက်ဆုံး စစ်ချက် false ဖြစ်နိုင်အောင် စစ်မယ့် variable ကို ပြောင်းပါ။ break က loop ရပ်ပြီး continue က ကျန်တဲ့ code ကို ကျော်ကာ နောက်တစ်ပတ် စစ်စေပါတယ်။ continue ကြောင့် တန်ဖိုးပြောင်းမယ့် code မကျော်သွားအောင် နေရာချပါ။',
    ), 'let remaining = 3;\nwhile (remaining > 0) {\n  remaining -= 1;\n  if (remaining === 1) continue;\n  console.log(remaining);\n}', p('The Console prints 2 and 0. The loop skips printing 1 and stops once the condition becomes false.', 'Console မှာ 2 နဲ့ 0 ပေါ်ပါမယ်။ 1 ကို မထုတ်ဘဲ ကျော်ပြီး စစ်ချက် false ဖြစ်တဲ့အခါ loop ရပ်ပါတယ်။')),
  ], [jsRef('Control flow', 'Guide/Control_flow_and_error_handling'), jsRef('Loops and iteration', 'Guide/Loops_and_iteration')]),

  page('functions', p('Functions and modules', 'Function နဲ့ Module'), p(
    'A function gives a piece of work a name so you can run it again with different inputs. A module is a file that can share selected definitions with other files.',
    'Function က အလုပ်တစ်ခုကို နာမည်ပေးထားပြီး လိုတဲ့အခါ input ပြောင်းပြီး ထပ်ခေါ်လို့ရစေပါတယ်။ Module က သတ်မှတ်ထားတဲ့ အစိတ်အပိုင်းတွေကို တခြားဖိုင်တွေထဲ ခေါ်သုံးလို့ရတဲ့ ဖိုင်တစ်ခုပါ။',
  ), [
    js('functions', p('Define and call a function', 'Function ရေးပြီး ခေါ်သုံးခြင်း'), p(
      'function introduces reusable code. The name is followed by parentheses and a block. Defining a function makes it available. Writing its name followed by () calls it and runs the block.',
      'function keyword နဲ့ ပြန်သုံးမယ့် code ကို စရေးပါတယ်။ နာမည်နောက်မှာ ( ) နဲ့ code block လိုက်ပါတယ်။ Function ရေးထားတာက ခေါ်လို့ရအောင် သတ်မှတ်တာပါ။ နာမည်နောက်မှာ () ထည့်ရေးပြီး ခေါ်တဲ့အခါ block ကို run ပါတယ်။',
    ), 'function sayReady() {\n  console.log("Your order is ready.");\n}\nsayReady();\nsayReady();', p('The same message appears twice because the function is called twice.', 'Function နှစ်ခါခေါ်ထားလို့ စာသားတူ နှစ်ကြောင်း ပေါ်ပါမယ်။')),
    js('parameters', p('Pass inputs and return a result', 'Input ပေးပြီး ရလဒ် ပြန်ယူခြင်း'), p(
      'A parameter is a name for an input inside a function. An argument is a value you pass when calling it. A default parameter supplies a value when that argument is omitted or undefined. return ends the call and sends the result back to its caller.',
      'Parameter က function အတွင်းမှာ input ကို ခေါ်မယ့် နာမည်ပါ။ Argument က function ခေါ်တဲ့အခါ ပေးလိုက်တဲ့ တန်ဖိုးပါ။ Argument မပေးရင် သို့မဟုတ် undefined ပေးရင် default parameter တန်ဖိုးကို သုံးပါတယ်။ return က function call ကို အဆုံးသတ်ပြီး ရလဒ်ကို ခေါ်တဲ့နေရာဆီ ပြန်ပေးပါတယ်။',
    ), 'function total(price, quantity = 1) {\n  return price * quantity;\n}\nconsole.log(total(2500), total(2500, 2));', p('The first call returns 2500 and the second returns 5000.', 'ပထမ function call က 2500၊ ဒုတိယက 5000 ပြန်ပေးပါမယ်။')),
    example('export', p('Share a function with export', 'export နဲ့ Function ကို ဖိုင်တခြားမှာ သုံးနိုင်အောင် လုပ်ခြင်း'), p(
      'An export marks a definition the module makes available to another module. Here total is a named export. Code using it can import that same name.',
      'export က module ရဲ့ ဘယ်အရာကို တခြား module မှာ ခေါ်သုံးလို့ရမလဲ မှတ်ပေးပါတယ်။ ဒီမှာ total က နာမည်နဲ့ export လုပ်ထားတာပါ။ သုံးမယ့်ဖိုင်မှာ အဲဒီနာမည်နဲ့ import လုပ်နိုင်ပါတယ်။',
    ), 'export function total(price, quantity = 1) {\n  return price * quantity;\n}', p('The file now makes total available to the importing module. The result appears after running the next example.', 'ဒီဖိုင်က total ကို import လုပ်လို့ရပါပြီ။ နောက်နမူနာကို run ပြီးမှ ရလဒ် ထွက်ပါမယ်။'), p('Create an empty folder, then save this as total.js in it.', 'Folder အလွတ်တစ်ခုလုပ်ပြီး ဒီ code ကို total.js နဲ့ အဲဒီထဲ သိမ်းပါ။')),
    example('modules', p('Import and run a browser module', 'Browser Module ကို import လုပ်ပြီး Run ခြင်း'), p(
      'import names what you want to use and tells the browser where the module is. ./ means the same folder. A script with type="module" allows import in that script. Serve the page over HTTP so both files are loaded from the same origin.',
      'import မှာ သုံးမယ့်နာမည်နဲ့ module ဖိုင်ရှိတဲ့ လိပ်စာကို ရေးပါတယ်။ ./ က folder တူတူလို့ ဆိုလိုပါတယ်။ script မှာ type="module" ထည့်မှ ဒီမှာ import ရေးလို့ရပါတယ်။ နှစ်ဖိုင်လုံး လိပ်စာတစ်ခုတည်းကနေ ဖွင့်နိုင်ဖို့ page ကို HTTP နဲ့ ဖွင့်ပါ။',
    ), demoPage('Module demo', '  <p>Open the Console to see the total.</p>\n  <script type="module">\n    import { total } from "./total.js";\n    console.log(total(2500, 2));\n  </script>'), p('The Console prints 5000 when the browser loads the module.', 'Browser က module ကို ဖတ်ပြီး Console မှာ 5000 ထုတ်ပါမယ်။'), p(
      'Save as index.html beside total.js. In VS Code, open that folder and use a local server such as Live Server. With Python installed, you can also run python -m http.server 8000 in the folder and open http://localhost:8000.',
      'total.js ဘေးမှာ index.html နဲ့ သိမ်းပါ။ VS Code မှာ အဲဒီ folder ဖွင့်ပြီး Live Server လို local server သုံးပါ။ Python ရှိရင် အဲဒီ folder ရဲ့ terminal ထဲ python -m http.server 8000 run ပြီး browser မှာ http://localhost:8000 ဖွင့်နိုင်ပါတယ်။',
    )),
  ], [jsRef('Functions', 'Guide/Functions'), jsRef('JavaScript modules', 'Guide/Modules')]),

  page('arrays-and-objects', p('Strings, arrays, and objects', 'String၊ Array နဲ့ Object'), p(
    'A string holds text. An array holds a sequence of values. An object groups related values by name. Start by reading one value from each kind.',
    'String က စာသားသိမ်းပါတယ်။ Array က တန်ဖိုးတွေကို အစဉ်လိုက် သိမ်းပါတယ်။ Object က ဆက်စပ်တဲ့ တန်ဖိုးတွေကို နာမည်ပေးပြီး စုထားပါတယ်။ အမျိုးအစားတစ်ခုစီကနေ တန်ဖိုးတစ်ခု ဖတ်တာက စပါမယ်။',
  ), [
    js('strings', p('Read and clean a string', 'String ဖတ်ခြင်းနဲ့ စာသား သန့်စင်ခြင်း'), p(
      'A string has a length and methods, which are operations you call on a value. trim() returns a new string with whitespace removed from both ends. toLowerCase() returns a lowercase version. The original string stays as it was.',
      'String မှာ အရှည်ရှိပြီး method လို့ခေါ်တဲ့ လုပ်ဆောင်ချက်တွေကို ခေါ်သုံးလို့ရပါတယ်။ trim() က ရှေ့နောက်က အလွတ်နေရာ ဖြုတ်ထားတဲ့ string အသစ် ပြန်ပေးပါတယ်။ toLowerCase() က စာလုံးအသေး ပြန်ပေးပါတယ်။ မူလ စာသားက အတိုင်းပဲ ကျန်ပါတယ်။',
    ), 'const raw = "  Pen  ";\nconsole.log(raw.trim().toLowerCase());\nconsole.log(raw.length);', p('It prints pen, then 7 for the original string’s length.', 'pen ဆိုပြီး ပေါ်ပါမယ်။ ပြီးရင် မူလ string အရှည် 7 ပေါ်ပါမယ်။')),
    js('replace', p('Replace spaces in a string', 'String ထဲက အလွတ်နေရာတွေ အစားထိုးခြင်း'), p(
      'replace() returns a new string with matching text replaced. A pattern such as /\\s+/g matches every run of one or more whitespace characters. The regular expression lesson explains that syntax in more detail.',
      'replace() က ကိုက်တဲ့စာသားကို အစားထိုးထားတဲ့ string အသစ် ပြန်ပေးပါတယ်။ /\\s+/g က အလွတ်နေရာ တစ်ခု သို့မဟုတ် အများကြီး ဆက်နေတဲ့ အစုတိုင်းကို ရွေးပါတယ်။ Pattern ရေးပုံအသေးစိတ်ကို Regular Expression lesson မှာ ကြည့်နိုင်ပါတယ်။',
    ), 'const title = "  Blue   Pen  ";\nconst slug = title.trim().toLowerCase().replace(/\\s+/g, "-");\nconsole.log(slug);', p('It prints blue-pen with one hyphen between the words.', 'စကားလုံးနှစ်ခုကြား hyphen တစ်ခုနဲ့ blue-pen လို့ ထွက်ပါမယ်။')),
    js('arrays', p('Read and add items in an array', 'Array ထဲက Item ဖတ်ခြင်းနဲ့ ထည့်ခြင်း'), p(
      'Write array values inside square brackets. The index is a position number that starts at zero. array[0] reads the first item. push() adds to the end, and length gives the number of items.',
      'Array မှာ [ ] ကြား တန်ဖိုးတွေ ရေးပါတယ်။ Index က 0 ကနေ စရေတွက်တဲ့ နေရာအမှတ်ပါ။ array[0] က ပထမ item ကို ဖတ်ပါတယ်။ push() က အဆုံးမှာ ထည့်ပြီး length က item အရေအတွက်ပါ။',
    ), 'const products = ["Pen", "Notebook"];\nconsole.log(products[0]);\nproducts.push("Pencil");\nconsole.log(products.length);', p('The results are Pen and 3. Try index 2 after pushing and you get Pencil.', 'Pen နဲ့ 3 ပေါ်ပါမယ်။ push ပြီး index 2 ကို ဖတ်ကြည့်ရင် Pencil ရပါမယ်။')),
    js('objects', p('Read named properties in an object', 'Object ထဲက Property တွေ ဖတ်ခြင်း'), p(
      'An object literal uses braces. Each property has a name and a value separated by a colon. Use a dot to read a known property name, or brackets to read a name stored in a variable. With const, you can still update object properties; the name must keep pointing to the same object.',
      'Object ကို { } နဲ့ ရေးနိုင်ပါတယ်။ Property တစ်ခုမှာ နာမည်နဲ့ တန်ဖိုးကို : နဲ့ ခွဲပါတယ်။ နာမည်သိရင် . နဲ့ ဖတ်နိုင်ပြီး နာမည်ကို variable ထဲ သိမ်းထားရင် [ ] နဲ့ ဖတ်နိုင်ပါတယ်။ const သုံးထားလည်း object ရဲ့ property ပြင်လို့ရပါတယ်။ Variable က အဲဒီ object တစ်ခုတည်းကိုပဲ ဆက်ရည်ညွှန်းရပါတယ်။',
    ), 'const product = { name: "Pen", price: 2500 };\nconst key = "price";\nconsole.log(product.name, product[key]);\nproduct.price = 3000;\nconsole.log(product.price);', p('It prints Pen and 2500, then the updated price 3000.', 'Pen နဲ့ 2500 ပြပြီး နောက်ဆုံး ဈေးအသစ် 3000 ပေါ်ပါမယ်။')),
    js('destructuring', p('Extract named values with destructuring', 'Destructuring နဲ့ နာမည်တူ Property ထုတ်ယူခြင်း'), p(
      'Object destructuring copies selected property values into variables. In const { name, price } = product, both variable names match properties of product. You can also use a colon inside the pattern to assign a different variable name.',
      'Object destructuring နဲ့ ရွေးထားတဲ့ property တန်ဖိုးတွေကို variable တွေထဲ ထုတ်ယူနိုင်ပါတယ်။ const { name, price } = product မှာ variable နာမည်နှစ်ခုက product ရဲ့ property နာမည်နဲ့ တူပါတယ်။ Variable နာမည်အသစ် ပေးချင်ရင် pattern ထဲမှာ : နဲ့ ထပ်သတ်မှတ်နိုင်ပါတယ်။',
    ), 'const product = { name: "Pen", price: 2500 };\nconst { name, price: unitPrice } = product;\nconsole.log(name, unitPrice);', p('It prints Pen and 2500. The original object still uses the property named price.', 'Pen နဲ့ 2500 ရပါမယ်။ မူလ object မှာ property နာမည်က price ပဲ ဆက်ရှိပါတယ်။')),
    js('aggregate', p('Filter, transform, and total an array', 'Array ကို Filter၊ Map နဲ့ Reduce သုံးခြင်း'), p(
      'filter keeps items that pass a test. map builds an array of transformed items. reduce combines them into one value, starting here at 0. The => syntax defines a short function that is called for each item.',
      'filter က စစ်ချက်မှန်တဲ့ item တွေကိုပဲ ယူပါတယ်။ map က item တစ်ခုစီကို ပြောင်းပြီး array အသစ် ထုတ်ပါတယ်။ reduce က တန်ဖိုးတွေကို တစ်ခုဖြစ်အောင် စုပေးပြီး ဒီမှာ 0 ကနေ စပါတယ်။ => က item တစ်ခုစီအတွက် ခေါ်မယ့် function အတိုရေးပုံပါ။',
    ), 'const orders = [{ price: 2500, paid: true }, { price: 3000, paid: false }];\nconst paidPrices = orders.filter(order => order.paid).map(order => order.price);\nconsole.log(paidPrices);\nconsole.log(paidPrices.reduce((sum, price) => sum + price, 0));', p('It prints an array containing 2500, then the total 2500.', '2500 ပါတဲ့ array တစ်ခုနဲ့ စုစုပေါင်း 2500 ပေါ်ပါမယ်။')),
    js('copy', p('Understand what spread copies', 'Spread နဲ့ ကူးတဲ့အခါ ဘာတွေ ပါလဲ။'), p(
      'Spread syntax uses three dots to copy entries from an array or properties from an object. It creates a shallow copy: nested objects are still shared. Copy the nested level too if you plan to change it independently.',
      'Spread syntax က ... နဲ့ array ထဲက item တွေ၊ object ထဲက property တွေကို ကူးပါတယ်။ အပြင်တစ်ဆင့်ပဲ ကူးလို့ အတွင်းက object တွေက အတူတူကိုပဲ ဆက်ရည်ညွှန်းနေပါတယ်။ အတွင်းအဆင့်ကို သီးသန့်ပြင်ချင်ရင် အဲဒီအဆင့်ကိုပါ ကူးပါ။',
    ), 'const original = { product: { price: 2500 } };\nconst copy = { ...original, product: { ...original.product } };\ncopy.product.price = 3000;\nconsole.log(original.product.price, copy.product.price);', p('It prints 2500 and 3000. Remove the nested copy and the original price changes as well.', '2500 နဲ့ 3000 ပေါ်ပါမယ်။ product ကို သီးသန့်မကူးဘဲ စမ်းရင် မူလ price ပါ ပြောင်းပါမယ်။')),
  ], [jsRef('Array', 'Reference/Global_Objects/Array'), jsRef('Working with objects', 'Guide/Working_with_objects'), jsRef('Spread syntax', 'Reference/Operators/Spread_syntax')]),

  page('scope-and-classes', p('Scope, closures, and classes', 'Scope၊ Closure နဲ့ Class'), p(
    'Scope decides where a name can be used. Closures let functions keep access to names around them. Classes give you a reusable way to create objects that share a structure and behavior.',
    'Scope က နာမည်တစ်ခုကို ဘယ်နေရာမှာ သုံးလို့ရလဲ သတ်မှတ်ပါတယ်။ Closure က function ကို အပြင်ဘက်က နာမည်တွေ ဆက်သုံးလို့ရစေပါတယ်။ Class နဲ့ ဖွဲ့စည်းပုံနဲ့ လုပ်ဆောင်ချက် တူတဲ့ object တွေ ပြန်ဖန်တီးနိုင်ပါတယ်။',
  ), [
    js('scope', p('What is scope?', 'Scope ဆိုတာဘာလဲ။'), p(
      'Names declared with let or const inside a block are visible in that block and blocks nested inside it. An inner block can use a different variable with the same name. This is called shadowing.',
      'Block ထဲမှာ let သို့မဟုတ် const နဲ့ ကြေညာတဲ့ နာမည်ကို အဲဒီ block နဲ့ အတွင်းထဲ ထပ်ဝင်ထားတဲ့ block တွေမှာ သုံးလို့ရပါတယ်။ အတွင်း block မှာ နာမည်တူ variable သီးသန့် ထပ်ရေးနိုင်ပါတယ်။ ဒါကို shadowing လို့ခေါ်ပါတယ်။',
    ), 'const product = "Pen";\n{\n  const product = "Notebook";\n  console.log(product);\n}\nconsole.log(product);', p('Inside the block it prints Notebook; outside it prints Pen.', 'Block ထဲမှာ Notebook၊ အပြင်မှာ Pen ထွက်ပါမယ်။')),
    js('closures', p('Keep access to values with a closure', 'Closure နဲ့ အပြင်က တန်ဖိုးကို ဆက်သုံးခြင်း'), p(
      'A closure is a function together with access to the scope where it was created. When makeCounter finishes, the function it returns can still read and change count. Each call to makeCounter makes a separate count.',
      'Closure ဆိုတာ function တစ်ခုနဲ့ အဲဒီ function ကို ဖန်တီးခဲ့တဲ့ scope ကို ဆက်သုံးနိုင်မှုပါ။ makeCounter ပြီးသွားလည်း return ပြန်တဲ့ function က count ကို ဆက်ဖတ်၊ ဆက်ပြင်နိုင်ပါတယ်။ makeCounter ခေါ်တိုင်း သီးသန့် count တစ်ခုစီ ရပါတယ်။',
    ), 'function makeCounter() {\n  let count = 0;\n  return function addOne() {\n    count += 1;\n    return count;\n  };\n}\nconst next = makeCounter();\nconsole.log(next(), next());', p('It prints 1 and 2. A new counter starts again at 1 on its first call.', '1 နဲ့ 2 ပေါ်ပါမယ်။ Counter အသစ်လုပ်ရင် ပထမဆုံးခေါ်တဲ့အခါ 1 ကနေ ပြန်စပါမယ်။')),
    js('classes', p('Create an object from a class', 'Class ကနေ Object ဖန်တီးခြင်း'), p(
      'A class describes how to make related objects. new creates one instance and runs constructor with the supplied arguments. this refers to that instance in the constructor and when its method is called through the instance.',
      'Class က ပုံစံတူ object တွေကို ဘယ်လို ဖန်တီးမလဲ ရေးထားတာပါ။ new နဲ့ instance တစ်ခု ဆောက်ရင် ပေးထားတဲ့ argument တွေနဲ့ constructor run ပါတယ်။ Constructor ထဲမှာနဲ့ instance ကနေ method ခေါ်တဲ့အခါ this က အဲဒီ instance ကို ရည်ညွှန်းပါတယ်။',
    ), 'class Product {\n  constructor(name, price) {\n    this.name = name;\n    this.price = price;\n  }\n  total(quantity) {\n    return this.price * quantity;\n  }\n}\nconst pen = new Product("Pen", 2500);\nconsole.log(pen.name, pen.total(2));', p('The Console shows Pen and 5000. Make another instance with a different price to see that it has its own data.', 'Console မှာ Pen နဲ့ 5000 ပေါ်ပါမယ်။ ဈေးမတူတဲ့ instance အသစ်လုပ်ပြီး ကိုယ်ပိုင်တန်ဖိုး သီးသန့် ရှိတာကို စမ်းပါ။')),
  ], [jsRef('Closures', 'Guide/Closures'), jsRef('Classes', 'Reference/Classes')]),

  page('dom', p('The DOM and events', 'DOM နဲ့ Event'), p(
    'The browser turns HTML into a tree in memory called the Document Object Model, or DOM. Browser APIs are operations the browser provides for JavaScript. They can find and change elements or respond to a click.',
    'Browser က HTML ဖတ်ပြီး မှတ်ဉာဏ်ထဲမှာ Document Object Model (DOM) လို့ခေါ်တဲ့ သစ်ပင်ပုံစံ တည်ဆောက်ပါတယ်။ Browser API ဆိုတာ JavaScript သုံးဖို့ browser က ပေးထားတဲ့ လုပ်ဆောင်ချက်တွေပါ။ အဲဒါတွေနဲ့ element ရှာ၊ ပြင်၊ click ကို တုံ့ပြန်နိုင်ပါတယ်။',
  ), [
    browser('nodes', p('Find an element with querySelector', 'querySelector နဲ့ Element ရှာခြင်း'), p(
      'document represents the page. querySelector accepts a CSS selector and returns its first match or null when no match exists. textContent replaces the text of the element that was found.',
      'document က စာမျက်နှာကို ကိုယ်စားပြုပါတယ်။ querySelector ကို CSS selector ပေးရင် ပထမဆုံးကိုက်တဲ့ element ပြန်ရပါတယ်။ မတွေ့ရင် null ပါ။ textContent နဲ့ ရှာတွေ့တဲ့ element ရဲ့ စာသားကို ပြောင်းနိုင်ပါတယ်။',
    ), '  <p id="message">Preparing your order…</p>', '    const message = document.querySelector("#message");\n    message.textContent = "Your order is ready.";', p('The page shows the updated sentence “Your order is ready.”.', 'စာမျက်နှာမှာ ပြောင်းပြီးသား “Your order is ready.” ကို မြင်ရပါမယ်။'), p('If nothing changes and the Console mentions null, check that the selector matches the ID and that the script runs after the paragraph has been read.', 'စာသားမပြောင်းဘဲ Console မှာ null ပါတဲ့ error မြင်ရင် selector နဲ့ id ကိုက်လား၊ script က စာပိုဒ်ကို ဖတ်ပြီးမှ run လား စစ်ပါ။')),
    browser('create-list-items', p('Create a list item and append it', 'List Item ဖန်တီးပြီး ထည့်ခြင်း'), p(
      'createElement("li") builds an element in memory. Set its text, then call append on the parent to insert it into the page. Use textContent for a plain text value.',
      'createElement("li") က မှတ်ဉာဏ်ထဲမှာ element အသစ် ဆောက်ပါတယ်။ စာထည့်ပြီး parent မှာ append ခေါ်ရင် စာမျက်နှာထဲ ရောက်ပါတယ်။ ရိုးရိုးစာသား သတ်မှတ်ဖို့ textContent သုံးပါ။',
    ), '  <ul id="catalog"><li>Pen</li></ul>', '    const item = document.createElement("li");\n    item.textContent = "Notebook";\n    document.querySelector("#catalog").append(item);', p('The list shows Pen and then Notebook.', 'List မှာ Pen နဲ့ နောက်တစ်ကြောင်းမှာ Notebook ပေါ်ပါမယ်။')),
    browser('update-remove-items', p('Update and remove existing list items', 'ရှိပြီးသား List Item ကို ပြင်ခြင်း၊ ဖယ်ခြင်း'), p(
      'After selecting a list item, assign textContent to change its label. remove() detaches an element from its parent. The browser redraws the page using the updated tree.',
      'List item ကို ရွေးပြီး textContent နဲ့ စာသားပြောင်းနိုင်ပါတယ်။ remove() က element ကို parent ထဲက ဖယ်ပေးပါတယ်။ Browser က ပြောင်းပြီးသား tree နဲ့ စာမျက်နှာ ပြန်ပြပါမယ်။',
    ), '  <ul><li id="pen">Pen</li><li id="folder">Folder</li></ul>', '    document.querySelector("#pen").textContent = "Blue pen";\n    document.querySelector("#folder").remove();', p('Only Blue pen remains in the list.', 'List မှာ Blue pen တစ်ခုပဲ ကျန်ပါမယ်။')),
    browser('toggle-class', p('Toggle a class on an element', 'Element မှာ Class ထည့်လိုက်၊ ဖယ်လိုက် လုပ်ခြင်း'), p(
      'classList is the list of classes on an element. toggle() adds the class if it is missing and removes it if it is present. For operations based on an ID, confirm that the element exists and belongs to the list before changing it.',
      'classList က element မှာ ပါတဲ့ class စာရင်းပါ။ toggle() က class မရှိရင် ထည့်ပါတယ်။ ရှိပြီးသားဆို ပြန်ဖယ်ပါတယ်။ ID နဲ့ ရှာပြီး ပြောင်းမယ်ဆို element ရှိလား၊ သတ်မှတ်ထားတဲ့ list အတွင်းမှာ ပါလား အရင်စစ်ပါ။',
    ), '  <ul id="catalog"><li id="pen">Pen</li></ul>', '    const catalog = document.querySelector("#catalog");\n    const item = document.getElementById("pen");\n    if (item && item.matches("li") && catalog.contains(item)) {\n      item.classList.toggle("featured");\n    }', p('Inspect the Pen item to see class="featured". Try looking up a missing ID and confirm the page still loads without an error.', 'Pen item ကို Inspect လုပ်ပြီး class="featured" ရှိတာ ကြည့်ပါ။ မရှိတဲ့ ID နဲ့ စမ်းရင်လည်း page က error မတက်ဘဲ ဖွင့်ပါမယ်။')),
    browser('events', p('Listen for a button click', 'Click Event ကို စောင့်ခြင်း'), p(
      'An event is a notification from the browser that something happened. addEventListener takes the event name and a function to run when it occurs. That function is called an event listener.',
      'Event ဆိုတာ အဖြစ်အပျက်တစ်ခု ဖြစ်လာပြီလို့ browser က အကြောင်းကြားတာပါ။ addEventListener ကို event နာမည်နဲ့ အဲဒီအခါ run မယ့် function ပေးရပါတယ်။ အဲဒီ function ကို event listener လို့ ခေါ်ပါတယ်။',
    ), '  <button id="ready" type="button">Mark ready</button>\n  <p id="status">Waiting</p>', '    const button = document.querySelector("#ready");\n    const status = document.querySelector("#status");\n    button.addEventListener("click", () => {\n      status.textContent = "Your order is ready.";\n    });', p('The page starts with Waiting. Click the button and the message changes to “Your order is ready.”.', 'အစမှာ Waiting ပေါ်ပါတယ်။ ခလုတ်နှိပ်ရင် “Your order is ready.” ပြောင်းပါမယ်။')),
    browser('bubbling', p('Follow a click as it bubbles', 'Click Event Bubble ဖြစ်ပုံ'), p(
      'Many events, including click, bubble from the element where they start to ancestors. event.target is the element the event started on in this example. event.currentTarget is the element whose listener is currently running.',
      'click လို event တွေက ဖြစ်တဲ့ element ကနေ အပြင်ဘက် ancestor တွေဆီ ဆက်သွားပါတယ်။ ဒါကို bubbling လို့ခေါ်ပါတယ်။ ဒီနမူနာမှာ event.target က click စတဲ့ element၊ event.currentTarget က လက်ရှိ listener ချိတ်ထားတဲ့ element ပါ။',
    ), '  <div id="catalog"><button type="button" id="pen">Pen</button></div>\n  <p id="result"></p>', '    document.querySelector("#catalog").addEventListener("click", event => {\n      document.querySelector("#result").textContent =\n        event.target.id + " → " + event.currentTarget.id;\n    });', p('Click Pen. The page shows pen → catalog because the catalog listener received the button’s click.', 'Pen နှိပ်ရင် စာမျက်နှာမှာ pen → catalog ပေါ်ပါတယ်။ Button က click ကို catalog ရဲ့ listener က လက်ခံတာပါ။')),
    browser('delegation', p('Use one listener for a group of buttons', 'Button အစုအတွက် Listener တစ်ခု သုံးခြင်း'), p(
      'Event delegation means putting the listener on a shared parent. closest() looks for the nearest element matching the selector, starting with the click target. dataset reads data-* attributes. Ignore clicks that did not start within one of the intended buttons.',
      'Event delegation ဆိုတာ အစုရဲ့ parent မှာ listener တစ်ခုထားတာပါ။ closest() က click စတဲ့ element ကနေ စပြီး selector ကိုက်တဲ့ အနီးဆုံး element ရှာပါတယ်။ dataset နဲ့ data-* attribute ဖတ်ပါတယ်။ သတ်မှတ်ထားတဲ့ button ဆီက မဟုတ်တဲ့ click ကို ကျော်ပါ။',
    ), '  <div id="catalog">\n    <button type="button" data-product="Pen"><strong>Pen</strong></button>\n    <button type="button" data-product="Notebook">Notebook</button>\n  </div>\n  <p id="result"></p>', '    const catalog = document.querySelector("#catalog");\n    catalog.addEventListener("click", event => {\n      const button = event.target.closest("button[data-product]");\n      if (!button || !catalog.contains(button)) return;\n      document.querySelector("#result").textContent = button.dataset.product;\n    });', p('Click either button, including the bold text inside Pen. The result displays the product name.', 'Button နှစ်ခုထဲက တစ်ခုကို နှိပ်ပါ။ Pen ထဲက စာလုံးထူပေါ် နှိပ်လည်း ပစ္စည်းအမည် ပေါ်ပါမယ်။')),
    browser('forms', p('Read form values on submit', 'Form Submit မှာ Value ဖတ်ခြင်း'), p(
      'The form receives a submit event after the browser checks required controls. preventDefault() keeps the browser on this page. FormData can collect values by the name attribute.',
      'Browser က မဖြစ်မနေ ဖြည့်ရမယ့် အကွက်တွေ စစ်ပြီးနောက် form မှာ submit event ဖြစ်ပါတယ်။ preventDefault() ခေါ်လို့ ဒီစာမျက်နှာပေါ်မှာပဲ ဆက်ရှိပါတယ်။ FormData က name attribute အလိုက် တန်ဖိုးတွေ စုယူနိုင်ပါတယ်။',
    ), '  <form id="order">\n    <label for="product">Product</label>\n    <input id="product" name="product" required>\n    <button type="submit">Confirm</button>\n  </form>\n  <p id="result"></p>', '    const order = document.querySelector("#order");\n    order.addEventListener("submit", event => {\n      event.preventDefault();\n      const values = new FormData(order);\n      document.querySelector("#result").textContent = values.get("product");\n    });', p('Submit an empty field to see browser validation. Type Pen and submit again. Pen appears below the form.', 'အကွက်လွတ်နဲ့ submit စမ်းပြီး browser စစ်ပုံ ကြည့်ပါ။ Pen ရိုက်ပြီး ပြန်ပို့ရင် form အောက်မှာ Pen ပေါ်ပါမယ်။')),
  ], [['WHATWG · DOM Standard', 'https://dom.spec.whatwg.org/'], apiRef('Introduction to events', 'Document_Object_Model/Events'), apiRef('FormData', 'FormData')]),

  page('async', p('Asynchronous JavaScript, promises, and the event loop', 'Async JavaScript၊ Promise နဲ့ Event Loop'), p(
    'Some browser operations take time. Synchronous code runs its current instructions before moving on. Asynchronous operations let other work continue while a timer, network response, or another result is pending.',
    'Browser အလုပ်တချို့မှာ အချိန်ကြာနိုင်ပါတယ်။ Synchronous code က လက်ရှိ ညွှန်ကြားချက်တွေကို အစဉ်လိုက် လုပ်ပါတယ်။ Asynchronous operation က timer၊ network response ဒါမှမဟုတ် ရလဒ်တစ်ခုကို စောင့်နေချိန် တခြားအလုပ်တွေကို ဆက်လုပ်လို့ရစေပါတယ်။',
  ), [
    js('timer', p('What can run while a timer waits?', 'Timer စောင့်နေတုန်း ဘာက ဆက် Run လဲ။'), p(
      'setTimeout is a browser API. It registers a function to run after at least the delay you give it, in milliseconds. The function is a callback, which means you pass it to be called later. The timer does not pause the remaining synchronous instructions.',
      'setTimeout က browser API ပါ။ Millisecond နဲ့ သတ်မှတ်တဲ့ အချိန် အနည်းဆုံးကုန်ပြီးနောက် function တစ်ခု run လို့ရအောင် စာရင်းသွင်းပေးပါတယ်။ နောက်မှ ခေါ်ဖို့ ပေးထားတဲ့ function ကို callback လို့ ခေါ်ပါတယ်။ Timer စောင့်နေချိန် ကျန်တဲ့ synchronous ညွှန်ကြားချက်တွေ ဆက် run ပါတယ်။',
    ), 'console.log("Start");\nsetTimeout(() => console.log("Timer"), 100);\nconsole.log("End");', p('Start and End appear first. Timer appears later.', 'Start နဲ့ End အရင်ပေါ်ပြီး Timer က နောက်မှ ပေါ်ပါမယ်။')),
    js('promises', p('What does a Promise represent?', 'Promise က ဘာကို ကိုယ်စားပြုလဲ။'), p(
      'A Promise represents the eventual outcome of an operation. Pending means the result is still unknown. Fulfilled means the operation supplied a value. Rejected means it ended with a reason for failure. Use then() to register a handler for success and catch() to handle rejection.',
      'Promise က အလုပ်တစ်ခုရဲ့ နောက်ဆုံးရလဒ်ကို ကိုယ်စားပြုပါတယ်။ Pending က ရလဒ် မရသေးတာ၊ fulfilled က တန်ဖိုး ရလာတာ၊ rejected က မအောင်မြင်တဲ့ အကြောင်းရင်း ရလာတာပါ။ အောင်မြင်ရင် run မယ့် function ကို then() နဲ့၊ မအောင်မြင်ရင် run မယ့် function ကို catch() နဲ့ ထည့်နိုင်ပါတယ်။',
    ), 'const result = new Promise(resolve => {\n  setTimeout(() => resolve("Your order is ready."), 100);\n});\nresult.then(message => console.log(message)).catch(error => console.error(error));\nconsole.log("Waiting");', p('Waiting appears first. When the promise fulfills, its handler prints “Your order is ready.”.', 'Waiting အရင်ပေါ်ပါတယ်။ Promise က ရလဒ်ရလာတဲ့အခါ handler က “Your order is ready.” ထုတ်ပါမယ်။')),
    js('chain', p('Return a transformed result from then()', 'then() ကနေ ပြောင်းပြီးသား ရလဒ် ပြန်ပေးခြင်း'), p(
      'then() returns a new promise. If its handler returns a value, that value becomes the fulfillment value of the new promise. A second handler can read the transformed result.',
      'then() က promise အသစ် ပြန်ပေးပါတယ်။ Handler က တန်ဖိုးတစ်ခု return ပြန်ရင် အသစ်ရတဲ့ promise ရဲ့ အောင်မြင်ရလဒ် ဖြစ်လာပါတယ်။ ဒုတိယ handler က ပြောင်းပြီးသား ရလဒ်ကို ဖတ်နိုင်ပါတယ်။',
    ), 'const product = Promise.resolve("Pen");\nconst message = product.then(value => "Ready: " + value);\nmessage.then(value => console.log(value));', p('The second handler prints “Ready: Pen”.', 'ဒုတိယ handler က “Ready: Pen” လို့ ထုတ်ပါမယ်။')),
    js('await', p('Read a promise result with async and await', 'async နဲ့ await သုံးပြီး Promise ရလဒ် ဖတ်ခြင်း'), p(
      'An async function always returns a promise. await waits for its input within that function. Other code outside the function can continue running. If the awaited promise rejects, try/catch can handle the failure.',
      'async function က promise တစ်ခု အမြဲ ပြန်ပေးပါတယ်။ await က အဲဒီ function အတွင်းမှာပဲ ရလဒ်ကို စောင့်ပါတယ်။ Function အပြင်က code က ဆက် run နိုင်ပါတယ်။ စောင့်ထားတဲ့ promise က reject ဖြစ်ရင် try/catch နဲ့ ကိုင်တွယ်နိုင်ပါတယ်။',
    ), 'async function readOrder() {\n  try {\n    const product = await Promise.resolve("Pen");\n    console.log(product);\n  } catch (error) {\n    console.error(error);\n  }\n}\nreadOrder();\nconsole.log("Order requested");', p('Order requested prints before Pen, even though the awaited promise is already fulfilled.', 'စောင့်မယ့် promise က ရလဒ်ရှိပြီးသားဖြစ်ပေမယ့် Order requested က Pen မတိုင်ခင် ပေါ်ပါမယ်။')),
    js('loop', p('How does the browser schedule callbacks?', 'Browser က Callback တွေကို ဘယ်အစဉ်နဲ့ Run လဲ။'), p(
      'The event loop coordinates work waiting to run. A ready timer callback runs in a task. A promise reaction is a microtask. After the current synchronous work finishes, the browser processes microtasks before choosing the next task.',
      'Event loop က run ဖို့ စောင့်နေတဲ့ အလုပ်တွေကို စီပေးပါတယ်။ Timer callback အဆင်သင့် ဖြစ်လာရင် task အနေနဲ့ run ပါတယ်။ Promise ရလဒ်ကို တုံ့ပြန်တဲ့ အလုပ်က microtask ပါ။ လက်ရှိ synchronous အလုပ်ပြီးရင် နောက် task မရွေးခင် microtask တွေကို အရင်လုပ်ပါတယ်။',
    ), 'console.log("A");\nsetTimeout(() => console.log("Timer task"), 0);\nPromise.resolve().then(() => console.log("Promise microtask"));\nconsole.log("B");', p('The order is A, B, Promise microtask, then Timer task.', 'A၊ B၊ Promise microtask၊ Timer task ဆိုပြီး အစဉ်လိုက် ပေါ်ပါမယ်။')),
  ], [['WHATWG · Event loops', htmlSpec + 'webappapis.html#event-loops'], jsRef('Using promises', 'Guide/Using_promises'), jsRef('async function', 'Reference/Statements/async_function')]),

  page('http', p('HTTP requests and Fetch', 'HTTP Request နဲ့ Fetch'), p(
    'HTTP is a set of rules for exchanging requests and responses. A request names a destination and a method. A response includes a status code and may include a body. An API is an agreed way for a program to ask a service for data or an action.',
    'HTTP ဆိုတာ request နဲ့ response အပြန်အလှန် ပို့ဖို့ စည်းမျဉ်းအစုပါ။ Request မှာ လိပ်စာနဲ့ method ရေးပါတယ်။ Response မှာ အခြေအနေဖော်ပြတဲ့ status code ပါပြီး data တင်ပို့တဲ့ body လည်း ပါနိုင်ပါတယ်။ API က program တစ်ခုက service ဆီ data သို့မဟုတ် လုပ်ဆောင်ချက် တောင်းဖို့ သတ်မှတ်ထားတဲ့ နည်းလမ်းပါ။',
  ), [
    example('json', p('What is JSON?', 'JSON ဆိုတာဘာလဲ။'), p(
      'JSON is a text format for exchanging data. A JSON object uses double quotes around property names and string values. JSON.parse reads JSON text into a JavaScript value, while JSON.stringify writes a value as JSON text.',
      'JSON ဆိုတာ data ဖလှယ်ဖို့ သုံးတဲ့ စာသားပုံစံတစ်ခုပါ။ JSON object ရဲ့ property နာမည်နဲ့ string တန်ဖိုးတွေကို double quotes နဲ့ ရေးပါတယ်။ JSON.parse က JSON စာသားကို JavaScript တန်ဖိုးအဖြစ် ဖတ်ပြီး JSON.stringify က တန်ဖိုးကို JSON စာသားအဖြစ် ထုတ်ပေးပါတယ်။',
    ), '{ "name": "Pen", "price": 2500 }', p('You now have a small JSON file for the GET example.', 'GET နမူနာမှာ သုံးမယ့် JSON ဖိုင်ရပါပြီ။'), p('Create a folder for these examples and save the code as product.json.', 'ဒီနမူနာတွေအတွက် folder အသစ်လုပ်ပြီး code ကို product.json နဲ့ သိမ်းပါ။')),
    example('fetch', p('Read data with a GET request', 'GET Request နဲ့ Data ဖတ်ခြင်း'), p(
      'GET asks for a resource without making a change to it. fetch() returns a promise for a Response. Status codes in the 200–299 range give response.ok === true. A server response such as 404 can still fulfill the fetch promise, so check ok before reading the body. response.json() returns a promise for the parsed data.',
      'GET က အချက်အလက်တစ်ခုကို တောင်းဖတ်တဲ့ method ပါ။ fetch() က Response ရမယ့် promise ပြန်ပေးပါတယ်။ Status code 200 ကနေ 299 ထိဆို response.ok က true ပါ။ Server က 404 ပြန်ရင်လည်း fetch promise မှာ Response ရနိုင်သေးလို့ body မဖတ်ခင် ok စစ်ပါ။ response.json() က body ကို JSON အဖြစ် ဖတ်ပြီး ရလဒ် promise ပြန်ပေးပါတယ်။',
    ), demoPage('GET demo', '  <p id="result">Loading…</p>', '', '    async function loadProduct() {\n      const result = document.querySelector("#result");\n      try {\n        const response = await fetch("./product.json");\n        if (!response.ok) throw new Error("HTTP " + response.status);\n        const product = await response.json();\n        result.textContent = product.name + ": " + product.price;\n      } catch (error) {\n        result.textContent = "Could not load the product: " + error.message;\n      }\n    }\n    loadProduct();'), p('The page shows Pen: 2500. Change product.json to missing.json in the request, reload, and look for HTTP 404 in the message.', 'စာမျက်နှာမှာ Pen: 2500 ပေါ်ပါမယ်။ Request ထဲက product.json ကို missing.json လို့ ပြောင်းပြီး reload လုပ်ရင် message မှာ HTTP 404 ပါတာ ကြည့်ပါ။'), p(
      'Save as index.html beside product.json. Serve both using VS Code Live Server or run python -m http.server 8000 in that folder and open http://localhost:8000.',
      'product.json ဘေးမှာ index.html နဲ့ သိမ်းပါ။ VS Code Live Server သုံးပါ။ ဒါမှမဟုတ် အဲဒီ folder ထဲ python -m http.server 8000 run ပြီး http://localhost:8000 ဖွင့်ပါ။',
    ), p('If the address starts with file:, use the local server URL. If you see 404, check the filename and the folder the server is serving.', 'လိပ်စာက file: နဲ့ စရင် local server URL နဲ့ ဖွင့်ပါ။ 404 ဆိုရင် ဖိုင်နာမည်နဲ့ server ဖွင့်ထားတဲ့ folder ကို စစ်ပါ။')),
    example('post', p('Send JSON with a POST request', 'POST Request နဲ့ JSON ပို့ခြင်း'), p(
      'POST submits data for the server to process. Here method selects POST, the Content-Type header describes the body format, and JSON.stringify produces that text. This demo API returns a simulated creation response.',
      'POST က server ကို အလုပ်လုပ်ဖို့ data ပို့တဲ့ method ပါ။ ဒီမှာ method ကို POST သတ်မှတ်ထားပါတယ်။ Content-Type header က body ပုံစံ ပြောပြီး JSON.stringify က data ကို အဲဒီစာသားပုံစံ ပြောင်းပေးပါတယ်။ ဒီနမူနာ API က ဖန်တီးပြီးသလို စမ်းသပ်ရလဒ် ပြန်ပေးပါတယ်။',
    ), demoPage('POST demo', '  <button id="submit" type="button">Send example post</button>\n  <p id="result" role="status"></p>', '', '    const button = document.querySelector("#submit");\n    const result = document.querySelector("#result");\n    button.addEventListener("click", async () => {\n      result.textContent = "Sending…";\n      try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify({ title: "Pen", body: "A sample product post", userId: 1 }),\n        });\n        if (!response.ok) throw new Error("HTTP " + response.status);\n        const data = await response.json();\n        result.textContent = "Received: " + data.title + " (ID " + data.id + ")";\n      } catch (error) {\n        result.textContent = "Could not send: " + error.message;\n      }\n    });'), p('The demo API replies with the title and a simulated new ID. The page shows “Received: Pen (ID 101)” if the service responds as documented.', 'Demo API က title နဲ့ စမ်းသပ် ID အသစ် ပြန်ပေးပါတယ်။ Service က သတ်မှတ်ထားတဲ့အတိုင်း ပြန်ရင် “Received: Pen (ID 101)” ပေါ်ပါမယ်။'), p(
      'Save as post.html in the GET example folder. Open it through the same local server while connected to the internet, and click Send example post.',
      'GET နမူနာ folder ထဲ post.html နဲ့ သိမ်းပါ။ Internet ချိတ်ထားပြီး အရင် local server ကနေ ဖွင့်ပါ။ Send example post ခလုတ် နှိပ်ပါ။',
    )),
  ], [['WHATWG · Fetch Standard', 'https://fetch.spec.whatwg.org/'], apiRef('Using Fetch', 'Fetch_API/Using_Fetch'), ['JSONPlaceholder · API guide', 'https://jsonplaceholder.typicode.com/guide/']]),

  page('storage-and-errors', p('Browser storage and error handling', 'Browser Storage နဲ့ Error ကိုင်တွယ်ခြင်း'), p(
    'The browser can keep small values for a page to use again. Loading or converting those values can fail. Learn to read storage and give a useful message when an operation fails.',
    'Browser က နောက်တစ်ခါ ပြန်သုံးဖို့ တန်ဖိုးအနည်းငယ် သိမ်းနိုင်ပါတယ်။ ပြန်ဖတ်တာ၊ ပုံစံပြောင်းတာမှာ အမှားဖြစ်နိုင်ပါတယ်။ Storage ဖတ်ပုံနဲ့ အလုပ်မအောင်မြင်ရင် ပြောပြပုံကို လေ့လာပါ။',
  ), [
    example('storage', p('Save and read a value with localStorage', 'localStorage နဲ့ Value သိမ်းခြင်း၊ ပြန်ဖတ်ခြင်း'), p(
      'localStorage stores strings by key for the current origin, which is the combination of protocol, host, and port. getItem returns null for a missing key. Convert an object with JSON.stringify before saving and JSON.parse after reading. Use sessionStorage when the data is scoped to one browser tab and should end with its session.',
      'localStorage က လက်ရှိ origin (protocol၊ host နဲ့ port အတွဲ) အတွက် key နဲ့ စာသား သိမ်းပါတယ်။ Key မရှိရင် getItem က null ပြန်ပေးပါတယ်။ Object သိမ်းခင် JSON.stringify၊ ပြန်ဖတ်တဲ့အခါ JSON.parse သုံးပါ။ Tab တစ်ခုရဲ့ session အတွင်းပဲ သိမ်းချင်ရင် sessionStorage ကို သုံးနိုင်ပါတယ်။',
    ), 'localStorage.setItem("docs-product-example", JSON.stringify({ product: "Pen" }));\nconst saved = localStorage.getItem("docs-product-example");\nconsole.log(saved === null ? "No saved product" : JSON.parse(saved).product);', p('It prints Pen. Reload the same HTTP(S) page and run localStorage.getItem("docs-product-example") to see it persist. Use removeItem with the same key to remove it.', 'Pen လို့ ပေါ်ပါမယ်။ HTTP(S) page တစ်ခုတည်းကို reload လုပ်ပြီး localStorage.getItem("docs-product-example") ခေါ်ကြည့်ပါ။ တန်ဖိုးကျန်နေပါမယ်။ ပြန်ဖျက်ချင်ရင် အဲဒီ key နဲ့ removeItem ခေါ်ပါ။'), p('Open a normal HTTP(S) page you own, such as the local server example. Open Developer Tools → Console and run the code for that page. Browser privacy settings may disable storage in some contexts.', 'Local server နမူနာလို ကိုယ်ပိုင် HTTP(S) page တစ်ခု ဖွင့်ပါ။ Developer Tools → Console ထဲမှာ ဒီ code ကို run ပါ။ Browser privacy setting ကြောင့် တချို့နေရာမှာ storage ပိတ်ထားနိုင်ပါတယ်။')),
    js('errors', p('Respond when an operation throws', 'အလုပ်တစ်ခု Error ပစ်တဲ့အခါ ကိုင်တွယ်ခြင်း'), p(
      'An exception interrupts the current operation. Code inside try runs first. If it throws, the catch block receives the error. Handle failures where you can show a useful message or choose a safe default.',
      'Exception ဖြစ်ရင် လက်ရှိ အလုပ် ပြတ်သွားပါတယ်။ try ထဲက code ကို အရင် run ပါတယ်။ Error ပစ်ရင် catch block က error ကို ရပါတယ်။ အသုံးဝင်တဲ့ message ပြနိုင်တဲ့ ဒါမှမဟုတ် သုံးလို့ရတဲ့ default တန်ဖိုး ရွေးနိုင်တဲ့နေရာမှာ အမှားကို ကိုင်ပါ။',
    ), 'try {\n  const saved = JSON.parse("{broken}");\n  console.log(saved);\n} catch (error) {\n  console.log("Could not read saved data:", error.name);\n}', p('The example prints “Could not read saved data: SyntaxError”. Replace {broken} with valid JSON to make the try block finish.', '“Could not read saved data: SyntaxError” ပေါ်ပါမယ်။ {broken} အစား မှန်တဲ့ JSON ထည့်ရင် try ထဲက code အဆုံးထိ run ပါမယ်။')),
  ], [apiRef('Web Storage API', 'Web_Storage_API'), jsRef('try...catch', 'Reference/Statements/try...catch')]),

  page('iterators-and-generators', p('Iterators and generators', 'Iterator နဲ့ Generator'), p(
    'An iterator reads a sequence one item at a time. A generator is a way to produce an iterator by writing a function that can pause and later continue.',
    'Iterator က အစဉ်လိုက် တန်ဖိုးတွေကို တစ်ခုစီ ဖတ်ပေးပါတယ်။ Generator က ခဏရပ်ပြီး ပြန်ဆက်လို့ရတဲ့ function နဲ့ iterator တစ်ခု ထုတ်ပေးတဲ့ နည်းလမ်းပါ။',
  ), [
    js('protocol', p('Read one value with next()', 'next() နဲ့ တန်ဖိုးတစ်ခုစီ ဖတ်ခြင်း'), p(
      'An iterable is a value that offers an iterator through Symbol.iterator. Arrays are iterable. The iterator’s next() returns an object with value and done. for...of uses the same protocol to read values automatically.',
      'Symbol.iterator နဲ့ iterator ထုတ်ပေးနိုင်တဲ့ တန်ဖိုးကို iterable လို့ ခေါ်ပါတယ်။ Array က iterable ဖြစ်ပါတယ်။ Iterator ရဲ့ next() က value နဲ့ done ပါတဲ့ object တစ်ခု ပြန်ပေးပါတယ်။ for...of ကလည်း ဒီစည်းမျဉ်းအတိုင်း တန်ဖိုးတွေကို အလိုအလျောက် ဖတ်ပါတယ်။',
    ), 'const iterator = ["Pen", "Notebook"][Symbol.iterator]();\nconsole.log(iterator.next());\nconsole.log(iterator.next());\nconsole.log(iterator.next().done);', p('The first results contain Pen and Notebook with done: false. The third result prints true.', 'ပထမနှစ်ခုမှာ Pen နဲ့ Notebook ကို done: false နဲ့အတူ ရပါတယ်။ တတိယရလဒ်က true ပါ။')),
    js('generate', p('Pause and resume a function with yield', 'yield နဲ့ Function ခဏရပ်ပြီး ပြန်ဆက်ခြင်း'), p(
      'A function declared with function* creates a generator when called. It starts running when next() is called and pauses at yield. Another next() call resumes it. A new generator starts the sequence again.',
      'function* နဲ့ ရေးတဲ့ function ခေါ်ရင် generator အသစ် ရပါတယ်။ next() ပထမဆုံး ခေါ်မှ run ပြီး yield ရောက်ရင် ခဏရပ်ပါတယ်။ နောက် next() ခေါ်ရင် ပြန်ဆက်ပါတယ်။ အစက ပြန်စချင်ရင် generator အသစ် လုပ်ပါ။',
    ), 'function* orderNumbers(first, last) {\n  for (let number = first; number <= last; number += 1) {\n    yield number;\n  }\n}\nfor (const number of orderNumbers(101, 102)) {\n  console.log(number);\n}', p('The Console prints 101, then 102, and stops. Pass a first value greater than the last and the loop yields nothing.', 'Console မှာ 101 ပြီးရင် 102 ပေါ်ပြီး ရပ်ပါမယ်။ အစတန်ဖိုးကို အဆုံးထက် ကြီးအောင်ပေးရင် loop က ဘာမှ yield မလုပ်ပါဘူး။')),
  ], [jsRef('Iteration protocols', 'Reference/Iteration_protocols'), jsRef('Iterators and generators', 'Guide/Iterators_and_generators')]),

  page('regular-expressions', p('Regular expressions', 'Regular Expression နဲ့ စာသား ရှာခြင်း'), p(
    'A regular expression is a pattern for testing or finding text. Use it when you need to match several strings with the same shape, such as an order code.',
    'Regular expression ဆိုတာ စာသား စစ်ဖို့ သို့မဟုတ် ရှာဖို့ ရေးထားတဲ့ ပုံစံတစ်ခုပါ။ Order code လို တည်ဆောက်ပုံတူတဲ့ စာသားများစွာကို စစ်တဲ့အခါ သုံးနိုင်ပါတယ်။',
  ), [
    js('check', p('Check the whole string with test()', 'test() နဲ့ စာသားတစ်ခုလုံး စစ်ခြင်း'), p(
      'In a literal, slashes surround the pattern. ^ and $ anchor the pattern to the start and end here. [A-Z] matches one uppercase English letter and {2} asks for two. [0-9]{3} asks for three digits.',
      'Pattern ကို / နှစ်ခုကြားမှာ ရေးနိုင်ပါတယ်။ ဒီမှာ ^ နဲ့ $ က အစနဲ့ အဆုံးကို သတ်မှတ်ပါတယ်။ [A-Z] က English စာလုံးအကြီး တစ်လုံးကို ကိုက်ပြီး {2} က နှစ်လုံး လိုတယ်လို့ ဆိုလိုပါတယ်။ [0-9]{3} က ဂဏန်းသုံးလုံး တောင်းပါတယ်။',
    ), 'const orderCode = /^[A-Z]{2}-[0-9]{3}$/;\nconsole.log(orderCode.test("TE-104"));\nconsole.log(orderCode.test("TE-10"));', p('The checks print true and false. The second code is missing a digit.', 'true နဲ့ false ပေါ်ပါမယ်။ ဒုတိယ code မှာ ဂဏန်းတစ်လုံး လိုနေပါတယ်။')),
    js('find', p('Find multiple matches and capture groups', 'ကိုက်တဲ့ စာသားတွေနဲ့ Capture Group တွေ ထုတ်ယူခြင်း'), p(
      'Use matchAll() with the g flag to visit each match. Parentheses capture a part of a match. The match array contains the full match first, followed by the captured parts. For independent test() calls, omit g and y because they can advance lastIndex on a reused expression.',
      'ကိုက်တဲ့အပိုင်း အားလုံး ဖတ်ဖို့ g flag နဲ့ matchAll() သုံးပါ။ ( ) က ကိုက်တဲ့အပိုင်း တစ်စိတ်တစ်ပိုင်းကို ဖမ်းပါတယ်။ Match array မှာ ကိုက်တဲ့ စာသားအပြည့် အရင်ပါပြီး ဖမ်းထားတဲ့ အပိုင်းတွေ နောက်က လိုက်ပါတယ်။ တစ်ခါစီ သီးသန့် test() စစ်မယ်ဆိုရင် ပြန်သုံးတဲ့ expression ရဲ့ lastIndex ကို ရွှေ့နိုင်တဲ့ g နဲ့ y ကို မထည့်ပါနဲ့။',
    ), 'const line = "pen:3, notebook:2";\nfor (const match of line.matchAll(/([a-z]+):([0-9]+)/g)) {\n  console.log(match[1], Number(match[2]));\n}', p('The first line prints pen and 3. The second prints notebook and 2.', 'ပထမကြောင်းမှာ pen နဲ့ 3၊ ဒုတိယကြောင်းမှာ notebook နဲ့ 2 ပေါ်ပါမယ်။')),
  ], [jsRef('Regular expressions', 'Guide/Regular_expressions'), jsRef('String.matchAll', 'Reference/Global_Objects/String/matchAll')]),

  page('web-workers', p('Web Workers', 'Web Worker နဲ့ နောက်ကွယ်မှာ အလုပ်လုပ်ခြင်း'), p(
    'A browser uses a main thread to run the page’s JavaScript and respond to the user. A Web Worker can do computation separately. The page and worker exchange messages because the worker cannot directly change the page’s DOM.',
    'Browser က page JavaScript run ဖို့နဲ့ user ကို တုံ့ပြန်ဖို့ main thread သုံးပါတယ်။ Web Worker နဲ့ တွက်ချက်မှုကို သီးသန့် လုပ်နိုင်ပါတယ်။ Worker က page DOM ကို တိုက်ရိုက် မပြင်နိုင်တာကြောင့် page နဲ့ worker ကြား message အပြန်အလှန် ပို့ပါတယ်။',
  ), [
    example('page', p('Prepare the page that shows the result', 'ရလဒ် ပြမယ့် Page ပြင်ခြင်း'), p(
      'The page has a paragraph for the result and a script loaded as a module. role="status" identifies an area that can announce changes to assistive technology.',
      'Page မှာ ရလဒ်ပြမယ့် စာပိုဒ်နဲ့ module အဖြစ် ချိတ်ထားတဲ့ script ပါပါတယ်။ role="status" က အဲဒီနေရာ ပြောင်းလဲရင် assistive technology က အသိပေးနိုင်တဲ့ နေရာအဖြစ် သတ်မှတ်တာပါ။',
    ), demoPage('Worker demo', '  <p id="total" role="status">Adding values…</p>\n  <script type="module" src="./main.js"></script>'), p('After the next two files are ready, the page can show the worker’s result.', 'နောက်ဖိုင်နှစ်ဖိုင် ပြင်ပြီးရင် page က worker ရဲ့ ရလဒ်ကို ပြနိုင်ပါမယ်။'), p('Create a new folder and save the code as index.html.', 'Folder အသစ်လုပ်ပြီး code ကို index.html နဲ့ သိမ်းပါ။')),
    example('start-worker', p('Start the worker and send it values', 'Worker စတင်ပြီး တန်ဖိုး ပို့ခြင်း'), p(
      'new Worker starts another script. new URL resolves the file next to this module. postMessage sends supported data to that script. onmessage receives the reply and updates the DOM from the page. Since this is a one-time calculation, terminate() stops the worker after a reply or an error.',
      'new Worker နဲ့ script သီးသန့် စပါတယ်။ new URL က ဒီ module နဲ့ folder တူတဲ့ ဖိုင်ကို ရှာပေးပါတယ်။ postMessage က ဒီ script ဆီ data ပို့ပါတယ်။ onmessage နဲ့ ပြန်လာတဲ့ အဖြေကို ယူပြီး page ဘက်က DOM ပြောင်းပါတယ်။ တစ်ခါပဲ တွက်မှာဖြစ်လို့ အဖြေရရင် ဒါမှမဟုတ် error တက်ရင် terminate() နဲ့ worker ရပ်ပါတယ်။',
    ), 'const worker = new Worker(new URL("./total-worker.js", import.meta.url), { type: "module" });\nconst output = document.querySelector("#total");\nworker.onmessage = event => {\n  output.textContent = "Total: " + event.data;\n  worker.terminate();\n};\nworker.onerror = () => {\n  output.textContent = "Could not calculate the total.";\n  worker.terminate();\n};\nworker.postMessage([12, 18, 24]);', p('This script sends three numbers to the worker. The last step supplies that worker.', 'ဒီ script က worker ဆီ ဂဏန်းသုံးခု ပို့ပါတယ်။ နောက်ဆုံးအဆင့်မှာ worker ဖိုင်ကို ထည့်ပါမယ်။'), p('Save as main.js beside index.html.', 'index.html ဘေးမှာ main.js နဲ့ သိမ်းပါ။')),
    example('receive', p('Calculate and reply in the worker', 'Worker ထဲမှာ တွက်ပြီး အဖြေပြန်ပို့ခြင်း'), p(
      'The worker has its own global object, called self here. Its onmessage reads the copied values in event.data. The worker computes the total and posts a message back to the main page.',
      'Worker မှာ ကိုယ်ပိုင် global object ရှိပြီး ဒီမှာ self လို့ သုံးထားပါတယ်။ Worker ရဲ့ onmessage က event.data ထဲက ကူးပို့ထားတဲ့ တန်ဖိုးတွေကို ဖတ်ပါတယ်။ စုစုပေါင်းတွက်ပြီး main page ဆီ message ပြန်ပို့ပါတယ်။',
    ), 'self.onmessage = event => {\n  const total = event.data.reduce((sum, value) => sum + value, 0);\n  self.postMessage(total);\n};', p('The page changes to Total: 54. Change the list in main.js and reload to see the new total.', 'Page မှာ Total: 54 လို့ ပြောင်းပါမယ်။ main.js ထဲက စာရင်းကို ပြောင်းပြီး reload လုပ်ရင် စုစုပေါင်းအသစ် ပေါ်ပါမယ်။'), p(
      'Save as total-worker.js beside the other two files. Serve this folder with Live Server or python -m http.server 8000 and open http://localhost:8000.',
      'တခြားဖိုင်နှစ်ခုနဲ့ folder တူတဲ့ total-worker.js နဲ့ သိမ်းပါ။ ဒီ folder ကို Live Server နဲ့ ဖွင့်ပါ။ ဒါမှမဟုတ် python -m http.server 8000 run ပြီး http://localhost:8000 ဖွင့်ပါ။',
    )),
  ], [apiRef('Using Web Workers', 'Web_Workers_API/Using_web_workers'), apiRef('Structured clone algorithm', 'Web_Workers_API/Structured_clone_algorithm')]),
]);
