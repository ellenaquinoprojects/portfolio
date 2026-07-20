import { ReactNode, useState, useEffect } from "react";
import { Menu, X, Download, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SocialSidebar } from "./SocialSidebar";
import { ExpertiseMarquee } from "./ExpertiseMarquee";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/portfolio", label: t.nav.portfolio },
    { href: "/experiencia", label: t.nav.experience },
    { href: "/sobre", label: t.nav.about },
    { href: "/contato", label: t.nav.contact }
  ];

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Social Sidebar */}
      <SocialSidebar />
      
      {/* Header - Ultra Clean */}
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'backdrop-blur-xl bg-[#0A0A0A]/95 border-b border-white/10' 
            : 'backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Name */}
            <motion.a 
              href="/" 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                Ellen Aquino
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient group-hover:w-full transition-all duration-300"></div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" role="navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive(item.href) 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2">
                <a
                  href="https://drive.google.com/file/d/1CuHJSAo3L7tZCllsna2pDY_LmO3WQXYH/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                  aria-label={t.common.readEbook}
                >
                  <BookOpen size={16} />
                  <span>{t.common.readEbook}</span>
                </a>
                <LanguageSwitcher />
              </div>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 text-foreground hover:bg-white/10 rounded-xl transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 backdrop-blur-xl bg-[#0A0A0A]/95"
            >
              <div className="max-w-6xl mx-auto px-6 py-6 space-y-6">
                <div className="flex flex-col gap-3">
                  <a
                    href="https://drive.google.com/file/d/1CuHJSAo3L7tZCllsna2pDY_LmO3WQXYH/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                    aria-label={t.common.readEbook}
                  >
                    <BookOpen size={16} />
                    <span>{t.common.readEbook}</span>
                  </a>
                  <LanguageSwitcher />
                </div>
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                        isActive(item.href)
                          ? 'text-foreground bg-white/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content with top padding for fixed header */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Expertise Marquee - Above Footer */}
      <ExpertiseMarquee />

      {/* Footer - Clean & Personal */}
      <footer className="bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About - Removed CTA section as requested */}

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {t.contact.title}
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:ellen.lcaquino@gmail.com"
                  className="block text-sm text-foreground hover:text-accent transition-colors"
                >
                  ellen.lcaquino@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/ellencarvalho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn →
                </a>
                <p className="text-xs text-muted-foreground/70 pt-2 border-t border-white/5">
                  {t.common.openToProjects}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Ellen Aquino. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/palestras" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                {t.nav.talks}
              </a>
              <a href="/publicacoes" className="text-xs text-muted-foreground hover:text-accent transition-colors">
                {t.nav.publications}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}