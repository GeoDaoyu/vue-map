import Vue from 'vue'
import Router from 'vue-router'
import MapView from './views/MapView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/mapview',
      name: 'mapview',
      component: MapView
    }
  ]
})
