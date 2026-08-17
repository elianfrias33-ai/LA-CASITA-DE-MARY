import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { site, telLink, whatsappLink } from "../data/site";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reservaLink = whatsappLink("Hola, me gustaría consultar disponibilidad para una reservación.");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(36,26,20,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-2.5">
          <Logo
            variant="dark"
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-display text-xl leading-tight text-ink">
            La Casita <span className="italic text-terracotta">de Mary</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative py-1 text-[15px] font-medium tracking-wide transition-colors ${
                  isActive ? "text-terracotta" : "text-ink-soft hover:text-terracotta"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-terracotta"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          {reservaLink ? (
            <a
              href={reservaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-2.5 text-[15px] font-semibold text-cream shadow-sm transition-all duration-300 hover:bg-terracotta-dark hover:shadow-md"
            >
              Reservar mesa
            </a>
          ) : (
            <button
              disabled
              title="WhatsApp pendiente de confirmación"
              className="inline-flex items-center justify-center rounded-full bg-terracotta/50 px-6 py-2.5 text-[15px] font-semibold text-cream/50 shadow-sm cursor-not-allowed"
            >
              Reservar mesa
            </button>
          )}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
                open ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[2px] w-6 rounded-full bg-ink transition-all duration-300 ${
                open ? "top-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-cream md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-3.5 font-display text-2xl ${
                        isActive ? "text-terracotta" : "text-ink"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              {reservaLink ? (
                <a
                  href={reservaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3.5 text-[15px] font-semibold text-cream"
                >
                  Reservar mesa
                </a>
              ) : (
                <button
                  disabled
                  title="WhatsApp pendiente de confirmación"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-terracotta/50 px-6 py-3.5 text-[15px] font-semibold text-cream/50 cursor-not-allowed w-full"
                >
                  Reservar mesa
                </button>
              )}
              {telLink() ? (
                <a href={telLink()} className="mt-2 text-center text-sm text-ink-muted">
                  {site.phoneDisplay}
                </a>
              ) : (
                <span className="mt-2 text-center text-sm text-ink-muted/50">
                  Teléfono pendiente de confirmación
                </span>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
