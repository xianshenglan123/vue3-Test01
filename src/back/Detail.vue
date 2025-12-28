<template>
  <!-- <div>{{ route.query.id }}</div>
  <div>{{ route.query.title }}</div>
  <div>{{ route.query.content }}</div> -->

  <!-- <div>{{ route.params.id }}</div>
  <div>{{ route.params.title }}</div>
  <div>{{ route.params.content }}</div> -->
  <div>{{ id }}</div>
  <div>{{ title }}</div>
  <div>{{ content }}</div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
let route = useRoute()
let router = useRouter()

let { id, title, content } = defineProps(['id', 'title', 'content'])
</script>

<style lang="less" scoped>
div {
  margin-left: 50px;
}
</style>
