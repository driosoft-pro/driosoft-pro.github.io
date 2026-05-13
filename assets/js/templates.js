// Función para cargar proyectos desde JSON con soporte de i18n
async function loadProjects() {
  try {
    const response = await fetch('assets/data/projects.json');
    const data = await response.json();

    const mainContainer = document.getElementById('projects-container');
    if (!mainContainer) return;

    const currentLang = localStorage.getItem('lang') || 'es';
    const viewOnText = currentLang === 'es' ? 'Ver en' : 'View on';

    let html = '';

    data.categories.forEach(category => {
      html += `
        <div class="project-category-group">
          <h3 class="subsection-title"><i class="${category.icon}"></i> ${category.name}</h3>

          <div class="projects-grid">
      `;

      category.projects.forEach(project => {
        const platformText = project.platform === 'github' ? 'GitHub' : 'GitLab';
        html += `
          <article class="project-card fade-in">
            <h4><i class="${project.icon}"></i> ${project.title}</h4>
            <p class="terminal-text">${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-primary); text-decoration: none; font-family: var(--font-mono); font-size: 0.85rem;">
              ${viewOnText} ${platformText} →
            </a>
          </article>
        `;
      });

      html += `</div></div>`;
    });

    mainContainer.innerHTML = html;
  } catch (error) {
    console.error('Error cargando proyectos:', error);
  }
}

// Función para cargar plantillas estáticas (header/footer)
function loadStaticTemplates() {
  fetch('assets/templates/header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-container').innerHTML = html;
      if (window.initThemeToggle) window.initThemeToggle();
      if (window.initLangToggle) window.initLangToggle();
      if (window.initNavigation) window.initNavigation();
      if (window.initRofiMenu) window.initRofiMenu();
      if (window.initCalendar) window.initCalendar();
      if (window.initQuickLaunch) window.initQuickLaunch();
    });

  fetch('assets/templates/footer.html')
    .then(res => res.text())
    .then(html => {
      const footer = document.getElementById('footer-container');
      if (footer) footer.innerHTML = html;
    });
}

// Inicialización de componentes estáticos
document.addEventListener('DOMContentLoaded', loadStaticTemplates);

window.loadProjects = loadProjects;