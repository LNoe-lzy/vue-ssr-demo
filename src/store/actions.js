import axios from 'axios'

function fetch (url, Data, method = 'GET') {
  const data = method === 'POST' ? Data : {}
  const params = method === 'GET' ? Data : {}
  return new Promise((resolve, reject) => {
    console.log(url)
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
  getList ({ commit, state }) {
    return fetch('http://localhost:8088/api/getlist').then(res => {
      commit('GET_LIST', res)
      return res
    })
  },
  getNav ({ commit, state }) {
    console.log('get nav')
    return fetch('http://localhost:8088/api/getnav').then(res => {
      commit('GET_NAV', res)
      return res
    })
  }
}
