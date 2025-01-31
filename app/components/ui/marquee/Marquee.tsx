import React from "react";

const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full ">
      <div className="overflow-hidden flex">
        <div className="animate-marquee  items-center">{children}</div>
        <div className="animate-marquee  items-center">{children}</div>
      </div>
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-dark-1 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-dark-1 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
