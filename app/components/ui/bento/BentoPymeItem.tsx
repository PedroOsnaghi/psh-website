"use client";

import { cn } from "@/libs/utils";
import React from "react";
import { PymeErgonomia } from "./bentoGraphics/PymeErgonomia";
import { PymeMedicion } from "./bentoGraphics/PymeMedicion";
import PymeImage from "@assets/image/pyme.webp";
import PymeWireframe from "@assets/image/wireframe_pyme.webp";
import { motion } from "framer-motion";
import { Card } from "./Card";

interface BentoPymeItemProps {
  className?: string;
  isSwiper?: boolean;
  hoverable?: boolean;
}

export const BentoPymeItem = ({
  className: bentoClass,
  isSwiper = false,
  hoverable = false,
}: BentoPymeItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className={cn([
        "min-w-[80vw] md:min-h-max md:min-w-fit  md:col-span-6 md:row-span-7",
        bentoClass,
      ])}
      image={PymeImage.src}
      alt="imagen de servicio de Medianas empresas"
      wireframe={PymeWireframe.src}
      wireframeOnHover={!isSwiper}
      borderGradientDirection={"to-br"}
      wireframeDirection={"to top right"}
      lightAlignment="left"
      isHoverable={hoverable}
    >
      <div className="relative p-8 h-full z-10">
        <h3 className="mb-4 z-30 text-2xl md:text-xl font-Jakarta font-medium font-heading text-balance bg-linear-to-r from-slate-100 to-neutral-700 bg-clip-text text-transparent">
          Medianas empresas
        </h3>
        <p className="text-secondary-text text-md lg:text-sm leading-normal md:leading-relaxed text-balance">
          Somos el eslabón que le falta a su cadena de producción para mejorar
          las condiciones laborales y el rendimiento.
        </p>
        <div className="flex gap-4 mt-4">
          <PymeErgonomia className="h-14 w-14" />
          <PymeMedicion className="h-14 w-14" />
        </div>
      </div>
    </Card>
  );
};
