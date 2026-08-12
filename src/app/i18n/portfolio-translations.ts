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
      pt: "Plataforma web interna da Approach Tours para os Grow Guides (mais de 90 guias) e o time de operações (cerca de 20 pessoas). O guia opera tudo num lugar só: tours, treinamento (Academy), comunidade (Social Network), gamificação, perfil e suporte; o time interno gerencia guias, tours e configurações.",
      en: "Approach Tours' internal web platform for the Grow Guides (90+ guides) and the operations team (around 20 people). The guide runs everything in one place: tours, training (Academy), community (Social Network), gamification, profile, and support; the internal team manages guides, tours, and settings.",
      es: "Plataforma web interna de Approach Tours para los Grow Guides (más de 90 guías) y el equipo de operaciones (unas 20 personas). El guía gestiona todo en un solo lugar: tours, formación (Academy), comunidad (Social Network), gamificación, perfil y soporte; el equipo interno administra guías, tours y configuraciones."
    },
    quickInfo: {
      problem: {
        pt: "Guias e time interno operavam sem um lugar único: informação espalhada em planilhas e canais informais, e uma arquitetura que não escalava.",
        en: "Guides and internal team worked without a single place: information scattered across spreadsheets and informal channels, on an architecture that couldn't scale.",
        es: "Guías y equipo interno operaban sin un lugar único: información dispersa en hojas de cálculo y canales informales, sobre una arquitectura que no escalaba."
      },
      process: {
        pt: "Discovery com guias e operações → Redesenho de arquitetura (base central + camada de API) → Design system próprio → Deploy contínuo em Google Cloud.",
        en: "Discovery with guides and operations → Architecture redesign (central base + API layer) → In-house design system → Continuous deployment on Google Cloud.",
        es: "Discovery con guías y operaciones → Rediseño de arquitectura (base central + capa de API) → Design system propio → Despliegue continuo en Google Cloud."
      },
      solution: {
        pt: "Hub central para o Grow Guide (Academy, Social Network, gamificação, perfil, suporte) e backoffice para o time interno, integrado ao Peak15 (CRM) como fonte de verdade. Entregue além do escopo contratado.",
        en: "A central hub for the Grow Guide (Academy, Social Network, gamification, profile, support) and a backoffice for the internal team, integrated with Peak15 (CRM) as the source of truth. Delivered beyond contracted scope.",
        es: "Un hub central para el Grow Guide (Academy, Social Network, gamificación, perfil, soporte) y un backoffice para el equipo interno, integrado con Peak15 (CRM) como fuente de verdad. Entregado más allá del alcance contratado."
      }
    },
    challenge: {
      pt: "Os Grow Guides e o time interno da Approach Tours não tinham um lugar único para operar o dia a dia. Tours, treinamento, comunidade e gestão de pessoas ficavam espalhados em planilhas e canais informais, e a arquitetura anterior não escalava. O desafio era criar, do zero, um hub que servisse dois domínios (o guia e o time master/operational) sobre uma base sólida.",
      en: "Approach Tours' Grow Guides and internal team had no single place to run day-to-day work. Tours, training, community, and people management were scattered across spreadsheets and informal channels, and the previous architecture couldn't scale. The challenge was to build, from scratch, one hub serving two domains (the guide and the master/operational team) on a solid base.",
      es: "Los Grow Guides y el equipo interno de Approach Tours no tenían un lugar único para gestionar el día a día. Tours, formación, comunidad y gestión de personas estaban dispersos en hojas de cálculo y canales informales, y la arquitectura anterior no escalaba. El desafío era crear, desde cero, un hub que sirviera a dos dominios (el guía y el equipo master/operational) sobre una base sólida."
    },
    approach: {
      pt: "Plataforma construída do zero sobre um design system próprio, com dois domínios: a área do Grow Guide e o backoffice interno. Fez parte de um redesenho completo de arquitetura para uma base central de dados e camada de API (serviços independentes, orientados a eventos). Stack React 18 + TypeScript + NestJS + PostgreSQL em Google Cloud, com Terraform (IaC) e CI/CD via GitHub Actions, e integração read-only com o Peak15 (CRM).",
      en: "A platform built from scratch on an in-house design system, with two domains: the Grow Guide area and the internal backoffice. It was part of a full architecture redesign to a central data base and API layer (independent, event-driven services). React 18 + TypeScript + NestJS + PostgreSQL stack on Google Cloud, with Terraform (IaC) and CI/CD via GitHub Actions, and read-only integration with Peak15 (CRM).",
      es: "Plataforma construida desde cero sobre un design system propio, con dos dominios: el área del Grow Guide y el backoffice interno. Formó parte de un rediseño completo de arquitectura hacia una base central de datos y capa de API (servicios independientes, orientados a eventos). Stack React 18 + TypeScript + NestJS + PostgreSQL en Google Cloud, con Terraform (IaC) y CI/CD vía GitHub Actions, e integración read-only con Peak15 (CRM)."
    },
    role: {
      pt: "Product Strategist / Product Lead: descoberta, definição dos domínios e priorização de roadmap, junto de design e engenharia.",
      en: "Product Strategist / Product Lead: discovery, domain definition, and roadmap prioritization, together with design and engineering.",
      es: "Product Strategist / Product Lead: discovery, definición de dominios y priorización de roadmap, junto con diseño e ingeniería."
    },
    keyFeatures: [
      {
        pt: "Área do Grow Guide com tours, perfil e suporte num só lugar (mais de 90 guias)",
        en: "Grow Guide area with tours, profile, and support in one place (90+ guides)",
        es: "Área del Grow Guide con tours, perfil y soporte en un solo lugar (más de 90 guías)"
      },
      {
        pt: "Academy (treinamento), Social Network (comunidade) e gamificação com badges",
        en: "Academy (training), Social Network (community), and gamification with badges",
        es: "Academy (formación), Social Network (comunidad) y gamificación con badges"
      },
      {
        pt: "Backoffice para o time de operações (cerca de 20 pessoas) gerir guias, tours e configurações",
        en: "Backoffice for the operations team (around 20 people) to manage guides, tours, and settings",
        es: "Backoffice para que el equipo de operaciones (unas 20 personas) gestione guías, tours y configuraciones"
      },
      {
        pt: "Arquitetura de dados central + API sobre React 18, NestJS e PostgreSQL em Google Cloud",
        en: "Central data + API architecture on React 18, NestJS, and PostgreSQL on Google Cloud",
        es: "Arquitectura de datos central + API sobre React 18, NestJS y PostgreSQL en Google Cloud"
      },
      {
        pt: "Terraform (IaC) e CI/CD via GitHub Actions; integração read-only com o Peak15 (CRM)",
        en: "Terraform (IaC) and CI/CD via GitHub Actions; read-only integration with Peak15 (CRM)",
        es: "Terraform (IaC) y CI/CD vía GitHub Actions; integración read-only con Peak15 (CRM)"
      },
      {
        pt: "Entregue além do escopo contratado",
        en: "Delivered beyond contracted scope",
        es: "Entregado más allá del alcance contratado"
      }
    ]
  },

  'thub-approach-tours': {
    summary: {
      pt: "Plataforma B2C da Approach Tours (cerca de 10 mil usuários ativos) para gerenciar a prontidão de viajantes em tours de grupo, do booking à partida. Dois produtos por domínio sobre a mesma base: Ops (backoffice do time) e Traveller (área do viajante logado).",
      en: "Approach Tours' B2C platform (around 10k active users) to manage traveller readiness on group tours, from booking to departure. Two products by domain on the same base: Ops (the team's backoffice) and Traveller (the logged-in traveller area).",
      es: "Plataforma B2C de Approach Tours (unos 10 mil usuarios activos) para gestionar la preparación de los viajeros en tours de grupo, del booking a la salida. Dos productos por dominio sobre la misma base: Ops (backoffice del equipo) y Traveller (área del viajero logueado)."
    },
    quickInfo: {
      problem: {
        pt: "Acompanhar a prontidão de cada viajante (dados, pagamento, documentos, pickup, seguro) até a partida era disperso, feito em planilhas e Airtable, e não escalava.",
        en: "Tracking each traveller's readiness (data, payment, documents, pickup, insurance) up to departure was scattered, run on spreadsheets and Airtable, and didn't scale.",
        es: "Seguir la preparación de cada viajero (datos, pago, documentos, pickup, seguro) hasta la salida era disperso, hecho en hojas de cálculo y Airtable, y no escalaba."
      },
      process: {
        pt: "Redesenho de arquitetura (base central + API, serviços orientados a eventos) → Traveller Control Table → Fluxos de dados e documentos → Pagamento via Stripe.",
        en: "Architecture redesign (central base + API, event-driven services) → Traveller Control Table → Data and document flows → Payment via Stripe.",
        es: "Rediseño de arquitectura (base central + API, servicios orientados a eventos) → Traveller Control Table → Flujos de datos y documentos → Pago vía Stripe."
      },
      solution: {
        pt: "Ops centraliza a operação (Work Queue, tours/departures, Traveller Control Table com status por viajante); Traveller entrega bookings, upload de documentos, dados em fases e pagamento via Stripe, tudo sobre a mesma base.",
        en: "Ops centralizes the operation (Work Queue, tours/departures, Traveller Control Table with per-traveller status); Traveller delivers bookings, document upload, phased data, and Stripe payment, all on the same base.",
        es: "Ops centraliza la operación (Work Queue, tours/departures, Traveller Control Table con estado por viajero); Traveller entrega bookings, carga de documentos, datos por fases y pago vía Stripe, todo sobre la misma base."
      },
      result: {
        pt: "6/6 critérios de aceitação atendidos no Go-Live • Cerca de 170 mil linhas de código em 9 serviços, 382 testes automatizados e 116 migrations de banco",
        en: "6/6 acceptance criteria met at Go-Live • ~170K lines of code across 9 services, 382 automated tests, and 116 DB migrations",
        es: "6/6 criterios de aceptación cumplidos en el Go-Live • Cerca de 170 mil líneas de código en 9 servicios, 382 pruebas automatizadas y 116 migraciones de base de datos"
      }
    },
    challenge: {
      pt: "A Approach Tours precisava garantir que cada viajante chegasse pronto para o tour, com dados, pagamento, documentos, pickup e seguro em dia. Monitorar isso em escala, para milhares de viajantes e muitos departures, era disperso, feito em planilhas e Airtable, e propenso a falhas.",
      en: "Approach Tours needed to ensure each traveller arrived ready for the tour, with data, payment, documents, pickup, and insurance in order. Monitoring that at scale, across thousands of travellers and many departures, was scattered, run on spreadsheets and Airtable, and error-prone.",
      es: "Approach Tours necesitaba garantizar que cada viajero llegara preparado para el tour, con datos, pago, documentos, pickup y seguro al día. Monitorear eso a escala, para miles de viajeros y muchos departures, era disperso, hecho en hojas de cálculo y Airtable, y propenso a fallos."
    },
    approach: {
      pt: "Parte de um redesenho completo de arquitetura para uma base central de dados e camada de API (serviços independentes, orientados a eventos). Uma base de código servindo dois produtos por domínio: o Ops (Work Queue, tours/departures, Traveller Control Table) e o Traveller (bookings, documentos, dados em fases, pagamento via Stripe). Stack React 18 + TypeScript + NestJS + PostgreSQL em Google Cloud, com Terraform e CI/CD, e cobertura de testes em Vitest.",
      en: "Part of a full architecture redesign to a central data base and API layer (independent, event-driven services). One codebase serving two products by domain: Ops (Work Queue, tours/departures, Traveller Control Table) and Traveller (bookings, documents, phased data, Stripe payment). React 18 + TypeScript + NestJS + PostgreSQL stack on Google Cloud, with Terraform and CI/CD, and Vitest test coverage.",
      es: "Parte de un rediseño completo de arquitectura hacia una base central de datos y capa de API (servicios independientes, orientados a eventos). Una base de código sirviendo a dos productos por dominio: Ops (Work Queue, tours/departures, Traveller Control Table) y Traveller (bookings, documentos, datos por fases, pago vía Stripe). Stack React 18 + TypeScript + NestJS + PostgreSQL en Google Cloud, con Terraform y CI/CD, y cobertura de pruebas en Vitest."
    },
    role: {
      pt: "Product Strategist: definição dos domínios, fluxos e priorização entre os dois produtos.",
      en: "Product Strategist: domain definition, flows, and prioritization across the two products.",
      es: "Product Strategist: definición de dominios, flujos y priorización entre los dos productos."
    },
    keyFeatures: [
      {
        pt: "Traveller Control Table: status por viajante (dados, pagamento, documentos, pickup, seguro, alertas)",
        en: "Traveller Control Table: per-traveller status (data, payment, documents, pickup, insurance, alerts)",
        es: "Traveller Control Table: estado por viajero (datos, pago, documentos, pickup, seguro, alertas)"
      },
      {
        pt: "Work Queue e gestão de tours/departures para o time (Ops)",
        en: "Work Queue and tour/departure management for the team (Ops)",
        es: "Work Queue y gestión de tours/departures para el equipo (Ops)"
      },
      {
        pt: "Área do viajante: bookings, upload de documentos e dados pessoais em fases",
        en: "Traveller area: bookings, document upload, and phased personal data",
        es: "Área del viajero: bookings, carga de documentos y datos personales por fases"
      },
      {
        pt: "Pagamento integrado via Stripe",
        en: "Integrated payment via Stripe",
        es: "Pago integrado vía Stripe"
      },
      {
        pt: "Arquitetura de dados central + API (9 serviços) em Google Cloud",
        en: "Central data + API architecture (9 services) on Google Cloud",
        es: "Arquitectura de datos central + API (9 servicios) en Google Cloud"
      },
      {
        pt: "382 testes automatizados (Vitest); 6/6 critérios de aceitação no Go-Live",
        en: "382 automated tests (Vitest); 6/6 acceptance criteria at Go-Live",
        es: "382 pruebas automatizadas (Vitest); 6/6 criterios de aceptación en el Go-Live"
      }
    ]
  },

  'passaporte-acessivel': {
    summary: {
      pt: "Plataforma que transforma avaliações de acessibilidade de roteiros turísticos em dado estruturado, pontuável e certificável para o gestor público. Da coleta em campo ao laudo técnico, com três perfis de uso: avaliadores em campo, gestores municipais e administradores.",
      en: "A platform that turns accessibility assessments of tourist routes into structured, scoreable, certifiable data for public managers. From field collection to the technical report, with three user profiles: field evaluators, municipal managers, and admins.",
      es: "Plataforma que transforma evaluaciones de accesibilidad de rutas turísticas en dato estructurado, puntuable y certificable para el gestor público. De la recolección en campo al informe técnico, con tres perfiles de uso: evaluadores en campo, gestores municipales y administradores."
    },
    quickInfo: {
      problem: {
        pt: "Avaliações de acessibilidade eram feitas no papel, sem saída estruturada, sem comparabilidade e sem dado para decisão de política pública.",
        en: "Accessibility assessments were done on paper, with no structured output, no comparability, and no data for public-policy decisions.",
        es: "Las evaluaciones de accesibilidad se hacían en papel, sin salida estructurada, sin comparabilidad y sin dato para decisiones de política pública."
      },
      process: {
        pt: "Form-builder dinâmico para coleta em campo → Pontuação por 4 dimensões → Selos de certificação → Laudos e relatórios; simulador de impacto de investimento.",
        en: "Dynamic form-builder for field collection → Scoring across 4 dimensions → Certification seals → Reports; investment-impact simulator.",
        es: "Form-builder dinámico para recolección en campo → Puntuación por 4 dimensiones → Sellos de certificación → Informes; simulador de impacto de inversión."
      },
      solution: {
        pt: "Cada roteiro é composto por pontos avaliados em campo e pontuado em quatro dimensões (Mobilidade, Visual, Auditiva, Intelectual/TEA), recebendo score e selo (diamante, ouro, prata ou bronze), com mapas interativos, laudos técnicos em PDF e simulador de impacto de investimento.",
        en: "Each route is made of field-assessed points and scored across four dimensions (Mobility, Visual, Hearing, Intellectual/ASD), receiving a score and a seal (diamond, gold, silver, or bronze), with interactive maps, technical PDF reports, and an investment-impact simulator.",
        es: "Cada ruta se compone de puntos evaluados en campo y se puntúa en cuatro dimensiones (Movilidad, Visual, Auditiva, Intelectual/TEA), recibiendo score y sello (diamante, oro, plata o bronce), con mapas interactivos, informes técnicos en PDF y simulador de impacto de inversión."
      }
    },
    challenge: {
      pt: "A acessibilidade de roteiros turísticos era avaliada no papel, de forma dispersa e subjetiva, sem um modelo que permitisse comparar espaços, pontuar dimensões e apresentar resultados de forma confiável para gestores públicos.",
      en: "The accessibility of tourist routes was assessed on paper, in a scattered and subjective way, with no model to compare spaces, score dimensions, and present results reliably to public managers.",
      es: "La accesibilidad de las rutas turísticas se evaluaba en papel, de forma dispersa y subjetiva, sin un modelo que permitiera comparar espacios, puntuar dimensiones y presentar resultados de forma confiable a los gestores públicos."
    },
    approach: {
      pt: "Produto de dados que estrutura a avaliação de ponta a ponta, com três perfis: avaliadores em campo (coleta), gestores municipais (dashboards, relatórios, planos de ação) e administradores (configuração e atribuições). Um roteiro (ex.: Museu do Ipiranga, Liberdade) é composto de pontos avaliados em campo; cada ponto e cada roteiro recebe classificação em quatro dimensões (Mobilidade, Visual, Auditiva, Intelectual/TEA), score e selo de certificação. Front em React + TypeScript + Vite + Tailwind com Google Maps; back em Supabase (Postgres + RLS) com migrations versionadas.",
      en: "A data product that structures assessment end to end, with three profiles: field evaluators (collection), municipal managers (dashboards, reports, action plans), and admins (config and assignments). A route (e.g., Museu do Ipiranga, Liberdade) is made of field-assessed points; each point and each route gets a classification across four dimensions (Mobility, Visual, Hearing, Intellectual/ASD), a score, and a certification seal. Front end in React + TypeScript + Vite + Tailwind with Google Maps; back end in Supabase (Postgres + RLS) with versioned migrations.",
      es: "Un producto de datos que estructura la evaluación de punta a punta, con tres perfiles: evaluadores en campo (recolección), gestores municipales (dashboards, informes, planes de acción) y administradores (configuración y asignaciones). Una ruta (ej.: Museu do Ipiranga, Liberdade) se compone de puntos evaluados en campo; cada punto y cada ruta recibe una clasificación en cuatro dimensiones (Movilidad, Visual, Auditiva, Intelectual/TEA), un score y un sello de certificación. Front en React + TypeScript + Vite + Tailwind con Google Maps; back en Supabase (Postgres + RLS) con migraciones versionadas."
    },
    role: {
      pt: "Product Strategist: modelagem do produto de dados, das dimensões e selos ao formato de laudo, relatório e simulador.",
      en: "Product Strategist: modeling the data product, from dimensions and seals to the report and simulator format.",
      es: "Product Strategist: modelado del producto de datos, de las dimensiones y sellos al formato de informe y simulador."
    },
    keyFeatures: [
      {
        pt: "Três perfis: avaliadores em campo, gestores municipais e administradores",
        en: "Three profiles: field evaluators, municipal managers, and admins",
        es: "Tres perfiles: evaluadores en campo, gestores municipales y administradores"
      },
      {
        pt: "Form-builder dinâmico para coleta em campo",
        en: "Dynamic form-builder for field collection",
        es: "Form-builder dinámico para recolección en campo"
      },
      {
        pt: "Pontuação por 4 dimensões (Mobilidade, Visual, Auditiva, Intelectual/TEA)",
        en: "Scoring across 4 dimensions (Mobility, Visual, Hearing, Intellectual/ASD)",
        es: "Puntuación por 4 dimensiones (Movilidad, Visual, Auditiva, Intelectual/TEA)"
      },
      {
        pt: "Selos de certificação (diamante, ouro, prata, bronze) por ponto e roteiro",
        en: "Certification seals (diamond, gold, silver, bronze) per point and route",
        es: "Sellos de certificación (diamante, oro, plata, bronce) por punto y ruta"
      },
      {
        pt: "Mapas interativos, laudos técnicos em PDF e simulador de impacto de investimento",
        en: "Interactive maps, technical PDF reports, and an investment-impact simulator",
        es: "Mapas interactivos, informes técnicos en PDF y simulador de impacto de inversión"
      },
      {
        pt: "React + TypeScript + Supabase (Postgres + RLS)",
        en: "React + TypeScript + Supabase (Postgres + RLS)",
        es: "React + TypeScript + Supabase (Postgres + RLS)"
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
  },

  'colegio-kingdom': {
    summary: {
      pt: "Site institucional para uma escola cristã que, até então, se comunicava com as famílias apenas por Instagram e WhatsApp — criado para centralizar informações em um canal oficial, acolhedor e em mais de um idioma.",
      en: "Institutional website for a Christian school that, until then, communicated with families only through Instagram and WhatsApp — built to centralize information in an official, welcoming, multilingual channel.",
      es: "Sitio institucional para una escuela cristiana que, hasta entonces, se comunicaba con las familias solo por Instagram y WhatsApp — creado para centralizar la información en un canal oficial, acogedor y en más de un idioma."
    },
    quickInfo: {
      problem: {
        pt: "A comunicação da escola com as famílias acontecia de forma dispersa, apenas por Instagram e WhatsApp, sem um canal oficial que apresentasse a instituição de forma completa.",
        en: "The school's communication with families happened in a scattered way, only through Instagram and WhatsApp, with no official channel presenting the institution in full.",
        es: "La comunicación de la escuela con las familias ocurría de forma dispersa, solo por Instagram y WhatsApp, sin un canal oficial que presentara la institución de forma completa."
      },
      process: {
        pt: "Levantamento dos pilares institucionais → Arquitetura de informação → Identidade visual lúdica e acolhedora → Desenvolvimento com suporte a múltiplos idiomas → Testes de acesso.",
        en: "Mapping institutional pillars → Information architecture → Playful, welcoming visual identity → Development with multilingual support → Access testing.",
        es: "Relevamiento de los pilares institucionales → Arquitectura de información → Identidad visual lúdica y acogedora → Desarrollo con soporte multilingüe → Pruebas de acceso."
      },
      solution: {
        pt: "Site institucional completo, com navegação clara por temas centrais, alternância de idioma e identidade visual que reforça os pilares da escola para famílias brasileiras e estrangeiras.",
        en: "A complete institutional website, with clear navigation by core topics, language switching, and a visual identity that reinforces the school's pillars for both Brazilian and international families.",
        es: "Sitio institucional completo, con navegación clara por temas centrales, cambio de idioma e identidad visual que refuerza los pilares de la escuela para familias brasileñas y extranjeras."
      }
    },
    challenge: {
      pt: "Antes do site, a comunicação do Colégio Kingdom acontecia inteiramente por redes sociais e WhatsApp — canais informais, sem estrutura para apresentar a proposta pedagógica, os princípios cristãos e o Sistema Etapa da escola para famílias que buscavam mais informação antes de matricular seus filhos, incluindo famílias que não falam português.",
      en: "Before the website, Colégio Kingdom's communication happened entirely through social media and WhatsApp — informal channels, with no structure to present the school's pedagogical approach, Christian principles, and Sistema Etapa methodology to families looking for more information before enrolling their children, including families who don't speak Portuguese.",
      es: "Antes del sitio, la comunicación del Colégio Kingdom ocurría enteramente por redes sociales y WhatsApp — canales informales, sin estructura para presentar la propuesta pedagógica, los principios cristianos y el Sistema Etapa de la escuela a familias que buscaban más información antes de matricular a sus hijos, incluyendo familias que no hablan portugués."
    },
    approach: {
      pt: "Desenvolvimento de um site institucional do zero, em três frentes: (1) arquitetura de informação organizada pelos temas centrais da escola — Quem somos, Princípios, Ensino, Sistema Etapa; (2) suporte multilíngue para atender famílias estrangeiras; (3) identidade visual lúdica e acolhedora, com cores vivas e elementos gráficos que comunicam os pilares institucionais (Autogoverno, Semear & Colher, Soberania, Individualidade) já na primeira dobra.",
      en: "End-to-end development of an institutional website, on three fronts: (1) information architecture organized around the school's core topics — Who we are, Principles, Teaching, Sistema Etapa; (2) multilingual support to serve international families; (3) a playful, welcoming visual identity, with vivid colors and graphic elements that communicate the school's institutional pillars (Self-Governance, Sow & Reap, Sovereignty, Individuality) right in the first fold.",
      es: "Desarrollo de un sitio institucional desde cero, en tres frentes: (1) arquitectura de información organizada por los temas centrales de la escuela — Quiénes somos, Principios, Enseñanza, Sistema Etapa; (2) soporte multilingüe para atender a familias extranjeras; (3) identidad visual lúdica y acogedora, con colores vivos y elementos gráficos que comunican los pilares institucionales (Autogobierno, Sembrar y Cosechar, Soberanía, Individualidad) ya en el primer pliegue."
    },
    role: {
      pt: "Responsável pelo desenvolvimento end-to-end do site: estrutura de conteúdo, design de interface e implementação, com foco em garantir acesso humanizado e fiel à identidade da escola para famílias em diferentes idiomas.",
      en: "Responsible for the end-to-end development of the website: content structure, interface design, and implementation, focused on humanized access true to the school's identity for families in different languages.",
      es: "Responsable del desarrollo end-to-end del sitio: estructura de contenido, diseño de interfaz e implementación, con foco en garantizar un acceso humanizado y fiel a la identidad de la escuela para familias en distintos idiomas."
    },
    keyFeatures: [
      {
        pt: "Alternância de idioma para atender famílias brasileiras e estrangeiras",
        en: "Language switching to serve Brazilian and international families",
        es: "Cambio de idioma para atender a familias brasileñas y extranjeras"
      },
      {
        pt: "Navegação organizada pelos pilares institucionais da escola",
        en: "Navigation organized around the school's institutional pillars",
        es: "Navegación organizada por los pilares institucionales de la escuela"
      },
      {
        pt: "Identidade visual lúdica e acolhedora, alinhada à proposta cristã",
        en: "Playful, welcoming visual identity, aligned with the Christian approach",
        es: "Identidad visual lúdica y acogedora, alineada con la propuesta cristiana"
      },
      {
        pt: "Substituição da comunicação informal (Instagram/WhatsApp) por um canal oficial",
        en: "Replacing informal communication (Instagram/WhatsApp) with an official channel",
        es: "Sustitución de la comunicación informal (Instagram/WhatsApp) por un canal oficial"
      },
      {
        pt: "Contato direto integrado ao WhatsApp",
        en: "Direct contact integrated with WhatsApp",
        es: "Contacto directo integrado con WhatsApp"
      }
    ]
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
