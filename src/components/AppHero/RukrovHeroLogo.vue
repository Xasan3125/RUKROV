<template>
  <div class="rukrov-logo" ref="root">
    <svg
      viewBox="0 0 960 540"
      class="rukrov-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="RUKROV строительные системы"
      role="img"
    >
      <defs>
        <linearGradient id="shineGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="rgba(255,255,255,0)" />
          <stop offset="50%" stop-color="rgba(255,255,255,0.65)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>

        <clipPath id="logoClip">
          <rect x="120" y="150" width="720" height="250" rx="10" ry="10" />
        </clipPath>
      </defs>

      <g class="diamond-group">
        <path
          ref="outerDiamond"
          d="M730 270 L480 520 L230 270 L480 20 Z"
          fill="none"
          stroke="#104A85"
          stroke-width="9"
          stroke-linejoin="round"
        />

        <path
          ref="innerTop"
          d="M420 115 L480 55 L540 115"
          fill="none"
          stroke="#DD1B24"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <path
          ref="innerBottom"
          d="M420 425 L480 485 L540 425"
          fill="none"
          stroke="#DD1B24"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <g ref="blueBrush">
        <path
          d="M150 284
             C172 279, 198 279, 232 280
             L736 280
             C774 279, 805 276, 828 270
             L834 286
             C842 290, 846 296, 841 302
             L832 308
             L824 330
             C821 340, 820 348, 819 359
             L808 366
             C787 371, 760 374, 724 374
             L228 374
             C198 374, 175 370, 150 362
             L141 347
             C134 342, 133 336, 138 331
             L146 324
             L148 304
             C145 297, 145 290, 150 284
             Z"
          fill="#104A85"
        />
      </g>

      <g ref="redBrush">
        <path
          d="M136 186
             C155 173, 199 174, 278 178
             L756 178
             C793 178, 821 175, 844 181
             L850 193
             C860 197, 864 204, 858 211
             L846 217
             L838 232
             C835 244, 833 257, 832 269
             L823 295
             C798 290, 770 292, 734 293
             L216 293
             C182 293, 156 298, 128 306
             L133 290
             C120 286, 116 280, 121 274
             L131 268
             L133 246
             C130 233, 131 220, 134 208
             L129 198
             C129 192, 131 188, 136 186
             Z"
          fill="#DD1B24"
        />
      </g>

      <line
        ref="bottomLine"
        x1="210"
        y1="390"
        x2="750"
        y2="390"
        stroke="#DD1B24"
        stroke-width="7"
        stroke-linecap="round"
      />

      <g ref="titleGroup">
        <text
          x="480"
          y="243"
          text-anchor="middle"
          dominant-baseline="middle"
          textLength="622"
          lengthAdjust="spacingAndGlyphs"
          fill="#FFFFFF"
          class="title-text"
        >
          RUKROV
        </text>
      </g>

      <g ref="subtitleGroup">
        <text
          x="480"
          y="330"
          text-anchor="middle"
          dominant-baseline="middle"
          textLength="622"
          lengthAdjust="spacingAndGlyphs"
          fill="#FFFFFF"
          class="subtitle-text"
        >
          СТРОИТЕЛЬНЫЕ СИСТЕМЫ
        </text>
      </g>

      <rect
        ref="shine"
        x="-240"
        y="145"
        width="150"
        height="280"
        fill="url(#shineGradient)"
        transform="skewX(-24)"
        clip-path="url(#logoClip)"
        opacity="0"
      />
    </svg>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

const root = ref(null)
const outerDiamond = ref(null)
const innerTop = ref(null)
const innerBottom = ref(null)
const redBrush = ref(null)
const blueBrush = ref(null)
const bottomLine = ref(null)
const titleGroup = ref(null)
const subtitleGroup = ref(null)
const shine = ref(null)

const setDrawState = (path) => {
  const length = path.getTotalLength()
  path.style.strokeDasharray = `${length}`
  path.style.strokeDashoffset = `${length}`
}

onMounted(() => {
  ;[outerDiamond.value, innerTop.value, innerBottom.value].forEach(setDrawState)

  gsap.set([redBrush.value, titleGroup.value], {
    x: -80,
    opacity: 0,
    transformOrigin: 'center center'
  })

  gsap.set([blueBrush.value, subtitleGroup.value], {
    x: 80,
    opacity: 0,
    transformOrigin: 'center center'
  })

  gsap.set(bottomLine.value, {
    scaleX: 0,
    transformOrigin: 'center center'
  })

  gsap.set(shine.value, {
    opacity: 0,
    x: 0
  })

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.to(outerDiamond.value, {
    strokeDashoffset: 0,
    duration: 0.8
  })
    .to(
      [innerTop.value, innerBottom.value],
      {
        strokeDashoffset: 0,
        duration: 0.35,
        stagger: 0.05
      },
      '-=0.25'
    )
    .to(
      blueBrush.value,
      {
        x: 0,
        opacity: 1,
        duration: 0.42
      },
      '-=0.05'
    )
    .to(
      redBrush.value,
      {
        x: 0,
        opacity: 1,
        duration: 0.45
      },
      '-=0.2'
    )
    .to(
      titleGroup.value,
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.4
      },
      '-=0.18'
    )
    .to(
      subtitleGroup.value,
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.35
      },
      '-=0.22'
    )
    .to(
      bottomLine.value,
      {
        scaleX: 1,
        duration: 0.3
      },
      '-=0.15'
    )
    .to(shine.value, {
      opacity: 1,
      duration: 0.1
    })
    .to(shine.value, {
      x: 1120,
      duration: 0.75,
      ease: 'power2.inOut'
    })
    .to(shine.value, {
      opacity: 0,
      duration: 0.15
    })
})
</script>

<style scoped>
.rukrov-logo {
  width: min(720px, 100%);
  margin: 0 auto;
}

.rukrov-svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
}

.title-text {
  font-size: 118px;
  font-weight: 900;
  letter-spacing: 0;
  font-family: Inter, Arial, sans-serif;
}

.subtitle-text {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 0;
  font-family: Inter, Arial, sans-serif;
}

@media (max-width: 640px) {
  .title-text {
    font-size: 94px;
  }

  .subtitle-text {
    font-size: 26px;
  }
}
</style>