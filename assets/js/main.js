<<<<<<< HEAD
// Animación de aparición suave para las tarjetas de proyectos
document.addEventListener('DOMContentLoaded', () => {
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
=======
// ============================================
// TOGGLE DE TEMA - Solo icono
// ============================================
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');

  if (!btn) return;
>>>>>>> 50b0d6d03ded9a127e413a48ccbcb9469605291e

  // Cargar tema guardado
  const saved = localStorage.getItem('theme') || 'dark';

  if (saved === 'light') {
    document.body.classList.add('light-theme');
    btn.textContent = '☀️';
    btn.title = 'Cambiar a tema oscuro / Switch to dark theme';
  } else {
    btn.title = 'Cambiar a tema claro / Switch to light theme';
  }

  // Click handler
  btn.onclick = function () {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const theme = isLight ? 'light' : 'dark';

    localStorage.setItem('theme', theme);
    btn.textContent = isLight ? '☀️' : '🌙';
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
    btn.textContent = 'en';
    btn.title = 'Cambiar a español / Switch to Spanish';
  } else {
    btn.textContent = 'es';
    btn.title = 'Cambiar a inglés / Switch to English';
  }

  // Click handler
  btn.onclick = function () {
    const currentLang = localStorage.getItem('lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';

<<<<<<< HEAD
  function setTheme(theme, withTransition = false) {
    if (withTransition) {
      body.classList.add('theme-transitioning');
    }

    if (theme === 'light') {
      body.classList.add('light');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('light');
      themeToggle.textContent = '🌙';
    }

    if (withTransition) {
      setTimeout(() => {
        body.classList.remove('theme-transitioning');
      }, 600);
    }
  }

  // Inicializar tema sin transición
  if (savedTheme) {
    setTheme(savedTheme, false);
  } else if (!prefersDark) {
    setTheme('light', false);
  }

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.contains('light');
    const newTheme = isLight ? 'dark' : 'light';
    setTheme(newTheme, true);
    localStorage.setItem('theme', newTheme);
  });
}

// Agregar vistas previas a la navegación
function addNavigationPreviews() {
  const currentLang = localStorage.getItem('language') || 'es';
  const navLinks = document.querySelectorAll('nav a');
  
  const previewsData = {
    es: {
      'index.html': {
        emoji: '🏠',
        title: 'Inicio',
        description: 'Página principal con información destacada sobre mis habilidades y experiencia.'
      },
      'about.html': {
        emoji: '👨‍💻',
        title: 'Sobre mí',
        description: 'Conoce mi trayectoria profesional, educación y certificaciones.'
      },
      'projects.html': {
        emoji: '💼',
        title: 'Proyectos',
        description: 'Explora mi portafolio de proyectos en IA, desarrollo web y automatización.'
      },
      'contact.html': {
        emoji: '📧',
        title: 'Contacto',
        description: 'Conecta conmigo para colaboraciones, consultas o simplemente conversar sobre tecnología.'
      }
    },
    en: {
      'index.html': {
        emoji: '🏠',
        title: 'Home',
        description: 'Main page with featured information about my skills and experience.'
      },
      'about.html': {
        emoji: '👨‍💻',
        title: 'About',
        description: 'Learn about my professional career, education and certifications.'
      },
      'projects.html': {
        emoji: '💼',
        title: 'Projects',
        description: 'Explore my portfolio of projects in AI, web development and automation.'
      },
      'contact.html': {
        emoji: '📧',
        title: 'Contact',
        description: 'Connect with me for collaborations, inquiries or just to talk about technology.'
      }
    }
  };

  const previews = previewsData[currentLang];

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const previewData = previews[href];
    
    if (previewData) {
      // Crear el elemento de vista previa
      const preview = document.createElement('div');
      preview.className = 'nav-preview';
      
      preview.innerHTML = `
        <div class="nav-preview-image">${previewData.emoji}</div>
        <h4>${previewData.title}</h4>
        <p>${previewData.description}</p>
      `;
      
      link.appendChild(preview);
    }
  });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Esperar un momento para asegurar que el header está cargado
  setTimeout(addNavigationPreviews, 100);
});
=======
    applyLanguage(newLang);
    localStorage.setItem('lang', newLang);

    // Actualizar icono
    btn.textContent = newLang === 'es' ? 'es' : 'en';
    btn.title = newLang === 'es' ? 'Cambiar a inglés / Switch to English' : 'Cambiar a español / Switch to Spanish';
  };
}

function applyLanguage(lang) {
  // Cambiar textos con data attributes
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
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
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar idioma guardado ANTES de que se vea la página
  const savedLang = localStorage.getItem('lang') || 'es';
  applyLanguage(savedLang);

  // Aplicar tema guardado ANTES de que se vea la página
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  // Inicializar botones después de cargar templates
  setTimeout(() => {
    initThemeToggle();
    initLangToggle();
  }, 100);

  setTimeout(() => {
    initThemeToggle();
    initLangToggle();
  }, 300);

  updateYear();
});
>>>>>>> 50b0d6d03ded9a127e413a48ccbcb9469605291e
