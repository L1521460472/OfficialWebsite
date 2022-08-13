/*
 * @Description: 
 * @Version: 1.0.0
 * @Autor: lijiancong
 * @Date: 2022-08-06 15:04:26
 * @LastEditors: lijiancong
 * @LastEditTime: 2022-08-11 10:15:24
 */
import { createRouter, createWebHistory } from "vue-router";
const constantRoutes = [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld.vue'),
      redirect:'/home',
      // component: () => HelloWorld
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/home.vue')
        },
        {
          path: '/product',
          name: 'product',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/product.vue')
        },{
          path: '/culture',
          name: 'culture',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/culture.vue')
        },
        {
          path: '/we',
          name: 'we',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/we.vue')
        },
      ]
    },
    // {
    //   path: '/product',
    //   name: 'product',
    //   component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/product.vue')
    //   // component: () => HelloWorld
    // },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
});

export default router;