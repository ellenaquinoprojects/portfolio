import { motion } from "motion/react";
import { Target, Settings, Lightbulb, TrendingUp } from "lucide-react";

interface QuickInfoProps {
  problem?: string;
  process?: string;
  solution?: string;
  result?: string;
  variant?: "grid" | "result-only";
}

export function QuickInfo({ problem, process, solution, result, variant = "grid" }: QuickInfoProps) {
  if (variant === "result-only" && result) {
    return (
      <div className="relative bg-white/[0.02] border border-white/[0.08] rounded-xl p-4 backdrop-blur-sm overflow-hidden group hover:border-[#4040fb]/20 hover:bg-white/[0.03] transition-all duration-300">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4040fb]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4040fb]/40 via-[#4040fb]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#4040fb]/[0.08] flex items-center justify-center shrink-0 group-hover:bg-[#4040fb]/[0.12] transition-colors duration-300 border border-[#4040fb]/10">
            <TrendingUp size={18} className="text-[#4040fb]" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-1.5 font-medium">
              Key Results
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              {result}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const cards = [
    { 
      icon: Target, 
      label: "Problem", 
      content: problem,
      color: "#4040fb"
    },
    { 
      icon: Settings, 
      label: "Process", 
      content: process,
      color: "#4040fb"
    },
    { 
      icon: Lightbulb, 
      label: "Solution", 
      content: solution,
      color: "#4040fb"
    },
    { 
      icon: TrendingUp, 
      label: "Result", 
      content: result,
      color: "#4040fb"
    },
  ].filter(card => card.content);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((card, index) => {
        const IconComponent = card.icon;
        
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-white/[0.02] border border-white/[0.08] rounded-xl p-6 backdrop-blur-sm overflow-hidden group hover:border-[#4040fb]/20 hover:bg-white/[0.03] transition-all duration-300"
          >
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#4040fb]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Accent corner */}
            <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#4040fb]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-xl" />
            
            <div className="relative flex items-start gap-4">
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 border border-[#4040fb]/10"
                style={{ 
                  backgroundColor: `${card.color}0d`,
                }}
              >
                <IconComponent 
                  size={20} 
                  className="transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: card.color }}
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs uppercase tracking-wider text-white/40 mb-2 font-medium">
                  {card.label}
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {card.content}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
