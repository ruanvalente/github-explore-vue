import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userRepository: '',
    repositories: [],
    repositoriesInfo: {}
  },
  plugins: [createPersistedState()],
  mutations: {
    SET_REPOSITORY (state, payload) {
      state.repositories.unshift(payload)
    },
    SET_USER_REPOSITORY (state, payload) {
      state.userRepository = payload
    },
    SET_REPOSITORY_LIST (state, payload) {
      state.repositoriesInfo = payload
    },
  },
  actions: {
    addUserRepository ({ commit }, payload) {
      return commit('SET_USER_REPOSITORY', payload)
    },
    getRepositories ({ commit }) {
      api.get(`repos/${this.state.userRepository}`)
        .then(response => {
        commit('SET_REPOSITORY', response.data)
      })
    },
    getRepositoriesList ({ commit }, username) {
      api.get(`repos/${username}`).then(response => {
        commit('SET_REPOSITORY_LIST', response.data)
      })
    }
  },
  modules: {}
})
