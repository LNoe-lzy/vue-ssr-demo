import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      list: [],
      nav: []
    },
    actions,
    mutations
  })
}
