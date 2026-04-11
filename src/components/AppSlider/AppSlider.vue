<template>
  <section class="hero-slider text-black cursor-pointer">
    <Swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="slidesPerView"
      :space-between="20"
      :navigation="!isMobile"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
    >
      <SwiperSlide
        v-for="slide in data"
        :key="slide.title"
        class="relative"
      >
        <div>
          <img
            class="mb-4 w-full h-auto"
            :src="slide.image"
            :alt="slide.title"
          />
          <div class="flex justify-between text-black">
            <p class="text-sm md:text-lg font-bold">{{ slide.title }}</p>
            <p class="text-sm md:text-lg text-gray-500">{{ slide.date }}</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useMobile } from "@/components/shared/useMobile.ts";
import { computed, defineProps } from "vue";

const isMobile = useMobile(768);
const slidesPerView = computed(() => (isMobile.value ? 1 : 2));

interface ISliderData {
  image: string;
  title: string;
  date?: string;
}

defineProps<{ data?: ISliderData[] }>();



const modules = [Autoplay, Navigation, Pagination, Scrollbar];
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

.swiper-button-prev {
  position: absolute;
  bottom: 120px;
  transform: rotate(180deg);
  left: 20px;
  z-index: 10;
  scale: 300%;
  color: white;
}

.swiper-button-next {
  position: absolute;
  bottom: 120px;
  right: 20px;
  z-index: 10;
  scale: 300%;
  color: white;
}
</style>
