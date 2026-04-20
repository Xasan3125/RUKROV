<template>
  <div class="container flex min-h-dvh flex-col justify-center items-center">
    <app-logo class="pointer-events-none"></app-logo>

    <app-background></app-background>
    <app-menu class="font-open z-30"></app-menu>
    <div
      class="absolute text-[12px] md:text-sm left-0 px-5 content-center justify-between bottom-2 flex w-full"
    >
      <span class="text-black z-20">ООО "РУКРОВ" 2024</span>
      <span class="text-black z-20">rukrovnn@mail.ru</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppMenu from "@/components/AppMenu/AppMenu.vue";
import { onMounted, ref } from "vue";
import AppBackground from "@/components/AppBackground/AppBackground.vue";
import AppLogo from "@/components/AppLogo/AppLogo.vue";

const isAdded = ref(false);
onMounted(() => {
  isAdded.value = false;
  requestAnimationFrame(() => {
    isAdded.value = true;
  });
});
</script>

<style scoped></style>
