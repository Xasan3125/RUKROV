import {defineStore } from "pinia";
import { computed, ref } from "vue";

export const useModalStore = defineStore("useModal", () => {
  const name = ref("");
  const phone = ref("");
  const message = ref("");
  const consent = ref(false);
  const isSubmitting = ref(false);
  const isModalOpen = ref(false);

  const userData = computed(() => {
    return {
      name:name.value,
      phone:phone.value,
      message:message.value,
      consent:consent.value,
    }
  })

  function openModal() {
    isModalOpen.value = true;
  }

  function closeModal(){
    isModalOpen.value = false;
  }
  return{
    name,
    phone,
    message,
    consent,
    isSubmitting,isModalOpen,closeModal,openModal,userData
  }
})