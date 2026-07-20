import { motion, useScroll, useTransform } from "motion/react";
import { CaseCard } from "../components/CaseCard";
import { LogoWall } from "../components/LogoWall";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { ServicesSection } from "../components/ServicesSection";
import { ValuePillars } from "../components/ValuePillars";
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
  
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -60]);
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
            {/* Container com posicionamento relativo para texto e foto */}
            <div className="relative flex items-center">
              {/* Texto (garante que o texto fica acima da foto) */}
              <motion.div
                className="relative z-20"
                style={{ y: textY, willChange: 'transform' }}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReduced ? 0 : 0.8, delay: 0.2 }}
              >
                <h1 className="font-black tracking-[-0.05em] leading-[0.88] text-white
                               text-[clamp(4rem,9.5vw,12rem)]">
                  {language === 'pt' ? 'Produto' : language === 'es' ? 'Producto' : 'Product'}
                  <br />
                  <span className="text-white">
                    {language === 'pt' ? '& Qualidade' : language === 'es' ? '& Calidad' : '& Quality'}
                  </span>
                </h1>

                <p className="mt-6 text-base lg:text-lg text-white/50 max-w-md">
                  {language === 'pt'
                    ? 'Sua Visão. Nosso Futuro.'
                    : language === 'en'
                    ? 'Your Vision. Our Future.'
                    : 'Tu Visión. Nuestro Futuro.'}
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

              {/* FOTO — absoluta, invadindo DIRETAMENTE sobre o texto "Quality" */}
              <motion.div
                aria-hidden
                style={{ y: photoY, willChange: 'transform' }}
                initial={{ opacity: 0, scale: prefersReduced ? 1 : 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: prefersReduced ? 0 : 0.9, delay: 0.3 }}
                className="pointer-events-none max-lg:hidden"
              >
                <div
                  className="
                    absolute 
                    left-[28%] xl:left-[30%] 2xl:left-[32%]
                    top-1/2 -translate-y-1/2
                    w-[58vw] xl:w-[56vw] 2xl:w-[54vw]
                    max-w-[1000px]
                    z-10
                  "
                >
                  <img
                    src={data.profilePhoto}
                    alt=""
                    width={900}
                    height={1000}
                    className="w-full h-auto object-contain select-none"
                    draggable={false}
                  />
                  {/* fade inferior para mesclar no fundo */}
                  <div className="absolute bottom-0 left-0 right-0 h-48
                                  bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Foto mobile - estática e abaixo do texto */}
            <motion.div
              className="lg:hidden mt-12"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <div className="relative max-w-[380px] mx-auto">
                <img
                  src={data.profilePhoto}
                  alt="Ellen Aquino"
                  width={820}
                  height={920}
                  className="w-full h-auto object-contain select-none"
                  draggable={false}
                />
                <div className="absolute bottom-0 left-0 right-0 h-36
                                bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
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

      {/* Services Section */}
      <section className="py-20 md:py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ServicesSection language={language} />
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-20 md:py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ValuePillars language={language} />
        </div>
      </section>


    </div>
  );
}
