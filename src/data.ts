import type { PersonalInfo, Project } from './types';

export const personalInfo: PersonalInfo = {
  name: 'Armando de Jesús Hidalgo Riquenes',
  role: 'Desarrollador Front-end',
  shortPhrase: 'Transformando ideas en soluciones digitales escalables',
  bio: 'Desarrollador Frontend especializado en JavaScript, React y TypeScript con formación en Educación Informática. + 1 año construyendo aplicaciones web modernas, responsive y eficientes.Experiencia en consumo de APIs, gestión de estado, routing y optimización de rendimiento.',
  education: [
    ' Lic.Educación Informática - Universidad Ignacio Agramonte(2018 - 2022)',
    'Curso: React de Cero a Experto - [Fernado Herrera]',
    'Curso: TypeScript - [Fernando Herrera]',
    'Curso: JavaScript Moderno(2022)'
  ],

  goals: [
    'Seguir aprendiendo arquitectura de software',
    'Busco mi primera oportunidad profesional para aportar valor y seguir creciendo técnicamente',
    'Poner en práctica todo lo aprendido y aprender de profesionales con experiencia'
  ],

  pasiones: [
    'El mundo de futbol',
    'Las nuevas tecnologías',
    'Ver resultados de mis esfuerzos',
  ],
  email: 'armandohriquenes@gmail.com',
  location: 'Camagüey, Cuba',
  profileImage: '/images/profile.jpg',
  social: {
    github: 'https://www.github.com/armandohriquenes-star',
    linkedin: 'https://www.linkedin.com/in/armando-de-jesus-hidalgo-riquenes',
    instagram: 'https://www.instagram.com/m4ndy_99'
  }
};

export const skills = {
  technologies: ['React', 'TypeScript', 'JavaScript(ES6 +)'],
  style: ['HTML5', 'CSS3', 'CSS Modules', 'ResponsiveDesign'],
  competencies: ['Trabajo en equipo', 'Metodologías ágiles', 'Comunicación efectiva'],
  tools: ['Git', 'GitHub', 'NPM', 'Vite'],
  testing: ['Jest, React Testing Library(básico)'],
  language: ['Español:Nativo', 'Ingles:B1(Conversacional, capaz de manejar situaciones cotidianas y laborales)']
};

export const projects: Project[] = [
  {
    title: 'Gif Expert App',
    description: 'Plataforma de búsqueda de GIFs integrada con Giphy API',
    tags: ['React 18+', 'TypeScript', 'Vite', 'CSS Modules'],
    features: 'Búsqueda en tiempo real, infinite scroll, lazy loading',
    image: '/images/expert-gif.jpg',
    link: 'https://armandohriquenes-star.github.io/react-gif-expert/',
    tecnicas: 'Context API, custom hooks, code splitting, caching',

  },
  {
    title: 'Heroes SPA',
    description: ' React Router & AuthenticationPanel de gestión de héroes con sistema de autenticación completo',
    tags: ['React 18+', 'React Router v6', 'TypeScript', 'Contex API', 'JWT'],
    features: 'Login / Logout, rutas protegidas, CRUD completo, lazy loading',
    image: '/images/heroe-spa.jpg',
    link: 'https://armandohriquenes-star.github.io/react-heroes-spa/',
    arquitectura: 'Separación por features, formularios controlados'
  },
  {
    title: 'Buscador de Autos',
    description: 'Marketplace de vehículos con filtros avanzados y persistencia local',
    tags: ['JavScript ES6+', 'LocalStorage', 'Algoritmos de filtrado'],
    features: '8+ filtros combinables, búsqueda en tiempo real, +50 vehículos',
    image: '/images/autos.jpg',
    link: 'https://armandohriquenes-star.github.io/js-Busqueda-Autos/',
    optimizacion: 'Renderizado eficiente, experiencia responsive'
  },
  {
    title: 'Carrito de Compras',
    description: 'Aplicación e-commerce completa con todas las funcionalidades de carrito',
    tags: ['JavScript ES6+', 'LocalStorage API', 'HTML5', 'CCS3'],
    features: 'Catálogo interactivo, cálculos automáticos, persistencia',
    image: '/images/carrito.jpg',
    link: 'https://armandohriquenes-star.github.io/carrito-compras/',
  },
  {
    title: 'Buscador de Clima',
    description: 'APIs Externas Aplicación meteorológica con geolocalización y pronóstico extendido',
    tags: ['JavScript ES6+', 'Fetch API', 'OpenWeatherMap API', 'Geolocation API', 'HTML5', 'CCS3'],
    features: '5-days forecast, cambio unidades, responsive design',
    image: '/images/clima.jpg',
    link: 'https://armandohriquenes-star.github.io/obtener-clima-js/',
  }
];