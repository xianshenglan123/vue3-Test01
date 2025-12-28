<template>
  <div class="father">
    <div>我有一辆车：{{ car }}</div>
    <div>父亲的存款： {{ money }}</div>
    <Children :car="car" :send_money="send_money" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Children from './Children.vue'
let car = ref('宝马')
let money = ref(100)
function send_money(m: number) {
  if (money.value > 0) {
    money.value -= m
    return m
  }
  return 0
}
</script>

<style lang="less" scoped>
.father {
  background-color: aqua;
  box-sizing: border-box;
  box-shadow: 0 4px 10px 2px black;
  border-radius: 10px;
  width: 100%;
  height: 50vh;
  padding-top: 50px;
  padding-left: 50px;
  button {
    margin-top: 10px;
  }
}
</style>
