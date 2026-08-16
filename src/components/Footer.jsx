import { Link } from "react-router-dom";
import { site, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-ink font-display text-lg italic">
                M
              </span>
              <span className="font-display text-xl">
                La Casita <span className="italic text-gold-light">de Mary</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              {site.tagline}. Un rincón cálido para disfrutar de la buena mesa.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold-light">Navegación</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li><Link className="hover:text-cream transition-colors" to="/">Inicio</Link></li>
              <li><Link className="hover:text-cream transition-colors" to="/menu">Menú</Link></li>
              <li><Link className="hover:text-cream transition-colors" to="/nosotros">Nosotros</Link></li>
              <li><Link className="hover:text-cream transition-colors" to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold-light">Visítanos</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/70">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li className="pt-1">
                <a className="hover:text-cream transition-colors" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a className="hover:text-cream transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold-light">Horario</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/70">
              {site.hours.map((h) => (
                <li key={h.days} className="flex flex-col">
                  <span className="text-cream/90">{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={whatsappLink("Hola, me gustaría hacer una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-light hover:text-gold-light"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-colors hover:border-gold-light hover:text-gold-light"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>Demo comercial · Diseño y desarrollo por NOVIX</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.07 8.07 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.12.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.25-4.33c0-4.48 3.65-8.07 8.18-8.07M8.53 6.85c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.03 2.59c.13.17 1.76 2.8 4.38 3.83 2.16.86 2.6.69 3.07.65.47-.04 1.5-.61 1.72-1.2s.22-1.09.15-1.2c-.06-.1-.24-.16-.5-.29s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.58.13s-.67.82-.82 1c-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.45-.81-1.98-.21-.51-.43-.44-.58-.45z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.33 3.9 3.85 2.34 7.1 2.2 8.36 2.17 8.74 2.16 12 2.16m0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.34-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.72 21.3.27 16.95.07 15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0"/>
    </svg>
  );
}
