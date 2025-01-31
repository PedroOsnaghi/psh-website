import React, { useId } from "react";

interface RuralIconProps {
  className?: string;
}

export const RuralIcon = ({ className }: RuralIconProps) => {
  const uniqueId = useId();
  return (
    <svg
      className={className}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.10986 28.0816C1.10986 13.1251 13.2294 1 28.1808 1C43.1321 1 55.2529 13.1251 55.2529 28.0816C55.2529 43.0382 43.1321 55.162 28.1808 55.162C13.2294 55.162 1.10986 43.0382 1.10986 28.0816Z"
        fill={`url(#paint0_linear_177_61-${uniqueId})`}
        stroke={`url(#paint1_linear_177_61-${uniqueId})`}
        strokeWidth="0.904"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      ></path>
      <path
        d="M22.3281 19.4882L21.9278 15.5656C30.9416 11.1308 37.3458 17.4869 38.9308 19.9845L40.4198 19.1039L40.0195 25.4601L34.3038 22.6423L35.7608 21.7617C33.7274 18.7037 28.1718 15.5656 22.3281 19.4882Z"
        fill="#75D49A"
      ></path>
      <path
        d="M37.3618 25.6522L41.0762 27.3973C40.8681 37.4359 31.7902 40.2331 28.615 40.2332L28.6331 41.9629L23.3287 38.4382L28.6268 34.8972L28.661 36.5993C32.6227 36.5993 38.2424 32.6808 37.3618 25.6522Z"
        fill="#75D49A"
      ></path>
      <path
        d="M24.5695 36.059L21.1433 38.3805C12.9299 32.8889 14.515 23.9711 16.4424 20.8097L14.9354 19.9605L20.6401 17.1291L21.0576 23.4879L19.5665 22.6665C17.2368 26.7729 18.6297 33.7695 24.5695 36.059Z"
        fill="#75D49A"
      ></path>
      <defs>
        <linearGradient
          id={`paint0_linear_177_61-${uniqueId}`}
          x1="28.1814"
          y1="1"
          x2="28.1814"
          y2="55.162"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FF8C" stopOpacity="0.32"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          id={`paint1_linear_177_61-${uniqueId}`}
          x1="1"
          y1="28"
          x2="66.5"
          y2="18"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7EFDB7"></stop>
          <stop offset="1" stopColor="#4B976D"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
