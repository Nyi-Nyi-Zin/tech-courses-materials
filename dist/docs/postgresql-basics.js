import { p, page, part, snippet } from './content.js';

const pg = 'https://www.postgresql.org/docs/19/';
const psql = ['PostgreSQL · psql', pg + 'app-psql.html'];
const sqlLines = (...lines) => lines.join('\n');
const command = (id, title, text, code, details = {}) => ({ ...part(id, title, text, code), ...details });

export const postgresInstall = page('install', p('Install PostgreSQL and psql', 'PostgreSQL နဲ့ psql ထည့်သွင်းခြင်း'),
  p(
    'Choose the instructions for your operating system. You need a local PostgreSQL server and its command-line tools. PowerShell on Windows and Terminal on macOS or Ubuntu are enough for the lessons.',
    'ကိုယ့် operating system အတွက် အောက်က အဆင့်တွေကို လိုက်လုပ်ပါ။ Local PostgreSQL server နဲ့ command-line tools လိုပါတယ်။ သင်ခန်းစာတွေ လိုက်လုပ်ဖို့ Windows မှာ PowerShell၊ macOS နဲ့ Ubuntu မှာ Terminal သုံးလို့ရပါတယ်။'
  ),
  [
    {
      ...snippet('tools', p('Which tools do you need?', 'ဘယ် Tools တွေ လိုလဲ'),
        p('The server and psql are the essentials. Use pg_isready to check whether the server is listening.', 'Server နဲ့ psql ကို အဓိကသုံးမယ်။ Server က connection လက်ခံဖို့ အသင့်ဖြစ်ပြီလားဆိုတာ pg_isready နဲ့ စစ်မယ်။'), `psql --version
pg_isready -h localhost -p 5432`),
      terms: [
        ['PostgreSQL Server', p('Runs in the background, manages databases, and executes SQL.', 'Background မှာ run ပြီး database တွေကို စီမံတယ်။ SQL query တွေလည်း execute လုပ်ပေးတယ်။')],
        ['psql', p('Terminal client for connecting to the server, sending SQL, and reading results.', 'Server ကို ချိတ်ဖို့၊ SQL ပို့ဖို့နဲ့ ရလဒ်ကြည့်ဖို့ သုံးတဲ့ terminal client ပါ။')],
        ['pg_isready', p('Checks whether a PostgreSQL server at a given host and port accepts connections. It does not validate your password.', 'Host နဲ့ port တစ်ခုမှာ PostgreSQL server က connection လက်ခံလား စစ်တယ်။ Password မှန်မမှန် စစ်တဲ့ tool မဟုတ်ပါဘူး။')],
        ['pgAdmin / Stack Builder', p('Optional. pgAdmin is a graphical client. Stack Builder installs add-ons.', 'ထည့်ချင်မှ ထည့်ပါ။ pgAdmin က graphical client ဖြစ်ပြီး Stack Builder က အပို tool တွေ ထည့်ပေးပါတယ်။')],
      ],
    },
    command('windows', p('Windows · EDB installer and PowerShell', 'Windows · EDB Installer နဲ့ PowerShell'),
      p(
        'Open the Windows download link in Official references and choose the EDB installer for a supported version. In Select Components, keep PostgreSQL Server and Command Line Tools. Keep the default data directory for class, set and remember the password for the database role postgres, and keep port 5432 if it is free. Skip the optional Stack Builder at the end. In a fresh PowerShell window, run the following commands.',
        'အောက်က Official references မှာ Windows download link ကိုဖွင့်ပြီး support ရှိတဲ့ version အတွက် EDB Installer ကို ရွေးပါ။ Select Components မှာ PostgreSQL Server နဲ့ Command Line Tools ရွေးပါ။ သင်ခန်းစာအတွက် default data directory ကို သုံးပါ။ postgres database role အတွက် password သတ်မှတ်ပြီး မှတ်ထားပါ။ Port 5432 လွတ်ရင် အဲဒီ port ကို ဆက်သုံးပါ။ အဆုံးမှာ Stack Builder ကို ကျော်လို့ရပါတယ်။ ပြီးရင် PowerShell အသစ်ဖွင့်ပြီး အောက်က command တွေ run ပါ။'
      ), sqlLines('Get-Service -Name "postgresql*"', 'psql --version'), {
        terms: [
          ['Get-Service -Name "postgresql*"', p('Lists Windows services whose names start with postgresql. Look for Running in the status column.', 'postgresql နဲ့ စတဲ့ Windows service တွေကို ပြတယ်။ Status မှာ Running ဖြစ်နေလား စစ်ပါ။')],
          ['psql --version', p('Prints the installed psql client version and returns to PowerShell.', 'စက်မှာ ထည့်ထားတဲ့ psql client version ကိုပြပြီး PowerShell ကို ပြန်ရောက်တယ်။')],
        ],
        check: p(
          'If psql is not recognized, search Windows for Edit environment variables for your account, then open Path → Edit → New and add the installation’s bin folder. For example, use C:\\Program Files\\PostgreSQL\\19\\bin for the default version 19 location. Open a new PowerShell window and retry. If the service shows Stopped, start it from Windows Services and then check again.',
          'psql ကို ရှာမတွေ့ရင် Windows Search မှာ Edit environment variables for your account ကို ရှာဖွင့်ပါ။ Path → Edit → New ကို နှိပ်ပြီး PostgreSQL ထည့်ထားတဲ့ bin folder လမ်းကြောင်းကို ထည့်ပါ။ Version 19 ကို မူလနေရာမှာ ထည့်ထားရင် C:\\Program Files\\PostgreSQL\\19\\bin ဖြစ်ပါတယ်။ PowerShell အသစ်ဖွင့်ပြီး ပြန်စမ်းပါ။ Service က Stopped ဖြစ်နေရင် Windows Services ထဲကနေ Start လုပ်ပြီး ပြန်စစ်ပါ။'
        ),
      }),
    command('macos', p('macOS · Postgres.app and Terminal', 'macOS · Postgres.app နဲ့ Terminal'),
      p(
        'Download Postgres.app from the link below, move it to Applications, open it, and click Initialize. Add its command-line tools to PATH in your current Terminal session. Keep Postgres.app running while you work.',
        'အောက်က link ကနေ Postgres.app ကို download လုပ်ပါ။ Applications folder ထဲ ရွှေ့ပြီး ဖွင့်ပါ။ Initialize နှိပ်ပါ။ ပြီးရင် လက်ရှိ Terminal session ရဲ့ PATH ထဲကို command-line tools လမ်းကြောင်း ထည့်ပါ။ လိုက်စမ်းနေချိန်မှာ Postgres.app ကို run ထားပါ။'
      ), sqlLines('export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"', 'psql --version'), {
        terms: [
          ['export PATH="…:$PATH"', p('Adds the Postgres.app binaries ahead of the existing PATH for this Terminal session. See the Postgres.app CLI guide below to set it up for future Terminal windows.', 'လက်ရှိ Terminal session အတွက် Postgres.app ရဲ့ bin folder ကို ရှိပြီးသား PATH ရဲ့ အစမှာ ထည့်ပေးတယ်။ Terminal အသစ်တိုင်းမှာ သုံးချင်ရင် အောက်က Postgres.app CLI guide ကို ကြည့်ပါ။')],
        ],
        expected: p('psql --version prints the client version. The initial PostgreSQL role is normally your macOS username.', 'psql --version က client version ကိုပြတယ်။ ကနဦး PostgreSQL role က ပုံမှန်အားဖြင့် macOS username ပါ။'),
      }),
    command('ubuntu', p('Ubuntu · Install with apt', 'Ubuntu · apt နဲ့ ထည့်သွင်းခြင်း'),
      p('Run these commands in Terminal on Ubuntu. The Ubuntu repository supplies a version for your Ubuntu release.', 'Ubuntu Terminal မှာ အောက်က command တွေ run ပါ။ Ubuntu repository က ကိုယ့် Ubuntu release နဲ့ကိုက်တဲ့ PostgreSQL version ကို ထည့်ပေးပါတယ်။'),
      sqlLines('sudo apt update', 'sudo apt install postgresql', 'sudo systemctl status postgresql --no-pager', 'psql --version'), {
        terms: [
          ['sudo apt update', p('Refreshes the package list. sudo runs the command with administrator privileges.', 'Package စာရင်းကို အပ်ဒိတ်လုပ်တယ်။ sudo က command ကို administrator အခွင့်အရေးနဲ့ run ပေးတယ်။')],
          ['sudo apt install postgresql', p('Installs PostgreSQL and its required packages, including the client tools.', 'PostgreSQL နဲ့ လိုအပ်တဲ့ package တွေ၊ client tools တွေကို ထည့်ပေးတယ်။')],
          ['sudo systemctl status postgresql --no-pager', p('Shows the PostgreSQL service status without opening a scrollable pager. Use pg_isready below to check the actual connection.', 'PostgreSQL service status ကို pager မဖွင့်ဘဲ ပြတယ်။ Connection ကို တကယ်လက်ခံလားဆိုတာ အောက်က pg_isready နဲ့ စစ်ပါ။')],
        ],
        check: p('If the service is stopped on a systemd-based Ubuntu machine, sudo systemctl start postgresql starts it. On Ubuntu under WSL, make sure the service is running inside the same distribution where you run psql.', 'systemd သုံးတဲ့ Ubuntu မှာ service ရပ်နေရင် sudo systemctl start postgresql နဲ့ စတင်ပါ။ WSL ထဲက Ubuntu သုံးရင် psql run မယ့် distribution ထဲမှာပဲ PostgreSQL service run နေလား စစ်ပါ။'),
      }),
    command('ready', p('Check that the server accepts connections', 'Server က Connection လက်ခံလား စစ်ခြင်း'),
      p('Run this check in your OS terminal. Change the port if you used a different port when configuring PostgreSQL.', 'ကိုယ့် OS terminal မှာ ဒီ command ကို run ပါ။ PostgreSQL ထည့်တုန်းက တခြား port သတ်မှတ်ခဲ့ရင် အဲဒီ port နဲ့ အစားထိုးပါ။'),
      'pg_isready -h localhost -p 5432', {
        terms: [
          ['-h localhost', p('Checks the server on your own machine.', 'ကိုယ့်စက်ပေါ်က server ကို စစ်တယ်။')],
          ['-p 5432', p('Checks port 5432, the usual PostgreSQL port.', 'ပုံမှန် PostgreSQL port ဖြစ်တဲ့ 5432 ကို စစ်တယ်။')],
        ],
        expected: p('localhost:5432 - accepting connections', 'localhost:5432 - accepting connections'),
        check: p('If you see no response, check that the server is running and that the host and port are correct. If pg_isready is not found, check the command-line tools and PATH first.', 'no response ပြရင် server run နေလား၊ host နဲ့ port မှန်လား စစ်ပါ။ pg_isready ကို ရှာမတွေ့ရင် command-line tools နဲ့ PATH ကို အရင်စစ်ပါ။'),
      }),
  ],
  [
    ['PostgreSQL · Windows installer', 'https://www.postgresql.org/download/windows/'],
    ['EDB · Windows installation steps', 'https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/windows/'],
    ['PostgreSQL · macOS downloads', 'https://www.postgresql.org/download/macosx/'],
    ['Postgres.app · Download and setup', 'https://postgresapp.com/'],
    ['Postgres.app · Command-line tools', 'https://postgresapp.com/documentation/cli-tools.html'],
    ['PostgreSQL · Ubuntu packages', 'https://www.postgresql.org/download/linux/ubuntu/'],
    ['PostgreSQL · pg_isready', pg + 'app-pg-isready.html'],
  ]);

export const postgresConnection = [
  command('psql', p('Connect from Windows PowerShell', 'Windows PowerShell ကနေ psql ချိတ်ခြင်း'),
    p('Run this from PowerShell and enter the PostgreSQL password you chose during installation if prompted. If your port or role differs, replace the corresponding value.', 'PowerShell မှာ ရိုက်ပါ။ Password တောင်းရင် install တုန်းက သတ်မှတ်ထားတဲ့ PostgreSQL password ကို ထည့်ပါ။ Port သို့မဟုတ် role မတူရင် သက်ဆိုင်တဲ့တန်ဖိုးကို ပြောင်းပါ။'),
    'psql -h localhost -p 5432 -U postgres -d postgres', {
      terms: [
        ['psql', p('Starts the PostgreSQL terminal client.', 'PostgreSQL terminal client ကို ဖွင့်တယ်။')],
        ['-h localhost', p('Selects the host. localhost is the machine on which you run psql.', 'ဘယ်စက်ကို ချိတ်မလဲဆိုတာ ရွေးတယ်။ localhost က psql run နေတဲ့ ကိုယ့်စက်ပါ။')],
        ['-p 5432', p('Selects the TCP port on that machine.', 'အဲဒီစက်ပေါ်က TCP port ကို ရွေးတယ်။')],
        ['-U postgres', p('Logs in as the PostgreSQL role named postgres.', 'postgres ဆိုတဲ့ PostgreSQL role နဲ့ ဝင်တယ်။')],
        ['-d postgres', p('Opens the database named postgres. The role and database happen to share a name in this example.', 'postgres ဆိုတဲ့ database ကို ဖွင့်တယ်။ ဒီဥပမာမှာ role နာမည်နဲ့ database နာမည်က တူနေတယ်။')],
      ],
      expected: p('A prompt such as postgres=# means you are inside psql. Password input may stay invisible as you type.', 'postgres=# လို prompt ပေါ်ရင် psql ထဲ ရောက်နေပါပြီ။ Password ရိုက်နေချိန် စာလုံးတွေ မပေါ်တာ ပုံမှန်ပါ။'),
    }),
  command('macos', p('Connect from macOS with Postgres.app', 'Postgres.app သုံးထားတဲ့ macOS ကနေ ချိတ်ခြင်း'),
    p('In Terminal, use your macOS account name as the default Postgres.app role. The shell expands whoami to that account name. Replace the port if your Postgres.app server uses a different one.', 'Terminal မှာ Postgres.app က သတ်မှတ်ပေးထားတဲ့ macOS account နာမည်ကို role အဖြစ် သုံးပါ။ Shell က whoami ကို run လုပ်ပြီး account နာမည် ထည့်ပေးတယ်။ Postgres.app server ရဲ့ port က မတူရင် ပြောင်းပါ။'),
    'psql -h localhost -p 5432 -U "$(whoami)" -d postgres'),
  command('ubuntu', p('Connect from Ubuntu with the local postgres account', 'Ubuntu မှာ Local postgres Account နဲ့ ချိတ်ခြင်း'),
    p('On a typical Ubuntu package installation this connects through the local Unix socket. sudo -u postgres runs psql as the operating-system user postgres, which can match the PostgreSQL role under peer authentication. The -d option selects the postgres database.', 'ပုံမှန် Ubuntu package installation မှာ local Unix socket ကနေ ချိတ်ပါတယ်။ sudo -u postgres က psql ကို OS ရဲ့ postgres user အဖြစ် run ပေးတယ်။ Peer authentication က အဲဒီ OS user နာမည်ကို PostgreSQL role နာမည်နဲ့ တိုက်စစ်နိုင်တယ်။ -d က postgres database ကို ရွေးတယ်။'),
    'sudo -u postgres psql -d postgres'),
  command('short-login', p('Use the short postgres login command', 'postgres နဲ့ အတိုကောက် ဝင်ခြင်း'),
    p('Run this in your OS terminal. It selects the postgres role. With the default client settings, psql also uses postgres as the database name and uses the default local connection and port 5432. If your local authentication rejects it, use the full command for your OS above.', 'OS terminal မှာ ရိုက်ပါ။ postgres role ကို ရွေးပေးတယ်။ Client ရဲ့ default settings နဲ့ဆို psql က postgres database၊ local connection နဲ့ port 5432 ကို သုံးတယ်။ Local authentication နဲ့ ဝင်မရရင် အပေါ်က ကိုယ့် OS အတွက် command အပြည့်အစုံကို သုံးပါ။'),
    'psql -U postgres'),
  {
    ...snippet('prompt', p('Read the psql prompt', 'psql Prompt ကို ဖတ်ခြင်း'),
      p('The prompt is printed by the program. Type only the command that follows it. If terminal flags typed inside psql leave you at a continuation prompt, use the recovery steps below.', 'Prompt ကို program က ပြပေးတာပါ။ Prompt နောက်မှာ command ကိုပဲ ရိုက်ပါ။ psql ထဲမှာ terminal command ကို မှားရိုက်မိလို့ continuation prompt ဖြစ်သွားရင် အောက်ကအတိုင်း ပြန်ရှင်းပါ။'), `postgres=# SELECT
postgres-#   CURRENT_DATE;
 current_date
--------------
 2026-11-24
(1 row)`),
    terms: [
      ['postgres=#', p('Ready for a command in the postgres database. The # normally indicates a superuser. A normal role sees postgres=> with the default prompt.', 'postgres database ထဲမှာ command လက်ခံဖို့ အသင့်ဖြစ်နေတယ်။ Default prompt မှာ # က ပုံမှန်အားဖြင့် superuser ကို ဆိုလိုတယ်။ သာမန် role ဆို postgres=> လို့ မြင်ရတယ်။')],
      ['postgres-#', p('The statement is unfinished, often because the SQL statement is missing a final semicolon.', 'SQL statement မပြီးသေးတာပါ။ အဆုံးမှာ semicolon မထည့်ရသေးလို့ ဖြစ်တာများတယ်။')],
      ['\\r / Ctrl+C', p('Use the backslash r command to clear a pending statement, or press Ctrl+C if you are stuck in an open quote. Run \\q to leave psql before retrying an OS terminal command.', 'ရိုက်လက်စ statement ကို \\r နဲ့ ရှင်းပါ။ Quote မပိတ်ဘဲ ကျန်နေရင် Ctrl+C နှိပ်ပါ။ OS terminal command ပြန်ရိုက်ဖို့ \\q နဲ့ psql ထဲက ထွက်ပါ။')],
    ],
  },
  command('create-database', p('Create a practice database', 'လေ့ကျင့်ဖို့ Database တစ်ခု ဆောက်ခြင်း'),
    p('Inside psql, run CREATE DATABASE as a role with database-creation permission. Then run the psql command \\c to switch databases without leaving the client. Use the practice database for the following lessons.', 'psql ထဲမှာ database ဆောက်ခွင့်ရှိတဲ့ role နဲ့ CREATE DATABASE ကို run ပါ။ ပြီးရင် client ထဲက မထွက်ဘဲ database ပြောင်းဖို့ psql command ဖြစ်တဲ့ \\c ကို သုံးပါ။ နောက်သင်ခန်းစာတွေကို ဒီ database ထဲမှာ စမ်းပါ။'),
    sqlLines('CREATE DATABASE learning_db;', '\\c learning_db'), {
      expected: p('CREATE DATABASE, followed by a message that you are connected to learning_db. The prompt starts with learning_db.', 'CREATE DATABASE လို့ ပြပြီး learning_db ကို ချိတ်ထားကြောင်း ပေါ်မယ်။ Prompt က learning_db နဲ့ စမယ်။'),
      check: p('If learning_db already exists, run just \\c learning_db. A local client can see “connection refused” when nothing is listening on the chosen address, and “password authentication failed” when the role or password is wrong for that installation.', 'learning_db ရှိပြီးသားဆို \\c learning_db ပဲ run ပါ။ connection refused ဆိုရင် ရွေးထားတဲ့ address မှာ server လက်ခံနေလား စစ်ပါ။ password authentication failed ဆိုရင် ချိတ်ထားတဲ့ server အတွက် role နဲ့ password ကို ပြန်စစ်ပါ။'),
    }),
];

export const postgresCommands = page('psql-commands', p('Inspect databases, roles, schemas, and tables', 'psql နဲ့ Databases၊ Roles၊ Schemas နဲ့ Tables စစ်ခြင်း'),
  p(
    'Type these commands inside psql after connecting. Backslash commands are processed by the psql client and end at Enter. SQL statements such as SELECT are sent to the server and normally end with a semicolon.',
    'ချိတ်ဆက်ပြီးရင် ဒီ command တွေကို psql ထဲမှာ ရိုက်ပါ။ Backslash နဲ့ စတဲ့ command တွေကို psql client က ကိုင်တွယ်ပြီး Enter နှိပ်ရုံနဲ့ run တယ်။ SELECT လို SQL statement တွေကိုတော့ server ဆီပို့ပြီး အဆုံးမှာ semicolon ထည့်ပါတယ်။'
  ),
  [
    command('connection', p('Where am I connected?', 'ဘယ် Server၊ ဘယ် Database ကို ချိတ်ထားလဲ'),
      p('The connection summary shows the current database, role, and connection address or socket.', 'လက်ရှိ database၊ role နဲ့ ချိတ်ထားတဲ့ address သို့မဟုတ် socket ကို ပြပေးတယ်။'), '\\conninfo'),
    command('databases', p('List databases', 'Database စာရင်းကြည့်ခြင်း'),
      p('Shows the databases on this server. Look for learning_db after creating it. The columns and values can vary with your psql and server versions and locale settings.', 'ဒီ server ပေါ်က database စာရင်းကို ပြတယ်။ learning_db ဆောက်ပြီးရင် စာရင်းမှာ ပါမပါ ကြည့်ပါ။ ကိုယ့် psql နဲ့ server version၊ locale settings အလိုက် column နဲ့ တန်ဖိုးတွေ ကွာနိုင်တယ်။'), '\\l', {
        terms: [
          ['Name', p('The database name, such as learning_db.', 'learning_db လို database နာမည်ပါ။')],
          ['Owner', p('The role that owns the database.', 'Database ကို ပိုင်ဆိုင်တဲ့ role ပါ။')],
          ['Encoding', p('The character encoding. UTF8 supports Burmese text.', 'စာလုံးတွေ သိမ်းတဲ့ encoding ပါ။ UTF8 နဲ့ မြန်မာစာ သိမ်းလို့ရတယ်။')],
          ['Locale Provider', p('Where the database gets its locale behavior. Examples include libc (operating system), icu, and builtin (PostgreSQL).', 'စာသားဆိုင်ရာ locale စည်းမျဉ်းတွေကို ဘယ်ကယူလဲ ပြတယ်။ libc က OS၊ icu က ICU library၊ builtin က PostgreSQL ရဲ့ ကိုယ်ပိုင်စနစ်ပါ။')],
          ['Collate', p('The locale setting for comparing and sorting text.', 'စာသားတွေကို ယှဉ်တာနဲ့ အစဉ်လိုက်စီတာအတွက် locale setting ပါ။')],
          ['Ctype', p('The locale setting for character classification and case conversion.', 'စာလုံးအမျိုးအစား ခွဲတာနဲ့ အကြီးအသေး ပြောင်းတာအတွက် locale setting ပါ။')],
          ['Locale', p('The locale identifier for providers that use this field, such as ICU. It may be blank for libc.', 'ICU လို ဒီ field သုံးတဲ့ provider ရဲ့ locale identifier ပါ။ libc သုံးရင် လွတ်နေနိုင်တယ်။')],
          ['ICU Rules', p('Custom ICU collation rules, if configured.', 'သီးသန့်သတ်မှတ်ထားရင် ICU စာစီစည်းမျဉ်းတွေကို ပြတယ်။')],
          ['Access privileges', p('Explicit database privileges for roles, such as CONNECT or CREATE. A blank cell can mean the built-in defaults apply.', 'Role တွေအတွက် CONNECT၊ CREATE လို database ခွင့်ပြုချက်တွေကို ပြတယ်။ ကွက်လပ်ဆိုရင် မူလ default ခွင့်ပြုချက်တွေ သက်ရောက်နေနိုင်တယ်။')],
        ],
      }),
    command('database-count', p('Count the databases', 'Database အရေအတွက် ရေတွက်ခြင်း'),
      p('This SQL query counts the database entries on the connected server, including template databases.', 'ဒီ SQL query က ချိတ်ထားတဲ့ server ပေါ်မှာ template databases တွေပါ အပါအဝင် database စာရင်းကို ရေတွက်တယ်။'),
      'SELECT count(*) AS database_count FROM pg_database;'),
    command('roles', p('List roles', 'Role စာရင်းကြည့်ခြင်း'),
      p('The Role name column contains role names. The Attributes column summarizes the special settings of each role. The built-in administrator on a typical local installation may show the attributes below. Run \\du postgres to inspect just that role.', 'Role name column မှာ role နာမည်တွေ ပါတယ်။ Attributes column က role တစ်ခုချင်းရဲ့ အထူးလုပ်ပိုင်ခွင့်တွေကို အကျဉ်းပြတယ်။ ပုံမှန် local setup မှာ postgres administrator အတွက် အောက်က attributes တွေ မြင်ရနိုင်တယ်။ ဒီ role တစ်ခုတည်း စစ်ဖို့ \\du postgres ကို သုံးပါ။'), '\\du', {
        expected: p('Example row: postgres | Superuser, Create role, Create DB, Replication, Bypass RLS', 'နမူနာ row — postgres | Superuser, Create role, Create DB, Replication, Bypass RLS'),
        terms: [
          ['Superuser', p('Bypasses database permission checks except the right to log in.', 'Login လုပ်ခွင့်စစ်တာကလွဲပြီး database permission စစ်ဆေးမှုတွေကို ကျော်နိုင်တယ်။')],
          ['Create role', p('Can create roles and manage eligible roles it administers.', 'Role အသစ် ဆောက်နိုင်ပြီး ကိုယ်စီမံခွင့်ရှိတဲ့ roles တွေကို စီမံနိုင်တယ်။')],
          ['Create DB', p('Can create databases.', 'Database အသစ် ဆောက်နိုင်တယ်။')],
          ['Replication', p('Can start streaming replication when its login and connection rules also allow it.', 'Login နဲ့ connection rules က ခွင့်ပြုရင် streaming replication စတင်နိုင်တယ်။')],
          ['Bypass RLS', p('Bypasses row-level security policies, which can otherwise restrict access to individual rows.', 'Row တစ်ကြောင်းချင်းအလိုက် access ကန့်သတ်နိုင်တဲ့ Row-Level Security policies တွေကို ကျော်နိုင်တယ်။')],
          ['LOGIN / Cannot login', p('LOGIN lets a role authenticate if its connection rules allow it. A role without LOGIN can still group privileges.', 'Connection rules က ခွင့်ပြုရင် LOGIN ပါတဲ့ role နဲ့ ဝင်လို့ရတယ်။ LOGIN မပါတဲ့ role ကို ခွင့်ပြုချက်တွေ အုပ်စုဖွဲ့ဖို့ သုံးလို့ရတယ်။')],
        ],
      }),
    command('schemas', p('List schemas', 'Schema စာရင်းကြည့်ခြင်း'),
      p('Shows schemas in the current database. A schema is a namespace for objects such as tables. The examples use the usual public schema.', 'လက်ရှိ database ထဲက schema တွေကို ပြတယ်။ Schema က table လို database objects တွေကို နာမည်ခွဲပြီး စီပေးတဲ့နေရာပါ။ ဥပမာတွေမှာ ပုံမှန် public schema ကို သုံးမယ်။'), '\\dn'),
    command('tables', p('List visible tables', 'Tables စာရင်းကြည့်ခြင်း'),
      p('Shows tables visible from the current schema search path. Run \\dt public.* to explicitly list tables in public. If the database is empty, there may be no tables to show.', 'လက်ရှိ schema search path ကနေ မြင်ရတဲ့ tables ကို ပြတယ်။ public ထဲက table တွေကို သီးသန့်ကြည့်ဖို့ \\dt public.* လို့ ရိုက်ပါ။ Database အသစ်ဆို ပြစရာ table မရှိသေးတာ ဖြစ်နိုင်တယ်။'), '\\dt'),
    command('describe', p('Inspect a table’s columns and constraints', 'Table ရဲ့ Columns နဲ့ Constraints စစ်ခြင်း'),
      p('After creating courses in the setup lesson, this displays its columns, data types, defaults, and constraints. Replace courses with the table you want to inspect.', 'Setup မှာ courses ဆောက်ပြီးရင် ဒီ command က columns၊ data types၊ defaults နဲ့ constraints တွေကို ပြတယ်။ တခြား table ကြည့်ချင်ရင် courses နေရာမှာ အဲဒီနာမည်ကို ထည့်ပါ။'), '\\d courses'),
    command('version', p('Check the connected server version', 'ချိတ်ထားတဲ့ Server Version စစ်ခြင်း'),
      p('The SQL function version() reports the server version. In your OS terminal, psql --version reports the client version.', 'SQL function version() က server version ကို ပြတယ်။ OS terminal မှာ ရိုက်တဲ့ psql --version က client version ကို ပြတာပါ။'), 'SELECT version();'),
    command('help', p('Find help or exit', 'Help ကြည့်ခြင်းနဲ့ psql ကနေ ထွက်ခြင်း'),
      p('Try these one at a time. Use \\q last because it returns you to the operating-system terminal. If command output opens in a pager, press q by itself to close the pager and stay in psql.', 'တစ်ကြောင်းချင်း run ကြည့်ပါ။ \\q က OS terminal ကို ပြန်ပို့လို့ နောက်ဆုံးမှ သုံးပါ။ Output ကို pager နဲ့ ပြနေတယ်ဆို q တစ်လုံးတည်း နှိပ်ရင် pager ပိတ်ပြီး psql ထဲမှာ ဆက်ရှိနေမယ်။'),
      sqlLines('\\?', '\\h SELECT', '\\q'), {
        terms: [
          ['\\?', p('Lists psql backslash commands.', 'psql ရဲ့ Backslash commands စာရင်းကို ပြတယ်။')],
          ['\\h SELECT', p('Shows syntax help for the SQL SELECT statement.', 'SQL SELECT ရဲ့ ရေးပုံရေးနည်းကို ပြတယ်။')],
          ['\\q', p('Closes psql and returns to your terminal.', 'psql ကို ပိတ်ပြီး terminal ဆီ ပြန်သွားတယ်။')],
        ],
      }),
  ], [psql, ['PostgreSQL · Database catalog', pg + 'catalog-pg-database.html'], ['PostgreSQL · Role attributes', pg + 'role-attributes.html'], ['PostgreSQL · Server information functions', pg + 'functions-info.html']]);

export const postgresCrud = page('crud', p('SQL basics and CRUD with one table', 'SQL အခြေခံနဲ့ Table တစ်ခုမှာ CRUD စမ်းခြင်း'),
  p('If you exited psql in the previous lesson, reconnect from your terminal with the command for your operating system in the setup lesson. Inside psql, run \\c learning_db. Then run each SQL block in order to create a users table and practice Create, Read, Update, and Delete on one sample row.', 'အရင်သင်ခန်းစာမှာ psql ကနေ ထွက်ထားရင် setup သင်ခန်းစာက ကိုယ့် OS အတွက် command နဲ့ terminal ကနေ ပြန်ချိတ်ပါ။ psql ထဲ ရောက်ရင် \\c learning_db ကို run ပါ။ ပြီးရင် SQL block တွေကို အစဉ်လိုက် run ပြီး users table ဆောက်ပါ။ နမူနာ row တစ်ကြောင်းကို ထည့်၊ ဖတ်၊ ပြင်၊ ဖျက်ကြည့်မယ်။'),
  [
    command('create-table', p('Create the users table', 'users Table ဆောက်ခြင်း'),
      p('CREATE TABLE defines the table and its columns. The column types control the kinds of values each column accepts, while constraints set additional rules.', 'CREATE TABLE နဲ့ table နာမည်၊ columns တွေ သတ်မှတ်တယ်။ Column type က ဘယ်လိုတန်ဖိုးတွေ လက်ခံမလဲ သတ်မှတ်ပြီး constraint က ထပ်လိုတဲ့ စည်းကမ်းတွေ သတ်မှတ်တယ်။'),
      sqlLines('CREATE TABLE users (', '  id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,', '  name varchar(100) NOT NULL,', '  email text NOT NULL UNIQUE', ');'), {
        terms: [
          ['integer / IDENTITY / PRIMARY KEY', p('id is a whole number. PostgreSQL generates it when inserting a row. The primary key makes each id unique and non-null.', 'id က ကိန်းပြည့်ပါ။ Row ထည့်တဲ့အခါ PostgreSQL က id ကို ထုတ်ပေးတယ်။ Primary key ကြောင့် id က မထပ်ရသလို NULL လည်း မဖြစ်ရဘူး။')],
          ['SERIAL PRIMARY KEY', p('You may also see this shorthand in older examples. SERIAL uses a sequence to supply integer IDs. IDs generated by sequences can have gaps.', 'အရင် SQL နမူနာတွေမှာ ဒီရေးနည်းကိုလည်း တွေ့နိုင်တယ်။ SERIAL က sequence နဲ့ ကိန်းပြည့် ID ထုတ်ပေးတယ်။ Sequence နဲ့ ထုတ်တဲ့ ID တွေ ကြားမှာ နံပါတ်ကျော်တာ ရှိနိုင်တယ်။')],
          ['varchar(100) / NOT NULL', p('name is text of at most 100 characters, and a value is required.', 'name က စာလုံးရေ 100 အထိ ထည့်လို့ရတဲ့ စာသားဖြစ်ပြီး တန်ဖိုး မဖြစ်မနေ ထည့်ရမယ်။')],
          ['text / UNIQUE', p('email is text without a declared length limit. NOT NULL requires a value and UNIQUE prevents duplicate emails.', 'email က စာလုံးရေ ကန့်သတ်ချက် မသတ်မှတ်ထားတဲ့ စာသားပါ။ NOT NULL ကြောင့် တန်ဖိုးလိုပြီး UNIQUE ကြောင့် email ထပ်လို့မရဘူး။')],
          ['numeric(10, 2) / boolean / date', p('Other common types include exact decimals such as prices, true/false flags, and dates. The courses table uses numeric(10, 2) for the course fee.', 'ဈေးနှုန်းလို တိကျတဲ့ ဒဿမကိန်း၊ true/false နဲ့ ရက်စွဲတွေအတွက် numeric၊ boolean နဲ့ date တို့လည်း သုံးလို့ရတယ်။ courses table မှာ သင်တန်းကြေးအတွက် numeric(10, 2) သုံးထားတယ်။')],
        ],
        check: p('If users already exists from another lesson, use a fresh practice database or choose a different table name consistently in all of the examples.', 'users table က အရင်သင်ခန်းစာကတည်းက ရှိနေတယ်ဆိုရင် practice database အသစ်မှာ စမ်းပါ။ ဒါမှမဟုတ် ဥပမာအားလုံးမှာ table နာမည်ကို တစ်မျိုးတည်း ပြောင်းသုံးပါ။'),
      }),
    command('insert', p('Create a row with INSERT', 'INSERT နဲ့ Row ထည့်ခြင်း'),
      p('INSERT INTO users (name, email) selects the target table and two columns. VALUES supplies their values in that order. PostgreSQL generates id, and RETURNING shows the inserted row.', 'INSERT INTO users (name, email) က တန်ဖိုးထည့်မယ့် table နဲ့ column နှစ်ခုကို ရွေးတယ်။ VALUES က ရွေးထားတဲ့အစဉ်အတိုင်း တန်ဖိုးပေးတယ်။ PostgreSQL က id ထုတ်ပေးပြီး RETURNING က ထည့်ပြီးသား row ကို ပြတယ်။'),
      sqlLines("INSERT INTO users (name, email) VALUES ('Nyi', 'nyi@example.com')", 'RETURNING id, name, email;'),
      { expected: p('One row is returned and psql reports INSERT 0 1. The final 1 is the inserted row count.', 'Row တစ်ကြောင်း ပြန်လာပြီး psql မှာ INSERT 0 1 လို့ ပြမယ်။ နောက်ဆုံးက 1 က ထည့်လိုက်တဲ့ row အရေအတွက်ပါ။') }),
    command('inspect-users', p('Find users and inspect its structure', 'users Table ကို ရှာပြီး ဖွဲ့စည်းပုံ စစ်ခြင်း'),
      p('In psql, \\dt lists visible tables and \\d users shows the columns, types, defaults, and constraints of users. Run the commands one line at a time.', 'psql ထဲမှာ \\dt က မြင်ရတဲ့ tables ကို ပြတယ်။ \\d users က users table ရဲ့ columns၊ data types၊ default တန်ဖိုးနဲ့ constraints တွေကို ပြတယ်။ တစ်ကြောင်းချင်း run ပါ။'),
      sqlLines('\\dt', '\\d users')),
    command('select', p('Read rows with SELECT', 'SELECT နဲ့ Rows ဖတ်ခြင်း'),
      p('SELECT names the columns to display. FROM names the table. WHERE limits the result to the row matching the sample email. To see every row and column in this small practice table, try SELECT * FROM users; separately.', 'SELECT က ပြမယ့် columns ကို ရွေးတယ်။ FROM က ဖတ်မယ့် table ကို ရွေးတယ်။ WHERE က နမူနာ email နဲ့ ကိုက်တဲ့ row ကိုပဲ ပြတယ်။ ဒီ practice table ရဲ့ row နဲ့ column အားလုံးကို ကြည့်ချင်ရင် SELECT * FROM users; ကို သီးသန့် run ပါ။'),
      sqlLines('SELECT id, name, email', 'FROM users', "WHERE email = 'nyi@example.com';")),
    command('update', p('Change a row with UPDATE', 'UPDATE နဲ့ Row ပြင်ခြင်း'),
      p('UPDATE chooses the table. SET assigns the new value. WHERE matches only the sample email. Reuse the SELECT above to confirm the target before running the update. RETURNING shows what was changed.', 'UPDATE က table ကို ရွေးတယ်။ SET က ပြောင်းမယ့်တန်ဖိုးကို သတ်မှတ်တယ်။ WHERE က နမူနာ email နဲ့ ကိုက်တဲ့ row ကိုပဲ ရွေးတယ်။ မပြင်ခင် အပေါ်က SELECT နဲ့ ရည်ရွယ်တဲ့ row ဟုတ်မဟုတ် စစ်ပါ။ RETURNING က ပြင်ပြီးသား row ကို ပြတယ်။'),
      sqlLines("UPDATE users SET name = 'Nyi Nyi'", "WHERE email = 'nyi@example.com'", 'RETURNING id, name, email;'),
      { expected: p('The returned name is Nyi Nyi and psql reports UPDATE 1.', 'ပြန်လာတဲ့ name က Nyi Nyi ဖြစ်ပြီး psql မှာ UPDATE 1 လို့ ပြမယ်။') }),
    command('delete', p('Remove a row with DELETE', 'DELETE နဲ့ Row ဖျက်ခြင်း'),
      p('DELETE FROM selects the table. WHERE limits the deletion to the sample email. Preview the target with SELECT before running this. Without WHERE, DELETE targets every row in the table.', 'DELETE FROM က table ကို ရွေးတယ်။ WHERE ကြောင့် နမူနာ email နဲ့ ကိုက်တဲ့ row ကိုပဲ ဖျက်တယ်။ မဖျက်ခင် SELECT နဲ့ ကိုယ်ဖျက်ချင်တဲ့ row ဟုတ်မဟုတ် ကြည့်ပါ။ WHERE ချန်ထားရင် table ထဲက row အားလုံးကို ဖျက်မယ်။'),
      sqlLines('DELETE FROM users', "WHERE email = 'nyi@example.com'", 'RETURNING id, name, email;'),
      { expected: p('psql reports DELETE 1. Running the sample SELECT again reports zero matching rows.', 'psql မှာ DELETE 1 လို့ ပြမယ်။ နမူနာ SELECT ကို ပြန် run ရင် ကိုက်ညီတဲ့ row မရှိတော့ဘူး။') }),
    command('drop-table', p('Try DROP TABLE in a transaction', 'Transaction ထဲမှာ DROP TABLE စမ်းခြင်း'),
      p('Run this optional block with the practice users table. DROP TABLE removes the table structure and its rows. The ROLLBACK in this example restores the table. Run the example only after finishing the row-level CRUD above.', 'အပေါ်က row အလိုက် CRUD လုပ်ပြီးမှ လေ့ကျင့်ထားတဲ့ users table နဲ့ ဒီ block ကို စမ်းနိုင်တယ်။ DROP TABLE က table ဖွဲ့စည်းပုံနဲ့ rows တွေကို ဖျက်တယ်။ ဒီနမူနာမှာ ROLLBACK ပါလို့ table ပြန်ရမယ်။'),
      sqlLines('BEGIN;', 'DROP TABLE users;', 'ROLLBACK;'),
      { expected: p('Run \\dt users after ROLLBACK to see that the table is still there.', 'ROLLBACK ပြီးရင် \\dt users နဲ့ table ဆက်ရှိနေတာ စစ်ပါ။') }),
  ],
  [['PostgreSQL · The SQL tutorial', pg + 'tutorial-sql.html'], ['PostgreSQL · Data types', pg + 'datatype.html'], ['PostgreSQL · Serial types', pg + 'datatype-numeric.html#DATATYPE-SERIAL'], ['PostgreSQL · Constraints', pg + 'ddl-constraints.html'], ['PostgreSQL · RETURNING', pg + 'dml-returning.html'], ['PostgreSQL · DROP TABLE', pg + 'sql-droptable.html']]);
