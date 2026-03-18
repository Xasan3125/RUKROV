<template>
  <div class="accordion">
    <button class="accordion__header " @click="isOpen = !isOpen">
      <span class="accordion__title font-bold text-sm text-left">
        <slot name="title" />
      </span>

      <span
        class="accordion__icon"
        :class="{ 'accordion__icon--open': isOpen }"
      >
        <app-icon
          class="accordion__icon"
          svg-name="icon-arrow-right"
        ></app-icon>
      </span>
    </button>

    <transition name="accordion">
      <div v-if="isOpen" class="accordion__body">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AppIcon from "@/components/AppIcon.vue";

const isOpen = ref(false);
</script>

<style lang="scss" src="./AppAccordion.scss"></style>
