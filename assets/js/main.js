// ============================================
// TOGGLE DE TEMA - Versión simplificada
// ============================================
function initThemeToggle() {
  console.log('🔍 Buscando botón de tema...');
  const btn = document.getElementById('theme-toggle');

  if (!btn) {
    console.error('❌ Botón de tema NO encontrado');
    return;
  }

  console.log('✅ Botón encontrado:', btn);

  // Cargar tema guardado
  const saved = localStorage.getItem('theme') || 'dark';
  console.log('📦 Tema guardado:', saved);

  if (saved === 'light') {
    document.body.classList.add('light-theme');
    btn.textContent = '☀️ Tema';
    console.log('🌞 Aplicado tema claro');
  }

  // Click handler
  btn.onclick = function () {
    console.log('🖱️ Click en botón de tema');
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    const theme = isLight ? 'light' : 'dark';

    localStorage.setItem('theme', theme);
    btn.textContent = isLight ? '☀️ Tema' : '🌙 Tema';

    console.log('✅ Tema cambiado a:', theme);
    console.log('📝 Clases del body:', document.body.className);
  };

  console.log('✅ Toggle inicializado correctamente');
}

// ============================================
// TOGGLE DE IDIOMA
// ============================================
function initLangToggle() {
  console.log('🔍 Buscando botón de idioma...');
  const btn = document.getElementById('lang-toggle');

  if (!btn) {
    console.error('❌ Botón de idioma NO encontrado');
    return;
  }

  console.log('✅ Botón de idioma encontrado');

  // Cargar idioma guardado
  const savedLang = localStorage.getItem('lang') || 'es';
  console.log('📦 Idioma guardado:', savedLang);

  // Aplicar idioma guardado
  if (savedLang === 'en') {
    applyLanguage('en');
    btn.textContent = '🌐 EN';
  }

  // Click handler
  btn.onclick = function () {
    const currentLang = localStorage.getItem('lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';

    applyLanguage(newLang);
    localStorage.setItem('lang', newLang);
    btn.textContent = newLang === 'es' ? '🌐 ES' : '🌐 EN';

    console.log('✅ Idioma cambiado a:', newLang);
  };

  console.log('✅ Toggle de idioma inicializado');
}

function applyLanguage(lang) {
  // Cambiar textos con data attributes
  document.querySelectorAll('[data-es][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
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
console.log('📄 Script main.js cargado');

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 DOM listo');

  // Intentar varias veces
  initThemeToggle();
  initLangToggle();

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
