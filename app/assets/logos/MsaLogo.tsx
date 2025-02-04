import React from "react";

export const MsaLogo = ({ className }: { className: string }) => {
  return (
    <svg
      strokeMiterlimit="10"
      style={{
        fillRule: "nonzero",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
      viewBox="4.47 5.703 198.656 68.594"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M7.727 5.703A3.257 3.257 0 0 0 4.47 8.96v62.08a3.257 3.257 0 0 0 3.257 3.257h192.142a3.257 3.257 0 0 0 3.257-3.257V8.96a3.257 3.257 0 0 0-3.257-3.257H7.727Zm16.586 11.031 16.344.188 9.281 31.531 9.844-31.562 17.219.093 5.406 37.157 3.5.28.281 9.47-8.843.062c-4.086-.99-4.652-4.471-4.813-5.437l-4.156-31.75-1.125-.032-12.438 37.282-9.687-.094-11.469-37.313-.844.063-6.343 37.344-9.97-.157 7.813-47.125Zm116.407.563 37.812.094 15.281 46.718h-10.375l-3.812-9.78-26.938-.126-3.312 10.031-10.625.157 12.594-37.844-10.5.125-.125-9.375Zm-4.25.062-.032 9.407-39.53.03.03 8.688 32.907.125c3.826-.06 7.281 3.263 7.25 6.844l.031 14c-.201 3.573-5.266 7.35-8.406 7.5H90.188v-9.5l36.532-.25-.188-8.562-31.937.093c-2.828-.044-7.412-3.424-7.532-7.062l.22-16.219c.079-1.996 2.995-5.122 6.468-5.031l42.719-.063Zm35.187 9.47-10.656.124-5.438 17.906 22.032-.03-5.938-18Z"
          fill="#fff"
        ></path>
      </g>
    </svg>
  );
};
