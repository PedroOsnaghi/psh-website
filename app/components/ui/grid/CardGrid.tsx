import { cn } from "@/libs/utils";
import React from "react";

interface CardGridProps {
  children?: React.ReactNode;
  className?: string;
}

export const CardGrid = ({ children, className: userClass }: CardGridProps) => {
  return (
    <div
      className={cn([
        "h-full  relative overflow-hidden rounded-lg bg-gray-950/[2.5%] after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        userClass,
      ])}
    >
      {children}
    </div>
  );
};
