"use client";

import { Escudo } from "@components/ui/Escudo";
import { useScrollContext } from "@/providers/ScrollContext";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionSubTittle } from "../ui/SectionSubTittle";
import { LineBlock } from "../ui/grid/LineBlock";
import { LineTags } from "../ui/grid/LineTags";

export default function Hero() {
  const { setHeroLogoVisible } = useScrollContext();
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
  });

  useEffect(() => {
    console.log(isInView);
    setHeroLogoVisible(isInView);
  }, [isInView]);

  return (
    <section className="isolate mt-16  h-[calc(100vh_-_3.5rem)] ">
      <div>
        <LineTags tags={["prevención", "seguridad", "higiene"]} />
        <LineBlock pattern>
          <div className="w-full p-2 grid place-items-center">
            <Escudo
              ref={ref}
              className="my-4 lg:w-24 lg:h-24 lg:min-h-24 "
              animation
            />
          </div>
        </LineBlock>

        <LineTags tags={["prevención", "seguridad", "higiene"]} />

        <LineBlock>
          <div className="text-3xl sm:text-5xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primary-text px-2 gap-0">
            <h1 className="inline md:hidden font-Jakarta font-medium text-4xl sm:text-5xl tracking-tighter">
              Seguridad
            </h1>
            <h1 className="hidden font-Jakarta font-medium md:inline-block w-full text-5xl lg:text-6xl xl:text-7xl tracking-tighter">
              Servicio de seguridad
            </h1>
            <h1 className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-Jakarta font-medium  text-primary tracking-tighter">
              y salud ocupacional
            </h1>
          </div>
        </LineBlock>
        <LineTags tags={["334,02", "6934", "6630,09"]} />

        <LineBlock>
          <SectionSubTittle
            className="bg-linear-to-r from-neutral-400 via-neutral-50 to-neutral-400 bg-clip-text leading-tight text-transparent max-w-xl  text-lg px-2"
            text="20 años brindando soluciones para distintos tipos de industrias. Somos el partner que necesita para preservar la calidad de vida de sus colaboradores y la continuidad laboral."
          />
        </LineBlock>
      </div>
    </section>
  );
}
