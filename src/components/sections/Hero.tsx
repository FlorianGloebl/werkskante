"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/content/site";
import { team } from "@/content/team";
import { assetPath } from "@/lib/basePath";

const founders = team.filter((m) => m.visible).sort((a, b) => a.sortOrder - b.sortOrder);
const contactPerson = team.find((m) => m.id === "andreas-wellenhofer");

const cutoutImages: Record<string, string> = {
  "florian-gloebl": assetPath("/team/florian-gloebl-cutout.png"),
  "andreas-wellenhofer": assetPath("/team/andi-cutout.png"),
  "daniel-peschl": assetPath("/team/daniel-peschl-cutout.png"),
};

function TeamCutouts({ className = "", imageClassName = "" }: { className?: string; imageClassName?: string }) {
  return (
    <div className={`flex items-end -space-x-6 ${className}`}>
      {founders.map((member, i) => {
        const cutout = cutoutImages[member.id];
        if (!cutout) return null;
        return (
          <div
            key={member.id}
            className={`relative aspect-4/5 ${imageClassName}`}
            style={{ zIndex: founders.length - i }}
          >
            <Image
              src={cutout}
              alt={member.name}
              fill
              sizes="200px"
              className="object-contain object-bottom drop-shadow-[0_16px_24px_rgba(0,0,0,0.5)]"
            />
          </div>
        );
      })}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-32 pb-24 text-white sm:pt-40">
      <Image
        src={assetPath("/images/hero-industrial-edge.jpg")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, #05070A 8%, rgba(6,20,38,0.92) 38%, rgba(6,20,38,0.55) 68%, rgba(6,20,38,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <span className="mb-6 inline-block text-xs font-semibold tracking-[0.25em] text-steel uppercase">
              {siteSettings.brandName} · {siteSettings.tagline}
            </span>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {siteSettings.mainClaim}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 lg:-mt-12"
          >
            <p className="rounded-sm bg-ink/55 p-5 text-lg leading-relaxed text-white/90 backdrop-blur-sm">
              Werkskante unterstützt produzierende Mittelständler dabei, Arbeitsschutz und
              Arbeitssicherheit rechtlich passend, prozessnah und wertschöpfungsorientiert
              umzusetzen – mit Blick auf Menschen, Abläufe und den echten Betrieb.
            </p>

            <div className="mt-4 flex items-center gap-3 sm:hidden">
              <TeamCutouts imageClassName="h-20 w-auto" />
              <span className="text-xs font-medium text-white/60">
                {founders.map((m) => m.name.split(" ")[0]).join(", ")} – Ihr Werkskante-Team
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Button href="#ansatz" variant="ghost">
            Ansatz kennenlernen
          </Button>
          <Button href="#kontakt" variant="primary">
            Vor-Ort-Check anfragen
          </Button>
        </motion.div>

        {contactPerson && (
          <motion.a
            href={`#${contactPerson.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white/10 py-2 pr-5 pl-2 backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-accent">
              <Image
                src={contactPerson.image}
                alt={contactPerson.name}
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="text-sm text-white/80">
              Ansprechpartner für Ihre Region: <span className="font-semibold text-white">{contactPerson.name}</span>
            </span>
          </motion.a>
        )}
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden justify-end pr-6 sm:flex lg:pr-16">
        <TeamCutouts imageClassName="h-40 lg:h-56" />
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-accent via-steel to-transparent"
      />
    </section>
  );
}
