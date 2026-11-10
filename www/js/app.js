    /* =========================================================================
       1. DATA STRUCTURES & ICMAI SYLLABUS DATABASE
       ========================================================================= */
    const SYLLABUS = {
      INTER: {
        title: "CMA Intermediate",
        groups: {
          G1: {
            title: "Group 1",
            papers: [
              {
                id: "P05",
                code: "Paper 5",
                name: "Business Laws and Ethics",
                chapters: [
                  { id: "c1", name: "Commercial Laws (Contract Act, Sale of Goods)", totalLectures: 14, completedLectures: 12, revised: true },
                  { id: "c2", name: "Industrial & Labour Laws (PF, Gratuity, Wages)", totalLectures: 10, completedLectures: 8, revised: false },
                  { id: "c3", name: "Corporate Laws (Companies Act 2013)", totalLectures: 22, completedLectures: 15, revised: false },
                  { id: "c4", name: "Business Ethics & Corporate Responsibility", totalLectures: 6, completedLectures: 6, revised: true }
                ]
              },
              {
                id: "P06",
                code: "Paper 6",
                name: "Financial Accounting",
                chapters: [
                  { id: "c5", name: "Accounting Fundamentals & Standards (Ind AS)", totalLectures: 16, completedLectures: 14, revised: true },
                  { id: "c6", name: "Partnership Accounts (Admission, Dissolution)", totalLectures: 12, completedLectures: 10, revised: false },
                  { id: "c7", name: "Branch, Departmental & Lease Accounts", totalLectures: 10, completedLectures: 4, revised: false },
                  { id: "c8", name: "Final Accounts of Banking & Insurance Cos.", totalLectures: 14, completedLectures: 6, revised: false }
                ]
              },
              {
                id: "P07",
                code: "Paper 7",
                name: "Direct and Indirect Taxation",
                chapters: [
                  { id: "c9", name: "Direct Tax: Heads of Income (Salary, HP, PGBP, CG, OS)", totalLectures: 28, completedLectures: 20, revised: true },
                  { id: "c10", name: "Direct Tax: Deductions, TDS, TCS & Return Filing", totalLectures: 12, completedLectures: 8, revised: false },
                  { id: "c11", name: "GST: Concept, Levy, Time & Value of Supply", totalLectures: 18, completedLectures: 12, revised: false },
                  { id: "c12", name: "Customs Duty & Foreign Trade Basics", totalLectures: 8, completedLectures: 6, revised: false }
                ]
              },
              {
                id: "P08",
                code: "Paper 8",
                name: "Cost Accounting",
                chapters: [
                  { id: "c13", name: "Material, Labour & Overheads Cost Control", totalLectures: 18, completedLectures: 18, revised: true },
                  { id: "c14", name: "Cost Bookkeeping, Reconciliation & CAS", totalLectures: 10, completedLectures: 9, revised: true },
                  { id: "c15", name: "Marginal Costing & CVP Decision Making", totalLectures: 16, completedLectures: 16, revised: true },
                  { id: "c16", name: "Standard Costing & Variance Analysis", totalLectures: 14, completedLectures: 12, revised: true },
                  { id: "c17", name: "Budgetary Control & Activity Based Costing", totalLectures: 10, completedLectures: 8, revised: false }
                ]
              }
            ]
          },
          G2: {
            title: "Group 2",
            papers: [
              {
                id: "P09",
                code: "Paper 9",
                name: "Operations & Strategic Management",
                chapters: [
                  { id: "c18", name: "Operations Planning, Scheduling & Queuing", totalLectures: 14, completedLectures: 7, revised: false },
                  { id: "c19", name: "Strategic Management Process & SWOT", totalLectures: 12, completedLectures: 8, revised: true }
                ]
              },
              {
                id: "P10",
                code: "Paper 10",
                name: "Corporate Accounting and Auditing",
                chapters: [
                  { id: "c20", name: "Accounting for Shares & Debentures", totalLectures: 15, completedLectures: 11, revised: false },
                  { id: "c21", name: "Company Audit & Auditor Reporting Rules", totalLectures: 16, completedLectures: 12, revised: true }
                ]
              },
              {
                id: "P11",
                code: "Paper 11",
                name: "Financial Management & Business Data Analytics",
                chapters: [
                  { id: "c22", name: "Working Capital Management & Ratio Analysis", totalLectures: 18, completedLectures: 14, revised: true },
                  { id: "c23", name: "Capital Budgeting & Cost of Capital", totalLectures: 16, completedLectures: 10, revised: false },
                  { id: "c24", name: "Business Data Analytics & AI in Finance", totalLectures: 8, completedLectures: 4, revised: false }
                ]
              },
              {
                id: "P12",
                code: "Paper 12",
                name: "Management Accounting",
                chapters: [
                  { id: "c25", name: "Advanced Decision Making & Transfer Pricing", totalLectures: 18, completedLectures: 12, revised: false },
                  { id: "c26", name: "Responsibility Accounting & Performance Ratios", totalLectures: 10, completedLectures: 6, revised: false }
                ]
              }
            ]
          }
        }
      },
      FINAL: {
        title: "CMA Final",
        groups: {
          G3: {
            title: "Group 3",
            papers: [
              {
                id: "P13",
                code: "Paper 13",
                name: "Corporate and Economic Laws",
                chapters: [
                  { id: "f1", name: "Company Formation, Directors & Board Governance", totalLectures: 24, completedLectures: 16, revised: true },
                  { id: "f2", name: "Insolvency and Bankruptcy Code (IBC 2016)", totalLectures: 16, completedLectures: 12, revised: false },
                  { id: "f3", name: "SEBI Regulations, FEMA & Competition Act", totalLectures: 18, completedLectures: 10, revised: false }
                ]
              },
              {
                id: "P14",
                code: "Paper 14",
                name: "Strategic Financial Management",
                chapters: [
                  { id: "f4", name: "Investment Decisions, Project Financing & Risk Analysis", totalLectures: 20, completedLectures: 18, revised: true },
                  { id: "f5", name: "Security Analysis & Portfolio Management (CAPM/APT)", totalLectures: 22, completedLectures: 19, revised: true },
                  { id: "f6", name: "Derivatives, Options, Futures & Forex Management", totalLectures: 26, completedLectures: 18, revised: false }
                ]
              },
              {
                id: "P15",
                code: "Paper 15",
                name: "Direct Tax Laws & International Taxation",
                chapters: [
                  { id: "f7", name: "Corporate Tax Planning, MAT, AMT & Assessment", totalLectures: 28, completedLectures: 20, revised: true },
                  { id: "f8", name: "Transfer Pricing & BEPS Action Plans", totalLectures: 16, completedLectures: 12, revised: false },
                  { id: "f9", name: "Double Tax Avoidance Agreements (DTAA)", totalLectures: 12, completedLectures: 8, revised: false }
                ]
              },
              {
                id: "P16",
                code: "Paper 16",
                name: "Strategic Cost Management",
                chapters: [
                  { id: "f10", name: "Strategic Cost Management in Manufacturing & Service", totalLectures: 20, completedLectures: 17, revised: true },
                  { id: "f11", name: "Target Costing, Life Cycle Costing & Kaizen", totalLectures: 14, completedLectures: 14, revised: true },
                  { id: "f12", name: "Linear Programming, Transportation & Network Models", totalLectures: 16, completedLectures: 10, revised: false }
                ]
              }
            ]
          },
          G4: {
            title: "Group 4",
            papers: [
              {
                id: "P17",
                code: "Paper 17",
                name: "Cost and Management Audit",
                chapters: [
                  { id: "f13", name: "Cost Audit Rules, CRA-1 to CRA-4 & Annexures", totalLectures: 20, completedLectures: 14, revised: true },
                  { id: "f14", name: "Management Audit & Internal Control Systems", totalLectures: 14, completedLectures: 8, revised: false }
                ]
              },
              {
                id: "P18",
                code: "Paper 18",
                name: "Corporate Financial Reporting",
                chapters: [
                  { id: "f15", name: "Consolidated Financial Statements (Ind AS 110/111)", totalLectures: 24, completedLectures: 18, revised: true },
                  { id: "f16", name: "Business Combinations (Ind AS 103) & Valuation", totalLectures: 18, completedLectures: 12, revised: false }
                ]
              },
              {
                id: "P19",
                code: "Paper 19",
                name: "Indirect Tax Laws and Practice",
                chapters: [
                  { id: "f17", name: "Advanced GST: Input Tax Credit Optimization & Audits", totalLectures: 24, completedLectures: 16, revised: false },
                  { id: "f18", name: "Customs Valuation, FTP Schemes & Advance Rulings", totalLectures: 16, completedLectures: 10, revised: false }
                ]
              },
              {
                id: "P20",
                code: "Paper 20",
                name: "SPM and Business Valuation",
                chapters: [
                  { id: "f19", name: "Strategic Performance Management & Enterprise Risk", totalLectures: 18, completedLectures: 12, revised: false },
                  { id: "f20", name: "Business Valuation Models (DCF, Relative Valuation)", totalLectures: 20, completedLectures: 15, revised: true }
                ]
              }
            ]
          }
        }
      }
    };

    const LEGACY_SAMPLE_FORMULAS = [
      {
        subject: "Cost Accounting",
        title: "Profit Volume (P/V) Ratio",
        chapter: "Marginal Costing & CVP Decision Making",
        formula: "P/V Ratio = (Contribution / Sales) × 100 = (Change in Profit / Change in Sales) × 100",
        explanation: "Indicates the profitability of products and sensitivity of profit to volume changes.",
        example: "If Sales = ₹10,00,000, Variable Cost = ₹6,00,000; Contribution = ₹4,00,000. P/V Ratio = 40%."
      },
      {
        subject: "Cost Accounting",
        title: "Break-Even Point (BEP)",
        chapter: "Marginal Costing & CVP Decision Making",
        formula: "BEP (in Value) = Fixed Cost / P/V Ratio | BEP (in Units) = Fixed Cost / Contribution per unit",
        explanation: "The sales volume at which the business operates at zero profit and zero loss.",
        example: "Fixed Cost = ₹2,00,000, P/V Ratio = 40%. BEP = ₹2,00,000 / 0.40 = ₹5,00,000."
      },
      {
        subject: "Cost Accounting",
        title: "Margin of Safety (MOS)",
        chapter: "Marginal Costing & CVP Decision Making",
        formula: "MOS = Actual Sales - Break Even Sales | MOS Ratio = (Profit / P/V Ratio) or (MOS / Total Sales) × 100",
        explanation: "Buffer by which sales can fall before a loss is incurred.",
        example: "Actual Sales = ₹8,00,000, BEP = ₹5,00,000. MOS = ₹3,00,000 (37.5%)."
      },
      {
        subject: "Cost Accounting",
        title: "Material Cost Variances",
        chapter: "Standard Costing & Variance Analysis",
        formula: "MCV = (SQ × SP) - (AQ × AP) | MPV = AQ × (SP - AP) | MUV = SP × (SQ - AQ)",
        explanation: "Deconstructs direct raw material variations between standard expectations and actual costs.",
        example: "SQ=100kg, SP=₹50, AQ=110kg, AP=₹48. MPV = 110 × (50 - 48) = ₹220 (Favourable)."
      },
      {
        subject: "Strategic Financial Management",
        title: "Capital Asset Pricing Model (CAPM)",
        chapter: "Security Analysis & Portfolio Management (CAPM/APT)",
        formula: "Cost of Equity (Ke) = Rf + β × [Rm - Rf]",
        explanation: "Rf = Risk-free rate; β = Systematic risk beta; Rm = Market return; [Rm - Rf] = Market Risk Premium.",
        example: "Rf = 7%, Beta = 1.25, Rm = 15%. Ke = 7% + 1.25 × (15% - 7%) = 7% + 10% = 17%."
      },
      {
        subject: "Strategic Financial Management",
        title: "Gordon's Dividend Growth Model",
        chapter: "Security Analysis & Portfolio Management (CAPM/APT)",
        formula: "Market Price (P0) = D1 / (Ke - g) | where D1 = D0 × (1 + g)",
        explanation: "Valuation of common equity stock assuming dividend grows at a steady rate 'g' indefinitely.",
        example: "D0 = ₹5, g = 6%, Ke = 14%. D1 = ₹5.30. Price = 5.30 / (0.14 - 0.06) = ₹66.25."
      },
      {
        subject: "Financial Management",
        title: "Operating Cycle & Working Capital",
        chapter: "Working Capital Management & Ratio Analysis",
        formula: "Net Operating Cycle (Days) = R + W + F + D - C",
        explanation: "R=Raw Material storage, W=WIP conversion, F=Finished goods storage, D=Debtors collection, C=Creditors deferral.",
        example: "R=40, W=15, F=25, D=45, C=30. Net Cycle = 40+15+25+45-30 = 95 Days."
      }
    ];

    const QUESTION_BANK = []; // no built-in sample questions - import your own MCQs

    const STORAGE_KEY = "CMA_PREP_PRO_STATE_V2";

    const defaultState = {
      theme: "light",
      activeLevel: "INTER",
      selectedGroupScope: "BOTH",
      activeGroup: "G1",
      selectedSubjectId: "P05",
      studentProfile: {
        name: "CMA Scholar",
        initials: "CP",
        examAttempt: "Dec 2026",
        examDate: "2026-12-11"
      },
      completedGroups: {},
      formulasMigrated: true,
      resources: [],
      showCompletedGroups: false,
      lectureDueDates: {},
      lectureLog: {},
      activityDays: [],
      pomodoro: { focus: 50, brk: 10 },
      pomodoroStats: {},
      dailyStudyGoals: {
        targetHours: 6.0,
        slots: []
      },
      customLectures: [],
      userNotes: [],
      plannerTasks: [],
      mistakeBook: [],
      testHistory: [],
      dashboardQuickNotes: [],
      weeklyHours: [0, 0, 0, 0, 0, 0, 0]
    };

    // quotes live in js/quotes.js (CMA_MOTIVATION_QUOTES, getQuoteOfDay)

    // Removes the built-in sample progress (completed lectures / revised flags)
    // Removes ALL built-in sample chapters / lectures so the user starts with a clean syllabus
    function clearSampleProgress() {
      Object.keys(SYLLABUS).forEach(lvl => {
        const groups = SYLLABUS[lvl].groups || {};
        Object.keys(groups).forEach(g => {
          (groups[g].papers || []).forEach(paper => { paper.chapters = []; });
        });
      });
    }

    function freshDefaultState() {
      return JSON.parse(JSON.stringify(defaultState));
    }

    let AppState = {};

    function normalizeState() {
      const d = defaultState;
      if (!AppState.studentProfile) AppState.studentProfile = JSON.parse(JSON.stringify(d.studentProfile));
      if (!AppState.studentProfile.examDate) {
        AppState.studentProfile.examDate = deriveDateFromAttempt(AppState.studentProfile.examAttempt || "Dec 2026");
      }
      if (!AppState.dailyStudyGoals) AppState.dailyStudyGoals = { targetHours: 6.0, slots: [] };
      if (!Array.isArray(AppState.dashboardQuickNotes)) AppState.dashboardQuickNotes = [];
      if (!Array.isArray(AppState.customFormulas)) AppState.customFormulas = [];
      if (!AppState.formulasMigrated) {            // older installs: the built-in sample formulas become normal, editable ones
        const have = new Set(AppState.customFormulas.map(f => normKey(f.title)));
        LEGACY_SAMPLE_FORMULAS.forEach(f => { if (!have.has(normKey(f.title))) AppState.customFormulas.push(Object.assign({}, f)); });
        AppState.formulasMigrated = true;
      }
      AppState.customFormulas.forEach(f => {
        if (!f.id) f.id = newFormulaId();
        if (f.starred === undefined) f.starred = false;
        if (f.revise === undefined) f.revise = false;
        if (!f.created) f.created = new Date().toISOString();
        if (f.chapter === undefined) f.chapter = '';
        if (!f.subject) f.subject = 'General';
      });
      if (!Array.isArray(AppState.customQuestions)) AppState.customQuestions = [];
      if (!Array.isArray(AppState.userNotes)) AppState.userNotes = [];
      if (!Array.isArray(AppState.resources)) AppState.resources = [];
      if (!Array.isArray(AppState.plannerTasks)) AppState.plannerTasks = [];
      if (!Array.isArray(AppState.mistakeBook)) AppState.mistakeBook = [];
      if (!Array.isArray(AppState.testHistory)) AppState.testHistory = [];
      if (!Array.isArray(AppState.weeklyHours)) AppState.weeklyHours = [0, 0, 0, 0, 0, 0, 0];
      if (!AppState.selectedGroupScope) AppState.selectedGroupScope = "BOTH";
      if (!AppState.completedGroups) AppState.completedGroups = {};
      if (!AppState.lectureDueDates) AppState.lectureDueDates = {};
      if (!AppState.lectureLog) AppState.lectureLog = {};
      if (!Array.isArray(AppState.activityDays)) AppState.activityDays = [];
      if (!AppState.pomodoro) AppState.pomodoro = { focus: 50, brk: 10 };
      if (!AppState.pomodoroStats) AppState.pomodoroStats = {};
      if (!AppState.pomodoroMinutes) AppState.pomodoroMinutes = {};
      if (!Array.isArray(AppState.papers)) AppState.papers = [];
      AppState.userNotes.forEach(n => { if (!Array.isArray(n.tags)) n.tags = []; if (n.pinned === undefined) n.pinned = false; if (n.color === undefined) n.color = ''; });
      ensureWeek();
      // migrate old notes (tag only) and old planner blocks
      AppState.userNotes.forEach(n => {
        if (!n.subject) n.subject = n.tag || "General";
        if (n.chapter === undefined) n.chapter = "";
        if (!n.text) n.text = n.title || "";
      });
      AppState.plannerTasks.forEach(t => {
        if (!t.date) t.date = todayISO();
        if (!t.time) t.time = "Flexible";
      });
      AppState.customQuestions.forEach(q => { if (q.chapter === undefined) q.chapter = "General"; });
    }

    function applySyllabusFromState() {
      if (AppState.syllabusData) {
        Object.keys(AppState.syllabusData).forEach(lvl => {
          if (SYLLABUS[lvl] && AppState.syllabusData[lvl] && AppState.syllabusData[lvl].groups) {
            SYLLABUS[lvl].groups = AppState.syllabusData[lvl].groups;
          }
        });
      }
    }

    function loadState() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          AppState = JSON.parse(saved);
          normalizeState();
          applySyllabusFromState();
        } else {
          clearSampleProgress();
          AppState = freshDefaultState();
          normalizeState();
          saveState();
        }
      } catch (e) {
        console.error("Local storage read error:", e);
        clearSampleProgress();
        AppState = freshDefaultState();
        normalizeState();
      }
    }

    function saveState() {
      if (typeof isResettingData !== 'undefined' && isResettingData) return;
      try {
        AppState.syllabusData = {
          INTER: { groups: SYLLABUS.INTER.groups },
          FINAL: { groups: SYLLABUS.FINAL.groups }
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(AppState));
      } catch (e) {
        console.error("Local storage save error:", e);
      }
    }

    /* ---------- Date & activity helpers ---------- */
    function pad2(n) { return String(n).padStart(2, '0'); }
    function toISODate(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
    function todayISO() { return toISODate(new Date()); }
    function parseISODate(s) {
      const p = String(s).split('-').map(Number);
      return new Date(p[0], (p[1] || 1) - 1, p[2] || 1);
    }
    function addDaysISO(s, n) { const d = parseISODate(s); d.setDate(d.getDate() + n); return toISODate(d); }
    function daysBetweenISO(a, b) { return Math.round((parseISODate(b) - parseISODate(a)) / 86400000); }
    function escapeHtml(s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    function markActivity() {
      if (!Array.isArray(AppState.activityDays)) AppState.activityDays = [];
      const t = todayISO();
      if (!AppState.activityDays.includes(t)) {
        AppState.activityDays.push(t);
        if (AppState.activityDays.length > 400) AppState.activityDays = AppState.activityDays.slice(-400);
      }
    }

    function computeStreak() {
      const days = new Set(AppState.activityDays || []);
      let cursor = todayISO();
      if (!days.has(cursor)) cursor = addDaysISO(cursor, -1);
      let streak = 0;
      while (days.has(cursor)) { streak++; cursor = addDaysISO(cursor, -1); }
      return streak;
    }

    /* ---------- Generic confirm dialog (replaces window.confirm) ---------- */
    let confirmCallback = null;
    function askConfirm(title, message, okLabel, onOk) {
      confirmCallback = onOk;
      document.getElementById('confirmDialogTitle').textContent = title;
      document.getElementById('confirmDialogMessage').textContent = message;
      document.getElementById('confirmDialogOkBtn').textContent = okLabel || 'Yes';
      document.getElementById('confirmDialogModal').classList.remove('hidden');
    }
    function closeConfirmDialog() {
      document.getElementById('confirmDialogModal').classList.add('hidden');
      confirmCallback = null;
    }
    function runConfirmDialog() {
      const cb = confirmCallback;
      closeConfirmDialog();
      if (typeof cb === 'function') cb();
    }

    function renderAll() {
      renderHomeTab();
      renderStudyTab();
      renderPracticeTab();
      renderPlannerTab();
      renderProfileTab();
    }

    /* ---------- Spaced revision (1-7-15-30 day) ---------- */
    const REVISION_INTERVALS = [1, 7, 15, 30];

    function getRevisionItems() {
      const today = todayISO();
      const items = [];
      getScopedPapers().forEach(p => {
        p.chapters.forEach(c => {
          if (!c.completedOn) return;
          const done = c.revDone || [];
          const next = REVISION_INTERVALS.find(d => !done.includes(d));
          if (next === undefined) return;
          const due = addDaysISO(c.completedOn, next);
          items.push({ paperName: p.name, chId: c.id, chName: c.name, interval: next, due, diff: daysBetweenISO(today, due) });
        });
      });
      items.sort((a, b) => a.diff - b.diff);
      return items;
    }

    function revisionStatusText(diff) {
      if (diff < 0) return `Overdue by ${-diff} day${diff === -1 ? '' : 's'}`;
      if (diff === 0) return 'Due Today';
      if (diff === 1) return 'Tomorrow';
      return `In ${diff} Days`;
    }

    function markRevisionDone(chId, interval) {
      Object.keys(SYLLABUS).forEach(lvl => {
        Object.keys(SYLLABUS[lvl].groups).forEach(g => {
          SYLLABUS[lvl].groups[g].papers.forEach(p => {
            p.chapters.forEach(c => {
              if (c.id === chId) {
                if (!c.revDone) c.revDone = [];
                if (!c.revDone.includes(interval)) c.revDone.push(interval);
                if (REVISION_INTERVALS.every(d => c.revDone.includes(d))) c.revised = true;
              }
            });
          });
        });
      });
      markActivity();
      saveState();
      showToast(`Day-${interval} revision marked done!`);
      renderHomeTab();
      renderPlannerTab();
      renderStudyTab();
    }

    /* ---------- heavy libraries are loaded only when needed (keeps the splash screen smooth) ---------- */
    const LAZY_LIBS = {
      chart: 'https://cdn.jsdelivr.net/npm/chart.js',
      pdf: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
      pdfWorker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
    };
    const lazyLoads = {};
    function loadScriptOnce(url) {
      if (lazyLoads[url]) return lazyLoads[url];
      lazyLoads[url] = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url; s.async = true;
        s.onload = () => resolve(true);
        s.onerror = () => { delete lazyLoads[url]; reject(new Error('load failed')); };
        document.head.appendChild(s);
      });
      return lazyLoads[url];
    }
    async function ensurePdfJs() {
      if (!window.pdfjsLib) { try { await loadScriptOnce(LAZY_LIBS.pdf); } catch (e) { return false; } }
      if (!window.pdfjsLib) return false;
      if (pdfjsLib.GlobalWorkerOptions && !pdfjsLib.GlobalWorkerOptions.workerSrc) pdfjsLib.GlobalWorkerOptions.workerSrc = LAZY_LIBS.pdfWorker;
      return true;
    }
    async function ensureChartJs() {
      if (typeof Chart !== 'undefined') return true;
      try { await loadScriptOnce(LAZY_LIBS.chart); } catch (e) { return false; }
      return typeof Chart !== 'undefined';
    }
    function afterSplash(fn) {
      if (window.__orbitSplashDone === false) { (window.__afterSplash = window.__afterSplash || []).push(fn); } else { fn(); }
    }

    function showToast(msg) {
      const toast = document.getElementById('toastNotification');
      toast.textContent = msg;
      toast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4');
      toast.classList.add('opacity-100', 'translate-y-0');
      setTimeout(() => {
        toast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4');
        toast.classList.remove('opacity-100', 'translate-y-0');
      }, 2500);
    }

    /* =========================================================================
       2. EXAM ATTEMPTS & CUSTOM DATE SELECTION ENGINE
       ========================================================================= */
    function generateRollingExamAttempts(count = 6) {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth();

      const attempts = [];
      let year = currentYear;
      let isJune = currentMonth <= 5;

      if (currentMonth >= 6) {
        isJune = false;
      }

      for (let i = 0; i < count; i++) {
        const term = isJune ? 'June' : 'Dec';
        const label = `${term} ${year}`;
        const dateStr = isJune ? `${year}-06-11` : `${year}-12-11`;
        const readable = `${term === 'June' ? 'June 11' : 'Dec 11'}, ${year}`;

        attempts.push({
          label: label,
          fullLabel: `${label} (${readable})`,
          date: dateStr,
          readableDate: readable
        });

        if (isJune) {
          isJune = false;
        } else {
          isJune = true;
          year++;
        }
      }

      return attempts;
    }

    function deriveDateFromAttempt(attemptStr) {
      const parts = attemptStr.trim().split(' ');
      if (parts.length >= 2) {
        const term = parts[0].toLowerCase();
        const yr = parseInt(parts[1], 10);
        if (!isNaN(yr)) {
          if (term.includes('june') || term.includes('jun')) {
            return `${yr}-06-11`;
          }
          if (term.includes('dec')) {
            return `${yr}-12-11`;
          }
        }
      }
      return "2026-12-11";
    }

    function populateRollingExamAttempts() {
      const select = document.getElementById('examAttemptSelect');
      if (!select) return;

      select.innerHTML = '';
      const rollingList = generateRollingExamAttempts(6);
      const currentSelected = AppState.studentProfile.examAttempt || "Dec 2026";

      let matched = false;
      rollingList.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.label;
        opt.textContent = item.fullLabel;
        if (item.label === currentSelected) {
          opt.selected = true;
          matched = true;
        }
        select.appendChild(opt);
      });

      if (!matched && currentSelected) {
        const customOpt = document.createElement('option');
        customOpt.value = currentSelected;
        customOpt.textContent = `${currentSelected} (Custom)`;
        customOpt.selected = true;
        select.prepend(customOpt);
      }
    }

    function handleExamAttemptChange(val) {
      AppState.studentProfile.examAttempt = val;
      AppState.studentProfile.examDate = deriveDateFromAttempt(val);
      saveState();
      renderHomeTab();
      renderProfileTab();
      showToast(`Target exam set to ${val}`);
    }

    /* Modal based Custom Date Picker */
    function openExamDateModal() {
      const currentDateStr = AppState.studentProfile.examDate || "2026-12-11";
      const currentTitle = AppState.studentProfile.examAttempt || "Dec 2026";

      document.getElementById('customExamDateInput').value = currentDateStr;
      document.getElementById('customExamTitleInput').value = currentTitle;

      // Render preset buttons
      const presetsContainer = document.getElementById('examDateModalPresets');
      presetsContainer.innerHTML = '';

      const presets = generateRollingExamAttempts(4);
      presets.forEach(p => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = "p-2 rounded-xl border border-slate-200 dark:border-cma-darkborder bg-slate-50 dark:bg-slate-800/60 hover:border-cma-500 text-left transition";
        btn.innerHTML = `
          <div class="font-bold text-[11px] text-slate-800 dark:text-slate-200">${p.label}</div>
          <div class="text-[9px] text-slate-400 font-mono">${p.readableDate}</div>
        `;
        btn.onclick = () => {
          document.getElementById('customExamDateInput').value = p.date;
          document.getElementById('customExamTitleInput').value = p.label;
        };
        presetsContainer.appendChild(btn);
      });

      document.getElementById('examDateModal').classList.remove('hidden');
    }

    function closeExamDateModal() {
      document.getElementById('examDateModal').classList.add('hidden');
    }

    function applyCustomExamDate() {
      const dateVal = document.getElementById('customExamDateInput').value;
      let titleVal = document.getElementById('customExamTitleInput').value.trim();

      if (!dateVal) {
        showToast("Please choose a valid date from the calendar");
        return;
      }

      const d = new Date(`${dateVal}T00:00:00`);
      if (isNaN(d.getTime())) {
        showToast("Invalid date format selected");
        return;
      }

      if (!titleVal) {
        const monthShort = d.toLocaleString('en-US', { month: 'short' });
        titleVal = `${monthShort} ${d.getFullYear()}`;
      }

      AppState.studentProfile.examDate = dateVal;
      AppState.studentProfile.examAttempt = titleVal;
      saveState();

      closeExamDateModal();
      populateRollingExamAttempts();
      renderHomeTab();
      renderProfileTab();
      showToast(`Exam target set to ${titleVal} (${dateVal})!`);
    }

    /* Helper: Scope utilities */
    function allGroupKeys(level) {
      return (level || AppState.activeLevel) === 'INTER' ? ['G1', 'G2'] : ['G3', 'G4'];
    }

    function isGroupCompleted(gKey) {
      return !!(AppState.completedGroups && AppState.completedGroups[gKey]);
    }

    function getActiveGroupKeys() {
      const all = allGroupKeys();
      const scope = AppState.selectedGroupScope || "BOTH";
      let keys = (scope !== "BOTH" && all.includes(scope)) ? [scope] : all.slice();
      if (!AppState.showCompletedGroups) {
        const open = keys.filter(k => !isGroupCompleted(k));
        keys = open.length > 0 ? open : all.filter(k => !isGroupCompleted(k));
      }
      return keys;
    }

    function getScopedPapers() {
      const levelGroups = SYLLABUS[AppState.activeLevel].groups;
      const papers = [];
      getActiveGroupKeys().forEach(gKey => {
        if (levelGroups[gKey]) papers.push(...levelGroups[gKey].papers);
      });
      return papers;
    }

    function getScopeDisplayLabel() {
      const levelTitle = AppState.activeLevel === 'INTER' ? 'CMA Inter' : 'CMA Final';
      const keys = getActiveGroupKeys();
      if (keys.length === 0) return `${levelTitle}: All groups passed`;
      if (keys.length === 1) return `${levelTitle}: Group ${keys[0].replace('G', '')}`;
      return `${levelTitle}: Both Groups (${keys.join('+')})`;
    }

    /* Navigation */
    function applyNavState(tabId) {
      document.querySelectorAll('.nav-btn').forEach(btn => {
        const active = btn.dataset.target === tabId;
        btn.classList.toggle('is-active', active);
        if (active) btn.setAttribute('aria-current', 'page'); else btn.removeAttribute('aria-current');
        const icon = btn.querySelector('.nav-icon');
        if (icon) icon.className = icon.className.replace(/\bph(-fill)?\b/, active ? 'ph-fill' : 'ph');
      });
    }

    /* Header: contextual title per screen */
    function greetingForNow() {
      const h = new Date().getHours();
      return h < 5 ? 'Good night' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 21 ? 'Good evening' : 'Good night';
    }
    function setHeaderContext(tabId) {
      const el = document.getElementById('headerTitle');
      if (!el) return;
      const name = ((AppState.studentProfile && AppState.studentProfile.name) || '').trim();
      const titles = {
        home: name ? `${greetingForNow()}, ${name}` : greetingForNow(),
        study: 'Study Session',
        practice: 'Practice Arena',
        planner: 'Study Planner',
        profile: 'Your Progress'
      };
      el.textContent = titles[tabId] || 'CMA Orbit';
    }

    function switchTab(tabId) {
      document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
      const activePane = document.getElementById(`tab-${tabId}`);
      if (activePane) activePane.classList.remove('hidden');
      applyNavState(tabId);
      setHeaderContext(tabId);
      const vp = document.getElementById('mainViewport');
      if (vp) vp.scrollTop = 0;

      if (tabId === 'home') renderHomeTab();
      if (tabId === 'study') renderStudyTab();
      if (tabId === 'planner') renderPlannerTab();
      if (tabId === 'profile') renderProfileTab();
      if (tabId === 'practice') renderPracticeTab();
    }

    function setupTheme() {
      const isDark = AppState.theme === 'dark' || 
        (!AppState.theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        document.documentElement.classList.add('dark');
        AppState.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        AppState.theme = 'light';
      }
      saveState();

      document.getElementById('themeToggleBtn').onclick = () => {
        const currentlyDark = document.documentElement.classList.contains('dark');
        if (currentlyDark) {
          document.documentElement.classList.remove('dark');
          AppState.theme = 'light';
        } else {
          document.documentElement.classList.add('dark');
          AppState.theme = 'dark';
        }
        saveState();
        syncThemeColorMeta();
        renderHomeWeeklyChart();
      };
      syncThemeColorMeta();
    }

    function syncThemeColorMeta() {
      const m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute('content', document.documentElement.classList.contains('dark') ? '#1D1F24' : '#FFFAE3');
    }

    function openLevelModal() {
      syncModalScopeButtons();
      document.getElementById('levelModal').classList.remove('hidden');
    }
    document.getElementById('levelSwitchBtn').onclick = openLevelModal;

    function closeLevelModal() {
      document.getElementById('levelModal').classList.add('hidden');
    }

    function syncModalScopeButtons() {
      const level = AppState.activeLevel;
      const scope = AppState.selectedGroupScope || "BOTH";
      ['INTER', 'FINAL'].forEach(lvl => {
        ['G1', 'G2', 'G3', 'G4', 'BOTH'].forEach(sc => {
          const btn = document.getElementById(`scopeBtn_${lvl}_${sc}`);
          if (!btn) return;
          const isActive = level === lvl && scope === sc;
          btn.className = `py-2 px-1 text-center rounded-xl text-xs font-bold border transition ${
            isActive
              ? 'bg-cma-600 text-white border-cma-600 shadow-md shadow-cma-600/25'
              : 'bg-white dark:bg-cma-darkcard text-slate-600 dark:text-slate-300 border-slate-200 dark:border-cma-darkborder hover:border-cma-500'
          }`;
        });
      });
      const box = document.getElementById('completedGroupsBox');
      if (box) {
        box.innerHTML = '';
        ['G1', 'G2', 'G3', 'G4'].forEach(g => {
          const done = isGroupCompleted(g);
          const row = document.createElement('div');
          row.className = 'flex items-center justify-between text-xs py-1';
          row.innerHTML = `<span class="font-semibold text-slate-700 dark:text-slate-200">Group ${g.replace('G', '')} ${done ? '<span class="text-emerald-600">• Passed ✓</span>' : ''}</span>
            <button onclick="toggleGroupCompleted('${g}')" class="px-2.5 py-1 rounded-lg font-bold text-[11px] ${done ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300' : 'bg-emerald-600 text-white'}">${done ? 'Reopen' : 'Mark as Passed'}</button>`;
          box.appendChild(row);
        });
        const t = document.createElement('label');
        t.className = 'flex items-center space-x-2 text-[11px] text-slate-500 dark:text-slate-400 pt-1';
        t.innerHTML = `<input type="checkbox" ${AppState.showCompletedGroups ? 'checked' : ''} onchange="toggleShowCompletedGroups()" class="rounded"><span>Also show passed groups</span>`;
        box.appendChild(t);
      }
    }

    function selectLevelAndGroup(level, groupScope) {
      AppState.activeLevel = level;
      AppState.selectedGroupScope = groupScope;
      const keys = getActiveGroupKeys();
      AppState.activeGroup = keys.length > 0 ? keys[0] : (level === "INTER" ? "G1" : "G3");
      const scopedPapers = getScopedPapers();
      if (scopedPapers.length > 0) AppState.selectedSubjectId = scopedPapers[0].id;
      saveState();
      closeLevelModal();
      showToast(`Switched active scope to ${getScopeDisplayLabel()}`);
      renderAll();
    }

    function applyGroupPassed(gKey, passed) {
      if (!AppState.completedGroups) AppState.completedGroups = {};
      if (passed) AppState.completedGroups[gKey] = true; else delete AppState.completedGroups[gKey];
      const keys = getActiveGroupKeys();
      AppState.activeGroup = keys.length > 0 ? keys[0] : AppState.activeGroup;
      const first = getScopedPapers()[0];
      if (first) AppState.selectedSubjectId = first.id;
      saveState();
      showToast(passed ? `Group ${gKey.replace('G', '')} marked as passed - congratulations!` : `Group ${gKey.replace('G', '')} reopened.`);
      if (passed) confetti({ particleCount: 90, spread: 80, origin: { y: 0.6 } });
      syncModalScopeButtons();
      renderAll();
    }

    function toggleGroupCompleted(gKey) {
      const n = gKey.replace('G', '');
      if (isGroupCompleted(gKey)) { applyGroupPassed(gKey, false); return; }
      askConfirm(`Mark Group ${n} as passed?`, `Only do this once you have cleared the Group ${n} exam. Its subjects, chapters, MCQs, notes and files will be hidden. You can reopen it any time.`, 'Yes, I passed', () => applyGroupPassed(gKey, true));
    }

    function toggleShowCompletedGroups() {
      AppState.showCompletedGroups = !AppState.showCompletedGroups;
      saveState();
      syncModalScopeButtons();
      renderAll();
    }


    function updateHeaderBadges() {
      const isInter = AppState.activeLevel === 'INTER';
      document.getElementById('activeLevelLabel').textContent = isInter ? 'Inter' : 'Final';
      const keys = getActiveGroupKeys();
      document.getElementById('headerGroupPill').textContent = keys.length === 0 ? 'Done' : keys.join('+');
      document.getElementById('targetExamDisplay').textContent = `${AppState.studentProfile.examAttempt || 'Dec 2026'} Attempt`;
    }

    /* =========================================================================
       3. HOME DASHBOARD RENDERING
       ========================================================================= */
    function renderHomeTab() {
      updateHeaderBadges();
      document.getElementById('dashStudentName').textContent = `Welcome Back, CMA Aspirant`;
      setHeaderContext('home');
      document.getElementById('userAvatarText').textContent = AppState.studentProfile.initials || "CP";
      document.getElementById('dashActiveScopeLabel').textContent = getScopeDisplayLabel();

      renderDashboardGroupPills();
      calculateCountdown();

      let totalLectures = 0;
      let completedLectures = 0;
      const scopedPapers = getScopedPapers();
      scopedPapers.forEach(paper => {
        paper.chapters.forEach(ch => {
          totalLectures += ch.totalLectures;
          completedLectures += ch.completedLectures;
        });
      });

      const pct = totalLectures > 0 ? Math.round((completedLectures / totalLectures) * 100) : 0;
      document.getElementById('homeSyllabusPercent').textContent = `${pct}%`;
      document.getElementById('homePendingLectures').textContent = (totalLectures - completedLectures);
      const syllBar = document.getElementById('homeSyllabusBar');
      if (syllBar) syllBar.style.width = `${pct}%`;
      const streakEl = document.getElementById('homeStreak');
      if (streakEl) streakEl.textContent = String(computeStreak());

      const tgt = getLectureTargetSummary();
      const tgtEl = document.getElementById('homeDailyTargetText');
      if (tgtEl) {
        tgtEl.textContent = tgt.any ? `Today: ${tgt.watchedToday}/${tgt.perDay} lectures` : '';
      }

      const resumeEl = document.getElementById('quickResumeText');
      const resumeSub = document.getElementById('resumeSubject');
      const resumeMeta = document.getElementById('resumeMeta');
      const resumeBar = document.getElementById('resumeBar');
      let resumeText = 'Add your first chapter in the Study tab';
      let resumeSubj = 'Next up', resumeMetaTxt = '\u00a0', resumePct = 0;
      for (const p of scopedPapers) {
        const ch = p.chapters.find(c => c.completedLectures < c.totalLectures);
        if (ch) {
          resumeText = ch.name; resumeSubj = p.name;
          resumePct = ch.totalLectures > 0 ? Math.round((ch.completedLectures / ch.totalLectures) * 100) : 0;
          resumeMetaTxt = `${ch.completedLectures} of ${ch.totalLectures} lectures \u00b7 ${resumePct}%`;
          break;
        }
      }
      if (scopedPapers.length === 0) { resumeText = 'All groups passed'; resumeSubj = 'Congratulations'; }
      resumeEl.textContent = resumeText;
      if (resumeSub) resumeSub.textContent = resumeSubj;
      if (resumeMeta) resumeMeta.textContent = resumeMetaTxt;
      if (resumeBar) resumeBar.style.width = `${resumePct}%`;

      renderDailyStudyGoals();
      rotateDailyMotivation(false);
      renderHomeQuickNotes();

      const targetsContainer = document.getElementById('homeTodayTargetsList');
      targetsContainer.innerHTML = '';
      const today = todayISO();
      const todays = [];
      AppState.plannerTasks.forEach((t, i) => { if (t.date === today) todays.push({ t, i }); });
      todays.sort((a, b) => String(a.t.start || '').localeCompare(String(b.t.start || '')));
      if (todays.length === 0) {
        targetsContainer.innerHTML = `<div class="orb-empty"><div class="e-ico"><i class="ph ph-calendar-plus"></i></div><div class="e-ttl">Nothing scheduled today</div><div class="e-sub">Block out a study slot so you know exactly what to do next.</div><button onclick="switchTab('planner')" class="btn btn-secondary btn-sm">Plan today</button></div>`;
      }
      todays.slice(0, 3).forEach(({ t: task, i: idx }) => {
        const div = document.createElement('div');
        div.className = `orb-row ${task.completed ? 'orb-row-done' : ''}`;
        div.innerHTML = `
          <div class="flex items-center gap-3 min-w-0">
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskDone(${idx})" class="orb-check">
            <span class="text-xs truncate ${task.completed ? 'line-through text-slate-400' : 'font-bold text-slate-800 dark:text-slate-100'}">${escapeHtml(task.title)}</span>
          </div>
          <span class="orb-chip bg-cma-100 text-cma-700 dark:bg-cma-900/60 dark:text-cma-300 font-mono shrink-0">${escapeHtml(task.start || String(task.time).split('-')[0])}</span>
        `;
        targetsContainer.appendChild(div);
      });

      const revQueue = document.getElementById('homeRevisionQueue');
      const allDue = getRevisionItems().filter(r => r.diff <= 0);
      const due = allDue.slice(0, 3);
      const dueBadge = document.getElementById('dueRevisionBadge');
      if (dueBadge) dueBadge.textContent = `${allDue.length} Due`;
      if (due.length === 0) {
        revQueue.innerHTML = `<div class="orb-empty"><div class="e-ico"><i class="ph ph-check-circle"></i></div><div class="e-ttl">You're caught up</div><div class="e-sub">Finish a chapter and its 1-7-15-30 day reviews will be scheduled here.</div></div>`;
      } else {
        revQueue.innerHTML = due.map(r => `
          <div class="flex items-center justify-between gap-2 p-2.5 pl-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/70 dark:border-amber-500/20 relative overflow-hidden">
            <span class="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></span>
            <div class="min-w-0 pl-1">
              <div class="font-extrabold text-xs text-amber-900 dark:text-amber-200 truncate">${escapeHtml(r.chName)}</div>
              <div class="text-[10px] font-semibold text-amber-700 dark:text-amber-400">Day-${r.interval} review • ${revisionStatusText(r.diff)}</div>
            </div>
            <button onclick="markRevisionDone('${r.chId}', ${r.interval})" class="px-3 py-1.5 rounded-xl bg-amber-500 text-white font-extrabold text-[11px] shadow-md shadow-amber-500/30 shrink-0 flex items-center gap-1 active:scale-95"><i class="ph-bold ph-check"></i>Done</button>
          </div>`).join('');
      }

      renderHomeWeeklyChart();
    }

    function renderDashboardGroupPills() {
      const container = document.getElementById('dashGroupQuickPills');
      container.innerHTML = '';
      const isInter = AppState.activeLevel === 'INTER';
      const scope = AppState.selectedGroupScope || "BOTH";
      let options = isInter
        ? [ { id: 'G1', label: 'G1' }, { id: 'G2', label: 'G2' }, { id: 'BOTH', label: 'Both' } ]
        : [ { id: 'G3', label: 'G3' }, { id: 'G4', label: 'G4' }, { id: 'BOTH', label: 'Both' } ];
      if (!AppState.showCompletedGroups) options = options.filter(o => o.id === 'BOTH' || !isGroupCompleted(o.id));
      options.forEach(opt => {
        const btn = document.createElement('button');
        const isActive = scope === opt.id;
        btn.className = isActive ? 'on' : '';
        btn.textContent = opt.label;
        btn.onclick = () => selectLevelAndGroup(AppState.activeLevel, opt.id);
        container.appendChild(btn);
      });
    }

    let countdownTimer = null;
    function calculateCountdown() {
      const attempt = AppState.studentProfile.examAttempt || 'ICMAI';
      const targetDateStr = AppState.studentProfile.examDate || deriveDateFromAttempt(AppState.studentProfile.examAttempt || "Dec 2026");
      const examDate = new Date(`${targetDateStr}T14:00:00`);
      const diff = examDate - new Date();
      const labelEl = document.getElementById('countdownLabelText');
      const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = String(v).padStart(2, '0'); };

      if (isNaN(diff)) { set('cntDays', 0); set('cntHours', 0); set('cntMins', 0); return; }
      if (diff > 0) {
        set('cntDays', Math.floor(diff / 86400000));
        set('cntHours', Math.floor((diff / 3600000) % 24));
        set('cntMins', Math.floor((diff / 60000) % 60));
        if (labelEl) labelEl.textContent = 'Exam countdown';
      } else {
        set('cntDays', 0); set('cntHours', 0); set('cntMins', 0);
        if (labelEl) labelEl.textContent = daysBetweenISO(targetDateStr, todayISO()) === 0
          ? `${attempt}: Exam day - all the best!`
          : `${attempt} date has passed - set your next attempt`;
      }
    }

    function startCountdownTicker() {
      if (countdownTimer) clearInterval(countdownTimer);
      countdownTimer = setInterval(calculateCountdown, 15000);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) calculateCountdown(); });
    }

    function renderDailyStudyGoals() {
      if (!AppState.dailyStudyGoals) {
        AppState.dailyStudyGoals = { targetHours: 6.0, slots: [] };
      }

      const goals = AppState.dailyStudyGoals;
      const slots = goals.slots || [];
      const completedSlots = slots.filter(s => s.completed);
      const targetHours = Number(goals.targetHours) || 6.0;

      const loggedHours = completedSlots.reduce((acc, curr) => acc + (Number(curr.hours) || 1.0), 0);
      const totalSlotHours = slots.reduce((acc, curr) => acc + (Number(curr.hours) || 1.0), 0);
      const denominatorHours = Math.max(targetHours, totalSlotHours);
      const percentage = denominatorHours > 0 ? Math.min(100, Math.round((loggedHours / denominatorHours) * 100)) : 0;

      const statsLabel = document.getElementById('dailyGoalStatsLabel');
      if (statsLabel) statsLabel.textContent = `${loggedHours.toFixed(1)} of ${targetHours.toFixed(1)} hours completed`;

      const taskRatio = document.getElementById('dailyGoalTaskRatioText');
      if (taskRatio) taskRatio.textContent = `${completedSlots.length}/${slots.length} slots`;

      const targetText = document.getElementById('dailyTargetHoursText');
      if (targetText) targetText.textContent = `${targetHours.toFixed(1)} hrs`;

      const loggedText = document.getElementById('dailyLoggedHoursText');
      if (loggedText) loggedText.textContent = `${loggedHours.toFixed(1)} hrs`;

      const ringPct = document.getElementById('dailyGoalRingPct');
      if (ringPct) ringPct.textContent = `${percentage}%`;

      const ringCircle = document.getElementById('dailyGoalRingCircle');
      if (ringCircle) {
        const circumference = 251.2;
        const offset = circumference - (circumference * percentage) / 100;
        ringCircle.style.strokeDashoffset = `${offset}`;
      }

      document.querySelectorAll('.target-preset-btn').forEach(btn => {
        const h = parseFloat(btn.dataset.hours);
        if (h === targetHours) {
          btn.className = "target-preset-btn orb-preset orb-preset-on";
        } else {
          btn.className = "target-preset-btn orb-preset";
        }
      });

      const listContainer = document.getElementById('dailyHourlyGoalsList');
      if (!listContainer) return;
      listContainer.innerHTML = '';

      if (slots.length === 0) {
        listContainer.innerHTML = `
          <div class="text-center py-4 text-slate-400 text-xs border border-dashed border-cma-200 dark:border-cma-darkborder rounded-2xl">
            <i class="ph ph-calendar-plus text-lg block mb-1 text-cma-300 dark:text-cma-700"></i>
            No hourly study slots scheduled today. Tap "+ Add Slot" above to plan your day.
          </div>
        `;
        return;
      }

      slots.forEach((slot, idx) => {
        const row = document.createElement('div');
        const isDone = !!slot.completed;
        row.className = `orb-row text-xs ${isDone ? 'orb-row-done' : ''}`;

        row.innerHTML = `
          <div class="flex items-center space-x-2.5 flex-1 min-w-0 pr-2">
            <input type="checkbox" ${isDone ? 'checked' : ''} onchange="toggleHourlyGoalSlot(${idx})" class="orb-check">
            <div class="flex-1 min-w-0">
              <div class="flex items-center space-x-1.5 flex-wrap">
                <span class="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-gradient-to-r from-cma-600 to-cma-500 text-white">${slot.subject}</span>
                <span class="text-[10px] text-slate-400 font-mono">${slot.time || ''}</span>
                <span class="text-[10px] font-bold text-cma-600 dark:text-cma-400">(${slot.hours}h)</span>
              </div>
              <p class="font-medium text-slate-800 dark:text-slate-100 truncate mt-0.5 ${isDone ? 'line-through text-slate-400 dark:text-slate-500' : ''}">${slot.topic}</p>
            </div>
          </div>
          <button onclick="deleteHourlyGoalSlot(${idx})" class="text-xs p-1 text-slate-300 hover:text-rose-500 flex-shrink-0 transition" title="Delete Slot">
            <i class="ph ph-trash"></i>
          </button>
        `;
        listContainer.appendChild(row);
      });
    }

    function toggleHourlyGoalSlot(idx) {
      const slot = AppState.dailyStudyGoals.slots[idx];
      slot.completed = !slot.completed;

      const slotHours = Number(slot.hours) || 1.0;
      ensureWeek();
      const todayIdx = weekIdx();
      if (slot.completed) {
        AppState.weeklyHours[todayIdx] = parseFloat((AppState.weeklyHours[todayIdx] + slotHours).toFixed(1));
        const totalLogged = AppState.dailyStudyGoals.slots.filter(s => s.completed).reduce((acc, cur) => acc + (Number(cur.hours) || 1), 0);
        if (totalLogged >= AppState.dailyStudyGoals.targetHours) {
          confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
          showToast("Daily study target achieved. Outstanding work!");
        } else {
          showToast(`Completed ${slot.hours}h slot: ${slot.subject}!`);
        }
      } else {
        AppState.weeklyHours[todayIdx] = Math.max(0, parseFloat((AppState.weeklyHours[todayIdx] - slotHours).toFixed(1)));
        showToast("Slot reopened.");
      }

      saveState();
      renderDailyStudyGoals();
      renderHomeWeeklyChart();
    }

    function deleteHourlyGoalSlot(idx) {
      AppState.dailyStudyGoals.slots.splice(idx, 1);
      saveState();
      renderDailyStudyGoals();
      showToast("Study block removed");
    }

    /* ---------- Generic input dialog (replaces window.prompt, which does not work well in the APK) ---------- */
    let inputDialogCallback = null;
    function askInput(title, label, value, inputType, onOk) {
      inputDialogCallback = onOk;
      document.getElementById('inputDialogTitle').textContent = title;
      document.getElementById('inputDialogLabel').textContent = label;
      const f = document.getElementById('inputDialogField');
      f.type = inputType || 'text';
      f.value = value === undefined || value === null ? '' : String(value);
      document.getElementById('inputDialogModal').classList.remove('hidden');
      setTimeout(() => { try { f.focus(); f.select(); } catch (e) {} }, 150);
    }
    function closeInputDialog() {
      document.getElementById('inputDialogModal').classList.add('hidden');
      inputDialogCallback = null;
    }
    function runInputDialog() {
      const cb = inputDialogCallback;
      const val = document.getElementById('inputDialogField').value;
      if (typeof cb === 'function') { if (cb(val) === false) return; }
      closeInputDialog();
    }

    function promptCustomDailyTarget() {
      askInput('Daily study target', 'Hours per day (1 to 24, e.g. 7.5)', AppState.dailyStudyGoals.targetHours || 6, 'number', val => {
        const n = parseFloat(val);
        if (isNaN(n) || n <= 0 || n > 24) { showToast('Please enter a valid number of hours (1 to 24)'); return false; }
        setDailyTargetHours(n);
      });
    }

    function initialsFromName(name) {
      return String(name || '').trim().split(/\s+/).filter(Boolean).map(w => w[0]).join('').substring(0, 2).toUpperCase();
    }
    let profileInitialsTouched = false;
    function openProfileEdit() {
      const p = AppState.studentProfile;
      document.getElementById('profileNameInput').value = p.name || '';
      document.getElementById('profileInitialsInput').value = p.initials || initialsFromName(p.name);
      document.getElementById('profileEditAvatar').textContent = document.getElementById('profileInitialsInput').value || '?';
      profileInitialsTouched = false;
      document.getElementById('profileEditModal').classList.remove('hidden');
      setTimeout(() => { try { document.getElementById('profileNameInput').focus(); } catch (e) {} }, 150);
    }
    function closeProfileEdit() { document.getElementById('profileEditModal').classList.add('hidden'); }
    function onProfileNameTyping() {
      if (profileInitialsTouched) return;
      const ini = initialsFromName(document.getElementById('profileNameInput').value);
      document.getElementById('profileInitialsInput').value = ini;
      document.getElementById('profileEditAvatar').textContent = ini || '?';
    }
    function onProfileInitialsTyping() {
      profileInitialsTouched = true;
      const f = document.getElementById('profileInitialsInput');
      f.value = f.value.toUpperCase().substring(0, 2);
      document.getElementById('profileEditAvatar').textContent = f.value || '?';
    }
    function saveProfileEdit() {
      const name = document.getElementById('profileNameInput').value.trim();
      if (!name) { showToast('Please enter your name'); return; }
      AppState.studentProfile.name = name;
      AppState.studentProfile.initials = (document.getElementById('profileInitialsInput').value.trim() || initialsFromName(name)).toUpperCase().substring(0, 2);
      saveState();
      closeProfileEdit();
      renderProfileTab();
      renderHomeTab();
      showToast('Profile updated!');
    }
    function editStudentProfileName() { openProfileEdit(); }
    function changeAvatarInitials() { openProfileEdit(); }

    /* ---------- Revision planner: full list of chapters ---------- */
    let revFilter = 'all';

    function getRevisionOverview() {
      const today = todayISO();
      const rows = [];
      getScopedPapers().forEach(p => p.chapters.forEach(ch => {
        const finished = ch.totalLectures > 0 && ch.completedLectures >= ch.totalLectures;
        if (!finished) { rows.push({ kind: 'notfinished', paper: p, ch, order: 3 }); return; }
        const done = ch.revDone || [];
        const base = ch.completedOn || today;
        const steps = REVISION_INTERVALS.map(d => ({ d, done: done.includes(d), due: addDaysISO(base, d) }));
        const next = steps.find(s => !s.done);
        if (!next) { rows.push({ kind: 'completed', paper: p, ch, steps, order: 4 }); return; }
        const diff = daysBetweenISO(today, next.due);
        rows.push({ kind: diff <= 0 ? 'due' : 'upcoming', paper: p, ch, steps, next, diff, order: diff <= 0 ? 0 : 1 });
      }));
      rows.sort((a, b) => a.order - b.order || (a.diff || 0) - (b.diff || 0));
      return rows;
    }

    function openRevisionList() {
      revFilter = 'all';
      renderRevisionList();
      document.getElementById('revisionModal').classList.remove('hidden');
    }
    function closeRevisionList() { document.getElementById('revisionModal').classList.add('hidden'); }
    function setRevFilter(f) { revFilter = f; renderRevisionList(); }

    function renderRevisionList() {
      const rows = getRevisionOverview();
      const counts = { all: rows.length, due: 0, upcoming: 0, completed: 0, notfinished: 0 };
      rows.forEach(r => counts[r.kind]++);
      document.getElementById('revisionCountLabel').textContent = `${rows.length} chapter${rows.length === 1 ? '' : 's'} • ${counts.due} due now`;
      const bar = document.getElementById('revisionFilterBar');
      bar.innerHTML = '';
      [['all', 'All'], ['due', 'Due now'], ['upcoming', 'Upcoming'], ['notfinished', 'Not finished'], ['completed', 'Revised']].forEach(([k, label]) => {
        const b = document.createElement('button');
        b.className = `st-chip ${revFilter === k ? 'on' : ''}`;
        b.innerHTML = `${label}<em>${counts[k]}</em>`;
        b.onclick = () => setRevFilter(k);
        bar.appendChild(b);
      });
      const list = document.getElementById('revisionListContainer');
      list.innerHTML = '';
      const shown = rows.filter(r => revFilter === 'all' || r.kind === revFilter);
      if (shown.length === 0) {
        list.innerHTML = `<div class="text-center py-10 text-slate-400 text-xs px-4"><i class="ph-bold ph-arrows-clockwise text-4xl block mb-1"></i>${rows.length === 0 ? 'No chapters yet. Add chapters in the Study tab.' : 'Nothing in this list.'}</div>`;
        return;
      }
      const fmt = iso => parseISODate(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      shown.forEach(r => {
        const row = document.createElement('div');
        row.className = `p-3 rounded-2xl border ${r.kind === 'due' ? 'bg-amber-50/70 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/40' : 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-cma-darkborder'}`;
        let body;
        if (r.kind === 'notfinished') {
          const pct = r.ch.totalLectures ? Math.round(r.ch.completedLectures / r.ch.totalLectures * 100) : 0;
          body = `<div class="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400">${r.ch.completedLectures}/${r.ch.totalLectures} lectures watched (${pct}%) • revision starts after the last lecture</div>`;
        } else {
          const chips = r.steps.map(s => {
            const isNext = r.next && r.next.d === s.d;
            const cls = s.done ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
              : (isNext ? (r.diff <= 0 ? 'bg-amber-500 text-white' : 'bg-cma-100 text-cma-700 dark:bg-cma-900/50 dark:text-cma-300')
                        : 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400');
            return `<span class="px-2 py-1 rounded-lg text-[10px] font-extrabold ${cls}">${s.d}D ${s.done ? '✓' : '• ' + fmt(s.due)}</span>`;
          }).join('');
          body = `<div class="mt-2 flex flex-wrap gap-1.5">${chips}</div>`;
        }
        row.innerHTML = `
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              <div class="text-xs font-extrabold text-slate-800 dark:text-slate-100 leading-snug">${escapeHtml(r.ch.name)}</div>
              <div class="text-[10px] text-slate-400 truncate">${escapeHtml(r.paper.code)}: ${escapeHtml(r.paper.name)}</div>
            </div>
            ${r.kind === 'due' ? `<span class="shrink-0 text-[10px] font-bold text-amber-700 dark:text-amber-300">${revisionStatusText(r.diff)}</span>` : (r.kind === 'upcoming' ? `<span class="shrink-0 text-[10px] font-bold text-slate-400">${revisionStatusText(r.diff)}</span>` : (r.kind === 'completed' ? '<span class="shrink-0 text-[10px] font-bold text-emerald-600">All revised</span>' : ''))}
          </div>${body}`;
        if (r.next) {
          const btn = document.createElement('button');
          btn.className = `mt-2 w-full py-2 rounded-xl text-[11px] font-extrabold ${r.diff <= 0 ? 'bg-amber-500 text-white' : 'bg-white dark:bg-slate-700 text-cma-700 dark:text-cma-300 border border-cma-200 dark:border-cma-800'}`;
          btn.textContent = r.diff <= 0 ? `Mark Day-${r.next.d} revision done` : `Mark Day-${r.next.d} done early`;
          btn.onclick = () => { markRevisionDone(r.ch.id, r.next.d); renderRevisionList(); };
          row.appendChild(btn);
        }
        list.appendChild(row);
      });
    }

    function setDailyTargetHours(hours) {
      AppState.dailyStudyGoals.targetHours = parseFloat(hours);
      saveState();
      renderDailyStudyGoals();
      showToast(`Daily target set to ${hours} hours`);
    }


    function openAddHourlyGoalModal() {
      const sel = document.getElementById('goalSubjectSelect');
      sel.innerHTML = '';
      const scopedPapers = getScopedPapers();

      scopedPapers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.textContent = `${p.code}: ${p.name}`;
        sel.appendChild(opt);
      });

      const now = new Date();
      const startH = String(now.getHours()).padStart(2, '0');
      const endH = String((now.getHours() + 1) % 24).padStart(2, '0');
      document.getElementById('goalTimeInput').value = `${startH}:00 - ${endH}:00`;
      document.getElementById('goalTopicInput').value = '';
      document.getElementById('goalDurationInput').value = '1.0';

      document.getElementById('addHourlyGoalModal').classList.remove('hidden');
    }

    function closeAddHourlyGoalModal() {
      document.getElementById('addHourlyGoalModal').classList.add('hidden');
    }

    function saveNewHourlyGoal() {
      const subject = document.getElementById('goalSubjectSelect').value;
      const topic = document.getElementById('goalTopicInput').value.trim() || "Focused Revision & Practice";
      const time = document.getElementById('goalTimeInput').value.trim() || "Study Slot";
      const hours = parseFloat(document.getElementById('goalDurationInput').value) || 1.0;

      if (!AppState.dailyStudyGoals) {
        AppState.dailyStudyGoals = { targetHours: 6.0, slots: [] };
      }

      AppState.dailyStudyGoals.slots.push({
        id: "goal_" + Date.now(),
        subject,
        topic,
        time,
        hours,
        completed: false
      });

      saveState();
      closeAddHourlyGoalModal();
      renderDailyStudyGoals();
      showToast("Hourly slot scheduled for today!");
    }

    let quoteBrowseOffset = 0;
    let quoteShownDay = null;
    function rotateDailyMotivation(isUserClick = true) {
      const day = quoteDayNumber(0);
      if (quoteShownDay !== day) { quoteShownDay = day; quoteBrowseOffset = 0; }   // new day => quote of the day
      if (isUserClick) quoteBrowseOffset++;
      const item = getQuoteOfDay(null, quoteBrowseOffset);
      const wrapper = document.getElementById('dailyMotivationContent');
      const quoteEl = document.getElementById('dailyMotivationQuote');
      const authorEl = document.getElementById('dailyMotivationAuthor');
      const tagEl = document.getElementById('dailyMotivationTag');
      const titleEl = document.getElementById('dailyMotivationTitle');
      if (!wrapper || !quoteEl || !authorEl) return;
      const apply = () => {
        quoteEl.textContent = `"${item.q}"`;
        authorEl.textContent = `- ${item.a}`;
        if (tagEl) tagEl.textContent = QUOTE_CATEGORY_LABEL[item.c] || '';
        if (titleEl) titleEl.textContent = quoteBrowseOffset === 0 ? "Today's Motivation" : 'More Motivation';
      };
      if (isUserClick) {
        wrapper.classList.add('opacity-0');
        setTimeout(() => { apply(); wrapper.classList.remove('opacity-0'); }, 150);
      } else {
        apply();
      }
    }

    function renderHomeQuickNotes() {
      if (!AppState.dashboardQuickNotes) {
        AppState.dashboardQuickNotes = [];
      }

      const container = document.getElementById('dashQuickNotesContainer');
      const countBadge = document.getElementById('quickNotesCountBadge');
      if (!container || !countBadge) return;

      countBadge.textContent = `${AppState.dashboardQuickNotes.length} notes`;
      container.innerHTML = '';

      if (AppState.dashboardQuickNotes.length === 0) {
        container.innerHTML = `
          <div class="text-center py-4 text-slate-400 text-xs border border-dashed border-slate-200 dark:border-cma-darkborder rounded-2xl">
            <i class="ph ph-note text-lg block mb-1 text-slate-300 dark:text-slate-600"></i>
            No quick reminders yet. Jot down amendments or key sections above.
          </div>
        `;
        return;
      }

      AppState.dashboardQuickNotes.forEach((note, idx) => {
        const item = document.createElement('div');
        const isDone = !!note.done;
        const isPinned = !!note.pinned;

        item.className = `flex items-start justify-between p-3 rounded-2xl border transition-all text-xs ${
          isDone 
            ? 'bg-slate-50/70 dark:bg-slate-900/20 border-slate-200 dark:border-cma-darkborder/50 opacity-60' 
            : isPinned 
              ? 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/10 border-amber-300/70 dark:border-amber-700/50' 
              : 'bg-cma-50/40 dark:bg-cma-darkcard border-cma-100 dark:border-cma-darkborder'
        }`;

        item.innerHTML = `
          <div class="flex items-start space-x-2.5 flex-1 min-w-0 pr-2">
            <button onclick="toggleHomeQuickNoteDone(${idx})" class="mt-0.5 w-4 h-4 rounded flex items-center justify-center transition ${
              isDone ? 'bg-cma-600 text-white' : 'border border-slate-300 dark:border-slate-600 hover:border-cma-500'
            }">
              <i class="ph-bold ${isDone ? 'ph-check' : 'ph-check opacity-0 hover:opacity-30'} text-[10px]"></i>
            </button>
            <div class="flex-1 min-w-0">
              <p class="${isDone ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-800 dark:text-slate-100'} font-medium break-words leading-snug">${note.text}</p>
              <span class="text-[9px] text-slate-400">${note.date || 'Saved'}</span>
            </div>
          </div>
          <div class="flex items-center space-x-1 flex-shrink-0">
            <button onclick="toggleHomeQuickNotePinned(${idx})" class="text-xs p-1 ${isPinned ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'}" title="${isPinned ? 'Unpin' : 'Pin to top'}">
              <i class="ph-fill ph-push-pin"></i>
            </button>
            <button onclick="deleteHomeQuickNote(${idx})" class="text-xs p-1 text-slate-300 hover:text-rose-500" title="Delete Reminder">
              <i class="ph ph-trash"></i>
            </button>
          </div>
        `;
        container.appendChild(item);
      });
    }

    function addHomeQuickNote() {
      const input = document.getElementById('dashQuickNoteInput');
      const text = input.value.trim();
      if (!text) {
        showToast("Please enter reminder text");
        return;
      }

      if (!AppState.dashboardQuickNotes) {
        AppState.dashboardQuickNotes = [];
      }

      AppState.dashboardQuickNotes.unshift({
        id: "dq_" + Date.now(),
        text: text,
        pinned: false,
        done: false,
        date: "Just now"
      });

      input.value = '';
      saveState();
      renderHomeQuickNotes();
      showToast("Study reminder pinned to Dashboard!");
    }

    function toggleHomeQuickNoteDone(idx) {
      AppState.dashboardQuickNotes[idx].done = !AppState.dashboardQuickNotes[idx].done;
      saveState();
      renderHomeQuickNotes();
    }

    function toggleHomeQuickNotePinned(idx) {
      const note = AppState.dashboardQuickNotes.splice(idx, 1)[0];
      note.pinned = !note.pinned;
      if (note.pinned) {
        AppState.dashboardQuickNotes.unshift(note);
      } else {
        AppState.dashboardQuickNotes.push(note);
      }
      saveState();
      renderHomeQuickNotes();
    }

    function deleteHomeQuickNote(idx) {
      AppState.dashboardQuickNotes.splice(idx, 1);
      saveState();
      renderHomeQuickNotes();
      showToast("Reminder deleted");
    }

    /* ---- week helpers: hours are tracked per calendar week (Mon-Sun) and reset every Monday ---- */
    function mondayISO(d) {
      const x = d ? new Date(d) : new Date();
      const base = new Date(x.getFullYear(), x.getMonth(), x.getDate());
      base.setDate(base.getDate() - ((base.getDay() + 6) % 7));
      return toISODate(base);
    }
    function weekIdx() { return (new Date().getDay() + 6) % 7; }
    function ensureWeek() {
      const m = mondayISO();
      if (!Array.isArray(AppState.weeklyHours) || AppState.weeklyHours.length !== 7) AppState.weeklyHours = [0, 0, 0, 0, 0, 0, 0];
      if (!AppState.weekStart) { AppState.weekStart = m; return false; }
      if (AppState.weekStart === m) return false;
      if (!AppState.weeklyArchive) AppState.weeklyArchive = {};
      if (AppState.weeklyHours.some(v => Number(v) > 0)) AppState.weeklyArchive[AppState.weekStart] = AppState.weeklyHours.map(v => Number(v) || 0);
      AppState.weeklyHours = [0, 0, 0, 0, 0, 0, 0];
      AppState.weekStart = m;
      return true;
    }
    function fmtHrs(v) { return v >= 10 || v % 1 === 0 ? String(Math.round(v * 10) / 10) : v.toFixed(1); }
    function fmtMins(m) {
      m = Math.round(m);
      if (m < 60) return `${m}m`;
      const h = Math.floor(m / 60), r = m % 60;
      return r ? `${h}h ${r}m` : `${h}h`;
    }

    /* ---- tiny dependency-free bar chart (works offline, themes via CSS) ---- */
    function barChartHTML(items, opt) {
      opt = opt || {};
      const h = opt.h || 120, n = items.length;
      const max = Math.max(opt.minMax || 0, ...items.map(i => i.v), 0.0001);
      const every = opt.every || 1;
      const cols = items.map((it, i) => {
        const pct = it.v > 0 ? Math.max(5, it.v / max * 100) : 0;
        const showVal = n <= 7 && it.v > 0;
        const lab = (n <= 7 || i === n - 1 || (i % every === 0 && n - 1 - i >= every)) ? it.l : '';
        return `<div class="orb-bc-col" title="${escapeHtml(it.t || '')}">
          <div class="orb-bc-val">${showVal ? (opt.fmt ? opt.fmt(it.v) : it.v) : ''}</div>
          <div class="orb-bc-track" style="height:${h}px"><div class="orb-bc-bar${it.hl ? ' is-hl' : ''}${it.cur ? ' is-cur' : ''}" style="height:${pct}%"></div></div>
          <div class="orb-bc-lab${it.cur ? ' is-cur' : ''}">${escapeHtml(lab)}</div></div>`;
      }).join('');
      const empty = items.every(i => i.v <= 0) && opt.emptyText ? `<div class="orb-bc-empty">${escapeHtml(opt.emptyText)}</div>` : '';
      return `<div class="orb-bc ${n > 14 ? 'orb-bc-dense' : ''}" style="--h:${h}px">${cols}${empty}</div>`;
    }

    function renderHomeWeeklyChart() {
      const el = document.getElementById('weeklyHomeChart');
      if (!el) return;
      if (ensureWeek()) saveState();
      const wk = (AppState.weeklyHours || []).map(v => Number(v) || 0);
      const total = wk.reduce((a, b) => a + b, 0);
      const wkTotal = document.getElementById('totalWeekHours');
      if (wkTotal) wkTotal.textContent = `${fmtHrs(total)} hrs`;
      const max = Math.max(0, ...wk), today = weekIdx();
      const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      el.innerHTML = barChartHTML(names.map((l, i) => ({ l, v: wk[i], t: `${l}: ${fmtHrs(wk[i])} hrs`, hl: max > 0 && wk[i] === max, cur: i === today })),
        { h: 112, minMax: 1, fmt: fmtHrs, emptyText: 'Complete a study slot or focus session to see your week here' });
    }

    /* Pomodoro - focus time history */
    let pomoRange = 7;
    function setPomoRange(r) { pomoRange = r; renderPomoHistory(); }
    function pomoMinutesFor(iso) {
      const m = (AppState.pomodoroMinutes || {})[iso];
      if (m !== undefined) return Number(m) || 0;
      return ((AppState.pomodoroStats || {})[iso] || 0) * pomoSettings().focus;   // sessions logged before minutes were tracked
    }
    function renderPomoHistory() {
      const box = document.getElementById('pomoHistoryChart');
      if (!box) return;
      const items = [];
      const now = new Date();
      for (let i = pomoRange - 1; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
        const iso = toISODate(d), v = pomoMinutesFor(iso);
        items.push({ l: pomoRange <= 7 ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d.getDay()] : String(d.getDate()), v, t: `${d.toDateString().slice(4, 10)}: ${fmtMins(v)}`, cur: i === 0 });
      }
      const mx = Math.max(...items.map(i => i.v));
      items.forEach(i => { i.hl = mx > 0 && i.v === mx; });
      box.innerHTML = barChartHTML(items, { h: 104, every: pomoRange > 14 ? 5 : 2, fmt: fmtMins, emptyText: 'Finish a focus session to start your history' });
      document.getElementById('pomoRangeTotal').textContent = fmtMins(items.reduce((a, b) => a + b.v, 0)).replace(/^(\d+)m$/, '$1m');
      document.querySelectorAll('#pomoRangeSeg button').forEach(b => b.classList.toggle('on', Number(b.dataset.r) === pomoRange));
      const allDays = new Set([...Object.keys(AppState.pomodoroStats || {}), ...Object.keys(AppState.pomodoroMinutes || {})]);
      let best = 0, sessions = 0;
      allDays.forEach(d => { best = Math.max(best, pomoMinutesFor(d)); });
      Object.values(AppState.pomodoroStats || {}).forEach(v => { sessions += Number(v) || 0; });
      document.getElementById('pomoStatToday').textContent = fmtMins(pomoMinutesFor(todayISO()));
      document.getElementById('pomoStatSessions').textContent = String(sessions);
      document.getElementById('pomoStatBest').textContent = fmtMins(best);
    }

    function skipPomodoro() {
      pomoLoadMode(POMO.mode === 'focus' ? 'break' : 'focus');
      updatePomodoroDisplay();
    }

    function toggleTaskDone(idx) {
      const t = AppState.plannerTasks[idx];
      if (!t) return;
      t.completed = !t.completed;
      if (t.completed) markActivity();
      saveState();
      renderHomeTab();
      renderPlannerTab();
    }

    function triggerRevisionCheck(topic) {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
      showToast(`Revision marked complete for ${topic}! Next interval scheduled.`);
    }

    /* =========================================================================
       4. STUDY & COURSE MANAGEMENT TAB
       ========================================================================= */

    /* =========================================================================
       STUDY HUB (redesigned): hero progress, quick actions, subject carousel,
       subject panel with "Next up", chapter filter + chapter cards
       ========================================================================= */
    let studyChapterFilter = 'all';

    function ringProgress(pct, size, stroke, barColor, trackClass, centerHtml) {
      const r = (size - stroke) / 2;
      const c = 2 * Math.PI * r;
      const off = c * (1 - Math.max(0, Math.min(100, pct)) / 100);
      return `<div class="relative shrink-0" style="width:${size}px;height:${size}px">
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="-rotate-90">
          <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="currentColor" stroke-width="${stroke}" class="${trackClass}"></circle>
          <circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${barColor}" stroke-width="${stroke}" stroke-linecap="round" stroke-dasharray="${c.toFixed(2)}" stroke-dashoffset="${off.toFixed(2)}" style="transition: stroke-dashoffset .6s ease"></circle>
        </svg>
        <div class="absolute inset-0 flex items-center justify-center">${centerHtml}</div></div>`;
    }

    function paperStats(p) {
      let total = 0, done = 0, chDone = 0, revised = 0;
      p.chapters.forEach(c => {
        total += c.totalLectures; done += c.completedLectures;
        if (c.totalLectures > 0 && c.completedLectures >= c.totalLectures) chDone++;
        if (c.revised) revised++;
      });
      return { total, done, left: total - done, chapters: p.chapters.length, chDone, revised, pct: total > 0 ? Math.round(done / total * 100) : 0 };
    }

    function setStudyChapterFilter(f) {
      studyChapterFilter = f;
      renderStudyTab();
    }

    function completeChapter(chId) {
      forEachChapter(c => { if (c.id === chId && c.completedLectures < c.totalLectures) modifyChapter(chId, c.totalLectures - c.completedLectures); });
    }

    function openLibraryForSubject(name) {
      libFilter = Object.assign(defaultLibFilter(), { subject: name, showAll: true });
      openLibrary(true);
    }
    function openNotesForSubject(name) {
      openNotesModal();
      const f = document.getElementById('notesFilterSubject');
      if (f && [...f.options].some(o => o.value === name)) { f.value = name; onNotesSubjectFilterChange(); }
      const s = document.getElementById('noteSubjectInput');
      if (s && [...s.options].some(o => o.value === name)) { s.value = name; refreshNoteChapterList(); }
    }

    function practiceForSubject(name) {
      practiceSel = { subject: name, chapter: '', count: '10' };
      switchTab('practice');
      renderPracticeTab();
    }

    /* Per-subject accents come straight from the app palette: lavender, teal, pink, orange, mustard */
    const STUDY_ACCENTS = [['#7C7BCB', '#FFFFFF'], ['#388074', '#FFFFFF'], ['#E87E95', '#272A2F'], ['#F99F63', '#272A2F'], ['#F0B035', '#272A2F']];
    function studyAccent(i) { return STUDY_ACCENTS[Math.abs(i || 0) % STUDY_ACCENTS.length]; }

    function renderStudyHero(scopedPapers) {
      let total = 0, done = 0, chapters = 0, chDone = 0;
      scopedPapers.forEach(p => { const s = paperStats(p); total += s.total; done += s.done; chapters += s.chapters; chDone += s.chDone; });
      const pct = total > 0 ? Math.round(done / total * 100) : 0;
      const tgt = getLectureTargetSummary();
      const todayList = getWatchedTodayByChapter();
      const stat = (icon, label, value, sub) => `<div class="st-stat"><div class="l"><i class="ph-bold ${icon}"></i><span class="truncate">${label}</span></div><div class="v">${value}</div>${sub ? `<div class="s">${sub}</div>` : ''}</div>`;
      document.getElementById('studyHero').innerHTML = `
        <div class="st-hero">
          <svg class="absolute -right-12 -top-14 w-60 h-60 opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
            <ellipse cx="100" cy="100" rx="92" ry="38" stroke="white" stroke-width="1.5" transform="rotate(-28 100 100)"></ellipse>
            <ellipse cx="100" cy="100" rx="62" ry="24" stroke="white" stroke-width="1.5" transform="rotate(-28 100 100)"></ellipse>
            <circle cx="171" cy="66" r="6" fill="#F0B035"></circle>
          </svg>
          <div class="relative">
            <p class="st-hero-eyebrow">Study Hub</p>
            <h2 class="truncate">${escapeHtml(getScopeDisplayLabel())}</h2>
            <p class="st-hero-sub">${total - done} lecture${total - done === 1 ? '' : 's'} to go</p>
          </div>
          <div class="st-hero-body relative">
            ${ringProgress(pct, 96, 9, '#F0B035', 'text-white/25', `<div class="st-ring-big"><b>${pct}%</b><small>complete</small></div>`)}
            <div class="st-stats">
              ${stat('ph-video', 'Lectures', `${done}<small>/${total}</small>`, '')}
              ${stat('ph-hourglass-medium', 'Pending', total - done, '')}
              ${stat('ph-books', 'Chapters', `${chDone}<small>/${chapters}</small>`, '')}
              ${stat('ph-lightning', 'Today', tgt.any ? `${tgt.watchedToday}<small>/${tgt.perDay}</small>` : `${tgt.watchedToday}`, tgt.any ? 'vs daily target' : 'watched')}
            </div>
          </div>
          ${todayList.length ? `<div class="st-today relative"><b class="h">Watched today:</b> ${todayList.map(x => `${escapeHtml(x.name)} <b>×${x.n}</b>`).join(' • ')}</div>` : ''}
        </div>`;
    }

    function renderStudyQuickActions(paper) {
      const nm = paper ? paper.name.replace(/'/g, "\\'") : '';
      const btn = (icon, label, onclick) => `<button onclick="${onclick}"><i class="ph-bold ${icon}"></i><span>${label}</span></button>`;
      const box = document.getElementById('studyQuickActions');
      box.className = 'st-qa';
      box.innerHTML =
        btn('ph-plus-circle', 'Add Chapter', 'openAddChapterModal()') +
        btn('ph-youtube-logo', 'Library', paper ? `openLibraryForSubject('${nm}')` : 'openLibrary()') +
        btn('ph-function', 'Formulas', paper ? `openFormulaForSubject('${nm}')` : 'openFormulaModal()') +
        btn('ph-notebook', 'Notes Hub', paper ? `openNotesForSubject('${nm}')` : 'openNotesModal()');
    }

    function renderStudyTab() {
      const groups = SYLLABUS[AppState.activeLevel].groups;
      const activeGroupKeys = getActiveGroupKeys();
      const hero = document.getElementById('studyHero');
      const lp = document.getElementById('lecturePlanCard');

      if (activeGroupKeys.length === 0) {
        hero.innerHTML = '';
        document.getElementById('studyQuickActions').innerHTML = '';
        document.getElementById('groupSelectorTabs').innerHTML = '';
        document.getElementById('subjectPillFilter').innerHTML = '';
        document.getElementById('chapterAccordionList').innerHTML = '';
        document.getElementById('chapterFilterBar').innerHTML = '';
        if (lp) { lp.innerHTML = ''; lp.classList.add('hidden'); }
        document.getElementById('selectedSubjectCard').innerHTML = `
          <div class="text-center py-6">
            <div class="orb-empty !border-0 !p-0 !pb-1"><div class="e-ico"><i class="ph ph-seal-check"></i></div></div>
            <h3 class="font-semibold text-slate-900 dark:text-white">You have passed all groups</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Passed groups are hidden. You can reopen any group if you need it again.</p>
            <button onclick="openLevelModal()" class="btn btn-primary btn-sm mt-3">Manage Groups</button>
          </div>`;
        return;
      }

      if (!activeGroupKeys.includes(AppState.activeGroup)) AppState.activeGroup = activeGroupKeys[0];
      renderStudyHero(getScopedPapers());

      /* ---- group switch ---- */
      const gTabs = document.getElementById('groupSelectorTabs');
      gTabs.innerHTML = '';
      if (activeGroupKeys.length === 1) {
        gTabs.className = 'hidden';
      } else {
        gTabs.className = 'st-seg';
        activeGroupKeys.forEach(gKey => {
          let t = 0, d = 0;
          groups[gKey].papers.forEach(p => { const s = paperStats(p); t += s.total; d += s.done; });
          const gp = t > 0 ? Math.round(d / t * 100) : 0;
          const btn = document.createElement('button');
          btn.className = AppState.activeGroup === gKey ? 'on' : '';
          btn.innerHTML = `<span class="truncate">${escapeHtml(groups[gKey].title)}</span><b>${gp}%</b>`;
          btn.onclick = () => {
            AppState.activeGroup = gKey;
            AppState.selectedSubjectId = groups[gKey].papers[0].id;
            saveState();
            renderStudyTab();
          };
          gTabs.appendChild(btn);
        });
      }

      /* ---- subject carousel ---- */
      const currentPapers = groups[AppState.activeGroup] ? groups[AppState.activeGroup].papers : [];
      const carousel = document.getElementById('subjectPillFilter');
      carousel.className = 'st-subjrow no-scrollbar';
      carousel.innerHTML = '';
      currentPapers.forEach((p, pi) => {
        const s = paperStats(p);
        const on = AppState.selectedSubjectId === p.id;
        const ac = studyAccent(pi);
        const btn = document.createElement('button');
        btn.className = `st-subj ${on ? 'on' : ''}`;
        btn.style.cssText = `--ac:${ac[0]};--act:${ac[1]}`;
        btn.innerHTML = `
          <div class="top"><span class="st-code">${escapeHtml(p.code)}</span><span class="pc">${s.pct}%</span></div>
          <div class="nm">${escapeHtml(p.name)}</div>
          <div class="st-bar"><i style="width:${s.pct}%"></i></div>
          <div class="ct">${s.done}/${s.total} lectures</div>`;
        btn.onclick = () => { AppState.selectedSubjectId = p.id; saveState(); renderStudyTab(); };
        carousel.appendChild(btn);
      });

      let selectedPaper = currentPapers.find(p => p.id === AppState.selectedSubjectId);
      if (!selectedPaper && currentPapers.length > 0) {
        selectedPaper = currentPapers[0];
        AppState.selectedSubjectId = selectedPaper.id;
      }
      if (!selectedPaper) return;
      const selAc = studyAccent(currentPapers.indexOf(selectedPaper));
      renderStudyQuickActions(selectedPaper);
      renderLecturePlan(selectedPaper);

      /* ---- subject panel ---- */
      const st = paperStats(selectedPaper);
      const nextCh = selectedPaper.chapters.find(c => c.completedLectures < c.totalLectures);
      const panel = document.getElementById('selectedSubjectCard');
      panel.className = 'orb-card st-panel';
      panel.innerHTML = `
        <div class="st-panel-head">
          <div class="min-w-0">
            <span class="st-code" style="--ac:${selAc[0]};--act:${selAc[1]}">${escapeHtml(selectedPaper.code)}</span>
            <h3>${escapeHtml(selectedPaper.name)}</h3>
            <p class="sub">${st.chapters} chapter${st.chapters === 1 ? '' : 's'} in this subject</p>
          </div>
          ${ringProgress(st.pct, 64, 7, selAc[0], 'st-track', `<span class="text-xs font-bold" style="color:var(--text)">${st.pct}%</span>`)}
        </div>
        <div class="st-tiles">
          <div class="st-tile a"><b>${st.done}</b><span>Watched</span></div>
          <div class="st-tile b"><b>${st.left}</b><span>Left</span></div>
          <div class="st-tile c"><b>${st.revised}/${st.chapters}</b><span>Revised</span></div>
        </div>
        ${nextCh ? `
        <div class="st-next">
          <div class="min-w-0 flex-1">
            <div class="e"><i class="ph-fill ph-lightning"></i>Next up</div>
            <div class="n">${escapeHtml(nextCh.name)}</div>
            <div class="r">${nextCh.totalLectures - nextCh.completedLectures} lecture${nextCh.totalLectures - nextCh.completedLectures === 1 ? '' : 's'} left</div>
          </div>
          <button onclick="incrementLecture('${nextCh.id}')" class="st-go"><i class="ph-bold ph-check"></i><span>Lecture done</span></button>
        </div>` : (st.chapters > 0 ? `<div class="st-alldone">All lectures in this subject are done. Time to revise and practise.</div>` : '')}`;

      /* ---- chapter filter + list ---- */
      const bar = document.getElementById('chapterFilterBar');
      const statusOf = c => c.completedLectures >= c.totalLectures ? 'done' : (c.completedLectures > 0 ? 'progress' : 'pending');
      const counts = { all: selectedPaper.chapters.length, progress: 0, pending: 0, done: 0 };
      selectedPaper.chapters.forEach(c => counts[statusOf(c)]++);
      bar.innerHTML = '';
      bar.className = 'st-chips';
      if (selectedPaper.chapters.length > 0) {
        [['all', 'All'], ['progress', 'In progress'], ['pending', 'Not started'], ['done', 'Completed']].forEach(([k, label]) => {
          const b = document.createElement('button');
          b.className = `st-chip ${studyChapterFilter === k ? 'on' : ''}`;
          b.innerHTML = `${label}<em>${counts[k]}</em>`;
          b.onclick = () => setStudyChapterFilter(k);
          bar.appendChild(b);
        });
      }

      const chContainer = document.getElementById('chapterAccordionList');
      chContainer.innerHTML = '';
      if (selectedPaper.chapters.length === 0) {
        chContainer.innerHTML = `
          <div class="st-empty">
            <div class="ic"><i class="ph-bold ph-books"></i></div>
            <p class="t">Start building ${escapeHtml(selectedPaper.code)}</p>
            <p class="s">Add your chapters and lecture counts to track progress and get a daily lecture target.</p>
            <button onclick="openAddChapterModal()" class="btn btn-primary btn-sm"><i class="ph-bold ph-plus"></i><span>Add first chapter</span></button>
          </div>`;
        return;
      }

      let shown = 0;
      selectedPaper.chapters.forEach((ch, idx) => {
        const status = statusOf(ch);
        if (studyChapterFilter !== 'all' && status !== studyChapterFilter) return;
        shown++;
        const pct = ch.totalLectures > 0 ? Math.round(ch.completedLectures / ch.totalLectures * 100) : 0;
        const isNext = !!(nextCh && nextCh.id === ch.id);
        const resCount = countResourcesFor(selectedPaper.name, ch.name);
        const left = ch.totalLectures - ch.completedLectures;
        const tag = status === 'done' ? '<span class="st-tag done">Completed</span>' : (isNext ? '<span class="st-tag next">Next up</span>' : '');
        const meter = (ch.totalLectures > 0 && ch.totalLectures <= 30)
          ? `<div class="st-dots">${Array.from({ length: ch.totalLectures }, (_, i) => `<i class="${i < ch.completedLectures ? 'on' : ''}"></i>`).join('')}</div>`
          : `<div class="st-bar"><i style="width:${pct}%"></i></div>`;
        const card = document.createElement('div');
        card.className = `st-ch ${isNext ? 'next' : ''} ${status === 'done' ? 'is-done' : ''}`;
        card.style.setProperty('--ac', selAc[0]);
        card.innerHTML = `
          <div class="st-ch-head">
            <div class="st-num ${status === 'done' ? 'done' : (isNext ? 'next' : (status === 'progress' ? 'progress' : ''))}">${status === 'done' ? '<i class="ph-bold ph-check"></i>' : idx + 1}</div>
            <div class="min-w-0 flex-1">
              <div class="st-ch-meta"><span>Chapter ${idx + 1}</span>${tag}${ch.faculty ? `<span class="st-tag fac">${escapeHtml(ch.faculty)}</span>` : ''}</div>
              <h4>${escapeHtml(ch.name)}</h4>
            </div>
            ${ringProgress(pct, 46, 5, status === 'done' ? '#388074' : selAc[0], 'st-track', `<span class="st-ring-t">${pct}%</span>`)}
          </div>
          <div class="st-prog">
            <div class="st-prog-l"><span><i class="ph ph-video"></i>${ch.completedLectures} of ${ch.totalLectures} lectures</span><span>${left} left</span></div>
            ${meter}
          </div>
          <div class="st-act">
            <div class="st-step">
              <button onclick="decrementLecture('${ch.id}')" aria-label="One less"><i class="ph-bold ph-minus"></i></button>
              <span>${ch.completedLectures}<small> / ${ch.totalLectures}</small></span>
              <button class="plus" onclick="incrementLecture('${ch.id}')" aria-label="One more"><i class="ph-bold ph-plus"></i></button>
            </div>
            ${status !== 'done' ? `<button onclick="completeChapter('${ch.id}')" class="st-finish"><i class="ph-bold ph-checks"></i><span>Finish</span></button>` : ''}
          </div>
          <div class="st-foot">
            <button onclick="toggleChapterRevision('${ch.id}')" class="st-pill ${ch.revised ? 'on' : ''}">
              <i class="ph-bold ${ch.revised ? 'ph-check-circle' : 'ph-circle'}"></i><span>${ch.revised ? 'Revised' : 'Mark revised'}</span></button>
            <button onclick="openLibraryForChapter('${selectedPaper.id}', '${ch.id}')" class="st-pill ${resCount ? 'has' : ''}" title="Videos, PDFs & links">
              <i class="ph-bold ph-folder-open"></i><span>${resCount || 'Files'}</span></button>
            <div class="flex-1"></div>
            <button onclick="openEditChapterModal('${selectedPaper.id}', '${ch.id}')" class="st-ico" title="Edit" aria-label="Edit chapter"><i class="ph ph-pencil-simple"></i></button>
            <button onclick="deleteChapterItem('${selectedPaper.id}', '${ch.id}')" class="st-ico danger" title="Delete" aria-label="Delete chapter"><i class="ph ph-trash"></i></button>
          </div>`;
        chContainer.appendChild(card);
      });
      if (shown === 0) {
        chContainer.innerHTML = `<div class="text-center py-8 text-xs" style="color:var(--text-3)">No chapters in this filter yet.</div>`;
      }
    }

    function forEachChapter(cb) {
      Object.keys(SYLLABUS).forEach(lvl => {
        Object.keys(SYLLABUS[lvl].groups).forEach(g => {
          SYLLABUS[lvl].groups[g].papers.forEach(p => {
            p.chapters.forEach(c => cb(c, p, lvl, g));
          });
        });
      });
    }

    function findPaperById(id) {
      let found = null;
      Object.keys(SYLLABUS).forEach(lvl => {
        Object.keys(SYLLABUS[lvl].groups).forEach(g => {
          SYLLABUS[lvl].groups[g].papers.forEach(p => { if (p.id === id) found = { paper: p, level: lvl, group: g }; });
        });
      });
      return found;
    }

    // Records lectures watched on a given chapter today. Un-ticking only removes lectures from the
    // day they were actually watched, so an old lecture never reduces today's count.
    function recordWatch(c, diff) {
      if (!AppState.lectureLog) AppState.lectureLog = {};
      if (!c.watchLog) c.watchLog = {};
      const t = todayISO();
      if (diff > 0) {
        c.watchLog[t] = (c.watchLog[t] || 0) + diff;
        AppState.lectureLog[t] = (AppState.lectureLog[t] || 0) + diff;
      } else if (diff < 0) {
        let left = -diff;
        Object.keys(c.watchLog).sort().reverse().forEach(d => {
          if (left <= 0) return;
          const take = Math.min(left, c.watchLog[d]);
          c.watchLog[d] -= take;
          if (c.watchLog[d] <= 0) delete c.watchLog[d];
          left -= take;
          if (d === t) AppState.lectureLog[t] = Math.max(0, (AppState.lectureLog[t] || 0) - take);
        });
      }
    }

    function syncChapterCompletion(c) {
      if (c.completedLectures >= c.totalLectures) {
        if (!c.completedOn) { c.completedOn = todayISO(); c.revDone = []; }
      } else if (c.completedOn) {
        delete c.completedOn; delete c.revDone;
      }
    }

    /* ---------- Lecture due-date planner ---------- */
    function paperRemaining(p) {
      let r = 0;
      p.chapters.forEach(c => { r += Math.max(0, c.totalLectures - c.completedLectures); });
      return r;
    }

    function getPaperPlan(p) {
      const due = (AppState.lectureDueDates || {})[p.id];
      const rem = paperRemaining(p);
      if (!due) return { due: null, rem };
      const days = daysBetweenISO(todayISO(), due) + 1; // today counts as a study day
      const perDay = rem === 0 ? 0 : (days > 0 ? rem / days : rem);
      return { due, rem, days, perDay, overdue: days <= 0 && rem > 0 };
    }

    function formatPerDay(perDay) {
      if (perDay <= 0) return 'Done';
      if (perDay >= 1) return `${Math.ceil(perDay - 1e-9)} / day`;
      return `1 every ${Math.floor(1 / perDay)} days`;
    }

    function getLectureTargetSummary() {
      // Today's target is fixed from the lectures that were pending at the START of today
      // (pending now + watched today), so it does not shrink while you watch.
      const today = todayISO();
      let perDay = 0, any = false;
      getScopedPapers().forEach(p => {
        const due = (AppState.lectureDueDates || {})[p.id];
        if (!due) return;
        let watched = 0;
        p.chapters.forEach(c => { watched += (c.watchLog && c.watchLog[today]) || 0; });
        const startRem = paperRemaining(p) + watched;
        if (startRem <= 0) return;
        const days = daysBetweenISO(today, due) + 1;
        const t = days > 0 ? startRem / days : startRem;
        any = true;
        perDay += Math.ceil(t - 1e-9);
      });
      return { any, perDay, watchedToday: (AppState.lectureLog || {})[today] || 0 };
    }

    function getWatchedTodayByChapter() {
      const today = todayISO();
      const out = [];
      getScopedPapers().forEach(p => p.chapters.forEach(c => {
        const n = (c.watchLog && c.watchLog[today]) || 0;
        if (n > 0) out.push({ name: c.name, n });
      }));
      return out;
    }

    function setPaperDueDate(paperId, val) {
      if (!AppState.lectureDueDates) AppState.lectureDueDates = {};
      if (!val) delete AppState.lectureDueDates[paperId]; else AppState.lectureDueDates[paperId] = val;
      saveState();
      renderStudyTab();
      renderHomeTab();
      if (val) showToast('Due date saved. Daily lecture target updated!');
    }

    function setAllDueDates(val) {
      if (!val) return;
      getScopedPapers().forEach(p => { AppState.lectureDueDates[p.id] = val; });
      saveState();
      renderStudyTab();
      renderHomeTab();
      showToast('Due date applied to all subjects in scope.');
    }

    function renderLecturePlan(selectedPaper) {
      const card = document.getElementById('lecturePlanCard');
      if (!card) return;
      const papers = getScopedPapers();
      const withChapters = papers.filter(p => p.chapters.length > 0);
      if (withChapters.length === 0) { card.innerHTML = ''; card.classList.add('hidden'); return; }
      card.classList.remove('hidden');
      const sel = selectedPaper || withChapters[0];
      const plan = getPaperPlan(sel);
      const today = todayISO();

      let selLine;
      if (plan.rem === 0) selLine = `<span style="color:var(--ok);font-weight:700">All lectures completed</span>`;
      else if (!plan.due) selLine = `<span style="color:var(--text-2)">Pick a due date to see how many lectures to watch daily.</span>`;
      else if (plan.overdue) selLine = `<span style="color:var(--danger);font-weight:700">Due date passed - ${plan.rem} lectures still pending.</span>`;
      else selLine = `${plan.rem} lectures left ÷ ${plan.days} day${plan.days === 1 ? '' : 's'} = <strong style="color:var(--blue-ink)">${formatPerDay(plan.perDay)}</strong>`;

      const rows = withChapters.filter(p => getPaperPlan(p).due && p.id !== sel.id).map(p => {
        const pl = getPaperPlan(p);
        return `<div class="st-plan-item">
          <span class="truncate" style="color:var(--text-2)">${escapeHtml(p.code)}: ${escapeHtml(p.name)}</span>
          <span class="shrink-0 font-bold" style="color:${pl.overdue ? 'var(--danger)' : 'var(--blue-ink)'}">${pl.rem === 0 ? 'Done' : (pl.overdue ? 'Overdue' : formatPerDay(pl.perDay))}</span>
        </div>`;
      }).join('');

      card.innerHTML = `
        <div class="orb-sec-title mb-3">
          <div class="orb-sec-ico"><i class="ph-bold ph-calendar-check"></i></div>
          <h3 class="text-slate-900 dark:text-slate-100">Lecture Due Date Planner</h3>
        </div>
        <div class="st-plan-row">
          <label>Finish ${escapeHtml(sel.code)} by</label>
          <input type="date" min="${today}" value="${plan.due || ''}" onchange="setPaperDueDate('${sel.id}', this.value)" class="st-date">
          ${plan.due ? `<button onclick="setPaperDueDate('${sel.id}', '')" class="st-x" title="Clear date" aria-label="Clear date"><i class="ph ph-x"></i></button>` : ''}
        </div>
        <p class="st-plan-line">${selLine}</p>
        ${rows ? `<div class="mt-2">${rows}</div>` : ''}
        <div class="st-plan-row st-plan-all">
          <label>Same date for all subjects</label>
          <input type="date" min="${today}" onchange="setAllDueDates(this.value)" class="st-date" style="height:36px">
        </div>`;
    }

    function incrementLecture(chId) { modifyChapter(chId, 1); }
    function decrementLecture(chId) { modifyChapter(chId, -1); }

    function modifyChapter(chId, delta) {
      let changed = 0;
      forEachChapter(c => {
        if (c.id === chId) {
          const before = c.completedLectures;
          c.completedLectures = Math.max(0, Math.min(c.totalLectures, c.completedLectures + delta));
          changed = c.completedLectures - before;
          if (changed !== 0) { recordWatch(c, changed); syncChapterCompletion(c); }
        }
      });
      if (changed > 0) markActivity();
      saveState();
      renderStudyTab();
      renderHomeTab();
      renderPlannerTab();
    }

    function toggleChapterRevision(chId) {
      forEachChapter(c => {
        if (c.id === chId) {
          c.revised = !c.revised;
          if (c.revised) {
            confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
            showToast(`Marked "${c.name}" as Revised!`);
          }
        }
      });
      saveState();
      renderStudyTab();
    }

    function openAddChapterModal() {
      const currentPapers = getScopedPapers();
      if (currentPapers.length === 0) {
        showToast("All groups here are completed. Reopen a group from the level selector first.");
        return;
      }
      document.getElementById('editingChapterId').value = "";
      document.getElementById('chapterModalTitle').textContent = "Add New Chapter / Topic";
      document.getElementById('saveChapterModalBtn').textContent = "Add Chapter";
      document.getElementById('chapterSubjectSelectGroup').classList.remove('hidden');

      const select = document.getElementById('lectureSubjectSelect');
      select.innerHTML = '';
      currentPapers.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.id;
        opt.textContent = `${p.code} - ${p.name}`;
        if (p.id === AppState.selectedSubjectId) opt.selected = true;
        select.appendChild(opt);
      });

      document.getElementById('lectureChapterInput').value = '';
      document.getElementById('lectureTotalInput').value = '10';
      document.getElementById('lectureCompletedInput').value = '0';
      document.getElementById('lectureFacultyInput').value = '';
      document.getElementById('lectureRevisionSelect').value = 'false';
      document.getElementById('addLectureModal').classList.remove('hidden');
    }

    function openEditChapterModal(paperId, chId) {
      const hit = findPaperById(paperId);
      const targetChapter = hit ? hit.paper.chapters.find(c => c.id === chId) : null;
      if (!targetChapter) { showToast("Chapter not found"); return; }

      document.getElementById('editingChapterId').value = `${paperId}:::${chId}`;
      document.getElementById('chapterModalTitle').textContent = `Edit Chapter Details`;
      document.getElementById('saveChapterModalBtn').textContent = "Save Changes";
      document.getElementById('chapterSubjectSelectGroup').classList.add('hidden');
      document.getElementById('lectureChapterInput').value = targetChapter.name;
      document.getElementById('lectureTotalInput').value = targetChapter.totalLectures;
      document.getElementById('lectureCompletedInput').value = targetChapter.completedLectures;
      document.getElementById('lectureFacultyInput').value = targetChapter.faculty || '';
      document.getElementById('lectureRevisionSelect').value = targetChapter.revised ? 'true' : 'false';
      document.getElementById('addLectureModal').classList.remove('hidden');
    }

    function closeChapterModal() {
      document.getElementById('addLectureModal').classList.add('hidden');
    }

    function saveChapterOrLecture() {
      const editKey = document.getElementById('editingChapterId').value;
      const title = document.getElementById('lectureChapterInput').value.trim();
      const total = Math.max(1, parseInt(document.getElementById('lectureTotalInput').value) || 1);
      const completed = Math.max(0, parseInt(document.getElementById('lectureCompletedInput').value) || 0);
      const faculty = document.getElementById('lectureFacultyInput').value.trim();
      const revised = document.getElementById('lectureRevisionSelect').value === 'true';

      if (!title) { showToast("Please enter chapter / topic title"); return; }
      if (completed > total) { showToast("Completed lectures cannot exceed total lectures"); return; }

      if (editKey) {
        const [paperId, chId] = editKey.split(':::');
        const hit = findPaperById(paperId);
        const ch = hit ? hit.paper.chapters.find(c => c.id === chId) : null;
        if (!ch) { showToast("Chapter not found"); return; }
        const before = ch.completedLectures;
        ch.name = title;
        ch.totalLectures = total;
        ch.completedLectures = Math.min(total, completed);
        ch.faculty = faculty;
        ch.revised = revised;
        syncChapterCompletion(ch);
        saveState();
        closeChapterModal();
        showToast(`Updated "${title}" successfully!`);
      } else {
        const paperId = document.getElementById('lectureSubjectSelect').value || AppState.selectedSubjectId;
        const hit = findPaperById(paperId);
        if (!hit) { showToast("Please choose a subject"); return; }
        const ch = {
          id: "ch_custom_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          name: title,
          totalLectures: total,
          completedLectures: Math.min(total, completed),
          faculty: faculty,
          revised: revised
        };
        syncChapterCompletion(ch);
        hit.paper.chapters.push(ch);
        AppState.selectedSubjectId = paperId;
        saveState();
        closeChapterModal();
        confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
        showToast(`Added new chapter "${title}"!`);
      }
      renderStudyTab();
      renderHomeTab();
      renderPlannerTab();
    }

    function deleteChapterItem(paperId, chId) {
      const hit = findPaperById(paperId);
      const ch = hit ? hit.paper.chapters.find(c => c.id === chId) : null;
      if (!ch) return;
      askConfirm('Remove chapter?', `"${ch.name}" and its lecture progress will be deleted.`, 'Remove', () => {
        hit.paper.chapters = hit.paper.chapters.filter(c => c.id !== chId);
        saveState();
        showToast("Chapter removed.");
        renderStudyTab();
        renderHomeTab();
        renderPlannerTab();
      });
    }

    /* =========================================================================
       5. PRACTICE ZONE & EXAMINATION SIMULATOR
       ========================================================================= */
    let currentExamQuestions = [];
    let currentExamIndex = 0;
    let userAnswers = {};
    let markedForReview = new Set();
    let examTimerInterval = null;








    function renderExamPalette() {
      const palette = document.getElementById('examPalettePills');
      palette.innerHTML = '';
      currentExamQuestions.forEach((_, idx) => {
        const isCurrent = idx === currentExamIndex;
        const isAnswered = userAnswers[idx] !== undefined;
        const isReview = markedForReview.has(idx);

        let bgClass = "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400";
        if (isAnswered) bgClass = "bg-cma-600 text-white";
        if (isReview) bgClass = "bg-amber-500 text-white";
        if (isCurrent) bgClass += " ring-2 ring-[#272A2F] dark:ring-[#F0B035] ring-offset-2 ring-offset-white dark:ring-offset-[#272A2F]";

        const pill = document.createElement('button');
        pill.className = `w-9 h-9 rounded-xl text-xs font-semibold flex-shrink-0 flex items-center justify-center tabular-nums ${bgClass}`;
        pill.setAttribute('aria-label', `Question ${idx + 1}`);
        pill.textContent = idx + 1;
        pill.onclick = () => {
          currentExamIndex = idx;
          renderCurrentQuestion();
          renderExamPalette();
        };
        palette.appendChild(pill);
      });
      const answeredN = Object.keys(userAnswers).length, totalN = currentExamQuestions.length;
      const pb = document.getElementById('examProgressBar');
      if (pb) pb.style.width = totalN ? `${Math.round(answeredN / totalN * 100)}%` : '0%';
      const pt = document.getElementById('examProgressText');
      if (pt) pt.textContent = `${answeredN} of ${totalN} answered`;
    }

    function prevExamQuestion() {
      if (currentExamIndex > 0) {
        currentExamIndex--;
        renderCurrentQuestion();
        renderExamPalette();
      }
    }

    function nextExamQuestion() {
      if (currentExamIndex < currentExamQuestions.length - 1) {
        currentExamIndex++;
        renderCurrentQuestion();
        renderExamPalette();
      } else {
        submitExamWithReview();
      }
    }

    function toggleMarkForReview() {
      if (markedForReview.has(currentExamIndex)) {
        markedForReview.delete(currentExamIndex);
      } else {
        markedForReview.add(currentExamIndex);
      }
      renderCurrentQuestion();
      renderExamPalette();
    }


    function closeReportCard() {
      document.getElementById('examReportModal').classList.add('hidden');
    }

    function openMistakeBookModal() {
      renderMistakeBook();
      document.getElementById('mistakeBookModal').classList.remove('hidden');
    }

    function closeMistakeBookModal() {
      document.getElementById('mistakeBookModal').classList.add('hidden');
    }

    function renderMistakeBook() {
      const container = document.getElementById('mistakeListContainer');
      container.innerHTML = '';
      if (AppState.mistakeBook.length === 0) {
        container.innerHTML = `
          <div class="text-center py-8 text-slate-400">
            <i class="ph-bold ph-shield-check text-4xl text-emerald-500 mb-2"></i>
            <p class="text-xs font-bold text-slate-700 dark:text-slate-200">Mistake Book is Clean!</p>
            <p class="text-[11px]">All previous test errors have been resolved.</p>
          </div>
        `;
        return;
      }

      AppState.mistakeBook.forEach((m, idx) => {
        const item = document.createElement('div');
        item.className = "p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-cma-darkborder space-y-1.5 text-xs";
        item.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-bold text-rose-600 dark:text-rose-400 uppercase">${m.subject}</span>
            <button onclick="removeMistake(${idx})" class="text-slate-400 hover:text-emerald-500 text-sm" title="Mark Resolved"><i class="ph-bold ph-check"></i></button>
          </div>
          <p class="font-bold text-slate-800 dark:text-slate-100">${m.question}</p>
          <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300 text-[11px]">
            <strong>Your Past Choice:</strong> ${m.yourAnswer}
          </div>
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 text-[11px]">
            <strong>ICMAI Model Answer:</strong> ${m.correctAnswer}
          </div>
        `;
        container.appendChild(item);
      });
    }

    function removeMistake(idx) {
      AppState.mistakeBook.splice(idx, 1);
      saveState();
      renderMistakeBook();
      renderPracticeTab();
      showToast("Resolved mistake removed from review queue!");
    }

    /* =========================================================================
       PRACTICE ZONE (chapter-wise MCQs - 2 marks each, no negative marking)
       ========================================================================= */
    const MARKS_PER_MCQ = 2;
    let practiceSel = { subject: '', chapter: '', count: '10' };

    function normKey(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }

    function shuffleArray(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const k = Math.floor(Math.random() * (i + 1));
        [a[i], a[k]] = [a[k], a[i]];
      }
      return a;
    }

    function allPapersList() {
      const out = [];
      Object.keys(SYLLABUS).forEach(lvl => Object.keys(SYLLABUS[lvl].groups).forEach(g => {
        SYLLABUS[lvl].groups[g].papers.forEach(p => out.push({ paper: p, level: lvl, group: g }));
      }));
      return out;
    }

    function matchPaperName(name) {
      const n = normKey(name);
      if (!n) return null;
      const list = allPapersList();
      let hit = list.find(x => normKey(x.paper.name) === n);
      if (!hit) hit = list.find(x => { const pn = normKey(x.paper.name); return pn.includes(n) || n.includes(pn); });
      if (!hit) {
        const m = String(name).match(/paper\s*(\d{1,2})/i);
        if (m) hit = list.find(x => x.paper.code.toLowerCase() === ('paper ' + m[1]));
      }
      return hit || null;
    }

    function isMcqInScope(q) {
      const scoped = getScopedPapers().map(p => normKey(p.name));
      const s = normKey(q.subject);
      if (!s) return true;
      return scoped.some(n => n === s || n.includes(s) || s.includes(n));
    }

    function getAllPlayableQuestions(subjectFilter = null, chapterFilter = null) {
      let pool = (AppState.customQuestions || []).filter(q => q.correctIndex >= 0 && isMcqInScope(q));
      if (subjectFilter) pool = pool.filter(q => normKey(q.subject) === normKey(subjectFilter));
      if (chapterFilter) pool = pool.filter(q => (q.chapter || 'General') === chapterFilter);
      return pool;
    }

    function getPracticeSubjects() {
      const map = {};
      getAllPlayableQuestions().forEach(q => { map[q.subject] = (map[q.subject] || 0) + 1; });
      return Object.keys(map).sort().map(s => ({ name: s, count: map[s] }));
    }

    function getPracticeChapters(subject) {
      const map = {};
      getAllPlayableQuestions(subject || null).forEach(q => {
        const c = q.chapter || 'General';
        map[c] = (map[c] || 0) + 1;
      });
      return Object.keys(map).sort().map(c => ({ name: c, count: map[c] }));
    }

    function fillPracticeSelectors() {
      const subSel = document.getElementById('practiceSubjectSelect');
      const chSel = document.getElementById('practiceChapterSelect');
      if (!subSel || !chSel) return;
      const subjects = getPracticeSubjects();
      subSel.innerHTML = `<option value="">All Subjects</option>`;
      subjects.forEach(s => {
        const o = document.createElement('option');
        o.value = s.name; o.textContent = `${s.name} (${s.count})`;
        subSel.appendChild(o);
      });
      if (!subjects.some(s => s.name === practiceSel.subject)) practiceSel.subject = '';
      subSel.value = practiceSel.subject;

      const chapters = getPracticeChapters(practiceSel.subject);
      chSel.innerHTML = `<option value="">All Chapters</option>`;
      chapters.forEach(c => {
        const o = document.createElement('option');
        o.value = c.name; o.textContent = `${c.name} (${c.count})`;
        chSel.appendChild(o);
      });
      if (!chapters.some(c => c.name === practiceSel.chapter)) practiceSel.chapter = '';
      chSel.value = practiceSel.chapter;
      document.getElementById('practiceCountSelect').value = practiceSel.count;
      updatePracticeAvailability();
    }

    function updatePracticeAvailability() {
      const pool = getAllPlayableQuestions(practiceSel.subject || null, practiceSel.chapter || null);
      const el = document.getElementById('practiceAvailText');
      const btn = document.getElementById('practiceStartBtn');
      if (!el) return;
      if ((AppState.customQuestions || []).length === 0) {
        el.textContent = 'No MCQs yet - import a PDF / JSON / text file below to begin.';
        btn.disabled = true;
      } else if (pool.length === 0) {
        el.textContent = 'No MCQs available for this selection.';
        btn.disabled = true;
      } else {
        const n = practiceSel.count === 'all' ? pool.length : Math.min(parseInt(practiceSel.count), pool.length);
        el.textContent = `${pool.length} MCQs available • this test: ${n} questions = ${n * MARKS_PER_MCQ} marks`;
        btn.disabled = false;
      }
    }

    function onPracticeSubjectChange() {
      practiceSel.subject = document.getElementById('practiceSubjectSelect').value;
      practiceSel.chapter = '';
      fillPracticeSelectors();
    }
    function onPracticeChapterChange() {
      practiceSel.chapter = document.getElementById('practiceChapterSelect').value;
      updatePracticeAvailability();
    }
    function onPracticeCountChange() {
      practiceSel.count = document.getElementById('practiceCountSelect').value;
      updatePracticeAvailability();
    }

    function renderPracticeTab() {
      const all = getAllPlayableQuestions();
      document.getElementById('totalPracticedCount').textContent = all.length;
      const accEl = document.getElementById('practiceAccuracyRate');
      if (accEl) {
        const accs = (AppState.testHistory || []).map(t => parseInt(t.accuracy)).filter(n => !isNaN(n));
        accEl.textContent = accs.length ? Math.round(accs.reduce((a, b) => a + b, 0) / accs.length) + '%' : '0%';
      }
      document.getElementById('mistakeBookCount').textContent = AppState.mistakeBook.length;
      const mcCard = document.getElementById('practiceMistakeCardCount');
      if (mcCard) mcCard.textContent = AppState.mistakeBook.length;
      fillPracticeSelectors();

      const histContainer = document.getElementById('testHistoryList');
      histContainer.innerHTML = '';
      if (AppState.testHistory.length === 0) {
        histContainer.innerHTML = `<p class="text-slate-400 py-2">No tests completed yet. Start your first practice test above!</p>`;
      } else {
        AppState.testHistory.slice(0, 15).forEach(item => {
          const row = document.createElement('div');
          row.className = "flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-cma-darkborder";
          row.innerHTML = `
            <div class="min-w-0 pr-2">
              <span class="font-bold text-slate-800 dark:text-slate-200 block truncate">${escapeHtml(item.title)}</span>
              <span class="block text-[10px] text-slate-400">${escapeHtml(item.date)}</span>
            </div>
            <div class="text-right shrink-0">
              <span class="font-extrabold text-cma-600 dark:text-cma-400">${escapeHtml(item.score)}</span>
              <span class="block text-[10px] text-emerald-500 font-bold">${escapeHtml(item.accuracy)}</span>
            </div>`;
          histContainer.appendChild(row);
        });
      }
    }

    function startPracticeWith(pool, title, perQuestionMinutes) {
      if (!pool || pool.length === 0) { showToast('No MCQs available. Import some questions first.'); return; }
      const minutes = Math.max(5, Math.ceil(pool.length * perQuestionMinutes));
      launchExamModal(title, minutes, pool);
    }

    function startChapterPractice() {
      const pool = shuffleArray(getAllPlayableQuestions(practiceSel.subject || null, practiceSel.chapter || null));
      const n = practiceSel.count === 'all' ? pool.length : Math.min(parseInt(practiceSel.count), pool.length);
      const label = practiceSel.chapter || practiceSel.subject || 'All Subjects';
      startPracticeWith(pool.slice(0, n), `Practice: ${label} (${n} Q)`, 1.2);
    }

    function startChapterDrill() { startChapterPractice(); }

    function startSpeedTest() {
      const pool = shuffleArray(getAllPlayableQuestions()).slice(0, 20);
      startPracticeWith(pool, `Speed Test (${pool.length} Q)`, 1.25);
    }

    function launchFullMockExam() {
      const pool = shuffleArray(getAllPlayableQuestions()).slice(0, 50);
      startPracticeWith(pool, `Full Mock (${pool.length} Q = ${pool.length * MARKS_PER_MCQ} Marks)`, 3.6);
    }

    function practiceMistakesOnly() { openMistakeBookModal(); }

    let examEndTs = 0;
    function tickExam() {
      const rem = Math.ceil((examEndTs - Date.now()) / 1000);
      const display = document.getElementById('examTimerDisplay');
      const r = Math.max(0, rem);
      display.textContent = `${pad2(Math.floor(r / 3600))}:${pad2(Math.floor((r % 3600) / 60))}:${pad2(r % 60)}`;
      if (display.parentElement) display.parentElement.classList.toggle('text-rose-600', r <= 60);
      if (rem <= 0) {
        if (examTimerInterval) clearInterval(examTimerInterval);
        examTimerInterval = null;
        showToast("Time's up! Submitting your paper.");
        finishExam();
      }
    }

    function launchExamModal(title, minutes, questions) {
      currentExamQuestions = questions;
      document.getElementById('mockExamTitle').textContent = title;
      currentExamIndex = 0;
      userAnswers = {};
      markedForReview.clear();
      document.getElementById('mockExamModal').classList.remove('hidden');
      if (examTimerInterval) clearInterval(examTimerInterval);
      examEndTs = Date.now() + minutes * 60000;
      tickExam();
      examTimerInterval = setInterval(tickExam, 1000);
      renderCurrentQuestion();
      renderExamPalette();
    }

    function exitExam() {
      askConfirm('Exit this test?', 'Your answers so far will not be saved.', 'Exit Test', () => {
        if (examTimerInterval) clearInterval(examTimerInterval);
        examTimerInterval = null;
        document.getElementById('mockExamModal').classList.add('hidden');
      });
    }

    function renderCurrentQuestion() {
      const q = currentExamQuestions[currentExamIndex];
      if (!q) return;
      document.getElementById('currentQIndexLabel').textContent = `Question ${currentExamIndex + 1} of ${currentExamQuestions.length} • ${MARKS_PER_MCQ} marks`;
      document.getElementById('currentQSubject').innerHTML = `<span class="truncate">${escapeHtml(q.chapter ? `${q.subject} • ${q.chapter}` : q.subject)}</span>`;
      document.getElementById('currentQuestionText').textContent = q.question;

      const optContainer = document.getElementById('examOptionsContainer');
      optContainer.innerHTML = '';
      q.options.forEach((optText, oIdx) => {
        const isSelected = userAnswers[currentExamIndex] === oIdx;
        const btn = document.createElement('button');
        btn.className = `w-full text-left p-3 rounded-xl border text-[13.5px] leading-snug flex items-center gap-3 transition ${
          isSelected
            ? 'border-cma-600 bg-cma-50 dark:bg-cma-600/15 text-slate-900 dark:text-white font-medium orb-anim-correct'
            : 'border-slate-200 dark:border-cma-darkborder active:bg-slate-50 dark:active:bg-slate-800 text-slate-700 dark:text-slate-200'
        }`;
        btn.innerHTML = `
          <div class="w-6 h-6 shrink-0 rounded-md border flex items-center justify-center text-xs font-semibold ${isSelected ? 'border-cma-600 bg-cma-600 text-white' : 'border-slate-300 text-slate-500'}">${String.fromCharCode(65 + oIdx)}</div>
          <span class="flex-1">${escapeHtml(optText)}</span>`;
        btn.onclick = () => {
          userAnswers[currentExamIndex] = (userAnswers[currentExamIndex] === oIdx) ? undefined : oIdx;
          if (userAnswers[currentExamIndex] === undefined) delete userAnswers[currentExamIndex];
          renderCurrentQuestion();
          renderExamPalette();
        };
        optContainer.appendChild(btn);
      });

      const isMarked = markedForReview.has(currentExamIndex);
      document.getElementById('markReviewText').textContent = isMarked ? "Marked for Review ★" : "Mark for Review";
      document.getElementById('prevQBtn').disabled = currentExamIndex === 0;
      document.getElementById('nextQBtn').textContent = currentExamIndex === currentExamQuestions.length - 1 ? "Finish Test" : "Next Question";
    }

    function submitExamWithReview() {
      const unanswered = currentExamQuestions.length - Object.keys(userAnswers).length;
      if (unanswered > 0) {
        askConfirm('Submit paper?', `${unanswered} question${unanswered === 1 ? ' is' : 's are'} unanswered. There is no negative marking, so attempt every question if you can.`, 'Submit Now', finishExam);
      } else {
        finishExam();
      }
    }

    function finishExam() {
      if (examTimerInterval) clearInterval(examTimerInterval);
      examTimerInterval = null;
      document.getElementById('mockExamModal').classList.add('hidden');
      const total = currentExamQuestions.length;
      if (total === 0) return;

      let correct = 0, wrong = 0;
      currentExamQuestions.forEach((q, idx) => {
        const ans = userAnswers[idx];
        if (ans === q.correctIndex) {
          correct++;
        } else if (ans !== undefined) {
          wrong++;
          AppState.mistakeBook.unshift({
            id: "err_" + Date.now() + "_" + idx,
            question: q.question,
            yourAnswer: q.options[ans],
            correctAnswer: q.options[q.correctIndex],
            subject: q.subject,
            chapter: q.chapter || '',
            explanation: q.explanation || '', source: 'Test', created: Date.now(), type: 'Other', status: 'New', priority: 'Medium'
          });
        }
      });
      if (AppState.mistakeBook.length > 300) AppState.mistakeBook = AppState.mistakeBook.slice(0, 300);

      const skipped = total - correct - wrong;
      const marks = correct * MARKS_PER_MCQ;           // no negative marking
      const maxMarks = total * MARKS_PER_MCQ;
      const accuracy = Math.round((correct / total) * 100);

      AppState.testHistory.unshift({
        title: document.getElementById('mockExamTitle').textContent,
        score: `${marks}/${maxMarks}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        accuracy: `${accuracy}%`
      });
      if (AppState.testHistory.length > 100) AppState.testHistory = AppState.testHistory.slice(0, 100);
      markActivity();
      saveState();

      document.getElementById('reportSubText').textContent = document.getElementById('mockExamTitle').textContent;
      document.getElementById('reportScore').textContent = `${marks}/${maxMarks}`;
      document.getElementById('reportAccuracy').textContent = `${accuracy}%`;
      document.getElementById('reportMistakes').textContent = wrong;
      document.getElementById('reportFeedback').textContent =
        `Correct ${correct} • Wrong ${wrong} • Skipped ${skipped}. ${MARKS_PER_MCQ} marks per MCQ, no negative marking. ` +
        (accuracy >= 60 ? 'Great work - you are in the exemption zone (60%+).' : (wrong > 0 ? 'Wrong answers were added to your Mistake Book for revision.' : 'Attempt more questions to raise your score.'));

      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      document.getElementById('examReportModal').classList.remove('hidden');
      renderPracticeTab();
      renderHomeTab();
    }

    /* ---------------- MCQ BANK (all imported MCQs by subject & chapter) ---------------- */
    function openMcqBank() {
      document.getElementById('mcqBankSearch').value = '';
      renderMcqBank();
      document.getElementById('mcqBankModal').classList.remove('hidden');
    }
    function closeMcqBank() {
      document.getElementById('mcqBankModal').classList.add('hidden');
    }

    function renderMcqBank() {
      const container = document.getElementById('mcqBankList');
      const q = document.getElementById('mcqBankSearch').value.trim().toLowerCase();
      const all = (AppState.customQuestions || []).filter(isMcqInScope);
      const list = q ? all.filter(m => (m.question || '').toLowerCase().includes(q) || (m.chapter || '').toLowerCase().includes(q) || (m.subject || '').toLowerCase().includes(q)) : all;
      document.getElementById('mcqBankCount').textContent = `${list.length} MCQ${list.length === 1 ? '' : 's'} • ${list.length * MARKS_PER_MCQ} marks`;
      container.innerHTML = '';
      if (list.length === 0) {
        container.innerHTML = `<div class="text-center py-10 text-slate-400 text-xs"><i class="ph-bold ph-books text-4xl block mb-1"></i>${all.length === 0 ? 'No MCQs imported yet.' : 'No MCQs match your search.'}</div>`;
        return;
      }
      const bySubject = {};
      list.forEach(m => {
        const s = m.subject || 'General';
        const c = m.chapter || 'General';
        ((bySubject[s] = bySubject[s] || {})[c] = bySubject[s][c] || []).push(m);
      });
      Object.keys(bySubject).sort().forEach(subject => {
        const chapters = bySubject[subject];
        const total = Object.values(chapters).reduce((a, b) => a + b.length, 0);
        const sec = document.createElement('div');
        sec.className = 'rounded-2xl border border-slate-200 dark:border-cma-darkborder overflow-hidden';
        sec.innerHTML = `<div class="px-3 py-2 bg-cma-50 dark:bg-cma-900/30 flex items-center justify-between">
            <span class="font-extrabold text-xs text-cma-800 dark:text-cma-200 truncate pr-2">${escapeHtml(subject)}</span>
            <span class="text-[10px] font-bold text-cma-700 dark:text-cma-300 shrink-0">${total} MCQs</span></div>`;
        Object.keys(chapters).sort().forEach(ch => {
          const items = chapters[ch];
          const det = document.createElement('details');
          det.className = 'border-t border-slate-100 dark:border-cma-darkborder';
          if (q) det.open = true;
          det.dataset.subject = subject; det.dataset.chapter = ch;
          det.innerHTML = `<summary class="px-3 py-2.5 cursor-pointer flex items-center justify-between text-xs">
              <span class="font-semibold text-slate-700 dark:text-slate-200 pr-2">${escapeHtml(ch)}</span>
              <span class="text-[10px] text-slate-400 shrink-0">${items.length}</span></summary>
            <div class="px-3 pb-2 space-y-1.5">
              <div class="flex items-center space-x-2 pb-1">
                <button class="mcq-practice-btn px-2.5 py-1 rounded-lg bg-cma-600 text-white font-bold text-[10px]">Practice</button>
                <button class="mcq-rename-btn px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px]">Rename chapter</button>
                <button class="mcq-delchap-btn px-2.5 py-1 rounded-lg text-rose-600 font-bold text-[10px]">Delete all</button>
              </div>
              <div class="mcq-rows space-y-1.5"></div></div>`;
          det.querySelector('.mcq-practice-btn').onclick = () => {
            practiceSel = { subject, chapter: ch, count: 'all' };
            closeMcqBank(); switchTab('practice');
          };
          det.querySelector('.mcq-rename-btn').onclick = () => openMcqRename(subject, ch);
          det.querySelector('.mcq-delchap-btn').onclick = () => askConfirm('Delete all MCQs in this chapter?', `${items.length} MCQs from "${ch}" will be deleted.`, 'Delete', () => {
            AppState.customQuestions = AppState.customQuestions.filter(m => !((m.subject || 'General') === subject && (m.chapter || 'General') === ch));
            saveState(); renderMcqBank(); renderPracticeTab(); showToast('Chapter MCQs deleted.');
          });
          const fill = () => {
            const rows = det.querySelector('.mcq-rows');
            if (rows.dataset.filled) return;
            rows.dataset.filled = '1';
            items.forEach((m, i) => {
              const r = document.createElement('div');
              r.className = 'flex items-start justify-between gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px]';
              r.innerHTML = `<div class="min-w-0"><span class="text-slate-400 font-mono mr-1">${i + 1}.</span><span class="text-slate-700 dark:text-slate-200">${escapeHtml(m.question)}</span>
                <div class="text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Ans: ${String.fromCharCode(65 + m.correctIndex)}) ${escapeHtml(m.options[m.correctIndex] || '')}</div></div>
                <div class="flex shrink-0"><button class="p-1 text-slate-400 hover:text-cma-600" title="Edit"><i class="ph ph-pencil-simple"></i></button><button class="p-1 text-slate-400 hover:text-rose-500" title="Delete"><i class="ph ph-trash"></i></button></div>`;
              const [bEdit, bDel] = r.querySelectorAll('button');
              bEdit.onclick = () => openMcqEdit(m.id);
              bDel.onclick = () => askConfirm('Delete this MCQ?', m.question.slice(0, 120), 'Delete', () => {
                AppState.customQuestions = AppState.customQuestions.filter(x => x.id !== m.id);
                saveState(); renderMcqBank(); renderPracticeTab();
              });
              rows.appendChild(r);
            });
          };
          det.addEventListener('toggle', () => { if (det.open) fill(); });
          if (det.open) fill();
          sec.appendChild(det);
        });
        container.appendChild(sec);
      });
    }

    let mcqRenameCtx = null;
    function openMcqRename(subject, chapter) {
      mcqRenameCtx = { subject, chapter };
      document.getElementById('mcqRenameInput').value = chapter;
      document.getElementById('mcqRenameModal').classList.remove('hidden');
    }
    function closeMcqRename() { document.getElementById('mcqRenameModal').classList.add('hidden'); }
    function saveMcqRename() {
      const val = document.getElementById('mcqRenameInput').value.trim();
      if (!val || !mcqRenameCtx) { showToast('Enter a chapter name'); return; }
      AppState.customQuestions.forEach(m => {
        if ((m.subject || 'General') === mcqRenameCtx.subject && (m.chapter || 'General') === mcqRenameCtx.chapter) m.chapter = val;
      });
      saveState(); closeMcqRename(); renderMcqBank(); renderPracticeTab(); showToast('Chapter renamed.');
    }

    function openMcqEdit(id) {
      const m = (AppState.customQuestions || []).find(x => x.id === id);
      if (!m) return;
      document.getElementById('mcqEditId').value = id;
      document.getElementById('mcqEditSubject').value = m.subject || '';
      document.getElementById('mcqEditChapter').value = m.chapter || '';
      document.getElementById('mcqEditQuestion').value = m.question || '';
      for (let i = 0; i < 4; i++) document.getElementById('mcqEditOpt' + i).value = m.options[i] || '';
      document.getElementById('mcqEditCorrect').value = String(m.correctIndex);
      document.getElementById('mcqEditExplanation').value = m.explanation || '';
      document.getElementById('mcqEditModal').classList.remove('hidden');
    }
    function closeMcqEdit() { document.getElementById('mcqEditModal').classList.add('hidden'); }
    function saveMcqEdit() {
      const id = document.getElementById('mcqEditId').value;
      const m = (AppState.customQuestions || []).find(x => x.id === id);
      if (!m) return;
      const question = document.getElementById('mcqEditQuestion').value.trim();
      const options = [0, 1, 2, 3].map(i => document.getElementById('mcqEditOpt' + i).value.trim());
      if (!question || options.some(o => !o)) { showToast('Question and all 4 options are required'); return; }
      m.question = question;
      m.options = options;
      m.subject = document.getElementById('mcqEditSubject').value.trim() || m.subject;
      m.chapter = document.getElementById('mcqEditChapter').value.trim() || 'General';
      m.correctIndex = parseInt(document.getElementById('mcqEditCorrect').value);
      m.explanation = document.getElementById('mcqEditExplanation').value.trim();
      saveState(); closeMcqEdit(); renderMcqBank(); renderPracticeTab(); showToast('MCQ updated.');
    }

    /* ---------------- MCQ IMPORT (PDF / JSON / TXT / pasted text) ---------------- */
    function refreshMcqChapterList() {
      const val = document.getElementById('mcqSubjectSelect').value || '';
      const subject = val.split('|')[1] || '';
      const dl = document.getElementById('mcqChapterList');
      dl.innerHTML = '';
      getChaptersForSubject(subject).forEach(c => { const o = document.createElement('option'); o.value = c; dl.appendChild(o); });
    }

    function openPdfMcqImportModal() {
      const sel = document.getElementById('mcqSubjectSelect');
      sel.innerHTML = '';
      const scoped = new Set(getScopedPapers().map(p => p.id));
      allPapersList().forEach(x => {
        const opt = document.createElement('option');
        opt.value = `${x.level}|${x.paper.name}`;
        opt.textContent = `${x.level === 'INTER' ? 'Inter' : 'Final'} • ${x.paper.code}: ${x.paper.name}`;
        if (scoped.has(x.paper.id) && !sel.value) opt.selected = true;
        sel.appendChild(opt);
      });
      const firstScoped = getScopedPapers()[0];
      if (firstScoped) sel.value = `${AppState.activeLevel}|${firstScoped.name}`;
      refreshMcqChapterList();
      document.getElementById('mcqChapterInput').value = '';
      parsedMcqList = [];
      renderParsedMcqPreview();
      toggleMcqImportMode('upload');
      document.getElementById('mcqUploadStatusText').textContent = 'Select a PDF, JSON or TXT file';
      document.getElementById('mcqPdfFileInput').value = '';
      document.getElementById('pdfMcqModal').classList.remove('hidden');
    }

    function mcqImportContext() {
      const val = document.getElementById('mcqSubjectSelect').value || '';
      const [level, subject] = val.split('|');
      const sourceType = document.getElementById('mcqSourceTypeSelect').value || 'MCQ Bank';
      const term = document.getElementById('mcqTermTagInput').value.trim();
      return {
        subject: subject || 'General',
        level: level || AppState.activeLevel,
        chapter: document.getElementById('mcqChapterInput').value.trim(),
        source: term ? `${sourceType} ${term}` : sourceType
      };
    }

    async function pdfToPlainText(file) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        let line = '', lastY = null;
        content.items.forEach(item => {
          const y = item.transform ? Math.round(item.transform[5]) : 0;
          if (lastY !== null && Math.abs(y - lastY) > 2) { fullText += line.trim() + '\n'; line = ''; }
          line += item.str + (item.hasEOL ? '\n' : ' ');
          lastY = y;
        });
        fullText += line.trim() + '\n';
      }
      return fullText;
    }

    async function handleMcqPdfUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const status = document.getElementById('mcqUploadStatusText');
      const name = file.name.toLowerCase();
      status.textContent = `Reading ${file.name}...`;
      try {
        if (name.endsWith('.json')) {
          importMcqJson(JSON.parse(await file.text()));
          status.textContent = `Loaded ${file.name}`;
        } else if (name.endsWith('.pdf')) {
          if (!(await ensurePdfJs())) { showToast('PDF engine could not load (needs internet). Try again or use a .txt / .json file.'); status.textContent = 'PDF engine not ready'; return; }
          const text = await pdfToPlainText(file);
          if (!text.trim()) { status.textContent = 'Scanned PDF detected - use text paste mode'; toggleMcqImportMode('paste'); return; }
          status.textContent = `Extracted text from ${file.name}`;
          extractMcqsFromRawText(text);
        } else {
          status.textContent = `Loaded ${file.name}`;
          extractMcqsFromRawText(await file.text());
        }
      } catch (err) {
        console.error('MCQ import error:', err);
        status.textContent = 'Could not read this file';
        showToast('Could not read the file. Check the format or use paste mode.');
      }
      event.target.value = '';
    }

    function parseRawMcqText() {
      const text = document.getElementById('mcqRawTextInput').value;
      if (!text.trim()) { showToast('Please paste some question text first'); return; }
      extractMcqsFromRawText(text);
    }

    function parseMcqText(rawText, ctx) {
      let text = String(rawText || '').replace(/\r/g, '').replace(/\u00a0/g, ' ');
      // rescue flat (single-line) text by putting markers on their own lines
      text = text
        .replace(/[ \t]+(?=Q(?:uestion)?\s*\.?\s*\d{1,4}\s*[.:)]\s)/g, '\n')
        .replace(/[ \t]+(?=\([A-D]\)\s)/g, '\n')
        .replace(/[ \t]+(?=(?:Correct\s+)?Ans(?:wer)?\s*[:\-]\s*\(?[A-Da-d1-4]\b)/gi, '\n')
        .replace(/[ \t]+(?=(?:Explanation|Rationale)\s*:)/gi, '\n');
      const lines = text.split('\n');
      const items = [];
      let subject = ctx.subject, level = ctx.level, chapter = ctx.chapter, source = ctx.source;
      let cur = null;

      const flush = () => {
        if (!cur) return;
        const q = cur.q.join(' ').replace(/\s+/g, ' ').trim();
        const opts = cur.opts.map(o => o.join(' ').replace(/\s+/g, ' ').trim());
        if (q.length >= 5 && opts.length >= 2 && opts.every(o => o)) {
          while (opts.length < 4) opts.push('-');
          items.push({
            id: 'mcq_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7),
            sl: cur.sl, subject, level, chapter: cur.chapter || 'General', source,
            question: q, options: opts.slice(0, 4),
            correctIndex: cur.ans, explanation: cur.expl.join(' ').replace(/\s+/g, ' ').trim()
          });
        }
        cur = null;
      };
      const letterIdx = ch => 'ABCD'.indexOf(ch.toUpperCase());

      lines.forEach(raw => {
        const t = raw.trim();
        if (!t) return;
        let m;
        if ((m = t.match(/^(?:Subject|Paper)\s*:\s*(.+)$/i))) {
          flush();
          const hit = matchPaperName(m[1]);
          if (hit) { subject = hit.paper.name; level = hit.level; }
          return;
        }
        if ((m = t.match(/^(?:Chapter|Topic|Unit)\s*:\s*(.+)$/i))) { flush(); chapter = m[1].trim(); return; }
        if ((m = t.match(/^Source\s*:\s*(.+)$/i)) && !cur) { source = m[1].trim(); return; }
        if (/^Level\s*:/i.test(t) && !cur) return;

        // new question?
        const qm = t.match(/^Q(?:uestion)?\s*\.?\s*(\d{1,4})\s*[.:)\-]\s*(.*)$/i);
        const bare = t.match(/^(\d{1,4})\s*[.)]\s+(\S.*)$/);
        if (qm || (bare && (!cur || cur.ansSeen || cur.opts.length >= 4))) {
          flush();
          const mm = qm || bare;
          cur = { sl: parseInt(mm[1]), q: [mm[2] || ''], opts: [], ans: -1, expl: [], inExpl: false, ansSeen: false, chapter };
          return;
        }
        if (!cur) return;

        // answer line
        if ((m = t.match(/^(?:Correct\s+)?(?:Ans(?:wer)?|Key)\s*[:\-.]?\s*\(?\s*([A-Da-d1-4])\s*\)?(?:\s*[.\-:]?\s*(.*))?$/i))) {
          const v = m[1];
          cur.ans = /\d/.test(v) ? parseInt(v) - 1 : letterIdx(v);
          cur.ansSeen = true;
          if (m[2] && /^(?:Explanation|Rationale)/i.test(m[2])) cur.expl.push(m[2].replace(/^(?:Explanation|Rationale)\s*[:\-]?\s*/i, ''));
          return;
        }
        if ((m = t.match(/^(?:Explanation|Rationale|Solution|Reason)\s*[:\-]\s*(.*)$/i))) {
          cur.inExpl = true; cur.expl.push(m[1]); return;
        }
        if (cur.inExpl) { cur.expl.push(t); return; }

        // option line (must be the next expected letter)
        const want = 'ABCD'[cur.opts.length];
        if (want) {
          const om = t.match(/^\(?\s*([A-Da-d])\s*[.)]\s*(.*)$/);
          if (om && om[1].toUpperCase() === want) {
            let rest = om[2];
            let idx = cur.opts.length;
            cur.opts.push([]);
            // inline options on the same line: (A) x (B) y (C) z (D) w
            for (;;) {
              const next = 'ABCD'[idx + 1];
              const nm = next ? rest.match(new RegExp('\\(\\s*' + next + '\\s*\\)\\s*', 'i')) : null;
              if (!nm) { cur.opts[idx].push(rest); break; }
              cur.opts[idx].push(rest.slice(0, nm.index));
              rest = rest.slice(nm.index + nm[0].length);
              idx++; cur.opts.push([]);
            }
            return;
          }
        }
        // continuation line
        if (cur.opts.length === 0) cur.q.push(t);
        else cur.opts[cur.opts.length - 1].push(t);
      });
      flush();
      return items;
    }

    function extractMcqsFromRawText(rawText) {
      const ctx = mcqImportContext();
      const items = parseMcqText(rawText, ctx);
      if (items.length === 0) {
        showToast("No MCQs found. Use the format: Q1. question / (A) .. (D) / Answer: B  - or tap '+ Add Single Question'.");
        return;
      }
      parsedMcqList = [...parsedMcqList, ...items];
      renderParsedMcqPreview();
      const noAns = items.filter(i => i.correctIndex < 0).length;
      showToast(`Found ${items.length} MCQs${noAns ? ` (${noAns} need an answer)` : ''}.`);
    }

    function importMcqJson(obj) {
      const ctx = mcqImportContext();
      const arr = Array.isArray(obj) ? obj : (obj.questions || []);
      let subject = ctx.subject, level = ctx.level;
      if (!Array.isArray(obj) && obj.subject) {
        const hit = matchPaperName(obj.subject);
        if (hit) { subject = hit.paper.name; level = hit.level; }
      }
      const items = [];
      arr.forEach(r => {
        const options = (r.options || []).map(o => String(o).trim());
        let ci = r.correctIndex;
        if (ci === undefined && r.answer !== undefined) ci = /^\d$/.test(String(r.answer)) ? parseInt(r.answer) - 1 : 'ABCD'.indexOf(String(r.answer).trim().toUpperCase().replace(/[()]/g, ''));
        if (!r.question || options.length < 2) return;
        let subj = subject, lv = level;
        if (r.subject) { const hit = matchPaperName(r.subject); if (hit) { subj = hit.paper.name; lv = hit.level; } }
        while (options.length < 4) options.push('-');
        items.push({
          id: 'mcq_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7),
          sl: r.sl, subject: subj, level: lv, chapter: (r.chapter || ctx.chapter || 'General'), source: r.source || (!Array.isArray(obj) && obj.source) || ctx.source,
          question: String(r.question).trim(), options: options.slice(0, 4),
          correctIndex: (typeof ci === 'number' && ci >= 0 && ci < 4) ? ci : -1,
          explanation: r.explanation || ''
        });
      });
      if (items.length === 0) { showToast('No questions found in this JSON file.'); return; }
      parsedMcqList = [...parsedMcqList, ...items];
      renderParsedMcqPreview();
      showToast(`Loaded ${items.length} MCQs from JSON.`);
    }

    function renderParsedMcqPreview() {
      const container = document.getElementById('parsedMcqPreviewContainer');
      const countLabel = document.getElementById('parsedMcqCountLabel');
      const saveBtn = document.getElementById('saveMcqToBankBtn');
      const ready = parsedMcqList.filter(q => q.correctIndex >= 0).length;
      const noAns = parsedMcqList.length - ready;
      countLabel.textContent = `Extracted Questions (${parsedMcqList.length})${noAns ? ` • ${noAns} need answer` : ''}`;
      saveBtn.disabled = ready === 0;
      saveBtn.innerHTML = `<i class="ph-bold ph-plus-circle"></i><span>Save ${ready} Question${ready === 1 ? '' : 's'} to Bank</span>`;
      container.innerHTML = '';
      if (parsedMcqList.length === 0) {
        container.innerHTML = `
          <div class="text-center py-8 text-slate-400 text-xs space-y-1">
            <i class="ph-bold ph-books text-4xl text-cma-400 block mb-1"></i>
            <p>Upload a PDF / JSON / TXT file or paste text above.</p>
            <p class="text-[10px]">Format: <span class="font-mono">Chapter: Name</span> then <span class="font-mono">Q1. ...</span> <span class="font-mono">(A) ... (D)</span> <span class="font-mono">Answer: B</span></p>
          </div>`;
        return;
      }
      const byChap = {};
      parsedMcqList.forEach(q => { const k = `${q.subject} › ${q.chapter || 'General'}`; byChap[k] = (byChap[k] || 0) + 1; });
      const sum = document.createElement('div');
      sum.className = 'p-3 rounded-2xl bg-cma-50 dark:bg-cma-900/20 border border-cma-200 dark:border-cma-800 text-[11px] space-y-0.5';
      sum.innerHTML = `<div class="font-bold text-cma-800 dark:text-cma-200 mb-1">Will be saved under (2 marks each, no negative marking):</div>` +
        Object.keys(byChap).map(k => `<div class="flex justify-between"><span class="truncate pr-2">${escapeHtml(k)}</span><b>${byChap[k]}</b></div>`).join('');
      container.appendChild(sum);

      const LIMIT = 40;
      parsedMcqList.slice(0, LIMIT).forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = `p-4 rounded-3xl bg-white dark:bg-cma-darkcard border ${q.correctIndex < 0 ? 'border-rose-400' : 'border-slate-200 dark:border-cma-darkborder'} shadow-sm space-y-3 text-xs`;
        let optionsHtml = '';
        q.options.forEach((optText, oIdx) => {
          const isCorrect = q.correctIndex === oIdx;
          optionsHtml += `
            <div class="flex items-center space-x-2">
              <input type="radio" name="correct_opt_${idx}" ${isCorrect ? 'checked' : ''} onchange="updateMcqCorrectIndex(${idx}, ${oIdx})" class="w-3.5 h-3.5 text-cma-600 focus:ring-cma-500">
              <span class="w-5 font-bold ${isCorrect ? 'text-emerald-600' : 'text-slate-400'}">${String.fromCharCode(65 + oIdx)}:</span>
              <input type="text" value="${escapeHtml(optText)}" onchange="updateMcqOptionText(${idx}, ${oIdx}, this.value)" class="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800 p-1.5 rounded-lg border border-slate-200 dark:border-cma-darkborder text-xs">
            </div>`;
        });
        card.innerHTML = `
          <div class="flex items-center justify-between">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-cma-100 text-cma-700 dark:bg-cma-900/60 dark:text-cma-300 truncate max-w-[70%]">${escapeHtml(q.chapter || 'General')}</span>
            <button onclick="removeParsedMcq(${idx})" class="text-slate-400 hover:text-rose-500 text-sm" title="Remove"><i class="ph ph-trash"></i></button>
          </div>
          <textarea rows="2" onchange="updateMcqQuestionPrompt(${idx}, this.value)" class="w-full bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-cma-darkborder font-semibold text-xs">${escapeHtml(q.question)}</textarea>
          <div class="space-y-1.5">
            <label class="block text-[10px] font-bold ${q.correctIndex < 0 ? 'text-rose-500' : 'text-slate-400'}">${q.correctIndex < 0 ? 'No answer found - select the correct option:' : 'Select radio for the correct answer:'}</label>
            ${optionsHtml}
          </div>`;
        container.appendChild(card);
      });
      if (parsedMcqList.length > LIMIT) {
        const more = document.createElement('div');
        more.className = 'text-center text-[11px] text-slate-400 py-2';
        more.textContent = `+ ${parsedMcqList.length - LIMIT} more questions will also be saved. You can review or edit all of them later in "My MCQ Bank".`;
        container.appendChild(more);
      }
    }

    function addManualMcqPreviewItem() {
      const ctx = mcqImportContext();
      parsedMcqList.unshift({
        id: 'mcq_manual_' + Date.now(), subject: ctx.subject, level: ctx.level, chapter: ctx.chapter || 'General', source: ctx.source,
        question: 'Enter the question here...', options: ['Option A', 'Option B', 'Option C', 'Option D'], correctIndex: 0, explanation: ''
      });
      renderParsedMcqPreview();
    }

    function commitMcqsToQuestionBank() {
      if (!AppState.customQuestions) AppState.customQuestions = [];
      const dupKey = q => normKey(q.subject + '|' + q.question + '|' + (q.options[q.correctIndex] || ''));
      const existing = new Set(AppState.customQuestions.map(dupKey));
      let added = 0, dup = 0, skipped = 0;
      const toAdd = [];
      parsedMcqList.forEach(q => {
        if (q.correctIndex < 0) { skipped++; return; }
        const key = dupKey(q);
        if (existing.has(key)) { dup++; return; }
        existing.add(key);
        toAdd.push(q); added++;
      });
      AppState.customQuestions = [...toAdd, ...AppState.customQuestions];
      saveState();
      closePdfMcqImportModal();
      renderPracticeTab();
      if (added) confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
      showToast(`Added ${added} MCQs${dup ? `, ${dup} duplicates skipped` : ''}${skipped ? `, ${skipped} without answer skipped` : ''}.`);
      parsedMcqList = [];
    }

    /* =========================================================================
       6. STUDY PLANNER & TIMETABLE
       ========================================================================= */
    let plannerSelectedDate = null;

    function renderPlannerTab() {
      const now = new Date();
      const today = todayISO();
      if (!plannerSelectedDate) plannerSelectedDate = today;
      const todayIdx = (now.getDay() + 6) % 7; // Monday = 0
      const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - todayIdx);
      const dayLetters = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
      const pillsContainer = document.getElementById('weeklyDayPills');
      pillsContainer.innerHTML = '';
      dayLetters.forEach((d, idx) => {
        const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + idx);
        const iso = toISODate(date);
        const isToday = iso === today;
        const isSel = iso === plannerSelectedDate;
        const hasTasks = AppState.plannerTasks.some(t => t.date === iso);
        const b = document.createElement('button');
        b.className = `p-2 rounded-xl text-xs font-bold flex flex-col items-center justify-center transition relative ${
          isSel ? 'bg-cma-600 text-white shadow-md shadow-cma-600/30'
                : (isToday ? 'bg-cma-100 dark:bg-cma-900/50 text-cma-700 dark:text-cma-300 ring-1 ring-cma-400'
                           : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300')}`;
        b.innerHTML = `<span>${d}</span><span class="text-[9px] opacity-80 mt-0.5">${date.getDate()}</span>${hasTasks ? `<span class="absolute bottom-0.5 w-1 h-1 rounded-full ${isSel ? 'bg-white' : 'bg-cmaorange'}"></span>` : ''}`;
        b.onclick = () => { plannerSelectedDate = iso; renderPlannerTab(); };
        pillsContainer.appendChild(b);
      });

      const sel = parseISODate(plannerSelectedDate);
      const dateLabel = document.getElementById('currentCalendarDate');
      if (dateLabel) {
        dateLabel.textContent = (plannerSelectedDate === today ? 'Today, ' : '') +
          sel.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      }

      const tasksContainer = document.getElementById('plannerTasksContainer');
      tasksContainer.innerHTML = '';
      const list = [];
      AppState.plannerTasks.forEach((t, i) => { if (t.date === plannerSelectedDate) list.push({ t, i }); });
      list.sort((a, b) => String(a.t.start || '99:99').localeCompare(String(b.t.start || '99:99')));
      if (list.length === 0) {
        tasksContainer.innerHTML = `
          <div class="text-center py-6 text-slate-400 bg-white dark:bg-cma-darkcard rounded-3xl border border-dashed border-slate-200 dark:border-cma-darkborder">
            <i class="ph ph-calendar-plus text-3xl block mb-1"></i>
            <p class="text-xs font-bold text-slate-600 dark:text-slate-300">No study blocks for this day</p>
            <p class="text-[11px]">Tap "Add Block" to plan your study time.</p>
          </div>`;
      }
      list.forEach(({ t: task, i: idx }) => {
        const div = document.createElement('div');
        div.className = "flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-cma-darkcard border border-slate-200 dark:border-cma-darkborder shadow-sm";
        div.innerHTML = `
          <div class="flex items-center space-x-3 min-w-0">
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTaskDone(${idx})" class="w-5 h-5 rounded text-cma-600 focus:ring-cma-500 border-slate-300 shrink-0">
            <div class="min-w-0">
              <div class="text-xs truncate ${task.completed ? 'line-through text-slate-400' : 'font-bold text-slate-800 dark:text-slate-100'}">${escapeHtml(task.title)}</div>
              <div class="text-[10px] text-slate-400 font-mono">${escapeHtml(task.time)}${task.subject ? ' • ' + escapeHtml(task.subject) : ''}</div>
            </div>
          </div>
          <div class="flex items-center space-x-1 shrink-0">
            <button onclick="openEditTaskModal(${idx})" class="p-1.5 text-slate-400 hover:text-cma-600 text-sm" title="Edit"><i class="ph ph-pencil-simple"></i></button>
            <button onclick="deleteTask(${idx})" class="p-1.5 text-slate-400 hover:text-rose-500 text-sm" title="Delete"><i class="ph ph-trash"></i></button>
          </div>`;
        tasksContainer.appendChild(div);
      });

      const roadmap = document.getElementById('plannerRevisionRoadmap');
      const rev = getRevisionItems().slice(0, 8);
      if (rev.length === 0) {
        roadmap.innerHTML = `<div class="text-center py-4 text-slate-400 text-xs">Your 1-7-15-30 day revision schedule appears here once you complete a chapter.</div>`;
      } else {
        roadmap.innerHTML = rev.map(r => `
          <div class="flex items-center justify-between gap-2 p-2.5 rounded-2xl" style="background:var(--surface-2)">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="st-tag shrink-0" style="background:var(--blue-tint);color:var(--blue-ink);font-size:10.5px">${r.interval}D</span>
              <span class="text-xs font-semibold truncate" style="color:var(--text)">${escapeHtml(r.chName)}</span>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[10.5px] font-bold whitespace-nowrap" style="color:${r.diff < 0 ? 'var(--danger)' : (r.diff === 0 ? 'var(--warn-ink)' : 'var(--text-3)')}">${revisionStatusText(r.diff)}</span>
              ${r.diff <= 0 ? `<button onclick="markRevisionDone('${r.chId}', ${r.interval})" class="st-pill !h-8 !px-3" style="background:var(--teal);color:#fff;box-shadow:none">Done</button>` : ''}
            </div>
          </div>`).join('');
      }
    }

    function fillBlockSubjectOptions(selected) {
      const sel = document.getElementById('blockSubjectSelect');
      sel.innerHTML = '<option value="">No subject (general)</option>';
      getScopedPapers().forEach(p => {
        const o = document.createElement('option');
        o.value = p.name; o.textContent = `${p.code}: ${p.name}`;
        if (selected && selected === p.name) o.selected = true;
        sel.appendChild(o);
      });
    }

    function openAddTaskModal() {
      document.getElementById('editingBlockIdx').value = '';
      document.getElementById('blockModalTitle').textContent = 'Add Study Block';
      document.getElementById('saveBlockBtn').textContent = 'Add Block';
      document.getElementById('blockTitleInput').value = '';
      document.getElementById('blockDateInput').value = plannerSelectedDate || todayISO();
      const h = new Date().getHours();
      document.getElementById('blockStartInput').value = `${pad2((h + 1) % 24)}:00`;
      document.getElementById('blockEndInput').value = `${pad2((h + 2) % 24)}:00`;
      fillBlockSubjectOptions('');
      document.getElementById('addBlockModal').classList.remove('hidden');
      setTimeout(() => document.getElementById('blockTitleInput').focus(), 150);
    }

    function openEditTaskModal(idx) {
      const t = AppState.plannerTasks[idx];
      if (!t) return;
      document.getElementById('editingBlockIdx').value = String(idx);
      document.getElementById('blockModalTitle').textContent = 'Edit Study Block';
      document.getElementById('saveBlockBtn').textContent = 'Save Changes';
      document.getElementById('blockTitleInput').value = t.title;
      document.getElementById('blockDateInput').value = t.date || todayISO();
      document.getElementById('blockStartInput').value = t.start || '';
      document.getElementById('blockEndInput').value = t.end || '';
      fillBlockSubjectOptions(t.subject || '');
      document.getElementById('addBlockModal').classList.remove('hidden');
    }

    function closeTaskModal() {
      document.getElementById('addBlockModal').classList.add('hidden');
    }

    function saveTaskBlock() {
      const title = document.getElementById('blockTitleInput').value.trim();
      const date = document.getElementById('blockDateInput').value || todayISO();
      const start = document.getElementById('blockStartInput').value;
      const end = document.getElementById('blockEndInput').value;
      const subject = document.getElementById('blockSubjectSelect').value;
      if (!title) { showToast('Please enter a block title'); return; }
      if (start && end && end <= start) { showToast('End time must be after start time'); return; }
      const time = start && end ? `${start} - ${end}` : (start || 'Flexible');
      const editIdx = document.getElementById('editingBlockIdx').value;
      if (editIdx !== '' && AppState.plannerTasks[Number(editIdx)]) {
        Object.assign(AppState.plannerTasks[Number(editIdx)], { title, date, start, end, time, subject });
        showToast('Study block updated!');
      } else {
        AppState.plannerTasks.push({ id: 't_' + Date.now(), title, date, start, end, time, subject, completed: false });
        showToast('New timetable block added!');
      }
      plannerSelectedDate = date;
      saveState();
      closeTaskModal();
      renderPlannerTab();
      renderHomeTab();
    }

    function deleteTask(idx) {
      const t = AppState.plannerTasks[idx];
      if (!t) return;
      askConfirm('Remove study block?', `"${t.title}" will be deleted from your timetable.`, 'Remove', () => {
        AppState.plannerTasks.splice(idx, 1);
        saveState();
        renderPlannerTab();
        renderHomeTab();
        showToast('Block removed.');
      });
    }

    /* Pomodoro Timer - default 50 min focus + 10 min break */
    const POMO = { mode: 'focus', running: false, endTs: 0, remaining: 0, total: 0, timer: null };

    function pomoSettings() {
      if (!AppState.pomodoro) AppState.pomodoro = { focus: 50, brk: 10 };
      return AppState.pomodoro;
    }

    function pomoLoadMode(mode) {
      if (POMO.timer) clearInterval(POMO.timer);
      POMO.timer = null;
      POMO.running = false;
      POMO.mode = mode;
      const s = pomoSettings();
      POMO.total = (mode === 'focus' ? s.focus : s.brk) * 60;
      POMO.remaining = POMO.total;
    }

    function pomoBeep() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        [0, 0.25, 0.5].forEach(off => {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.frequency.value = 880; o.connect(g); g.connect(ctx.destination);
          g.gain.setValueAtTime(0.15, ctx.currentTime + off);
          g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + off + 0.2);
          o.start(ctx.currentTime + off); o.stop(ctx.currentTime + off + 0.22);
        });
      } catch (e) {}
      try { if (navigator.vibrate) navigator.vibrate([300, 150, 300]); } catch (e) {}
    }

    function openPomodoroModal() {
      if (!POMO.total) pomoLoadMode('focus');
      document.getElementById('pomodoroModal').classList.remove('hidden');
      updatePomodoroDisplay();
      renderPomoHistory();
    }

    function closePomodoroModal() {
      document.getElementById('pomodoroModal').classList.add('hidden');
    }

    function updatePomodoroDisplay() {
      const s = pomoSettings();
      const mins = Math.floor(POMO.remaining / 60);
      const secs = POMO.remaining % 60;
      document.getElementById('pomoTimerDisplay').textContent = `${pad2(mins)}:${pad2(secs)}`;
      const progress = POMO.total > 0 ? POMO.remaining / POMO.total : 0;
      const circle = document.getElementById('pomoProgressCircle');
      circle.style.strokeDashoffset = 276.5 * (1 - progress);
      circle.setAttribute('class', `${POMO.mode === 'focus' ? 'text-cma-600 dark:text-cyan-400' : 'text-emerald-500'} transition-all duration-500`);
      document.getElementById('pomoModeLabel').textContent = POMO.mode === 'focus' ? 'Deep Focus' : 'Break Time';
      document.getElementById('pomoSubStatus').textContent = POMO.mode === 'focus' ? `${s.focus} min focus` : `${s.brk} min break`;
      document.getElementById('pomoPlayIcon').className = POMO.running ? 'ph-fill ph-pause' : 'ph-fill ph-play';
      const stats = (AppState.pomodoroStats || {})[todayISO()] || 0;
      document.getElementById('pomoSessionsText').textContent = `${stats} focus session${stats === 1 ? '' : 's'} completed today`;
      document.getElementById('pomoFocusInput').value = s.focus;
      document.getElementById('pomoBreakInput').value = s.brk;
      [['pomoPreset5010', 50, 10], ['pomoPreset255', 25, 5], ['pomoPreset9015', 90, 15]].forEach(([id, f, b]) => {
        const el = document.getElementById(id);
        if (el) el.className = `orb-preset !w-full ${s.focus === f && s.brk === b ? 'orb-preset-on' : ''}`;
      });
      ['pomoModeFocusBtn', 'pomoModeBreakBtn'].forEach(id => {
        const el = document.getElementById(id);
        const active = (id === 'pomoModeFocusBtn') === (POMO.mode === 'focus');
        if (el) el.className = `flex-1 !h-8 ${active ? 'on' : ''}`;
      });
    }

    function pomoTick() {
      if (!POMO.running) return;
      const rem = Math.ceil((POMO.endTs - Date.now()) / 1000);
      if (rem <= 0) { pomoFinish(); return; }
      POMO.remaining = rem;
      updatePomodoroDisplay();
    }

    function pomoStartTimer() {
      POMO.endTs = Date.now() + POMO.remaining * 1000;
      POMO.running = true;
      if (POMO.timer) clearInterval(POMO.timer);
      POMO.timer = setInterval(pomoTick, 500);
    }

    function pomoFinish() {
      if (POMO.timer) clearInterval(POMO.timer);
      POMO.timer = null;
      POMO.running = false;
      pomoBeep();
      if (POMO.mode === 'focus') {
        const s = pomoSettings();
        const t = todayISO();
        if (!AppState.pomodoroStats) AppState.pomodoroStats = {};
        AppState.pomodoroStats[t] = (AppState.pomodoroStats[t] || 0) + 1;
        if (!AppState.pomodoroMinutes) AppState.pomodoroMinutes = {};
        AppState.pomodoroMinutes[t] = (AppState.pomodoroMinutes[t] || 0) + s.focus;
        ensureWeek();
        const idx = weekIdx();
        AppState.weeklyHours[idx] = Math.round(((AppState.weeklyHours[idx] || 0) + s.focus / 60) * 100) / 100;
        markActivity();
        saveState();
        confetti({ particleCount: 70, spread: 80 });
        showToast(`Focus session complete! ${s.brk}-minute break started.`);
        pomoLoadMode('break');
        pomoStartTimer();
        renderHomeTab();
        renderPomoHistory();
      } else {
        showToast('Break over - ready for the next focus session!');
        pomoLoadMode('focus');
      }
      updatePomodoroDisplay();
    }

    function togglePomodoro() {
      if (POMO.running) {
        POMO.remaining = Math.max(1, Math.ceil((POMO.endTs - Date.now()) / 1000));
        if (POMO.timer) clearInterval(POMO.timer);
        POMO.timer = null;
        POMO.running = false;
      } else {
        pomoStartTimer();
      }
      updatePomodoroDisplay();
    }

    function resetPomodoro() {
      pomoLoadMode(POMO.mode);
      updatePomodoroDisplay();
    }

    function setPomodoroMode(mode) {
      pomoLoadMode(mode);
      updatePomodoroDisplay();
    }

    function setPomodoroPreset(focus, brk) {
      AppState.pomodoro = { focus, brk };
      saveState();
      pomoLoadMode('focus');
      updatePomodoroDisplay();
    }

    function applyCustomPomodoro() {
      const f = Math.min(180, Math.max(1, parseInt(document.getElementById('pomoFocusInput').value) || 50));
      const b = Math.min(60, Math.max(1, parseInt(document.getElementById('pomoBreakInput').value) || 10));
      setPomodoroPreset(f, b);
      showToast(`Pomodoro set to ${f} min focus / ${b} min break`);
    }

    /* Formula Vault */
    /* =========================================================================
       FORMULA VAULT (redesigned) - add, paste, edit, delete, star, revise
       ========================================================================= */
    let fvFilter = { subject: '', chapter: '', chip: 'all', sort: 'new', q: '', showAll: false };
    let fvParsed = [];
    let fvLastField = 'fvFormula';
    let fvRevise = { list: [], i: 0, revealed: false, known: 0, again: 0, done: false, rev: false };
    let fvEditFmt = 'auto';          // add/edit form: auto | math (typeset) | text (plain)
    const fvCalcMem = {};            // calculator inputs kept while the app is open
    const fvCalcOpen = new Set();    // cards whose calculator is open

    /* ---- typeset maths (engine lives in js/fvmath.js) ---- */
    function fvIsMath(f) { return f.fmt === 'math' ? true : (f.fmt === 'text' ? false : fvMathAuto(f.formula || '')); }
    function fvEqBlock(f, big) {
      return fvIsMath(f)
        ? `<div class="fv-eq-box ${big ? 'fv-eq-lg' : ''}">${fvMathRender(f.formula)}</div>`
        : `<div class="font-mono ${big ? 'text-[14px]' : 'text-[12px]'} leading-relaxed p-2.5 rounded-xl bg-cma-50 dark:bg-cma-900/30 text-cma-900 dark:text-cma-100 whitespace-pre-wrap break-words">${escapeHtml(f.formula)}</div>`;
    }
    function fvFmtNum(x) {
      if (x === null || x === undefined || !isFinite(x)) return '-';
      return Number(x.toFixed(6)).toLocaleString('en-IN', { maximumFractionDigits: 6 });
    }
    /* "Where: I = interest, t = tax rate" in the meaning box becomes hints under the calculator boxes */
    function fvVarHints(text) {
      const out = {};
      const re = /([A-Za-z][A-Za-z0-9_]{0,7})\s*(?:=|:|–|—|-)\s*([^,;\n]+?)(?=,|;|\n|$)/g;
      let m;
      while ((m = re.exec(String(text || '')))) out[m[1].toLowerCase().replace(/_/g, '')] = m[2].trim().slice(0, 40);
      return out;
    }
    function fvBuildCalc(f, panel) {
      const a = fvMathAnalyze(f.formula);
      if (!a.ok || !a.vars.length) {
        panel.innerHTML = `<p class="text-[11px] text-slate-400 px-1">This formula has no numbers to plug in yet. Use a form like <span class="font-mono">ROI = (Profit / Investment) x 100</span>.</p>`;
        return;
      }
      const hints = fvVarHints(f.explanation);
      const vals = fvCalcMem[f.id] = fvCalcMem[f.id] || {};
      panel.innerHTML = `<div class="grid grid-cols-2 gap-2">${a.vars.map((v, i) => {
        const hint = hints[v.name.toLowerCase().replace(/[_\s]/g, '')] || '';
        return `<label class="block min-w-0"><span class="mmath !w-auto !min-w-0 !text-[16px] block">${v.h}</span>${hint ? `<span class="block text-[9px] text-slate-400 truncate">${escapeHtml(hint)}</span>` : ''}
          <input type="text" inputmode="decimal" data-v="${i}" value="${escapeHtml(vals[v.name] || '')}" placeholder="0" class="w-full mt-0.5 bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-cma-darkborder text-xs font-mono text-slate-800 dark:text-slate-100"></label>`;
      }).join('')}</div><div class="fv-calc-res mt-3 flex items-center justify-between gap-3"></div>`;
      const res = panel.querySelector('.fv-calc-res');
      const update = () => {
        const r = a.evaluate(vals);
        res.innerHTML = `<div class="mmath !w-auto !min-w-0">${a.lhsHtml || '<span class="mw">Result</span>'}<span class="mo">=</span><b>${r === null ? '–' : fvFmtNum(r)}</b></div>
          ${r === null ? '<span class="text-[10px] text-white/70">Fill every box</span>' : '<button class="fv-copyres px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-extrabold">Copy</button>'}`;
        const cb = res.querySelector('.fv-copyres');
        if (cb) cb.onclick = () => copyToClipboard(String(Number(r.toFixed(6))), 'Result copied!');
      };
      panel.querySelectorAll('input').forEach(inp => {
        inp.oninput = () => { vals[a.vars[+inp.dataset.v].name] = inp.value.replace(/,/g, ''); update(); };
      });
      update();
    }

    function newFormulaId() { return 'fm_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

    function formulaChapterOf(f) { return (f.chapter && String(f.chapter).trim()) || 'General'; }

    function getAllVaultFormulas() {
      return (AppState.customFormulas || []).filter(f => fvFilter.showAll || isSubjectInScope(f.subject || 'General'));
    }

    function fvFiltered() {
      const q = (fvFilter.q || '').toLowerCase();
      let list = getAllVaultFormulas().filter(f => {
        if (fvFilter.subject && (f.subject || 'General') !== fvFilter.subject) return false;
        if (fvFilter.chapter && formulaChapterOf(f) !== fvFilter.chapter) return false;
        if (fvFilter.chip === 'starred' && !f.starred) return false;
        if (fvFilter.chip === 'revise' && !f.revise) return false;
        if (q && !((f.title || '').toLowerCase().includes(q) || (f.formula || '').toLowerCase().includes(q) ||
                   (f.explanation || '').toLowerCase().includes(q) || formulaChapterOf(f).toLowerCase().includes(q) ||
                   (f.subject || '').toLowerCase().includes(q))) return false;
        return true;
      });
      if (fvFilter.sort === 'az') list.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      else if (fvFilter.sort === 'subject') list.sort((a, b) => ((a.subject || '') + formulaChapterOf(a) + (a.title || '')).localeCompare((b.subject || '') + formulaChapterOf(b) + (b.title || '')));
      else list.sort((a, b) => String(b.updated || b.created || '').localeCompare(String(a.updated || a.created || '')));
      return list;
    }

    function openFormulaModal(keepFilter) {
      if (!keepFilter) fvFilter = { subject: '', chapter: '', chip: 'all', sort: 'new', q: '', showAll: false };
      document.getElementById('formulaSearchInput').value = fvFilter.q || '';
      document.getElementById('formulaSortSelect').value = fvFilter.sort;
      fvPopulateFilters();
      renderFormulas();
      document.getElementById('formulaModal').classList.remove('hidden');
    }
    function closeFormulaModal() { document.getElementById('formulaModal').classList.add('hidden'); }

    function openFormulaForSubject(name) {
      const has = (AppState.customFormulas || []).some(f => normKey(f.subject) === normKey(name));
      fvFilter = { subject: has ? name : '', chapter: '', chip: 'all', sort: 'subject', q: '', showAll: true };
      if (!has) showToast('No formulas saved for this subject yet - tap + Add to create one.');
      openFormulaModal(true);
    }

    function fvPopulateFilters() {
      const base = getAllVaultFormulas();
      const subSel = document.getElementById('formulaSubjectFilter');
      const chSel = document.getElementById('formulaChapterFilter');
      const subjects = [...new Set(base.map(f => f.subject || 'General'))].sort();
      subSel.innerHTML = '<option value="">All Subjects</option>';
      subjects.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; subSel.appendChild(o); });
      if (!subjects.includes(fvFilter.subject)) fvFilter.subject = '';
      subSel.value = fvFilter.subject;
      const chapters = [...new Set(base.filter(f => !fvFilter.subject || (f.subject || 'General') === fvFilter.subject).map(formulaChapterOf))].sort();
      chSel.innerHTML = '<option value="">All Chapters</option>';
      chapters.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; chSel.appendChild(o); });
      if (!chapters.includes(fvFilter.chapter)) fvFilter.chapter = '';
      chSel.value = fvFilter.chapter;
      const chk = document.getElementById('formulaShowAll');
      if (chk) chk.checked = !!fvFilter.showAll;
    }
    function onFormulaSubjectChange() { fvFilter.subject = document.getElementById('formulaSubjectFilter').value; fvFilter.chapter = ''; fvPopulateFilters(); renderFormulas(); }
    function onFormulaChapterChange() { fvFilter.chapter = document.getElementById('formulaChapterFilter').value; renderFormulas(); }
    function onFormulaSearch() { fvFilter.q = document.getElementById('formulaSearchInput').value.trim(); renderFormulas(); }
    function onFormulaSortChange() { fvFilter.sort = document.getElementById('formulaSortSelect').value; renderFormulas(); }
    function setFormulaChip(chip) { fvFilter.chip = chip; renderFormulas(); }
    function toggleFormulaShowAll() { fvFilter.showAll = document.getElementById('formulaShowAll').checked; fvPopulateFilters(); renderFormulas(); }

    function renderFormulas() {
      const base = getAllVaultFormulas();
      const counts = { all: base.length, starred: base.filter(f => f.starred).length, revise: base.filter(f => f.revise).length };
      [['all', 'All'], ['starred', '★ Starred'], ['revise', 'To revise']].forEach(([k, label]) => {
        const b = document.getElementById('formulaChip_' + k);
        if (!b) return;
        b.textContent = `${label} ${counts[k]}`;
        b.className = `shrink-0 px-3 py-1.5 rounded-full text-[11px] font-bold ${fvFilter.chip === k ? 'bg-cma-700 text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`;
      });
      const list = fvFiltered();
      document.getElementById('formulaCountLabel').textContent = `${list.length} formula${list.length === 1 ? '' : 's'}`;
      const container = document.getElementById('formulaListContainer');
      container.innerHTML = '';
      if (list.length === 0) {
        const none = (AppState.customFormulas || []).length === 0;
        container.innerHTML = `<div class="text-center py-10 px-4 text-slate-400 text-xs">
          <div class="w-14 h-14 mx-auto rounded-2xl bg-cma-100 dark:bg-cma-900/40 text-cma-600 dark:text-cma-300 flex items-center justify-center text-3xl mb-2"><i class="ph-bold ph-function"></i></div>
          <p class="font-bold text-slate-700 dark:text-slate-200 text-sm">${none ? 'Your Formula Vault is empty' : 'No formulas match these filters'}</p>
          <p class="mt-1">${none ? 'Add formulas one by one, or paste many at once from your notes.' : 'Clear a filter or search to see more.'}</p>
          ${none ? `<div class="flex justify-center gap-2 mt-4"><button onclick="openFormulaEdit()" class="px-4 py-2.5 rounded-xl bg-cma-600 text-white font-bold">+ Add formula</button><button onclick="openFormulaPaste()" class="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">Paste formulas</button></div>` : ''}
        </div>`;
        return;
      }
      const by = {};
      list.forEach(f => { const s = f.subject || 'General', c = formulaChapterOf(f); ((by[s] = by[s] || {})[c] = by[s][c] || []).push(f); });
      const expand = !!(fvFilter.q || fvFilter.subject || fvFilter.chapter || fvFilter.chip !== 'all' || list.length <= 10);
      Object.keys(by).sort().forEach(subject => {
        const total = Object.values(by[subject]).reduce((a, b) => a + b.length, 0);
        const sec = document.createElement('div');
        sec.className = 'rounded-2xl border border-slate-200 dark:border-cma-darkborder overflow-hidden';
        sec.innerHTML = `<div class="px-3 py-2 bg-cma-50 dark:bg-cma-900/30 flex items-center justify-between"><span class="font-extrabold text-xs text-cma-800 dark:text-cma-200 truncate pr-2">${escapeHtml(subject)}</span><span class="text-[10px] font-bold text-cma-700 dark:text-cma-300 shrink-0">${total}</span></div>`;
        Object.keys(by[subject]).sort().forEach(chapter => {
          const items = by[subject][chapter];
          const det = document.createElement('details');
          det.className = 'border-t border-slate-100 dark:border-cma-darkborder';
          det.open = expand;
          det.innerHTML = `<summary class="px-3 py-2.5 cursor-pointer flex items-center justify-between text-xs"><span class="font-semibold text-slate-700 dark:text-slate-200 pr-2">${escapeHtml(chapter)}</span><span class="text-[10px] text-slate-400 shrink-0">${items.length}</span></summary><div class="px-3 pb-3 space-y-2.5 fv-rows"></div>`;
          const rows = det.querySelector('.fv-rows');
          items.forEach(f => rows.appendChild(buildFormulaCard(f)));
          sec.appendChild(det);
        });
        container.appendChild(sec);
      });
    }

    function buildFormulaCard(f) {
      const card = document.createElement('div');
      card.className = 'rounded-2xl bg-white dark:bg-cma-darkcard border border-slate-200 dark:border-cma-darkborder p-3 space-y-2 shadow-sm';
      card.innerHTML = `
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <h4 class="text-[13px] font-extrabold text-slate-900 dark:text-white leading-snug">${escapeHtml(f.title)}</h4>
            ${f.revise ? '<button class="fv-unrev mt-0.5 px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">TO REVISE ✕</button>' : ''}
          </div>
          <div class="flex items-center shrink-0 -mr-1">
            <button class="fv-star p-1.5 text-base ${f.starred ? 'text-amber-500' : 'text-slate-300 hover:text-amber-400'}" title="Star"><i class="ph-${f.starred ? 'fill' : 'bold'} ph-star"></i></button>
            <button class="fv-copy p-1.5 text-base text-slate-400 hover:text-cma-600" title="Copy"><i class="ph-bold ph-copy"></i></button>
            <button class="fv-edit p-1.5 text-base text-slate-400 hover:text-cma-600" title="Edit"><i class="ph-bold ph-pencil-simple"></i></button>
            <button class="fv-del p-1.5 text-base text-slate-400 hover:text-rose-500" title="Delete"><i class="ph-bold ph-trash"></i></button>
          </div>
        </div>
        ${fvEqBlock(f, false)}
        <div class="flex items-center gap-1.5 flex-wrap">
          <button class="fv-fmt fv-act" title="Switch between typeset and plain text"><i class="ph-bold ${fvIsMath(f) ? 'ph-text-aa' : 'ph-math-operations'}"></i><span>${fvIsMath(f) ? 'Plain text' : 'Typeset'}</span></button>
          ${fvIsMath(f) ? `<button class="fv-calc fv-act ${fvCalcOpen.has(f.id) ? 'fv-act-on' : ''}"><i class="ph-bold ph-calculator"></i><span>Calculate</span></button>` : ''}
        </div>
        <div class="fv-calc-panel ${fvCalcOpen.has(f.id) && fvIsMath(f) ? '' : 'hidden'}"></div>
        ${f.explanation ? `<p class="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">${escapeHtml(f.explanation)}</p>` : ''}
        ${f.example ? `<p class="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400"><span class="font-bold text-orange-600 dark:text-cyan-300">Example:</span> <span class="italic">${escapeHtml(f.example)}</span></p>` : ''}`;
      const q = s => card.querySelector(s);
      q('.fv-star').onclick = () => fvToggleStar(f.id);
      q('.fv-copy').onclick = () => copyToClipboard(fvFormatForCopy(f), 'Formula copied!');
      q('.fv-edit').onclick = () => openFormulaEdit(f.id);
      q('.fv-del').onclick = () => deleteFormula(f.id);
      const un = q('.fv-unrev'); if (un) un.onclick = () => { f.revise = false; saveState(); renderFormulas(); };
      q('.fv-fmt').onclick = () => { f.fmt = fvIsMath(f) ? 'text' : 'math'; saveState(); card.replaceWith(buildFormulaCard(f)); };
      const calcBtn = q('.fv-calc'), panel = q('.fv-calc-panel');
      if (calcBtn) {
        calcBtn.onclick = () => {
          const open = !fvCalcOpen.has(f.id);
          if (open) fvCalcOpen.add(f.id); else fvCalcOpen.delete(f.id);
          panel.classList.toggle('hidden', !open);
          calcBtn.classList.toggle('fv-act-on', open);
          if (open) fvBuildCalc(f, panel);
        };
        if (fvCalcOpen.has(f.id)) fvBuildCalc(f, panel);
      }
      return card;
    }

    function fvFormatForCopy(f) {
      return `${f.title}\n${f.formula}${f.explanation ? '\n' + f.explanation : ''}${f.example ? '\nExample: ' + f.example : ''}`;
    }
    function fvFormatForExport(f) {
      return `Subject: ${f.subject || 'General'}\nChapter: ${formulaChapterOf(f)}\nTitle: ${f.title}\nFormula: ${f.formula}${f.explanation ? '\nExplanation: ' + f.explanation : ''}${f.example ? '\nExample: ' + f.example : ''}\n`;
    }
    async function copyToClipboard(text, okMsg) {
      try { await navigator.clipboard.writeText(text); showToast(okMsg || 'Copied!'); return; } catch (e) {}
      try {
        const t = document.createElement('textarea');
        t.value = text; document.body.appendChild(t); t.select();
        document.execCommand('copy'); document.body.removeChild(t);
        showToast(okMsg || 'Copied!');
      } catch (e) { showToast('Could not copy on this device.'); }
    }
    function copyFormulaText(text) { copyToClipboard(text, 'Formula copied to clipboard!'); }
    function fvCopyAll() {
      const list = fvFiltered();
      if (!list.length) { showToast('Nothing to copy.'); return; }
      copyToClipboard(list.map(fvFormatForExport).join('\n'), `${list.length} formulas copied (paste them anywhere or back into the vault).`);
    }

    function fvToggleStar(id) {
      const f = (AppState.customFormulas || []).find(x => x.id === id);
      if (!f) return;
      f.starred = !f.starred;
      saveState();
      renderFormulas();
    }

    /* ---- add / edit ---- */
    function fvFillSubjectOptions(selected) {
      const sel = document.getElementById('fvSubject');
      sel.innerHTML = '';
      const scoped = new Set(getScopedPapers().map(p => p.id));
      allPapersList().sort((a, b) => (scoped.has(b.paper.id) ? 1 : 0) - (scoped.has(a.paper.id) ? 1 : 0)).forEach(x => {
        const o = document.createElement('option'); o.value = x.paper.name; o.textContent = `${x.paper.code}: ${x.paper.name}`; sel.appendChild(o);
      });
      const g = document.createElement('option'); g.value = 'General'; g.textContent = 'General (no subject)'; sel.appendChild(g);
      if (selected && ![...sel.options].some(o => o.value === selected)) {
        const o = document.createElement('option'); o.value = selected; o.textContent = selected; sel.appendChild(o);
      }
      sel.value = selected || (getScopedPapers()[0] ? getScopedPapers()[0].name : 'General');
      fvRefreshChapterList();
    }
    function fvRefreshChapterList() {
      const dl = document.getElementById('fvChapterList');
      dl.innerHTML = '';
      getChaptersForSubject(document.getElementById('fvSubject').value).forEach(c => { const o = document.createElement('option'); o.value = c; dl.appendChild(o); });
    }

    function openFormulaEdit(id) {
      const f = id ? (AppState.customFormulas || []).find(x => x.id === id) : null;
      document.getElementById('fvEditId').value = f ? f.id : '';
      document.getElementById('fvEditTitle').textContent = f ? 'Edit Formula' : 'Add Formula';
      document.getElementById('fvSaveBtn').textContent = f ? 'Save Changes' : 'Save Formula';
      document.getElementById('fvDeleteBtn').classList.toggle('hidden', !f);
      fvFillSubjectOptions(f ? f.subject : (fvFilter.subject || ''));
      document.getElementById('fvChapter').value = f ? (f.chapter || '') : (fvFilter.chapter || '');
      document.getElementById('fvTitle').value = f ? f.title : '';
      document.getElementById('fvFormula').value = f ? f.formula : '';
      document.getElementById('fvExplain').value = f ? (f.explanation || '') : '';
      document.getElementById('fvExample').value = f ? (f.example || '') : '';
      document.getElementById('fvVars').value = f ? (f.variables || '') : '';
      document.getElementById('fvTip').value = f ? (f.tip || '') : '';
      document.getElementById('fvRelated').value = f ? (f.related || '') : '';
      fvEditFmt = f && (f.fmt === 'math' || f.fmt === 'text') ? f.fmt : 'auto';
      fvUpdatePreview();
      fvLastField = 'fvFormula';
      document.getElementById('formulaEditModal').classList.remove('hidden');
    }
    function closeFormulaEdit() { document.getElementById('formulaEditModal').classList.add('hidden'); }
    function fvTrackField(id) { fvLastField = id; }
    function fvInsertSymbol(sym) {
      const el = document.getElementById(fvLastField) || document.getElementById('fvFormula');
      const s = el.selectionStart === undefined || el.selectionStart === null ? el.value.length : el.selectionStart;
      const e = el.selectionEnd === undefined || el.selectionEnd === null ? s : el.selectionEnd;
      el.value = el.value.slice(0, s) + sym + el.value.slice(e);
      try { el.focus(); el.setSelectionRange(s + sym.length, s + sym.length); } catch (err) {}
      fvUpdatePreview();
    }
    /* one-tap maths templates: wrap the selected text, then park the cursor where you type next */
    function fvInsertTemplate(kind) {
      const el = document.getElementById('fvFormula');
      fvLastField = 'fvFormula';
      const s = el.selectionStart === undefined || el.selectionStart === null ? el.value.length : el.selectionStart;
      const e = el.selectionEnd === undefined || el.selectionEnd === null ? s : el.selectionEnd;
      const sel = el.value.slice(s, e);
      let ins, caret;
      if (kind === 'frac') { ins = sel ? `(${sel})/()` : '()/()'; caret = sel ? ins.length - 1 : 1; }
      else if (kind === 'sqrt') { ins = `sqrt(${sel})`; caret = sel ? ins.length : 5; }
      else if (kind === 'sup') { ins = '^{}'; caret = 2; }
      else if (kind === 'sub') { ins = '_{}'; caret = 2; }
      else if (kind === 'paren') { ins = `(${sel})`; caret = sel ? ins.length : 1; }
      else { ins = `[${sel}]`; caret = sel ? ins.length : 1; }
      el.value = el.value.slice(0, s) + ins + el.value.slice(e);
      try { el.focus(); el.setSelectionRange(s + caret, s + caret); } catch (err) {}
      fvUpdatePreview();
    }
    function fvSetEditFmt(m) { fvEditFmt = m; fvUpdatePreview(); }
    function fvUpdatePreview() {
      const ta = document.getElementById('fvFormula'), box = document.getElementById('fvPreview');
      if (!ta || !box) return;
      const txt = ta.value;
      const isMath = fvEditFmt === 'math' || (fvEditFmt === 'auto' && fvMathAuto(txt));
      ['auto', 'math', 'text'].forEach(k => { const b = document.getElementById('fvFmt_' + k); if (b) b.className = fvEditFmt === k ? 'on' : ''; });
      const st = document.getElementById('fvPreviewStatus');
      if (!txt.trim()) { box.innerHTML = '<span class="text-[11px] text-slate-400">Live preview appears here as you type</span>'; if (st) st.textContent = ''; return; }
      box.innerHTML = isMath ? fvMathRender(txt) : `<div class="font-mono text-[12px] whitespace-pre-wrap break-words">${escapeHtml(txt)}</div>`;
      if (st) st.textContent = isMath ? 'Typeset view' : 'Plain text view';
    }

    function saveFormulaFromForm() {
      const id = document.getElementById('fvEditId').value;
      const subject = document.getElementById('fvSubject').value || 'General';
      const chapter = document.getElementById('fvChapter').value.trim();
      let title = document.getElementById('fvTitle').value.trim();
      const formula = document.getElementById('fvFormula').value.trim();
      const explanation = document.getElementById('fvExplain').value.trim();
      const example = document.getElementById('fvExample').value.trim();
      const variables = document.getElementById('fvVars').value.trim(), tip = document.getElementById('fvTip').value.trim(), related = document.getElementById('fvRelated').value.trim();
      if (!formula) { showToast('Please enter the formula'); return; }
      if (!title) { const eq = formula.indexOf('='); title = (eq > 0 && eq < 60 ? formula.slice(0, eq) : formula.slice(0, 50)).trim(); }
      if (!title) { showToast('Please give the formula a title'); return; }
      const now = new Date().toISOString();
      const existing = id ? AppState.customFormulas.find(x => x.id === id) : null;
      if (existing) {
        Object.assign(existing, { subject, chapter, title, formula, explanation, example, variables, tip, related, updated: now });
        if (fvEditFmt === 'auto') delete existing.fmt; else existing.fmt = fvEditFmt;
        showToast('Formula updated!');
      } else {
        const nf = { id: newFormulaId(), subject, chapter, title, formula, explanation, example, variables, tip, related, starred: false, revise: false, created: now, updated: now };
        if (fvEditFmt !== 'auto') nf.fmt = fvEditFmt;
        AppState.customFormulas.unshift(nf);
        showToast('Formula added to your vault!');
      }
      saveState();
      closeFormulaEdit();
      fvPopulateFilters();
      renderFormulas();
    }

    function deleteFormula(id) {
      const f = (AppState.customFormulas || []).find(x => x.id === id);
      if (!f) return;
      askConfirm('Delete this formula?', `"${f.title}" will be removed from your vault.`, 'Delete', () => {
        AppState.customFormulas = AppState.customFormulas.filter(x => x.id !== id);
        saveState();
        closeFormulaEdit();
        fvPopulateFilters();
        renderFormulas();
        showToast('Formula deleted.');
      });
    }
    function deleteFormulaFromForm() { const id = document.getElementById('fvEditId').value; if (id) deleteFormula(id); }

    /* ---- paste many ---- */
    function openFormulaPaste() {
      const sel = document.getElementById('fvPasteSubject');
      sel.innerHTML = '';
      const scoped = new Set(getScopedPapers().map(p => p.id));
      allPapersList().sort((a, b) => (scoped.has(b.paper.id) ? 1 : 0) - (scoped.has(a.paper.id) ? 1 : 0)).forEach(x => {
        const o = document.createElement('option'); o.value = x.paper.name; o.textContent = `${x.paper.code}: ${x.paper.name}`; sel.appendChild(o);
      });
      const g = document.createElement('option'); g.value = 'General'; g.textContent = 'General (no subject)'; sel.appendChild(g);
      sel.value = fvFilter.subject || (getScopedPapers()[0] ? getScopedPapers()[0].name : 'General');
      document.getElementById('fvPasteChapter').value = fvFilter.chapter || '';
      document.getElementById('fvPasteText').value = '';
      fvParsed = [];
      fvRenderPastePreview();
      document.getElementById('formulaPasteModal').classList.remove('hidden');
    }
    function closeFormulaPaste() { document.getElementById('formulaPasteModal').classList.add('hidden'); }

    function parseFormulaText(raw, ctx) {
      const lines = String(raw || '').replace(/\r/g, '').replace(/\u00a0/g, ' ').split('\n');
      let subject = ctx.subject, chapter = ctx.chapter || '';
      const items = [];
      let cur = null;
      const autoTitle = f => { const eq = f.indexOf('='); return (eq > 0 && eq < 70 ? f.slice(0, eq) : f.slice(0, 50)).trim(); };
      const push = () => {
        if (!cur) return;
        const formula = (cur.formula || '').trim();
        if (formula.length >= 3) {
          items.push({ id: newFormulaId(), subject, chapter, title: (cur.title || autoTitle(formula)).trim(), formula,
                       explanation: (cur.explanation || '').trim(), example: (cur.example || '').trim(), starred: false, revise: false });
        }
        cur = null;
      };
      lines.forEach(rawLine => {
        const t = rawLine.trim();
        if (!t) { if (cur && cur.labeled) push(); return; }
        let m;
        if ((m = t.match(/^(?:Subject|Paper)\s*:\s*(.+)$/i))) { push(); const hit = matchPaperName(m[1]); subject = hit ? hit.paper.name : m[1].trim(); return; }
        if ((m = t.match(/^(?:Chapter|Topic|Unit)\s*:\s*(.+)$/i))) { push(); chapter = m[1].trim(); return; }
        if ((m = t.match(/^(?:Title|Name)\s*:\s*(.+)$/i))) { push(); cur = { labeled: true, title: m[1].trim(), formula: '', explanation: '', example: '', field: null }; return; }
        if ((m = t.match(/^Formula\s*:\s*(.*)$/i))) {
          if (!cur || !cur.labeled || cur.formula) { push(); cur = { labeled: true, title: '', formula: '', explanation: '', example: '', field: null }; }
          cur.formula = m[1].trim(); cur.field = 'formula'; return;
        }
        if ((m = t.match(/^(?:Explanation|Note|Notes|Use|Meaning|Where)\s*:\s*(.*)$/i)) && cur) { cur.explanation = (cur.explanation ? cur.explanation + ' ' : '') + m[1].trim(); cur.field = 'explanation'; return; }
        if ((m = t.match(/^Example\s*:\s*(.*)$/i)) && cur) { cur.example = (cur.example ? cur.example + ' ' : '') + m[1].trim(); cur.field = 'example'; return; }
        if (cur && cur.labeled) {
          if (!cur.formula && /[=≈]/.test(t)) { cur.formula = t; cur.field = 'formula'; return; }
          if (cur.field) { cur[cur.field] += (cur[cur.field] ? (cur.field === 'formula' ? '\n' : ' ') : '') + t; return; }
        }
        // plain "Name = equation" or "Name: equation" line
        if (/[=≈]/.test(t) && t.length > 4 && !/^(?:page|www\.|http)/i.test(t)) { push(); cur = { labeled: false, title: '', formula: t, explanation: '', example: '' }; push(); return; }
        if ((m = t.match(/^([^:]{2,60}):\s*(.+[\/×x÷+\-*^].+)$/))) { push(); cur = { labeled: false, title: m[1].trim(), formula: m[2].trim(), explanation: '', example: '' }; push(); return; }
      });
      push();
      return items;
    }

    function fvParsePasted() {
      const text = document.getElementById('fvPasteText').value;
      if (!text.trim()) { showToast('Paste some text first'); return; }
      const ctx = { subject: document.getElementById('fvPasteSubject').value || 'General', chapter: document.getElementById('fvPasteChapter').value.trim() };
      const items = parseFormulaText(text, ctx);
      if (items.length === 0) { showToast('No formulas found. Use "Title = equation" on each line.'); return; }
      fvParsed = [...fvParsed, ...items];
      document.getElementById('fvPasteText').value = '';
      fvRenderPastePreview();
      showToast(`Found ${items.length} formula${items.length === 1 ? '' : 's'}.`);
    }

    function fvRenderPastePreview() {
      const box = document.getElementById('fvPastePreview');
      const btn = document.getElementById('fvPasteSaveBtn');
      document.getElementById('fvPasteCount').textContent = `Ready to save (${fvParsed.length})`;
      btn.disabled = fvParsed.length === 0;
      btn.textContent = `Save ${fvParsed.length} Formula${fvParsed.length === 1 ? '' : 's'}`;
      box.innerHTML = '';
      if (fvParsed.length === 0) {
        box.innerHTML = `<div class="text-center py-6 text-slate-400 text-xs px-3">Paste your formulas above and tap <b>Find formulas</b>.<br><span class="text-[10px]">One per line, like <span class="font-mono">Margin of Safety = Actual Sales - BEP Sales</span></span></div>`;
        return;
      }
      fvParsed.forEach((it, idx) => {
        const card = document.createElement('div');
        card.className = 'p-3 rounded-2xl bg-white dark:bg-cma-darkcard border border-slate-200 dark:border-cma-darkborder space-y-1.5';
        card.innerHTML = `
          <div class="flex items-center justify-between gap-2">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-cma-100 text-cma-700 dark:bg-cma-900/60 dark:text-cma-300 truncate">${escapeHtml(it.chapter || 'General')}</span>
            <button class="text-slate-400 hover:text-rose-500 text-sm" title="Remove"><i class="ph ph-x"></i></button>
          </div>
          <input type="text" value="${escapeHtml(it.title)}" class="w-full bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-cma-darkborder text-xs font-bold">
          <textarea rows="2" class="w-full bg-slate-50 dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-cma-darkborder text-xs font-mono">${escapeHtml(it.formula)}</textarea>`;
        const [rm] = card.querySelectorAll('button');
        const [titleEl] = card.querySelectorAll('input');
        const [formEl] = card.querySelectorAll('textarea');
        rm.onclick = () => { fvParsed.splice(idx, 1); fvRenderPastePreview(); };
        titleEl.onchange = () => { it.title = titleEl.value.trim() || it.title; };
        formEl.onchange = () => { it.formula = formEl.value.trim() || it.formula; };
        box.appendChild(card);
      });
    }

    function fvSavePasted() {
      const key = f => normKey((f.subject || '') + '|' + f.title + '|' + f.formula);
      const existing = new Set((AppState.customFormulas || []).map(key));
      const now = new Date().toISOString();
      let added = 0, dup = 0;
      const toAdd = [];
      fvParsed.forEach(f => {
        const k = key(f);
        if (existing.has(k)) { dup++; return; }
        existing.add(k);
        toAdd.push(Object.assign({}, f, { created: now, updated: now })); added++;
      });
      AppState.customFormulas = [...toAdd, ...AppState.customFormulas];
      saveState();
      fvParsed = [];
      closeFormulaPaste();
      fvPopulateFilters();
      renderFormulas();
      if (added) confetti({ particleCount: 40, spread: 60, origin: { y: 0.7 } });
      showToast(`Added ${added} formula${added === 1 ? '' : 's'}${dup ? `, ${dup} duplicate${dup === 1 ? '' : 's'} skipped` : ''}.`);
    }

    /* ---- revise (flashcards) ---- */
    function openFormulaRevise() {
      const list = fvFiltered();
      if (list.length === 0) { showToast('No formulas to revise in this view.'); return; }
      fvRevise = { list: shuffleArray(list), i: 0, revealed: false, known: 0, again: 0, done: false, rev: false };
      fvReviseRender();
      document.getElementById('formulaReviseModal').classList.remove('hidden');
    }
    function closeFormulaRevise() {
      document.getElementById('formulaReviseModal').classList.add('hidden');
      renderFormulas();
    }
    function fvReviseRender() {
      const r = fvRevise, total = r.list.length;
      const card = document.getElementById('fvReviseCard');
      document.getElementById('fvReviseBar').style.width = `${Math.round((r.done ? total : r.i) / total * 100)}%`;
      document.getElementById('fvReviseProgress').textContent = r.done ? 'Finished' : `${r.i + 1} / ${total}`;
      if (r.done) {
        const missed = r.list.filter(f => f.revise).length;
        card.innerHTML = `<div class="text-center py-6 space-y-2">
          <div class="orb-empty !border-0 !p-0"><div class="e-ico"><i class="ph ph-target"></i></div></div>
          <h3 class="font-extrabold text-lg text-slate-900 dark:text-white">Round complete</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">You knew <b class="text-emerald-600">${r.known}</b> • To revise <b class="text-amber-600">${r.again}</b></p></div>`;
        document.getElementById('fvReviseActions').innerHTML = `
          ${r.again ? `<button onclick="fvReviseMissed()" class="flex-1 py-3 rounded-2xl bg-amber-500 text-white font-bold text-sm">Revise ${r.again} missed</button>` : ''}
          <button onclick="closeFormulaRevise()" class="flex-1 py-3 rounded-2xl bg-cma-600 text-white font-bold text-sm">Done</button>`;
        return;
      }
      const f = r.list[r.i];
      card.innerHTML = `
        <div class="flex flex-wrap gap-1.5 mb-3">
          <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-cma-100 text-cma-700 dark:bg-cma-900/60 dark:text-cma-300">${escapeHtml(f.subject || 'General')}</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300">${escapeHtml(formulaChapterOf(f))}</span>
        </div>
        <div class="fv-seg mb-3"><button onclick="fvReviseSetMode(false)" class="${r.rev ? '' : 'on'}">Name → Formula</button><button onclick="fvReviseSetMode(true)" class="${r.rev ? 'on' : ''}">Formula → Name</button></div>
        ${r.rev
          ? `${fvEqBlock(f, true)}
             ${r.revealed
               ? `<h3 class="mt-4 text-lg font-black text-slate-900 dark:text-white leading-snug">${escapeHtml(f.title)}</h3>
                  ${f.explanation ? `<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">${escapeHtml(f.explanation)}</p>` : ''}
                  ${f.example ? `<p class="mt-2 text-xs text-slate-500 dark:text-slate-400"><b class="text-orange-600">Example:</b> <i>${escapeHtml(f.example)}</i></p>` : ''}`
               : `<div class="mt-4 py-8 rounded-2xl border-2 border-dashed border-cma-200 dark:border-cma-800 text-center text-cma-500 dark:text-cma-300 text-sm font-semibold">What is this formula called? Then tap Reveal</div>`}`
          : `<h3 class="text-lg font-black text-slate-900 dark:text-white leading-snug">${escapeHtml(f.title)}</h3>
             ${r.revealed
               ? `<div class="mt-4">${fvEqBlock(f, true)}</div>
                  ${f.explanation ? `<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">${escapeHtml(f.explanation)}</p>` : ''}
                  ${f.example ? `<p class="mt-2 text-xs text-slate-500 dark:text-slate-400"><b class="text-orange-600">Example:</b> <i>${escapeHtml(f.example)}</i></p>` : ''}`
               : `<div class="mt-6 py-10 rounded-2xl border-2 border-dashed border-cma-200 dark:border-cma-800 text-center text-cma-500 dark:text-cma-300 text-sm font-semibold">Try to recall the formula, then tap Reveal</div>`}`}`;
      document.getElementById('fvReviseActions').innerHTML = r.revealed
        ? `<button onclick="fvMark(false)" class="flex-1 py-3 rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200 font-bold text-sm">Revise again</button>
           <button onclick="fvMark(true)" class="flex-1 py-3 rounded-2xl bg-emerald-600 text-white font-bold text-sm">Got it ✓</button>`
        : `<button onclick="fvReveal()" class="flex-1 py-3 rounded-2xl bg-cma-600 text-white font-bold text-sm">Reveal formula</button>`;
    }
    function fvReveal() { fvRevise.revealed = true; fvReviseRender(); }
    function fvReviseSetMode(rev) { fvRevise.rev = !!rev; fvRevise.revealed = false; fvReviseRender(); }
    function fvMark(knew) {
      const r = fvRevise, f = r.list[r.i];
      f.revise = !knew;
      if (knew) r.known++; else r.again++;
      saveState();
      r.revealed = false;
      if (r.i + 1 >= r.list.length) r.done = true; else r.i++;
      fvReviseRender();
    }
    function fvReviseMissed() {
      const missed = fvRevise.list.filter(f => f.revise);
      if (!missed.length) { closeFormulaRevise(); return; }
      fvRevise = { list: shuffleArray(missed), i: 0, revealed: false, known: 0, again: 0, done: false, rev: fvRevise.rev };
      fvReviseRender();
    }

    /* PDF MCQ Importer */
    let parsedMcqList = [];


    function closePdfMcqImportModal() {
      document.getElementById('pdfMcqModal').classList.add('hidden');
    }

    function toggleMcqImportMode(mode) {
      const upDrop = document.getElementById('mcqUploadDropzone');
      const pasteArea = document.getElementById('mcqPasteArea');
      const upBtn = document.getElementById('mcqModeUploadBtn');
      const pasteBtn = document.getElementById('mcqModePasteBtn');

      if (mode === 'upload') {
        upDrop.classList.remove('hidden');
        pasteArea.classList.add('hidden');
        upBtn.className = "flex-1 py-1.5 rounded-lg bg-white dark:bg-cma-darkcard text-cma-700 dark:text-cma-300 shadow-sm transition";
        pasteBtn.className = "flex-1 py-1.5 rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition";
      } else {
        upDrop.classList.add('hidden');
        pasteArea.classList.remove('hidden');
        pasteBtn.className = "flex-1 py-1.5 rounded-lg bg-white dark:bg-cma-darkcard text-cma-700 dark:text-cma-300 shadow-sm transition";
        upBtn.className = "flex-1 py-1.5 rounded-lg text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition";
      }
    }




    function updateMcqQuestionPrompt(idx, val) { if (parsedMcqList[idx]) parsedMcqList[idx].question = val; }
    function updateMcqOptionText(idx, oIdx, val) { if (parsedMcqList[idx] && parsedMcqList[idx].options) parsedMcqList[idx].options[oIdx] = val; }
    function updateMcqCorrectIndex(idx, oIdx) { if (parsedMcqList[idx]) { parsedMcqList[idx].correctIndex = oIdx; renderParsedMcqPreview(); } }
    function updateMcqExplanation(idx, val) { if (parsedMcqList[idx]) parsedMcqList[idx].explanation = val; }
    function removeParsedMcq(idx) { parsedMcqList.splice(idx, 1); renderParsedMcqPreview(); }
    function clearParsedMcqList() { parsedMcqList = []; renderParsedMcqPreview(); }



    /* Notes Hub */
    let editingNoteId = null;

    function getChaptersForSubject(subject) {
      const set = new Set();
      Object.keys(SYLLABUS).forEach(lvl => Object.keys(SYLLABUS[lvl].groups).forEach(g => {
        SYLLABUS[lvl].groups[g].papers.forEach(p => {
          if (!subject || p.name === subject) p.chapters.forEach(c => set.add(c.name));
        });
      }));
      (AppState.customQuestions || []).forEach(q => { if ((!subject || q.subject === subject) && q.chapter) set.add(q.chapter); });
      (AppState.userNotes || []).forEach(n => { if ((!subject || n.subject === subject) && n.chapter) set.add(n.chapter); });
      (AppState.resources || []).forEach(r => { if ((!subject || r.subject === subject) && r.chapter && r.chapter !== 'General') set.add(r.chapter); });
      return [...set].sort();
    }

    function getNoteSubjects() {
      const set = new Set(getScopedPapers().map(p => p.name));
      (AppState.userNotes || []).forEach(n => { if (n.subject && isSubjectInScope(n.subject)) set.add(n.subject); });
      set.add('General');
      return [...set];
    }

    function fillNoteFormOptions() {
      const sel = document.getElementById('noteSubjectInput');
      const cur = sel.value;
      sel.innerHTML = '';
      getNoteSubjects().forEach(s => {
        const o = document.createElement('option'); o.value = s; o.textContent = s; sel.appendChild(o);
      });
      if (cur && [...sel.options].some(o => o.value === cur)) sel.value = cur;
      refreshNoteChapterList();
    }

    function refreshNoteChapterList() {
      const subject = document.getElementById('noteSubjectInput').value;
      const dl = document.getElementById('noteChapterList');
      dl.innerHTML = '';
      getChaptersForSubject(subject).forEach(c => { const o = document.createElement('option'); o.value = c; dl.appendChild(o); });
    }

    const NOTE_COLORS = [['', 'None', '#CBD5E1'], ['blue', 'Blue', '#2563EB'], ['cyan', 'Cyan', '#0891B2'], ['green', 'Green', '#16A34A'], ['amber', 'Amber', '#F59E0B'], ['rose', 'Rose', '#DC2626']];
    let noteColorSel = '';
    let notesTagFilter = '';
    const notesExpanded = new Set();

    function noteColorHex(key) { const c = NOTE_COLORS.find(x => x[0] === key); return c ? c[2] : '#CBD5E1'; }
    function renderNoteColorPicker() {
      const box = document.getElementById('noteColorPicker');
      if (!box) return;
      box.innerHTML = NOTE_COLORS.map(([k, label, hex]) =>
        `<button type="button" onclick="setNoteColor('${k}')" title="${label}" aria-label="${label}" class="w-6 h-6 rounded-full" style="background:${hex};box-shadow:${noteColorSel === k ? '0 0 0 2px var(--surface),0 0 0 4px ' + hex : 'none'}"></button>`).join('');
    }
    function setNoteColor(k) { noteColorSel = k; renderNoteColorPicker(); }
    function parseNoteTags(str) {
      const out = [];
      String(str || '').split(/[,\n]/).forEach(t => {
        t = t.trim().replace(/^#+/, '').toLowerCase().replace(/\s+/g, '-');
        if (t && !out.includes(t) && out.length < 8) out.push(t);
      });
      return out;
    }

    function resetNoteForm() {
      editingNoteId = null;
      ['noteTitleInput', 'noteBodyInput', 'noteChapterInput', 'noteTagsInput'].forEach(id => { document.getElementById(id).value = ''; });
      document.getElementById('notePinInput').checked = false;
      noteColorSel = '';
      renderNoteColorPicker();
      document.getElementById('noteFormTitle').textContent = 'New Note';
      document.getElementById('noteSaveBtn').textContent = 'Save Note';
      document.getElementById('noteCancelEditBtn').classList.add('hidden');
      document.getElementById('noteComposer').classList.add('hidden');
      const t = document.getElementById('noteComposerToggle');
      if (t) t.innerHTML = '<i class="ph ph-plus text-[14px]"></i><span>New</span>';
    }
    function showNoteComposer() {
      document.getElementById('noteComposer').classList.remove('hidden');
      const t = document.getElementById('noteComposerToggle');
      if (t) t.innerHTML = '<i class="ph ph-caret-up text-[14px]"></i><span>Hide</span>';
    }
    function toggleNoteComposer() {
      const c = document.getElementById('noteComposer');
      if (c.classList.contains('hidden')) { showNoteComposer(); document.getElementById('noteTitleInput').focus(); }
      else resetNoteForm();
    }

    function openNotesModal() {
      resetNoteForm();
      notesTagFilter = '';
      document.getElementById('notesSearchInput').value = '';
      fillNoteFormOptions();
      populateNoteFilters();
      renderNotes();
      document.getElementById('notesModal').classList.remove('hidden');
    }

    function closeNotesModal() {
      document.getElementById('notesModal').classList.add('hidden');
    }

    function populateNoteFilters() {
      const subSel = document.getElementById('notesFilterSubject');
      const chSel = document.getElementById('notesFilterChapter');
      const curSub = subSel.value;
      const subjects = [...new Set((AppState.userNotes || []).filter(n => isSubjectInScope(n.subject)).map(n => n.subject || 'General'))].sort();
      subSel.innerHTML = '<option value="">All Subjects</option>';
      subjects.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; subSel.appendChild(o); });
      subSel.value = subjects.includes(curSub) ? curSub : '';
      const curCh = chSel.value;
      const chapters = [...new Set((AppState.userNotes || []).filter(n => !subSel.value || (n.subject || 'General') === subSel.value).map(n => n.chapter || '').filter(Boolean))].sort();
      chSel.innerHTML = '<option value="">All Chapters</option>';
      chapters.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; chSel.appendChild(o); });
      chSel.value = chapters.includes(curCh) ? curCh : '';
    }

    function onNotesSubjectFilterChange() {
      document.getElementById('notesFilterChapter').value = '';
      populateNoteFilters();
      renderNotes();
    }
    function setNotesTagFilter(t) { notesTagFilter = notesTagFilter === t ? '' : t; renderNotes(); }

    function noteBodyHTML(n, idx) {
      const lines = String(n.text || '').split('\n');
      return lines.map((ln, li) => {
        const m = /^\s*\[( |x|X)\]\s?(.*)$/.exec(ln);
        if (m) {
          const done = m[1] !== ' ';
          return `<button type="button" onclick="toggleNoteCheck(${idx},${li})" class="orb-note-check ${done ? 'is-done' : ''}"><i class="${done ? 'ph-fill ph-check-square' : 'ph ph-square'}"></i><span>${escapeHtml(m[2])}</span></button>`;
        }
        return ln.trim() ? `<p>${escapeHtml(ln)}</p>` : '<div class="h-1.5"></div>';
      }).join('');
    }

    function renderNotes() {
      const container = document.getElementById('notesListContainer');
      container.innerHTML = '';
      const subject = document.getElementById('notesFilterSubject').value;
      const chapter = document.getElementById('notesFilterChapter').value;
      const sort = document.getElementById('notesSort').value;
      const q = document.getElementById('notesSearchInput').value.trim().toLowerCase();
      const inScope = (AppState.userNotes || []).map((n, idx) => ({ n, idx })).filter(({ n }) => isSubjectInScope(n.subject));

      // tag chips (counts reflect subject/chapter filters)
      const tagCount = {};
      inScope.forEach(({ n }) => {
        if (subject && (n.subject || 'General') !== subject) return;
        if (chapter && (n.chapter || '') !== chapter) return;
        (n.tags || []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; });
      });
      if (notesTagFilter && !tagCount[notesTagFilter]) notesTagFilter = '';
      const chipBox = document.getElementById('notesTagChips');
      const tags = Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b));
      chipBox.innerHTML = tags.length ? tags.map(t => `<button type="button" onclick="setNotesTagFilter('${escapeHtml(t).replace(/'/g, '&#39;')}')" class="orb-tagchip ${notesTagFilter === t ? 'on' : ''}">#${escapeHtml(t)} <span class="opacity-60">${tagCount[t]}</span></button>`).join('') : '';
      chipBox.classList.toggle('hidden', !tags.length);

      let list = inScope.filter(({ n }) => {
        if (subject && (n.subject || 'General') !== subject) return false;
        if (chapter && (n.chapter || '') !== chapter) return false;
        if (notesTagFilter && !(n.tags || []).includes(notesTagFilter)) return false;
        if (q && !((n.title || '').toLowerCase().includes(q) || (n.text || '').toLowerCase().includes(q) || (n.chapter || '').toLowerCase().includes(q) || (n.tags || []).some(t => t.includes(q.replace(/^#/, ''))))) return false;
        return true;
      });
      const stamp = n => n.updated || n.created || '';
      list.sort((a, b) => {
        if (!!b.n.pinned !== !!a.n.pinned) return b.n.pinned ? 1 : -1;
        if (sort === 'az') return (a.n.title || '').localeCompare(b.n.title || '');
        if (sort === 'old') return stamp(a.n).localeCompare(stamp(b.n));
        return stamp(b.n).localeCompare(stamp(a.n));
      });
      const pinned = list.filter(x => x.n.pinned).length;
      document.getElementById('notesCountLabel').textContent = `${list.length} note${list.length === 1 ? '' : 's'}${pinned ? ` · ${pinned} pinned` : ''}`;
      if (list.length === 0) {
        const none = inScope.length === 0;
        container.innerHTML = `<div class="orb-empty"><div class="e-ico"><i class="ph ph-notebook"></i></div>
          <div class="e-ttl">${none ? 'No notes yet' : 'No notes match'}</div>
          <div class="e-sub">${none ? 'Capture formulas, section numbers and exam tips by subject and chapter. Use [ ] for checklists.' : 'Try a different search, tag or filter.'}</div>
          ${none ? '<button onclick="toggleNoteComposer()" class="btn btn-primary btn-sm">Write your first note</button>' : ''}</div>`;
        return;
      }
      list.forEach(({ n, idx }) => {
        const long = (n.text || '').length > 240 || (n.text || '').split('\n').length > 6;
        const open = notesExpanded.has(n.id);
        const words = (n.text || '').trim() ? (n.text || '').trim().split(/\s+/).length : 0;
        const d = document.createElement('div');
        d.className = 'orb-note';
        d.style.borderLeftColor = noteColorHex(n.color || '');
        d.innerHTML = `
          <div class="flex items-start justify-between gap-2">
            <div class="flex flex-wrap items-center gap-1 min-w-0">
              <span class="orb-chip bg-cma-50 text-cma-700 dark:bg-cma-600/15 dark:text-cma-300 max-w-full"><span class="truncate">${escapeHtml(n.subject || 'General')}</span></span>
              ${n.chapter ? `<span class="orb-chip bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300 max-w-full"><span class="truncate">${escapeHtml(n.chapter)}</span></span>` : ''}
            </div>
            <div class="flex items-center shrink-0 -mr-1">
              <button onclick="toggleNotePin(${idx})" class="orb-ib ${n.pinned ? 'text-cma-600 dark:text-cyan-400' : ''}" title="${n.pinned ? 'Unpin' : 'Pin'}"><i class="${n.pinned ? 'ph-fill' : 'ph'} ph-push-pin"></i></button>
              <button onclick="copyNote(${idx})" class="orb-ib" title="Copy"><i class="ph ph-copy"></i></button>
              <button onclick="editNote(${idx})" class="orb-ib" title="Edit"><i class="ph ph-pencil-simple"></i></button>
              <button onclick="deleteNote(${idx})" class="orb-ib hover:!text-rose-500" title="Delete"><i class="ph ph-trash"></i></button>
            </div>
          </div>
          <h4 class="text-[14px] font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-1.5">${escapeHtml(n.title)}</h4>
          ${n.text && n.text !== n.title ? `<div class="orb-note-body ${long && !open ? 'is-clamped' : ''}">${noteBodyHTML(n, idx)}</div>` : ''}
          ${long ? `<button onclick="toggleNoteExpand('${n.id}')" class="orb-link mt-1">${open ? 'Show less' : 'Show more'}</button>` : ''}
          ${(n.tags || []).length ? `<div class="flex flex-wrap gap-1 mt-2">${n.tags.map(t => `<span class="orb-tagchip !h-5 !text-[10.5px]">#${escapeHtml(t)}</span>`).join('')}</div>` : ''}
          <div class="flex items-center justify-between text-[10.5px] text-slate-400 mt-2"><span>${escapeHtml((n.updated || n.created || '').slice(0, 10))}</span><span>${words} word${words === 1 ? '' : 's'}</span></div>`;
        container.appendChild(d);
      });
    }

    function toggleNoteExpand(id) { if (notesExpanded.has(id)) notesExpanded.delete(id); else notesExpanded.add(id); renderNotes(); }
    function toggleNotePin(idx) {
      const n = AppState.userNotes[idx]; if (!n) return;
      n.pinned = !n.pinned; saveState(); renderNotes();
    }
    function toggleNoteCheck(idx, lineNo) {
      const n = AppState.userNotes[idx]; if (!n) return;
      const lines = String(n.text || '').split('\n');
      const m = /^(\s*)\[( |x|X)\](\s?.*)$/.exec(lines[lineNo] || '');
      if (!m) return;
      lines[lineNo] = `${m[1]}[${m[2] === ' ' ? 'x' : ' '}]${m[3]}`;
      n.text = lines.join('\n'); saveState(); renderNotes();
    }
    async function copyNote(idx) {
      const n = AppState.userNotes[idx]; if (!n) return;
      const txt = `${n.title}\n\n${n.text || ''}${(n.tags || []).length ? '\n\n' + n.tags.map(t => '#' + t).join(' ') : ''}`.trim();
      try { await navigator.clipboard.writeText(txt); showToast('Note copied'); }
      catch (e) {
        try { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); showToast('Note copied'); }
        catch (e2) { showToast('Could not copy'); }
      }
    }

    function saveNote() {
      const subject = document.getElementById('noteSubjectInput').value || 'General';
      const chapter = document.getElementById('noteChapterInput').value.trim();
      const title = document.getElementById('noteTitleInput').value.trim();
      const text = document.getElementById('noteBodyInput').value.trim();
      const tags = parseNoteTags(document.getElementById('noteTagsInput').value);
      const pinned = document.getElementById('notePinInput').checked;
      if (!title && !text) { showToast('Please write something to save'); return; }
      const now = new Date().toISOString();
      const finalTitle = title || text.split('\n')[0].replace(/^\s*\[( |x|X)\]\s?/, '').slice(0, 60);
      const existing = editingNoteId ? AppState.userNotes.find(n => n.id === editingNoteId) : null;
      if (existing) {
        Object.assign(existing, { subject, chapter, title: finalTitle, text, tags, pinned, color: noteColorSel, updated: now });
        showToast('Note updated!');
      } else {
        AppState.userNotes.unshift({ id: 'note_' + Date.now(), subject, chapter, title: finalTitle, text, tags, pinned, color: noteColorSel, created: now, updated: now });
        showToast('Note saved!');
      }
      saveState();
      resetNoteForm();
      fillNoteFormOptions();
      populateNoteFilters();
      renderNotes();
    }

    function editNote(idx) {
      const n = AppState.userNotes[idx];
      if (!n) return;
      editingNoteId = n.id;
      fillNoteFormOptions();
      const sel = document.getElementById('noteSubjectInput');
      if (![...sel.options].some(o => o.value === n.subject)) {
        const o = document.createElement('option'); o.value = n.subject; o.textContent = n.subject; sel.appendChild(o);
      }
      sel.value = n.subject || 'General';
      refreshNoteChapterList();
      document.getElementById('noteChapterInput').value = n.chapter || '';
      document.getElementById('noteTitleInput').value = n.title || '';
      document.getElementById('noteBodyInput').value = n.text || '';
      document.getElementById('noteTagsInput').value = (n.tags || []).join(', ');
      document.getElementById('notePinInput').checked = !!n.pinned;
      noteColorSel = n.color || ''; renderNoteColorPicker();
      document.getElementById('noteFormTitle').textContent = 'Edit Note';
      document.getElementById('noteSaveBtn').textContent = 'Update Note';
      document.getElementById('noteCancelEditBtn').classList.remove('hidden');
      showNoteComposer();
      document.getElementById('noteComposer').scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    function deleteNote(idx) {
      const n = AppState.userNotes[idx];
      if (!n) return;
      askConfirm('Delete note?', `"${n.title}" will be permanently deleted.`, 'Delete', () => {
        AppState.userNotes.splice(idx, 1);
        saveState();
        populateNoteFilters();
        renderNotes();
        showToast('Note deleted');
      });
    }

    /* =========================================================================
       RESOURCE LIBRARY - YouTube lectures, PDFs and links by subject & chapter
       ========================================================================= */
    const FILE_DB_NAME = 'CMA_ORBIT_FILES';
    let libFilter = { tab: 'res', subject: '', chapter: '', type: '', q: '', showAll: false, sort: 'recent', starred: false, pend: false, pk: '', notAtt: false };
    let resEditType = 'youtube';
    let resPendingFile = null;

    /* ---- IndexedDB store for PDF files (too big for localStorage) ---- */
    function fileDbOpen() {
      return new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') { reject(new Error('IndexedDB unavailable')); return; }
        const req = indexedDB.open(FILE_DB_NAME, 2);
        req.onupgradeneeded = () => {
          const db = req.result;
          ['pdfs', 'annots'].forEach(n => { if (!db.objectStoreNames.contains(n)) db.createObjectStore(n); });
        };
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error || new Error('IndexedDB error'));
      });
    }
    async function fileStoreRun(mode, fn, storeName) {
      const name = storeName || 'pdfs';
      const db = await fileDbOpen();
      try {
        return await new Promise((resolve, reject) => {
          const tx = db.transaction(name, mode);
          const req = fn(tx.objectStore(name));
          req.onsuccess = () => resolve(req.result);
          req.onerror = () => reject(req.error || new Error('IndexedDB request failed'));
        });
      } finally { try { db.close(); } catch (e) {} }
    }
    function filePut(id, blob) { return fileStoreRun('readwrite', s => s.put(blob, id)); }
    function fileGet(id) { return fileStoreRun('readonly', s => s.get(id)); }
    function fileDelete(id) { return fileStoreRun('readwrite', s => s.delete(id)); }

    function annotPut(id, data) { return fileStoreRun('readwrite', s => s.put(data, id), 'annots'); }
    function annotGet(id) { return fileStoreRun('readonly', s => s.get(id), 'annots'); }
    function annotDelete(id) { return fileStoreRun('readwrite', s => s.delete(id), 'annots'); }
    function fileStoreWipe() { try { if (typeof indexedDB !== 'undefined') indexedDB.deleteDatabase(FILE_DB_NAME); } catch (e) {} }

    /* ---- URL helpers ---- */
    function normalizeUrl(u) {
      let s = String(u || '').trim();
      if (!s) return '';
      if (/^[a-z][a-z0-9+.\-]*:/i.test(s) && !/^https?:\/\//i.test(s)) return '';   // block javascript:, file:, etc.
      if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
      try { return new URL(s).href; } catch (e) { return ''; }
    }
    function parseYouTube(url) {
      try {
        const u = new URL(normalizeUrl(url));
        const host = u.hostname.replace(/^(www|m|music)\./, '');
        let id = '';
        if (host === 'youtu.be') id = u.pathname.slice(1).split('/')[0];
        else if (host === 'youtube.com' || host === 'youtube-nocookie.com') {
          if (u.pathname === '/watch') id = u.searchParams.get('v') || '';
          else { const m = u.pathname.match(/^\/(?:shorts|live|embed|v)\/([^/?#]+)/); if (m) id = m[1]; }
        } else return null;
        const list = u.searchParams.get('list') || '';
        id = id.replace(/[^A-Za-z0-9_\-]/g, '');
        if (!id && !list) return null;
        return { videoId: id, playlistId: list };
      } catch (e) { return null; }
    }
    function resTypeIcon(type) {
      return type === 'youtube' ? 'ph-youtube-logo text-red-500' : (type === 'pdf' ? 'ph-file-pdf text-rose-600' : 'ph-link text-sky-600');
    }
    function formatBytes(n) {
      if (!n) return '';
      return n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
    }

    function isSubjectInScope(subject) {
      const hit = matchPaperName(subject);
      if (!hit) return true;
      return getScopedPapers().some(p => p.id === hit.paper.id);
    }
    function countResourcesFor(subject, chapter) {
      return (AppState.resources || []).filter(r => normKey(r.subject) === normKey(subject) && normKey(r.chapter) === normKey(chapter)).length;
    }

    /* ---- Library: Resources + Papers (PYQ / MQP / MTP with answer keys) ---- */
    function defaultLibFilter() { return { tab: 'res', subject: '', chapter: '', type: '', q: '', showAll: false, sort: 'recent', starred: false, pend: false, pk: '', notAtt: false }; }
    function openLibrary(keepFilter) {
      if (!keepFilter) libFilter = defaultLibFilter();
      libFilter = Object.assign(defaultLibFilter(), libFilter);
      document.getElementById('libSearch').value = libFilter.q || '';
      document.getElementById('libSort').value = libFilter.sort;
      populateLibraryFilters();
      renderLibrary();
      document.getElementById('libraryModal').classList.remove('hidden');
    }
    function openLibraryTab(tab) { libFilter = Object.assign(defaultLibFilter(), { tab }); openLibrary(true); }
    function closeLibrary() { document.getElementById('libraryModal').classList.add('hidden'); }
    function openLibraryForChapter(paperId, chId) {
      const hit = findPaperById(paperId);
      const ch = hit ? hit.paper.chapters.find(c => c.id === chId) : null;
      if (!ch) return;
      libFilter = Object.assign(defaultLibFilter(), { subject: hit.paper.name, chapter: ch.name, showAll: true });
      openLibrary(true);
    }
    function libIsPapers() { return libFilter.tab === 'papers'; }
    function libAddClick() { if (libIsPapers()) openPaperEdit(); else openResourceEdit(); }
    function setLibTab(tab) {
      libFilter = Object.assign(defaultLibFilter(), { tab, showAll: libFilter.showAll, sort: libFilter.sort });
      document.getElementById('libSearch').value = '';
      populateLibraryFilters();
      renderLibrary();
    }
    function onLibSort() { libFilter.sort = document.getElementById('libSort').value; renderLibrary(); }
    function setLibChip(key, val) {
      if (key === 'type' || key === 'pk') libFilter[key] = val;
      else libFilter[key] = !libFilter[key];
      renderLibrary();
    }

    function getLibraryBase() {
      const src = libIsPapers() ? (AppState.papers || []) : (AppState.resources || []);
      return src.filter(r => libFilter.showAll || isSubjectInScope(r.subject));
    }
    function libSecondKey(r) { return libIsPapers() ? (r.session || 'General') : (r.chapter || 'General'); }

    function populateLibraryFilters() {
      const base = getLibraryBase();
      const subSel = document.getElementById('libFilterSubject');
      const chSel = document.getElementById('libFilterChapter');
      const subjects = [...new Set(base.map(r => r.subject || 'General'))].sort();
      subSel.innerHTML = '<option value="">All Subjects</option>';
      subjects.forEach(s => { const o = document.createElement('option'); o.value = s; o.textContent = s; subSel.appendChild(o); });
      if (!subjects.includes(libFilter.subject)) libFilter.subject = '';
      subSel.value = libFilter.subject;
      const seconds = [...new Set(base.filter(r => !libFilter.subject || (r.subject || 'General') === libFilter.subject).map(libSecondKey))].sort();
      chSel.innerHTML = `<option value="">${libIsPapers() ? 'All Sessions' : 'All Chapters'}</option>`;
      seconds.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; chSel.appendChild(o); });
      if (!seconds.includes(libFilter.chapter)) libFilter.chapter = '';
      chSel.value = libFilter.chapter;
      const chk = document.getElementById('libShowAll');
      if (chk) chk.checked = !!libFilter.showAll;
    }
    function onLibSubjectChange() {
      libFilter.subject = document.getElementById('libFilterSubject').value;
      libFilter.chapter = '';
      populateLibraryFilters();
      renderLibrary();
    }
    function onLibChapterChange() {
      libFilter.chapter = document.getElementById('libFilterChapter').value;
      renderLibrary();
    }
    function onLibSearch() {
      libFilter.q = document.getElementById('libSearch').value.trim().toLowerCase();
      renderLibrary();
    }
    function setLibType(type) { libFilter.type = type; renderLibrary(); }
    function toggleLibShowAll() {
      libFilter.showAll = document.getElementById('libShowAll').checked;
      populateLibraryFilters();
      renderLibrary();
    }

    function parseScorePct(p) {
      if (!p.attempted || !p.score) return null;
      const s = String(p.score).trim();
      let m = /^(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)$/.exec(s);
      if (m && Number(m[2]) > 0) return Number(m[1]) / Number(m[2]) * 100;
      m = /^(\d+(?:\.\d+)?)\s*%?$/.exec(s);
      if (m) { const v = Number(m[1]); if (/%$/.test(s)) return v; if (Number(p.marks) > 0) return v / Number(p.marks) * 100; }
      return null;
    }
    function sessionKey(s) {
      const str = String(s || '');
      const y = /(\d{4})/.exec(str);
      const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const mi = months.findIndex(m => str.toLowerCase().includes(m));
      return (y ? Number(y[1]) * 100 : 0) + (mi >= 0 ? mi + 1 : 0);
    }

    function renderLibTabsAndChips() {
      const papers = libIsPapers();
      document.getElementById('libTab_res').classList.toggle('on', !papers);
      document.getElementById('libTab_papers').classList.toggle('on', papers);
      document.getElementById('libAddLabel').textContent = papers ? 'Add paper' : 'Add';
      document.getElementById('libSearch').placeholder = papers ? 'Search title, session, note...' : 'Search title, note, chapter...';
      document.getElementById('libFootNote').textContent = papers
        ? 'Save question papers and their answer keys as PDFs (kept on this phone, not in backups) or as links.'
        : 'Videos open in YouTube. PDFs open here and stay on this phone, not inside backups.';
      const n = (AppState.papers || []).length;
      document.getElementById('libPaperBadge').textContent = n ? `(${n})` : '';
      const chips = papers
        ? [['pk', '', 'All', !libFilter.pk], ['pk', 'PYQ', 'PYQ', libFilter.pk === 'PYQ'], ['pk', 'MQP', 'MQP', libFilter.pk === 'MQP'], ['pk', 'MTP', 'MTP', libFilter.pk === 'MTP'], ['notAtt', null, 'Not attempted', libFilter.notAtt]]
        : [['type', '', 'All', !libFilter.type], ['type', 'youtube', 'Videos', libFilter.type === 'youtube'], ['type', 'pdf', 'PDFs', libFilter.type === 'pdf'], ['type', 'link', 'Links', libFilter.type === 'link'], ['starred', null, 'Starred', libFilter.starred], ['pend', null, 'To do', libFilter.pend]];
      document.getElementById('libChips').innerHTML = chips.map(([k, v, label, on]) =>
        `<button type="button" onclick="setLibChip('${k}', ${v === null ? 'null' : "'" + v + "'"})" class="orb-tagchip ${on ? 'on' : ''}">${label}</button>`).join('');
    }

    function renderLibrary() {
      const container = document.getElementById('libraryList');
      container.innerHTML = '';
      renderLibTabsAndChips();
      if (libIsPapers()) { renderPapersList(container); return; }
      const q = libFilter.q || '';
      const list = getLibraryBase().filter(r => {
        if (libFilter.subject && (r.subject || 'General') !== libFilter.subject) return false;
        if (libFilter.chapter && (r.chapter || 'General') !== libFilter.chapter) return false;
        if (libFilter.type && r.type !== libFilter.type) return false;
        if (libFilter.starred && !r.starred) return false;
        if (libFilter.pend && r.done) return false;
        if (q && !((r.title || '').toLowerCase().includes(q) || (r.note || '').toLowerCase().includes(q) || (r.chapter || '').toLowerCase().includes(q) || (r.subject || '').toLowerCase().includes(q))) return false;
        return true;
      });
      const all = AppState.resources || [];
      document.getElementById('libCountLabel').textContent = `${list.length} resource${list.length === 1 ? '' : 's'}`;
      const bytes = all.reduce((a, r) => a + (r.type === 'pdf' ? (r.fileSize || 0) : 0), 0)
        + (AppState.papers || []).reduce((a, p) => a + ((p.q && p.q.fileSize) || 0) + ((p.a && p.a.fileSize) || 0), 0);
      document.getElementById('libStats').innerHTML = all.length ? `<div class="orb-statline">
          <span><b>${all.filter(r => r.type === 'youtube').length}</b> videos</span><span><b>${all.filter(r => r.type === 'pdf').length}</b> PDFs</span><span><b>${all.filter(r => r.type === 'link').length}</b> links</span>
          <span><b>${all.filter(r => r.done).length}</b>/${all.length} done</span>${bytes ? `<span>${formatBytes(bytes)} on phone</span>` : ''}</div>` : '';
      if (list.length === 0) {
        const none = all.length === 0;
        container.innerHTML = `<div class="orb-empty"><div class="e-ico"><i class="ph ph-folder-open"></i></div>
          <div class="e-ttl">${none ? 'Your library is empty' : 'Nothing matches these filters'}</div>
          <div class="e-sub">${none ? 'Save YouTube lectures, PDFs and links here, organised by subject and chapter.' : 'Clear a filter.'}</div>
          ${none ? '<button onclick="openResourceEdit()" class="btn btn-primary btn-sm">Add your first resource</button>' : ''}</div>`;
        return;
      }
      const cmp = libFilter.sort === 'az' ? (a, b) => (a.title || '').localeCompare(b.title || '')
        : libFilter.sort === 'old' ? (a, b) => String(a.addedOn || '').localeCompare(String(b.addedOn || ''))
        : (a, b) => String(b.addedOn || '').localeCompare(String(a.addedOn || ''));
      list.sort(cmp);
      const bySubject = {};
      list.forEach(r => {
        const s = r.subject || 'General', c = r.chapter || 'General';
        ((bySubject[s] = bySubject[s] || {})[c] = bySubject[s][c] || []).push(r);
      });
      const expand = !!(q || libFilter.chapter || libFilter.subject);
      Object.keys(bySubject).sort().forEach(subject => {
        const total = Object.values(bySubject[subject]).reduce((a, b) => a + b.length, 0);
        const sec = document.createElement('div');
        sec.className = 'orb-card overflow-hidden';
        sec.innerHTML = `<div class="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between">
          <span class="font-semibold text-[12.5px] text-slate-800 dark:text-slate-100 truncate pr-2">${escapeHtml(subject)}</span>
          <span class="orb-chip bg-cma-50 text-cma-700 dark:bg-cma-600/15 dark:text-cma-300 shrink-0">${total}</span></div>`;
        Object.keys(bySubject[subject]).sort().forEach(chapter => {
          const items = bySubject[subject][chapter];
          const det = document.createElement('details');
          det.className = 'border-t border-slate-100 dark:border-cma-darkborder';
          det.open = expand || list.length <= 6;
          det.innerHTML = `<summary class="px-3 py-2.5 cursor-pointer flex items-center justify-between text-[12.5px]">
            <span class="font-medium text-slate-700 dark:text-slate-200 pr-2">${escapeHtml(chapter)}</span>
            <span class="text-[11px] text-slate-400 shrink-0">${items.filter(i => i.done).length}/${items.length}</span></summary><div class="px-3 pb-3 space-y-2 lib-rows"></div>`;
          const rows = det.querySelector('.lib-rows');
          items.forEach(r => rows.appendChild(buildResourceRow(r)));
          sec.appendChild(det);
        });
        container.appendChild(sec);
      });
    }

    function toggleResFlag(id, key) {
      const r = (AppState.resources || []).find(x => x.id === id);
      if (!r) return;
      r[key] = !r[key];
      saveState(); renderLibrary();
    }

    /* ---- Papers ---- */
    const PAPER_KIND = {
      PYQ: { label: 'PYQ', full: 'Previous Year Question paper', cls: 'bg-cma-100 text-cma-700 dark:bg-cma-600/20 dark:text-cma-300' },
      MQP: { label: 'MQP', full: 'Model Question Paper', cls: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300' },
      MTP: { label: 'MTP', full: 'Mock Test Paper', cls: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300' }
    };
    let paperDraft = { kind: 'PYQ', q: { src: 'pdf', file: null }, a: { src: 'none', file: null } };

    function renderPapersList(container) {
      const q = libFilter.q || '';
      const all = AppState.papers || [];
      const list = getLibraryBase().filter(p => {
        if (libFilter.subject && (p.subject || 'General') !== libFilter.subject) return false;
        if (libFilter.chapter && (p.session || 'General') !== libFilter.chapter) return false;
        if (libFilter.pk && p.kind !== libFilter.pk) return false;
        if (libFilter.notAtt && p.attempted) return false;
        if (q && !((p.title || '').toLowerCase().includes(q) || (p.note || '').toLowerCase().includes(q) || (p.session || '').toLowerCase().includes(q) || (p.subject || '').toLowerCase().includes(q) || (p.kind || '').toLowerCase().includes(q))) return false;
        return true;
      });
      document.getElementById('libCountLabel').textContent = `${list.length} paper${list.length === 1 ? '' : 's'}`;
      const pcts = all.map(parseScorePct).filter(v => v !== null);
      const avg = pcts.length ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length) : null;
      document.getElementById('libStats').innerHTML = all.length ? `<div class="orb-statline">
          <span><b>${all.filter(p => p.kind === 'PYQ').length}</b> PYQ</span><span><b>${all.filter(p => p.kind === 'MQP').length}</b> MQP</span><span><b>${all.filter(p => p.kind === 'MTP').length}</b> MTP</span>
          <span><b>${all.filter(p => p.attempted).length}</b>/${all.length} attempted</span>${avg !== null ? `<span>avg <b>${avg}%</b></span>` : ''}</div>` : '';
      if (list.length === 0) {
        const none = all.length === 0;
        container.innerHTML = `<div class="orb-empty"><div class="e-ico"><i class="ph ph-file-text"></i></div>
          <div class="e-ttl">${none ? 'No papers saved yet' : 'No papers match these filters'}</div>
          <div class="e-sub">${none ? 'Keep PYQs, model question papers and mock test papers by subject, each with its answer key, ready to attempt.' : 'Clear a filter.'}</div>
          ${none ? '<button onclick="openPaperEdit()" class="btn btn-primary btn-sm">Add your first paper</button>' : ''}</div>`;
        return;
      }
      const cmp = libFilter.sort === 'az' ? (a, b) => (a.title || '').localeCompare(b.title || '')
        : libFilter.sort === 'old' ? (a, b) => sessionKey(a.session) - sessionKey(b.session) || String(a.added || '').localeCompare(String(b.added || ''))
        : (a, b) => sessionKey(b.session) - sessionKey(a.session) || String(b.added || '').localeCompare(String(a.added || ''));
      list.sort(cmp);
      const bySubject = {};
      list.forEach(p => { (bySubject[p.subject || 'General'] = bySubject[p.subject || 'General'] || []).push(p); });
      Object.keys(bySubject).sort().forEach(subject => {
        const items = bySubject[subject];
        const sec = document.createElement('div');
        sec.className = 'orb-card overflow-hidden';
        sec.innerHTML = `<div class="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 flex items-center justify-between">
          <span class="font-semibold text-[12.5px] text-slate-800 dark:text-slate-100 truncate pr-2">${escapeHtml(subject)}</span>
          <span class="text-[11px] text-slate-400 shrink-0">${items.filter(i => i.attempted).length}/${items.length} attempted</span></div><div class="p-3 space-y-2.5 paper-rows"></div>`;
        const rows = sec.querySelector('.paper-rows');
        items.forEach(p => rows.appendChild(buildPaperRow(p)));
        container.appendChild(sec);
      });
    }

    function paperOpenBtn(p, which) {
      const f = p[which];
      const isQ = which === 'q';
      const label = isQ ? 'Question paper' : 'Answer key';
      const icon = isQ ? 'ph-file-text' : 'ph-key';
      if (!f) return `<button type="button" onclick="openPaperEdit('${p.id}')" class="btn btn-tertiary btn-sm !h-9 flex-1 !text-slate-400"><i class="ph ph-plus"></i><span>Add answer key</span></button>`;
      const cls = isQ ? 'btn btn-primary btn-sm flex-1' : 'btn btn-secondary btn-sm flex-1';
      if (f.type === 'pdf') return `<button type="button" onclick="openPdfResource('pp_${p.id}_${which}')" class="${cls}"><i class="ph ${icon} text-[15px]"></i><span>${label}</span></button>`;
      return `<a href="${escapeHtml(f.url)}" target="_blank" rel="noopener noreferrer" class="${cls}"><i class="ph ${icon} text-[15px]"></i><span>${label}</span><i class="ph ph-arrow-up-right text-[12px] opacity-70"></i></a>`;
    }

    function buildPaperRow(p) {
      const kind = PAPER_KIND[p.kind] || PAPER_KIND.PYQ;
      const pct = parseScorePct(p);
      const row = document.createElement('div');
      row.className = 'orb-paper';
      row.innerHTML = `
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="orb-chip ${kind.cls}">${kind.label}</span>
              ${p.session ? `<span class="orb-chip bg-slate-100 text-slate-600 dark:bg-slate-700/60 dark:text-slate-300">${escapeHtml(p.session)}</span>` : ''}
              ${p.attempted ? `<span class="orb-chip bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"><i class="ph-fill ph-check-circle"></i>${p.score ? escapeHtml(p.score) + (pct !== null && !/%|\//.test(p.score) ? '' : '') : 'Attempted'}${pct !== null ? ` · ${Math.round(pct)}%` : ''}</span>` : ''}
            </div>
            <div class="text-[13.5px] font-semibold tracking-tight text-slate-900 dark:text-slate-100 mt-1.5 leading-snug">${escapeHtml(p.title)}</div>
            ${p.marks || p.note ? `<div class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">${[p.marks ? p.marks + ' marks' : '', p.note].filter(Boolean).map(escapeHtml).join(' · ')}</div>` : ''}
          </div>
          <div class="flex items-center shrink-0 -mr-1">
            <button onclick="togglePaperAttempted('${p.id}')" class="orb-ib ${p.attempted ? 'text-emerald-600 dark:text-emerald-400' : ''}" title="${p.attempted ? 'Mark not attempted' : 'Mark attempted'}"><i class="${p.attempted ? 'ph-fill ph-check-circle' : 'ph ph-check-circle'}"></i></button>
            <button onclick="openPaperEdit('${p.id}')" class="orb-ib" title="Edit"><i class="ph ph-pencil-simple"></i></button>
            <button onclick="deletePaper('${p.id}')" class="orb-ib hover:!text-rose-500" title="Delete"><i class="ph ph-trash"></i></button>
          </div>
        </div>
        <div class="flex items-center gap-2 mt-2.5">${paperOpenBtn(p, 'q')}${paperOpenBtn(p, 'a')}</div>`;
      return row;
    }

    function togglePaperAttempted(id) {
      const p = (AppState.papers || []).find(x => x.id === id);
      if (!p) return;
      p.attempted = !p.attempted;
      if (!p.attempted) p.score = '';
      saveState(); renderLibrary();
    }

    function setPaperKind(k) {
      paperDraft.kind = k;
      document.querySelectorAll('#paperKindSeg button').forEach(b => b.classList.toggle('on', b.dataset.k === k));
      document.getElementById('paperKindHint').textContent = PAPER_KIND[k].full;
    }
    function setPaperSrc(which, src) {
      paperDraft[which].src = src;
      const seg = document.getElementById(which === 'q' ? 'paperQSeg' : 'paperASeg');
      seg.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.s === src));
      const P = which.toUpperCase();
      document.getElementById('paper' + P + 'File').classList.toggle('hidden', src !== 'pdf');
      document.getElementById('paper' + P + 'Link').classList.toggle('hidden', src !== 'link');
    }
    function onPaperFile(e, which) {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (!/\.pdf$/i.test(f.name) && f.type !== 'application/pdf') { showToast('Please choose a PDF file.'); e.target.value = ''; return; }
      paperDraft[which].file = f;
      document.getElementById('paper' + which.toUpperCase() + 'FileName').textContent = `${f.name} • ${formatBytes(f.size)}`;
      const t = document.getElementById('paperTitleInput');
      if (which === 'q' && !t.value.trim()) t.value = f.name.replace(/\.pdf$/i, '').replace(/_+/g, ' ');
    }

    function fillPaperSubjectOptions(selected) {
      const sel = document.getElementById('paperSubjectSelect');
      sel.innerHTML = '';
      const scoped = new Set(getScopedPapers().map(p => p.id));
      allPapersList().sort((a, b) => (scoped.has(b.paper.id) ? 1 : 0) - (scoped.has(a.paper.id) ? 1 : 0)).forEach(x => {
        const o = document.createElement('option'); o.value = x.paper.name; o.textContent = `${x.paper.code}: ${x.paper.name}`; sel.appendChild(o);
      });
      const g = document.createElement('option'); g.value = 'General'; g.textContent = 'General (no subject)'; sel.appendChild(g);
      if (selected && ![...sel.options].some(o => o.value === selected)) { const o = document.createElement('option'); o.value = selected; o.textContent = selected; sel.appendChild(o); }
      sel.value = selected || (getScopedPapers()[0] ? getScopedPapers()[0].name : 'General');
    }

    function openPaperEdit(id) {
      const p = id ? (AppState.papers || []).find(x => x.id === id) : null;
      paperDraft = { kind: p ? p.kind : (libFilter.pk || 'PYQ'), q: { src: p ? p.q.type : 'pdf', file: null }, a: { src: p && p.a ? p.a.type : 'none', file: null } };
      document.getElementById('paperEditId').value = p ? p.id : '';
      document.getElementById('paperEditTitle').textContent = p ? 'Edit Paper' : 'Add Paper';
      document.getElementById('paperSaveBtn').textContent = p ? 'Save Changes' : 'Save Paper';
      setPaperKind(paperDraft.kind);
      setPaperSrc('q', paperDraft.q.src);
      setPaperSrc('a', paperDraft.a.src);
      fillPaperSubjectOptions(p ? p.subject : (libFilter.subject || ''));
      document.getElementById('paperTitleInput').value = p ? p.title : '';
      document.getElementById('paperSessionInput').value = p ? (p.session || '') : (libFilter.chapter || '');
      document.getElementById('paperMarksInput').value = p && p.marks ? p.marks : '';
      document.getElementById('paperQUrl').value = p && p.q.type === 'link' ? p.q.url : '';
      document.getElementById('paperAUrl').value = p && p.a && p.a.type === 'link' ? p.a.url : '';
      document.getElementById('paperQFileInput').value = ''; document.getElementById('paperAFileInput').value = '';
      document.getElementById('paperQFileName').textContent = p && p.q.type === 'pdf' ? `${p.q.fileName || 'PDF'} (tap to replace)` : 'Tap to choose the question paper PDF';
      document.getElementById('paperAFileName').textContent = p && p.a && p.a.type === 'pdf' ? `${p.a.fileName || 'PDF'} (tap to replace)` : 'Tap to choose the answer key PDF';
      document.getElementById('paperAttempted').checked = !!(p && p.attempted);
      const sc = document.getElementById('paperScoreInput'); sc.value = p ? (p.score || '') : ''; sc.disabled = !(p && p.attempted);
      document.getElementById('paperNoteInput').value = p ? (p.note || '') : '';
      const dl = document.getElementById('paperSessionList'); dl.innerHTML = '';
      [...new Set((AppState.papers || []).map(x => x.session).filter(Boolean))].forEach(s => { const o = document.createElement('option'); o.value = s; dl.appendChild(o); });
      document.getElementById('paperEditModal').classList.remove('hidden');
    }
    function closePaperEdit() { document.getElementById('paperEditModal').classList.add('hidden'); }

    async function savePaper() {
      const id = document.getElementById('paperEditId').value;
      const existing = id ? AppState.papers.find(p => p.id === id) : null;
      const rec = existing || { id: 'pap' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), added: new Date().toISOString() };
      const session = document.getElementById('paperSessionInput').value.trim();
      let title = document.getElementById('paperTitleInput').value.trim();

      // build one file/link slot ('q' or 'a'); returns the slot, null (none) or false (invalid)
      async function slot(which) {
        const d = paperDraft[which], prev = existing ? existing[which] : null, fid = `pp_${rec.id}_${which}`;
        if (d.src === 'none') { if (prev && prev.type === 'pdf') { try { await fileDelete(fid); await annotDelete(fid); } catch (e) {} } return null; }
        if (d.src === 'pdf') {
          if (!d.file && !(prev && prev.type === 'pdf')) { showToast(`Choose the ${which === 'q' ? 'question paper' : 'answer key'} PDF first.`); return false; }
          if (d.file) {
            try { await filePut(fid, d.file); } catch (err) { console.error(err); showToast('Could not store this PDF on the device.'); return false; }
            return { type: 'pdf', url: '', fileName: d.file.name, fileSize: d.file.size, lastPage: 1 };
          }
          return prev;
        }
        const url = normalizeUrl(document.getElementById('paper' + which.toUpperCase() + 'Url').value);
        if (!url) { showToast(`Enter a valid ${which === 'q' ? 'question paper' : 'answer key'} link (https://...)`); return false; }
        if (prev && prev.type === 'pdf') { try { await fileDelete(fid); await annotDelete(fid); } catch (e) {} }
        return { type: 'link', url };
      }
      const q = await slot('q'); if (q === false) return;
      const a = await slot('a'); if (a === false) return;
      if (!title) title = `${paperDraft.kind}${session ? ' ' + session : ''}`;
      const attempted = document.getElementById('paperAttempted').checked;
      Object.assign(rec, {
        kind: paperDraft.kind, subject: document.getElementById('paperSubjectSelect').value || 'General', title, session,
        marks: Number(document.getElementById('paperMarksInput').value) || 0, q, a,
        note: document.getElementById('paperNoteInput').value.trim(), attempted, score: attempted ? document.getElementById('paperScoreInput').value.trim() : ''
      });
      if (!existing) AppState.papers.unshift(rec);
      saveState();
      closePaperEdit();
      libFilter.subject = ''; libFilter.chapter = '';
      populateLibraryFilters();
      renderLibrary();
      showToast(existing ? 'Paper updated.' : `${rec.kind} saved to your library!`);
    }

    function deletePaper(id) {
      const p = (AppState.papers || []).find(x => x.id === id);
      if (!p) return;
      askConfirm('Remove paper?', `"${p.title}" and its stored files will be removed.`, 'Remove', async () => {
        AppState.papers = AppState.papers.filter(x => x.id !== id);
        for (const w of ['q', 'a']) { if (p[w] && p[w].type === 'pdf') { try { await fileDelete(`pp_${id}_${w}`); } catch (e) {} try { await annotDelete(`pp_${id}_${w}`); } catch (e) {} } }
        saveState(); populateLibraryFilters(); renderLibrary(); showToast('Removed.');
      });
    }

    /* the PDF viewer works on "records" with a title and a remembered page; resources and paper files both qualify */
    function pdfRec(id) {
      const r = (AppState.resources || []).find(x => x.id === id);
      if (r) return r;
      const m = /^pp_(.+)_(q|a)$/.exec(String(id));
      if (!m) return null;
      const p = (AppState.papers || []).find(x => x.id === m[1]);
      const f = p && p[m[2]];
      if (!f) return null;
      return { id, type: 'pdf', title: `${p.title} (${m[2] === 'q' ? 'Question paper' : 'Answer key'})`, fileName: f.fileName,
        get lastPage() { return f.lastPage || 1; }, set lastPage(v) { f.lastPage = v; } };
    }

    function buildResourceRow(r) {
      const row = document.createElement('div');
      row.className = 'flex items-stretch gap-2.5 p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-cma-darkborder';
      let thumb;
      if (r.type === 'youtube' && r.videoId) {
        thumb = `<div class="relative w-24 h-14 shrink-0 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-700">
          <img src="https://img.youtube.com/vi/${escapeHtml(r.videoId)}/mqdefault.jpg" alt="" class="w-full h-full object-cover" onerror="this.style.display='none'">
          <span class="absolute inset-0 flex items-center justify-center"><i class="ph-fill ph-play-circle text-white text-2xl drop-shadow"></i></span></div>`;
      } else {
        thumb = `<div class="w-14 h-14 shrink-0 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-3xl"><i class="ph-bold ${resTypeIcon(r.type)}"></i></div>`;
      }
      const meta = [r.type === 'youtube' ? 'YouTube' : (r.type === 'pdf' ? ('PDF' + (r.fileSize ? ' • ' + formatBytes(r.fileSize) : '') + (r.lastPage > 1 ? ' • page ' + r.lastPage : '')) : 'Link'), (r.addedOn || '').slice(0, 10)].filter(Boolean).join(' • ');
      const body = `<div class="min-w-0 flex-1 py-0.5">
          <div class="text-xs font-bold text-slate-800 dark:text-slate-100 leading-snug line-clamp-2">${escapeHtml(r.title)}</div>
          <div class="text-[10px] text-slate-400 mt-0.5">${escapeHtml(meta)}</div>
          ${r.note ? `<div class="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">${escapeHtml(r.note)}</div>` : ''}</div>`;
      let main;
      if (r.type === 'pdf') {
        main = document.createElement('button');
        main.type = 'button';
        main.className = 'flex items-stretch gap-2.5 flex-1 min-w-0 text-left';
        main.onclick = () => openPdfResource(r.id);
      } else {
        main = document.createElement('a');
        main.className = 'flex items-stretch gap-2.5 flex-1 min-w-0';
        main.href = r.url;
        main.target = '_blank';
        main.rel = 'noopener noreferrer';
      }
      main.innerHTML = thumb + body;
      row.appendChild(main);
      const actions = document.createElement('div');
      actions.className = 'grid grid-cols-2 content-between shrink-0';
      actions.innerHTML = `<button class="orb-ib ${r.starred ? '!text-amber-500' : ''}" title="Star"><i class="${r.starred ? 'ph-fill' : 'ph'} ph-star"></i></button>
        <button class="orb-ib ${r.done ? '!text-emerald-600' : ''}" title="${r.done ? 'Mark as to do' : 'Mark as done'}"><i class="${r.done ? 'ph-fill ph-check-circle' : 'ph ph-check-circle'}"></i></button>
        <button class="orb-ib" title="Edit"><i class="ph ph-pencil-simple"></i></button>
        <button class="orb-ib hover:!text-rose-500" title="Delete"><i class="ph ph-trash"></i></button>`;
      const [bStar, bDone, bEdit, bDel] = actions.querySelectorAll('button');
      bStar.onclick = () => toggleResFlag(r.id, 'starred');
      bDone.onclick = () => toggleResFlag(r.id, 'done');
      bEdit.onclick = () => openResourceEdit(r.id);
      bDel.onclick = () => deleteResource(r.id);
      if (r.done) row.classList.add('opacity-60');
      row.appendChild(actions);
      return row;
    }

    /* ---- Add / edit ---- */
    function setResType(type) {
      resEditType = type;
      ['youtube', 'pdf', 'link'].forEach(t => {
        const b = document.getElementById('resType_' + t);
        if (b) b.className = `flex-1 py-1.5 rounded-lg text-xs font-bold ${t === type ? 'bg-white dark:bg-cma-darkcard text-cma-700 dark:text-cma-300 shadow-sm' : 'text-slate-500'}`;
      });
      document.getElementById('resUrlGroup').classList.toggle('hidden', type === 'pdf');
      document.getElementById('resFileGroup').classList.toggle('hidden', type !== 'pdf');
      document.getElementById('resUrlInput').placeholder = type === 'youtube' ? 'Paste YouTube link (video or playlist)' : 'https://...';
    }

    function fillResSubjectOptions(selected) {
      const sel = document.getElementById('resSubjectSelect');
      sel.innerHTML = '';
      const scoped = new Set(getScopedPapers().map(p => p.id));
      const papers = allPapersList().sort((a, b) => (scoped.has(b.paper.id) ? 1 : 0) - (scoped.has(a.paper.id) ? 1 : 0));
      papers.forEach(x => {
        const o = document.createElement('option');
        o.value = x.paper.name; o.textContent = `${x.paper.code}: ${x.paper.name}`;
        sel.appendChild(o);
      });
      const g = document.createElement('option'); g.value = 'General'; g.textContent = 'General (no subject)'; sel.appendChild(g);
      if (selected && ![...sel.options].some(o => o.value === selected)) {
        const o = document.createElement('option'); o.value = selected; o.textContent = selected; sel.appendChild(o);
      }
      sel.value = selected || (getScopedPapers()[0] ? getScopedPapers()[0].name : 'General');
      refreshResChapterList();
    }
    function refreshResChapterList() {
      const dl = document.getElementById('resChapterList');
      dl.innerHTML = '';
      getChaptersForSubject(document.getElementById('resSubjectSelect').value).forEach(c => {
        const o = document.createElement('option'); o.value = c; dl.appendChild(o);
      });
    }

    function openResourceEdit(id) {
      resPendingFile = null;
      const r = id ? (AppState.resources || []).find(x => x.id === id) : null;
      document.getElementById('resEditId').value = r ? r.id : '';
      document.getElementById('resEditTitle').textContent = r ? 'Edit Resource' : 'Add Resource';
      document.getElementById('resSaveBtn').textContent = r ? 'Save Changes' : 'Save to Library';
      setResType(r ? r.type : 'youtube');
      document.getElementById('resUrlInput').value = r && r.type !== 'pdf' ? r.url : '';
      document.getElementById('resTitleInput').value = r ? r.title : '';
      document.getElementById('resChapterInput').value = r ? (r.chapter || '') : (libFilter.chapter || '');
      document.getElementById('resNoteInput').value = r ? (r.note || '') : '';
      document.getElementById('resFileInput').value = '';
      document.getElementById('resFileName').textContent = r && r.type === 'pdf' ? `${r.fileName || 'PDF'} (tap to replace)` : 'Tap to choose a PDF from your phone';
      fillResSubjectOptions(r ? r.subject : (libFilter.subject || ''));
      if (!r && libFilter.chapter) document.getElementById('resChapterInput').value = libFilter.chapter;
      document.getElementById('resEditModal').classList.remove('hidden');
    }
    function closeResourceEdit() { document.getElementById('resEditModal').classList.add('hidden'); resPendingFile = null; }

    function onResFilePicked(e) {
      const f = e.target.files && e.target.files[0];
      if (!f) return;
      if (!/\.pdf$/i.test(f.name) && f.type !== 'application/pdf') { showToast('Please choose a PDF file.'); e.target.value = ''; return; }
      resPendingFile = f;
      document.getElementById('resFileName').textContent = `${f.name} • ${formatBytes(f.size)}`;
      const t = document.getElementById('resTitleInput');
      if (!t.value.trim()) t.value = f.name.replace(/\.pdf$/i, '').replace(/[_]+/g, ' ');
    }

    async function onResUrlBlur() {
      const t = document.getElementById('resTitleInput');
      const url = document.getElementById('resUrlInput').value;
      if (resEditType !== 'youtube' || t.value.trim() || !parseYouTube(url)) return;
      try {
        const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
        const timer = ctl ? setTimeout(() => ctl.abort(), 5000) : null;
        const resp = await fetch('https://www.youtube.com/oembed?format=json&url=' + encodeURIComponent(normalizeUrl(url)), ctl ? { signal: ctl.signal } : {});
        if (timer) clearTimeout(timer);
        const data = await resp.json();
        if (data && data.title && !t.value.trim()) t.value = data.title;
      } catch (err) { /* offline or blocked - user can type the title */ }
    }

    async function saveResource() {
      const id = document.getElementById('resEditId').value;
      const existing = id ? AppState.resources.find(r => r.id === id) : null;
      const subject = document.getElementById('resSubjectSelect').value || 'General';
      const chapter = document.getElementById('resChapterInput').value.trim() || 'General';
      const note = document.getElementById('resNoteInput').value.trim();
      let title = document.getElementById('resTitleInput').value.trim();
      const rec = existing || { id: 'res_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), addedOn: new Date().toISOString() };
      rec.type = resEditType; rec.subject = subject; rec.chapter = chapter; rec.note = note;

      if (resEditType === 'pdf') {
        if (!resPendingFile && !(existing && existing.type === 'pdf')) { showToast('Choose a PDF file first.'); return; }
        if (resPendingFile) {
          try { await filePut(rec.id, resPendingFile); }
          catch (err) { console.error(err); showToast('Could not store this PDF on the device.'); return; }
          rec.fileName = resPendingFile.name; rec.fileSize = resPendingFile.size; rec.lastPage = 1;
        }
        rec.url = '';
        if (!title) title = (rec.fileName || 'PDF').replace(/\.pdf$/i, '').replace(/_+/g, ' ');
      } else {
        const url = normalizeUrl(document.getElementById('resUrlInput').value);
        if (!url) { showToast('Enter a valid link (https://...)'); return; }
        rec.url = url;
        if (resEditType === 'youtube') {
          const yt = parseYouTube(url);
          if (!yt) { showToast('That does not look like a YouTube link.'); return; }
          rec.videoId = yt.videoId; rec.playlistId = yt.playlistId;
          if (!title) title = 'YouTube lecture';
        } else {
          delete rec.videoId; delete rec.playlistId;
          if (!title) { try { title = new URL(url).hostname; } catch (e) { title = 'Link'; } }
        }
      }
      rec.title = title;
      if (!existing) AppState.resources.unshift(rec);
      saveState();
      closeResourceEdit();
      libFilter.subject = ''; libFilter.chapter = '';
      populateLibraryFilters();
      renderLibrary();
      renderHomeTab();
      renderStudyTab();
      showToast(existing ? 'Resource updated.' : 'Saved to your library!');
    }

    function deleteResource(id) {
      const r = AppState.resources.find(x => x.id === id);
      if (!r) return;
      askConfirm('Remove from library?', `"${r.title}"${r.type === 'pdf' ? ' and its stored file' : ''} will be removed.`, 'Remove', async () => {
        AppState.resources = AppState.resources.filter(x => x.id !== id);
        if (r.type === 'pdf') { try { await fileDelete(id); } catch (e) {} try { await annotDelete(id); } catch (e) {} }
        saveState();
        populateLibraryFilters();
        renderLibrary();
        renderHomeTab();
        renderStudyTab();
        showToast('Removed.');
      });
    }

    /* ---- In-app PDF viewer (pdf.js) ---- */

    function blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(String(fr.result).split(',')[1] || '');
        fr.onerror = () => reject(fr.error);
        fr.readAsDataURL(blob);
      });
    }

    async function getPdfBlob(id) {
      let blob = null;
      try { blob = await fileGet(id); } catch (e) { console.error(e); }
      return blob || null;
    }

    /* =========================================================================
       PDF VIEWER (redesigned): continuous scroll, highlighter, eraser, undo/redo,
       highlights are saved per PDF on this device
       ========================================================================= */
    const PDF_COLORS = [['#FFD60A', 'Yellow'], ['#34D399', 'Green'], ['#F472B6', 'Pink'], ['#60A5FA', 'Blue'], ['#FB923C', 'Orange']];   // starting "recent" colours
    const PDF_PALETTE = [['#FFD60A', 'Yellow'], ['#FDE68A', 'Light yellow'], ['#A3E635', 'Lime'], ['#34D399', 'Green'], ['#14B8A6', 'Teal'], ['#22D3EE', 'Cyan'],
      ['#60A5FA', 'Blue'], ['#818CF8', 'Indigo'], ['#A78BFA', 'Purple'], ['#F472B6', 'Pink'], ['#FB7185', 'Rose'], ['#EF4444', 'Red'],
      ['#FB923C', 'Orange'], ['#A16207', 'Brown'], ['#111111', 'Black'], ['#6B7280', 'Grey'], ['#FFFFFF', 'White']];
    const PDF_WIDTHS = [['S', 0.011], ['M', 0.018], ['L', 0.028]];
    const PDF_TSIZES = [['S', 0.022], ['M', 0.032], ['L', 0.046]];
    const PDF_GAP = 10, PDF_PAD_TOP = 10, PDF_ERASER_R = 0.03, PDF_MIN_ZOOM = 0.6, PDF_MAX_ZOOM = 4;
    const pdfView = {
      doc: null, resId: null, numPages: 0, zoom: 1, fitW: 360, pages: [], cur: 1, token: 0,
      tool: 'hand', color: '#FFD60A', width: 0.018, paletteOpen: false,
      annots: {}, undo: [], redo: [], dirty: false, saveTimer: null, saveText: '',
      firstW: 1, firstH: 1.414, io: null, scrollRaf: 0, redrawRaf: {}, pointers: new Map(),
      drawing: null, pan: null, wired: false, lastSavedPage: 0, pageTimer: null,
      orient: 'v', reading: false, filter: 'none', straight: false, fitH: 600, padX: 12,
      hudTimer: null, resizeTimer: null, tap: null, seekUntil: 0, lastW: 0, lastH: 0,
      tcolor: '#111111', tsize: 0.032, ecolor: '#111111', esize: 0.032, recent: PDF_COLORS.map(c => c[0]),
      focus: false, trayOpen: false, menuOpen: false, textIdx: {}, pinch: null, editing: null, relaying: false, busy: false, sheetGuard: 0,
      search: { open: false, q: '', matches: [], byPage: {}, idx: -1, token: 0, done: true, noText: false, timer: null }
    };
    const PDF_FILTERS = [['none', 'Normal', 'ph-circle-half'], ['sepia', 'Sepia', 'ph-sun-horizon'], ['night', 'Night', 'ph-moon-stars']];

    /* ---- viewer preferences (layout, page tone, line mode, colours) are remembered on this device ---- */
    function pdfLoadPrefs() {
      try {
        const o = JSON.parse(localStorage.getItem('orbitPdfPrefs') || '{}');
        if (o.orient === 'h' || o.orient === 'v') pdfView.orient = o.orient;
        if (PDF_FILTERS.some(f => f[0] === o.filter)) pdfView.filter = o.filter;
        if (typeof o.straight === 'boolean') pdfView.straight = o.straight;
        if (typeof o.focus === 'boolean') pdfView.focus = o.focus;
        const hex = /^#[0-9A-Fa-f]{6}$/;
        if (Array.isArray(o.recent)) { const r = o.recent.filter(c => typeof c === 'string' && hex.test(c)).map(c => c.toUpperCase()).slice(0, 8); if (r.length) pdfView.recent = r; }
        if (typeof o.tcolor === 'string' && hex.test(o.tcolor)) pdfView.tcolor = o.tcolor.toUpperCase();
        if (typeof o.color === 'string' && hex.test(o.color)) pdfView.color = o.color.toUpperCase();
        if (PDF_TSIZES.some(t => t[1] === o.tsize)) pdfView.tsize = o.tsize;
      } catch (e) {}
    }
    function pdfSavePrefs() {
      try { localStorage.setItem('orbitPdfPrefs', JSON.stringify({ orient: pdfView.orient, filter: pdfView.filter, straight: pdfView.straight, focus: pdfView.focus, recent: pdfView.recent, tcolor: pdfView.tcolor, color: pdfView.color, tsize: pdfView.tsize })); } catch (e) {}
    }

    /* ---- pure geometry helpers (page coordinates are 0..1; y is scaled by page aspect ah) ---- */
    function pdfSegDist(px, py, ax, ay, bx, by) {
      const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
      if (l2 === 0) return Math.hypot(px - ax, py - ay);
      let t = ((px - ax) * dx + (py - ay) * dy) / l2;
      t = Math.max(0, Math.min(1, t));
      return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
    }
    function pdfStrokeHit(stroke, x, y, r, ah) {
      if (stroke.k === 't') {
        const b = stroke._bb;
        if (!b) return false;
        return x >= b.x - r && x <= b.x + b.w + r && y * ah >= b.y * ah - r && y * ah <= (b.y + b.h) * ah + r;
      }
      const p = stroke.p, rad = r + stroke.w / 2;
      if (p.length < 4) return Math.hypot(x - p[0], (y - p[1]) * ah) <= rad;
      for (let i = 0; i + 3 < p.length; i += 2) {
        if (pdfSegDist(x, y * ah, p[i], p[i + 1] * ah, p[i + 2], p[i + 3] * ah) <= rad) return true;
      }
      return false;
    }
    function pdfSimplify(flat, eps, ah) {
      const n = flat.length / 2;
      if (n <= 2) return flat.slice();
      const pts = [];
      for (let i = 0; i < n; i++) pts.push([flat[i * 2], flat[i * 2 + 1] * ah]);
      const keep = new Array(n).fill(false);
      keep[0] = keep[n - 1] = true;
      const stack = [[0, n - 1]];
      while (stack.length) {
        const [a, b] = stack.pop();
        let maxD = 0, idx = -1;
        for (let i = a + 1; i < b; i++) {
          const d = pdfSegDist(pts[i][0], pts[i][1], pts[a][0], pts[a][1], pts[b][0], pts[b][1]);
          if (d > maxD) { maxD = d; idx = i; }
        }
        if (maxD > eps && idx > -1) { keep[idx] = true; stack.push([a, idx], [idx, b]); }
      }
      const out = [];
      for (let i = 0; i < n; i++) if (keep[i]) out.push(flat[i * 2], flat[i * 2 + 1]);
      return out;
    }

    /* ---- open / close ---- */
    async function openPdfResource(id) {
      const r = pdfRec(id);
      if (!r) return;
      const blob = await getPdfBlob(id);
      if (!blob) {
        showToast('This PDF is not stored on this device (for example after a restore). Please re-attach it.');
        const pm = /^pp_(.+)_(q|a)$/.exec(String(id));
        if (pm) openPaperEdit(pm[1]); else openResourceEdit(id);
        return;
      }
      const ready = await ensurePdfJs();
      if (!ready) {
        showToast('PDF viewer needs internet once to load. Opening in another app instead...');
        openPdfExternally(id);
        return;
      }
      pdfView.token++;
      Object.assign(pdfView, { resId: id, zoom: 1, tool: 'hand', paletteOpen: false, annots: {}, undo: [], redo: [], dirty: false, cur: 1, saveText: '', reading: false, tap: null, textIdx: {}, pinch: null, editing: null, trayOpen: false, menuOpen: false, busy: false });
      pdfLoadPrefs();
      const modalEl = document.getElementById('pdfViewerModal');
      modalEl.classList.remove('pdf-reading');
      modalEl.classList.toggle('pdf-focus', !!pdfView.focus);
      modalEl.dataset.pf = pdfView.filter;
      document.getElementById('pdfViewerTitle').textContent = r.title;
      document.getElementById('pdfPageInfo').textContent = 'Opening...';
      document.getElementById('pdfPages').innerHTML = '';
      document.getElementById('pdfViewerModal').classList.remove('hidden');
      pdfWireEvents();
      pdfSearchReset(); pdfCloseTextSheet(); pdfToggleMenu(false);
      pdfUpdateToolbar();
      try {
        const buf = await blob.arrayBuffer();
        pdfView.doc = await pdfjsLib.getDocument({ data: buf }).promise;
        pdfView.numPages = pdfView.doc.numPages;
        try { const saved = await annotGet(id); if (saved && saved.pages) pdfView.annots = saved.pages; } catch (e) {}
        const p1 = await pdfView.doc.getPage(1);
        const vp = p1.getViewport({ scale: 1 });
        pdfView.firstW = vp.width; pdfView.firstH = vp.height;
        pdfBuildPages();
        pdfObserve();
        pdfGoTo(Math.min(Math.max(1, r.lastPage || 1), pdfView.numPages), false);
        pdfSetCurrent(Math.min(Math.max(1, r.lastPage || 1), pdfView.numPages));
      } catch (err) {
        console.error('PDF open error', err);
        closePdfViewer();
        showToast('Could not display this PDF. Trying another app...');
        openPdfExternally(id);
      }
    }

    async function closePdfViewer() {
      document.getElementById('pdfViewerModal').classList.add('hidden');
      document.getElementById('pdfViewerModal').classList.remove('pdf-reading');
      pdfView.reading = false; pdfView.tap = null;
      pdfCloseTextSheet(); pdfToggleMenu(false); pdfSearchReset(); pdfView.textIdx = {}; pdfView.pinch = null;
      { const pe = document.getElementById('pdfPages'); if (pe) { pe.style.transform = ''; pe.style.willChange = ''; } }
      if (pdfView.hudTimer) { clearTimeout(pdfView.hudTimer); pdfView.hudTimer = null; }
      pdfView.token++;
      if (pdfView.io) { try { pdfView.io.disconnect(); } catch (e) {} pdfView.io = null; }
      pdfView.pages.forEach((p, i) => pdfReleasePage(i + 1));
      await pdfFlushAnnots();
      try { if (pdfView.doc && pdfView.doc.destroy) pdfView.doc.destroy(); } catch (e) {}
      pdfView.doc = null; pdfView.pages = []; pdfView.pointers.clear(); pdfView.drawing = null; pdfView.pan = null;
      document.getElementById('pdfPages').innerHTML = '';
      renderLibrary();
    }

    /* ---- layout ---- */
    /* page size for the current layout: vertical = fit width, horizontal = fit whole page in the window */
    function pdfPageSize(ah) {
      if (pdfView.orient === 'h') {
        const h = Math.min(pdfView.fitH, pdfView.fitW * ah) * pdfView.zoom;
        return { w: h / ah, h };
      }
      const w = pdfView.fitW * pdfView.zoom;
      return { w, h: w * ah };
    }
    function pdfMeasure() {
      const sc = document.getElementById('pdfScroller');
      pdfView.fitW = Math.max(200, (sc.clientWidth || 360) - 16);
      pdfView.fitH = Math.max(200, (sc.clientHeight || 600) - (pdfView.reading ? 36 : 24));
      pdfView.lastW = sc.clientWidth; pdfView.lastH = sc.clientHeight;
    }
    function pdfApplyOrient() {
      const box = document.getElementById('pdfPages');
      const sc = document.getElementById('pdfScroller');
      if (!box || !sc) return;
      const h = pdfView.orient === 'h';
      if (h) {
        box.style.cssText = `display:flex;flex-direction:row;align-items:stretch;gap:${PDF_GAP}px;width:max-content;min-width:100%;min-height:${sc.clientHeight}px;padding:0 ${pdfView.padX}px`;
      } else {
        box.style.cssText = 'display:flex;flex-direction:column;align-items:center;min-width:100%;width:max-content;padding:10px 0 150px';
      }
      pdfView.pages.forEach(pg => {
        pg.wrap.style.margin = h ? 'auto 0' : '';
        pg.wrap.classList.toggle('pdf-pagebox', h);
      });
    }
    function pdfRecalcTops() {
      const pages = pdfView.pages;
      if (pdfView.orient === 'h') {
        const sc = document.getElementById('pdfScroller');
        const first = pages[0];
        pdfView.padX = first ? Math.max(12, Math.round(((sc.clientWidth || 360) - first.w) / 2)) : 12;
        const box = document.getElementById('pdfPages');
        if (box) { box.style.paddingLeft = pdfView.padX + 'px'; box.style.paddingRight = pdfView.padX + 'px'; }
        let x = pdfView.padX;
        pages.forEach(pg => { pg.left = x; pg.top = 0; x += pg.w + PDF_GAP; });
      } else {
        let y = PDF_PAD_TOP;
        pages.forEach(pg => { pg.top = y; pg.left = 0; y += pg.h + PDF_GAP; });
      }
    }
    function pdfApplySize(pg) {
      pg.wrap.style.width = Math.round(pg.w) + 'px';
      pg.wrap.style.height = Math.round(pg.h) + 'px';
    }
    function pdfBuildPages() {
      const box = document.getElementById('pdfPages');
      box.innerHTML = '';
      pdfView.pages = [];
      pdfMeasure();
      const ah = pdfView.firstH / pdfView.firstW;
      const sz = pdfPageSize(ah);
      for (let i = 1; i <= pdfView.numPages; i++) {
        const wrap = document.createElement('div');
        wrap.className = 'pdf-page';
        wrap.dataset.pg = String(i);
        const canvas = document.createElement('canvas'); canvas.className = 'pdf-canvas';
        const overlay = document.createElement('canvas'); overlay.className = 'pdf-overlay';
        const ink = document.createElement('canvas'); ink.className = 'pdf-ink';
        wrap.appendChild(canvas); wrap.appendChild(overlay); wrap.appendChild(ink);
        const pg = { wrap, canvas, overlay, ink, w: sz.w, h: sz.h, ah, top: 0, left: 0, rendered: false, rendering: false, task: null };
        pdfApplySize(pg);
        box.appendChild(wrap);
        pdfView.pages.push(pg);
      }
      pdfApplyOrient();
      pdfRecalcTops();
    }

    /* ---- lazy page rendering ---- */
    async function pdfRenderPage(i) {
      const pg = pdfView.pages[i - 1];
      if (!pg || pg.rendered || pg.rendering || !pdfView.doc) return;
      pg.rendering = true;
      const token = pdfView.token, doc = pdfView.doc;
      try {
        const page = await doc.getPage(i);
        if (token !== pdfView.token) return;
        const base = page.getViewport({ scale: 1 });
        pg.ah = base.height / base.width;
        const sz = pdfPageSize(pg.ah), cssW = sz.w, cssH = sz.h;
        if (Math.abs(pg.h - cssH) > 1 || Math.abs(pg.w - cssW) > 1) { pg.w = cssW; pg.h = cssH; pdfApplySize(pg); pdfRecalcTops(); }
        const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        let scale = cssW / base.width * dpr;
        const px = base.width * scale * base.height * scale;
        if (px > 14e6) scale *= Math.sqrt(14e6 / px);
        const vp = page.getViewport({ scale });
        const c = pg.canvas;
        c.width = Math.floor(vp.width); c.height = Math.floor(vp.height);
        c.style.width = Math.round(cssW) + 'px'; c.style.height = Math.round(cssH) + 'px';
        const task = page.render({ canvasContext: c.getContext('2d'), viewport: vp });
        pg.task = task;
        await task.promise;
        if (token !== pdfView.token) return;
        pg.rendered = true;
        pdfDrawOverlay(i);
      } catch (e) { /* render cancelled when scrolling away */ }
      finally { pg.rendering = false; pg.task = null; }
    }
    function pdfReleasePage(i) {
      const pg = pdfView.pages[i - 1];
      if (!pg) return;
      if (pg.task) { try { pg.task.cancel(); } catch (e) {} }
      pg.canvas.width = 0; pg.canvas.height = 0; pg.overlay.width = 0; pg.overlay.height = 0; if (pg.ink) { pg.ink.width = 0; pg.ink.height = 0; }
      pg.rendered = false;
    }
    function pdfObserve() {
      if (pdfView.io) { try { pdfView.io.disconnect(); } catch (e) {} pdfView.io = null; }
      if (typeof IntersectionObserver === 'undefined') {
        for (let i = 1; i <= Math.min(3, pdfView.numPages); i++) pdfRenderPage(i);
        return;
      }
      pdfView.io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          const i = parseInt(en.target.dataset.pg);
          if (en.isIntersecting) pdfRenderPage(i); else pdfReleasePage(i);
        });
      }, { root: document.getElementById('pdfScroller'), rootMargin: (() => { const m = pdfView.zoom > 1.6 ? 250 : 900; return pdfView.orient === 'h' ? `0px ${m}px` : `${m}px 0px`; })() });
      pdfView.pages.forEach(pg => pdfView.io.observe(pg.wrap));
    }

    /* ---- overlay: highlights (multiply layer), typed text (ink layer), search hits ---- */
    function pdfDrawStroke(ctx, s, W, H) {
      ctx.strokeStyle = s.c; ctx.fillStyle = s.c; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      ctx.lineWidth = Math.max(2, s.w * W);
      const p = s.p;
      if (p.length < 4) { ctx.beginPath(); ctx.arc(p[0] * W, p[1] * H, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fill(); return; }
      ctx.beginPath(); ctx.moveTo(p[0] * W, p[1] * H);
      for (let k = 2; k < p.length; k += 2) ctx.lineTo(p[k] * W, p[k + 1] * H);
      ctx.stroke();
    }
    const PDF_TEXT_FONT = 'Helvetica, Arial, sans-serif';
    function pdfTextMetrics(ctx, s, W) {
      const fs = Math.max(8, s.s * W), lh = fs * 1.25;
      ctx.font = `${fs}px ${PDF_TEXT_FONT}`;
      const lines = String(s.t).split('\n');
      let mw = 0;
      lines.forEach(l => { mw = Math.max(mw, ctx.measureText(l).width); });
      return { fs, lh, lines, w: mw, h: lines.length * lh };
    }
    function pdfDrawText(ctx, s, W, H, outline) {
      const m = pdfTextMetrics(ctx, s, W);
      ctx.font = `${m.fs}px ${PDF_TEXT_FONT}`; ctx.fillStyle = s.c; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      m.lines.forEach((l, k) => ctx.fillText(l, s.x * W, s.y * H + k * m.lh));
      Object.defineProperty(s, '_bb', { value: { x: s.x, y: s.y, w: m.w / W, h: m.h / H }, writable: true, enumerable: false, configurable: true });
      if (outline) {
        ctx.save(); ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5; ctx.strokeStyle = 'rgba(124,123,203,.95)';
        ctx.strokeRect(s.x * W - 4, s.y * H - 3, m.w + 8, m.h + 6); ctx.restore();
      }
    }
    function pdfDrawOverlay(i) {
      const pg = pdfView.pages[i - 1];
      if (!pg || !pg.rendered) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const W = Math.round(pg.w * dpr), H = Math.round(pg.h * dpr);
      const o = pg.overlay, k = pg.ink;
      if (o.width !== W || o.height !== H) { o.width = W; o.height = H; o.style.width = Math.round(pg.w) + 'px'; o.style.height = Math.round(pg.h) + 'px'; }
      if (k.width !== W || k.height !== H) { k.width = W; k.height = H; k.style.width = Math.round(pg.w) + 'px'; k.style.height = Math.round(pg.h) + 'px'; }
      const ctx = o.getContext('2d'), ictx = k.getContext('2d');
      ctx.clearRect(0, 0, W, H); ictx.clearRect(0, 0, W, H);
      const list = pdfView.annots[i] || [];
      list.forEach(s => { if (s.k !== 't') pdfDrawStroke(ctx, s, W, H); });
      const d = pdfView.drawing;
      if (d && d.stroke && d.pg === i) pdfDrawStroke(ctx, d.stroke, W, H);
      const S = pdfView.search;
      if (S.q && S.byPage[i]) {
        S.byPage[i].forEach(mi => {
          const m = S.matches[mi]; if (!m) return;
          ctx.fillStyle = mi === S.idx ? '#FF7A00' : '#FFC83D';
          m.rects.forEach(r => ctx.fillRect(r.x * W - 1, r.y * H - 1, r.w * W + 2, r.h * H + 2));
        });
      }
      const showBoxes = pdfView.tool === 'text';
      list.forEach(s => { if (s.k === 't') pdfDrawText(ictx, s, W, H, showBoxes); });
    }
    function pdfScheduleRedraw(i) {
      if (pdfView.redrawRaf[i]) return;
      const run = () => { pdfView.redrawRaf[i] = 0; pdfDrawOverlay(i); };
      pdfView.redrawRaf[i] = typeof requestAnimationFrame === 'function' ? requestAnimationFrame(run) : (run(), 0);
    }
    function pdfRedrawAll() { pdfView.pages.forEach((pg, idx) => { if (pg.rendered) pdfScheduleRedraw(idx + 1); }); }

    /* ---- current page / navigation ---- */
    function pdfUpdateCurrent() {
      const sc = document.getElementById('pdfScroller');
      const pages = pdfView.pages;
      if (!pages.length) return;
      const h = pdfView.orient === 'h';
      const y = h ? sc.scrollLeft + (sc.clientWidth || 360) / 2 : sc.scrollTop + (sc.clientHeight || 600) * 0.35;
      const key = h ? 'left' : 'top';
      let lo = 0, hi = pages.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (pages[mid][key] <= y) lo = mid; else hi = mid - 1; }
      pdfSetCurrent(lo + 1);
    }
    function pdfOnScroll() {
      if (pdfView.scrollRaf) return;
      const run = () => { pdfView.scrollRaf = 0; if (Date.now() < pdfView.seekUntil) return; pdfUpdateCurrent(); };
      pdfView.scrollRaf = typeof requestAnimationFrame === 'function' ? requestAnimationFrame(run) : (run(), 0);
    }
    function pdfSetCurrent(n) {
      pdfView.cur = n;
      pdfUpdateInfo();
      const r = pdfRec(pdfView.resId);
      if (r && r.lastPage !== n) {
        r.lastPage = n;
        if (pdfView.pageTimer) clearTimeout(pdfView.pageTimer);
        pdfView.pageTimer = setTimeout(saveState, 800);
      }
    }
    function pdfUpdateInfo() {
      const info = document.getElementById('pdfPageInfo');
      if (info) info.textContent = `Page ${pdfView.cur} / ${pdfView.numPages}${pdfView.saveText ? ' • ' + pdfView.saveText : ''}`;
      const bar = document.getElementById('pdfProgressBar');
      if (bar && pdfView.numPages) bar.style.width = `${Math.round(pdfView.cur / pdfView.numPages * 100)}%`;
      const inp = document.getElementById('pdfPageInput');
      if (inp) inp.value = pdfView.cur;
      const tot = document.getElementById('pdfPageTotal');
      if (tot) tot.textContent = pdfView.numPages || '–';
      const seek = document.getElementById('pdfSeek');
      if (seek) { seek.max = String(pdfView.numPages || 1); seek.value = String(pdfView.cur); }
      const lab = document.getElementById('pdfReadLabel');
      if (lab) lab.textContent = `${pdfView.cur} / ${pdfView.numPages}`;
      const pill = document.getElementById('pdfHudPill');
      if (pill) pill.textContent = `${pdfView.cur} / ${pdfView.numPages}`;
      pdfUpdateFocusBar();
    }
    function pdfGoTo(n, smooth) {
      if (!pdfView.numPages) return;
      const p = Math.min(Math.max(1, parseInt(n) || 1), pdfView.numPages);
      const sc = document.getElementById('pdfScroller');
      const pg = pdfView.pages[p - 1];
      const beh = smooth === false ? 'auto' : 'smooth';
      if (pdfView.orient === 'h') {
        const left = Math.max(0, pg.left + pg.w / 2 - (sc.clientWidth || 360) / 2);
        if (typeof sc.scrollTo === 'function') sc.scrollTo({ left, behavior: beh }); else sc.scrollLeft = left;
        if (smooth === false) sc.scrollLeft = left;
      } else {
        const top = Math.max(0, pg.top - 6);
        if (typeof sc.scrollTo === 'function') sc.scrollTo({ top, behavior: beh }); else sc.scrollTop = top;
        if (smooth === false) sc.scrollTop = top;
      }
      pdfSetCurrent(p);
    }
    function pdfPrev() { pdfGoTo(pdfView.cur - 1); }
    function pdfNext() { pdfGoTo(pdfView.cur + 1); }
    function pdfPromptPage() {
      if (!pdfView.numPages) return;
      askInput('Go to page', `Page number (1 to ${pdfView.numPages})`, pdfView.cur, 'number', val => {
        const n = parseInt(val);
        if (isNaN(n) || n < 1 || n > pdfView.numPages) { showToast(`Enter a page between 1 and ${pdfView.numPages}`); return false; }
        pdfGoTo(n);
      });
    }

    /* ---- zoom (buttons and two-finger pinch) ---- */
    /* which page, and where on it (0..1), sits under a screen point */
    function pdfAnchorAt(cx, cy) {
      let best = null, bd = Infinity;
      pdfView.pages.forEach((pg, idx) => {
        const r = pg.wrap.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) return;
        const dx = cx < r.left ? r.left - cx : (cx > r.right ? cx - r.right : 0);
        const dy = cy < r.top ? r.top - cy : (cy > r.bottom ? cy - r.bottom : 0);
        const d = dx * dx + dy * dy;
        if (d < bd) { bd = d; best = { i: idx, fx: (cx - r.left) / r.width, fy: (cy - r.top) / r.height }; }
      });
      return best;
    }
    /* change the zoom and keep the anchored spot of the page under the screen point (cx, cy) */
    function pdfZoomTo(z, anchor, cx, cy) {
      z = Math.min(PDF_MAX_ZOOM, Math.max(PDF_MIN_ZOOM, Math.round(z * 100) / 100));
      if (!pdfView.pages.length) return;
      if (Math.abs(z - pdfView.zoom) < 0.005) { pdfUpdateToolbar(); return; }
      const sc = document.getElementById('pdfScroller');
      pdfView.zoom = z;
      pdfView.token++;
      pdfView.pages.forEach((pg, idx) => {
        pdfReleasePage(idx + 1);
        const sz = pdfPageSize(pg.ah);
        pg.w = sz.w; pg.h = sz.h;
        pdfApplySize(pg);
      });
      pdfRecalcTops();
      if (anchor && pdfView.pages[anchor.i]) {
        const r = pdfView.pages[anchor.i].wrap.getBoundingClientRect();
        sc.scrollLeft += (r.left + anchor.fx * r.width) - cx;
        sc.scrollTop += (r.top + anchor.fy * r.height) - cy;
      }
      pdfObserve();
      pdfUpdateToolbar();
    }
    function pdfSetZoom(z) {
      const sc = document.getElementById('pdfScroller');
      if (!sc || !pdfView.pages.length) { pdfUpdateToolbar(); return; }
      const r = sc.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      pdfZoomTo(z, pdfAnchorAt(cx, cy), cx, cy);
    }
    function pdfZoom(delta) { pdfSetZoom(pdfView.zoom + delta); }
    function pdfFit() { pdfSetZoom(1); }

    /* two fingers: spread / pinch to zoom around the point between them. Live preview is a CSS scale,
       the pages are re-rendered sharply when the fingers lift. */
    function pdfTouchStart(e) {
      if (e.touches.length !== 2 || !pdfView.pages.length || pdfView.editing) return;
      pdfCancelDrawing();
      pdfView.pointers.clear();
      const a = e.touches[0], b = e.touches[1];
      const cx = (a.clientX + b.clientX) / 2, cy = (a.clientY + b.clientY) / 2;
      pdfView.pinch = { d0: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) || 1, zoom0: pdfView.zoom, mode: 'pan', lx: cx, ly: cy, cx, cy, s: 1, anchor: null, Px: 0, Py: 0 };
      if (e.cancelable) e.preventDefault();
    }
    function pdfTouchMove(e) {
      const p = pdfView.pinch;
      if (!p || e.touches.length < 2) return;
      const a = e.touches[0], b = e.touches[1];
      const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) || 1;
      const cx = (a.clientX + b.clientX) / 2, cy = (a.clientY + b.clientY) / 2;
      const sc = document.getElementById('pdfScroller'), el = document.getElementById('pdfPages');
      const sr = sc.getBoundingClientRect();
      if (p.mode === 'pan') {
        if (Math.abs(d / p.d0 - 1) > 0.07) {
          p.mode = 'zoom'; p.d0 = d; p.zoom0 = pdfView.zoom;
          p.anchor = pdfAnchorAt(cx, cy);
          p.Px = sc.scrollLeft + (cx - sr.left); p.Py = sc.scrollTop + (cy - sr.top);
          el.style.transformOrigin = '0 0'; el.style.willChange = 'transform';
        } else {
          if (pdfView.tool !== 'hand') { sc.scrollLeft -= cx - p.lx; sc.scrollTop -= cy - p.ly; }   // reading mode pans natively
          p.lx = cx; p.ly = cy;
          if (e.cancelable) e.preventDefault();
          return;
        }
      }
      const s = Math.min(PDF_MAX_ZOOM / p.zoom0, Math.max(PDF_MIN_ZOOM / p.zoom0, d / p.d0));
      p.s = s; p.cx = cx; p.cy = cy;
      const tx = (cx - sr.left) - s * p.Px + sc.scrollLeft;
      const ty = (cy - sr.top) - s * p.Py + sc.scrollTop;
      el.style.transform = `translate(${tx}px,${ty}px) scale(${s})`;
      if (e.cancelable) e.preventDefault();
    }
    function pdfTouchEnd(e) {
      const p = pdfView.pinch;
      if (!p || e.touches.length >= 2) return;
      pdfView.pinch = null;
      pdfView.pointers.clear();
      const el = document.getElementById('pdfPages');
      if (p.mode === 'zoom') {
        el.style.transform = ''; el.style.willChange = ''; el.style.transformOrigin = '';
        pdfZoomTo(p.zoom0 * p.s, p.anchor, p.cx, p.cy);
        if (e.cancelable) e.preventDefault();
      }
    }

    /* ---- tools ---- */
    function pdfSetTool(t) {
      const inkTool = t === 'hl' || t === 'text';
      if (inkTool && pdfView.tool === t) pdfView.paletteOpen = !pdfView.paletteOpen;
      else { pdfView.tool = t; pdfView.paletteOpen = inkTool; }
      pdfView.trayOpen = false;
      pdfView.pointers.clear(); pdfView.drawing = null; pdfView.pan = null;
      pdfUpdateToolbar();
      pdfRedrawAll();   // dashed boxes around typed text only show while the Text tool is active
    }
    function pdfPushRecent(c) {
      c = String(c).toUpperCase();
      pdfView.recent = [c].concat(pdfView.recent.filter(x => x.toUpperCase() !== c)).slice(0, 8);
    }
    function pdfSetColor(c) {
      c = String(c).toUpperCase();
      if (pdfView.tool === 'text') pdfView.tcolor = c; else pdfView.color = c;
      pdfPushRecent(c); pdfView.trayOpen = false; pdfSavePrefs(); pdfUpdateToolbar();
    }
    function pdfToggleTray() { pdfView.trayOpen = !pdfView.trayOpen; pdfUpdateToolbar(); }
    function pdfClosePalette() { if (pdfView.paletteOpen) { pdfView.paletteOpen = false; pdfView.trayOpen = false; pdfUpdateToolbar(); } }
    function pdfSetWidth(w) { pdfView.width = w; pdfUpdateToolbar(); }
    function pdfSetTSize(s) { pdfView.tsize = s; pdfSavePrefs(); pdfUpdateToolbar(); }
    function pdfSetStraight(on) { pdfView.straight = !!on; pdfSavePrefs(); pdfUpdateToolbar(); }

    function pdfDot(c, on, fn) {
      return `<button onclick="${fn}('${c}')" aria-label="Colour ${c}" class="pdf-dot ${on ? 'pdf-dot-on' : ''}" style="background:${c}"></button>`;
    }
    function pdfCustomDot(cur, fn) {
      return `<label class="pdf-dot pdf-custom" title="Custom colour"><i class="ph-bold ph-eyedropper"></i><input type="color" value="${cur}" onchange="${fn}(this.value)"></label>`;
    }
    function pdfPaletteHtml() {
      const isText = pdfView.tool === 'text';
      const cur = (isText ? pdfView.tcolor : pdfView.color).toUpperCase();
      const n = (window.innerWidth || 400) < 380 ? 4 : 5;
      const list = [cur].concat(pdfView.recent.map(x => x.toUpperCase()).filter(x => x !== cur)).slice(0, n);
      let h = '';
      if (!isText) {
        h += `<div class="pdf-modeseg" title="Highlight style">
            <button onclick="pdfSetStraight(false)" class="${pdfView.straight ? '' : 'on'}" aria-label="Freehand highlight" title="Freehand"><i class="ph-bold ph-scribble-loop"></i></button>
            <button onclick="pdfSetStraight(true)" class="${pdfView.straight ? 'on' : ''}" aria-label="Straight line" title="Straight line"><i class="ph-bold ph-line-segment"></i></button></div>`;
      }
      h += list.map(c => pdfDot(c, c === cur, 'pdfSetColor')).join('');
      h += `<button onclick="pdfToggleTray()" class="pdf-more ${pdfView.trayOpen ? 'on' : ''}" aria-label="More colours" title="More colours"><i class="ph-bold ph-palette"></i></button>`;
      const sizes = isText ? PDF_TSIZES : PDF_WIDTHS, curS = isText ? pdfView.tsize : pdfView.width, fn = isText ? 'pdfSetTSize' : 'pdfSetWidth';
      h += sizes.map(([l, w]) => `<button onclick="${fn}(${w})" class="pdf-wbtn ${curS === w ? 'pdf-wbtn-on' : ''}" aria-label="${isText ? 'Text size' : 'Width'} ${l}">${l}</button>`).join('');
      return h;
    }
    function pdfTrayHtml() {
      const isText = pdfView.tool === 'text';
      const cur = (isText ? pdfView.tcolor : pdfView.color).toUpperCase();
      return PDF_PALETTE.map(([c, name]) => `<button onclick="pdfSetColor('${c}')" aria-label="${name}" title="${name}" class="pdf-dot ${c === cur ? 'pdf-dot-on' : ''}" style="background:${c}"></button>`).join('') + pdfCustomDot(cur, 'pdfSetColor');
    }

    function pdfUpdateToolbar() {
      const sc = document.getElementById('pdfScroller');
      const snap = pdfView.orient === 'h' && pdfView.zoom <= 1.001 && pdfView.tool === 'hand';
      if (sc) sc.className = `flex-1 overflow-auto relative ${pdfView.tool !== 'hand' ? 'pdf-draw' : ''} ${snap ? 'pdf-snap-x' : ''}`;
      [['hand', 'pdfToolHand'], ['hl', 'pdfToolHl'], ['text', 'pdfToolText'], ['erase', 'pdfToolErase']].forEach(([t, id]) => {
        const b = document.getElementById(id);
        if (!b) return;
        b.className = `pdf-tool ${pdfView.tool === t ? 'pdf-tool-on' : ''} ${(t === 'hl' || t === 'text') ? 'has-dot' : ''}`;
        if (t === 'hl') b.style.setProperty('--hl', pdfView.color);
        if (t === 'text') b.style.setProperty('--hl', pdfView.tcolor);
      });
      const pal = document.getElementById('pdfPalette'), tray = document.getElementById('pdfColorTray');
      const showPal = (pdfView.tool === 'hl' || pdfView.tool === 'text') && pdfView.paletteOpen;
      if (pal) { pal.classList.toggle('hidden', !showPal); if (showPal) pal.innerHTML = pdfPaletteHtml(); }
      if (tray) { const showTray = showPal && pdfView.trayOpen; tray.classList.toggle('hidden', !showTray); if (showTray) tray.innerHTML = pdfTrayHtml(); }
      const sb = document.getElementById('pdfSearchBtn');
      if (sb) sb.classList.toggle('on', !!pdfView.search.open);
      pdfCheckChromeHeight();
      const hlLabel = document.querySelector('#pdfToolHl span');
      if (hlLabel) hlLabel.textContent = pdfView.tool === 'hl' && pdfView.straight ? 'Line' : 'Highlight';
      const u = document.getElementById('pdfUndoBtn'), rd = document.getElementById('pdfRedoBtn');
      if (u) u.disabled = pdfView.undo.length === 0;
      if (rd) rd.disabled = pdfView.redo.length === 0;
      const z = document.getElementById('pdfZoomLabel');
      if (z) z.textContent = Math.round(pdfView.zoom * 100) + '%';
      [['pdfOrientV', 'v'], ['pdfOrientVR', 'v'], ['pdfOrientH', 'h'], ['pdfOrientHR', 'h']].forEach(([id, o]) => {
        const b = document.getElementById(id);
        if (b) b.classList.toggle('on', pdfView.orient === o);
      });
      const fi = document.getElementById('pdfFilterIcon');
      if (fi) { const f = PDF_FILTERS.find(x => x[0] === pdfView.filter) || PDF_FILTERS[0]; fi.className = `ph-bold ${f[2]}`; }
      pdfUpdateInfo();
    }
    /* the palette / search row change the height of the page area: re-fit horizontal pages (not while the keyboard is up) */
    function pdfCheckChromeHeight() {
      const scEl = document.getElementById('pdfScroller');
      const ae = document.activeElement;
      if (!scEl || !pdfView.pages.length || pdfView.orient !== 'h' || pdfView.relaying || pdfView.pinch) return;
      if (ae && (ae.id === 'pdfSearchInput' || ae.id === 'pdfTextInput')) return;
      if (Math.abs(scEl.clientHeight - pdfView.lastH) > 24) {
        pdfView.relaying = true;
        try { pdfRelayout(pdfView.cur); } finally { pdfView.relaying = false; }
      }
    }

    /* ---- layout (vertical / horizontal) and reading mode ---- */
    function pdfRelayout(keepPage) {
      const sc = document.getElementById('pdfScroller');
      if (!pdfView.pages.length || !sc) { pdfUpdateToolbar(); return; }
      const page = keepPage || pdfView.cur;
      pdfView.token++;
      pdfView.pages.forEach((pg, i) => pdfReleasePage(i + 1));
      pdfMeasure();
      pdfView.pages.forEach(pg => { const sz = pdfPageSize(pg.ah); pg.w = sz.w; pg.h = sz.h; pdfApplySize(pg); });
      pdfApplyOrient();
      pdfRecalcTops();
      pdfUpdateToolbar();
      pdfObserve();
      sc.scrollLeft = 0; sc.scrollTop = 0;
      pdfGoTo(page, false);
    }
    function pdfSetOrient(o) {
      if (o !== 'h' && o !== 'v') return;
      if (o === pdfView.orient) { pdfUpdateToolbar(); return; }
      pdfView.orient = o;
      pdfView.zoom = 1;
      pdfSavePrefs();
      pdfRelayout(pdfView.cur);
      if (pdfView.reading) pdfShowHud();
      showToast(o === 'h' ? 'Horizontal pages: swipe left / right' : 'Vertical pages: scroll up / down');
    }
    function pdfToggleReading(force) {
      const on = typeof force === 'boolean' ? force : !pdfView.reading;
      if (on === pdfView.reading) return;
      pdfView.reading = on;
      const m = document.getElementById('pdfViewerModal');
      m.classList.toggle('pdf-reading', on);
      m.dataset.pf = pdfView.filter;
      pdfView.tap = null;
      if (on) {
        pdfView.tool = 'hand'; pdfView.paletteOpen = false;
        pdfView.pointers.clear(); pdfView.drawing = null; pdfView.pan = null;
        pdfShowHud();
      } else if (pdfView.hudTimer) { clearTimeout(pdfView.hudTimer); pdfView.hudTimer = null; }
      pdfUpdateToolbar();
      pdfRelayout(pdfView.cur);
    }
    function pdfCycleFilter() {
      const i = PDF_FILTERS.findIndex(f => f[0] === pdfView.filter);
      const f = PDF_FILTERS[(i + 1) % PDF_FILTERS.length];
      pdfView.filter = f[0];
      document.getElementById('pdfViewerModal').dataset.pf = f[0];
      pdfSavePrefs(); pdfUpdateToolbar(); pdfShowHud();
      showToast(`Page tone: ${f[1]}`);
    }
    /* ---- focus mode: header + toolbar hidden for distraction-free reading / annotating ---- */
    function pdfSetFocus(on, silent) {
      on = !!on;
      const m = document.getElementById('pdfViewerModal');
      if (!m) return;
      pdfView.focus = on;
      if (on) {
        pdfToggleMenu(false);
        const ae = document.activeElement; if (ae && ae.id === 'pdfSearchInput') ae.blur();
        if (!silent) {
          try { if (!localStorage.getItem('orbitPdfFocusHint')) { localStorage.setItem('orbitPdfFocusHint', '1'); showToast('Controls hidden - tap the page again (or the pill) to bring them back'); } } catch (e) {}
        }
      }
      m.classList.toggle('pdf-focus', on);
      pdfSavePrefs();
      pdfUpdateFocusBar();
      /* the page area changed height: re-fit horizontal pages once the layout has settled */
      requestAnimationFrame(() => requestAnimationFrame(pdfCheckChromeHeight));
    }
    function pdfUpdateFocusBar() {
      const bar = document.getElementById('pdfFocusBar');
      if (!bar) return;
      bar.dataset.tool = pdfView.tool;
      const ic = document.getElementById('pdfFbIcon');
      if (ic) ic.className = 'ph-bold ' + ({ hl: 'ph-highlighter', text: 'ph-text-t', erase: 'ph-eraser' }[pdfView.tool] || 'ph-hand');
      const tb = document.getElementById('pdfFbTool');
      if (tb) tb.style.setProperty('--hl', pdfView.tool === 'text' ? pdfView.tcolor : pdfView.color);
      const u = document.getElementById('pdfFbUndo');
      if (u) u.disabled = pdfView.undo.length === 0;
      const pg = document.getElementById('pdfFbPage');
      if (pg) pg.textContent = `${pdfView.cur} / ${pdfView.numPages || 1}`;
    }
    function pdfShowHud(keep) {
      const hud = document.getElementById('pdfReadHud');
      if (!hud) return;
      hud.classList.add('pdf-hud-on');
      if (pdfView.hudTimer) clearTimeout(pdfView.hudTimer);
      pdfView.hudTimer = keep ? null : setTimeout(() => hud.classList.remove('pdf-hud-on'), 3800);
    }
    function pdfToggleHud() {
      const hud = document.getElementById('pdfReadHud');
      if (!hud) return;
      if (hud.classList.contains('pdf-hud-on')) { if (pdfView.hudTimer) clearTimeout(pdfView.hudTimer); hud.classList.remove('pdf-hud-on'); }
      else pdfShowHud();
    }
    function pdfSeekTo(v) {
      pdfView.seekUntil = Date.now() + 450;
      pdfGoTo(v, false);
      pdfShowHud();
    }

    /* tap on the page while reading: edges turn pages, centre shows / hides the controls */
    function pdfTapDown(e) {
      if (pdfView.tool !== 'hand' || pdfView.pinch || pdfView.editing) { pdfView.tap = null; return; }
      pdfView.tap = e.isPrimary === false ? null : { id: e.pointerId, x: e.clientX, y: e.clientY, t: Date.now() };
    }
    function pdfTapMove(e) {
      const t = pdfView.tap;
      if (t && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 10) pdfView.tap = null;
    }
    function pdfTapUp(e) {
      const t = pdfView.tap; pdfView.tap = null;
      if (!t || t.id !== e.pointerId || Date.now() - t.t > 450) return;
      if (!pdfView.reading) { pdfSetFocus(!pdfView.focus); return; }   // normal view: a tap on the page hides / shows the header + toolbar
      const sc = document.getElementById('pdfScroller');
      const r = sc.getBoundingClientRect();
      const fx = (e.clientX - r.left) / (r.width || 1), fy = (e.clientY - r.top) / (r.height || 1);
      if (pdfView.orient === 'h' && pdfView.zoom <= 1.05) {
        if (fx < 0.22) { pdfPrev(); return; }
        if (fx > 0.78) { pdfNext(); return; }
      } else if (pdfView.orient === 'v') {
        const hud = document.getElementById('pdfReadHud');
        const hudOn = hud && hud.classList.contains('pdf-hud-on');
        if (!hudOn && fy < 0.16) { sc.scrollBy({ top: -sc.clientHeight * 0.85, behavior: 'smooth' }); return; }
        if (!hudOn && fy > 0.84) { sc.scrollBy({ top: sc.clientHeight * 0.85, behavior: 'smooth' }); return; }
      }
      pdfToggleHud();
    }

    /* ---- drawing with pointer events (one finger draws, two fingers scroll) ---- */
    function pdfWireEvents() {
      if (pdfView.wired) return;
      pdfView.wired = true;
      const sc = document.getElementById('pdfScroller');
      sc.addEventListener('scroll', pdfOnScroll, { passive: true });
      sc.addEventListener('pointerdown', pdfPtrDown);
      sc.addEventListener('pointermove', pdfPtrMove);
      sc.addEventListener('pointerup', pdfPtrUp);
      sc.addEventListener('pointercancel', pdfPtrUp);
      sc.addEventListener('pointerdown', pdfTapDown);
      sc.addEventListener('pointermove', pdfTapMove);
      sc.addEventListener('pointerup', pdfTapUp);
      sc.addEventListener('pointercancel', () => { pdfView.tap = null; });
      const hud = document.getElementById('pdfReadHud');
      if (hud) hud.addEventListener('pointerdown', () => { if (pdfView.reading) pdfShowHud(); });
      sc.addEventListener('touchstart', pdfTouchStart, { passive: false });
      sc.addEventListener('touchmove', pdfTouchMove, { passive: false });
      sc.addEventListener('touchend', pdfTouchEnd, { passive: false });
      sc.addEventListener('touchcancel', pdfTouchEnd, { passive: false });
      const si = document.getElementById('pdfSearchInput');
      if (si) si.addEventListener('blur', () => setTimeout(pdfCheckResize, 350));
      /* the click the browser fires right after the tap that opened the text sheet must not hit the sheet itself */
      const sheet = document.getElementById('pdfTextSheet');
      if (sheet) sheet.addEventListener('click', e => { if (Date.now() < pdfView.sheetGuard) { e.stopPropagation(); e.preventDefault(); } }, true);
      window.addEventListener('resize', () => {
        if (pdfView.resizeTimer) clearTimeout(pdfView.resizeTimer);
        pdfView.resizeTimer = setTimeout(pdfCheckResize, 220);
      });
    }
    /* rotating the phone (or the keyboard closing) changes the page area: fit the pages to the new size */
    function pdfCheckResize() {
      const m = document.getElementById('pdfViewerModal');
      const area = document.getElementById('pdfScroller');
      if (!m || m.classList.contains('hidden') || !pdfView.pages.length || !area) return;
      if (pdfView.editing || pdfView.pinch) return;
      const ae = document.activeElement;
      if (ae && (ae.id === 'pdfSearchInput' || ae.id === 'pdfTextInput')) return;
      const wChanged = Math.abs(area.clientWidth - pdfView.lastW) > 2;
      const hChanged = pdfView.orient === 'h' && Math.abs(area.clientHeight - pdfView.lastH) > 40;
      if (wChanged || hChanged) pdfRelayout(pdfView.cur);
    }
    /* straight line from the start point; snaps to exactly horizontal / vertical when you are within ~4 degrees */
    function pdfSnapLine(x0, y0, x1, y1, ah) {
      const dx = x1 - x0, dy = (y1 - y0) * ah;
      if (Math.hypot(dx, dy) > 0.02) {
        const ang = Math.abs(Math.atan2(dy, dx)) * 180 / Math.PI;
        if (ang < 4 || ang > 176) y1 = y0;
        else if (Math.abs(ang - 90) < 4) x1 = x0;
      }
      return [x0, y0, x1, y1];
    }
    function pdfPageUnder(e) {
      let el = e.target;
      if (!el || !el.closest) el = (typeof document.elementFromPoint === 'function') ? document.elementFromPoint(e.clientX, e.clientY) : null;
      const w = el && el.closest ? el.closest('.pdf-page') : null;
      return w;
    }
    function pdfPointOn(wrap, e) {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - r.left) / (r.width || 1), y = (e.clientY - r.top) / (r.height || 1);
      return { x: Math.min(1, Math.max(0, x)), y: Math.min(1, Math.max(0, y)) };
    }
    function pdfCancelDrawing() {
      const d = pdfView.drawing;
      pdfView.drawing = null;
      if (!d) return;
      if (d.erase && d.removed && d.removed.length) { pdfView.undo.push({ t: 'erase', items: d.removed }); pdfView.redo = []; pdfMarkDirty(); }
      if (d.text && d.hit && d.moved && d.orig) { d.hit.x = d.orig.x; d.hit.y = d.orig.y; }
      if (d.pg) pdfScheduleRedraw(d.pg);
    }
    function pdfEraseAt(i, pt) {
      const strokes = pdfView.annots[i];
      if (!strokes || !strokes.length) return;
      const ah = pdfView.pages[i - 1] ? pdfView.pages[i - 1].ah : 1.414;
      let changed = false;
      for (let k = strokes.length - 1; k >= 0; k--) {
        if (pdfStrokeHit(strokes[k], pt.x, pt.y, PDF_ERASER_R, ah)) {
          pdfView.drawing.removed.push({ pg: i, stroke: strokes[k], index: k });
          strokes.splice(k, 1);
          changed = true;
        }
      }
      if (changed) pdfScheduleRedraw(i);
    }
    function pdfTextHit(i, pt) {
      const list = pdfView.annots[i] || [];
      const ah = pdfView.pages[i - 1] ? pdfView.pages[i - 1].ah : 1.414;
      for (let k = list.length - 1; k >= 0; k--) {
        const s = list[k];
        if (s.k === 't' && pdfStrokeHit(s, pt.x, pt.y, 0.012, ah)) return s;
      }
      return null;
    }
    function pdfPtrDown(e) {
      if (pdfView.tool === 'hand') return;
      pdfView.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pdfView.pointers.size >= 2) { pdfCancelDrawing(); return; }   // two fingers = pinch / pan, never a stroke
      if (pdfView.editing || pdfView.pinch) return;
      const wrap = pdfPageUnder(e);
      if (!wrap) return;
      const i = parseInt(wrap.dataset.pg);
      const pt = pdfPointOn(wrap, e);
      if (pdfView.tool === 'hl') {
        pdfView.drawing = { pg: i, wrap, stroke: { c: pdfView.color, w: pdfView.width, p: [pt.x, pt.y] }, lx: e.clientX, ly: e.clientY, line: pdfView.straight, x0: pt.x, y0: pt.y };
        pdfScheduleRedraw(i);
      } else if (pdfView.tool === 'text') {
        const hit = pdfTextHit(i, pt);
        pdfView.drawing = { pg: i, wrap, text: true, hit, pt, sx: e.clientX, sy: e.clientY, moved: false, orig: hit ? { x: hit.x, y: hit.y } : null };
      } else {
        pdfView.drawing = { pg: i, erase: true, removed: [] };
        pdfEraseAt(i, pt);
      }
      try { document.getElementById('pdfScroller').setPointerCapture(e.pointerId); } catch (err) {}
      if (e.preventDefault) e.preventDefault();
    }
    function pdfPtrMove(e) {
      if (pdfView.tool === 'hand' || !pdfView.pointers.has(e.pointerId)) return;
      pdfView.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pdfView.pointers.size >= 2 || pdfView.pinch) return;
      const d = pdfView.drawing;
      if (!d) return;
      if (d.text) {
        if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 8) d.moved = true;
        if (d.moved && d.hit) {
          const pt = pdfPointOn(d.wrap, e);
          d.hit.x = Math.min(0.98, Math.max(0, d.orig.x + (pt.x - d.pt.x)));
          d.hit.y = Math.min(0.98, Math.max(0, d.orig.y + (pt.y - d.pt.y)));
          pdfScheduleRedraw(d.pg);
        }
      } else if (d.erase) {
        const wrap = pdfPageUnder(e);
        if (!wrap) return;
        d.pg = parseInt(wrap.dataset.pg);
        pdfEraseAt(d.pg, pdfPointOn(wrap, e));
      } else if (d.line) {
        const pt = pdfPointOn(d.wrap, e);
        d.stroke.p = pdfSnapLine(d.x0, d.y0, pt.x, pt.y, pdfView.pages[d.pg - 1].ah);
        pdfScheduleRedraw(d.pg);
      } else {
        if (Math.hypot(e.clientX - d.lx, e.clientY - d.ly) < 2) return;
        const pt = pdfPointOn(d.wrap, e);
        d.stroke.p.push(pt.x, pt.y);
        d.lx = e.clientX; d.ly = e.clientY;
        pdfScheduleRedraw(d.pg);
      }
      if (e.preventDefault) e.preventDefault();
    }
    function pdfPtrUp(e) {
      pdfView.pointers.delete(e.pointerId);
      const d = pdfView.drawing;
      if (!d || pdfView.pointers.size > 0) { if (pdfView.pointers.size === 0) pdfView.drawing = null; return; }
      pdfView.drawing = null;
      if (d.text) {
        if (d.hit && d.moved) {
          pdfView.undo.push({ t: 'edit', pg: d.pg, ann: d.hit, before: { x: d.orig.x, y: d.orig.y }, after: { x: d.hit.x, y: d.hit.y } });
          pdfView.redo = []; pdfMarkDirty();
        } else if (!d.moved && e.type !== 'pointercancel') {
          pdfOpenTextSheet(d.hit ? { pg: d.pg, ann: d.hit } : { pg: d.pg, x: d.pt.x, y: d.pt.y });
        }
        pdfScheduleRedraw(d.pg);
      } else if (d.erase) {
        if (d.removed.length) { pdfView.undo.push({ t: 'erase', items: d.removed }); pdfView.redo = []; pdfMarkDirty(); }
      } else {
        const ah = pdfView.pages[d.pg - 1].ah;
        if (d.line) {
          if (d.stroke.p.length < 4) { pdfScheduleRedraw(d.pg); pdfUpdateToolbar(); return; }   // a plain tap is not a line
        } else {
          d.stroke.p = pdfSimplify(d.stroke.p, 0.0015, ah);
        }
        (pdfView.annots[d.pg] = pdfView.annots[d.pg] || []).push(d.stroke);
        pdfView.undo.push({ t: 'add', pg: d.pg, stroke: d.stroke }); pdfView.redo = [];
        pdfMarkDirty();
        pdfScheduleRedraw(d.pg);
      }
      pdfUpdateToolbar();
    }

    /* ---- undo / redo ---- */
    function pdfUndo() {
      const a = pdfView.undo.pop();
      if (!a) return;
      if (a.t === 'add') {
        const arr = pdfView.annots[a.pg] || [], k = arr.indexOf(a.stroke);
        if (k >= 0) arr.splice(k, 1);
        pdfScheduleRedraw(a.pg);
      } else if (a.t === 'edit') {
        Object.assign(a.ann, a.before);
        pdfScheduleRedraw(a.pg);
      } else {
        for (let k = a.items.length - 1; k >= 0; k--) {
          const it = a.items[k];
          const arr = pdfView.annots[it.pg] || (pdfView.annots[it.pg] = []);
          arr.splice(Math.min(it.index, arr.length), 0, it.stroke);
          pdfScheduleRedraw(it.pg);
        }
      }
      pdfView.redo.push(a);
      pdfMarkDirty(); pdfUpdateToolbar();
    }
    function pdfRedo() {
      const a = pdfView.redo.pop();
      if (!a) return;
      if (a.t === 'add') {
        (pdfView.annots[a.pg] = pdfView.annots[a.pg] || []).push(a.stroke);
        pdfScheduleRedraw(a.pg);
      } else if (a.t === 'edit') {
        Object.assign(a.ann, a.after);
        pdfScheduleRedraw(a.pg);
      } else {
        a.items.forEach(it => {
          const arr = pdfView.annots[it.pg] || [], k = arr.indexOf(it.stroke);
          if (k >= 0) arr.splice(k, 1);
          pdfScheduleRedraw(it.pg);
        });
      }
      pdfView.undo.push(a);
      pdfMarkDirty(); pdfUpdateToolbar();
    }

    /* ---- saving highlights ---- */
    function pdfMarkDirty() {
      pdfView.dirty = true;
      pdfView.saveText = 'Saving...';
      pdfUpdateInfo();
      if (pdfView.saveTimer) clearTimeout(pdfView.saveTimer);
      pdfView.saveTimer = setTimeout(pdfFlushAnnots, 700);
    }
    async function pdfFlushAnnots() {
      if (!pdfView.dirty || !pdfView.resId) return;
      pdfView.dirty = false;
      if (pdfView.saveTimer) { clearTimeout(pdfView.saveTimer); pdfView.saveTimer = null; }
      const pages = {};
      Object.keys(pdfView.annots).forEach(k => { if (pdfView.annots[k].length) pages[k] = pdfView.annots[k]; });
      try { await annotPut(pdfView.resId, { v: 1, pages }); pdfView.saveText = 'Saved ✓'; }
      catch (e) { console.error(e); pdfView.saveText = 'Not saved'; }
      pdfUpdateInfo();
    }




    /* ---- header menu ---- */
    function pdfToggleMenu(force) {
      const on = typeof force === 'boolean' ? force : !pdfView.menuOpen;
      pdfView.menuOpen = on;
      const m = document.getElementById('pdfMenu'), bd = document.getElementById('pdfMenuBackdrop');
      if (m) m.classList.toggle('hidden', !on);
      if (bd) bd.classList.toggle('hidden', !on);
    }

    /* =========================================================================
       SEARCH inside the PDF (uses the text layer of the document; scanned PDFs have none)
       ========================================================================= */
    function pdfSearchReset() {
      const S = pdfView.search;
      if (S && S.timer) clearTimeout(S.timer);
      pdfView.search = { open: false, q: '', matches: [], byPage: {}, idx: -1, token: ((S && S.token) || 0) + 1, done: true, noText: false, timer: null };
      const bar = document.getElementById('pdfSearchBar'), inp = document.getElementById('pdfSearchInput'), cnt = document.getElementById('pdfSearchCount');
      if (bar) bar.classList.add('hidden');
      if (inp) inp.value = '';
      if (cnt) cnt.textContent = '';
    }
    async function pdfPageText(i) {
      const cached = pdfView.textIdx[i];
      if (cached) return cached;
      const doc = pdfView.doc;
      if (!doc) return null;
      const page = await doc.getPage(i);
      const vp = page.getViewport({ scale: 1 });
      const tc = await page.getTextContent();
      if (doc !== pdfView.doc) return null;
      const items = [];
      let text = '';
      for (const it of tc.items) {
        if (typeof it.str !== 'string') continue;
        if (it.str.length) {
          const tx = pdfjsLib.Util.transform(vp.transform, it.transform);
          const w = (it.width || 0) * vp.scale;
          const fh = Math.hypot(tx[2], tx[3]) || (Math.abs(it.height || 0) * vp.scale) || 8;
          const ux = Math.hypot(tx[0], tx[1]) || 1;
          const ex = tx[0] / ux, ey = tx[1] / ux, vx = tx[2] / fh, vy = tx[3] / fh;
          const xs = [tx[4], tx[4] + ex * w, tx[4] + vx * fh, tx[4] + ex * w + vx * fh];
          const ys = [tx[5], tx[5] + ey * w, tx[5] + vy * fh, tx[5] + ey * w + vy * fh];
          const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
          items.push({ off: text.length, len: it.str.length, x: x0 / vp.width, y: y0 / vp.height, w: (x1 - x0) / vp.width, h: (y1 - y0) / vp.height, horiz: Math.abs(ey) < 0.05 });
          text += it.str;
        }
        if (it.hasEOL) text += ' ';
      }
      const rec = { text: text.toLowerCase(), items };
      pdfView.textIdx[i] = rec;
      return rec;
    }
    function pdfFindInPage(t, q) {
      const out = [];
      let from = 0;
      while (out.length < 500) {
        const k = t.text.indexOf(q, from);
        if (k < 0) break;
        const e = k + q.length;
        from = k + Math.max(1, q.length);
        const rects = [];
        for (const it of t.items) {
          if (it.off + it.len <= k) continue;
          if (it.off >= e) break;
          if (it.horiz) {
            const a = Math.max(k, it.off) - it.off, b = Math.min(e, it.off + it.len) - it.off;
            rects.push({ x: it.x + it.w * (a / it.len), y: it.y, w: Math.max(0.004, it.w * ((b - a) / it.len)), h: it.h });
          } else rects.push({ x: it.x, y: it.y, w: it.w, h: it.h });
        }
        if (rects.length) out.push(rects);
      }
      return out;
    }
    function pdfToggleSearch(force) {
      const S = pdfView.search;
      const on = typeof force === 'boolean' ? force : !S.open;
      if (on === S.open) { if (on) { const i = document.getElementById('pdfSearchInput'); if (i) i.focus(); } return; }
      S.open = on;
      const bar = document.getElementById('pdfSearchBar'), inp = document.getElementById('pdfSearchInput');
      if (bar) bar.classList.toggle('hidden', !on);
      if (on) {
        pdfToggleMenu(false);
        if (inp) { inp.focus(); if (inp.value.trim()) pdfSearchRun(inp.value.trim()); }
      } else {
        S.token++; S.q = ''; S.matches = []; S.byPage = {}; S.idx = -1; S.done = true;
        if (S.timer) { clearTimeout(S.timer); S.timer = null; }
        if (inp) inp.blur();
        pdfRedrawAll();
      }
      pdfSearchUpdateUi();
      pdfUpdateToolbar();
    }
    function pdfSearchInput(v) {
      const S = pdfView.search;
      if (S.timer) clearTimeout(S.timer);
      S.timer = setTimeout(() => { S.timer = null; pdfSearchRun((v || '').trim()); }, 300);
    }
    function pdfSearchEnter(back) {
      const S = pdfView.search, inp = document.getElementById('pdfSearchInput');
      const v = ((inp && inp.value) || '').trim().toLowerCase();
      if (S.timer) { clearTimeout(S.timer); S.timer = null; }
      if (v !== S.q) { pdfSearchRun(v); return; }
      pdfSearchStep(back ? -1 : 1);
    }
    function pdfSearchUpdateUi() {
      const S = pdfView.search, cnt = document.getElementById('pdfSearchCount');
      if (!cnt) return;
      const n = S.matches.length;
      if (!S.q) cnt.textContent = '';
      else if (n) cnt.textContent = `${S.idx + 1} / ${n}${S.done ? '' : '+'}`;
      else if (!S.done) cnt.textContent = '...';
      else cnt.textContent = S.noText ? 'No text' : '0';
    }
    async function pdfSearchRun(raw) {
      const S = pdfView.search;
      S.token++;
      const tk = S.token;
      S.q = String(raw || '').toLowerCase(); S.matches = []; S.byPage = {}; S.idx = -1; S.done = false; S.noText = false;
      pdfRedrawAll(); pdfSearchUpdateUi();
      if (!S.q || !pdfView.doc) { S.done = true; pdfSearchUpdateUi(); return; }
      let anyText = false, total = 0;
      const n = pdfView.numPages;
      for (let i = 1; i <= n; i++) {
        if (tk !== S.token || !pdfView.doc) return;
        let t = null;
        try { t = await pdfPageText(i); } catch (e) { t = null; }
        if (tk !== S.token) return;
        if (!t) continue;
        if (t.text.trim()) anyText = true;
        const found = pdfFindInPage(t, S.q);
        found.forEach(rects => {
          if (total >= 3000) return;
          total++;
          const mi = S.matches.length;
          S.matches.push({ pg: i, rects });
          (S.byPage[i] = S.byPage[i] || []).push(mi);
        });
        if (found.length) {
          if (S.idx < 0 && S.matches.length) pdfSearchGoto(0);
          else if (pdfView.pages[i - 1] && pdfView.pages[i - 1].rendered) pdfScheduleRedraw(i);
        }
        if (i % 6 === 0) { pdfSearchUpdateUi(); await new Promise(r => setTimeout(r, 0)); }
        if (total >= 3000) break;
      }
      if (tk !== S.token) return;
      S.done = true; S.noText = !anyText;
      pdfSearchUpdateUi();
      if (!anyText) showToast('This PDF has no searchable text (it may be a scanned document).');
    }
    function pdfSearchGoto(k) {
      const S = pdfView.search;
      const n = S.matches.length;
      if (!n) return;
      S.idx = ((k % n) + n) % n;
      const m = S.matches[S.idx];
      pdfGoTo(m.pg, false);
      const pg = pdfView.pages[m.pg - 1], sc = document.getElementById('pdfScroller');
      if (pg && sc) {
        const wr = pg.wrap.getBoundingClientRect(), sr = sc.getBoundingClientRect(), r = m.rects[0];
        const cx = (wr.left - sr.left) + sc.scrollLeft + (r.x + r.w / 2) * wr.width;
        const cy = (wr.top - sr.top) + sc.scrollTop + (r.y + r.h / 2) * wr.height;
        if (pdfView.orient === 'v') sc.scrollTop = Math.max(0, cy - sc.clientHeight * 0.35);
        else if (pdfView.zoom > 1.02) sc.scrollTop = Math.max(0, cy - sc.clientHeight / 2);
        if (pdfView.orient === 'v' || pdfView.zoom > 1.02) sc.scrollLeft = Math.max(0, cx - sc.clientWidth / 2);
        pdfView.seekUntil = Date.now() + 400;
      }
      pdfRedrawAll(); pdfSearchUpdateUi();
    }
    function pdfSearchStep(dir) {
      const S = pdfView.search;
      if (!S.matches.length) return;
      pdfSearchGoto(S.idx + dir);
    }

    /* =========================================================================
       TYPED TEXT: tap the page with the Text tool; tap text again to edit it, drag it to move it
       ========================================================================= */
    function pdfOpenTextSheet(ctx) {
      pdfView.editing = ctx;
      pdfView.sheetGuard = Date.now() + 500;
      const ann = ctx.ann;
      pdfView.ecolor = (ann ? ann.c : pdfView.tcolor).toUpperCase();
      pdfView.esize = ann ? ann.s : pdfView.tsize;
      document.getElementById('pdfTextTitle').textContent = ann ? 'Edit text' : 'Add text';
      document.getElementById('pdfTextDelete').classList.toggle('hidden', !ann);
      const ta = document.getElementById('pdfTextInput');
      ta.value = ann ? ann.t : '';
      pdfTextControls();
      document.getElementById('pdfTextSheet').classList.remove('hidden');
      setTimeout(() => { try { ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); } catch (e) {} }, 60);
    }
    function pdfTextControls() {
      const cur = pdfView.ecolor.toUpperCase();
      const list = [cur].concat(pdfView.recent.map(x => x.toUpperCase()).filter(x => x !== cur)).slice(0, 5);
      document.getElementById('pdfTextColors').innerHTML = list.map(c => pdfDot(c, c === cur, 'pdfEditColor')).join('') + pdfCustomDot(cur, 'pdfEditColor');
      document.getElementById('pdfTextSizes').innerHTML = PDF_TSIZES.map(([l, s]) => `<button onclick="pdfEditSize(${s})" class="${pdfView.esize === s ? 'on' : ''}" aria-label="Text size ${l}">${l}</button>`).join('');
    }
    function pdfEditColor(c) { pdfView.ecolor = String(c).toUpperCase(); pdfTextControls(); }
    function pdfEditSize(s) { pdfView.esize = s; pdfTextControls(); }
    function pdfCloseTextSheet() {
      document.getElementById('pdfTextSheet').classList.add('hidden');
      const ta = document.getElementById('pdfTextInput'); if (ta) ta.blur();
      pdfView.editing = null;
    }
    function pdfTextCancel() { pdfCloseTextSheet(); }
    function pdfTextSave() {
      const ctx = pdfView.editing;
      if (!ctx) return;
      const v = document.getElementById('pdfTextInput').value.replace(/\s+$/, '');
      const color = pdfView.ecolor, size = pdfView.esize;
      pdfCloseTextSheet();
      if (!v.trim()) { if (ctx.ann) { pdfRemoveText(ctx.pg, ctx.ann); } return; }
      if (ctx.ann) {
        const ann = ctx.ann;
        const before = { t: ann.t, c: ann.c, s: ann.s }, after = { t: v, c: color, s: size };
        if (before.t !== after.t || before.c !== after.c || before.s !== after.s) {
          Object.assign(ann, after);
          pdfView.undo.push({ t: 'edit', pg: ctx.pg, ann, before, after }); pdfView.redo = [];
          pdfMarkDirty();
        }
      } else {
        const ann = { k: 't', x: Math.min(0.92, Math.max(0, ctx.x)), y: Math.min(0.97, Math.max(0, ctx.y)), s: size, c: color, t: v };
        (pdfView.annots[ctx.pg] = pdfView.annots[ctx.pg] || []).push(ann);
        pdfView.undo.push({ t: 'add', pg: ctx.pg, stroke: ann }); pdfView.redo = [];
        pdfMarkDirty();
      }
      pdfView.tcolor = color; pdfView.tsize = size; pdfPushRecent(color); pdfSavePrefs();
      pdfScheduleRedraw(ctx.pg); pdfUpdateToolbar();
    }
    function pdfRemoveText(pg, ann) {
      const arr = pdfView.annots[pg] || [], k = arr.indexOf(ann);
      if (k < 0) return;
      arr.splice(k, 1);
      pdfView.undo.push({ t: 'erase', items: [{ pg, stroke: ann, index: k }] }); pdfView.redo = [];
      pdfMarkDirty(); pdfScheduleRedraw(pg); pdfUpdateToolbar();
    }
    function pdfTextDelete() {
      const ctx = pdfView.editing;
      pdfCloseTextSheet();
      if (ctx && ctx.ann) pdfRemoveText(ctx.pg, ctx.ann);
    }

    /* =========================================================================
       SHARE: write the highlights and typed text INTO a copy of the PDF, then open the share sheet
       ========================================================================= */
    LAZY_LIBS.pdfLib = ['js/pdf-lib.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js', 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js'];   // bundled copy first (MIT), CDNs only as a fallback
    async function ensurePdfLib() {
      if (window.PDFLib) return true;
      for (const u of LAZY_LIBS.pdfLib) {
        try { await loadScriptOnce(u); } catch (e) { continue; }
        if (window.PDFLib) return true;
      }
      return !!window.PDFLib;
    }
    function pdfCountAnnots() {
      let n = 0;
      Object.keys(pdfView.annots).forEach(k => { n += (pdfView.annots[k] || []).length; });
      return n;
    }
    /* where a point of the page as you see it (points, y down) lands in the PDF's own coordinates, for any page rotation / crop box */
    function pdfPageGeo(page) {
      const box = page.getCropBox ? page.getCropBox() : page.getMediaBox();
      const ang = (((page.getRotation().angle % 360) + 360) % 360);
      const W = box.width, H = box.height, sw = (ang === 90 || ang === 270);
      const map = (u, v) => {
        let X, Y;
        if (ang === 0) { X = u; Y = H - v; }
        else if (ang === 90) { X = v; Y = u; }
        else if (ang === 180) { X = W - u; Y = v; }
        else { X = W - v; Y = H - u; }
        return [box.x + X, box.y + Y];
      };
      return { ang, Dw: sw ? H : W, Dh: sw ? W : H, map };
    }
    const PDF_EXPORT_SCALE = 4;
    async function pdfTextPng(ann, Dw) {
      const W = Dw * PDF_EXPORT_SCALE, pad = 3;
      const probe = document.createElement('canvas').getContext('2d');
      const m = pdfTextMetrics(probe, ann, W);
      const c = document.createElement('canvas');
      c.width = Math.max(2, Math.ceil(m.w + pad * 2)); c.height = Math.max(2, Math.ceil(m.h + pad * 2));
      const ctx = c.getContext('2d');
      ctx.font = `${m.fs}px ${PDF_TEXT_FONT}`; ctx.fillStyle = ann.c; ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      m.lines.forEach((l, k) => ctx.fillText(l, pad, pad + k * m.lh));
      const blob = await new Promise(res => c.toBlob(res, 'image/png'));
      return { bytes: new Uint8Array(await blob.arrayBuffer()), w: c.width / PDF_EXPORT_SCALE, h: c.height / PDF_EXPORT_SCALE, pad: pad / PDF_EXPORT_SCALE };
    }
    async function pdfBuildAnnotatedBytes() {
      const blob = await getPdfBlob(pdfView.resId);
      if (!blob) throw new Error('original PDF missing');
      const L = window.PDFLib;
      const doc = await L.PDFDocument.load(new Uint8Array(await blob.arrayBuffer()), { ignoreEncryption: true });
      const pages = doc.getPages();
      const hex2rgb = h => { const n = parseInt(String(h).replace('#', ''), 16); return L.rgb(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255); };
      for (const key of Object.keys(pdfView.annots)) {
        const list = pdfView.annots[key] || [];
        const page = pages[parseInt(key) - 1];
        if (!list.length || !page) continue;
        const g = pdfPageGeo(page);
        const strokes = list.filter(s => s.k !== 't');
        if (strokes.length) {
          const gs = doc.context.obj({ Type: 'ExtGState', CA: 0.62, ca: 0.62, BM: 'Multiply' });
          const gsName = page.node.newExtGState('OrbitHL', gs);
          const ops = [L.pushGraphicsState(), L.setGraphicsState(gsName), L.setLineCap(L.LineCapStyle.Round), L.setLineJoin(L.LineJoinStyle.Round)];
          strokes.forEach(s => {
            const pts = [];
            for (let i = 0; i + 1 < s.p.length; i += 2) pts.push(g.map(s.p[i] * g.Dw, s.p[i + 1] * g.Dh));
            if (!pts.length) return;
            if (pts.length === 1) pts.push([pts[0][0], pts[0][1]]);
            ops.push(L.setLineWidth(Math.max(1, s.w * g.Dw)), L.setStrokingColor(hex2rgb(s.c)), L.moveTo(pts[0][0], pts[0][1]));
            for (let i = 1; i < pts.length; i++) ops.push(L.lineTo(pts[i][0], pts[i][1]));
            ops.push(L.stroke());
          });
          ops.push(L.popGraphicsState());
          page.pushOperators(...ops);
        }
        for (const s of list) {
          if (s.k !== 't' || !String(s.t || '').trim()) continue;
          const png = await pdfTextPng(s, g.Dw);
          const img = await doc.embedPng(png.bytes);
          const [x, y] = g.map(s.x * g.Dw - png.pad, s.y * g.Dh - png.pad + png.h);   // bottom-left corner of the picture, as displayed
          page.drawImage(img, { x, y, width: png.w, height: png.h, rotate: L.degrees(g.ang) });
        }
      }
      return await doc.save();
    }
    function pdfBytesToBase64(bytes) {
      let bin = '';
      for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
      return btoa(bin);
    }
    async function pdfShare() {
      if (pdfView.busy || !pdfView.resId) return;
      const r = pdfRec(pdfView.resId);
      if (!r) return;
      pdfView.busy = true;
      const btn = document.getElementById('pdfShareBtn');
      if (btn) btn.classList.add('on');
      try {
        await pdfFlushAnnots();
        const edited = pdfCountAnnots() > 0;
        let bytes = null, blob = null;
        if (edited) {
          showToast('Preparing your edited PDF...');
          if (!(await ensurePdfLib())) { showToast('Sharing your edits needs internet once to load the PDF tools.'); return; }
          bytes = await pdfBuildAnnotatedBytes();
          blob = new Blob([bytes], { type: 'application/pdf' });
        } else {
          blob = await getPdfBlob(pdfView.resId);
          if (!blob) { showToast('PDF file not found on this device.'); return; }
          bytes = new Uint8Array(await blob.arrayBuffer());
        }
        const base = String(r.fileName || r.title || 'document').replace(/\.pdf$/i, '').replace(/[^\w.\-]+/g, '_').replace(/^_+|_+$/g, '') || 'document';
        const fname = `${base}${edited ? '_edited' : ''}.pdf`;
        const cap = window.Capacitor, plugins = cap && cap.Plugins;
        const isNative = !!(cap && typeof cap.isNativePlatform === 'function' && cap.isNativePlatform());
        if (isNative && plugins && plugins.Filesystem && plugins.Share) {
          const written = await plugins.Filesystem.writeFile({ path: fname, data: pdfBytesToBase64(bytes), directory: 'CACHE' });
          await plugins.Share.share({ title: r.title, url: written.uri, dialogTitle: 'Share PDF' });
          return;
        }
        const file = (typeof File === 'function') ? new File([blob], fname, { type: 'application/pdf' }) : null;
        if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: r.title });
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = fname; document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        showToast('PDF saved to your downloads.');
      } catch (e) {
        const msg = String(e && (e.message || e)).toLowerCase();
        if (msg.includes('cancel') || msg.includes('dismiss') || msg.includes('abort')) return;
        console.error('PDF share failed', e);
        showToast('Could not prepare the PDF. Please try again.');
      } finally {
        pdfView.busy = false;
        if (btn) btn.classList.remove('on');
      }
    }

    async function openPdfExternally(id) {
      const resId = id || pdfView.resId;
      const r = pdfRec(resId);
      const blob = await getPdfBlob(resId);
      if (!r || !blob) { showToast('PDF file not found on this device.'); return; }
      const cap = window.Capacitor;
      const plugins = cap && cap.Plugins;
      const isNative = !!(cap && typeof cap.isNativePlatform === 'function' && cap.isNativePlatform());
      if (isNative && plugins && plugins.Filesystem && plugins.Share) {
        try {
          const safe = (r.fileName || (r.title + '.pdf')).replace(/[^\w.\-]+/g, '_');
          const written = await plugins.Filesystem.writeFile({ path: safe, data: await blobToBase64(blob), directory: 'CACHE' });
          await plugins.Share.share({ title: r.title, url: written.uri, dialogTitle: 'Open PDF with...' });
          return;
        } catch (e) {
          const msg = String(e && (e.message || e)).toLowerCase();
          if (msg.includes('cancel') || msg.includes('dismiss')) return;
          console.error('External open failed', e);
        }
      }
      try {
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      } catch (e) { showToast('Could not open the PDF.'); }
    }

    /* =========================================================================
       7. PROFILE, BACKUP & CAPACITOR EXPORT
       ========================================================================= */
    let subjectChartInstance = null;

    function renderProfileTab() {
      document.getElementById('profileStudentName').textContent = AppState.studentProfile.name;
      document.getElementById('profileLargeAvatar').textContent = AppState.studentProfile.initials || "CP";
      document.getElementById('profileLevelSub').textContent = `${AppState.activeLevel === 'INTER' ? 'CMA Intermediate' : 'CMA Final'} • ICMAI 2022 Syllabus`;
      document.getElementById('profileGroupScopeBadge').textContent = getScopeDisplayLabel();
      document.getElementById('profileActiveGroupLabel').textContent = getScopeDisplayLabel();

      populateRollingExamAttempts();

      const dStr = AppState.studentProfile.examDate || deriveDateFromAttempt(AppState.studentProfile.examAttempt || "Dec 2026");
      const dObj = new Date(`${dStr}T00:00:00`);
      const formatted = isNaN(dObj.getTime()) ? dStr : dObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      document.getElementById('targetExamDateDisplay').textContent = formatted;

      renderSubjectAnalyticsChart();
    }

    function renderSubjectAnalyticsChart() {
      const ctx = document.getElementById('subjectCompletionChart');
      if (ctx && typeof Chart === 'undefined') { ensureChartJs().then(ok => { if (ok) renderSubjectAnalyticsChart(); }); return; }
      if (!ctx) return;
      if (subjectChartInstance) subjectChartInstance.destroy();

      const papers = getScopedPapers();
      const labels = papers.map(p => p.code);
      const percentages = papers.map(p => {
        let tot = 0, comp = 0;
        p.chapters.forEach(c => { tot += c.totalLectures; comp += c.completedLectures; });
        return tot > 0 ? Math.round((comp / tot) * 100) : 0;
      });

      const isDark = document.documentElement.classList.contains('dark');
      const textColor = isDark ? '#94A3B8' : '#64748B';

      subjectChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: labels,
          datasets: [{
            data: percentages,
            backgroundColor: ['#2563EB', '#22D3EE', '#4F46E5', '#10B981', '#F59E0B', '#0EA5E9', '#14B8A6', '#64748B']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: textColor, font: { size: 10, weight: 'bold' } }
            }
          }
        }
      });
    }






    let isResettingData = false;

    function confirmResetAllData() {
      const m = document.getElementById('resetConfirmModal');
      if (m) m.classList.remove('hidden');
    }

    function closeResetConfirm() {
      const m = document.getElementById('resetConfirmModal');
      if (m) m.classList.add('hidden');
    }

    function buildBackupObject() {
      AppState.syllabusData = {
        INTER: { groups: SYLLABUS.INTER.groups },
        FINAL: { groups: SYLLABUS.FINAL.groups }
      };
      const obj = JSON.parse(JSON.stringify(AppState));
      obj.backupMeta = { app: 'CMA ORBIT', version: 3, exportedAt: new Date().toISOString() };
      return obj;
    }

    function backupFileName() {
      return `CMA_ORBIT_BACKUP_${todayISO()}.json`;
    }

    function downloadBackupWeb(text, fname) {
      try {
        const blob = new Blob([text], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = fname;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        return true;
      } catch (e) { return false; }
    }

    async function exportDataBackup() {
      const jsonStr = JSON.stringify(buildBackupObject(), null, 2);
      const fname = backupFileName();
      const cap = window.Capacitor;
      const plugins = cap && cap.Plugins;
      const isNative = !!(cap && typeof cap.isNativePlatform === 'function' && cap.isNativePlatform());

      if (isNative && plugins && plugins.Filesystem && plugins.Share) {
        try {
          const written = await plugins.Filesystem.writeFile({ path: fname, data: jsonStr, directory: 'CACHE', encoding: 'utf8' });
          await plugins.Share.share({ title: 'CMA ORBIT Backup', text: 'CMA ORBIT study backup file', url: written.uri, dialogTitle: 'Save your backup (Drive / Files / WhatsApp)' });
          showToast('Backup ready - pick where to save it.');
          return;
        } catch (e) {
          const msg = String(e && (e.message || e)).toLowerCase();
          if (msg.includes('cancel') || msg.includes('dismiss')) return;
          console.error('Native backup failed:', e);
        }
      }
      if (!isNative && downloadBackupWeb(jsonStr, fname)) { showToast('Backup file downloaded.'); return; }
      // last resort: show the backup as text that can be copied
      openBackupTextModal(jsonStr);
      showToast('Copy this text and keep it safe, or restore it later.');
    }

    function openBackupTextModal(prefill) {
      document.getElementById('backupTextArea').value = prefill || '';
      document.getElementById('backupTextModal').classList.remove('hidden');
    }
    function closeBackupTextModal() { document.getElementById('backupTextModal').classList.add('hidden'); }
    function showBackupText() {
      document.getElementById('backupTextArea').value = JSON.stringify(buildBackupObject());
      document.getElementById('backupTextModal').classList.remove('hidden');
    }
    async function copyBackupText() {
      const ta = document.getElementById('backupTextArea');
      try {
        await navigator.clipboard.writeText(ta.value);
        showToast('Backup text copied to clipboard.');
      } catch (e) {
        ta.select(); document.execCommand && document.execCommand('copy');
        showToast('Selected - press copy if it was not copied automatically.');
      }
    }
    function restoreFromBackupTextarea() {
      applyBackupText(document.getElementById('backupTextArea').value);
    }

    function triggerImportFileInput() {
      document.getElementById('importFileInput').click();
    }

    function importDataBackup(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => { applyBackupText(evt.target.result); };
      reader.onerror = () => showToast('Could not read that file.');
      reader.readAsText(file);
      e.target.value = '';
    }

    function applyBackupText(text) {
      let parsed;
      try { parsed = JSON.parse(text); } catch (err) { showToast('That is not a valid backup file (JSON error).'); return; }
      if (parsed && parsed.data && parsed.data.studentProfile) parsed = parsed.data;
      if (!parsed || !parsed.studentProfile) { showToast('Invalid CMA ORBIT backup file.'); return; }
      const when = parsed.backupMeta && parsed.backupMeta.exportedAt ? ` (saved ${parsed.backupMeta.exportedAt.slice(0, 10)})` : '';
      askConfirm('Restore this backup?', `Your current data will be replaced by the backup${when}.`, 'Restore', () => applyBackupObject(parsed));
    }

    function applyBackupObject(obj) {
      AppState = obj;
      delete AppState.backupMeta;
      normalizeState();
      applySyllabusFromState();
      closeBackupTextModal();
      saveState();
      setupTheme();
      renderAll();
      showToast('Backup restored successfully!');
    }

    function performResetAllData() {
      // Block any further saveState() calls so old progress is not written back
      isResettingData = true;
      try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
      try { localStorage.clear(); } catch (e) {}
      try { sessionStorage.clear(); } catch (e) {}
      fileStoreWipe();
      closeResetConfirm();
      window.location.reload();
    }

    function openCapacitorDocsModal() {
      document.getElementById('capacitorDocsModal').classList.remove('hidden');
    }

    function closeCapacitorDocsModal() {
      document.getElementById('capacitorDocsModal').classList.add('hidden');
    }

    /* =========================================================================
       8. APPLICATION BOOTSTRAPPER
       ========================================================================= */
    window.onload = function() {
      loadState();
      setupTheme();
      renderHomeTab();                 // other tabs render when you open them
      applyNavState('home');
      afterSplash(() => { startCountdownTicker(); });
      document.addEventListener('visibilitychange', () => { if (!document.hidden) pomoTick(); });
    };
