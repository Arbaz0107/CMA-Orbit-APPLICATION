/* =========================================================================
   FVMATH - tiny offline formula typesetter + calculator for the Formula Vault.
   No libraries, works inside the APK without internet.

   You type formulas as plain text; this draws them like a textbook:
     (RV-NP)/n               -> stacked fraction
     K_da  /  x^2  /  x^{n+1} -> subscripts and powers
     sqrt(x)  or  √(x)       -> square root
     [ ... ] ( ... )         -> brackets that grow around tall content
     alpha, beta, sigma ...  -> Greek letters
   Rule for "/": tight (a/b, (a+b)/n, I(1-t)/2) takes just the pieces touching it;
   spaced ( A / B ) takes everything on each side up to the next + - = sign.
   ========================================================================= */
(function (root) {
  'use strict';

  const GREEK = {
    alpha: 'α', beta: 'β', gamma: 'γ', delta: 'δ', epsilon: 'ε', theta: 'θ', lambda: 'λ', mu: 'μ', pi: 'π', rho: 'ρ',
    sigma: 'σ', tau: 'τ', phi: 'φ', omega: 'ω', Delta: 'Δ', Sigma: 'Σ', Omega: 'Ω', Pi: 'Π', Theta: 'Θ', Phi: 'Φ', Gamma: 'Γ', Lambda: 'Λ'
  };
  const OPS = {
    '+': ['+', '+'], '-': ['−', '-'], '−': ['−', '-'], '–': ['−', '-'], '×': ['×', '*'], '*': ['×', '*'], '·': ['×', '*'],
    '÷': ['÷', '/'], '±': ['±', '+'], '=': ['=', '='], '≈': ['≈', '='], '≤': ['≤', '<='], '≥': ['≥', '>='], '≠': ['≠', '!='],
    '<': ['<', '<'], '>': ['>', '>']
  };
  const REL = new Set(['=', '≈', '≤', '≥', '≠', '<', '>']);
  const SPECIAL = new Set(['sqrt', 'frac']);
  const CLOSE_FOR = { '(': ')', '[': ']', '{': '}' };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const LET = /[A-Za-z\u00C0-\u024F\u0370-\u03FF]/;

  /* ---------------- tokenizer ---------------- */
  function tokenize(src) {
    const toks = []; let i = 0, sp = false; const n = src.length;
    const push = (t, v, extra) => { toks.push(Object.assign({ t, v, sp }, extra || {})); sp = false; };
    while (i < n) {
      const c = src[i];
      if (/\s/.test(c)) { sp = true; i++; continue; }
      if (/\d/.test(c) || (c === '.' && /\d/.test(src[i + 1] || ''))) {
        const m = /^(?:\d+\.?\d*|\.\d+)/.exec(src.slice(i));
        push('num', m[0]); i += m[0].length; continue;
      }
      if (c === '\\') {
        const m = /^\\([A-Za-z]+)/.exec(src.slice(i));
        if (m) { push('id', m[1], { cmd: true }); i += m[0].length; } else i++;
        continue;
      }
      if (LET.test(c)) { let j = i; while (j < n && LET.test(src[j])) j++; push('id', src.slice(i, j)); i = j; continue; }
      const two = src.substr(i, 2);
      if (two === '<=' || two === '>=' || two === '!=' || two === '+-' || two === '==') {
        const key = two === '<=' ? '≤' : two === '>=' ? '≥' : two === '!=' ? '≠' : two === '+-' ? '±' : '=';
        push('op', OPS[key][0], { js: OPS[key][1], rel: REL.has(key) }); i += 2; continue;
      }
      if (OPS[c]) { push('op', OPS[c][0], { js: OPS[c][1], rel: REL.has(OPS[c][0]) }); i++; continue; }
      if (c === '/') { push('div', '/'); i++; continue; }
      if (c === '^') { push('sup', '^'); i++; continue; }
      if (c === '_') { push('sub', '_'); i++; continue; }
      if (c === '√') { push('rad', '√'); i++; continue; }
      if (c === '(' || c === '[' || c === '{') { push('open', c); i++; continue; }
      if (c === ')' || c === ']' || c === '}') { push('close', c); i++; continue; }
      push('txt', c); i++;
    }
    return toks;
  }

  /* ---------------- html helpers ---------------- */
  function idHtml(name) {
    if (GREEK[name]) return '<i class="mi">' + GREEK[name] + '</i>';
    if (name.indexOf(' ') < 0 && name.length <= 3) return '<i class="mi">' + esc(name) + '</i>';
    return '<span class="mw">' + esc(name) + '</span>';
  }
  function uniqVars(list) {
    const seen = new Set(), out = [];
    list.forEach(v => { if (!seen.has(v.name)) { seen.add(v.name); out.push(v); } });
    return out;
  }
  function fracHtml(n, d) { return '<span class="mf"><span class="mf-n">' + n + '</span><span class="mf-d">' + d + '</span></span>'; }
  function bracketHtml(o, c, inner) {
    const kind = o === '(' ? 'p' : 's';
    return '<span class="mg"><span class="mbk mbk-' + kind + 'l"></span><span class="mgi">' + inner + '</span><span class="mbk mbk-' + kind + 'r"></span></span>';
  }
  function radHtml(inner) { return '<span class="msq"><span class="msq-s">√</span><span class="msq-b">' + inner + '</span></span>'; }

  /* ---------------- parser ---------------- */
  function parseAll(toks) {
    let pos = 0;

    function leaf(h, js, raw, t, vars) { return { k: 'atom', h, js, raw, sp: !!t.sp, tall: false, vars: vars || [] }; }

    function seq(depth) {
      const out = [];
      while (pos < toks.length) {
        const t = toks[pos];
        if (t.t === 'close' && depth > 0) break;
        if (t.t === 'op') { out.push({ k: 'op', disp: t.v, js: t.js, rel: !!t.rel, sp: t.sp }); pos++; continue; }
        if (t.t === 'div') { const nx = toks[pos + 1]; out.push({ k: 'div', sp: t.sp, spaced: !!(t.sp && nx && nx.sp) }); pos++; continue; }
        // a lone  x  between things, written with spaces, means multiplication:  (a/b) x 100
        if (t.t === 'id' && (t.v === 'x' || t.v === 'X') && !t.cmd && t.sp && toks[pos + 1] && toks[pos + 1].sp &&
            out.length && out[out.length - 1].k === 'atom' && ['num', 'open', 'id'].indexOf(toks[pos + 1].t) >= 0) {
          out.push({ k: 'op', disp: '×', js: '*', rel: false, sp: true }); pos++; continue;
        }
        out.push(atom());
      }
      return out;
    }

    function groupParts() {
      const o = toks[pos]; pos++;
      const inner = renderSeq(seq(1));
      let c = null;
      if (toks[pos] && toks[pos].t === 'close') { c = toks[pos]; pos++; }
      return { o, c, inner };
    }

    function groupAtom() {
      const t = toks[pos];
      const g = groupParts();
      const ob = g.o.v, cb = g.c ? g.c.v : CLOSE_FOR[ob];
      let h;
      if (ob === '{') h = g.inner.h;
      else if (!g.inner.tall) h = esc(ob) + g.inner.h + esc(cb);
      else h = bracketHtml(ob, cb, g.inner.h);
      return { k: 'atom', grp: true, paren: ob === '(', inner: g.inner, h, js: '(' + g.inner.js + ')', raw: ob + g.inner.raw + cb, sp: !!t.sp, tall: g.inner.tall, vars: g.inner.vars };
    }

    function fracNode(n, d, t) {
      return { k: 'atom', h: fracHtml(n.h, d.h), js: '((' + n.js + ')/(' + d.js + '))', raw: n.raw + '/' + d.raw, sp: !!t.sp, tall: true, vars: n.vars.concat(d.vars) };
    }
    function radNode(inner, t) {
      return { k: 'atom', h: radHtml(inner.h), js: 'Math.sqrt(' + inner.js + ')', raw: '√' + inner.raw, sp: !!t.sp, tall: inner.tall, vars: inner.vars };
    }

    function identAtom(t) {
      pos++;
      let name = t.v;
      if (name === 'sqrt' && toks[pos] && toks[pos].t === 'open') return radNode(groupParts().inner, t);
      if (name === 'frac' && toks[pos] && toks[pos].t === 'open') {
        const a = groupParts().inner;
        const b = toks[pos] && toks[pos].t === 'open' ? groupParts().inner : { h: '', js: '', raw: '', vars: [] };
        return fracNode(a, b, t);
      }
      // consecutive words ("Fixed Cost", "Contribution per unit") are one name
      while (!t.cmd && toks[pos] && toks[pos].t === 'id' && toks[pos].sp && !toks[pos].cmd && !SPECIAL.has(toks[pos].v) &&
             !(toks[pos].v.length === 1 && /[xX]/.test(toks[pos].v) && toks[pos + 1] && toks[pos + 1].sp)) {
        name += ' ' + toks[pos].v; pos++;
      }
      const isPi = name === 'pi' || name === 'π';
      const h = idHtml(name);
      const js = isPi ? 'Math.PI' : 'V(' + JSON.stringify(name) + ')';
      const node = leaf(h, js, name, t, isPi ? [] : [{ name, h }]);
      node.isVar = !isPi; node.vname = name;
      return node;
    }

    function primary() {
      const t = toks[pos];
      switch (t.t) {
        case 'num': pos++; return leaf(esc(t.v), t.v, t.v, t);
        case 'id': return identAtom(t);
        case 'open': return groupAtom();
        case 'rad': {
          pos++;
          const nx = toks[pos];
          if (nx && (nx.t === 'num' || nx.t === 'id' || nx.t === 'open')) return radNode(nodeToInner(primary()), t);
          return leaf('√', '', '√', t);
        }
        default: pos++; return leaf(esc(t.v), '', t.v, t);
      }
    }
    function nodeToInner(n) { return n.grp ? n.inner : { h: n.h, js: n.js, raw: n.raw, vars: n.vars, tall: n.tall }; }

    function scriptArg(kind) {
      const t = toks[pos];
      if (!t) return null;
      if (t.t === 'open') { const g = groupParts().inner; return { h: g.h, js: g.js, raw: g.raw, vars: g.vars, tall: g.tall }; }
      let sign = '';
      if (t.t === 'op' && (t.v === '−' || t.v === '+') && toks[pos + 1] && (toks[pos + 1].t === 'num' || toks[pos + 1].t === 'id')) { sign = t.v; pos++; }
      const u = toks[pos];
      if (!u) return null;
      const neg = sign === '−' ? '-' : '';
      if (u.t === 'num') { pos++; return { h: sign + esc(u.v), js: neg + u.v, raw: sign + u.v, vars: [] }; }
      if (u.t === 'id') {
        pos++;
        const h = idHtml(u.v);
        const isPi = u.v === 'pi';
        return { h: sign + h, js: neg + (isPi ? 'Math.PI' : 'V(' + JSON.stringify(u.v) + ')'), raw: sign + u.v, vars: (kind === 'sup' && !isPi) ? [{ name: u.v, h }] : [] };
      }
      return null;
    }

    function withScripts(node) {
      let sub = null, sup = null;
      while (toks[pos] && (toks[pos].t === 'sub' || toks[pos].t === 'sup')) {
        const kind = toks[pos].t;
        const save = pos;
        pos++;
        const arg = scriptArg(kind);
        if (!arg) { pos = save; break; }
        if (kind === 'sub' && !sub) sub = arg; else if (kind === 'sup' && !sup) sup = arg; else break;
      }
      if (!sub && !sup) return node;
      let h = node.h, js = node.js, vars = node.vars;
      if (sub && node.isVar) {
        const nm = node.vname + '_' + sub.raw;
        vars = [{ name: nm, h: node.h + '<sub class="mu">' + sub.h + '</sub>' }];
        js = 'V(' + JSON.stringify(nm) + ')';
      }
      if (sub && sup) h += '<span class="mss"><sup>' + sup.h + '</sup><sub>' + sub.h + '</sub></span>';
      else if (sub) h += '<sub class="mu">' + sub.h + '</sub>';
      else h += '<sup class="mu">' + sup.h + '</sup>';
      if (sup) { js = 'Math.pow(' + js + ',' + sup.js + ')'; vars = vars.concat(sup.vars); }
      return { k: 'atom', h, js, raw: node.raw + (sub ? '_' + sub.raw : '') + (sup ? '^' + sup.raw : ''), sp: node.sp, tall: node.tall || !!(sup && sup.tall), vars, isVar: false };
    }

    function atom() { return withScripts(primary()); }

    return seq(0);
  }

  /* ---------------- fractions + sequence rendering ---------------- */
  function buildFractions(nodes) {
    nodes = nodes.slice();
    for (;;) {
      const i = nodes.findIndex(n => n.k === 'div');
      if (i < 0) break;
      const d = nodes[i];
      const prevOK = i > 0 && nodes[i - 1].k === 'atom';
      const nextOK = i + 1 < nodes.length && nodes[i + 1].k === 'atom';
      if (!prevOK || !nextOK) {
        nodes[i] = { k: 'atom', h: '<span class="mo mo-t">/</span>', js: '/', raw: '/', sp: d.sp, tall: false, vars: [] };
        continue;
      }
      let s = i - 1;
      while (s > 0 && nodes[s - 1].k === 'atom' && (d.spaced || !nodes[s].sp)) s--;
      let e = i + 1;
      if (d.spaced) while (e + 1 < nodes.length && nodes[e + 1].k === 'atom') e++;
      const part = list => (list.length === 1 && list[0].grp && list[0].paren) ? list[0].inner : renderSeq(list);
      const num = part(nodes.slice(s, i)), den = part(nodes.slice(i + 1, e + 1));
      const fr = {
        k: 'atom', h: fracHtml(num.h, den.h), js: '((' + num.js + ')/(' + den.js + '))', raw: num.raw + '/' + den.raw,
        sp: nodes[s].sp, tall: true, vars: num.vars.concat(den.vars)
      };
      nodes.splice(s, e - s + 1, fr);
    }
    return nodes;
  }

  function renderSeq(nodes) {
    nodes = buildFractions(nodes);
    let h = '', js = '', raw = '', tall = false, vars = [], prevAtom = false;
    nodes.forEach((n, idx) => {
      if (n.k === 'op') {
        const unary = idx === 0 || nodes[idx - 1].k === 'op';
        h += '<span class="mo' + (unary ? ' mo-t' : '') + '">' + esc(n.disp) + '</span>';
        js += ' ' + n.js + ' '; raw += ' ' + n.disp + ' ';
        prevAtom = false;
      } else {
        if (prevAtom && n.sp) h += '<span class="msp"></span>';
        if (prevAtom && n.js !== '' && js.trim() !== '' && /[\w)]\s*$/.test(js)) js += ' * ';
        h += n.h; js += n.js; raw += (prevAtom && n.sp ? ' ' : '') + n.raw;
        if (n.tall) tall = true;
        vars = vars.concat(n.vars);
        prevAtom = true;
      }
    });
    return { h, js, raw, tall, vars: uniqVars(vars), nodes };
  }

  /* ---------------- public api ---------------- */
  function fvMathRender(text) {
    try {
      const rows = String(text || '').split('\n').filter(l => l.trim() && !/^[\s\-–—_─=]{3,}$/.test(l));
      if (!rows.length) return '';
      return '<div class="mmath">' + rows.map(l => '<div class="mrow">' + renderSeq(parseAll(tokenize(l))).h + '</div>').join('') + '</div>';
    } catch (e) {
      return '<div class="mmath"><span class="mw">' + esc(text) + '</span></div>';
    }
  }

  /* looks like it needs real maths layout (parenthesised fractions, powers, subscripts, roots) */
  function fvMathAuto(text) {
    return /\)\s*\/|\/\s*\(|sqrt\s*\(|√|\\frac|frac\s*\{|[A-Za-z0-9)\]]\s*\^\s*[A-Za-z0-9({\-−+]|_\{|[A-Za-z]_[A-Za-z0-9]/.test(String(text || ''));
  }

  /* split "LHS = RHS", list the variables on the right, and build a calculator */
  function fvMathAnalyze(text) {
    try {
      const nodes = parseAll(tokenize(String(text || '').replace(/\n+/g, ' ')));
      const ri = nodes.findIndex(n => n.k === 'op' && n.rel && n.disp === '=');
      const lhs = ri > 0 ? renderSeq(nodes.slice(0, ri)) : null;
      const rhs = renderSeq(ri >= 0 ? nodes.slice(ri + 1) : nodes);
      if (!rhs.js.trim() || !rhs.vars.length) return { ok: false, vars: [], lhsHtml: lhs ? lhs.h : '' };
      let fn;
      try { fn = new Function('V', 'return (' + rhs.js + ');'); } catch (e) { return { ok: false, vars: [], lhsHtml: '' }; }
      return {
        ok: true, vars: rhs.vars, lhsHtml: lhs ? lhs.h : '', lhsRaw: lhs ? lhs.raw : '',
        evaluate(values) {
          const V = nm => { const v = values[nm]; if (v === undefined || v === null || String(v).trim() === '' || !isFinite(Number(v))) throw new Error('missing'); return Number(v); };
          try { const r = fn(V); return (typeof r === 'number' && isFinite(r)) ? r : null; } catch (e) { return null; }
        }
      };
    } catch (e) { return { ok: false, vars: [], lhsHtml: '' }; }
  }

  root.fvMathRender = fvMathRender;
  root.fvMathAuto = fvMathAuto;
  root.fvMathAnalyze = fvMathAnalyze;
})(typeof window !== 'undefined' ? window : globalThis);
