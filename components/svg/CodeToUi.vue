<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <!-- Outer Frame -->
    <rect
      width="492"
      height="492"
      x="2"
      y="2"
      ry="6"
      fill="transparent"
      stroke="var(--mainTextColor)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="492; 492; 200; 200; 350; 350; 492; 492"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="492; 492; 400; 400; 492; 492; 350; 350; 492; 492"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="2; 2; 150; 150; 75; 75; 2; 2"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="2; 2; 50; 50; 2; 2; 75; 75; 2; 2"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Background Fill -->
    <rect
      width="192"
      height="345"
      x="154"
      y="151"
      ry="6"
      fill="transparent"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="192; 192; 342; 342; 484; 484; 192; 192"
        keyTimes="0; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="345; 345; 295; 295; 345; 345; 342; 342; 345; 345"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="154; 154; 79; 79; 6; 6; 154; 154"
        keyTimes="0; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="145; 145; 151; 151; 145; 145; 79; 79; 145; 145"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="fill"
        dur="15s"
        values="transparent; transparent; var(--mainTextColor); var(--mainTextColor); transparent; transparent"
        keyTimes="0; 0.125; 0.1875; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Rect A -->
    <rect
      width="200"
      height="45"
      x="55"
      y="55"
      fill="var(--mainTextColor)"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="200; 200; 150; 150; 200; 200"
        keyTimes="0; 0.0625; 0.125; 0.8125; 0.875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="45; 45; 25; 25; 45; 45"
        keyTimes="0; 0.125; 0.1875; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="55; 55; 175; 175; 194; 194; 125; 125; 55; 55"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="55; 55; 85; 85; 69; 69; 150; 150; 140; 55; 55"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Rect B -->
    <rect
      width="325"
      height="45"
      x="120"
      y="130"
      rx="0"
      fill="var(--mainTextColor)"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="325; 325; 45; 45; 325; 325"
        keyTimes="0; 0.0625; 0.125; 0.8125; 0.875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="45; 45"
        keyTimes="0; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="120; 120; 227.5; 227.5; 111; 111; 40; 40; 120; 120"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="130; 130; 59; 59; 140; 140; 130; 130"
        keyTimes="0; 0.3125; 0.375; 0.5; 0.5625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="rx"
        dur="15s"
        values="0%; 0%; 50%; 50%; 0%; 0%"
        keyTimes="0; 0.125; 0.1875; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Rect C -->
    <rect
      width="255"
      height="45"
      x="120"
      y="195"
      fill="var(--mainTextColor)"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="255; 255; 150; 150; 120; 120; 255; 255"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.8125; 0.875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="45; 45; 120; 120; 45; 45"
        keyTimes="0; 0.3125; 0.375; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="120; 120; 175; 175; 111; 111; 40; 40; 120; 120"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="195; 195; 215; 215; 180; 180; 230; 230; 267.5; 195; 195"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Rect D -->
    <rect
      width="285"
      height="45"
      x="120"
      y="260"
      fill="var(--mainTextColor)"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="285; 285; 150; 150; 120; 120; 285; 285"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.8125; 0.875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="45; 45; 120; 120; 45; 45"
        keyTimes="0; 0.3125; 0.375; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="120; 120; 175; 175; 269; 269; 340; 340; 120; 120"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="260; 260; 285; 285; 180; 180; 230; 230; 267.5; 260; 260"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
    </rect>
    <!-- Rect E -->
    <rect
      width="325"
      height="45"
      x="120"
      y="325"
      fill="var(--mainTextColor)"
      stroke="var(--mainBg)"
      stroke-width="4"
    >
      <animate
        attributeName="width"
        dur="15s"
        values="325; 325; 150; 150; 278; 278; 120; 120; 325; 325"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.8125; 0.875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="height"
        dur="15s"
        values="45; 45; 120; 120; 45; 45"
        keyTimes="0; 0.3125; 0.375; 0.625; 0.6875; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="x"
        dur="15s"
        values="120; 120; 175; 175; 111; 111; 190; 190; 120; 120"
        keyTimes="0; 0.0625; 0.125; 0.25; 0.3125; 0.4375; 0.5; 0.75; 0.8125; 1"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        dur="15s"
        values="325; 325; 355; 355; 335; 335; 230; 230; 267.5; 325; 325"
        keyTimes="0; 0.125; 0.1875; 0.3125; 0.375; 0.5; 0.5625; 0.625; 0.6875; 0.75; 1"
        repeatCount="indefinite"
      />
    </rect>
    <g transform="matrix(-6.407672,0,0,6.407672,596.51828,-737.11878)">
      <path
        fill="var(--mainTextColor)"
        fill-opacity="1"
        stroke-width="0"
        d="m 44.699378,131.60955 q 1.049031,-0.3359 1.085205,-1.71049 v -1.13688 q 0,-1.19373 0.935343,-1.62781 -0.935343,-0.42375 -0.935343,-1.62781 v -1.04903 q 0,-1.45728 -1.080038,-1.80351 l 0.196371,-0.59428 q 0.914673,0.25839 1.374593,0.84233 0.45992,0.57878 0.465088,1.53479 v 1.0852 q 0,1.23507 1.09554,1.23507 v 0.74931 q -1.09554,0 -1.09554,1.25574 v 1.04386 q 0,0.97152 -0.470256,1.55546 -0.465088,0.58394 -1.369425,0.84233 z"
      >
        <animate
          attributeName="fill-opacity"
          dur="15s"
          values="1; 1; 0; 0; 1; 1"
          keyTimes="0; 0.0275; 0.09; 0.8125; 0.875; 1"
          repeatCount="indefinite"
        />
      </path>
    </g>
    <g transform="matrix(6.4075692,0,0,6.4075692,-231.41436,-392.10519)">
      <path
        fill="var(--mainTextColor)"
        fill-opacity="1"
        stroke-width="0"
        d="m 44.699378,131.60955 q 1.049031,-0.3359 1.085205,-1.71049 v -1.13688 q 0,-1.19373 0.935343,-1.62781 -0.935343,-0.42375 -0.935343,-1.62781 v -1.04903 q 0,-1.45728 -1.080038,-1.80351 l 0.196371,-0.59428 q 0.914673,0.25839 1.374593,0.84233 0.45992,0.57878 0.465088,1.53479 v 1.0852 q 0,1.23507 1.09554,1.23507 v 0.74931 q -1.09554,0 -1.09554,1.25574 v 1.04386 q 0,0.97152 -0.470256,1.55546 -0.465088,0.58394 -1.369425,0.84233 z"
      >
        <animate
          attributeName="fill-opacity"
          dur="15s"
          values="1; 1; 0; 0; 1; 1"
          keyTimes="0; 0.0275; 0.09; 0.8125; 0.875; 1"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
</template>
