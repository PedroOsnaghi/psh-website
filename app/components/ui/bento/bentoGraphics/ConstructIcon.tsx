import React, { useId } from "react";

interface ConstructIconProps {
  className?: string;
}

export const ConstructIcon = ({ className }: ConstructIconProps) => {
  const uniqueId = useId();
  return (
    <svg
      className={className}
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 4">
        <path
          id="Vector"
          d="M1.4292 32.7976C1.4292 15.2361 15.6603 1 33.2138 1C50.7691 1 65.0002 15.2361 65.0002 32.7976C65.0002 50.3572 50.7691 64.5934 33.2138 64.5934C15.6603 64.5934 1.4292 50.3572 1.4292 32.7976Z"
          fill={`url(#paint0_linear_180_72-${uniqueId})`}
          stroke="#FFC83B"
          strokeWidth="0.904"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        ></path>
        <g id="Vector_2">
          <path
            d="M12.334 38.5287L53.1582 38.3163C53.1582 38.3163 43.0309 42.4164 32.8253 42.4686C22.6197 42.5208 12.334 38.5287 12.334 38.5287Z"
            fill="#FFC83B"
          ></path>
          <path
            d="M28.1089 15.4988V18.1103C25.6376 18.7927 23.4795 20.095 21.5285 21.648L26.1754 28.1889L24.2783 29.8341L19.5654 23.3925C16.3578 26.6394 14.567 30.675 14.567 35.6839H50.9515C50.9515 30.7586 49.2929 26.7822 46.1828 23.5509L41.6143 29.6618L39.6042 28.2498L44.2075 21.8656C42.0929 20.1246 39.7208 18.6813 36.9744 18.0006V15.4988H28.1089Z"
            fill="#FFC83B"
          ></path>
          <path
            d="M12.334 38.5287L53.1582 38.3163C53.1582 38.3163 43.0309 42.4164 32.8253 42.4686C22.6197 42.5208 12.334 38.5287 12.334 38.5287Z"
            stroke="#FFC83B"
            strokeWidth="0.904"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          ></path>
          <path
            d="M28.1089 15.4988V18.1103C25.6376 18.7927 23.4795 20.095 21.5285 21.648L26.1754 28.1889L24.2783 29.8341L19.5654 23.3925C16.3578 26.6394 14.567 30.675 14.567 35.6839H50.9515C50.9515 30.7586 49.2929 26.7822 46.1828 23.5509L41.6143 29.6618L39.6042 28.2498L44.2075 21.8656C42.0929 20.1246 39.7208 18.6813 36.9744 18.0006V15.4988H28.1089Z"
            stroke="#FFC83B"
            strokeWidth="0.904"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          ></path>
        </g>
      </g>
      <defs>
        <linearGradient
          id={`paint0_linear_180_72-${uniqueId}`}
          x1="33.8591"
          y1="6.48156"
          x2="33.3594"
          y2="66.4775"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.22" stopColor="#FFC800" stopOpacity="0.21"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
