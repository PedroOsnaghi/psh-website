import { cn } from "@/libs/utils";
import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <section
      className={cn([
        "w-full lg:h-[60rem] h-[50vh]  lg:grid-cols-12  lg:auto-rows-[30rem] lg:grid-rows-12 gap-2 ",
        className,
      ])}
    >
      {children}
    </section>
  );
};
