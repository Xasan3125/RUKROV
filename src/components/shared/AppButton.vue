<template>
  <component :is="to ? 'RouterLink' : 'button'" :to="to" class="inline-flex items-center justify-center whitespace-nowrap
           cursor-pointer text-center text-sm md:text-lg
           px-3 py-2 rounded-2xl bg-transparent text-black
           hover:text-white hover:bg-black font-medium duration-200">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{
    to?: String | RouteLocationRaw;
  }>(),
  {
    to: "",
  },
);
</script>
<style lang="scss"></style>
