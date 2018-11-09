import Vue from 'vue'
import Router from 'vue-router'
import Guitars from './views/Guitars.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'guitars',
      component: Guitars
    },
    {
      path: '/bass',
      name: 'bass',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Bass.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./components/ProdDetail.vue')
    }
  ]
})
