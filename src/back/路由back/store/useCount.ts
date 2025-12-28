import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  actions: {
    increment(value: number) {
      this.num += value
    },
    decrement(value: number) {
      this.num -= value
    },
  },
  state() {
    return {
      num: 0,
    }
  },
})
