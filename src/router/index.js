import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/search/:query',
    name: 'search',
    component: search
  }, {
    path: '/search/',
    redirect: '/'
  }]
})
