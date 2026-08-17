import { motion } from "framer-motion";

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative isolate flex min-h-[46vh] items-end overflow-hidden sm:min-h-[52vh]">
      <img
        src={image}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
