<template>
  <div class="content">
    <Count />
    <LoveTalk />
  </div>
</template>

<script lang="ts" setup>
import Count from './components/Count.vue'
import LoveTalk from './components/LoveTalk.vue'
</script>

<style lang="less" scoped>
.content {
  box-sizing: border-box;
  background-color: gray;
  border-radius: 10px;
  padding: 5px;
  width: 100%;
}
</style>
