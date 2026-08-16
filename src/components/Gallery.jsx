import { motion } from "framer-motion";

const sizeClasses = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "col-span-2 aspect-[16/10]",
  small: "aspect-[4/5]",
};

export default function Gallery({ images }) {
  return (
    <div className="grid auto-rows-[minmax(140px,auto)] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
      {images.map((image, i) => (
        <motion.div
          key={image.src}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
          className={`group relative overflow-hidden rounded-2xl ${sizeClasses[image.size] || "aspect-square"}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
