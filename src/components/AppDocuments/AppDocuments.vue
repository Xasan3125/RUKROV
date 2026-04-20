<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import AppIcon from "@/components/shared/AppIcon.vue";

const openPdf = (name: string) => {
  window.open(`${import.meta.env.BASE_URL}documents/${name}.pdf`, "_blank");
};

const docs = [
  { name: "FLEX 512 АРМИРУЮЩАЯ ПОЛИЭФИРНАЯ ТКАНЬ", file: "tds-rukrov-flex-512" },
  { name: "101 Грунт глубокого проникновения двухкомпонентный", file: "tds-rukrov-101" },
  { name: "201 Гидроизоляционный каучуковый состав", file: "tds-rukrov-201" },
  { name: "203 Гидроизоляционный каучуковый состав «RUKROV-203» с фиброволокном", file: "tds-rukrov-203" },
  { name: "Свидетельство о государственной регистрации продукта", file: "SGR-200" },
  { name: "Протокол испытаний 1", file: "protocol-test-1" },
  { name: "Протокол испытаний 2", file: "protocol-test-2" },
  { name: "Протокол лабораторных испытаний", file: "pi-200" },
  { name: "Экспертное заключение", file: "e-z-200" },
];
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
      <li v-for="item in docs" :key="item.name">
        <app-button
          @click="openPdf(item.file)"
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

