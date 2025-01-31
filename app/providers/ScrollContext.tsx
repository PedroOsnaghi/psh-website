"use client";
import React, { createContext, useContext, useState } from "react";

interface ScrollContextType {
  isHeroLogoVisible: boolean;
  setHeroLogoVisible: (visible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHeroLogoVisible, setHeroLogoVisible] = useState(true);

  return (
    <ScrollContext.Provider value={{ isHeroLogoVisible, setHeroLogoVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
