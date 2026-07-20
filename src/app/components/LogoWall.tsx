import { LogoItem } from "./LogoItem";
import { logoImages } from "./LogoImages";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";

interface Logo {
  name: string;
  url: string;
  logoKey?: keyof typeof logoImages;
}

interface LogoWallProps {
  employers?: Logo[];
  universities?: Logo[];
}

export function LogoWall({ employers, universities }: LogoWallProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  return (
    <div className="space-y-24">
      {employers && employers.length > 0 && (
        <div>
          <h3 className="text-[13px] font-[500] text-[#6B7280] dark:text-[#9CA3AF] mb-10 uppercase tracking-[0.08em]">
            {t.home.experienceTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {employers.map((item, index) => (
              <LogoItem 
                key={item.name} 
                name={item.name}
                url={item.url}
                logoKey={item.logoKey}
                index={index} 
              />
            ))}
          </div>
        </div>
      )}

      {universities && universities.length > 0 && (
        <div>
          <h3 className="text-[13px] font-[500] text-[#6B7280] dark:text-[#9CA3AF] mb-10 uppercase tracking-[0.08em]">
            {t.home.educationTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
            {universities.map((item, index) => (
              <LogoItem 
                key={item.name} 
                name={item.name}
                url={item.url}
                logoKey={item.logoKey}
                index={index}
                isUniversity={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
