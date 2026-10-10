import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { startContent } from "@/content/start";
import { assetPath } from "@/lib/basePath";

export function StartAbout() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
        <div className="relative min-h-[320px] overflow-hidden rounded-sm lg:col-span-5">
          <Image
            src={assetPath("/team/florian-gloebl.jpg")}
            alt="Florian Glöbl"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-8 lg:col-span-7 lg:pl-8">
          <div>
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              {startContent.aboutEyebrow}
            </span>
            <p className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
              „{startContent.aboutQuote}“
            </p>
          </div>

          <p className="leading-relaxed text-ink/70">{startContent.aboutParagraph}</p>

          <div className="flex flex-wrap gap-2">
            {startContent.aboutRoles.map((role) => (
              <span
                key={role}
                className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink/60"
              >
                {role}
              </span>
            ))}
          </div>

          <p className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink/60 italic">
            {startContent.mentorsNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
