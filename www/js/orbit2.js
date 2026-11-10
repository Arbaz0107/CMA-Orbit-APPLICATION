/* CMA Orbit 2.0 — replaces native <select> popups with a themed bottom sheet.
   Presentation only: the <select> stays the source of truth; we set .value and
   dispatch input/change so every existing onchange handler runs unchanged.
   Add data-native to any <select> to keep the system picker. */
(function () {
  'use strict';
  var ICONS = [
    [/^all (subjects|chapters)|^all$/i, 'ph-squares-four'],
    [/financial|fm\b|bd&a|business data/i, 'ph-coins'],
    [/management accounting|\bma\b/i, 'ph-chart-pie-slice'],
    [/corporate|auditing|caa/i, 'ph-scales'],
    [/operations|strategic|omsm/i, 'ph-gear-six']
  ];
  var open = null;
  function iconFor(t) { for (var i = 0; i < ICONS.length; i++) if (ICONS[i][0].test(t)) return ICONS[i][1]; return null; }
  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function titleFor(sel) {
    var l = sel.id && document.querySelector('label[for="' + sel.id + '"]');
    if (!l) { var p = sel.parentElement; l = p && p.querySelector('label'); }
    var t = l && l.textContent.trim();
    if (t) return t;
    var id = (sel.id || '').toLowerCase();
    if (id.indexOf('chapter') > -1) return 'Select chapter';
    if (id.indexOf('subject') > -1) return 'Select subject';
    if (id.indexOf('sort') > -1) return 'Sort by';
    return 'Choose an option';
  }
  function close() {
    if (!open) return; var o = open; open = null;
    o.classList.remove('on'); setTimeout(function () { if (o.parentNode) o.parentNode.removeChild(o); }, 260);
  }
  function show(sel) {
    if (open) close();
    var opts = Array.prototype.slice.call(sel.options);
    var ov = document.createElement('div'); ov.className = 'o2-ov';
    var withIcons = opts.some(function (o) { return iconFor(o.text); }) && /subject/i.test(sel.id || '');
    ov.innerHTML = '<div class="o2-sheet" role="dialog" aria-modal="true"><div class="o2-grab"></div>' +
      '<div class="o2-head"><h3>' + esc(titleFor(sel)) + '</h3><button type="button" class="o2-x" aria-label="Close"><i class="ph ph-x"></i></button></div>' +
      (opts.length > 8 ? '<input type="search" class="o2-search" placeholder="Search…" autocomplete="off">' : '') +
      '<div class="o2-list"></div></div>';
    var list = ov.querySelector('.o2-list');
    function render(q) {
      list.innerHTML = ''; var n = 0; q = (q || '').toLowerCase();
      opts.forEach(function (o, i) {
        if (q && o.text.toLowerCase().indexOf(q) < 0) return; n++;
        var b = document.createElement('button'); b.type = 'button';
        b.className = 'o2-opt' + (i === sel.selectedIndex ? ' sel' : ''); b.disabled = o.disabled;
        var ic = withIcons ? (iconFor(o.text) || 'ph-book-open') : null;
        b.innerHTML = (ic ? '<span class="o2-ico"><i class="ph ' + ic + '"></i></span>' : '') +
          '<span class="o2-t">' + esc(o.text) + '</span><span class="o2-tick"><i class="ph-bold ph-check"></i></span>';
        b.onclick = function () {
          if (sel.selectedIndex !== i) { sel.selectedIndex = i; sel.dispatchEvent(new Event('input', { bubbles: true })); sel.dispatchEvent(new Event('change', { bubbles: true })); }
          close();
        };
        list.appendChild(b);
      });
      if (!n) list.innerHTML = '<div class="o2-none">No matches</div>';
    }
    render('');
    var s = ov.querySelector('.o2-search'); if (s) s.addEventListener('input', function () { render(s.value); });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.querySelector('.o2-x').onclick = close;
    document.body.appendChild(ov); open = ov;
    requestAnimationFrame(function () { ov.classList.add('on'); var sl = list.querySelector('.sel'); if (sl && sl.scrollIntoView) sl.scrollIntoView({ block: 'center' }); });
  }
  function eligible(t) { return t && t.tagName === 'SELECT' && !t.multiple && !t.disabled && !t.hasAttribute('data-native') && t.options.length > 0; }
  function handler(e) { var t = e.target; if (!eligible(t)) return; e.preventDefault(); t.blur(); show(t); }
  document.addEventListener('mousedown', handler, true);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    else if ((e.key === 'Enter' || e.key === ' ') && eligible(e.target)) { e.preventDefault(); show(e.target); }
  }, true);
  document.addEventListener('DOMContentLoaded', function () {
    var mark = function (r) { Array.prototype.forEach.call((r || document).querySelectorAll('select'), function (s) { if (eligible(s)) s.classList.add('o2-sel'); }); };
    mark(); new MutationObserver(function () { mark(); }).observe(document.body, { childList: true, subtree: true });
  });
})();

/* ===== Themed suggestion list for text fields that use a <datalist> =====
   The phone's own suggestion popup is a black system bubble that ignores the app theme, so inputs with a
   list="" attribute get this dropdown instead. The datalist stays the data source (read live each time). */
(function () {
  var pop = null, cur = null;
  function adopt(inp) {
    if (!inp || inp.tagName !== 'INPUT') return;
    var id = inp.getAttribute('list');
    if (!id) return;
    inp.setAttribute('data-dl', id);
    inp.removeAttribute('list');       // stops the native popup
    inp.setAttribute('autocomplete', 'off');
  }
  function scan(root) { Array.prototype.forEach.call((root || document).querySelectorAll('input[list]'), adopt); }
  function options(inp) {
    var dl = document.getElementById(inp.getAttribute('data-dl'));
    if (!dl) return [];
    return Array.prototype.map.call(dl.options, function (o) { return o.value || o.text || ''; }).filter(Boolean);
  }
  function close() { if (pop && pop.parentNode) pop.parentNode.removeChild(pop); pop = null; cur = null; }
  function place() {
    if (!pop || !cur) return;
    var r = cur.getBoundingClientRect(), vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    var below = vh - r.bottom - 10, above = r.top - 10, h = Math.min(pop.scrollHeight, 232);
    var up = below < Math.min(h, 140) && above > below;
    pop.style.left = Math.max(8, r.left) + 'px';
    pop.style.width = Math.min(r.width, window.innerWidth - 16) + 'px';
    pop.style.maxHeight = Math.max(96, Math.min(232, up ? above : below)) + 'px';
    if (up) { pop.style.top = ''; pop.style.bottom = (window.innerHeight - r.top + 6) + 'px'; }
    else { pop.style.bottom = ''; pop.style.top = (r.bottom + 6) + 'px'; }
  }
  function render(inp, filter) {
    var q = (filter || '').trim().toLowerCase();
    var list = options(inp).filter(function (v) { return !q || v.toLowerCase().indexOf(q) > -1; });
    if (list.length === 1 && list[0].toLowerCase() === q) list = [];   // already typed in full
    if (!list.length) { close(); return; }
    if (!pop) { pop = document.createElement('div'); pop.className = 'o2-combo'; pop.setAttribute('role', 'listbox'); document.body.appendChild(pop); }
    cur = inp; pop.innerHTML = '';
    list.slice(0, 60).forEach(function (v) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'o2-combo-item'; b.setAttribute('role', 'option'); b.textContent = v;
      b.addEventListener('pointerdown', function (e) { e.preventDefault(); });          // keep the keyboard / focus
      b.addEventListener('click', function () {
        inp.value = v;
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        inp.dispatchEvent(new Event('change', { bubbles: true }));
        close();
      });
      pop.appendChild(b);
    });
    place();
  }
  scan();
  document.addEventListener('DOMContentLoaded', function () { scan(); });
  document.addEventListener('focusin', function (e) {
    var t = e.target; if (t && t.tagName === 'INPUT') adopt(t);
    if (t && t.getAttribute && t.getAttribute('data-dl')) render(t, '');
  }, true);
  document.addEventListener('input', function (e) {
    var t = e.target; if (t && t.getAttribute && t.getAttribute('data-dl')) render(t, t.value);
  }, true);
  document.addEventListener('focusout', function (e) { if (e.target === cur) setTimeout(function () { if (document.activeElement !== cur) close(); }, 120); }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pop) close(); }, true);
  window.addEventListener('scroll', function (e) { if (pop && !(e.target && e.target.closest && e.target.closest('.o2-combo'))) place(); }, true);
  window.addEventListener('resize', place);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', place);
})();
