<template>
  <div class="children">
    我有一个玩具: {{ toy }}
    <div>父亲给的车： {{ car }}</div>
    <div>从父亲那里获取到 {{ money }} 元</div>
    <button @click="getMoney">获取父亲的100W</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let money = ref(0)
const props = defineProps<{
  send_money: (m: number) => number
  car: string
}>()

function getMoney() {
  money.value += props.send_money(10)
}
let toy = ref('奥特曼')
</script>

<style lang="less" scoped>
.children {
  box-sizing: border-box;
  box-shadow: 0 4px 10px 2px black;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  background-color: yellowgreen;
  height: 30vh;
  button {
    margin-top: 10px;
  }
}
</style>
