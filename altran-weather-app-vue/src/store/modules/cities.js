import Vue from 'vue'

const state = {
  cities: [],
  city: {},
  queryCity: {
    // q: '',
    // id: null,
    appid: 'd034d8fcdf9f603479f06b76f175884c',
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
  // Cargar Ciudades Predefinidas
  async getCities ({ commit }) {
    let query = state.queryCity
    try {
      const response = await Vue.axios.get(
        '/group?id=3871336,3435910,3936456,3448439', {
          params: query
        })
      const cities = response.data.list
      commit('SET_CITIES', cities)
    } catch (error) {
      return error.response
    }
  },

  // Cargar Pronóstico para 5d - intervalos 3h
  async getCityForecast5Days ({ state }, id) {
    let query = state.queryCity
    query.id = id
    try {
      let response = await Vue.axios.get(
        '/forecast', {
          params: query
        })
      return response.data.list
    } catch (error) {
      return error.response
    }
  },

  // Buscar Ciudad por Nombre
  async getCityByName ({ state }, name) {
    let query = state.queryCity
    query.q = name
    try {
      let response = await Vue.axios.get(
        '/weather', {
          params: query
        })
      return response.data
    } catch (error) {
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
