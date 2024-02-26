<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="icon-container">
    <SvgIcon name="首页" size="2em" color="#000" />
    <SvgIcon name="代码生成" size="2em" color="#000" />
    <SvgIcon name="分析列表" size="2em" color="#000" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from './components/SvgIcon/index.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.icon-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
}
</style>
