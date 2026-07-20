import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experiencia } from "./pages/Experiencia";
import { Portfolio } from "./pages/Portfolio";
import { Talks } from "./pages/Talks";
import { Publications } from "./pages/Publications";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { CaseStudy } from "./pages/CaseStudy";

function AppContent() {
  const [currentPath, setCurrentPath] = useState(() => {
    // Initialize with current path or default to home
    const path = window.location.pathname;
    return path === '' || path === '/' ? '/' : path;
  });
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    // Set default page title and description
    document.title = "Ellen Aquino — Product & Strategy";
    
    // Redirect to home if on invalid route on initial load
    const validRoutes = ['/', '/experiencia', '/portfolio', '/palestras', '/publicacoes', '/sobre', '/contato'];
    const isProjectRoute = window.location.pathname.startsWith('/projeto/');
    const currentRoute = window.location.pathname;
    
    if (!validRoutes.includes(currentRoute) && !isProjectRoute && currentRoute !== '') {
      window.history.replaceState({}, "", "/");
      setCurrentPath("/");
    }
    
    // Simple client-side routing
    const handleNavigation = () => {
      setIsNavigating(true);
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
        setIsNavigating(false);
      }, 80);
    };

    // Handle link clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      
      if (link && link.href && link.origin === window.location.origin && !link.target) {
        e.preventDefault();
        const url = new URL(link.href);
        window.history.pushState({}, "", url.pathname);
        handleNavigation();
        
        // Smooth scroll to top with delay for better UX
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 120);
      }
    };

    // Handle browser back/forward
    window.addEventListener("popstate", handleNavigation);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Route matching
  const renderPage = () => {
    if (currentPath === "/") {
      return <Home />;
    } else if (currentPath === "/experiencia") {
      return <Experiencia />;
    } else if (currentPath === "/portfolio") {
      return <Portfolio />;
    } else if (currentPath === "/palestras") {
      return <Talks />;
    } else if (currentPath === "/publicacoes") {
      return <Publications />;
    } else if (currentPath === "/sobre") {
      return <Sobre />;
    } else if (currentPath === "/contato") {
      return <Contato />;
    } else if (currentPath.startsWith("/projeto/")) {
      const slug = currentPath.replace("/projeto/", "");
      return <CaseStudy slug={slug} />;
    }
    
    // 404
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-semibold text-foreground mb-4 tracking-tight">
            404
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Página não encontrada
          </p>
          <a href="/" className="text-accent hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent rounded-md">
            Voltar para home
          </a>
        </div>
      </div>
    );
  };

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 8
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: {
        duration: 0.18,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPath}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
