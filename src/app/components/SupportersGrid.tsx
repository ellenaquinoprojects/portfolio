import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { Heart } from "lucide-react";

interface Supporter {
  name: string;
  url: string;
  logo: string;
}

interface SupportersGridProps {
  items: Supporter[];
  title?: string;
}

export function SupportersGrid({ items, title }: SupportersGridProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  if (!items || items.length === 0) return null;

  const defaultTitle = t.portfolio.partners;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Heart className="w-4 h-4 text-[#111827] dark:text-[#E5E7EB]" />
        <h3 className="text-[18px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] tracking-[-0.011em]">
          {title || defaultTitle}
        </h3>
      </div>
      <div className="space-y-3">
        {items.map((supporter, index) => (
          <a
            key={index}
            href={supporter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-5 bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-lg hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] group"
          >
            {supporter.logo ? (
              <div className="w-full h-12 flex items-center justify-center">
                <img
                  src={supporter.logo}
                  alt=""
                  aria-hidden="true"
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all"
                  loading="lazy"
                  decoding="async"
                />
                <span className="sr-only">{supporter.name}</span>
              </div>
            ) : (
              <span className="text-[15px] font-[500] text-[#4A4A4A] dark:text-[#B3B3B3] group-hover:text-[#0A0A0A] dark:group-hover:text-[#F5F5F5] transition-colors text-center tracking-[-0.011em]">
                {supporter.name}
              </span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
