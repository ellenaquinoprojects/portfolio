import { Section } from "../components/Section";
import { LogoWall } from "../components/LogoWall";
import { data } from "../data/ellen";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { contentTranslations } from "../data/content-translations";

export function Sobre() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  // Get translated content
  const aboutShort = contentTranslations.about[language].short;
  const aboutExtended = contentTranslations.about[language].extended;
  const aboutPersonal = contentTranslations.about[language].personal;
  const skillsFocus = contentTranslations.skillsFocus[language];
  const languages = contentTranslations.languages[language];
  const education = contentTranslations.education[language];
  const certifications = contentTranslations.certifications[language];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0B0B]">
      <Section 
        className="py-20 md:py-28"
        title={t.about.pageTitle}
        description={t.about.pageDescription}
      >
        {/* Highlighted Stats - Simplified */}
        <div className="flex flex-wrap justify-start gap-x-12 gap-y-8 mb-16 pb-8 border-b border-white/5">
          <div>
            <div className="text-[56px] md:text-[64px] font-[800] text-[#4040fb] mb-2 tracking-tight leading-none">
              +10
            </div>
            <div className="text-[14px] text-muted-foreground">
              {t.about.yearsExperience}
            </div>
          </div>
          <div>
            <div className="text-[56px] md:text-[64px] font-[800] text-[#4040fb] mb-2 tracking-tight leading-none">
              +3
            </div>
            <div className="text-[14px] text-muted-foreground">
              {t.about.countries}
            </div>
          </div>
          <a href="/palestras" className="group">
            <div className="text-[56px] md:text-[64px] font-[800] text-[#4040fb] group-hover:text-[#3030d0] mb-2 tracking-tight leading-none transition-colors">
              +{data.talks.length}
            </div>
            <div className="text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">
              {t.about.talksCount} →
            </div>
          </a>
          <a href="/publicacoes" className="group">
            <div className="text-[56px] md:text-[64px] font-[800] text-[#4040fb] group-hover:text-[#3030d0] mb-2 tracking-tight leading-none transition-colors">
              +{data.mainPublications.length}
            </div>
            <div className="text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">
              {t.about.publicationsCount} →
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20 md:mb-28">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quote/Highlight - Short version */}
            <div className="relative pl-6 border-l-4 border-[#4040fb]">
              <p className="text-[17px] md:text-[19px] text-[#0A0A0A] dark:text-[#F5F5F5] leading-relaxed font-[500] italic">
                {aboutShort}
              </p>
            </div>

            {/* Extended Content */}
            <div className="space-y-5">
              {aboutExtended.split('\\n\\n').map((paragraph, index) => (
                <p key={index} className="text-[16px] md:text-[17px] text-[#4A4A4A] dark:text-[#B3B3B3] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Life Section - Compact */}
            <div className="pt-8 mt-8 border-t border-white/5">
              <h3 className="text-[14px] font-[600] text-muted-foreground mb-3 tracking-tight uppercase">
                {t.about.personalTitle}
              </h3>
              <p className="text-[14px] text-muted-foreground/80 leading-relaxed">
                {aboutPersonal}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-8">
              {/* Skills Focus */}
              <div className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h3 className="text-[18px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {t.about.skillsTitle}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillsFocus.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-[#0B0B0B] text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] font-[500] rounded-md border border-[#EAEAEA] dark:border-[#1A1A1A]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-[#F9FAFB] dark:bg-[#0A0A0A] rounded-2xl p-6 border border-[#EAEAEA] dark:border-[#1A1A1A]">
                <h3 className="text-[18px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-4">
                  {t.about.languagesTitle}
                </h3>
                <ul className="space-y-2">
                  {languages.map((lang, index) => (
                    <li key={index} className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3]">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Universities Logo Wall */}
        <div className="mb-20 md:mb-28">
          <LogoWall universities={data.logoWall.universities} />
        </div>

        {/* Education & Certifications - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-28">
          {/* Education */}
          <div>
            <h2 className="text-[20px] font-[600] text-foreground mb-8 tracking-tight">
              {t.about.education}
            </h2>
            <div className="space-y-5">
              {education.map((edu, index) => (
                <article key={index} className="group">
                  <div className="text-[15px] font-[600] text-foreground mb-1">
                    {edu.course}
                  </div>
                  <div className="text-[14px] text-muted-foreground">
                    {edu.org} • {edu.years}
                  </div>
                  {edu.note && (
                    <div className="text-[13px] text-muted-foreground/70 mt-1.5 italic">
                      {edu.note}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-[20px] font-[600] text-foreground mb-8 tracking-tight">
              {t.about.certificationsTitle}
            </h2>
            <div className="space-y-5">
              {certifications.map((cert, index) => (
                <article key={index} className="group">
                  <div className="text-[15px] font-[600] text-foreground mb-1">
                    {cert.name}
                  </div>
                  <div className="text-[14px] text-muted-foreground">
                    {cert.issuer} • {cert.year}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Talks & Publications Cards - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Talks */}
          <div className="bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-xl p-8 hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-[20px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2 tracking-[-0.011em]">
                  {t.about.talksTitle}
                </h3>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] mb-4 leading-relaxed">
                  {t.about.talksDesc}
                </p>
                <div className="flex items-center gap-6 text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] mb-6">
                  <div>
                    <span className="font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">{data.talks.length}</span> {t.about.talksCount}
                  </div>
                  <div>
                    <span className="font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">{new Set(data.talks.map(t => t.type)).size}</span> {t.about.eventTypes}
                  </div>
                </div>
              </div>
              <a
                href="/palestras"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] dark:bg-[#E5E7EB] text-white dark:text-[#0B0B0B] text-[15px] font-[500] rounded-lg hover:bg-[#0A0A0A] dark:hover:bg-[#F5F5F5] transition-colors duration-180 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] self-start"
              >
                {t.about.viewAll}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Publications */}
          <div className="bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-xl p-8 hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-[20px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] mb-2 tracking-[-0.011em]">
                  {t.about.publicationsCardTitle}
                </h3>
                <p className="text-[16px] text-[#4A4A4A] dark:text-[#B3B3B3] mb-4 leading-relaxed">
                  {t.about.publicationsCardDesc}
                </p>
                <div className="flex items-center gap-6 text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] mb-6">
                  <div>
                    <span className="font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">{data.mainPublications.length}</span> {t.about.publicationsCount}
                  </div>
                  <div>
                    <span className="font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">{data.mainPublications.filter(p => p.url).length}</span> {t.about.withLink}
                  </div>
                </div>
              </div>
              <a
                href="/publicacoes"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111827] dark:bg-[#E5E7EB] text-white dark:text-[#0B0B0B] text-[15px] font-[500] rounded-lg hover:bg-[#0A0A0A] dark:hover:bg-[#F5F5F5] transition-colors duration-180 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] self-start"
              >
                {t.about.viewAll}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
