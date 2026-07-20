import { motion } from "motion/react";

interface ExpItemProps {
  item: {
    company: string;
    title: string;
    location: string;
    period: string;
    highlights: string[];
  };
}

export function ExpItem({ item }: ExpItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 last:pb-0 border-b border-[#EDEDED] dark:border-[#2A2A2A] last:border-0"
    >
      {/* Left column: Period and Location */}
      <div className="md:col-span-3 space-y-1">
        <time className="block text-[14px] font-[600] text-[#3B82F6]">
          {item.period}
        </time>
        <address className="not-italic text-[14px] text-[#717171] dark:text-[#A0A0A0]">
          {item.location}
        </address>
      </div>

      {/* Right column: Title, Company, and Highlights */}
      <div className="md:col-span-9 space-y-3">
        <div>
          <h3 className="text-[24px] font-[700] text-[#0B0B0B] dark:text-white leading-tight">
            {item.title}
          </h3>
          <p className="text-[18px] font-[500] text-[#3B82F6] mt-1">
            {item.company}
          </p>
        </div>
        
        <ul className="space-y-2 mt-4">
          {item.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#3B82F6] mt-1.5 flex-shrink-0">•</span>
              <span className="text-[16px] text-[#717171] dark:text-[#A0A0A0] leading-relaxed">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
