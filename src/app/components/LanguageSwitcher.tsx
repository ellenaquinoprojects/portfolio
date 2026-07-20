import { useLanguage, Language } from "../contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; native: string }[] = [
    { code: "pt", label: "Portuguese", native: "Português" },
    { code: "en", label: "English", native: "English" },
    { code: "es", label: "Spanish", native: "Español" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
      <SelectTrigger 
        className="w-[130px] h-9 border-border hover:bg-muted focus:ring-ring text-sm"
        aria-label="Select language"
      >
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-muted-foreground" />
          <SelectValue>
            <span className="text-[13px] font-medium">{currentLanguage?.code.toUpperCase()}</span>
          </SelectValue>
        </div>
      </SelectTrigger>
      <SelectContent className="border-border">
        {languages.map((lang) => (
          <SelectItem 
            key={lang.code} 
            value={lang.code}
            className="text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium">{lang.code.toUpperCase()}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{lang.native}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
