import { p, page, part } from './content.js';

const pg = 'https://www.postgresql.org/docs/19/';
const lines = (...code) => code.join('\n');

export const postgresRoles = page('roles-and-ownership',
  p('PostgreSQL users, roles, and ownership', 'PostgreSQL User၊ Role နဲ့ Ownership'),
  p(
    'Use a local PostgreSQL server on port 5432. Start as the administrator postgres and use a fresh practice database named mydb and a new login role named nyinyizin. Run the sections in order. The psql command starts from your OS terminal. SQL and the backslash commands go inside psql.',
    'Port 5432 နဲ့ run နေတဲ့ local PostgreSQL server မှာ လိုက်စမ်းပါ။ Administrator role postgres နဲ့ စပြီး လေ့ကျင့်ဖို့ mydb database အသစ်နဲ့ nyinyizin login role အသစ်ကို သုံးမယ်။ အပိုင်းတွေကို အစဉ်လိုက် လုပ်ပါ။ psql ဖွင့်တဲ့ command ကို OS terminal မှာ ရိုက်ပြီး SQL နဲ့ backslash commands ကို psql ထဲမှာ ရိုက်ပါ။'
  ), [
    part('admin-login', p('Open psql as postgres', 'postgres နဲ့ psql ဝင်ခြင်း'),
      p(
        'Run this in your terminal. Use the postgres login from setup, and enter its password if prompted. If your installation uses a different administrator role, use that role consistently, including when restoring ownership in the last section. Use a different pair of names throughout if mydb or nyinyizin is already in use.',
        'ဒီ command ကို terminal မှာ ရိုက်ပါ။ Setup မှာ သုံးခဲ့တဲ့ postgres role နဲ့ ဝင်ပြီး password တောင်းရင် ထည့်ပါ။ ကိုယ့်စက်မှာ administrator role နာမည် ကွာရင် နောက်ဆုံး owner ပြန်ပြောင်းတဲ့ အဆင့်အပါအဝင် အဲဒီ role ကို တစ်လျှောက်လုံး သုံးပါ။ mydb သို့မဟုတ် nyinyizin ရှိပြီးသားဆိုရင် နမူနာတစ်လျှောက်လုံး နာမည်အသစ်တွေ သုံးပါ။'
      ), 'psql -h localhost -p 5432 -U postgres -d postgres'),
    {
      ...part('create-user', p('Create a login role and set its password', 'Login Role ဆောက်ပြီး Password သတ်မှတ်ခြင်း'),
        p(
          'Run these lines inside psql. CREATE USER creates a role with LOGIN enabled. The password prompt asks you to enter the password twice without displaying it. Check the new role with the last line.',
          'ဒီ command တွေကို psql ထဲမှာ ရိုက်ပါ။ CREATE USER က LOGIN ပါတဲ့ role ဆောက်ပေးတယ်။ Password ကို နှစ်ခါရိုက်ရပြီး ရိုက်နေတဲ့ စာလုံးတွေ မပေါ်ပါဘူး။ နောက်ဆုံးတစ်ကြောင်းနဲ့ role အသစ် ရှိမရှိ စစ်ပါ။'
        ), lines('CREATE USER nyinyizin;', '\\password nyinyizin', '\\du nyinyizin')),
      terms: [
        ['CREATE USER … WITH PASSWORD', p('SQL also accepts a password in CREATE USER. Use \\password for this terminal exercise so the password does not appear in the SQL you type.', 'CREATE USER မှာ WITH PASSWORD နဲ့လည်း password သတ်မှတ်လို့ရတယ်။ Terminal လေ့ကျင့်ခန်းမှာ password ကို ရိုက်တဲ့ SQL ထဲ မပါစေဖို့ \\password ကို သုံးပါ။')],
      ],
    },
    part('role-attributes', p('Grant and remove individual role attributes', 'Role Attribute တစ်ခုချင်း ပေးခြင်းနဲ့ ပြန်ဖြုတ်ခြင်း'),
      p(
        'This optional example grants CREATEDB to create databases and CREATEROLE to create and manage eligible roles. Inspect the changes with \\du, then remove both attributes before proceeding. Changing these attributes does not change the role’s LOGIN setting.',
        'ဒီအပိုင်းကို စမ်းချင်ရင် database ဆောက်ခွင့်အတွက် CREATEDB၊ သက်ဆိုင်တဲ့ role တွေ ဆောက်ဖို့နဲ့ စီမံဖို့ CREATEROLE ပေးကြည့်ပါ။ \\du နဲ့ ရလဒ်စစ်ပြီး နောက်အဆင့်မသွားခင် နှစ်ခုလုံး ပြန်ဖြုတ်ပါ။ ဒီ attributes တွေ ပြောင်းတာက role ရဲ့ LOGIN setting ကို မပြောင်းပါဘူး။'
      ), lines(
        'ALTER USER nyinyizin WITH CREATEDB CREATEROLE;', '\\du nyinyizin',
        'ALTER USER nyinyizin WITH NOCREATEDB NOCREATEROLE;',
      )),
    part('superuser', p('Read and reset the SUPERUSER attribute', 'SUPERUSER Attribute ကို နားလည်ပြီး ပြန်ဖြုတ်ခြင်း'),
      p(
        'A superuser bypasses PostgreSQL permission checks except the right to log in. This optional example is for a disposable local server. In one transaction as postgres, grant the attribute, inspect it, then reset the elevated attributes before committing. The temporary grant stays inside that transaction.',
        'Superuser က login လုပ်ခွင့် စစ်တာကလွဲပြီး PostgreSQL permission စစ်ဆေးမှုတွေကို ကျော်နိုင်တယ်။ ဖျက်ပစ်လို့ရတဲ့ local စမ်းသပ် server မှာ ဒီဥပမာကို စမ်းနိုင်တယ်။ postgres နဲ့ transaction တစ်ခုထဲမှာ attribute ပေး၊ စစ်ပြီး commit မလုပ်ခင် အဆင့်မြင့် attributes တွေကို ပြန်ဖြုတ်ပါ။ ယာယီပေးထားတဲ့ superuser ခွင့်က အဲဒီ transaction ထဲမှာပဲ သက်ရောက်တယ်။'
      ), lines(
        'BEGIN;', 'ALTER USER nyinyizin WITH SUPERUSER;', '\\du nyinyizin',
        'ALTER USER nyinyizin WITH NOSUPERUSER NOCREATEROLE NOCREATEDB NOREPLICATION NOBYPASSRLS;', 'COMMIT;', '\\du nyinyizin',
      )),
    {
      ...part('database-owner', p('Create mydb and set its owner', 'mydb ဆောက်ပြီး Owner သတ်မှတ်ခြင်း'),
        p(
          'Still connected as postgres, create the practice database and transfer the database object to nyinyizin. The role can own this database with its elevated attributes removed. Confirm the Owner column shows nyinyizin and leave psql with \\q.',
          'postgres နဲ့ ချိတ်ထားတုန်း practice database ဆောက်ပြီး owner ကို nyinyizin ဆီ လွှဲပါ။ အဆင့်မြင့် attributes တွေ ဖြုတ်ထားလည်း ဒီ database ကို nyinyizin ပိုင်လို့ရတယ်။ Owner column မှာ nyinyizin ပေါ်လာတာ စစ်ပြီး \\q နဲ့ psql ကနေ ထွက်ပါ။'
        ), lines('CREATE DATABASE mydb;', 'ALTER DATABASE mydb OWNER TO nyinyizin;', '\\l mydb', '\\q')),
      terms: [
        ['ALTER DATABASE … OWNER TO', p('Transfers ownership of the database object. Tables within it have their own owners.', 'Database ကိုယ်တိုင်ရဲ့ owner ကို ပြောင်းပေးတယ်။ Database ထဲက table တွေမှာတော့ သူတို့ကိုယ်ပိုင် owner ရှိတယ်။')],
      ],
    },
    {
      ...part('user-login', p('Connect as nyinyizin', 'nyinyizin နဲ့ ပြန်ဝင်ခြင်း'),
        p(
          'Run this in the OS terminal, then enter the password you set for nyinyizin. The default prompt for this ordinary role is mydb=>.',
          'OS terminal မှာ ဒီ command ရိုက်ပြီး nyinyizin အတွက် သတ်မှတ်ထားတဲ့ password ကို ထည့်ပါ။ အဆင့်မြင့် attributes မရှိတဲ့ ဒီ role နဲ့ ဝင်ရင် default prompt က mydb=> ပါ။'
        ), 'psql -h localhost -p 5432 -U nyinyizin -d mydb'),
      terms: [
        ['psql', p('Starts the PostgreSQL command-line client.', 'PostgreSQL command-line client ကို ဖွင့်တယ်။')],
        ['-h localhost', p('Connects to the server on this computer over TCP.', 'ကိုယ့်စက်ပေါ်က server ကို TCP နဲ့ ချိတ်တယ်။')],
        ['-p 5432', p('Uses TCP port 5432.', 'TCP port 5432 ကို သုံးတယ်။')],
        ['-U nyinyizin', p('Authenticates as the login role nyinyizin.', 'nyinyizin login role နဲ့ ဝင်တယ်။')],
        ['-d mydb', p('Connects directly to mydb.', 'mydb database ကို တန်းချိတ်တယ်။')],
      ],
    },
    part('owned-table', p('Make a table owned by the new role', 'Role အသစ်ပိုင်တဲ့ Table တစ်ခု ဆောက်ခြင်း'),
      p(
        'Inside mydb, verify the connection and create a small disposable table as nyinyizin. Its owner is the role that creates it. Use \\dt to verify the owner, then exit with \\q.',
        'mydb ထဲမှာ connection စစ်ပြီး nyinyizin နဲ့ စမ်းသပ် table တစ်ခု ဆောက်ပါ။ ဆောက်တဲ့ role က ဒီ table ရဲ့ owner ဖြစ်တယ်။ \\dt နဲ့ owner စစ်ပြီး \\q နဲ့ ထွက်ပါ။'
      ), lines(
        '\\conninfo', 'SELECT current_user, current_database();',
        'CREATE TABLE public.role_demo (id integer PRIMARY KEY);', '\\dt public.role_demo', '\\q',
      )),
    part('return-as-admin', p('Reconnect as postgres to mydb', 'mydb ကို postgres နဲ့ ပြန်ဝင်ခြင်း'),
      p('Run this in the OS terminal before restoring ownership and removing the practice role.', 'Owner ပြန်ပြောင်းပြီး စမ်းသပ် role ကို မဖျက်ခင် OS terminal မှာ ဒီ command ရိုက်ပါ။'),
      'psql -h localhost -p 5432 -U postgres -d mydb'),
    {
      ...part('cleanup', p('Restore ownership and remove the login role', 'Owner ပြန်ပြောင်းပြီး Login Role ဖျက်ခြင်း'),
        p(
          'Run these lines inside mydb as postgres after the nyinyizin session is closed. The first ALTER DATABASE restores the database owner. REASSIGN OWNED then transfers objects still owned by the practice role, including role_demo. Verify the table ownership before dropping the role.',
          'nyinyizin session ကနေ ထွက်ပြီးရင် mydb ထဲကို postgres နဲ့ ဝင်ထားချိန် ဒီ command တွေ run ပါ။ ALTER DATABASE က database owner ကို ပြန်ပြောင်းတယ်။ REASSIGN OWNED က role_demo အပါအဝင် စမ်းသပ် role ပိုင်နေသေးတဲ့ objects တွေကို လွှဲပေးတယ်။ Role မဖျက်ခင် table owner ကို စစ်ပါ။'
        ), lines(
          'ALTER DATABASE mydb OWNER TO postgres;', 'REASSIGN OWNED BY nyinyizin TO postgres;',
          '\\dt public.role_demo', 'DROP USER nyinyizin;', '\\du nyinyizin',
        )),
      terms: [
        ['REASSIGN OWNED', p('Changes ownership of the old role’s objects in the current database and shared objects such as databases and tablespaces. In this exercise the source is the new practice role.', 'လက်ရှိ database ထဲက source role ပိုင် objects တွေနဲ့ databases၊ tablespaces လို shared objects တွေရဲ့ owner ကို ပြောင်းတယ်။ ဒီဥပမာမှာ source က အခုမှ ဆောက်ထားတဲ့ စမ်းသပ် role ပါ။')],
        ['DROP USER', p('Removes the role. PostgreSQL refuses if database objects or privileges still depend on it. If this happens outside the exercise, inspect the reported dependencies before retrying.', 'Role ကို ဖျက်တယ်။ ဒီ role ကို မှီနေတဲ့ database objects သို့မဟုတ် privileges ရှိရင် PostgreSQL က ဖျက်ခွင့်မပေးဘူး။ လေ့ကျင့်ခန်းပြင်ပမှာ ဒီလိုဖြစ်ရင် ပြထားတဲ့ dependencies တွေကို စစ်ပြီးမှ ပြန်စမ်းပါ။')],
      ],
    },
  ], [
    ['PostgreSQL · CREATE USER', pg + 'sql-createuser.html'],
    ['PostgreSQL · Role attributes', pg + 'role-attributes.html'],
    ['PostgreSQL · ALTER USER', pg + 'sql-alteruser.html'],
    ['PostgreSQL · ALTER DATABASE', pg + 'sql-alterdatabase.html'],
    ['PostgreSQL · REASSIGN OWNED', pg + 'sql-reassign-owned.html'],
    ['PostgreSQL · DROP USER', pg + 'sql-dropuser.html'],
  ]);
