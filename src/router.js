import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/:category',
      name: 'Category',
      component: () => console.log('hit') || import('./views/Category')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./components/ProdDetail.vue')
    }
  ]
})
