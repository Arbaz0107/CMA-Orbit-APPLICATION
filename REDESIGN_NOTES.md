# CMA Orbit v4.0.0 — UI/UX redesign

Only presentation changed. Storage key, state schema, appId, signing, and all business logic are untouched.

- Design tokens: www/js/config.js (Tailwind palette) and www/css/style.css (CSS variables, light + dark)
- Header / bottom nav / splash / Home / Practice / Planner / Profile / exam markup: www/index.html
- Contextual header titles + Continue-card data + nav state: www/js/app.js (setHeaderContext, applyNavState, renderHomeTab)
- Icons, splash, launch theme: icons/res/*, scripts/patch_android_theme.py, capacitor.config.json

Build: push to GitHub; the existing build-apk workflow produces the APK (same package id + key, so it installs over the old app and keeps data).

## v4.1.0
- Header greeting shows the full name (wraps to two lines if long).
- Study Hours: fixed hours always being logged to Thursday; weeks now reset every Monday (old weeks archived); chart is built in (no internet library needed).
- Focus Timer redesigned; focus minutes per day are logged and charted (7/14/30 days).
- Library: new Papers tab (PYQ / MQP / MTP per subject, with question paper + answer key as PDF or link, attempted + score tracking); resources gain star / done, sort, stats.
- Notes Hub: tags, colours, pin, checklists ([ ] / [x]), tag filters, sort, copy.
- New data (all additive): AppState.papers, pomodoroMinutes, weekStart, weeklyArchive, note.tags/pinned/color, resource.starred/done.

## v4.2.0 — CMA Orbit 2.0, phase 1 (brand + design system)
Presentation only. Storage key, state schema, appId, signing and all logic are untouched.
- New logo (CMA monogram + orbit + satellite), Indigo Classic: icons/res/* (adaptive, square, round, splash), www/logo-mark.png, brand/ (generator scripts, previews, other colourways).
- Palette: www/js/config.js (Tailwind `cma-*` scale now indigo, so every existing bg-cma-* / text-cma-* utility re-themes) and CSS tokens in www/css/orbit2.css (light + dark).
- www/css/orbit2.css (loaded after style.css): large radii, soft shadows, new buttons, floating pill bottom navigation, new header, dialogs + bottom sheets, toast, in-app splash.
- www/js/orbit2.js: every <select> now opens a themed bottom sheet (search when >8 options, subject icons, selected state). The <select> remains the source of truth and fires its normal input/change events. Add `data-native` to a select to keep the system picker.

### NOT done yet (needs follow-up phases)
Home hero/arc dashboard, Pomodoro stats/history/focus mode rebuild, Formula Hub dashboard + revision mode, Mistake Book analytics/repeat detection/integrations, MCQ/Mock result redesign, Planner calendar timeline, Revision dashboard, per-screen card layouts. Not verified on a real device/emulator.

## v4.4.0 — features (additive modules; core logic wrapped, not replaced)
- js/home2.js: Home hero ring (real syllabus %, today's hours, tasks done/remaining, streak, target), subject cards (real progress), formula of the day (from your own formula bank), revision reminder.
- js/pomo2.js: subject/topic linking, short + long break, focus-mode fullscreen, totals/week/streak, focus-by-subject, session history. A log entry is written only when a focus timer actually completes (AppState.pomodoroLog).
- js/formula2.js: dashboard (total/favourites/recent/due/difficult/pinned, revision progress, recall rate), subject categories, pin / personal note / share / mark revised / focus, variables + note + related fields, wider search, revision ratings (Know it / Need revision / Difficult / Next).
- js/mistake2.js: Error Intelligence (types, priority, statuses, spaced review, repeat detection, analytics, detail page, add/edit form with optional screenshot, links to Formula + Pomodoro, due-for-revision card in Revision). Old records are kept and given defaults; "resolve" now marks Mastered instead of deleting.
- New additive AppState keys: pomodoroLog, pomodoroLink, pomodoroLongBreak; formula fields pinned/notes/variables/tip/related/difficulty/lastViewed/revisedCount/lastRevised/revLog; mistake fields type/status/priority/created/revLog/nextReview/etc.

### Still NOT redesigned
MCQ question screen + mock result dashboard (wrong answers are still captured to Mistake Book automatically at finish), Study subject detail screens, Planner calendar/timeline, Revision dashboard layout, Notes, Resource Library, Progress analytics dashboard. Not tested on a real device.

## v4.5.0 — Study tab rebuild, PDF toolbar, clipping fixes
Presentation only. Storage key, state schema, appId, signing and all logic are untouched.
- Study tab rebuilt on the Orbit palette (lavender / mustard / teal / pink / orange / charcoal on cream; light + dark): hero with progress ring and stats, quick actions, group switch, subject cards, subject panel with "Next up", lecture due-date planner, wrapping chapter filter, chapter cards with lecture-by-lecture progress squares, stepper, Finish, Revised, Files, Edit, Delete. All existing handlers kept. Code: renderStudyTab / renderStudyHero / renderLecturePlan in js/app.js, styles `.st-*` at the end of css/orbit2.css. The old rainbow per-subject gradients are gone.
- PDF viewer: the highlight colour/size palette no longer floats over the page. It is now a compact row docked above the tools (style · 5 colours · S/M/L), never overlaps the document, fits a 360px phone, and the Highlight button shows the active colour as a dot. Tap Highlight again to collapse the row. Horizontal layout re-fits when the row opens or closes. Viewer chrome recoloured to the app charcoal.
- Cut-off fixes: exam question-number navigator (selection ring was clipped by its scroll box; bigger pills, theme ring colours); Revision Planner filter chips (All / Due now / Upcoming / Not finished / Revised) now wrap instead of scrolling off-screen; chip bars in Library, Notes and Formulas got room for their edges; Planner roadmap rows restyled with a proper-size Done button.
- Not tested on a real device/emulator (checked in a headless browser only).

## v4.6.0 — PDF viewer: pinch zoom, search, typed text, more colours, landscape, share
Presentation + new viewer features only. Storage key, state schema, appId and signing are untouched. Saved highlights from older versions open unchanged.
- Two-finger pinch zoom in every mode (Read, Highlight, Text, Eraser, reading mode). Live CSS preview while pinching, sharp re-render on release, anchored on the point between your fingers. 60% to 400%. In a drawing tool, two fingers pan/zoom and never draw.
- Search: magnifier in the header. Finds text across the whole PDF (phrases too), shows "3 / 12", next/previous, highlights every hit on the page (current hit darker). Scanned PDFs have no text layer and say so.
- Text tool: tap the page to type a note (multi-line), pick colour and size, tap text again to edit or delete, drag it to move it. Undo/redo cover add, edit, move, delete. Saved with the other annotations.
- Colours: 17 presets + a custom colour picker. The palette row shows your most recently used colours; the palette button opens the full tray. Text and highlighter remember their own colour.
- Landscape: rotate the phone and the controls move into a side rail so the page gets the full height; pages re-fit on rotation and keep your place. Works in vertical and horizontal page modes and in reading mode.
- Share: header button writes the highlights and typed text into a copy of the PDF (`<name>_edited.pdf`) and opens the Android share sheet. With no edits it shares the original. Handles rotated and cropped pages. pdf-lib 1.17.1 (MIT) is bundled in js/pdf-lib.min.js; typed text is embedded as an image so any language works.
- Header now: Back, title, Search, Share, More. Layout (vertical/horizontal), Reading mode and "Open in another app" moved into the More menu.
- Tested in a headless browser against real PDFs (plain, rotated 90/180/270, cropped); NOT yet tested on a physical phone.

## v4.7.0 — Neo-Brutal theme (added on top of v4.6; PDF viewer untouched)
New files only, plus three hooks in www/index.html (head script, two <link>, one <script>):
- www/css/neo.css — Neo-Brutal theme, active when <html class="neo"> (default). Thick black outlines, hard offset shadows, flat colour, folder-tab cards, yellow primary buttons, outlined inputs/chips/popups/nav, dark variant, and rules for the v4.5 Study tab (st-* classes).
  Every rule excludes #pdfViewerModal, and the original colour tokens are restored inside it, so the PDF viewer is pixel-identical with Neo on or off (checked in light and dark).
- www/js/theme2.js — Dashboard > "App style" switch (Neo / Soft). Per-device (localStorage "o2.theme"). Soft = the exact v4.6 look.
- www/css/layout-fit.css + 2-line change in www/js/formula2.js — fit-to-screen safety: popups scroll as a whole with sticky footers, Formula Vault dashboard is collapsible, narrow-phone header buttons go icon-only. Fixes cut-off buttons (Formula Vault footer, MCQ Importer footer) found at 320x568 and 360x640.
Checked in headless Chromium at 320x568, 360x640, 390x740, 412x850: no clipped / off-screen / overlapping buttons. Not tested on a physical phone.
