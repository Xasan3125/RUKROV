<template>
  <div
    class="mt-auto mb-20 md:mb-0 w-full flex justify-center pointer-events-none z-10 relative "
  >
    <div
      class="pointer-events-auto rounded-xl px-2 lg:px-6 py-6 transition-all duration-300 flex  flex-col items-stretch"
      :class="containerClass"
    >
      <!-- Кнопка, всегда снизу -->


      <!-- Зона меню / контента -->
      <div
        @transitionend="onPanelTransitionEnd"
        class="overflow-hidden transition-all duration-300 ease-out z-10 "
        :class="[
          useAppMenu.isOpen ? ' opacity-100 ' : ' opacity-0 max-h-0',
          activeSection
            ? 'no-scrollbar overflow-y-auto max-h-[min(83vh,1300px)]'
            : 'overflow-y-hidden max-h-[500px]',
        ]"
      >
        <!-- Меню навигации -->
        <div v-if="!activeSection && useAppMenu.isOpen" class="flex flex-col gap-1 items-stretch ">
          <app-button
            class="text-center whitespace-nowrap text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black  font-medium"
            @click="openSection('solution')"
          >Наши возможности</app-button>
          <app-button
            class="text-center text-sm  md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black  font-medium"
            @click="openSection('system')"
          >
            Продукция и технология
          </app-button>
          <app-button
            class="text-center text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black  font-medium"
            @click="openSection('about')"
          >
            О нас
          </app-button>
        </div>

        <!-- Контент выбранной секции -->
        <div
          v-else
          class="mt-2 pb-1 text-sm leading-relaxed transition-all duration-300"
          :class="showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
        >

          <!-- сюда вставишь свой реальный контент -->
          <div class="flex flex-col" v-if="activeSection === 'solution'">
            <!-- Контент блока "Решение" -->
            <app-solution>  </app-solution>
          </div>

          <div v-else-if="activeSection === 'system'">
            <!-- Контент блока "Система" -->
            <app-product></app-product>
          </div>

          <div v-else-if="activeSection === 'about'">
            <!-- Контент блока "О нас" -->
            <app-about-us></app-about-us>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <app-button
          class="cursor-pointer duration-400 z-10 mx-auto  px-6 py-2 rounded-full text-black hover:text-white hover:bg-black transition-colors text-sm md:text-lg font-medium"
          @click="toggleOpen"
          v-if="!useAppMenu.isOpen"
        >

              Навигация
        </app-button>
        <app-button
          class="cursor-pointer duration-400 z-10 mx-auto  px-6 py-2 rounded-full text-black hover:text-white hover:bg-black transition-colors text-sm md:text-lg font-medium"
          @click="toggleOpen"
          :class="activeSection && isExpanded ? 'mt-6' : 'mt-2'"
          v-else
        >
          Закрыть
        </app-button>

          <app-button   v-if="activeSection && isExpanded"
            class="  mx-auto mt-6 px-6 py-2  rounded-full text-black hover:text-white hover:bg-black transition-colors text-sm md:text-lg font-medium"
            @click="activeSection = null"
          >
            Назад к меню
          </app-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import AppButton from "@/components/shared/AppButton.vue";
import { useAppMenuStore } from "./useAppMenu.ts";
import AppSolution from "@/components/AppSolution/AppSolution.vue";
import AppProduct from "@/components/AppProduct/AppProduct.vue";
import AppAboutUs from "@/components/AppAboutUs/AppAboutUs.vue";

const useAppMenu = useAppMenuStore();
const activeSection = ref<null | "solution" | "system" | "about">(null);
const showContent = ref(false);
const isExpanded = ref(false);

const toggleOpen = () => {
  if (!useAppMenu.isOpen) {
    useAppMenu.isOpen = true;
    activeSection.value = null;
    showContent.value = false;
  } else if (activeSection.value) {
    activeSection.value = null;
    useAppMenu.isOpen = false;
    showContent.value = false;
  } else {
    useAppMenu.isOpen = false;
    showContent.value = false;
  }
};

const openSection = (section: "solution" | "system" | "about") => {
  activeSection.value = section;
  useAppMenu.isOpen = true;
  showContent.value = false;
  isExpanded.value = false;
};

const onPanelTransitionEnd = (e: TransitionEvent) => {
  // интересует только изменение max-height/height панели
  if (e.propertyName !== "max-height" && e.propertyName !== "height") return;
  if (useAppMenu.isOpen && activeSection.value) {
    isExpanded.value = true;
    setTimeout(() => {
      showContent.value = true;
    }, 50);
  }
};

const containerClass = computed(() => {
  if (!useAppMenu.isOpen) return "max-w-[160px] w-full pb-2 text-black ";
  if (activeSection.value)
    return "md:max-w-[1200px] w-full pb-6 pt-4 bg-white text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)]";
  return "max-w-[320px] md:max-w-[400px] w-full pb-4 pt-4 bg-white text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)]";
});


</script>

<style scoped></style>
