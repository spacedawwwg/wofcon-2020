import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registration',
      name: 'registration',
      // route level code-splitting
      // this generates a separate chunk (thanks.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "registration" */ './views/Registration.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      // route level code-splitting
      // this generates a separate chunk (thanks.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "thanks" */ './views/Thanks.vue')
    }
  ]
})
