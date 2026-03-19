<template>
  <div class="px-3 md:px-10 lg:px-25">
    <h3 class="text-center text-xl lg:text-3xl font-bold text-black mb-5 md:mb-10 mx-auto">
      Строительная кровельная система RUKROV
    </h3>
    <h4 class="text-center text-sm lg:text-lg text-black/60 mb-5 md:w-120 mx-auto">
      Бесшовное водонепроницаемое покрытие, которое наносится поверх старого
      основания и исключает слабые стыки.
    </h4>
    <img src="/image/image-beton.png" class="w-full mb-10" alt="roof" />
    <p class="text-sm lg:text-lg mb-5 text-black/60">
      В этом разделе мы показываем, как технология RUKROV меняет подход к
      эксплуатации кровель. Мы решаем задачи бизнеса и ЖКХ там, где традиционные
      методы требуют огромных затрат на демонтаж, логистику и полную остановку
      рабочих процессов.
    </p>
    <div class="mb-10">
      <h4 class="text-black text-xl lg:text-3xl mb-3">Ваши преимущества:</h4>
      <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-4">
        <li class="list-disc">
          <p>
            <span class="font-bold">Экономия до 50%:</span> Ремонт идет без
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
            <span class="font-bold">Выгода для ДУК и ЖКХ:</span> Технология
            вписывается в бюджеты текущего ремонта, давая результат капитального
            и снимая жалобы жильцов на годы.
          </p>
        </li>
      </ul>
    </div>
    <div class="mb-15">
      <h4 class="text-black text-xl lg:text-3xl mb-3">Какие задачи мы решаем:</h4>
      <ul class="text-black text-sm lg:text-xl pl-7 flex flex-col gap-3 mb-4">
        <li class="list-disc">
          <p>
            <span class="font-bold">Исключаем простой:</span> Работаем на
            действующих складах и ТЦ. Не нужно останавливать бизнес или защищать
            оборудование от пыли — демонтажа просто нет.
          </p>
        </li>
        <li class="list-disc">
          <p>
            <span class="font-bold">Ликвидируем риск повторных протечек:</span>
            Обычные латки и мастики отслаиваются. Наша система химически
            «срастается» с основанием, надежно закрывая примыкания.
          </p>
        </li>
      </ul>
    </div>
    <video class="mb-6" autoplay loop muted src="/video/ai_can.mp4"></video>

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
const useModal = useModalStore()
</script>

<style scoped></style>
