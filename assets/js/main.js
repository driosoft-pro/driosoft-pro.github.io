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

  // Inicializar el botón de tema si ya está en el DOM
  if (document.getElementById('theme-toggle')) {
    themeToggleInit();
  }

  // Actualizar año en el footer automáticamente
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Función global para inicializar el botón de tema (usada por templates.js)
function themeToggleInit() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

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