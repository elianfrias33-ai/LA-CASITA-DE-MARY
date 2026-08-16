import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FoodCard from "../components/FoodCard";
import Gallery from "../components/Gallery";
import LocationSection from "../components/LocationSection";
import CTA from "../components/CTA";
import { featuredItems, categories } from "../data/menu";
import { galleryImages } from "../data/gallery";
import { img } from "../data/images";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Platos destacados */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <SectionTitle
          eyebrow="Lo mejor de la casa"
          title="Platos destacados"
          subtitle="Una selección de nuestros favoritos, pensados para compartir y disfrutar sin prisa."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item, i) => (
            <FoodCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Historia breve */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 rounded-[1.75rem] bg-cream-soft p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 overflow-hidden rounded-[1.25rem] lg:order-1"
          >
            <img
              src={img.chefPrep}
              alt="Cocina de La Casita de Mary"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionTitle
              align="left"
              eyebrow="Nuestra esencia"
              title="Cocina de raíces, servida con cariño"
              subtitle="En La Casita de Mary creemos en la cocina honesta: recetas de siempre, ingredientes frescos de mercado y un ambiente donde cada visita se siente como volver a casa. (Texto de ejemplo — contenido definitivo pendiente del cliente)."
            />
            <Link
              to="/nosotros"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta"
            >
              Conócenos
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Menú destacado */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <SectionTitle
          eyebrow="Nuestra carta"
          title="Un menú pensado para cada momento"
          subtitle="Desde entradas para compartir hasta el postre perfecto para cerrar la comida."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/menu"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img
                  src={cat.items[0].img}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-display text-lg leading-tight text-cream">{cat.name}</p>
                  <p className="text-xs text-cream/60">{cat.items.length} platos</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-[15px] font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            Explorar menú completo
            <ArrowRight light />
          </Link>
        </div>
      </section>

      {/* Galería / experiencia */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <SectionTitle
          eyebrow="La experiencia"
          title="Un ambiente para disfrutar cada visita"
          subtitle="Fotografías de nuestros platos y de la calidez que encontrarás en cada rincón."
        />
        <div className="mt-12">
          <Gallery images={galleryImages} />
        </div>
      </section>

      <LocationSection />
      <CTA />
    </>
  );
}

function ArrowRight({ light = false }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke={light ? "#fbf5ec" : "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
