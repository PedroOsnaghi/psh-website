import { cn } from "@/libs/utils";
import React, { useId } from "react";

interface LineTagsProps {
  tags: string[];
  className?: string;
}

export const LineTags = ({ tags, className: userClass }: LineTagsProps) => {
  const uniqueId = useId();
  return (
    <div
      className={cn([
        "flex h-6 items-end px-2 font-mono text-xs/6 whitespace-pre  max-sm:px-4 sm:h-10 text-white/20",
        userClass,
      ])}
    >
      <span className="inline text-xl mr-2">&larr;</span>
      {tags.map((tag, index) => (
        <span key={`${uniqueId}-${index}`} className="inline mr-2">
          {tag}
        </span>
      ))}
      <span className="inline text-xl">&rarr;</span>
    </div>
  );
};
