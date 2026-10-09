"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { siteSettings } from "@/content/site";
import { businessUnits } from "@/content/services";
import { platformUnits } from "@/content/platform";

const visibleUnits = platformUnits
  .filter((unit) => unit.visible)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export function Footer() {
  const pathname = usePathname();
  const activeUnitId = visibleUnits.find((unit) => pathname === unit.href)?.id;
  const year = new Date().getFullYear();
  const competenceLinks = businessUnits
    .filter((unit) => unit.visible)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <Logo variant="light" className="h-7 w-auto" />
            <p className="mt-4 text-sm leading-relaxed">
              {siteSettings.brandName} · {siteSettings.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Navigation</span>
              {activeUnitId === "start" ? (
                <>
                  <a href="#angebot" className="hover:text-white">Angebot</a>
                  <a href="#ablauf" className="hover:text-white">Ablauf</a>
                  <a href="#zielgruppe" className="hover:text-white">Für wen</a>
                  <a href="#kontakt" className="hover:text-white">Kontakt</a>
                </>
              ) : activeUnitId === "arbeitssicherheit" ? (
                <>
                  <a href="#ansatz" className="hover:text-white">Ansatz</a>
                  {competenceLinks.map((unit) => (
                    <a key={unit.id} href={`#${unit.slug}`} className="hover:text-white">
                      {unit.navLabel}
                    </a>
                  ))}
                  <a href="#team" className="hover:text-white">Team</a>
                  <a href="#referenzen" className="hover:text-white">Referenzen</a>
                  <a href="#check" className="hover:text-white">Werkskante-Check</a>
                </>
              ) : (
                visibleUnits.map((unit) => (
                  <Link key={unit.id} href={unit.href} className="hover:text-white">
                    {unit.title}
                  </Link>
                ))
              )}
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Kontakt</span>
              <a href={`mailto:${siteSettings.contactEmail}`} className="hover:text-white">
                {siteSettings.contactEmail}
              </a>
              <span>{siteSettings.phone}</span>
              <span className="flex flex-col">
                <span>Werkskante</span>
                <span>Birkenweg 6</span>
                <span>84082 Laberweinting</span>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Rechtliches</span>
              <Link href={siteSettings.impressumUrl} className="hover:text-white">
                Impressum
              </Link>
              <Link href={siteSettings.privacyUrl} className="hover:text-white">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs">
          © {year} {siteSettings.legalName}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
