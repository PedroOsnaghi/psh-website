"use client";
import React, { useEffect, useState } from "react";
import { ImageCompare } from "./ImageCompare";
import lux_meditor from "@assets/image/lux_meditor.webp";
import dsFont from "next/font/local";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const dsfont = dsFont({
  src: "../../../../public/fonts/dseg/dseg7-bold.woff2",
  variable: "--font-ds-variable",
  display: "swap",
});

export const SensorSimulator = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);

  const handleSlide = (position: number) => {
    setIsDragging(() => true);
    setPosition(position);
    setTimeout(() => {
      setIsDragging(() => false);
    }, 1000);
  };

  return (
    <div className=" relative">
      <Simulator
        position={position}
        isDragging={isDragging}
        className="absolute z-10 -top-5 -left-6 scale-[1.2] pointer-events-none"
      />
      <ImageCompare onSlide={handleSlide} />
    </div>
  );
};

const Simulator = ({
  className,
  isDragging,
  position,
}: {
  className?: string;
  isDragging: boolean;
  position: number;
}) => {
  return (
    <div className={className}>
      <div className="relative">
        <img
          src={lux_meditor.src}
          className="relative z-10 overflow-hidden"
          alt="medidor de luz"
        />
        <ClockSimulator isLoading={isDragging} positionSlide={position} />
      </div>
    </div>
  );
};

const ClockSimulator = ({
  isLoading,
  positionSlide,
}: {
  isLoading: boolean;
  positionSlide: number;
}) => {
  const [opacity, setOpacity] = useState(0);
  const [frames, setFrames] = useState(520);
  const count = useMotionValue(465);
  const rounded = useTransform(() => Math.round(count.get()));

  const loadVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        type: "linear",
        ease: "step",
        repeatType: "loop",
      },
    },
  };

  useEffect(() => {
    setOpacity(0);
    if (positionSlide > 50) {
      setFrames(1145);
      count.set(972);
    } else {
      count.set(465);
      setFrames(520);
    }
    const controlsLoad = animate(
      ".display",
      { opacity: [0, 1, 0] },
      { duration: 1, repeat: Infinity, ease: "linear" }
    );

    const controls = animate(count, frames, {
      duration: 5,
      delay: 1,
      type: "spring",
    });

    if (!isLoading) {
      setTimeout(() => {
        controlsLoad.stop();
        setOpacity(1);
      }, 1000);
    }
  }, [isLoading, frames, count]);

  useEffect(() => {}, []);
  return (
    <div className="absolute top-25 left-[43px] grid place-items-center h-32 gap-4   bg-sky-700 ">
      <div className="flex flex-col justify-center w-full mx-auto  p-2">
        <div className="relative w-full h-10 ">
          <span
            className={`absolute inset-0 top-2 text-xl text-primary-text/10 inline-block ${dsfont.className}`}
          >
            8888
          </span>
          <motion.span
            className={`display relative inset-0 top-2 text-xl text-sky-200 inline-block ${dsfont.className}`}
          >
            !!--
          </motion.span>
          <motion.span
            style={{ opacity }}
            className={`numbers absolute inset-0  top-2 text-xl text-sky-200 inline-block text-end ${dsfont.className}`}
          >
            {rounded}
          </motion.span>
        </div>
        <span className="text-sky-200 w-full text-[0.5rem] font-semibold ">
          LUX
        </span>
      </div>
    </div>
  );
};
