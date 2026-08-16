// ============================================================
// IMÁGENES — CONTENIDO DEMO
// Fotografía de stock (Unsplash) usada solo para esta demo,
// verificada visualmente para que cada imagen corresponda al
// plato o escena que representa.
// Sustituir por fotografía propia del restaurante antes de
// publicar la web definitiva.
// ============================================================

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const img = {
  // ---- Ambiente / interior / hero ----
  heroPasta: u("1533777857889-4be7c70b33f7", 1920),
  interiorDark: u("1517248135467-4c7edcad34c4", 1600),
  socialDining: u("1592861956120-e524fc739696", 1600),
  interiorLounge: u("1590846406792-0adc7f938f1d", 1600),
  tableSetting: u("1414235077428-338989a2e8c0", 1600),
  interiorIndustrial: u("1555396273-367ea4eb4db5", 1600),
  diningScene: u("1544148103-0773bf10d330", 1600),
  chefPrep: u("1551218808-94e220e084d2", 1600),

  // ---- Entradas ----
  panHummus: u("1476224203421-9ac39bcb3327"),
  tablaCompartir: u("1466978913421-dad2ebd01d17"),
  carpaccio: u("1504674900247-0877df9cc836"),
  panArtesanal: u("1509440159596-0249088772ff"),
  empanadillas: u("1601050690597-df0568f70950"),
  cremaVerde: u("1626200419199-391ae4be7a41"),
  tapasFlatlay: u("1548940740-204726a19be3"),

  // ---- Principales ----
  risottoBowl: u("1476124369491-e7addf5db371"),
  arrozMeloso: u("1517244683847-7456b63c5969"),
  bowlVegetariano: u("1546069901-ba9599a7e63c"),
  tacosAutor: u("1551504734-5ee1c4a1479b"),
  sandwichClub: u("1553909489-cd47e0907980"),
  bowlAguacate: u("1600335895229-6e75511892c8"),

  // ---- Carnes ----
  solomilloPlato: u("1608835291093-394b0c943a75"),
  entranaParrilla: u("1600891964092-4316c288032e"),
  costillasAhumadas: u("1544025162-d76694265947"),
  hamburguesaCasa: u("1550547660-d9450f859349"),

  // ---- Mariscos ----
  salmonPlancha: u("1467003909585-2f8a72700288"),
  cevicheCamaron: u("1543353071-873f17a7a088"),
  camaronesLimon: u("1559737558-2f5a35f4523b"),
  curryMarisco: u("1559847844-5315695dadae"),
  salmonCitricos: u("1580476262798-bddd9f4b7369"),

  // ---- Bebidas ----
  cocktailMargarita: u("1544145945-f90425340c7e"),
  cocktailWhiskey: u("1514362545857-3bc16c4c7d1b"),
  cocktailSpritz: u("1497534446932-c925b458314e"),
  mojitoFresco: u("1546171753-97d7676e4602"),
  cervezaArtesanal: u("1567696911980-2eed69a46042"),

  // ---- Postres ----
  tiramisu: u("1571877227200-a0d98ea607e9"),
  tartaFresas: u("1565958011703-44f9829ba187"),
  pannaCotta: u("1488477181946-6428a0291777"),
  cheesecakeArandanos: u("1533134242443-d4fd215305ad"),
  brownieHelado: u("1551024506-0bccd828d307"),

  // ---- Extra / galería / nosotros ----
  brunchBoard: u("1493770348161-369560ae357d", 1600),
  tostadaAguacate: u("1533089860892-a7c6f0a88666", 1600),
  ensaladaTernera: u("1607532941433-304659e8198a", 1600),
  curryStewBowls: u("1585937421612-70a008356fbe", 1600),
  noodleSoupShrimp: u("1607330289024-1535c6b4e1c1", 1600),
  ensaladaGriega: u("1625944230945-1b7dd3b949ab", 1600),
  crepesFresas: u("1587314168485-3236d6710814", 1600),
  cupcakeCasa: u("1576618148400-f54bed99fcfd", 1600),
};
