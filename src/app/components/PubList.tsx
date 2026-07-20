import { BookOpen, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  venue: string;
  year: number;
  url: string;
}

interface PubListProps {
  items: Publication[];
}

export function PubList({ items }: PubListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
        Publicações
      </h3>
      <ul className="space-y-4">
        {items.map((pub, index) => (
          <li key={index} className="flex items-start gap-4 pb-4 border-b border-[#EAEAEA] dark:border-[#1A1A1A] last:border-0">
            <div className="flex-shrink-0 mt-1">
              <BookOpen size={20} className="text-[#4A4A4A] dark:text-[#B3B3B3]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">
                {pub.title}
              </h4>
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] mt-1">
                {pub.venue} ({pub.year})
              </p>
            </div>
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-[14px] text-[#0A0A0A] dark:text-[#F5F5F5] hover:underline focus:outline-none focus:ring-2 focus:ring-[#111827] dark:focus:ring-[#E5E7EB] rounded-sm inline-flex items-center gap-1"
              >
                Ler
                <ExternalLink size={14} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
