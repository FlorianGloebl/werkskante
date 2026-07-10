"use client";

import { useState } from "react";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ppeItems } from "@/content/ppe";
import { services } from "@/content/services";

export function PpeCheck() {
  const [active, setActive] = useState(ppeItems[0].id);
  const activeItem = ppeItems.find((item) => item.id === active) ?? ppeItems[0];
  const relatedService = services.find((s) => s.id === activeItem.serviceId);

  return (
    <div className="rounded-sm border border-ink/10 bg-mist p-6 sm:p-10">
      <h3 className="font-display text-lg font-bold text-ink">
        Ihre PSA im Schnell-Check
      </h3>
      <p className="mt-2 max-w-xl text-sm text-ink/60">
        Ausrüstung antippen und sehen, wo Werkskante ansetzt.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {ppeItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-pressed={active === item.id}
            className={`flex flex-col items-center gap-2 rounded-sm border p-4 text-center outline-none transition-all ${
              active === item.id
                ? "border-accent bg-white text-ink ring-2 ring-accent"
                : "border-transparent bg-white/60 text-ink/50 hover:bg-white hover:ring-2 hover:ring-accent/60 focus-visible:ring-2 focus-visible:ring-accent"
            }`}
          >
            <ServiceIcon
              name={item.icon}
              className={`h-7 w-7 ${active === item.id ? "text-accent" : "text-ink/40"}`}
            />
            <span className="text-xs leading-tight font-semibold">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-ink/10 pt-6">
        <p className="text-lg leading-snug font-medium text-ink">{activeItem.note}</p>
        {relatedService && (
          <p className="text-sm text-ink/50">
            Passende Leistung: <span className="font-semibold text-accent">{relatedService.title}</span>
          </p>
        )}
      </div>
    </div>
  );
}
