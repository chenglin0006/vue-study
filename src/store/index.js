import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import test from './modules/test'
import home from './modules/home'



export default new Vuex.Store({
    modules: {
      test: test,
      home: home
    }
  })
