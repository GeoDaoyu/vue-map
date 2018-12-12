import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map: {},
    mapView: {}
  },
  mutations: {
    init (state, payload) {
      state.map = payload
    },
    layserVisible (state, payload) {
      state.map = payload
    }
  },
  actions: {

  }
})
