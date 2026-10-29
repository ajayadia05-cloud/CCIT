/* ==========================================================================
   CCIT Arena Studio — Interactive Application Controller (app.js)
   Features:
   1. Login Gate (User Admin & User Murid) + Quick Role Fill & Manual Auth
   2. Full Admin Student Management (Add, Edit Password/Profile, Toggle Active, Reset, Delete)
   3. Expandable/Collapsible Sidebar Accordion for Sub-Materi A, B, C, D + Nested Sub-Menus
   4. Interactive Materi View: Voice Narrator, Flip Flashcards, Jembatan Keledai & Simulators
   5. Pre-Quiz Memory Booster + 20 Practice Questions per Sub-Materi (80 Questions Total)
      with Immediate Post-Answer Discussion & Modal View
   6. Comprehensive Realtime Score Recap (Per Sub-Materi & 80-Question Table)
   ========================================================================== */

(function () {
  "use strict";

  const DB_STORAGE_KEY = "ccit_arena_studio_db_v1";
  const SESSION_STORAGE_KEY = "ccit_arena_active_user_v1";

  const realtimeChannel =
    typeof BroadcastChannel !== "undefined"
      ? new BroadcastChannel("ccit_arena_realtime_channel")
      : null;

  const FLAT_TOPICS = [];
  CURRICULUM_DATA.forEach((chapter) => {
    chapter.subtopics.forEach((sub) => {
      FLAT_TOPICS.push({
        chapterId: chapter.id,
        chapterRoman: chapter.roman,
        chapterTitle: chapter.title,
        chapterDesc: chapter.description,
        ...sub
      });
    });
  });

  function getSubtopicMeta(subtopicId) {
    return FLAT_TOPICS.find((t) => t.id === subtopicId) || FLAT_TOPICS[0];
  }

  function getQuestionsBySubtopic(subtopicId) {
    return QUIZ_QUESTIONS.filter((q) => q.subtopicId === subtopicId);
  }

  function formatTimeAgo(isoString) {
    if (!isoString) return "Belum ada aktivitas";
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return "-";
    return d.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  /* ========================================================================
     DATABASE INITIALIZATION & REALTIME PERSISTENCE
     ======================================================================== */
  function createDefaultDB() {
    const now = new Date().toISOString();
    return {
      users: [
        {
          username: "admin",
          password: "admin123",
          name: "Admin Pembina CCIT",
          role: "admin",
          kelas: "Pembina Utama",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "budi",
          password: "12345",
          name: "Budi Santoso",
          role: "murid",
          kelas: "Tim CCIT-A (X TKJ 1)",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "siti",
          password: "12345",
          name: "Siti Aminah",
          role: "murid",
          kelas: "Tim CCIT-A (X RPL 1)",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "rizky",
          password: "12345",
          name: "Rizky Pratama",
          role: "murid",
          kelas: "Tim CCIT-B (XI SIJA)",
          active: true,
          createdAt: now,
          lastActiveAt: now
        }
      ],
      progressByUser: {
        admin: {
          visitedTopics: ["sub-a"],
          selectedOptionByQ: {},
          submittedByQ: {},
          updatedAt: now
        },
        budi: {
          visitedTopics: ["sub-a", "sub-b"],
          selectedOptionByQ: {
            "q-sub-a-1": "a",
            "q-sub-a-2": "b",
            "q-sub-a-3": "c",
            "q-sub-b-1": "b",
            "q-sub-c-1": "a",
            "q-sub-d-1": "a"
          },
          submittedByQ: {
            "q-sub-a-1": { chosen: "a", isCorrect: true, timestamp: now },
            "q-sub-a-2": { chosen: "b", isCorrect: true, timestamp: now },
            "q-sub-a-3": { chosen: "c", isCorrect: true, timestamp: now },
            "q-sub-b-1": { chosen: "b", isCorrect: true, timestamp: now },
            "q-sub-c-1": { chosen: "a", isCorrect: true, timestamp: now },
            "q-sub-d-1": { chosen: "a", isCorrect: true, timestamp: now }
          },
          updatedAt: now
        },
        siti: {
          visitedTopics: ["sub-a", "sub-c", "sub-d"],
          selectedOptionByQ: {
            "q-sub-a-1": "a",
            "q-sub-c-3": "b",
            "q-sub-d-3": "a"
          },
          submittedByQ: {
            "q-sub-a-1": { chosen: "a", isCorrect: true, timestamp: now },
            "q-sub-c-3": { chosen: "b", isCorrect: true, timestamp: now },
            "q-sub-d-3": { chosen: "a", isCorrect: true, timestamp: now }
          },
          updatedAt: now
        },
        rizky: {
          visitedTopics: ["sub-a"],
          selectedOptionByQ: {},
          submittedByQ: {},
          updatedAt: null
        }
      }
    };
  }

  function loadDB() {
    try {
      const raw = localStorage.getItem(DB_STORAGE_KEY);
      if (!raw) {
        const initial = createDefaultDB();
        localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(initial));
        return initial;
      }
      return JSON.parse(raw);
    } catch (e) {
      return createDefaultDB();
    }
  }

  function saveDB(db, eventType = "progress_update") {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
      if (realtimeChannel) {
        realtimeChannel.postMessage({
          type: eventType,
          timestamp: new Date().toISOString()
        });
      }
    } catch (e) {
      // ignore storage quota errors
    }
  }

  function ensureUserProgressRecord(db, username) {
    if (!db.progressByUser[username]) {
      db.progressByUser[username] = {
        visitedTopics: [FLAT_TOPICS[0].id],
        selectedOptionByQ: {},
        submittedByQ: {},
        updatedAt: new Date().toISOString()
      };
    }
    return db.progressByUser[username];
  }

  /* ========================================================================
     APPLICATION RUNTIME STATE
     ======================================================================== */
  let db = loadDB();
  let currentUser = null;

  const uiState = {
    mode: "materi", // "materi" | "quiz" | "rekap" | "admin"
    activeTopicId: FLAT_TOPICS[0].id, // "sub-a" | "sub-b" | "sub-c" | "sub-d"
    activeSectionId: "sec-a1",
    expandedSubtopics: {
      "sub-a": true,
      "sub-b": false,
      "sub-c": false,
      "sub-d": false
    },
    activeQuizSubtopicId: "sub-a",
    activeQuestionId: QUIZ_QUESTIONS[0].id,
    preQuizExpanded: true,
    simStepIndex: -1,
    searchQuery: "",
    theme: "dark",
    framed169: false,
    rekapInspectedUsername: null,
    rekapFilterSubtopic: "all",
    rekapFilterStatus: "all",
    editingStudentUsername: null
  };

  /* ========================================================================
     DOM REFERENCES
     ======================================================================== */
  const els = {
    appViewport: document.getElementById("appViewport"),
    loginGate: document.getElementById("loginGate"),
    loginForm: document.getElementById("loginForm"),
    loginUsername: document.getElementById("loginUsername"),
    loginPassword: document.getElementById("loginPassword"),
    loginErrorMsg: document.getElementById("loginErrorMsg"),

    crumbChapter: document.getElementById("crumbChapter"),
    crumbTopic: document.getElementById("crumbTopic"),
    progressPercent: document.getElementById("progressPercent"),
    progressBarFill: document.getElementById("progressBarFill"),
    headerRekapBtn: document.getElementById("headerRekapBtn"),
    headerRekapBadge: document.getElementById("headerRekapBadge"),
    headerAdminBtn: document.getElementById("headerAdminBtn"),
    ratioToggleBtn: document.getElementById("ratioToggleBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    headerUserAvatar: document.getElementById("headerUserAvatar"),
    headerUserName: document.getElementById("headerUserName"),
    headerUserRole: document.getElementById("headerUserRole"),
    logoutBtn: document.getElementById("logoutBtn"),

    sidebarSearchInput: document.getElementById("sidebarSearchInput"),
    tabMenuMateri: document.getElementById("tabMenuMateri"),
    tabMenuKuis: document.getElementById("tabMenuKuis"),
    tabMenuRekap: document.getElementById("tabMenuRekap"),
    tabMenuAdmin: document.getElementById("tabMenuAdmin"),
    sidebarTreeMateri: document.getElementById("sidebarTreeMateri"),
    sidebarQuizStatus: document.getElementById("sidebarQuizStatus"),
    sidebarQuizList: document.getElementById("sidebarQuizList"),

    materiView: document.getElementById("materiView"),
    quizView: document.getElementById("quizView"),
    rekapView: document.getElementById("rekapView"),
    adminView: document.getElementById("adminView"),

    materiScrollContainer: document.getElementById("materiScrollContainer"),
    topicChapterBadge: document.getElementById("topicChapterBadge"),
    topicReadBadge: document.getElementById("topicReadBadge"),
    topicTitle: document.getElementById("topicTitle"),
    topicChapterDesc: document.getElementById("topicChapterDesc"),
    sectionJumpPills: document.getElementById("sectionJumpPills"),
    btnNarrateMateri: document.getElementById("btnNarrateMateri"),
    topicBodyContent: document.getElementById("topicBodyContent"),

    simulatorContainer: document.getElementById("simulatorContainer"),
    simTitle: document.getElementById("simTitle"),
    simResetBtn: document.getElementById("simResetBtn"),
    simNextStepBtn: document.getElementById("simNextStepBtn"),
    simCodePane: document.getElementById("simCodePane"),
    simVarsGrid: document.getElementById("simVarsGrid"),
    simStepExplanation: document.getElementById("simStepExplanation"),
    simOutputConsole: document.getElementById("simOutputConsole"),

    subtopicQuizCtaBadge: document.getElementById("subtopicQuizCtaBadge"),
    subtopicQuizCtaTitle: document.getElementById("subtopicQuizCtaTitle"),
    subtopicQuizCtaDesc: document.getElementById("subtopicQuizCtaDesc"),
    subtopicQuizCtaScore: document.getElementById("subtopicQuizCtaScore"),
    prevTopicBtn: document.getElementById("prevTopicBtn"),
    prevTopicTitle: document.getElementById("prevTopicTitle"),
    nextTopicBtn: document.getElementById("nextTopicBtn"),
    nextTopicTitle: document.getElementById("nextTopicTitle"),
    bridgeToQuizBtn: document.getElementById("bridgeToQuizBtn"),
    bridgeToQuizText: document.getElementById("bridgeToQuizText"),
    footerQuizBridgeBtn: document.getElementById("footerQuizBridgeBtn"),
    footerQuizBridgeText: document.getElementById("footerQuizBridgeText"),

    // Quiz View
    quizScrollContainer: document.getElementById("quizScrollContainer"),
    quizActiveChapterBadge: document.getElementById("quizActiveChapterBadge"),
    quizMainTitle: document.getElementById("quizMainTitle"),
    quizSubtitleText: document.getElementById("quizSubtitleText"),
    quizStatChapter: document.getElementById("quizStatChapter"),
    quizStatAnswered: document.getElementById("quizStatAnswered"),
    quizStatCorrect: document.getElementById("quizStatCorrect"),
    quizStatWrong: document.getElementById("quizStatWrong"),
    backToSubtopicMateriBtn: document.getElementById("backToSubtopicMateriBtn"),
    resetAllQuizBtn: document.getElementById("resetAllQuizBtn"),
    quizSubtopicBar: document.getElementById("quizSubtopicBar"),
    preQuizToggleBtn: document.getElementById("preQuizToggleBtn"),
    preQuizTitleText: document.getElementById("preQuizTitleText"),
    preQuizToggleLabel: document.getElementById("preQuizToggleLabel"),
    preQuizReviewBody: document.getElementById("preQuizReviewBody"),
    preQuizPointsGrid: document.getElementById("preQuizPointsGrid"),
    quizPillsBar: document.getElementById("quizPillsBar"),

    qNumberBadge: document.getElementById("qNumberBadge"),
    qCategoryBadge: document.getElementById("qCategoryBadge"),
    qStatusChip: document.getElementById("qStatusChip"),
    btnNarrateQuestion: document.getElementById("btnNarrateQuestion"),
    qPromptContent: document.getElementById("qPromptContent"),
    qOptionsList: document.getElementById("qOptionsList"),
    submitAnswerBtn: document.getElementById("submitAnswerBtn"),
    retryQuestionBtn: document.getElementById("retryQuestionBtn"),
    prevQuestionBtn: document.getElementById("prevQuestionBtn"),
    nextQuestionBtn: document.getElementById("nextQuestionBtn"),

    feedbackEmptyState: document.getElementById("feedbackEmptyState"),
    feedbackResultContent: document.getElementById("feedbackResultContent"),
    feedbackBanner: document.getElementById("feedbackBanner"),
    feedbackIconCircle: document.getElementById("feedbackIconCircle"),
    feedbackVerdict: document.getElementById("feedbackVerdict"),
    feedbackChosenInfo: document.getElementById("feedbackChosenInfo"),
    openPopupModalBtn: document.getElementById("openPopupModalBtn"),
    feedbackExplanationBody: document.getElementById("feedbackExplanationBody"),

    // Rekap View
    rekapOwnerBadge: document.getElementById("rekapOwnerBadge"),
    rekapMainTitle: document.getElementById("rekapMainTitle"),
    rekapAdminUserSelectorWrap: document.getElementById("rekapAdminUserSelectorWrap"),
    rekapSelectUser: document.getElementById("rekapSelectUser"),
    rekapKpiGrid: document.getElementById("rekapKpiGrid"),
    rekapChapterGrid: document.getElementById("rekapChapterGrid"),
    rekapFilterSubtopic: document.getElementById("rekapFilterSubtopic"),
    rekapFilterStatus: document.getElementById("rekapFilterStatus"),
    rekapTableBody: document.getElementById("rekapTableBody"),

    // Admin View
    adminFormTitle: document.getElementById("adminFormTitle"),
    adminSubmitBtn: document.getElementById("adminSubmitBtn"),
    adminCancelEditBtn: document.getElementById("adminCancelEditBtn"),
    addStudentForm: document.getElementById("addStudentForm"),
    stuName: document.getElementById("stuName"),
    stuUsername: document.getElementById("stuUsername"),
    stuPassword: document.getElementById("stuPassword"),
    stuKelas: document.getElementById("stuKelas"),
    stuActive: document.getElementById("stuActive"),
    adminFormMsg: document.getElementById("adminFormMsg"),
    adminStudentCountBadge: document.getElementById("adminStudentCountBadge"),
    adminStudentsTableBody: document.getElementById("adminStudentsTableBody"),
    adminLastSyncText: document.getElementById("adminLastSyncText"),

    // Modal
    feedbackModalBackdrop: document.getElementById("feedbackModalBackdrop"),
    modalHeaderBanner: document.getElementById("modalHeaderBanner"),
    modalVerdictIcon: document.getElementById("modalVerdictIcon"),
    modalVerdictTitle: document.getElementById("modalVerdictTitle"),
    modalVerdictSub: document.getElementById("modalVerdictSub"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    modalExplanationBody: document.getElementById("modalExplanationBody"),
    modalStayBtn: document.getElementById("modalStayBtn"),
    modalNextQuestionBtn: document.getElementById("modalNextQuestionBtn")
  };

  /* ========================================================================
     1. AUTHENTICATION & LOGIN GATE (ADMIN & MURID)
     ======================================================================== */
  function getActiveUserProgress() {
    if (!currentUser) return ensureUserProgressRecord(db, "admin");
    return ensureUserProgressRecord(db, currentUser.username);
  }

  function computeUserStats(username) {
    const prog = ensureUserProgressRecord(db, username);
    const totalTopics = FLAT_TOPICS.length; // 4 Sub-Materi (A, B, C, D)
    const readCount = prog.visitedTopics ? prog.visitedTopics.length : 0;

    const totalQ = QUIZ_QUESTIONS.length; // 80 Soal (4 x 20)
    const submittedEntries = Object.values(prog.submittedByQ || {});
    const answeredCount = submittedEntries.length;
    const correctCount = submittedEntries.filter((s) => s.isCorrect).length;
    const wrongCount = answeredCount - correctCount;
    const unansweredCount = totalQ - answeredCount;
    const score100 = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

    const overallPercent = Math.round(
      ((readCount + answeredCount) / (totalTopics + totalQ)) * 100
    );

    const bySubtopic = {};
    FLAT_TOPICS.forEach((sub) => {
      const sQuestions = getQuestionsBySubtopic(sub.id);
      let sAns = 0;
      let sCor = 0;
      sQuestions.forEach((q) => {
        const subEntry = prog.submittedByQ[q.id];
        if (subEntry) {
          sAns++;
          if (subEntry.isCorrect) sCor++;
        }
      });
      bySubtopic[sub.id] = {
        total: sQuestions.length,
        answered: sAns,
        correct: sCor,
        wrong: sAns - sCor
      };
    });

    return {
      totalTopics,
      readCount,
      totalQ,
      answeredCount,
      correctCount,
      wrongCount,
      unansweredCount,
      score100,
      overallPercent,
      bySubtopic,
      updatedAt: prog.updatedAt
    };
  }

  function handleLogin(usernameRaw, passwordRaw) {
    db = loadDB();
    const uname = (usernameRaw || "").trim().toLowerCase();
    const pwd = (passwordRaw || "").trim();

    const found = db.users.find(
      (u) => u.username.toLowerCase() === uname && u.password === pwd
    );

    if (!found) {
      if (window.SoundStudio) window.SoundStudio.playLoginError();
      els.loginErrorMsg.textContent =
        "Username atau password tidak sesuai! Periksa kembali kredensial Anda.";
      els.loginErrorMsg.classList.remove("hidden");
      return;
    }

    if (!found.active) {
      if (window.SoundStudio) window.SoundStudio.playLoginError();
      els.loginErrorMsg.textContent =
        "Akun murid ini sedang dinonaktifkan oleh Admin. Hubungi Administrator.";
      els.loginErrorMsg.classList.remove("hidden");
      return;
    }

    if (window.SoundStudio) window.SoundStudio.playLoginSuccess();
    els.loginErrorMsg.classList.add("hidden");
    found.lastActiveAt = new Date().toISOString();
    ensureUserProgressRecord(db, found.username);
    saveDB(db, "user_login");

    currentUser = found;
    sessionStorage.setItem(SESSION_STORAGE_KEY, found.username);
    uiState.rekapInspectedUsername = found.username;

    applyUserSessionToUI();
  }

  function applyUserSessionToUI() {
    if (!currentUser) {
      els.loginGate.classList.remove("hidden");
      return;
    }

    els.loginGate.classList.add("hidden");
    els.headerUserName.textContent = currentUser.name;
    els.headerUserAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    els.headerUserRole.textContent =
      currentUser.role === "admin" ? "ADMIN" : "MURID";
    els.headerUserRole.className = `user-role-tag ${
      currentUser.role === "admin" ? "role-admin" : "role-murid"
    }`;

    const isAdmin = currentUser.role === "admin";
    els.headerAdminBtn.classList.toggle("hidden", !isAdmin);
    els.tabMenuAdmin.classList.toggle("hidden", !isAdmin);
    els.rekapAdminUserSelectorWrap.classList.toggle("hidden", !isAdmin);

    renderAllViews();
  }

  function handleLogout() {
    if (window.SoundStudio) {
      window.SoundStudio.stopNarration();
      window.SoundStudio.playLogout();
    }
    currentUser = null;
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    els.loginPassword.value = "";
    els.loginGate.classList.remove("hidden");
  }

  /* ========================================================================
     2. SIDEBAR ACCORDION NAVIGATION (SUB-MATERI A, B, C, D + SUB-MENUS)
     ======================================================================== */
  function renderSidebar() {
    if (!currentUser) return;
    const prog = getActiveUserProgress();
    const stats = computeUserStats(currentUser.username);
    const query = uiState.searchQuery.trim().toLowerCase();

    els.sidebarTreeMateri.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "accordion-chapter open";

    const headerPill = document.createElement("div");
    headerPill.className = "sidebar-section-label";
    headerPill.style.padding = "6px 10px 8px";
    headerPill.innerHTML = `
      <span>DAFTAR MENU AKORDION CCIT</span>
      <span class="badge-pill">${stats.readCount}/${FLAT_TOPICS.length} Sub-Bab</span>
    `;
    wrapper.appendChild(headerPill);

    FLAT_TOPICS.forEach((sub) => {
      const matchesSearch =
        !query ||
        sub.title.toLowerCase().includes(query) ||
        sub.subtitle.toLowerCase().includes(query) ||
        sub.sections.some((s) => s.label.toLowerCase().includes(query));

      if (!matchesSearch) return;

      const isActiveTopic =
        uiState.mode === "materi" && uiState.activeTopicId === sub.id;
      const isVisited = prog.visitedTopics.includes(sub.id);
      const isExpanded = query ? true : !!uiState.expandedSubtopics[sub.id];
      const subQuizStats = stats.bySubtopic[sub.id] || {
        answered: 0,
        total: 20,
        correct: 0
      };

      const itemContainer = document.createElement("div");
      itemContainer.style.marginBottom = "6px";

      const mainBtn = document.createElement("button");
      mainBtn.type = "button";
      mainBtn.className = `subtopic-btn ${isActiveTopic ? "active" : ""} ${
        isVisited ? "visited" : ""
      }`;
      mainBtn.style.justifyContent = "space-between";
      mainBtn.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;text-align:left;">
          <span class="subtopic-code">${sub.code}</span>
          <span class="subtopic-name" style="font-weight:700;">${sub.title.replace(
            /^[A-D]\.\s*/,
            ""
          )}</span>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <span class="sub-quiz-mini-pill ${
            subQuizStats.answered === subQuizStats.total ? "done" : ""
          }" title="Latihan 20 Soal Sub-Materi ${sub.code}">
            ${subQuizStats.answered}/${subQuizStats.total}
          </span>
          <span style="font-size:11px;opacity:0.75;transform:rotate(${
            isExpanded ? "90deg" : "0deg"
          });transition:transform 0.2s;">▶</span>
        </div>
      `;

      mainBtn.addEventListener("click", () => {
        const willExpand = !uiState.expandedSubtopics[sub.id];
        uiState.expandedSubtopics[sub.id] = willExpand;
        if (window.SoundStudio) window.SoundStudio.playAccordion(willExpand);
        selectTopic(sub.id);
      });

      const nestedMenu = document.createElement("div");
      nestedMenu.className = `subtopic-nested-menu ${
        isExpanded ? "" : "collapsed"
      }`;

      sub.sections.forEach((sec) => {
        const secBtn = document.createElement("button");
        secBtn.type = "button";
        const isSecActive =
          isActiveTopic && uiState.activeSectionId === sec.id;
        secBtn.className = `nested-sec-btn ${isSecActive ? "active" : ""}`;
        secBtn.innerHTML = `<span>• ${sec.label}</span>`;
        secBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          selectTopic(sub.id, sec.id);
        });
        nestedMenu.appendChild(secBtn);
      });

      // Shortcut inside Accordion to 20 Practice Questions for this Sub-Materi
      const quizJumpBtn = document.createElement("button");
      quizJumpBtn.type = "button";
      quizJumpBtn.className = "nested-sec-btn quiz-shortcut";
      quizJumpBtn.innerHTML = `
        <span>🎯 Latihan 20 Soal Sub-Bab ${sub.code} (${subQuizStats.answered}/20)</span>
      `;
      quizJumpBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openQuizForSubtopic(sub.id);
      });
      nestedMenu.appendChild(quizJumpBtn);

      itemContainer.appendChild(mainBtn);
      itemContainer.appendChild(nestedMenu);
      wrapper.appendChild(itemContainer);
    });

    els.sidebarTreeMateri.appendChild(wrapper);

    // Populate Sidebar Quiz Summary List (4 Sub-Materi x 20 Soal = 80 Soal)
    els.sidebarQuizStatus.textContent = `${stats.answeredCount}/${stats.totalQ} Dijawab`;
    els.sidebarQuizList.innerHTML = "";

    FLAT_TOPICS.forEach((sub) => {
      const sStat = stats.bySubtopic[sub.id] || {
        answered: 0,
        total: 20,
        correct: 0
      };
      const isSubQuizActive =
        uiState.mode === "quiz" && uiState.activeQuizSubtopicId === sub.id;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `quiz-nav-item ${isSubQuizActive ? "active" : ""}`;
      btn.innerHTML = `
        <span class="q-nav-num">${sub.code}</span>
        <span class="q-nav-title">${sub.title} (20 Soal)</span>
        <span class="q-nav-badge ${
          sStat.answered === sStat.total ? "correct" : ""
        }">
          ${sStat.answered}/20 (${sStat.correct}B)
        </span>
      `;
      btn.addEventListener("click", () => {
        openQuizForSubtopic(sub.id);
      });
      els.sidebarQuizList.appendChild(btn);
    });
  }

  function updateHeaderProgress() {
    if (!currentUser) return;
    const stats = computeUserStats(currentUser.username);
    els.progressPercent.textContent = `${stats.overallPercent}%`;
    els.progressBarFill.style.width = `${stats.overallPercent}%`;
    els.headerRekapBadge.textContent = `${stats.correctCount}B / ${stats.wrongCount}S`;
  }

  /* ========================================================================
     3. VIEW SWITCHER (MATERI / QUIZ / REKAPAN / ADMIN)
     ======================================================================== */
  function setMode(newMode) {
    if (window.SoundStudio) {
      window.SoundStudio.stopNarration();
      window.SoundStudio.setAppMode(newMode);
    }
    uiState.mode = newMode;

    els.tabMenuMateri.classList.toggle("active", newMode === "materi");
    els.tabMenuKuis.classList.toggle("active", newMode === "quiz");
    els.tabMenuRekap.classList.toggle("active", newMode === "rekap");
    els.tabMenuAdmin.classList.toggle("active", newMode === "admin");

    els.materiView.classList.toggle("active", newMode === "materi");
    els.quizView.classList.toggle("active", newMode === "quiz");
    els.rekapView.classList.toggle("active", newMode === "rekap");
    els.adminView.classList.toggle("active", newMode === "admin");

    if (newMode === "materi") {
      const current = getSubtopicMeta(uiState.activeTopicId);
      els.crumbChapter.textContent = "Materi Cerdas Cermat IT";
      els.crumbTopic.textContent = current.title;
      renderMateriView();
    } else if (newMode === "quiz") {
      const sub = getSubtopicMeta(uiState.activeQuizSubtopicId);
      els.crumbChapter.textContent = "Latihan 20 Soal & Pembahasan";
      els.crumbTopic.textContent = sub.title;
      renderQuizView();
    } else if (newMode === "rekap") {
      els.crumbChapter.textContent = "Evaluasi Kompetensi CCIT";
      els.crumbTopic.textContent = "Rekapan Benar / Salah (80 Soal)";
      renderRekapView();
    } else if (newMode === "admin") {
      els.crumbChapter.textContent = "Administrator Panel";
      els.crumbTopic.textContent = "Manajemen User Murid & Monitoring";
      renderAdminView();
    }

    renderSidebar();
    updateHeaderProgress();
  }

  /* ========================================================================
     4. MATERI VIEW RENDERER + FLASHCARDS + NARRATOR + SIMULATOR
     ======================================================================== */
  function selectTopic(topicId, sectionId = null) {
    if (window.SoundStudio) window.SoundStudio.stopNarration();
    uiState.activeTopicId = topicId;
    uiState.expandedSubtopics[topicId] = true;

    const topic = getSubtopicMeta(topicId);
    uiState.activeSectionId =
      sectionId || (topic.sections && topic.sections[0] ? topic.sections[0].id : null);

    if (currentUser) {
      const prog = getActiveUserProgress();
      if (!prog.visitedTopics.includes(topicId)) {
        prog.visitedTopics.push(topicId);
      }
      prog.updatedAt = new Date().toISOString();
      currentUser.lastActiveAt = prog.updatedAt;
      saveDB(db, "topic_read");
    }

    setMode("materi");

    if (sectionId) {
      setTimeout(() => {
        const targetEl = document.getElementById(sectionId);
        if (targetEl && els.materiScrollContainer) {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
    } else if (els.materiScrollContainer) {
      els.materiScrollContainer.scrollTop = 0;
    }
  }

  function renderMateriView() {
    const currentIndex = FLAT_TOPICS.findIndex(
      (t) => t.id === uiState.activeTopicId
    );
    const topic = FLAT_TOPICS[currentIndex] || FLAT_TOPICS[0];

    els.topicChapterBadge.textContent = `MATERI CERDAS CERMAT IT • SUB-BAB ${topic.code}`;
    els.topicTitle.textContent = topic.title;
    els.topicChapterDesc.textContent = topic.subtitle;
    els.topicReadBadge.textContent = "✓ Materi & Jembatan Hafalan Siap";

    // Render Section Quick Jump Pills
    if (els.sectionJumpPills && topic.sections) {
      els.sectionJumpPills.innerHTML = topic.sections
        .map(
          (sec) => `
          <button type="button" class="sec-jump-pill ${
            uiState.activeSectionId === sec.id ? "active" : ""
          }" data-jump-sec="${sec.id}">
            ${sec.label}
          </button>
        `
        )
        .join("");

      els.sectionJumpPills.querySelectorAll("[data-jump-sec]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const secId = btn.getAttribute("data-jump-sec");
          uiState.activeSectionId = secId;
          renderSidebar();
          els.sectionJumpPills
            .querySelectorAll(".sec-jump-pill")
            .forEach((p) => p.classList.remove("active"));
          btn.classList.add("active");

          if (secId.endsWith("4") && els.simulatorContainer) {
            els.simulatorContainer.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          } else {
            const target = document.getElementById(secId);
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        });
      });
    }

    // Render Topic HTML Content
    els.topicBodyContent.innerHTML = topic.contentHtml;

    // Bind Interactive Flip Flashcards
    els.topicBodyContent.querySelectorAll("[data-flashcard]").forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
        if (window.SoundStudio) window.SoundStudio.playFlipCard();
      });
    });

    // Render Step-by-Step Interactive Simulator
    if (topic.simulator) {
      els.simulatorContainer.classList.remove("hidden");
      initSimulator(topic.simulator);
    } else {
      els.simulatorContainer.classList.add("hidden");
    }

    // Update Sub-Materi 20-Question CTA Card & Footer Navigation
    const stats = currentUser ? computeUserStats(currentUser.username) : null;
    const subStats =
      stats && stats.bySubtopic && stats.bySubtopic[topic.id]
        ? stats.bySubtopic[topic.id]
        : { answered: 0, total: 20, correct: 0 };

    if (els.subtopicQuizCtaBadge) {
      els.subtopicQuizCtaBadge.textContent = `EVALUASI SUB-MATERI ${topic.code} • 20 SOAL LATIHAN & PEMBAHASAN OTOMATIS`;
    }
    if (els.subtopicQuizCtaTitle) {
      els.subtopicQuizCtaTitle.textContent = `Siap Uji Pemahaman ${topic.title}?`;
    }
    if (els.subtopicQuizCtaDesc) {
      els.subtopicQuizCtaDesc.textContent = `Setelah memahami materi pembahasan dan jembatan keledai di atas, kerjakan 20 soal latihan pilihan ganda khusus Sub-Materi ${topic.code} lengkap dengan pembahasan jawaban otomatis setelah menjawab soal.`;
    }
    if (els.subtopicQuizCtaScore) {
      els.subtopicQuizCtaScore.textContent = `Progres: ${subStats.answered}/20 Dijawab (${subStats.correct} Benar)`;
    }
    if (els.bridgeToQuizText) {
      els.bridgeToQuizText.textContent = `Mulai 20 Soal Latihan Sub-Materi ${topic.code}`;
    }
    if (els.footerQuizBridgeText) {
      els.footerQuizBridgeText.textContent = `📝 Kerjakan 20 Soal ${topic.title} (${subStats.answered}/20)`;
    }

    const prevTopic = currentIndex > 0 ? FLAT_TOPICS[currentIndex - 1] : null;
    const nextTopic =
      currentIndex < FLAT_TOPICS.length - 1
        ? FLAT_TOPICS[currentIndex + 1]
        : null;

    els.prevTopicBtn.disabled = !prevTopic;
    els.prevTopicTitle.textContent = prevTopic
      ? prevTopic.title
      : "Awal Materi CCIT";

    els.nextTopicBtn.disabled = !nextTopic;
    els.nextTopicTitle.textContent = nextTopic
      ? nextTopic.title
      : "Selesai (Lanjut Latihan Soal)";
  }

  function initSimulator(simData) {
    uiState.simStepIndex = -1;
    els.simTitle.textContent = simData.title;

    els.simCodePane.innerHTML = simData.codeLines
      .map(
        (line, idx) => `
        <div class="sim-line" data-line="${idx + 1}">
          <span class="sim-ln">${idx + 1}</span>
          <span class="sim-code-text">${line}</span>
        </div>
      `
      )
      .join("");

    updateSimulatorStepUI(simData);
  }

  function updateSimulatorStepUI(simData) {
    const stepIdx = uiState.simStepIndex;
    const lines = els.simCodePane.querySelectorAll(".sim-line");
    lines.forEach((l) => l.classList.remove("active-line"));

    if (stepIdx < 0) {
      els.simVarsGrid.innerHTML = `<span class="text-muted">Klik "Langkah Berikutnya →" untuk menjalankan simulasi.</span>`;
      els.simStepExplanation.textContent =
        "Klik tombol 'Langkah Berikutnya →' di kanan atas panel simulasi untuk menelusuri mekanisme langkah demi langkah.";
      els.simOutputConsole.textContent = "Menunggu simulasi dimulai...";
      els.simNextStepBtn.textContent = "Mulai Simulasi →";
      return;
    }

    const stepObj = simData.steps[stepIdx];
    const activeLineEl = els.simCodePane.querySelector(
      `.sim-line[data-line="${stepObj.line}"]`
    );
    if (activeLineEl) activeLineEl.classList.add("active-line");

    els.simVarsGrid.innerHTML = Object.entries(stepObj.vars)
      .map(
        ([k, v]) => `
        <div class="var-chip">
          <span class="var-chip-name">${k}</span>
          <span class="var-chip-val">${v}</span>
        </div>
      `
      )
      .join("");

    els.simStepExplanation.textContent = `Langkah ${stepIdx + 1}/${
      simData.steps.length
    }: ${stepObj.explanation}`;
    els.simOutputConsole.textContent = stepObj.output;

    els.simNextStepBtn.textContent =
      stepIdx >= simData.steps.length - 1
        ? "Selesai (Ulangi dari Awal) ↺"
        : `Langkah Berikutnya (${stepIdx + 2}/${simData.steps.length}) →`;
  }

  /* ========================================================================
     5. QUIZ ENGINE (20 SOAL PER SUB-MATERI + PRE-QUIZ MEMORY REVIEW + PEMBAHASAN)
     ======================================================================== */
  function openQuizForSubtopic(subtopicId) {
    const sub = getSubtopicMeta(subtopicId);
    uiState.activeQuizSubtopicId = sub.id;
    const subQuestions = getQuestionsBySubtopic(sub.id);
    if (subQuestions.length > 0) {
      uiState.activeQuestionId = subQuestions[0].id;
    }
    setMode("quiz");
    if (els.quizScrollContainer) els.quizScrollContainer.scrollTop = 0;
  }

  function selectQuestion(questionId) {
    if (window.SoundStudio) window.SoundStudio.stopNarration();
    const q = QUIZ_QUESTIONS.find((item) => item.id === questionId);
    if (q) {
      uiState.activeQuizSubtopicId = q.subtopicId;
      uiState.activeQuestionId = q.id;
    }
    if (uiState.mode !== "quiz") {
      setMode("quiz");
    } else {
      renderQuizView();
      renderSidebar();
    }
  }

  function renderQuizView() {
    if (!currentUser) return;
    const prog = getActiveUserProgress();
    const stats = computeUserStats(currentUser.username);

    let q = QUIZ_QUESTIONS.find((item) => item.id === uiState.activeQuestionId);
    if (!q || q.subtopicId !== uiState.activeQuizSubtopicId) {
      const fallbackList = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
      q = fallbackList[0] || QUIZ_QUESTIONS[0];
      uiState.activeQuestionId = q.id;
    }

    const activeSubMeta = getSubtopicMeta(uiState.activeQuizSubtopicId);
    const subtopicQuestions = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
    const subStat = stats.bySubtopic[uiState.activeQuizSubtopicId] || {
      answered: 0,
      total: subtopicQuestions.length,
      correct: 0
    };

    els.quizActiveChapterBadge.textContent = `LATIHAN 20 SOAL & PEMBAHASAN • SUB-MATERI ${activeSubMeta.code} (TOTAL 80 SOAL CCIT)`;
    els.quizMainTitle.textContent = `Latihan 20 Soal: ${activeSubMeta.title}`;
    els.quizSubtitleText.innerHTML = `Pelajari <strong>Ringkasan Materi & Jembatan Hafalan</strong> di bawah ini sebelum menjawab 20 soal latihan Sub-Materi ${activeSubMeta.code}. Pembahasan lengkap otomatis muncul setelah Anda menekan <strong>Submit Jawaban</strong>.`;

    els.quizStatChapter.textContent = `${subStat.answered} / ${subStat.total}`;
    els.quizStatAnswered.textContent = `${stats.answeredCount} / ${stats.totalQ}`;
    els.quizStatCorrect.textContent = stats.correctCount;
    els.quizStatWrong.textContent = stats.wrongCount;

    // 1. Render Sub-Materi Selector Tabs (A, B, C, D — 20 Soal each)
    els.quizSubtopicBar.innerHTML = "";
    FLAT_TOPICS.forEach((sub) => {
      const sStat = stats.bySubtopic[sub.id] || {
        answered: 0,
        total: 20,
        correct: 0
      };
      const isSubActive = sub.id === uiState.activeQuizSubtopicId;

      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `quiz-sub-chip ${isSubActive ? "active" : ""} ${
        sStat.answered === sStat.total ? "completed" : ""
      }`;
      chip.innerHTML = `
        <span class="sub-chip-code">${sub.code}</span>
        <span class="sub-chip-title">${sub.title.replace(/^[A-D]\.\s*/, "")}</span>
        <span class="sub-chip-count">${sStat.answered}/20 (${sStat.correct}B)</span>
      `;
      chip.addEventListener("click", () => openQuizForSubtopic(sub.id));
      els.quizSubtopicBar.appendChild(chip);
    });

    // 2. Render Pre-Quiz Memory Review Banner ("Materi Pembahasan Mudah Dipahami & Diingat Sebelum Masuk Soal")
    if (els.preQuizTitleText) {
      els.preQuizTitleText.textContent = `🧠 Ringkasan Materi & Jembatan Hafalan Cepat Sebelum Menjawab 20 Soal (${activeSubMeta.title})`;
    }
    if (els.preQuizReviewBody && els.preQuizToggleLabel) {
      els.preQuizReviewBody.classList.toggle("collapsed", !uiState.preQuizExpanded);
      els.preQuizToggleLabel.textContent = uiState.preQuizExpanded
        ? "Sembunyikan Ringkasan ▲"
        : "Tampilkan Ringkasan Materi ▼";
    }
    if (els.preQuizPointsGrid && activeSubMeta.preQuizSummary) {
      els.preQuizPointsGrid.innerHTML = activeSubMeta.preQuizSummary
        .map(
          (item) => `
          <div class="prequiz-point-box">
            <strong>📌 ${item.title}</strong>
            <div>${item.text}</div>
          </div>
        `
        )
        .join("");
    }

    // 3. Render 1..20 Question Number Pills
    els.quizPillsBar.innerHTML = "";
    subtopicQuestions.forEach((item, idx) => {
      const pill = document.createElement("button");
      pill.type = "button";
      const sub = prog.submittedByQ[item.id];
      let stateClass = "";
      if (sub) stateClass = sub.isCorrect ? "answered-correct" : "answered-wrong";

      pill.className = `q-pill-btn ${item.id === q.id ? "active" : ""} ${stateClass}`;
      pill.textContent = `Soal ${idx + 1}`;
      pill.title = `${item.title}`;
      pill.addEventListener("click", () => selectQuestion(item.id));
      els.quizPillsBar.appendChild(pill);
    });

    // 4. Render Active Question Card
    const qIndexInSub = subtopicQuestions.findIndex((item) => item.id === q.id);
    const chosenKey = prog.selectedOptionByQ[q.id] || null;
    const submitted = prog.submittedByQ[q.id] || null;

    els.qNumberBadge.textContent = `SOAL ${qIndexInSub + 1} DARI ${
      subtopicQuestions.length
    } • SUB-MATERI ${activeSubMeta.code}`;
    els.qCategoryBadge.textContent = q.title;

    if (!submitted) {
      els.qStatusChip.textContent = "Belum Dijawab";
      els.qStatusChip.className = "q-status-chip";
    } else if (submitted.isCorrect) {
      els.qStatusChip.textContent = "✓ Dijawab Benar (+5 Poin)";
      els.qStatusChip.className = "q-status-chip correct";
    } else {
      els.qStatusChip.textContent = "✕ Dijawab Salah";
      els.qStatusChip.className = "q-status-chip wrong";
    }

    els.qPromptContent.innerHTML = q.prompt;

    // 5. Render Multiple Choice Options (A, B, C, D)
    els.qOptionsList.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";

      if (chosenKey === opt.key) btn.classList.add("selected");

      if (submitted) {
        btn.disabled = true;
        if (opt.key === q.correctKey) {
          btn.classList.add("correct-choice");
        } else if (opt.key === submitted.chosen && !submitted.isCorrect) {
          btn.classList.add("wrong-choice");
        }
      }

      let statusTagHtml = "";
      if (submitted) {
        if (opt.key === q.correctKey) {
          statusTagHtml = `<span class="opt-status-tag">✓ Kunci Jawaban</span>`;
        } else if (opt.key === submitted.chosen && !submitted.isCorrect) {
          statusTagHtml = `<span class="opt-status-tag">✕ Pilihan Anda</span>`;
        }
      }

      btn.innerHTML = `
        <span class="opt-key">${opt.key.toUpperCase()}</span>
        <span class="opt-text">${opt.text}</span>
        ${statusTagHtml}
      `;

      btn.addEventListener("click", () => {
        if (prog.submittedByQ[q.id]) return;
        if (window.SoundStudio) window.SoundStudio.playSelectOption(opt.key);
        prog.selectedOptionByQ[q.id] = opt.key;
        saveDB(db, "option_select");
        renderQuizView();
      });

      els.qOptionsList.appendChild(btn);
    });

    els.submitAnswerBtn.disabled = !chosenKey || Boolean(submitted);
    els.retryQuestionBtn.classList.toggle("hidden", !submitted);

    els.prevQuestionBtn.disabled = qIndexInSub <= 0;
    els.nextQuestionBtn.disabled = qIndexInSub >= subtopicQuestions.length - 1;

    // 6. Render Immediate Answer Explanation Panel after Answering
    if (!submitted) {
      els.feedbackEmptyState.classList.remove("hidden");
      els.feedbackResultContent.classList.add("hidden");
    } else {
      els.feedbackEmptyState.classList.add("hidden");
      els.feedbackResultContent.classList.remove("hidden");

      const chosenOptObj = q.options.find((o) => o.key === submitted.chosen);
      const correctOptObj = q.options.find((o) => o.key === q.correctKey);

      els.feedbackBanner.className = `feedback-banner ${
        submitted.isCorrect ? "correct" : "wrong"
      }`;
      els.feedbackIconCircle.textContent = submitted.isCorrect ? "✓" : "✕";
      els.feedbackVerdict.textContent = submitted.isCorrect
        ? "JAWABAN BENAR! LUAR BIASA!"
        : "JAWABAN KURANG TEPAT";
      els.feedbackChosenInfo.textContent = submitted.isCorrect
        ? `Anda memilih Opsi ${submitted.chosen.toUpperCase()} (${
            chosenOptObj ? chosenOptObj.text : ""
          })`
        : `Pilihan Anda: Opsi ${submitted.chosen.toUpperCase()} • Kunci Seharusnya: Opsi ${q.correctKey.toUpperCase()} (${
            correctOptObj ? correctOptObj.text : ""
          })`;

      els.feedbackExplanationBody.innerHTML = q.explanation;
    }
  }

  function handleSubmitAnswer() {
    if (!currentUser) return;
    const prog = getActiveUserProgress();
    const q = QUIZ_QUESTIONS.find((item) => item.id === uiState.activeQuestionId);
    if (!q) return;

    const chosen = prog.selectedOptionByQ[q.id];
    if (!chosen) return;

    const isCorrect = chosen === q.correctKey;
    if (window.SoundStudio) {
      if (isCorrect) window.SoundStudio.playCorrect();
      else window.SoundStudio.playWrong();
    }

    prog.submittedByQ[q.id] = {
      chosen,
      isCorrect,
      timestamp: new Date().toISOString()
    };
    prog.updatedAt = new Date().toISOString();
    currentUser.lastActiveAt = prog.updatedAt;

    saveDB(db, "quiz_submit");
    renderQuizView();
    renderSidebar();
    updateHeaderProgress();
  }

  function handleRetryQuestion() {
    if (!currentUser) return;
    const prog = getActiveUserProgress();
    const qId = uiState.activeQuestionId;
    delete prog.selectedOptionByQ[qId];
    delete prog.submittedByQ[qId];
    prog.updatedAt = new Date().toISOString();
    saveDB(db, "quiz_retry");
    renderQuizView();
    renderSidebar();
    updateHeaderProgress();
  }

  function openFeedbackModal(q, submitted) {
    const correctOpt = q.options.find((o) => o.key === q.correctKey);
    els.modalHeaderBanner.className = `modal-header ${
      submitted.isCorrect ? "correct" : "wrong"
    }`;
    els.modalVerdictIcon.textContent = submitted.isCorrect ? "✓" : "✕";
    els.modalVerdictTitle.textContent = submitted.isCorrect
      ? "Jawaban Anda Benar!"
      : `Jawaban Kurang Tepat (Kunci: Opsi ${q.correctKey.toUpperCase()})`;
    els.modalVerdictSub.textContent = `${q.categoryLabel} • ${q.title} • Kunci: ${
      correctOpt ? correctOpt.text : ""
    }`;

    els.modalExplanationBody.innerHTML = q.explanation;
    els.feedbackModalBackdrop.classList.remove("hidden");
  }

  function closeFeedbackModal() {
    if (window.SoundStudio) window.SoundStudio.playModalClose();
    els.feedbackModalBackdrop.classList.add("hidden");
  }

  /* ========================================================================
     6. REKAPAN BENAR / SALAH VIEW (80 SOAL CCIT)
     ======================================================================== */
  function renderRekapView() {
    if (!currentUser) return;
    db = loadDB();

    if (currentUser.role === "admin") {
      els.rekapSelectUser.innerHTML = db.users
        .map(
          (u) =>
            `<option value="${u.username}" ${
              u.username === uiState.rekapInspectedUsername ? "selected" : ""
            }>${u.name} (@${u.username} - ${u.role.toUpperCase()})</option>`
        )
        .join("");
    } else {
      uiState.rekapInspectedUsername = currentUser.username;
    }

    const targetUsername = uiState.rekapInspectedUsername || currentUser.username;
    const targetUserObj =
      db.users.find((u) => u.username === targetUsername) || currentUser;
    const prog = ensureUserProgressRecord(db, targetUsername);
    const stats = computeUserStats(targetUsername);

    els.rekapOwnerBadge.textContent = `LAPORAN REKAPAN REALTIME • AKUN: ${targetUserObj.name.toUpperCase()} (@${
      targetUserObj.username
    })`;
    els.rekapMainTitle.textContent = `Rekapan Jawaban Benar / Salah (${targetUserObj.name})`;

    // 1. KPI Summary Cards
    els.rekapKpiGrid.innerHTML = `
      <div class="rekap-kpi-card">
        <span class="kpi-label">Materi Dibaca</span>
        <strong class="kpi-val">${stats.readCount} / ${stats.totalTopics}</strong>
        <small class="kpi-sub">Sub-Materi A, B, C, D</small>
      </div>
      <div class="rekap-kpi-card">
        <span class="kpi-label">Total Soal Dijawab</span>
        <strong class="kpi-val">${stats.answeredCount} / ${stats.totalQ}</strong>
        <small class="kpi-sub">Belum dijawab: ${stats.unansweredCount} soal</small>
      </div>
      <div class="rekap-kpi-card correct">
        <span class="kpi-label">Jawaban BENAR</span>
        <strong class="kpi-val">${stats.correctCount}</strong>
        <small class="kpi-sub">Akurasi keseluruhan</small>
      </div>
      <div class="rekap-kpi-card wrong">
        <span class="kpi-label">Jawaban SALAH</span>
        <strong class="kpi-val">${stats.wrongCount}</strong>
        <small class="kpi-sub">Perlu dipelajari ulang</small>
      </div>
      <div class="rekap-kpi-card score">
        <span class="kpi-label">Skor Akhir (0-100)</span>
        <strong class="kpi-val">${stats.score100}</strong>
        <small class="kpi-sub">Update: ${formatTimeAgo(stats.updatedAt)}</small>
      </div>
    `;

    // 2. Per-Sub-Materi (A, B, C, D) Breakdown Cards
    els.rekapChapterGrid.innerHTML = FLAT_TOPICS.map((sub) => {
      const cStat = stats.bySubtopic[sub.id] || {
        total: 20,
        answered: 0,
        correct: 0,
        wrong: 0
      };
      const pct = Math.round((cStat.correct / cStat.total) * 100);
      return `
        <div class="rekap-ch-card">
          <div class="rekap-ch-top">
            <span class="chapter-badge">SUB-MATERI ${sub.code}</span>
            <strong>${cStat.answered}/${cStat.total} Soal</strong>
          </div>
          <h4>${sub.title}</h4>
          <div class="rekap-ch-badges">
            <span class="badge-correct">✓ Benar: ${cStat.correct}</span>
            <span class="badge-wrong">✕ Salah: ${cStat.wrong}</span>
            <span class="badge-unans">• Skor: ${pct}%</span>
          </div>
          <div class="progress-bar-track" style="width:100%;margin-top:8px;">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
      `;
    }).join("");

    // 3. Detailed 80-Question Table
    const subFilter = uiState.rekapFilterSubtopic;
    const stFilter = uiState.rekapFilterStatus;

    const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
      if (subFilter !== "all" && q.subtopicId !== subFilter) return false;
      const sub = prog.submittedByQ[q.id];
      if (stFilter === "correct" && (!sub || !sub.isCorrect)) return false;
      if (stFilter === "wrong" && (!sub || sub.isCorrect)) return false;
      if (stFilter === "unanswered" && sub) return false;
      return true;
    });

    els.rekapTableBody.innerHTML = filteredQuestions
      .map((q, idx) => {
        const sub = prog.submittedByQ[q.id];
        const chosenOpt = sub
          ? q.options.find((o) => o.key === sub.chosen)
          : null;
        const correctOpt = q.options.find((o) => o.key === q.correctKey);

        let statusBadge = `<span class="table-status-pill unanswered">• Belum Dijawab</span>`;
        if (sub) {
          statusBadge = sub.isCorrect
            ? `<span class="table-status-pill correct">✓ BENAR</span>`
            : `<span class="table-status-pill wrong">✕ SALAH</span>`;
        }

        return `
          <tr>
            <td><strong>#${idx + 1}</strong></td>
            <td>${q.categoryLabel}</td>
            <td><strong>Soal ${q.number}:</strong> ${q.title}</td>
            <td>${
              sub
                ? `<strong>${sub.chosen.toUpperCase()}.</strong> ${
                    chosenOpt ? chosenOpt.text : ""
                  }`
                : `<span class="text-muted">-</span>`
            }</td>
            <td><strong>${q.correctKey.toUpperCase()}.</strong> ${
              correctOpt ? correctOpt.text : ""
            }</td>
            <td>${statusBadge}</td>
            <td>${sub ? formatTimeAgo(sub.timestamp) : "-"}</td>
            <td>
              <button type="button" class="table-action-btn" data-goto-q="${
                q.id
              }">Buka Soal</button>
            </td>
          </tr>
        `;
      })
      .join("");

    els.rekapTableBody.querySelectorAll("[data-goto-q]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const qId = btn.getAttribute("data-goto-q");
        selectQuestion(qId);
      });
    });
  }

  /* ========================================================================
     7. ADMIN PANEL VIEW (ADD, EDIT, TOGGLE ACCESS, RESET, DELETE MURID)
     ======================================================================== */
  function resetAdminFormState() {
    uiState.editingStudentUsername = null;
    if (els.adminFormTitle) {
      els.adminFormTitle.textContent = "➕ Tambah Akses User Murid Baru";
    }
    if (els.adminSubmitBtn) {
      els.adminSubmitBtn.textContent = "+ Tambahkan Akun Murid";
    }
    if (els.adminCancelEditBtn) {
      els.adminCancelEditBtn.classList.add("hidden");
    }
    if (els.stuUsername) {
      els.stuUsername.disabled = false;
    }
    if (els.addStudentForm) {
      els.addStudentForm.reset();
      els.stuKelas.value = "Tim CCIT-A";
    }
  }

  function renderAdminView() {
    if (!currentUser || currentUser.role !== "admin") return;
    db = loadDB();

    const students = db.users.filter((u) => u.role === "murid");
    els.adminStudentCountBadge.textContent = `${students.length} Akun Murid`;
    els.adminLastSyncText.textContent = `Sinkronisasi Realtime Aktif (${new Date().toLocaleTimeString(
      "id-ID"
    )})`;

    els.adminStudentsTableBody.innerHTML = students
      .map((stu) => {
        const st = computeUserStats(stu.username);
        const sA = st.bySubtopic["sub-a"] || { correct: 0, answered: 0 };
        const sB = st.bySubtopic["sub-b"] || { correct: 0, answered: 0 };
        const sC = st.bySubtopic["sub-c"] || { correct: 0, answered: 0 };
        const sD = st.bySubtopic["sub-d"] || { correct: 0, answered: 0 };

        return `
          <tr>
            <td>
              <strong>${stu.name}</strong><br/>
              <small class="text-muted">Username: <code>${stu.username}</code></small>
            </td>
            <td>${stu.kelas || "-"}</td>
            <td><code>${stu.password}</code></td>
            <td>
              <span class="table-status-pill ${
                stu.active ? "correct" : "wrong"
              }">
                ${stu.active ? "Aktif (Bisa Login)" : "Dibekukan"}
              </span>
            </td>
            <td>
              <strong>${st.readCount} / ${st.totalTopics} Sub-Materi</strong>
            </td>
            <td>
              <strong>${st.answeredCount} / ${st.totalQ} Soal</strong><br/>
              <small class="text-muted">A:${sA.answered} B:${sB.answered} C:${sC.answered} D:${sD.answered}</small>
            </td>
            <td>
              <span class="badge-correct">✓ ${st.correctCount} Benar</span>
              <span class="badge-wrong">✕ ${st.wrongCount} Salah</span>
            </td>
            <td><strong style="font-size:15px;">${st.score100}</strong> / 100</td>
            <td>${formatTimeAgo(st.updatedAt || stu.lastActiveAt)}</td>
            <td>
              <div class="admin-row-actions">
                <button type="button" class="table-action-btn" data-admin-inspect="${
                  stu.username
                }" title="Lihat Rekapan Detail Murid">📊 Rekap</button>
                <button type="button" class="table-action-btn" data-admin-edit="${
                  stu.username
                }" title="Edit Nama, Kelas & Password Murid">✏️ Edit</button>
                <button type="button" class="table-action-btn" data-admin-toggle="${
                  stu.username
                }" title="Aktifkan / Nonaktifkan Login">
                  ${stu.active ? "🔒 Bekukan" : "🔓 Aktifkan"}
                </button>
                <button type="button" class="table-action-btn" data-admin-reset="${
                  stu.username
                }" title="Reset Jawaban Murid">↺ Reset</button>
                <button type="button" class="table-action-btn danger" data-admin-delete="${
                  stu.username
                }" title="Hapus Akun Murid">🗑</button>
              </div>
            </td>
          </tr>
        `;
      })
      .join("");

    // Inspect student rekap
    els.adminStudentsTableBody
      .querySelectorAll("[data-admin-inspect]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          uiState.rekapInspectedUsername = btn.getAttribute("data-admin-inspect");
          setMode("rekap");
        });
      });

    // Edit student credentials/profile
    els.adminStudentsTableBody
      .querySelectorAll("[data-admin-edit]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const uname = btn.getAttribute("data-admin-edit");
          const target = db.users.find((u) => u.username === uname);
          if (!target) return;

          uiState.editingStudentUsername = target.username;
          els.stuName.value = target.name;
          els.stuUsername.value = target.username;
          els.stuUsername.disabled = true;
          els.stuPassword.value = target.password;
          els.stuKelas.value = target.kelas || "Tim CCIT-A";
          els.stuActive.value = target.active ? "true" : "false";

          if (els.adminFormTitle) {
            els.adminFormTitle.textContent = `✏️ Edit Akun Murid (@${target.username})`;
          }
          if (els.adminSubmitBtn) {
            els.adminSubmitBtn.textContent = "💾 Simpan Perubahan Akun Murid";
          }
          if (els.adminCancelEditBtn) {
            els.adminCancelEditBtn.classList.remove("hidden");
          }
          els.stuName.focus();
        });
      });

    // Toggle active access
    els.adminStudentsTableBody
      .querySelectorAll("[data-admin-toggle]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const uname = btn.getAttribute("data-admin-toggle");
          const target = db.users.find((u) => u.username === uname);
          if (target) {
            target.active = !target.active;
            saveDB(db, "admin_toggle_user");
            renderAdminView();
          }
        });
      });

    // Reset student progress
    els.adminStudentsTableBody
      .querySelectorAll("[data-admin-reset]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const uname = btn.getAttribute("data-admin-reset");
          db.progressByUser[uname] = {
            visitedTopics: [FLAT_TOPICS[0].id],
            selectedOptionByQ: {},
            submittedByQ: {},
            updatedAt: new Date().toISOString()
          };
          saveDB(db, "admin_reset_user");
          renderAdminView();
        });
      });

    // Delete student
    els.adminStudentsTableBody
      .querySelectorAll("[data-admin-delete]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          const uname = btn.getAttribute("data-admin-delete");
          db.users = db.users.filter((u) => u.username !== uname);
          delete db.progressByUser[uname];
          if (uiState.editingStudentUsername === uname) {
            resetAdminFormState();
          }
          saveDB(db, "admin_delete_user");
          renderAdminView();
        });
      });
  }

  function handleSaveStudent(e) {
    e.preventDefault();
    db = loadDB();

    const name = els.stuName.value.trim();
    const username = els.stuUsername.value.trim().toLowerCase();
    const password = els.stuPassword.value.trim();
    const kelas = els.stuKelas.value.trim();
    const active = els.stuActive.value === "true";

    if (!name || !username || !password) return;

    // Mode 1: Editing existing student
    if (uiState.editingStudentUsername) {
      const target = db.users.find(
        (u) => u.username === uiState.editingStudentUsername
      );
      if (target) {
        target.name = name;
        target.password = password;
        target.kelas = kelas;
        target.active = active;
        saveDB(db, "admin_edit_student");

        els.adminFormMsg.textContent = `✓ Data akun murid "${name}" (@${target.username}) berhasil diperbarui!`;
        els.adminFormMsg.className = "admin-form-msg success";
        els.adminFormMsg.classList.remove("hidden");
        resetAdminFormState();
        renderAdminView();
        return;
      }
    }

    // Mode 2: Adding new student
    if (db.users.some((u) => u.username.toLowerCase() === username)) {
      els.adminFormMsg.textContent = `Username "${username}" sudah terdaftar! Gunakan username lain.`;
      els.adminFormMsg.className = "admin-form-msg error";
      els.adminFormMsg.classList.remove("hidden");
      return;
    }

    const now = new Date().toISOString();
    db.users.push({
      username,
      password,
      name,
      role: "murid",
      kelas,
      active,
      createdAt: now,
      lastActiveAt: null
    });

    ensureUserProgressRecord(db, username);
    saveDB(db, "admin_add_student");

    els.adminFormMsg.textContent = `✓ Akun murid "${name}" (@${username}) berhasil ditambahkan dan siap digunakan login!`;
    els.adminFormMsg.className = "admin-form-msg success";
    els.adminFormMsg.classList.remove("hidden");

    resetAdminFormState();
    renderAdminView();
  }

  function renderAllViews() {
    renderSidebar();
    updateHeaderProgress();
    if (uiState.mode === "materi") renderMateriView();
    else if (uiState.mode === "quiz") renderQuizView();
    else if (uiState.mode === "rekap") renderRekapView();
    else if (uiState.mode === "admin") renderAdminView();
  }

  /* ========================================================================
     8. EVENT BINDINGS & REALTIME SYNC LISTENERS
     ======================================================================== */
  function bindEvents() {
    els.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLogin(els.loginUsername.value, els.loginPassword.value);
    });

    els.logoutBtn.addEventListener("click", handleLogout);

    els.tabMenuMateri.addEventListener("click", () => setMode("materi"));
    els.tabMenuKuis.addEventListener("click", () => setMode("quiz"));
    els.tabMenuRekap.addEventListener("click", () => setMode("rekap"));
    els.tabMenuAdmin.addEventListener("click", () => setMode("admin"));

    els.headerRekapBtn.addEventListener("click", () => setMode("rekap"));
    els.headerAdminBtn.addEventListener("click", () => setMode("admin"));

    els.sidebarSearchInput.addEventListener("input", (e) => {
      uiState.searchQuery = e.target.value;
      renderSidebar();
    });

    // Voice Narrator inside Materi View
    if (els.btnNarrateMateri) {
      els.btnNarrateMateri.addEventListener("click", () => {
        const topic = getSubtopicMeta(uiState.activeTopicId);
        if (window.SoundStudio && topic.narratorSummary) {
          window.SoundStudio.speakText(topic.narratorSummary);
        }
      });
    }

    // Voice Narrator inside Quiz Question Card
    if (els.btnNarrateQuestion) {
      els.btnNarrateQuestion.addEventListener("click", () => {
        const q = QUIZ_QUESTIONS.find((item) => item.id === uiState.activeQuestionId);
        if (!q || !window.SoundStudio) return;
        const plainPrompt = q.prompt.replace(/<[^>]+>/g, " ");
        const optsText = q.options
          .map((o) => `Opsi ${o.key.toUpperCase()}: ${o.text}`)
          .join(". ");
        window.SoundStudio.speakText(
          `Soal nomor ${q.number}. ${q.title}. ${plainPrompt}. Pilihan jawaban: ${optsText}`
        );
      });
    }

    // Pre-Quiz Summary Toggle
    if (els.preQuizToggleBtn) {
      els.preQuizToggleBtn.addEventListener("click", () => {
        uiState.preQuizExpanded = !uiState.preQuizExpanded;
        if (window.SoundStudio) {
          window.SoundStudio.playAccordion(uiState.preQuizExpanded);
        }
        renderQuizView();
      });
    }

    // Topic Footer Navigation
    els.prevTopicBtn.addEventListener("click", () => {
      const idx = FLAT_TOPICS.findIndex((t) => t.id === uiState.activeTopicId);
      if (idx > 0) selectTopic(FLAT_TOPICS[idx - 1].id);
    });

    els.nextTopicBtn.addEventListener("click", () => {
      const idx = FLAT_TOPICS.findIndex((t) => t.id === uiState.activeTopicId);
      if (idx < FLAT_TOPICS.length - 1) selectTopic(FLAT_TOPICS[idx + 1].id);
    });

    els.bridgeToQuizBtn.addEventListener("click", () => {
      openQuizForSubtopic(uiState.activeTopicId);
    });

    if (els.footerQuizBridgeBtn) {
      els.footerQuizBridgeBtn.addEventListener("click", () => {
        openQuizForSubtopic(uiState.activeTopicId);
      });
    }

    if (els.backToSubtopicMateriBtn) {
      els.backToSubtopicMateriBtn.addEventListener("click", () => {
        selectTopic(uiState.activeQuizSubtopicId);
      });
    }

    // Simulator Controls
    els.simNextStepBtn.addEventListener("click", () => {
      const topic = getSubtopicMeta(uiState.activeTopicId);
      if (!topic || !topic.simulator) return;
      if (uiState.simStepIndex >= topic.simulator.steps.length - 1) {
        uiState.simStepIndex = 0;
      } else {
        uiState.simStepIndex++;
      }
      if (window.SoundStudio) {
        window.SoundStudio.playSimStep(uiState.simStepIndex + 1);
      }
      updateSimulatorStepUI(topic.simulator);
    });

    els.simResetBtn.addEventListener("click", () => {
      const topic = getSubtopicMeta(uiState.activeTopicId);
      if (!topic || !topic.simulator) return;
      if (window.SoundStudio) window.SoundStudio.playSimReset();
      uiState.simStepIndex = -1;
      updateSimulatorStepUI(topic.simulator);
    });

    // Quiz Actions
    els.submitAnswerBtn.addEventListener("click", handleSubmitAnswer);
    els.retryQuestionBtn.addEventListener("click", handleRetryQuestion);

    els.prevQuestionBtn.addEventListener("click", () => {
      const subQuestions = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
      const idx = subQuestions.findIndex((q) => q.id === uiState.activeQuestionId);
      if (idx > 0) selectQuestion(subQuestions[idx - 1].id);
    });

    els.nextQuestionBtn.addEventListener("click", () => {
      const subQuestions = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
      const idx = subQuestions.findIndex((q) => q.id === uiState.activeQuestionId);
      if (idx < subQuestions.length - 1) selectQuestion(subQuestions[idx + 1].id);
    });

    els.resetAllQuizBtn.addEventListener("click", () => {
      if (!currentUser) return;
      const prog = getActiveUserProgress();
      const subQuestions = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
      subQuestions.forEach((q) => {
        delete prog.selectedOptionByQ[q.id];
        delete prog.submittedByQ[q.id];
      });
      prog.updatedAt = new Date().toISOString();
      saveDB(db, "quiz_reset_subtopic");
      renderQuizView();
      renderSidebar();
      updateHeaderProgress();
    });

    els.openPopupModalBtn.addEventListener("click", () => {
      if (!currentUser) return;
      const prog = getActiveUserProgress();
      const q = QUIZ_QUESTIONS.find((item) => item.id === uiState.activeQuestionId);
      const sub = prog.submittedByQ[q.id];
      if (q && sub) openFeedbackModal(q, sub);
    });

    els.closeModalBtn.addEventListener("click", closeFeedbackModal);
    els.modalStayBtn.addEventListener("click", closeFeedbackModal);
    els.feedbackModalBackdrop.addEventListener("click", (e) => {
      if (e.target === els.feedbackModalBackdrop) closeFeedbackModal();
    });

    els.modalNextQuestionBtn.addEventListener("click", () => {
      closeFeedbackModal();
      const subQuestions = getQuestionsBySubtopic(uiState.activeQuizSubtopicId);
      const idx = subQuestions.findIndex((q) => q.id === uiState.activeQuestionId);
      if (idx < subQuestions.length - 1) {
        selectQuestion(subQuestions[idx + 1].id);
      }
    });

    // Rekap Filters
    els.rekapSelectUser.addEventListener("change", (e) => {
      uiState.rekapInspectedUsername = e.target.value;
      renderRekapView();
    });

    els.rekapFilterSubtopic.addEventListener("change", (e) => {
      uiState.rekapFilterSubtopic = e.target.value;
      renderRekapView();
    });

    els.rekapFilterStatus.addEventListener("change", (e) => {
      uiState.rekapFilterStatus = e.target.value;
      renderRekapView();
    });

    // Admin Form
    els.addStudentForm.addEventListener("submit", handleSaveStudent);
    if (els.adminCancelEditBtn) {
      els.adminCancelEditBtn.addEventListener("click", () => {
        resetAdminFormState();
      });
    }

    // Header Theme & 16:9 Toggle
    els.themeToggleBtn.addEventListener("click", () => {
      uiState.theme = uiState.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", uiState.theme);
    });

    els.ratioToggleBtn.addEventListener("click", () => {
      uiState.framed169 = !uiState.framed169;
      els.appViewport.classList.toggle("framed-16-9", uiState.framed169);
      els.ratioToggleBtn.classList.toggle("active", uiState.framed169);
    });

    // Cross-Tab Realtime Listener
    window.addEventListener("storage", (e) => {
      if (e.key === DB_STORAGE_KEY) {
        db = loadDB();
        if (currentUser) renderAllViews();
      }
    });

    if (realtimeChannel) {
      realtimeChannel.addEventListener("message", () => {
        db = loadDB();
        if (currentUser) renderAllViews();
      });
    }
  }

  /* ========================================================================
     INITIALIZATION
     ======================================================================== */
  function init() {
    bindEvents();

    const savedUsername = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (savedUsername) {
      const found = db.users.find(
        (u) => u.username === savedUsername && u.active
      );
      if (found) {
        currentUser = found;
        uiState.rekapInspectedUsername = found.username;
      }
    }

    applyUserSessionToUI();
  }

  init();
})();
