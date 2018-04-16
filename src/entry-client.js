import { createApp } from './main'
const { app, eventBus } = createApp()
console.log(app)
if (window.__INITIAL_STATE__) {
  eventBus._data = window.__INITIAL_STATE__
}

app.$mount('#app')
