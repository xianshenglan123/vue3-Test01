<template>
  <div class="toke">
    <h1>土味情话</h1>
    <button @click="getToke">获取土味情话</button>
    <ul>
      <li v-for="toke in talkList" :key="toke.id">{{ toke.msg }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useLoveTalkStore } from '@/store/useLoveTalk'
import { storeToRefs } from 'pinia'

let useTalkStore = useLoveTalkStore()
useTalkStore.$subscribe((meteData, value) => {
  console.log(value.talkList)
  localStorage.setItem('talkList', JSON.stringify(value.talkList) as string)
})

let { talkList } = storeToRefs(useTalkStore)

async function getToke() {
  useTalkStore.getToke()
}
</script>

<style lang="less" scoped>
.toke {
  background-color: greenyellow;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  h1,
  button {
    margin: 10px 0px 0px 10px;
  }
}
</style>
