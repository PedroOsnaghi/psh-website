// Import Swiper React components
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CardSliderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardSlider = ({ children, className }: CardSliderProps) => {
  return (
    <Swiper
      className={className}
      spaceBetween={20}
      slidesPerView={1.1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};
