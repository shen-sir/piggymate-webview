<template>
  <div class="contain">
    <div class="top">
      <p>订单详情</p>
      <span class="one">{{this.info.order.platform}}</span>
      <span class="two">{{this.info.order.level | state}}</span>
      <span class="three">{{this.info.order.server}}</span>
      <span class="four">{{this.info.order.gameMode | mode}}</span>
    </div>
    <div class="user">
      <div class="head">
        <img :src="info.order.imposterAvatar" >
      </div>
      <span class="name">{{this.info.order.imposterName}}</span>
      <span class="icon"></span>
      <span class="num">{{this.info.score}}分</span>
      <span class="Order">{{this.info.total}}单</span>
    </div>
    <div  @click="toggle" class="stars">
      <span class="h1">评分</span>
      <span :class="{active:startoggle.one}" class="star"></span> 
      <span :class="{active:startoggle.two}" class="star"></span> 
      <span :class="{active:startoggle.three}" class="star"></span> 
      <span :class="{active:startoggle.four}" class="star"></span> 
      <span :class="{active:startoggle.five}" class="star"></span>
    </div>
    <textarea name="" id="" cols="42" rows="10" v-model="message" placeholder="服务如何啊？是大腿吗？开黑过程爽不爽！快快写下评价让大家参考哦~"></textarea>
    <div class="quick">
      <p>快速评价</p>
      <span @click="quick.one = !quick.one" :class="{active:quick.one}">水平太差太差</span><!-- 
       --><span @click="quick.two = !quick.two" :class="{active:quick.two}" style="margin: 0 .16rem 0 .16rem;">水平太差太差</span><!-- 
       --><span @click="quick.three = !quick.three" :class="{active:quick.three}">水平太差太差</span><!-- 
       --><span @click="quick.four = !quick.four" :class="{active:quick.four}">水平太差太差</span><!-- 
       --><span @click="quick.five = !quick.five" :class="{active:quick.five}" style="margin: 0 .16rem 0 .16rem;">水平太差太差</span><!-- 
       --><span @click="quick.six = !quick.six" :class="{active:quick.six}">水平太差太差</span>
    </div>
    <div @click="sub" class="btn">
      提交
    </div>
  </div>
</template>

<script>
export default {
  name: 'Evaluation',
  data () {
    return {
      // 
      info:null,
      message:'',
      startoggle:{
        one:false,
        two:false,
        three:false,
        four:false,
        five:false,
      },
      quick:{
        one:true,
        two:false,
        three:false,
        four:false,
        five:false,
        six:false
      }
      // 
    }
  },
  computed:{

  },
  created(){
    var that = this;
     this.$http.get('/wzry/users/10002').then(response => {
        console.log(response)
        that.info = {
          "order": {  //当前未完成订单,一个用户同一时间最多一个未完成订单
            "id": 1, //订单编号
            "imposterUid": 2, //代练UID,
            "imposterName": "带你超神带你飞",  //代练昵称
            "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
            "uid": 1, //当前用户ID
            "userName": "小白玩家",  //当前用户昵称
            "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
            "roomId": 10000, //房间号
            "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
            "server": "qq", //服务器， qq or wechat
            "platform": "android", //设备平台，android or ios
            "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
            "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
            "productId": 1,     //对应的商品ID
            "productName": "王者荣耀代练",     //商品名称
            "productUnit": "局",     //商品单位
            "amount": 10,    //购买数量
            "parPrice": 10.0,  //单价
            "totalPrice": 100.0, //总价
            "status": 0,  //订单状态, 0 - 待支付，10 - 支付中，11 - 支付失败， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
            "statusMsg": "已取消", //状态更新信息
            "createdAt": "2017-06-12 12:00:00",  //订单创建时间
            "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
            "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
          },
          "uid": 1000,    //用户UID
          "userName" : "小白", //用户昵称
          "avartar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "total": 100,  //总订单数
          "score": 4.5  //当前评分
        }
      }, response => {
        alert('失败')
      });
  },
  methods:{
    toggle(e){
      for (var obi in this.startoggle) {
           this.startoggle[obi] = false
      }
      // console.log(e)
      let current = e.target;
      let currentparent = current.parentElement;
      if(current.classList[0]!='star') return
      for(let i=0;i<currentparent.children.length;i++){
        if(currentparent.children[i].classList[0] == "star"){
          // this.startoggle[i-1] = true;  
          switch(i){
            case 1:
            this.startoggle.one = true;
            break;
            case 2:
            this.startoggle.two = true;
            break;
            case 3:
            this.startoggle.three = true;
            break;
            case 4:
            this.startoggle.four = true;
            break;
            case 5:
            this.startoggle.five = true;
            break;
          }
          // console.log(currentparent.children[i])
          if(current == currentparent.children[i]){
            // this.startoggle[i-1] = true;
            break;
          }

        }

      }
      
    },
    sub(){
      alert(1)
      this.$http.post('/users/users/10002/orders/'+this.info.order.id+'/rate',{"rate": 4.5,"tagId": 1,"content":'qwqwq'}).then(response => {
        console.log(response)
      }, response => {
        alert('失败')
      });
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.contain{
  .top{
    height: .88rem;
    border-bottom: 1px solid #e5e5e5;
    text-align: center;
    p{
      text-align: left;
      color: #333333;
      font-size: .16rem;
      padding-left: .12rem;
      margin: .15rem 0 .12rem 0;
    }
    span{
      display: inline-block;
      width: .8rem;
      border: 1px solid black;
      border-radius: .05rem;
      margin-right: .05rem;
    }
    .one{
      border: 1px solid #ffaa00;
      color: #ffaa00;
      box-shadow: 0 0 5px 0.5px rgba(190, 55, 52, 0.55);
    }
    .two{
      border: 1px solid #ff7f00;
      color: #ff7f00;
      box-shadow: 0 0 5px 0.5px rgba(213, 77, 29, 0.55);
    }
    .three{
      border: 1px solid #f96a67;
      color: #f96a67;
      box-shadow: 0 0 5px 0.5px rgba(190, 55, 52, 0.55);
    }
    .four{
      margin: 0;
      border: 1px solid #6c97fd;
      color: #6c97fd;
      box-shadow: 0 0 5px 0.5px rgba(50, 94, 200, 0.55);
    }
  }
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
  .stars{
    border-bottom: 1px solid #e5e5e5;
    height: .5rem;
    .h1{
      font-size: .16rem;
      line-height: .5rem;
      display: inline-block;
      padding-left: .12rem;
      padding-right: .35rem;
    }
    .star{
      display: inline-block;
      width: .22rem;
      height: .22rem;
      margin-top: .13rem;
      margin-right: .05rem;
      vertical-align: top;
      background: url(../assets/pingjia-dianjiqian@2x.png) no-repeat;
      background-position:center;
      background-size:contain;
    }
    .active{
      background-image: url(../assets/pingjia-daxingxing@2x.png);
    }
  }
  textarea{
    height: 1.5rem;
    border:0;
    padding: .12rem .12rem 0 0.12rem;
    color: #999999;
    font-size: .15rem;
    line-height: .23rem;
  }
  .quick{
    border-top: .1rem solid #e5e5e5;
    text-align: center;
    /*height: 1.6rem;*/
    p{
      text-align: left;
      font-size: .16rem;
      margin:.2rem 0 .12rem .12rem;
    }
    span{
      display: inline-block;
      width: 1.01rem;
      border-radius: .05rem;
      border:1px solid #ffaa00;
      color: #666666;
      margin-bottom: .15rem;
    }
    .active{
      background-color: #ffaa00;
      color: white;
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
