import Vue from 'vue'
import Vuex from 'vuex'

// 根配置
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 按模块引入
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    app,
    user
  }
})
