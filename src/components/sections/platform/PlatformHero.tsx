import { Container } from "@/components/ui/Container";
import { platformIntro } from "@/content/platform";

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-44 pb-20 text-white sm:pb-28">
      <Container className="relative flex flex-col gap-6 lg:max-w-3xl">
        <span className="text-xs font-semibold tracking-[0.25em] text-steel uppercase">
          {platformIntro.eyebrow}
        </span>
        <h1 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl">
          {platformIntro.title}
        </h1>
        <p className="text-lg leading-relaxed text-white/70 sm:text-xl">
          {platformIntro.subtitle}
        </p>
      </Container>
    </section>
  );
}
