<template>
  <div class="flex flex-col px-10 lg:px-25">
    <h3
      class="text-center text-xl lg:text-3xl font-bold text-black mb-5 md:mb-10 mx-auto"
    >
      Строительная кровельная система RUKROV
    </h3>
    <h4
      class="text-center text-sm lg:text-lg text-black/60 mb-5 md:w-120 mx-auto"
    >
      Инженерное решение из 4-х компонентов для создания сверхпрочного
      гидроизоляционного ковра.
    </h4>
    <img src="/image/image-4-steps.png" class="w-full mb-10" alt="steps" />
    <app-button class="mb-4 border-[1px]" @click="useModal.openModal()">Подобрать систему под объект</app-button>

    <p class="text-sm lg:text-lg mb-5 text-black/60">
      Система RUKROV — это не просто набор материалов, а выверенный химический
      процесс. Здесь описано, как взаимодействие грунта, армирования и
      каучуковых составов создает монолитную защиту даже на самых сложных узлах
      и вертикальных конструкциях.
    </p>
    <h4 class="text-black text-xl lg:text-3xl mb-3">
      Преимущества технологии:
    </h4>
    <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-4">
      <li class="list-disc">
        <p>
          <span class="font-bold">Работа с вертикалями:</span> Высокая вязкость
          составов позволяет работать на парапетах и вентшахтах без подтеков и
          сползания материала.
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">Герметизация 360°:</span> Жидкая форма состава
          позволяет надежно «залить» воронки и сложные примыкания, где
          невозможно качественно приклеить рулонную латку.
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">3D-адгезия:</span> Покрытие держится на
          вертикальных конструкциях за счет прямой химической связи, а не
          механического крепежа.
        </p>
      </li>
    </ul>
    <h4 class="text-black text-xl lg:text-3xl mb-3">
      Как устроена система (поэтапно):
    </h4>
    <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-6">
      <li class="list-decimal">
        <p>
          <span class="font-bold">Адгезионная подготовка (RUKROV 101):</span>
          Двухкомпонентный грунт проникает в поры бетона или битума, создавая
          «мертвую хватку» для системы.
        </p>
      </li>
      <li class="list-decimal">
        <p>
          <span class="font-bold">Промежуточный слой:</span> Первый слой
          состава, который служит химической «постелью» для армирующего полотна.
        </p>
      </li>
      <li class="list-decimal">
        <p>
          <span class="font-bold">Усиление узлов (FLEX 512):</span>
          Синтетический скелет в зонах риска (швы, углы, воронки),
          распределяющий нагрузку
        </p>
      </li>
      <li class="list-decimal">
        <p>
          <span class="font-bold">Бесшовный барьер (201/203):</span> Финишный
          слой, формирующий итоговую эластичную мембрану.
        </p>
      </li>
    </ul>
    <h4 class="text-black text-xl lg:text-3xl mb-3">Линейка продуктов:</h4>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 md:gap-8 text-black"
    >
      <li
        v-for="(card) in cardInfo"
        :key="card.title"
        class="mb-4 md:mb-0"
        :class="card.span ? 'md:col-span-2' : ''"
      >
        <app-product-card
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AppProductCard from "@/components/AppProduct/AppProductCard/AppProductCard.vue";
import AppButton from "@/components/shared/AppButton.vue";

import { useModalStore } from "@/components/AppModal/useModal";
const useModal = useModalStore()

interface IProduct {
  title: string;
  description: string;
  image: string;
  span?: boolean;
}

const cardInfo: IProduct[] = [
  {
    title: "RUKROV 203",
    description:
      "Быстрее на больших площадях: каучуковый состав с фиброволокном, который часто позволяет работать без сплошного армирования и усиливать тканью только узлы риска.",
    image: "./image/image-203.png",
  },
  {
    title: "RUKROV 201",
    description:
      "Универсальная эластичная мембрана: делает прочный водонепроницаемый слой на разных основаниях, хорошо держит трещины/вибрации и подходит для типовых задач.",
    image: "./image/image-201.png",
  },
  {
    title: "RUKROV 101",
    description:
      "Сцепка и упрочнение основания: пропитывает/обеспыливает и резко улучшает адгезию под дальнейшие слои.",
    image: "./image/image-101.png",
    span: true,
  },
];
</script>

<style scoped></style>
