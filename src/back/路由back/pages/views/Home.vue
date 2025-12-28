<template>
  <div>首页</div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
let router = useRouter()

setTimeout(() => {
  router.push({
    path: '/news',
    // query:{}
  })
}, 3000)
</script>

<style lang="less" scoped></style>
