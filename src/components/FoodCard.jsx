import { motion } from "framer-motion";

export default function FoodCard({ item, className = "", index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden rounded-[1.25rem] bg-white/70 shadow-[0_1px_2px_rgba(36,26,20,0.06)] ring-1 ring-ink/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(36,26,20,0.25)] ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug text-ink">{item.name}</h3>
          <span className="whitespace-nowrap font-display text-lg text-terracotta">{item.price}</span>
        </div>
        <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
      </div>
    </motion.article>
  );
}
