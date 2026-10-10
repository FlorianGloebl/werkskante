import { Container } from "@/components/ui/Container";
import { startContent } from "@/content/start";

export function StartAudience() {
  return (
    <section id="zielgruppe" className="bg-white py-24 sm:py-32">
      <Container className="mx-auto flex max-w-2xl flex-col gap-4 text-left">
        <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          {startContent.audienceTitle}
        </span>
        <p className="font-display text-2xl leading-snug font-semibold text-ink sm:text-3xl">
          {startContent.audienceParagraph}
        </p>
      </Container>
    </section>
  );
}
