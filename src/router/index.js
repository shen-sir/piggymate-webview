import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Evaluation from '@/components/Evaluation'
import imposterHello from '@/components/imposterHello'
import imposterEvaluation from '@/components/imposterEvaluation'
import statement from '@/components/statement'

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
    },
    {
      path: '/imposterHello',
      name: 'imposterHello',
      component: imposterHello
    },
    {
      path: '/imposterEvaluation',
      name: 'imposterEvaluation',
      component: imposterEvaluation
    },
    {
      path: '/statement',
      name: 'statement',
      component: statement
    }
  ]
})
