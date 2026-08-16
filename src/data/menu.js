// ============================================================
// MENÚ — CONTENIDO DEMO
// Nombres, descripciones y precios son de ejemplo para mostrar
// el diseño. Sustituye por la carta real antes de publicar.
// Cada producto usa `img` desde src/data/images.js.
// ============================================================

import { img } from "./images";

export const categories = [
  {
    id: "entradas",
    name: "Entradas",
    description: "Para abrir el apetito y compartir en la mesa.",
    items: [
      {
        id: "pan-hummus",
        name: "Pan Plano con Hummus de la Casa",
        description: "Pan recién horneado con hummus cremoso, ensalada fresca y un toque de especias.",
        price: "8,50 €",
        img: img.panHummus,
        featured: true,
      },
      {
        id: "tabla-compartir",
        name: "Tabla de Patatas y Bocaditos para Compartir",
        description: "Selección de bocados crujientes, ideal para compartir en el centro de la mesa.",
        price: "11,00 €",
        img: img.tablaCompartir,
      },
      {
        id: "carpaccio-ternera",
        name: "Carpaccio de Ternera",
        description: "Finas láminas de ternera con aceite de oliva virgen, rúcula y virutas de queso.",
        price: "13,50 €",
        img: img.carpaccio,
      },
      {
        id: "pan-artesanal",
        name: "Pan Artesanal de la Casa",
        description: "Hogazas de fermentación lenta horneadas a diario, con mantequilla de la casa.",
        price: "5,50 €",
        img: img.panArtesanal,
      },
      {
        id: "empanadillas-casa",
        name: "Empanadillas Crujientes de la Casa",
        description: "Receta tradicional rellena, fritas al momento y servidas bien calientes.",
        price: "9,00 €",
        img: img.empanadillas,
      },
      {
        id: "crema-verde",
        name: "Crema Verde de Temporada",
        description: "Crema de vegetales de mercado con un hilo de aceite de oliva virgen extra.",
        price: "7,00 €",
        img: img.cremaVerde,
      },
      {
        id: "tapas-variadas",
        name: "Tabla de Tapas Variadas",
        description: "Pequeña selección de tapas de la casa, perfecta para picar entre varios.",
        price: "14,50 €",
        img: img.tapasFlatlay,
      },
    ],
  },
  {
    id: "principales",
    name: "Platos Principales",
    description: "El corazón de nuestra cocina, listo para disfrutar.",
    items: [
      {
        id: "risotto-cremoso",
        name: "Risotto Cremoso de Temporada",
        description: "Arroz cremoso de cocción lenta con ingredientes de mercado y parmesano curado.",
        price: "15,50 €",
        img: img.risottoBowl,
        featured: true,
      },
      {
        id: "arroz-meloso",
        name: "Arroz Meloso de la Casa",
        description: "Arroz meloso preparado a fuego lento con el sabor de nuestra receta tradicional.",
        price: "16,00 €",
        img: img.arrozMeloso,
      },
      {
        id: "bowl-vegetariano",
        name: "Bowl Vegetariano de Temporada",
        description: "Vegetales de mercado, legumbres y semillas con aderezo casero.",
        price: "12,50 €",
        img: img.bowlVegetariano,
      },
      {
        id: "tacos-autor",
        name: "Tacos de Autor",
        description: "Tres tacos con relleno de la casa, salsas frescas y un toque especiado.",
        price: "13,00 €",
        img: img.tacosAutor,
      },
      {
        id: "sandwich-club",
        name: "Sandwich Club de la Casa",
        description: "Pan artesanal, ingredientes frescos de mercado y guarnición del día.",
        price: "12,00 €",
        img: img.sandwichClub,
      },
      {
        id: "bowl-aguacate",
        name: "Bowl de Aguacate y Quinoa",
        description: "Aguacate fresco, quinoa y vegetales de temporada en un bowl ligero y nutritivo.",
        price: "13,50 €",
        img: img.bowlAguacate,
      },
    ],
  },
  {
    id: "carnes",
    name: "Carnes",
    description: "Cortes seleccionados, cocinados en su punto.",
    items: [
      {
        id: "solomillo-guarnicion",
        name: "Solomillo con Guarnición de la Casa",
        description: "Corte premium acompañado de gratinado y pan artesanal, cocinado en su punto.",
        price: "22,00 €",
        img: img.solomilloPlato,
        featured: true,
      },
      {
        id: "entrana-parrilla",
        name: "Entraña a la Parrilla con Patatas",
        description: "Corte jugoso a la parrilla, servido con patatas fritas artesanales.",
        price: "19,50 €",
        img: img.entranaParrilla,
      },
      {
        id: "costillas-ahumadas",
        name: "Costillas Ahumadas 12 Horas",
        description: "Cocción lenta con nuestro adobo especial de la casa, glaseadas al horno.",
        price: "20,00 €",
        img: img.costillasAhumadas,
      },
      {
        id: "hamburguesa-casa",
        name: "Hamburguesa Gourmet de la Casa",
        description: "Carne 100% de ternera, pan brioche y guarnición de la casa.",
        price: "14,50 €",
        img: img.hamburguesaCasa,
      },
    ],
  },
  {
    id: "mariscos",
    name: "Mariscos",
    description: "Sabor a mar, fresco y cocinado con mimo.",
    items: [
      {
        id: "salmon-plancha",
        name: "Salmón a la Plancha",
        description: "Salmón fresco a la plancha con vegetales salteados de temporada.",
        price: "18,00 €",
        img: img.salmonPlancha,
        featured: true,
      },
      {
        id: "ceviche-camaron",
        name: "Ceviche de Camarón",
        description: "Camarón fresco marinado en cítricos, con un toque picante de la casa.",
        price: "15,00 €",
        img: img.cevicheCamaron,
      },
      {
        id: "camarones-limon",
        name: "Camarones Frescos al Limón",
        description: "Camarones frescos con un toque cítrico, servidos con guarnición ligera.",
        price: "17,00 €",
        img: img.camaronesLimon,
      },
      {
        id: "curry-marisco",
        name: "Curry de Marisco con Arroz",
        description: "Guiso de marisco fresco en salsa especiada, servido con arroz blanco.",
        price: "19,50 €",
        img: img.curryMarisco,
      },
      {
        id: "salmon-citricos",
        name: "Salmón en Salsa de Cítricos",
        description: "Salmón fresco bañado en una delicada salsa de cítricos de temporada.",
        price: "18,50 €",
        img: img.salmonCitricos,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    description: "Para acompañar cada momento de la comida.",
    items: [
      {
        id: "coctel-margarita",
        name: "Cóctel Margarita de la Casa",
        description: "Nuestra versión del clásico, con un toque cítrico especial.",
        price: "8,00 €",
        img: img.cocktailMargarita,
      },
      {
        id: "coctel-whiskey",
        name: "Old Fashioned de la Casa",
        description: "Cóctel clásico con un toque de romero fresco.",
        price: "9,00 €",
        img: img.cocktailWhiskey,
      },
      {
        id: "sangria-artesanal",
        name: "Sangría Artesanal",
        description: "Receta tradicional con fruta fresca de temporada.",
        price: "7,00 €",
        img: img.cocktailSpritz,
      },
      {
        id: "mojito-fresco",
        name: "Mojito Fresco",
        description: "Menta fresca, lima y un toque burbujeante, perfecto para acompañar la comida.",
        price: "7,50 €",
        img: img.mojitoFresco,
      },
      {
        id: "cerveza-artesanal",
        name: "Cerveza Artesanal de Barril",
        description: "Selección de cervezas artesanales locales, servidas bien frías.",
        price: "5,00 €",
        img: img.cervezaArtesanal,
      },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    description: "El final dulce que toda buena comida merece.",
    items: [
      {
        id: "tiramisu-casero",
        name: "Tiramisú Casero",
        description: "Receta clásica italiana con café, mascarpone y cacao.",
        price: "6,50 €",
        img: img.tiramisu,
        featured: true,
      },
      {
        id: "tarta-fresas",
        name: "Tarta de Fresas y Nata",
        description: "Bizcocho ligero con capas de nata fresca y fresas de temporada.",
        price: "6,50 €",
        img: img.tartaFresas,
      },
      {
        id: "panna-cotta",
        name: "Panna Cotta de Frutos Rojos",
        description: "Postre cremoso italiano con coulis casero de frutos rojos.",
        price: "6,00 €",
        img: img.pannaCotta,
      },
      {
        id: "cheesecake-arandanos",
        name: "Cheesecake de Arándanos",
        description: "Base crujiente, relleno cremoso y cobertura de arándanos frescos.",
        price: "6,50 €",
        img: img.cheesecakeArandanos,
      },
      {
        id: "brownie-helado",
        name: "Brownie con Helado Artesanal",
        description: "Brownie templado de chocolate intenso con una bola de helado artesanal.",
        price: "7,00 €",
        img: img.brownieHelado,
      },
    ],
  },
];

export const allItems = categories.flatMap((c) =>
  c.items.map((item) => ({ ...item, categoryId: c.id, categoryName: c.name }))
);

export const featuredItems = allItems.filter((item) => item.featured);
