"use client";
import { cn } from "@/libs/utils";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full  px-auto " ref={containerRef}>
      <div ref={ref} className="relative  mx-auto pb-20 pt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative grid grid-cols-[repeat(13,minmax(0,1fr))] w-full "
          >
            {(index + 1) % 2 !== 0 ? (
              <TimeLineEntryImage contentImage={item.image} />
            ) : (
              <TimeLineEntry
                title={item.title}
                content={item.content}
                index={index + 1}
              />
            )}

            <div className="relative flex flex-col col-span-1 z-40 items-center  w-full">
              <TimeLinePoint />
            </div>

            {(index + 1) % 2 !== 0 ? (
              <TimeLineEntry
                title={item.title}
                content={item.content}
                index={index + 1}
              />
            ) : (
              <TimeLineEntryImage contentImage={item.image} />
            )}
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[50%] -translate-x-[50%] top-5 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[5px] bg-pshred rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const TimeLinePoint = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: 0.5,
    margin: "0% 0% -49% 0%",
  });

  const colorVariants = {
    gray: {
      backgroundColor: "#4B5563",
    },
    red: {
      backgroundColor: "var(--color-pshred)",
      transition: {
        duration: 0.3,
      },
    },
    bleck: {
      backgroundColor: "#000000",
    },
    redOpacity: {
      backgroundColor: "#541a1b",

      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={colorVariants}
      initial="black"
      animate={isInView ? "redOpacity" : "black"}
      ref={ref}
      className="h-10 absolute top-0 left-[50%] -translate-x-[50%]  w-10 rounded-full bg-black flex items-center justify-center"
    >
      <motion.div
        variants={colorVariants}
        initial="gray"
        animate={isInView ? "red" : "gray"}
        className="h-4 w-4 rounded-full  border border-neutral-700 p-2"
      />
    </motion.div>
  );
};

const TimeLineEntry = ({
  title,
  content,
  className: userClass,
  index,
}: {
  title: string;
  content: React.ReactNode;
  className?: string;
  index: number;
}) => {
  return (
    <div
      className={cn([
        "flex flex-col gap-0 col-span-6 mb-18",
        index % 2 === 0 ? "text-right" : "text-left",
        userClass,
      ])}
    >
      <span className="text-3xl  font-semibold text-pshred">
        {index.toString().padStart(2, "0")}
      </span>
      <h3 className="w-full text-2xl mt-4 font-semibold text-primary-text">
        {title}
      </h3>
      <div
        className={cn([
          "relative bg-gradient-to-t from-[#080809] from-50% to-transparent pb-10",
          index % 2 === 0 ? "text-right" : "text-left",
        ])}
      >
        {content}
      </div>
    </div>
  );
};

const TimeLineEntryImage = ({
  contentImage,
}: {
  contentImage: React.ReactNode;
}) => {
  return <div className="col-span-6 mt-14">{contentImage} </div>;
};
