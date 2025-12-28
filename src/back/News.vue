<template>
  <div class="nav">
    <div class="new">
      <ul>
        <li v-for="item in news">
          <RouterLink
            :to="{
              name: 'xiangqing',
              params: {
                id: item.id,
                title: item.title,
                content: item.content,
              },
            }"
          >
            {{ item.title }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="new-detail">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
let news = [
  {
    id: '001',
    title: '快手被涉黄',
    content:
      '快手经历了一场大规模网络攻击。多位用户反映，昨晚快手直播间突然涌入大量涉黄涉暴视频。直至凌晨，平台紧急下线直播功能，直播页面一度被整体清空',
  },
  {
    id: '002',
    title: '习近平',
    content:
      '习近平（1953年6月15日—），籍贯陕西富平，祖籍河南邓州，生于北京，中国共产党、中华人民共和国政治人物',
  },
  {
    id: '003',
    title: '中华人民共和国',
    content:
      '中华人民共和国是位于东亚的社会主义国家，也是现今世界少数由共产党建立并持续单独执政的国家',
  },
]
</script>

<style lang="less" scoped>
.nav {
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  .new {
    width: 30%;
    height: 100%;
    border-right: 1px solid black;
  }
  .new-detail {
    width: 70%;
    height: 100%;
  }
}
</style>
