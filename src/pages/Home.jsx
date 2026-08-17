import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import FoodCard from "../components/FoodCard";
import Gallery from "../components/Gallery";
import LocationSection from "../components/LocationSection";
import { featuredItems, categories } from "../data/menu";
import { galleryImages } from "../data/gallery";
import { img } from "../data/images";
import { whatsappLink } from "../data/site";

const experiences = [
  {
    title: "Karaoke & Música",
    copy: "Buena música y buena compañía para que la noche se alargue sin prisa.",
    image: img.interiorLounge,
    icon: MusicIcon,
  },
  {
    title: "Celebraciones",
    copy: "Cumpleaños y ocasiones especiales, celebrados con la calidez de siempre.",
    image: img.socialDining,
    icon: GiftIcon,
  },
  {
    title: "Ambiente Familiar",
    copy: "Un espacio pensado para compartir en familia, con la mesa como punto de encuentro.",
    image: img.diningScene,
    icon: HeartIcon,
  },
];

export default function Home() {
  const waLink = whatsappLink("Hola, me gustaría consultar disponibilidad para una reservación.");

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
              subtitle="En La Casita de Mary creemos en la cocina honesta: recetas de siempre, ingredientes frescos y un ambiente donde cada visita se siente como volver a casa."
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
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
        <p className="mx-auto mt-5 max-w-md text-center text-xs italic text-ink-muted/60">
          Contenido ilustrativo de demostración. El menú definitivo utilizará los platos y precios
          oficiales del restaurante.
        </p>
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

      {/* Más que sabores */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <SectionTitle
          eyebrow="Más que sabores"
          title="Momentos para compartir."
          subtitle="En La Casita de Mary la mesa es solo el comienzo: buena compañía, música y ocasiones para celebrar."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[1.25rem]"
            >
              <img
                src={e.image}
                alt={e.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/5" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <e.icon className="h-6 w-6 text-gold-light" />
                <h3 className="mt-3 font-display text-xl text-cream">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/75">{e.copy}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Acciones rápidas */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <SectionTitle eyebrow="Acciones rápidas" title="¿Qué deseas hacer?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link
            to="/menu"
            className="group rounded-2xl bg-cream-soft p-7 transition-colors duration-300 hover:bg-cream-deep/50"
          >
            <MenuActionIcon className="h-7 w-7 text-terracotta" />
            <h3 className="mt-4 font-display text-lg text-ink">Ver menú</h3>
            <p className="mt-1 text-sm text-ink-muted">Descubre nuestra propuesta gastronómica.</p>
          </Link>

          {waLink ? (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-cream-soft p-7 transition-colors duration-300 hover:bg-cream-deep/50"
            >
              <CalendarIcon className="h-7 w-7 text-terracotta" />
              <h3 className="mt-4 font-display text-lg text-ink">Reservar una mesa</h3>
              <p className="mt-1 text-sm text-ink-muted">Consulta disponibilidad por WhatsApp.</p>
            </a>
          ) : (
            <div className="rounded-2xl bg-cream-soft/60 p-7">
              <CalendarIcon className="h-7 w-7 text-ink-muted/50" />
              <h3 className="mt-4 font-display text-lg text-ink/50">Reservar una mesa</h3>
              <p className="mt-1 text-sm text-ink-muted/70">Pendiente de confirmación.</p>
            </div>
          )}

          <div
            title="Información por confirmar"
            className="cursor-not-allowed rounded-2xl bg-cream-soft/60 p-7"
          >
            <DeliveryIcon className="h-7 w-7 text-ink-muted/50" />
            <h3 className="mt-4 font-display text-lg text-ink/50">Pedir delivery</h3>
            <p className="mt-1 text-sm text-ink-muted/70">Información por confirmar.</p>
          </div>
        </div>
      </section>

      <LocationSection />
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

function MusicIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
function GiftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="8" width="18" height="13" rx="1.5" />
      <path d="M3 12h18M12 8v13M12 8c-1.5-3-6-4-6 0s4.5 0 6 0Zm0 0c1.5-3 6-4 6 0s-4.5 0-6 0Z" />
    </svg>
  );
}
function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 21s-7.5-4.6-10-9.3C0.3 8 2 4.5 5.5 4c2-.3 3.8.8 6.5 3.5C14.7 4.8 16.5 3.7 18.5 4c3.5.5 5.2 4 3.5 7.7C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}
function MenuActionIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}
function CalendarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function DeliveryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 8h11l4 4v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="7.5" cy="19.5" r="1.6" />
      <circle cx="16.5" cy="19.5" r="1.6" />
      <path d="M8 8V5a1 1 0 0 1 1-1h3" />
    </svg>
  );
}
