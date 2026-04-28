<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import AppIcon from "@/components/shared/AppIcon.vue";
import { useAppDocuments } from "@/components/AppDocuments/AppDocuments.ts";

const useDoc = useAppDocuments()
</script>

<template>
  <div class="text-black px-4">
    <h3 class="text-center text-xl lg:text-3xl font-bold mb-5 md:mb-16 mx-auto">
      Документация
    </h3>

    <ul
      class="
        grid
        gap-6
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      <li v-for="item in useDoc.docs" :key="item.name">
        <app-button
          @click="useDoc.openPdf(item.file)"
          class="
          px-6
          py-6
            w-full
            h-full
            text-center
            break-words
            flex
            flex-col
            text-black hover:text-white
          "
        >
          <app-icon class="mb-4" svg-name="icon-doc"></app-icon>
          <span class="flex text-wrap items-center px-2 py-3">{{ item.name }}
          </span>
        </app-button>
      </li>
    </ul>
  </div>
</template>

