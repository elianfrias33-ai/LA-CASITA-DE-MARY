// ============================================================
// DATOS DEL RESTAURANTE — CONTENIDO DEMO
// Reemplaza estos valores por la información real del cliente.
// Todo lo demás en la web lee de aquí, así que un solo cambio
// se refleja en Inicio, Nosotros, Contacto y Footer.
// ============================================================

export const site = {
  name: "La Casita de Mary",
  shortName: "La Casita",
  tagline: "Cocina casera con alma",
  description:
    "Recetas de siempre, ingredientes de mercado y un lugar que se siente como en casa. (Texto demo — pendiente de contenido definitivo del cliente).",

  phone: "+34 910 00 00 00",
  phoneDisplay: "910 00 00 00",
  whatsapp: "34600001122",
  whatsappDisplay: "+34 600 00 11 22",
  email: "hola@lacasitademary.com",

  address: {
    line1: "Calle de la Alegría, 24",
    line2: "28012 Madrid, España",
    mapsQuery: "Calle de la Alegría 24, Madrid",
  },

  hours: [
    { days: "Martes a Viernes", time: "13:00 – 16:30 · 20:00 – 23:30" },
    { days: "Sábado y Domingo", time: "13:00 – 17:00 · 20:00 – 00:00" },
    { days: "Lunes", time: "Cerrado" },
  ],

  social: {
    instagram: "https://instagram.com/lacasitademary",
    instagramHandle: "@lacasitademary",
    facebook: "https://facebook.com/lacasitademary",
  },
};

export const whatsappLink = (message) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery
)}&output=embed`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.mapsQuery
)}`;
