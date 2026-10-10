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

          <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
            {startContent.aboutRoles.map((role) => (
              <div key={role} className="flex items-center gap-3 py-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm text-ink/70">{role}</span>
              </div>
            ))}
          </div>

          <p className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-ink/60 italic">
            {startContent.mentorsNote}
          </p>

          <a
            href="https://www.floriangloebl.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink/40 underline-offset-4 hover:text-accent hover:underline"
          >
            Mehr über mich: floriangloebl.de
          </a>
        </div>
      </Container>
    </section>
  );
}
