import { Container } from "@/components/ui/Container";
import { platformIntro } from "@/content/platform";
import { siteSettings } from "@/content/site";

export function PlatformClosing() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <Container className="flex flex-col items-start gap-4">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          {platformIntro.closingTitle}
        </h2>
        <p className="max-w-xl text-white/70">{platformIntro.closingDescription}</p>
        <a
          href={`mailto:${siteSettings.contactEmail}`}
          className="text-lg font-semibold text-steel hover:text-white"
        >
          {siteSettings.contactEmail}
        </a>
      </Container>
    </section>
  );
}
