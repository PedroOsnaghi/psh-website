import React from "react";
import { LabelSection } from "../ui/LabelSection";
import { MarqueeLogos } from "../ui/MarqueeLogos";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { LineBlock } from "../ui/grid/LineBlock";
import { CardGrid } from "../ui/grid/CardGrid";
import { BreackPoints } from "../ui/grid/BreackPoints";
import { Point } from "../ui/grid/Point";

export const Certifications = () => {
  return (
    <div className="py-16">
      <BreackPoints className="pl-4">
        <Point label="345.086m" className="text-white/20 w-60" />
        <Point label="176.277m" className="text-white/20 " />
      </BreackPoints>
      <LineBlock className="">
        <section className="grid bg-dark-1 grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <CardGrid className="col-span-1">
            <div className="p-4  lg:mb-0">
              <div className="flex flex-col justify-center items-center lg:items-start relative z-10">
                <HoverBorderGradient containerClassName="rounded-full border-neutral-600 mb-6 mx-auto lg:mx-0">
                  <LabelSection text="Certificación" className="mb-5" />
                </HoverBorderGradient>
                <h2 className="mb-2 text-4xl sm:text-4xl 2xl:text-5xl text-center lg:text-start font-medium font-Jakarta tracking-tighter text-primary-text">
                  Respaldados por
                </h2>
                <h2 className="text-4xl text-center lg:text-start sm:text-4xl 2xl:text-5xl font-medium font-Jakarta tracking-tighter text-transparent bg-linear-to-br from-neutral-100 via-40% via-pshyellow-80 to-red-500 to-80% bg-[100%_auto] bg-clip-text">
                  excelencia certificada
                </h2>
              </div>
            </div>
          </CardGrid>
          <div className="col-span-1 place-content-center  text-primary-text text-center">
            <div className="flex flex-col gap-8 pb-8 lg:pb-0">
              <h3 className="font-normal ">
                Certificacion nacional e internacional
              </h3>
              <MarqueeLogos />
            </div>
          </div>
        </section>
      </LineBlock>
      <BreackPoints className="pl-4 justify-end">
        <Point label="93.088m" className="text-white/20 w-60" />
        <Point label="22.006m" className="text-white/20 w-32" />
      </BreackPoints>
    </div>
  );
};
