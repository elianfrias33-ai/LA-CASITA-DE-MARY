import { motion } from "framer-motion";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-gold-light" : "text-terracotta"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-xl text-base leading-relaxed ${
            light ? "text-cream/70" : "text-ink-muted"
          } ${align === "left" ? "" : "mx-auto"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
