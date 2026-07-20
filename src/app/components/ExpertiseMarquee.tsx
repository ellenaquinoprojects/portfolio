import { motion } from "motion/react";

const expertiseItems = [
  "Product",
  "Quality",
  "Data-Driven Product",
  "Systemic Thinking",
  "Innovation",
  "Strategy",
  "Continuous Discovery",
  "Agile Delivery",
  "Sociotechnical",
  "Complex Systems"
];

export function ExpertiseMarquee() {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...expertiseItems, ...expertiseItems, ...expertiseItems];

  return (
    <div className="relative overflow-hidden border-t border-white/5 bg-[#0A0A0A] py-6">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling container */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -1 * (expertiseItems.length * 280)], // Approximate width calculation
        }}
        transition={{
          x: {
            duration: expertiseItems.length * 6, // 6 seconds per item (mais lento)
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8"
          >
            <span className="text-white/30 text-sm font-medium tracking-wider uppercase">
              {item}
            </span>
            <span className="text-white/20 text-2xl">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
