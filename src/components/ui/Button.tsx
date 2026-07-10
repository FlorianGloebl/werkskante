import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white hover:bg-ink hover:ring-2 hover:ring-accent focus-visible:outline-accent",
  secondary:
    "bg-white text-ink border border-ink/15 hover:border-ink/40 hover:ring-2 hover:ring-ink/30 focus-visible:outline-ink",
  ghost:
    "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:ring-2 hover:ring-white/60 focus-visible:outline-white",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-200 outline-offset-2 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
