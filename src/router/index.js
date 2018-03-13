import Vue from 'vue'
import Router from 'vue-router'
import linkage from '@/components/linkage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'linkage',
      component: linkage
    }
  ]
})
