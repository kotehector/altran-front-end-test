import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import cities from './modules/cities'

Vue.use(Vuex)

const state = {
  // Estado Verdadero de la APP
  /* LOGIN */
  // activeUser: {
  //   isActive: !!localStorage.getItem('token'),
  //   data: {}
  // },
  /* TRANSACTIONS */
  // transactions: [],
  // queryTransactions: {
  //   all: true,
  //   page: 0,
  //   numberPerPage: 20
  // }
}

const mutations = {
  // Cambios aislados de los datos
  /* LOGIN */
  // 'SET_ACTIVE_USER'(state) {
  //   state.activeUser.isActive = true
  // },

  // 'SET_LOGOUT'(state) {
  //   state.activeUser.isActive = false
  // },

  // 'SET_USER_DATA'(state, userData) {
  //   state.activeUser.data = userData
  // },

  /* TRANSACTIONS */
  // 'SET_TRANSACTIONS' (state, transactions) {
  //   state.transactions = transactions
  // },

  // 'SET_QUERY_TRANSACTIONS' (state, queryTransactions) {
  //   state.queryTransactions = queryTransactions
  // }
}

// Operaciones asíncronas a la API
const actions = {
  /* LOGIN */
  // async login ({ commit, dispatch }, creds) {
  //   console.log('CREDS: ', creds)
  //   try {
  //     if (creds.username === 'Bret' || creds.username === 'bret') {
  //       await dispatch('getUser', 1)
  //       commit('SET_ACTIVE_USER')
  //     } else {
  //       await dispatch('getUser', 2)
  //       commit('SET_ACTIVE_USER')
  //     }
  //   } catch (error) {
  //   }
  // },

  // logout ({ commit }) {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('user-id')
  //   commit('SET_LOGOUT')
  // },

  // async getUser ({ commit }, idUser) {
  //   try {
  //     let user = await Vue.axios.get('https://jsonplaceholder.typicode.com/users/' + idUser)
  //     commit('SET_USER_DATA', user.data)
  //     localStorage.setItem('user-id', user.data.id)
  //     localStorage.setItem('token', 'JWT')
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // },

  /* TRANSACTIONS */
  // async getTransactions({ commit }, query) {
  //   console.log(query)
  //   try {
  //     let response = await Vue.axios.get(
  //       'http://localhost:8080/api/transactions', {
  //         params: query
  //       })
  //     console.log('response transactions ---> ', response)
  //     console.log('transactions ---> ', response.data.transactions)
  //     let transactions = response.data.transactions
  //     commit('SET_TRANSACTIONS', transactions)
  //   } catch (error) {
  //     // console.log(error)
  //   }
  // },

  // setQueryTransactions: ({ commit }, query) => {
  //   commit('SET_QUERY_TRANSACTIONS', query)
  // }
}

const getters = {
  // Acceso a los datos del State
  // activeUser: state => {
  //   return state.activeUser
  // },

  // transactions: state => {
  //   return state.transactions
  // },

  // queryTransactions: state => {
  //   return state.queryTransactions
  // }
}

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
