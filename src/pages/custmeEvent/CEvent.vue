<template>
  <div class="content">
    <div class="fatcher">儿子给我的玩具： {{ toy }}</div>
    <Children @send_toy="save_toy" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Children from '../custmeEvent/Child.vue'
let toy = ref('')
function save_toy(val: string) {
  toy.value = val
}
</script>

<style lang="less" scoped></style>
