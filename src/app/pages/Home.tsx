import { motion, useScroll, useTransform } from "motion/react";
import { LogoWall } from "../components/LogoWall";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { ConnectionSection } from "../components/ConnectionSection";
import { FeaturedTimeline } from "../components/FeaturedTimeline";
import { Entropy } from "../components/Entropy";
import { BlurText } from "../components/BlurText";
import { data } from "../data/ellen";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { useRef } from "react";

export function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const featuredSlugs = ["gghub-approach-tours", "qualitymap-app", "quality-score-metodologia", "colegio-kingdom"];
  const featuredProjects = featuredSlugs
    .map(slug => data.portfolio.find(project => project.slug === slug))
    .filter((project): project is (typeof data.portfolio)[number] => Boolean(project));
  
  // Parallax effect (reduzido e com cap em mobile)
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, 32]);

  // Respeitar preferências de movimento reduzido
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center bg-black overflow-visible"
      >
        {/* fundo em leve gradiente/vignette - mais forte atrás da foto */}
        <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_60%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 from-black via-black/30 to-black bg-gradient-to-b pointer-events-none" />

        {/* content wrapper */}
        <div className="relative w-full h-full flex items-center">
          <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-16 xl:px-24">
            <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_auto] gap-12 xl:gap-10 items-center">
              <motion.div
                className="relative z-20"
                style={{ y: textY, willChange: 'transform' }}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.8, delay: 0.2 }}
              >
                <h1 className="font-black tracking-[-0.03em] leading-[0.95] text-white
                               text-[clamp(2.25rem,4.5vw,4.75rem)]">
                  {t.home.headline}
                </h1>

                <p className="mt-5 text-base lg:text-lg text-white/50 max-w-xl">
                  {t.home.subhead}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <motion.a
                    href="/portfolio"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-7 py-3 bg-white text-black font-semibold
                               rounded-full hover:bg-white/90 transition-all text-sm
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                               focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    {language === 'pt' ? 'Ver Projetos' : language === 'en' ? 'View Projects' : 'Ver Proyectos'}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <motion.a
                    href="/contato"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white
                               hover:border-white/50 hover:bg-white/5 font-semibold rounded-full transition-all text-sm
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                               focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Mail size={16} />
                    {language === 'pt' ? 'Contato' : language === 'en' ? 'Contact' : 'Contacto'}
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                className="hidden xl:block relative z-10"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReduced ? 0 : 0.9, delay: 0.3 }}
              >
                <Entropy size={520} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Bio */}
      <section className="py-16 md:py-20 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: signature — name + overlapping photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative text-center select-none mx-auto lg:mx-0"
            >
              <div>
                <BlurText
                  text="ELLEN"
                  animateBy="letters"
                  delay={0.05}
                  className="font-black tracking-tighter leading-[0.9] text-4xl md:text-5xl justify-center text-accent"
                />
              </div>
              <div>
                <BlurText
                  text="AQUINO"
                  animateBy="letters"
                  delay={0.05}
                  className="font-black tracking-tighter leading-[0.9] text-4xl md:text-5xl justify-center text-accent"
                />
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[62px] h-[104px] md:w-[72px] md:h-[122px] rounded-full overflow-hidden border-4 border-[#0A0A0A] shadow-2xl">
                  <img
                    src={data.profilePhoto}
                    alt="Ellen Aquino"
                    width={200}
                    height={340}
                    className="w-full h-full object-cover select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: bio text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-sm text-white/40 uppercase tracking-[0.2em] mb-2">
                {t.home.bioSubheading}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                {t.home.bioHeading}
              </h2>
              <div className="space-y-5 text-white/70 text-base lg:text-lg leading-relaxed">
                {t.home.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-20 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              {t.home.featuredProjects}
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              {language === 'pt'
                ? 'Explorando desafios complexos com estratégia, dados e design centrado no usuário.'
                : language === 'en'
                ? 'Exploring complex challenges with strategy, data, and user-centered design.'
                : 'Explorando desafíos complejos con estrategia, datos y diseño centrado en el usuario.'
              }
            </p>
          </motion.div>

          <FeaturedTimeline projects={featuredProjects} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="/portfolio"
              whileHover={{ x: 4 }}
              className="group inline-flex items-center gap-2 text-white hover:text-white/70 transition-colors font-medium"
            >
              {t.home.viewAllProjects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Connection Section (Services + Value Pillars unified) */}
      <section className="py-16 md:py-20 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ConnectionSection language={language} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-white/40 uppercase tracking-[0.2em] mb-4">
              {language === 'pt' ? 'Depoimentos' : language === 'en' ? 'Testimonials' : 'Testimonios'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {language === 'pt'
                ? 'O que dizem sobre meu trabalho'
                : language === 'en'
                ? 'What people say about my work'
                : 'Lo que dicen sobre mi trabajo'
              }
            </h2>
          </motion.div>
        </div>

        <TestimonialCarousel testimonials={data.testimonials} />
      </section>

      {/* Logo Wall */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-sm text-white/40 uppercase tracking-[0.2em]">
              {language === 'pt' ? 'Confiança de organizações globais' : language === 'en' ? 'Trusted by global organizations' : 'Confianza de organizaciones globales'}
            </p>
          </motion.div>
          <LogoWall employers={data.logoWall.employers} universities={data.logoWall.universities} />
        </div>
      </section>
    </div>
  );
}
