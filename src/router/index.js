import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Evaluation from '@/components/Evaluation'
import imposterHello from '@/components/imposterHello'
import imposterEvaluation from '@/components/imposterEvaluation'
import statement from '@/components/statement'
import pricelist from '@/components/pricelist'
import process from '@/components/process'
import orderDetails from '@/components/orderDetails'
import userAgreement from '@/components/userAgreement'
import termsOfPayment from '@/components/termsOfPayment'
import invitation from '@/components/invitation'
import receive from '@/components/receive'
import AlreadyReceive from '@/components/AlreadyReceive'
import levelUploadExample from '@/components/levelUploadExample'
import idcardUploadExample from '@/components/idcardUploadExample'
import share from '@/components/share'
import luckDraw from '@/components/luckDraw'

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
    },
    {
      path: '/pricelist',
      name: 'pricelist',
      component: pricelist
    },
    {
      path: '/process',
      name: 'process',
      component: process
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/userAgreement',
      name: 'userAgreement',
      component: userAgreement
    },
    {
      path: '/termsOfPayment',
      name: 'termsOfPayment',
      component: termsOfPayment
    },
    //app内邀请页面
    {
      path: '/invitation',
      name: 'invitation',
      component: invitation
    },
    //领取优惠券
    {
      path: '/receive',
      name: 'receive',
      component: receive
    },
    //优惠券已放入您的账户中
    {
      path: '/AlreadyReceive',
      name: 'AlreadyReceive',
      component: AlreadyReceive
    },
    {
      path: '/levelUploadExample',
      name: 'levelUploadExample',
      component: levelUploadExample
    },
    {
      path: '/idcardUploadExample',
      name: 'idcardUploadExample',
      component: idcardUploadExample
    },
    //订单详情页分享红包
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/luckDraw',
      name: 'luckDraw',
      component: luckDraw
    }
  ]
})
