import { guide, p, page, snippet } from './content.js';

const source = (label, path) => ['Git · ' + label, 'https://git-scm.com/' + path];
const terminal = (id, title, text, code) => ({ ...snippet(id, title, text, code), codeLanguage: 'shell' });

export const gitGuide = guide('git', 'Git', '', p(
  'Track a project on your computer, record changes, and work on branches before sharing them.',
  'ကိုယ့်စက်ထဲက Project အပြောင်းအလဲတွေကို မှတ်တမ်းတင်ပါ။ ပြင်ဆင်ချက်တွေကို branch ခွဲပြီး လုပ်ပါ။'
), [
  page('introduction', p('Introduction to Git', 'Git မိတ်ဆက်'), p(
    'When a project changes, version control lets you see what changed, who recorded it, and when. Git is a version control tool that can keep that history on your own computer.',
    'Project တစ်ခုကို ပြင်လာတာကြာရင် ဘာပြောင်းခဲ့လဲ၊ ဘယ်သူက ဘယ်အချိန်မှာ မှတ်တမ်းတင်ခဲ့လဲဆိုတာ ပြန်သိဖို့ လိုလာပါတယ်။ Git က အဲဒီမှတ်တမ်းကို ကိုယ့်စက်ထဲမှာ သိမ်းထားပေးနိုင်တဲ့ version control tool တစ်ခုပါ။'
  ), [
    terminal('install', p('Install Git and check the version', 'Git ထည့်သွင်းပြီး Version စစ်ခြင်း'), p(
      'Use the official Git installation guide linked below for Windows, macOS, or Linux. On Windows, Git Bash is a convenient way to follow these examples. Reopen your terminal after installation and check the version.',
      'Windows၊ macOS နဲ့ Linux အတွက် အောက်က Git official installation guide ကို သုံးပါ။ Windows မှာ ဒီနမူနာတွေကို Git Bash နဲ့ လိုက်စမ်းလို့ရပါတယ်။ Install လုပ်ပြီးရင် terminal ပြန်ဖွင့်ပြီး version စစ်ပါ။'
    ), 'git --version'),
    terminal('identity', p('Set the name and email for commits', 'Commit အတွက် နာမည်နဲ့ Email သတ်မှတ်ခြင်း'), p(
      'Git records this identity in new commits. Replace the examples with your details. If you plan to publish the repository on GitHub and want to keep your email private, use the noreply address from your GitHub email settings.',
      'Git က commit အသစ်တွေမှာ ဒီနာမည်နဲ့ email ကို မှတ်တမ်းတင်ပါတယ်။ နမူနာနေရာမှာ ကိုယ့်အချက်အလက်ကို ထည့်ပါ။ GitHub ပေါ် တင်တဲ့အခါ email ကို ဖျောက်ထားချင်ရင် GitHub ရဲ့ email settings ထဲက noreply address ကို သုံးပါ။'
    ), `git config --global user.name "Alex Rivera"
git config --global user.email "alex@example.com"
git config --get user.name
git config --get user.email`),
    terminal('init', p('Create a local repository', 'Local Repository ဆောက်ခြင်း'), p(
      'A repository stores the project history. Create a separate practice folder, initialize it with a branch named main, and check the current state. Keep this project for the following lessons.',
      'Repository က Project ရဲ့ history ကို သိမ်းပါတယ်။ လိုက်စမ်းဖို့ သီးသန့် folder တစ်ခုဆောက်ပြီး main ဆိုတဲ့ branch နဲ့ Git စသုံးပါ။ ဒီ project ကို နောက်သင်ခန်းစာတွေမှာ ဆက်သုံးပါမယ်။'
    ), `mkdir project-notes
cd project-notes
git init -b main
git status`),
  ], [source('Install Git', 'install/'), source('First-time Git setup', 'book/en/v2/Getting-Started-First-Time-Git-Setup'), source('git init', 'docs/git-init')]),

  page('commits', p('Staging Changes and Making Commits', 'Changes Stage လုပ်ခြင်းနဲ့ Commit သိမ်းခြင်း'), p(
    'Create the first file in project-notes. You will see how an edit becomes part of a recorded version.',
    'project-notes ထဲမှာ ပထမဆုံးဖိုင် ဆောက်ကြည့်ပါမယ်။ ဖိုင်ထဲမှာ ပြင်လိုက်တဲ့အရာက Project မှတ်တမ်းထဲ ဘယ်လိုရောက်သွားလဲဆိုတာ အဆင့်လိုက် ကြည့်ပါ။'
  ), [
    terminal('working-tree', p('Edit a file in the working tree', 'Working Tree ထဲမှာ ဖိုင်ပြင်ခြင်း'), p(
      'The working tree contains the files you are editing. Create README.md with this command in Git Bash, macOS, or Linux, or create the file in an editor. Git reports it as untracked until you add it.',
      'Working tree ဆိုတာ ကိုယ်ဖွင့်ပြီး ပြင်နေတဲ့ Project ဖိုင်တွေပါ။ Git Bash၊ macOS ဒါမှမဟုတ် Linux မှာ အောက်က command နဲ့ README.md ဆောက်ပါ။ Editor နဲ့လည်း ဆောက်လို့ရပါတယ်။ Git မှာ add မလုပ်ရသေးရင် ဒီဖိုင်ကို untracked လို့ ပြပါမယ်။'
    ), `printf '# Project Notes\\n' > README.md
git status --short`),
    terminal('stage', p('Choose what to include in the next commit', 'နောက် Commit ထဲ ထည့်မယ့် Change ကို ရွေးခြင်း'), p(
      'git add copies the current file contents into the staging area. git diff --staged shows what the next commit will include. If you edit the file again after staging it, stage it again to include the latest edit.',
      'git add က လက်ရှိဖိုင်ထဲက data ကို staging area ထဲ ထည့်ပေးပါတယ်။ git diff --staged နဲ့ နောက် commit ထဲ ဘာပါမလဲ ကြည့်လို့ရပါတယ်။ Stage လုပ်ပြီးမှ ဖိုင်ထပ်ပြင်ရင် နောက်ဆုံးပြင်ထားတာပါဖို့ ထပ် add လုပ်ပါ။'
    ), `git add README.md
git diff --staged`),
    terminal('commit', p('Record and inspect the first commit', 'ပထမ Commit သိမ်းပြီး History ကြည့်ခြင်း'), p(
      'A commit records the staged snapshot in the local repository. Use a message that describes the change. git log --oneline should show the new commit and its abbreviated ID. During later edits, git diff shows unstaged changes to tracked files.',
      'Commit က stage လုပ်ထားတဲ့ Project အခြေအနေကို local repository ထဲမှာ မှတ်တမ်းတင်ပါတယ်။ ဘာလုပ်ခဲ့လဲ သိသာတဲ့ message ရေးပါ။ git log --oneline မှာ commit အသစ်နဲ့ အတိုကောက် ID ကို တွေ့ပါမယ်။ နောက်ပိုင်း ပြင်ဆင်တဲ့အခါ git diff နဲ့ stage မလုပ်ရသေးတဲ့ tracked file ရဲ့ changes ကို ကြည့်နိုင်ပါတယ်။'
    ), `git commit -m "Add project README"
git log --oneline
git status`),
  ], [source('Recording changes', 'book/en/v2/Git-Basics-Recording-Changes-to-the-Repository'), source('git diff', 'docs/git-diff')]),

  page('branches-and-merging', p('Branches and Merging', 'Branch ခွဲခြင်းနဲ့ Merge လုပ်ခြင်း'), p(
    'Keep main as the base for your project. Create a branch when you want to develop a change and bring it into main after checking it.',
    'main ကို Project ရဲ့ အခြေခံ branch အဖြစ်ထားပါ။ Feature တစ်ခုလုပ်ချင်ရင် branch ခွဲပြီး စမ်းပါ။ စစ်ပြီးမှ အဲဒီပြင်ဆင်ချက်ကို main ထဲ ပေါင်းပါ။'
  ), [
    terminal('branch', p('Create a branch and commit a change', 'Branch အသစ်ဆောက်ပြီး Change ကို Commit လုပ်ခြင်း'), p(
      'A branch is a named pointer to a commit. When you commit on add-usage, Git advances that branch while main stays at its previous commit. Start from main in project-notes and append a short usage section.',
      'Branch ဆိုတာ commit တစ်ခုကို ညွှန်းထားတဲ့ နာမည်တစ်ခုပါ။ add-usage ပေါ်မှာ commit လုပ်ရင် add-usage က commit အသစ်ဆီ ရွှေ့ပြီး main က အရင် commit မှာ ရှိနေပါမယ်။ project-notes ထဲက main ကနေ စပြီး အသုံးပြုနည်း အတိုလေး ထည့်ကြည့်ပါ။'
    ), `git switch -c add-usage
printf '\\n## Usage\\nRead the notes before starting.\\n' >> README.md
git add README.md
git commit -m "Add usage notes"
git branch`),
    terminal('merge', p('Merge a branch into main', 'Branch ကို main ထဲ Merge လုပ်ခြင်း'), p(
      'Switch to the branch that should receive the changes, then name the branch to merge from. If main has no new commits since the branch was created, this example can fast-forward. Git moves main to the commit already on add-usage.',
      'ပြင်ဆင်ချက် လက်ခံမယ့် branch ဆီ အရင်ပြောင်းပါ။ ပြီးမှ ဘယ် branch က ပြင်ဆင်ချက်တွေ ယူမလဲဆိုတာ git merge မှာ ရေးပါ။ Branch ခွဲပြီးနောက် main မှာ commit အသစ်မရှိရင် ဒီနမူနာမှာ Git က main ကို add-usage ရဲ့ commit ဆီ တိုက်ရိုက်ရွှေ့နိုင်ပါတယ်။ အဲဒါကို fast-forward လို့ခေါ်ပါတယ်။'
    ), `git switch main
git merge add-usage
git log --oneline --graph --all`),
  ], [source('Basic branching and merging', 'book/en/v2/Git-Branching-Basic-Branching-and-Merging'), source('git switch', 'docs/git-switch')]),

  page('merge-conflicts', p('Resolving Merge Conflicts', 'Merge Conflict ဖြေရှင်းခြင်း'), p(
    'If two branches change the same part of a file in different ways, Git can pause the merge and ask you to choose the final content.',
    'Branch နှစ်ခုမှာ ဖိုင်ရဲ့ တူညီတဲ့နေရာကို ပုံစံမတူအောင် ပြင်ထားရင် Git က merge ကို ခဏရပ်ထားနိုင်ပါတယ်။ အဲဒီနေရာမှာ ဘယ်စာသားကို နောက်ဆုံးထားမလဲ ကိုယ်တိုင် ဆုံးဖြတ်ပေးရပါမယ်။'
  ), [
    terminal('reproduce', p('Make two branches edit the same line', 'တူညီတဲ့ စာကြောင်းကို Branch နှစ်ခုမှာ ပြင်ခြင်း'), p(
      'Start from a clean main in project-notes after the branching lesson. Create a file with one line, then change that line differently in each branch. The final merge should report a conflict in status.txt.',
      'Branch သင်ခန်းစာပြီးရင် project-notes ရဲ့ main မှာ commit လုပ်စရာ မကျန်တော့တဲ့ အခြေအနေကနေ စပါ။ စာကြောင်းတစ်ကြောင်းပါတဲ့ ဖိုင် ဆောက်ပြီး branch တစ်ခုစီမှာ အဲဒီစာကြောင်းကို မတူအောင် ပြင်ပါ။ နောက်ဆုံး merge မှာ status.txt ကို conflict ဖြစ်တယ်လို့ ပြပါမယ်။'
    ), `printf 'Draft\\n' > status.txt
git add status.txt
git commit -m "Add draft status"
git switch -c update-status
printf 'Ready for review\\n' > status.txt
git commit -am "Mark status ready for review"
git switch main
printf 'Review scheduled\\n' > status.txt
git commit -am "Schedule review"
git merge update-status`),
    terminal('resolve', p('Choose the final content and complete the merge', 'နောက်ဆုံးထားမယ့် စာသားရွေးပြီး Merge အပြီးသတ်ခြင်း'), p(
      'Run git status to find conflicted files. Open status.txt and look for the lines starting with <<<<<<<, =======, and >>>>>>>. Replace the entire marked block with the agreed wording, save, stage the file, and commit. To cancel an in-progress merge instead, use git merge --abort before committing it.',
      'git status နဲ့ conflict ဖြစ်နေတဲ့ဖိုင် ရှာပါ။ status.txt ကို ဖွင့်ရင် <<<<<<<၊ ======= နဲ့ >>>>>>> လို့စတဲ့ marker တွေ တွေ့ပါမယ်။ Marker တွေ အပါအဝင် အဲဒီအပိုင်းတစ်ခုလုံးကို သဘောတူတဲ့ စာသားနဲ့ အစားထိုးပါ။ ပြီးရင် save၊ stage၊ commit လုပ်ပါ။ Merge ကို ရပ်ပြီး အရင်အခြေအနေ ပြန်သွားချင်ရင် commit မလုပ်ခင် git merge --abort သုံးနိုင်ပါတယ်။'
    ), `git status
printf 'Ready for scheduled review\\n' > status.txt
git add status.txt
git commit -m "Resolve project status conflict"
git status`),
  ], [source('Basic branching and merging', 'book/en/v2/Git-Branching-Basic-Branching-and-Merging'), source('git merge', 'docs/git-merge')]),

  page('ignoring-and-undoing', p('Ignoring Files and Undoing Changes', 'ဖိုင်တွေ Ignore လုပ်ခြင်းနဲ့ Changes ပြန်ဖျက်ခြင်း'), p(
    'Keep temporary and private files out of commits. When you make a mistake, choose the command based on whether the change is staged or already committed.',
    'ယာယီဖိုင်နဲ့ ကိုယ်ပိုင်အချက်အလက်ပါတဲ့ ဖိုင်တွေ commit ထဲ မပါအောင်ထားပါ။ မှားပြီး ပြင်လိုက်တဲ့အခါ stage လုပ်ပြီးသားလား၊ commit သိမ်းပြီးသားလားပေါ်မူတည်ပြီး ပြန်ပြင်မယ့် command ရွေးပါ။'
  ), [
    snippet('gitignore', p('Write a .gitignore file', '.gitignore ဖိုင် ရေးခြင်း'), p(
      'Save these patterns in .gitignore at the root of project-notes. Run git add .gitignore and commit it so the whole team can use the same rules. The rules apply to untracked files. If a file is already tracked, adding a pattern does not remove it from an existing commit. Keep passwords and API keys out of the repository.',
      'ဒီ pattern တွေကို project-notes ရဲ့ root ထဲမှာ .gitignore ဆိုတဲ့ဖိုင်နဲ့ သိမ်းပါ။ Team တစ်ခုလုံး ဒီ rule တွေ သုံးလို့ရအောင် git add .gitignore လုပ်ပြီး commit သိမ်းပါ။ Rule တွေက untracked ဖိုင်တွေမှာ အလုပ်လုပ်ပါတယ်။ Track လုပ်ထားပြီးသားဖိုင်ကို pattern ထည့်လိုက်ရုံနဲ့ ရှိပြီးသား commit ထဲက မပျောက်ပါဘူး။ Password နဲ့ API key တွေကို repository ထဲ မထည့်ပါနဲ့။'
    ), `.env
*.log
node_modules/
.venv/`),
    terminal('unstage', p('Unstage a change and keep the file', 'ဖိုင်ထဲက Changes ကို ထိန်းထားပြီး Unstage လုပ်ခြင်း'), p(
      'In the practice repository, make a small edit to README.md and stage it. git restore --staged removes that change from the next commit while preserving the edit in your working tree. git diff then shows the unstaged edit. Stage the file again when the edit is ready.',
      'နမူနာ repository ထဲက README.md ကို နည်းနည်းပြင်ပြီး stage လုပ်ကြည့်ပါ။ git restore --staged က အဲဒီ change ကို နောက် commit ထဲကနေ ဖယ်ပေးပြီး ဖိုင်ထဲက ပြင်ထားတာကို ထိန်းထားပေးပါတယ်။ git diff နဲ့ ပြင်ထားတာကို ကြည့်ပါ။ အဆင်သင့်ဖြစ်ရင် ဖိုင်ကို ထပ် stage လုပ်နိုင်ပါတယ်။'
    ), `git add README.md
git restore --staged README.md
git diff -- README.md`),
    terminal('revert', p('Undo a recorded change with a new commit', 'Commit အသစ်နဲ့ သိမ်းထားပြီးသား Change ကို ပြန်ပြင်ခြင်း'), p(
      'For a commit already shared with others, git revert records a new commit that reverses its changes. With a clean working tree, choose an ordinary, non-merge commit from git log and replace abc1234 with its actual ID. If later changes overlap, Git may ask you to resolve a conflict.',
      'တခြားသူတွေနဲ့ မျှဝေပြီးသား commit ကို ပြန်ပြင်ဖို့ git revert သုံးရင် အဲဒီ changes ကို ပြန်ဖယ်တဲ့ commit အသစ်တစ်ခု ရပါတယ်။ Working tree မှာ ပြင်စရာ မကျန်တော့ရင် git log ထဲက ရိုးရိုး commit တစ်ခုရွေးပြီး abc1234 နေရာမှာ သူ့ ID အစစ် ထည့်ပါ။ နောက်ပိုင်း ပြင်ထားတာတွေနဲ့ ထပ်နေရင် conflict ဖြေရှင်းရနိုင်ပါတယ်။'
    ), `git log --oneline
git revert abc1234`),
  ], [source('gitignore', 'docs/gitignore'), source('git restore', 'docs/git-restore'), source('git revert', 'docs/git-revert')]),

  page('remotes', p('Remote Repositories, Fetch, Pull, and Push', 'Remote Repository၊ Fetch၊ Pull နဲ့ Push'), p(
    'A remote is a named repository connection. Once you know how to get and share commits through that connection, you can use GitHub to collaborate on the same project.',
    'Remote ဆိုတာ ချိတ်ဆက်ထားတဲ့ repository လိပ်စာကို နာမည်တပ်ပြီး မှတ်ထားတာပါ။ အဲဒီကနေ commit တွေ ယူတာနဲ့ ပို့တာ သိလာရင် GitHub မှာ ဒီ Project ကိုပဲ ဆက်ပြီး ပူးပေါင်း လုပ်ဆောင်နိုင်ပါတယ်။'
  ), [
    terminal('clone', p('Clone an existing repository', 'ရှိပြီးသား Repository ကို Clone လုပ်ခြင်း'), p(
      'Clone from the parent directory or another workspace if you want a new local copy. Git copies the repository history and usually names the remote origin. Replace OWNER with the account or organization name and use the actual repository URL.',
      'Local copy အသစ်လိုရင် Project ရဲ့ အပြင်ဘက် folder ဒါမှမဟုတ် တခြား workspace မှာ clone လုပ်ပါ။ Git က repository history ကို ကူးပြီး remote ကို ပုံမှန်အားဖြင့် origin လို့ နာမည်ပေးပါတယ်။ OWNER နေရာမှာ account ဒါမှမဟုတ် organization နာမည် ထည့်ပြီး URL အစစ်ကို သုံးပါ။'
    ), `git clone https://github.com/OWNER/project-notes.git
cd project-notes
git remote -v`),
    terminal('sync', p('Read remote changes before integrating them', 'Remote Changes ကို မပေါင်းခင် ကြည့်ခြင်း'), p(
      'In a repository that tracks origin/main, git fetch origin updates your local view of the remote branches without merging them into your current branch. Compare main with origin/main. On main with a clean working tree, git pull --ff-only fetches and advances main if it can do so without a merge commit. If the branches diverged, inspect the history before choosing how to integrate them.',
      'origin/main ကို ချိတ်ထားတဲ့ repository မှာ git fetch origin က remote branch တွေအတွက် ကိုယ့်စက်ထဲက မှတ်တမ်းကို update လုပ်ပေးပါတယ်။ လက်ရှိ branch ထဲ merge မလုပ်သေးတဲ့အတွက် main နဲ့ origin/main ကို အရင် ယှဉ်ကြည့်နိုင်ပါတယ်။ main မှာ working tree ရှင်းနေရင် git pull --ff-only က fetch လုပ်ပြီး တိုက်ရိုက်ရှေ့ဆက်လို့ရတဲ့အခါ main ကို update လုပ်ပါတယ်။ နှစ်ဖက်လုံးမှာ ကိုယ်စီ commit အသစ်တွေ ရှိနေရင် History ကို အရင်စစ်ပါ။'
    ), `git switch main
git fetch origin
git log --oneline main..origin/main
git pull --ff-only`),
    terminal('push', p('Share commits on a feature branch', 'Feature Branch က Commit တွေ မျှဝေခြင်း'), p(
      'If you have write access, switch to or create a feature branch and push it to origin. The -u option records the upstream association so later pushes can use git push by itself. Continue with GitHub to learn how to open a pull request for the branch.',
      'Remote repository ကို write access ရှိရင် feature branch ဆောက်ပြီး origin ဆီ push လုပ်ပါ။ -u က Local branch နဲ့ remote branch ဆက်စပ်မှုကို မှတ်ထားပေးလို့ နောက်တစ်ခါ git push လို့ပဲ ရိုက်နိုင်ပါတယ်။ Branch အတွက် Pull Request ဖွင့်ပုံကို GitHub သင်ခန်းစာမှာ ဆက်ကြည့်ပါ။'
    ), `git switch -c update-notes
git push -u origin update-notes`),
  ], [source('Working with remotes', 'book/en/v2/Git-Basics-Working-with-Remotes'), source('git pull', 'docs/git-pull'), source('git push', 'docs/git-push')]),
]);
