"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { compassQuadrants } from "@/content/approach";

export function AngemessenheitsKompass() {
  const [active, setActive] = useState<string | null>(null);
  const activeQuadrant = compassQuadrants.find((q) => q.id === active) ?? null;

  return (
    <div className="flex flex-col gap-10">
      <div className="border-l-2 border-steel/60 pl-6">
        <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-steel uppercase">
          Unser Prinzip
        </span>
        <p className="w-full text-lg leading-snug text-white/80 sm:text-xl">
          Wir suchen keine Schlupflöcher. Wir finden Lösungen, die rechtlich richtig sind und
          im Betrieb wirklich funktionieren.
        </p>
      </div>

      <div className="relative mx-auto grid w-full max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-sm bg-white/15 sm:grid-cols-2">
        {compassQuadrants.map((quadrant, i) => {
          const isActive = active === quadrant.id;
          const isDimmed = active !== null && !isActive;
          return (
            <button
              key={quadrant.id}
              type="button"
              onClick={() => setActive(isActive ? null : quadrant.id)}
              aria-pressed={isActive}
              className={`flex flex-col gap-3 bg-ink p-6 text-left outline-none transition-all sm:p-8 ${
                isActive ? "ring-2 ring-inset ring-steel" : "hover:bg-white/5"
              } ${isDimmed ? "opacity-50" : ""}`}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-steel uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg font-bold text-white sm:text-xl">
                {quadrant.title}
              </span>
              <span className="text-sm leading-snug text-white/60">{quadrant.description}</span>
            </button>
          );
        })}

        <div
          className="pointer-events-none absolute top-1/2 left-1/2 hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-steel/50 bg-ink sm:flex"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-steel" />
        </div>
      </div>

      <div className="flex min-h-12 items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          {activeQuadrant ? (
            <motion.p
              key={activeQuadrant.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-w-xl font-display text-xl font-semibold text-white sm:text-2xl"
            >
              {activeQuadrant.verdict}
            </motion.p>
          ) : (
            <motion.p
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-white/40"
            >
              Auf ein Feld klicken für unsere Haltung dazu.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
