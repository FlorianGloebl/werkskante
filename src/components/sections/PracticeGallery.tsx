import Image from "next/image";
import { Container } from "@/components/ui/Container";

const images = [
  {
    src: "/images/rope-access-safety.jpg",
    alt: "Techniker mit Absturzsicherung bei der Arbeit in der Höhe",
    caption: "Arbeiten in der Höhe",
  },
  {
    src: "/images/warehouse-racking.jpg",
    alt: "Regale in einer Lagerhalle",
    caption: "Regalprüfungen & Prüfpflichten",
  },
];

export function PracticeGallery() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <span className="mb-8 inline-block text-xs font-semibold tracking-[0.2em] text-steel uppercase">
          Aus der Praxis
        </span>
        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((image) => (
            <div key={image.src} className="group relative aspect-16/10 overflow-hidden rounded-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
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
