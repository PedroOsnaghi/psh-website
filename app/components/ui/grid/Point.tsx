import { cn } from "@/libs/utils";
import React from "react";

interface PointProps {
  label: string;
  className?: string;
}

export const Point = ({ label, className: userClass }: PointProps) => {
  return (
    <div className={cn(["flex shrink-0 grow-0 gap-2", userClass])}>
      <div className="h-8 w-px shrink-0 bg-white/30"></div>
      <span className="flex items-center gap-2">
        <div className="font-mono text-[13px]/7">{label}</div>
        <span className="text-xl">&rarr;</span>
      </span>
    </div>
  );
};
