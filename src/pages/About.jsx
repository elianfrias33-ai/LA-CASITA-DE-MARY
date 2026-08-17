import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import { img } from "../data/images";
import { galleryImages } from "../data/gallery";

const values = [
  {
    title: "Ingredientes de mercado",
    text: "Trabajamos con producto fresco y de temporada, elegido cada semana.",
  },
  {
    title: "Recetas con historia",
    text: "Platos que nacen de recetas familiares, adaptadas con cariño y técnica.",
  },
  {
    title: "Ambiente cercano",
    text: "Un espacio pensado para sentirse como en casa, sin perder la elegancia.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Conoce La Casita de Mary"
        subtitle="Una cocina con raíces, pensada para compartir buenos momentos alrededor de la mesa."
        image={img.diningScene}
      />

      {/* Historia */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Nuestra historia"
              title="De la cocina de casa a la mesa de todos"
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-muted">
              <p>
                La Casita de Mary nace de un sueño sencillo: compartir la cocina de siempre, con
                el calor de Bayahíbe, con quien se sienta a nuestra mesa. Esta es una descripción
                de ejemplo — la historia definitiva del restaurante se incorporará cuando el
                cliente confirme los detalles.
              </p>
              <p>
                Cada plato que sale de nuestra cocina lleva el mismo cuidado que una comida
                familiar: ingredientes honestos, tiempo y buen hacer.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[1.5rem]"
          >
            <img
              src={img.tostadaAguacate}
              alt="Ingredientes frescos de mercado"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Concepto gastronómico */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 rounded-[1.75rem] bg-cream-soft p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[1.25rem]"
          >
            <img
              src={img.chefPrep}
              alt="Elaboración de platos en cocina"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Concepto gastronómico"
              title="Cocina honesta, sin artificios"
              subtitle="Nuestra propuesta se basa en tres pilares que guían cada decisión en la cocina y en la sala."
            />
            <div className="mt-8 space-y-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 border-t border-ink/8 pt-5 first:border-0 first:pt-0"
                >
                  <span className="font-display text-xl italic text-terracotta/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiencia */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <SectionTitle
          eyebrow="La experiencia"
          title="Más que una comida, un momento"
          subtitle="Cuidamos cada detalle para que tu visita se sienta especial, desde el primer plato hasta el último café."
        />
        <div className="mt-12">
          <Gallery images={galleryImages} />
        </div>
      </section>

      <CTA />
    </>
  );
}
