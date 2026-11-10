/* CMA ORBIT - daily motivation & discipline quotes
   c = category: discipline | motivation | focus | exam | cma
   Quotes with a person's name are widely attributed lines; "CMA Orbit" lines are original. */
const QUOTE_CATEGORY_LABEL = {
  discipline: 'Discipline',
  motivation: 'Motivation',
  focus: 'Focus',
  exam: 'Exam Hall',
  cma: 'CMA Mindset'
};

const CMA_MOTIVATION_QUOTES = [
  /* ---------- DISCIPLINE ---------- */
  { c: 'discipline', a: 'Jim Rohn', q: "Discipline is the bridge between goals and accomplishment." },
  { c: 'discipline', a: 'John C. Maxwell', q: "Motivation gets you going, but discipline keeps you growing." },
  { c: 'discipline', a: 'Will Durant', q: "We are what we repeatedly do. Excellence, then, is not an act, but a habit." },
  { c: 'discipline', a: 'Anonymous', q: "You will not always feel motivated, so you must learn to be disciplined." },
  { c: 'discipline', a: 'Gretchen Rubin', q: "What you do every day matters more than what you do once in a while." },
  { c: 'discipline', a: 'Tim Notke', q: "Hard work beats talent when talent does not work hard." },
  { c: 'discipline', a: 'Benjamin Franklin', q: "Well done is better than well said." },
  { c: 'discipline', a: 'Peter Marshall', q: "Small deeds done are better than great deeds planned." },
  { c: 'discipline', a: 'CMA Orbit', q: "Discipline is deciding in advance, so you never have to negotiate with your mood." },
  { c: 'discipline', a: 'CMA Orbit', q: "Your timetable is a promise to your future self. Keep it even when nobody is watching." },
  { c: 'discipline', a: 'CMA Orbit', q: "Show up on the days you do not feel like it. Those are the days that build the rank." },
  { c: 'discipline', a: 'CMA Orbit', q: "Phone away, notes open, timer on. Discipline begins with a single setup." },
  { c: 'discipline', a: 'CMA Orbit', q: "Do the hardest subject first, while your mind is fresh and your excuses are still asleep." },
  { c: 'discipline', a: 'CMA Orbit', q: "Missing one day is an accident. Missing two is the start of a habit. Never miss twice." },
  { c: 'discipline', a: 'CMA Orbit', q: "Rules beat motivation. Set the rule, then follow the rule." },
  { c: 'discipline', a: 'CMA Orbit', q: "Start the lecture before you feel ready. Readiness is a result of starting, not a requirement." },
  { c: 'discipline', a: 'CMA Orbit', q: "A tired yes to your study block is worth more than an energetic yes to tomorrow." },
  { c: 'discipline', a: 'CMA Orbit', q: "Discipline is a quiet form of self-respect." },
  { c: 'discipline', a: 'CMA Orbit', q: "The 5-minute rule: open the book for five minutes. Most days you will not stop." },
  { c: 'discipline', a: 'CMA Orbit', q: "Protect your study hours the way you would protect an exam-day admit card." },
  { c: 'discipline', a: 'CMA Orbit', q: "Comfort is a loud voice; your goal is a quiet one. Listen to the quiet one." },
  { c: 'discipline', a: 'CMA Orbit', q: "Every lecture you finish on schedule is a vote for the person you are becoming." },
  { c: 'discipline', a: 'CMA Orbit', q: "Do not break the chain. Let your streak be louder than your excuses." },
  { c: 'discipline', a: 'CMA Orbit', q: "Discipline today, freedom on result day." },
  { c: 'discipline', a: 'CMA Orbit', q: "Plan the night before, win the morning after." },
  { c: 'discipline', a: 'CMA Orbit', q: "Sleep on time, wake on time, study on time. Three small habits, one big rank." },
  { c: 'discipline', a: 'CMA Orbit', q: "You do not rise to the level of your goals; you fall to the level of your daily routine." },
  { c: 'discipline', a: 'CMA Orbit', q: "Say no to one distraction today. That is the entire assignment." },
  { c: 'discipline', a: 'CMA Orbit', q: "The best time to study is the time you wrote in your planner." },
  { c: 'discipline', a: 'CMA Orbit', q: "Ten disciplined pages beat one heroic all-nighter." },
  { c: 'discipline', a: 'CMA Orbit', q: "Be strict with your schedule and kind to yourself. Both are needed." },
  { c: 'discipline', a: 'CMA Orbit', q: "Finish what you planned today, even if it is small. Finishing is a muscle." },
  { c: 'discipline', a: 'CMA Orbit', q: "Consistency is not about perfect days. It is about not abandoning the plan on imperfect ones." },
  { c: 'discipline', a: 'CMA Orbit', q: "When you feel like quitting, shorten the session - do not cancel it." },
  { c: 'discipline', a: 'CMA Orbit', q: "Your future rank is being decided by ordinary Tuesday evenings." },
  { c: 'discipline', a: 'CMA Orbit', q: "A closed phone and an open textbook is the cheapest upgrade you will ever make." },
  { c: 'discipline', a: 'CMA Orbit', q: "Discipline means doing the work you promised, in the mood you actually have." },
  { c: 'discipline', a: 'CMA Orbit', q: "Treat every study block like an appointment you cannot reschedule." },
  { c: 'discipline', a: 'CMA Orbit', q: "Tonight's discipline is tomorrow's confidence." },
  { c: 'discipline', a: 'CMA Orbit', q: "Make it easy to start: books out, desk clear, timer ready. Remove every excuse in advance." },

  /* ---------- MOTIVATION ---------- */
  { c: 'motivation', a: 'Swami Vivekananda', q: "Arise, awake, and stop not till the goal is reached." },
  { c: 'motivation', a: 'Swami Vivekananda', q: "Take up one idea. Make that one idea your life; think of it, dream of it, live on that idea." },
  { c: 'motivation', a: 'A.P.J. Abdul Kalam', q: "Dreams are not what you see in sleep. Dreams are those that do not let you sleep." },
  { c: 'motivation', a: 'A.P.J. Abdul Kalam', q: "If you want to shine like a sun, first burn like a sun." },
  { c: 'motivation', a: 'A.P.J. Abdul Kalam', q: "Excellence is a continuous process and not an accident." },
  { c: 'motivation', a: 'Mahatma Gandhi', q: "The future depends on what you do today." },
  { c: 'motivation', a: 'Mahatma Gandhi', q: "Strength does not come from physical capacity. It comes from an indomitable will." },
  { c: 'motivation', a: 'Nelson Mandela', q: "It always seems impossible until it is done." },
  { c: 'motivation', a: 'Henry Ford', q: "Whether you think you can, or you think you cannot, you are right." },
  { c: 'motivation', a: 'Henry Ford', q: "Failure is simply the opportunity to begin again, this time more intelligently." },
  { c: 'motivation', a: 'Lao Tzu', q: "A journey of a thousand miles begins with a single step." },
  { c: 'motivation', a: 'Confucius', q: "It does not matter how slowly you go as long as you do not stop." },
  { c: 'motivation', a: 'Robert Collier', q: "Success is the sum of small efforts, repeated day in and day out." },
  { c: 'motivation', a: 'Zig Ziglar', q: "You do not have to be great to start, but you have to start to be great." },
  { c: 'motivation', a: 'Thomas Edison', q: "Genius is one percent inspiration and ninety-nine percent perspiration." },
  { c: 'motivation', a: 'Theodore Roosevelt', q: "Do what you can, with what you have, where you are." },
  { c: 'motivation', a: 'Helen Hayes', q: "The expert in anything was once a beginner." },
  { c: 'motivation', a: 'Japanese proverb', q: "Fall seven times, stand up eight." },
  { c: 'motivation', a: 'Robert H. Schuller', q: "Tough times never last, but tough people do." },
  { c: 'motivation', a: 'Friedrich Nietzsche', q: "He who has a why to live can bear almost any how." },
  { c: 'motivation', a: 'Benjamin Franklin', q: "Energy and persistence conquer all things." },
  { c: 'motivation', a: 'Jim Watkins', q: "A river cuts through rock, not because of its power, but because of its persistence." },
  { c: 'motivation', a: 'W. B. Yeats', q: "Do not wait to strike till the iron is hot; but make it hot by striking." },
  { c: 'motivation', a: 'CMA Orbit', q: "Someday you will sign your name with CMA after it. Study like that day is already on the calendar." },
  { c: 'motivation', a: 'CMA Orbit', q: "Your parents' hope, your own effort, one exam hall. Make it count." },
  { c: 'motivation', a: 'CMA Orbit', q: "You are closer today than you were yesterday. That is all progress ever is." },
  { c: 'motivation', a: 'CMA Orbit', q: "Every chapter you complete is one less thing standing between you and the result you want." },
  { c: 'motivation', a: 'CMA Orbit', q: "Tough syllabus, tougher student. Keep going." },
  { c: 'motivation', a: 'CMA Orbit', q: "Do not compare your chapter one with someone else's chapter ten. Run your own orbit." },
  { c: 'motivation', a: 'CMA Orbit', q: "One more lecture. One more page. One more question. That is how ranks are built." },
  { c: 'motivation', a: 'CMA Orbit', q: "The version of you who passes this exam is made by what you do this week." },
  { c: 'motivation', a: 'CMA Orbit', q: "Struggle in your study room is cheaper than regret in the result room." },
  { c: 'motivation', a: 'CMA Orbit', q: "Progress is quiet. Keep stacking the quiet days." },
  { c: 'motivation', a: 'CMA Orbit', q: "A bad study day still beats no study day. Show up, even small." },
  { c: 'motivation', a: 'CMA Orbit', q: "You have survived every hard day so far. Today is no different." },
  { c: 'motivation', a: 'CMA Orbit', q: "Believe in the process on the days the results are not visible yet." },
  { c: 'motivation', a: 'CMA Orbit', q: "Small wins count: one solved illustration is a win. Collect them daily." },
  { c: 'motivation', a: 'CMA Orbit', q: "Be the student who is still trying when others have gone quiet." },
  { c: 'motivation', a: 'CMA Orbit', q: "Let your effort be so steady that doubt gets bored and leaves." },
  { c: 'motivation', a: 'CMA Orbit', q: "Orbit, do not drift. Keep circling your goal until you land." },

  /* ---------- FOCUS ---------- */
  { c: 'focus', a: 'Peter Drucker', q: "What gets measured gets managed." },
  { c: 'focus', a: 'Sam Levenson', q: "Do not watch the clock; do what it does. Keep going." },
  { c: 'focus', a: 'Walter Elliot', q: "Perseverance is not a long race; it is many short races one after the other." },
  { c: 'focus', a: 'Malcolm Gladwell', q: "Practice is not the thing you do once you are good. It is the thing you do that makes you good." },
  { c: 'focus', a: 'CMA Orbit', q: "One subject, one timer, one task. Focus is simply saying no to everything else for 50 minutes." },
  { c: 'focus', a: 'CMA Orbit', q: "Deep work is a skill. Every Pomodoro you finish makes the next one easier." },
  { c: 'focus', a: 'CMA Orbit', q: "Switching tabs is switching goals. Stay on the page." },
  { c: 'focus', a: 'CMA Orbit', q: "Attention is the real currency of a ranker. Spend it carefully." },
  { c: 'focus', a: 'CMA Orbit', q: "Fifty minutes of full focus beats three hours of half attention." },
  { c: 'focus', a: 'CMA Orbit', q: "Write down the distraction, then return to the page. It will wait for your break." },
  { c: 'focus', a: 'CMA Orbit', q: "Clear desk, clear mind. Remove everything that is not today's chapter." },
  { c: 'focus', a: 'CMA Orbit', q: "Single-task your way to the result. Multitasking is just slow switching." },
  { c: 'focus', a: 'CMA Orbit', q: "When the timer starts, the world can wait. When it ends, take a real break." },
  { c: 'focus', a: 'CMA Orbit', q: "Know today's one most important topic before you open the book." },
  { c: 'focus', a: 'CMA Orbit', q: "Break big chapters into small targets. A finished target feels like momentum." },
  { c: 'focus', a: 'CMA Orbit', q: "Quality of attention matters more than the number of hours on the clock." },
  { c: 'focus', a: 'CMA Orbit', q: "Rest is part of the plan. Ten honest minutes of break buys the next fifty of focus." },
  { c: 'focus', a: 'CMA Orbit', q: "Notifications off. Goals on." },
  { c: 'focus', a: 'CMA Orbit', q: "Understand one topic fully before rushing to the next. Depth is faster in the long run." },
  { c: 'focus', a: 'CMA Orbit', q: "The syllabus is big. Your next ten minutes are small. Focus on the ten minutes." },

  /* ---------- EXAM HALL ---------- */
  { c: 'exam', a: 'Benjamin Franklin', q: "By failing to prepare, you are preparing to fail." },
  { c: 'exam', a: 'Antoine de Saint-Exupery', q: "A goal without a plan is just a wish." },
  { c: 'exam', a: 'CMA Orbit', q: "Mock tests are rehearsals. Make mistakes now so the exam hall feels familiar." },
  { c: 'exam', a: 'CMA Orbit', q: "Every wrong answer in your Mistake Book is a mark saved on exam day." },
  { c: 'exam', a: 'CMA Orbit', q: "Revision is where understanding becomes memory. Do not skip your 1-7-15-30 reviews." },
  { c: 'exam', a: 'CMA Orbit', q: "Solve it, check it, fix it, solve it again. That is how formulas stick." },
  { c: 'exam', a: 'CMA Orbit', q: "In the exam hall you rise to your practice, not to your hopes." },
  { c: 'exam', a: 'CMA Orbit', q: "Read the question twice, answer once. Careful beats fast." },
  { c: 'exam', a: 'CMA Orbit', q: "Attempt every MCQ. With no negative marking, a guess costs nothing and may earn two marks." },
  { c: 'exam', a: 'CMA Orbit', q: "Two marks per MCQ means every question is a small victory. Collect as many as you can." },
  { c: 'exam', a: 'CMA Orbit', q: "Time-box your practice tests. The clock is part of the exam." },
  { c: 'exam', a: 'CMA Orbit', q: "Revise from your own notes and formula vault. Your own words stick best." },
  { c: 'exam', a: 'CMA Orbit', q: "Last week before the exam: revise, rest, repeat. Do not start big new topics." },
  { c: 'exam', a: 'CMA Orbit', q: "Chapter-wise tests show where marks leak. Fix the weakest chapter first." },
  { c: 'exam', a: 'CMA Orbit', q: "Confidence on exam day is just practice you did earlier, showing up on time." },
  { c: 'exam', a: 'CMA Orbit', q: "Do not chase every topic. Master the high-weightage ones, then widen your net." },
  { c: 'exam', a: 'CMA Orbit', q: "Sleep before the exam is also part of your syllabus." },
  { c: 'exam', a: 'CMA Orbit', q: "A calm mind recalls more than a crammed one. Revise smart, sleep early." },
  { c: 'exam', a: 'CMA Orbit', q: "Your exemption is built chapter by chapter, test by test." },
  { c: 'exam', a: 'CMA Orbit', q: "Before you sit for the paper, remember: you already did the hard part by preparing." },

  /* ---------- CMA MINDSET ---------- */
  { c: 'cma', a: 'ICMAI Ranker Creed', q: "Consistency in standard costing and legal provisions today guarantees an All India Rank tomorrow." },
  { c: 'cma', a: 'Intermediate & Final Mindset', q: "Every single illustration solved in Marginal Costing brings you one step closer to putting 'CMA' before your name." },
  { c: 'cma', a: 'Management Accountant Rulebook', q: "The pain of studying hard today is nothing compared to the pride of clearing both groups together." },
  { c: 'cma', a: 'Strategic Professional Guide', q: "Do not just memorise provisions. Understand the economic substance behind every Ind AS and Cost Accounting Standard." },
  { c: 'cma', a: 'CMA Exam Hall Law', q: "A difficult mock exam is simply preparation for an effortless main examination hall experience." },
  { c: 'cma', a: 'ICMAI Excellence Axiom', q: "Small daily disciplines in your timetable compound into an exemption across all practical papers." },
  { c: 'cma', a: 'Peter Drucker', q: "The best way to predict the future is to create it." },
  { c: 'cma', a: 'CMA Orbit', q: "A management accountant turns numbers into decisions. Practise turning today's hours into results." },
  { c: 'cma', a: 'CMA Orbit', q: "Costing teaches you that every rupee has a purpose. Treat every study hour the same way." },
  { c: 'cma', a: 'CMA Orbit', q: "Budget your time like a good cost accountant: plan, measure, review, improve." },
  { c: 'cma', a: 'CMA Orbit', q: "Variance analysis works for study plans too. Compare planned vs actual lectures and fix the gap." },
  { c: 'cma', a: 'CMA Orbit', q: "Your study schedule is a budget. Spend hours where the marks are." },
  { c: 'cma', a: 'CMA Orbit', q: "Think like a CMA: ask why, measure it, then improve it." },
  { c: 'cma', a: 'CMA Orbit', q: "Marginal thinking: the next hour of study always adds more than the next hour of scrolling." },
  { c: 'cma', a: 'CMA Orbit', q: "Break-even for your effort: the point where daily study becomes a habit. Keep going until you cross it." },
  { c: 'cma', a: 'CMA Orbit', q: "A good CMA focuses on what is controllable. Your effort today is fully in your control." },
  { c: 'cma', a: 'CMA Orbit', q: "From cost sheets to strategy, every chapter is a tool you will use in your career. Learn it properly." },
  { c: 'cma', a: 'CMA Orbit', q: "Group by group, paper by paper, you are building a profession." },
  { c: 'cma', a: 'CMA Orbit', q: "Turn your syllabus into a project plan: scope, schedule, milestones, review." },
  { c: 'cma', a: 'CMA Orbit', q: "Every lecture you complete is a posted entry. Keep your ledger of effort balanced." }
];

/* ---------- daily rotation ---------- */
function quoteDayNumber(offsetDays) {
  const d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000) + (offsetDays || 0);
}

// deterministic shuffle so each quote appears once per cycle, in an order that looks random
function quoteCycleOrder(n, cycle) {
  const idx = Array.from({ length: n }, (_, i) => i);
  let s = (cycle * 2654435761 + 12345) >>> 0;
  for (let i = n - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const k = s % (i + 1);
    [idx[i], idx[k]] = [idx[k], idx[i]];
  }
  return idx;
}

function getQuoteOfDay(category, offsetDays) {
  const pool = category ? CMA_MOTIVATION_QUOTES.filter(q => q.c === category) : CMA_MOTIVATION_QUOTES;
  const n = pool.length;
  const day = quoteDayNumber(offsetDays);
  const cycle = Math.floor(day / n);
  const pos = ((day % n) + n) % n;
  const order = quoteCycleOrder(n, cycle);
  // never show the same quote on the last day of one cycle and the first day of the next
  if (n > 1 && order[0] === quoteCycleOrder(n, cycle - 1)[n - 1]) { const t = order[0]; order[0] = order[1]; order[1] = t; }
  return pool[order[pos]];
}
