import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Compass, LineChart, Users, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../i18n/translations";
import { getProjectTranslation, getKeyFeatures } from "../i18n/portfolio-translations";
import type { data } from "../data/ellen";

type Project = (typeof data.portfolio)[number];

const ICONS = [Compass, LineChart, Users, Building2];

interface FeaturedTimelineProps {
  projects: Project[];
}

export function FeaturedTimeline({ projects }: FeaturedTimelineProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      setActiveIndex(prev => (prev !== bestIndex ? bestIndex : prev));
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="space-y-14 md:space-y-20">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;
        const Icon = ICONS[index % ICONS.length];
        const title = getProjectTranslation(project.slug, 'title', language, project.title);
        const summary = getProjectTranslation(project.slug, 'summary', language, project.summary);
        const translatedFeatures = getKeyFeatures(project.slug, language);
        const features = translatedFeatures.length ? translatedFeatures : (project.keyFeatures ?? []);
        const subtitle = project.tags.slice(0, 2).join(' • ');

        return (
          <div key={project.slug} className="relative flex flex-col gap-4 md:flex-row md:gap-14">
            <div className="top-24 flex h-min w-56 shrink-0 items-start gap-3 md:sticky">
              <div className={`p-2 rounded-lg border transition-colors duration-300 ${
                isActive ? "bg-accent/10 border-accent/30 text-accent" : "bg-white/[0.02] border-white/10 text-muted-foreground"
              }`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-foreground leading-snug">
                  {title}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {subtitle}
                </span>
              </div>
            </div>

            <div
              ref={(el) => setSentinelRef(el, index)}
              aria-hidden
              className="absolute -top-24 left-0 h-12 w-12 opacity-0"
            />

            <article
              className={`flex-1 min-w-0 flex flex-col rounded-2xl border p-4 transition-all duration-300 ${
                isActive
                  ? "border-white/15 bg-white/[0.04]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {project.thumb && (
                <div className="mb-4 rounded-xl overflow-hidden aspect-video bg-neutral-900">
                  <ImageWithFallback
                    src={project.thumb}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div className="space-y-3">
                <p
                  className={`text-sm leading-relaxed transition-all duration-300 ${
                    isActive
                      ? "text-muted-foreground line-clamp-none"
                      : "text-muted-foreground/80 line-clamp-2"
                  }`}
                >
                  {summary}
                </p>

                <div
                  aria-hidden={!isActive}
                  className={`grid transition-all duration-500 ease-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-4 pt-1">
                      {features.length > 0 && (
                        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
                          <ul className="space-y-2">
                            {features.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="flex justify-end">
                        <Button variant="default" size="sm" className="group font-normal" asChild>
                          <a href={`/projeto/${project.slug}`}>
                            {t.portfolio.readCase}
                            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}
