import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/ellen";
import { BookOpen, FileText, Users, ExternalLink } from "lucide-react";
import { Tag } from "../components/Tag";
import { useState } from "react";

type PublicationType = "journal" | "conference" | "research" | "whitepaper";

export function Publications() {
  const { language } = useLanguage();
  const publications = data.mainPublications;
  const [selectedType, setSelectedType] = useState<PublicationType | "all">("all");

  const pageTitle = language === 'pt' ? 'Publicações Científicas' : language === 'en' ? 'Scientific Publications' : 'Publicaciones Científicas';
  const pageSubtitle = language === 'pt' 
    ? 'Artigos, papers e projetos de pesquisa publicados em periódicos, conferências e eventos científicos.'
    : language === 'en' 
    ? 'Published articles, papers, and scientific projects in journals, conferences, and scientific events.'
    : 'Artículos, papers y proyectos de investigación publicados en revistas, conferencias y eventos científicos.';

  const typeLabels: Record<PublicationType | "all", { pt: string; en: string; es: string }> = {
    all: { pt: "Todos", en: "All", es: "Todos" },
    journal: { pt: "Artigos em Periódicos", en: "Journal Articles", es: "Artículos en Revistas" },
    conference: { pt: "Papers em Conferências", en: "Conference Papers", es: "Papers en Conferencias" },
    research: { pt: "Projetos de Pesquisa", en: "Research Projects", es: "Proyectos de Investigación" },
    whitepaper: { pt: "White Papers", en: "White Papers", es: "White Papers" }
  };

  const filteredPublications = selectedType === "all" 
    ? publications 
    : publications.filter(pub => pub.type === selectedType);

  // Group by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    const year = pub.year || "In Progress";
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<string | number, typeof publications>);

  // Sort years descending
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => {
    if (a === "In Progress") return 1;
    if (b === "In Progress") return 1;
    return Number(b) - Number(a);
  });

  const getTypeIcon = (type: PublicationType) => {
    switch (type) {
      case "journal":
        return <BookOpen className="w-5 h-5" />;
      case "conference":
        return <Users className="w-5 h-5" />;
      case "research":
      case "whitepaper":
        return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeBadgeColor = (type: PublicationType) => {
    switch (type) {
      case "journal":
        return "bg-[#111827] dark:bg-[#E5E7EB] text-white dark:text-[#0B0B0B]";
      case "conference":
        return "bg-[#4A4A4A] dark:bg-[#B3B3B3] text-white dark:text-[#0B0B0B]";
      case "research":
        return "bg-[#6B7280] dark:bg-[#9CA3AF] text-white dark:text-[#0B0B0B]";
      case "whitepaper":
        return "bg-[#9CA3AF] dark:bg-[#6B7280] text-white dark:text-[#0B0B0B]";
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] pt-24 pb-32">
      <div className="max-w-[960px] mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-[42px] md:text-[52px] font-[800] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4 tracking-[-0.022em]">
            {pageTitle}
          </h1>
          <p className="text-[18px] text-[#4A4A4A] dark:text-[#B3B3B3] max-w-[720px] leading-relaxed tracking-[-0.011em]">
            {pageSubtitle}
          </p>
        </motion.header>

        {/* Book Highlight */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#4040fb]/10 to-[#4040fb]/5 dark:from-[#4040fb]/20 dark:to-[#4040fb]/10 border border-[#4040fb]/20 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
              {/* Book Image */}
              <div className="order-2 md:order-1">
                <img 
                  src={data.bookImage} 
                  alt="Algoritmos e Sociedade - Ellen Aquino"
                  className="w-full max-w-[200px] mx-auto md:mx-0 drop-shadow-lg rounded-md"
                />
              </div>
              
              {/* Book Info */}
              <div className="order-1 md:order-2 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4040fb]/10 dark:bg-[#4040fb]/20 rounded-lg">
                  <BookOpen className="w-4 h-4 text-[#4040fb]" />
                  <span className="text-[13px] font-[600] text-[#4040fb]">
                    {language === 'pt' ? 'Livro Publicado' : language === 'en' ? 'Published Book' : 'Libro Publicado'}
                  </span>
                </div>
                
                <h2 className="text-[24px] md:text-[28px] font-[800] text-[#0A0A0A] dark:text-[#F5F5F5] tracking-[-0.022em] leading-tight">
                  Algoritmos e Sociedade
                </h2>
                
                <p className="text-[15px] md:text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {language === 'pt' 
                    ? 'As Relações e a Complexidade do Algoritmo Computacional como Artefato Sociotécnico'
                    : language === 'en'
                    ? 'The Relations and Complexity of the Computational Algorithm as a Sociotechnical Artifact'
                    : 'Las Relaciones y la Complejidad del Algoritmo Computacional como Artefacto Sociotécnico'
                  }
                </p>
                
                <div className="flex items-center gap-4 text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                  <span className="font-[600]">Ellen L. de C. Aquino</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12 pb-6 border-b border-[#EAEAEA] dark:border-[#1A1A1A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-3">
            {(["all", "journal", "conference", "research", "whitepaper"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-[14px] font-[500] transition-all duration-180 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] ${
                  selectedType === type
                    ? "bg-[#111827] dark:bg-[#E5E7EB] text-white dark:text-[#0B0B0B]"
                    : "bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] text-[#4A4A4A] dark:text-[#B3B3B3] hover:border-[#111827] dark:hover:border-[#E5E7EB]"
                }`}
              >
                {typeLabels[type][language]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications by Year */}
        <div className="space-y-16">
          {sortedYears.map((year, yearIndex) => (
            <motion.section
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: yearIndex * 0.1 }}
            >
              {/* Year Header */}
              <div className="mb-8">
                <h2 className="text-[28px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] tracking-[-0.015em]">
                  {year === "In Progress" ? (language === 'pt' ? 'Em Andamento' : language === 'en' ? 'In Progress' : 'En Curso') : year}
                </h2>
              </div>

              {/* Publications List */}
              <div className="space-y-6">
                {publicationsByYear[year].map((pub, index) => (
                  <motion.article
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (yearIndex * 0.1) + (index * 0.05) }}
                  >
                    <div className="p-6 md:p-8 bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-lg hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180">
                      {/* Type Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[13px] font-[600] ${getTypeBadgeColor(pub.type)}`}>
                          {getTypeIcon(pub.type)}
                          {typeLabels[pub.type][language]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-[19px] md:text-[21px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-3 tracking-[-0.011em] leading-tight">
                        {pub.title}
                      </h3>

                      {/* Authors */}
                      <p className="text-[15px] text-[#4A4A4A] dark:text-[#B3B3B3] mb-3 font-[500]">
                        {pub.authors}
                      </p>

                      {/* Venue Info */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                        {pub.venue && (
                          <span className="italic">{pub.venue}</span>
                        )}
                        {pub.volume && (
                          <span>Vol. {pub.volume}</span>
                        )}
                        {pub.pages && (
                          <span>pp. {pub.pages}</span>
                        )}
                        {pub.location && (
                          <span>{pub.location}</span>
                        )}
                      </div>

                      {/* Abstract */}
                      {pub.abstract && (
                        <p className="text-[15px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed mb-4 tracking-[-0.011em]">
                          {pub.abstract}
                        </p>
                      )}

                      {/* Topics Tags */}
                      {pub.topics && pub.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pub.topics.map((topic, i) => (
                            <Tag key={i} label={topic} />
                          ))}
                        </div>
                      )}

                      {/* DOI/URL */}
                      {(pub.doi || pub.url) && (
                        <div className="flex flex-wrap gap-3 pt-2 border-t border-[#EAEAEA] dark:border-[#1A1A1A]">
                          {pub.doi && (
                            <a
                              href={pub.url || `https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#111827] dark:text-[#E5E7EB] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors group/link"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span className="border-b border-transparent group-hover/link:border-current transition-all font-mono">
                                DOI: {pub.doi}
                              </span>
                            </a>
                          )}
                          {pub.url && !pub.doi && (
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#111827] dark:text-[#E5E7EB] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors group/link"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span className="border-b border-transparent group-hover/link:border-current transition-all">
                                {language === 'pt' ? 'Acessar publicação' : language === 'en' ? 'Access publication' : 'Acceder a la publicación'}
                              </span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Stats Footer */}
        <motion.footer
          className="mt-20 pt-12 border-t border-[#EAEAEA] dark:border-[#1A1A1A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {publications.length}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Total de publicações' : language === 'en' ? 'Total publications' : 'Total de publicaciones'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {publications.filter(p => p.type === "journal").length}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Artigos em periódicos' : language === 'en' ? 'Journal articles' : 'Artículos en revistas'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {publications.filter(p => p.type === "conference").length}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Papers em conferências' : language === 'en' ? 'Conference papers' : 'Papers en conferencias'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {new Set(publications.flatMap(p => p.topics || [])).size}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Áreas de pesquisa' : language === 'en' ? 'Research areas' : 'Áreas de investigación'}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
