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
      Российский завод-изготовитель систем жидкой гидроизоляции с полным контролем
      качества.
    </h4>
    <img src="/image/image-storage.png" class="w-full mb-10" alt="storage" />
    <p class="text-sm lg:text-lg mb-5 text-black/60">
      RUKROV — это не посредник, а производитель. Мы объединяем собственные
      лабораторные разработки, промышленную мощность и многолетний опыт работы на
      объектах федерального значения, обеспечивая полную техническую поддержку на
      каждом этапе проекта.
    </p>
    <h4 class="text-black text-xl lg:text-3xl mb-3">
      Почему нам доверяют:
    </h4>
    <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-4">
      <li class="list-disc">
        <p>
          <span class="font-bold"> Прямая цена:</span> Собственное производство в РФ исключает наценки дилеров и
          зависимость от импортных поставок.
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">Опыт на знаковых объектах:</span> Наши системы защищают Стадион «Нижний
          Новгород» (ЧМ-2018), ТЦ «РИО», ЖК «Маршал Град» и «KM Tower».
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">Полный регламент:</span> Технология соответствует СП 17.13330. Предоставляем
          полный пакет документов (сертификаты, пожарные декларации) для
          технадзора.
        </p>
      </li>
    </ul>
    <h4 class="text-black text-xl lg:text-3xl mb-3">
      Результат в цифрах:
    </h4>
    <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-8">
      <li class="list-disc">
        <p>
          <span class="font-bold"> 100% герметичность</span> сложных узлов примыканий.
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">15+ лет</span> реальной эксплуатации в суровом климате РФ.
        </p>
      </li>
      <li class="list-disc">
        <p>
          <span class="font-bold">Собственная лаборатория:</span> контроль каждой партии материала.
        </p>
      </li>
    </ul>

    <div class="mb-10"><app-slider ></app-slider></div>

    <app-button class="w-120 mx-auto h-20 border-[1px]" @click="useModal.openModal()">Скачать документы и связаться с менеджером</app-button>
  </div>
</template>

<script setup lang="ts">
import AppSlider from "@/components/AppSlider/AppSlider.vue";
import AppButton from "@/components/shared/AppButton.vue";
import { useModalStore } from "@/components/AppModal/useModal";
const useModal = useModalStore()


</script>

<style scoped></style>
