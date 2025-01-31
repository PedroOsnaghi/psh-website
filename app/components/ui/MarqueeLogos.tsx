import React from "react";
import { FireSchoolLogo } from "@/assets/logos/FireSchoolLogo";
import { MsaLogo } from "@/assets/logos/MsaLogo";
import { ProboardLogo } from "@/assets/logos/ProboardLogo";
import { UtnLogo } from "@/assets/logos/UtnLogo";
import Marquee from "./marquee/Marquee";

export const MarqueeLogos = () => {
  return (
    <Marquee>
      <FireSchoolLogo className="h-16 w-auto mr-8 inline-block" />
      <MsaLogo className="h-12 w-auto mr-11 inline-block" />
      <ProboardLogo className="h-12 w-auto mr-11 inline-block" />
      <UtnLogo className="h-12 w-auto mr-8 inline-block" />
    </Marquee>
  );
};
