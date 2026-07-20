import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/ellen";
import { Calendar, MapPin, Tag as TagIcon, Video, ExternalLink } from "lucide-react";
import { Tag } from "../components/Tag";

export function Talks() {
  const { language, t } = useLanguage();
  const talks = data.talks;

  // Group talks by year
  const talksByYear = talks.reduce((acc, talk) => {
    const year = talk.year || "Other";
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(talk);
    return acc;
  }, {} as Record<string | number, typeof talks>);

  // Sort years descending
  const sortedYears = Object.keys(talksByYear).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return 1;
    return Number(b) - Number(a);
  });

  const pageTitle = language === 'pt' ? 'Palestras & Apresentações' : language === 'en' ? 'Talks & Presentations' : 'Charlas & Presentaciones';
  const pageSubtitle = language === 'pt' 
    ? 'Sessão dedicada a todas as palestras apresentadas em eventos com foco científico, social ou político.'
    : language === 'en' 
    ? 'Session dedicated to all lectures delivered at events with a scientific, social, or political focus.'
    : 'Sesión dedicada a todas las conferencias presentadas en eventos con enfoque científico, social o político.';

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B] pt-24 pb-32">
      <div className="max-w-[960px] mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.header 
          className="mb-16"
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

        {/* Talks by Year */}
        <div className="space-y-16">
          {sortedYears.map((year, yearIndex) => (
            <motion.section
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: yearIndex * 0.1 }}
            >
              {/* Year Header */}
              <div className="mb-8 pb-3 border-b border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h2 className="text-[28px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] tracking-[-0.015em]">
                  {year === "Other" ? (language === 'pt' ? 'Outros' : language === 'en' ? 'Other' : 'Otros') : year}
                </h2>
              </div>

              {/* Talks List */}
              <div className="space-y-8">
                {talksByYear[year].map((talk, index) => (
                  <motion.article
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (yearIndex * 0.1) + (index * 0.05) }}
                  >
                    <div className="p-6 md:p-8 bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-lg hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180">
                      {/* Talk Title */}
                      <h3 className="text-[20px] md:text-[22px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-3 tracking-[-0.011em]">
                        {talk.title}
                      </h3>

                      {/* Event Info */}
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-[15px] text-[#4A4A4A] dark:text-[#B3B3B3]">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{talk.event}</span>
                        </div>
                        {talk.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{talk.location}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <TagIcon className="w-4 h-4" />
                          <span className="text-[14px] font-[500] text-[#6B7280] dark:text-[#9CA3AF]">
                            {talk.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      {talk.description && (
                        <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed mb-4 tracking-[-0.011em]">
                          {talk.description}
                        </p>
                      )}

                      {/* Topics Tags */}
                      {talk.topics && talk.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {talk.topics.map((topic, i) => (
                            <Tag key={i} label={topic} />
                          ))}
                        </div>
                      )}

                      {/* Links */}
                      {talk.links && talk.links.length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
                          {talk.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[14px] font-[500] text-[#111827] dark:text-[#E5E7EB] hover:text-[#0A0A0A] dark:hover:text-[#F5F5F5] transition-colors group/link"
                            >
                              {link.url.includes('youtube') || link.url.includes('vimeo') ? (
                                <Video className="w-4 h-4" />
                              ) : (
                                <ExternalLink className="w-4 h-4" />
                              )}
                              <span className="border-b border-transparent group-hover/link:border-current transition-all">
                                {link.label}
                              </span>
                            </a>
                          ))}
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
                {talks.length}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Total de palestras' : language === 'en' ? 'Total talks' : 'Total de charlas'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {new Set(talks.map(t => t.type)).size}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Tipos de eventos' : language === 'en' ? 'Event types' : 'Tipos de eventos'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {new Set(talks.flatMap(t => t.topics || [])).size}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Tópicos únicos' : language === 'en' ? 'Unique topics' : 'Tópicos únicos'}
              </div>
            </div>
            <div>
              <div className="text-[32px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-1">
                {talks.filter(t => t.links && t.links.length > 0).length}
              </div>
              <div className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] tracking-[-0.011em]">
                {language === 'pt' ? 'Com recursos online' : language === 'en' ? 'With online resources' : 'Con recursos en línea'}
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
