import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "../data/images";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden sm:min-h-screen">
      <img
        src={img.heroPasta}
        alt="Ambiente de La Casita de Mary"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold-light"
        >
          Bienvenidos a
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-cream sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          La Casita <span className="italic text-gold-light">de Mary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md text-lg leading-relaxed text-cream/80 sm:text-xl"
        >
          {site.tagline}, servida con cariño en cada plato.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-[15px] font-semibold text-cream shadow-lg shadow-terracotta/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark"
          >
            Ver menú
          </Link>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-[15px] font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cream hover:bg-cream/10"
          >
            Contactar
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.25em]">Descubre más</span>
        <span className="h-9 w-[1.5px] animate-pulse bg-cream/50" />
      </motion.div>
    </section>
  );
}
