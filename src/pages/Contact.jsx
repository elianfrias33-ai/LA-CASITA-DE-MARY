import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import { site, whatsappLink, mapsEmbedSrc, mapsDirectionsLink } from "../data/site";
import { img } from "../data/images";

const contactCards = [
  {
    label: "Dirección",
    lines: (s) => [s.address.line1, s.address.line2],
    icon: PinIcon,
  },
  {
    label: "Teléfono",
    lines: (s) => [s.phoneDisplay],
    icon: PhoneIcon,
    href: (s) => `tel:${s.phone.replace(/\s/g, "")}`,
  },
  {
    label: "WhatsApp",
    lines: (s) => [s.whatsappDisplay],
    icon: WhatsAppIcon,
    href: () => whatsappLink("Hola, me gustaría hacer una reserva."),
  },
  {
    label: "Instagram",
    lines: (s) => [s.social.instagramHandle],
    icon: InstagramIcon,
    href: (s) => s.social.instagram,
  },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Visítanos"
        title="Contacto"
        subtitle="Estamos aquí para ayudarte a reservar tu mesa o resolver cualquier duda."
        image={img.tableSetting}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        {/* Quick action buttons — mobile first */}
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4">
          <a
            href={whatsappLink("Hola, me gustaría hacer una reserva.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[15px] font-semibold text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-soft"
          >
            <PinIcon className="h-5 w-5" />
            Cómo llegar
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="col-span-2 flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta sm:col-span-1"
          >
            <PhoneIcon className="h-5 w-5" />
            Llamar ahora
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {contactCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="rounded-2xl bg-cream-soft p-6"
              >
                <c.icon className="h-6 w-6 text-terracotta" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href(site)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-display text-lg text-ink transition-colors hover:text-terracotta"
                  >
                    {c.lines(site).map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </a>
                ) : (
                  <div className="mt-1 font-display text-lg text-ink">
                    {c.lines(site).map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            <div className="rounded-2xl bg-ink p-6 text-cream">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Horario</p>
              <div className="mt-3 space-y-2">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 text-sm">
                    <span className="text-cream/60">{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="overflow-hidden rounded-2xl ring-1 ring-ink/10 lg:col-span-3"
          >
            <iframe
              title="Mapa de ubicación"
              src={mapsEmbedSrc}
              loading="lazy"
              className="h-[320px] w-full sm:h-[420px] lg:h-full lg:min-h-[520px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
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
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2m0 1.8a8.1 8.1 0 0 1 5.75 2.38 8.07 8.07 0 0 1 2.38 5.73c0 4.48-3.65 8.12-8.14 8.12a8.13 8.13 0 0 1-4.14-1.13l-.3-.17-3.12.82.83-3.04-.19-.31a8.07 8.07 0 0 1-1.25-4.33c0-4.48 3.65-8.07 8.18-8.07M8.53 6.85c-.17 0-.44.06-.67.31s-.88.86-.88 2.09.9 2.42 1.03 2.59c.13.17 1.76 2.8 4.38 3.83 2.16.86 2.6.69 3.07.65.47-.04 1.5-.61 1.72-1.2s.22-1.09.15-1.2c-.06-.1-.24-.16-.5-.29s-1.5-.74-1.74-.82c-.23-.09-.4-.13-.58.13s-.67.82-.82 1c-.15.17-.3.19-.56.06-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.28-1.51-1.43-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.45-.81-1.98-.21-.51-.43-.44-.58-.45z"/>
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.33 3.9 3.85 2.34 7.1 2.2 8.36 2.17 8.74 2.16 12 2.16m0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.34-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.72 21.3.27 16.95.07 15.67.01 15.26 0 12 0m0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84m0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0"/>
    </svg>
  );
}
