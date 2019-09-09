import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import RouterConfig from './routerConfig'

Vue.use(Router)

export default new Router({
  routes: RouterConfig
})
