"use client";

import { useState } from "react";
import type { Service } from "@/types/content";

interface ServiceFilterProps {
  services: Service[];
}

const categoryLabels: Record<string, string> = {
  alle: "Alle",
  basis: "Arbeitsschutz-Basis",
  absturz: "Absturzsicherung",
  pruefung: "Prüfpflichten",
  schulung: "Schulungen",
  prozesse: "Prozesse",
};

export function ServiceFilter({ services }: ServiceFilterProps) {
  const categories = ["alle", ...Array.from(new Set(services.map((s) => s.category)))];
  const [active, setActive] = useState("alle");

  const visible = services
    .filter((s) => s.visible)
    .filter((s) => active === "alle" || s.category === active)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === category
                ? "bg-ink text-white"
                : "bg-mist text-ink/60 hover:bg-ink/10"
            }`}
          >
            {categoryLabels[category] ?? category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-4 rounded-sm border border-ink/10 p-6 transition-colors hover:border-accent/40"
          >
            <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
            <p className="text-sm leading-relaxed text-ink/70">{service.shortDescription}</p>
            <ul className="mt-2 flex flex-col gap-2">
              {service.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-ink/60">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
