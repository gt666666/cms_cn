import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/', // 首页的路由路径
      name: 'index',
      component: () => import('@/pages/Index')
    },
    {
      path: '/deptAdmin', // 首页的路由路径
      name: 'dept',
      component: () => import('@/pages/admin/dept/DeptAdmin')
    }
  ]
})
