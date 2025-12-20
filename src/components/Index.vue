<template>
  <div class="person">
    <ul>
      <li v-for="value in list" :key="value.id">{{ value.name }} -- {{ value.age }}</li>
    </ul>
  </div>

</template>

<script lang="ts" setup name="Person">
import { type Persons, type Person } from '@/type';
let props = withDefaults(defineProps<{ list: Persons }>(), {
  list: () => [{ id: "0", name: "佚名", age: 0 }]
})


</script>

<style scoped lang='less'>
.person {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  margin: 20px;
  padding: 20px;
}
</style>