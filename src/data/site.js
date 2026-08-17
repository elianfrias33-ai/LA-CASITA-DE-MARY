// ============================================================
// DATOS DEL RESTAURANTE
// Teléfono/WhatsApp e Instagram son datos públicos reales
// encontrados del restaurante. La dirección y el horario están
// marcados como PENDIENTES DE CONFIRMACIÓN DEL CLIENTE antes de
// producción (ver notas en cada campo) — no son inventados, pero
// tienen una discrepancia/fuente no oficial que debe validarse.
//
// whatsappLink() / telLink() / mailLink() devuelven `null` cuando
// el dato correspondiente no existe, y los componentes que los usan
// (WhatsAppButton, Footer, Header, Contact, LocationSection) ya
// muestran un estado "pendiente de confirmación" en ese caso.
// ============================================================

export const site = {
  name: "La Casita de Mary",
  legalName: "La Casita de Mary Restaurante",
  shortName: "La Casita",
  tagline: "Cocina casera con alma",
  description:
    "Cocina venezolana y caribeña en Bayahíbe, República Dominicana. (Texto demo — pendiente de contenido definitivo del cliente).",

  // Dato público — usado para llamadas y WhatsApp (mismo número para ambos).
  phone: "+1 829 348 4802",
  phoneDisplay: "+1 (829) 348-4802",
  whatsapp: "18293484802",
  whatsappDisplay: "+1 (829) 348-4802",
  email: null,

  // PENDIENTE DE CONFIRMACIÓN DEL CLIENTE ANTES DE PRODUCCIÓN:
  // dirección pública encontrada, pero con una discrepancia reportada
  // entre fuentes. Se muestra como referencia (única disponible) con
  // su propia nota de "pendiente de confirmación" — no se inventa una
  // dirección alternativa.
  address: {
    line1: "Calle Tomasa, Cedeño, Bayahíbe, República Dominicana",
    line2: "Pendiente de confirmación",
    // El pin del mapa usa el área general de Bayahíbe (no la calle
    // exacta) mientras la dirección no esté confirmada.
    mapsQuery: "Bayahíbe, La Altagracia, República Dominicana",
  },

  // Agrupado (usado en el resumen compacto de Inicio).
  hours: [
    { days: "Martes a Domingo", time: "7:30 am – 10:00 pm" },
    { days: "Lunes", time: "Cerrado" },
  ],

  // PENDIENTE DE CONFIRMACIÓN DEL CLIENTE ANTES DE PRODUCCIÓN:
  // horario público encontrado, desglosado día por día para el
  // bloque "Horario de Atención" de Contacto (diseño ya aprobado,
  // no agrupar los días).
  weeklyHours: [
    { day: "Lunes", time: "Cerrado" },
    { day: "Martes", time: "7:30 am – 10:00 pm" },
    { day: "Miércoles", time: "7:30 am – 10:00 pm" },
    { day: "Jueves", time: "7:30 am – 10:00 pm" },
    { day: "Viernes", time: "7:30 am – 10:00 pm" },
    { day: "Sábado", time: "7:30 am – 10:00 pm" },
    { day: "Domingo", time: "7:30 am – 10:00 pm" },
  ],

  // Instagram es dato público real. Facebook no confirmado — se deja
  // en null (no inventar).
  social: {
    instagram: "https://instagram.com/lacasitademaryv",
    instagramHandle: "@lacasitademaryv",
    facebook: null,
  },
};

export const whatsappLink = (message) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`
    : null;

export const telLink = () => (site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : null);

export const mailLink = () => (site.email ? `mailto:${site.email}` : null);

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery
)}&output=embed`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.mapsQuery
)}`;
