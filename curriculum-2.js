/* Curriculum part 2: semantic HTML, selectors, colors & fonts, box model, flexbox, responsive, capstone */
var CURRICULUM = window.CURRICULUM || [];
CURRICULUM.push(
{
  id: 'semantic-html',
  nav: 'الـ Semantic HTML',
  title: 'الـ Semantic HTML: خلي الكود بيتكلم',
  subtitle: 'header و nav و main و section و article و aside و footer, ليه المعنى أهم من الشكل',
  blocks: [
    { type: 'p', text: 'لحد دلوقتي عرفت tags كتير، بس في ناس بتكتب الصفحة كلها بـ `<div>` و `<span>` وبعدين تعملها شكل بالـ CSS. شكلياً ده بيشتغل، بس بيضيع معلومة مهمة: المتصفح ومحركات البحث وقارئات الشاشة مش فاهمين كل جزء بيعمل إيه. الـ Semantic HTML بيحل ده: tags اسمها بيوصف دورها.' },
    { type: 'code', code: `<body>
  <header>شعار الموقع والقايمة الرئيسية</header>
  <nav>لينكات التنقل</nav>
  <main>
    <section>قسم الأخبار</section>
    <article>مقال كامل لوحده</article>
  </main>
  <aside>شريط جانبي: إعلانات ولينكات</aside>
  <footer>حقوق الملكية وتواصل</footer>
</body>` },
    { type: 'h', text: 'أشهر الـ semantic tags' },
    { type: 'table', head: ['الـ tag', 'دوره'], rows: [
      ['<header>', 'رأس الصفحة أو رأس قسم: شعار وعنوان'],
      ['<nav>', 'لينكات التنقل الرئيسية'],
      ['<main>', 'المحتوى الأساسي الفريد للصفحة (مرة واحدة بس)'],
      ['<section>', 'قسم موضوعي من المحتوى، عادة ليه عنوان'],
      ['<article>', 'محتوى مستقل بذاته: مقال، خبر، منتج'],
      ['<aside>', 'محتوى جانبي مرتبط مش أساسي'],
      ['<footer>', 'تذييل: حقوق، تواصل، لينكات إضافية']
    ] },
    { type: 'h', text: 'ليه الموضوع مهم مش شكل بس؟' },
    { type: 'list', items: [
      'الوصول (accessibility): المكفوف بيتنقل بالقارئ الصوتي بين "القايمة" و"المحتوى الرئيسي" مباشرة. صفحة divs مفيهاش الخريطة دي.',
      'محركات البحث (SEO): جوجل بيفهم `<article>` إن ده المحتوى المهم فبيقدمه في النتايج.',
      'قابلية الصيانة: لما ترجع لكودك بعد شهر، `<nav>` أوضح مليون مرة من `<div class="nv1">`.',
      'الشكل لسه بإيدك: الـ semantic tags شكلها الافتراضي بلوك عادي، وانت بتظبطه بـ CSS زي ما تحب.'
    ] },
    { type: 'note', text: 'قاعدة عملية: لو لقيت نفسك بتكتب `div class="header"`، وقف واكتب `<header>` على طول. الـ div مكانه للحاجات اللي مالهاش tag معبر: مجرد علبة تنسيق ليها class.' },
    { type: 'h', text: 'مقارنة سريعة: نفس الصفحة بالطريقتين' },
    { type: 'code', code: `<!-- طريقة الـ div soup: مفيهاش معنى -->
<div class="top">...</div>
<div class="menu">...</div>
<div class="content">...</div>
<div class="bottom">...</div>

<!-- الطريقة الدلالية: الكود بيتكلم -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<footer>...</footer>` },
    { type: 'p', text: 'الاتنين هيظهروا نفس الشكل بالـ CSS. الفرق إن التانية مفهومة لأي حد (وأي برنامج) يقراها.' },
    { type: 'h', text: 'div و span مكانهم فين؟' },
    { type: 'p', text: '`<div>` عنصر عام بلوك، و `<span>` عنصر عام جوه السطر. استخدمهم لما مفيش tag دلالي مناسب: علبة بتحط فيها عناصر عشان تنسقها، أو كلمة جوه جملة عايز تلونها. هما مش وحشين، بس مش أول اختيار.' }
  ],
  quiz: [
    { q: 'عايز تحط محتوى الصفحة الأساسي الفريد. أنهي tag أنسب؟', options: [
      { text: '<section>' },
      { text: '<main>' },
      { text: '<article>' }
    ], answer: 1, explain: '<main> بيلف المحتوى الأساسي للصفحة وبيستخدم مرة واحدة بس. section لأقسام داخله، وarticle لمحتوى مستقل بذاته زي مقال.' },
    { q: 'إيه فايدة الـ Semantic HTML الأساسية؟', options: [
      { text: 'بيخلي الصفحة تتحمل أسرع لأن المتصفح بيتخطى الـ tags العادية' },
      { text: 'بيعمل تصميم أحلى تلقائياً من غير ما تحتاج تكتب CSS كتير' },
      { text: 'بيوصف دور كل جزء للمتصفح وقارئات الشاشة ومحركات البحث' }
    ], answer: 2, explain: 'المعنى هو الموضوع: الوصول والـ SEO وقابلية الصيانة. الشكل الافتراضي مش هو الفرق، انت بتتحكم فيه بـ CSS في الحالتين.' },
    { q: 'عندك شريط جانبي فيه إعلانات ولينكات إضافية مش من صلب المحتوى. تحطه في إيه؟', options: [
      { text: '<aside>' },
      { text: '<header>' },
      { text: '<nav>' }
    ], answer: 0, explain: '<aside> للمحتوى الجانبي المرتبط بس مش الأساسي. <nav> للتنقل الرئيسي بس، و <header> لرأس الصفحة أو القسم.' },
    { q: 'إمتى يكون <div> اختيار صح؟', options: [
      { text: 'أبداً، ممنوع في HTML5 وبيطلع error لو استخدمته في أي صفحة' },
      { text: 'لما مفيش tag دلالي يوصف الحاجة: مجرد علبة تنسيق' },
      { text: 'دايماً بدل أي tag تاني لأنه الأسرع في الكتابة والأبسط في الفهم' }
    ], answer: 1, explain: 'الـ div عنصر عام لأغراض التنسيق لما مفيش معنى أدق. الغلط إنه يبقى أول وآخر اختيار لكل حاجة.' }
  ],
  exercises: [
    { task: 'حول الصفحة الشخصية بتاعتك لـ semantic كاملة: header فيه اسمك، nav فيه لينكات الأقسام، main فيه قسمين section (عني، وشغلي)، و footer فيه تواصلك', code: `<body>
  <header>
    <h1>أحمد</h1>
    <nav>
      <a href="#about">عني</a>
      <a href="#work">شغلي</a>
    </nav>
  </header>
  <main>
    <section id="about">
      <h2>عني</h2>
      <p>نبذة قصيرة عني...</p>
    </section>
    <section id="work">
      <h2>شغلي</h2>
      <p>أهم المشاريع...</p>
    </section>
  </main>
  <footer>
    <p>تابعني على <a href="https://github.com">GitHub</a></p>
  </footer>
</body>`, why: 'ده الهيكل اللي هتبني عليه المشروع الختامي. لاحظ إن الـ nav ممكن تكون جوه header لأنها جزء من رأس الصفحة.' },
    { task: 'الكود ده فيه 3 مشاكل دلالية، اكتشفها: مقال جوه aside، والقايمة الرئيسية جوه footer، والمحتوى الأساسي جوه div class="main"', code: `<!-- المشاكل والحل:
1. المقال المستقل مكانه <article> أو قسم في <main>، مش <aside>
2. قايمة التنقل الرئيسية مكانها <nav>، مش <footer>
3. المحتوى الأساسي مكانه <main> الحقيقي، مش div بكلاس main -->

<article><h2>عنوان المقال</h2><p>...</p></article>
<nav><a href="#">الرئيسية</a></nav>
<main><h1>المحتوى الأساسي</h1></main>`, why: 'المشكلة الدلالية مش غلط برمجي: الصفحة هتشتغل. بس بتضيع الوصول والـ SEO ووضوح الكود. عينك لازم تمسكها زي الغلط البرمجي بالظبط.' }
  ]
},
{
  id: 'css-selectors',
  nav: 'الـ CSS Selectors',
  title: 'الـ CSS Selectors: إزاي توصل لأي عنصر',
  subtitle: 'تلات طرق لإضافة CSS، وأنواع الـ selectors، والـ specificity',
  blocks: [
    { type: 'p', text: 'لحد دلوقتي بنينا المحتوى بـ HTML، والنتيجة صفحة صح بس شكلها زي ورقة وورد قديمة. جاي وقت الـ CSS: اللغة اللي بتحدد شكل كل عنصر. وفكرتها كلها في سؤالين: أنهي عنصر؟ (الـ selector) وعايز فيه إيه؟ (الخصائص).' },
    { type: 'code', code: `h1 {
  color: blue;
  font-size: 32px;
}
/* h1 هو الـ selector: "كل عناصر h1"
   color و font-size خصائص، و blue و 32px قيمها */` },
    { type: 'h', text: 'تلات طرق لإضافة CSS' },
    { type: 'list', items: [
      'Inline: جوه الـ element نفسه بـ `style="..."`. أسرعها للتجربة وأسوأها للمشاريع: تنسيق كل عنصر لوحده.',
      'Internal: tag `<style>` جوه الـ `<head>`. مناسب لصفحة واحدة صغيرة.',
      'External: ملف `.css` منفصل بيتربط بـ `<link rel="stylesheet" href="style.css">`. دي الطريقة الاحترافية: ملف واحد يحكم الموقع كله.'
    ] },
    { type: 'code', code: `<!-- inline: للتجربة السريعة بس -->
<p style="color: red;">نص أحمر</p>

<!-- external: الطريقة الصح -->
<!-- جوه <head> -->
<link rel="stylesheet" href="style.css">` },
    { type: 'h', text: 'أنواع الـ selectors الأساسية' },
    { type: 'table', head: ['الـ selector', 'بيختار', 'مثال'], rows: [
      ['element', 'كل العناصر من نوع معين', 'p { }'],
      ['.class', 'كل عنصر عليه الـ class ده', '.intro { }'],
      ['#id', 'العنصر اللي عنده الـ id ده (فريد)', '#header { }'],
      ['parent child', 'عنصر جوه عنصر (أي عمق)', 'nav a { }'],
      ['a, b', 'تجميع: نفس القواعد لأكتر من selector', 'h1, h2 { }'],
      ['*', 'كل العناصر', '* { }']
    ] },
    { type: 'code', code: `/* كل الفقرات */
p { line-height: 1.8; }

/* كل عنصر عليه class="card" */
.card { background: #fff; }

/* العنصر الفريد اللي id بتاعه main-title */
#main-title { text-align: center; }

/* بس اللينكات اللي جوه الـ nav */
nav a { text-decoration: none; }

/* تجميع */
h1, h2, h3 { font-weight: 700; }` },
    { type: 'h', text: 'pseudo-classes: حالات العنصر' },
    { type: 'p', text: 'الـ `:hover` أشهر pseudo-class: بتتطبق لما الماوس يقف على العنصر. وفي `:first-child` (أول عنصر من أخواته) و `:focus` (لما الحقل يبقى نشط):' },
    { type: 'code', code: `a:hover {
  color: #4da3ff;
  text-decoration: underline;
}

li:first-child {
  font-weight: 700;
}` },
    { type: 'h', text: 'الـ Specificity: مين يكسب لما قاعدتين تتخانق؟' },
    { type: 'p', text: 'لو قاعدتين بتكلموا نفس العنصر عن نفس الخاصية، الأقوى (الأكثر تحديداً) بيكسب. الترتيب من الأضعف للأقوى: `element` ثم `.class` ثم `#id` ثم inline style. والتساوي بيتحسم بالترتيب: الآخر يكسب.' },
    { type: 'code', code: `p { color: black; }        /* element: أضعف */
.intro { color: green; }   /* class: أقوى */
#hero { color: blue; }     /* id: الأقوى */
/* لو العنصر <p class="intro" id="hero"> هيبقى أزرق */` },
    { type: 'note', warn: true, text: 'متحطش `!important` في آخر الخاصية عشان تكسب بالعافية. دي بتكسر نظام الـ specificity كله وبتخلي الكود جحيم في الصيانة. لو محتاج تغلب قاعدة، اكتب selector أدق.' }
  ],
  quiz: [
    { q: 'عايز كل اللينكات اللي جوه الـ nav بس تبقى من غير خط تحتي. إيه الـ selector؟', options: [
      { text: 'a { }' },
      { text: 'nav a { }' },
      { text: 'nav, a { }' }
    ], answer: 1, explain: 'nav a يعني "كل a اللي جوه nav بأي عمق". a لوحدها هتأثر على كل لينكات الصفحة، والفاصلة بتعمل تجميع مش تداخل.' },
    { q: 'إيه الطريقة الاحترافية لإضافة CSS لمشروع كامل؟', options: [
      { text: 'inline style على كل عنصر عشان التنسيق يبقى جنب العنصر نفسه' },
      { text: 'tag <style> جوه كل صفحة عشان تتحكم في تنسيقها لوحدها' },
      { text: 'ملف .css خارجي بيتربط بـ <link> في الـ head' }
    ], answer: 2, explain: 'الملف الخارجي بيتحمل مرة واحدة ويحكم كل الصفحات، وسهل الصيانة والمشاركة. الـ inline و internal للتجارب الصغيرة بس.' },
    { q: 'عنصر عليه class="a" و id="b"، وفيه قاعدة .a { color: red } وقاعدة #b { color: blue }. هيبقى لونه إيه؟', options: [
      { text: 'أحمر لأنها جات الأول' },
      { text: 'أزرق لأن الـ id أقوى من الـ class' },
      { text: 'اللون الافتراضي، الاتنين بيلغوا بعض' }
    ], answer: 1, explain: 'في الـ specificity: id أقوى من class، وclass أقوى من element. التساوي بس هو اللي بيتحسم بالترتيب.' },
    { q: 'إيه وظيفة :hover؟', options: [
      { text: 'بتخلي العنصر يظهر فوق باقي العناصر' },
      { text: 'بتطبق القواعد لما الماوس يقف على العنصر' },
      { text: 'بتخفي العنصر لحد ما تدوس عليه' }
    ], answer: 1, explain: ':hover حالة تفاعلية بتتفعل مع وقوف الماوس، وبتشيل نفسها لما يبعد. أشهر استخدامها تغيير شكل اللينكات والأزرار.' }
  ],
  exercises: [
    { task: 'اعمل ملف style.css واربطه بصفحتك، واكتب فيه: قاعدة لكل الـ h1 (لون وتوسيط)، وقاعدة لـ class="card" (خلفية وحدود)، وقاعدة للينكات اللي جوه nav بس', code: `/* style.css */
h1 {
  color: #1d4ed8;
  text-align: center;
}

.card {
  background: #f5f7fa;
  border: 1px solid #ccc;
}

nav a {
  text-decoration: none;
  color: #4da3ff;
}` , why: '<!-- وفي الـ head بتاع الـ HTML: -->\n<link rel="stylesheet" href="style.css">' },
    { task: 'خمن النتيجة قبل ما تجرب: عنصر عليه class="note" والقواعد دي معمولة بالترتيب: p {color:black} ثم .note {color:green} ثم p {color:red}. إيه لون الفقرة اللي عليها class="note"؟ وليه؟', code: `الإجابة: أخضر (green).

التحليل:
- p {color:black} و p {color:red} الاتنين element selectors
  فالآخر بيكسب: red.
- بس .note {color:green} class selector: أقوى من element
  مهما كان ترتيبه، فبيكسب في الآخر.

القاعدة: القوة الأول، وبعدين الترتيب عند التساوي.`, why: 'ناس كتير بتفتكر الآخر دايماً يكسب. الآخر يكسب بس لما الاتنين نفس القوة. جربها في المعمل بنفسك واتأكد.' }
  ]
},
{
  id: 'colors-fonts',
  nav: 'الألوان والخطوط',
  title: 'الألوان والخطوط: هوية الصفحة البصرية',
  subtitle: 'color formats بالأرقام، و font properties، و Google Fonts',
  blocks: [
    { type: 'p', text: 'لون واحد كويس بيغير إحساس الصفحة كلها. في الدرس ده هتتعلم طرق كتابة الألوان في CSS، وإزاي تتحكم في الخطوط وحجمها ووزنها، وإزاي تستخدم خطوط احترافية مجانية.' },
    { type: 'h', text: 'تلات طرق لكتابة اللون' },
    { type: 'table', head: ['الطريقة', 'الشكل', 'مثال'], rows: [
      ['اسم اللون', 'كلمة إنجليزية جاهزة (140 لون)', 'red، gold، skyblue'],
      ['Hex', '# متبوعة بـ 6 أرقام hex: RR GG BB', '#ff0000 = أحمر'],
      ['RGB / RGBA', 'rgb(r, g, b) كل قناة من 0 لـ 255', 'rgb(255, 0, 0) = أحمر']
    ] },
    { type: 'code', code: `h1 { color: #4da3ff; }            /* أزرق فاتح */
p  { color: rgb(60, 60, 60); }   /* رمادي غامق */
.note { background: rgba(77, 163, 255, 0.15); }  /* أزرق شفاف */` },
    { type: 'p', text: 'الـ hex في الحقيقة rgb متنكر: أول رقمين للأحمر، تاني رقمين للأخضر، تالت رقمين للأزرق، وكل قناة من `00` (صفر) لـ `ff` (255). يعني `#4da3ff` = أحمر 77 (لأن 4d hex = 77)، أخضر 163 (a3 = 163)، أزرق 255 (ff = 255). والـ `rgba` بيضيف رقم رابع للشفافية من 0 (شفاف تماماً) لـ 1 (معتم تماماً).' },
    { type: 'note', text: 'متحفظش ألوان، استخدم أدوات: افتح DevTools في المتصفح ودوس على أي مربع لون، هيظهرلك منتقي ألوان بيحول بين hex و rgb لوحده. وموقع coolors.co بيطلعلك بالتات ألوان متناسقة.' },
    { type: 'h', text: 'الخطوط: font-family' },
    { type: 'code', code: `body {
  font-family: 'Cairo', 'Segoe UI', sans-serif;
}` },
    { type: 'p', text: 'القيمة قايمة احتياطية: المتصفح بيجرب أول خط، لو مش موجود عند المستخدم يجرب التاني، وهكذا. عشان كده الآخر دايماً عائلة عامة زي `sans-serif` (خطوط من غير زوائد زي Cairo و Arial) أو `serif` (بزوائد زي Times) أو `monospace` (حروف متساوية العرض للكود).' },
    { type: 'h', text: 'الحجم والوزن والمحاذاة' },
    { type: 'code', code: `h1 {
  font-size: 32px;      /* حجم ثابت بالبكسل */
  font-weight: 900;     /* الوزن: 400 عادي، 700 تخين، 900 أتخن */
  text-align: center;   /* المحاذاة: left right center */
}

p {
  font-size: 1rem;      /* rem: مضاعفات حجم خط الصفحة الأساسي */
  line-height: 1.9;     /* تباعد الأسطر: بدون وحدة = مضاعفة على الحجم */
}` },
    { type: 'p', text: 'وحدة الـ `rem` أحسن من الـ px في أغلب الحالات: `1rem` = حجم خط الـ root (افتراضياً 16px في كل المتصفحات)، يعني `1.5rem` = 24px. الفايدة؟ لو المستخدم كبّر خط المتصفح من الإعدادات (ضعاف النظر بيعملوا كده)، موقعك كله بيكبر معاه باحترام، والـ px بتتجاهل إعداداته.' },
    { type: 'h', text: 'Google Fonts: خطوط احترافية مجانية' },
    { type: 'code', code: `<!-- جوه <head> في الـ HTML: -->
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">` },
    { type: 'p', text: 'من fonts.google.com اختار الخط، اختار الأوزان اللي محتاجها بس (كل وزن بيزود التحميل)، وخد لينك الـ `<link>` وحطه في الـ `<head>`. الخطوط العربية الممتازة: `Cairo` و `Tajawal` و `IBM Plex Sans Arabic`. ولاحظ: الأكاديمية اللي انت فيها دلوقتي نفسها بتستخدم Cairo و JetBrains Mono.' }
  ],
  quiz: [
    { q: 'إيه قيمة اللون #ff0000؟', options: [
      { text: 'أخضر' },
      { text: 'أحمر' },
      { text: 'أزرق' }
    ], answer: 1, explain: 'الترتيب RR GG BB: ff يعني أحمر كامل، و 00 00 يعني مفيش أخضر ولا أزرق. أحمر نقي.' },
    { q: 'لو خط الـ root حجمه الافتراضي 16px، يبقى 1.5rem كام بكسل؟', options: [
      { text: '15px' },
      { text: '24px' },
      { text: '1.5px' }
    ], answer: 1, explain: '1.5 × 16 = 24px. الـ rem مضاعفة على حجم خط الـ root، فبتتكبر وتتصغر مع إعدادات المستخدم.' },
    { q: 'إيه الغرض من القايمة font-family: "Cairo", Arial, sans-serif؟', options: [
      { text: 'بيخلط الخطوط التلاتة مع بعض في نفس الجملة حسب نوع كل حرف' },
      { text: 'ترتيب احتياطي: يجرب Cairo، لو مش موجود Arial، لو مش موجود أي خط sans-serif متاح' },
      { text: 'بيحمل الخطوط التلاتة من الإنترنت بالترتيب ويطبقهم مع بعض' }
    ], answer: 1, explain: 'قايمة الخطوط fallback chain: أول متاح بيشتغل. عشان كده الآخر دايماً عائلة عامة زي sans-serif مضمونة الوجود.' },
    { q: 'إيه الفرق بين rgb(0, 0, 255) و rgba(0, 0, 255, 0.5)؟', options: [
      { text: 'التاني أزرق أنصع وأكتر لمعاناً على الشاشات الحديثة' },
      { text: 'التاني نفس الأزرق بس شفافية 50%' },
      { text: 'مفيش فرق، حرف a زيادة شكلية والمتصفح بيتجاهلها تماماً' }
    ], answer: 1, explain: 'الرقم الرابع (alpha) بيتحكم في الشفافية من 0 لـ 1. 0.5 يعني نص اللون بين وراه.' }
  ],
  exercises: [
    { task: 'حوّل اللون #2ecc71 لصيغة rgb(). افكك كل قناة لوحدها: 2e, cc, 71', hint: 'كل رقمين hex: الرقم الأول × 16 + التاني. 2e = 2×16 + 14', code: `2e = 2×16 + 14 = 46
cc = 12×16 + 12 = 204
71 = 7×16 + 1 = 113

النتيجة: rgb(46, 204, 113)  /* أخضر مريح للعين */

اتأكد بنفسك: الصق القيمتين في DevTools
هتلاقيهم نفس اللون بالظبط.`, why: 'فهم التحويل بيفكك الغموض عن الـ hex: مفيش سحر، بس 3 قنوات ألوان مكتوبة بنظام 16 بدل 10.' },
    { task: 'ضيف خط Cairo من Google Fonts لصفحتك، وخلي العناوين بوزن 900 والفقرات بحجم 1.1rem وتباعد أسطر 1.9', code: `/* جوه style.css */
body {
  font-family: 'Cairo', sans-serif;
}

h1, h2, h3 {
  font-weight: 900;
}

p {
  font-size: 1.1rem;
  line-height: 1.9;
}

/* ومتنساش لينك الخط في <head>:
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap" rel="stylesheet">
*/`, why: 'لاحظ طلبنا الأوزان 400 و 700 و 900 بس في اللينك. لو طلبت وزن مش موجود في اللينك، المتصفح هيفبركه وهيبقى شكله وحش.' }
  ]
},
{
  id: 'box-model',
  nav: 'الـ Box Model',
  title: 'الـ Box Model: كل عنصر صندوق',
  subtitle: 'content و padding و border و margin، ولغز الـ box-sizing',
  blocks: [
    { type: 'p', text: 'أهم فكرة في الـ CSS كله: المتصفح بيعامل كل عنصر كأنه صندوق مستطيل. وفهمك للصندوق ده هو الفرق بين تصميم يطلع زي ما انت متخيله وتصميم يتلخبط ومش عارف ليه.' },
    { type: 'code', code: `┌──────────── margin (مسافة خارجية بتبعد الصندوق عن جيرانه)
│  ┌───────── border (الحد/الإطار)
│  │  ┌────── padding (مسافة داخلية بين المحتوى والحد)
│  │  │  ┌─── content (المحتوى نفسه: النص أو الصورة)
│  │  │  │` },
    { type: 'list', items: [
      '`content`: المحتوى الفعلي. مقاسه بيتحدد بـ `width` و `height`.',
      '`padding`: مسافة داخلية بين المحتوى والحد. بتكبر خلفية العنصر.',
      '`border`: الحد نفسه: سماكته ولونه بـ `border: 2px solid #ccc`.',
      '`margin`: مسافة خارجية بين الصندوق والصناديق اللي جنبه. شفافة دايماً.'
    ] },
    { type: 'h', text: 'حساب العرض الحقيقي' },
    { type: 'p', text: 'لو كتبت `width: 200px` للعنصر ده، عرضه الحقيقي على الشاشة مش 200:' },
    { type: 'code', code: `.card {
  width: 200px;
  padding: 20px;
  border: 5px solid #4da3ff;
  margin: 15px;
}
/* العرض الكلي = 200 + (20 × 2) + (5 × 2) = 250px
   الـ margin (15 × 2 = 30) مسافة حوالين الصندوق مش جزء منه */` },
    { type: 'p', text: 'الـ width بتحكم في عرض المحتوى بس، والـ padding والـ border بيتضافوا عليه من الجانبين. يعني الصندوق ده بياخد 250px من الشاشة: 200 محتوى + 40 padding + 10 border.' },
    { type: 'h', text: 'box-sizing: border-box, الحل اللي كل الناس بتستخدمه' },
    { type: 'p', text: 'السلوك ده اسمه `content-box` وهو الافتراضي، وهو غير بديهي: بتكتب width 200 والعنصر يطلع 250. الحل: `box-sizing: border-box` بيخلي الـ width تشمل المحتوى + الـ padding + الـ border مع بعض. يعني width: 200px تفضل 200px على الشاشة مهما زودت padding.' },
    { type: 'code', code: `/* السطر ده بيتكتب في أول أي ملف CSS محترف */
*, *::before, *::after {
  box-sizing: border-box;
}` },
    { type: 'note', text: 'مع border-box: width: 200px + padding: 20px + border: 5px = الصندوق 200px بالظبط، والمحتوى الداخلي بيتقلص لـ 150px. المتوقع = الواقع، وده اللي بيخليك تنام مرتاح.' },
    { type: 'h', text: 'display: block و inline و inline-block' },
    { type: 'table', head: ['النوع', 'السلوك', 'أمثلة'], rows: [
      ['block', 'ياخد السطر كله ويقبل width و height', 'div، p، h1، section'],
      ['inline', 'ياخد عرض محتواه بس وسط السطر، ويتجاهل width/height', 'span، a، strong'],
      ['inline-block', 'وسط السطر بس يقبل مقاسات', 'img، زرار متظبط بمقاس']
    ] },
    { type: 'code', code: `/* تقدر تغير السلوك الافتراضي لأي عنصر */
span.box {
  display: inline-block;
  width: 120px;
  height: 40px;
}` },
    { type: 'note', warn: true, text: 'غلطة شهيرة: تحاول تظبط width لعنصر `a` أو `span` ومتحصلش حاجة. السبب: دول inline ومش بيسمعوا مقاسات. الحل: `display: inline-block` أو `display: block`.' }
  ],
  quiz: [
    { q: 'عنصر عليه width: 100px و padding: 10px و border: 2px (بالوضع الافتراضي content-box). إيه عرضه الكلي على الشاشة؟', options: [
      { text: '100px' },
      { text: '124px' },
      { text: '112px' }
    ], answer: 1, explain: '100 + (10×2) + (2×2) = 124px. الـ padding والـ border بيتضافوا من الجانبين فوق الـ width في الوضع الافتراضي.' },
    { q: 'إيه تأثير box-sizing: border-box؟', options: [
      { text: 'بيشيل الـ border خالص من العنصر ويضم مساحته للـ padding' },
      { text: 'بيخلي الـ width تشمل المحتوى + padding + border فتفضل هي عرض الصندوق' },
      { text: 'بيضاعف حجم الصندوق لأنه بيضيف الـ border والـ padding على الـ width' }
    ], answer: 1, explain: 'مع border-box الرقم اللي بتكتبه هو الرقم اللي بتشوفه: الـ padding والـ border بياكلوا من جوه الـ width مش بيكبروها.' },
    { q: 'إيه الفرق بين margin و padding؟', options: [
      { text: 'margin داخل حد العنصر ومسافة المحتوى، و padding خارجه ومسافة الجيران' },
      { text: 'padding داخل الحد (مسافة المحتوى عن الإطار) و margin خارجه (مسافة الصندوق عن جيرانه)' },
      { text: 'مفيش فرق وظيفي، بس padding بيشتغل على النصوص و margin على الصور' }
    ], answer: 1, explain: 'الـ padding جوه الصندوق وبيكبر خلفيته، الـ margin بره الصندوق وشفاف وبيعمل مسافة بين العناصر.' },
    { q: 'عايز عنصر span يقبل width و height من غير ما ينزل سطر لوحده. تعمل إيه؟', options: [
      { text: 'display: block' },
      { text: 'display: inline-block' },
      { text: 'مستحيل، span مالوش مقاسات' }
    ], answer: 1, explain: 'inline-block بتدي العنصر صفات البلوك (يقبل مقاسات) مع بقائه وسط السطر زي الـ inline.' }
  ],
  exercises: [
    { task: 'احسب عرض الصندوق ده على الشاشة (content-box الافتراضي): width: 150px; padding: 25px; border: 3px solid; margin: 40px', code: `الحساب:
content = 150
padding = 25 × 2 = 50
border = 3 × 2 = 6
─────────────
العرض الكلي = 150 + 50 + 6 = 206px

ولاحظ: الـ margin (40 × 2 = 80) مش جزء من الصندوق:
دي مسافة خارجية شفافة بتبعده عن اللي جنبه.
المساحة المحجوزة على الشاشة كلها = 206 + 80 = 286px`, why: 'اتعود تحسبها بإيدك: كل خاصية من الجانبين (يمين + شمال). الـ margin مسافة مش مقاس.' },
    { task: 'اعمل 3 كروت جنب بعض بـ inline-block: كل كرت width: 150px و padding: 16px و border و margin: 8px، وشوف الفرق بين content-box و border-box بنفسك', code: `<style>
  * { box-sizing: border-box; }  /* جرب تشيل السطر ده وتقارن */
  .mini-card {
    display: inline-block;
    width: 150px;
    padding: 16px;
    border: 3px solid #4da3ff;
    margin: 8px;
    vertical-align: top;
  }
</style>

<div class="mini-card">كرت واحد</div>
<div class="mini-card">كرت اتنين</div>
<div class="mini-card">كرت تلاتة</div>`, why: 'مع border-box التلاتة 150px زي بعض بالظبط. شيل السطر وهتلاقي الكروت بقت 188px (150 + 32 + 6 × ... لا: 150 + 16×2 + 3×2 = 188) وممكن سطر يلخبط. دي أقوى تجربة تثبتلك الفكرة.' }
  ]
},
{
  id: 'flexbox',
  nav: 'Flexbox',
  title: 'Flexbox: ترتيب العناصر بقواعد مش بالصدفة',
  subtitle: 'display: flex و justify-content و align-items و gap و flex',
  blocks: [
    { type: 'p', text: 'لحد دلوقتي، ترتيب العناصر جنب بعض كان عذاب: float وحيل قديمة وmargin سالب. Flexbox جه يحل المشكلة دي نهائياً: بتقول للحاوية (container) "رتب العيال"، وهو بيرتبهم بقواعد واضحة ومتحكم فيها.' },
    { type: 'h', text: 'أهم سطرين في Flexbox' },
    { type: 'code', code: `.container {
  display: flex;   /* حول الحاوية لـ flex container */
  gap: 12px;       /* مسافة ثابتة بين كل عنصر والتاني */
}` },
    { type: 'p', text: 'من لحظة كتابة `display: flex`، العناصر الولاد (flex items) بيتصفوا جنب بعض في سطر واحد. مفيش float، مفيش حيل. والـ `gap` بيحط مسافة بينهم من غير ما تتلاعب بالـ margins.' },
    { type: 'h', text: 'المحورين: main و cross' },
    { type: 'p', text: 'الـ flex container ليه محورين: المحور الرئيسي (main axis) هو اتجاه الصف (افتراضياً أفقي)، والمحور العرضي (cross axis) عمودي عليه. أهم خاصيتين بيتحكموا في توزيع العناصر:' },
    { type: 'table', head: ['الخاصية', 'بتتحكم في إيه', 'قيم مشهورة'], rows: [
      ['justify-content', 'توزيع العناصر على المحور الرئيسي', 'center، space-between، flex-start'],
      ['align-items', 'محاذاة العناصر على المحور العرضي', 'center، stretch، flex-start'],
      ['flex-direction', 'اتجاه المحور الرئيسي نفسه', 'row (افتراضي)، column'],
      ['flex-wrap', 'العناصر تنزل سطر جديد لو الزحمة', 'nowrap (افتراضي)، wrap']
    ] },
    { type: 'code', code: `.container {
  display: flex;
  justify-content: center;  /* وسط أفقياً */
  align-items: center;      /* وسط رأسياً */
  gap: 12px;
}` },
    { type: 'note', text: 'أشهر حاجة بتتعمل بـ Flexbox: توسيط عنصر بالظبط في نص الشاشة (أفقي + رأسي). قبل Flexbox كانت دي لغز، دلوقتي 3 سطور: display: flex + justify-content: center + align-items: center.' },
    { type: 'h', text: 'flex-direction: column' },
    { type: 'code', code: `.container {
  display: flex;
  flex-direction: column;  /* العناصر تحت بعض بدل جنب بعض */
  gap: 8px;
}` },
    { type: 'p', text: 'لما بتقلب الاتجاه لـ column، المحور الرئيسي بيبقى رأسي: `justify-content` بقى بيتحكم فوق/تحت، و `align-items` يمين/شمال. ماتلخبطش: الفكرة ثابتة، بس المحورين بيتبدلوا.' },
    { type: 'h', text: 'flex: قسمة المساحة بالنسب' },
    { type: 'code', code: `<div class="row">
  <aside class="side">قائمة جانبية</aside>
  <main class="content">المحتوى</main>
</div>

.row { display: flex; gap: 16px; }
.side { flex: 1; }     /* ياخد جزء واحد */
.content { flex: 3; }  /* ياخد 3 أجزاء: 75% من المساحة */` },
    { type: 'p', text: 'خاصية `flex` على الولد بتقوله ياخد قد إيه من المساحة الفاضية بالنسبة لإخواته. `flex: 1` لكل العناصر = يتقسموا بالتساوي. `flex: 1` و `flex: 3` = ربع وتلت ترباع.' },
    { type: 'note', warn: true, text: 'خصائص التوزيع (`justify-content` و `align-items` و `gap` و `flex-wrap`) بتتكتب على الحاوية (الأب)، أما `flex` فبتتكتب على الولد. الخلط بينهم أشهر غلطة في Flexbox.' }
  ],
  quiz: [
    { q: 'عايز 3 كروت يتوسطوا أفقياً في الحاوية. إيه الصح؟', options: [
      { text: '.container { display: flex; justify-content: center; }' },
      { text: '.card { display: flex; justify-content: center; }' },
      { text: '.container { text-align: center; }' }
    ], answer: 0, explain: 'خصائص الـ flex بتتكتب على الحاوية (الأب) مش على الولاد. justify-content بيوزع العناصر على المحور الرئيسي، و center بتوسطهم.' },
    { q: 'إيه الفرق بين justify-content و align-items؟', options: [
      { text: 'الأولى على المحور الرئيسي والتانية على المحور العرضي' },
      { text: 'الأولى للنصوص والتانية للصور، وده بيتحدد حسب نوع المحتوى' },
      { text: 'مفيش فرق وظيفي، دول اسمين لنفس الخاصية بس بيتغيروا حسب الاتجاه' }
    ], answer: 0, explain: 'justify-content بتوزع على محور الاتجاه (row: أفقي)، و align-items على العمودي عليه (row: رأسي). لو قلبت column بتتبدل أدوارهم.' },
    { q: 'عندك aside بـ flex: 1 و main بـ flex: 3. المحتوى هياخد قد إيه من العرض؟', options: [
      { text: 'ثلث العرض تقريباً لأن الـ aside والـ main بيتقسموا العرض بالتساوي' },
      { text: '3 بكسل بس لأن flex بيحسب القيمة كبكسل مش كنسبة من العرض' },
      { text: '75% من العرض (3 أجزاء من 4)' }
    ], answer: 2, explain: 'المجموع 1 + 3 = 4 أجزاء. main بياخد 3/4 = 75% من المساحة الفاضية، و aside الربع الباقي.' },
    { q: 'عايز العناصر تنزل سطر جديد لو المساحة ضاقت بدل ما تتكبس. تستخدم إيه؟', options: [
      { text: 'flex-wrap: wrap' },
      { text: 'flex-direction: wrap' },
      { text: 'overflow: wrap' }
    ], answer: 0, explain: 'flex-wrap: wrap بتخلي العناصر تنزل لسطر جديد بدل التكبس. flex-direction مالوش قيمة wrap، و overflow خاصية تانية خالص.' }
  ],
  exercises: [
    { task: 'اعمل شريط تنقل (navbar): لوجو على اليمين و 3 لينكات على الشمال في نفس السطر، بـ justify-content: space-between', code: `<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    background: #1e2740;
  }
  .navbar .links {
    display: flex;
    gap: 20px;
  }
  .navbar a { color: #fff; text-decoration: none; }
</style>

<nav class="navbar">
  <strong>شعاري</strong>
  <div class="links">
    <a href="#">الرئيسية</a>
    <a href="#">عني</a>
    <a href="#">تواصل</a>
  </div>
</nav>`, why: 'space-between بيحط أول عنصر في أول السطر وآخر عنصر في آخره ويوزع الباقي بينهم. دي أشهر وصفة navbar على الإنترنت كله.' },
    { task: 'اعمل 3 كروت متساوية العرض جنب بعض بـ flex: 1، وبعدين غيرهم لـ flex-direction: column على الشاشات الصغيرة (استخدم المعمل وصغّر عرض المعاينة)', code: `<style>
  .cards {
    display: flex;
    gap: 16px;
  }
  .cards .card {
    flex: 1;            /* التلاتة يتقسموا العرض بالتساوي */
    padding: 16px;
    background: #f5f7fa;
    border: 1px solid #ccc;
  }
</style>

<div class="cards">
  <div class="card">كرت 1</div>
  <div class="card">كرت 2</div>
  <div class="card">كرت 3</div>
</div>`, why: 'flex: 1 متساوية على الكل بتضمن نفس العرض مهما اختلف محتوى كل كرت. هنعملها responsive في الدرس الجاي بـ media query.' }
  ]
},
{
  id: 'responsive',
  nav: 'الـ Responsive Design',
  title: 'الـ Responsive Design: موقع يشتغل على أي شاشة',
  subtitle: 'viewport meta و media queries و mobile-first والوحدات المرنة',
  blocks: [
    { type: 'p', text: 'أكتر من نص الزوار بييجوا من الموبايل. لو موقعك بيشتغل على شاشة اللابتوب بس، انت بتقفل الباب في وش نص الناس. الـ Responsive Design معناه: نفس الصفحة بتتشكل على حسب عرض الشاشة، من موبايل صغير لشاشة عرض كبيرة.' },
    { type: 'h', text: 'السطر اللي لازم يكون في كل صفحة' },
    { type: 'code', code: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` },
    { type: 'p', text: 'من غير السطر ده، متصفح الموبايل بيفترض إن صفحتك مصممة لشاشة كمبيوتر عرضها حوالي 980px، فبيصغّرها كلها وتبان صغيرة والمستخدم يزوم. مع السطر ده، الموبايل بيستخدم عرضه الحقيقي وقواعد الـ media بتشتغل صح.' },
    { type: 'h', text: 'Media Queries: قواعد شرطية' },
    { type: 'code', code: `/* القاعدة الأساسية للكل */
.cards { display: flex; gap: 16px; }

/* لو عرض الشاشة 600px أو أقل: */
@media (max-width: 600px) {
  .cards {
    flex-direction: column;  /* الكروت تنزل تحت بعض */
  }
  h1 {
    font-size: 24px;         /* عنوان أصغر للموبايل */
  }
}` },
    { type: 'p', text: '`@media (max-width: 600px)` معناها: "القواعد اللي جوا بتتطبق بس لما عرض الشاشة يبقى 600 بكسل أو أقل". القيم دي اسمها breakpoints (نقاط التحول). مفيش أرقام مقدسة، بس أشهرها تقريباً: 600px للموبايل و 900px للتابلت.' },
    { type: 'h', text: 'Mobile-First: ابدأ صغير' },
    { type: 'p', text: 'الطريقة الأصح: اكتب قواعد الموبايل هي الأساسية، وبعدين ضيف تحسينات الشاشات الكبيرة بـ `min-width`. كده الموبايل (الأهم والأضعف) بياخد الأولوية:' },
    { type: 'code', code: `/* الأساس = موبايل: عمود واحد */
.cards { display: flex; flex-direction: column; gap: 12px; }

/* شاشة 900px فأكبر: 3 أعمدة */
@media (min-width: 900px) {
  .cards { flex-direction: row; }
}` },
    { type: 'h', text: 'وحدات مرنة بدل أرقام جامدة' },
    { type: 'list', items: [
      '`%`: نسبة من عرض الأب. `width: 50%` يعني نص مساحته مهما كبرت أو صغرت.',
      '`max-width: 100%`: أهم سطر للصور: الصورة متكبرش أوسع من حاويتها أبداً، فمبتطلعش بره الشاشة على الموبايل.',
      '`rem`: للخطوط عشان تحترم إعدادات المستخدم (زي ما اتعلمنا في درس الألوان والخطوط).',
      'بعد عن الـ `px` الجامدة لعرض العناصر الكبيرة زي الحاويات والأعمدة.'
    ] },
    { type: 'code', code: `img {
  max-width: 100%;
  height: auto;  /* خلي النسبة متظبطة لوحدها */
}

.container {
  width: 90%;        /* 90% من الشاشة مهما كانت */
  max-width: 1100px; /* بس متعديش 1100px على الشاشات العملاقة */
  margin: 0 auto;    /* توسيط تلقائي */
}` },
    { type: 'note', text: 'جرب بنفسك في المتصفح: افتح DevTools ودوس أيقونة الموبايل (Ctrl+Shift+M)، وهتلاقي محاكي بأحجام شاشات مختلفة. دي أداة شغل يومية مش للتجربة بس.' }
  ],
  quiz: [
    { q: 'ليه <meta name="viewport" content="width=device-width, initial-scale=1.0"> مهمة؟', options: [
      { text: 'بتسرع تحميل الصفحة على الموبايل لأنها بتقلل حجم الملفات المنقولة' },
      { text: 'بتخلي الموبايل يستخدم عرضه الحقيقي بدل ما يصغّر صفحة مصممة للكمبيوتر' },
      { text: 'بتخلي الخطوط أكبر على الموبايل تلقائياً من غير ما تغير باقي التصميم' }
    ], answer: 1, explain: 'من غيرها متصفح الموبايل بيفترض عرض ~980px ويصغّر الصفحة كلها. معاها الـ media queries بتشتغل على العرض الحقيقي.' },
    { q: '@media (max-width: 600px) { ... } معناها إيه؟', options: [
      { text: 'القواعد دي تتطبق لما الشاشة أوسع من 600px' },
      { text: 'القواعد دي تتطبق بس لما عرض الشاشة 600px أو أقل' },
      { text: 'القواعد دي تتطبق على الموبايل بس ومتتطبقش على الكمبيوتر أبداً مهما كان عرضه' }
    ], answer: 1, explain: 'max-width معناها "حد أقصى للعرض": أي شاشة 600px أو أقل تتطبق عليها القواعد، سواء موبايل أو نافذة كمبيوتر ضيقة.' },
    { q: 'إيه فكرة الـ mobile-first؟', options: [
      { text: 'تصمم للموبايل بس وتتجاهل الكمبيوتر، لأن أغلب الزوار بيستخدموا الموبايل' },
      { text: 'تكتب قواعد الموبايل هي الأساس، وبعدين تضيف تحسينات الشاشات الكبيرة بـ min-width' },
      { text: 'تكتب قواعد الكمبيوتر الأول لأنه أسهل، وبعدين تعدل للموبايل بـ max-width' }
    ], answer: 1, explain: 'mobile-first = الأساس هو الموبايل والتحسينات بتتبني فوقه. كده الموبايل مش نسخة مكسورة من تصميم كبير، والعكس صحيح.' },
    { q: 'عايز صورة متطلعش بره حاويتها على الموبايل أبداً. إيه الحل؟', options: [
      { text: 'width: 100px' },
      { text: 'max-width: 100%; height: auto;' },
      { text: 'overflow: hidden على الصورة نفسها' }
    ], answer: 1, explain: 'max-width: 100% بتمنع الصورة تعدي عرض حاويتها، و height: auto بيحافظ على النسبة. overflow بتتكتب على الحاوية مش الصورة.' }
  ],
  exercises: [
    { task: 'خلي صفحتك الشخصية responsive: ضيف viewport meta، وحاوية بعرض 90% و max-width: 800px متوسطة، و media query تصغّر الخطوط تحت 600px', code: `<!-- في <head>: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* في style.css: */
.container {
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  h1 { font-size: 1.6rem; }
  p  { font-size: 1rem; }
}`, why: 'وصفة الحاوية دي (width + max-width + margin auto) هي أشهر pattern في الويب كله: مرنة على الصغير ومحدودة على الكبير ومتوسطة دايماً.' },
    { task: 'خلي قسم الكروت من تمرين Flexbox responsive: عمود واحد على الموبايل، 3 أعمدة من 900px وفوق، بأسلوب mobile-first', code: `.cards {
  display: flex;
  flex-direction: column;  /* الأساس: موبايل عمود واحد */
  gap: 12px;
}
.cards .card { flex: 1; padding: 16px; }

@media (min-width: 900px) {
  .cards {
    flex-direction: row;   /* الشاشات الكبيرة: 3 أعمدة */
    gap: 16px;
  }
}`, why: 'لاحظ إننا منقولش للكرت width: flex: 1 مع flex-direction بيتظبطوا لوحدهم في الحالتين. Flexbox + media queries = أقوى ثنائي في الـ layout.' }
  ]
},
{
  id: 'capstone',
  nav: 'المشروع الختامي',
  title: 'المشروع الختامي: انشر أول صفحة ليك على GitHub Pages',
  subtitle: 'هتبني صفحة شخصية كاملة بكل اللي اتعلمته، وتنشرها على الإنترنت برابط حقيقي',
  blocks: [
    { type: 'p', text: 'وصلنا للحظة اللي كل ده كان بيجهز لها: هتبني صفحة شخصية كاملة وتنشرها أونلاين برابط تقدر تبعته لأي حد. مفيش حاجة هنا جديدة عليك: كل سطر هتكتبه اتعلمته في الدروس اللي فاتت.' },
    { type: 'h', text: 'الجزء الأول: ابني الصفحة' },
    { type: 'p', text: 'المطلوب صفحة شخصية فيها الأقسام دي. اشتغل عليها في المعمل الأول، وبعدين انقلها لملفات حقيقية:' },
    { type: 'list', items: [
      'هيكل semantic صح: `header` فيه اسمك، `nav` فيه لينكات بتنط للأقسام، `main` فيه الأقسام، `footer` فيه تواصلك.',
      'قسم "عني": فقرة تعريف بـ `p` واسمك بـ `strong` وصورة ليك (أو صورة تجريبية) بـ `img` و `alt` معمول.',
      'قسم "مهاراتي": قايمة `ul` فيها 3 مهارات على الأقل بتتعلمهم.',
      'قسم "جدولي": جدول مواعيد تعلمك الأسبوعي بـ `table` و `thead` و `tbody`.',
      'قسم "تواصل معايا": فورم فيها اسم وإيميل ورسالة، كل حقل مربوط بـ `label` صح.',
      'ملف `style.css` خارجي فيه: ألوان من اختيارك، خط Cairo أو Tajawal، box-sizing: border-box، وكروت بـ padding و margin.',
      'قسم المهارات بـ Flexbox: المهارات تتعرض كروت جنب بعض.',
      'Responsive: `viewport` meta و media query تخلي الكروت عمود واحد تحت 600px.'
    ] },
    { type: 'h', text: 'الجزء التاني: انشرها على GitHub Pages' },
    { type: 'p', text: 'GitHub Pages خدمة استضافة مجانية للمواقع الثابتة (HTML/CSS/JS) من GitHub. نفس الطريقة اللي الأكاديمية دي نفسها منشورة بيها. الخطوات:' },
    { type: 'list', items: [
      'اعمل حساب مجاني على github.com لو معندكش، وسجل دخول.',
      'دوس علامة + فوق يمين واختار New repository.',
      'سمي الريبو أي اسم زي `my-page`، اختار Public، وعلم على Add a README file، ودوس Create repository.',
      'افتح الريبو، دوس Add file ← Upload files، وارفع `index.html` و `style.css` بتاعك، وبعدين Commit changes.',
      'من تبويب Settings ← من القايمة الجانبية Pages ← تحت Source اختار Deploy from a branch ← Branch: main و / (root) ← Save.',
      'استنى دقيقة أو اتنين، وافتح اللينك: `https://YOUR-USERNAME.github.io/my-page/`, صفحتك لايف على الإنترنت!'
    ] },
    { type: 'note', text: 'لو الصفحة فتحت بس الشكل بايظ: اتأكد إن اسم ملف الـ CSS مكتوب صح في الـ `<link>` وإن الملف مرفوع في نفس المستوى. GitHub Pages حساس لحالة الحروف: `Style.css` مش زي `style.css`.' },
    { type: 'h', text: 'معايير النجاح' },
    { type: 'list', items: [
      'الصفحة بتفتح من اللينك العام من أي جهاز، مش بس جهازك.',
      'الـ HTML valid: مفيش tags مفتوحة نسيت تقفلها (المعمل بيظهرلك الأغلاط دي).',
      'الشكل ثابت ومقروء على الموبايل زي الكمبيوتر.',
      'كل صورة ليها alt، وكل حقل فورم ليه label.',
      'الكود متنسق ومقروء: انت راجع له بعد شهور.'
    ] },
    { type: 'p', text: 'لو خلصت: انت دلوقتي رسمياً نشرت موقع على الإنترنت. مش لعبة ولا تمرين: لينك حقيقي، يشتغل 24 ساعة، مجاناً. خد سكرينشوت وشاركه. الرحلة الجاية: JavaScript عشان تخلي الصفحة تتفاعل.' }
  ],
  quiz: [
    { q: 'إيه GitHub Pages؟', options: [
      { text: 'خدمة استضافة مجانية للمواقع الثابتة (HTML/CSS/JS) من GitHub' },
      { text: 'برنامج تصميم مواقع بيتنزل على الكمبيوتر ويطلعلك الملفات جاهزة' },
      { text: 'محرر كود أونلاين من GitHub بتكتب فيه الأكواد وتشغلها في المتصفح' }
    ], answer: 0, explain: 'GitHub Pages بياخد ملفات HTML/CSS/JS من الريبو بتاعك وينشرها كموقع لايف على لينك عام، مجاناً. مناسب جداً للمواقع الشخصية ومشاريع التعلم.' },
    { q: 'ترتيب نشر أول موقع على GitHub Pages؟', options: [
      { text: 'فعّل Pages الأول من Settings، وبعدين اعمل repo وارفع الملفات' },
      { text: 'اعمل repo ← ارفع الملفات ← فعّل Pages من Settings ← افتح اللينك' },
      { text: 'نزل برنامج GitHub على جهازك وارفع منه الملفات مباشرة للموقع' }
    ], answer: 1, explain: 'الترتيب: repo عام ← الملفات فيه (index.html في الجذر) ← Settings ← Pages ← Deploy from a branch: main ← اللينك يشتغل خلال دقايق.' },
    { q: 'رفعت موقعك وكل حاجة شغالة ما عدا الـ CSS مش بيشتغل. إيه أكتر سبب محتمل؟', options: [
      { text: 'GitHub Pages مابيدعمش ملفات CSS خارجية، ولازم تكتب الـ style جوه الصفحة' },
      { text: 'اسم الملف في الـ <link> مش مطابق لاسم الملف المرفوع بالظبط (حالة الحروف مهمة)' },
      { text: 'لازم تعمل حساب مدفوع على GitHub عشان ملفات الـ CSS تشتغل على الموقع' }
    ], answer: 1, explain: 'سيرفرات GitHub Pages حساسة لحالة الحروف: style.css مش زي Style.css. جهازك المحلي (ويندوز) متساهل في ده فمش بتاخد بالك لحد ما تنشر.' }
  ],
  exercises: [
    { task: 'نفذ الجزء الأول: ابني الصفحة الشخصية كاملة في المعمل (أو في ملفات محلية) وغطي كل البنود المطلوبة في القايمة', hint: 'التحديات الـ 13 في المعمل مبنية على نفس المتطلبات بالترتيب: لو خلصتهم يبقى الصفحة جاهزة تقريباً', code: `<!-- هيكل نموذجي للصفحة النهائية -->
<header>
  <h1>اسمك</h1>
  <nav>
    <a href="#about">عني</a>
    <a href="#skills">مهاراتي</a>
    <a href="#schedule">جدولي</a>
    <a href="#contact">تواصل</a>
  </nav>
</header>
<main>
  <section id="about">
    <h2>عني</h2>
    <img src="me.png" alt="صورتي الشخصية">
    <p>أنا <strong>اسمك</strong>، باتعلم تطوير الويب...</p>
  </section>
  <section id="skills">
    <h2>مهاراتي</h2>
    <div class="cards">
      <div class="card">HTML</div>
      <div class="card">CSS</div>
      <div class="card">Flexbox</div>
    </div>
  </section>
  <section id="schedule">
    <h2>جدولي</h2>
    <table>
      <thead><tr><th>اليوم</th><th>المهمة</th></tr></thead>
      <tbody><tr><td>السبت</td><td>HTML</td></tr></tbody>
    </table>
  </section>
  <section id="contact">
    <h2>تواصل معايا</h2>
    <form>
      <label for="n">الاسم:</label>
      <input id="n" type="text" required>
      <label for="e">الإيميل:</label>
      <input id="e" type="email" required>
      <label for="m">رسالتك:</label>
      <textarea id="m" rows="4"></textarea>
      <button type="submit">ابعت</button>
    </form>
  </section>
</main>
<footer><p>اتعملت بـ HTML و CSS بحب</p></footer>`, why: 'كل tag وكل خاصية هنا اتشرحت في الدروس اللي فاتت. لو وقفتك حاجة ارجع للدرس بتاعها: دي مش غش، دي مراجعة المطورين اليومية الحقيقية.' },
    { task: 'نفذ الجزء التاني فعلياً: اعمل الريبو، ارفع الملفات، فعّل Pages، وافتح اللينك من موبايلك وتأكد إن الكروت نزلت عمود واحد', hint: 'لو اللينك 404 بعد التفعيل: استنى دقيقتين واعمل refresh. أول نشر بياخد وقت', code: `قايمة التحقق النهائية قبل ما تقول "خلصت":
[ ] اللينك بيفتح من موبايلك ومش بس من جهازك
[ ] الخط ظاهر (Cairo أو اللي اخترته)
[ ] الكروت: 3 أعمدة على الكمبيوتر، عمود واحد على الموبايل
[ ] الصور ليها alt والفورم كله مربوط بـ labels
[ ] الكود مرفوع على GitHub وتقدر تعدل وتنشر تحديثات

مبروك مقدماً: أول موقع ليك على الإنترنت 🎉`, why: 'النشر على موبايل حقيقي هو الاختبار الحقيقي: لو الموقع شغال على شاشتين مختلفتين العرض، يبقى انت فهمت responsive design فعلاً مش نظرياً.' }
  ]
}
);
