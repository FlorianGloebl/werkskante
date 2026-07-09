"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 transition-all duration-300 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Button href="#kontakt" variant="primary" className="w-full shadow-lg shadow-black/20">
        Kostenlosen Check anfragen
      </Button>
    </div>
  );
}
