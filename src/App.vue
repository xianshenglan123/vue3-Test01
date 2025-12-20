<template>
  <div class="appx">
    <Person :list />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Person from './components/Index.vue';
import { type Persons } from '@/type'

let list = reactive<Persons>([
  { id: "001", name: '张三', age: 18, },
  { id: "002", name: '李四', age: 19, },
  { id: "003", name: '王五', age: 20, }
])


</script>

<style scoped lang='less'>
.appx {
  background-color: #dddddd;
  position: absolute;
  width: 99%;
  border-radius: 10px;
  height: 300px;
  box-shadow: 0 0 10px;
}
</style>