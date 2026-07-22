"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-24 pb-24 text-white sm:pt-28">
      <Image
        src="/images/hero-industrial-edge.jpg"
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
            className="lg:col-span-4"
          >
            <p className="rounded-sm bg-ink/55 p-5 text-lg leading-relaxed text-white/90 backdrop-blur-sm">
              Werkskante unterstützt produzierende Mittelständler dabei, Arbeitssicherheit
              rechtlich passend, prozessnah und wertschöpfungsorientiert umzusetzen – mit
              Blick auf Menschen, Abläufe und den echten Betrieb.
            </p>
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
            Kostenlosen Vor-Ort-Check anfragen
          </Button>
        </motion.div>
      </Container>

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
