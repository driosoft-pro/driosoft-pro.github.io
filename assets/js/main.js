// ============================================
// TOGGLE DE TEMA - Solo icono
// ============================================
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');

  if (!btn) return;

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
