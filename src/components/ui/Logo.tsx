import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const MARK_WIDTH = 3403;
const MARK_HEIGHT = 665;

export function Logo({ className = "h-8 w-auto", variant = "dark" }: LogoProps) {
  const src =
    variant === "light" ? "/brand/werkskante-mark-white.png" : "/brand/werkskante-mark.png";

  return (
    <Image
      src={src}
      alt="Werkskante"
      width={MARK_WIDTH}
      height={MARK_HEIGHT}
      className={className}
      priority
    />
  );
}
