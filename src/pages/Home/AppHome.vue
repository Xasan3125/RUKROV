<template>
  <div class="container flex h-screen flex-col justify-center items-center">
    <h1 class="text-4xl text-center absolute md:text-8xl lg:text-9xl flex my-50 font-extralight tracking-[0.5em] uppercase text-black/90 transition-all duration-700"
    :class="isAdded ? 'opacity-90 translate-y-0 blur-0' : 'opacity-0 translate-y-5 blur-sm'"
    >RUKROV</h1>
    <app-menu></app-menu>
  </div>
</template>
<script setup lang="ts">
import AppMenu from "@/components/AppMenu/AppMenu.vue";
import { onMounted, ref } from "vue";

const isAdded = ref(false);
onMounted(() => {
  isAdded.value = false;
  requestAnimationFrame(() => {
    isAdded.value = true;
  });
})




</script>

<style scoped></style>
