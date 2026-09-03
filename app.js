const DEFAULT_POSTS = [
  // Segurança Econ
  { id: 'econ_giovanni', name: 'Giovanni Gronchi', category: 'Segurança Econ', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
  { id: 'econ_mascote', name: 'Mascote', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'econ_tumiaru', name: 'Tumiaru', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'econ_sabara', name: 'Sabará', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'econ_diadema', name: 'Diadema', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'econ_oswaldo', name: 'Oswaldo', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'econ_suzana', name: 'Suzana', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  // Segurança Nurban
  { id: 'nurban_bosque', name: 'Bosque', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
  { id: 'nurban_palmeiras', name: 'Palmeiras', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
  { id: 'nurban_cesario', name: 'Cesario', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
  { id: 'nurban_joao', name: 'Joao Ramalho', category: 'Segurança Nurban', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  { id: 'nurban_venancio', name: 'Venancio', category: 'Segurança Nurban', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '16:00' },
  // Segurança Kallas
  { id: 'kallas_central', name: 'Central Kallas', category: 'Segurança Kallas', type: 'diurno', days: [1,3,5], alertTime: '04:00' },
  // Segurança Cursino
  { id: 'cursino_terreno', name: 'Terreno Cursino', category: 'Segurança Cursino', type: 'diurno', days: [1,2,3,4,5,6], alertTime: '04:00' },
  // Limpeza
  { id: 'limp_clinica', name: 'Clinica', category: 'Limpeza', type: 'limpeza', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
  { id: 'limp_campo_belo', name: 'Campo Belo', category: 'Limpeza', type: 'limpeza', days: [3], alertTime: '04:00' },
  { id: 'limp_palmeiras', name: 'Palmeiras', category: 'Limpeza', type: 'limpeza', days: [1,2,4,5,6], alertTime: '04:00' },
  { id: 'limp_cesario', name: 'Cesario (Limpeza)', category: 'Limpeza', type: 'limpeza', days: [1,2,4,5,6], alertTime: '06:30' },
  { id: 'limp_bosque', name: 'Bosque', category: 'Limpeza', type: 'limpeza', days: [0,1,2,3,4,5,6], alertTime: '04:00' },
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

      return true;
    } catch(e) {
      console.error('Firebase init error:', e);
      return false;
    }
  }

  // Initialize and sync posts in Firebase from DEFAULT_POSTS
  async initializePosts() {
    try {
      const snapshot = await this.postsRef.once('value');
      const existingData = snapshot.val() || {};

      const updates = {};
      // Remove obsolete posts if present in DB
      if (existingData.limp_palmeiras1) updates['limp_palmeiras1'] = null;
      if (existingData.limp_palmeiras2) updates['limp_palmeiras2'] = null;

      // Ensure default posts exist & sync schedule/type definitions
      DEFAULT_POSTS.forEach(defPost => {
        if (!existingData[defPost.id]) {
          updates[defPost.id] = {
            ...defPost,
            status: 'none',
            lastUpdate: null,
            lastShiftReset: null
          };
        } else {
          // Sync definition properties without overwriting status or lastUpdate
          updates[`${defPost.id}/days`] = defPost.days;
          updates[`${defPost.id}/type`] = defPost.type;
          updates[`${defPost.id}/alertTime`] = defPost.alertTime;
          updates[`${defPost.id}/name`] = defPost.name;
          updates[`${defPost.id}/category`] = defPost.category;
        }
      });

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
  onPostsChange(callback, errorCallback) {
    if (!this.postsRef) return;
    this.postsRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      callback(data);
    }, (error) => {
      console.error('Firebase onPostsChange error:', error);
      if (errorCallback) errorCallback(error);
    });
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
      lastUpdate: new Date().toISOString()
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

  // Reset statuses for all posts
  async resetStatuses(postIds) {
    if (!this.postsRef) return;
    const updates = {};
    postIds.forEach(id => {
      updates[`${id}/status`] = 'none';
      updates[`${id}/lastUpdate`] = null;
      updates[`${id}/lastShiftReset`] = new Date().toISOString();
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
        if (parsed && Object.keys(parsed).length > 0) return parsed;
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

      // Try syncing with Firebase
      try {
        await this.firebase.initializePosts();
      } catch (err) {
        console.warn('initializePosts warning:', err);
      }

      this.firebase.onPostsChange(
        (data) => {
          if (data && Object.keys(data).length > 0) {
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

  // Check if a post is scheduled for today (day of week)
  isActiveToday(post) {
    const today = new Date().getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
    return post.days && post.days.includes(today);
  }

  // Get current shift name ('diurno' or 'noturno')
  getCurrentShift() {
    const hour = new Date().getHours();
    return (hour >= 4 && hour < 16) ? 'diurno' : 'noturno';
  }

  // Check if post is operating RIGHT NOW
  isOperatingNow(post) {
    if (!this.isActiveToday(post)) return false;

    const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();

    if (post.type === 'noturno') {
      // Night post operates from 16:00 PM (960 min) through overnight until 10:00 AM (600 min)
      return currentMinutes >= 960 || currentMinutes < 600;
    } else {
      // Day/limpeza post operates from 04:00 AM (240 min) until 22:00 PM (1320 min)
      return currentMinutes >= 240 && currentMinutes < 1320;
    }
  }

  // Check if post should flash right now
  shouldFlash(post) {
    if (!this.isOperatingNow(post)) return false;
    if (post.status && post.status !== 'none') return false;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const [alertH, alertM] = (post.alertTime || (post.type === 'noturno' ? '16:00' : '04:00')).split(':').map(Number);
    const alertTimeMinutes = alertH * 60 + alertM;

    if (post.type === 'noturno') {
      // Night post starts flashing at 16:00 (960 min) until 10:00 AM next morning (600 min)
      return currentMinutes >= alertTimeMinutes || currentMinutes < 600;
    } else {
      // Day/limpeza post starts flashing at 04:00 (240 min) or 06:30 (390 min) until 22:00 PM (1320 min)
      return currentMinutes >= alertTimeMinutes && currentMinutes < 1320;
    }
  }

  // Calculate current auto-reset key for 10:00 AM and 22:00 PM schedule
  getCurrentResetKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    if (currentMinutes >= 600 && currentMinutes < 1320) {
      // 10:00 AM (600 min) to 21:59 PM (1319 min) -> Cycle 10:00 AM
      return `${dateStr}_10:00`;
    } else if (currentMinutes >= 1320) {
      // 22:00 PM (1320 min) to 23:59 PM -> Cycle 22:00 PM
      return `${dateStr}_22:00`;
    } else {
      // 00:00 AM to 09:59 AM -> Belongs to yesterday's 22:00 PM cycle
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const yYear = yesterday.getFullYear();
      const yMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
      const yDay = String(yesterday.getDate()).padStart(2, '0');
      return `${yYear}-${yMonth}-${yDay}_22:00`;
    }
  }

  // Check and perform auto-reset at 10:00 AM and 22:00 PM
  async checkAutoReset() {
    if (!this.firebase.isConnected || !this.posts) return;

    try {
      const targetKey = this.getCurrentResetKey();
      const lastKey = await this.firebase.getLastResetKey();

      if (lastKey !== targetKey) {
        console.log(`Auto reset triggered! Previous: ${lastKey}, New target: ${targetKey}`);
        const postIds = Object.keys(this.posts);
        if (postIds.length > 0) {
          await this.firebase.resetStatuses(postIds);
        }
        await this.firebase.setLastResetKey(targetKey);
        this.showToast('🔄 Reset automático de turno (10:00 / 22:00) realizado!', 'info');
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
      if (!categories[post.category]) categories[post.category] = [];
      categories[post.category].push(post);
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

  // Create a single post card element
  createPostCard(post) {
    const isOperating = this.isOperatingNow(post);
    const card = document.createElement('div');
    card.id = `card-${post.id}`;
    card.className = `post-card${post.status !== 'none' ? ` status-${post.status.replace('_', '-')}` : ''}${!isOperating ? ' inactive' : ''}`;

    const typeLabels = { diurno: 'Diurno', noturno: 'Noturno', limpeza: 'Limpeza' };
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

    if (!isOperating) {
      displayStatusClass = 'none';
      if (!this.isActiveToday(post)) {
        displayStatusText = '⛔ Folga Hoje';
      } else if (post.type === 'noturno') {
        displayStatusText = '🌙 Turno Noturno (16h)';
      } else {
        displayStatusText = '☀️ Turno Diurno (4h)';
      }
    }

    const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let scheduleText = '';
    if (post.days && post.days.length < 7) {
      scheduleText = post.days.map(d => dayNames[d]).join(', ');
    } else {
      scheduleText = 'Todos os dias';
    }
    if (post.alertTime) {
      scheduleText += ` · Alerta: ${post.alertTime}`;
    }

    let lastUpdateText = '';
    if (post.lastUpdate) {
      const date = new Date(post.lastUpdate);
      lastUpdateText = `Atualizado: ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    }

    const disabledAttr = !isOperating ? 'disabled' : '';

    card.innerHTML = `
      <button class="btn-delete-post" onclick="app.confirmDelete('${post.id}', '${post.name}')" title="Deletar posto">✕</button>
      <div class="post-header">
        <span class="post-name">${post.name}</span>
        <span class="post-type-badge ${post.type}">${typeLabels[post.type] || post.type}</span>
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

    // 1. Instant local update
    this.posts[postId].status = newStatus;
    this.posts[postId].lastUpdate = new Date().toISOString();
    localStorage.setItem('qti_posts', JSON.stringify(this.posts));
    this.renderPosts();
    this.checkAlerts();

    // 2. Background sync with Firebase
    try {
      await this.firebase.updateStatus(postId, newStatus);
    } catch (err) {
      console.warn('Firebase status update failed, saved locally:', err);
      if (err && err.message && (err.message.includes('permission_denied') || err.message.includes('Permission denied'))) {
        this.showPermissionErrorBanner();
      }
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
      try {
        await this.firebase.deletePost(postId);
      } catch (e) {
        console.warn('Delete failed in Firebase:', e);
      }
      overlay.classList.remove('active');
      this.showToast(`Posto "${postName}" deletado`, 'success');
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
        await this.firebase.resetStatuses(postIds);
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

  // Show add post modal
  showAddPostModal() {
    document.getElementById('add-post-modal').classList.add('active');
    document.getElementById('new-post-name').value = '';
    document.getElementById('new-post-category').value = 'Segurança Econ';
    document.getElementById('new-post-type').value = 'diurno';
    document.getElementById('new-post-alert').value = '04:00';
    document.querySelectorAll('.day-cb').forEach(cb => cb.checked = true);
  }

  hideAddPostModal() {
    document.getElementById('add-post-modal').classList.remove('active');
  }

  // Add new post from form
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

    const type = document.getElementById('new-post-type').value;
    const alertTime = document.getElementById('new-post-alert').value;

    const days = [];
    document.querySelectorAll('.day-cb:checked').forEach(cb => {
      days.push(parseInt(cb.value));
    });

    if (days.length === 0) {
      this.showToast('Selecione pelo menos um dia', 'error');
      return;
    }

    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_') + '_' + Date.now();

    const post = { id, name, category: finalCategory, type, days, alertTime, status: 'none', lastUpdate: null };
    this.posts[id] = post;
    localStorage.setItem('qti_posts', JSON.stringify(this.posts));
    this.renderPosts();

    try {
      await this.firebase.addPost(post);
    } catch (e) {
      console.warn('Firebase addPost failed:', e);
    }

    this.hideAddPostModal();
    this.showToast(`Posto "${name}" adicionado com sucesso`, 'success');
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

    document.getElementById('new-post-type').addEventListener('change', (e) => {
      const alertInput = document.getElementById('new-post-alert');
      if (e.target.value === 'noturno') {
        alertInput.value = '16:00';
      } else {
        alertInput.value = '04:00';
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
