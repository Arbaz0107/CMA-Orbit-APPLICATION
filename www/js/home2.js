/* CMA Orbit 2.0 — Home dashboard additions (additive, read-only on AppState).
   Wraps renderHomeTab() so the new hero / subject cards / formula / revision cards
   always reflect real stored data. Nothing here writes to AppState. */
(function () {
  'use strict';
  var C = 2 * Math.PI * 52;
  function $(id) { return document.getElementById(id); }
  function num(t) { var m = String(t || '').match(/[\d.]+/); return m ? parseFloat(m[0]) : 0; }
  function esc(s) { return (typeof escapeHtml === 'function') ? escapeHtml(String(s == null ? '' : s)) : String(s); }
  var COLORS = ['pink', 'sun', 'teal', 'lav', 'orange'];

  function ensureContainers() {
    var tab = $('tab-home'); if (!tab) return null;
    var hero = $('o2Hero');
    if (!hero) {
      hero = document.createElement('section'); hero.id = 'o2Hero'; hero.className = 'o2-hero';
      var after = tab.querySelector('.sr-only'); tab.insertBefore(hero, after ? after.nextSibling : tab.firstChild);
    }
    var ex = $('o2Extras');
    if (!ex) {
      ex = document.createElement('div'); ex.id = 'o2Extras'; ex.className = 'space-y-3';
      var lbl = $('dashActiveScopeLabel'), row = lbl && lbl.parentNode && lbl.parentNode.parentNode; if (row && row.parentNode === tab) tab.insertBefore(ex, row.nextSibling); else tab.appendChild(ex);
    }
    return { hero: hero, ex: ex };
  }

  function scopeStats() {
    var papers = (typeof getScopedPapers === 'function') ? getScopedPapers() : [];
    var tot = 0, done = 0, rows = [];
    papers.forEach(function (p) {
      var t = 0, d = 0, chDone = 0;
      (p.chapters || []).forEach(function (ch) { t += ch.totalLectures || 0; d += ch.completedLectures || 0; if ((ch.totalLectures || 0) > 0 && ch.completedLectures >= ch.totalLectures) chDone++; });
      tot += t; done += d;
      rows.push({ id: p.id, name: p.name, pct: t > 0 ? Math.round(d / t * 100) : 0, chapters: (p.chapters || []).length, chDone: chDone, lec: d, lecTot: t });
    });
    return { pct: tot > 0 ? Math.round(done / tot * 100) : 0, rows: rows };
  }

  function renderHero() {
    var c = ensureContainers(); if (!c || typeof AppState === 'undefined' || !AppState.plannerTasks) return;
    var st = scopeStats();
    var today = todayISO();
    var tasks = AppState.plannerTasks.filter(function (t) { return t.date === today; });
    var tDone = tasks.filter(function (t) { return t.completed; }).length;
    var logged = num(($('dailyLoggedHoursText') || {}).textContent);
    var target = num(($('dailyTargetHoursText') || {}).textContent) || (AppState.dailyStudyGoals && AppState.dailyStudyGoals.targetHours) || 0;
    var streak = (typeof computeStreak === 'function') ? computeStreak() : 0;
    var dateTxt = new Date().toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' });
    var off = C - C * st.pct / 100;
    c.hero.innerHTML =
      '<div class="o2-hero-top"><span class="o2-date"><i class="ph ph-calendar-blank"></i>' + esc(dateTxt) + '</span>' +
      '<span class="o2-streak"><i class="ph-fill ph-flame"></i>' + streak + ' day streak</span></div>' +
      '<div class="o2-hero-body"><div class="o2-ring"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" class="o2-ring-bg"/>' +
      '<circle cx="60" cy="60" r="52" class="o2-ring-fg" stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/></svg>' +
      '<div class="o2-ring-c"><b>' + st.pct + '%</b><small>Prepared</small></div></div>' +
      '<div class="o2-hero-info"><div class="o2-h-title">Today\'s learning</div><div class="o2-h-sub">Overall syllabus completed for your selected scope</div>' +
      '<button class="o2-h-cta" onclick="openPomodoroModal()"><i class="ph-fill ph-play"></i>Start focus</button></div></div>' +
      '<div class="o2-tiles">' +
      tile('lav', 'ph-clock', logged.toFixed(1) + 'h', 'Studied today') +
      tile('sun', 'ph-check-circle', tDone + '/' + tasks.length, 'Tasks done') +
      tile('pink', 'ph-hourglass-medium', String(tasks.length - tDone), 'Remaining') +
      tile('teal', 'ph-target', target.toFixed(1) + 'h', 'Daily target') + '</div>';
  }
  function tile(col, ico, v, k) { return '<div class="o2-tile o2-' + col + '"><i class="ph ' + ico + '"></i><b>' + esc(v) + '</b><small>' + esc(k) + '</small></div>'; }

  function formulaOfDay() {
    var f = (AppState.customFormulas || []); if (!f.length) return null;
    var h = 0, s = todayISO(); for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return f[h % f.length];
  }

  function renderExtras() {
    var c = ensureContainers(); if (!c) return;
    var st = scopeStats(), html = '';
    // Formula of the day (from the user's own formula bank)
    var f = formulaOfDay();
    html += '<div class="o2-fod">' + (f
      ? '<div class="o2-fod-k"><i class="ph ph-function"></i>Formula of the day</div><div class="o2-fod-t">' + esc(f.title) + '</div><div class="o2-fod-f">' + esc(f.formula || '') + '</div>' +
        '<div class="o2-fod-m"><span>' + esc(f.subject || '') + '</span><button onclick="openFormulaModal()">Open Formula Hub <i class="ph ph-arrow-right"></i></button></div>'
      : '<div class="o2-fod-k"><i class="ph ph-function"></i>Formula of the day</div><div class="o2-fod-t">No formulas yet</div><div class="o2-fod-f">Add formulas to your Formula bank and one will be featured here each day.</div><div class="o2-fod-m"><span></span><button onclick="openFormulaModal()">Open Formula Hub <i class="ph ph-arrow-right"></i></button></div>') + '</div>';
    // Revision reminder — mistakes + due revisions
    var mb = AppState.mistakeBook || [], due = num(($('dueRevisionBadge') || {}).textContent);
    var by = {}; mb.forEach(function (m) { var k = m.subject || 'General'; by[k] = (by[k] || 0) + 1; });
    var weakest = Object.keys(by).sort(function (a, b) { return by[b] - by[a]; })[0];
    html += '<div class="o2-rev"><div class="o2-rev-h"><i class="ph ph-arrows-clockwise"></i>Revision reminder</div><div class="o2-rev-grid">' +
      '<button onclick="openRevisionList()"><b>' + due + '</b><small>Revisions due</small></button>' +
      '<button onclick="openMistakeBookModal()"><b>' + (window.o2MbDueCount ? window.o2MbDueCount() : mb.length) + '</b><small>Mistakes due (' + mb.length + ' saved)</small></button></div>' +
      (weakest ? '<div class="o2-rev-w">Most mistakes in <b>' + esc(weakest) + '</b> (' + by[weakest] + ')</div>' : '<div class="o2-rev-w">No mistakes saved yet — wrong MCQ answers land here.</div>') + '</div>';
    c.ex.innerHTML = html;
  }

  window.o2OpenSubject = function (id) {
    try { AppState.selectedSubjectId = id; if (typeof saveState === 'function') saveState(); } catch (e) {}
    switchTab('study');
  };
  window.o2RenderHome = function () { try { renderHero(); renderExtras(); } catch (e) { console.error('home2', e); } };

  var _orig = window.renderHomeTab;
  if (typeof _orig === 'function') {
    window.renderHomeTab = renderHomeTab = function () { var r = _orig.apply(this, arguments); window.o2RenderHome(); return r; };
  }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(window.o2RenderHome, 0); });
})();
