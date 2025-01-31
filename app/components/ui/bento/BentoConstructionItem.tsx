"use client";

import React, { useRef } from "react";
import { ConstructExperienceIcon } from "./bentoGraphics/ConstructExperienceIcon";
import { ConstructIcon } from "./bentoGraphics/ConstructIcon";
import ConstructImage from "@assets/image/construct.webp";
import WireframeConstructImage from "@assets/image/wireframe_construct.webp";
import { cn } from "@/libs/utils";
import { motion, useInView } from "framer-motion";
import { Card } from "./Card";

interface BentoConstructionItemProps {
  className?: string;
  isSwiper?: boolean;
  hoverable?: boolean;
}

export const BentoConstructionItem = ({
  className: bentoClass,
  isSwiper = false,
  hoverable = false,
}: BentoConstructionItemProps) => {
  return (
    <Card
      className={cn([
        "min-w-[80vw]  md:min-h-max md:min-w-fit md:col-span-6 md:row-span-5",
        bentoClass,
      ])}
      image={ConstructImage.src}
      alt="imagen de servicio de construcción y demolición"
      wireframe={WireframeConstructImage.src}
      wireframeOnHover={!isSwiper}
      borderGradientDirection={isSwiper ? "to-br" : "to-tr"}
      wireframeDirection={"to top"}
      isHoverable={hoverable}
    >
      <div className="relative p-8 z-10 flex align-bottom flex-col justify-end h-full">
        <div className="flex gap-4 mb-4 items-center">
          <ConstructExperienceIcon className="h-16 w-auto z-40" />
          <ConstructIcon className="w-14 h-14" />
        </div>
        <h3 className="mb-4 z-30 text-2xl md:text-xl font-Jakarta font-medium font-heading text-balance bg-linear-to-r from-slate-100 to-neutral-700  bg-clip-text text-transparent">
          Demolición y construcción
        </h3>
        <p className="text-secondary-text lg:text-sm leading-normal md:leading-relaxed text-balance w-full lg:w-[80%]">
          Realizamos trabajos de construcción, demolición, excavación y
          movimientos de suelo en grandes obras.
        </p>
      </div>
    </Card>
  );
};
