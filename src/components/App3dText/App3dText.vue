<script setup>
import { ref } from 'vue'
import AppBackground from "@/components/App3dText/AppBackground.vue";
import AppButton from "@/components/shared/AppButton.vue";

const showIntro = ref(true)
const leaving = ref(false)

function enterSite() {
  if (leaving.value) return

  leaving.value = true

  setTimeout(() => {
    showIntro.value = false
  }, 2000)
}
</script>

<template>
  <div>

    <section v-if="showIntro" class="intro" :class="{ leaving }">
      <div class="intro__content">
        <app-button class="intro__button uppercase w-40 h-20 text-2xl" @click="enterSite">
          войти
        </app-button>
      </div>
      <app-background></app-background>
      <div class="intro__diamond "></div>
    </section>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.intro {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #ffffff;
  overflow: hidden;
  opacity: 1;
}

/* контент */
.intro__content {
  position: relative;
  z-index: 3;
  height: 100%;
  display: grid;
  place-items: center;
}

/* кнопка */
.intro__button {
  padding: 16px 32px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background: transparent;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.4s ease;
}

.intro__button:hover {
  transform: scale(1.05);
}

/* РОМБ с верхним и нижним углом ~120° */
.intro__diamond {
  position: absolute;
  left: 50%;
  top: 50%;

  width: 120px;
  aspect-ratio: 1.732 / 1;

  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;

  background: #fff;
  clip-path: polygon(
    50% 0%,
    100% 50%,
    50% 100%,
    0% 50%
  );

  z-index: 2;
  opacity: 0;

  will-change: transform, opacity;
}

/* мягкое свечение */
.intro__diamond::before {
  content: "";
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent 70%);
  filter: blur(30px);
  opacity: 0;
  transition: opacity 0.6s ease;
}

/* запуск */
.intro.leaving .intro__button {
  opacity: 0;
  transform: scale(0.9);
}

/* рост ромба */
.intro.leaving .intro__diamond {
  opacity: 1;
  transform: translate(-50%, -50%) scale(80);
  transition:
    transform 8s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
}

/* включаем glow */
.intro.leaving .intro__diamond::before {
  opacity: 1;
}

/* плавное исчезновение */
.intro.leaving {
  animation: fadeAll 0.7s ease forwards;
  animation-delay: 1.9s;
}

@keyframes fadeAll {
  to {
    opacity: 0;
  }
}
</style>