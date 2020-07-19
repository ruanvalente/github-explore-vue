import Vue from 'vue'
import Vuex from 'vuex'

import api from '@/services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userRepository: '',
    repositories: []
  },
  mutations: {
    SET_REPOSITORY(state, payload) {
      state.repositories.push(payload)
    },
    SET_USER_REPOSITORY(state, payload) {
      state.userRepository = payload
    },

    SET_LOCAL_STORAGE(state) {
      const parserData = JSON.stringify(state.repositories)
      localStorage.setItem('@GitHubExploreVue', parserData)
    },
  },
  actions: {
    addUserRepository({ commit }, payload) {
      return commit('SET_USER_REPOSITORY', payload)
  
    },
    getRepositories({ commit }) {
      return api.get(`repos/${this.state.userRepository}`)
        .then((response) => {
        commit('SET_REPOSITORY', response.data)
        commit('SET_LOCAL_STORAGE')
      })
    },
    // loadRepositories({ commit }) {
    //   const data = JSON.parse(localStorage.getItem("@GitHubExploreVue"));
    //   console.log(data)
    //   commit('SET_REPOSITORY', data)
    // }
  },
  modules: {
  }
})
