<template>
  <div class="flex flex-col justify-center bg-black/5 p-5 rounded-xl w-62 h-[345px]">
    <h3 class="font-bold text-lg text-black mb-3">{{title}}</h3>
    <p class="text-sm text-black/55 mb-3">{{description}}</p>
    <img :src='imageUrl' loading="lazy" :alt="title">
  </div>
</template>

<script setup lang="ts">
defineProps<({
  title: string
  description:string
  imageUrl: string
})>()
</script>

<style scoped></style>
