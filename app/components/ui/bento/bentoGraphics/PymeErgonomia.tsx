import React, { useId } from "react";

interface PymeErgonomiaProps {
  className?: string;
}

export const PymeErgonomia = ({ className }: PymeErgonomiaProps) => {
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
      <g filter={`url(#filter0_i_167_${uniqueId}`}>
        <rect
          width="72"
          height="72"
          rx="36"
          fill={`url(#paint0_linear_167_${uniqueId}`}
        ></rect>
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="71"
        height="71"
        rx="35.5"
        stroke={`url(#paint1_linear_167_${uniqueId}`}
      ></rect>
      <g filter={`url(#filter1_f_167_${uniqueId}`}>
        <path
          d="M45.7713 17.6181C45.7485 20.601 43.312 23.0007 40.329 22.9779C37.3461 22.9551 34.9465 20.5186 34.9692 17.5357C34.992 14.5528 37.4286 12.1531 40.4115 12.1758C43.3944 12.1986 45.7941 14.6352 45.7713 17.6181Z"
          fill={`url(#paint2_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5478 20.8696C18.7168 20.311 19.3066 19.9951 19.8653 20.164L23.8484 21.3686C24.407 21.5376 24.7229 22.1274 24.554 22.686C24.385 23.2447 23.7952 23.5606 23.2366 23.3916L19.2534 22.187C18.6948 22.0181 18.3789 21.4283 18.5478 20.8696Z"
          fill={`url(#paint3_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2124 15.0271C21.635 14.6246 22.3039 14.6409 22.7064 15.0635L25.5763 18.0768C25.9788 18.4995 25.9625 19.1684 25.5399 19.5709C25.1172 19.9734 24.4483 19.9571 24.0458 19.5345L21.1759 16.5212C20.7734 16.0985 20.7897 15.4296 21.2124 15.0271Z"
          fill={`url(#paint4_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.0233 12.6502C27.5974 12.5454 28.1479 12.9258 28.2527 13.4999L29.0003 17.5935C29.1051 18.1676 28.7247 18.7181 28.1506 18.8229C27.5764 18.9278 27.026 18.5473 26.9212 17.9732L26.1736 13.8796C26.0687 13.3055 26.4492 12.7551 27.0233 12.6502Z"
          fill={`url(#paint5_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.0382 55.6674L31.0964 48.0355L32.9751 48.0498L32.9168 55.6817L31.0382 55.6674Z"
          fill={`url(#paint6_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.3112 37.1751L47.0315 37.1195L47.0459 35.2409L54.3255 35.2965L54.3112 37.1751ZM23.9298 57.712C23.8502 57.7913 23.7404 57.9761 23.7369 58.4297L23.7217 60.4258L21.8431 60.4114L21.8583 58.4154C21.8638 57.6949 22.0402 56.9425 22.604 56.3809C23.1694 55.8178 23.9566 55.6133 24.8152 55.6199L38.67 55.7256C39.5085 55.732 40.2752 55.9529 40.8534 56.41C41.4457 56.8784 41.7872 57.5586 41.7839 58.324L41.8034 60.5484L39.9248 60.5648L39.9052 58.326L39.9052 58.3183C39.9065 58.1479 39.8433 58.0064 39.6881 57.8837C39.5165 57.748 39.1888 57.6083 38.6556 57.6042L24.8008 57.4985C24.2213 57.4941 24.0078 57.6343 23.9298 57.712Z"
          fill={`url(#paint7_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          d="M43.1129 58.2255C43.0941 60.6912 48.6108 60.9681 48.635 57.7979L47.355 40.8796C46.9123 37.3536 43.2679 37.9129 43.2679 37.9129L37.6321 37.8699C33.6472 36.9001 33.3308 32.2009 33.3308 32.2009L33.9179 32.2053C33.9179 32.2053 34.9576 34.4443 36.7179 34.5751L43.4078 34.9784C46.6936 35.2384 46.6084 31.0106 43.7914 30.8716L39.0975 30.4836C36.5163 30.2289 35.7816 27.8279 36.1963 25.9993C36.6109 24.1707 35.9996 22.5586 34.5474 21.4954C33.0986 20.4345 30.9174 20.122 28.4171 21.3483C26.5927 22.2432 25.2343 24.0752 24.3726 26.3473C23.5115 28.6179 23.1518 31.3151 23.3155 33.9175C23.4793 36.5206 24.1661 39.0192 25.3883 40.897C26.6082 42.7712 28.3581 44.0236 30.6589 44.1574L42.2725 44.1275L43.1129 58.2255Z"
          fill={`url(#paint8_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
        <path
          d="M17.2792 27.6163L19.7629 40.6689C20.5534 44.7847 24.2864 47.9835 29.1004 48.0202L31.0964 48.0355L32.9751 48.0498L38.8457 48.0946C40.9592 48.1107 40.8651 45.0571 38.869 45.0418L29.9456 44.9738C27.1268 45.0697 24.083 43.8722 23.0504 40.694L20.3373 26.9351C19.8811 25.1703 16.9413 25.7349 17.2792 27.6163Z"
          fill={`url(#paint9_linear_167_${uniqueId}`}
          fillOpacity="0.49"
        ></path>
      </g>
      <path
        d="M45.7713 17.6181C45.7485 20.601 43.312 23.0007 40.329 22.9779C37.3461 22.9551 34.9465 20.5186 34.9692 17.5357C34.992 14.5528 37.4286 12.1531 40.4115 12.1758C43.3944 12.1986 45.7941 14.6352 45.7713 17.6181Z"
        fill="#81FDFF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5478 20.8696C18.7168 20.311 19.3066 19.9951 19.8653 20.164L23.8484 21.3686C24.407 21.5376 24.7229 22.1274 24.554 22.686C24.385 23.2447 23.7952 23.5606 23.2366 23.3916L19.2534 22.187C18.6948 22.0181 18.3789 21.4283 18.5478 20.8696Z"
        fill="#81FDFF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2124 15.0271C21.635 14.6246 22.3039 14.6409 22.7064 15.0635L25.5763 18.0768C25.9788 18.4995 25.9625 19.1684 25.5399 19.5709C25.1172 19.9734 24.4483 19.9571 24.0458 19.5345L21.1759 16.5212C20.7734 16.0985 20.7897 15.4296 21.2124 15.0271Z"
        fill="#81FDFF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0233 12.6502C27.5974 12.5454 28.1479 12.9258 28.2527 13.4999L29.0003 17.5935C29.1051 18.1676 28.7247 18.7181 28.1506 18.8229C27.5764 18.9278 27.026 18.5473 26.9212 17.9732L26.1736 13.8796C26.0687 13.3055 26.4492 12.7551 27.0233 12.6502Z"
        fill="#81FDFF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.0382 55.6674L31.0964 48.0355L32.9751 48.0498L32.9168 55.6817L31.0382 55.6674Z"
        fill="#81FDFF"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.3112 37.1751L47.0315 37.1195L47.0459 35.2409L54.3255 35.2965L54.3112 37.1751ZM23.9298 57.712C23.8502 57.7913 23.7404 57.9761 23.7369 58.4297L23.7217 60.4258L21.8431 60.4114L21.8583 58.4154C21.8638 57.6949 22.0402 56.9425 22.604 56.3809C23.1694 55.8178 23.9566 55.6133 24.8152 55.6199L38.67 55.7256C39.5085 55.732 40.2752 55.9529 40.8534 56.41C41.4457 56.8784 41.7872 57.5586 41.7839 58.324L41.8034 60.5484L39.9248 60.5648L39.9052 58.326L39.9052 58.3183C39.9065 58.1479 39.8433 58.0064 39.6881 57.8837C39.5165 57.748 39.1888 57.6083 38.6556 57.6042L24.8008 57.4985C24.2213 57.4941 24.0078 57.6343 23.9298 57.712Z"
        fill="#81FDFF"
      ></path>
      <path
        d="M43.1129 58.2255C43.0941 60.6912 48.6108 60.9681 48.635 57.7979L47.355 40.8796C46.9123 37.3536 43.2679 37.9129 43.2679 37.9129L37.6321 37.8699C33.6472 36.9001 33.3308 32.2009 33.3308 32.2009L33.9179 32.2053C33.9179 32.2053 34.9576 34.4443 36.7179 34.5751L43.4078 34.9784C46.6936 35.2384 46.6084 31.0106 43.7914 30.8716L39.0975 30.4836C36.5163 30.2289 35.7816 27.8279 36.1963 25.9993C36.6109 24.1707 35.9995 22.5586 34.5474 21.4954C33.0986 20.4345 30.9174 20.122 28.4171 21.3483C26.5927 22.2432 25.2343 24.0752 24.3726 26.3473C23.5115 28.6179 23.1518 31.3151 23.3155 33.9175C23.4793 36.5206 24.1661 39.0192 25.3883 40.897C26.6082 42.7712 28.3581 44.0236 30.6589 44.1574L42.2725 44.1274L43.1129 58.2255Z"
        fill="#81FDFF"
      ></path>
      <path
        d="M17.2792 27.6163L19.7629 40.6689C20.5534 44.7847 24.2864 47.9835 29.1004 48.0202L31.0964 48.0355L32.9751 48.0498L38.8457 48.0946C40.9592 48.1107 40.8651 45.0571 38.869 45.0418L29.9456 44.9738C27.1268 45.0697 24.083 43.8722 23.0504 40.694L20.3373 26.9351C19.8811 25.1703 16.9413 25.7349 17.2792 27.6163Z"
        fill="#81FDFF"
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
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
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
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_167_29"
          ></feBlend>
        </filter>
        <filter
          id={`filter1_f_167_${uniqueId}`}
          x="12.3524"
          y="7.27578"
          width="46.8732"
          height="58.1889"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="2.45"
            result="effect1_foregroundBlur_167_29"
          ></feGaussianBlur>
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
          <stop offset="1" stopColor="#74D6EB"></stop>
        </linearGradient>
        <linearGradient
          id={`paint2_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint3_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint4_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint5_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint6_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint7_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint8_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
        <linearGradient
          id={`paint9_linear_167_${uniqueId}`}
          x1="24.0748"
          y1="14.1647"
          x2="43.8686"
          y2="51.5381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81FDFF"></stop>
          <stop offset="1" stopColor="#4583AF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
