"use client";

import { useState } from "react";
import { compassQuadrants } from "@/content/approach";

export function AngemessenheitsKompass() {
  const [active, setActive] = useState(compassQuadrants[0].id);
  const activeQuadrant = compassQuadrants.find((q) => q.id === active) ?? compassQuadrants[0];

  return (
    <div className="flex flex-col gap-6">
      <div
        className="flex flex-wrap gap-x-2 gap-y-3 border-b border-white/15"
        role="tablist"
        aria-label="Angemessenheits-Kompass"
      >
        {compassQuadrants.map((quadrant) => (
          <button
            key={quadrant.id}
            type="button"
            role="tab"
            aria-selected={active === quadrant.id}
            onClick={() => setActive(quadrant.id)}
            className={`-mb-px rounded-t-sm border-b-2 px-3 pt-2 pb-4 text-sm font-semibold whitespace-nowrap outline-none transition-all sm:text-base ${
              active === quadrant.id
                ? "border-steel text-white"
                : "border-transparent text-white/45 hover:bg-white/10 hover:text-white/85 focus-visible:bg-white/10"
            }`}
          >
            {quadrant.title}
          </button>
        ))}
      </div>

      <p className="max-w-2xl text-xl leading-snug font-medium text-white sm:text-2xl">
        {activeQuadrant.description}
      </p>
      <p className="text-sm text-white/50">
        Kein Schlupfloch-Finder – ein Kompass für Lösungen, die rechtlich passen und im
        Betrieb tragen.
      </p>
    </div>
  );
}
