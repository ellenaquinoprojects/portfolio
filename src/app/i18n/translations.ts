import { Language } from '../contexts/LanguageContext';

export const translations = {
  pt: {
    // Navigation
    nav: {
      home: 'Home',
      experience: 'Experiência',
      portfolio: 'Portfolio',
      talks: 'Palestras',
      publications: 'Publicações',
      about: 'Sobre',
      contact: 'Contato'
    },
    
    // Home
    home: {
      headline: 'Product & Strategy',
      subhead: 'Transformo dores reais em soluções escaláveis, equilibrando valor de negócio, experiência e viabilidade técnica.',
      experienceTitle: 'Experiência',
      educationTitle: 'Formação',
      featuredProjects: 'Projetos em destaque',
      viewAllProjects: 'Ver todos os projetos'
    },
    
    // Experience
    experience: {
      title: 'Experiência',
      description: 'Mais de 10 anos conectando necessidades do usuário, metas de negócio e viabilidade técnica em projetos globais.',
      employersTitle: 'Experiência',
      universitiesTitle: 'Formação'
    },
    
    // Portfolio
    portfolio: {
      title: 'Portfolio',
      description: 'Projetos que equilibram descoberta, entrega e melhoria contínua.',
      allProjects: 'Todos',
      readCase: 'Ler caso',
      filterByArea: 'Filtrar por área',
      clearFilters: 'Limpar filtros',
      partners: 'Parceiros'
    },
    
    // About
    about: {
      title: 'Sobre',
      bioTitle: 'Bio',
      skillsTitle: 'Foco',
      languagesTitle: 'Idiomas',
      certificationsTitle: 'Certificações',
      publicationsTitle: 'Publicações',
      supportersTitle: 'Apoiadores',
      nativePt: 'Nativo',
      fluentEn: 'C1',
      fluentEs: 'C1+',
      learningFr: 'A2 — em progresso',
      education: 'Educação',
      talksTitle: 'Palestras & Apresentações',
      talksDesc: 'Palestras em eventos científicos, sociais e políticos sobre tecnologia, democracia, gênero e algoritmos.',
      talksCount: 'palestras',
      eventTypes: 'tipos de eventos',
      viewAll: 'Ver todas',
      publicationsCardTitle: 'Publicações Científicas',
      publicationsCardDesc: 'Artigos, papers e pesquisas publicados em periódicos e conferências sobre tecnologia, sociedade e educação.',
      publicationsCount: 'publicações',
      withLink: 'com link',
      years: 'anos',
      activeYears: 'anos ativos',
      pageTitle: 'Sobre',
      pageDescription: 'Trajetória, formação e filosofia de trabalho',
      yearsExperience: 'Anos de experiência',
      countries: 'Países',
      globalProjects: 'Projetos globais',
      certifications: 'Certificações',
      personalTitle: 'Um pouco sobre a Ellen fora do trabalho',
      personalBio: 'Nasci em uma família grande — somos seis irmãos — e talvez venha daí meu gosto por convivência e movimento. Do sul do Brasil, fui fazendo do mundo o meu quintal: já morei em mais de dez lugares, em quatro países. Amo viajar, viver o novo e o curioso. Nerd assumida, tenho um olhar mais sociotécnico sobre as coisas e uma curiosidade que me move. Sou casada com uma mulher maravilhosa, tenho duas gatinhas, Melissa e Manuela, e dificilmente recuso uma boa conversa de mesa de bar — ainda mais se for com uma cervejinha no fim da tarde. Gosto de esportes coletivos, como futebol e pickleball, e guardo uma paixão pouco explorada por velejar.'
    },
    
    // Contact
    contact: {
      title: 'Contato',
      description: 'Vamos conversar sobre produto, estratégia ou qualidade.',
      email: 'Email',
      phone: 'Telefone',
      linkedin: 'LinkedIn',
      downloadCV: 'Baixar CV',
      or: 'ou',
      phoneCA: 'Canadá',
      phoneBR: 'Brasil',
      letsTalk: 'Vamos conversar?',
      collaborationInterests: 'Interesses de colaboração',
      productStrategy: 'Estratégia de produto',
      qualityConsulting: 'Consultoria em qualidade',
      workshopsTraining: 'Workshops e treinamentos',
      talksEvents: 'Palestras e eventos'
    },
    
    // Case Study
    case: {
      context: 'Contexto',
      challenge: 'Desafio',
      approach: 'Abordagem',
      outcomes: 'Resultados',
      backToPortfolio: 'Voltar para portfolio',
      notFound: 'Projeto não encontrado'
    },
    
    // 404
    notFound: {
      title: '404',
      description: 'Página não encontrada',
      backHome: 'Voltar para home'
    },
    
    // Common
    common: {
      loading: 'Carregando...',
      readMore: 'Ler mais',
      viewProject: 'Ver projeto',
      close: 'Fechar',
      openToProjects: 'Aberta a projetos: Canadá, Europa, Brasil',
      readEbook: 'Leia Algoritmos e Sociedade'
    },
    
    // Services & Value
    services: {
      title: 'Serviços & Especialidades',
      technologyStrategy: 'Estratégia Tecnológica',
      technologyStrategyDesc: 'Consultoria estratégica para alinhar iniciativas tecnológicas com objetivos de negócio, definindo roadmaps tecnológicos e governança de inovação',
      processProduct: 'Processo & Produto',
      processProductDesc: 'Design e otimização de processos de desenvolvimento de software, gestão de ciclo de vida de produto e metodologias de melhoria contínua',
      qualityAssurance: 'Garantia de Qualidade',
      qualityAssuranceDesc: 'Implementação de frameworks abrangentes de qualidade, estratégias de teste e governança de qualidade para garantir excelência e confiabilidade de software',
      complexSystems: 'Desenvolvimento de Sistemas Complexos',
      complexSystemsDesc: 'Arquitetura e desenvolvimento de sistemas escaláveis e de alto desempenho com foco em resiliência, segurança e tecnologias de ponta'
    },
    
    value: {
      title: 'Como conecto produto, qualidade e estratégia',
      systemicThinking: 'Pensamento Sistêmico',
      systemicThinkingDesc: 'Integro perspectivas sociais, técnicas e de negócio para compreender a complexidade e desenhar soluções sustentáveis.',
      innovation: 'Inovação como Entrega e Estratégia',
      innovationDesc: 'Redefino a inovação como motor estratégico de crescimento, incorporando melhoria contínua e decisões orientadas por dados em todas as etapas do desenvolvimento de produto.',
      research: 'Pesquisa na Prática',
      researchDesc: 'Combino profundidade analítica com experimentação prática, conectando pesquisa e execução.',
      collaborative: 'Impacto Colaborativo',
      collaborativeDesc: 'Construo parcerias que alinham necessidades do usuário, aprendizado de equipe e valor de negócio — gerando impacto mensurável por meio da colaboração.'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      experience: 'Experience',
      portfolio: 'Portfolio',
      talks: 'Talks',
      publications: 'Publications',
      about: 'About',
      contact: 'Contact'
    },
    
    // Home
    home: {
      headline: 'Product & Strategy',
      subhead: 'I transform real pain points into scalable solutions, balancing business value, experience, and technical feasibility.',
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      featuredProjects: 'Featured projects',
      viewAllProjects: 'View all projects'
    },
    
    // Experience
    experience: {
      title: 'Experience',
      description: '10+ years connecting user needs, business goals, and technical feasibility in global projects.',
      employersTitle: 'Experience',
      universitiesTitle: 'Education'
    },
    
    // Portfolio
    portfolio: {
      title: 'Portfolio',
      description: 'Projects that balance discovery, delivery, and continuous improvement.',
      allProjects: 'All',
      readCase: 'Read case',
      filterByArea: 'Filter by area',
      clearFilters: 'Clear filters',
      partners: 'Partners'
    },
    
    // About
    about: {
      title: 'About',
      bioTitle: 'Bio',
      skillsTitle: 'Focus',
      languagesTitle: 'Languages',
      certificationsTitle: 'Certifications',
      publicationsTitle: 'Publications',
      supportersTitle: 'Supporters',
      nativePt: 'Native',
      fluentEn: 'C1',
      fluentEs: 'C1+',
      learningFr: 'A2 — in progress',
      education: 'Education',
      talksTitle: 'Talks & Presentations',
      talksDesc: 'Lectures at scientific, social and political events on technology, democracy, gender and algorithms.',
      talksCount: 'talks',
      eventTypes: 'event types',
      viewAll: 'View all',
      publicationsCardTitle: 'Scientific Publications',
      publicationsCardDesc: 'Articles, papers and research published in journals and conferences on technology, society and education.',
      publicationsCount: 'publications',
      withLink: 'with link',
      years: 'years',
      activeYears: 'active years',
      pageTitle: 'About',
      pageDescription: 'Journey, education and work philosophy',
      yearsExperience: 'Years of experience',
      countries: 'Countries',
      globalProjects: 'Global projects',
      certifications: 'Certifications',
      personalTitle: 'A bit about Ellen outside of work',
      personalBio: 'I was born into a large family — we are six siblings — and perhaps that\'s where my love for community and movement comes from. From southern Brazil, I\'ve made the world my playground: I\'ve lived in over ten places across four countries. I love traveling, experiencing the new and curious. A self-proclaimed nerd, I have a sociotechnical lens on things and a curiosity that drives me. I\'m married to a wonderful woman, have two cats, Melissa and Manuela, and can rarely turn down a good bar table conversation — especially if it involves a cold beer in the late afternoon. I enjoy team sports like soccer and pickleball, and harbor an underexplored passion for sailing.'
    },
    
    // Contact
    contact: {
      title: 'Contact',
      description: 'Let\'s talk about product, strategy, or quality.',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn',
      downloadCV: 'Download CV',
      or: 'or',
      phoneCA: 'Canada',
      phoneBR: 'Brazil',
      letsTalk: 'Let\'s talk?',
      collaborationInterests: 'Collaboration interests',
      productStrategy: 'Product strategy',
      qualityConsulting: 'Quality consulting',
      workshopsTraining: 'Workshops and training',
      talksEvents: 'Talks and events'
    },
    
    // Case Study
    case: {
      context: 'Context',
      challenge: 'Challenge',
      approach: 'Approach',
      outcomes: 'Outcomes',
      backToPortfolio: 'Back to portfolio',
      notFound: 'Project not found'
    },
    
    // 404
    notFound: {
      title: '404',
      description: 'Page not found',
      backHome: 'Back to home'
    },
    
    // Common
    common: {
      loading: 'Loading...',
      readMore: 'Read more',
      viewProject: 'View project',
      close: 'Close',
      openToProjects: 'Open to projects: Canada, Europe, Brazil',
      readEbook: 'Read Algorithms and Society'
    },
    
    // Services & Value
    services: {
      title: 'Services & Expertise',
      technologyStrategy: 'Technology Strategy',
      technologyStrategyDesc: 'Strategic consulting to align technology initiatives with business objectives, defining technological roadmaps and innovation governance',
      processProduct: 'Process & Product',
      processProductDesc: 'Design and optimization of software development processes, product lifecycle management, and continuous improvement methodologies',
      qualityAssurance: 'Quality Assurance',
      qualityAssuranceDesc: 'Implementation of comprehensive quality frameworks, testing strategies, and quality governance to ensure software excellence and reliability',
      complexSystems: 'Complex Systems Development',
      complexSystemsDesc: 'Architecture and development of scalable, high-performance systems with focus on resilience, security, and cutting-edge technologies'
    },
    
    value: {
      title: 'How I connect product, quality, and strategy',
      systemicThinking: 'Systemic Thinking',
      systemicThinkingDesc: 'Bringing together social, technical, and business perspectives to understand complexity and design sustainable solutions.',
      innovation: 'Innovation as Delivery and Strategy',
      innovationDesc: 'Redefining innovation as a strategic driver for growth, embedding continuous improvement and data-informed decisions in every stage of product development.',
      research: 'Research in Practice',
      researchDesc: 'Combining analytical depth with hands-on experimentation to bridge research and execution.',
      collaborative: 'Collaborative Impact',
      collaborativeDesc: 'Building partnerships that align user needs, team learning, and business value — creating measurable impact through collaboration.'
    }
  },
  
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      portfolio: 'Portfolio',
      talks: 'Charlas',
      publications: 'Publicaciones',
      about: 'Sobre mí',
      contact: 'Contacto'
    },
    
    // Home
    home: {
      headline: 'Product & Strategy',
      subhead: 'Transformo problemas reais en soluciones escalables, equilibrando valor de negocio, experiencia y viabilidad técnica.',
      experienceTitle: 'Experiencia',
      educationTitle: 'Formación',
      featuredProjects: 'Proyectos destacados',
      viewAllProjects: 'Ver todos los proyectos'
    },
    
    // Experience
    experience: {
      title: 'Experiencia',
      description: 'Más de 10 años conectando necesidades del usuario, metas de negocio y viabilidad técnica en proyectos globales.',
      employersTitle: 'Experiencia',
      universitiesTitle: 'Formación'
    },
    
    // Portfolio
    portfolio: {
      title: 'Portfolio',
      description: 'Proyectos que equilibran descubrimiento, entrega y mejora continua.',
      allProjects: 'Todos',
      readCase: 'Leer caso',
      filterByArea: 'Filtrar por área',
      clearFilters: 'Limpiar filtros',
      partners: 'Socios'
    },
    
    // About
    about: {
      title: 'Sobre mí',
      bioTitle: 'Bio',
      skillsTitle: 'Enfoque',
      languagesTitle: 'Idiomas',
      certificationsTitle: 'Certificaciones',
      publicationsTitle: 'Publicaciones',
      supportersTitle: 'Colaboradores',
      nativePt: 'Nativo',
      fluentEn: 'C1',
      fluentEs: 'C1+',
      learningFr: 'A2 — en progreso',
      education: 'Formación',
      talksTitle: 'Charlas & Presentaciones',
      talksDesc: 'Conferencias en eventos científicos, sociales y políticos sobre tecnología, democracia, género y algoritmos.',
      talksCount: 'charlas',
      eventTypes: 'tipos de eventos',
      viewAll: 'Ver todas',
      publicationsCardTitle: 'Publicaciones Científicas',
      publicationsCardDesc: 'Artículos, papers e investigaciones publicados en revistas y conferencias sobre tecnología, sociedad y educación.',
      publicationsCount: 'publicaciones',
      withLink: 'con enlace',
      years: 'años',
      activeYears: 'años activos',
      pageTitle: 'Sobre mí',
      pageDescription: 'Trayectoria, formación y filosofía de trabajo',
      yearsExperience: 'Años de experiencia',
      countries: 'Países',
      globalProjects: 'Proyectos globales',
      certifications: 'Certificaciones',
      personalTitle: 'Un poco sobre Ellen fuera del trabajo',
      personalBio: 'Nací en una familia grande — somos seis hermanos — y tal vez de ahí venga mi gusto por la convivencia y el movimiento. Del sur de Brasil, fui haciendo del mundo mi patio: ya viví en más de diez lugares, en cuatro países. Amo viajar, vivir lo nuevo y lo curioso. Nerd declarada, tengo una mirada más sociotécnica sobre las cosas y una curiosidad que me mueve. Estoy casada con una mujer maravillosa, tengo dos gatitas, Melissa y Manuela, y difícilmente rechazo una buena conversación de mesa de bar — especialmente si es con una cervecita al final de la tarde. Me gustan los deportes colectivos, como fútbol y pickleball, y guardo una pasión poco explorada por navegar a vela.'
    },
    
    // Contact
    contact: {
      title: 'Contacto',
      description: 'Hablemos sobre producto, estrategia o calidad.',
      email: 'Email',
      phone: 'Teléfono',
      linkedin: 'LinkedIn',
      downloadCV: 'Descargar CV',
      or: 'o',
      phoneCA: 'Canadá',
      phoneBR: 'Brasil',
      letsTalk: '¿Hablamos?',
      collaborationInterests: 'Intereses de colaboración',
      productStrategy: 'Estrategia de producto',
      qualityConsulting: 'Consultoría en calidad',
      workshopsTraining: 'Talleres y capacitación',
      talksEvents: 'Charlas y eventos'
    },
    
    // Case Study
    case: {
      context: 'Contexto',
      challenge: 'Desafío',
      approach: 'Enfoque',
      outcomes: 'Resultados',
      backToPortfolio: 'Volver al portfolio',
      notFound: 'Proyecto no encontrado'
    },
    
    // 404
    notFound: {
      title: '404',
      description: 'Página no encontrada',
      backHome: 'Volver al inicio'
    },
    
    // Common
    common: {
      loading: 'Cargando...',
      readMore: 'Leer más',
      viewProject: 'Ver proyecto',
      close: 'Cerrar',
      openToProjects: 'Abierta a proyectos: Canadá, Europa, Brasil',
      readEbook: 'Lea Algoritmos y Sociedad'
    },
    
    // Services & Value
    services: {
      title: 'Servicios & Especialidades',
      technologyStrategy: 'Estrategia Tecnológica',
      technologyStrategyDesc: 'Consultoría estratégica para alinear iniciativas tecnológicas con objetivos de negocio, definiendo roadmaps tecnológicos y gobernanza de innovación',
      processProduct: 'Proceso & Producto',
      processProductDesc: 'Diseño y optimización de procesos de desarrollo de software, gestión de ciclo de vida de producto y metodologías de mejora continua',
      qualityAssurance: 'Garantía de Calidad',
      qualityAssuranceDesc: 'Implementación de frameworks integrales de calidad, estrategias de testing y gobernanza de calidad para garantizar excelencia y confiabilidad de software',
      complexSystems: 'Desarrollo de Sistemas Complejos',
      complexSystemsDesc: 'Arquitectura y desarrollo de sistemas escalables y de alto rendimiento con foco en resiliencia, seguridad y tecnologías de punta'
    },
    
    value: {
      title: 'Cómo conecto producto, calidad y estrategia',
      systemicThinking: 'Pensamiento Sistémico',
      systemicThinkingDesc: 'Integro perspectivas sociales, técnicas y de negocio para comprender la complejidad y diseñar soluciones sostenibles.',
      innovation: 'Innovación como Entrega y Estrategia',
      innovationDesc: 'Redefino la innovación como motor estratégico de crecimiento, incorporando mejora continua y decisiones basadas en datos en todas las etapas del desarrollo de producto.',
      research: 'Investigación en la Práctica',
      researchDesc: 'Combino profundidad analítica con experimentación práctica, conectando investigación y ejecución.',
      collaborative: 'Impacto Colaborativo',
      collaborativeDesc: 'Construyo asociaciones que alinean necesidades del usuario, aprendizaje del equipo y valor de negocio — generando impacto medible a través de la colaboración.'
    }
  }
};

export function useTranslation(language: Language) {
  return translations[language];
}