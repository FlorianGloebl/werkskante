interface EdgeProps {
  className?: string;
  flipped?: boolean;
}

/**
 * Das wiederkehrende Werkskante-Motiv: eine Kante/Linie, die zwei Zustände
 * trennt und verbindet (Vorschrift <-> Arbeitsrealität). Wird als
 * Section-Trenner und dekoratives Element eingesetzt.
 */
export function Edge({ className = "", flipped = false }: EdgeProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`h-auto w-full ${flipped ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path d="M0 80 L0 40 L720 40 L760 0 L1440 0 L1440 80 Z" fill="currentColor" />
    </svg>
  );
}
