"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { businessUnits } from "@/content/services";

const competenceAreas = businessUnits
  .filter((unit) => unit.visible)
  .sort((a, b) => a.sortOrder - b.sortOrder);

const trailingNavItems = [
  { label: "Team", href: "#team" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Werkskante-Check", href: "#check" },
  { label: "Kontakt", href: "#kontakt" },
];

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="#top" aria-label="Werkskante Startseite">
          <Logo variant="light" className="h-6 w-auto sm:h-7" />
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          <a
            href="#ansatz"
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Ansatz
          </a>

          <div
            className="relative"
            onMouseEnter={() => setLeistungenOpen(true)}
            onMouseLeave={() => setLeistungenOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLeistungenOpen((v) => !v)}
              aria-expanded={leistungenOpen}
              className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Leistungen
              <ChevronIcon
                className={`h-3.5 w-3.5 transition-transform ${leistungenOpen ? "rotate-180" : ""}`}
              />
            </button>

            {leistungenOpen && (
              <div className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 shadow-2xl shadow-black/40">
                  {competenceAreas.map((unit) => (
                    <a
                      key={unit.id}
                      href={`#${unit.slug}`}
                      onClick={() => setLeistungenOpen(false)}
                      className="flex flex-col gap-3 bg-ink p-5 transition-colors hover:bg-accent/25"
                    >
                      <ServiceIcon name={unit.icon} className="h-6 w-6 text-steel" />
                      <span className="text-sm font-semibold text-white">{unit.navLabel}</span>
                      <span className="text-xs leading-relaxed text-white/55">{unit.claim}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {trailingNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden w-48 shrink-0 xl:block">
          <Button
            href="#kontakt"
            variant="primary"
            className="w-full px-3 py-2 text-center text-xs leading-snug"
          >
            Kostenloses Gespräch anfragen
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center text-white xl:hidden"
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
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-ink px-6 pb-6 xl:hidden">
          <a
            href="#ansatz"
            onClick={() => setOpen(false)}
            className="border-b border-white/5 py-3 text-white/80"
          >
            Ansatz
          </a>

          <div className="border-b border-white/5 py-1">
            <button
              type="button"
              onClick={() => setMobileLeistungenOpen((v) => !v)}
              aria-expanded={mobileLeistungenOpen}
              className="flex w-full items-center justify-between py-2 text-white/80"
            >
              Leistungen
              <ChevronIcon
                className={`h-4 w-4 transition-transform ${mobileLeistungenOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileLeistungenOpen && (
              <div className="flex flex-col gap-1 pb-2 pl-3">
                {competenceAreas.map((unit) => (
                  <a
                    key={unit.id}
                    href={`#${unit.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setMobileLeistungenOpen(false);
                    }}
                    className="py-2 text-sm text-white/70"
                  >
                    {unit.navLabel}
                  </a>
                ))}
              </div>
            )}
          </div>

          {trailingNavItems.map((item) => (
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
              Kostenloses Gespräch anfragen
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
