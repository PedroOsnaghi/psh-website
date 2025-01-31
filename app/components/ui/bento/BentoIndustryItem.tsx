import React from "react";
import { IndustryRisk } from "./bentoGraphics/IndustryRisk";
import { IndustryQuimic } from "./bentoGraphics/IndustryQuimic";
import industryImage from "@assets/image/industry.webp";
import { cn } from "@/libs/utils";
import { Card } from "./Card";

interface BentoIndustryItemProps {
  className?: string;
  isSwiper?: boolean;
  hoverable?: boolean;
}

export const BentoIndustryItem = ({
  className: bentoClass,
  isSwiper = false,
  hoverable = false,
}: BentoIndustryItemProps) => {
  return (
    <Card
      className={cn([
        "min-w-[80vw]  md:min-h-max md:min-w-fit md:col-span-6 md:row-span-7",
        bentoClass,
      ])}
      image={industryImage.src}
      alt="imagen de servicio de industrias"
      wireframe={industryImage.src}
      wireframeOnHover={!isSwiper}
      borderGradientDirection={"to-br"}
      wireframeDirection={"to top right"}
      lightAlignment="center"
      isHoverable={hoverable}
    >
      <div className="relative p-8 h-full z-10">
        <h3 className="mb-4 z-30 text-2xl md:text-xl font-Jakarta font-medium font-heading text-balance bg-linear-to-r from-slate-100 to-neutral-700 bg-clip-text text-transparent">
          Grandes industrias
        </h3>
        <p className="text-secondary-text text-md lg:text-sm leading-normal md:leading-relaxed text-balance">
          <span className="hidden sm:inline">
            Brindamos asesoramiento técnico externo y nos especializamos
            en Gestión de Emergencias Industriales. <span>&nbsp;</span>
          </span>
          Somos expertos en la formación profesional de Brigadas Industriales
          acorde a los riesgos existentes bajo normas nacionales e
          internacionales.
        </p>
        <div className="flex gap-4 mt-4">
          <IndustryRisk className="h-14 w-14" />
          <IndustryQuimic className="h-14 w-14" />
        </div>
      </div>
    </Card>
  );
};
