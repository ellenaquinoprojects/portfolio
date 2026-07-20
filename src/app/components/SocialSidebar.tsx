import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { data } from "../data/ellen";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverBg: string;
}

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Lattes Icon SVG (Academic)
const LattesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

export function SocialSidebar() {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      href: data.contacts.linkedin,
      icon: <Linkedin size={20} strokeWidth={1.75} />,
      bgColor: "from-[#0077B5] to-[#00A0DC]",
      hoverBg: "group-hover:from-[#0077B5] group-hover:to-[#00A0DC]"
    },
    {
      name: "WhatsApp",
      href: data.contacts.whatsapp,
      icon: <WhatsAppIcon />,
      bgColor: "from-[#25D366] to-[#128C7E]",
      hoverBg: "group-hover:from-[#25D366] group-hover:to-[#128C7E]"
    },
    {
      name: "Lattes",
      href: data.contacts.lattes,
      icon: <LattesIcon />,
      bgColor: "from-[#1E40AF] to-[#6366F1]",
      hoverBg: "group-hover:from-[#1E40AF] group-hover:to-[#6366F1]"
    }
  ];

  return (
    <>
      {/* Desktop - Fixed Sidebar Right */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.7 + index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.15, x: -6 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:border-transparent transition-all duration-300 overflow-hidden"
            aria-label={link.name}
          >
            {/* Gradient background on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Icon */}
            <span className="relative z-10">
              {link.icon}
            </span>
            
            {/* Tooltip - appears on the left now */}
            <span className="absolute right-full mr-3 px-3 py-2 bg-foreground text-background text-xs font-medium rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap shadow-2xl">
              {link.name}
            </span>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.bgColor} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`} />
          </motion.a>
        ))}
        
        {/* Decorative line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-px h-20 bg-gradient-to-b from-white/20 via-white/10 to-transparent mx-auto mt-2"
        />
      </motion.div>

      {/* Mobile/Tablet - Floating Bottom Bar */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl glass border border-white/10 shadow-2xl">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.2, y: -6 }}
              whileTap={{ scale: 0.9 }}
              className="group relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent transition-all duration-300 overflow-hidden"
              aria-label={link.name}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Icon */}
              <span className="relative z-10 scale-90">
                {link.icon}
              </span>
              
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.bgColor} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300 -z-10`} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
