import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";

interface Service {
  titleKey: string;
  descKey: string;
}

interface ServicesSectionProps {
  language?: 'pt' | 'en' | 'es';
}

const servicesData: Service[] = [
  {
    titleKey: "technologyStrategy",
    descKey: "technologyStrategyDesc"
  },
  {
    titleKey: "processProduct",
    descKey: "processProductDesc"
  },
  {
    titleKey: "qualityAssurance",
    descKey: "qualityAssuranceDesc"
  },
  {
    titleKey: "complexSystems",
    descKey: "complexSystemsDesc"
  }
];

export function ServicesSection({ language: propLanguage }: ServicesSectionProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;
  const t = useTranslation(language);

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
          {t.services.title}
        </h2>
      </motion.div>

      {/* Services List - Compact */}
      <div className="space-y-8">
        {servicesData.map((service, index) => {
          const title = t.services[service.titleKey as keyof typeof t.services] as string;
          const description = t.services[service.descKey as keyof typeof t.services] as string;
          
          return (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-b border-white/5 pb-6 last:border-0"
            >
              {/* Title */}
              <div>
                <h3 className="text-base font-medium text-foreground">
                  {title}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
