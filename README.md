# 🚀 Portafolio Personal – Deyton Riascos Ortiz

[![GitLab Pages](https://img.shields.io/badge/GitLab-Pages-FC6D26?logo=gitlab&logoColor=white)](https://driosoft-pro.gitlab.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Portafolio personal moderno y dinámico que presenta mi experiencia, habilidades y proyectos destacados en **desarrollo de software**, **inteligencia artificial**, **automatización** y **análisis de datos**.

🌐 **Sitio en vivo**: [https://driosoft-pro.gitlab.io](https://driosoft-pro.gitlab.io)

---

## ✨ Características Principales

### 🎨 Diseño y UX

- **Tema Dracula**: Paleta de colores vibrante y moderna con soporte para modo oscuro/claro
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Suaves**: Transiciones y efectos visuales elegantes
- **Interfaz Intuitiva**: Navegación clara y accesible

### 🌍 Internacionalización

- **Bilingüe**: Soporte completo para Español e Inglés
- **Cambio Dinámico**: Traducciones en tiempo real sin recargar la página
- **Persistencia**: Preferencia de idioma guardada en localStorage

### 🎯 Funcionalidades

- **Carga Dinámica**: Templates HTML cargados dinámicamente con JavaScript
- **Proyectos desde JSON**: Gestión de proyectos mediante archivo de configuración
- **Categorización**: Proyectos organizados por tecnología y tipo
- **Animaciones de Entrada**: Tarjetas de proyectos con animaciones staggered

### 🔧 Tecnologías

- **Frontend**: HTML5, CSS3 (Variables CSS, Flexbox, Grid)
- **JavaScript**: Vanilla JS (ES6+), módulos, async/await
- **Hosting**: GitLab Pages
- **Tema**: Dracula Theme personalizado

---

## 📁 Estructura del Proyecto

```
driosoft-pro.gitlab.io/
├── assets/
│   ├── css/
│   │   ├── dracula.css          # Tema Dracula base
│   │   └── style.css            # Estilos principales (basado en Dracula)
│   ├── js/
│   │   ├── main.js              # Lógica principal (tema, idioma, animaciones)
│   │   ├── i18n.js              # Sistema de internacionalización
│   │   ├── templates.js         # Carga dinámica de templates
│   │   └── sw.js                # Service Worker (futuro)
│   ├── img/
│   │   └── logo.png             # Logo del portafolio
│   ├── data/
│   │   └── projects.json        # Datos de proyectos
│   └── templates/
│       ├── header.html          # Header compartido
│       ├── footer.html          # Footer compartido
│       ├── main-index.html      # Contenido de inicio
│       ├── main-about.html      # Contenido sobre mí
│       ├── main-projects.html   # Contenido proyectos
│       └── main-contact.html    # Contenido contacto
├── index.html                   # Página principal
├── about.html                   # Página sobre mí
├── projects.html                # Página de proyectos
├── contact.html                 # Página de contacto
├── manifest.json                # Manifest para PWA (futuro)
└── README.md                    # Este archivo
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

Solo necesitas un navegador web moderno y un servidor HTTP local para desarrollo.

### Instalación y Ejecución Local

```bash
# 1. Clonar el repositorio
git clone https://gitlab.com/driosoft-pro/driosoft-pro.gitlab.io.git
cd driosoft-pro.gitlab.io

# 2. Iniciar servidor local (elige uno)

# Opción A: Python 3
python -m http.server 8000

# Opción B: Node.js
npx http-server -p 8000

# Opción C: PHP
php -S localhost:8000

# 3. Abrir en el navegador
# Visita: http://localhost:8000
```

> **⚠️ Nota Importante**: El sitio **debe** ejecutarse desde un servidor HTTP (no puede abrirse directamente con `file:///`) debido a que usa `fetch()` para cargar templates y datos, lo cual está bloqueado por CORS en el protocolo file.

---

## 🎨 Personalización

### Cambiar Colores del Tema

Edita las variables CSS en `assets/css/style.css`:

```css
:root {
  /* Dracula Dark */
  --bg-primary: #282a36;
  --bg-secondary: #44475a;
  --text-primary: #f8f8f2;
  --dracula-purple: #bd93f9;
  --dracula-cyan: #8be9fd;
  /* ... más variables */
}
```

### Agregar Nuevos Proyectos

Edita `assets/data/projects.json`:

```json
{
  "categories": [
    {
      "id": "ai",
      "name": "🤖 Inteligencia Artificial",
      "projects": [
        {
          "icon": "📊",
          "title": "Nuevo Proyecto",
          "description": "Descripción del proyecto",
          "url": "https://gitlab.com/usuario/proyecto",
          "platform": "gitlab",
          "featured": false
        }
      ]
    }
  ]
}
```

### Modificar Traducciones

Edita `assets/js/i18n.js` para agregar o modificar traducciones:

```javascript
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      // ... más traducciones
    }
  },
  en: {
    nav: {
      home: 'Home',
      // ... más traducciones
    }
  }
};
```

---

## 🔧 Características Técnicas

### Sistema de Temas

- **Tema por defecto**: Dracula Dark
- **Tema alternativo**: Dracula Light
- **Persistencia**: Preferencia guardada en `localStorage`
- **Transiciones suaves**: Animaciones CSS de 0.6s

### Sistema de Internacionalización

- **Idiomas soportados**: Español (es), Inglés (en)
- **Método**: Atributos `data-es` y `data-en` en elementos HTML
- **Cambio dinámico**: Sin recarga de página
- **Persistencia**: Preferencia guardada en `localStorage`

### Carga Dinámica de Contenido

- **Templates**: Cargados con `fetch()` desde `assets/templates/`
- **Proyectos**: Cargados desde `assets/data/projects.json`
- **Inicialización**: Sistema de callbacks para sincronizar carga

### Animaciones

- **Entrada de tarjetas**: Animación staggered con delay incremental
- **Transiciones**: Efectos suaves en hover y cambios de estado
- **Performance**: Uso de `transform` y `opacity` para animaciones GPU

---

## 📊 Secciones del Portafolio

### 🏠 Inicio

- Presentación personal
- Habilidades principales
- Call-to-action a proyectos

### 👨‍💻 Sobre Mí

- Experiencia laboral detallada
- Educación y formación
- Certificaciones profesionales
- Conocimientos y aptitudes

### 💼 Proyectos

Organizados en categorías:

- **🤖 Inteligencia Artificial y Visión Computacional**
- **🛠️ Herramientas y Automatización**
- **⚙️ Configuraciones y Dotfiles**
- **📱 Aplicaciones y Sistemas de Gestión**

### 📧 Contacto

- Enlaces a redes profesionales
- GitHub, GitLab, LinkedIn
- Email de contacto

---

## 🛠️ Tecnologías y Herramientas

### Frontend

- HTML5 (Semántica, Accesibilidad)
- CSS3 (Variables, Flexbox, Grid, Animations)
- JavaScript ES6+ (Modules, Async/Await, Fetch API)

### Desarrollo

- Git & GitLab
- VS Code
- Chrome DevTools

### Hosting

- GitLab Pages
- CI/CD con GitLab CI

---

## 📝 Roadmap

### Próximas Características

- [ ] PWA completo con Service Worker
- [ ] Modo offline
- [ ] Lazy loading de imágenes
- [ ] Optimización de performance
- [ ] Animaciones más avanzadas
- [ ] Blog integrado
- [ ] Sistema de búsqueda de proyectos
- [ ] Filtros por tecnología

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún bug o tienes sugerencias:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👤 Autor

**Deyton Riascos Ortiz**

Analista de Desarrollo de Software de Información  
Especializado en Python, Machine Learning, Data Engineering y Desarrollo Full Stack

- 🌐 Website: [driosoft-pro.gitlab.io](https://driosoft-pro.gitlab.io)
- 💼 LinkedIn: [Deyton Riascos Ortiz](https://linkedin.com/in/deyton-riascos-ortiz)
- 🦊 GitLab: [@driosoft-pro](https://gitlab.com/driosoft-pro)
- 🐙 GitHub: [@driosoft-pro](https://github.com/driosoft-pro)

---

## 🙏 Agradecimientos

- **Dracula Theme**: Por la hermosa paleta de colores
- **GitLab**: Por el hosting gratuito con GitLab Pages
- **Comunidad Open Source**: Por las herramientas y recursos

---

<div align="center">

⭐ **Si te gusta este portafolio!** ⭐

Hecho por Deyton Riascos Ortiz

</div>
