import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useMobile(breakPoint: number = 767) {
  const width = ref<number>(0)

  onMounted(() => {
    width.value = window.innerWidth
    const handleResize = () => width.value = window.innerWidth
    window.addEventListener('resize', handleResize)
    onUnmounted(() => window.removeEventListener('resize', handleResize))
  })

  return computed(() => width.value < breakPoint)
}