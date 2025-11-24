# Portafolio Personal – Deyton Riascos Ortiz

[![Deploy to GitHub Pages](https://github.com/TU_USUARIO/mugencode_page/actions/workflows/deploy.yml/badge.svg)](https://github.com/TU_USUARIO/mugencode_page/actions/workflows/deploy.yml)
[![Mirror to GitLab](https://github.com/TU_USUARIO/mugencode_page/actions/workflows/mirror-to-gitlab.yml/badge.svg)](https://github.com/TU_USUARIO/mugencode_page/actions/workflows/mirror-to-gitlab.yml)

Portafolio personal donde presento mi experiencia, habilidades y proyectos destacados en desarrollo de software, automatización, inteligencia artificial y herramientas para desarrolladores.

🌐 **Sitio en vivo**: [https://TU_USUARIO.github.io/mugencode_page/](https://TU_USUARIO.github.io/mugencode_page/)

## ✨ Características

- **Página de inicio**: Presentación personal y habilidades principales
- **Sobre mí**: Experiencia laboral, educación y perfil profesional
- **Proyectos**: Muestra de proyectos organizados por categorías (IA, automatización, dotfiles, aplicaciones)
- **Contacto**: Información para colaboración y redes profesionales
- **Diseño moderno**: Interfaz limpia, responsiva y con soporte para modo claro/oscuro
- **PWA**: Funciona como Progressive Web App, instalable y con soporte offline
- **SEO optimizado**: Meta tags completos, Open Graph, Twitter Cards y Schema.org
- **Accesibilidad**: ARIA labels, navegación con teclado, semántica HTML5

## 🛠️ Tecnologías utilizadas

- HTML5, CSS3 (Flexbox, Grid, Variables CSS)
- JavaScript (vanilla) con Service Workers
- GitHub Pages para despliegue
- GitHub Actions para CI/CD
- PWA (Progressive Web App)

## 📁 Estructura del proyecto

```
mugencode_page/
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Deploy automático a GitHub Pages
│       └── mirror-to-gitlab.yml    # Mirror automático a GitLab
├── assets/
│   ├── css/
│   │   └── style.css               # Estilos principales
│   ├── js/
│   │   ├── main.js                 # JavaScript principal
│   │   ├── templates.js            # Carga dinámica de templates
│   │   └── sw.js                   # Service Worker para PWA
│   ├── img/
│   │   └── logo.png                # Logo del portafolio
│   └── templates/
│       ├── header.html             # Header compartido
│       ├── footer.html             # Footer compartido
│       ├── main-index.html         # Contenido de inicio
│       ├── main-about.html         # Contenido sobre mí
│       ├── main-projects.html      # Contenido proyectos
│       └── main-contact.html       # Contenido contacto
├── index.html                      # Página principal
├── about.html                      # Página sobre mí
├── projects.html                   # Página de proyectos
├── contact.html                    # Página de contacto
├── manifest.json                   # Manifest para PWA
├── sitemap.xml                     # Sitemap para SEO
├── robots.txt                      # Configuración para crawlers
├── MIGRATION_GUIDE.md              # Guía de migración a GitHub
└── README.md                       # Este archivo
```

## 🚀 Despliegue

Este portafolio se despliega automáticamente en GitHub Pages mediante GitHub Actions:

1. **Fuente principal**: GitHub (este repositorio)
2. **Mirror automático**: GitLab (respaldo sincronizado automáticamente)
3. **Deploy**: Cada push a `main` activa el deploy automático

### Ver el sitio localmente

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/mugencode_page.git
cd mugencode_page

# Abrir con un servidor local (ejemplo con Python)
python -m http.server 8000

# O con Node.js
npx serve
```

Luego visita `http://localhost:8000` en tu navegador.

## 📖 Migración desde GitLab

Si estás migrando desde GitLab o quieres configurar el mirror automático, consulta la [Guía de Migración](MIGRATION_GUIDE.md) para instrucciones detalladas paso a paso.

## 🎨 Personalización

Para personalizar el portafolio:

1. **Colores**: Edita las variables CSS en `assets/css/style.css` (líneas 9-26)
2. **Contenido**: Modifica los archivos en `assets/templates/`
3. **Meta tags**: Actualiza las URLs en todos los archivos HTML
4. **Manifest PWA**: Edita `manifest.json` con tu información

## 📊 SEO y Performance

- ✅ Lighthouse Score: 90+ en todas las categorías
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Schema.org structured data
- ✅ Sitemap.xml y robots.txt
- ✅ PWA con Service Worker
- ✅ Lazy loading de imágenes
- ✅ Optimización de rendimiento

## 🔗 Enlaces

- **GitHub**: [https://github.com/TU_USUARIO](https://github.com/TU_USUARIO)
- **GitLab** (Mirror): [https://gitlab.com/TU_USUARIO](https://gitlab.com/TU_USUARIO)
- **LinkedIn**: [https://linkedin.com/in/TU_USUARIO](https://linkedin.com/in/TU_USUARIO)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Autor

**Deyton Riascos Ortiz**  
Analista y desarrollador de software  
Especializado en Python, Machine Learning y Data Engineering

---

⭐ Si te gusta este portafolio, ¡dale una estrella en GitHub!
