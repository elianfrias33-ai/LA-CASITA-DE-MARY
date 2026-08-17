import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { site } from "../data/site";

// Versión compacta para Inicio: la información completa de ubicación,
// horario y contacto ya vive en la página Contacto — aquí solo
// invitamos a visitar y llevamos allá con un botón.
export default function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6 rounded-[1.75rem] bg-ink px-6 py-12 text-center text-cream sm:px-12 sm:py-14"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
          Visítanos
        </span>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">
          Visítanos en Bayahíbe.
        </h2>

        <div className="flex items-start gap-2.5 text-left">
          <PinIcon className="mt-1 h-5 w-5 shrink-0 text-terracotta" />
          <div>
            <p className="text-cream/85">{site.address.line1}</p>
            <p className="mt-0.5 text-sm text-cream/45">{site.address.line2}</p>
          </div>
        </div>

        <Link
          to="/contacto"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark"
        >
          Ver ubicación
        </Link>
      </motion.div>
    </section>
  );
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
