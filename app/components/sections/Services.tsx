import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { LabelSection } from "../ui/LabelSection";
import { BentoGrid } from "../ui/bento/BentoGrid";
import { BentoIndustryItem } from "../ui/bento/BentoIndustryItem";
import { BentoConstructionItem } from "../ui/bento/BentoConstructionItem";
import { BentoPymeItem } from "../ui/bento/BentoPymeItem";
import { BentoRuralItem } from "../ui/bento/BentoRuralItem";
import { SectionSubTittle } from "../ui/SectionSubTittle";
import { SectionTittle } from "../ui/SectionTittle";
import { ServicesSimbols } from "./sectiongraph/ServicesSimbols";
import { CardSlider } from "../ui/card-slider/CardSlider";
import { LineBlock } from "../ui/grid/LineBlock";
import { LineTags } from "../ui/grid/LineTags";

export const Services = () => {
  return (
    <section className="isolate grid overflow-x-hidden">
      <div>
        <header className="flex flex-col justify-center text-center">
          <LineTags tags={["riesgo", "#00896", "mediciones", "industrias"]} />
          <LineBlock pattern>
            <HoverBorderGradient containerClassName="rounded-full mx-auto border-neutral-600 my-4">
              <LabelSection text="Servicio externo" />
            </HoverBorderGradient>
          </LineBlock>

          <ServicesSimbols className="section-image mx-auto w-10/12 lg:w-[512px]" />

          <LineBlock>
            <SectionTittle
              className="section-big-title flex mb-3 xl:mb-4
          leading-[1.3!important]  w-full justify-center"
              text="Seguridad e higiene laboral"
              indexHighlight={[3]}
              classHightLight="yellow-gradient text-clip"
            />
          </LineBlock>
          <LineTags tags={["399.21", "x", "28615.009"]} />

          <LineBlock>
            <SectionSubTittle
              text="+ 20 años de experiencia en la prevención de riesgos laborales"
              className="section-subtitle text-center"
            />
          </LineBlock>
        </header>

        <LineBlock className="mt-12">
          <BentoGrid className="hidden lg:grid w-full bg-white/5 p-2 ">
            <BentoIndustryItem key={"bento-industry"} hoverable />
            <BentoConstructionItem key={"bento-construction"} hoverable />
            <BentoPymeItem key={"bento-pyme"} hoverable />
            <BentoRuralItem key={"bento-rural"} hoverable />
          </BentoGrid>

          <CardSlider className="flex lg:hidden! w-screen h-[70vh] !px-5 md:!pr-20 !pr-10">
            <BentoIndustryItem key={"card-industry"} isSwiper />
            <BentoConstructionItem key={"card-construction"} isSwiper />
            <BentoPymeItem key={"card-pyme"} isSwiper />
            <BentoRuralItem key={"card-rural"} isSwiper />
          </CardSlider>
        </LineBlock>
      </div>
    </section>
  );
};
