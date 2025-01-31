"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import React, { useRef } from "react";

interface LenisScrollProviderProps {
  children: React.ReactNode;
}
const LenisScrollProvider = ({ children }: LenisScrollProviderProps) => {
  const lenisRef = useRef(null);
  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
