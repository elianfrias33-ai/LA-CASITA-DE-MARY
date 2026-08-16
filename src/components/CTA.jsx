import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "../data/images";

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={img.interiorDark}
        alt="Interior de La Casita de Mary"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 px-6 py-24 text-center sm:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl text-balance"
        >
          Ven y descubre <span className="italic text-gold-light">La Casita de Mary</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg text-base text-cream/75 sm:text-lg"
        >
          Sabores caseros, un ambiente cálido y el cuidado de siempre. Te esperamos en la mesa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-[15px] font-semibold text-cream shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark"
          >
            Ver el menú
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-cream/40 px-8 py-3.5 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"
          >
            Cómo llegar
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
