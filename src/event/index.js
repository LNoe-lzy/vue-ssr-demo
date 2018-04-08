import axios from 'axios'

function fetch (url, Data, method = 'GET') {
  const data = method === 'POST' ? Data : {}
  const params = method === 'GET' ? Data : {}
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      data,
      params,
      method,
      responseType: 'json'
    })
      .then((result) => {
        const res = result.data
        if (res.errno === 0) {
          resolve(res.data)
        } else {
          reject(res.errmsg || '操作失败')
        }
      })
      .catch(() => {
        reject(new Error('网络繁忙，请稍后再试'))
      })
  })
}

export default {
  install (Vue) {
    const EventBus = new Vue({
      data () {
        return {
          list: [],
          nav: []
        }
      },
      methods: {
        getList () {
          return fetch('http://localhost:8088/api/getlist').then(res => {
            this.list = res
            return res
          })
        },
        getNav () {
          console.log('123')
          return fetch('http://localhost:8088/api/getnav').then(res => {
            console.log(res)
            this.nav = res
            console.log(res)
            return res
          })
        }
      }
    })
    Vue.prototype.$events = EventBus
    Vue.$events = EventBus
  }
}
