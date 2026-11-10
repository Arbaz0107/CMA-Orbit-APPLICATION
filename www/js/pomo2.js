/* CMA Orbit 2.0 — Pomodoro additions. Wraps the existing timer; stats stay accurate because
   a log entry is written ONLY when a focus timer actually runs to zero (pomoFinish). */
(function () {
  'use strict';
  function $(id) { return document.getElementById(id); }
  function esc(s) { return escapeHtml(String(s == null ? '' : s)); }
  function log() { if (!Array.isArray(AppState.pomodoroLog)) AppState.pomodoroLog = []; return AppState.pomodoroLog; }
  function longLen() { return Math.min(90, Math.max(1, parseInt(AppState.pomodoroLongBreak) || 20)); }
  function fmt(m) { m = Math.round(m); return m >= 60 ? Math.floor(m / 60) + 'h ' + (m % 60) + 'm' : m + 'm'; }

  // ---- wrap core functions (logic preserved, extras added) ----
  var _finish = pomoFinish, _load = pomoLoadMode, _upd = updatePomodoroDisplay, _open = openPomodoroModal, _hist = renderPomoHistory;
  pomoLoadMode = function (mode) { POMO.long = false; return _load.apply(this, arguments); };
  pomoFinish = function () {
    var wasFocus = POMO.mode === 'focus', mins = pomoSettings().focus;
    var r = _finish.apply(this, arguments);
    if (wasFocus) {
      var sel = $('pomoLinkSelect'), top = $('pomoTopic');
      log().push({ id: 'ps_' + Date.now(), date: todayISO(), ts: Date.now(), subject: (sel && sel.value) || 'Unassigned', topic: (top && top.value.trim()) || '', minutes: mins, status: 'Completed' });
      if (AppState.pomodoroLog.length > 500) AppState.pomodoroLog = AppState.pomodoroLog.slice(-500);
      saveState(); renderInsights();
    }
    return r;
  };
  updatePomodoroDisplay = function () {
    _upd.apply(this, arguments);
    if (POMO.long) {
      $('pomoModeLabel').textContent = 'Long Break'; $('pomoSubStatus').textContent = longLen() + ' min long break';
      var b = $('pomoModeBreakBtn'), f = $('pomoModeFocusBtn'); if (b) b.className = 'flex-1 !h-8'; if (f) f.className = 'flex-1 !h-8';
    }
    var l = $('pomoModeLongBtn'); if (l) l.className = 'flex-1 !h-8' + (POMO.long ? ' on' : '');
    var li = $('pomoLongInput'); if (li && document.activeElement !== li) li.value = longLen();
    mirrorFocus();
  };
  openPomodoroModal = function () {
    var r = _open.apply(this, arguments);
    var sel = $('pomoLinkSelect'); if (sel && AppState.pomodoroLink !== undefined) sel.value = AppState.pomodoroLink || '';
    renderInsights(); return r;
  };
  renderPomoHistory = function () { var r = _hist.apply(this, arguments); renderInsights(); return r; };

  window.o2SetLongBreak = function () {
    pomoLoadMode('break'); POMO.long = true; POMO.total = longLen() * 60; POMO.remaining = POMO.total; updatePomodoroDisplay();
  };
  window.o2SetLongLen = function () {
    AppState.pomodoroLongBreak = Math.min(90, Math.max(1, parseInt($('pomoLongInput').value) || 20)); saveState();
    if (POMO.long && !POMO.running) { POMO.total = longLen() * 60; POMO.remaining = POMO.total; }
    updatePomodoroDisplay();
  };
  window.o2PomoLinkChanged = function () { AppState.pomodoroLink = $('pomoLinkSelect').value; saveState(); };
  window.o2PomoTopicChanged = function () {};
  // Start a focus session linked to something (chapter / formula / mistake / subject)
  window.o2StartFocus = function (subject, topic) {
    openPomodoroModal();
    var sel = $('pomoLinkSelect'), t = $('pomoTopic');
    if (sel) { var ok = Array.prototype.some.call(sel.options, function (o) { return o.value === subject; }); sel.value = ok ? subject : 'Other'; AppState.pomodoroLink = sel.value; }
    if (t) t.value = topic || '';
    if (!POMO.running && POMO.mode !== 'focus') pomoLoadMode('focus');
    updatePomodoroDisplay();
  };

  // ---- insights: totals, subject-wise focus, session history ----
  function totalMinutes() {
    var keys = {}; Object.keys(AppState.pomodoroMinutes || {}).forEach(function (k) { keys[k] = 1; }); Object.keys(AppState.pomodoroStats || {}).forEach(function (k) { keys[k] = 1; });
    return Object.keys(keys).reduce(function (a, k) { return a + pomoMinutesFor(k); }, 0);
  }
  function weekMinutes() { var s = 0, d = todayISO(); for (var i = 0; i < 7; i++) { s += pomoMinutesFor(d); d = addDaysISO(d, -1); } return s; }
  function renderInsights() {
    var box = $('pomoInsights'); if (!box || typeof AppState === 'undefined') return;
    var L = log(), by = {};
    L.forEach(function (e) { by[e.subject] = (by[e.subject] || 0) + (e.minutes || 0); });
    var names = Object.keys(by).sort(function (a, b) { return by[b] - by[a]; }), max = names.length ? by[names[0]] : 0;
    var today = (AppState.pomodoroStats || {})[todayISO()] || 0;
    var recent = L.slice(-6).reverse();
    box.innerHTML =
      '<div class="o2-pi-grid">' +
      pi('lav', fmt(totalMinutes()), 'Total focus') + pi('sun', fmt(weekMinutes()), 'This week') +
      pi('teal', String(today), 'Sessions today') + pi('pink', String(computeStreak()), 'Day streak') + '</div>' +
      '<div class="orb-label mt-4 mb-2">Focus by subject</div>' +
      (names.length ? names.map(function (n) { return '<div class="o2-bar"><span>' + esc(n) + '</span><div><i style="width:' + Math.max(4, Math.round(by[n] / max * 100)) + '%"></i></div><b>' + fmt(by[n]) + '</b></div>'; }).join('')
        : '<div class="o2-pi-empty">Link a session to a subject (above) and finish it to see subject-wise focus time here.</div>') +
      '<div class="orb-label mt-4 mb-2">Recent sessions</div>' +
      (recent.length ? recent.map(function (e) {
        var d = new Date(e.ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
        return '<div class="o2-sess"><div class="min-w-0"><b>' + esc(e.subject) + '</b><small>' + d + (e.topic ? ' · ' + esc(e.topic) : '') + '</small></div><span>' + fmt(e.minutes) + '</span><em>' + esc(e.status) + '</em></div>';
      }).join('') : '<div class="o2-pi-empty">No tagged sessions yet. Completed focus sessions will be listed here.</div>');
  }
  function pi(c, v, k) { return '<div class="o2-tile o2-' + c + '"><b>' + esc(v) + '</b><small>' + esc(k) + '</small></div>'; }

  // ---- distraction-free focus mode ----
  function ensureFocus() {
    var o = $('o2FocusMode'); if (o) return o;
    o = document.createElement('div'); o.id = 'o2FocusMode'; o.className = 'o2-focus hidden';
    o.innerHTML = '<button class="o2-f-x" onclick="o2CloseFocusMode()" aria-label="Exit focus mode"><i class="ph ph-x"></i></button>' +
      '<div class="o2-f-lab" id="o2fLab">Deep Focus</div><div class="o2-f-ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" class="bg"/><circle id="o2fArc" cx="50" cy="50" r="46" class="fg" stroke-dasharray="289" stroke-dashoffset="0"/></svg><div id="o2fTime">00:00</div></div>' +
      '<div class="o2-f-sub" id="o2fSub"></div><div class="o2-f-ctl"><button onclick="resetPomodoro()" aria-label="Reset"><i class="ph ph-arrow-counter-clockwise"></i></button><button class="main" onclick="togglePomodoro()" aria-label="Start or pause"><i id="o2fPlay" class="ph-fill ph-play"></i></button><button onclick="skipPomodoro()" aria-label="Skip"><i class="ph ph-skip-forward"></i></button></div>';
    document.body.appendChild(o); return o;
  }
  function mirrorFocus() {
    var o = $('o2FocusMode'); if (!o || o.classList.contains('hidden')) return;
    $('o2fTime').textContent = $('pomoTimerDisplay').textContent; $('o2fLab').textContent = $('pomoModeLabel').textContent;
    $('o2fArc').style.strokeDashoffset = 289 * (1 - (POMO.total > 0 ? POMO.remaining / POMO.total : 0));
    $('o2fPlay').className = POMO.running ? 'ph-fill ph-pause' : 'ph-fill ph-play';
    var sel = $('pomoLinkSelect'), t = $('pomoTopic'); $('o2fSub').textContent = ((sel && sel.value) || '') + ((t && t.value) ? ' · ' + t.value : '');
  }
  window.o2OpenFocusMode = function () { ensureFocus().classList.remove('hidden'); mirrorFocus(); };
  window.o2CloseFocusMode = function () { var o = $('o2FocusMode'); if (o) o.classList.add('hidden'); };
})();
