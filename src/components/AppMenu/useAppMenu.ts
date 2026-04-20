import { defineStore } from "pinia";
import { computed, ref, nextTick } from "vue";

export const useAppMenuStore = defineStore("useAppMenuStore", () => {
  type ActiveSection =
    | null
    | "solution"
    | "system"
    | "about"
    | "documentation"
    | "contacts";

  const isOpen = ref(false);
  const activeSection = ref<ActiveSection>(null);
  const showContent = ref(false);

  const toggleOpen = () => {
    if (!isOpen.value) {
      isOpen.value = true;
      activeSection.value = null;
      showContent.value = false;
    } else if (activeSection.value) {
      activeSection.value = null;
      isOpen.value = false;
      showContent.value = false;
    } else {
      isOpen.value = false;
      showContent.value = false;
    }
  };

  const openSection = async (section: ActiveSection) => {
    isOpen.value = true;
    activeSection.value = section;
    showContent.value = false;

    await nextTick();

    requestAnimationFrame(() => {
      showContent.value = true;
    });
  };

  const containerClass = computed(() => {
    if (!isOpen.value) return "max-w-[160px] w-full pb-2 text-black";
    if (activeSection.value) {
      if (activeSection.value === "contacts") {
        return "w-full md:max-w-[400px] max-h-[400px] h-full pb-4 pt-4 px-4 bg-white text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)]";
      }
      return "md:max-w-[1200px] w-full pb-6 pt-2 bg-white text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)]";
    }
    return "max-w-[320px] md:max-w-[400px] w-full pb-4 pt-4 px-4 bg-white text-white shadow-[0px_1px_26px_1px_rgba(34,60,80,0.28)]";
  });

  return {
    isOpen,
    toggleOpen,
    openSection,
    containerClass,
    activeSection,
    showContent,
  };
});