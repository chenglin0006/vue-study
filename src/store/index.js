import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import common from './modules/common'
import test from './modules/test'
import home from './modules/home'



export default new Vuex.Store({
    modules: {
      common: common,
      test: test,
      home: home
    }
  })
