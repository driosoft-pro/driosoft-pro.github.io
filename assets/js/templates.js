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
  loadTemplate('header-container', 'assets/templates/header.html', () => {
    if (typeof themeToggleInit === 'function') themeToggleInit();
  });
  loadTemplate('footer-container', 'assets/templates/footer.html', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });

  // Cargar el main dinámicamente según la página
  const path = window.location.pathname;
  let mainTemplate = '';
  if (path.endsWith('index.html') || path === '/' || path === '/index.html') {
    mainTemplate = 'assets/templates/main-index.html';
  } else if (path.endsWith('about.html')) {
    mainTemplate = 'assets/templates/main-about.html';
  } else if (path.endsWith('projects.html')) {
    mainTemplate = 'assets/templates/main-projects.html';
  } else if (path.endsWith('contact.html')) {
    mainTemplate = 'assets/templates/main-contact.html';
  }
  if (mainTemplate) {
    loadTemplate('main-container', mainTemplate);
  }
}); 