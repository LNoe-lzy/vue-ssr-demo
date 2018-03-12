import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/main.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        component: Main
      }
    ]
  })
}
