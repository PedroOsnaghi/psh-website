import React, { useId } from "react";

interface IndustryRiskProps {
  className?: string;
}

export const IndustryRisk = ({ className }: IndustryRiskProps) => {
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
      <g filter={`url(#filter0_i_177_69-${uniqueId})`}>
        <rect
          width="72"
          height="72"
          rx="36"
          fill={`url(#paint0_linear_177_69-${uniqueId})`}
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="71"
        height="71"
        rx="35.5"
        stroke={`url(#paint1_linear_177_69-${uniqueId})`}
      />
      <g opacity="0.38" filter={`url(#filter1_f_177_69-${uniqueId})`}>
        <path
          d="M33.0517 14.4791L17.3318 39.4698C16.3851 40.666 17.7652 41.2623 17.7652 41.2623L33.3003 41.4411C33.3003 41.4411 34.8503 41.2239 34.7951 42.4422L34.7622 53.7821C34.8825 56.0418 36.456 54.4646 36.456 54.4646L51.8436 33.1214C51.8436 33.1214 52.5411 31.9994 50.9905 31.9188L36.4319 31.9327C36.4319 31.9327 34.7213 32.2412 34.8273 30.8592V15.399C34.7213 12.9316 33.0517 14.4791 33.0517 14.4791Z"
          fill="black"
        />
      </g>
      <path
        d="M33.0517 14.4791L17.3318 39.4698C16.3851 40.666 17.7652 41.2623 17.7652 41.2623L33.3003 41.4411C33.3003 41.4411 34.8503 41.2239 34.7951 42.4422L34.7622 53.7821C34.8825 56.0418 36.456 54.4646 36.456 54.4646L51.8436 33.1214C51.8436 33.1214 52.5411 31.9994 50.9905 31.9188L36.4319 31.9327C36.4319 31.9327 34.7213 32.2412 34.8273 30.8592V15.399C34.7213 12.9316 33.0517 14.4791 33.0517 14.4791Z"
        fill="#7FB6E9"
      />
      <defs>
        <filter
          id={`filter0_i_177_69-${uniqueId}`}
          x="-2"
          y="-2"
          width="74"
          height="74"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.576471 0 0 0 0 0.752941 0 0 0 0 0.901961 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_177_69"
          />
        </filter>
        <filter
          id={`filter1_f_177_69-${uniqueId}`}
          x="8.6"
          y="5.6"
          width="51.8"
          height="57.8"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4.2"
            result="effect1_foregroundBlur_177_69"
          />
        </filter>
        <linearGradient
          id={`paint0_linear_177_69-${uniqueId}`}
          x1="44"
          y1="-10"
          x2="89.3887"
          y2="184.698"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252528" />
          <stop offset="1" stopColor="#1F355A" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_177_69-${uniqueId}`}
          x1="0"
          y1="0"
          x2="77.8046"
          y2="6.94192"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A0C0FF" />
          <stop offset="1" stopColor="#5F8CC0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
