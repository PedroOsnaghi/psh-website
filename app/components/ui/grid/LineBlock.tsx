import { cn } from "@/libs/utils";
import React, { PropsWithChildren } from "react";

interface LineBlockProps {
  children: React.ReactNode;
  pattern?: boolean;
  className?: string;
}

export const LineBlock = ({
  children,
  pattern = false,
  className: userClass,
}: LineBlockProps) => {
  return (
    <div
      className={cn([
        "relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]",
        userClass,
        pattern &&
          "relative  bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-white)]/10",
      ])}
    >
      {children}
    </div>
  );
};
