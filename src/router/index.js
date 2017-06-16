import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Evaluation from '@/components/Evaluation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Evaluation',
      name: 'Evaluation',
      component: Evaluation
    }
  ]
})
