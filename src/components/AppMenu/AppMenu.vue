<template>
  <div
    id="app-menu"
    class="w-full flex duration-500 justify-center pointer-events-none z-10 relative"
    :class="[
      appMenu.activeSection && appMenu.activeSection !== 'contacts'
        ? 'mb-0 mt-0 flex-1'
        : 'md:mb-20 mt-auto',
    ]"
  >
    <div
      class="pointer-events-auto rounded-xl px-2 lg:px-6 py-4 transition-all duration-300 flex flex-col items-stretch"
      :class="appMenu.containerClass"
    >
      <!-- Кнопка, всегда снизу -->

      <div class="flex justify-between">
        <app-button
          v-if="appMenu.activeSection"
          @click="appMenu.activeSection = null"
          class="w-10 h-10 md:w-15 md:h-15"
          ><app-icon svg-name="icon-arrow-left" ></app-icon></app-button
        >
        <app-button
          v-if="appMenu.activeSection"
          @click="appMenu.toggleOpen"
          class="w-10 h-10 md:w-15 md:h-15"
          >
          <app-icon svg-name="icon-close"></app-icon>
        </app-button
        >
      </div>
      <!-- Зона меню / контента -->
      <div
        class="overflow-hidden transition-all duration-300 ease-out z-10"
        :class="[
          appMenu.isOpen ? ' opacity-100 ' : ' opacity-0 max-h-0',
          appMenu.activeSection
            ? 'no-scrollbar overflow-y-auto max-h-[min(90vh,2000px)]'
            : 'overflow-y-hidden max-h-[500px]',
        ]"
      >
        <!-- Меню навигации -->
        <div
          v-if="!appMenu.activeSection && appMenu.isOpen"
          class="flex flex-col gap-1 items-stretch"
        >
          <app-button
            class="text-center whitespace-nowrap text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium"
            @click="appMenu.openSection('solution')"
            >Наши возможности</app-button
          >
          <app-button
            class="text-center text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium"
            @click="appMenu.openSection('system')"
          >
            Продукция и технология
          </app-button>
          <app-button
            class="text-center text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium"
            @click="appMenu.openSection('about')"
          >
            О нас
          </app-button>
          <app-button
            class="text-center text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium"
            @click="appMenu.openSection('documentation')"
          >
            Документация
          </app-button>
          <app-button
            class="text-center text-sm md:text-lg px-3 py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium"
            @click="appMenu.openSection('contacts')"
          >
            Контакты
          </app-button>
        </div>

        <!-- Контент выбранной секции -->
        <div
          v-else
          class="mt-2 text-black pb-1 text-sm leading-relaxed transition-all duration-300"
          :class="
            appMenu.showContent
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3'
          "
        >
          <!-- сюда вставишь свой реальный контент -->
          <div
            class="flex flex-col"
            v-if="appMenu.activeSection === 'solution'"
          >
            <!-- Контент блока "Решение" -->
            <app-solution> </app-solution>
          </div>

          <div v-else-if="appMenu.activeSection === 'system'">
            <!-- Контент блока "Система" -->
            <app-product></app-product>
          </div>

          <div v-else-if="appMenu.activeSection === 'about'">
            <!-- Контент блока "О нас" -->
            <app-about-us></app-about-us>
          </div>
          <div v-else-if="appMenu.activeSection === 'documentation'">
            <app-documents></app-documents>
          </div>

          <div v-else-if="appMenu.activeSection === 'contacts'">
            <app-contacts></app-contacts>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <app-burger-button
          v-if="!appMenu.activeSection"
          @click="appMenu.toggleOpen"
          aria-label="menu"
          :is-open="appMenu.isOpen"
          class="mt-2"
        ></app-burger-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import { useAppMenuStore } from "./useAppMenu.ts";
import AppSolution from "@/components/AppSolution/AppSolution.vue";
import AppProduct from "@/components/AppProduct/AppProduct.vue";
import AppAboutUs from "@/components/AppAboutUs/AppAboutUs.vue";
import AppBurgerButton from "@/components/shared/AppBurgerButton.vue";
import AppContacts from "@/components/AppContacts/AppContacts.vue";
import AppDocuments from "@/components/AppDocuments/AppDocuments.vue";
import AppIcon from "@/components/shared/AppIcon.vue";

const appMenu = useAppMenuStore();
</script>

<style scoped></style>
