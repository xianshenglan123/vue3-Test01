<template>
  <div class="header">
    <h1>Vue3 组件间通信</h1>
    <hr />
  </div>
  <div class="content">
    <div class="nav">
      <RouterLink class="item" to="/props">1.props</RouterLink>
      <RouterLink class="item" to="/customerEvent">2.自定义事件</RouterLink>
      <RouterLink class="item" to="/mitt">3.mitt</RouterLink>
      <RouterLink class="item" to="vModel">4.v-model</RouterLink>
      <RouterLink class="item" to="attrs">5.$attrs</RouterLink>
      <RouterLink class="item" to="refs">6.$refs、$parent</RouterLink>
      <RouterLink class="item" to="provide">7.provide、inject</RouterLink>
      <RouterLink class="item" to="pinia">8.pinia</RouterLink>
      <RouterLink class="item" to="slot">9.slot</RouterLink>
    </div>

    <div class="sub">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup></script>

<style lang="less" scoped>
.header {
  h1 {
    text-align: center;
  }
}
.content {
  min-height: 80vh;
  display: flex;
  width: 100%;
  .nav {
    width: 18%;
    border: 1px solid gray;
    .item {
      text-decoration: none;
      display: block;
      height: 40px;
      border-bottom: 1px solid black;
      line-height: 40px;
      padding-left: 15px;
      text-decoration: none;
      color: black;
    }
    .router-link-active,
    .item:hover {
      background-color: #5078b8;
      color: aliceblue;
    }
  }
  .sub {
    box-sizing: border-box;
    background-color: #a4a4a4;
    border-radius: 5px;
    width: 90%;
    height: 100%;
    padding: 20px;
    margin-left: 20px;
  }
}
</style>
