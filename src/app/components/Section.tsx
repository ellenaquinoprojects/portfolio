import { motion } from "motion/react";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Section({ children, className = "", title, description }: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {(title || description) && (
          <motion.div 
            className="mb-16 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
