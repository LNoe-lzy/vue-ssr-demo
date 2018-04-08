// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import EventBus from './event'

Vue.use(EventBus)
Vue.config.devtools = true
console.log(App)
/* eslint-disable */
export function createApp () {
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    render: h => h(App)
  })
  // 返回 app 和 router
  return { app, eventBus: app.$events, App }
}
