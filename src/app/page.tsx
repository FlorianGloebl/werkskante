import { Hero } from "@/components/sections/Hero";
import { WhatIsWerkskante } from "@/components/sections/WhatIsWerkskante";
import { Problem } from "@/components/sections/Problem";
import { Approach } from "@/components/sections/Approach";
import { WerkskanteCheck } from "@/components/sections/WerkskanteCheck";
import { Services } from "@/components/sections/Services";
import { PracticeGallery } from "@/components/sections/PracticeGallery";
import { Team } from "@/components/sections/Team";
import { Trust } from "@/components/sections/Trust";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsWerkskante />
      <Problem />
      <Approach />
      <WerkskanteCheck />
      <Services />
      <PracticeGallery />
      <Team />
      <Trust />
      <Contact />
    </>
  );
}
