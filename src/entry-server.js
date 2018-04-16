import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, eventBus, App } = createApp()
    const matchedComponents = [App]

    Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
      eventBus
    }))).then(() => {
      context.state = eventBus._data
      resolve(app)
    }).catch(reject)
  })
}
