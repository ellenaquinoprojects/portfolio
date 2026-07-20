import { motion } from "motion/react";
import { Shield, Target, Layers, Cpu, Network, Zap, Search, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";

interface ConnectionSectionProps {
  language?: 'pt' | 'en' | 'es';
}

export function ConnectionSection({ language: propLanguage }: ConnectionSectionProps) {
  const { language: contextLanguage } = useLanguage();
  const language = propLanguage || contextLanguage;
  const t = useTranslation(language);
  const c = t.connection;

  return (
    <div className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground">
          {c.title}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 auto-rows-[minmax(150px,auto)]">
        {/* Stat — anchor card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-2 lg:row-span-2"
        >
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col">
            <div className="relative w-32 h-32 mb-5">
              <svg viewBox="0 0 132 132" className="absolute inset-0">
                <circle cx="66" cy="66" r="58" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/10" />
                <circle
                  cx="66" cy="66" r="58" fill="none" strokeWidth="2" strokeLinecap="round"
                  strokeDasharray="260 364" transform="rotate(-90 66 66)"
                  className="text-accent stroke-current"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[34px] font-extrabold tracking-tight text-foreground">
                10+
              </div>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
              {c.statTitle}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[26ch]">
              {c.statDesc}
            </p>
          </div>
        </motion.div>

        {/* Quality */}
        <BentoCard delay={0.05} title={c.quality.title} description={c.quality.desc} icon={Shield} />

        {/* Tech strategy */}
        <BentoCard delay={0.1} title={c.techStrategy.title} description={c.techStrategy.desc} icon={Target} />

        {/* Process & Product */}
        <BentoCard delay={0.15} title={c.process.title} description={c.process.desc} icon={Layers} />

        {/* Complex systems */}
        <BentoCard delay={0.2} title={c.systems.title} description={c.systems.desc} icon={Cpu} />

        {/* Systemic thinking — wide, sparkline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="lg:col-span-3"
        >
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex flex-row items-center gap-7">
            <div className="flex-1 min-w-0">
              <div className="mb-4 flex size-10 items-center justify-center rounded-[11px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
                <Network size={17} className="text-muted-foreground" strokeWidth={1.6} />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-1.5">
                {c.systemic.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {c.systemic.desc}
              </p>
            </div>
            <div className="w-[150px] flex-shrink-0 hidden sm:flex items-center justify-center">
              <svg viewBox="0 0 150 60" fill="none" className="w-full h-[60px]">
                <polyline
                  points="0,42 22,30 44,36 66,16 88,24 110,10 132,18 150,6"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="text-accent stroke-current"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Innovation — wide, dotgrid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex flex-row items-center gap-7">
            <div className="flex-1 min-w-0">
              <div className="mb-4 flex size-10 items-center justify-center rounded-[11px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
                <Zap size={17} className="text-muted-foreground" strokeWidth={1.6} />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-1.5">
                {c.innovation.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {c.innovation.desc}
              </p>
            </div>
            <div
              className="w-[150px] h-20 rounded-xl hidden sm:block flex-shrink-0"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
              }}
            />
          </div>
        </motion.div>

        {/* Research */}
        <BentoCard span="lg:col-span-3" delay={0.35} title={c.research.title} description={c.research.desc} icon={Search} />

        {/* Collaboration — overlapping circles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-3"
        >
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6 flex flex-row items-center gap-7">
            <div className="flex-1 min-w-0">
              <div className="mb-4 flex items-center">
                <div className="size-11 rounded-full border-2 border-accent bg-white/[0.04]" />
                <div className="size-11 rounded-full border border-white/15 bg-white/[0.06] -ml-3.5" />
              </div>
              <h3 className="text-base font-semibold tracking-tight text-foreground mb-1.5">
                {c.collaboration.title}
              </h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {c.collaboration.desc}
              </p>
            </div>
            <div className="hidden sm:flex items-center">
              <Users size={17} className="text-muted-foreground" strokeWidth={1.6} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BentoCard({
  title,
  description,
  icon: Icon,
  delay,
  span,
}: {
  title: string;
  description: string;
  icon: typeof Shield;
  delay: number;
  span?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      className={span ?? "lg:col-span-2"}
    >
      <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300 p-6">
        <div className="mb-5 flex size-10 items-center justify-center rounded-[11px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
          <Icon size={17} className="text-muted-foreground" strokeWidth={1.6} />
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground mb-1.5">
          {title}
        </h3>
        <p className="text-[13px] text-muted-foreground leading-relaxed max-w-[34ch]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
