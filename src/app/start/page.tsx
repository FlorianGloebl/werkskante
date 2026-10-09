import type { Metadata } from "next";
import { StartHero } from "@/components/sections/start/StartHero";
import { StartOffer } from "@/components/sections/start/StartOffer";
import { StartProcess } from "@/components/sections/start/StartProcess";
import { StartAudience } from "@/components/sections/start/StartAudience";
import { StartContact } from "@/components/sections/start/StartContact";
import { startContent } from "@/content/start";

export const metadata: Metadata = {
  title: startContent.metaTitle,
  description: startContent.metaDescription,
};

export default function StartPage() {
  return (
    <>
      <StartHero />
      <StartOffer />
      <StartProcess />
      <StartAudience />
      <StartContact />
    </>
  );
}
