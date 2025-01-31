import React, { useId } from "react";

interface PymeMedicionProps {
  className?: string;
}

export const PymeMedicion = ({ className }: PymeMedicionProps) => {
  const uniqueId = useId();
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#filter0_i_167_${uniqueId})`}>
        <rect
          width="72"
          height="72"
          rx="36"
          fill={`url(#paint0_linear_167_${uniqueId})`}
        ></rect>
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="71"
        height="71"
        rx="35.5"
        stroke={`url(#paint1_linear_167_${uniqueId})`}
      ></rect>
      <path
        d="M16 37H23.5L25.5 31.5L28.5 42.5L32.5 25L34.5 42.5L37.5 33.5L40.5 48L44 23L46.5 37H55"
        stroke="#81FDFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <defs>
        <filter
          id={`filter0_i_167_${uniqueId}`}
          x="-2"
          y="-2"
          width="74"
          height="74"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-2" dy="-2"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
          ></feComposite>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.576471 0 0 0 0 0.752941 0 0 0 0 0.901961 0 0 0 0.18 0"
          ></feColorMatrix>
          <feBlend mode="normal" in2="shape"></feBlend>
        </filter>
        <linearGradient
          id={`paint0_linear_167_${uniqueId}`}
          x1="44"
          y1="-10"
          x2="89.3887"
          y2="184.698"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252528"></stop>
          <stop offset="1" stopColor="#1F355A"></stop>
        </linearGradient>
        <linearGradient
          id={`paint1_linear_167_${uniqueId}`}
          x1="0"
          y1="0"
          x2="77.8046"
          y2="6.94192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#666666"></stop>
          <stop offset="1" stopColor="#5F8CC0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
