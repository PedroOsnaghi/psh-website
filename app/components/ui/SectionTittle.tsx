"use client";
import { cn } from "@/libs/utils";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface SectionTittleProps {
  className?: string;
  text: string;
  indexHighlight?: number[];
  classHightLight?: string;
}

export const SectionTittle = ({
  className,
  text,
  indexHighlight,
  classHightLight,
}: SectionTittleProps) => {
  const ref = useRef<HTMLHeadingElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
    margin: "-25%",
  });
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
  };
  return (
    <h2 className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.15 }}
        ref={ref}
        className="block"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={defaultVariants}
            className={cn([
              "inline-block",
              indexHighlight?.find((e) => e === index) !== undefined &&
                classHightLight,
            ])}
          >
            {word}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
};
