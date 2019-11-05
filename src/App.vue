<template>
  <div id="app">
    <h1>
      <router-link to="/">首页</router-link>
      <router-link to="/deptAdmin">部门管理</router-link>
    </h1>
    <div>
      <transition name="fade" mode="out-in"><router-view :key="key"/></transition>
    </div>
  </div>
</template>
<script>
import '@/assets/css/global.css'
export default {
  name: 'App',
  computed: {
    key: function () { // 每一次通过计算得到不同的一个标记内容
      return this.$route.path.replace(/\//, '_')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
