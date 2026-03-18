<template>
  <svg aria-hidden="true">
    <use :xlink:href="`/sprite/sprite.svg#${props.svgName}`"></use>
  </svg>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  svgName: { type: String, required: true },
});
</script>

<style lang="scss" scoped></style>
