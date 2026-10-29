/* ==========================================================================
   EduLogic Java Studio — Interactive Web Audio Synthesizer & Soundscape Engine
   File: audio.js
   Features:
   - 4 Varied Procedural Background Music (BGM) Themes + Auto-Adaptive Mode:
     1. "lofi"       : Warm Lo-Fi Electric Piano Chord Progression + Soft Pulse
     2. "cyber"      : Futuristic Algorithm Arpeggio & Pad
     3. "zen"        : Calm Pentatonic Bell Chimes & Warm Harmonic Drone
     4. "quiz_pulse" : Energetic Marimba/Pluck Study Rhythm for Quiz Mode
   - Complete Tactile UI & Learning Sound Effects (SFX):
     - Button Click, Soft Hover Tick, Navigation Whoosh/Chime
     - Quiz Option Selection (Pitch-scaled A..E), Answer Correct Fanfare, Answer Wrong
     - Code Simulator Step & Reset, Copy Code, Modal Open/Close, Login/Logout
   ========================================================================== */

(function () {
  "use strict";

  const AUDIO_SETTINGS_KEY = "edulogic_java_audio_settings_v1";

  const defaultSettings = {
    bgmEnabled: true,
    bgmTheme: "auto", // "auto" | "lofi" | "cyber" | "zen" | "quiz_pulse"
    bgmVolume: 0.35,
    sfxEnabled: true,
    sfxVolume: 0.65,
    hoverSfxEnabled: true
  };

  function loadSettings() {
    try {
      const raw = localStorage.getItem(AUDIO_SETTINGS_KEY);
      if (!raw) return { ...defaultSettings };
      return { ...defaultSettings, ...JSON.parse(raw) };
    } catch (e) {
      return { ...defaultSettings };
    }
  }

  function saveSettings(settings) {
    try {
      localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      // ignore storage errors
    }
  }

  const settings = loadSettings();

  let ctx = null;
  let bgmMasterGain = null;
  let sfxMasterGain = null;
  let bgmSchedulerTimer = null;
  let isBgmPlaying = false;
  let currentAppMode = "materi"; // "materi" | "quiz" | "rekap" | "admin"
  let stepCounter = 0;
  let lastHoverTime = 0;

  // Ensure AudioContext is initialized & resumed upon first user gesture
  function ensureAudioContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();

      bgmMasterGain = ctx.createGain();
      bgmMasterGain.gain.value = settings.bgmEnabled ? settings.bgmVolume : 0;
      bgmMasterGain.connect(ctx.destination);

      sfxMasterGain = ctx.createGain();
      sfxMasterGain.gain.value = settings.sfxEnabled ? settings.sfxVolume : 0;
      sfxMasterGain.connect(ctx.destination);
    }

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function updateMasterGains() {
    if (!ctx) return;
    const now = ctx.currentTime;
    const targetBgm = settings.bgmEnabled ? settings.bgmVolume : 0;
    const targetSfx = settings.sfxEnabled ? settings.sfxVolume : 0;

    bgmMasterGain.gain.setTargetAtTime(targetBgm, now, 0.08);
    sfxMasterGain.gain.setTargetAtTime(targetSfx, now, 0.04);
  }

  /* ========================================================================
     SYNTHESIS PRIMITIVES (NOTES, CHORDS, PERCUSSIVE TICKS)
     ======================================================================== */
  function midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  function playTone({
    freq = 440,
    type = "sine",
    duration = 0.15,
    attack = 0.01,
    gain = 0.2,
    detune = 0,
    delay = 0,
    targetBus = "sfx",
    freqEnd = null
  }) {
    const audioCtx = ensureAudioContext();
    if (!audioCtx) return;

    const bus = targetBus === "bgm" ? bgmMasterGain : sfxMasterGain;
    if (!bus) return;

    const startTime = audioCtx.currentTime + delay;
    const stopTime = startTime + duration;

    const osc = audioCtx.createOscillator();
    const env = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    if (freqEnd !== null) {
      osc.frequency.exponentialRampToValueAtTime(
        Math.max(20, freqEnd),
        stopTime
      );
    }
    if (detune) {
      osc.detune.setValueAtTime(detune, startTime);
    }

    env.gain.setValueAtTime(0.0001, startTime);
    env.gain.linearRampToValueAtTime(gain, startTime + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, stopTime);

    osc.connect(env);
    env.connect(bus);

    osc.start(startTime);
    osc.stop(stopTime + 0.02);
  }

  function playSoftNoiseTick({
    duration = 0.04,
    gain = 0.05,
    filterFreq = 1800,
    delay = 0,
    targetBus = "bgm"
  }) {
    const audioCtx = ensureAudioContext();
    if (!audioCtx) return;
    const bus = targetBus === "bgm" ? bgmMasterGain : sfxMasterGain;

    const bufferSize = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
    }

    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = audioCtx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = filterFreq;
    filter.Q.value = 1.8;

    const env = audioCtx.createGain();
    const startTime = audioCtx.currentTime + delay;
    env.gain.setValueAtTime(gain, startTime);
    env.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    noise.connect(filter);
    filter.connect(env);
    env.connect(bus);

    noise.start(startTime);
  }

  /* ========================================================================
     1. SOUND EFFECTS (SFX) LIBRARY
     ======================================================================== */
  const SFX = {
    // Subtle hover micro-tick
    hover() {
      if (!settings.sfxEnabled || !settings.hoverSfxEnabled) return;
      const nowMs = performance.now();
      if (nowMs - lastHoverTime < 45) return;
      lastHoverTime = nowMs;

      playTone({
        freq: 980,
        freqEnd: 1180,
        type: "sine",
        duration: 0.028,
        attack: 0.003,
        gain: 0.045,
        targetBus: "sfx"
      });
    },

    // Standard tactile button press
    click() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: 520,
        freqEnd: 760,
        type: "triangle",
        duration: 0.065,
        attack: 0.004,
        gain: 0.16,
        targetBus: "sfx"
      });
    },

    // Navigation between Sub-Bab / Tabs
    nav() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: 440,
        freqEnd: 587.33,
        type: "sine",
        duration: 0.09,
        attack: 0.008,
        gain: 0.14,
        targetBus: "sfx"
      });
      playTone({
        freq: 659.25,
        type: "triangle",
        duration: 0.12,
        attack: 0.01,
        gain: 0.11,
        delay: 0.045,
        targetBus: "sfx"
      });
    },

    // Selecting quiz option A, B, C, D, E (ascending pitch per option!)
    selectOption(optKey = "a") {
      if (!settings.sfxEnabled) return;
      const pitchMap = { a: 60, b: 62, c: 64, d: 67, e: 69 };
      const midi = pitchMap[String(optKey).toLowerCase()] || 60;
      playTone({
        freq: midiToFreq(midi),
        freqEnd: midiToFreq(midi + 2),
        type: "triangle",
        duration: 0.09,
        attack: 0.005,
        gain: 0.18,
        targetBus: "sfx"
      });
    },

    // Quiz Answer Correct Fanfare (C5 - E5 - G5 - C6)
    correct() {
      if (!settings.sfxEnabled) return;
      const notes = [72, 76, 79, 84];
      notes.forEach((midi, idx) => {
        playTone({
          freq: midiToFreq(midi),
          type: idx === notes.length - 1 ? "triangle" : "sine",
          duration: idx === notes.length - 1 ? 0.42 : 0.16,
          attack: 0.01,
          gain: 0.22,
          delay: idx * 0.075,
          targetBus: "sfx"
        });
      });
    },

    // Quiz Answer Wrong (Soft descending minor interval)
    wrong() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: midiToFreq(58), // Bb3
        freqEnd: midiToFreq(55),
        type: "sawtooth",
        duration: 0.16,
        attack: 0.01,
        gain: 0.11,
        targetBus: "sfx"
      });
      playTone({
        freq: midiToFreq(52), // E3
        freqEnd: midiToFreq(49),
        type: "triangle",
        duration: 0.28,
        attack: 0.01,
        gain: 0.15,
        delay: 0.13,
        targetBus: "sfx"
      });
    },

    // Code Simulator Step Advance
    simStep(stepNum = 1) {
      if (!settings.sfxEnabled) return;
      const baseMidi = 64 + (stepNum % 8);
      playTone({
        freq: midiToFreq(baseMidi),
        type: "sine",
        duration: 0.08,
        attack: 0.005,
        gain: 0.15,
        targetBus: "sfx"
      });
      playSoftNoiseTick({
        duration: 0.025,
        gain: 0.04,
        filterFreq: 2400,
        targetBus: "sfx"
      });
    },

    // Code Simulator Reset
    simReset() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: 660,
        freqEnd: 330,
        type: "sine",
        duration: 0.14,
        attack: 0.008,
        gain: 0.14,
        targetBus: "sfx"
      });
    },

    // Copy Code Snippet
    copy() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: 880,
        type: "sine",
        duration: 0.06,
        attack: 0.004,
        gain: 0.14,
        targetBus: "sfx"
      });
      playTone({
        freq: 1174.66,
        type: "sine",
        duration: 0.09,
        attack: 0.004,
        gain: 0.14,
        delay: 0.06,
        targetBus: "sfx"
      });
    },

    // Login Success
    loginSuccess() {
      if (!settings.sfxEnabled) return;
      [60, 64, 67, 71, 72].forEach((m, i) => {
        playTone({
          freq: midiToFreq(m),
          type: "triangle",
          duration: 0.22,
          attack: 0.01,
          gain: 0.16,
          delay: i * 0.06,
          targetBus: "sfx"
        });
      });
    },

    // Login Error
    loginError() {
      if (!settings.sfxEnabled) return;
      this.wrong();
    },

    // Logout
    logout() {
      if (!settings.sfxEnabled) return;
      [72, 67, 64, 60].forEach((m, i) => {
        playTone({
          freq: midiToFreq(m),
          type: "sine",
          duration: 0.14,
          attack: 0.008,
          gain: 0.13,
          delay: i * 0.055,
          targetBus: "sfx"
        });
      });
    },

    // Modal Open / Close
    modalClose() {
      if (!settings.sfxEnabled) return;
      playTone({
        freq: 540,
        freqEnd: 380,
        type: "sine",
        duration: 0.08,
        attack: 0.005,
        gain: 0.12,
        targetBus: "sfx"
      });
    }
  };

  /* ========================================================================
     2. VARIED BACKGROUND SOUNDSCAPE GENERATOR (4 THEMES + AUTO)
     ======================================================================== */
  function resolveActiveTheme() {
    if (settings.bgmTheme !== "auto") {
      return settings.bgmTheme;
    }
    if (currentAppMode === "quiz") return "quiz_pulse";
    if (currentAppMode === "rekap") return "zen";
    if (currentAppMode === "admin") return "cyber";
    return "lofi";
  }

  // Theme 1: Lo-Fi Focus Studio (Warm Electric Piano Chords + Gentle Hat/Pulse)
  const LOFI_CHORDS = [
    [60, 64, 67, 71], // Cmaj7
    [57, 60, 64, 69], // Am7
    [53, 57, 60, 64], // Fmaj7
    [55, 59, 62, 65] // G7
  ];

  // Theme 2: Cyber Synth Algorithm (Futuristic Arpeggio in D Dorian)
  const CYBER_ARP = [62, 65, 69, 72, 74, 72, 69, 65, 60, 64, 67, 72, 71, 67, 64, 60];

  // Theme 3: Zen Garden Ambient (Pentatonic Meditative Chimes + Warm Pad)
  const ZEN_PENTATONIC = [60, 62, 64, 67, 69, 72, 74, 76, 79];

  // Theme 4: Upbeat Quiz Pulse (Light Marimba/Pluck Study Groove)
  const QUIZ_GROOVE = [67, 72, 71, 74, 72, 67, 69, 71];

  function triggerBgmStep() {
    if (!settings.bgmEnabled || !ctx || ctx.state !== "running") return;

    const theme = resolveActiveTheme();
    const step = stepCounter % 16;

    if (theme === "lofi") {
      // Every 4 steps, play a warm Rhodes-like chord
      if (step % 4 === 0) {
        const chordIdx = Math.floor(step / 4) % LOFI_CHORDS.length;
        const chord = LOFI_CHORDS[chordIdx];
        chord.forEach((midi, idx) => {
          playTone({
            freq: midiToFreq(midi),
            type: "sine",
            duration: 1.55,
            attack: 0.08,
            gain: 0.055,
            detune: idx * 3 - 4,
            delay: idx * 0.025,
            targetBus: "bgm"
          });
        });
        // Deep bass note
        playTone({
          freq: midiToFreq(chord[0] - 12),
          type: "triangle",
          duration: 1.4,
          attack: 0.04,
          gain: 0.065,
          targetBus: "bgm"
        });
      }
      // Gentle lo-fi shaker tick on off-beats
      if (step % 2 === 1) {
        playSoftNoiseTick({
          duration: 0.03,
          gain: 0.02,
          filterFreq: 3200,
          targetBus: "bgm"
        });
      }
    } else if (theme === "cyber") {
      // Continuous synth arpeggio + sub pad on bar start
      const note = CYBER_ARP[step % CYBER_ARP.length];
      playTone({
        freq: midiToFreq(note),
        type: "triangle",
        duration: 0.34,
        attack: 0.015,
        gain: 0.06,
        detune: (step % 2 === 0 ? 1 : -1) * 5,
        targetBus: "bgm"
      });
      if (step % 8 === 0) {
        playTone({
          freq: midiToFreq(50), // D3 Drone
          type: "sine",
          duration: 2.8,
          attack: 0.25,
          gain: 0.075,
          targetBus: "bgm"
        });
      }
    } else if (theme === "zen") {
      // Harmonic drone every 8 steps + gentle random pentatonic chime
      if (step % 8 === 0) {
        playTone({
          freq: midiToFreq(48), // C3
          type: "sine",
          duration: 3.4,
          attack: 0.4,
          gain: 0.07,
          targetBus: "bgm"
        });
        playTone({
          freq: midiToFreq(55), // G3
          type: "sine",
          duration: 3.4,
          attack: 0.5,
          gain: 0.05,
          targetBus: "bgm"
        });
      }
      if (step % 3 === 0) {
        const pick =
          ZEN_PENTATONIC[(step * 3 + Math.floor(stepCounter / 8)) % ZEN_PENTATONIC.length];
        playTone({
          freq: midiToFreq(pick),
          type: "sine",
          duration: 1.4,
          attack: 0.02,
          gain: 0.065,
          targetBus: "bgm"
        });
      }
    } else if (theme === "quiz_pulse") {
      // Light rhythmic marimba pluck for active thinking
      const note = QUIZ_GROOVE[step % QUIZ_GROOVE.length];
      playTone({
        freq: midiToFreq(note),
        type: "sine",
        duration: 0.22,
        attack: 0.008,
        gain: 0.07,
        targetBus: "bgm"
      });
      if (step % 4 === 0) {
        playTone({
          freq: midiToFreq(55), // G3 pulse
          type: "triangle",
          duration: 0.45,
          attack: 0.01,
          gain: 0.06,
          targetBus: "bgm"
        });
      }
      if (step % 2 === 0) {
        playSoftNoiseTick({
          duration: 0.02,
          gain: 0.018,
          filterFreq: 4000,
          targetBus: "bgm"
        });
      }
    }

    stepCounter++;
  }

  function startBgmScheduler() {
    if (bgmSchedulerTimer) return;
    isBgmPlaying = true;
    bgmSchedulerTimer = setInterval(() => {
      if (settings.bgmEnabled) {
        triggerBgmStep();
      }
    }, 420); // ~142 BPM eighth-note grid
    syncAudioUI();
  }

  function stopBgmScheduler() {
    if (bgmSchedulerTimer) {
      clearInterval(bgmSchedulerTimer);
      bgmSchedulerTimer = null;
    }
    isBgmPlaying = false;
    syncAudioUI();
  }

  /* ========================================================================
     GLOBAL INTERACTION LISTENERS & UI CONTROLLER
     ======================================================================== */
  function syncAudioUI() {
    const toggleBtn = document.getElementById("headerAudioBtn");
    const loginMuteBtn = document.getElementById("loginAudioQuickBtn");
    const eqBars = document.getElementById("headerAudioEq");
    const bgmToggleInput = document.getElementById("audioBgmToggle");
    const bgmThemeSelect = document.getElementById("audioBgmThemeSelect");
    const bgmVolSlider = document.getElementById("audioBgmVolume");
    const bgmVolLabel = document.getElementById("audioBgmVolLabel");
    const sfxToggleInput = document.getElementById("audioSfxToggle");
    const hoverToggleInput = document.getElementById("audioHoverToggle");
    const sfxVolSlider = document.getElementById("audioSfxVolume");
    const sfxVolLabel = document.getElementById("audioSfxVolLabel");
    const activeThemeBadge = document.getElementById("audioActiveThemeBadge");

    const themeNames = {
      lofi: "🎹 Lo-Fi Focus Studio",
      cyber: "🌌 Cyber Synth Algorithm",
      zen: "🍃 Zen Ambient Math",
      quiz_pulse: "⚡ Upbeat Quiz Pulse"
    };
    const resolved = resolveActiveTheme();

    if (eqBars) {
      eqBars.classList.toggle("playing", settings.bgmEnabled && isBgmPlaying);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle("active", settings.bgmEnabled || settings.sfxEnabled);
    }
    if (loginMuteBtn) {
      const anyOn = settings.bgmEnabled || settings.sfxEnabled;
      loginMuteBtn.textContent = anyOn ? "🔊 Suara & Musik: Aktif" : "🔇 Suara: Nonaktif";
      loginMuteBtn.classList.toggle("muted", !anyOn);
    }
    if (bgmToggleInput) bgmToggleInput.checked = settings.bgmEnabled;
    if (bgmThemeSelect) bgmThemeSelect.value = settings.bgmTheme;
    if (bgmVolSlider) bgmVolSlider.value = Math.round(settings.bgmVolume * 100);
    if (bgmVolLabel) bgmVolLabel.textContent = `${Math.round(settings.bgmVolume * 100)}%`;
    if (sfxToggleInput) sfxToggleInput.checked = settings.sfxEnabled;
    if (hoverToggleInput) hoverToggleInput.checked = settings.hoverSfxEnabled;
    if (sfxVolSlider) sfxVolSlider.value = Math.round(settings.sfxVolume * 100);
    if (sfxVolLabel) sfxVolLabel.textContent = `${Math.round(settings.sfxVolume * 100)}%`;
    if (activeThemeBadge) {
      activeThemeBadge.textContent = settings.bgmEnabled
        ? `Sedang Diputar: ${themeNames[resolved] || resolved}`
        : "Musik Latar: Nonaktif";
    }
  }

  function initAudioBindings() {
    // Unlock Web Audio on first user interaction anywhere in the document
    const unlockOnce = () => {
      ensureAudioContext();
      if (settings.bgmEnabled && !isBgmPlaying) {
        startBgmScheduler();
      }
      syncAudioUI();
    };
    window.addEventListener("pointerdown", unlockOnce, { once: true });
    window.addEventListener("keydown", unlockOnce, { once: true });

    // Delegate hover & click SFX for buttons across the workspace
    document.addEventListener("mouseover", (e) => {
      const btn = e.target.closest(
        "button, .option-btn, .subtopic-btn, .quiz-ch-tab, .quiz-sub-chip, .q-pill-btn, .mode-tab"
      );
      if (btn && !btn.disabled) {
        SFX.hover();
      }
    });

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn || btn.disabled) return;

      // Skip generic click if specialized handler already plays its own sound
      if (
        btn.id === "submitAnswerBtn" ||
        btn.id === "simNextStepBtn" ||
        btn.id === "simResetBtn" ||
        btn.classList.contains("copy-code-btn") ||
        btn.classList.contains("option-btn")
      ) {
        return;
      }

      if (
        btn.classList.contains("subtopic-btn") ||
        btn.classList.contains("mode-tab") ||
        btn.classList.contains("quiz-ch-tab") ||
        btn.classList.contains("quiz-sub-chip") ||
        btn.classList.contains("nav-step-btn")
      ) {
        SFX.nav();
      } else {
        SFX.click();
      }
    });

    // Wire up Audio Popover Controls
    const headerAudioBtn = document.getElementById("headerAudioBtn");
    const audioPopover = document.getElementById("audioStudioPopover");
    const closeAudioPopoverBtn = document.getElementById("closeAudioPopoverBtn");
    const loginMuteBtn = document.getElementById("loginAudioQuickBtn");

    if (headerAudioBtn && audioPopover) {
      headerAudioBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        ensureAudioContext();
        if (settings.bgmEnabled && !isBgmPlaying) startBgmScheduler();
        audioPopover.classList.toggle("hidden");
        syncAudioUI();
      });

      document.addEventListener("click", (e) => {
        if (
          !audioPopover.classList.contains("hidden") &&
          !audioPopover.contains(e.target) &&
          e.target !== headerAudioBtn &&
          !headerAudioBtn.contains(e.target)
        ) {
          audioPopover.classList.add("hidden");
        }
      });
    }

    if (closeAudioPopoverBtn && audioPopover) {
      closeAudioPopoverBtn.addEventListener("click", () => {
        audioPopover.classList.add("hidden");
      });
    }

    if (loginMuteBtn) {
      loginMuteBtn.addEventListener("click", () => {
        ensureAudioContext();
        const anyOn = settings.bgmEnabled || settings.sfxEnabled;
        settings.bgmEnabled = !anyOn;
        settings.sfxEnabled = !anyOn;
        saveSettings(settings);
        updateMasterGains();
        if (settings.bgmEnabled && !isBgmPlaying) startBgmScheduler();
        if (settings.sfxEnabled) SFX.click();
        syncAudioUI();
      });
    }

    const bgmToggleInput = document.getElementById("audioBgmToggle");
    const bgmThemeSelect = document.getElementById("audioBgmThemeSelect");
    const bgmVolSlider = document.getElementById("audioBgmVolume");
    const sfxToggleInput = document.getElementById("audioSfxToggle");
    const hoverToggleInput = document.getElementById("audioHoverToggle");
    const sfxVolSlider = document.getElementById("audioSfxVolume");

    if (bgmToggleInput) {
      bgmToggleInput.addEventListener("change", (e) => {
        ensureAudioContext();
        settings.bgmEnabled = e.target.checked;
        saveSettings(settings);
        updateMasterGains();
        if (settings.bgmEnabled && !isBgmPlaying) {
          startBgmScheduler();
        }
        syncAudioUI();
      });
    }

    if (bgmThemeSelect) {
      bgmThemeSelect.addEventListener("change", (e) => {
        ensureAudioContext();
        settings.bgmTheme = e.target.value;
        stepCounter = 0;
        saveSettings(settings);
        if (settings.bgmEnabled) {
          if (!isBgmPlaying) startBgmScheduler();
          triggerBgmStep();
        }
        syncAudioUI();
      });
    }

    if (bgmVolSlider) {
      bgmVolSlider.addEventListener("input", (e) => {
        ensureAudioContext();
        settings.bgmVolume = Number(e.target.value) / 100;
        saveSettings(settings);
        updateMasterGains();
        syncAudioUI();
      });
    }

    if (sfxToggleInput) {
      sfxToggleInput.addEventListener("change", (e) => {
        ensureAudioContext();
        settings.sfxEnabled = e.target.checked;
        saveSettings(settings);
        updateMasterGains();
        if (settings.sfxEnabled) SFX.click();
        syncAudioUI();
      });
    }

    if (hoverToggleInput) {
      hoverToggleInput.addEventListener("change", (e) => {
        settings.hoverSfxEnabled = e.target.checked;
        saveSettings(settings);
        syncAudioUI();
      });
    }

    if (sfxVolSlider) {
      sfxVolSlider.addEventListener("input", (e) => {
        ensureAudioContext();
        settings.sfxVolume = Number(e.target.value) / 100;
        saveSettings(settings);
        updateMasterGains();
        syncAudioUI();
      });
    }

    // Sound test buttons inside Audio Studio Popover
    document.querySelectorAll("[data-test-sfx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        ensureAudioContext();
        const kind = btn.getAttribute("data-test-sfx");
        if (kind === "click") SFX.click();
        else if (kind === "correct") SFX.correct();
        else if (kind === "wrong") SFX.wrong();
        else if (kind === "sim") SFX.simStep(3);
      });
    });

    syncAudioUI();
  }

  // Expose public API to window.SoundStudio for app.js integration
  window.SoundStudio = {
    playClick: () => SFX.click(),
    playHover: () => SFX.hover(),
    playNav: () => SFX.nav(),
    playSelectOption: (key) => SFX.selectOption(key),
    playCorrect: () => SFX.correct(),
    playWrong: () => SFX.wrong(),
    playSimStep: (step) => SFX.simStep(step),
    playSimReset: () => SFX.simReset(),
    playCopy: () => SFX.copy(),
    playLoginSuccess: () => SFX.loginSuccess(),
    playLoginError: () => SFX.loginError(),
    playLogout: () => SFX.logout(),
    playModalClose: () => SFX.modalClose(),
    setAppMode(mode) {
      currentAppMode = mode;
      syncAudioUI();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAudioBindings);
  } else {
    initAudioBindings();
  }
})();
