import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { MediaList } from "../components/MediaList";
import { SupportersGrid } from "../components/SupportersGrid";
import { QuickInfo } from "../components/QuickInfo";
import { data } from "../data/ellen";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { getProjectTranslation, getKeyFeatures } from "../i18n/portfolio-translations";

interface CaseStudyProps {
  slug: string;
}

export function CaseStudy({ slug }: CaseStudyProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const project = data.portfolio.find((p) => p.slug === slug);
  
  // Get translated content
  const getT = (field: string, fallback: any = '') => 
    getProjectTranslation(slug, field, language, fallback);

  // Update page title for SEO
  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Ellen Aquino`;
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      const description = project.summary || project.challenge;
      if (metaDescription) {
        metaDescription.setAttribute('content', description.slice(0, 155));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description.slice(0, 155);
        document.head.appendChild(meta);
      }
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B0B0B] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-[32px] font-[800] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
            Projeto não encontrado
          </h1>
          <a 
            href="/portfolio" 
            className="text-[#0A0A0A] dark:text-[#F5F5F5] hover:underline focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] rounded-sm"
          >
            Voltar para portfólio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B]">
      {/* Hero */}
      <Section className="py-12 md:py-16">
        <a
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[16px] font-[500] text-[#0A0A0A] dark:text-[#F5F5F5] hover:underline mb-8 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] rounded-sm"
        >
          <ArrowLeft size={18} />
          Voltar ao Portfólio
        </a>
        
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        
        <h1 className="text-[40px] md:text-[48px] font-[800] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6 leading-tight max-w-[800px]">
          {project.title}
        </h1>

        <p className="text-[20px] md:text-[24px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed max-w-[700px]">
          {getT('summary', project.summary)}
        </p>
      </Section>

      {/* Cover Image */}
      <div className="max-w-[960px] mx-auto px-6 mb-12 md:mb-16">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <ImageWithFallback
            src={project.thumb}
            alt={project.title}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </div>
      </div>

      {/* Institutions Involved (if available) */}
      {project.supportersImage && (
        <div className="max-w-[960px] mx-auto px-6 mb-16 md:mb-20">
          <h3 className="text-[16px] font-[600] text-[#4A4A4A] dark:text-[#B3B3B3] mb-4 tracking-[-0.011em] uppercase">
            {language === 'pt' ? 'Instituições Envolvidas' : language === 'en' ? 'Institutions Involved' : 'Instituciones Involucradas'}
          </h3>
          <div className={`grid grid-cols-1 ${(project as any).images?.logo ? 'md:grid-cols-2' : ''} gap-6`}>
            {/* Institutions Image */}
            <div className="p-6 md:p-8 bg-white dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-xl">
              <img 
                src={project.supportersImage} 
                alt={language === 'pt' ? 'Instituições parceiras' : language === 'en' ? 'Partner institutions' : 'Instituciones asociadas'}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Project Logo - if available */}
            {(project as any).images?.logo && (
              <div className="p-6 md:p-8 bg-white dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-xl flex items-center justify-center">
                <img 
                  src={(project as any).images.logo} 
                  alt={`${project.title} Logo`}
                  className="w-full h-auto object-contain max-h-[200px]"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <Section className="py-0 mb-20 md:mb-28">
        {/* Quick Information Grid - Full Width */}
        {(project as any).quickInfo && (
          <div className="mb-16 md:mb-20">
            <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6 tracking-tight">
              Overview
            </h2>
            <QuickInfo
              problem={getT('quickInfo.problem', (project as any).quickInfo.problem)}
              process={getT('quickInfo.process', (project as any).quickInfo.process)}
              solution={getT('quickInfo.solution', (project as any).quickInfo.solution)}
              result={getT('quickInfo.result', (project as any).quickInfo.result)}
              variant="grid"
            />
          </div>
        )}

        {/* Status Badge */}
        {(project as any).status && (
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4040fb]/10 border border-[#4040fb]/20 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-[#4040fb] animate-pulse" />
              <span className="text-[14px] font-[500] text-[#4040fb]">
                {getT('status', (project as any).status)}
              </span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 md:space-y-16">
            {/* Challenge & Approach in 2 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              <article>
                <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 tracking-tight">
                  {language === 'pt' ? 'Challenge' : language === 'en' ? 'Challenge' : 'Desafío'}
                </h2>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {getT('challenge', project.challenge)}
                </p>
              </article>

              <article>
                <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 tracking-tight">
                  {language === 'pt' ? 'Approach' : language === 'en' ? 'Approach' : 'Enfoque'}
                </h2>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {getT('approach', project.approach)}
                </p>
              </article>
            </div>

            {/* Role */}
            <article>
              <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 tracking-tight">
                My Role
              </h2>
              <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                {project.role}
              </p>
            </article>

            {/* Prototype Examples - if available */}
            {(project as any).images?.prototypeExamples && (
              <article>
                <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6 tracking-tight">
                  {language === 'pt' ? 'Exemplos dos Protótipos' : language === 'en' ? 'Prototype Examples' : 'Ejemplos de Prototipos'}
                </h2>
                <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A] bg-white dark:bg-[#0B0B0B]">
                  <img 
                    src={(project as any).images.prototypeExamples} 
                    alt={language === 'pt' ? 'Exemplos de protótipos da plataforma' : language === 'en' ? 'Platform prototype examples' : 'Ejemplos de prototipos de la plataforma'}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </article>
            )}

            {/* Media Highlight - COVID Simulator specific (below Role) */}
            {(project as any).mediaHighlight && (
              <div className="pl-6 border-l-2 border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h3 className="text-[14px] font-[600] text-[#4A4A4A] dark:text-[#B3B3B3] mb-2 uppercase tracking-wider">
                  {language === 'pt' ? 'Cobertura de Mídia' : language === 'en' ? 'Media Coverage' : 'Cobertura de Medios'}
                </h3>
                <p className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {(project as any).mediaHighlight}
                </p>
              </div>
            )}

            {/* Impact - Compact version for QualityScore */}
            {(project as any).impact && project.slug === 'quality-score-metodologia' && (
              <div className="pl-6 border-l-2 border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h3 className="text-[14px] font-[600] text-[#4A4A4A] dark:text-[#B3B3B3] mb-2 uppercase tracking-wider">
                  {language === 'pt' ? 'Impacto' : language === 'en' ? 'Impact' : 'Impacto'}
                </h3>
                <p className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {(project as any).impact}
                </p>
              </div>
            )}

            {/* Methodology - QualityScore specific */}
            {(project as any).methodology && (
              <article className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 md:p-8 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
                  {language === 'pt' ? 'Metodologia' : language === 'en' ? 'Methodology' : 'Metodología'}
                </h2>
                <div className="space-y-5">
                  <div>
                    <h3 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2">
                      {language === 'pt' ? 'Instrumento' : language === 'en' ? 'Instrument' : 'Instrumento'}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                      {(project as any).methodology.instrument}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2">
                      {language === 'pt' ? 'Processamento' : language === 'en' ? 'Processing' : 'Procesamiento'}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                      {(project as any).methodology.processing}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2">
                      {language === 'pt' ? 'Visualização' : language === 'en' ? 'Visualization' : 'Visualización'}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                      {(project as any).methodology.visualization}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2">
                      {language === 'pt' ? 'Interpretação' : language === 'en' ? 'Interpretation' : 'Interpretación'}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                      {(project as any).methodology.interpretation}
                    </p>
                  </div>
                </div>

                {/* Methodology Image */}
                {(project as any).images?.methodology && (
                  <div className="mt-8 rounded-xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A]">
                    <img 
                      src={(project as any).images.methodology} 
                      alt="QualityScore Metodologia"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </article>
            )}






            {/* Impact - COVID Simulator specific (main section) */}
            {(project as any).impact && project.slug === 'simulador-covid-favelas' && (
              <article>
                <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {language === 'pt' ? 'Impacto' : language === 'en' ? 'Impact' : 'Impacto'}
                </h2>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {(project as any).impact}
                </p>
              </article>
            )}

            {/* 7 Dimensions Image - COVID Simulator specific (after Impact) */}
            {project.slug === 'simulador-covid-favelas' && (project as any).images?.dimensions && (
              <article>
                <h3 className="text-[18px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {language === 'pt' ? 'Dimensões de Políticas Públicas' : language === 'en' ? 'Public Policy Dimensions' : 'Dimensiones de Políticas Públicas'}
                </h3>
                <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A] bg-white dark:bg-[#0B0B0B]">
                  <img 
                    src={(project as any).images.dimensions} 
                    alt={language === 'pt' ? '7 Dimensões de Políticas Públicas' : language === 'en' ? '7 Public Policy Dimensions' : '7 Dimensiones de Políticas Públicas'}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </article>
            )}

            {/* Dimensions Image - COVID Simulator specific */}
            {(project as any).images?.dimensions && (
              <article>
                <h2 className="text-[28px] md:text-[32px] font-[800] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
                  {language === 'pt' ? '7 Dimensões de Políticas Públicas' : language === 'en' ? '7 Public Policy Dimensions' : '7 Dimensiones de Políticas Públicas'}
                </h2>
                <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A] bg-white dark:bg-[#0B0B0B]">
                  <img 
                    src={(project as any).images.dimensions} 
                    alt="7 Dimensões de Políticas Públicas no Simulador"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </article>
            )}

            {/* Strategic Vision - QualityMap App specific */}
            {(project as any).strategicVisionTitle && (
              <article className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 md:p-8 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {getT('strategicVisionTitle', (project as any).strategicVisionTitle)}
                </h2>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed mb-6">
                  {getT('strategicVisionDescription', (project as any).strategicVisionDescription)}
                </p>
                
                {/* Strategic Vision Image */}
                {(project as any).images?.strategicVision && (
                  <div className="rounded-xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A] bg-white dark:bg-[#0B0B0B] p-4">
                    <img 
                      src={(project as any).images.strategicVision} 
                      alt="Processos e Estratégias - Visualização em Linha"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
              </article>
            )}



            {/* Research Image - Democracia Digital specific */}
            {(project as any).researchImage && (
              <article>
                <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
                  {language === 'pt' ? 'Principais Entregas da Pesquisa' : language === 'en' ? 'Research Main Outputs' : 'Principales Entregas de la Investigación'}
                </h2>
                <div className="rounded-2xl overflow-hidden border border-[#EAEAEA] dark:border-[#1A1A1A] bg-white dark:bg-[#0B0B0B]">
                  <img 
                    src={(project as any).researchImage} 
                    alt="Mapa do Sistema e White Paper - Recomendações Sistêmicas"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-4 text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3]">
                  <p className="leading-relaxed">
                    {language === 'pt' ? '• Mapa do Sistema: Visualização completa da propaganda eleitoral na internet nas Eleições de 2018' : language === 'en' ? '• System Map: Complete visualization of internet electoral propaganda in 2018 Elections' : '• Mapa del Sistema: Visualización completa de la propaganda electoral en internet en las Elecciones de 2018'}
                  </p>
                  <p className="leading-relaxed mt-2">
                    {language === 'pt' ? '• White Paper ITSE: Recomendações sistêmicas para combater a desinformação nas eleições brasileiras' : language === 'en' ? '• ITSE White Paper: Systemic recommendations to combat disinformation in Brazilian elections' : '• White Paper ITSE: Recomendaciones sistémicas para combatir la desinformación en las elecciones brasileñas'}
                  </p>
                </div>
              </article>
            )}

            {/* Products & Initiatives - Democracia Digital specific */}
            {(project as any).products && (
              <article>
                <h2 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
                  {language === 'pt' ? 'Produtos & Iniciativas' : language === 'en' ? 'Products & Initiatives' : 'Productos e Iniciativas'}
                </h2>
                <div className="space-y-6">
                  {(project as any).products.map((product: any, index: number) => (
                    <div 
                      key={index}
                      className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 md:p-8 border border-[#EAEAEA] dark:border-[#1A1A1A]"
                    >
                      <h3 className="text-[20px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-3">
                        {product.name}
                      </h3>
                      <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed mb-4">
                        {product.description}
                      </p>
                      {product.items && product.items.length > 0 && (
                        <ul className="space-y-2">
                          {product.items.map((item: string, itemIndex: number) => (
                            <li 
                              key={itemIndex}
                              className="flex items-start gap-3 text-[15px] text-[#4A4A4A] dark:text-[#B3B3B3]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#111827] dark:bg-[#E5E7EB] mt-2 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* Team */}
            {project.team && project.team.length > 0 && (
              <article className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 md:p-8 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {language === 'pt' ? 'Equipe' : language === 'en' ? 'Team' : 'Equipo'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.team.map((member, index) => (
                    <div 
                      key={index}
                      className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111827] dark:bg-[#E5E7EB]"></span>
                      {member}
                    </div>
                  ))}
                </div>
                <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mt-4 italic">
                  {language === 'pt' ? 'Toda a equipe trabalhou de forma voluntária' : language === 'en' ? 'The entire team worked on a voluntary basis' : 'Todo el equipo trabajó de forma voluntaria'}
                </p>
              </article>
            )}

            {/* Publications */}
            {project.publications && project.publications.length > 0 && (
              <article className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 md:p-8 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h2 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {language === 'pt' ? 'Publicações Científicas' : language === 'en' ? 'Scientific Publications' : 'Publicaciones Científicas'}
                </h2>
                <div className="space-y-4">
                  {project.publications.map((pub, index) => (
                    <a
                      key={index}
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-[16px] font-[500] text-[#0A0A0A] dark:text-[#F5F5F5] group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors mb-1">
                            {pub.title}
                          </p>
                          <p className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] font-mono">
                            DOI: {pub.doi}
                          </p>
                        </div>
                        <ExternalLink size={16} className="text-[#4A4A4A] dark:text-[#B3B3B3] group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors flex-shrink-0 mt-1" />
                      </div>
                    </a>
                  ))}
                </div>
              </article>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div>
                  <h3 className="text-[14px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 uppercase tracking-wider">
                    Links
                  </h3>
                  <div className="space-y-2">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] hover:text-[#4040fb] dark:hover:text-[#4040fb] transition-colors group"
                      >
                        <ExternalLink size={14} className="flex-shrink-0" />
                        <span className="group-hover:underline">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {(project as any).keyFeatures && (
                <div>
                  <h3 className="text-[14px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 uppercase tracking-wider">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {(() => {
                      const translatedFeatures = getKeyFeatures(slug, language);
                      const featuresToShow = translatedFeatures.length > 0 
                        ? translatedFeatures 
                        : (project as any).keyFeatures;
                      
                      return featuresToShow.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4040fb] mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>
              )}

              {/* Media */}
              {project.media && project.media.length > 0 && (
                <MediaList 
                  items={project.media} 
                  title={language === 'pt' ? 'Mídia' : language === 'en' ? 'Media' : 'Medios'} 
                />
              )}

              {/* Supporters */}
              {project.supporters && project.supporters.length > 0 && (
                <SupportersGrid 
                  items={project.supporters}
                  title={language === 'pt' ? 'Parceiros' : language === 'en' ? 'Partners' : 'Socios'}
                />
              )}
            </div>
          </aside>
        </div>

        {/* Navigation */}
        <div className="mt-20 pt-12 border-t border-[#EAEAEA] dark:border-[#1A1A1A]">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[18px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] hover:underline focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] rounded-sm"
          >
            <ArrowLeft size={18} />
            Ver todos os projetos
          </a>
        </div>
      </Section>
    </div>
  );
}
