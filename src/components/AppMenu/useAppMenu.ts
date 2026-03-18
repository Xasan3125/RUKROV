import {defineStore} from "pinia";
import {ref} from "vue";


export const useAppMenuStore = defineStore('useAppMenuStore',()=>{
    const isOpen = ref(false)

    return{
      isOpen,
    }
})