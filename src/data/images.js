// ============================================================
// IMÁGENES — CONTENIDO DEMO
// Fotografía de stock (Unsplash) usada solo para esta demo,
// verificada visualmente para que cada imagen corresponda al
// plato o escena que representa. Selección neutral, sin platos
// ni ambientación claramente europeos.
// Sustituir por fotografía propia del restaurante antes de
// publicar la web definitiva.
// ============================================================

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

// ============================================================
// HERO — SLIDESHOW (contenido DEMO)
// 4-5 fotografías de stock temporales para el carrusel del Hero.
// NO son fotografías reales de La Casita de Mary.
//
// Para reemplazarlas por las fotografías oficiales del restaurante:
// edita únicamente este array (agrega/quita/reordena objetos con
// `src` y `alt`) — Hero.jsx lee de aquí y no necesita ningún cambio,
// la animación sigue funcionando igual sin importar cuántas imágenes
// haya.
// ============================================================
export const heroImages = [
  {
    src: u("1559339352-11d035aa65de", 1920),
    alt: "Terraza junto al mar al atardecer",
  },
  {
    src: u("1587574293340-e0011c4e8ecf", 1920),
    alt: "Restaurante al aire libre con luces cálidas",
  },
  {
    src: u("1537047902294-62a40c20a6ae", 1920),
    alt: "Interior cálido con plantas tropicales",
  },
  {
    src: u("1552566626-52f8b828add9", 1920),
    alt: "Ambiente acogedor del comedor",
  },
  {
    src: u("1528605248644-14dd04022da1", 1920),
    alt: "Amigos disfrutando una comida",
  },
];

export const img = {
  // ---- Ambiente / interior ----
  interiorDark: u("1517248135467-4c7edcad34c4", 1600),
  socialDining: u("1592861956120-e524fc739696", 1600),
  interiorLounge: u("1590846406792-0adc7f938f1d", 1600),
  tableSetting: u("1414235077428-338989a2e8c0", 1600),
  interiorIndustrial: u("1555396273-367ea4eb4db5", 1600),
  diningScene: u("1544148103-0773bf10d330", 1600),
  chefPrep: u("1551218808-94e220e084d2", 1600),

  // ---- Menú (entradas / principales / mariscos / bebidas / postres) ----
  panHummus: u("1476224203421-9ac39bcb3327"),
  empanadillas: u("1601050690597-df0568f70950"),
  risottoBowl: u("1476124369491-e7addf5db371"),
  arrozMeloso: u("1517244683847-7456b63c5969"),
  bowlAguacate: u("1600335895229-6e75511892c8"),
  costillasAhumadas: u("1544025162-d76694265947"),
  salmonPlancha: u("1467003909585-2f8a72700288"),
  camaronesLimon: u("1559737558-2f5a35f4523b"),
  paellaLangosta: u("1512058564366-18510be2db19"),
  cocktailSpritz: u("1497534446932-c925b458314e"),
  cervezaArtesanal: u("1567696911980-2eed69a46042"),
  brownieHelado: u("1551024506-0bccd828d307"),
  tartaFresas: u("1565958011703-44f9829ba187"),

  // ---- Extra / galería / nosotros ----
  brunchBoard: u("1493770348161-369560ae357d", 1600),
  tostadaAguacate: u("1533089860892-a7c6f0a88666", 1600),
  ensaladaTernera: u("1607532941433-304659e8198a", 1600),
  ensaladaGriega: u("1625944230945-1b7dd3b949ab", 1600),
  cupcakeCasa: u("1576618148400-f54bed99fcfd", 1600),
};
