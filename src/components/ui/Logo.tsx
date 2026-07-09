interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const primary = variant === "dark" ? "text-ink" : "text-white";
  const secondary = variant === "dark" ? "text-black" : "text-white/70";
  const line = variant === "dark" ? "bg-ink" : "bg-white";

  return (
    <span
      className={`inline-flex flex-col leading-none font-display font-bold tracking-tight ${className}`}
    >
      <span className="flex items-baseline gap-[0.08em] text-2xl sm:text-3xl">
        <span className={primary}>Werks</span>
        <span className={secondary}>kante</span>
      </span>
      <span className={`mt-1 h-[3px] w-full ${line}`} />
    </span>
  );
}
