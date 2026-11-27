import { guide, p, page, snippet } from './content.js';

const source = (label, path) => ['GitHub Docs · ' + label, 'https://docs.github.com/en/' + path];
const terminal = (id, title, text, code) => ({ ...snippet(id, title, text, code), codeLanguage: 'shell' });

export const githubGuide = guide('github', 'GitHub', '', p(
  'Host a Git repository, share branches, and review changes with a team.',
  'Git repository ကို online မှာ ထားပါ။ Branch တွေ မျှဝေပြီး ပြင်ဆင်ချက်တွေကို အဖွဲ့နဲ့ စစ်ဆေးပါ။'
), [
  page('introduction', p('Introduction to GitHub', 'GitHub မိတ်ဆက်'), p(
    'GitHub hosts Git repositories and provides tools for discussing issues and reviewing changes. You can use it to share the project-notes repository from the Git lessons.',
    'GitHub က Git repository တွေကို online မှာ သိမ်းပေးပါတယ်။ ပြင်ဆင်စရာတွေ ဆွေးနွေးဖို့ Issues နဲ့ ပြင်ထားတဲ့ code စစ်ဖို့ Pull Requests လို tools တွေလည်း ပါပါတယ်။ Git သင်ခန်းစာက project-notes ကို ဒီမှာ ဆက်သုံးပါမယ်။'
  ), [
    snippet('repositories', p('Know what lives on GitHub', 'GitHub Repository ထဲမှာ ဘာတွေ ရှိလဲ?'), p(
      'The Code tab shows the repository files and lets you switch between branches. A README at the root explains what the project does and how to start. Issues track tasks and bugs. Pull Requests show proposed changes and reviews.',
      'Code tab မှာ repository ဖိုင်တွေ ကြည့်ပြီး branch ပြောင်းလို့ရပါတယ်။ Project ရဲ့ root ထဲက README မှာ ဒီ Project က ဘာလုပ်လဲ၊ ဘယ်လိုစသုံးရမလဲဆိုတာ ရေးနိုင်ပါတယ်။ Issues မှာ လုပ်စရာနဲ့ bug တွေ မှတ်ထားပြီး Pull Requests မှာ တင်ပြထားတဲ့ changes နဲ့ review တွေ ကြည့်နိုင်ပါတယ်။'
    ), `Code           Files, branches, and commit history
Issues         Tasks, bug reports, and discussions
Pull requests  Proposed changes and reviews`),
    snippet('create', p('Create an empty GitHub repository', 'GitHub Repository အလွတ် ဆောက်ခြင်း'), p(
      'Sign in to GitHub and open New repository. Choose an owner and name it project-notes. Public repositories can be viewed by anyone. Private repositories are limited to authorized users. Since your local project already has commits, skip adding a README, license, and .gitignore on GitHub. You will connect the two repositories in the next lesson.',
      'GitHub ကို sign in ဝင်ပြီး New repository ကို ဖွင့်ပါ။ Owner ရွေးပြီး project-notes လို့ နာမည်ပေးပါ။ Public ဆို လူတိုင်း ကြည့်နိုင်ပြီး Private ဆို access ရထားတဲ့သူတွေပဲ ကြည့်နိုင်ပါတယ်။ Local project မှာ commit ရှိပြီးသားဖြစ်လို့ GitHub ကနေ README၊ license နဲ့ .gitignore မဆောက်ဘဲ ဆက်သွားပါ။ နောက်သင်ခန်းစာမှာ repository နှစ်ခုကို ချိတ်ပါမယ်။'
    ), `Repository name: project-notes
Visibility: Private
Initialize README, .gitignore, and license: Skip`),
  ], [source('What is GitHub?', 'get-started/start-your-journey/what-is-github'), source('Create a new repository', 'repositories/creating-and-managing-repositories/creating-a-new-repository')]),

  page('push-a-repository', p('Connecting and Pushing a Local Repository', 'Local Repository ချိတ်ပြီး GitHub ပေါ် Push လုပ်ခြင်း'), p(
    'Use the empty repository you just created on GitHub. Start in your local project-notes directory with main checked out and at least one commit.',
    'GitHub မှာ ခုနကဆောက်ထားတဲ့ repository အလွတ်ကို သုံးပါ။ ကိုယ့်စက်က project-notes folder ထဲမှာ main branch ပေါ် ရှိပြီး အနည်းဆုံး commit တစ်ခု သိမ်းထားတဲ့ အခြေအနေကနေ စပါ။'
  ), [
    terminal('remote', p('Connect the remote URL', 'Remote URL ချိတ်ခြင်း'), p(
      'Copy the repository’s HTTPS URL from GitHub. Replace OWNER with your actual account or organization name. Run git remote -v first. If origin already exists, check where it points. Use git remote set-url origin followed by the new URL only if origin should point to this repository.',
      'GitHub ကနေ repository ရဲ့ HTTPS URL ကို ကူးပါ။ OWNER နေရာမှာ ကိုယ့် account ဒါမှမဟုတ် organization နာမည် ထည့်ပါ။ git remote -v နဲ့ အရင် စစ်ပါ။ origin ရှိပြီးသားဆို ဘယ် repository ကို ညွှန်းထားလဲ ကြည့်ပါ။ ဒီ repository ကိုပဲ ညွှန်းစေချင်မှ git remote set-url origin နောက်မှာ URL အသစ် ထည့်ပြီး ပြောင်းပါ။'
    ), `git remote -v
git remote add origin https://github.com/OWNER/project-notes.git
git remote -v`),
    terminal('authenticate', p('Authenticate and push main', 'Authenticate လုပ်ပြီး main ကို Push တင်ခြင်း'), p(
      'Push your local main and configure it to track origin/main. For HTTPS, Git Credential Manager can open a browser sign-in. A personal access token can be used in place of a password when appropriate. If you use the SSH URL, add your public SSH key to GitHub and keep the private key on your own machine. After pushing, refresh the repository’s Code tab to see the committed files.',
      'Local main ကို push လုပ်ပြီး origin/main နဲ့ ချိတ်မှတ်ထားပါ။ HTTPS သုံးရင် Git Credential Manager က Browser မှာ sign in လုပ်ဖို့ ဖွင့်ပေးနိုင်ပါတယ်။ Password တောင်းတဲ့အခါ လိုအပ်ရင် personal access token သုံးနိုင်ပါတယ်။ SSH URL သုံးရင် public key ကို GitHub မှာ ထည့်ပြီး private key ကို ကိုယ့်စက်ထဲမှာပဲ ထားပါ။ Push ပြီးရင် Code tab ကို refresh လုပ်ပြီး commit တင်ထားတဲ့ဖိုင်တွေကို ကြည့်ပါ။'
    ), `git push -u origin main
git status -sb`),
  ], [
    source('Add locally hosted code', 'migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github'),
    source('About authentication to GitHub', 'authentication/keeping-your-account-and-data-secure/about-authentication-to-github'),
    source('About remote repositories', 'get-started/git-basics/about-remote-repositories'),
  ]),

  page('pull-requests', p('Pull Requests and Code Review', 'Pull Request ဖွင့်ခြင်းနဲ့ Code Review'), p(
    'A pull request proposes merging one branch into another. It gives the team a place to read the diff, run checks, and discuss the change before merging it.',
    'Pull Request ဆိုတာ branch တစ်ခုက changes တွေကို နောက် branch တစ်ခုထဲ ပေါင်းဖို့ တင်ပြတာပါ။ Team က မပေါင်းခင် ဘာတွေပြင်ထားလဲ ကြည့်နိုင်တယ်၊ checks တွေ စစ်နိုင်တယ်၊ ပြင်သင့်တာတွေ ဆွေးနွေးနိုင်ပါတယ်။'
  ), [
    terminal('feature', p('Commit and push a feature branch', 'Feature Branch မှာ Commit လုပ်ပြီး Push တင်ခြင်း'), p(
      'In project-notes, start with a clean working tree and main tracking origin/main. Create a branch for one change, add a project checklist, and push the branch to GitHub. Run the example in Git Bash, macOS, or Linux. You can also create CHECKLIST.md with an editor.',
      'project-notes ထဲမှာ commit လုပ်စရာ မကျန်တော့တဲ့ အခြေအနေကနေ စပါ။ main က origin/main ကို track လုပ်ထားရပါမယ်။ ပြင်ဆင်ချက်တစ်ခုအတွက် branch ခွဲ၊ checklist ထည့်၊ ပြီးရင် branch ကို GitHub ပေါ် push လုပ်ပါ။ နမူနာကို Git Bash၊ macOS ဒါမှမဟုတ် Linux မှာ run ပါ။ CHECKLIST.md ကို editor နဲ့လည်း ဆောက်နိုင်ပါတယ်။'
    ), `git switch main
git pull --ff-only
git switch -c add-checklist
printf '# Project Checklist\\n- [ ] Review the README\\n' > CHECKLIST.md
git add CHECKLIST.md
git commit -m "Add project checklist"
git push -u origin add-checklist`),
    snippet('open', p('Choose the base and compare branches', 'Base နဲ့ Compare Branch ရွေးခြင်း'), p(
      'On GitHub, open Pull requests and choose New pull request. Base is the branch that should receive the change. Compare is the branch that contains the change. Check the diff, then enter a title and a short description of what changed and how you verified it.',
      'GitHub ရဲ့ Pull requests tab မှာ New pull request ကို ရွေးပါ။ Base က changes လက်ခံမယ့် branch ပါ။ Compare က changes ပါတဲ့ branch ပါ။ Diff ကို စစ်ပြီး title ရေးပါ။ Description ထဲမှာ ဘာပြင်ထားလဲ၊ ဘယ်လို စစ်ထားလဲ ရေးပါ။'
    ), `Base: main
Compare: add-checklist
Title: Add project checklist
Description: Adds CHECKLIST.md. Verified the Markdown preview.`),
    terminal('review', p('Respond to review and sync after merging', 'Review အတိုင်း ပြင်ပြီး Merge ပြီးတဲ့ main ကို Update လုပ်ခြင်း'), p(
      'Check Files changed and any required reviews or automated checks. To address feedback, commit and push to add-checklist again. The open pull request updates automatically. After it is approved and merged on GitHub, update your local main.',
      'Files changed နဲ့ လိုအပ်တဲ့ review၊ automated checks တွေကို ကြည့်ပါ။ Reviewer ပြောတာ ပြင်ချင်ရင် add-checklist ပေါ်မှာပဲ commit အသစ်လုပ်ပြီး ထပ် push ပါ။ ဖွင့်ထားတဲ့ Pull Request မှာ အလိုအလျောက် update ဖြစ်ပါတယ်။ GitHub မှာ approve လုပ်ပြီး merge ပြီးတဲ့အခါ Local main ကို update လုပ်ပါ။'
    ), `git switch main
git pull --ff-only
git log --oneline -5`),
  ], [source('GitHub flow', 'get-started/using-github/github-flow'), source('Quickstart for pull requests', 'pull-requests/get-started/pull-request-quickstart')]),

  page('issues-and-forks', p('Issues and Forking Repositories', 'GitHub Issues နဲ့ Repository Fork လုပ်ခြင်း'), p(
    'Use Issues to describe work and forks to contribute through your own GitHub repository when you cannot push to the original.',
    'လုပ်စရာတစ်ခုကို မှတ်ထားဖို့ Issue ဖွင့်ပါ။ မူရင်း repository ကို တိုက်ရိုက် push လုပ်ခွင့် မရှိရင် ကိုယ့် GitHub account ထဲ fork လုပ်ပြီး ပြင်ဆင်ချက် တင်ပြနိုင်ပါတယ်။'
  ), [
    snippet('issues', p('Write an issue someone can act on', 'ဖတ်ပြီး ဆက်လုပ်လို့ရတဲ့ Issue ရေးခြင်း'), p(
      'Give the issue a short title. For a bug, include steps to reproduce, the actual result, and the expected result. In a pull request description, Closes #12 can link and close issue 12 in the same repository when the pull request merges into the default branch.',
      'Issue မှာ ဘာလုပ်စရာရှိလဲ သိသာတဲ့ title ရေးပါ။ Bug ဆိုရင် ဘယ်လိုလုပ်မှ ပြန်ဖြစ်လဲ၊ လက်တွေ့ ဘာဖြစ်လဲ၊ ဘာဖြစ်သင့်လဲဆိုတာ ထည့်ပါ။ Pull Request description မှာ Closes #12 လို့ ရေးရင် repository တူတဲ့ issue 12 နဲ့ ချိတ်ပြီး Pull Request ကို default branch ထဲ merge လုပ်တဲ့အခါ အဲဒီ issue ပိတ်သွားပါတယ်။'
    ), `Title: Add installation steps to the README
Steps: Open README.md and look for instructions to set up the project.
Actual: The README only describes what the project does.
Expected: The README includes commands to start the project.`),
    terminal('forks', p('Fork on GitHub and clone to your computer', 'GitHub မှာ Fork လုပ်ပြီး ကိုယ့်စက်ဆီ Clone လုပ်ခြင်း'), p(
      'Choose Fork on a repository that allows it. A fork lives under your GitHub account. Clone your fork in a workspace that does not already contain a project-notes folder. Replace YOUR-ACCOUNT and ORIGINAL-OWNER with actual values. origin points to your fork, and upstream is a common name for the original. Push a feature branch to your fork, then open the pull request against the original repository.',
      'Fork လုပ်ခွင့်ရှိတဲ့ repository မှာ Fork ကို ရွေးပါ။ Fork က ကိုယ့် GitHub account အောက်မှာ ရှိပါတယ်။ project-notes folder မရှိသေးတဲ့ workspace တစ်ခုမှာ ကိုယ့် fork ကို clone လုပ်ပါ။ YOUR-ACCOUNT နဲ့ ORIGINAL-OWNER နေရာတွေမှာ account နာမည် အစစ် ထည့်ပါ။ origin က ကိုယ့် fork ကို ညွှန်းပြီး upstream က မူရင်း repository အတွက် သုံးလေ့ရှိတဲ့ နာမည်ပါ။ ကိုယ့် fork ဆီ feature branch ကို push လုပ်ပြီး မူရင်း repository ဆီ Pull Request တင်ပါ။'
    ), `git clone https://github.com/YOUR-ACCOUNT/project-notes.git
cd project-notes
git remote add upstream https://github.com/ORIGINAL-OWNER/project-notes.git
git fetch upstream
git remote -v`),
  ], [
    source('About issues', 'issues/tracking-your-work-with-issues/about-issues'),
    source('Link a pull request to an issue', 'issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue'),
    source('Fork a repository', 'pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo'),
  ]),
]);
