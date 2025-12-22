<template>
  <h1>Vue路由测试</h1>
  <div class="nav">
    <RouterLink to="/home" class="btn">首页</RouterLink>
    <RouterLink to="/news" class="btn">新闻</RouterLink>
    <RouterLink to="/about" class="btn">关于</RouterLink>
  </div>

  <div class="appx">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="less">
h1 {
  height: 90px;
  line-height: 90px;
  text-align: center;
  margin-left: 2.5%;
  width: 95%;
  border-radius: 15px;
  border: 1px solid black;
  background: linear-gradient(to right, #898989, #fafafa);
}
.nav {
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-around;
  .btn {
    display: block;
    background-color: #808080;
    width: 130px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 30px;
    color: #ffffff;
  }
  .btn:hover {
    background-color: #74917d;
    color: #e2c977;
  }
  .btn.router-link-active {
    background-color: #74917d;
    color: #e2c977;
  }
}
.appx {
  background-color: #dddddd;
  position: absolute;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  border: 1px solid black;
  margin-left: 5%;
  // box-shadow: 0 0 10px;
}
</style>
