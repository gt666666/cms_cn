<template>
  <div>     <!-- 必须要有一个根元素 -->
    <h1 class="text-color">【路由页面】Webpack程序开发首页</h1>
    <h2>回应信息：{{getMessage}}</h2>
    <h3>部门消息显示控制：
      <input type="radio" v-model="flag" value="true">显示
      <input type="radio" v-model="flag" value="false">隐藏
    </h3>
    <div class="div-float">
      <img src="@/assets/images/timg.gif" class="show-image"/>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex' // 导入所有的getters、actions操作
export default {
  name: 'Index',
  methods: {
    ...mapActions(['showAction', 'hideAction'])
  },
  computed: {
    ...mapGetters(['isShow', 'getMessage']),
    flag: {
      set: function (newVal) {
        if (newVal === 'true') {
          this.showAction() // 内容显示
        } else {
          this.hideAction() // 内容隐藏
        }
      },
      get: function () {
        return this.isShow
      }
    }
  }
}
</script>
<style scoped>
</style>
