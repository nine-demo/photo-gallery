import Vue from 'vue'
import Vuex from 'vuex'

// 按模块引入
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user
  }
})
