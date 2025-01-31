"use client";

import { easeOut, motion } from "framer-motion";
import React from "react";

interface SectionSubTittleProps {
  text: string;
  className?: string;
  animate?: boolean;
}

export const SectionSubTittle = ({
  text,
  className,
  animate = false,
}: SectionSubTittleProps) => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, easeOut, once: true },
    },
  };
  return (
    <motion.h3
      variants={animate ? variants : undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-25%" }}
      className={className}
    >
      {text}
    </motion.h3>
  );
};
