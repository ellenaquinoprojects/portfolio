import { motion } from "motion/react";
import { Target, Layers, ShieldCheck, Cpu, Network, Zap, Search, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";

interface ConnectionSectionProps {
  language?: 'pt' | 'en' | 'es';
}

export function ConnectionSection({ language: propLanguage }: ConnectionSectionProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;
  const t = useTranslation(language);

  const items = [
    { icon: Target, title: t.services.technologyStrategy, description: t.services.technologyStrategyDesc },
    { icon: Layers, title: t.services.processProduct, description: t.services.processProductDesc },
    { icon: ShieldCheck, title: t.services.qualityAssurance, description: t.services.qualityAssuranceDesc },
    { icon: Cpu, title: t.services.complexSystems, description: t.services.complexSystemsDesc },
    { icon: Network, title: t.value.systemicThinking, description: t.value.systemicThinkingDesc },
    { icon: Zap, title: t.value.innovation, description: t.value.innovationDesc },
    { icon: Search, title: t.value.research, description: t.value.researchDesc },
    { icon: Users, title: t.value.collaborative, description: t.value.collaborativeDesc },
  ];

  return (
    <div className="py-12 md:py-16">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="h-full"
            >
              <Card className="h-full bg-white/[0.02] border-white/10 hover:bg-white/[0.04] transition-colors duration-300">
                <CardContent className="pt-6">
                  <div className="mb-6 flex size-11 items-center justify-center rounded-full border border-white/10">
                    <Icon size={20} className="text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
