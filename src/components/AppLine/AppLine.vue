
<template>
  <section class="intro">
    <svg
      class="intro__svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <!-- линии -->
      <line
        v-for="(line, i) in lines"
        :key="i"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        class="line"
      />
    </svg>


  </section>
</template>

<script setup>
import { computed } from 'vue'

const segmentsPerSide = 8 // плотность линий

const lines = computed(() => {
  const result = []

  const step = 100 / segmentsPerSide

  // TOP
  for (let i = 0; i <= segmentsPerSide; i++) {
    result.push({
      x1: i * step,
      y1: 0,
      x2: 50,
      y2: 50,
    })
  }

  // RIGHT
  for (let i = 0; i <= segmentsPerSide; i++) {
    result.push({
      x1: 100,
      y1: i * step,
      x2: 50,
      y2: 50,
    })
  }

  // BOTTOM
  for (let i = 0; i <= segmentsPerSide; i++) {
    result.push({
      x1: i * step,
      y1: 100,
      x2: 50,
      y2: 50,
    })
  }

  // LEFT
  for (let i = 0; i <= segmentsPerSide; i++) {
    result.push({
      x1: 0,
      y1: i * step,
      x2: 50,
      y2: 50,
    })
  }

  return result
})
</script>


<style scoped>
.intro {
  position: fixed;
  inset: 0;
  background: #ffffff;
}

.intro__svg {
  width: 100%;
  height: 100%;
}

.line {
  stroke: rgba(8, 8, 8, 0.2);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
</style>