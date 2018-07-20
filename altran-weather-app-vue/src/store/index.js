import Vue from 'vue'
import Vuex from 'vuex'

// Módulos Vuex
import user from './modules/user'
import cities from './modules/cities'

Vue.use(Vuex)

const state = {}
const mutations = {}
// Operaciones asíncronas a la API
const actions = {}
const getters = {}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    user,
    cities
  }
})

export default store
