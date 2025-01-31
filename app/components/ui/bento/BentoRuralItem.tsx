"use client";
import { cn } from "@/libs/utils";
import React from "react";
import { RuralIcon } from "./bentoGraphics/RuralIcon";
import RuralImage from "@assets/image/rural.webp";
import WireframeRuralImage from "@assets/image/wireframe_rural.webp";
import { Card } from "./Card";

interface BentoRuralItemProps {
  className?: string;
  isSwiper?: boolean;
  hoverable?: boolean;
}

export const BentoRuralItem = ({
  className: bentoClass,
  isSwiper = false,
  hoverable = false,
}: BentoRuralItemProps) => {
  return (
    <Card
      className={cn([
        "min-w-[80vw] md:min-h-max md:min-w-fit  md:col-span-6 md:row-span-5",
        bentoClass,
      ])}
      image={RuralImage.src}
      alt="imagen de trabajo rural"
      wireframe={WireframeRuralImage.src}
      wireframeOnHover={!isSwiper}
      borderGradientDirection={isSwiper ? "to-br" : "to-tr"}
      wireframeDirection={"to right"}
      lightAlignment="center"
      isHoverable={hoverable}
    >
      <div className="relative p-8 h-full z-10">
        <h3 className="mb-4 z-30 text-2xl md:text-xl font-Jakarta font-medium font-heading text-balance bg-linear-to-r from-slate-100 to-neutral-700 bg-clip-text text-transparent">
          Trabajo rural
        </h3>
        <p className="text-secondary-text text-md lg:text-sm leading-normal md:leading-relaxed text-balance">
          Plan de emergencia adaptado a sus necesidades y capacitaciones al
          personal para responder ante emergencias.
        </p>
        <div className="flex gap-4 mt-1 justify-end">
          <RuralIcon className="h-14 w-14" />
        </div>
      </div>
    </Card>
  );
};
