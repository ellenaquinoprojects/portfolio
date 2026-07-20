// Complete portfolio content translations for all projects
// Maps project slugs to their translated content

export type ProjectTranslations = {
  [slug: string]: {
    summary: { pt: string; en: string; es: string };
    status?: { pt: string; en: string; es: string };
    quickInfo?: {
      problem: { pt: string; en: string; es: string };
      process: { pt: string; en: string; es: string };
      solution: { pt: string; en: string; es: string };
      result?: { pt: string; en: string; es: string };
    };
    challenge: { pt: string; en: string; es: string };
    approach: { pt: string; en: string; es: string };
    role: { pt: string; en: string; es: string };
    keyFeatures?: Array<{ pt: string; en: string; es: string }>;
    strategicVisionTitle?: { pt: string; en: string; es: string };
    strategicVisionDescription?: { pt: string; en: string; es: string };
    impact?: { pt: string; en: string; es: string };
    mediaHighlight?: { pt: string; en: string; es: string };
  };
};

export const portfolioTranslations: ProjectTranslations = {
  'gghub-approach-tours': {
    summary: {
      pt: "Plataforma interna para centralizar operações e comunicações de grupos de viagem +50.",
      en: "Internal platform to centralize operations and communications for 50+ travel groups.",
      es: "Plataforma interna para centralizar operaciones y comunicaciones de grupos de viaje +50."
    },
    status: {
      pt: "Em desenvolvimento — versão MVP em validação com usuários internos",
      en: "In development — MVP version under validation with internal users",
      es: "En desarrollo — versión MVP en validación con usuarios internos"
    },
    quickInfo: {
      problem: {
        pt: "Operações gerenciadas por múltiplas planilhas dispersas, causando lentidão e erros em processos críticos de coordenação de viagens.",
        en: "Operations managed by multiple scattered spreadsheets, causing slowness and errors in critical travel coordination processes.",
        es: "Operaciones gestionadas por múltiples hojas de cálculo dispersas, causando lentitud y errores en procesos críticos de coordinación de viajes."
      },
      process: {
        pt: "Discovery operacional → Mapeamento de jornadas → UI Design para 3 perfis → Integração Supabase → Testes iterativos.",
        en: "Operational Discovery → Journey Mapping → UI Design for 3 profiles → Supabase Integration → Iterative Testing.",
        es: "Discovery operacional → Mapeo de jornadas → Diseño UI para 3 perfiles → Integración Supabase → Pruebas iterativas."
      },
      solution: {
        pt: "Hub centralizado com autenticação por perfil, gestão de tours, cronogramas e checklists — interface acessível para público +50.",
        en: "Centralized hub with profile-based authentication, tour management, schedules, and checklists — accessible interface for 50+ audience.",
        es: "Hub centralizado con autenticación por perfil, gestión de tours, cronogramas y checklists — interfaz accesible para público +50."
      }
    },
    challenge: {
      pt: "Com o crescimento das operações e aumento no número de grupos, a Approach Tours enfrentava processos lentos e propensos a erro. O desafio era unificar informações dispersas em planilhas e criar uma experiência simples e acessível para um público com diferentes níveis de familiaridade digital.",
      en: "With the growth of operations and increase in group numbers, Approach Tours faced slow and error-prone processes. The challenge was to unify scattered information in spreadsheets and create a simple and accessible experience for an audience with different levels of digital familiarity.",
      es: "Con el crecimiento de las operaciones y el aumento en el número de grupos, Approach Tours enfrentaba procesos lentos y propensos a errores. El desafío era unificar información dispersa en hojas de cálculo y crear una experiencia simple y accesible para un público con diferentes niveles de familiaridad digital."
    },
    approach: {
      pt: "Hub digital centralizado desenvolvido em 4 frentes: (1) Ideação e Planejamento com stakeholders para definição do MVP; (2) UI Design para 3 perfis (admin, guia, viajante); (3) Integração Supabase com modelagem completa de dados; (4) Validação iterativa com testes de usabilidade e ajustes baseados em feedback.",
      en: "Centralized digital hub developed in 4 fronts: (1) Ideation and Planning with stakeholders for MVP definition; (2) UI Design for 3 profiles (admin, guide, traveler); (3) Supabase Integration with complete data modeling; (4) Iterative validation with usability testing and feedback-based adjustments.",
      es: "Hub digital centralizado desarrollado en 4 frentes: (1) Ideación y Planificación con stakeholders para definición del MVP; (2) Diseño UI para 3 perfiles (admin, guía, viajero); (3) Integración Supabase con modelado completo de datos; (4) Validación iterativa con pruebas de usabilidad y ajustes basados en feedback."
    },
    role: {
      pt: "Product Lead responsável pela concepção end-to-end: arquitetura funcional, design de interface, integração de banco de dados, e coordenação de testes com usuários.",
      en: "Product Lead responsible for end-to-end conception: functional architecture, interface design, database integration, and user testing coordination.",
      es: "Product Lead responsable de la concepción end-to-end: arquitectura funcional, diseño de interfaz, integración de base de datos y coordinación de pruebas con usuarios."
    },
    keyFeatures: [
      {
        pt: "Sistema de autenticação com perfis diferenciados (Admin, Guia, Viajante)",
        en: "Authentication system with differentiated profiles (Admin, Guide, Traveler)",
        es: "Sistema de autenticación con perfiles diferenciados (Admin, Guía, Viajero)"
      },
      {
        pt: "Gestão centralizada de tours e cronogramas",
        en: "Centralized management of tours and schedules",
        es: "Gestión centralizada de tours y cronogramas"
      },
      {
        pt: "Interface acessível e intuitiva para público +50",
        en: "Accessible and intuitive interface for 50+ audience",
        es: "Interfaz accesible e intuitiva para público +50"
      },
      {
        pt: "Integração completa com Supabase para persistência de dados",
        en: "Complete Supabase integration for data persistence",
        es: "Integración completa con Supabase para persistencia de datos"
      },
      {
        pt: "Checklists operacionais e ferramentas de coordenação",
        en: "Operational checklists and coordination tools",
        es: "Checklists operacionales y herramientas de coordinación"
      }
    ]
  },

  'qualitymap-app': {
    summary: {
      pt: "Plataforma de Business Intelligence com IA que transforma qualidade em motor estratégico de crescimento, conectando produto, processos e pessoas através de diagnósticos automatizados, análises preditivas e dashboards dinâmicos.",
      en: "Business Intelligence platform with AI that transforms quality into a strategic growth engine, connecting product, processes, and people through automated diagnostics, predictive analytics, and dynamic dashboards.",
      es: "Plataforma de Business Intelligence con IA que transforma la calidad en motor estratégico de crecimiento, conectando producto, procesos y personas a través de diagnósticos automatizados, análisis predictivos y dashboards dinámicos."
    },
    quickInfo: {
      problem: {
        pt: "Mercado de qualidade atua reativamente sem ferramentas integradas, gerando retrabalho, desperdício e decisões baseadas em percepção ao invés de dados.",
        en: "Quality market acts reactively without integrated tools, generating rework, waste, and perception-based decisions instead of data-driven ones.",
        es: "Mercado de calidad actúa reactivamente sin herramientas integradas, generando retrabajo, desperdicio y decisiones basadas en percepción en lugar de datos."
      },
      process: {
        pt: "User Discovery → Data Modeling (7 dimensões de maturidade) → AI/ML integration → Virtual Assistant + Financial Calculator → Multitenant architecture.",
        en: "User Discovery → Data Modeling (7 maturity dimensions) → AI/ML integration → Virtual Assistant + Financial Calculator → Multitenant architecture.",
        es: "User Discovery → Data Modeling (7 dimensiones de madurez) → AI/ML integration → Virtual Assistant + Financial Calculator → Multitenant architecture."
      },
      solution: {
        pt: "Plataforma BI+AI com diagnósticos automatizados, análises preditivas, dashboards dinâmicos e assistente virtual consultivo — transforma QA em motor estratégico.",
        en: "BI+AI platform with automated diagnostics, predictive analytics, dynamic dashboards, and consultative virtual assistant — transforms QA into strategic engine.",
        es: "Plataforma BI+AI con diagnósticos automatizados, análisis predictivos, dashboards dinámicos y asistente virtual consultivo — transforma QA en motor estratégico."
      },
      result: {
        pt: "664 acessos e 50 empresas ativas em 6 meses sem mídia paga • MVP validou tração orgânica e product-market fit",
        en: "664 accesses and 50 active companies in 6 months without paid media • MVP validated organic traction and product-market fit",
        es: "664 accesos y 50 empresas activas en 6 meses sin medios pagados • MVP validó tracción orgánica y product-market fit"
      }
    },
    challenge: {
      pt: "Equipes de qualidade atuam reativamente sem visão estratégica integrada. O desafio era reposicionar QA de centro de custo para motor de crescimento orientado por dados, escalando o know-how consultivo em plataforma autônoma.",
      en: "Quality teams act reactively without integrated strategic vision. The challenge was to reposition QA from cost center to data-driven growth engine, scaling consultative know-how into an autonomous platform.",
      es: "Equipos de calidad actúan reactivamente sin visión estratégica integrada. El desafío era reposicionar QA de centro de costos a motor de crecimiento orientado por datos, escalando el know-how consultivo en plataforma autónoma."
    },
    approach: {
      pt: "Spinoff BI+AI que mede, prevê e guia maturidade de qualidade através de diagnósticos automatizados, cruzamento inteligente de dados (produto × processo × pessoas), e insights de ROI com arquitetura multitenant escalável.",
      en: "BI+AI spinoff that measures, predicts, and guides quality maturity through automated diagnostics, intelligent data crossover (product × process × people), and ROI insights with scalable multitenant architecture.",
      es: "Spinoff BI+AI que mide, predice y guía madurez de calidad a través de diagnósticos automatizados, cruce inteligente de datos (producto × proceso × personas), e insights de ROI con arquitectura multitenant escalable."
    },
    role: {
      pt: "CPO & Co-Founder. Defini visão/roadmap, liderei discovery e modelagem de dados (7 dimensões), orientei design/desenvolvimento de features-chave garantindo usabilidade, escalabilidade e impacto mensurável.",
      en: "CPO & Co-Founder. Defined vision/roadmap, led discovery and data modeling (7 dimensions), guided design/development of key features ensuring usability, scalability, and measurable impact.",
      es: "CPO & Co-Founder. Definí visión/roadmap, lideré discovery y modelado de datos (7 dimensiones), orienté diseño/desarrollo de features clave garantizando usabilidad, escalabilidad e impacto medible."
    },
    keyFeatures: [
      {
        pt: "Maturity Score (QualityScore) integrado como métrica central",
        en: "Maturity Score (QualityScore) integrated as central metric",
        es: "Maturity Score (QualityScore) integrado como métrica central"
      },
      {
        pt: "Virtual Assistant com lógica consultiva e geração de diagnósticos",
        en: "Virtual Assistant with consultative logic and diagnostic generation",
        es: "Virtual Assistant con lógica consultiva y generación de diagnósticos"
      },
      {
        pt: "Financial Impact Calculator que converte gaps de qualidade em valor monetário",
        en: "Financial Impact Calculator that converts quality gaps into monetary value",
        es: "Financial Impact Calculator que convierte gaps de calidad en valor monetario"
      },
      {
        pt: "Custom KPIs & Dashboards adaptados a cada perfil",
        en: "Custom KPIs & Dashboards adapted to each profile",
        es: "Custom KPIs & Dashboards adaptados a cada perfil"
      },
      {
        pt: "Predictive Analytics para antecipar riscos e oportunidades",
        en: "Predictive Analytics to anticipate risks and opportunities",
        es: "Predictive Analytics para anticipar riesgos y oportunidades"
      },
      {
        pt: "Modular multitenant architecture, permitindo escala com baixo custo marginal",
        en: "Modular multitenant architecture, enabling scaling with low marginal cost",
        es: "Modular multitenant architecture, permitiendo escala con bajo costo marginal"
      }
    ],
    strategicVisionTitle: {
      pt: "Transformando Qualidade em Visão Estratégica",
      en: "Transforming Quality into Strategic Vision",
      es: "Transformando Calidad en Visión Estratégica"
    },
    strategicVisionDescription: {
      pt: "A plataforma oferece visualizações avançadas que transformam dados brutos em insights estratégicos. Através de gráficos interativos e análises multidimensionais, gestores podem identificar tendências, prever riscos e tomar decisões baseadas em evidências concretas.",
      en: "The platform offers advanced visualizations that transform raw data into strategic insights. Through interactive charts and multidimensional analyses, managers can identify trends, predict risks, and make decisions based on concrete evidence.",
      es: "La plataforma ofrece visualizaciones avanzadas que transforman datos brutos en insights estratégicos. A través de gráficos interactivos y análisis multidimensionales, gestores pueden identificar tendencias, predecir riesgos y tomar decisiones basadas en evidencias concretas."
    }
  },

  'quality-score-metodologia': {
    summary: {
      pt: "Modelo proprietário que utiliza dados e análise estatística para classificar a maturidade de qualidade de software em sete dimensões-chave, gerando insights acionáveis para governança e evolução estratégica.",
      en: "Proprietary model that uses data and statistical analysis to classify software quality maturity across seven key dimensions, generating actionable insights for governance and strategic evolution.",
      es: "Modelo propietario que utiliza datos y análisis estadístico para clasificar la madurez de calidad de software en siete dimensiones clave, generando insights accionables para gobernanza y evolución estratégica."
    },
    quickInfo: {
      problem: {
        pt: "Organizações sem capacidade de medir maturidade de qualidade de forma ampla e precisa, limitando priorização e melhorias estruturadas.",
        en: "Organizations without capacity to measure quality maturity broadly and accurately, limiting prioritization and structured improvements.",
        es: "Organizaciones sin capacidad de medir madurez de calidad de forma amplia y precisa, limitando priorización y mejoras estructuradas."
      },
      process: {
        pt: "Framework de 100 perguntas em 7 dimensões → Análise estatística (correlação + clusterização) → Gráficos radar + mapas de calor → Planos de ação (GOALS).",
        en: "Framework of 100 questions across 7 dimensions → Statistical analysis (correlation + clustering) → Radar charts + heat maps → Action plans (GOALS).",
        es: "Framework de 100 preguntas en 7 dimensiones → Análisis estadístico (correlación + clusterización) → Gráficos radar + mapas de calor → Planes de acción (GOALS)."
      },
      solution: {
        pt: "Modelo proprietário com escala de 0-5 níveis de maturidade, combinando análise quantitativa e qualitativa para índice integrado e benchmarking.",
        en: "Proprietary model with 0-5 maturity scale, combining quantitative and qualitative analysis for integrated index and benchmarking.",
        es: "Modelo propietario con escala de 0-5 niveles de madurez, combinando análisis cuantitativo y cualitativo para índice integrado y benchmarking."
      },
      result: {
        pt: "Metodologia adotada como métrica periódica de governança • Permite benchmarking entre empresas e estratégias personalizadas de evolução",
        en: "Methodology adopted as periodic governance metric • Enables benchmarking between companies and personalized evolution strategies",
        es: "Metodología adoptada como métrica periódica de gobernanza • Permite benchmarking entre empresas y estrategias personalizadas de evolución"
      }
    },
    challenge: {
      pt: "Organizações não tinham ferramentas para medir maturidade de qualidade de forma estruturada e comparável, dificultando priorização e investimentos estratégicos.",
      en: "Organizations lacked tools to measure quality maturity in a structured and comparable way, hindering prioritization and strategic investments.",
      es: "Organizaciones no tenían herramientas para medir madurez de calidad de forma estructurada y comparable, dificultando priorización e inversiones estratégicas."
    },
    approach: {
      pt: "Framework proprietário com 100 perguntas em 7 dimensões (Processos, Automações, Métricas, Testes, Documentações, QAOps, Liderança). Combina análise quantitativa (escala 0-5 + ponderação) e qualitativa (correlação + clusterização) para índice integrado.",
      en: "Proprietary framework with 100 questions across 7 dimensions (Processes, Automation, Metrics, Testing, Documentation, QAOps, Leadership). Combines quantitative analysis (0-5 scale + weighting) and qualitative (correlation + clustering) for integrated index.",
      es: "Framework propietario con 100 preguntas en 7 dimensiones (Procesos, Automatizaciones, Métricas, Pruebas, Documentaciones, QAOps, Liderazgo). Combina análisis cuantitativo (escala 0-5 + ponderación) y cualitativo (correlación + clusterización) para índice integrado."
    },
    role: {
      pt: "Concepção metodológica, modelagem estatística, desenho de visualizações (radar + mapas de calor) e framework de interpretação para planos de ação.",
      en: "Methodological conception, statistical modeling, visualization design (radar + heat maps) and interpretation framework for action plans.",
      es: "Concepción metodológica, modelado estadístico, diseño de visualizaciones (radar + mapas de calor) y framework de interpretación para planes de acción."
    },
    impact: {
      pt: "O QualityScore passou a ser utilizado como métrica periódica de governança de qualidade na QualityMap, permitindo:\n\n• Benchmarking entre empresas\n• Identificação de tendências de maturidade\n• Apoio à priorização de investimentos em qualidade\n• Formulação de estratégias personalizadas de evolução",
      en: "QualityScore has been adopted as a periodic quality governance metric at QualityMap, enabling:\n\n• Benchmarking between companies\n• Identification of maturity trends\n• Support for prioritization of quality investments\n• Formulation of personalized evolution strategies",
      es: "QualityScore se ha adoptado como métrica periódica de gobernanza de calidad en QualityMap, permitiendo:\n\n• Benchmarking entre empresas\n• Identificación de tendencias de madurez\n• Apoyo a la priorización de inversiones en calidad\n• Formulación de estrategias personalizadas de evolución"
    }
  },

  'edu-3d-remote-labs': {
    summary: {
      pt: "Ambiente de ensino-aprendizagem imersivo que integra mundos virtuais 3D com experimentação remota real, desenvolvido com tecnologias open source.",
      en: "Immersive teaching-learning environment that integrates 3D virtual worlds with real remote experimentation, developed with open source technologies.",
      es: "Ambiente de enseñanza-aprendizaje inmersivo que integra mundos virtuales 3D con experimentación remota real, desarrollado con tecnologías open source."
    },
    quickInfo: {
      problem: {
        pt: "Mundos virtuais educacionais não proporcionavam acesso à experimentação real, limitando a experiência prática dos estudantes à distância.",
        en: "Educational virtual worlds did not provide access to real experimentation, limiting the practical experience of distance students.",
        es: "Mundos virtuales educacionales no proporcionaban acceso a experimentación real, limitando la experiencia práctica de estudiantes a distancia."
      },
      process: {
        pt: "Integração MOODLE + OpenSim + SLOODLE (tecnologias open source) → Implementação de laboratórios remotos reais → Design de experiência imersiva → Validação pedagógica.",
        en: "MOODLE + OpenSim + SLOODLE integration (open source technologies) → Implementation of real remote laboratories → Immersive experience design → Pedagogical validation.",
        es: "Integración MOODLE + OpenSim + SLOODLE (tecnologías open source) → Implementación de laboratorios remotos reales → Diseño de experiencia inmersiva → Validación pedagógica."
      },
      solution: {
        pt: "Ambiente 3D com representações sociais integrado a laboratórios de experimentação remota real, proporcionando realidade científica mediada por distância.",
        en: "3D environment with social representations integrated with real remote experimentation laboratories, providing scientific reality mediated by distance.",
        es: "Ambiente 3D con representaciones sociales integrado a laboratorios de experimentación remota real, proporcionando realidad científica mediada por distancia."
      },
      result: {
        pt: "Publicação científica indexada • Ambiente validado com estudantes • Modelo replicável para instituições educacionais open source",
        en: "Indexed scientific publication • Environment validated with students • Replicable model for open source educational institutions",
        es: "Publicación científica indexada • Ambiente validado con estudiantes • Modelo replicable para instituciones educacionales open source"
      }
    },
    challenge: {
      pt: "Mundos virtuais representam um meio poderoso para ensino-aprendizagem que, através da consciência do ambiente, permitem manter interações sociais, as quais podem se constituir em base para educação colaborativa. O desafio era criar um ambiente que fornecesse acesso à informação de forma dinâmica e interativa, mais próximo da realidade física dos estudantes, facilitando e aumentando a motivação nas tarefas de aprendizagem virtual.",
      en: "Virtual worlds represent a powerful medium for teaching-learning that, through environment awareness, allow maintaining social interactions, which can form the basis for collaborative education. The challenge was to create an environment that provided access to information in a dynamic and interactive way, closer to students' physical reality, facilitating and increasing motivation in virtual learning tasks.",
      es: "Mundos virtuales representan un medio poderoso para enseñanza-aprendizaje que, a través de la conciencia del ambiente, permiten mantener interacciones sociales, las cuales pueden constituir una base para educación colaborativa. El desafío era crear un ambiente que proporcionara acceso a la información de forma dinámica e interactiva, más cercano a la realidad física de los estudiantes, facilitando y aumentando la motivación en tareas de aprendizaje virtual."
    },
    approach: {
      pt: "O projeto contempla a implementação de um ambiente que utiliza representações sociais 3D, integrando recursos do MOODLE (Learning Management System), OpenSim (servidor de mundos virtuais) e SLOODLE (mashup do MOODLE com Second Life) — todas tecnologias de código aberto. A inclusão de experimentação remota visa associá-la aos materiais de ensino disponíveis no ambiente, proporcionando uma realidade científica com propósitos educacionais. Os laboratórios de experimentação remota são caracterizados pela realidade mediada por distância e podem proporcionar aos estudantes uma aproximação ao mundo real, aumentando a flexibilidade e o alcance colaborativo das atividades de ensino-aprendizagem.",
      en: "The project involves implementing an environment that uses 3D social representations, integrating resources from MOODLE (Learning Management System), OpenSim (virtual worlds server), and SLOODLE (MOODLE mashup with Second Life) — all open source technologies. The inclusion of remote experimentation aims to associate it with teaching materials available in the environment, providing scientific reality for educational purposes. Remote experimentation laboratories are characterized by distance-mediated reality and can provide students with an approximation to the real world, increasing flexibility and collaborative reach of teaching-learning activities.",
      es: "El proyecto contempla la implementación de un ambiente que utiliza representaciones sociales 3D, integrando recursos de MOODLE (Learning Management System), OpenSim (servidor de mundos virtuales) y SLOODLE (mashup de MOODLE con Second Life) — todas tecnologías de código abierto. La inclusión de experimentación remota busca asociarla a los materiales de enseñanza disponibles en el ambiente, proporcionando una realidad científica con propósitos educacionales. Los laboratorios de experimentación remota se caracterizan por la realidad mediada por distancia y pueden proporcionar a los estudiantes una aproximación al mundo real, aumentando la flexibilidad y el alcance colaborativo de las actividades de enseñanza-aprendizaje."
    },
    role: {
      pt: "Pesquisa e desenvolvimento do ambiente 3D, integração de laboratórios remotos, alinhamento pedagógico e design da experiência de aprendizagem imersiva.",
      en: "Research and development of 3D environment, integration of remote laboratories, pedagogical alignment, and immersive learning experience design.",
      es: "Investigación y desarrollo del ambiente 3D, integración de laboratorios remotos, alineamiento pedagógico y diseño de la experiencia de aprendizaje inmersiva."
    }
  },

  'alimentar-direitos-desinformacao-saude': {
    summary: {
      pt: "Website educacional para letramento digital voltado ao combate à desinformação sobre alimentação e saúde nas mídias digitais, desenvolvido pelo Instituto NUTES/UFRJ em parceria com o Ministério Público do Rio de Janeiro.",
      en: "Educational website for digital literacy aimed at combating misinformation about food and health in digital media, developed by NUTES/UFRJ Institute in partnership with the Public Prosecutor's Office of Rio de Janeiro.",
      es: "Sitio web educacional para alfabetización digital orientado al combate de la desinformación sobre alimentación y salud en medios digitales, desarrollado por el Instituto NUTES/UFRJ en asociación con el Ministerio Público de Rio de Janeiro."
    },
    quickInfo: {
      problem: {
        pt: "Desinformação sobre alimentação e saúde se espalha rapidamente em mídias digitais, prejudicando decisões de consumidores e a saúde pública.",
        en: "Misinformation about food and health spreads rapidly in digital media, harming consumer decisions and public health.",
        es: "Desinformación sobre alimentación y salud se propaga rápidamente en medios digitales, perjudicando decisiones de consumidores y la salud pública."
      },
      process: {
        pt: "Pesquisa sobre padrões de desinformação → Mapeamento de mecanismos de difusão → Design de estratégias educacionais → Website interativo com materiais para letramento digital.",
        en: "Research on misinformation patterns → Mapping of diffusion mechanisms → Design of educational strategies → Interactive website with materials for digital literacy.",
        es: "Investigación sobre patrones de desinformación → Mapeo de mecanismos de difusión → Diseño de estrategias educacionales → Sitio web interactivo con materiales para alfabetización digital."
      },
      solution: {
        pt: "Plataforma web educacional com recursos para capacitar cidadãos a identificar, avaliar e combater desinformação em saúde e alimentação.",
        en: "Educational web platform with resources to empower citizens to identify, evaluate, and combat misinformation in health and nutrition.",
        es: "Plataforma web educacional con recursos para capacitar ciudadanos a identificar, evaluar y combatir desinformación en salud y alimentación."
      },
      result: {
        pt: "Website desenvolvido pelo GEDES/NUTES/UFRJ em parceria com MPRJ • Materiais educacionais aplicados em programas de educação em saúde",
        en: "Website developed by GEDES/NUTES/UFRJ in partnership with MPRJ • Educational materials applied in health education programs",
        es: "Sitio web desarrollado por GEDES/NUTES/UFRJ en asociación con MPRJ • Materiales educacionales aplicados en programas de educación en salud"
      }
    },
    challenge: {
      pt: "Como enfrentar o crescimento da desinformação na sociedade brasileira atual? Uma das áreas que mais tem sofrido com as chamadas Fake News é a área de saúde. A desinformação sobre alimentação e saúde se espalha rapidamente pelas mídias digitais, impactando negativamente a tomada de decisões dos consumidores. É essencial que os cidadãos desenvolvam competências para lidar com as informações que acessam nas mídias digitais, especialmente quando a saúde pública está em jogo.",
      en: "How to address the growth of misinformation in current Brazilian society? One of the areas that has suffered most from so-called Fake News is health. Misinformation about food and health spreads rapidly through digital media, negatively impacting consumer decision-making. It is essential that citizens develop skills to deal with the information they access in digital media, especially when public health is at stake.",
      es: "¿Cómo enfrentar el crecimiento de la desinformación en la sociedad brasileña actual? Una de las áreas que más ha sufrido con las llamadas Fake News es el área de salud. La desinformación sobre alimentación y salud se propaga rápidamente por los medios digitales, impactando negativamente la toma de decisiones de los consumidores. Es esencial que los ciudadanos desarrollen competencias para lidiar con las informaciones a las que acceden en medios digitales, especialmente cuando la salud pública está en juego."
    },
    approach: {
      pt: "Website desenvolvido pelo Instituto NUTES de Educação em Ciências e Saúde da UFRJ, através do Grupo de Estudos sobre Desigualdades na Educação e na Saúde (GEDES), sob coordenação do Prof. Dr. Alexandre Brasil Carvalho da Fonseca, em parceria com o Ministério Público do Rio de Janeiro. O projeto tem foco em produzir reflexão e estratégias relacionadas ao uso de mídias digitais, com recorte específico na (des)informação sobre alimentos e saúde, promovendo letramento digital e pensamento crítico sobre direitos do consumidor.",
      en: "Website developed by NUTES Institute of Education in Sciences and Health at UFRJ, through the Study Group on Inequalities in Education and Health (GEDES), coordinated by Prof. Dr. Alexandre Brasil Carvalho da Fonseca, in partnership with the Public Prosecutor's Office of Rio de Janeiro. The project focuses on producing reflection and strategies related to the use of digital media, with specific emphasis on (mis)information about food and health, promoting digital literacy and critical thinking about consumer rights.",
      es: "Sitio web desarrollado por el Instituto NUTES de Educación en Ciencias y Salud de la UFRJ, a través del Grupo de Estudios sobre Desigualdades en la Educación y la Salud (GEDES), bajo coordinación del Prof. Dr. Alexandre Brasil Carvalho da Fonseca, en asociación con el Ministerio Público de Rio de Janeiro. El proyecto se enfoca en producir reflexión y estrategias relacionadas al uso de medios digitales, con recorte específico en la (des)información sobre alimentos y salud, promoviendo alfabetización digital y pensamiento crítico sobre derechos del consumidor."
    },
    role: {
      pt: "Pesquisa sobre desinformação em mídias digitais, mapeamento de padrões de disseminação de fake news em saúde, design de estratégias educacionais e desenvolvimento de materiais para letramento informacional.",
      en: "Research on misinformation in digital media, mapping patterns of health fake news dissemination, design of educational strategies, and development of materials for information literacy.",
      es: "Investigación sobre desinformación en medios digitales, mapeo de patrones de diseminación de fake news en salud, diseño de estrategias educacionales y desarrollo de materiales para alfabetización informacional."
    }
  },

  'simulador-covid-favelas': {
    summary: {
      pt: "Plataforma de simulação epidemiológica que modela o impacto de diferentes políticas públicas no controle da COVID-19 em comunidades de favelas, permitindo visualizar cenários e apoiar decisões baseadas em evidências.",
      en: "Epidemiological simulation platform that models the impact of different public policies on COVID-19 control in favela communities, allowing scenario visualization and supporting evidence-based decisions.",
      es: "Plataforma de simulación epidemiológica que modela el impacto de diferentes políticas públicas en el control de COVID-19 en comunidades de favelas, permitiendo visualizar escenarios y apoyar decisiones basadas en evidencias."
    },
    quickInfo: {
      problem: {
        pt: "Favelas enfrentavam desafios únicos na pandemia (alta densidade, saneamento precário) sem ferramentas para avaliar impacto de políticas públicas específicas.",
        en: "Favelas faced unique pandemic challenges (high density, poor sanitation) without tools to assess the impact of specific public policies.",
        es: "Favelas enfrentaban desafíos únicos en la pandemia (alta densidad, saneamiento precario) sin herramientas para evaluar impacto de políticas públicas específicas."
      },
      process: {
        pt: "Modelagem epidemiológica SIR/SEIR adaptada → Dinâmica de Sistemas → Integração dados SUS + favelas → Simulação de 7 dimensões de políticas → Interface interativa.",
        en: "Adapted SIR/SEIR epidemiological modeling → System Dynamics → Integration of SUS + favela data → Simulation of 7 policy dimensions → Interactive interface.",
        es: "Modelado epidemiológico SIR/SEIR adaptado → Dinámica de Sistemas → Integración datos SUS + favelas → Simulación de 7 dimensiones de políticas → Interfaz interactiva."
      },
      solution: {
        pt: "Simulador que cruza variáveis epidemiológicas com dados demográficos das favelas, permitindo comparação de cenários de intervenção em tempo real.",
        en: "Simulator that crosses epidemiological variables with demographic data from favelas, allowing real-time comparison of intervention scenarios.",
        es: "Simulador que cruza variables epidemiológicas con datos demográficos de las favelas, permitiendo comparación de escenarios de intervención en tiempo real."
      },
      result: {
        pt: "Cobertura em Forbes, Estadão, FAPESP • Usado por organizações sociais para advocacy baseado em evidências • Contribuiu para debate sobre equidade na pandemia",
        en: "Coverage in Forbes, Estadão, FAPESP • Used by social organizations for evidence-based advocacy • Contributed to debate on pandemic equity",
        es: "Cobertura en Forbes, Estadão, FAPESP • Usado por organizaciones sociales para advocacy basado en evidencias • Contribuyó para debate sobre equidad en la pandemia"
      }
    },
    challenge: {
      pt: "Movimento Favelas Contra o Coronavírus necessitava ferramenta para avaliar impacto de políticas públicas em comunidades vulneráveis — contexto de alta densidade, saneamento precário e acesso limitado a recursos de saúde.",
      en: "The Favelas Against Coronavirus Movement needed a tool to assess the impact of public policies in vulnerable communities — context of high density, poor sanitation, and limited access to health resources.",
      es: "Movimiento Favelas Contra el Coronavirus necesitaba herramienta para evaluar impacto de políticas públicas en comunidades vulnerables — contexto de alta densidad, saneamiento precario y acceso limitado a recursos de salud."
    },
    approach: {
      pt: "Plataforma baseada em Dinâmica de Sistemas e modelos SIR/SEIR, adaptada para alta densidade. Integra dados do SUS + demográficos de favelas para simular 7 dimensões de políticas (isolamento, hotelaria, higiene, renda básica, saneamento, UTIs, máscaras). Interface interativa permite comparação de cenários em tempo real.",
      en: "Platform based on System Dynamics and SIR/SEIR models, adapted for high density. Integrates SUS + demographic data from favelas to simulate 7 policy dimensions (isolation, hotels, hygiene, basic income, sanitation, ICUs, masks). Interactive interface allows real-time scenario comparison.",
      es: "Plataforma basada en Dinámica de Sistemas y modelos SIR/SEIR, adaptada para alta densidad. Integra datos del SUS + demográficos de favelas para simular 7 dimensiones de políticas (aislamiento, hotelería, higiene, renta básica, saneamiento, UTIs, máscaras). Interfaz interactiva permite comparación de escenarios en tiempo real."
    },
    role: {
      pt: "Modelagem de sistemas complexos, definição de variáveis epidemiológicas, design estratégico de simulação, e comunicação de insights para gestores públicos e sociedade civil.",
      en: "Complex systems modeling, definition of epidemiological variables, strategic simulation design, and communication of insights to public managers and civil society.",
      es: "Modelado de sistemas complejos, definición de variables epidemiológicas, diseño estratégico de simulación, y comunicación de insights para gestores públicos y sociedad civil."
    },
    mediaHighlight: {
      pt: "O simulador ganhou ampla cobertura de mídia em veículos como Forbes, Estadão, Agência FAPESP, e foi destacado em universidades como UFSCar, UFES e Insper.",
      en: "The simulator gained widespread media coverage in outlets such as Forbes, Estadão, FAPESP Agency, and was highlighted at universities such as UFSCar, UFES, and Insper.",
      es: "El simulador obtuvo amplia cobertura mediática en medios como Forbes, Estadão, Agencia FAPESP, y fue destacado en universidades como UFSCar, UFES e Insper."
    },
    impact: {
      pt: "O projeto contribuiu para o debate público sobre equidade no combate à pandemia e evidenciou as vulnerabilidades estruturais das favelas brasileiras.",
      en: "The project contributed to public debate on equity in pandemic response and highlighted structural vulnerabilities of Brazilian favelas.",
      es: "El proyecto contribuyó al debate público sobre equidad en el combate a la pandemia y evidenció las vulnerabilidades estructurales de las favelas brasileñas."
    }
  },

  'democracia-digital-desinformacao': {
    summary: {
      pt: "Coautora em projetos integrados de pesquisa aplicada, advocacy e desenvolvimento de ferramentas para combater desinformação e promover transparência digital nos processos eleitorais brasileiros.",
      en: "Co-author in integrated projects of applied research, advocacy, and tool development to combat misinformation and promote digital transparency in Brazilian electoral processes.",
      es: "Coautora en proyectos integrados de investigación aplicada, advocacy y desarrollo de herramientas para combatir desinformación y promover transparencia digital en procesos electorales brasileños."
    },
    quickInfo: {
      problem: {
        pt: "Desinformação e bots ameaçam integridade eleitoral brasileira sem bases tecnológicas robustas para regulação, fiscalização e educação digital.",
        en: "Misinformation and bots threaten Brazilian electoral integrity without robust technological bases for regulation, oversight, and digital education.",
        es: "Desinformación y bots amenazan integridad electoral brasileña sin bases tecnológicas robustas para regulación, fiscalización y educación digital."
      },
      process: {
        pt: "Pesquisa aplicada + Mapeamento sistêmico → White Paper com recomendações → PegaBot (ferramenta detecção bots) → Carta de Princípios #NãoValeTudo → Documentário.",
        en: "Applied research + Systemic mapping → White Paper with recommendations → PegaBot (bot detection tool) → Principles Charter #NãoValeTudo → Documentary.",
        es: "Investigación aplicada + Mapeo sistémico → White Paper con recomendaciones → PegaBot (herramienta detección bots) → Carta de Principios #NãoValeTudo → Documental."
      },
      solution: {
        pt: "Linha integrada de pesquisa, ferramentas cívicas e advocacy para transparência digital nos processos eleitorais — do diagnóstico à ação pública.",
        en: "Integrated line of research, civic tools, and advocacy for digital transparency in electoral processes — from diagnosis to public action.",
        es: "Línea integrada de investigación, herramientas cívicas y advocacy para transparencia digital en procesos electorales — del diagnóstico a la acción pública."
      },
      result: {
        pt: "White Paper adotado por instituições públicas • PegaBot com ampla adoção • Influenciou debate regulatório sobre desinformação eleitoral no Brasil",
        en: "White Paper adopted by public institutions • PegaBot with wide adoption • Influenced regulatory debate on electoral misinformation in Brazil",
        es: "White Paper adoptado por instituciones públicas • PegaBot con amplia adopción • Influyó debate regulatorio sobre desinformación electoral en Brasil"
      }
    },
    challenge: {
      pt: "Debates eleitorais sem bases metodológicas robustas para entender e combater desinformação e automação maliciosa nas redes sociais.",
      en: "Electoral debates without robust methodological bases to understand and combat misinformation and malicious automation on social networks.",
      es: "Debates electorales sin bases metodológicas robustas para entender y combatir desinformación y automatización maliciosa en redes sociales."
    },
    approach: {
      pt: "Linha integrada combinando: (1) Pesquisa aplicada com mapeamento sistêmico; (2) Ferramentas cívicas (PegaBot para detecção de bots); (3) Advocacy (carta #NãoValeTudo + documentário); (4) White Paper com recomendações para regulação.",
      en: "Integrated line combining: (1) Applied research with systemic mapping; (2) Civic tools (PegaBot for bot detection); (3) Advocacy (#NãoValeTudo charter + documentary); (4) White Paper with recommendations for regulation.",
      es: "Línea integrada combinando: (1) Investigación aplicada con mapeo sistémico; (2) Herramientas cívicas (PegaBot para detección de bots); (3) Advocacy (carta #NãoValeTudo + documental); (4) White Paper con recomendaciones para regulación."
    },
    role: {
      pt: "Coautora de estudos e White Paper sobre desinformação eleitoral (2018). Colaboração metodológica e conceitual em PegaBot, #NãoValeTudo, documentário, e mapeamentos sistêmicos para diagnóstico institucional.",
      en: "Co-author of studies and White Paper on electoral misinformation (2018). Methodological and conceptual collaboration on PegaBot, #NãoValeTudo, documentary, and systemic mapping for institutional diagnosis.",
      es: "Coautora de estudios y White Paper sobre desinformación electoral (2018). Colaboración metodológica y conceptual en PegaBot, #NãoValeTudo, documental, y mapeos sistémicos para diagnóstico institucional."
    }
  }
};

// Helper function to get translated content with fallback
export function getProjectTranslation(
  slug: string, 
  field: string, 
  language: 'pt' | 'en' | 'es', 
  defaultValue: any = ''
): any {
  const project = portfolioTranslations[slug];
  if (!project) return defaultValue;
  
  const keys = field.split('.');
  let current: any = project;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return defaultValue;
    }
  }
  
  if (current && typeof current === 'object' && language in current) {
    return current[language];
  }
  
  return defaultValue;
}

// Helper to get all key features translated
export function getKeyFeatures(slug: string, language: 'pt' | 'en' | 'es'): string[] {
  const project = portfolioTranslations[slug];
  if (!project?.keyFeatures) return [];
  
  return project.keyFeatures.map(feature => feature[language]);
}
