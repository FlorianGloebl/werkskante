"use client";

import { useState } from "react";
import { compassQuadrants } from "@/content/approach";

export function AngemessenheitsKompass() {
  const [active, setActive] = useState(compassQuadrants[0].id);
  const activeQuadrant = compassQuadrants.find((q) => q.id === active) ?? compassQuadrants[0];

  return (
    <div className="grid gap-8 rounded-sm border border-white/10 bg-black/30 p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
      <div className="grid grid-cols-2 gap-1.5" role="tablist" aria-label="Angemessenheits-Kompass">
        {compassQuadrants.map((quadrant) => (
          <button
            key={quadrant.id}
            type="button"
            role="tab"
            aria-selected={active === quadrant.id}
            onClick={() => setActive(quadrant.id)}
            className={`aspect-square rounded-sm border p-4 text-left text-sm font-semibold transition-colors sm:p-6 ${
              active === quadrant.id
                ? "border-accent bg-accent/20 text-white"
                : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white/85"
            }`}
          >
            {quadrant.title}
          </button>
        ))}
      </div>

      <div>
        <span className="text-xs font-semibold tracking-[0.2em] text-steel uppercase">
          {activeQuadrant.title}
        </span>
        <p className="mt-3 text-lg leading-relaxed text-white/80">
          {activeQuadrant.description}
        </p>
        <p className="mt-6 text-sm text-white/50">
          Kein Schlupfloch-Finder – ein Kompass für Lösungen, die rechtlich passen und im
          Betrieb tragen.
        </p>
      </div>
    </div>
  );
}
