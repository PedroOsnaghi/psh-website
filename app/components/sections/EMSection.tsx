import React from "react";
import { LineTags } from "../ui/grid/LineTags";
import { LineBlock } from "../ui/grid/LineBlock";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { LabelSection } from "../ui/LabelSection";
import { SectionTittle } from "../ui/SectionTittle";
import { SectionSubTittle } from "../ui/SectionSubTittle";
import { BreackPoints } from "../ui/grid/BreackPoints";
import { Point } from "../ui/grid/Point";
import { MapEscape } from "./sectiongraph/MapEscape";
import estudio_1 from "@assets/image/estudios_1.webp";
import estudio_2 from "@assets/image/estudios_2.webp";
import estudio_3 from "@assets/image/estudios_3.webp";
import particles_1 from "@assets/image/particles_1.webp";
import particles_2 from "@assets/image/particles_2.webp";
import particles_3 from "@assets/image/particles_3.webp";
import sound_1 from "@assets/image/sound_1.webp";
import sound_2 from "@assets/image/sound_2.webp";
import sound_3 from "@assets/image/sound_3.webp";
import pat_1 from "@assets/image/pat_1.webp";
import pat_2 from "@assets/image/pat_2.webp";
import pat_3 from "@assets/image/pat_3.webp";
import { PositionIcon } from "@/assets/icons/PositionIcon";
import { Timeline } from "../ui/timeline/TimeLine";
import { MeditionsSimbols } from "./sectiongraph/MeditionsSimbols";
import { CardPattern } from "../ui/CardPattern";
import { SoundGraph } from "./sectiongraph/SoundGraph";
import { PatGraph } from "./sectiongraph/PatGraph";
import { SensorSimulator } from "../ui/Ilumination-sim/SensorSimulator";

const data = [
  {
    title: "Partículas en suspensión",
    content: (
      <>
        <p className="text-secondary-text text-start text-sm mt-4 leading-relaxed ">
          Si en el trabajo se utilizan procesos que producen polvo –como en
          muchas empresas en la fabricación, extracción, procesamiento de
          alimentos, ingeniería y construcción- el primer paso es conocer las
          sustancias involucradas y reconocer claramente quién está expuesto.
          Según las reglamentaciones vigentes es necesario evaluar la potencial
          exposición y luego decidir si esa exposición es o no significativa.
        </p>
        <p className="text-secondary-text text-start text-sm mt-4 leading-relaxed ">
          En <span className="text-primary-text font-semibold">PSH</span>,
          realizamos mediciones de partículas en suspensión en entornos
          laborales para garantizar el cumplimiento de la normativa argentina,
          como la Resolución 295/03 de la SRT, que establece límites de
          exposición para agentes contaminantes en el aire. Nuestro equipo de
          profesionales capacitados emplea instrumental de alta precisión para
          evaluar la calidad del aire y determinar la presencia de partículas
          que puedan afectar la salud respiratoria de los trabajadores.
        </p>
        <p className="text-secondary-text text-start text-sm mt-4 leading-relaxed ">
          A partir de los resultados obtenidos, elaboramos informes técnicos
          detallados y brindamos asesoramiento sobre medidas de control y
          mitigación, asegurando condiciones de trabajo seguras y alineadas con
          los estándares legales. Con nuestro servicio, las empresas pueden
          reducir riesgos, cumplir con sus obligaciones normativas y promover un
          ambiente laboral más saludable.
        </p>
      </>
    ),
    image: (
      <div className="grid grid-cols-10  grid-rows-2 gap-2 mt-14">
        <img
          src={particles_1.src}
          className="row-span-2 col-span-4 object-cover w-full h-full rounded-sm"
          alt="Imagen Partículas en suspensión"
        />
        <img
          src={particles_2.src}
          className="col-span-6 w-full rounded-sm"
          alt="Imagen Partículas en suspensión"
        />
        <img
          src={particles_3.src}
          className="col-span-6 w-full rounded-sm"
          alt="Imagen Partículas en suspensión"
        />
      </div>
    ),
  },
  {
    title: "Medición de ruidos en el ambiente laboral",
    content: (
      <>
        <p className="text-secondary-text  text-sm mt-4 leading-relaxed ">
          El ruido es uno de los contaminantes laborales más comunes. Gran
          cantidad de trabajadores se ven expuestos diariamente a niveles
          sonoros potencialmente peligrosos para su audición, además de sufrir
          otros efectos perjudiciales en su salud.
        </p>
        <p className="text-secondary-text relative  text-sm mt-4 leading-relaxed z-40">
          Contamos con{" "}
          <span className="text-primary-text font-semibold">
            instrumental homologado
          </span>{" "}
          y con{" "}
          <span className="text-primary-text font-semibold">
            certificados de calibración vigente
          </span>{" "}
          para todo tipo de medición y ensayo referido a Ruidos y Vibraciones,
          como también el personal idóneo para el análisis de resultados e
          informe.
        </p>
        <SoundGraph className="relative w-full scale-[1.030]" />
      </>
    ),
    image: (
      <div className="grid grid-cols-10  grid-rows-2 gap-2 mt-14">
        <img
          src={sound_1.src}
          className="col-span-6 w-full rounded-sm"
          alt="Imagen Medicion de ruidos en el ambiente laboral"
        />
        <img
          src={sound_3.src}
          className="row-span-2 col-span-4 object-cover w-full h-full rounded-sm"
          alt="Imagen Medicion de ruidos en el ambiente laboral"
        />
        <img
          src={sound_2.src}
          className="col-span-6 w-full rounded-sm"
          alt="Imagen Medicion de ruidos en el ambiente laboral"
        />
      </div>
    ),
  },
  {
    title: "Puesta a tierra y continuidad de masas",
    content: (
      <div className="flex h-full">
        <div className="w-[70%] relative">
          <p className="text-secondary-text relative text-sm mt-4 leading-relaxed z-40">
            Nos especializamos en la elaboración de Protocolos de Mediciones de
            <span className="text-primary-text font-semibold">
              Puesta a Tierra (PAT)
            </span>{" "}
            y{" "}
            <span className="text-primary-text font-semibold">
              continuidad de masas
            </span>
            , garantizando el cumplimiento de la{" "}
            <span className="text-primary-text font-semibold">
              Resolución 900/2015
            </span>{" "}
            de la SRT y las normativas de la Asociación Electrotécnica Argentina
            (AEA).
          </p>
          <p className="text-secondary-text relative  text-sm mt-4 leading-relaxed z-40">
            Dicha resolución exige la realización de mediciones confiables,
            documentadas en el{" "}
            <span className="text-primary-text font-semibold">
              Protocolo para la Medición del Valor de Puesta a Tierra y la
              Verificación de la Continuidad de las Masas en el Ambiente Laboral
            </span>
            , asegurando así la protección de los trabajadores frente a riesgos
            eléctricos.
          </p>
          <p className="text-secondary-text relative  text-sm mt-4 leading-relaxed z-40">
            Para ello, contamos con equipamiento de última generación, calibrado
            y certificado bajo la{" "}
            <span className="text-primary-text font-semibold">
              Norma IEC 61557
            </span>
            , de cumplimiento obligatorio, garantizando precisión y fiabilidad
            en cada medición.
          </p>
        </div>
        <div className="relative">
          <PatGraph className="absolute inset-0 top-5 -left-18 z-0 w-auto h-[27rem] " />
        </div>
      </div>
    ),
    image: (
      <div className="grid grid-cols-10  grid-rows-2 gap-2 mt-14">
        <img
          src={pat_1.src}
          className="col-span-7 row-span-2 w-full rounded-sm"
          alt="Imagen Medicion de continuidad de masas y puesta a tierra"
        />
        <img
          src={pat_2.src}
          className=" col-span-3 object-cover w-full h-full rounded-sm"
          alt="Imagen Medicion de continuidad de masas y puesta a tierra"
        />
        <img
          src={pat_3.src}
          className="col-span-3 w-full h-full rounded-sm"
          alt="Imagen Medicion de continuidad de masas y puesta a tierra"
        />
      </div>
    ),
  },
  {
    title: "Medición de iluminación",
    content: (
      <>
        <p className="text-secondary-text relative text-sm mt-4 leading-relaxed z-40">
          Garantizar una iluminación adecuada en los espacios de trabajo y zonas
          de tránsito, como pasillos y escaleras, es fundamental para la
          seguridad, el bienestar y el rendimiento de los trabajadores. Una
          correcta distribución de la luz reduce la fatiga visual, previene
          accidentes y mejora las condiciones laborales en general.
        </p>
        <p className="text-secondary-text relative  text-sm mt-4 leading-relaxed z-40">
          En <span className="text-primary-text font-semibold"> PSH</span>,
          realizamos mediciones de iluminación conforme a la{" "}
          <span className="text-primary-text font-semibold">
            Resolución SRT 84/2012
          </span>
          , que establece los niveles mínimos de iluminancia según cada tipo de
          actividad. Evaluamos la uniformidad, el deslumbramiento y el
          cumplimiento de los estándares vigentes, proporcionando informes
          técnicos y recomendaciones para optimizar el sistema de iluminación en
          función de la normativa y las necesidades específicas de cada empresa.
        </p>
      </>
    ),
    image: (
      <div className="w-full mt-14">
        <SensorSimulator />
      </div>
    ),
  },
];

export const EMSection = () => {
  return (
    <section className="isolate grid overflow-x-hidden lg:overflow-visible">
      <div>
        <header className="flex flex-col justify-center text-center">
          <LineTags tags={["riesgo", "#00896", "mediciones", "industrias"]} />
          <LineBlock pattern>
            <HoverBorderGradient containerClassName="rounded-full mx-auto border-neutral-600 my-4">
              <LabelSection text="Estudios y Mediciones" />
            </HoverBorderGradient>
          </LineBlock>

          <MeditionsSimbols className="mt-4 section-image mx-auto w-9/12 " />

          <BreackPoints className="pl-4 mt-8">
            <Point label="345.086m" className="text-white/20 w-60" />
            <Point label="176.277m" className="text-white/20 " />
          </BreackPoints>

          <LineBlock>
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-white/5 gap-4 p-2">
              <div className=" isolate flex flex-col gap-2 overflow-hidden rounded-2xl bg-dark-2 p-2 outline outline-gray-950/5  dark:outline-white/10 col-span-full">
                <SectionTittle
                  className="text-4xl sm:text-4xl 2xl:text-4xl font-medium font-Jakarta tracking-tighter p-4 pb-0  text-primary-text flex  leading-[1.3!important]  w-full !justify-start text-start "
                  text="Expertos en Evaluaciones y Análisis Técnicos"
                  indexHighlight={[2]}
                  classHightLight="yellow-gradient text-clip"
                />
                <SectionSubTittle
                  text="Somos especialistas con experiencia realizando  estudios de carga de fuego y planes de evacuación en distintos rubros y para una gran cantidad de establecimientos."
                  className="section-subtitle text-start p-4 "
                />
                <CardPattern>
                  <BreackPoints className="justify-end">
                    <Point label="345.086m" className="text-white/20 w-94" />
                    <Point label="176.277m" className="text-white/20 w-64" />
                    <Point label="45.946m" className="text-white/20 w-94" />
                    <Point label="6.207m" className="text-white/20 " />
                  </BreackPoints>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="relative rounded-t-2xl bg-dark-1 p-2  ring ring-gray-950/5 @min-[theme(--breakpoint-lg)]:grid-cols-2 @min-[theme(--breakpoint-lg)]:px-20 @min-[theme(--breakpoint-lg)]:py-8 @min-[theme(--breakpoint-lg)]:pb-10  dark:ring-white/10">
                      <div className="grid grid-cols-10 gap-2 w-full ">
                        <img
                          className="col-span-4 rounded-lg"
                          src={estudio_1.src}
                          alt="Imagen de estudios ley 5920 en industrias"
                        />
                        <img
                          className="col-span-3 rounded-lg"
                          src={estudio_2.src}
                          alt="Imagen de planificación ley 5920 en industrias"
                        />
                        <img
                          className="col-span-3 rounded-lg"
                          src={estudio_3.src}
                          alt="Imagen de implementacion plan evacuacion según ley 5920 en industrias"
                        />
                      </div>
                      <div className="px-6">
                        <div className="flex gap-2 items-center mt-4">
                          <PositionIcon className="w-4 h-4" />
                          <p className="text-[#FF6D6F] font-mono text-start">
                            CABA
                          </p>
                        </div>
                        <h3 className="font-Jakarta text-primary-text text-2xl font-medium text-start">
                          Ley 5920
                        </h3>
                        <p className="text-secondary-text text-start text-sm mt-4">
                          La Ley 5.920 de la Ciudad de Buenos Aires introduce un
                          nuevo protocolo de evacuación denominado Sistema de
                          Autoprotección, el cual es supervisado y regulado por
                          la Dirección General de Defensa Civil de la Ciudad.
                        </p>
                        <p className="text-secondary-text text-start text-sm mt-4">
                          En{" "}
                          <span className="font-semibold text-primary-text">
                            nuestro equipo
                          </span>{" "}
                          cuentamos con profesionales habilitados para realizar
                          la presentación de dicho plan ante el organismo de
                          control.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1 p-8">
                      <p className="text-amber-200/40 font-mono text-start">
                        Plan de evacuación
                      </p>
                      <MapEscape className="w-full h-auto " />
                    </div>
                  </div>
                </CardPattern>

                <LineTags tags={["399.21", "x", "28615.009"]} />
                <SectionTittle
                  className="text-4xl sm:text-4xl 2xl:text-4xl font-medium font-Jakarta tracking-tighter p-4 pb-0  text-primary-text flex  leading-[1.3!important]  w-full !justify-start text-start "
                  text="Mediciones Precisas para un Entorno Seguro"
                  indexHighlight={[4]}
                  classHightLight="yellow-gradient text-clip"
                />
                <SectionSubTittle
                  text="Realizamos mediciones ambientales y eléctricas para garantizar entornos de trabajo seguros y cumplir con la normativa vigente. Utilizamos tecnología de precisión para evaluar factores que pueden afectar la salud y la seguridad laboral. "
                  className="section-subtitle text-start p-4 "
                />
                <CardPattern>
                  <div className="w-full">
                    <Timeline data={data} />
                  </div>
                </CardPattern>
              </div>
            </div>
          </LineBlock>
        </header>
      </div>
    </section>
  );
};
