/* ==========================================================================
   EduLogic Java Studio — Interactive Application Logic (app.js)
   Features:
   1. Login Gate (Admin & Murid) + Role-based Access Control (No Demo Buttons)
   2. Admin User Management (Add Student, Toggle Active/Suspend, Reset, Delete)
   3. Per-User Realtime Progress Sync (localStorage + BroadcastChannel + storage event)
   4. Complete Pembahasan Materi per Sub-Bab (28 Sub-Bab) + 10 Soal & Pembahasan per Sub-Bab (280 Soal)
   5. Comprehensive Rekapan Benar / Salah (Per Bab, Per Sub-Bab & 280-Question Detailed Table)
   ========================================================================== */

(function () {
  "use strict";

  const DB_STORAGE_KEY = "edulogic_java_studio_db_v3";
  const SESSION_STORAGE_KEY = "edulogic_java_active_user_v3";

  // BroadcastChannel for cross-tab realtime updates
  const realtimeChannel =
    typeof BroadcastChannel !== "undefined"
      ? new BroadcastChannel("edulogic_java_realtime_channel")
      : null;

  // Flatten all 28 subtopics for linear navigation & progress tracking
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

  function getQuestionsByChapter(chapterId) {
    return QUIZ_QUESTIONS.filter((q) => q.chapterId === chapterId);
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
          name: "Administrator Utama",
          role: "admin",
          kelas: "Instruktur Java",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "budi",
          password: "12345",
          name: "Budi Santoso",
          role: "murid",
          kelas: "Kelas Java-A",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "siti",
          password: "12345",
          name: "Siti Aminah",
          role: "murid",
          kelas: "Kelas Java-A",
          active: true,
          createdAt: now,
          lastActiveAt: now
        },
        {
          username: "angga",
          password: "12345",
          name: "Angga Pratama",
          role: "murid",
          kelas: "Kelas Java-B",
          active: true,
          createdAt: now,
          lastActiveAt: now
        }
      ],
      progressByUser: {
        admin: {
          visitedTopics: [FLAT_TOPICS[0].id],
          selectedOptionByQ: {},
          submittedByQ: {},
          updatedAt: now
        },
        budi: {
          visitedTopics: ["1-a", "1-b", "1-f", "2-k", "3-a", "3-c", "4-a", "4-b"],
          selectedOptionByQ: {
            "q-1-a-1": "c",
            "q-1-f-1": "a",
            "q-2-k-1": "c",
            "q-3-c-1": "b",
            "q-4-b-1": "c"
          },
          submittedByQ: {
            "q-1-a-1": { chosen: "c", isCorrect: true, timestamp: now },
            "q-1-f-1": { chosen: "a", isCorrect: true, timestamp: now },
            "q-2-k-1": { chosen: "c", isCorrect: false, timestamp: now },
            "q-3-c-1": { chosen: "b", isCorrect: true, timestamp: now },
            "q-4-b-1": { chosen: "c", isCorrect: true, timestamp: now }
          },
          updatedAt: now
        },
        siti: {
          visitedTopics: ["1-a", "1-f", "2-a", "2-k", "3-a", "3-c"],
          selectedOptionByQ: {
            "q-1-f-1": "a",
            "q-2-k-1": "b",
            "q-3-c-1": "a"
          },
          submittedByQ: {
            "q-1-f-1": { chosen: "a", isCorrect: true, timestamp: now },
            "q-2-k-1": { chosen: "b", isCorrect: true, timestamp: now },
            "q-3-c-1": { chosen: "a", isCorrect: false, timestamp: now }
          },
          updatedAt: now
        },
        angga: {
          visitedTopics: ["1-a"],
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
      console.error("Failed to save DB:", e);
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

  // Application Runtime State
  let db = loadDB();

  const state = {
    currentUser: null, // { username, name, role, kelas, active }
    mode: "materi", // "materi" | "quiz" | "rekap" | "admin"
    activeTopicId: FLAT_TOPICS[0].id,
    expandedChapters: new Set(["bab-1", "bab-2", "bab-3", "bab-4"]),
    visitedTopics: new Set([FLAT_TOPICS[0].id]),
    searchQuery: "",
    framed169: false,
    theme: "dark",

    // Simulator state
    simStepIndex: 0,
    activeSimulator: null,

    // Quiz state (Per Sub-Bab: 28 Sub-Bab × 10 Soal = 280 Soal)
    activeQuizChapterId: "bab-1",
    activeQuizSubtopicId: "1-a",
    activeQuestionNumber: 1,
    selectedOptionByQ: {},
    submittedByQ: {},

    // Rekapan filter state
    rekapTargetUsername: null, // allows Admin to inspect any student
    rekapFilterChapter: "all",
    rekapFilterSubtopic: "all",
    rekapFilterStatus: "all"
  };

  // DOM Elements
  const el = {
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
    sidebarQuizList: document.getElementById("sidebarQuizList"),
    sidebarQuizStatus: document.getElementById("sidebarQuizStatus"),

    materiView: document.getElementById("materiView"),
    materiScrollContainer: document.getElementById("materiScrollContainer"),
    topicChapterBadge: document.getElementById("topicChapterBadge"),
    topicReadBadge: document.getElementById("topicReadBadge"),
    topicTitle: document.getElementById("topicTitle"),
    topicChapterDesc: document.getElementById("topicChapterDesc"),
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
    bridgeToQuizBtn: document.getElementById("bridgeToQuizBtn"),
    bridgeToQuizText: document.getElementById("bridgeToQuizText"),
    footerQuizBridgeBtn: document.getElementById("footerQuizBridgeBtn"),
    footerQuizBridgeText: document.getElementById("footerQuizBridgeText"),

    prevTopicBtn: document.getElementById("prevTopicBtn"),
    prevTopicTitle: document.getElementById("prevTopicTitle"),
    nextTopicBtn: document.getElementById("nextTopicBtn"),
    nextTopicTitle: document.getElementById("nextTopicTitle"),

    quizView: document.getElementById("quizView"),
    quizActiveChapterBadge: document.getElementById("quizActiveChapterBadge"),
    quizMainTitle: document.getElementById("quizMainTitle"),
    quizSubtitleText: document.getElementById("quizSubtitleText"),
    quizStatChapter: document.getElementById("quizStatChapter"),
    quizStatAnswered: document.getElementById("quizStatAnswered"),
    quizStatCorrect: document.getElementById("quizStatCorrect"),
    quizStatWrong: document.getElementById("quizStatWrong"),
    backToSubtopicMateriBtn: document.getElementById("backToSubtopicMateriBtn"),
    resetAllQuizBtn: document.getElementById("resetAllQuizBtn"),
    quizChapterTabs: document.getElementById("quizChapterTabs"),
    quizSubtopicBar: document.getElementById("quizSubtopicBar"),
    quizPillsBar: document.getElementById("quizPillsBar"),

    qNumberBadge: document.getElementById("qNumberBadge"),
    qCategoryBadge: document.getElementById("qCategoryBadge"),
    qStatusChip: document.getElementById("qStatusChip"),
    qPromptContent: document.getElementById("qPromptContent"),
    qCodeWrapper: document.getElementById("qCodeWrapper"),
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

    // Rekap View Elements
    rekapView: document.getElementById("rekapView"),
    rekapOwnerBadge: document.getElementById("rekapOwnerBadge"),
    rekapMainTitle: document.getElementById("rekapMainTitle"),
    rekapSubtitle: document.getElementById("rekapSubtitle"),
    rekapAdminUserSelectorWrap: document.getElementById(
      "rekapAdminUserSelectorWrap"
    ),
    rekapSelectUser: document.getElementById("rekapSelectUser"),
    rekapKpiGrid: document.getElementById("rekapKpiGrid"),
    rekapChapterGrid: document.getElementById("rekapChapterGrid"),
    rekapFilterChapter: document.getElementById("rekapFilterChapter"),
    rekapFilterSubtopic: document.getElementById("rekapFilterSubtopic"),
    rekapFilterStatus: document.getElementById("rekapFilterStatus"),
    rekapTableBody: document.getElementById("rekapTableBody"),

    // Admin View Elements
    adminView: document.getElementById("adminView"),
    adminLastSyncText: document.getElementById("adminLastSyncText"),
    addStudentForm: document.getElementById("addStudentForm"),
    stuName: document.getElementById("stuName"),
    stuUsername: document.getElementById("stuUsername"),
    stuPassword: document.getElementById("stuPassword"),
    stuKelas: document.getElementById("stuKelas"),
    stuActive: document.getElementById("stuActive"),
    adminFormMsg: document.getElementById("adminFormMsg"),
    adminStudentCountBadge: document.getElementById("adminStudentCountBadge"),
    adminStudentsTableBody: document.getElementById("adminStudentsTableBody"),

    // Modal
    feedbackModalBackdrop: document.getElementById("feedbackModalBackdrop"),
    modalHeaderBanner: document.getElementById("modalHeaderBanner"),
    modalVerdictIcon: document.getElementById("modalVerdictIcon"),
    modalVerdictTitle: document.getElementById("modalVerdictTitle"),
    modalVerdictSub: document.getElementById("modalVerdictSub"),
    modalExplanationBody: document.getElementById("modalExplanationBody"),
    closeModalBtn: document.getElementById("closeModalBtn"),
    modalStayBtn: document.getElementById("modalStayBtn"),
    modalNextQuestionBtn: document.getElementById("modalNextQuestionBtn")
  };

  /* ========================================================================
     USER SESSION & REALTIME SYNC HELPERS
     ======================================================================== */
  function loadActiveUserProgressIntoMemory() {
    if (!state.currentUser) return;
    db = loadDB();
    const prog = ensureUserProgressRecord(db, state.currentUser.username);
    state.visitedTopics = new Set(prog.visitedTopics || [FLAT_TOPICS[0].id]);
    state.selectedOptionByQ = { ...(prog.selectedOptionByQ || {}) };
    state.submittedByQ = { ...(prog.submittedByQ || {}) };
  }

  function persistActiveUserProgress(eventType = "progress_update") {
    if (!state.currentUser) return;
    db = loadDB();
    const now = new Date().toISOString();
    const prog = ensureUserProgressRecord(db, state.currentUser.username);
    prog.visitedTopics = Array.from(state.visitedTopics);
    prog.selectedOptionByQ = { ...state.selectedOptionByQ };
    prog.submittedByQ = { ...state.submittedByQ };
    prog.updatedAt = now;

    const u = db.users.find((x) => x.username === state.currentUser.username);
    if (u) {
      u.lastActiveAt = now;
    }

    saveDB(db, eventType);
  }

  function loginWithCredentials(usernameInput, passwordInput) {
    db = loadDB();
    const cleanUser = usernameInput.trim().toLowerCase();
    const found = db.users.find(
      (u) => u.username.toLowerCase() === cleanUser && u.password === passwordInput
    );

    if (!found) {
      if (window.SoundStudio) window.SoundStudio.playLoginError();
      el.loginErrorMsg.textContent =
        "Username atau password salah! Silakan cek kembali.";
      el.loginErrorMsg.classList.remove("hidden");
      return false;
    }

    if (!found.active && found.role !== "admin") {
      if (window.SoundStudio) window.SoundStudio.playLoginError();
      el.loginErrorMsg.textContent =
        "Akses akun murid ini sedang dinonaktifkan oleh Admin!";
      el.loginErrorMsg.classList.remove("hidden");
      return false;
    }

    // Login success
    if (window.SoundStudio) window.SoundStudio.playLoginSuccess();
    found.lastActiveAt = new Date().toISOString();
    ensureUserProgressRecord(db, found.username);
    saveDB(db, "user_login");

    state.currentUser = { ...found };
    state.rekapTargetUsername = found.username;
    sessionStorage.setItem(SESSION_STORAGE_KEY, found.username);

    loadActiveUserProgressIntoMemory();
    applyRoleUI();
    el.loginGate.classList.add("hidden");

    // Default start view
    if (found.role === "admin") {
      switchToAdminView();
    } else {
      selectTopic(state.activeTopicId);
    }
    return true;
  }

  function logoutCurrentUser() {
    if (window.SoundStudio) window.SoundStudio.playLogout();
    state.currentUser = null;
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    closeFeedbackModal();
    el.loginPassword.value = "";
    el.loginErrorMsg.classList.add("hidden");
    el.loginGate.classList.remove("hidden");
  }

  function applyRoleUI() {
    if (!state.currentUser) return;
    const isAdmin = state.currentUser.role === "admin";

    el.headerUserAvatar.textContent = state.currentUser.name
      .charAt(0)
      .toUpperCase();
    el.headerUserName.textContent = state.currentUser.name;
    el.headerUserRole.textContent = isAdmin
      ? "ADMINISTRATOR"
      : `${state.currentUser.kelas || "MURID"}`;
    el.headerUserRole.className = `user-role-tag ${isAdmin ? "is-admin" : ""}`;

    if (isAdmin) {
      el.headerAdminBtn.classList.remove("hidden");
      el.tabMenuAdmin.classList.remove("hidden");
      el.rekapAdminUserSelectorWrap.classList.remove("hidden");
    } else {
      el.headerAdminBtn.classList.add("hidden");
      el.tabMenuAdmin.classList.add("hidden");
      el.rekapAdminUserSelectorWrap.classList.add("hidden");
    }
  }

  /* ========================================================================
     SYNTAX HIGHLIGHTER FOR JAVA & PSEUDOCODE
     ======================================================================== */
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function highlightSyntax(rawCode) {
    const decoded = rawCode
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");

    const tokenRegex =
      /(\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:public|class|static|void|if|else|switch|case|default|break|continue|for|do|while|return|new|IF|THEN|ELSE|END|WHILE|DO|FOR|TO|FUNCTION|RETURN|OUTPUT|INPUT|SET|MOD|and|or|not|notR|notT|True|False|true|false)\b|\b(?:int|double|char|boolean|String|System|out|println|print|Math|pow|sqrt|abs|max|min|round|length|equals|charAt|substring)\b|\b\d+(?:\.\d+)?\b|<-|==|!=|>=|<=|&&|\|\|)/g;

    let result = "";
    let lastIndex = 0;
    let match;

    while ((match = tokenRegex.exec(decoded)) !== null) {
      result += escapeHtml(decoded.slice(lastIndex, match.index));
      const token = match[0];

      if (token.startsWith("//")) {
        result += `<span class="tok-com">${escapeHtml(token)}</span>`;
      } else if (token.startsWith('"') || token.startsWith("'")) {
        result += `<span class="tok-str">${escapeHtml(token)}</span>`;
      } else if (/^\d/.test(token)) {
        result += `<span class="tok-num">${escapeHtml(token)}</span>`;
      } else if (
        /^(int|double|char|boolean|String|System|out|println|print|Math|pow|sqrt|abs|max|min|round|length|equals|charAt|substring)$/.test(
          token
        )
      ) {
        result += `<span class="tok-type">${escapeHtml(token)}</span>`;
      } else if (/^(<-|==|!=|>=|<=|&&|\|\|)$/.test(token)) {
        result += `<span class="tok-op">${escapeHtml(token)}</span>`;
      } else {
        result += `<span class="tok-kw">${escapeHtml(token)}</span>`;
      }

      lastIndex = tokenRegex.lastIndex;
    }

    result += escapeHtml(decoded.slice(lastIndex));
    return result;
  }

  function applyAllCodeHighlights(container) {
    const codeBlocks = container.querySelectorAll("pre[data-highlight]");
    codeBlocks.forEach((pre) => {
      pre.innerHTML = highlightSyntax(pre.textContent);
    });

    const copyBtns = container.querySelectorAll(".copy-code-btn");
    copyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (window.SoundStudio) window.SoundStudio.playCopy();
        const raw = btn.getAttribute("data-copy") || "";
        const formatted = raw.replace(/\\n/g, "\n");
        navigator.clipboard.writeText(formatted).then(() => {
          const prevText = btn.textContent;
          btn.textContent = "✓ Tersalin!";
          setTimeout(() => {
            btn.textContent = prevText;
          }, 1500);
        });
      });
    });
  }

  /* ========================================================================
     SIDEBAR NAVIGATION & PROGRESS INDICATORS
     ======================================================================== */
  function setActiveViewTab(modeName) {
    state.mode = modeName;
    if (window.SoundStudio) window.SoundStudio.setAppMode(modeName);
    el.materiView.classList.toggle("active", modeName === "materi");
    el.quizView.classList.toggle("active", modeName === "quiz");
    el.rekapView.classList.toggle("active", modeName === "rekap");
    el.adminView.classList.toggle("active", modeName === "admin");

    el.tabMenuMateri.classList.toggle("active", modeName === "materi");
    el.tabMenuKuis.classList.toggle("active", modeName === "quiz");
    el.tabMenuRekap.classList.toggle("active", modeName === "rekap");
    el.tabMenuAdmin.classList.toggle("active", modeName === "admin");
  }

  function renderSidebar() {
    const query = state.searchQuery.trim().toLowerCase();
    el.sidebarTreeMateri.innerHTML = "";

    CURRICULUM_DATA.forEach((chapter) => {
      const filteredSubtopics = chapter.subtopics.filter((sub) => {
        if (!query) return true;
        return (
          sub.title.toLowerCase().includes(query) ||
          chapter.title.toLowerCase().includes(query) ||
          sub.code.toLowerCase().includes(query)
        );
      });

      if (filteredSubtopics.length === 0) return;

      const isExpanded =
        query.length > 0 || state.expandedChapters.has(chapter.id);
      const hasActiveTopic = chapter.subtopics.some(
        (s) => s.id === state.activeTopicId && state.mode === "materi"
      );

      const groupDiv = document.createElement("div");
      groupDiv.className = `chapter-group ${isExpanded ? "expanded" : ""} ${
        hasActiveTopic ? "active-chapter" : ""
      }`;

      const headerBtn = document.createElement("button");
      headerBtn.className = "chapter-header-btn";
      headerBtn.innerHTML = `
        <div class="chapter-header-left">
          <span class="chapter-roman">${chapter.roman}</span>
          <span class="chapter-name">${chapter.title}</span>
        </div>
        <span class="chapter-chevron">▶</span>
      `;
      headerBtn.addEventListener("click", () => {
        if (state.expandedChapters.has(chapter.id)) {
          state.expandedChapters.delete(chapter.id);
        } else {
          state.expandedChapters.add(chapter.id);
        }
        renderSidebar();
      });

      const subListDiv = document.createElement("div");
      subListDiv.className = "subtopic-list";

      filteredSubtopics.forEach((sub) => {
        const isActive =
          state.mode === "materi" && state.activeTopicId === sub.id;
        const isVisited = state.visitedTopics.has(sub.id);

        // Compute Sub-Bab 10-question progress
        const subQs = getQuestionsBySubtopic(sub.id);
        const ansCount = subQs.filter((q) => state.submittedByQ[q.id]).length;
        const corCount = subQs.filter(
          (q) => state.submittedByQ[q.id] && state.submittedByQ[q.id].isCorrect
        ).length;

        let miniQuizClass = "";
        let miniQuizText = `${ansCount}/10`;
        if (ansCount > 0) {
          miniQuizText = `${corCount}/10`;
          miniQuizClass = corCount >= 7 ? "done-good" : "done-warn";
        }

        const subBtn = document.createElement("button");
        subBtn.className = `subtopic-btn ${isActive ? "active" : ""} ${
          isVisited ? "visited" : ""
        }`;
        subBtn.innerHTML = `
          <span class="subtopic-label">
            <span class="subtopic-code">${sub.code}.</span>
            <span class="subtopic-text" title="${sub.title}">${sub.title}</span>
          </span>
          <span class="subtopic-right-badges">
            <span class="subtopic-quiz-mini ${miniQuizClass}" title="Skor Latihan 10 Soal Sub-Bab ${sub.code}">${miniQuizText}</span>
            <span class="subtopic-check">✓</span>
          </span>
        `;
        subBtn.addEventListener("click", () => {
          selectTopic(sub.id);
        });
        subListDiv.appendChild(subBtn);
      });

      groupDiv.appendChild(headerBtn);
      groupDiv.appendChild(subListDiv);
      el.sidebarTreeMateri.appendChild(groupDiv);
    });

    // Render Sidebar Quiz Items (28 Sub-Bab Quiz Packages, 10 Questions each)
    el.sidebarQuizList.innerHTML = "";
    FLAT_TOPICS.forEach((sub) => {
      if (
        query &&
        !sub.title.toLowerCase().includes(query) &&
        !sub.chapterTitle.toLowerCase().includes(query) &&
        !`${sub.chapterRoman}.${sub.code}`.toLowerCase().includes(query)
      ) {
        return;
      }

      const subQuestions = getQuestionsBySubtopic(sub.id);
      const answeredInSub = subQuestions.filter(
        (q) => state.submittedByQ[q.id]
      ).length;
      const correctInSub = subQuestions.filter(
        (q) => state.submittedByQ[q.id] && state.submittedByQ[q.id].isCorrect
      ).length;
      const wrongInSub = answeredInSub - correctInSub;

      const isQuizActive =
        state.mode === "quiz" && state.activeQuizSubtopicId === sub.id;

      let statusText = `${answeredInSub}/10`;
      let statusClass = "";
      if (answeredInSub > 0) {
        statusText = `${correctInSub}B/${wrongInSub}S`;
        statusClass = correctInSub >= wrongInSub ? "correct" : "wrong";
      }

      const itemBtn = document.createElement("button");
      itemBtn.className = `quiz-nav-item ${isQuizActive ? "active" : ""}`;
      itemBtn.innerHTML = `
        <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${sub.chapterRoman}.${sub.code} — ${sub.title}</span>
        <span class="quiz-nav-status ${statusClass}">${statusText}</span>
      `;
      itemBtn.addEventListener("click", () => {
        switchToQuiz(sub.chapterId, sub.id, 1);
      });
      el.sidebarQuizList.appendChild(itemBtn);
    });

    updateProgressIndicators();
  }

  function updateProgressIndicators() {
    const totalItems = FLAT_TOPICS.length + QUIZ_QUESTIONS.length;
    const completedQuizCount = Object.keys(state.submittedByQ).length;
    const completedTotal = state.visitedTopics.size + completedQuizCount;
    const pct = Math.min(100, Math.round((completedTotal / totalItems) * 100));

    el.progressPercent.textContent = `${pct}%`;
    el.progressBarFill.style.width = `${pct}%`;

    const correctCount = Object.values(state.submittedByQ).filter(
      (r) => r.isCorrect
    ).length;
    const wrongCount = completedQuizCount - correctCount;

    el.headerRekapBadge.textContent = `${correctCount}B / ${wrongCount}S`;
    el.sidebarQuizStatus.textContent = `${completedQuizCount}/${QUIZ_QUESTIONS.length} Dijawab`;
  }

  /* ========================================================================
     VIEW A: MATERI & STEP-BY-STEP SIMULATOR (WITH PER-SUB-BAB 10 QUIZ CTA)
     ======================================================================== */
  function selectTopic(topicId) {
    setActiveViewTab("materi");
    state.activeTopicId = topicId;
    state.visitedTopics.add(topicId);
    persistActiveUserProgress("topic_visited");

    const currentIdx = FLAT_TOPICS.findIndex((t) => t.id === topicId);
    const topic = FLAT_TOPICS[currentIdx] || FLAT_TOPICS[0];
    state.expandedChapters.add(topic.chapterId);
    state.activeQuizChapterId = topic.chapterId;
    state.activeQuizSubtopicId = topic.id;

    el.crumbChapter.textContent = `${topic.chapterRoman}. ${topic.chapterTitle}`;
    el.crumbTopic.textContent = `${topic.code}. ${topic.title}`;

    el.topicChapterBadge.textContent = `BAB ${topic.chapterRoman} • SUB-BAB ${topic.code} • ${topic.chapterTitle.toUpperCase()}`;
    el.topicTitle.textContent = `${topic.code}. ${topic.title}`;
    el.topicChapterDesc.textContent = topic.chapterDesc;
    el.topicBodyContent.innerHTML = topic.content;

    // Update Sub-Bab 10-Question CTA Card & Footer Button
    const subQuestions = getQuestionsBySubtopic(topic.id);
    const ansSub = subQuestions.filter((q) => state.submittedByQ[q.id]).length;
    const corSub = subQuestions.filter(
      (q) => state.submittedByQ[q.id] && state.submittedByQ[q.id].isCorrect
    ).length;
    const wrgSub = ansSub - corSub;

    if (el.subtopicQuizCtaBadge) {
      el.subtopicQuizCtaBadge.textContent = `LATIHAN SUB-BAB ${topic.chapterRoman}.${topic.code} • 10 SOAL & PEMBAHASAN`;
    }
    if (el.subtopicQuizCtaTitle) {
      el.subtopicQuizCtaTitle.textContent = `Latihan 10 Soal Sub-Bab ${topic.code}. ${topic.title}`;
    }
    if (el.subtopicQuizCtaDesc) {
      el.subtopicQuizCtaDesc.textContent = `Selesaikan 10 soal latihan pilihan ganda khusus materi "${topic.code}. ${topic.title}" lengkap dengan pembahasan langkah demi langkah.`;
    }
    if (el.subtopicQuizCtaScore) {
      el.subtopicQuizCtaScore.textContent =
        ansSub > 0
          ? `Progres Sub-Bab ${topic.code}: ${ansSub}/10 Dijawab (${corSub} Benar, ${wrgSub} Salah)`
          : `Progres Sub-Bab ${topic.code}: 0 / 10 Soal Dijawab`;
    }
    if (el.bridgeToQuizText) {
      el.bridgeToQuizText.textContent = `Kerjakan 10 Soal Sub-Bab ${topic.chapterRoman}.${topic.code} (${topic.title})`;
    }
    if (el.footerQuizBridgeText) {
      el.footerQuizBridgeText.textContent = `📝 Latihan 10 Soal Sub-Bab ${topic.chapterRoman}.${topic.code}`;
    }

    applyAllCodeHighlights(el.topicBodyContent);

    if (topic.simulator) {
      state.activeSimulator = topic.simulator;
      state.simStepIndex = 0;
      el.simulatorContainer.classList.remove("hidden");
      renderSimulator();
    } else {
      state.activeSimulator = null;
      el.simulatorContainer.classList.add("hidden");
    }

    const prevTopic = currentIdx > 0 ? FLAT_TOPICS[currentIdx - 1] : null;
    const nextTopic =
      currentIdx < FLAT_TOPICS.length - 1 ? FLAT_TOPICS[currentIdx + 1] : null;

    el.prevTopicBtn.disabled = !prevTopic;
    el.prevTopicTitle.textContent = prevTopic
      ? `${prevTopic.chapterRoman}.${prevTopic.code} ${prevTopic.title}`
      : "Awal Materi";

    el.nextTopicBtn.disabled = !nextTopic;
    el.nextTopicTitle.textContent = nextTopic
      ? `${nextTopic.chapterRoman}.${nextTopic.code} ${nextTopic.title}`
      : "Selesai — Lanjut ke Evaluasi Kuis!";

    el.materiScrollContainer.scrollTop = 0;
    renderSidebar();
  }

  function renderSimulator() {
    const sim = state.activeSimulator;
    if (!sim) return;

    const currentStep = sim.steps[state.simStepIndex];
    el.simTitle.textContent = sim.title;

    el.simCodePane.innerHTML = "";
    sim.lines.forEach((lineText, idx) => {
      const lineDiv = document.createElement("div");
      lineDiv.className = `sim-code-line ${
        currentStep.line === idx ? "active-line" : ""
      }`;
      lineDiv.innerHTML = `
        <span class="sim-line-num">${idx + 1}</span>
        <span>${highlightSyntax(lineText)}</span>
      `;
      el.simCodePane.appendChild(lineDiv);
    });

    el.simVarsGrid.innerHTML = "";
    Object.entries(currentStep.vars).forEach(([k, v]) => {
      const chip = document.createElement("div");
      chip.className = "var-chip";
      chip.innerHTML = `<span class="var-name">${escapeHtml(
        k
      )}</span><span>=</span><span class="var-val">${escapeHtml(v)}</span>`;
      el.simVarsGrid.appendChild(chip);
    });

    el.simStepExplanation.textContent = currentStep.explanation;
    el.simOutputConsole.textContent = currentStep.output;

    const isLastStep = state.simStepIndex >= sim.steps.length - 1;
    el.simNextStepBtn.textContent = isLastStep
      ? "✓ Selesai (Ulangi dari Awal)"
      : `Langkah Berikutnya (${state.simStepIndex + 1}/${sim.steps.length}) →`;
  }

  /* ========================================================================
     VIEW B: KUIS INTERAKTIF (28 SUB-BAB × 10 SOAL = 280 SOAL)
     ======================================================================== */
  function getActiveQuestionObj() {
    const subQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
    return (
      subQuestions.find((q) => q.number === state.activeQuestionNumber) ||
      subQuestions[0] ||
      QUIZ_QUESTIONS[0]
    );
  }

  function switchToQuiz(
    chapterId = state.activeQuizChapterId,
    subtopicIdOrQNum = state.activeQuizSubtopicId,
    questionNumber = 1
  ) {
    setActiveViewTab("quiz");
    state.activeQuizChapterId = chapterId;

    const activeChapter =
      CURRICULUM_DATA.find((c) => c.id === chapterId) || CURRICULUM_DATA[0];

    if (typeof subtopicIdOrQNum === "number") {
      // Called as switchToQuiz(chapterId, questionNumber)
      const belongsToChapter = activeChapter.subtopics.some(
        (s) => s.id === state.activeQuizSubtopicId
      );
      if (!belongsToChapter) {
        state.activeQuizSubtopicId = activeChapter.subtopics[0].id;
      }
      state.activeQuestionNumber = subtopicIdOrQNum;
    } else if (typeof subtopicIdOrQNum === "string" && subtopicIdOrQNum) {
      state.activeQuizSubtopicId = subtopicIdOrQNum;
      const meta = getSubtopicMeta(subtopicIdOrQNum);
      if (meta) {
        state.activeQuizChapterId = meta.chapterId;
      }
      state.activeQuestionNumber = questionNumber || 1;
    } else {
      state.activeQuizSubtopicId = activeChapter.subtopics[0].id;
      state.activeQuestionNumber = 1;
    }

    const q = getActiveQuestionObj();
    const subMeta = getSubtopicMeta(state.activeQuizSubtopicId);
    el.crumbChapter.textContent = `Kuis Sub-Bab ${subMeta.chapterRoman}.${subMeta.code} (${subMeta.title})`;
    el.crumbTopic.textContent = `Soal ${q.number} dari 10`;

    renderQuizView();
    renderSidebar();
  }

  function renderQuizView() {
    const activeChapter =
      CURRICULUM_DATA.find((c) => c.id === state.activeQuizChapterId) ||
      CURRICULUM_DATA[0];
    const activeSubMeta = getSubtopicMeta(state.activeQuizSubtopicId);
    const subtopicQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
    const q = getActiveQuestionObj();
    const selectedKey = state.selectedOptionByQ[q.id] || null;
    const submitted = state.submittedByQ[q.id] || null;

    if (el.quizActiveChapterBadge && activeSubMeta) {
      el.quizActiveChapterBadge.textContent = `BAB ${activeSubMeta.chapterRoman} • SUB-BAB ${activeSubMeta.code} • 10 SOAL LATIHAN & PEMBAHASAN`;
    }
    if (el.quizMainTitle && activeSubMeta) {
      el.quizMainTitle.textContent = `Latihan 10 Soal Sub-Bab ${activeSubMeta.chapterRoman}.${activeSubMeta.code}: ${activeSubMeta.title}`;
    }
    if (el.quizSubtitleText && activeSubMeta) {
      el.quizSubtitleText.innerHTML = `Materi: <strong>${escapeHtml(
        activeSubMeta.chapterRoman + ". " + activeSubMeta.chapterTitle
      )}</strong> &mdash; Pilih poin Sub-Bab (<strong>A, B, C, dst.</strong>) di bawah untuk mengerjakan 10 soal latihan beserta pembahasan lengkapnya.`;
    }

    const subAnsweredCount = subtopicQuestions.filter(
      (item) => state.submittedByQ[item.id]
    ).length;
    const totalAnsweredCount = Object.keys(state.submittedByQ).length;
    const totalCorrectCount = Object.values(state.submittedByQ).filter(
      (r) => r.isCorrect
    ).length;
    const totalWrongCount = totalAnsweredCount - totalCorrectCount;

    if (el.quizStatChapter) {
      el.quizStatChapter.textContent = `${subAnsweredCount} / ${subtopicQuestions.length}`;
    }
    el.quizStatAnswered.textContent = `${totalAnsweredCount} / ${QUIZ_QUESTIONS.length}`;
    el.quizStatCorrect.textContent = `${totalCorrectCount}`;
    if (el.quizStatWrong) {
      el.quizStatWrong.textContent = `${totalWrongCount}`;
    }

    // 1. Render 4 Chapter Category Tabs
    if (el.quizChapterTabs) {
      el.quizChapterTabs.innerHTML = "";
      CURRICULUM_DATA.forEach((ch) => {
        const qs = getQuestionsByChapter(ch.id);
        const ans = qs.filter((item) => state.submittedByQ[item.id]).length;
        const cor = qs.filter(
          (item) =>
            state.submittedByQ[item.id] && state.submittedByQ[item.id].isCorrect
        ).length;
        const wrg = ans - cor;

        const tabBtn = document.createElement("button");
        tabBtn.className = `quiz-ch-tab ${
          ch.id === state.activeQuizChapterId ? "active" : ""
        }`;
        tabBtn.innerHTML = `
          <div class="quiz-ch-top">
            <span class="quiz-ch-roman">BAB ${ch.roman} (${ch.subtopics.length} Sub-Bab • ${qs.length} Soal)</span>
            <span class="quiz-ch-score">${
              ans > 0 ? `${cor}B / ${wrg}S` : `0/${qs.length}`
            }</span>
          </div>
          <div class="quiz-ch-name">${ch.title}</div>
        `;
        tabBtn.addEventListener("click", () => {
          const firstSubId = ch.subtopics[0].id;
          switchToQuiz(ch.id, firstSubId, 1);
        });
        el.quizChapterTabs.appendChild(tabBtn);
      });
    }

    // 2. Render Sub-Bab Selector Chips (A, B, C, ...) for the Active Chapter
    if (el.quizSubtopicBar && activeChapter) {
      el.quizSubtopicBar.innerHTML = "";
      activeChapter.subtopics.forEach((sub) => {
        const subQs = getQuestionsBySubtopic(sub.id);
        const ans = subQs.filter((item) => state.submittedByQ[item.id]).length;
        const cor = subQs.filter(
          (item) =>
            state.submittedByQ[item.id] && state.submittedByQ[item.id].isCorrect
        ).length;
        const wrg = ans - cor;

        let scoreClass = "";
        let scoreLabel = `${ans}/10`;
        if (ans > 0) {
          scoreLabel = `${cor}B/${wrg}S`;
          scoreClass = cor >= wrg ? "has-correct" : "has-wrong";
        }

        const chipBtn = document.createElement("button");
        chipBtn.className = `quiz-sub-chip ${
          sub.id === state.activeQuizSubtopicId ? "active" : ""
        }`;
        chipBtn.innerHTML = `
          <span><strong>${sub.code}.</strong> ${escapeHtml(sub.title)}</span>
          <span class="quiz-sub-chip-score ${scoreClass}">${scoreLabel}</span>
        `;
        chipBtn.addEventListener("click", () => {
          switchToQuiz(activeChapter.id, sub.id, 1);
        });
        el.quizSubtopicBar.appendChild(chipBtn);
      });
    }

    // 3. Render 10 Question Number Pills for Active Sub-Bab
    el.quizPillsBar.innerHTML = "";
    subtopicQuestions.forEach((item) => {
      const subRec = state.submittedByQ[item.id];
      let statusCls = "";
      let tagText = "•";
      if (subRec) {
        statusCls = subRec.isCorrect ? "answered-correct" : "answered-wrong";
        tagText = subRec.isCorrect ? "✓" : "✕";
      }

      const pillBtn = document.createElement("button");
      pillBtn.className = `q-pill-btn ${
        item.number === state.activeQuestionNumber ? "active" : ""
      } ${statusCls}`;
      pillBtn.title = item.shortTitle;
      pillBtn.innerHTML = `
        <span>Soal ${item.number}</span>
        <span class="q-pill-tag">${tagText}</span>
      `;
      pillBtn.addEventListener("click", () => {
        switchToQuiz(
          state.activeQuizChapterId,
          state.activeQuizSubtopicId,
          item.number
        );
      });
      el.quizPillsBar.appendChild(pillBtn);
    });

    el.qNumberBadge.textContent = `SUB-BAB ${activeSubMeta.chapterRoman}.${activeSubMeta.code} • SOAL ${q.number} DARI ${subtopicQuestions.length}`;
    el.qCategoryBadge.textContent = `${q.category} • ${q.shortTitle.replace(
      /^Soal \d+:\s*/,
      ""
    )}`;

    if (!submitted) {
      el.qStatusChip.textContent = "Belum Dijawab";
      el.qStatusChip.className = "q-status-chip";
    } else if (submitted.isCorrect) {
      el.qStatusChip.textContent = "✓ Jawaban Benar";
      el.qStatusChip.className = "q-status-chip correct";
    } else {
      el.qStatusChip.textContent = "✕ Jawaban Salah";
      el.qStatusChip.className = "q-status-chip wrong";
    }

    el.qPromptContent.innerHTML = q.promptHtml;
    if (q.codeSnippet) {
      el.qCodeWrapper.classList.remove("hidden");
      el.qCodeWrapper.innerHTML = `
        <div class="code-snippet-box">
          <div class="code-box-header">
            <span class="code-lang-tag">${escapeHtml(q.codeSnippet.label)}</span>
          </div>
          <pre class="code-pre" data-highlight="${q.codeSnippet.lang}">${escapeHtml(
        q.codeSnippet.code
      )}</pre>
        </div>
      `;
      applyAllCodeHighlights(el.qCodeWrapper);
    } else {
      el.qCodeWrapper.classList.add("hidden");
      el.qCodeWrapper.innerHTML = "";
    }

    el.qOptionsList.innerHTML = "";
    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      let cls = "option-btn";
      let badgeHtml = "";

      if (submitted) {
        btn.disabled = true;
        if (opt.key === q.correctKey) {
          cls += " eval-correct";
          badgeHtml = `<span class="option-badge-result" style="color:var(--status-correct)">✓ Kunci Jawaban</span>`;
        } else if (opt.key === submitted.chosen && !submitted.isCorrect) {
          cls += " eval-wrong";
          badgeHtml = `<span class="option-badge-result" style="color:var(--status-wrong)">✕ Pilihan Anda</span>`;
        }
      } else if (selectedKey === opt.key) {
        cls += " selected";
      }

      btn.className = cls;
      btn.innerHTML = `
        <span class="option-letter">${opt.key}</span>
        <span class="option-text">${escapeHtml(opt.text)}</span>
        ${badgeHtml}
      `;

      btn.addEventListener("click", () => {
        if (state.submittedByQ[q.id]) return;
        if (window.SoundStudio) window.SoundStudio.playSelectOption(opt.key);
        state.selectedOptionByQ[q.id] = opt.key;
        persistActiveUserProgress("option_selected");
        renderQuizView();
      });

      el.qOptionsList.appendChild(btn);
    });

    if (submitted) {
      el.submitAnswerBtn.classList.add("hidden");
      el.retryQuestionBtn.classList.remove("hidden");
    } else {
      el.submitAnswerBtn.classList.remove("hidden");
      el.submitAnswerBtn.disabled = !selectedKey;
      el.retryQuestionBtn.classList.add("hidden");
    }

    el.prevQuestionBtn.disabled = state.activeQuestionNumber <= 1;
    el.nextQuestionBtn.disabled =
      state.activeQuestionNumber >= subtopicQuestions.length;

    if (!submitted) {
      el.feedbackEmptyState.classList.remove("hidden");
      el.feedbackResultContent.classList.add("hidden");
    } else {
      el.feedbackEmptyState.classList.add("hidden");
      el.feedbackResultContent.classList.remove("hidden");

      const chosenObj = q.options.find((o) => o.key === submitted.chosen);
      const correctObj = q.options.find((o) => o.key === q.correctKey);

      el.feedbackBanner.className = `feedback-banner ${
        submitted.isCorrect ? "is-correct" : "is-wrong"
      }`;
      el.feedbackIconCircle.textContent = submitted.isCorrect ? "✓" : "✕";
      el.feedbackVerdict.textContent = submitted.isCorrect
        ? "JAWABAN BENAR! (TEPAT)"
        : "JAWABAN SALAH (KURANG TEPAT)";
      el.feedbackChosenInfo.textContent = submitted.isCorrect
        ? `Anda memilih Opsi ${submitted.chosen.toUpperCase()}. ${
            chosenObj ? chosenObj.text : ""
          }`
        : `Pilihan Anda: Opsi ${submitted.chosen.toUpperCase()} • Kunci yang benar: Opsi ${q.correctKey.toUpperCase()} (${
            correctObj ? correctObj.text : ""
          })`;

      el.feedbackExplanationBody.innerHTML = q.explanationHtml;
    }
  }

  function handleSubmitAnswer() {
    const q = getActiveQuestionObj();
    const chosen = state.selectedOptionByQ[q.id];
    if (!chosen) return;

    const isCorrect = chosen === q.correctKey;
    if (window.SoundStudio) {
      if (isCorrect) window.SoundStudio.playCorrect();
      else window.SoundStudio.playWrong();
    }
    state.submittedByQ[q.id] = {
      chosen,
      isCorrect,
      timestamp: new Date().toISOString()
    };

    persistActiveUserProgress("quiz_submitted");
    renderQuizView();
    renderSidebar();
    openFeedbackModal(q, state.submittedByQ[q.id]);
  }

  /* ========================================================================
     VIEW C: BAGIAN REKAPAN BENAR / SALAH (PER USER & REALTIME - 280 SOAL)
     ======================================================================== */
  function populateRekapSubtopicDropdown() {
    if (!el.rekapFilterSubtopic) return;
    const selectedCh = state.rekapFilterChapter;
    const prevSub = state.rekapFilterSubtopic;

    el.rekapFilterSubtopic.innerHTML = `<option value="all">Semua Sub-Bab (${
      selectedCh === "all" ? "28 Sub-Bab" : "Bab Terpilih"
    })</option>`;

    FLAT_TOPICS.forEach((t) => {
      if (selectedCh !== "all" && t.chapterId !== selectedCh) return;
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = `${t.chapterRoman}.${t.code} — ${t.title} (10 Soal)`;
      if (t.id === prevSub) opt.selected = true;
      el.rekapFilterSubtopic.appendChild(opt);
    });
  }

  function switchToRekapView(targetUsername = null) {
    setActiveViewTab("rekap");
    db = loadDB();

    if (targetUsername) {
      state.rekapTargetUsername = targetUsername;
    } else if (!state.rekapTargetUsername && state.currentUser) {
      state.rekapTargetUsername = state.currentUser.username;
    }

    el.crumbChapter.textContent = "Evaluasi & Laporan";
    el.crumbTopic.textContent = `Rekapan Benar / Salah (${QUIZ_QUESTIONS.length} Soal)`;

    populateRekapSubtopicDropdown();
    renderRekapView();
    renderSidebar();
  }

  function renderRekapView() {
    db = loadDB();
    const isAdmin = state.currentUser && state.currentUser.role === "admin";

    // Populate user selector dropdown if Admin
    if (isAdmin) {
      el.rekapSelectUser.innerHTML = "";
      db.users.forEach((u) => {
        const opt = document.createElement("option");
        opt.value = u.username;
        opt.textContent = `${u.name} (${u.username} - ${u.role.toUpperCase()})`;
        if (u.username === state.rekapTargetUsername) opt.selected = true;
        el.rekapSelectUser.appendChild(opt);
      });
    } else if (state.currentUser) {
      state.rekapTargetUsername = state.currentUser.username;
    }

    const targetUser =
      db.users.find((u) => u.username === state.rekapTargetUsername) ||
      state.currentUser;
    const prog = ensureUserProgressRecord(db, targetUser.username);
    const submittedMap = prog.submittedByQ || {};
    const visitedList = prog.visitedTopics || [];

    el.rekapOwnerBadge.textContent = `REKAPAN REALTIME • AKUN: ${targetUser.name.toUpperCase()} (${
      targetUser.username
    })`;
    el.rekapMainTitle.textContent = `Rekapan Jawaban Benar / Salah — ${targetUser.name}`;

    const totalQuestions = QUIZ_QUESTIONS.length;
    const totalAnswered = Object.keys(submittedMap).length;
    const totalCorrect = Object.values(submittedMap).filter(
      (r) => r.isCorrect
    ).length;
    const totalWrong = totalAnswered - totalCorrect;
    const totalUnanswered = totalQuestions - totalAnswered;
    const finalScore = Math.round((totalCorrect / totalQuestions) * 100);
    const accuracyAnswered =
      totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    // 1. Render 5 KPI Cards
    el.rekapKpiGrid.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-label">TOTAL SOAL DIJAWAB</span>
        <strong class="kpi-value accent">${totalAnswered} / ${totalQuestions}</strong>
        <span class="kpi-sub">Sub-Bab dibaca: ${visitedList.length}/${FLAT_TOPICS.length}</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">JAWABAN BENAR (✓)</span>
        <strong class="kpi-value correct">${totalCorrect} Soal</strong>
        <span class="kpi-sub">Akurasi jawab: ${accuracyAnswered}%</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">JAWABAN SALAH (✕)</span>
        <strong class="kpi-value wrong">${totalWrong} Soal</strong>
        <span class="kpi-sub">Perlu evaluasi pembahasan</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">BELUM DIJAWAB</span>
        <strong class="kpi-value">${totalUnanswered} Soal</strong>
        <span class="kpi-sub">Dari 28 Sub-Bab materi</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">NILAI SKOR TOTAL</span>
        <strong class="kpi-value ${
          finalScore >= 75 ? "correct" : finalScore >= 50 ? "accent" : "wrong"
        }">${finalScore} / 100</strong>
        <span class="kpi-sub">Akurasi Dijawab: ${accuracyAnswered}%</span>
      </div>
    `;

    // 2. Render 4 Chapter Breakdown Cards
    el.rekapChapterGrid.innerHTML = "";
    CURRICULUM_DATA.forEach((ch) => {
      const qs = getQuestionsByChapter(ch.id);
      const ans = qs.filter((q) => submittedMap[q.id]).length;
      const cor = qs.filter(
        (q) => submittedMap[q.id] && submittedMap[q.id].isCorrect
      ).length;
      const wrg = ans - cor;
      const unans = qs.length - ans;
      const chScore = Math.round((cor / qs.length) * 100);

      const card = document.createElement("div");
      card.className = "rekap-ch-card";
      card.innerHTML = `
        <div class="rekap-ch-head">
          <span class="rekap-ch-title">Bab ${ch.roman}: ${ch.title} (${ch.subtopics.length} Sub-Bab)</span>
          <strong style="color:var(--accent-primary)">${ans}/${qs.length} (${chScore}%)</strong>
        </div>
        <div class="progress-bar-track" style="height:6px;">
          <div class="progress-bar-fill" style="width:${(ans / qs.length) * 100}%"></div>
        </div>
        <div class="rekap-ch-badges">
          <span class="pill-b">✓ Benar: ${cor}</span>
          <span class="pill-s">✕ Salah: ${wrg}</span>
          <span class="pill-u">Belum: ${unans}</span>
        </div>
      `;
      el.rekapChapterGrid.appendChild(card);
    });

    // 3. Render Detailed 280-Question Table with Chapter, Sub-Bab & Status Filters
    el.rekapTableBody.innerHTML = "";
    const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
      if (
        state.rekapFilterChapter !== "all" &&
        q.chapterId !== state.rekapFilterChapter
      ) {
        return false;
      }
      if (
        state.rekapFilterSubtopic !== "all" &&
        q.subtopicId !== state.rekapFilterSubtopic
      ) {
        return false;
      }
      const sub = submittedMap[q.id];
      if (state.rekapFilterStatus === "correct") return sub && sub.isCorrect;
      if (state.rekapFilterStatus === "wrong") return sub && !sub.isCorrect;
      if (state.rekapFilterStatus === "unanswered") return !sub;
      return true;
    });

    if (filteredQuestions.length === 0) {
      el.rekapTableBody.innerHTML = `
        <tr>
          <td colspan="8" style="padding:18px;text-align:center;color:var(--text-muted);">
            Tidak ada data soal yang sesuai dengan filter Bab / Sub-Bab / Status di atas.
          </td>
        </tr>
      `;
      return;
    }

    filteredQuestions.forEach((q, idx) => {
      const sub = submittedMap[q.id];
      const correctOpt = q.options.find((o) => o.key === q.correctKey);
      const chosenOpt = sub
        ? q.options.find((o) => o.key === sub.chosen)
        : null;

      let statusHtml = `<span class="pill-u">• Belum Dijawab</span>`;
      if (sub) {
        statusHtml = sub.isCorrect
          ? `<span class="pill-b">✓ BENAR</span>`
          : `<span class="pill-s">✕ SALAH</span>`;
      }

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="text-align:left;font-family:Inter,sans-serif;font-weight:600;">${escapeHtml(
          q.category
        )}</td>
        <td style="text-align:left;font-family:Inter,sans-serif;">${escapeHtml(
          q.shortTitle
        )}</td>
        <td class="${
          sub ? (sub.isCorrect ? "val-true" : "val-false") : ""
        }">${
        chosenOpt
          ? `${sub.chosen.toUpperCase()}. ${escapeHtml(chosenOpt.text)}`
          : "-"
      }</td>
        <td class="val-true">${q.correctKey.toUpperCase()}. ${escapeHtml(
        correctOpt ? correctOpt.text : ""
      )}</td>
        <td>${statusHtml}</td>
        <td>${sub && sub.timestamp ? formatTimeAgo(sub.timestamp) : "-"}</td>
        <td>
          <button class="table-action-btn" data-jump-ch="${
            q.chapterId
          }" data-jump-sub="${q.subtopicId}" data-jump-num="${q.number}">
            Buka Soal →
          </button>
        </td>
      `;

      const jumpBtn = tr.querySelector("button[data-jump-ch]");
      jumpBtn.addEventListener("click", () => {
        switchToQuiz(q.chapterId, q.subtopicId, q.number);
      });

      el.rekapTableBody.appendChild(tr);
    });
  }

  /* ========================================================================
     VIEW D: PANEL ADMIN (KELOLA AKSES USER MURID & MONITORING REALTIME)
     ======================================================================== */
  function switchToAdminView() {
    if (!state.currentUser || state.currentUser.role !== "admin") {
      switchToRekapView();
      return;
    }
    setActiveViewTab("admin");
    el.crumbChapter.textContent = "Administrator";
    el.crumbTopic.textContent = "Manajemen Akses Murid & Monitoring Realtime";

    renderAdminView();
    renderSidebar();
  }

  function renderAdminView() {
    db = loadDB();
    const students = db.users.filter((u) => u.role === "murid");
    el.adminStudentCountBadge.textContent = `${students.length} Akun Murid`;
    el.adminLastSyncText.textContent = `Diperbarui: ${new Date().toLocaleTimeString(
      "id-ID"
    )}`;

    el.adminStudentsTableBody.innerHTML = "";
    students.forEach((stu) => {
      const prog = ensureUserProgressRecord(db, stu.username);
      const subMap = prog.submittedByQ || {};
      const visitedCount = (prog.visitedTopics || []).length;
      const ansCount = Object.keys(subMap).length;
      const corCount = Object.values(subMap).filter((r) => r.isCorrect).length;
      const wrgCount = ansCount - corCount;
      const score = Math.round((corCount / QUIZ_QUESTIONS.length) * 100);

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="text-align:left;font-family:Inter,sans-serif;">
          <strong style="color:var(--text-primary)">${escapeHtml(
            stu.name
          )}</strong>
          <br><small style="color:var(--accent-primary)">@${escapeHtml(
            stu.username
          )}</small>
        </td>
        <td style="font-family:Inter,sans-serif;">${escapeHtml(
          stu.kelas || "-"
        )}</td>
        <td><code>${escapeHtml(stu.password)}</code></td>
        <td>
          <span class="${
            stu.active ? "status-badge-active" : "status-badge-suspended"
          }">
            ${stu.active ? "● Aktif" : "✕ Nonaktif"}
          </span>
        </td>
        <td>${visitedCount} / ${FLAT_TOPICS.length}</td>
        <td><strong>${ansCount} / ${QUIZ_QUESTIONS.length}</strong></td>
        <td>
          <span class="pill-b">✓ ${corCount}B</span>
          <span class="pill-s">✕ ${wrgCount}S</span>
        </td>
        <td><strong class="${
          score >= 75 ? "val-true" : score < 50 && ansCount > 0 ? "val-false" : ""
        }">${score}</strong></td>
        <td>${formatTimeAgo(prog.updatedAt || stu.lastActiveAt)}</td>
        <td>
          <div style="display:flex;gap:5px;justify-content:center;flex-wrap:wrap;">
            <button class="table-action-btn" data-act="rekap" data-user="${escapeHtml(
              stu.username
            )}" title="Lihat Rekapan 280 Soal Murid Ini">
              📊 Rekap
            </button>
            <button class="table-action-btn" data-act="toggle" data-user="${escapeHtml(
              stu.username
            )}" title="Aktifkan / Nonaktifkan Akses Login">
              ${stu.active ? "🔒 Bekukan" : "🔓 Aktifkan"}
            </button>
            <button class="table-action-btn" data-act="reset" data-user="${escapeHtml(
              stu.username
            )}" title="Reset Progres Kuis Murid">
              ↺ Reset
            </button>
            <button class="table-action-btn danger" data-act="delete" data-user="${escapeHtml(
              stu.username
            )}" title="Hapus Akun Murid">
              🗑️
            </button>
          </div>
        </td>
      `;

      tr.querySelectorAll("button[data-act]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const act = btn.getAttribute("data-act");
          const uname = btn.getAttribute("data-user");
          handleAdminStudentAction(act, uname);
        });
      });

      el.adminStudentsTableBody.appendChild(tr);
    });
  }

  function handleAdminStudentAction(action, username) {
    db = loadDB();
    const userIdx = db.users.findIndex((u) => u.username === username);
    if (userIdx === -1) return;

    if (action === "rekap") {
      switchToRekapView(username);
      return;
    }

    if (action === "toggle") {
      db.users[userIdx].active = !db.users[userIdx].active;
      saveDB(db, "admin_user_update");
      renderAdminView();
      return;
    }

    if (action === "reset") {
      db.progressByUser[username] = {
        visitedTopics: [FLAT_TOPICS[0].id],
        selectedOptionByQ: {},
        submittedByQ: {},
        updatedAt: new Date().toISOString()
      };
      saveDB(db, "admin_reset_progress");
      renderAdminView();
      return;
    }

    if (action === "delete") {
      db.users.splice(userIdx, 1);
      delete db.progressByUser[username];
      saveDB(db, "admin_delete_user");
      renderAdminView();
    }
  }

  function handleAddStudentSubmit(e) {
    e.preventDefault();
    db = loadDB();

    const name = el.stuName.value.trim();
    const username = el.stuUsername.value.trim().toLowerCase();
    const password = el.stuPassword.value.trim();
    const kelas = el.stuKelas.value.trim();
    const active = el.stuActive.value === "true";

    if (!name || !username || !password) return;

    const exists = db.users.some((u) => u.username.toLowerCase() === username);
    if (exists) {
      el.adminFormMsg.textContent = `Username '${username}' sudah digunakan! Gunakan username lain.`;
      el.adminFormMsg.className = "admin-form-msg";
      el.adminFormMsg.classList.remove("hidden");
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
    saveDB(db, "admin_add_user");

    el.stuName.value = "";
    el.stuUsername.value = "";
    el.stuPassword.value = "";

    el.adminFormMsg.textContent = `✓ Akun murid '${name}' (@${username}) berhasil ditambahkan dan siap digunakan login!`;
    el.adminFormMsg.className = "admin-form-msg success";
    el.adminFormMsg.classList.remove("hidden");
    setTimeout(() => {
      el.adminFormMsg.classList.add("hidden");
    }, 3500);

    renderAdminView();
  }

  /* ========================================================================
     MODAL PEMBAHASAN CONTROLS
     ======================================================================== */
  function openFeedbackModal(question, submission) {
    const chosenObj = question.options.find((o) => o.key === submission.chosen);
    const correctObj = question.options.find(
      (o) => o.key === question.correctKey
    );

    el.modalHeaderBanner.className = `modal-header ${
      submission.isCorrect ? "is-correct" : "is-wrong"
    }`;
    el.modalVerdictIcon.textContent = submission.isCorrect ? "✓" : "✕";
    el.modalVerdictTitle.textContent = submission.isCorrect
      ? "Luar Biasa! Jawaban Anda Benar"
      : "Jawaban Masih Kurang Tepat";
    el.modalVerdictSub.textContent = submission.isCorrect
      ? `${question.category} (${question.shortTitle}) — Opsi ${submission.chosen.toUpperCase()} (${
          chosenObj ? chosenObj.text : ""
        }) tepat.`
      : `Anda memilih Opsi ${submission.chosen.toUpperCase()}, sedangkan kunci yang benar adalah Opsi ${question.correctKey.toUpperCase()} (${
          correctObj ? correctObj.text : ""
        }).`;

    el.modalExplanationBody.innerHTML = question.explanationHtml;
    el.feedbackModalBackdrop.classList.remove("hidden");
  }

  function closeFeedbackModal() {
    el.feedbackModalBackdrop.classList.add("hidden");
  }

  /* ========================================================================
     REALTIME LISTENER (CROSS-TAB & STORAGE SYNC)
     ======================================================================== */
  function handleIncomingRealtimeSync() {
    db = loadDB();
    if (!state.currentUser) {
      return;
    }

    // Check if current student account was deactivated or deleted by Admin
    const freshUser = db.users.find(
      (u) => u.username === state.currentUser.username
    );
    if (!freshUser || (!freshUser.active && freshUser.role !== "admin")) {
      logoutCurrentUser();
      return;
    }

    loadActiveUserProgressIntoMemory();
    renderSidebar();

    if (state.mode === "quiz") {
      renderQuizView();
    } else if (state.mode === "rekap") {
      renderRekapView();
    } else if (state.mode === "admin") {
      renderAdminView();
    }
  }

  /* ========================================================================
     EVENT LISTENERS & INITIALIZATION
     ======================================================================== */
  function initEventListeners() {
    // Login form
    el.loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginWithCredentials(el.loginUsername.value, el.loginPassword.value);
    });

    el.logoutBtn.addEventListener("click", logoutCurrentUser);

    // Search input
    el.sidebarSearchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderSidebar();
    });

    // Mode tabs & Header Navigation
    el.tabMenuMateri.addEventListener("click", () => {
      selectTopic(state.activeTopicId);
    });
    el.tabMenuKuis.addEventListener("click", () => {
      switchToQuiz(
        state.activeQuizChapterId,
        state.activeQuizSubtopicId,
        state.activeQuestionNumber
      );
    });
    el.tabMenuRekap.addEventListener("click", () => {
      switchToRekapView(
        state.currentUser ? state.currentUser.username : null
      );
    });
    el.tabMenuAdmin.addEventListener("click", () => {
      switchToAdminView();
    });

    el.headerRekapBtn.addEventListener("click", () => {
      switchToRekapView(
        state.currentUser ? state.currentUser.username : null
      );
    });
    el.headerAdminBtn.addEventListener("click", () => {
      switchToAdminView();
    });

    // Bridge buttons from Materi View -> 10 Questions of Current Sub-Bab
    if (el.bridgeToQuizBtn) {
      el.bridgeToQuizBtn.addEventListener("click", () => {
        switchToQuiz(state.activeQuizChapterId, state.activeTopicId, 1);
      });
    }
    if (el.footerQuizBridgeBtn) {
      el.footerQuizBridgeBtn.addEventListener("click", () => {
        switchToQuiz(state.activeQuizChapterId, state.activeTopicId, 1);
      });
    }
    if (el.backToSubtopicMateriBtn) {
      el.backToSubtopicMateriBtn.addEventListener("click", () => {
        selectTopic(state.activeQuizSubtopicId);
      });
    }

    // Rekap filters & user selector
    el.rekapSelectUser.addEventListener("change", (e) => {
      state.rekapTargetUsername = e.target.value;
      renderRekapView();
    });
    el.rekapFilterChapter.addEventListener("change", (e) => {
      state.rekapFilterChapter = e.target.value;
      state.rekapFilterSubtopic = "all";
      populateRekapSubtopicDropdown();
      renderRekapView();
    });
    if (el.rekapFilterSubtopic) {
      el.rekapFilterSubtopic.addEventListener("change", (e) => {
        state.rekapFilterSubtopic = e.target.value;
        renderRekapView();
      });
    }
    el.rekapFilterStatus.addEventListener("change", (e) => {
      state.rekapFilterStatus = e.target.value;
      renderRekapView();
    });

    // Admin Add Student Form
    el.addStudentForm.addEventListener("submit", handleAddStudentSubmit);

    // Ratio 16:9 Frame Toggle
    el.ratioToggleBtn.addEventListener("click", () => {
      state.framed169 = !state.framed169;
      el.appViewport.classList.toggle("framed-16-9", state.framed169);
      el.ratioToggleBtn.classList.toggle("active", state.framed169);
    });

    // Dark / Light Theme Toggle
    el.themeToggleBtn.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
    });

    // Simulator buttons
    el.simNextStepBtn.addEventListener("click", () => {
      if (!state.activeSimulator) return;
      if (state.simStepIndex >= state.activeSimulator.steps.length - 1) {
        state.simStepIndex = 0;
      } else {
        state.simStepIndex++;
      }
      if (window.SoundStudio) {
        window.SoundStudio.playSimStep(state.simStepIndex + 1);
      }
      renderSimulator();
    });

    el.simResetBtn.addEventListener("click", () => {
      if (!state.activeSimulator) return;
      state.simStepIndex = 0;
      if (window.SoundStudio) window.SoundStudio.playSimReset();
      renderSimulator();
    });

    // Prev / Next Topic buttons
    el.prevTopicBtn.addEventListener("click", () => {
      const idx = FLAT_TOPICS.findIndex((t) => t.id === state.activeTopicId);
      if (idx > 0) selectTopic(FLAT_TOPICS[idx - 1].id);
    });

    el.nextTopicBtn.addEventListener("click", () => {
      const idx = FLAT_TOPICS.findIndex((t) => t.id === state.activeTopicId);
      if (idx < FLAT_TOPICS.length - 1) selectTopic(FLAT_TOPICS[idx + 1].id);
    });

    // Quiz Action Buttons
    el.submitAnswerBtn.addEventListener("click", handleSubmitAnswer);

    el.retryQuestionBtn.addEventListener("click", () => {
      const q = getActiveQuestionObj();
      delete state.submittedByQ[q.id];
      delete state.selectedOptionByQ[q.id];
      persistActiveUserProgress("quiz_retry");
      renderQuizView();
      renderSidebar();
    });

    el.resetAllQuizBtn.addEventListener("click", () => {
      const subQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
      subQuestions.forEach((q) => {
        delete state.submittedByQ[q.id];
        delete state.selectedOptionByQ[q.id];
      });
      persistActiveUserProgress("quiz_reset_subtopic");
      renderQuizView();
      renderSidebar();
    });

    el.prevQuestionBtn.addEventListener("click", () => {
      if (state.activeQuestionNumber > 1) {
        switchToQuiz(
          state.activeQuizChapterId,
          state.activeQuizSubtopicId,
          state.activeQuestionNumber - 1
        );
      }
    });

    el.nextQuestionBtn.addEventListener("click", () => {
      const subQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
      if (state.activeQuestionNumber < subQuestions.length) {
        switchToQuiz(
          state.activeQuizChapterId,
          state.activeQuizSubtopicId,
          state.activeQuestionNumber + 1
        );
      }
    });

    // Modal controls
    el.openPopupModalBtn.addEventListener("click", () => {
      const q = getActiveQuestionObj();
      const sub = state.submittedByQ[q.id];
      if (sub) openFeedbackModal(q, sub);
    });

    el.closeModalBtn.addEventListener("click", closeFeedbackModal);
    el.modalStayBtn.addEventListener("click", closeFeedbackModal);
    el.feedbackModalBackdrop.addEventListener("click", (e) => {
      if (e.target === el.feedbackModalBackdrop) closeFeedbackModal();
    });

    el.modalNextQuestionBtn.addEventListener("click", () => {
      closeFeedbackModal();
      const subQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
      if (state.activeQuestionNumber < subQuestions.length) {
        switchToQuiz(
          state.activeQuizChapterId,
          state.activeQuizSubtopicId,
          state.activeQuestionNumber + 1
        );
      } else {
        // Advance to Soal 1 of the next Sub-Bab
        const subIdx = FLAT_TOPICS.findIndex(
          (t) => t.id === state.activeQuizSubtopicId
        );
        const nextSub = FLAT_TOPICS[(subIdx + 1) % FLAT_TOPICS.length];
        switchToQuiz(nextSub.chapterId, nextSub.id, 1);
      }
    });

    // Cross-tab Realtime Listeners
    window.addEventListener("storage", (e) => {
      if (e.key === DB_STORAGE_KEY) {
        handleIncomingRealtimeSync();
      }
    });

    if (realtimeChannel) {
      realtimeChannel.addEventListener("message", () => {
        handleIncomingRealtimeSync();
      });
    }

    // Keyboard shortcuts
    window.addEventListener("keydown", (e) => {
      if (!state.currentUser) return;
      const activeTag = document.activeElement
        ? document.activeElement.tagName
        : "";
      if (activeTag === "INPUT" || activeTag === "SELECT") return;

      if (e.key === "Escape") {
        closeFeedbackModal();
        return;
      }

      if (e.key.toLowerCase() === "k") {
        switchToQuiz(
          state.activeQuizChapterId,
          state.activeQuizSubtopicId,
          state.activeQuestionNumber
        );
        return;
      }

      if (e.key.toLowerCase() === "r") {
        switchToRekapView(state.currentUser.username);
        return;
      }

      if (state.mode === "materi") {
        const idx = FLAT_TOPICS.findIndex((t) => t.id === state.activeTopicId);
        if (e.key === "ArrowRight" && idx < FLAT_TOPICS.length - 1) {
          selectTopic(FLAT_TOPICS[idx + 1].id);
        } else if (e.key === "ArrowLeft" && idx > 0) {
          selectTopic(FLAT_TOPICS[idx - 1].id);
        }
      } else if (state.mode === "quiz") {
        const subQuestions = getQuestionsBySubtopic(state.activeQuizSubtopicId);
        if (
          e.key === "ArrowRight" &&
          state.activeQuestionNumber < subQuestions.length
        ) {
          switchToQuiz(
            state.activeQuizChapterId,
            state.activeQuizSubtopicId,
            state.activeQuestionNumber + 1
          );
        } else if (e.key === "ArrowLeft" && state.activeQuestionNumber > 1) {
          switchToQuiz(
            state.activeQuizChapterId,
            state.activeQuizSubtopicId,
            state.activeQuestionNumber - 1
          );
        }
      }
    });
  }

  // Boot Application
  initEventListeners();

  // Check if there is an active session in this tab
  const savedSessionUser = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (savedSessionUser) {
    const existing = db.users.find((u) => u.username === savedSessionUser);
    if (existing && (existing.active || existing.role === "admin")) {
      loginWithCredentials(existing.username, existing.password);
    }
  }
})();
