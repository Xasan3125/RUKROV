import {defineStore } from "pinia";
import { computed, ref, watch } from "vue";

export const useModalStore = defineStore("useModal", () => {
  const name = ref("");
  const phone = ref("");
  const message = ref("");
  const consent = ref(false);
  const isSubmitting = ref(false);
  const isModalOpen = ref(false);
    const isSend = ref(false);
  const WEB3FORMS_ACCESS_KEY = "4532e0cb-93f4-423f-94c6-4caba7e2c4f1";

  const submitForm = async () => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name.value,
        phone: phone.value,
        message: message.value,
        subject:"Новая заявка",
      }),
    });
    const result = await response.json();
    if (result.success) {
      isSend.value = true;
      setTimeout(() => {
        isModalOpen.value = false;
        isSend.value = false;
      },3000)
    }
  }

  watch(isModalOpen, () => {
    if(isModalOpen.value === false) {
      isSubmitting.value = false;
      name.value = "";
      phone.value = "";
      message.value = "";
      isSubmitting.value = false;
    }
  })


  const userData = computed(() => {
    return {
      name:name.value,
      phone:phone.value,
      message:message.value,
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
    isSubmitting,isModalOpen,closeModal,openModal,userData,submitForm,isSend
  }
})