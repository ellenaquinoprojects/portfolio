import { motion, useScroll, useTransform } from "motion/react";
import { CaseCard } from "../components/CaseCard";
import { LogoWall } from "../components/LogoWall";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { ConnectionSection } from "../components/ConnectionSection";
import { data } from "../data/ellen";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { useRef } from "react";

export function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const featuredProjects = data.portfolio.slice(0, 3);
  
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
            <motion.div
              className="relative z-20 max-w-4xl"
              style={{ y: textY, willChange: 'transform' }}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.8, delay: 0.2 }}
            >
              <h1 className="font-black tracking-[-0.03em] leading-[0.95] text-white
                             text-[clamp(2.75rem,6vw,6.5rem)]">
                {t.home.headline}
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-white/50 max-w-2xl">
                {t.home.subhead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
        </div>
      </section>

      {/* Mini Bio */}
      <section className="py-24 md:py-32 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-[320px] mx-auto lg:mx-0"
            >
              <img
                src={data.profilePhoto}
                alt="Ellen Aquino"
                width={820}
                height={920}
                className="w-full h-auto object-cover rounded-2xl select-none"
                draggable={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-white/70 text-base lg:text-lg leading-relaxed"
            >
              {t.home.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Wall */}
      <section className="py-24 border-y border-white/5 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-white/40 uppercase tracking-[0.2em]">
              {language === 'pt' ? 'Confiança de organizações globais' : language === 'en' ? 'Trusted by global organizations' : 'Confianza de organizaciones globales'}
            </p>
          </motion.div>
          <LogoWall employers={data.logoWall.employers} universities={data.logoWall.universities} />
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CaseCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
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

      {/* Testimonials Section */}
      <section className="py-32 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
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

      {/* Connection Section (Services + Value Pillars unified) */}
      <section className="py-20 md:py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ConnectionSection language={language} />
        </div>
      </section>
    </div>
  );
}
