import type { Metadata } from "next";
import { LegacyHashRedirect } from "@/components/interactive/LegacyHashRedirect";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PlatformUnits } from "@/components/sections/platform/PlatformUnits";
import { PlatformClosing } from "@/components/sections/platform/PlatformClosing";

export const metadata: Metadata = {
  title: "Arbeitssicherheit & Gründung",
  description:
    "Werkskante berät den Mittelstand in Arbeitssicherheit und begleitet Jungunternehmer:innen und Gründer:innen auf dem Weg in die Selbstständigkeit.",
};

export default function Home() {
  return (
    <>
      <LegacyHashRedirect />
      <PlatformHero />
      <PlatformUnits />
      <PlatformClosing />
    </>
  );
}
