// ============================================================
// LOGO — placeholder tipográfico ("M") mientras se recibe el
// archivo oficial de La Casita de Mary.
//
// Cuando el logo oficial esté disponible:
// 1. Colócalo en `public/logo.svg` (o `public/logo.png`) — idealmente
//    cuadrado o circular, con fondo transparente.
// 2. Reemplaza el <span> de abajo por:
//      <img src="/logo.svg" alt="La Casita de Mary" className={`${className} object-contain`} />
//    Mantén `object-contain` (nunca lo deformes) y conserva el mismo
//    `className` de tamaño que ya usan Header y Footer — el círculo
//    no debe quedar demasiado pequeño.
// ============================================================

export default function Logo({ variant = "dark", className = "h-10 w-10", textSize = "text-lg" }) {
  const colors = variant === "dark" ? "bg-ink text-cream" : "bg-cream text-ink";
  return (
    <span
      className={`flex ${className} shrink-0 items-center justify-center rounded-full ${colors} font-display ${textSize} italic`}
    >
      M
    </span>
  );
}
