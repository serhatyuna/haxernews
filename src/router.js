import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/New.vue')
    },
    {
      path: '/story/:id',
      name: 'story',
      component: () => import('./views/Single.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
