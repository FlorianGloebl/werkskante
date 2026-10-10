import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { startContent } from "@/content/start";

export function StartHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-44 pb-24 text-white sm:pt-52 sm:pb-32">
      <Container className="relative flex flex-col gap-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-steel uppercase">
          {startContent.heroEyebrow}
        </span>
        <h1 className="font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:whitespace-nowrap">
          {startContent.heroTitle}
        </h1>
        <p className="text-lg leading-relaxed text-white/70 sm:text-xl lg:max-w-3xl">
          {startContent.heroSubtitle}
        </p>
        <div>
          <Button href="#kontakt" variant="primary">
            {startContent.heroCtaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
