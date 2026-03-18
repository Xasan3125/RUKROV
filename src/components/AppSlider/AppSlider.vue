<template>
  <section class="hero-slider ">
    <Swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="2"
      :space-between="20"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide v-for="slide in sliderData" :key="slide.title">
        <div>
          <img class="mb-4" :src="slide.image" :alt="slide.title" />
          <div class="flex justify-between text-black">
            <p class="text-lg font-bold">{{slide.title}}</p>
            <p class="text-lg text-gray-500">{{slide.date}}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ISliderData {
  image: string;
  title: string;
  date: string;
}

const sliderData: ISliderData[] = [
  {
    image: "/image/image-stadion.png",
    title: "СТАДИОН “НИЖНИЙ НОВГОРОД”",
    date: "2025",
  },
  { image: "/image/image-tower.png", title: "KM TOWER", date: "2025" },
  {
    image: "/image/image-marshal.png",
    title: "ЖК “МАРШАЛ-ГРАД”",
    date: "2025",
  },
  { image: "/image/image-rio.png", title: "ТРЦ РИО", date: "2025" },
];

const modules = [Autoplay];
</script>

<style>
.hero-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}







.hero-slider .swiper-slide > div {
  width: 100%;
}

.hero-slider img {
  max-height: 500px;
  object-fit: cover;
  display: block;
}
</style>
