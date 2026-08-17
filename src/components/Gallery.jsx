import { motion } from "framer-motion";

// Mosaico tipo masonry con CSS `columns` en vez de CSS Grid con
// row-span/col-span. El grid con spans irregulares (usado antes) podía
// dejar una fila final "a medio llenar" cuando el número de fotos no
// encajaba exactamente en el número de columnas — técnicamente sin
// "huecos" para el motor de grid, pero visualmente una franja grande
// de fondo crema vacío. Con `columns`, cada imagen simplemente se apila
// en la columna más corta: es estructuralmente imposible que quede un
// hueco rectangular, sin importar cuántas fotos haya.
const sizeClasses = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/5]",
  square: "aspect-square",
};

export default function Gallery({ images }) {
  return (
    <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
      {images.map((image, i) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative mb-3 break-inside-avoid overflow-hidden rounded-2xl sm:mb-4 ${
            sizeClasses[image.size] || "aspect-[4/5]"
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {image.alt}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
