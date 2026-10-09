import type { Metadata } from "next";
import { LegacyHashRedirect } from "@/components/interactive/LegacyHashRedirect";
import { PlatformHero } from "@/components/sections/platform/PlatformHero";
import { PlatformUnits } from "@/components/sections/platform/PlatformUnits";
import { platformIntro } from "@/content/platform";

export const metadata: Metadata = {
  title: "Arbeitssicherheit & Gründung",
  description: platformIntro.subtitle,
};

export default function Home() {
  return (
    <>
      <LegacyHashRedirect />
      <PlatformHero />
      <PlatformUnits />
    </>
  );
}
