import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteSettings } from "@/content/site";

export function Footer() {
  const year = new Date(2026, 0, 1).getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed">{siteSettings.mainClaim}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Navigation</span>
              <a href="#ansatz" className="hover:text-white">Ansatz</a>
              <a href="#leistungen" className="hover:text-white">Leistungen</a>
              <a href="#check" className="hover:text-white">Werkskante-Check</a>
              <a href="#team" className="hover:text-white">Team</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-white">Kontakt</span>
              <a href={`mailto:${siteSettings.contactEmail}`} className="hover:text-white">
                {siteSettings.contactEmail}
              </a>
              <span>{siteSettings.phone}</span>
              <span>{siteSettings.address}</span>
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
