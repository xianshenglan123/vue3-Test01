<template>
  <div>
    <div class="count">
      <h1>计算器</h1>
      <div>计算的结果为：{{ num }}</div>
      <select v-model="nul">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="add">加{{ nul }}</button>
      <button @click="minus">减{{ nul }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useCountStore } from '@/store/useCount'
import { storeToRefs } from 'pinia'
let countStore = useCountStore()
let { num } = storeToRefs(countStore)
let nul = ref(1)

function add() {
  countStore.increment(parseInt(nul.value))
}
function minus() {
  countStore.decrement(nul.value)
}
</script>

<style lang="less" scoped>
.count {
  border: 1px solid black;
  background-color: skyblue;
  border-radius: 10px;
  margin: 10px;
  h1 {
    text-align: center;
  }
  div {
    margin-left: 20px;
  }
  select,
  button {
    margin: 10px 0px 10px 20px;
    height: 30px;
    width: 50px;
  }
}
</style>
