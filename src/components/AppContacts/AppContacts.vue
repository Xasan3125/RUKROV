
<template>
  <div class="flex flex-col ">
    <p @click="copy(email)" class="text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)] mb-6 bg-black/80 rounded-2xl p-5 text-sm hover:text-lg duration-300 ease-in-out cursor-pointer flex justify-center"> {{ copied ? 'Скопировано!' : email }}</p>
    <div class="text-black p-6 rounded-2xl  shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)] bg-black/10 grid-cols-2 mx-auto flex flex-col justify-center items-center w-[200px]">
      <p class=" cursor-pointer text-center mb-4 border-b-1 pb-3">Нижний Новгород, Академическая 2</p>
      <p class="cursor-pointer">+7 (967) 714-13-13</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = 'rukrovnn@mail.ru'
const copied = ref(false)

const copy = async (value: string) => {
  await navigator.clipboard.writeText(value)
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>


<style scoped></style>
