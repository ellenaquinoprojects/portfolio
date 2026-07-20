import { ExternalLink, Newspaper } from "lucide-react";
import { motion } from "motion/react";

interface MediaItem {
  type: "article" | "video" | "talk" | "press";
  title: string;
  url: string;
}

interface MediaListProps {
  items: MediaItem[];
  title?: string;
}

export function MediaList({ items, title = "Cobertura de Mídia" }: MediaListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center gap-3">
          <Newspaper className="w-5 h-5 text-[#111827] dark:text-[#E5E7EB]" />
          <h3 className="text-[20px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5] tracking-[-0.011em]">
            {title}
          </h3>
        </div>
      )}
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group flex items-start gap-3 p-4 bg-[#F9FAFB] dark:bg-[#0A0A0A] border border-[#EAEAEA] dark:border-[#1A1A1A] rounded-lg hover:border-[#111827] dark:hover:border-[#E5E7EB] hover:shadow-md transition-all duration-180 focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB]"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-[500] text-[#0A0A0A] dark:text-[#F5F5F5] group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors leading-[1.5] tracking-[-0.011em]">
                {item.title}
              </p>
            </div>
            <ExternalLink 
              size={18} 
              className="text-[#4A4A4A] dark:text-[#B3B3B3] group-hover:text-[#111827] dark:group-hover:text-[#E5E7EB] transition-colors flex-shrink-0 mt-0.5" 
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
