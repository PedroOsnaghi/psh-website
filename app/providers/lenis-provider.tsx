"use client";
import { ReactLenis } from "lenis/react";
import React, { ReactNode } from "react";

interface LenisScrollProviderProps {
  children: ReactNode;
}
const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
