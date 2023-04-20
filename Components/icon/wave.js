import React from "react";
import style from "./wave.module.css";

function Icon() {
  return (
    <svg
      className={style.container}
      xmlns="http://www.w3.org/2000/svg"
      width="2000"
      height="1087"
      fill="none"
      viewBox="0 0 2000 1087"
    >
      <g filter="url(#filter0_d_610_140)">
        <path
          fill="#F2FFFF"
          d="M2423 0H0v659.296s347.044-82.296 654.083 24C961.122 789.593 1102.83 925 1557.95 800.796 2013.06 676.591 2423 1063 2423 1063V0z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_610_140"
          width="2471"
          height="1111"
          x="-24"
          y="-24"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="12"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_610_140"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_610_140"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;
