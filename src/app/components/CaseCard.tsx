import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tag } from "./Tag";
import { ArrowUpRight } from "lucide-react";
import { QuickInfo } from "./QuickInfo";
import { useLanguage } from "../contexts/LanguageContext";
import { getProjectTranslation } from "../i18n/portfolio-translations";

interface CaseCardProps {
  project: {
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    thumb: string;
    status?: string;
    quickInfo?: {
      problem?: string;
      process?: string;
      solution?: string;
      result?: string;
    };
  };
}

export function CaseCard({ project }: CaseCardProps) {
  const { language } = useLanguage();
  const summary = getProjectTranslation(project.slug, 'summary', language, project.summary);
  const status = project.status ? getProjectTranslation(project.slug, 'status', language, project.status) : undefined;
  const result = project.quickInfo?.result ? getProjectTranslation(project.slug, 'quickInfo.result', language, project.quickInfo.result) : undefined;
  
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full"
    >
      <a
        href={`/projeto/${project.slug}`}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-background rounded-3xl"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-3xl mb-6 aspect-video bg-neutral-900">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={project.thumb}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Arrow indicator */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
            <ArrowUpRight size={18} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 px-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {summary}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>

          {/* Status or Result */}
          {status ? (
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4040fb]/10 border border-[#4040fb]/20 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4040fb] animate-pulse" />
                <span className="text-xs font-medium text-[#4040fb]">
                  {status}
                </span>
              </div>
            </div>
          ) : result && (
            <div className="pt-2">
              <QuickInfo 
                result={result} 
                variant="result-only"
              />
            </div>
          )}
        </div>
      </a>
    </motion.article>
  );
}
