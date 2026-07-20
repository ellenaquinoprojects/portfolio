import { useState } from "react";
import { motion } from "motion/react";
import { Section } from "../components/Section";
import { CaseCard } from "../components/CaseCard";
import { Tag } from "../components/Tag";
import { data } from "../data/ellen";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { Filter } from "lucide-react";

export function Portfolio() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(data.portfolio.flatMap((project) => project.tags))
  ).sort();

  // Filter projects by selected tags
  const filteredProjects = selectedTags.length === 0
    ? data.portfolio
    : data.portfolio.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <section className="py-20 md:py-32 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              {t.portfolio.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.portfolio.description}
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="py-16 md:py-24">
        {/* Tag Filters */}
        {allTags.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t.portfolio.filterByArea}
                </h3>
              </div>
              {selectedTags.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-accent hover:opacity-70 transition-opacity font-medium"
                >
                  {t.portfolio.clearFilters}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Tag
                  key={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </motion.div>
        )}

        {/* Projects count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <p className="text-sm text-muted-foreground">
            {language === 'pt' 
              ? `Mostrando ${filteredProjects.length} de ${data.portfolio.length} projetos`
              : language === 'en'
              ? `Showing ${filteredProjects.length} of ${data.portfolio.length} projects`
              : `Mostrando ${filteredProjects.length} de ${data.portfolio.length} proyectos`
            }
          </p>
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CaseCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg text-muted-foreground mb-4">
              {language === 'pt' 
                ? 'Nenhum projeto encontrado com esses filtros.'
                : language === 'en'
                ? 'No projects found with these filters.'
                : 'No se encontraron proyectos con estos filtros.'
              }
            </p>
            <button
              onClick={clearFilters}
              className="text-accent hover:opacity-70 transition-opacity font-medium"
            >
              {t.portfolio.clearFilters}
            </button>
          </motion.div>
        )}
      </Section>
    </div>
  );
}
