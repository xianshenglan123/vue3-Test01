<template>
  <div class="children">我有一个玩具: {{ toy }}</div>
  <button @click="emits('send_toy', toy)">点我给父亲传送玩具</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let toy = ref('奥特曼')
const emits = defineEmits(['send_toy'])
</script>

<style lang="less" scoped></style>
