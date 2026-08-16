# La Casita de Mary — Web del restaurante (DEMO)

Demo comercial de la web de un restaurante. React + Vite + Tailwind CSS v4 + React Router + Framer Motion.

## Comandos

```bash
npm install
npm run dev      # entorno de desarrollo
npm run build    # build de producción (carpeta dist/)
npm run lint     # oxlint
```

## Estructura

- `src/data/` — contenido editable: `site.js` (datos de contacto/horario), `menu.js` (carta), `images.js` (fotografía), `gallery.js` (galería).
- `src/components/` — piezas reutilizables (Header, Footer, Hero, FoodCard, MenuCarousel, Gallery, CTA, LocationSection...).
- `src/pages/` — Inicio, Menu, About (Nosotros), Contact.

## Contenido DEMO pendiente de reemplazar

Todo el texto, precios, dirección, teléfono, WhatsApp, horario e imágenes son de ejemplo.
Antes de publicar, actualiza `src/data/site.js`, `src/data/menu.js` e `src/data/images.js` con la
información real y fotografía propia del restaurante.
