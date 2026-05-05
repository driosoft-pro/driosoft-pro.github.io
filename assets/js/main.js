// ============================================
// TOGGLE DE TEMA - Solo icono
// ============================================
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');

  if (!btn) return;

  // Cargar tema guardado
  const saved = localStorage.getItem('theme') || 'dark';

  if (saved === 'light') {
    document.body.classList.add('light');
    btn.innerHTML = '<i class="fas fa-sun"></i>';
    btn.title = 'Cambiar a tema oscuro / Switch to dark theme';
  } else {
    btn.innerHTML = '<i class="fas fa-moon"></i>';
    btn.title = 'Cambiar a tema claro / Switch to light theme';
  }

  // Click handler
  btn.onclick = function () {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    const theme = isLight ? 'light' : 'dark';

    localStorage.setItem('theme', theme);
    btn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    btn.title = isLight ? 'Cambiar a tema oscuro / Switch to dark theme' : 'Cambiar a tema claro / Switch to light theme';
  };
}

// ============================================
// TOGGLE DE IDIOMA - Solo icono
// ============================================
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');

  if (!btn) return;

  // Cargar idioma guardado
  const savedLang = localStorage.getItem('lang') || 'es';

  // Aplicar idioma guardado inmediatamente
  applyLanguage(savedLang);

  // Actualizar icono según idioma
  if (savedLang === 'en') {
    btn.textContent = 'EN';
    btn.title = 'Cambiar a español / Switch to Spanish';
  } else {
    btn.textContent = 'ES';
    btn.title = 'Cambiar a inglés / Switch to English';
  }

  // Click handler
  btn.onclick = function () {
    const currentLang = localStorage.getItem('lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';

    applyLanguage(newLang);
    localStorage.setItem('lang', newLang);

    // Actualizar icono
    btn.textContent = newLang === 'es' ? 'ES' : 'EN';
    btn.title = newLang === 'es' ? 'Cambiar a inglés / Switch to English' : 'Cambiar a español / Switch to Spanish';
  };
}

function applyLanguage(lang) {
  // Cambiar textos
  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = text;
      } else {
        el.textContent = text;
      }
    }
  });
  
  // Actualizar títulos (tooltips)
  document.querySelectorAll('[title], [data-title-es]').forEach(el => {
    const esTitle = el.getAttribute('data-title-es');
    const enTitle = el.getAttribute('data-title-en');
    
    if (esTitle && enTitle) {
      el.title = lang === 'es' ? esTitle : enTitle;
    } else if (el.dataset.es && el.dataset.en) {
      el.title = lang === 'es' ? el.dataset.es : el.dataset.en;
    }
  });
}

// ============================================
// OTRAS FUNCIONES
// ============================================
function updateYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

// ============================================
// ANIMACIÓN DE TARJETAS DE PROYECTOS
// ============================================
function animateProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s, transform 0.7s';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 200 + i * 120);
  });
}

// ============================================
// NIRI SPA LOGIC - Column Windows
// ============================================
async function openWindow(templateName) {
  const container = document.getElementById('main-container');
  if (!container) return;

  // Clear or append? User said "like Niri", which means columns.
  // For a portfolio, maybe we clear or just handle the focus.
  // Let's implement clearing for now but keeping the Niri style.
  
  const content = await loadTemplateContent(`assets/templates/${templateName}.html`);
  if (content) {
    container.innerHTML = content;
    applyLanguage(localStorage.getItem('lang') || 'es');
    
    // Si es proyectos, cargar proyectos
    if (templateName === 'main-projects') {
      if (window.loadProjects) window.loadProjects();
    }
    
    // Update active link in nav
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').includes(templateName.replace('main-', ''))) {
        a.classList.add('active');
      }
    });
  }
}

async function loadTemplateContent(url) {
  try {
    const response = await fetch(url);
    return await response.text();
  } catch (err) {
    console.error('Error loading template:', err);
    return null;
  }
}

// Intercept navigation
function initNavigation() {
  document.querySelectorAll('nav a, .hero-btns a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.endsWith('.html') && !href.startsWith('http')) {
        e.preventDefault();
        const templateName = 'main-' + href.replace('.html', '');
        openWindow(templateName);
        // Push state to URL without reloading
        history.pushState({ templateName }, '', href);
      }
    });
  });
}

window.onpopstate = (e) => {
  if (e.state && e.state.templateName) {
    openWindow(e.state.templateName);
  } else {
    openWindow('main-index');
  }
};

// ============================================
// QUICK LAUNCH LOGIC
// ============================================
function initQuickLaunch() {
  const qlIcons = document.querySelectorAll('.ql-icon');
  qlIcons.forEach(icon => {
    icon.onclick = () => {
      const target = icon.dataset.target;
      const templateName = 'main-' + target.replace('.html', '');
      window.openWindow(templateName);
      history.pushState({ templateName }, '', target);
    };
  });
}

// ============================================
// ROFI MENU LOGIC
// ============================================
function initRofiMenu() {
  const trigger = document.getElementById('rofi-trigger');
  const overlay = document.getElementById('rofi-overlay');
  const search = document.getElementById('rofi-search');
  const items = document.querySelectorAll('.rofi-item');

  if (!trigger || !overlay) return;

  trigger.onclick = () => {
    overlay.style.display = 'flex';
    search.focus();
  };

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.style.display = 'none';
  };

  items.forEach(item => {
    item.onclick = () => {
      const target = item.dataset.target;
      const templateName = 'main-' + target.replace('.html', '');
      window.openWindow(templateName);
      history.pushState({ templateName }, '', target);
      overlay.style.display = 'none';
    };
  });

  // Search filtering
  search.oninput = () => {
    const val = search.value.toLowerCase();
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(val) ? 'flex' : 'none';
    });
  };

  // Close on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.style.display = 'none';
  });
}

// ============================================
// CALENDAR LOGIC
// ============================================
function initCalendar() {
  const clock = document.getElementById('tray-clock');
  const popup = document.getElementById('calendar-popup');
  const grid = document.getElementById('cal-grid');

  if (!clock || !popup) return;

  clock.onclick = (e) => {
    e.stopPropagation();
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    if (popup.style.display === 'block') generateCalendar();
  };

  document.addEventListener('click', () => popup.style.display = 'none');
  popup.onclick = (e) => e.stopPropagation();

  function generateCalendar() {
    const now = new Date();
    const lang = document.getElementById('lang-toggle')?.textContent === 'ES' ? 'es-ES' : 'en-US';
    const month = now.toLocaleString(lang, { month: 'long' });
    const year = now.getFullYear();
    document.getElementById('cal-month').textContent = `${month.toUpperCase()} ${year}`;

    const firstDay = new Date(year, now.getMonth(), 1).getDay();
    const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();

    grid.innerHTML = '';
    // Empty days
    for (let i = 0; i < firstDay; i++) {
      grid.innerHTML += '<div class="cal-day empty"></div>';
    }
    // Days
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === now.getDate() ? 'today' : '';
      grid.innerHTML += `<div class="cal-day ${isToday}">${d}</div>`;
    }
  }
}

// ============================================
// WINDOW CONTROLS & INTERACTIVITY
// ============================================
function initWindowInteractivity() {
  const windows = document.querySelectorAll('.window');
  
  windows.forEach(win => {
    if (win.dataset.initialized) return;
    win.dataset.initialized = "true";

    const header = win.querySelector('.window-header');
    const closeBtn = win.querySelector('.dot.red');
    const minBtn = win.querySelector('.dot.yellow');
    const maxBtn = win.querySelector('.dot.green');
    
    if (closeBtn) closeBtn.onclick = (e) => { e.stopPropagation(); win.style.display = 'none'; };
    if (minBtn) minBtn.onclick = (e) => { e.stopPropagation(); win.classList.toggle('minimized'); };
    if (maxBtn) maxBtn.onclick = (e) => { e.stopPropagation(); win.classList.toggle('maximized'); };
    
    win.addEventListener('mousedown', () => {
      document.querySelectorAll('.window').forEach(w => w.classList.remove('focused'));
      win.classList.add('focused');
    });
    
    header.onmousedown = (e) => {
      if (win.classList.contains('maximized')) return;
      
      win.classList.add('focused');
      let rect = win.getBoundingClientRect();
      let shiftX = e.clientX - rect.left;
      let shiftY = e.clientY - rect.top;
      
      const topBarHeight = 48;
      const bottomBarHeight = 35;
      function moveAt(pageX, pageY) {
        let left = pageX - shiftX;
        let top = pageY - shiftY;
        
        const topBarHeight = 48;
        const bottomBarHeight = 35;
        
        // Límites horizontales
        if (left < 0) left = 0;
        if (left > window.innerWidth - win.offsetWidth) left = window.innerWidth - win.offsetWidth;

        // Límites verticales
        if (top < topBarHeight) top = topBarHeight;
        
        // RESTRICCIÓN INFERIOR: El fondo de la ventana no puede pasar la barra inferior
        if (top + win.offsetHeight > window.innerHeight - bottomBarHeight) {
           top = window.innerHeight - bottomBarHeight - win.offsetHeight;
        }
        
        // Si la ventana es más alta que el espacio disponible, fijarla arriba
        if (top < topBarHeight) top = topBarHeight;

        win.style.position = 'absolute';
        win.style.margin = '0';
        win.style.left = left + 'px';
        win.style.top = top + 'px';
      }
      
      function onMouseMove(ev) {
        moveAt(ev.pageX, ev.pageY);
      }
      
      document.addEventListener('mousemove', onMouseMove);
      
      document.onmouseup = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      };
    };
    
    header.ondragstart = () => false;

    const resizer = document.createElement('div');
    resizer.className = 'resizer';
    win.appendChild(resizer);
    
    resizer.onmousedown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const topBarHeight = 48;
      const bottomBarHeight = 35;
      
      function resize(ev) {
        let rect = win.getBoundingClientRect();
        let newWidth = ev.pageX - rect.left;
        let newHeight = ev.pageY - rect.top;
        
        const topBarHeight = 48;
        const bottomBarHeight = 35;
        
        // No pasar de la barra inferior
        if (rect.top + newHeight > window.innerHeight - bottomBarHeight) {
          newHeight = window.innerHeight - bottomBarHeight - rect.top;
        }
        
        // No ser más pequeño que el header
        if (newHeight < 40) newHeight = 40;
        if (newWidth < 200) newWidth = 200;
        
        win.style.width = newWidth + 'px';
        win.style.height = newHeight + 'px';
      }
      
      function stopResize() {
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
      }
      
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResize);
    };
  });
}

// ============================================
// WORKSPACE INDICATOR
// ============================================
function updateWorkspaceDots(templateName) {
  const dots = document.querySelectorAll('.ws-dot');
  dots.forEach(dot => dot.classList.remove('active'));
  
  const mapping = { 
    'main-index': 0, 
    'main-about': 1, 
    'main-projects': 2, 
    'main-contact': 3,
    'main-game': 4
  };
  const index = mapping[templateName] ?? 4; // 5th dot for unknown/other
  
  if (dots[index]) dots[index].classList.add('active');
}

// ============================================
// SYSTEM CLOCK
// ============================================
function updateClock() {
  const clock = document.getElementById('tray-clock');
  if (clock) {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], { hour12: false });
  }
}
setInterval(updateClock, 1000);

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  applyLanguage(savedLang);

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') document.body.classList.add('light');

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const initialTemplate = 'main-' + path.replace('.html', '');
  
  await openWindow(initialTemplate);
  
  initThemeToggle();
  initLangToggle();
  initNavigation();
  updateYear();
  updateClock();
});

// SPA Override
const originalOpenWindow = window.openWindow;
window.openWindow = async (name) => {
  const container = document.getElementById('main-container');
  if (!container) return;

  const content = await loadTemplateContent(`assets/templates/${name}.html`);
  if (content) {
    container.innerHTML = content;
    applyLanguage(localStorage.getItem('lang') || 'es');
    updateWorkspaceDots(name);
    
    if (name === 'main-projects') {
      if (window.loadProjects) window.loadProjects();
    }
    
    if (name === 'main-game') {
      initTicTacToe();
    }
    
    initWindowInteractivity();
    
    document.querySelectorAll('nav a').forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href').includes(name.replace('main-', ''))) {
        a.classList.add('active');
      }
    });
  }
};

function initTicTacToe() {
  const board = document.getElementById('ttt-board');
  const cells = document.querySelectorAll('.ttt-cell');
  const status = document.getElementById('game-status');
  const resetBtn = document.getElementById('reset-game');
  const cpuStartBtn = document.getElementById('cpu-start');
  
  if (!board || !cells || !status || !resetBtn || !cpuStartBtn) return;

  let gameState = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;
  const player = "X";
  const cpu = "O";
  
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  
  function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameState[index] !== "" || !gameActive) return;
    
    makeMove(index, player);
    if (gameActive) {
      const lang = localStorage.getItem('lang') || 'es';
      status.textContent = lang === 'en' ? "Thinking..." : "Pensando...";
      setTimeout(cpuMove, 500);
    }
  }
  
  function makeMove(index, symbol) {
    gameState[index] = symbol;
    cells[index].classList.add(symbol.toLowerCase());
    checkResult();
  }
  
  function cpuMove() {
    if (!gameActive) return;
    
    let move = findBestMove(cpu) || findBestMove(player) || randomMove();
    
    if (move !== null) {
      makeMove(move, cpu);
      if (gameActive) {
        const lang = localStorage.getItem('lang') || 'es';
        status.textContent = lang === 'en' ? "Your turn (X)" : "Tu turno (X)";
      }
    }
  }
  
  function findBestMove(symbol) {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameState[a] === symbol && gameState[b] === symbol && gameState[c] === "") return c;
      if (gameState[a] === symbol && gameState[c] === symbol && gameState[b] === "") return b;
      if (gameState[b] === symbol && gameState[c] === symbol && gameState[a] === "") return a;
    }
    return null;
  }
  
  function randomMove() {
    const available = gameState.map((v, i) => v === "" ? i : null).filter(v => v !== null);
    return available.length > 0 ? available[Math.floor(Math.random() * available.length)] : null;
  }
  
  function checkResult() {
    let roundWon = false;
    let winnerSymbol = "";
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        roundWon = true;
        winnerSymbol = gameState[a];
        break;
      }
    }
    
    if (roundWon) {
      const winner = winnerSymbol === player ? "PLAYER" : "DRZ";
      const lang = localStorage.getItem('lang') || 'es';
      if (winner === "PLAYER") {
        status.textContent = lang === 'en' ? "YOU WIN! [SYSTEM BREACHED]" : "¡GANASTE! [SISTEMA VULNERADO]";
        status.style.color = "#0f0";
      } else {
        status.textContent = lang === 'en' ? "I WIN. [ACCESS DENIED]" : "GANÉ YO. [ACCESO DENEGADO]";
        status.style.color = "#f00";
      }
      gameActive = false;
      return;
    }
    
    if (!gameState.includes("")) {
      const lang = localStorage.getItem('lang') || 'es';
      status.textContent = lang === 'en' ? "DRAW. [DATA CORRUPTED]" : "EMPATE. [DATOS CORRUPTOS]";
      gameActive = false;
    }
  }
  
  function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    const lang = localStorage.getItem('lang') || 'es';
    status.textContent = lang === 'en' ? "Your turn (X)" : "Tu turno (X)";
    status.style.color = "#0f0";
    cells.forEach(cell => {
      cell.classList.remove('x', 'o');
    });
  }
  
  function cpuStart() {
    resetGame();
    const lang = localStorage.getItem('lang') || 'es';
    status.textContent = lang === 'en' ? "Thinking..." : "Pensando...";
    setTimeout(cpuMove, 500);
  }
  
  cells.forEach(cell => cell.addEventListener('click', handleCellClick));
  resetBtn.addEventListener('click', resetGame);
  cpuStartBtn.addEventListener('click', cpuStart);
}

// Exponer funciones nuevas
window.initRofiMenu = initRofiMenu;
window.initCalendar = initCalendar;
window.initQuickLaunch = initQuickLaunch;
window.initTicTacToe = initTicTacToe;
