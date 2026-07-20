import { motion } from "motion/react";
import { logoImages } from "./LogoImages";

interface LogoItemProps {
  name: string;
  url: string;
  logoKey?: keyof typeof logoImages;
  index: number;
  isUniversity?: boolean;
}

export function LogoItem({ name, url, logoKey, index, isUniversity = false }: LogoItemProps) {
  const logoSrc = logoKey ? logoImages[logoKey] : undefined;
  const heightClass = isUniversity ? "h-20" : "h-14";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className="flex items-center justify-center px-6 py-8 opacity-50 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] focus:ring-offset-2 rounded-xl group"
      aria-label={name}
    >
      {logoSrc ? (
        <div className={`w-full ${heightClass} flex items-center justify-center`}>
          <img
            src={logoSrc}
            alt=""
            aria-hidden="true"
            className="max-w-full max-h-full object-contain grayscale-[0.85] group-hover:grayscale-0 brightness-[0.9] group-hover:brightness-100 contrast-[0.85] group-hover:contrast-100 dark:brightness-[1.1] dark:contrast-[0.9] transition-all duration-300"
            loading="lazy"
            decoding="async"
          />
          <span className="sr-only">{name}</span>
        </div>
      ) : (
        <div className="text-center">
          <span className="text-[15px] font-[500] text-[#6B7280] dark:text-[#9CA3AF] tracking-[-0.011em] group-hover:text-[#0A0A0A] dark:group-hover:text-[#F5F5F5] transition-colors duration-300">
            {name}
          </span>
        </div>
      )}
    </motion.a>
  );
}
