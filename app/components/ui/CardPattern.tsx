import { cn } from "@/libs/utils";
import React from "react";
interface CardPatternProps {
  className?: string;
  children?: React.ReactNode;
  pattern?: boolean;
}

export const CardPattern = ({
  className: userClass,
  children,
  pattern = false,
}: CardPatternProps) => {
  return (
    <div
      className={cn([
        "p-4 relative overflow-hidden rounded-lg bg-[#080809] ",
        pattern &&
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        userClass,
      ])}
    >
      {children}
    </div>
  );
};
