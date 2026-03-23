<template>
  <div class="container flex min-h-dvh flex-col justify-center items-center">
    <h1
      class=" gap-2  uppercase text-4xl text-center absolute md:text-8xl lg:text-9xl flex my-50 font-extralight tracking-[0.5em]  text-black/90 transition-all duration-700"
    >
      <span
        v-for="(char, i) in text"
        :key="i"
        class="inline-block transition-all duration-500"
        :style="{
          transitionDelay: `${i * 100}ms`,
        }"
        :class="
          isAdded
            ? 'opacity-100 translate-y-0 blur-0'
            : 'opacity-0 translate-y-10 blur-md'
        "
      >
        {{ char }}
      </span>
    </h1>
    <app-menu></app-menu>
  </div>
</template>
<script setup lang="ts">
import AppMenu from "@/components/AppMenu/AppMenu.vue";
import { onMounted, ref } from "vue";

const text = "RUKROV";

const isAdded = ref(false);
onMounted(() => {
  isAdded.value = false;
  requestAnimationFrame(() => {
    isAdded.value = true;
  });
});
</script>

<style scoped></style>
