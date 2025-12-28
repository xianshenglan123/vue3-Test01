<template>
  <div>{{ route.query.id }}</div>
  <div>{{ route.query.title }}</div>
  <div>{{ route.query.content }}</div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
let { id, title, content } = defineProps(['id', 'title', 'content'])
const route = useRoute()
</script>

<style lang="less" scoped>
div {
  margin-left: 50px;
}
</style>
