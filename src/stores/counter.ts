import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Minimal example counter store used for scaffolding and demos.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  /**
   * Increment the counter by one.
   */
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
