<template>
  <div class="hello" v-if="!list || list.length == 0">
    <div class="no-record">
      <div><img src="../assets/no_record.png"></div>
      <p>一个订单都木有，不能再低调啦</p>
    </div>
  </div>
  <div class="hello" v-else>
    <div v-for="item in list" class="contain">
      <div class="order-no">订单编号: {{item.id}}</div>
      <div class="info" @click="showDetail(item.id)">
        <div class="headimg">
          <img :src="item.imposterAvatar">
        </div>
        <div class="text">
          <p class="top">
            <span class="name">{{item.imposterName}}</span><!-- 
             --><span>{{item.createdAt.substr(5, 2)+'月'+ item.createdAt.substr(8, 2) +'日'}}</span><!-- 
             --><span>{{item.createdAt.substr(11, 5)}}</span><!-- 
             --><span>{{item.amount}}局</span>
          </p>
          <p class="tag"><span>{{item.platform | platform}}端</span><span>{{item.level}}</span><span>{{item.server | server}}</span><span>{{item.gameMode | gameMode}}</span></p>
        </div>
      </div>
      <div class="state">
        <p>
          <span class="left">共计：{{item.totalPrice}}元</span>
          <span @click="link(item)" :class="item.status | orderClass((item.rateFlag & 1) != 1)" class="right" v-if="item.status != 90">
            {{item.status==23? ((item.rateFlag & 1) != 1 ? '去评价' : '已完成') : item.status | orderStatus}}
          </span>
          <span @click="cancelOrder(item)" class="right cancel" v-if="item.status < 22 || item.status  == 90">
            取消订单
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import filters from './filters'
import http from './httprequest'
export default {
  name: 'hello',
  data () {
    return {
      // 
      list:[] ,
      page:1,
      isget:true,//是否请求
      noend:true,//是否最后一页
      userid:''
      // 
    }
  },
  computed:{

  },
  created(){
      this.getlist()
      var that = this;
      window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let scrtop = document.body.scrollHeight-scrollTop-window.innerHeight;
        if(scrtop<40){
          that.page++
          that.getlist();
        }
      }
  },
  methods:{
    getlist(){
      var that = this;
      if(!(this.isget&&this.noend)) return;
      this.isget = false;
      this.$http.get(http()+'/wzry/users/'+ window.webview.getinfo() +'/orders?page='+this.page).then(response => {
        that.isget = true;
        response.body.wzryImposterOrders.length==0?that.noend=false:that.noend=true;
        for(let i=0;i<response.body.wzryImposterOrders.length;i++){
          that.list.push(response.body.wzryImposterOrders[i])
        }
      }, response => {
        alert('服务器开了个小差')
      });
    },
    link(order){
      // alert(order.status)
      if(order.status == 23 && (order.rateFlag & 1) != 1){
         /*this.$router.push({ 
          name: 'Evaluation', 
          params: { userId: this.userid,orderId: order.id, imposterId: order.imposterUid },
          query: { plan: 'private' }
        })*/
        let orderId = order.id.toString()
        window.webview.goEvaluation(orderId)
      } else if (order.status == 0 || order.status == 10) {
        window.webview.continuePayOrderWithOrderId(order.id)
      } else {
        return false; 
      }
    },
    cancelOrder(order){
        window.webview.userCancelOrderWithOrderId(order.id)
        order.status = 22
    },
    showDetail(id){
      this.$router.push({
        name: 'orderDetails',
        query: {orderId: id}
      });
    }
  },
  filters: filters
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.contain{
  .info{
    height: .75rem;
    border-bottom: 1px solid #e5e5e5;
    .headimg{
      height: .49rem;
      width: .49rem;
      border-radius: .05rem;
      overflow: hidden;
      display: inline-block;
      position: relative;
      margin-top: .12rem;
      margin-left: .12rem;
      margin-right: .18rem;
      img{
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
    .text{
      display: inline-block;
      vertical-align: top;
      font-size: .15rem;
      color: #333333;
      p{
        margin: 0;
      }
      .top{
        margin-top: .07rem;
        span{
          margin-left: .2rem;
          vertical-align: -webkit-baseline-middle;
        }
        .name{
          margin: -0.01rem;
          overflow:hidden;
          white-space:nowrap;
          display: inline-block;
          text-overflow:ellipsis;
          width: .8rem;
        }
      }
      .tag{
        margin-top: .07rem;
        font-size: .14rem;
        color: #666666;
        span{
          margin-right: .2rem;
        }
      }
    }
  }
  .state{
    border-bottom: 20px solid #f5f5f5;
    font-size: .14rem;
    height: .5rem;
    p{
      padding: 0 .12rem 0 .12rem;
      margin: 0;
      line-height: .5rem;
    }
    .right{
      float: right;
      font-size: .15rem;
      line-height: .5rem;
    }
    /*进行中*/
    .processing{
      width: 1rem;
      height: .3rem;
      border-radius: .30rem;
      text-align: center;
      margin-top: .09rem;
      line-height: .32rem;
      color: #ffaa00;
      border:1px solid #ffaa00;
      box-shadow: 0 0 5px 0.5px rgba(255, 170, 0, 0.55);
    }
    /*待付款*/
    .payment{
      background-color: #f96a67;
      width: 1rem;
      height: .3rem;
      border-radius: .30rem;
      text-align: center;
      margin-top: .09rem;
      line-height: .32rem;
      color: white;
      margin-left: .09rem;
    } 
    /*去评价*/
    .evaluation,.cancel{
      background-color: #ffaa00;
      width: 1rem;
      height: .3rem;
      border-radius: .30rem;
      text-align: center;
      margin-top: .09rem;
      line-height: .32rem;
      color: white;
    }
    .cancel{
      margin-right: .04rem;
    }
  }
  .order-no{
    color: #888;
    font-size: 0.14rem;
    margin: 0.06rem;
  }
}

/*暂无记录*/
.no-record{
  width: 100%;
  text-align: center;
  display: inline-block;  
  font-size: 0.16rem;
  color: #666666;
  &::before{
    content: '\00a0';
    display: block;
    width: 100%;
    margin-top: 20%;
  }
  img{
    width: 50%;
    height: 50%;
  }
}



</style>
