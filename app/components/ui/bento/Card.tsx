"use client";
import { cn } from "@/libs/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface CardProps {
  className?: string;
  wireframeOnHover?: boolean;
  wireframeDirection?:
    | "to top"
    | "to bottom"
    | "to left"
    | "to right"
    | "to top right"
    | "to top left"
    | "to bottom right"
    | "to bottom left";
  borderGradientDirection?: "to-tr" | "to-br";
  children?: React.ReactNode;
  image: string;
  alt: string;
  wireframe: string;
  lightAlignment?: "left" | "right" | "center";
  isHoverable?: boolean;
}

export const Card = ({
  className: bentoClass,
  wireframeOnHover = true,
  borderGradientDirection = "to-tr",
  lightAlignment = "left",
  image,
  alt,
  wireframe,
  children,
  wireframeDirection = "to right",
  isHoverable = false,
}: CardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });

  const triggerAnimation = wireframeOnHover ? isHovered : inView;
  return (
    <section
      ref={ref}
      onMouseEnter={() => setIsHovered(wireframeOnHover)}
      className={cn([
        "relative snap-center group duration-100 overflow-hidden rounded-3xl h-full border border-dark-transparent-lighter  cursor-pointer p-[1px] flex flex-col justify-between bg-white/10",
        bentoClass,
      ])}
    >
      <div
        className={cn([
          "absolute z-0 w-full h-full scale-[1.3] duration-700 transform  rounded-full bg-[radial-gradient(circle_500px_at_50%_100px,#F8f8f8,transparent)] opacity-25 blur-2xl ",
          borderGradientDirection === "to-tr"
            ? "top-0 right-0 -translate-y-[50%] translate-x-[50%]"
            : "bottom-0 right-0 translate-y-[50%] translate-x-[50%]",
          isHoverable && "group-hover:scale-[1.70] group-hover:opacity-50 ",
        ])}
      ></div>
      <div
        className={cn([
          "absolute z-0 w-full h-full scale-[1.3] duration-700 transform rounded-full bg-[radial-gradient(circle_500px_at_50%_200px,#F8f8f8,transparent)] opacity-25  blur-2xl ",
          borderGradientDirection === "to-tr"
            ? "bottom-0 left-0 -translate-x-[50%] translate-y-[50%]"
            : "top-0 left-0 -translate-x-[50%] -translate-y-[50%]",
          isHoverable && "group-hover:scale-[1.70] group-hover:opacity-50 ",
        ])}
      ></div>

      <div className="relative w-full h-full overflow-hidden rounded-3xl z-30 bg-black">
        <div className="relative h-full ">
          {children}
          <div
            className={cn([
              "gradient-center absolute -top-[33%] w-[calc(100%_+_290px)] h-full md:w-[calc(100%_+_300px)] md:h-[calc(100%_+_300px)] lg:h-[calc(100%_+_300px)] lg:w-[calc(100%_+_300px)] rounded-3xl -z-10 bg-[radial-gradient(circle_290px_at_50%_180px,#2a2b30,transparent)] md:bg-[radial-gradient(circle_400px_at_50%_200px,#2a2b30,transparent)] lg:bg-[radial-gradient(circle_350px_at_50%_150px,#2a2b30,transparent)]",
              lightAlignment === "left" && "left-0 -translate-x-[50%] ",
              lightAlignment === "right" && "right-0 translate-x-[50%] ",
              lightAlignment === "center" && "left-1/2 -translate-x-[50%] ",
            ])}
          ></div>
          <div className="absolute inset-0 -z-20 overflow-hidden">
            <img
              src={image}
              alt={alt}
              aria-label={alt}
              className={cn([
                "w-full h-full object-cover object-top transition-all duration-700",
                isHoverable && "group-hover:scale-105",
              ])}
            />
          </div>
          {/* Contenedor con wireframe y máscara difuminada */}
          <motion.div
            className="absolute inset-0 -z-15 opacity-0 mix-blend-lighten overflow-hidden"
            style={{
              WebkitMaskImage: `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0) 100%)`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "cover",
            }}
            initial={{
              WebkitMaskImage: `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)`,
            }}
            animate={
              triggerAnimation
                ? {
                    WebkitMaskImage: [
                      `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)`,
                      `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)`,
                      `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)`,
                      `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
                      `linear-gradient(${wireframeDirection}, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)`,
                    ],
                    opacity: [0, 1, 1, 1, 0],
                  }
                : {}
            }
            transition={{
              duration: 1.3,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: ["linear", "easeIn", "linear", "linear", "easeOut"],
              delay: 0.3,
            }}
            onAnimationComplete={() => setIsHovered(false)}
          >
            <img
              aria-hidden
              src={wireframe}
              className={cn([
                "w-full h-full object-cover object-top  transition-all duration-700 ",
                isHoverable && "group-hover:scale-105",
              ])}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
