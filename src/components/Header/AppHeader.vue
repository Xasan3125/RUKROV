<template>
 <div class="container">
   <div class="py-10">
     <div class="header flex bg-black/6 rounded-4xl gap-6 justify-center w-2xs sm:w-md mx-auto p-3 absolute left-1/2 -translate-x-1/2 z-50 ">
       <app-button class="font-unbounded font-size-sm text-xs sm:text-lg font-medium">ДОМОЙ</app-button>
       <app-button class="font-unbounded font-size-sm text-xs sm:text-lg font-medium">РЕШЕНИЕ</app-button>
       <app-button class="font-unbounded font-size-sm text-xs sm:text-lg font-medium">СИСТЕМА</app-button>
       <app-button class="font-unbounded font-size-sm text-xs sm:text-lg font-medium">О НАС</app-button>
     </div>
   </div>

 </div>
</template>

<script setup lang="ts">

import AppButton from "@/components/shared/AppButton.vue";
</script>

<style scoped>

</style>