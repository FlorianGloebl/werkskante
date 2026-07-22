interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  wide?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  wide = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex ${wide ? "max-w-none" : "max-w-2xl"} flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span
          className={`text-xs font-semibold tracking-[0.2em] uppercase ${
            light ? "text-steel" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display leading-tight font-bold tracking-tight ${
          wide ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
        } ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-white/70" : "text-ink/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
