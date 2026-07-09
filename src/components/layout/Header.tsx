"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Ansatz", href: "#ansatz" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Werkskante-Check", href: "#check" },
  { label: "Team", href: "#team" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="#top" aria-label="Werkskante Startseite">
          <Logo variant="light" className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#kontakt" variant="primary">
            Kostenlosen Check anfragen
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-transform ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-[2px] w-6 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-6 bg-current transition-transform ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 pb-6 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-white/80"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4">
            <Button href="#kontakt" variant="primary" className="w-full">
              Kostenlosen Check anfragen
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
