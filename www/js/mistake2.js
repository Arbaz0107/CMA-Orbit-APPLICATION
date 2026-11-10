/* CMA Orbit 2.0 — Mistake Book: Error Intelligence.
   Existing records are preserved; new fields are added with safe defaults on read.
   Nothing is ever auto-deleted (repeat detection only groups, never merges). */
(function () {
  'use strict';
  var TYPES = ['Conceptual mistake', 'Calculation mistake', 'Formula mistake', 'Silly mistake', 'Misread question', 'Memory mistake', 'Time-management mistake', 'Accounting treatment mistake', 'Theory mistake', 'Other'];
  var PRI = ['High', 'Medium', 'Low'], INTERVALS = [1, 3, 7, 15, 30], DAY = 864e5;
  var UI = { tab: 'overview', filter: 'all', q: '' };
  function $(id) { return document.getElementById(id); }
  function esc(s) { return escapeHtml(String(s == null ? '' : s)); }
  function list() { return AppState.mistakeBook || (AppState.mistakeBook = []); }
  function dayOf(ts) { return toISODate(new Date(ts)); }

  // ---- normalise (idempotent, additive) ----
  function fix(m) {
    if (!m.id) m.id = 'err_' + Date.now() + '_' + Math.floor(Math.random() * 1e4);
    if (!m.created) { var p = /^err_(\d+)_/.exec(m.id); m.created = p ? +p[1] : Date.now(); }
    if (!m.type) m.type = 'Other'; if (!m.status) m.status = 'New'; if (!m.priority) m.priority = 'Medium';
    if (!Array.isArray(m.revLog)) m.revLog = [];
    if (!m.nextReview) m.nextReview = addDaysISO(dayOf(m.created), 1);
    if (!m.subject) m.subject = 'General';
    return m;
  }
  function all() { var l = list(); l.forEach(fix); return l; }
  function isDue(m) { return m.status !== 'Mastered' && m.nextReview <= todayISO(); }
  function eff(m) { return (m.status !== 'Mastered' && m.status !== 'New' && isDue(m)) ? 'Review Needed' : m.status; }
  function toks(s) { var o = {}; String(s || '').toLowerCase().split(/[^a-z0-9]+/).forEach(function (w) { if (w.length > 2) o[w] = 1; }); return o; }
  function same(a, b) {
    var ka = normKey(a.question), kb = normKey(b.question);
    if (ka && ka === kb) return true;
    var ta = toks(a.question), tb = toks(b.question), ia = 0, na = Object.keys(ta).length, nb = Object.keys(tb).length;
    Object.keys(ta).forEach(function (w) { if (tb[w]) ia++; });
    if (na > 3 && nb > 3 && ia / (na + nb - ia) >= 0.6) return true;
    return !!(a.topic && b.topic && normKey(a.topic) === normKey(b.topic) && a.type === b.type && a.subject === b.subject);
  }
  function repeats() { var l = all(), r = {}; l.forEach(function (m) { r[m.id] = l.filter(function (o) { return o !== m && same(m, o); }); }); return r; }
  window.o2MbDueCount = function () { return all().filter(isDue).length; };

  // ---- main render (replaces old list) ----
  renderMistakeBook = function () {
    var box = $('mistakeListContainer'); if (!box) return;
    var l = all(), tabs = [['overview', 'Overview'], ['list', 'Mistakes'], ['stats', 'Analytics']];
    box.innerHTML = '<div class="orb-seg w-full !flex">' + tabs.map(function (t) { return '<button class="flex-1 !h-8 ' + (UI.tab === t[0] ? 'on' : '') + '" onclick="o2Mb.tab(\'' + t[0] + '\')">' + t[1] + '</button>'; }).join('') + '</div><div id="o2MbBody"></div>';
    var b = $('o2MbBody');
    if (!l.length) { b.innerHTML = '<div class="orb-empty"><div class="e-ico"><i class="ph ph-shield-check"></i></div><div class="e-ttl">No mistakes recorded</div><div class="e-sub">Wrong answers from tests are saved here automatically. You can also add one yourself.</div><button class="btn btn-primary btn-sm mt-3" onclick="o2Mb.openForm()"><i class="ph-bold ph-plus"></i>Add a mistake</button></div>'; return; }
    b.innerHTML = UI.tab === 'overview' ? overview(l) : UI.tab === 'list' ? listView(l) : stats(l);
  };
  function by(l, f) { var o = {}; l.forEach(function (m) { var k = f(m) || 'General'; o[k] = (o[k] || 0) + 1; }); return o; }
  function top(o) { var k = Object.keys(o).sort(function (a, b) { return o[b] - o[a]; })[0]; return k ? { k: k, n: o[k] } : null; }
  function tile(c, v, k, f) { return '<button class="o2-tile o2-' + c + '" onclick="o2Mb.go(\'' + (f || 'all') + '\')"><b>' + v + '</b><small>' + k + '</small></button>'; }
  function overview(l) {
    var rp = repeats(), open = l.filter(function (m) { return m.status !== 'Mastered'; });
    var due = l.filter(isDue).length, rep = l.filter(function (m) { return rp[m.id].length; }).length;
    var wS = top(by(open, function (m) { return m.subject; })), wC = top(by(open.filter(function (m) { return m.chapter; }), function (m) { return m.chapter; }));
    var nextUp = open.filter(isDue).sort(function (a, b) { return pr(a) - pr(b); }).slice(0, 3);
    return '<div class="o2-mbtiles">' + tile('lav', l.length, 'Total') + tile('sun', l.filter(function (m) { return m.status === 'New'; }).length, 'New', 'new') + tile('pink', open.length, 'Unresolved', 'open') +
      tile('teal', l.filter(function (m) { return /^Revised/.test(m.status); }).length, 'Revised', 'revised') + tile('orange', rep, 'Repeated', 'repeat') + tile('lav', l.filter(function (m) { return m.status === 'Mastered'; }).length, 'Mastered', 'mastered') +
      tile('pink', open.filter(function (m) { return m.priority === 'High'; }).length, 'High priority', 'high') + tile('sun', due, 'Due today', 'due') + '</div>' +
      '<div class="o2-weak"><div><small>Weakest subject</small><b>' + (wS ? esc(wS.k) + ' · ' + wS.n : '—') + '</b></div><div><small>Weakest chapter</small><b>' + (wC ? esc(wC.k) + ' · ' + wC.n : '—') + '</b></div></div>' +
      '<div class="orb-label mt-3 mb-2">Revise next</div>' + (nextUp.length ? nextUp.map(function (m) { return card(m, rp); }).join('') : '<div class="o2-pi-empty">Nothing is due right now. 🎉</div>');
  }
  function pr(m) { return PRI.indexOf(m.priority); }
  function listView(l) {
    var rp = repeats(), q = UI.q.toLowerCase(), f = UI.filter;
    var rows = l.filter(function (m) {
      if (f === 'new' && m.status !== 'New') return false; if (f === 'open' && m.status === 'Mastered') return false;
      if (f === 'revised' && !/^Revised/.test(m.status)) return false; if (f === 'repeat' && !rp[m.id].length) return false;
      if (f === 'mastered' && m.status !== 'Mastered') return false; if (f === 'high' && !(m.priority === 'High' && m.status !== 'Mastered')) return false; if (f === 'due' && !isDue(m)) return false;
      return !q || [m.question, m.subject, m.chapter, m.topic, m.type, m.keyLearning].join(' ').toLowerCase().indexOf(q) > -1;
    });
    var chips = [['all', 'All'], ['due', 'Due'], ['open', 'Unresolved'], ['high', 'High'], ['repeat', 'Repeated'], ['revised', 'Revised'], ['mastered', 'Mastered']];
    return '<input type="search" class="o2-search" placeholder="Search mistakes…" value="' + esc(UI.q) + '" oninput="o2Mb.search(this.value)">' +
      '<div class="o2-fvsubj o2-wrapchips no-scrollbar">' + chips.map(function (c) { return '<button class="' + (f === c[0] ? 'on' : '') + '" onclick="o2Mb.go(\'' + c[0] + '\')">' + c[1] + '</button>'; }).join('') + '</div>' +
      '<div id="o2MbRows">' + (rows.length ? rows.map(function (m) { return card(m, rp); }).join('') : '<div class="o2-pi-empty">No mistakes match this view.</div>') + '</div>';
  }
  function card(m, rp) {
    var n = (rp[m.id] || []).length, st = eff(m);
    return '<button class="o2-mb o2-pri-' + m.priority + '" onclick="o2Mb.detail(\'' + m.id + '\')"><div class="o2-mb-top"><span>' + esc(m.subject) + (m.chapter ? ' · ' + esc(m.chapter) : '') + '</span><em class="st-' + st.replace(/\s/g, '') + '">' + st + '</em></div>' +
      '<p>' + esc(m.question || '(no question text)') + '</p><div class="o2-mb-bot"><i>' + esc(m.type) + '</i>' + (n ? '<b>↻ ' + (n + 1) + '× repeated</b>' : '') + (isDue(m) ? '<b class="due">Due</b>' : '') + '</div></button>';
  }
  function bars(o, max, n) { var ks = Object.keys(o).sort(function (a, b) { return o[b] - o[a]; }).slice(0, n || 6), m = max || (ks.length ? o[ks[0]] : 1); return ks.length ? ks.map(function (k) { return '<div class="o2-bar"><span>' + esc(k) + '</span><div><i style="width:' + Math.max(5, Math.round(o[k] / m * 100)) + '%"></i></div><b>' + o[k] + '</b></div>'; }).join('') : '<div class="o2-pi-empty">No data yet.</div>'; }
  function stats(l) {
    var rp = repeats(), open = l.filter(function (m) { return m.status !== 'Mastered'; }), res = l.length - open.length;
    var weeks = {}, labels = [], i; for (i = 5; i >= 0; i--) { var k = dayOf(Date.now() - i * 7 * DAY); labels.push(k); weeks[k] = { add: 0, rev: 0 }; }
    function wk(ts) { var d = (Date.now() - ts) / DAY, ix = 5 - Math.floor(d / 7); return ix >= 0 && ix <= 5 ? labels[ix] : null; }
    l.forEach(function (m) { var w = wk(m.created); if (w) weeks[w].add++; m.revLog.forEach(function (r) { var x = wk(r.ts); if (x) weeks[x].rev++; }); });
    var mx = Math.max(1, Math.max.apply(null, labels.map(function (k) { return Math.max(weeks[k].add, weeks[k].rev); })));
    return '<div class="o2-card2"><div class="orb-label mb-2">Resolved vs unresolved</div><div class="o2-split"><i style="width:' + Math.round(res / l.length * 100) + '%"></i></div><div class="o2-split-l"><span>' + res + ' mastered</span><span>' + open.length + ' unresolved</span></div></div>' +
      '<div class="o2-card2"><div class="orb-label mb-2">By subject</div>' + bars(by(l, function (m) { return m.subject; })) + '</div>' +
      '<div class="o2-card2"><div class="orb-label mb-2">By chapter (top 6)</div>' + bars(by(l.filter(function (m) { return m.chapter; }), function (m) { return m.chapter; })) + '</div>' +
      '<div class="o2-card2"><div class="orb-label mb-2">By mistake type</div>' + bars(by(l, function (m) { return m.type; }), 0, 10) + '</div>' +
      '<div class="o2-card2"><div class="orb-label mb-2">Repeated mistakes</div>' + (function () { var g = l.filter(function (m) { return rp[m.id].length; }).sort(function (a, b) { return rp[b.id].length - rp[a.id].length; }).slice(0, 4); return g.length ? g.map(function (m) { return card(m, rp); }).join('') : '<div class="o2-pi-empty">No repeated mistakes detected.</div>'; })() + '</div>' +
      '<div class="o2-card2"><div class="orb-label mb-2">Trend (last 6 weeks)</div><div class="o2-trend">' + labels.map(function (k) { return '<div><span><i class="a" style="height:' + Math.round(weeks[k].add / mx * 60) + 'px"></i><i class="r" style="height:' + Math.round(weeks[k].rev / mx * 60) + 'px"></i></span><small>' + k.slice(5) + '</small></div>'; }).join('') + '</div><div class="o2-split-l"><span><b class="dot a"></b>Added</span><span><b class="dot r"></b>Revisions done</span></div></div>';
  }

  // ---- detail page ----
  function sheet(html, onClose) {
    var ov = document.createElement('div'); ov.className = 'o2-ov o2-mbov'; ov.style.zIndex = 99985;
    ov.innerHTML = '<div class="o2-sheet" style="max-height:92vh"><div class="o2-grab"></div>' + html + '</div>';
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    function close() { ov.classList.remove('on'); setTimeout(function () { ov.remove(); }, 250); if (onClose) onClose(); }
    ov._close = close; document.body.appendChild(ov); requestAnimationFrame(function () { ov.classList.add('on'); }); return ov;
  }
  function closeTop() { var s = document.querySelectorAll('.o2-mbov'); if (s.length) s[s.length - 1]._close(); }
  function sec(t, v, cls) { return v ? '<div class="o2-ds ' + (cls || '') + '"><span>' + t + '</span><p>' + esc(v) + '</p></div>' : ''; }
  function find(id) { return list().filter(function (m) { return m.id === id; })[0]; }
  function detail(id) {
    var m = find(id); if (!m) return; fix(m);
    var rp = repeats()[m.id], n = rp.length, f = relFormula(m);
    var rev = m.revLog.length ? m.revLog.slice().reverse().map(function (r) { return '<li>' + new Date(r.ts).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }) + (r.mastered ? ' — marked mastered' : ' — revised') + '</li>'; }).join('') : '<li>Not revised yet · first review ' + m.nextReview + '</li>';
    var html = '<div class="o2-head"><h3>Mistake detail</h3><button class="o2-x" onclick="o2Mb.closeTop()"><i class="ph ph-x"></i></button></div><div class="o2-dscroll">' +
      '<div class="o2-mb-top"><span>' + esc(m.subject) + (m.chapter ? ' · ' + esc(m.chapter) : '') + (m.topic ? ' · ' + esc(m.topic) : '') + '</span><em class="st-' + eff(m).replace(/\s/g, '') + '">' + eff(m) + '</em></div>' +
      '<div class="o2-chips"><i>' + esc(m.type) + '</i><i class="pri-' + m.priority + '">' + m.priority + ' priority</i></div>' +
      '<p class="o2-q">' + esc(m.question) + '</p>' +
      (n ? '<div class="o2-rep"><b>You have made this mistake ' + (n + 1) + ' times.</b><span>Pattern: ' + esc(top(by(rp.concat([m]), function (x) { return x.type; })).k) + '. Recommended: revise ' + esc(m.chapter || m.topic || m.subject) + ' and re-attempt similar questions.</span>' + rp.slice(0, 4).map(function (o) { return '<a onclick="o2Mb.detail(\'' + o.id + '\')">' + new Date(o.created).toLocaleDateString(undefined, { day: 'numeric', month: 'short' }) + ' — ' + esc((o.question || '').slice(0, 70)) + '</a>'; }).join('') + '</div>' : '') +
      sec('What I did', [m.yourAnswer, m.wentWrong].filter(Boolean).join('\n'), 'bad') + sec('Why it was wrong', m.why) + sec('Correct approach', m.approach) + sec('Correct answer', m.correctAnswer, 'good') + sec('Key learning', m.keyLearning || m.explanation, 'key') +
      (m.formula ? '<div class="o2-ds"><span>Related formula</span><p>' + esc(m.formula) + '</p></div>' : '') + sec('Personal notes', m.notes) +
      (m.shot ? '<img class="o2-shot" src="' + m.shot + '" alt="Attachment">' : '') +
      '<div class="o2-ds"><span>Revision history</span><ul>' + rev + '</ul></div></div>' +
      '<div class="o2-acts"><button class="btn btn-primary btn-sm" onclick="o2Mb.revised(\'' + m.id + '\')"><i class="ph-bold ph-check"></i>Mark revised</button>' +
      (m.status === 'Mastered' ? '<button class="btn btn-secondary btn-sm" onclick="o2Mb.reopen(\'' + m.id + '\')">Reopen</button>' : '<button class="btn btn-secondary btn-sm" onclick="o2Mb.mastered(\'' + m.id + '\')"><i class="ph-bold ph-medal"></i>Mastered</button>') +
      '<button class="btn btn-secondary btn-sm" onclick="o2Mb.focus(\'' + m.id + '\')"><i class="ph-bold ph-timer"></i>Focus on this</button>' +
      '<button class="btn btn-secondary btn-sm" onclick="o2Mb.formula(\'' + m.id + '\')"><i class="ph-bold ph-function"></i>Open related formula</button>' +
      '<button class="btn btn-secondary btn-sm" onclick="o2Mb.openForm(\'' + m.id + '\')"><i class="ph-bold ph-pencil-simple"></i>Edit</button>' +
      '<button class="btn btn-sm o2-danger" onclick="o2Mb.del(\'' + m.id + '\')"><i class="ph-bold ph-trash"></i>Delete</button></div>';
    closeTop(); sheet(html);
  }
  function relFormula(m) { var k = normKey(m.formula); if (!k) return null; return (AppState.customFormulas || []).filter(function (f) { return normKey(f.title).indexOf(k) > -1 || k.indexOf(normKey(f.title)) > -1; })[0] || null; }

  // ---- add / edit form ----
  function opts(arr, cur) { return arr.map(function (o) { return '<option' + (o === cur ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join(''); }
  function subjects() { var s = ['General']; try { allPapersList().forEach(function (x) { if (s.indexOf(x.paper.name) < 0) s.push(x.paper.name); }); } catch (e) {} return s; }
  function fld(id, label, v, ta, ph) { return '<div class="o2-f"><label>' + label + '</label>' + (ta ? '<textarea id="mb_' + id + '" rows="2" placeholder="' + (ph || '') + '">' + esc(v || '') + '</textarea>' : '<input id="mb_' + id + '" type="text" value="' + esc(v || '') + '" placeholder="' + (ph || '') + '">') + '</div>'; }
  function openForm(id) {
    var m = id ? find(id) : null, subs = subjects(); m = m || {};
    if (m.subject && subs.indexOf(m.subject) < 0) subs.push(m.subject);
    var html = '<div class="o2-head"><h3>' + (id ? 'Edit mistake' : 'Add mistake') + '</h3><button class="o2-x" onclick="o2Mb.closeTop()"><i class="ph ph-x"></i></button></div><div class="o2-dscroll">' +
      '<div class="o2-f"><label>Mistake type</label><select id="mb_type">' + opts(TYPES, m.type || 'Conceptual mistake') + '</select></div>' +
      '<div class="o2-f2"><div class="o2-f"><label>Subject</label><select id="mb_subject">' + opts(subs, m.subject || 'General') + '</select></div><div class="o2-f"><label>Priority</label><select id="mb_priority">' + opts(PRI, m.priority || 'Medium') + '</select></div></div>' +
      '<div class="o2-f2">' + fld('chapter', 'Chapter', m.chapter) + fld('topic', 'Topic', m.topic) + '</div>' +
      fld('question', 'Original question *', m.question, 1) + fld('yourAnswer', 'My incorrect answer', m.yourAnswer, 1) + fld('correctAnswer', 'Correct answer', m.correctAnswer, 1) +
      fld('wentWrong', 'What went wrong', m.wentWrong, 1) + fld('why', 'Why it was wrong', m.why, 1) + fld('approach', 'Correct approach', m.approach, 1) + fld('keyLearning', 'Key learning', m.keyLearning, 1) +
      fld('formula', 'Formula / concept', m.formula, 0, 'e.g. Break-Even Point') + fld('notes', 'Personal notes', m.notes, 1) +
      '<div class="o2-f"><label>Screenshot (optional)</label><input id="mb_shot" type="file" accept="image/*"></div></div>' +
      '<div class="o2-acts"><button class="btn btn-primary" style="flex:1" onclick="o2Mb.save(\'' + (id || '') + '\')">Save</button></div>';
    sheet(html);
  }
  function readShot(file, cb) {
    if (!file) return cb(null);
    var r = new FileReader(); r.onerror = function () { cb(null); };
    r.onload = function () { var im = new Image(); im.onerror = function () { cb(null); }; im.onload = function () {
      var s = Math.min(1, 900 / Math.max(im.width, im.height)), c = document.createElement('canvas'); c.width = Math.round(im.width * s); c.height = Math.round(im.height * s);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height); cb(c.toDataURL('image/jpeg', 0.6)); }; im.src = r.result; };
    r.readAsDataURL(file);
  }

  function after() { saveState(); renderMistakeBook(); try { renderPracticeTab(); } catch (e) {} try { renderHomeTab(); } catch (e) {} }
  window.o2Mb = {
    tab: function (t) { UI.tab = t; if (t !== 'list') UI.filter = 'all'; renderMistakeBook(); },
    go: function (f) { UI.filter = f; UI.tab = 'list'; renderMistakeBook(); },
    search: function (v) { UI.q = v; var l = all(), rp = repeats(), rows = $('o2MbRows'); var keep = v; UI.tab = 'list'; var el = document.querySelector('#o2MbBody'); var html = listView(l); el.innerHTML = html; var inp = el.querySelector('input'); if (inp) { inp.focus(); inp.setSelectionRange(keep.length, keep.length); } },
    detail: detail, openForm: openForm, closeTop: closeTop,
    save: function (id) {
      var g = function (k) { return ($('mb_' + k).value || '').trim(); };
      if (!g('question')) { showToast('Please enter the original question'); return; }
      var file = $('mb_shot').files && $('mb_shot').files[0];
      readShot(file, function (shot) {
        var d = { type: $('mb_type').value, subject: $('mb_subject').value, priority: $('mb_priority').value, chapter: g('chapter'), topic: g('topic'), question: g('question'), yourAnswer: g('yourAnswer'), correctAnswer: g('correctAnswer'), wentWrong: g('wentWrong'), why: g('why'), approach: g('approach'), keyLearning: g('keyLearning'), formula: g('formula'), notes: g('notes') };
        if (shot) d.shot = shot;
        var m = id ? find(id) : null;
        if (m) Object.assign(m, d); else { var nm = Object.assign({ id: 'err_' + Date.now() + '_m', created: Date.now(), source: 'Manual', status: 'New', revLog: [] }, d); fix(nm); list().unshift(nm); }
        closeTop(); after(); showToast(m ? 'Mistake updated' : 'Mistake saved');
      });
    },
    revised: function (id) { var m = find(id); if (!m) return; m.revLog.push({ ts: Date.now() }); var c = m.revLog.filter(function (r) { return !r.mastered; }).length; m.status = c >= 2 ? 'Revised Multiple Times' : 'Revised Once'; m.nextReview = addDaysISO(todayISO(), INTERVALS[Math.min(c, INTERVALS.length - 1)]); markActivity(); after(); detail(id); showToast('Revision recorded · next review ' + m.nextReview); },
    mastered: function (id) { var m = find(id); if (!m) return; m.status = 'Mastered'; m.revLog.push({ ts: Date.now(), mastered: true }); markActivity(); after(); detail(id); try { confetti({ particleCount: 50, spread: 60 }); } catch (e) {} showToast('Mastered!'); },
    reopen: function (id) { var m = find(id); if (!m) return; m.status = 'Review Needed'; m.nextReview = todayISO(); after(); detail(id); },
    del: function (id) { askConfirm('Delete this mistake?', 'This removes the record and its revision history. Similar mistakes are not affected.', 'Delete', function () { var l = list(), i = l.findIndex(function (x) { return x.id === id; }); if (i > -1) l.splice(i, 1); closeTop(); after(); showToast('Mistake deleted'); }); },
    focus: function (id) { var m = find(id); closeTop(); closeMistakeBookModal(); o2StartFocus(/Revision|MCQ|Other/.test(m.subject) ? m.subject : m.subject, (m.topic || m.chapter || m.question || '').slice(0, 70)); },
    formula: function (id) { var m = find(id), f = relFormula(m); closeTop(); closeMistakeBookModal(); openFormulaModal(); var q = (f && f.title) || m.formula || ''; if (q) { fvFilter.q = q; var i = $('formulaSearchInput'); if (i) i.value = q; renderFormulas(); } }
  };
  removeMistake = function (idx) { var m = list()[idx]; if (m) { m.status = 'Mastered'; fix(m); after(); } };

  // ---- Revision section: show mistakes due ----
  var _rl = renderRevisionList;
  renderRevisionList = function () {
    var r = _rl.apply(this, arguments);
    try {
      var modal = $('revisionModal'), sc = modal && modal.querySelector('.overflow-y-auto'); if (!sc) return r;
      var old = $('o2RevMistakes'); if (old) old.remove();
      var due = all().filter(isDue); if (!due.length) return r;
      var d = document.createElement('button'); d.id = 'o2RevMistakes'; d.className = 'o2-revm'; d.onclick = function () { closeRevisionList(); openMistakeBookModal(); o2Mb.go('due'); };
      d.innerHTML = '<i class="ph ph-bug-beetle"></i><span><b>' + due.length + ' mistake' + (due.length === 1 ? '' : 's') + ' due for revision</b><small>Open Mistake Book</small></span><i class="ph ph-arrow-right"></i>';
      sc.insertBefore(d, sc.firstChild);
    } catch (e) {}
    return r;
  };
})();
