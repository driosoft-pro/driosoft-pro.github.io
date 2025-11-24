// Función para cargar plantillas HTML dinámicamente
function loadTemplate(id, url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = html;
      }
      if (callback) callback();
    })
    .catch(error => console.error(`Error cargando ${url}:`, error));
}

// Función para cargar proyectos desde JSON
async function loadProjects() {
  try {
    const response = await fetch('assets/data/projects.json');
    const data = await response.json();

    const mainContainer = document.getElementById('projects-container');
    if (!mainContainer) {
      console.error('No se encontró el contenedor de proyectos');
      return;
    }

    let html = '';

    data.categories.forEach(category => {
      html += `
        <div style="margin-bottom: 3rem;">
          <h3 style="color: var(--accent-primary); margin-bottom: 1.5rem;">${category.name}</h3>
          <div class="projects-grid">
      `;

      category.projects.forEach(project => {
        const platformText = project.platform === 'github' ? 'GitHub' : 'GitLab';
        const featuredClass = project.featured ? 'featured' : '';

        html += `
          <article class="project-card ${featuredClass}">
            <h4>${project.icon} ${project.title}</h4>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">Ver en ${platformText} →</a>
          </article>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    mainContainer.innerHTML = html;
    console.log('Proyectos cargados correctamente');
  } catch (error) {
    console.error('Error cargando proyectos:', error);
  }
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Cargar header
  loadTemplate('header-container', 'assets/templates/header.html', () => {
    // Inicializar tema después de cargar header
    if (typeof initThemeToggle === 'function') {
      initThemeToggle();
    }
  });

  // Cargar footer
  loadTemplate('footer-container', 'assets/templates/footer.html', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
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
    // Cargar proyectos después de cargar el template
    loadTemplate('main-container', mainTemplate, () => {
      loadProjects();
    });
    return;
  } else if (path.endsWith('contact.html')) {
    mainTemplate = 'assets/templates/main-contact.html';
  }

  if (mainTemplate) {
    loadTemplate('main-container', mainTemplate);
  }
});