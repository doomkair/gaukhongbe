import { SVGProps } from "react";

export const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 60 60" width="1em" height="1em" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={0.5}
        y1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#742cfe" />
        <stop offset={1} stopColor="#5d32af" />
      </linearGradient>
    </defs>
    <path
      d="M27.523 3.16C16.236 3.955.009 5.756 0 27.865V55.68h25.189V25.92h-8.364c-.529-7.947 6.015-10 13.13-11.575L27.523 3.16Zm33.749 0c-11.288.793-27.515 2.6-27.523 24.7v27.818h25.189v-29.76h-8.365c-.529-7.945 6.015-10 13.13-11.573L61.272 3.16Z"
      transform="translate(0 -3.16)"
      opacity={0.15}
      fill="url(#a)"
    />
  </svg>
);
