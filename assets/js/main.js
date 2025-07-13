// main.js
// Archivo preparado para futuras mejoras de interactividad y animaciones

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

  function setTheme(theme) {
    if (theme === 'light') {
      body.classList.add('light');
      themeToggle.textContent = '☀️';
    } else {
      body.classList.remove('light');
      themeToggle.textContent = '🌙';
    }
  }

  // Inicializar tema
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (!prefersDark) {
    setTheme('light');
  }
  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light');
    setTheme(isLight ? 'light' : 'dark');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}
