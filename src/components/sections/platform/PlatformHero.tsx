import { Container } from "@/components/ui/Container";
import { platformIntro } from "@/content/platform";

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-44 pb-24 text-white sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-3">
        <span className="mb-3 text-xs font-semibold tracking-[0.25em] text-steel uppercase">
          {platformIntro.eyebrow}
        </span>
        <p className="font-display text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
          {platformIntro.lineOne}
        </p>
        <p className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-steel sm:text-5xl lg:text-6xl lg:whitespace-nowrap">
          {platformIntro.lineTwo}
        </p>
      </Container>

      <div
        className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-accent via-steel to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
