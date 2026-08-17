import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/basePath";

const images = [
  {
    src: assetPath("/images/rope-access-safety.jpg"),
    alt: "Techniker mit Absturzsicherung bei der Arbeit in der Höhe",
    caption: "Arbeiten in der Höhe",
  },
  {
    src: assetPath("/images/warehouse-racking.jpg"),
    alt: "Regale in einer Lagerhalle",
    caption: "Regalprüfungen & Prüfpflichten",
  },
  {
    src: assetPath("/images/gallery-documentation.jpg"),
    alt: "Zwei Kolleginnen prüfen eine Checkliste im Lager",
    caption: "Gefährdungsbeurteilung & Dokumentation",
  },
  {
    src: assetPath("/images/symbolbild-schweisstechnik.jpg"),
    alt: "Schweißarbeiten an einem Metallbauteil",
    caption: "Schweißtechnik & Schweißaufsicht",
  },
  {
    src: assetPath("/images/symbolbild-pruefplanung.jpg"),
    alt: "Präzisionsmessung eines Stahlträgers mit einer Messschieber-Lehre",
    caption: "Prüfplanung & Form-/Lagetoleranzen",
  },
  {
    src: assetPath("/images/symbolbild-schulung.jpg"),
    alt: "Erfahrener Kollege erklärt einem jüngeren Mitarbeitenden eine Maschine auf dem Shopfloor",
    caption: "Schulungen & Sicherheitskultur",
  },
];

export function PracticeGallery() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <span className="mb-8 inline-block text-xs font-semibold tracking-[0.2em] text-steel uppercase">
          Aus der Praxis
        </span>
        <div className="grid gap-6 sm:grid-cols-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-4/3 overflow-hidden rounded-sm"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                aria-hidden="true"
              />
              <span className="absolute bottom-5 left-5 text-sm font-semibold tracking-wide text-white">
                {image.caption}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
