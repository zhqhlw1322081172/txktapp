import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import classfy from '@/pages/classfy'
import goodslist from '@/pages/goodslist'
import timetable from '@/pages/timetable'
import login from '@/pages/login'
import myfile from '@/pages/myfile'
import good from '@/pages/good'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classfy',
      name: 'classfy',
      component: classfy
    },
    {
      path: '/goodslist/:id',
      name: 'goodslist',
      component: goodslist
    },
    {
      path: '/timetable',
      name: 'timetable',
      component: timetable
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/myfile',
      name: 'myfile',
      component: myfile
    },
    {
      path: '/good',
      name: 'good',
      component: good
    }
  ]
})
