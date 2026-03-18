<template>
  <div class="flex  flex-col items-center w-full  h-[474px] rounded-xl shadow-[0px_0px_26px_8px_rgba(34,60,80,0.08)] ">
    <img class="h-80" :src="image" :alt="title">
    <h5 class="text-lg font-bold mb-2">{{title}}</h5>
    <p class="text-sm text-gray-500 text-center mb-4  md:w-[363px]">{{description}}</p>
    <app-button class="mt-auto text-center text-sm  md:text-lg px-3 border-[1px] py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black  font-medium duration-200" @click="useModal.openModal()">ПОПРОБОВАТЬ БЕСПЛАТНО →</app-button>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import { useModalStore } from "@/components/AppModal/useModal";

const useModal = useModalStore()
defineProps<{
  title: string
  description: string
  image: string

}>()
</script>

<style scoped></style>
