import { useEffect, useRef, useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import MenuCarousel from "../components/MenuCarousel";
import { categories } from "../data/menu";
import { img } from "../data/images";

export default function Menu() {
  const [active, setActive] = useState(categories[0].id);
  const sectionRefs = useRef({});
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Nuestra carta"
        title="Nuestro Menú"
        subtitle="Ingredientes de mercado, recetas de siempre y platos pensados para compartir."
        image={img.carpaccio}
      />

      <div
        ref={navRef}
        className="sticky top-[73px] z-30 border-b border-ink/8 bg-cream/95 backdrop-blur-md"
      >
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-8 lg:px-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === cat.id
                  ? "bg-terracotta text-cream shadow-sm"
                  : "bg-ink/[0.04] text-ink-muted hover:bg-ink/[0.08]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
        {categories.map((cat, idx) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => (sectionRefs.current[cat.id] = el)}
            className={`scroll-mt-40 py-12 sm:py-16 ${idx !== 0 ? "border-t border-ink/8" : ""}`}
          >
            <SectionTitle align="left" eyebrow={`Categoría`} title={cat.name} subtitle={cat.description} />
            <div className="mt-10">
              <MenuCarousel items={cat.items} />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
