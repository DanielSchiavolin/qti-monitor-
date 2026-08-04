const DEFAULT_POSTS = [
  // Segurança Econ
  { id: 'econ_giovanni', name: 'Giovanni Gronchi', category: 'Segurança Econ', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'econ_mascote', name: 'Mascote', category: 'Segurança Econ', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'econ_tumiaru', name: 'Tumiaru', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  { id: 'econ_sabara', name: 'Sabará', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  { id: 'econ_diadema', name: 'Diadema', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  { id: 'econ_oswaldo', name: 'Oswaldo', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  { id: 'econ_suzana', name: 'Suzana', category: 'Segurança Econ', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  // Segurança Nurban
  { id: 'nurban_bosque', name: 'Bosque', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'nurban_palmeiras', name: 'Palmeiras', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'nurban_cesario', name: 'Cesario', category: 'Segurança Nurban', type: 'diurno', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'nurban_joao', name: 'Joao Ramalho', category: 'Segurança Nurban', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  { id: 'nurban_venancio', name: 'Venancio', category: 'Segurança Nurban', type: 'noturno', days: [0,1,2,3,4,5,6], alertTime: '18:00' },
  // Segurança Kallas
  { id: 'kallas_central', name: 'Central Kallas', category: 'Segurança Kallas', type: 'diurno', days: [1,3,5], alertTime: '06:00' },
  // Segurança Cursino
  { id: 'cursino_terreno', name: 'Terreno Cursino', category: 'Segurança Cursino', type: 'diurno', days: [1,2,3,4,5,6], alertTime: '06:00' },
  // Limpeza
  { id: 'limp_clinica', name: 'Clinica', category: 'Limpeza', type: 'limpeza', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'limp_campo_belo', name: 'Campo Belo', category: 'Limpeza', type: 'limpeza', days: [3], alertTime: '06:00' },
  { id: 'limp_palmeiras1', name: 'Palmeiras 1', category: 'Limpeza', type: 'limpeza', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
  { id: 'limp_palmeiras2', name: 'Palmeiras 2', category: 'Limpeza', type: 'limpeza', days: [0,1,2,4,5,6], alertTime: '06:00' },
  { id: 'limp_cesario', name: 'Cesario (Limpeza)', category: 'Limpeza', type: 'limpeza', days: [1,2,4,5,6], alertTime: '06:30' },
  { id: 'limp_bosque', name: 'Bosque', category: 'Limpeza', type: 'limpeza', days: [0,1,2,3,4,5,6], alertTime: '06:00' },
];

class SoundManager {
  constructor() {
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  // Red - sem contato: Low warning buzz (200Hz, 150ms, slight distortion feel)
  playSemContato() {
    this.init();
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

  // Yellow - QTI: Medium notification blip (440Hz + 550Hz, 200ms, double beep)
  playQTI() {
    this.init();
    const ctx = this.audioCtx;
    // First beep
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
    // Second beep
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

  // Green - chegou: Positive ascending chime (600Hz -> 800Hz -> 1000Hz, cheerful)
  playChegou() {
    this.init();
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
      this.isConnected = true;

      // Monitor connection
      this.db.ref('.info/connected').on('value', (snap) => {
        this.isConnected = snap.val() === true;
        document.getElementById('connection-status').className = this.isConnected ? 'conn-dot connected' : 'conn-dot disconnected';
        document.getElementById('connection-text').textContent = this.isConnected ? 'Online' : 'Offline';
      });

      return true;
    } catch(e) {
      console.error('Firebase init error:', e);
      return false;
    }
  }

  // Initialize posts in Firebase from DEFAULT_POSTS
  async initializePosts() {
    const snapshot = await this.postsRef.once('value');
    if (!snapshot.exists()) {
      const postsData = {};
      DEFAULT_POSTS.forEach(p => {
        postsData[p.id] = {
          ...p,
          status: 'none',
          lastUpdate: null,
          lastShiftReset: null
        };
      });
      await this.postsRef.set(postsData);
    }
  }

  // Listen for real-time changes
  onPostsChange(callback) {
    this.postsRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      callback(data);
    });
  }

  // Update post status
  async updateStatus(postId, status) {
    await this.postsRef.child(postId).update({
      status: status,
      lastUpdate: new Date().toISOString()
    });
  }

  // Add new post
  async addPost(post) {
    await this.postsRef.child(post.id).set({
      ...post,
      status: 'none',
      lastUpdate: null,
      lastShiftReset: null
    });
  }

  // Delete post
  async deletePost(postId) {
    await this.postsRef.child(postId).remove();
  }

  // Reset statuses for a shift
  async resetStatuses(postIds) {
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

  // Initialize the app
  async init() {
    this.startClock();
    this.setupEventListeners();

    // Use saved config or default config
    const config = this.firebase.getConfig() || QTIApp.DEFAULT_CONFIG;
    const success = this.firebase.init(config);
    if (success) {
      this.firebase.saveConfig(config);
      await this.firebase.initializePosts();
      this.firebase.onPostsChange((data) => this.onDataUpdate(data));
      this.startAlertChecker();
    } else {
      this.showSetupModal();
    }
  }

  // Clock update
  startClock() {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      document.getElementById('clock').textContent = timeStr;

      const dateStr = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
      document.getElementById('current-date').textContent = dateStr;
    };
    updateClock();
    this.clockInterval = setInterval(updateClock, 1000);
  }

  // Check if a post should be active today
  isActiveToday(post) {
    const today = new Date().getDay(); // 0=Sunday
    return post.days && post.days.includes(today);
  }

  // Get the current shift type based on time
  getCurrentShift() {
    const hour = new Date().getHours();
    // 6:00-17:59 = morning/day shift, 18:00-5:59 = night shift
    return (hour >= 6 && hour < 18) ? 'diurno' : 'noturno';
  }

  // Should this post be flashing?
  shouldFlash(post) {
    if (!this.isActiveToday(post)) return false;
    if (post.status !== 'none') return false;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeMinutes = hours * 60 + minutes;

    // Parse alert time
    const [alertH, alertM] = (post.alertTime || '06:00').split(':').map(Number);
    const alertTimeMinutes = alertH * 60 + alertM;

    if (post.type === 'limpeza') {
      // Limpeza: only flash after morning alert time (alertTime, usually 6:00, or 6:30 for Cesario)
      // Flash from alertTime until 12:00 (noon) - reasonable window for morning limpeza
      return currentTimeMinutes >= alertTimeMinutes && currentTimeMinutes < 720;
    } else if (post.type === 'noturno') {
      // Noturno: only flash after 18:00
      return currentTimeMinutes >= 1080; // 18:00 = 1080 minutes
    } else {
      // Diurno: flash after 6:00 during day shift
      if (currentTimeMinutes >= 360 && currentTimeMinutes < 1080) {
        return currentTimeMinutes >= alertTimeMinutes;
      }
      return false;
    }
  }

  // Start checking for alerts every 30 seconds
  startAlertChecker() {
    this.checkAlerts();
    this.alertInterval = setInterval(() => this.checkAlerts(), 30000);
  }

  checkAlerts() {
    let pendingCount = 0;
    Object.values(this.posts).forEach(post => {
      const card = document.getElementById(`card-${post.id}`);
      if (!card) return;

      if (this.shouldFlash(post)) {
        card.classList.add('flashing');
        pendingCount++;
      } else {
        card.classList.remove('flashing');
      }
    });

    // Update pending badge
    const badge = document.getElementById('pending-count');
    if (pendingCount > 0) {
      badge.textContent = `${pendingCount} pendente${pendingCount > 1 ? 's' : ''}`;
      badge.className = 'pending-badge';
    } else {
      badge.textContent = '✓ Todos OK';
      badge.className = 'pending-badge all-clear';
    }
  }

  // Handle real-time data updates from Firebase
  onDataUpdate(data) {
    this.posts = data;
    this.renderPosts();
    this.checkAlerts();
  }

  // Render all posts grouped by category
  renderPosts() {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    // Group posts by category
    const categories = {};
    Object.values(this.posts).forEach(post => {
      if (!categories[post.category]) categories[post.category] = [];
      categories[post.category].push(post);
    });

    // Category icons
    const categoryIcons = {
      'Segurança Econ': '🛡️',
      'Segurança Nurban': '🏢',
      'Segurança Kallas': '🔐',
      'Segurança Cursino': '📍',
      'Limpeza': '🧹'
    };

    // Render each category
    const categoryOrder = ['Segurança Econ', 'Segurança Nurban', 'Segurança Kallas', 'Segurança Cursino', 'Limpeza'];
    // Include any categories not in the predefined order
    Object.keys(categories).forEach(cat => {
      if (!categoryOrder.includes(cat)) categoryOrder.push(cat);
    });

    categoryOrder.forEach(catName => {
      const posts = categories[catName];
      if (!posts || posts.length === 0) return;

      const section = document.createElement('div');
      section.className = 'category-section';

      // Count active posts
      const activeCount = posts.filter(p => this.isActiveToday(p)).length;

      section.innerHTML = `
        <div class="category-header">
          <div class="category-icon">${categoryIcons[catName] || '📌'}</div>
          <h2 class="category-title">${catName}</h2>
          <span class="category-count">${activeCount}/${posts.length} ativos hoje</span>
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
    const card = document.createElement('div');
    card.id = `card-${post.id}`;
    card.className = `post-card${post.status !== 'none' ? ` status-${post.status.replace('_', '-')}` : ''}${!this.isActiveToday(post) ? ' inactive' : ''}`;

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

    // Format schedule info
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

    // Format last update time
    let lastUpdateText = '';
    if (post.lastUpdate) {
      const date = new Date(post.lastUpdate);
      lastUpdateText = `Atualizado: ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    }

    card.innerHTML = `
      <button class="btn-delete-post" onclick="app.confirmDelete('${post.id}', '${post.name}')" title="Deletar posto">✕</button>
      <div class="post-header">
        <span class="post-name">${post.name}</span>
        <span class="post-type-badge ${post.type}">${typeLabels[post.type] || post.type}</span>
      </div>
      <div class="post-schedule">${scheduleText}</div>
      <div class="post-status-display ${statusClasses[post.status]}">${statusLabels[post.status]}</div>
      <div class="status-buttons">
        <button class="btn-status btn-red${post.status === 'sem_contato' ? ' active' : ''}" onclick="app.setStatus('${post.id}', 'sem_contato')">
          🔴 Sem Contato
        </button>
        <button class="btn-status btn-yellow${post.status === 'qti' ? ' active' : ''}" onclick="app.setStatus('${post.id}', 'qti')">
          🟡 QTI
        </button>
        <button class="btn-status btn-green${post.status === 'chegou' ? ' active' : ''}" onclick="app.setStatus('${post.id}', 'chegou')">
          🟢 Chegou
        </button>
      </div>
      ${lastUpdateText ? `<div class="post-last-update">${lastUpdateText}</div>` : ''}
    `;

    return card;
  }

  // Set status for a post (toggle: click same status to clear)
  async setStatus(postId, status) {
    const currentStatus = this.posts[postId] ? this.posts[postId].status : 'none';
    if (currentStatus === status) {
      // Same status clicked - reset to none
      await this.firebase.updateStatus(postId, 'none');
    } else {
      this.sound.playForStatus(status);
      await this.firebase.updateStatus(postId, status);
    }
  }

  // Confirm delete
  confirmDelete(postId, postName) {
    const overlay = document.getElementById('confirm-overlay');
    document.getElementById('confirm-message').textContent = `Tem certeza que deseja deletar o posto "${postName}"?`;
    overlay.classList.add('active');

    document.getElementById('confirm-yes').onclick = async () => {
      await this.firebase.deletePost(postId);
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
      await this.firebase.resetStatuses(postIds);
      overlay.classList.remove('active');
      this.showToast('Todos os status foram resetados', 'info');
    };

    document.getElementById('confirm-no').onclick = () => {
      overlay.classList.remove('active');
    };
  }

  // Export to WhatsApp
  exportWhatsApp() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('pt-BR');
    const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let message = `🛡️ *FRONT SECURITY - Status Geral*\n`;
    message += `📅 ${dateStr} às ${timeStr}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n\n`;

    const categories = {};
    Object.values(this.posts).forEach(post => {
      if (!this.isActiveToday(post)) return; // Skip inactive posts
      if (!categories[post.category]) categories[post.category] = [];
      categories[post.category].push(post);
    });

    const statusEmojis = {
      'none': '⚪ Aguardando',
      'sem_contato': '🔴 Sem Contato',
      'qti': '🟡 QTI',
      'chegou': '🟢 Chegou'
    };

    Object.entries(categories).forEach(([catName, posts]) => {
      message += `*${catName}*\n`;
      posts.forEach(post => {
        message += `  ${statusEmojis[post.status]} - ${post.name}\n`;
      });
      message += `\n`;
    });

    // Summary
    const allActive = Object.values(this.posts).filter(p => this.isActiveToday(p));
    const chegou = allActive.filter(p => p.status === 'chegou').length;
    const qti = allActive.filter(p => p.status === 'qti').length;
    const semContato = allActive.filter(p => p.status === 'sem_contato').length;
    const pending = allActive.filter(p => p.status === 'none').length;

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📊 *Resumo:*\n`;
    message += `🟢 Chegou: ${chegou} | 🟡 QTI: ${qti}\n`;
    message += `🔴 Sem Contato: ${semContato} | ⚪ Pendente: ${pending}\n`;
    message += `Total Ativos: ${allActive.length}\n`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
  }

  // Show add post modal
  showAddPostModal() {
    document.getElementById('add-post-modal').classList.add('active');
    document.getElementById('new-post-name').value = '';
    document.getElementById('new-post-category').value = 'Segurança Econ';
    document.getElementById('new-post-type').value = 'diurno';
    document.getElementById('new-post-alert').value = '06:00';
    // Check all days by default
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
    // Allow custom category
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

    // Generate ID
    const id = name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_') + '_' + Date.now();

    const post = { id, name, category: finalCategory, type, days, alertTime };
    await this.firebase.addPost(post);
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
      // Clean up Firebase's JavaScript format to valid JSON
      // Remove "const firebaseConfig = " prefix if present
      input = input.replace(/^(const|var|let)\s+\w+\s*=\s*/, '');
      // Remove trailing semicolon
      input = input.replace(/;\s*$/, '');
      // Replace single quotes with double quotes
      input = input.replace(/'/g, '"');
      // Add quotes to unquoted keys (e.g., apiKey: -> "apiKey":)
      input = input.replace(/(\s*)(\w+)\s*:/g, '$1"$2":');
      // Fix double-quoted keys that were already quoted
      input = input.replace(/""/g, '"');
      // Remove trailing commas before closing brace
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

    // Category select change - show/hide custom input
    document.getElementById('new-post-category').addEventListener('change', (e) => {
      const customGroup = document.getElementById('custom-category-group');
      customGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
    });

    // Type select change - update default alert time
    document.getElementById('new-post-type').addEventListener('change', (e) => {
      const alertInput = document.getElementById('new-post-alert');
      if (e.target.value === 'noturno') {
        alertInput.value = '18:00';
      } else {
        alertInput.value = '06:00';
      }
    });

    // Close modals on overlay click
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
document.addEventListener('DOMContentLoaded', () => app.init());
