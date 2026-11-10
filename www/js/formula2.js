/* CMA Orbit 2.0 — Formula Hub additions. Extra per-formula fields are additive:
   pinned, notes, variables, tip, related, difficulty, lastViewed, revisedCount, lastRevised, revLog. */
(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  function esc(s) { return escapeHtml(String(s == null ? '' : s)); }
  var DAY = 864e5;

  // ---- search / filter / pin ordering ----
  var _filtered = fvFiltered;
  fvFiltered = function () {
    var q = (fvFilter.q || '').toLowerCase(), saved = fvFilter.q; fvFilter.q = '';
    var list; try { list = _filtered.apply(this, arguments); } finally { fvFilter.q = saved; }
    if (q) list = list.filter(function (f) {
      return [f.title, f.formula, f.explanation, f.example, f.variables, f.tip, f.related, f.notes, f.subject, formulaChapterOf(f)].join(' ').toLowerCase().indexOf(q) > -1;
    });
    if (fvFilter.chip === 'difficult') list = list.filter(function (f) { return f.difficulty === 'difficult'; });
    if (fvFilter.chip === 'pinned') list = list.filter(function (f) { return f.pinned; });
    if (fvFilter.chip === 'recent') list = list.filter(function (f) { return f.lastViewed && Date.now() - f.lastViewed < 7 * DAY; }).sort(function (a, b) { return b.lastViewed - a.lastViewed; });
    return list.filter(function (f) { return f.pinned; }).concat(list.filter(function (f) { return !f.pinned; }));
  };

  // ---- dashboard ----
  var _render = renderFormulas;
  renderFormulas = function () { var r = _render.apply(this, arguments); try { dash(); } catch (e) { console.error(e); } return r; };
  function dash() {
    var box = $('o2FvDash'); if (!box) return;
    var all = getAllVaultFormulas(), n = all.length;
    var fav = all.filter(function (f) { return f.starred; }).length;
    var rec = all.filter(function (f) { return f.lastViewed && Date.now() - f.lastViewed < 7 * DAY; }).length;
    var due = all.filter(function (f) { return f.revise; }).length;
    var dif = all.filter(function (f) { return f.difficulty === 'difficult'; }).length;
    var rv = all.filter(function (f) { return (f.revisedCount || 0) > 0; }).length;
    var pct = n ? Math.round(rv / n * 100) : 0;
    var ratings = 0, know = 0; all.forEach(function (f) { (f.revLog || []).forEach(function (e) { ratings++; if (e.r === 'know') know++; }); });
    var subj = {}; all.forEach(function (f) { var s = f.subject || 'General'; subj[s] = (subj[s] || 0) + 1; });
    function t(c, v, k, chip) { return '<button class="o2-tile o2-' + c + (fvFilter.chip === chip ? ' o2-on' : '') + '" onclick="setFormulaChip(\'' + chip + '\')"><b>' + v + '</b><small>' + k + '</small></button>'; }
    var wasOpen = box.querySelector('details') ? box.querySelector('details').open : (window.innerHeight >= 700);
    box.innerHTML = '<details class="o2-dd"' + (wasOpen ? ' open' : '') + '><summary><span><i class="ph ph-squares-four"></i>Dashboard</span><em>' + n + ' formulas · ' + rv + ' revised</em></summary>' +
      '<div class="o2-fvtiles">' + t('lav', n, 'Total', 'all') + t('sun', fav, 'Favourites', 'starred') + t('teal', rec, 'Recent (7d)', 'recent') +
      t('pink', due, 'Revision due', 'revise') + t('orange', dif, 'Difficult', 'difficult') + t('lav', all.filter(function (f) { return f.pinned; }).length, 'Pinned', 'pinned') + '</div>' +
      '<div class="o2-fvprog"><div><span>Revision progress</span><b>' + rv + '/' + n + ' revised</b>' + (ratings ? '<em>Recall rate ' + Math.round(know / ratings * 100) + '% (' + ratings + ' ratings)</em>' : '') + '</div><div class="bar"><i style="width:' + pct + '%"></i></div></div>' +
      '<div class="o2-fvsubj o2-wrapchips no-scrollbar"><button class="' + (!fvFilter.subject ? 'on' : '') + '" onclick="o2FvSubject(\'\')">All</button>' +
      Object.keys(subj).sort().map(function (s) { return '<button class="' + (fvFilter.subject === s ? 'on' : '') + '" onclick="o2FvSubject(this.dataset.s)" data-s="' + esc(s) + '">' + esc(s) + ' <small>' + subj[s] + '</small></button>'; }).join('') + '</div></details>';
  }
  window.o2FvSubject = function (s) { fvFilter.subject = s; fvFilter.chapter = ''; try { fvPopulateFilters(); } catch (e) {} renderFormulas(); };

  // ---- card extras ----
  var _build = buildFormulaCard;
  buildFormulaCard = function (f) {
    var card = _build.apply(this, arguments);
    var x = document.createElement('div'); x.className = 'o2-fx';
    var parts = '';
    if (f.variables) parts += '<div class="o2-fx-row"><span>Variables</span><p>' + esc(f.variables) + '</p></div>';
    if (f.tip) parts += '<div class="o2-fx-row"><span>Note</span><p>' + esc(f.tip) + '</p></div>';
    if (f.related) parts += '<div class="o2-fx-row"><span>Related</span><p>' + esc(f.related) + '</p></div>';
    var rc = f.revisedCount || 0;
    x.innerHTML = parts +
      '<div class="o2-fx-note ' + (f.notes ? '' : 'hidden') + '"><textarea rows="2" placeholder="Personal note…">' + esc(f.notes || '') + '</textarea></div>' +
      '<div class="o2-fx-acts">' +
      '<button class="pin ' + (f.pinned ? 'on' : '') + '"><i class="ph-' + (f.pinned ? 'fill' : 'bold') + ' ph-push-pin"></i>' + (f.pinned ? 'Pinned' : 'Pin') + '</button>' +
      '<button class="note"><i class="ph-bold ph-note-pencil"></i>Note</button>' +
      '<button class="share"><i class="ph-bold ph-share-network"></i>Share</button>' +
      '<button class="focus"><i class="ph-bold ph-timer"></i>Focus</button>' +
      '<button class="rev ' + (rc ? 'on' : '') + '"><i class="ph-bold ph-check-circle"></i>' + (rc ? 'Revised ×' + rc : 'Mark revised') + '</button></div>';
    var badges = [];
    if (f.pinned) badges.push('<span class="o2-bd pin"><i class="ph-fill ph-push-pin"></i></span>');
    if (f.difficulty === 'difficult') badges.push('<span class="o2-bd dif">Difficult</span>');
    if (badges.length) { var h = card.querySelector('h4'); if (h) h.insertAdjacentHTML('afterend', '<div class="o2-bds">' + badges.join('') + '</div>'); }
    card.appendChild(x);
    var q = function (s) { return x.querySelector(s); };
    q('.pin').onclick = function () { f.pinned = !f.pinned; saveState(); renderFormulas(); };
    q('.note').onclick = function () { var n = q('.o2-fx-note'); n.classList.toggle('hidden'); if (!n.classList.contains('hidden')) n.querySelector('textarea').focus(); };
    q('textarea').onblur = function () { var v = this.value.trim(); if (v !== (f.notes || '')) { f.notes = v; saveState(); showToast(v ? 'Note saved' : 'Note removed'); } };
    q('.share').onclick = function () {
      var txt = fvFormatForCopy(f);
      if (navigator.share) navigator.share({ title: f.title, text: txt }).catch(function () {}); else copyToClipboard(txt, 'Formula copied — paste it to share');
    };
    q('.focus').onclick = function () { closeFormulaModal(); o2StartFocus(f.subject, f.title); };
    q('.rev').onclick = function () {
      f.revisedCount = (f.revisedCount || 0) + 1; f.lastRevised = Date.now(); f.revise = false;
      (f.revLog = f.revLog || []).push({ ts: Date.now(), r: 'know' }); markActivity(); saveState(); showToast('Marked as revised'); renderFormulas();
    };
    card.addEventListener('click', function () { if (!f.lastViewed || Date.now() - f.lastViewed > 6e4) { f.lastViewed = Date.now(); saveState(); } });
    return card;
  };

  // ---- quick revision: Know it / Need revision / Difficult / Skip ----
  var _rr = fvReviseRender;
  fvReviseRender = function () {
    _rr.apply(this, arguments);
    var r = fvRevise; if (!r || r.done || !r.revealed) return;
    $('fvReviseActions').innerHTML =
      '<button onclick="o2FvRate(\'know\')" class="o2-rate know"><i class="ph-bold ph-check"></i>Know it</button>' +
      '<button onclick="o2FvRate(\'need\')" class="o2-rate need"><i class="ph-bold ph-arrows-clockwise"></i>Need revision</button>' +
      '<button onclick="o2FvRate(\'difficult\')" class="o2-rate dif"><i class="ph-bold ph-warning"></i>Difficult</button>' +
      '<button onclick="o2FvNext()" class="o2-rate skip"><i class="ph-bold ph-skip-forward"></i>Next</button>';
  };
  window.o2FvRate = function (kind) {
    var r = fvRevise, f = r.list[r.i]; if (!f) return;
    f.difficulty = kind; f.revisedCount = (f.revisedCount || 0) + 1; f.lastRevised = Date.now();
    (f.revLog = f.revLog || []).push({ ts: Date.now(), r: kind });
    fvMark(kind === 'know');           // existing logic: sets revise flag, counts, advances, saves
  };
  window.o2FvNext = function () { var r = fvRevise; r.revealed = false; if (r.i + 1 >= r.list.length) r.done = true; else r.i++; fvReviseRender(); };
})();
