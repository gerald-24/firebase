import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    showFab: false
  },
  mutations: {
    CHANGE_USER_INFO: (state, data) => { //changing of userInfo
      state.userInfo = data
    },
    CHANGE_ACCOUNT_DETAILS: (state, data) => { //changing of AccountDetails
      state.userInfo.AccountDetails = data
    },
    ShowFab: (state, data) => { //changing of userInfo
      state.showFab = data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()] 
})
