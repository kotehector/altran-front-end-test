import Vue from 'vue'

const state = {
  cities: [],
  city: {},
  queryCity: {
    q: '',
    appid: 'd034d8fcdf9f603479f06b76f175884c',
    lang: 'es',
    units: 'metric'
  }
}

const mutations = {
  'SET_CITIES' (state, cities) {
    state.cities = cities
  },

  'SET_CITY' (state, city) {
    state.city = city
  },

  'SET_QUERY_CITY' (state, queryCity) {
    state.queryCity = queryCity
  }
}

const actions = {
  async getCities ({ commit }) {
    try {
      const response = await Vue.axios.get(
        'http://api.openweathermap.org/data/2.5/group?id=3871336,3435910,3936456,3448439&units=metric&appid=d034d8fcdf9f603479f06b76f175884c')
      const cities = response.data.list
      commit('SET_CITIES', cities)
    } catch (error) {
      console.log('error', error.response)
      return error.response
    }
  },

  async getCityByName ({ state, commit }) {
    let query = state.queryCity
    try {
      let response = await Vue.axios.get(
        'http://api.openweathermap.org/data/2.5/weather', {
          params: query
        })
      console.log('getCityById - result : ', response)
      return response.data
    } catch (error) {
      console.log('error', error.response)
      return error.response
    }
  },

  setQueryCity: ({ commit }, query) => {
    commit('SET_QUERY_CITY', query)
  }
}

const getters = {
  cities: state => {
    return state.cities
  },

  city: state => {
    return state.city
  },

  queryCity: state => {
    return state.queryCity
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
