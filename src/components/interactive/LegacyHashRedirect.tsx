"use client";

import { useEffect } from "react";

// Vor dem Plattform-Umbau lag die Beratung direkt auf "/", mit Anker-Links
// wie "/#kontakt". Alte Lesezeichen/Links landen jetzt auf der Hub-Seite,
// die diese Anker nicht mehr besitzt – also sofort dorthin weiterleiten, wo
// sie jetzt liegen.
export function LegacyHashRedirect() {
  useEffect(() => {
    if (window.location.hash) {
      window.location.replace(`/arbeitssicherheit${window.location.hash}`);
    }
  }, []);

  return null;
}
