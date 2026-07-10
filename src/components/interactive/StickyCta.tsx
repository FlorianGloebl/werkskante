"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const OBSTRUCTED_SECTION_IDS = ["leistungen", "check", "kontakt"];

export function StickyCta() {
  const [scrolledPast, setScrolledPast] = useState(false);
  const [overSensitiveSection, setOverSensitiveSection] = useState(false);
  const intersecting = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = OBSTRUCTED_SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return;

    // Nur das untere Fünftel des Viewports zählt: genau dort liegt der
    // fixierte Button, also darf dort keine der sensiblen Sektionen sein.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          intersecting.current[entry.target.id] = entry.isIntersecting;
        });
        setOverSensitiveSection(Object.values(intersecting.current).some(Boolean));
      },
      { rootMargin: "-80% 0px 0px 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !overSensitiveSection;

  return (
    <div
      className={`pointer-events-none fixed right-4 bottom-4 z-40 transition-all duration-300 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <Button
        href="#kontakt"
        variant="primary"
        className={`shadow-lg shadow-black/25 ${visible ? "pointer-events-auto" : ""}`}
      >
        Check anfragen
      </Button>
    </div>
  );
}
