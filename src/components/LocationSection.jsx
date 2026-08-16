import { motion } from "framer-motion";
import { site, mapsEmbedSrc, mapsDirectionsLink } from "../data/site";
import SectionTitle from "./SectionTitle";

export default function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <SectionTitle
        align="left"
        eyebrow="Visítanos"
        title="Encuéntranos en el corazón de la ciudad"
        subtitle="Reserva tu mesa o pásate a conocernos, te esperamos con los brazos abiertos."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between gap-8 rounded-[1.5rem] bg-ink p-8 text-cream sm:p-10 lg:col-span-2"
        >
          <div className="space-y-7">
            <InfoRow label="Dirección">
              <p>{site.address.line1}</p>
              <p className="text-cream/60">{site.address.line2}</p>
            </InfoRow>
            <InfoRow label="Horario">
              {site.hours.map((h) => (
                <p key={h.days} className="flex justify-between gap-4 text-sm">
                  <span className="text-cream/60">{h.days}</span>
                  <span>{h.time}</span>
                </p>
              ))}
            </InfoRow>
            <InfoRow label="Teléfono">
              <a className="hover:text-gold-light transition-colors" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phoneDisplay}
              </a>
            </InfoRow>
          </div>

          <a
            href={mapsDirectionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-center text-[15px] font-semibold text-cream transition-all duration-300 hover:bg-terracotta-dark"
          >
            Cómo llegar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-[1.5rem] ring-1 ring-ink/10 lg:col-span-3"
        >
          <iframe
            title="Ubicación de La Casita de Mary"
            src={mapsEmbedSrc}
            loading="lazy"
            className="h-[360px] w-full grayscale-[15%] sm:h-full"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function InfoRow({ label, children }) {
  return (
    <div className="space-y-1.5 border-b border-cream/10 pb-6 last:border-0 last:pb-0">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{label}</span>
      <div className="text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}
