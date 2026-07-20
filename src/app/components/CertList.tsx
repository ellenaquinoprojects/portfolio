import { Award } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  year: number;
  url: string;
}

interface CertListProps {
  items: Certification[];
}

export function CertList({ items }: CertListProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-[24px] font-[700] text-[#0A0A0A] dark:text-[#F5F5F5] mb-6">
        Certificações
      </h3>
      <ul className="space-y-4">
        {items.map((cert, index) => (
          <li key={index} className="flex items-start gap-4 pb-4 border-b border-[#EAEAEA] dark:border-[#1A1A1A] last:border-0">
            <div className="flex-shrink-0 mt-1">
              <Award size={20} className="text-[#4A4A4A] dark:text-[#B3B3B3]" />
            </div>
            <div className="flex-1">
              <h4 className="text-[16px] font-[600] text-[#0A0A0A] dark:text-[#F5F5F5]">
                {cert.name}
              </h4>
              <p className="text-[14px] text-[#4A4A4A] dark:text-[#B3B3B3] mt-1">
                {cert.issuer} • {cert.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
