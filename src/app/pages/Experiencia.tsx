import { Section } from "../components/Section";
import { ExpItem } from "../components/ExpItem";
import { data } from "../data/ellen";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { contentTranslations } from "../data/content-translations";

export function Experiencia() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Get translated experience data
  const experience = contentTranslations.experience[language];
  
  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B]">
      <Section 
        className="py-20 md:py-28"
        title={t.experience.title}
        description={t.experience.description}
      >
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <ExpItem key={index} item={exp} />
          ))}
        </div>
      </Section>
    </div>
  );
}
