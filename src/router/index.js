import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import search from '@/pages/search'
import detail from '@/pages/detail'
import advanced from '@/pages/advanced'

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
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: detail
  }, {
    path: '/advanced/',
    name: 'advanced',
    component: advanced
  }]
})
