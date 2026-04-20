<template>
  <Teleport to="body">
    <div
      v-if="useModal.isModalOpen"
      class="fixed font-open inset-0 z-40 flex items-center justify-center backdrop-blur-xs backdrop-grayscale bg-black/60 px-4"
      @click="useModal.closeModal()"
    >
      <div

        class="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl
               flex flex-col gap-4 sm:max-w-lg"
        @click.stop
      >
        <button
          type="button"
          class="absolute right-4 top-4 cursor-pointer text-gray-400 hover:text-gray-600"
          @click="useModal.closeModal()"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <h2 class="text-xl font-semibold text-gray-900 mb-2">
          Оставить заявку
        </h2>

        <form  v-if="!useModal.isSend" class="flex flex-col gap-4" @submit.prevent="useModal.submitForm()">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700">Имя</label>
            <input
              v-model="useModal.name"
              type="text"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="Ваше имя"
              required
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700">Телефон</label>
            <input
              v-model="useModal.phone"
              type="tel"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm font-medium text-gray-700">Сообщение</label>
            <textarea
              v-model="useModal.message"
              rows="3"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm
                     focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
              placeholder="Кратко опишите ваш запрос"
            ></textarea>
          </div>

          <label class="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
            <input
              v-model="useModal.consent"
              type="checkbox"
              class="mt-0.5 h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
              required
            />
            <span>
              Я согласен(а) на обработку персональных данных
              в соответствии с политикой конфиденциальности.
            </span>
          </label>

          <app-button
            type="submit"
            class="mt-2 inline-flex w-full
                  "
          >
           Отправить
          </app-button>
        </form>
        <div v-else>
          <h2  class="text-xl font-semibold text-gray-900 mb-2">Заявка успешно отправлена</h2>
        </div>
      </div>

    </div>

  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from "vue";
import { useModalStore } from "@/components/AppModal/useModal";
import AppButton from "@/components/shared/AppButton.vue";

const useModal = useModalStore()




</script>
