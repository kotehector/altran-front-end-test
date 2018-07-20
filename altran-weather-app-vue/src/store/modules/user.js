import Vue from 'vue'

const state = {
  activeUser: {
    isActive: !!localStorage.getItem('token'),
    data: {}
  }
}

const mutations = {
  'SET_ACTIVE_USER' (state) {
    state.activeUser.isActive = true
  },

  'SET_LOGOUT' (state) {
    state.activeUser.isActive = false
  },

  'SET_USER_DATA' (state, userData) {
    state.activeUser.data = userData
  }
}

const actions = {
  async login ({ commit, dispatch }, creds) {
    try {
      if (creds.username === 'Bret' || creds.username === 'bret') {
        await dispatch('getUser', 1)
        commit('SET_ACTIVE_USER')
      } else {
        await dispatch('getUser', 2)
        commit('SET_ACTIVE_USER')
      }
    } catch (error) {
    }
  },

  logout ({ commit }) {
    localStorage.removeItem('token')
    localStorage.removeItem('user-id')
    commit('SET_LOGOUT')
  },

  async getUser ({ commit }, idUser) {
    try {
      let user = await Vue.axios.get('https://jsonplaceholder.typicode.com/users/' + idUser)
      commit('SET_USER_DATA', user.data)
      localStorage.setItem('user-id', user.data.id)
      localStorage.setItem('token', 'JWT')
    } catch (error) {
    }
  }
}

const getters = {
  activeUser: state => {
    return state.activeUser
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
