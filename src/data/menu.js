// ============================================================
// MENÚ — CONTENIDO DEMO
// Selección reducida (12 productos / 5 categorías) pensada solo
// para DEMOSTRAR cómo se vería un menú digital de La Casita de
// Mary — no es la carta oficial del restaurante.
//
// Los precios están en `null` a propósito: todavía no tenemos
// los precios oficiales, y no queremos inventar cifras en RD$
// que alguien pueda confundir con datos reales. FoodCard.jsx
// muestra "Precio pendiente" mientras tanto.
//
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
        id: "pan-casa",
        name: "Pan de la Casa con Salsa Casera",
        description: "Pan recién horneado acompañado de una salsa casera, ideal para compartir mientras llega el resto de la mesa.",
        price: null,
        img: img.panHummus,
        featured: true,
      },
      {
        id: "empanaditas-casa",
        name: "Empanaditas Fritas de la Casa",
        description: "Empanaditas crujientes rellenas, fritas al momento y servidas bien calientes.",
        price: null,
        img: img.empanadillas,
      },
    ],
  },
  {
    id: "principales",
    name: "Platos Principales",
    description: "El corazón de nuestra cocina, listo para disfrutar.",
    items: [
      {
        id: "arroz-cremoso",
        name: "Arroz Cremoso de la Casa",
        description: "Arroz cremoso de cocción lenta con ingredientes frescos de temporada.",
        price: null,
        img: img.risottoBowl,
        featured: true,
      },
      {
        id: "guisado-casa",
        name: "Guisado de la Casa",
        description: "Guiso preparado a fuego lento con el sabor de nuestra receta tradicional.",
        price: null,
        img: img.arrozMeloso,
      },
      {
        id: "bowl-tropical",
        name: "Bowl Tropical de Vegetales",
        description: "Aguacate fresco, granos y vegetales de temporada en un bowl ligero y colorido.",
        price: null,
        img: img.bowlAguacate,
      },
      {
        id: "costillas-casa",
        name: "Costillas de la Casa",
        description: "Costillas de cocción lenta con el toque especial de nuestra receta.",
        price: null,
        img: img.costillasAhumadas,
        featured: true,
      },
    ],
  },
  {
    id: "mariscos",
    name: "Mariscos",
    description: "Sabor a mar, fresco y cocinado con mimo.",
    items: [
      {
        id: "pescado-dia",
        name: "Pescado del Día a la Plancha",
        description: "Pescado fresco a la plancha con guarnición de temporada.",
        price: null,
        img: img.salmonPlancha,
        featured: true,
      },
      {
        id: "paella-langosta",
        name: "Paella con Langosta",
        description: "Paella cremosa con langosta fresca, azafrán y ingredientes del mar.",
        price: null,
        img: img.paellaLangosta,
        featured: true,
      },
      {
        id: "camarones-casa",
        name: "Camarones de la Casa",
        description: "Camarones frescos preparados con un toque cítrico de la casa.",
        price: null,
        img: img.camaronesLimon,
      },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    description: "Para acompañar cada momento de la comida.",
    items: [
      {
        id: "bebida-refrescante",
        name: "Bebida Refrescante de la Casa",
        description: "Preparada con fruta fresca de temporada, ideal para acompañar la comida.",
        price: null,
        img: img.cocktailSpritz,
      },
      {
        id: "cerveza-fria",
        name: "Cerveza Bien Fría de la Casa",
        description: "Selección de cervezas locales, servidas bien frías.",
        price: null,
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
        id: "postre-chocolate",
        name: "Postre de Chocolate de la Casa",
        description: "Postre de chocolate intenso con una bola de helado.",
        price: null,
        img: img.brownieHelado,
        featured: true,
      },
      {
        id: "postre-frutas",
        name: "Postre de Frutas de la Casa",
        description: "Postre ligero con capas de fruta fresca de temporada.",
        price: null,
        img: img.tartaFresas,
      },
    ],
  },
];

export const allItems = categories.flatMap((c) =>
  c.items.map((item) => ({ ...item, categoryId: c.id, categoryName: c.name }))
);

export const featuredItems = allItems.filter((item) => item.featured);
