import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import shijieRPG from '@/views/shijieRPG'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shijieRPG',
      name: 'shijieRPG',
      component: shijieRPG
    }
  ]
})
