<template>
  <button
    class="group relative cursor-pointer w-8 h-8 flex items-center justify-center duration-300 hover:bg-black p-6 rounded-lg "
  >
    <span
      class="absolute w-6 h-0.5 bg-black  transition-all duration-300 group-hover:bg-white"
      :class="isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'"
    />
    <span
      class="absolute w-6 h-0.5 bg-black  transition-all duration-300 group-hover:bg-white"
      :class="isOpen ? 'opacity-0' : 'opacity-100'"
    />
    <span
      class="absolute w-6 h-0.5 bg-black  transition-all duration-300 group-hover:bg-white"
      :class="isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'"
    />
  </button>
</template>

<script setup lang="ts">

const {isOpen} = defineProps<{
  isOpen: boolean
}>();




</script>
