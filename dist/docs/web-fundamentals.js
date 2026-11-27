import { guide, p } from './content.js';
import { dnsLesson } from './web-dns.js?v=90';
import { serverBasics, webAppArchitecture } from './web-architecture.js?v=96';

export const webFundamentals = guide('web-fundamentals', 'Web Fundamentals', '',
  p(
    'Follow a website from its domain name to the first page. Learn what the browser asks for, what a server does, and how the parts of a web app work together.',
    'Website လိပ်စာကို ရိုက်လိုက်တဲ့အချိန်ကနေ စာမျက်နှာ ပေါ်လာတဲ့အထိ Browser က ဘာတောင်းလဲ၊ Server က ဘာလုပ်ပေးလဲ၊ Web App အစိတ်အပိုင်းတွေ ဘယ်လို ချိတ်ဆက်အလုပ်လုပ်လဲဆိုတာ လေ့လာပါ။'
  ), [serverBasics, dnsLesson, webAppArchitecture]);
