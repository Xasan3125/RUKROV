<template>
  <div class="px-3 md:px-10 lg:px-25 flex flex-col">
    <h3 class="text-center text-xl lg:text-3xl font-bold text-black mb-5 md:mb-10 mx-auto">
      Наши возможности
    </h3>
    <h4 class="text-center text-sm lg:text-lg text-black/60 mb-5 md:w-120 mx-auto">
      Бесшовное водонепроницаемое покрытие, которое наносится поверх старого
      основания и исключает слабые стыки.
    </h4>
    <img src="/image/image-brush-hand.jpg" loading="lazy" class="w-full mb-15 rounded-xl " alt="logo" />

    <p class="text-sm lg:text-lg mb-18 text-black/60">
      В этом разделе мы показываем, как технология RUKROV меняет подход к
      эксплуатации кровель. Мы решаем задачи бизнеса и МКД там, где традиционные
      методы требуют огромных затрат на демонтаж, логистику и полную остановку
      рабочих процессов.
    </p>
    <div class=" grid grid-cols-1 sm:grid-cols-2 gap-4  mb-18">
      <img src="/image/do-1.JPG" loading="lazy" class="w-full rounded-2xl " alt="roof" />
      <img src="/image/posle-1.JPG" loading="lazy" class="w-full rounded-2xl " alt="roof" />
      <img src="/image/do-3.JPG" loading="lazy" class="w-full rounded-2xl" alt="roof" />
      <img src="/image/posle-3.JPG" loading="lazy" class="w-full rounded-2xl" alt="roof" />
    </div>

    <div class="mb-15">
      <h4 class="text-black text-xl md:text-3xl mb-3 font-bold">Какие задачи мы решаем:</h4>
      <ul class="text-black text-sm lg:text-xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6  pl-3">
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Кровли</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc"> Плоские кровли (битумные, рулонные, мастичные)</li>
            <li class="list-disc">Мембранные кровли (PVC, TPO, EPDM)</li>
            <li class="list-disc">Металлические кровли (фальц, профлист, оцинковка)</li>
            <li class="list-disc">Бетонные кровли и стяжки</li>
            <li class="list-disc">Эксплуатируемые кровли (паркинги, террасы)</li>
            <li class="list-disc">Зелёные кровли</li>
          </ul>
        </li>
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Узлы и сложные участки</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc">Примыкания (парапеты, стены, шахты)</li>
            <li class="list-disc">Швы и стыки покрытий</li>
            <li class="list-disc">Трещины и разрывы</li>
            <li class="list-disc">Воронки и водостоки</li>
            <li class="list-disc">Проходки (вентиляция, кабели, трубы)</li>
          </ul>
        </li>
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Подземные и бетонные конструкции</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc">Фундаменты (плиты, стены)</li>
            <li class="list-disc">Подвалы и цоколи</li>
            <li class="list-disc">Бетонные резервуары и ёмкости</li>
            <li class="list-disc">Воронки и водостоки</li>
            <li class="list-disc">Проходки (вентиляция, кабели, трубы)</li>
          </ul>
        </li>
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Влажные зоны и вода</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc">Бассейны</li>
            <li class="list-disc">Искусственные водоёмы</li>
            <li class="list-disc">Санузлы и душевые</li>
          </ul>
        </li>
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Террасы и открытые зоны</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc">Балконы и лоджии</li>
            <li class="list-disc">Террасы</li>
            <li class="list-disc">Стилобаты</li>
          </ul>
        </li>
        <li class="flex flex-col">
          <p class="font-bold text-xl mb-2">Промышленные и нагруженные объекты</p>
          <ul class="text-sm lg:text-xl text-black/60 flex flex-col">
            <li class="list-disc">Паркинги</li>
            <li class="list-disc">Мосты</li>
            <li class="list-disc">Пандусы</li>
            <li class="list-disc">Промышленные здания и склады</li>
          </ul>
        </li>
      </ul>
    </div>
    <app-button @click="useDocs.openPdf('design-system')" class="mb-15   border-1 w-full">Альбом технических решений RUKROV</app-button>
    <div class="mb-15">
      <h4 class="text-black text-2xl md:text-3xl mb-3 font-bold">Ваши преимущества:</h4>
      <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-4">
        <li class="list-disc ">
          <p class="">
            <span class="font-bold ">Экономия до 50%:</span> Ремонт идет без
            демонтажа «пирога» и затрат на вывоз мусора.
          </p>
        </li>
        <li class="list-disc">
          <p>
            <span class="font-bold">Срок службы 15+ лет:</span> Монолитная
            мембрана устойчива к застою воды и жесткому климату.
          </p>
        </li>
        <li class="list-disc">
          <p>
            <span class="font-bold">Прозрачный бюджет:</span> Фиксируем смету
            после бесплатной диагностики и теста на вашем объекте.
          </p>
        </li>
        <li class="list-disc">
          <p>
            <span class="font-bold">Выгода для ДУК и МКД:</span> Технология
            вписывается в бюджеты текущего ремонта, давая результат капитального
            и снимая жалобы жильцов на годы.
          </p>
        </li>
      </ul>
    </div>

    <video class="mb-6" autoplay loop muted playsinline webkit-playsinline src="/video/ai_can.mp4"></video>

    <app-button
      class="mt-auto w-full text-center text-sm md:text-lg px-3 border-[1px] py-2 rounded-2xl bg-transparent text-black hover:text-white hover:bg-black font-medium duration-200"
      @click="useModal.openModal()"
      >Заказать бесплатную диагностику</app-button
    >
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/shared/AppButton.vue";
import { useModalStore } from "@/components/AppModal/useModal";
import { useAppDocuments } from "@/components/AppDocuments/AppDocuments.ts";
const useModal = useModalStore()
const useDocs = useAppDocuments()
</script>

<style scoped></style>
