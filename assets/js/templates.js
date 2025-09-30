// funcion para cargar plantillas HTML dinámicamente
function loadTemplate(id, url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    });
}

// crear un evento para cargar las plantillas al inicio
document.addEventListener('DOMContentLoaded', () => {
  let mainLoaded = false;
  let headerLoaded = false;
  let footerLoaded = false;

  // Función de inicialización única
  const finalizeInit = () => {
    // 1. Inicializar sistema de idiomas
    // Solo se llama a initLanguageSystem() cuando header, main, y footer estén cargados.
    // Esto garantiza que todos los elementos con data-i18n estén en el DOM.
    if (headerLoaded && mainLoaded && footerLoaded && typeof initLanguageSystem === 'function') {
      initLanguageSystem();
    }
    
    // 2. Agregar vistas previas
    // Se agregan después de que el header esté cargado y las traducciones iniciales se apliquen.
    if (headerLoaded && typeof addNavigationPreviews === 'function') {
      // Un pequeño timeout por seguridad para que el DOM esté completamente listo
      setTimeout(() => {
        addNavigationPreviews();
      }, 100);
    }
  };


  loadTemplate('header-container', 'assets/templates/header.html', () => {
    // Inicializar tema
    if (typeof themeToggleInit === 'function') themeToggleInit();
    
    headerLoaded = true;
    finalizeInit();
  });
  
  loadTemplate('footer-container', 'assets/templates/footer.html', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    
    footerLoaded = true;
    finalizeInit();
  });

  // Cargar el main dinámicamente según la página
  const path = window.location.pathname;
  let mainTemplate = '';
  if (path.endsWith('index.html') || path === '/' || path.endsWith('/')) {
    mainTemplate = 'assets/templates/main-index.html';
  } else if (path.endsWith('about.html')) {
    mainTemplate = 'assets/templates/main-about.html';
  } else if (path.endsWith('projects.html')) {
    mainTemplate = 'assets/templates/main-projects.html';
  } else if (path.endsWith('contact.html')) {
    mainTemplate = 'assets/templates/main-contact.html';
  }
  
  if (mainTemplate) {
    loadTemplate('main-container', mainTemplate, () => {
      // Ya no es necesario aplicar traducciones aquí, finalizeInit() lo hará.
      mainLoaded = true;
      finalizeInit();
    });
  }
});