import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dialog from '@/components/Dialog'
import UE from '@/components/UE2'

// import login from '@/page/login'
// const login = resolve => require(['@/page/login'], resolve) 
// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/page/login'],resolve)
    },
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/ue',
      name: 'UE',
      component: UE
    },{
      path:'/mange',
      component: resolve => require(['@/page/mange'],resolve),
      children:[
        {
          path:"",
          name:'首页',
          component: resolve => require(['@/page/home'],resolve),
          meta: ['首页']
        },
        {
          path:"/XMZL",
          name:'项目总览',
          component: resolve => require(['@/components/Hello'],resolve),
          meta: ['项目总览']
        },
        {
          path:"/DWZL",
          name:'单位总览',
          component: resolve => require(['@/components/UE2'],resolve),
          meta: ['单位总览']
        },
        {
          path:"/WTZL",
          name:'问题总览',
          component: resolve => require(['@/components/Dialog'],resolve),
          meta: ['问题总览']
        },
        {
          path:"/JDYB",
          name:'监督月报',
          component: resolve => require(['@/components/Dialog'],resolve),
          meta: ['监督月报']
        }

      ]

    }
  ]
})
