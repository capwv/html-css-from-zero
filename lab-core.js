/* معمل HTML و CSS — core: mini parsers + guided challenges (no DOM, testable in node) */
(function (global) {
'use strict';

/* ================= HTML mini parser ================= */
/* parseHTML(src) -> { root, errors[] }
   root: { name:'#root', attrs:{}, children:[ {name,attrs,children} | {text} ] } */
var VOID_TAGS = { area:1, base:1, br:1, col:1, embed:1, hr:1, img:1, input:1, link:1, meta:1, source:1, track:1, wbr:1 };

function parseHTML(src) {
  var root = { name: '#root', attrs: {}, children: [] };
  var stack = [root];
  var errors = [];
  var re = /<!--[\s\S]*?-->|<![^>]*>|<\/?[a-zA-Z][^>]*>|[^<]+|</g;
  var m;
  while ((m = re.exec(src)) !== null) {
    var tok = m[0];
    if (tok === '<') {
      stack[stack.length - 1].children.push({ text: tok });
    } else if (tok.charAt(0) !== '<') {
      stack[stack.length - 1].children.push({ text: tok });
    } else if (tok.slice(0, 4) === '<!--' || tok.slice(0, 2) === '<!') {
      /* comment or doctype: skip */
    } else if (tok.charAt(1) === '/') {
      var closeName = tok.slice(2, -1).trim().toLowerCase().split(/\s/)[0];
      var found = -1;
      for (var i = stack.length - 1; i > 0; i--) {
        if (stack[i].name === closeName) { found = i; break; }
      }
      if (found === -1) errors.push('closing tag without opener: ' + closeName);
      else stack.length = found; /* pops the matched element and anything above it */
    } else {
      var selfClose = /\/\s*>$/.test(tok);
      var inner = tok.slice(1, tok.length - (selfClose ? 2 : 1));
      var sp = inner.search(/\s/);
      var name = (sp === -1 ? inner : inner.slice(0, sp)).toLowerCase();
      if (!/^[a-z][a-z0-9-]*$/.test(name)) { stack[stack.length - 1].children.push({ text: tok }); continue; }
      var attrStr = sp === -1 ? '' : inner.slice(sp);
      var attrs = {};
      var are = /([\w-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|[^\s"'>]+))?/g, am;
      while ((am = are.exec(attrStr)) !== null) {
        attrs[am[1].toLowerCase()] = am[3] !== undefined ? am[3] : (am[4] !== undefined ? am[4] : (am[2] !== undefined ? am[2] : ''));
      }
      var el = { name: name, attrs: attrs, children: [] };
      stack[stack.length - 1].children.push(el);
      if (!selfClose && !VOID_TAGS[name]) stack.push(el);
    }
  }
  if (stack.length > 1) {
    errors.push('unclosed tags: ' + stack.slice(1).map(function (e) { return e.name; }).join(', '));
  }
  return { root: root, errors: errors };
}

function eachEl(node, fn) {
  node.children.forEach(function (c) {
    if (c.name) { fn(c); eachEl(c, fn); }
  });
}

function findAll(root, name) {
  var out = [];
  eachEl(root, function (el) { if (el.name === name) out.push(el); });
  return out;
}

function textOf(node) {
  var t = '';
  (function walk(n) {
    n.children.forEach(function (c) { if (c.text) t += c.text; else walk(c); });
  })(node);
  return t.replace(/\s+/g, ' ').trim();
}

function directKids(el, name) {
  return el.children.filter(function (c) { return c.name === name; });
}

/* ================= CSS mini parser ================= */
/* parseCSS(src) -> { rules: [{selector, props:{name:value}, media:null|string}], errors[] } */
function parseCSS(src) {
  var errors = [];
  var clean = String(src).replace(/\/\*[\s\S]*?\*\//g, '');
  var rules = [];

  function findMatching(s, open) {
    var d = 0;
    for (var j = open; j < s.length; j++) {
      if (s.charAt(j) === '{') d++;
      else if (s.charAt(j) === '}') { d--; if (d === 0) return j; }
    }
    return -1;
  }

  function parseBlock(body, media) {
    var i = 0;
    while (i < body.length) {
      var brace = body.indexOf('{', i);
      if (brace === -1) break;
      var sel = body.slice(i, brace).trim();
      var close = findMatching(body, brace);
      if (close === -1) { errors.push('unclosed rule: ' + sel); break; }
      var inner = body.slice(brace + 1, close);
      if (/^@media/i.test(sel)) {
        parseBlock(inner, sel.replace(/^@media\s*/i, '').trim());
      } else if (sel.charAt(0) === '@') {
        /* other at-rules skipped */
      } else if (sel) {
        var props = {};
        inner.split(';').forEach(function (decl) {
          var ci = decl.indexOf(':');
          if (ci === -1) return;
          var p = decl.slice(0, ci).trim().toLowerCase();
          var v = decl.slice(ci + 1).trim().toLowerCase();
          if (p) props[p] = v;
        });
        sel.split(',').forEach(function (s) {
          s = s.trim();
          if (s) rules.push({ selector: s, props: props, media: media });
        });
      }
      i = close + 1;
    }
  }

  parseBlock(clean, null);
  return { rules: rules, errors: errors };
}

/* ================= guided challenges ================= */
function elClasses(el) {
  return (el.attrs['class'] || '').split(/\s+/).filter(Boolean);
}

var CHALLENGES = [
  { id: 'first-h1', title: 'أول عنوان ليك',
    desc: 'اعمل tag <h1> فيه كلمة "أهلاً". العنوان ده أول حاجة تشوفها في أي صفحة.',
    hint: '<h1>أهلاً بالعالم</h1>',
    check: function (doc) {
      return findAll(doc.root, 'h1').some(function (el) { return textOf(el).indexOf('أهلاً') !== -1; });
    } },
  { id: 'paragraph', title: 'ضيف فقرة',
    desc: 'تحت العنوان ضيف فقرة <p> فيها 10 حروف على الأقل. عرف الناس الصفحة دي عن إيه.',
    hint: '<p>دي أول صفحة ويب بعملها بإيدي</p>',
    check: function (doc) {
      return findAll(doc.root, 'p').some(function (el) { return textOf(el).length >= 10; });
    } },
  { id: 'link', title: 'حط لينك',
    desc: 'ضيف لينك <a> يودي لأي موقع تحبه. اللينك محتاج href يبدأ بـ http ونص يدوس عليه.',
    hint: '<a href="https://developer.mozilla.org">اتعلم أكتر</a>',
    check: function (doc) {
      return findAll(doc.root, 'a').some(function (el) {
        return /^https?:\/\//.test(el.attrs.href || '') && textOf(el).length >= 2;
      });
    } },
  { id: 'image', title: 'حط صورة بـ alt',
    desc: 'ضيف صورة <img> ليها src و alt معمول. الـ alt نص بديل بيوصف الصورة، ومهم جداً.',
    hint: '<img src="photo.png" alt="صورتي الشخصية">',
    check: function (doc) {
      return findAll(doc.root, 'img').some(function (el) {
        return (el.attrs.src || '').trim().length > 0 && (el.attrs.alt || '').trim().length > 0;
      });
    } },
  { id: 'list', title: 'اعمل قايمة',
    desc: 'اعمل قايمة <ul> أو <ol> فيها 3 عناصر <li> على الأقل. مثلاً 3 حاجات بتتعلمهم.',
    hint: '<ul><li>HTML</li><li>CSS</li><li>Flexbox</li></ul>',
    check: function (doc) {
      return ['ul', 'ol'].some(function (tag) {
        return findAll(doc.root, tag).some(function (el) { return directKids(el, 'li').length >= 3; });
      });
    } },
  { id: 'table', title: 'اعمل جدول',
    desc: 'اعمل <table> فيه صف عناوين بـ <th> وصف بيانات واحد على الأقل بـ <td>.',
    hint: '<table><tr><th>المهارة</th><th>المستوى</th></tr><tr><td>HTML</td><td>مبتدئ</td></tr></table>',
    check: function (doc) {
      return findAll(doc.root, 'table').some(function (el) {
        return findAll(el, 'th').length >= 1 && findAll(el, 'td').length >= 1;
      });
    } },
  { id: 'form', title: 'اعمل فورم',
    desc: 'اعمل <form> فيها <input> ليه id، و <label> مربوط بيه بـ for نفس الـ id، وزرار.',
    hint: '<form><label for="email">إيميلك</label><input id="email" type="email"><button>اشترك</button></form>',
    check: function (doc) {
      return findAll(doc.root, 'form').some(function (form) {
        var inputs = findAll(form, 'input').filter(function (i) { return (i.attrs.id || '').length > 0; });
        var labels = findAll(form, 'label');
        var buttons = findAll(form, 'button').concat(findAll(form, 'input').filter(function (i) {
          return (i.attrs.type || '') === 'submit';
        }));
        var linked = inputs.some(function (i) {
          return labels.some(function (l) { return (l.attrs['for'] || '') === i.attrs.id; });
        });
        return linked && buttons.length >= 1;
      });
    } },
  { id: 'semantic', title: 'رتب الصفحة بـ semantic tags',
    desc: 'خلي الصفحة فيها <header> و <main> و <footer>. دي بتوصف كل جزء بيعمل إيه.',
    hint: '<header>..العنوان والقايمة..</header><main>..المحتوى..</main><footer>..الحقوق..</footer>',
    check: function (doc) {
      return ['header', 'main', 'footer'].every(function (t) { return findAll(doc.root, t).length >= 1; });
    } },
  { id: 'css-body', title: 'لون الصفحة',
    desc: 'في تاب style.css اعمل rule للـ body فيها background أو color. أول لمسة CSS.',
    hint: 'body { background: #f5f7fa; color: #222; }',
    check: function (doc, css) {
      return css.rules.some(function (r) {
        return r.selector === 'body' &&
          (r.props.background !== undefined || r.props['background-color'] !== undefined || r.props.color !== undefined);
      });
    } },
  { id: 'css-class', title: 'استخدم class',
    desc: 'ضيف attribute class لأي عنصر في الصفحة، واعمله rule في الـ CSS بنفس الاسم بأي خاصية.',
    hint: 'HTML: <p class="intro">..</p> + CSS: .intro { font-size: 18px; }',
    check: function (doc, css) {
      var classes = {};
      eachEl(doc.root, function (el) { elClasses(el).forEach(function (c) { classes[c] = 1; }); });
      return css.rules.some(function (r) {
        var m = r.selector.match(/^\.([\w-]+)$/);
        return m && classes[m[1]] && Object.keys(r.props).length >= 1;
      });
    } },
  { id: 'box-model', title: 'جرب الـ box model',
    desc: 'أي rule فيها padding و margin مع بعض. حس بالمساحات الداخلية والخارجية.',
    hint: '.card { padding: 16px; margin: 24px; }',
    check: function (doc, css) {
      return css.rules.some(function (r) { return r.props.padding !== undefined && r.props.margin !== undefined; });
    } },
  { id: 'flex', title: 'جرب Flexbox',
    desc: 'أي rule فيها display: flex. دي أقوى طريقة لترتيب العناصر جنب بعض.',
    hint: 'main { display: flex; gap: 12px; }',
    check: function (doc, css) {
      return css.rules.some(function (r) { return r.props.display === 'flex'; });
    } },
  { id: 'grid', title: 'رتبها بـ Grid',
    desc: 'أي rule فيها display: grid و grid-template-columns. الشبكة ثنائية الأبعاد دخيلة العدة.',
    hint: '.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }',
    check: function (doc, css) {
      return css.rules.some(function (r) { return r.props.display === 'grid' && r.props['grid-template-columns'] !== undefined; });
    } },
  { id: 'responsive', title: 'خليه responsive',
    desc: 'ضيف @media query فيها max-width وجوّاها rule واحدة على الأقل بتتطبق على الموبايل.',
    hint: '@media (max-width: 600px) { main { flex-direction: column; } }',
    check: function (doc, css) {
      return css.rules.some(function (r) { return r.media !== null && /max-width/.test(r.media); });
    } }
];

global.WEB_LAB_CORE = {
  parseHTML: parseHTML,
  parseCSS: parseCSS,
  findAll: findAll,
  textOf: textOf,
  CHALLENGES: CHALLENGES
};
})(typeof window !== 'undefined' ? window : globalThis);
