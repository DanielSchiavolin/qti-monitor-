const DEFAULT_POSTS = [
  // Segurança Econ
  { id: 'arthur_lobo_1789936038873', name: 'Arthur Lobo', category: 'Segurança Econ', escalaType: 'hibrido', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['24h','noturno','noturno','noturno','noturno','noturno','24h'] },
  { id: 'giovanni_gronch_1789936066037', name: 'Giovanni Gronchi', category: 'Segurança Econ', escalaType: '24h', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'ipiranga_1789935880313', name: 'Ipiranga', category: 'Segurança Econ', escalaType: 'hibrido', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['24h','noturno','noturno','noturno','noturno','noturno','24h'] },
  { id: 'mascote_1789935938743', name: 'Mascote', category: 'Segurança Econ', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'oswaldo_1789935997436', name: 'Oswaldo', category: 'Segurança Econ', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'sabar__1789935953916', name: 'Sabara', category: 'Segurança Econ', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'suzana_1789935987050', name: 'Suzana', category: 'Segurança Econ', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'tumiaru_1789935977310', name: 'Tumiaru', category: 'Segurança Econ', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },

  // Segurança Nurban
  { id: 'bosque_1789936154381', name: 'Bosque', category: 'Segurança Nurban', escalaType: '24h', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'ces_rio_1789936139904', name: 'Cesario', category: 'Segurança Nurban', escalaType: '24h', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'jo_o_ramalho_1789936084220', name: 'Joao Ramalho', category: 'Segurança Nurban', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'palmeiras_1789936128170', name: 'Palmeiras', category: 'Segurança Nurban', escalaType: '24h', days: [0,1,2,3,4,5,6], alertTimeDiurno: '04:00', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'perdizes_1789936116950', name: 'Perdizes', category: 'Segurança Nurban', escalaType: 'noturno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '', alertTimeNoturno: '17:00', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },

  // Segurança Kallas
  { id: 'central_kallas_1789936253543', name: 'Central Kallas', category: 'Segurança Kallas', escalaType: 'hibrido', days: [1,3,5], alertTimeDiurno: '06:00', alertTimeNoturno: '', hibridoSchedule: ['folga','diurno','folga','diurno','folga','diurno','folga'] },

  // Segurança Cursino
  { id: 'cursino_1789936223784', name: 'Cursino', category: 'Segurança Cursino', escalaType: 'hibrido', days: [1,2,3,4,5,6], alertTimeDiurno: '06:00', alertTimeNoturno: '', hibridoSchedule: ['folga','diurno','diurno','diurno','diurno','diurno','diurno'] },

  // Limpeza
  { id: 'cl_nica_1789985216105', name: 'Clinica', category: 'Limpeza', escalaType: 'diurno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '05:00', alertTimeNoturno: '', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'bosque_1789937345756', name: 'Bosque', category: 'Limpeza', escalaType: 'diurno', days: [0,1,2,3,4,5,6], alertTimeDiurno: '06:00', alertTimeNoturno: '', hibridoSchedule: ['folga','folga','folga','folga','folga','folga','folga'] },
  { id: 'campo_belo_1789936312558', name: 'Campo Belo', category: 'Limpeza', escalaType: 'hibrido', days: [3], alertTimeDiurno: '06:00', alertTimeNoturno: '', hibridoSchedule: ['folga','folga','folga','diurno','folga','folga','folga'] },
  { id: 'ces_rio_1789936415820', name: 'Cesario', category: 'Limpeza', escalaType: 'hibrido', days: [1,2,4,5,6], alertTimeDiurno: '06:30', alertTimeNoturno: '', hibridoSchedule: ['folga','diurno','diurno','folga','diurno','diurno','diurno'] },
  { id: 'ibirapuera_1789936286981', name: 'Ibirapuera', category: 'Limpeza', escalaType: 'hibrido', days: [3], alertTimeDiurno: '07:00', alertTimeNoturno: '', hibridoSchedule: ['folga','folga','folga','diurno','folga','folga','folga'] },
];

class SoundManager {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      try {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('Web Audio not supported:', e);
      }
    }
  }

  // Red - sem contato: Low warning buzz
  playSemContato() {
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.15);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.2);
  }

  // Yellow - QTI: Medium notification double beep
  playQTI() {
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(440, ctx.currentTime);
    gain1.gain.setValueAtTime(0.25, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    osc1.start(ctx.currentTime);
    osc1.stop(ctx.currentTime + 0.1);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(550, ctx.currentTime + 0.12);
    gain2.gain.setValueAtTime(0.25, ctx.currentTime + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
    osc2.start(ctx.currentTime + 0.12);
    osc2.stop(ctx.currentTime + 0.22);
  }

  // Green - chegou: Positive ascending chime
  playChegou() {
    this.init();
    if (!this.audioCtx) return;
    const ctx = this.audioCtx;
    const notes = [600, 800, 1000];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.15);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.15);
    });
  }

  playForStatus(status) {
    switch(status) {
      case 'sem_contato': this.playSemContato(); break;
      case 'qti': this.playQTI(); break;
      case 'chegou': this.playChegou(); break;
    }
  }
}

class FirebaseManager {
  constructor() {
    this.db = null;
    this.postsRef = null;
    this.systemRef = null;
    this.isConnected = false;
    this.serverTimeOffset = 0;
    this.postsListener = null;
  }

  // Current time corrected by the Firebase server clock (protects against wrong device clocks)
  now() {
    return new Date(Date.now() + this.serverTimeOffset);
  }

  getConfig() {
    const saved = localStorage.getItem('firebaseConfig');
    return saved ? JSON.parse(saved) : null;
  }

  saveConfig(config) {
    localStorage.setItem('firebaseConfig', JSON.stringify(config));
  }

  init(config) {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(config);
      }
      this.db = firebase.database();
      this.postsRef = this.db.ref('posts');
      this.systemRef = this.db.ref('system');
      this.isConnected = true;

      // Monitor connection
      this.db.ref('.info/connected').on('value', (snap) => {
        this.isConnected = snap.val() === true;
        const statusEl = document.getElementById('connection-status');
        const textEl = document.getElementById('connection-text');
        if (statusEl) statusEl.className = this.isConnected ? 'conn-dot connected' : 'conn-dot disconnected';
        if (textEl) textEl.textContent = this.isConnected ? 'Online' : 'Offline';
      });

      this.db.ref('.info/serverTimeOffset').on('value', (snap) => {
        this.serverTimeOffset = snap.val() || 0;
      });

      // Mobile browsers silently kill the websocket while the tab/screen is in background.
      // Force a fresh connection when the user comes back so the screen is never stale.
      let hiddenAt = null;
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          hiddenAt = Date.now();
        } else if (hiddenAt && Date.now() - hiddenAt > 30000) {
          this.db.goOffline();
          this.db.goOnline();
          hiddenAt = null;
        }
      });

      return true;
    } catch(e) {
      console.error('Firebase init error:', e);
      return false;
    }
  }

  // Initialize and sync posts in Firebase from DEFAULT_POSTS ONLY if empty
  async initializePosts() {
    try {
      const snapshot = await this.postsRef.once('value');
      const existingData = snapshot.val() || {};
      
      const updates = {};
      // Remove obsolete posts if present in DB
      if (existingData.limp_palmeiras1) updates['limp_palmeiras1'] = null;
      if (existingData.limp_palmeiras2) updates['limp_palmeiras2'] = null;

      // Only seed default posts if the database is completely empty
      // This prevents deleted posts from coming back when the app refreshes.
      if (Object.keys(existingData).length === 0) {
        DEFAULT_POSTS.forEach(defPost => {
          updates[defPost.id] = {
            ...defPost,
            status: 'none',
            lastUpdate: null,
            lastShiftReset: null
          };
        });
      } else {
        // Sync definition properties for existing default posts without overwriting status
        DEFAULT_POSTS.forEach(defPost => {
          if (existingData[defPost.id]) {
            updates[`${defPost.id}/days`] = defPost.days;
            updates[`${defPost.id}/alertTimeDiurno`] = defPost.alertTimeDiurno;
            updates[`${defPost.id}/alertTimeNoturno`] = defPost.alertTimeNoturno;
            updates[`${defPost.id}/name`] = defPost.name;
            updates[`${defPost.id}/category`] = defPost.category;
            updates[`${defPost.id}/escalaType`] = defPost.escalaType;
            if (defPost.hibridoSchedule) {
              updates[`${defPost.id}/hibridoSchedule`] = defPost.hibridoSchedule;
            }
          }
        });
      }

      if (Object.keys(updates).length > 0) {
        await this.postsRef.update(updates);
      }
      return true;
    } catch (err) {
      console.error('Firebase initializePosts error:', err);
      if (err && err.message && (err.message.includes('permission_denied') || err.message.includes('Permission denied'))) {
        if (window.app) window.app.showPermissionErrorBanner();
      }
      return false;
    }
  }

  // Listen for real-time changes on posts with error callback
  // A cancelled listener (e.g. a permission error) is never restored by Firebase,
  // so we re-subscribe after a delay instead of going silently stale.
  onPostsChange(callback, errorCallback) {
    if (!this.postsRef) return;
    if (this.postsListener) this.postsRef.off('value', this.postsListener);
    this.postsListener = this.postsRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      callback(data);
    }, (error) => {
      console.error('Firebase onPostsChange error:', error);
      this.postsListener = null;
      if (errorCallback) errorCallback(error);
      setTimeout(() => this.onPostsChange(callback, errorCallback), 10000);
    });
  }

  // Atomically claim a shift reset: only one client wins, and a device with a
  // clock behind can never move the key backwards (keys sort chronologically).
  async claimReset(targetKey) {
    if (!this.systemRef) return false;
    const result = await this.systemRef.child('lastResetKey').transaction((current) => {
      if (current && current >= targetKey) return; // abort: already reset for this shift
      return targetKey;
    });
    return result.committed;
  }

  // Get and set auto-reset key in Firebase
  async getLastResetKey() {
    if (!this.systemRef) return null;
    try {
      const snap = await this.systemRef.child('lastResetKey').once('value');
      return snap.val();
    } catch (e) {
      console.warn('getLastResetKey error:', e);
      return null;
    }
  }

  async setLastResetKey(key) {
    if (!this.systemRef) return;
    try {
      await this.systemRef.child('lastResetKey').set(key);
    } catch (e) {
      console.warn('setLastResetKey error:', e);
    }
  }

  // Update post status
  async updateStatus(postId, status) {
    if (!this.postsRef) return;
    await this.postsRef.child(postId).update({
      status: status,
      lastUpdate: this.now().toISOString()
    });
  }

  // Add new post
  async addPost(post) {
    if (!this.postsRef) return;
    await this.postsRef.child(post.id).set({
      ...post,
      status: 'none',
      lastUpdate: null,
      lastShiftReset: null
    });
  }

  // Delete post
  async deletePost(postId) {
    if (!this.postsRef) return;
    await this.postsRef.child(postId).remove();
  }

  // Reset statuses for all posts that exist on the server
  // (using local ids could resurrect posts another user deleted)
  async resetStatuses() {
    if (!this.postsRef) return;
    const snapshot = await this.postsRef.once('value');
    const postIds = Object.keys(snapshot.val() || {});
    if (postIds.length === 0) return;
    const resetAt = this.now().toISOString();
    const updates = {};
    postIds.forEach(id => {
      updates[`${id}/status`] = 'none';
      updates[`${id}/lastUpdate`] = null;
      updates[`${id}/lastShiftReset`] = resetAt;
    });
    await this.postsRef.update(updates);
  }
}

class QTIApp {
  constructor() {
    this.firebase = new FirebaseManager();
    this.sound = new SoundManager();
    this.posts = {};
    this.clockInterval = null;
    this.alertInterval = null;
    this.autoResetInterval = null;
  }

  // Default Firebase configuration
  static DEFAULT_CONFIG = {
    apiKey: "AIzaSyC0jkZZ4EjKxmpzg6SEnk87B1QBKIsCRbs",
    authDomain: "front-security-qti.firebaseapp.com",
    databaseURL: "https://front-security-qti-default-rtdb.firebaseio.com",
    projectId: "front-security-qti",
    storageBucket: "front-security-qti.firebasestorage.app",
    messagingSenderId: "390287906809",
    appId: "1:390287906809:web:d2428c29ac936f8bc18f28"
  };

  // Load initial posts immediately from localStorage or defaults
  loadInitialPosts() {
    const saved = localStorage.getItem('qti_posts');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // If parsed is an object (even empty), return it. 
        // This prevents default posts from coming back if the user deleted all of them.
        if (parsed && typeof parsed === 'object') return parsed;
      } catch (e) {}
    }
    const initial = {};
    DEFAULT_POSTS.forEach(p => {
      initial[p.id] = {
        ...p,
        status: 'none',
        lastUpdate: null,
        lastShiftReset: null
      };
    });
    return initial;
  }

  // Initialize the app
  async init() {
    this.buildHibridoGrid();
    this.startClock();
    this.setupEventListeners();

    // 1. INSTANT RENDER: Immediately render local posts so the screen is NEVER blank or stuck!
    this.posts = this.loadInitialPosts();
    this.renderPosts();
    this.checkAlerts();

    // 2. Connect to Firebase in the background
    const config = this.firebase.getConfig() || QTIApp.DEFAULT_CONFIG;
    const success = this.firebase.init(config);
    if (success) {
      this.firebase.saveConfig(config);

      // Subscribe BEFORE initializePosts so a slow/failed init never delays live updates
      this.firebase.onPostsChange(
        (data) => {
          if (data) {
            this.onDataUpdate(data);
          }
        },
        (error) => {
          console.error('Firebase sync error:', error);
          if (error && error.message && (error.message.includes('permission_denied') || error.message.includes('Permission denied'))) {
            this.showPermissionErrorBanner();
          }
        }
      );

      try {
        await this.firebase.initializePosts();
      } catch (err) {
        console.warn('initializePosts warning:', err);
      }

      this.startAlertChecker();
      this.startAutoResetChecker();
    } else {
      this.showSetupModal();
    }
  }

  // Show banner if Firebase rules expired
  showPermissionErrorBanner() {
    let banner = document.getElementById('firebase-permission-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'firebase-permission-banner';
      banner.className = 'alert-banner';
      banner.innerHTML = `
        <div>
          <strong>⚠️ Regras do Firebase Expiradas (Modo Teste de 30 dias)</strong><br>
          <span style="font-size:0.75rem; opacity:0.9;">
            O app está rodando localmente. Para reativar a sincronização online da equipe: acesse o 
            <a href="https://console.firebase.google.com/project/front-security-qti/database/rules" target="_blank">Firebase Console ➔ Realtime Database ➔ Regras</a>
            e troque para <code>".read": true, ".write": true</code>.
          </span>
        </div>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:#FFF;font-size:1.1rem;cursor:pointer;">✕</button>
      `;
      const container = document.getElementById('posts-container');
      if (container) {
        container.prepend(banner);
      }
    }
  }

  // Clock update
  startClock() {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const clockEl = document.getElementById('clock');
      if (clockEl) clockEl.textContent = timeStr;

      const dateStr = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
      const dateEl = document.getElementById('current-date');
      if (dateEl) dateEl.textContent = dateStr;
    };
    updateClock();
    this.clockInterval = setInterval(updateClock, 1000);
  }

  // Get current shift name ('diurno' or 'noturno')
  getCurrentShift() {
    const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();
    return (currentMinutes < 1020) ? 'diurno' : 'noturno';
  }

  normalizeCategory(cat) {
    if (!cat) return 'Segurança Econ';
    const c = cat.trim();
    if (c.includes('Econ')) return 'Segurança Econ';
    if (c.includes('Nurban')) return 'Segurança Nurban';
    if (c.includes('Kallas')) return 'Segurança Kallas';
    if (c.includes('Cursino')) return 'Segurança Cursino';
    if (c.toLowerCase().includes('limpeza')) return 'Limpeza';
    if (/^Seguran/i.test(c) || /^Segur/i.test(c)) return 'Segurança';
    return c;
  }

  normalizeName(name) {
    if (!name) return '';
    return name
      .replace(/Cesário/g, 'Cesario')
      .replace(/Clínica/g, 'Clinica')
      .replace(/Sabará/g, 'Sabara')
      .replace(/João/g, 'Joao');
  }

  migratePostIfNeeded(post) {
    if (!post) return post;
    const newPost = { ...post };
    if (newPost.name) newPost.name = this.normalizeName(newPost.name);
    if (newPost.category) newPost.category = this.normalizeCategory(newPost.category);

    if (newPost.escalaType !== undefined && newPost.escalaType !== '') {
      return newPost;
    }
    // Backward compatibility for old posts
    let hasD = !!newPost.alertTimeDiurno;
    let hasN = !!newPost.alertTimeNoturno;

    if (newPost.type === 'noturno') {
      newPost.escalaType = 'noturno';
      newPost.alertTimeDiurno = '';
      if (!newPost.alertTimeNoturno) newPost.alertTimeNoturno = '17:00';
    } else if (newPost.type === 'diurno' || newPost.type === 'limpeza') {
      newPost.escalaType = 'diurno';
      newPost.alertTimeNoturno = '';
      if (!newPost.alertTimeDiurno) newPost.alertTimeDiurno = '04:00';
    } else if (hasD && hasN) {
      newPost.escalaType = '24h';
    } else if (hasD) {
      newPost.escalaType = 'diurno';
    } else if (hasN) {
      newPost.escalaType = 'noturno';
    } else {
      newPost.escalaType = 'diurno';
    }

    if (!newPost.hibridoSchedule) {
      newPost.hibridoSchedule = ['folga', 'folga', 'folga', 'folga', 'folga', 'folga', 'folga'];
    }
    return newPost;
  }

  // Shift the post works TODAY: 'diurno', 'noturno', '24h' or 'folga'.
  // Single source of truth for hybrid schedules and for the days of every other escala
  // (24h posts used to ignore the selected days and run every day).
  getTodayShiftType(post) {
    post = this.migratePostIfNeeded(post);
    const today = new Date().getDay();
    if (post.escalaType === 'hibrido') {
      return (post.hibridoSchedule && post.hibridoSchedule[today]) || 'folga';
    }
    const days = Array.isArray(post.days) ? post.days : (post.escalaType === '24h' ? [0, 1, 2, 3, 4, 5, 6] : []);
    return days.includes(today) ? post.escalaType : 'folga';
  }

  isActiveToday(post) {
    return this.getTodayShiftType(post) !== 'folga';
  }

  // Check if post is operating RIGHT NOW
  isOperatingNow(post) {
    const todayType = this.getTodayShiftType(post);
    const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();

    const operatesTurno1 = todayType === 'diurno' || todayType === '24h';  // Diurno: 00:00 às 16:59
    const operatesTurno2 = todayType === 'noturno' || todayType === '24h'; // Noturno: 17:00 às 23:59

    if (!operatesTurno1 && !operatesTurno2) return false;

    // Turno 2 (Noturno) is 17:00 (1020 min) to 23:59 (1439 min)
    if (currentMinutes >= 1020) {
      return operatesTurno2;
    }
    
    // Turno 1 (Diurno) is 00:00 (0 min) to 16:59 (1019 min)
    return operatesTurno1;
  }

  // Check if post should flash right now
  shouldFlash(post) {
    if (!this.isOperatingNow(post)) return false;
    if (post.status && post.status !== 'none') return false;

    post = this.migratePostIfNeeded(post);
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    // Determine which shift we are currently in
    const isTurno2 = currentMinutes >= 1020;
    const isTurno1 = currentMinutes < 1020;

    let alertTimeStr = null;

    if (isTurno2 && post.alertTimeNoturno) {
      alertTimeStr = post.alertTimeNoturno;
    } else if (isTurno1 && post.alertTimeDiurno) {
      alertTimeStr = post.alertTimeDiurno;
    }
    
    if (!alertTimeStr) return false;

    const [alertH, alertM] = alertTimeStr.split(':').map(Number);
    if (isNaN(alertH) || isNaN(alertM)) return false;

    const alertTimeMinutes = alertH * 60 + alertM;
    const alertEndMinutes = alertTimeMinutes + 300; // 5 hours limit

    // Se o fim do alerta passar de 00:00
    if (alertEndMinutes >= 1440) {
      const wrappedEnd = alertEndMinutes - 1440;
      return currentMinutes >= alertTimeMinutes || currentMinutes < wrappedEnd;
    } else {
      return currentMinutes >= alertTimeMinutes && currentMinutes < alertEndMinutes;
    }
  }

  // Calculate current auto-reset key for 00:00 AM and 17:00 PM schedule
  // Uses server-corrected time in São Paulo timezone, so every device computes the same key
  // even if its clock or timezone is wrong.
  getCurrentResetKey() {
    const parts = {};
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Sao_Paulo',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
    }).formatToParts(this.firebase.now()).forEach(p => { parts[p.type] = p.value; });
    const dateStr = `${parts.year}-${parts.month}-${parts.day}`;

    const currentMinutes = Number(parts.hour) * 60 + Number(parts.minute);

    if (currentMinutes >= 1020) {
      // 17:00 PM (1020 min) to 23:59 PM -> Cycle 17:00
      return `${dateStr}_17:00`;
    } else {
      // 00:00 AM (0 min) to 16:59 PM -> Cycle 00:00
      return `${dateStr}_00:00`;
    }
  }

  // Check and perform auto-reset at 00:00 AM and 17:00 PM
  async checkAutoReset() {
    if (!this.firebase.isConnected || !this.posts) return;

    try {
      const targetKey = this.getCurrentResetKey();
      const lastKey = await this.firebase.getLastResetKey();
      if (lastKey && lastKey >= targetKey) return;

      // Only the client that wins the transaction performs the reset
      if (await this.firebase.claimReset(targetKey)) {
        console.log(`Auto reset triggered! Previous: ${lastKey}, New target: ${targetKey}`);
        await this.firebase.resetStatuses();
        this.showToast('🔄 Reset automático de turno (00:00 / 17:00) realizado!', 'info');
      }
    } catch (err) {
      console.warn('checkAutoReset warning:', err);
    }
  }

  startAutoResetChecker() {
    this.checkAutoReset();
    this.autoResetInterval = setInterval(() => this.checkAutoReset(), 15000);
  }

  // Start checking for alerts every 30 seconds
  startAlertChecker() {
    this.checkAlerts();
    this.alertInterval = setInterval(() => this.checkAlerts(), 30000);
  }

  checkAlerts() {
    let segPending = 0;
    let limpPending = 0;

    Object.values(this.posts).forEach(post => {
      const card = document.getElementById(`card-${post.id}`);
      if (!card) return;

      if (this.shouldFlash(post)) {
        card.classList.add('flashing');
        const isLimpeza = post.category === 'Limpeza' || post.type === 'limpeza' || post.category.toLowerCase().includes('limpeza');
        if (isLimpeza) limpPending++;
        else segPending++;
      } else {
        card.classList.remove('flashing');
      }
    });

    const badge = document.getElementById('pending-count');
    if (badge) {
      const totalPending = segPending + limpPending;
      if (totalPending > 0) {
        badge.textContent = `🛡️ ${segPending} | 🧹 ${limpPending}`;
        badge.className = 'pending-badge';
      } else {
        badge.textContent = '✓ Todos OK';
        badge.className = 'pending-badge all-clear';
      }
    }
  }

  // Handle real-time data updates from Firebase
  onDataUpdate(data) {
    this.posts = data;
    localStorage.setItem('qti_posts', JSON.stringify(data));
    this.renderPosts();
    this.checkAlerts();
  }

  // Render all posts grouped by category
  renderPosts() {
    const container = document.getElementById('posts-container');
    if (!container) return;

    // Preserve permission banner if present
    const existingBanner = document.getElementById('firebase-permission-banner');

    container.innerHTML = '';
    if (existingBanner) {
      container.appendChild(existingBanner);
    }

    const categories = {};
    Object.values(this.posts).forEach(post => {
      post = this.migratePostIfNeeded(post);
      const cat = post.category || 'Segurança Econ';
      if (!categories[cat]) categories[cat] = [];
      categories[cat].push(post);
    });

    const categoryIcons = {
      'Segurança Econ': '🛡️',
      'Segurança Nurban': '🏢',
      'Segurança Kallas': '🔐',
      'Segurança Cursino': '📍',
      'Limpeza': '🧹'
    };

    const categoryOrder = ['Segurança Econ', 'Segurança Nurban', 'Segurança Kallas', 'Segurança Cursino', 'Limpeza'];
    Object.keys(categories).forEach(cat => {
      if (!categoryOrder.includes(cat)) categoryOrder.push(cat);
    });

    categoryOrder.forEach(catName => {
      const posts = categories[catName];
      if (!posts || posts.length === 0) return;

      const section = document.createElement('div');
      section.className = 'category-section';

      const activeCount = posts.filter(p => this.isOperatingNow(p)).length;

      section.innerHTML = `
        <div class="category-header">
          <div class="category-icon">${categoryIcons[catName] || '📌'}</div>
          <h2 class="category-title">${catName}</h2>
          <span class="category-count">${activeCount}/${posts.length} no turno</span>
        </div>
        <div class="posts-grid"></div>
      `;

      const grid = section.querySelector('.posts-grid');

      posts.forEach(post => {
        const card = this.createPostCard(post);
        grid.appendChild(card);
      });

      container.appendChild(section);
    });
  }

  // "Dom 🔄 24h · Seg–Sex 🌙 Noturno · Sáb 🔄 24h" (folga days are omitted)
  describeHibrido(schedule) {
    if (!schedule) return '';
    const names = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const labels = { diurno: '☀️ Diurno', noturno: '🌙 Noturno', '24h': '🔄 24h' };
    const parts = [];
    let i = 0;
    while (i < 7) {
      const type = schedule[i] || 'folga';
      let j = i;
      while (j + 1 < 7 && (schedule[j + 1] || 'folga') === type) j++;
      if (type !== 'folga') {
        parts.push(`${i === j ? names[i] : `${names[i]}–${names[j]}`} ${labels[type] || type}`);
      }
      i = j + 1;
    }
    return parts.join(' · ');
  }

  // Create a single post card element
  createPostCard(post) {
    post = this.migratePostIfNeeded(post);
    const isOperating = this.isOperatingNow(post);
    const card = document.createElement('div');
    card.id = `card-${post.id}`;
    card.className = `post-card${post.status !== 'none' ? ` status-${post.status.replace('_', '-')}` : ''}${!isOperating ? ' inactive' : ''}`;

    const statusLabels = {
      'none': 'Aguardando...',
      'sem_contato': '🔴 Sem Contato',
      'qti': '🟡 QTI',
      'chegou': '🟢 Chegou'
    };
    const statusClasses = {
      'none': 'none',
      'sem_contato': 'sem-contato',
      'qti': 'qti',
      'chegou': 'chegou'
    };

    let displayStatusText = statusLabels[post.status] || 'Aguardando...';
    let displayStatusClass = statusClasses[post.status] || 'none';

    const shiftLabels = { diurno: 'Diurno', noturno: 'Noturno', '24h': '24h', folga: 'Folga' };
    const todayType = this.getTodayShiftType(post);

    // Hybrid badge shows what the post works TODAY, so a night-only day is never shown as 24h
    let typeLabel = shiftLabels[post.escalaType] || 'Inativo';
    let typeClass = post.escalaType || 'inativo';
    if (post.escalaType === 'hibrido') {
      typeLabel = `Híbrido · hoje ${shiftLabels[todayType] || 'Folga'}`;
      typeClass = 'hibrido';
    }

    if (!isOperating) {
      displayStatusClass = 'none';
      if (todayType === 'folga') {
        displayStatusText = '⛔ Folga Hoje';
      } else if (todayType === 'noturno') {
        displayStatusText = `🌙 Turno 17h (${post.alertTimeNoturno})`;
      } else if (todayType === 'diurno') {
        displayStatusText = `☀️ Turno 00h (${post.alertTimeDiurno})`;
      } else {
        displayStatusText = 'Inativo no momento';
      }
    }

    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let scheduleText = '';
    if (post.escalaType === 'hibrido') {
      scheduleText = this.describeHibrido(post.hibridoSchedule) || 'Sem dias configurados';
    } else {
      if (post.days && post.days.length < 7) {
        scheduleText = post.days.map(d => dayNames[d]).join(', ');
      } else {
        scheduleText = 'Todos os dias';
      }
    }

    // Only show the alerts of the shift that applies (for hybrid: today's shift)
    const alertShift = post.escalaType === 'hibrido' ? todayType : post.escalaType;
    let alertsText = [];
    if ((alertShift === 'diurno' || alertShift === '24h') && post.alertTimeDiurno) {
      alertsText.push(`☀️ ${post.alertTimeDiurno}`);
    }
    if ((alertShift === 'noturno' || alertShift === '24h') && post.alertTimeNoturno) {
      alertsText.push(`🌙 ${post.alertTimeNoturno}`);
    }
    if (alertsText.length > 0) {
      scheduleText += ` · Alerta: ${alertsText.join(' | ')}`;
    }

    let lastUpdateText = '';
    if (post.lastUpdate) {
      const date = new Date(post.lastUpdate);
      lastUpdateText = `Atualizado: ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    }

    const disabledAttr = !isOperating ? 'disabled' : '';

    card.innerHTML = `
      <button class="btn-edit-post" onclick="app.showEditPostModal('${post.id}')" title="Editar posto">✏️</button>
      <button class="btn-delete-post" onclick="app.confirmDelete('${post.id}', '${post.name}')" title="Deletar posto">✕</button>
      <div class="post-header">
        <span class="post-name">${post.name}</span>
        <span class="post-type-badge ${typeClass} badge-${typeClass}">${typeLabel}</span>
      </div>
      <div class="post-schedule">${scheduleText}</div>
      <div class="post-status-display ${displayStatusClass}">${displayStatusText}</div>
      <div class="status-buttons">
        <button class="btn-status btn-red${post.status === 'sem_contato' ? ' active' : ''}" ${disabledAttr} onclick="app.setStatus('${post.id}', 'sem_contato')">
          🔴 Sem Contato
        </button>
        <button class="btn-status btn-yellow${post.status === 'qti' ? ' active' : ''}" ${disabledAttr} onclick="app.setStatus('${post.id}', 'qti')">
          🟡 QTI
        </button>
        <button class="btn-status btn-green${post.status === 'chegou' ? ' active' : ''}" ${disabledAttr} onclick="app.setStatus('${post.id}', 'chegou')">
          🟢 Chegou
        </button>
      </div>
      ${lastUpdateText ? `<div class="post-last-update">${lastUpdateText}</div>` : ''}
    `;

    return card;
  }

  // Set status for a post (optimistic UI + background sync)
  async setStatus(postId, status) {
    if (!this.posts[postId]) return;
    const post = this.posts[postId];

    if (!this.isOperatingNow(post)) {
      this.showToast(`Posto "${post.name}" não opera neste turno/dia.`, 'error');
      return;
    }

    const currentStatus = post.status || 'none';
    const newStatus = (currentStatus === status) ? 'none' : status;

    if (newStatus !== 'none') {
      this.sound.playForStatus(newStatus);
    }

    // 1. Instant local update (not cached in localStorage: only server-confirmed data is cached,
    //    otherwise a failed write would keep showing up as if it had been saved)
    this.posts[postId].status = newStatus;
    this.posts[postId].lastUpdate = new Date().toISOString();
    this.renderPosts();
    this.checkAlerts();

    if (!this.firebase.isConnected) {
      this.showToast('⚠️ Sem conexão! O status só será enviado à equipe quando a internet voltar. Não feche o app.', 'error');
    }

    // 2. Sync with Firebase. The promise only resolves when the server confirms,
    //    so warn the user if that takes too long instead of failing silently.
    const slowWarning = setTimeout(() => {
      this.showToast(`⚠️ "${post.name}": status ainda não chegou ao servidor. Verifique a conexão.`, 'error');
    }, 8000);
    try {
      await this.firebase.updateStatus(postId, newStatus);
    } catch (err) {
      console.warn('Firebase status update failed:', err);
      this.showToast(`❌ Falha ao salvar status de "${post.name}". A equipe NÃO vê essa alteração.`, 'error');
      if (err && err.message && (err.message.includes('permission_denied') || err.message.includes('Permission denied'))) {
        this.showPermissionErrorBanner();
      }
    } finally {
      clearTimeout(slowWarning);
    }
  }

  // Confirm delete
  confirmDelete(postId, postName) {
    const overlay = document.getElementById('confirm-overlay');
    document.getElementById('confirm-message').textContent = `Tem certeza que deseja deletar o posto "${postName}"?`;
    overlay.classList.add('active');

    document.getElementById('confirm-yes').onclick = async () => {
      delete this.posts[postId];
      localStorage.setItem('qti_posts', JSON.stringify(this.posts));
      this.renderPosts();
      
      let firebaseError = null;
      try {
        if (this.firebase.isConnected) {
          await this.firebase.deletePost(postId);
        }
      } catch (e) {
        console.warn('Delete failed in Firebase:', e);
        firebaseError = e;
      }
      
      overlay.classList.remove('active');
      
      if (firebaseError) {
        this.showToast(`Posto deletado localmente. Falha ao sincronizar (Regras?).`, 'error');
      } else {
        this.showToast(`Posto "${postName}" deletado`, 'success');
      }
    };

    document.getElementById('confirm-no').onclick = () => {
      overlay.classList.remove('active');
    };
  }

  // Reset all statuses
  confirmReset() {
    const overlay = document.getElementById('confirm-overlay');
    document.getElementById('confirm-message').textContent = 'Tem certeza que deseja resetar TODOS os status?';
    overlay.classList.add('active');

    document.getElementById('confirm-yes').onclick = async () => {
      const postIds = Object.keys(this.posts);
      postIds.forEach(id => {
        if (this.posts[id]) {
          this.posts[id].status = 'none';
          this.posts[id].lastUpdate = null;
        }
      });
      localStorage.setItem('qti_posts', JSON.stringify(this.posts));
      this.renderPosts();
      this.checkAlerts();

      try {
        await this.firebase.resetStatuses();
      } catch (e) {
        console.warn('Reset failed in Firebase:', e);
      }
      overlay.classList.remove('active');
      this.showToast('Todos os status foram resetados', 'info');
    };

    document.getElementById('confirm-no').onclick = () => {
      overlay.classList.remove('active');
    };
  }

  // Export to WhatsApp (Separates Segurança and Limpeza with individual summaries)
  exportWhatsApp() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const currentShift = this.getCurrentShift();
    const shiftName = currentShift === 'diurno' ? 'DIURNO' : 'NOTURNO';

    let message = `🛡️ *FRONT SECURITY - Status ${shiftName}*\n`;
    message += `📅 ${dateStr} às ${timeStr}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    const statusEmojis = {
      'none': '⚪ Pendente',
      'sem_contato': '🔴 Sem Contato',
      'qti': '🟡 QTI',
      'chegou': '🟢 Chegou'
    };

    const segurancaPosts = [];
    const limpezaPosts = [];

    Object.values(this.posts).forEach(post => {
      if (!this.isOperatingNow(post)) return;

      const isLimpeza = post.category === 'Limpeza' || post.type === 'limpeza' || post.category.toLowerCase().includes('limpeza');
      if (isLimpeza) {
        limpezaPosts.push(post);
      } else {
        segurancaPosts.push(post);
      }
    });

    if (segurancaPosts.length === 0 && limpezaPosts.length === 0) {
      this.showToast('Nenhum posto operando neste turno para exportar.', 'error');
      return;
    }

    const groupByCategory = (postList) => {
      const grouped = {};
      postList.forEach(post => {
        if (!grouped[post.category]) grouped[post.category] = [];
        grouped[post.category].push(post);
      });
      return grouped;
    };

    // 1. SEGURANÇA SECTION
    if (segurancaPosts.length > 0) {
      message += `🛡️ *SEGURANÇA*\n`;
      const segGrouped = groupByCategory(segurancaPosts);
      Object.entries(segGrouped).forEach(([catName, posts]) => {
        message += `*${catName}*\n`;
        posts.forEach(post => {
          message += `  ${statusEmojis[post.status] || '⚪ Pendente'} - ${post.name}\n`;
        });
      });
      message += `\n`;
    }

    // 2. LIMPEZA SECTION
    if (limpezaPosts.length > 0) {
      message += `🧹 *LIMPEZA*\n`;
      const limpGrouped = groupByCategory(limpezaPosts);
      Object.entries(limpGrouped).forEach(([catName, posts]) => {
        message += `*${catName}*\n`;
        posts.forEach(post => {
          message += `  ${statusEmojis[post.status] || '⚪ Pendente'} - ${post.name}\n`;
        });
      });
      message += `\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;

    // 3. RESUMO SEGURANÇA
    if (segurancaPosts.length > 0) {
      const segChegou = segurancaPosts.filter(p => p.status === 'chegou').length;
      const segQti = segurancaPosts.filter(p => p.status === 'qti').length;
      const segSemContato = segurancaPosts.filter(p => p.status === 'sem_contato').length;
      const segPendente = segurancaPosts.filter(p => p.status === 'none').length;

      message += `📊 *RESUMO SEGURANÇA:*\n`;
      message += `🟢 Chegou: ${segChegou} | 🟡 QTI: ${segQti}\n`;
      message += `🔴 Sem Contato: ${segSemContato} | ⚪ Pendente: ${segPendente}\n`;
      message += `Total Segurança: ${segurancaPosts.length}\n\n`;
    }

    // 4. RESUMO LIMPEZA
    if (limpezaPosts.length > 0) {
      const limpChegou = limpezaPosts.filter(p => p.status === 'chegou').length;
      const limpQti = limpezaPosts.filter(p => p.status === 'qti').length;
      const limpSemContato = limpezaPosts.filter(p => p.status === 'sem_contato').length;
      const limpPendente = limpezaPosts.filter(p => p.status === 'none').length;

      message += `🧹 *RESUMO LIMPEZA:*\n`;
      message += `🟢 Chegou: ${limpChegou} | 🟡 QTI: ${limpQti}\n`;
      message += `🔴 Sem Contato: ${limpSemContato} | ⚪ Pendente: ${limpPendente}\n`;
      message += `Total Limpeza: ${limpezaPosts.length}\n`;
    }

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }

  buildHibridoGrid() {
    const grid = document.querySelector('.hibrido-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    dayNames.forEach((name, idx) => {
      grid.innerHTML += `
        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.1); padding: 4px 8px; border-radius: 4px;">
          <span style="font-size: 0.9rem;">${name}</span>
          <select id="hibrido-day-${idx}" class="form-select" style="width: auto; padding: 4px; font-size: 0.85rem;">
            <option value="folga">Folga</option>
            <option value="diurno">Diurno</option>
            <option value="noturno">Noturno</option>
            <option value="24h">24h</option>
          </select>
        </div>
      `;
    });
  }

  updateEscalaUI(type) {
    const groupDiurno = document.getElementById('group-alert-diurno');
    const groupNoturno = document.getElementById('group-alert-noturno');
    const groupDays = document.getElementById('group-standard-days');
    const groupHibrido = document.getElementById('group-hibrido-days');

    if (type === 'diurno') {
      groupDiurno.style.display = 'block';
      groupNoturno.style.display = 'none';
      groupDays.style.display = 'block';
      groupHibrido.style.display = 'none';
    } else if (type === 'noturno') {
      groupDiurno.style.display = 'none';
      groupNoturno.style.display = 'block';
      groupDays.style.display = 'block';
      groupHibrido.style.display = 'none';
    } else if (type === '24h') {
      groupDiurno.style.display = 'block';
      groupNoturno.style.display = 'block';
      groupDays.style.display = 'block';
      groupHibrido.style.display = 'none';
    } else if (type === 'hibrido') {
      groupDiurno.style.display = 'block';
      groupNoturno.style.display = 'block';
      groupDays.style.display = 'none';
      groupHibrido.style.display = 'block';
    }
  }

  // Show add post modal
  showAddPostModal() {
    document.getElementById('add-post-modal-title').textContent = '➕ Novo Posto';
    document.getElementById('edit-post-id').value = '';
    document.getElementById('add-post-modal').classList.add('active');
    document.getElementById('new-post-name').value = '';
    document.getElementById('new-post-category').value = 'Segurança Econ';
    document.getElementById('custom-category-group').style.display = 'none';
    document.getElementById('new-post-alert-diurno').value = '04:00';
    document.getElementById('new-post-alert-noturno').value = '';
    document.getElementById('new-post-escala-type').value = 'diurno';
    this.updateEscalaUI('diurno');
    document.querySelectorAll('.day-cb').forEach(cb => cb.checked = true);
    for (let i = 0; i < 7; i++) {
      const el = document.getElementById(`hibrido-day-${i}`);
      if (el) el.value = 'folga';
    }
  }

  showEditPostModal(postId) {
    if (!this.posts[postId]) return;
    const post = this.migratePostIfNeeded(this.posts[postId]);
    
    document.getElementById('add-post-modal-title').textContent = '✏️ Editar Posto';
    document.getElementById('edit-post-id').value = postId;
    
    document.getElementById('new-post-name').value = post.name;
    
    const categorySelect = document.getElementById('new-post-category');
    const options = Array.from(categorySelect.options).map(o => o.value);
    if (options.includes(post.category)) {
      categorySelect.value = post.category;
      document.getElementById('custom-category-group').style.display = 'none';
    } else {
      categorySelect.value = 'custom';
      document.getElementById('custom-category-group').style.display = 'block';
      document.getElementById('new-post-custom-category').value = post.category;
    }
    
    const escala = post.escalaType || 'diurno';
    document.getElementById('new-post-escala-type').value = escala;
    this.updateEscalaUI(escala);

    document.getElementById('new-post-alert-diurno').value = (escala === 'diurno' || escala === '24h' || escala === 'hibrido') ? (post.alertTimeDiurno || '') : '';
    document.getElementById('new-post-alert-noturno').value = (escala === 'noturno' || escala === '24h' || escala === 'hibrido') ? (post.alertTimeNoturno || '') : '';
    
    document.querySelectorAll('.day-cb').forEach(cb => {
      cb.checked = post.days && post.days.includes(parseInt(cb.value));
    });

    if (post.hibridoSchedule) {
      for (let i = 0; i < 7; i++) {
        const el = document.getElementById(`hibrido-day-${i}`);
        if (el) el.value = post.hibridoSchedule[i] || 'folga';
      }
    }
    
    document.getElementById('add-post-modal').classList.add('active');
  }

  hideAddPostModal() {
    document.getElementById('add-post-modal').classList.remove('active');
  }

  // Add or Edit post from form
  async addNewPost() {
    const name = document.getElementById('new-post-name').value.trim();
    if (!name) {
      this.showToast('Informe o nome do posto', 'error');
      return;
    }

    const category = document.getElementById('new-post-category').value;
    const customCategory = document.getElementById('new-post-custom-category');
    const finalCategory = category === 'custom' ? customCategory.value.trim() : category;

    if (category === 'custom' && !finalCategory) {
      this.showToast('Informe o nome da categoria', 'error');
      return;
    }

    const escalaType = document.getElementById('new-post-escala-type').value;
    let alertTimeDiurno = document.getElementById('new-post-alert-diurno').value;
    let alertTimeNoturno = document.getElementById('new-post-alert-noturno').value;

    // Sanitização estrita de horários conforme escalaType
    if (escalaType === 'diurno') {
      alertTimeNoturno = '';
      if (!alertTimeDiurno) alertTimeDiurno = '04:00';
    } else if (escalaType === 'noturno') {
      alertTimeDiurno = '';
      if (!alertTimeNoturno) alertTimeNoturno = '17:00';
    } else if (escalaType === '24h') {
      if (!alertTimeDiurno) alertTimeDiurno = '04:00';
      if (!alertTimeNoturno) alertTimeNoturno = '17:00';
    }

    let days = [];
    document.querySelectorAll('.day-cb:checked').forEach(cb => {
      days.push(parseInt(cb.value));
    });

    const hibridoSchedule = {};
    for (let i = 0; i < 7; i++) {
      const el = document.getElementById(`hibrido-day-${i}`);
      hibridoSchedule[i] = el ? el.value : 'folga';
    }

    if (escalaType === 'hibrido') {
      // Sincronizar array de dias estritamente com os dias ativos da escala híbrida
      days = [];
      for (let i = 0; i < 7; i++) {
        if (hibridoSchedule[i] && hibridoSchedule[i] !== 'folga') {
          days.push(i);
        }
      }
      if (days.length === 0) {
        this.showToast('Configure pelo menos um dia ativo na escala híbrida', 'error');
        return;
      }

      // Each alert time is required only if some day uses that shift, and cleared otherwise,
      // so a hybrid never flashes outside the shifts it actually has
      const types = Object.values(hibridoSchedule);
      const usesTurno1 = types.some(t => t === 'diurno' || t === '24h');
      const usesTurno2 = types.some(t => t === 'noturno' || t === '24h');
      if (usesTurno1 && !alertTimeDiurno) {
        this.showToast('Informe o horário de alerta do Turno 1 (há dias Diurno/24h na escala)', 'error');
        return;
      }
      if (usesTurno2 && !alertTimeNoturno) {
        this.showToast('Informe o horário de alerta do Turno 2 (há dias Noturno/24h na escala)', 'error');
        return;
      }
      if (!usesTurno1) alertTimeDiurno = '';
      if (!usesTurno2) alertTimeNoturno = '';
    } else if (days.length === 0) {
      this.showToast('Selecione pelo menos um dia de funcionamento', 'error');
      return;
    }

    const editId = document.getElementById('edit-post-id').value;
    const isEdit = !!editId;
    const id = isEdit ? editId : name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_') + '_' + Date.now();

    // Preserve existing status and update timestamps if editing
    const existingPost = isEdit ? this.posts[id] : null;
    const status = existingPost ? existingPost.status : 'none';
    const lastUpdate = existingPost ? existingPost.lastUpdate : null;
    const lastShiftReset = existingPost ? existingPost.lastShiftReset : null;

    const post = { 
      id, name, category: finalCategory, type: '', 
      escalaType, hibridoSchedule, days, 
      alertTimeDiurno, alertTimeNoturno, 
      status, lastUpdate, lastShiftReset 
    };
    
    this.posts[id] = post;
    localStorage.setItem('qti_posts', JSON.stringify(this.posts));
    this.renderPosts();

    let firebaseError = null;
    try {
      if (this.firebase.isConnected) {
        // addPost works as update since it uses .set() on the specific ID
        await this.firebase.addPost(post);
      }
    } catch (e) {
      console.warn('Firebase addPost failed:', e);
      firebaseError = e;
    }

    this.hideAddPostModal();
    
    if (firebaseError) {
      this.showToast(`Salvo localmente, mas falhou ao sincronizar. Regras expiradas?`, 'error');
    } else {
      this.showToast(isEdit ? `Posto "${name}" atualizado com sucesso` : `Posto "${name}" adicionado com sucesso`, 'success');
    }
  }

  // Show/hide setup modal
  showSetupModal() {
    document.getElementById('firebase-setup-modal').classList.add('active');
  }

  hideSetupModal() {
    document.getElementById('firebase-setup-modal').classList.remove('active');
  }

  // Save Firebase config
  async saveFirebaseConfig() {
    let input = document.getElementById('firebase-config-input').value.trim();
    try {
      input = input.replace(/^(const|var|let)\s+\w+\s*=\s*/, '');
      input = input.replace(/;\s*$/, '');
      input = input.replace(/'/g, '"');
      input = input.replace(/(\s*)(\w+)\s*:/g, '$1"$2":');
      input = input.replace(/""/g, '"');
      input = input.replace(/,\s*}/g, '}');

      const config = JSON.parse(input);
      if (!config.apiKey || !config.databaseURL) {
        this.showToast('Faltam campos obrigatórios: apiKey e databaseURL', 'error');
        return;
      }
      this.firebase.saveConfig(config);
      const success = this.firebase.init(config);
      if (success) {
        await this.firebase.initializePosts();
        this.firebase.onPostsChange((data) => this.onDataUpdate(data));
        this.startAlertChecker();
        this.startAutoResetChecker();
        this.hideSetupModal();
        this.showToast('Firebase conectado com sucesso! 🎉', 'success');
      } else {
        this.showToast('Erro ao conectar ao Firebase', 'error');
      }
    } catch(e) {
      console.error('Config parse error:', e);
      this.showToast('Formato inválido. Cole o firebaseConfig como aparece no Firebase.', 'error');
    }
  }

  // Show Firebase config for editing
  showConfigModal() {
    const config = this.firebase.getConfig();
    document.getElementById('firebase-config-input').value = config ? JSON.stringify(config, null, 2) : '';
    this.showSetupModal();
  }

  // Toast notifications
  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Setup event listeners
  setupEventListeners() {
    document.getElementById('save-firebase-config').addEventListener('click', () => this.saveFirebaseConfig());
    document.getElementById('whatsapp-btn').addEventListener('click', () => this.exportWhatsApp());
    document.getElementById('add-post-btn').addEventListener('click', () => this.showAddPostModal());
    document.getElementById('reset-btn').addEventListener('click', () => this.confirmReset());
    document.getElementById('close-add-modal').addEventListener('click', () => this.hideAddPostModal());
    document.getElementById('submit-new-post').addEventListener('click', () => this.addNewPost());
    document.getElementById('config-btn').addEventListener('click', () => this.showConfigModal());

    document.getElementById('new-post-category').addEventListener('change', (e) => {
      const customGroup = document.getElementById('custom-category-group');
      customGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
    });

    document.getElementById('new-post-escala-type').addEventListener('change', (e) => {
      this.updateEscalaUI(e.target.value);
      if (e.target.value === '24h' || e.target.value === 'hibrido') {
        const d = document.getElementById('new-post-alert-diurno');
        const n = document.getElementById('new-post-alert-noturno');
        if (!d.value) d.value = '04:00';
        if (!n.value) n.value = '17:00';
      }
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });
  }

}

// Initialize app when DOM is ready
const app = new QTIApp();
window.app = app;
document.addEventListener('DOMContentLoaded', () => app.init());
