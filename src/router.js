import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/Guitar',
    //   name: 'Guitar',
    //   component: Guitars
    // },
    // {
    //   path: '/Bass',
    //   name: 'Bass',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Bass.vue')
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/products/:category',
      name: 'Category',
      component: () => import('./views/Category')
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('./views/ProdDetail.vue')
    },
    { 
      path: '*', 
      redirect: '/' 
    }
  ]
})
