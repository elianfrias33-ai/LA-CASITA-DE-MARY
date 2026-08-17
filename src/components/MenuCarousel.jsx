import { useRef, useState, useEffect, useCallback } from "react";
import FoodCard from "./FoodCard";

export default function MenuCarousel({ items }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows, items]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 320;
    el.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item, i) => (
          <div
            key={item.id}
            data-card
            className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%] xl:w-[27%]"
          >
            <FoodCard item={item} index={i} />
          </div>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => scrollByCards(-1)}
        disabled={!canLeft}
        className={`absolute left-0 top-[38%] hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg ring-1 ring-ink/10 transition-all duration-300 hover:bg-terracotta hover:text-cream lg:flex h-11 w-11 ${
          canLeft ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowIcon flip />
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => scrollByCards(1)}
        disabled={!canRight}
        className={`absolute right-0 top-[38%] hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink shadow-lg ring-1 ring-ink/10 transition-all duration-300 hover:bg-terracotta hover:text-cream lg:flex h-11 w-11 ${
          canRight ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowIcon />
      </button>
    </div>
  );
}

function ArrowIcon({ flip = false }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={flip ? "rotate-180" : ""}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
