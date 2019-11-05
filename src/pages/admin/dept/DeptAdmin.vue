<template>
  <div>     <!-- 必须要有一个根元素 -->
    <h1 class="text-color">【路由页面】部门管理程序</h1>
    <h2 v-if="isShow == true">请输入消息：<input type="text" v-model="tempMessage"></h2>
    <div class="div-float">
      <img src="@/assets/images/timg.jpg" class="show-image"/>
      部门管理
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex' // 导入所有的getters、actions操作
export default {
  name: 'DeptAdmin',
  computed: {
    ...mapGetters(['isShow', 'getMessage']),
    tempMessage: {
      set: function (newVal) {
        this.changeAction(newVal)
      },
      get: function () {
        return this.getMessage
      }
    }
  },
  methods: {
    ...mapActions(['changeAction'])
  }
}
</script>
<style scoped>
</style>
