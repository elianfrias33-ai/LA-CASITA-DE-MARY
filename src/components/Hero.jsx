import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { heroImages } from "../data/images";
import { site } from "../data/site";

const SLIDE_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    // Con "reduce motion" dejamos una sola fotografía fija, sin
    // avance automático ni zoom — nada se mueve en la pantalla.
    if (reduceMotion || heroImages.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const slide = heroImages[reduceMotion ? 0 : index];

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden sm:min-h-screen sm:items-center">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={reduceMotion ? "static" : index}
            src={slide.src}
            alt={slide.alt}
            fetchPriority={index === 0 ? "high" : undefined}
            initial={reduceMotion ? false : { opacity: 0, scale: 1 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1.08 }
            }
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    opacity: { duration: 1.4, ease: "easeInOut" },
                    scale: { duration: SLIDE_MS / 1000 + 1.4, ease: "linear" },
                  }
            }
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay más fuerte abajo en móvil (texto anclado al fondo); en desktop se reparte también hacia la izquierda, donde vive el texto centrado verticalmente. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/5 sm:from-ink sm:via-ink/50 sm:to-ink/30" />
      <div className="absolute inset-0 hidden sm:block sm:bg-gradient-to-r sm:from-ink/60 sm:via-ink/10 sm:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 pt-10 sm:px-8 sm:pb-0 sm:pt-24 lg:px-10">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-md"
        >
          <p className="text-lg leading-relaxed text-cream/90 sm:text-xl">{site.tagline}.</p>
          <p className="mt-1.5 text-base leading-relaxed text-cream/70 sm:text-lg">
            Sabores de Venezuela y el Caribe en Bayahíbe.
          </p>
        </motion.div>

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
            Visítanos
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

      {/* Nota discreta: las fotografías del slideshow son DEMO, no del restaurante real. */}
      <p className="pointer-events-none absolute inset-x-0 bottom-2 px-5 text-center text-[10px] leading-snug tracking-wide text-cream/35 sm:inset-x-auto sm:bottom-4 sm:right-6 sm:max-w-[230px] sm:px-0 sm:text-right sm:text-[11px]">
        Imágenes demostrativas · Serán reemplazadas por fotografías oficiales del restaurante.
      </p>
    </section>
  );
}
