import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface Testimonial {
  name: string;
  role: string;
  company_logo: string;
  avatar_logo?: string;
  text: string | { pt: string; en: string; es: string };
  year: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const { language } = useLanguage();
  // Duplicate testimonials to create seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling container */}
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -1 * (testimonials.length * 400)], // 400px = card width + gap
        }}
        transition={{
          x: {
            duration: testimonials.length * 15, // 15 seconds per testimonial (slower for better readability)
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.name}-${index}`}
            testimonial={testimonial}
            language={language}
          />
        ))}
      </motion.div>
    </div>
  );
}

function TestimonialCard({ testimonial, language }: { testimonial: Testimonial; language: 'pt' | 'en' | 'es' }) {
  const text = typeof testimonial.text === 'string' 
    ? testimonial.text 
    : testimonial.text[language] || testimonial.text.pt;
    
  return (
    <div className="min-w-[380px] max-w-[380px]">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
        {/* Header with avatar and info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden p-2.5">
            <img
              src={testimonial.avatar_logo || testimonial.company_logo}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback to initials if logo fails to load
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  parent.classList.remove('bg-white', 'p-2.5');
                  parent.classList.add('bg-white/10', 'border', 'border-white/20');
                  parent.innerHTML = `<span class="text-white/60 font-medium text-sm">${testimonial.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2)}</span>`;
                }
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white mb-1 text-sm">
              {testimonial.name}
            </h4>
            <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Testimonial text */}
        <blockquote className="text-sm text-white/70 leading-relaxed flex-1 line-clamp-6">
          "{text}"
        </blockquote>
      </div>
    </div>
  );
}
