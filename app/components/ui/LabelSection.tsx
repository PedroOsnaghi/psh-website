import { cn } from "@/libs/utils";
import React from "react";

interface LabelSectionProps {
  text: string;
  className?: string;
}

export const LabelSection = ({
  text,
  className: labelClass,
}: LabelSectionProps) => {
  return (
    <span
      className={cn([
        "bg-linear-to-br from-primary-text from-20% via-neutral-400 to-neutral-300 to-80%  bg-clip-text leading-tight text-transparent  ",
        labelClass,
      ])}
    >
      {text}
    </span>
  );
};
