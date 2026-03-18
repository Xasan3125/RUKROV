<template>
  <svg aria-hidden="true">
    <use :xlink:href="`/sprite/sprite.svg#${svgName}`"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  svgName: string;
}>();
</script>

<style lang="scss" scoped></style>
