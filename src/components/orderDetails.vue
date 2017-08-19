<template>
  <div class="contain">
    
    <div class="user">
      <div class="head">
        <img :src="info.order.imposterAvatar" >
      </div>
      <span class="name">{{info.order.imposterName}}</span>
      <span class="icon"></span>
      <span class="num">{{info.score}}分</span>
      <span class="Order">{{info.total}}单</span>
    </div>
    <div class="info">
      <p>订单详情</p>
      <span>{{info.order.platform | server}}端</span><span class="i"></span><!-- 
       --><span>{{info.level}}</span><span class="i"></span><!-- 
       --><span>{{info.order.server | server}}</span><span class="i"></span><!-- 
       --><span>{{info.order.gameMode | mode}}</span>
    </div>
    <div class="price">
      <p>总计：￥{{info.order.totalPrice}}  <span class="sf">实付：</span><span class="n">￥{{info.order.totalPrice}}</span></p>
    </div>
    <div class="ordernum">
      <p>订单编号<span>{{info.order.id}}</span></p>
      <p>订单时间<span>{{info.order.createdAt}}</span></p>
      <p>支付方式<span>微信</span></p>
    </div>
    <div class="state">
      <img v-if="info.status==0&&!cancelOrder" src="../assets/dingdanxiangqing-yi@2x.png">
      <img v-if="cancelOrder||info.status==24" src="../assets/dingdanxiangqing-jia@2x.png">
      <img v-if="info.status==10" src="../assets/dingdanxiangqing-er@2x.png">
      <img v-if="info.status==21" src="../assets/dingdanxiangqing-san@2x.png">
      <img v-if="info.status==22" src="../assets/dingdanxiangqing-si@2x.png">
      <img v-if="info.status==23" src="../assets/dingdanxiangqing-wu@2x.png">
      <div v-if="!cancelOrder&&info.status!=24" class="right">
        <p>订单创建</p>
        <p class="bott">待支付</p>
        <p class="bott">进行中</p>
        <p class="bott">待评价</p>
        <p class="bott">已完成</p>
      </div>
      <div v-if="cancelOrder||info.status==24" class="right">
        <p>订单创建</p>
        <p>订单已取消</p>
      </div>
    </div>
    <div v-if="(info.status==0||info.status==21)&&!cancelOrder" @click="sub" class="btn">
      取消订单
    </div>
    <div v-if="cancelOrder||info.status==24" @click="sub" class="btn">
      返回首页
    </div>
    <div v-if="info.status==10" @click="sub" class="btn">
      去支付
    </div>
    <div v-if="info.status==22" @click="sub" class="btn">
      去评价
    </div>
    <div v-if="info.status==23" @click="sub" class="btn">
      已完成
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'orderDetails',
  data () {
    return {
      // 
      info:null,
      // 
      // 取消订单成功
      cancelOrder:false
    }
  },
  computed:{

  },
  watch:{
    
  },
  created(){
    var that = this;
     this.$http.get(http()+'/wzry/orders/user/'+this.$route.query.orderId).then(response => {
        that.info = response.body;
        // that.info.status = 24;
        // that.cancelOrder = true;
        console.log(that.info)
        console.log(that.$route.query)
      }, response => {
        alert('失败')
      });
  },
  methods:{
    sub(){
      if(this.cancelOrder){
        window.webview.backRoomList() 
        return;
      }
      switch(this.info.status){
        // 取消订单
        case 0:
        if(!this.cancelOrder){
          if(confirm("确定取消吗？")){
            this.cancelOrder = true;
            window.webview.userCancelOrderWithOrderId(this.info.order.id)
          }
        }else{
          window.webview.backNativeAction(this.info.order.id)
        }
        break;
        //去支付
        case 10:
        window.webview.continuePayOrderWithOrderId(this.info.order.id)
        break;
        // 进行中
        case 21:
        if(confirm("订单正在进行中，请联系客服取消订单")){
          window.webview.userCancelOrderPhone()
        }
        break;
        // 待评价
        case 22:
        this.$router.push({ name: 'Evaluation', params: { userId: this.info.uid ,orderId:this.info.order.id},query: { plan: 'private' }})
        break;
        // 已完成
        case 23:
        window.webview.backNativeAction()
        break;
        case 24:
        window.webview.backRoomList() 
        break;
      }
    }
  },
  filters:{
    state(val){
      switch(val){
        case 0:
        return '青铜'
        break;
        case 1:
        return '白银'
        break;
        case 2:
        return '黄金'
        break;
        case 3:
        return '铂金'
        break;
        case 4:
        return '钻石'
        break;
        case 5:
        return '王者'
        break;
        case 6:
        return '荣耀王者'
        break;
      }
    },
    mode(val){
      switch(val){
        case 'pair':
        return '匹配'
        break
        case 'rank':
        return '排位'
        break
        case 'others':
        return '其他'
        break
      }
    },
    server(val){
      switch(val){
        case 'wechat':
        return '微信'
        break
        case 'qq':
        return 'QQ'
        break
        case 'ios':
        return 'IOS'
        break
        case 'android':
        return '安卓'
        break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
* {
-webkit-touch-callout:none;
-webkit-user-select:none;
-khtml-user-select:none;
-moz-user-select:none;
-ms-user-select:none;
user-select:none;
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color:transparent;
}
.contain{
  .user{
    height: .81rem;
    border-bottom: 1px solid #e5e5e5;
    .head{
      margin-left: .12rem;
      margin-top: .15rem;
      display: inline-block;
      width: .51rem;
      height: .51rem;
      border: .01rem;
      position: relative;
      overflow: hidden;
      border-radius: .05rem;
      img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    span{
      display: inline-block;
      line-height: .81rem;
      vertical-align: top;
      color: #333333;
    }
    .name{
      overflow:hidden;
      white-space:nowrap;
      display: inline-block;
      text-overflow:ellipsis;
      width: .87rem;
      font-size: .15rem;
      margin-left: .15rem;
    }
    .icon{
      /*border:1px solid black;*/
      width: .18rem;
      height: .18rem;
      margin-top: .29rem;
      margin-right: .05rem;
      margin-left: .11rem;
      background: url(../assets/pingjia-daxingxing@2x.png) no-repeat;
      background-position:center;
      background-size:contain;
    }
    .num{
      margin-right: .43rem;
    }
  }
  .info{
    border-bottom: 1px solid #e5e5e5;
    height: .76rem;
    /*text-align: center;*/
    padding-left: .15rem;
    .i{
      display: inline-block;
      /*border:1px solid black;*/
      height: .18rem;
      vertical-align: sub;
      width: .01rem;
      padding: 0  .17rem;
      background: url(../assets/pingjia-fengexian@2x.png) no-repeat;
      background-position:center;
      background-size:contain;
    }
    p{
      color: #333333;
      text-align: left;
    }
    span{
      color:#666666;
    }
  }
  .price{
    padding-left: .15rem;
    text-align: right;
    padding-right: .12rem;
    border-bottom: 1px solid #e5e5e5;
    color: #666666;
    .sf{
      color: #333333;
    }
    .n{
      color: #f96a67;
    }
  }
  .ordernum{
    padding-left: .15rem;
    color: #666666;
    span{
      color: #333333;
      padding-left: .14rem;
    }
  }
  .state{
    height: 3rem;
    border-top: .1rem solid #f5f5f5;
    padding-left: .15rem;
    padding-top: .13rem;
    img{
      width: .26rem;
      display: inline-block;
    }
    .right{
      width: 2rem;
      /*border:1px solid black;*/
      padding-left: .2rem;
      display: inline-block;
      vertical-align: top;
      p{
        margin-top: .05rem;
        margin-bottom: .34rem;
      }
    }
  }
  .btn{
    width: 100%;
    height: .5rem;
    background: #ffaa00;
    text-align: center;
    font-size: .16rem;
    color: white;
    line-height: .5rem;
    position: fixed;
    bottom: 0;
  }
}


</style>
