import api from '../api.js'
import * as types from '../types'

const state = {
  results: [],
  model: 'title'
}

const actions = {
  searchWikiByTitle: function ({
    commit
  }, options) {
    return new Promise((resolve, reject) => {
      var model = state.model
      var title = options.title
      var offset = options.offset
      api.searchWikiByTitle(model, title, offset, function (results) {
        commit(types.GET_SEARCH_DETAILS, results)
        resolve()
      })
    })
  },

  changeSearchModel: function ({
    commit
  }, model) {
    commit(types.CHANGE_SEARCH_MODEL, model)
  }
}

const mutations = {
  [types.GET_SEARCH_DETAILS](state, results) {
    state.results = results
  },
  [types.CHANGE_SEARCH_MODEL](state, model) {
    state.model = model
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
