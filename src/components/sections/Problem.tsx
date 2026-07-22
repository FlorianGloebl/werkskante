"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { problemPoints } from "@/content/approach";

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      <Image
        src="/images/problem-paperwork.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, #05070A 20%, rgba(6,20,38,0.93) 55%, rgba(6,20,38,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative">
        <h2 className="max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          Arbeitsschutz scheitert selten am Gesetz. Meistens scheitert er an der
          Umsetzung.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {problemPoints.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
              className="border-t border-white/15 pt-4"
            >
              <ServiceIcon name={point.icon} className="h-6 w-6 text-steel" />
              <p className="mt-3 text-base leading-snug font-medium text-white/85">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
