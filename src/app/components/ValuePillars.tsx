import { useState } from "react";
import { motion } from "motion/react";
import { Network, Zap, Search, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";

interface Pillar {
  titleKey: string;
  descKey: string;
  icon: string;
}

interface ValuePillarsProps {
  language?: 'pt' | 'en' | 'es';
}

const pillarsData: Pillar[] = [
  {
    titleKey: "systemicThinking",
    descKey: "systemicThinkingDesc",
    icon: "network"
  },
  {
    titleKey: "innovation",
    descKey: "innovationDesc",
    icon: "zap"
  },
  {
    titleKey: "research",
    descKey: "researchDesc",
    icon: "search"
  },
  {
    titleKey: "collaborative",
    descKey: "collaborativeDesc",
    icon: "users"
  }
];

const iconMap = {
  "network": Network,
  "zap": Zap,
  "search": Search,
  "users": Users
};

export function ValuePillars({ language: propLanguage }: ValuePillarsProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;
  const t = useTranslation(language);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-12 md:py-16">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
          {t.value.title}
        </h2>
      </motion.div>

      {/* Grid - Fixed 4 columns, no line break */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        {pillarsData.map((pillar, index) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          const title = t.value[pillar.titleKey as keyof typeof t.value] as string;
          const description = t.value[pillar.descKey as keyof typeof t.value] as string;
          const isHovered = hoveredIndex === index;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative overflow-visible"
            >
              {/* Card Container - stays in grid */}
              <div
                className={`
                  h-full rounded-2xl p-8
                  border border-white/10
                  transition-all duration-300 ease-out
                  cursor-default
                  ${isHovered 
                    ? 'bg-white/[0.08] shadow-lg z-10' 
                    : 'bg-white/[0.02] hover:bg-white/[0.04]'
                  }
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon 
                    size={32} 
                    className="text-muted-foreground transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Title */}
                  <h3 className={`
                    font-medium text-foreground mb-3
                    transition-all duration-300
                    ${isHovered ? 'text-xl' : 'text-lg'}
                  `}>
                    {title}
                  </h3>

                  {/* Description - Appears on hover */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
