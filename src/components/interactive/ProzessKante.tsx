"use client";

import { motion } from "framer-motion";

export function ProzessKante() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-sm border border-white/10 sm:flex-row">
      <div className="flex flex-1 flex-col gap-2 bg-white/5 p-8 sm:p-10">
        <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
          Vorschrift
        </span>
        <p className="text-white/70">
          Gesetze, Normen, Berufsgenossenschaft, Pflichten.
        </p>
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className="flex w-full items-center justify-center bg-gradient-to-b from-accent to-steel py-3 sm:w-2 sm:py-0"
      >
        <span className="rotate-90 text-[10px] font-bold tracking-[0.3em] text-white uppercase sm:rotate-0 sm:[writing-mode:vertical-rl]">
          Werkskante
        </span>
      </motion.div>

      <div className="flex flex-1 flex-col gap-2 bg-white/5 p-8 sm:p-10">
        <span className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">
          Arbeitsrealität
        </span>
        <p className="text-white/70">
          Menschen, Zeitdruck, Prozesse, echte Wertschöpfung.
        </p>
      </div>
    </div>
  );
}
