import { motion } from "motion/react";
import type { CSSProperties } from "react";

interface BlurTextProps {
  text: string;
  animateBy?: "words" | "letters";
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function BlurText({ text, animateBy = "words", delay = 0.05, className = "", style }: BlurTextProps) {
  const segments = animateBy === "words" ? text.split(" ") : text.split("");

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: -20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * delay, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}
