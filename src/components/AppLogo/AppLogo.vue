<template>
  <section class="logo-section">
    <div class="logo-bg" aria-hidden="true">
      <div class="logo-glow glow-back" />
      <div class="logo-glow glow-front" />
      <div class="logo-glow glow-soft" />
    </div>

    <div class="logo-wrap" :class="{ 'is-visible': isVisible }">
      <img
        :src="src"
        :alt="alt"
        class="logo-image"
        draggable="false"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  src?: string;
  alt?: string;
}

withDefaults(defineProps<Props>(), {
  src: "./image/image-logo-2d.png",
  alt: "RUKROV строительные системы",
});

const isVisible = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    isVisible.value = true;
  });
});
</script>

<style scoped>
.logo-section {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: clamp(220px, 32vw, 420px);
  overflow: visible;
}

.logo-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.logo-wrap {
  position: relative;
  z-index: 2;
  width: clamp(260px, 52vw, 760px);
  opacity: 0;
  transform: translateY(42px) scale(0.9);
  filter: blur(10px);

  transition:
    opacity 0.9s ease,
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
    filter 1s ease;
  will-change: transform, opacity, filter;
}

.logo-wrap.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  animation: floatLogo 5.5s ease-in-out 1s infinite;
}

.logo-image {
  position: relative;
  z-index: 2;
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  user-select: none;

  filter:
    drop-shadow(0 0 10px rgba(255, 255, 255, 0.08))
    drop-shadow(0 0 22px rgba(255, 255, 255, 0.10))
    drop-shadow(0 0 42px rgba(120, 120, 120, 0.16))
    drop-shadow(0 14px 36px rgba(0, 0, 0, 0.45));

  animation: logoPulse 4.6s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  opacity: 0;
  filter: blur(60px);
  animation: glowIn 1s ease forwards;
}

.glow-back {
  width: clamp(220px, 58vw, 900px);
  height: clamp(90px, 16vw, 240px);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(140, 140, 140, 0.10) 35%,
    rgba(40, 40, 40, 0.06) 55%,
    rgba(0, 0, 0, 0) 75%
  );
  animation-delay: 0.15s;
}

.glow-front {
  width: clamp(180px, 46vw, 700px);
  height: clamp(70px, 11vw, 160px);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(180, 180, 180, 0.09) 42%,
    rgba(0, 0, 0, 0) 74%
  );
  animation-delay: 0.3s;
}

.glow-soft {
  width: clamp(200px, 38vw, 560px);
  height: clamp(120px, 18vw, 240px);
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(90, 90, 90, 0.06) 45%,
    rgba(0, 0, 0, 0) 72%
  );
  transform: translate(-50%, -42%);
  animation-delay: 0.45s;
}

@keyframes glowIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes floatLogo {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.012);
  }
}

@keyframes logoPulse {
  0%,
  100% {
    filter:
      drop-shadow(0 0 10px rgba(255, 255, 255, 0.08))
      drop-shadow(0 0 22px rgba(255, 255, 255, 0.10))
      drop-shadow(0 0 42px rgba(120, 120, 120, 0.16))
      drop-shadow(0 14px 36px rgba(0, 0, 0, 0.45));
  }
  50% {
    filter:
      drop-shadow(0 0 12px rgba(255, 255, 255, 0.13))
      drop-shadow(0 0 28px rgba(255, 255, 255, 0.14))
      drop-shadow(0 0 56px rgba(150, 150, 150, 0.20))
      drop-shadow(0 14px 36px rgba(0, 0, 0, 0.52));
  }
}

@media (max-width: 1024px) {
  .logo-wrap {
    width: clamp(240px, 64vw, 620px);
  }

  .logo-image {
    filter:
      drop-shadow(0 0 8px rgba(255, 255, 255, 0.07))
      drop-shadow(0 0 18px rgba(255, 255, 255, 0.09))
      drop-shadow(0 0 34px rgba(120, 120, 120, 0.13))
      drop-shadow(0 10px 24px rgba(0, 0, 0, 0.4));
  }
}

@media (max-width: 768px) {
  .logo-section {
    min-height: clamp(180px, 44vw, 280px);
  }

  .logo-wrap {
    width: clamp(210px, 82vw, 500px);
    transform: translateY(26px) scale(0.94);
  }

  .logo-wrap.is-visible {
    transform: translateY(0) scale(1);
  }

  .logo-image {
    filter:
      drop-shadow(0 0 6px rgba(255, 255, 255, 0.06))
      drop-shadow(0 0 14px rgba(255, 255, 255, 0.08))
      drop-shadow(0 0 26px rgba(120, 120, 120, 0.12))
      drop-shadow(0 8px 18px rgba(0, 0, 0, 0.36));
  }

  .glow-back {
    width: clamp(180px, 84vw, 520px);
    height: clamp(70px, 22vw, 170px);
    filter: blur(42px);
  }

  .glow-front {
    width: clamp(150px, 68vw, 420px);
    height: clamp(55px, 16vw, 120px);
    filter: blur(34px);
  }

  .glow-soft {
    width: clamp(160px, 72vw, 430px);
    height: clamp(90px, 24vw, 180px);
    filter: blur(38px);
  }
}

@media (max-width: 480px) {
  .logo-wrap {
    width: min(88vw, 360px);
  }

  .logo-image {
    filter:
      drop-shadow(0 0 4px rgba(255, 255, 255, 0.05))
      drop-shadow(0 0 10px rgba(255, 255, 255, 0.07))
      drop-shadow(0 0 18px rgba(120, 120, 120, 0.10))
      drop-shadow(0 6px 14px rgba(0, 0, 0, 0.34));
  }
}

@media (prefers-reduced-motion: reduce) {
  .logo-wrap,
  .logo-wrap.is-visible,
  .logo-image,
  .logo-glow {
    animation: none !important;
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
    filter: none !important;
  }
}
</style>