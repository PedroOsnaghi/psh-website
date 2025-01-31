import { cn } from "@/libs/utils";
import React from "react";

interface BreackPointsProps {
  children?: React.ReactNode;
  className?: string;
}

export const BreackPoints = ({
  children,
  className: userClass,
}: BreackPointsProps) => {
  return (
    <div className={cn(["flex justify-start ", userClass])}>{children}</div>
  );
};
