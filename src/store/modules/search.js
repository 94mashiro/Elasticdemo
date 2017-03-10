import api from '../api.js'
import * as types from '../types'

const state = {
  results: [],
}

const actions = {
  searchWikiByTitle: function ({
    commit
  }, title) {
    return new Promise((resolve, reject) => {
      api.searchWikiByTitle(title, function (results) {
        commit(types.GET_SEARCH_DETAILS, results)
        resolve()
      })
    })
  }
}

const mutations = {
  [types.GET_SEARCH_DETAILS](state, results) {
    state.results = results
  }
}

const getters = {
  getSearchResult: state => state.results,
}

export default {
  state,
  actions,
  getters,
  mutations
}
