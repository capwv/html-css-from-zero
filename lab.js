/* معمل HTML و CSS — UI: live editor + preview + challenge tracking */
(function (global) {
'use strict';
var C = global.WEB_LAB_CORE;
var CHALLENGES = C.CHALLENGES;

global.WEB_LAB_META = { challenges: CHALLENGES.length };

if (typeof document === 'undefined') return; /* node test context */

var LS_KEY = 'htmlcss-lab-v1';

var START_HTML = '<!-- أهلاً بيك في المعمل 👋\n     امسح الكومنت ده وابدأ اكتب الصفحة بتاعتك.\n     شغل "تحديات التدريب" من الزرار فوق وهو هيمشي معاك خطوة بخطوة. -->\n';
var START_CSS = '/* اكتب الـ CSS بتاعك هنا وشوف النتيجة في المعاينة على طول */\n';

var htmlIn = document.getElementById('html-in');
var cssIn = document.getElementById('css-in');
var preview = document.getElementById('preview');
var panel = document.getElementById('challenges-panel');
var toggleBtn = document.getElementById('challenges-toggle');
var resetBtn = document.getElementById('reset-lab');
var tabHtml = document.getElementById('tab-html');
var tabCss = document.getElementById('tab-css');

/* ---------- state ---------- */
function loadState() {
  try {
    var raw = localStorage.getItem(LS_KEY);
    if (raw) {
      var s = JSON.parse(raw);
      if (s && typeof s === 'object') {
        s.done = s.done || {};
        return s;
      }
    }
  } catch (e) {}
  return { html: START_HTML, css: START_CSS, done: {} };
}
var state = loadState();
function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
}

htmlIn.value = state.html;
cssIn.value = state.css;

/* ---------- preview ---------- */
function renderPreview() {
  preview.srcdoc = htmlIn.value + '\n<style>\n' + cssIn.value + '\n</style>\n';
}

/* ---------- challenges panel ---------- */
var headLine = document.createElement('p');
var itemEls = {};

function buildPanel() {
  panel.innerHTML = '';
  headLine.style.cssText = 'font-weight:700;margin-bottom:12px';
  panel.appendChild(headLine);
  CHALLENGES.forEach(function (ch) {
    var box = document.createElement('div');
    box.className = 'mission';
    box.innerHTML =
      '<div class="m-title"><span class="m-check"></span>' + ch.title + '</div>' +
      '<p>' + ch.desc + '</p>' +
      '<div class="m-hint">💡 تلميح: <code dir="ltr">' + ch.hint.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</code></div>';
    panel.appendChild(box);
    itemEls[ch.id] = box;
  });
}

function runChecks() {
  var doc;
  var css;
  try { doc = C.parseHTML(htmlIn.value); } catch (e) { doc = { root: { name: '#root', attrs: {}, children: [] }, errors: [] }; }
  try { css = C.parseCSS(cssIn.value); } catch (e) { css = { rules: [], errors: [] }; }
  var doneCount = 0;
  CHALLENGES.forEach(function (ch) {
    var ok = false;
    try { ok = !!ch.check(doc, css); } catch (e) { ok = false; }
    if (ok && !state.done[ch.id]) { state.done[ch.id] = true; save(); }
    var el = itemEls[ch.id];
    var done = !!state.done[ch.id];
    if (done) doneCount++;
    el.classList.toggle('done', done);
    el.querySelector('.m-check').textContent = done ? '✓' : '';
  });
  headLine.textContent = doneCount === CHALLENGES.length
    ? '🏆 برافو عليك! خلصت كل التحديات الـ ' + CHALLENGES.length + ' — الصفحة بتاعتك جاهزة.'
    : 'خلصت ' + doneCount + ' من ' + CHALLENGES.length + ' تحدي';
}

/* ---------- events ---------- */
var deb = null;
function onEdit() {
  state.html = htmlIn.value;
  state.css = cssIn.value;
  save();
  if (deb) clearTimeout(deb);
  deb = setTimeout(function () { renderPreview(); runChecks(); }, 250);
}
htmlIn.addEventListener('input', onEdit);
cssIn.addEventListener('input', onEdit);

tabHtml.addEventListener('click', function () {
  tabHtml.classList.add('active'); tabCss.classList.remove('active');
  htmlIn.hidden = false; cssIn.hidden = true;
});
tabCss.addEventListener('click', function () {
  tabCss.classList.add('active'); tabHtml.classList.remove('active');
  cssIn.hidden = false; htmlIn.hidden = true;
});

toggleBtn.addEventListener('click', function () {
  panel.hidden = !panel.hidden;
  toggleBtn.textContent = panel.hidden ? '🎯 تحديات التدريب' : '🎯 إخفي التحديات';
});

resetBtn.addEventListener('click', function () {
  if (!confirm('متأكد إنك عايز تصفّر المعمل؟ الكود والتحديات هيرجعوا للبداية.')) return;
  state = { html: START_HTML, css: START_CSS, done: {} };
  save();
  htmlIn.value = START_HTML;
  cssIn.value = START_CSS;
  renderPreview();
  runChecks();
});

global.WEB_LAB_FOCUS = function () { htmlIn.focus(); };

/* ---------- boot ---------- */
buildPanel();
renderPreview();
runChecks();
})(typeof window !== 'undefined' ? window : globalThis);
