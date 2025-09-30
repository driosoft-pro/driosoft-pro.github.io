// Sistema de internacionalización (i18n)
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      homePreview: 'Página principal con información destacada sobre mis habilidades y experiencia.',
      aboutPreview: 'Conoce mi trayectoria profesional, educación y certificaciones.',
      projectsPreview: 'Explora mi portafolio de proyectos en IA, desarrollo web y automatización.',
      contactPreview: 'Conecta conmigo para colaboraciones, consultas o simplemente conversar sobre tecnología.'
    },
    hero: {
      greeting: 'Hola, soy',
      subtitle: 'Analista de desarrollo de software de información.<br>Apasionado por la tecnología, la innovación y la enseñanza.<br>Descubre mis proyectos y conocimientos en el mundo del desarrollo.',
      viewProjects: 'Ver proyectos'
    },
    skills: {
      title: 'Habilidades principales',
      python: 'Python',
      ml: 'Machine Learning',
      dataEng: 'Data Engineering',
      javascript: 'JavaScript',
      linux: 'Linux',
      automation: 'Automatización'
    },
    about: {
      title: 'Sobre mí',
      intro: 'Soy <strong>Deyton Riascos Ortiz</strong>, desarrollador de software con experiencia en análisis, desarrollo y optimización de soluciones tecnológicas para empresas de diferentes sectores. Me apasiona la innovación, el aprendizaje continuo y la creación de herramientas que generen impacto real.',
      experienceTitle: 'Experiencia laboral',
      educationTitle: 'Educación',
      certificationsTitle: 'Licencias y certificaciones', // Ajustado a tu clave plural
      skillsTitle: 'Conocimientos y aptitudes',
      fullTime: 'Jornada completa',
      showCredential: 'Mostrar credencial',
      aptitudes: 'Aptitudes',
      // Claves de la experiencia (añadidas para completar el archivo)
      pcaRole: 'Desarrollador de software',
      pcaCompany: 'PCA INGENIERÍA S.A.S.',
      pcaPeriod: 'sept. 2023 - mar. 2024 · 7 meses · Palmira, Valle del Cauca, Colombia',
      pcaDesc: 'Participación en el desarrollo de proyectos para STUDIO F y Corredor Empresarial de Apuestas S.A.S.<br>Desarrollo utilizando PENTHO, C#, PHP, SQL Server, Angular, JavaScript, HTML y metodología Scrum.<br>Miembro del equipo en el proyecto de migración de Facturación Electrónica.',
      dicelRole: 'Analista de desarrollo',
      dicelCompany: 'Dicel S.a. E.s.p.',
      dicelPeriod: 'may. 2022 - mar. 2023 · 11 meses · Cali, Valle del Cauca, Colombia',
      dicelDesc: 'Desarrollo de proyectos de código propietario usando PLSQL, ORACLE, FORMS, REPORT, APEX, XML, HTML, Python y Scrum.<br>Proyecto a cargo: migración, actualización y mantenimiento del Sistema de Gestión de Información Comercial (S.G.I.C.) y del Sistema de Gestión de Información Financiera (S.G.I.F.).',
      independienteRole: 'Freelance',
      independienteCompany: 'Desarrollador independiente',
      independientePeriod: 'sept. 2020 - may. 2022 · 1 año 9 meses',
      independienteDesc: 'Desarrollo y gestión de proyectos web para clientes en plataformas como HTML, CSS, JavaScript, PHP y MySQL. Implementación de sistemas de gestión de contenido (CMS) personalizados.',
    },
    projects: {
      title: 'Mis Proyectos',
      subtitle: 'Explora algunos de los proyectos más destacados en los que he trabajado, enfocados en software, automatización, inteligencia artificial y herramientas para desarrolladores.',
      viewOn: 'Ver en',
      
      // Categorías
      aiCategory: 'Inteligencia Artificial y Visión Computacional',
      toolsCategory: 'Herramientas y Automatización',
      configCategory: 'Configuraciones y Dotfiles',
      webCategory: 'Desarrollo Web y APIs',
      appsCategory: 'Aplicaciones y Sistemas de Gestión',
      dataCategory: 'Análisis de Datos',
      
      // Proyectos individuales
      mugencode: {
        title: 'Mugencode DataNalic',
        desc: 'Plataforma de análisis de datos y visualización avanzada con herramientas de procesamiento y análisis estadístico.'
      },
      removeBg: {
        title: 'Remove Background Img',
        desc: 'Herramienta para eliminar el fondo de imágenes usando IA, procesamiento de imágenes con redes neuronales.'
      },
      handMouse: {
        title: 'Hand Mouse Controller',
        desc: 'Controlador de mouse por gestos de mano con visión artificial, usando MediaPipe y OpenCV.'
      },
      emotion: {
        title: 'Emotion Recognition',
        desc: 'Reconocimiento de emociones en tiempo real usando IA y modelos de deep learning para detección facial.'
      },
      calcLogic: {
        title: 'calcLogic',
        desc: 'Aplicación para lógica proposicional con generación de tablas de verdad y calculadora booleana.'
      },
      mugenqb: {
        title: 'MugenQB',
        desc: 'Generador inteligente de preguntas y banco de datos para exámenes y evaluaciones académicas.'
      },
      permissions: {
        title: 'Permissions System',
        desc: 'Sistema robusto de gestión de permisos y roles para aplicaciones empresariales con control de acceso.'
      },
      nixos: {
        title: 'Dotfiles NixOS',
        desc: 'Configuración completa y reproducible de NixOS con gestión declarativa del sistema.'
      },
      oldFiles: {
        title: 'First Files Config Gentoo',
        desc: 'Configuraciones iniciales y personalizadas de entornos Linux Gentoo para desarrollo.'
      },
      gentooBtrfs: {
        title: 'Dotfiles Gentoo Btrfs Thinkpad',
        desc: 'Dotfiles optimizados para Gentoo con sistema de archivos Btrfs en hardware Thinkpad.'
      },
      gnomeArch: {
        title: 'Gnome ArchLinux',
        desc: 'Configuraciones y scripts personalizados para entorno de escritorio Gnome en ArchLinux.'
      },
      apiHeroes: {
        title: 'API REST Heroes',
        desc: 'API RESTful para gestión de superhéroes con endpoints CRUD y documentación completa.'
      },
      ddsCine: {
        title: 'DDS Cine',
        desc: 'Aplicación web completa de gestión de cine con reservas, películas y administración de salas.'
      },
      myLibrary: {
        title: 'My Library',
        desc: 'Gestor de biblioteca personal con catálogo de libros, préstamos y sistema de búsqueda.'
      },
      ruleta: {
        title: 'Ruleta PHP',
        desc: 'Proyecto de ruleta interactiva desarrollado en PHP con funcionalidades de juego y apuestas.'
      },
      sistemaEstudiantil: {
        title: 'Sistema Estudiantil GUI',
        desc: 'Interfaz gráfica completa para gestión estudiantil con inscripciones, notas y reportes.'
      },
      sudoku: {
        title: 'Proyecto Sudoku',
        desc: 'Juego de Sudoku interactivo con generador de puzzles, validación y diferentes niveles de dificultad.'
      },
      dataEducacion: {
        title: 'Data Educación',
        desc: 'Proyecto de análisis de datos educativos con visualizaciones y estadísticas del sector educativo.'
      },
      dataPokemon: {
        title: 'Data Pokémon Battle',
        desc: 'Análisis completo de datos de batallas Pokémon con estadísticas y predicciones usando ML.'
      }
    },
    contact: {
      title: 'Contáctame',
      subtitle: 'Estoy disponible para colaborar en proyectos, resolver problemas tecnológicos o conversar sobre innovación y desarrollo.',
      email: 'Correo',
      linkedin: 'LinkedIn',
      gitlab: 'GitLab',
      github: 'GitHub'
    },
    footer: {
      madeWith: 'Hecho con',
      in: 'en GitLab Pages.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      homePreview: 'Main page with featured information about my skills and experience.',
      aboutPreview: 'Learn about my professional career, education and certifications.',
      projectsPreview: 'Explore my portfolio of projects in AI, web development and automation.',
      contactPreview: 'Connect with me for collaborations, inquiries or just to talk about technology.'
    },
    hero: {
      greeting: 'Hi, I\'m',
      subtitle: 'Information software development analyst.<br>Passionate about technology, innovation and teaching.<br>Discover my projects and knowledge in the world of development.',
      viewProjects: 'View projects'
    },
    skills: {
      title: 'Main Skills',
      python: 'Python',
      ml: 'Machine Learning',
      dataEng: 'Data Engineering',
      javascript: 'JavaScript',
      linux: 'Linux',
      automation: 'Automation'
    },
    about: {
      title: 'About Me',
      intro: 'I am <strong>Deyton Riascos Ortiz</strong>, a software developer with experience in analysis, development and optimization of technological solutions for companies in different sectors. I am passionate about innovation, continuous learning and creating tools that generate real impact.',
      experienceTitle: 'Work Experience',
      educationTitle: 'Education',
      certificationsTitle: 'Licenses and Certifications', // Ajustado a tu clave plural
      skillsTitle: 'Knowledge and Skills',
      fullTime: 'Full-time',
      showCredential: 'Show credential',
      aptitudes: 'Skills',
      // Claves de la experiencia (añadidas para completar el archivo)
      pcaRole: 'Software Developer',
      pcaCompany: 'PCA INGENIERÍA S.A.S.',
      pcaPeriod: 'Sept 2023 - Mar 2024 · 7 months · Palmira, Valle del Cauca, Colombia',
      pcaDesc: 'Participation in the development of projects for STUDIO F and Corredor Empresarial de Apuestas S.A.S.<br>Development using PENTHO, C#, PHP, SQL Server, Angular, JavaScript, HTML, and Scrum methodology.<br>Team member in the Electronic Invoicing migration project.',
      dicelRole: 'Development Analyst',
      dicelCompany: 'Dicel S.a. E.s.p.',
      dicelPeriod: 'May 2022 - Mar 2023 · 11 months · Cali, Valle del Cauca, Colombia',
      dicelDesc: 'Development of proprietary code projects using PLSQL, ORACLE, FORMS, REPORT, APEX, XML, HTML, Python, and Scrum.<br>Project in charge: migration, update, and maintenance of the Commercial Information Management System (S.G.I.C.) and the Financial Information Management System (S.G.I.F.).',
      independienteRole: 'Freelancer',
      independienteCompany: 'Independent Developer',
      independientePeriod: 'Sept 2020 - May 2022 · 1 year 9 months',
      independienteDesc: 'Development and management of web projects for clients on platforms like HTML, CSS, JavaScript, PHP, and MySQL. Implementation of custom content management systems (CMS).',
    },
    projects: {
      title: 'My Projects',
      subtitle: 'Explore some of the most outstanding projects I have worked on, focused on software, automation, artificial intelligence and developer tools.',
      viewOn: 'View on',
      
      // Categorías
      aiCategory: 'Artificial Intelligence and Computer Vision',
      toolsCategory: 'Tools and Automation',
      configCategory: 'Configurations and Dotfiles',
      webCategory: 'Web Development and APIs',
      appsCategory: 'Applications and Management Systems',
      dataCategory: 'Data Analysis',
      
      // Proyectos individuales
      mugencode: {
        title: 'Mugencode DataNalic',
        desc: 'Advanced data analysis and visualization platform with processing and statistical analysis tools.'
      },
      removeBg: {
        title: 'Remove Background Img',
        desc: 'Tool to remove image backgrounds using AI, image processing with neural networks.'
      },
      handMouse: {
        title: 'Hand Mouse Controller',
        desc: 'Hand gesture mouse controller with computer vision, using MediaPipe and OpenCV.'
      },
      emotion: {
        title: 'Emotion Recognition',
        desc: 'Real-time emotion recognition using AI and deep learning models for facial detection.'
      },
      calcLogic: {
        title: 'calcLogic',
        desc: 'Application for propositional logic with truth table generation and boolean calculator.'
      },
      mugenqb: {
        title: 'MugenQB',
        desc: 'Intelligent question generator and data bank for exams and academic evaluations.'
      },
      permissions: {
        title: 'Permissions System',
        desc: 'Robust permission and role management system for enterprise applications with access control.'
      },
      nixos: {
        title: 'Dotfiles NixOS',
        desc: 'Complete and reproducible NixOS configuration with declarative system management.'
      },
      oldFiles: {
        title: 'First Files Config Gentoo',
        desc: 'Initial and customized configurations of Gentoo Linux environments for development.'
      },
      gentooBtrfs: {
        title: 'Dotfiles Gentoo Btrfs Thinkpad',
        desc: 'Optimized dotfiles for Gentoo with Btrfs file system on Thinkpad hardware.'
      },
      gnomeArch: {
        title: 'Gnome ArchLinux',
        desc: 'Custom configurations and scripts for Gnome desktop environment on ArchLinux.'
      },
      apiHeroes: {
        title: 'API REST Heroes',
        desc: 'RESTful API for superhero management with CRUD endpoints and complete documentation.'
      },
      ddsCine: {
        title: 'DDS Cinema',
        desc: 'Complete cinema management web application with reservations, movies and room administration.'
      },
      myLibrary: {
        title: 'My Library',
        desc: 'Personal library manager with book catalog, loans and search system.'
      },
      ruleta: {
        title: 'PHP Roulette',
        desc: 'Interactive roulette project developed in PHP with game and betting functionalities.'
      },
      sistemaEstudiantil: {
        title: 'Student System GUI',
        desc: 'Complete graphical interface for student management with enrollments, grades and reports.'
      },
      sudoku: {
        title: 'Sudoku Project',
        desc: 'Interactive Sudoku game with puzzle generator, validation and different difficulty levels.'
      },
      dataEducacion: {
        title: 'Education Data',
        desc: 'Educational data analysis project with visualizations and statistics of the education sector.'
      },
      dataPokemon: {
        title: 'Pokémon Battle Data',
        desc: 'Complete analysis of Pokémon battle data with statistics and predictions using ML.'
      }
    },
    contact: {
      title: 'Contact Me',
      subtitle: 'I am available to collaborate on projects, solve technological problems or talk about innovation and development.',
      email: 'Email',
      linkedin: 'LinkedIn',
      gitlab: 'GitLab',
      github: 'GitHub'
    },
    footer: {
      madeWith: 'Made with',
      in: 'on GitLab Pages.'
    }
  }
};

// Función para cambiar el idioma
function setLanguage(lang) {
  console.log('Cambiando idioma a:', lang); 
  
  const elements = document.querySelectorAll('[data-i18n]');
  console.log('Elementos encontrados:', elements.length); 
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const keys = key.split('.');
    let translation = translations[lang];
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    if (translation) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        // Usa .innerHTML para que las etiquetas <strong> se interpreten como HTML
        element.innerHTML = translation; 
      }
    }
  });
  
  // Guardar preferencia
  localStorage.setItem('language', lang);
  
  // Actualizar botón
  const langButton = document.getElementById('lang-toggle');
  if (langButton) {
    langButton.textContent = lang.toUpperCase();
    console.log('Botón actualizado a:', lang.toUpperCase()); 
  }
  
  // Actualizar vistas previas de navegación
  updateNavigationPreviews(lang);
}

// Actualizar vistas previas con el idioma actual
function updateNavigationPreviews(lang) {
  const previewsData = {
    'index.html': {
      emoji: '🏠',
      title: translations[lang].nav.home,
      description: translations[lang].nav.homePreview
    },
    'about.html': {
      emoji: '👨‍💻',
      title: translations[lang].nav.about,
      description: translations[lang].nav.aboutPreview
    },
    'projects.html': {
      emoji: '💼',
      title: translations[lang].nav.projects,
      description: translations[lang].nav.projectsPreview
    },
    'contact.html': {
      emoji: '📧',
      title: translations[lang].nav.contact,
      description: translations[lang].nav.contactPreview
    }
  };
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const previewData = previewsData[href];
    
    if (previewData) {
      let preview = link.querySelector('.nav-preview');
      if (preview) {
        preview.innerHTML = `
          <div class="nav-preview-image">${previewData.emoji}</div>
          <h4>${previewData.title}</h4>
          <p>${previewData.description}</p>
        `;
      }
    }
  });
}

// Inicializar el sistema de idiomas
function initLanguageSystem() {
  console.log('Inicializando sistema de idiomas'); 
  
  const savedLang = localStorage.getItem('language') || 'es';
  console.log('Idioma guardado:', savedLang); 
  
  // Aplicar el idioma guardado
  setTimeout(() => {
    setLanguage(savedLang);
  }, 100);
  
  const langButton = document.getElementById('lang-toggle');
  console.log('Botón de idioma encontrado:', !!langButton); 
  
  if (langButton) {
    langButton.addEventListener('click', () => {
      console.log('Click en botón de idioma'); 
      
      const currentLang = localStorage.getItem('language') || 'es';
      const newLang = currentLang === 'es' ? 'en' : 'es';
      
      console.log('Cambiando de', currentLang, 'a', newLang); 
      
      // Agregar clase de transición
      document.body.classList.add('theme-transitioning');
      
      setLanguage(newLang);
      
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 600);
    });
  } else {
    console.error('No se encontró el botón de idioma'); 
  }
}

// Hacer las funciones globales para que puedan ser llamadas desde templates.js
window.setLanguage = setLanguage;
window.updateNavigationPreviews = updateNavigationPreviews;
window.initLanguageSystem = initLanguageSystem;