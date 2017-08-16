<template>
  <div class="contain">
    <div class="top">
      <p>订单详情</p>
      <span class="one">{{this.info.platform | server}}</span>
      <span class="two">{{this.info.level | state}}</span>
      <span class="three">{{this.info.server | server}}</span>
      <span class="four">{{this.info.gameMode | mode}}</span>
    </div>
    <div class="user">
      <div class="head">
        <img :src="info.userAvatar" >
      </div>
      <span class="name">{{this.info.userName}}</span>
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
    <textarea name="" id="" cols="42" rows="10" v-model="ajaxmsg.content" placeholder="写下您对顾客的评价吧～"></textarea>
    <div class="quick">
      <p>快速评价</p>
      <span @click="quick.one = !quick.one" :class="{active:quick.one}">妹子</span><!-- 
       --><span @click="quick.two = !quick.two" :class="{active:quick.two}" style="margin: 0 .16rem 0 .16rem;">猪队友</span><!-- 
       --><span @click="quick.three = !quick.three" :class="{active:quick.three}">人很nice</span><!-- 
       --><span @click="quick.four = !quick.four" :class="{active:quick.four}">一点不坑</span><!-- 
       --><span @click="quick.five = !quick.five" :class="{active:quick.five}" style="margin: 0 .16rem 0 .16rem;">带不动</span><!-- 
       --><span @click="quick.six = !quick.six" :class="{active:quick.six}">有为青年</span>
    </div>
    <div @click="sub" class="btn">
      提交
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'imposterEvaluation',
  data () {
    return {
      // 
      info:{
        platform:'',
        level:'',
        server:'qq',
        gameMode:'rank',
        userAvatar:'',
        userName:'',
        score:'',
        total:''
      },
      context:null,
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
      },
      ajaxmsg:{
        rate:'',
        tagIds:[],
        content:''
      }
      // 
    }
  },
  computed:{

  },
  watch:{
    
  },
  created(){
    this.context = (this.$route.query.plan=="private" ? this.$route.params : JSON.parse(window.webview.getContext()));
    var that = this;
     this.$http.get(http()+'/wzry/orders/user/' + this.context.orderId).then(response => {
        console.log(response)
        that.respon = response.body;
        that.info.platform = response.body.order.platform;
        that.info.level = response.body.order.level;
        that.info.server = response.body.order.server;
        that.info.gameMode = response.body.order.gameMode;
        that.info.userAvatar = response.body.order.userAvatar;
        that.info.userName = response.body.order.userName;
        that.info.score = response.body.score;
        that.info.total = response.body.total;
      }, response => {
        alert(response.body)
      });
  },
  methods:{
    toggle(e){
      if(e.target.classList[0] != 'star') return;
      for (var obi in this.startoggle) {
           this.startoggle[obi] = false
      }
      let current = e.target;
      let currentparent = current.parentElement;
      if(current.classList[0]!='star') return
      for(let i=0;i<currentparent.children.length;i++){
        if(currentparent.children[i].classList[0] == "star"){
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
          if(current == currentparent.children[i]){
            break;
          }

        }

      }
      
    },
    sub(){
      var _rate = 0;
      var _quick = Object.values(this.quick);
      for(var v in this.startoggle){
        if(this.startoggle[v]){
          _rate++;
        }
      }
      this.ajaxmsg.rate = _rate;
      console.log(Object.values(this.quick))
      for(var i=0;i<_quick.length;i++){
        if(_quick[i]){
          this.ajaxmsg.tagIds.push(i)
        }
      }
      this.$http.post(http()+'/users/imposters/'+ this.context.imposterId +'/orders/'+this.context.orderId+'/rate',this.ajaxmsg).then(response => {
        console.log(response)
        window.webview.submit();
      }, response => {
        alert(response.body)
      });
    }
  },
  filters:{
    state(val){
      switch(val){
        case 1:
        return '青铜'
        break;
        case 2:
        return '白银'
        break;
        case 3:
        return '黄金'
        break;
        case 4:
        return '铂金'
        break;
        case 50:
        return '钻石5'
        break;
        case 51:
        return '钻石4'
        break;
        case 52:
        return '钻石3'
        break;
        case 53:
        return '钻石2'
        break;
        case 5:
        return '钻石1'
        break;
        case 60:
        return '星耀5'
        break;
        case 61:
        return '星耀4'
        break;
        case 62:
        return '星耀3'
        break;
        case 63:
        return '星耀2'
        break;
        case 6:
        return '星耀1'
        break;
        case 70:
        return '王者1～10'
        break;
        case 71:
        return '王者11～20'
        break;
        case 7:
        return '王者21+'
        break;
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
          case 'all':
          return 'ALL'
          break
          case 'ios':
          return 'IOS'
          break
          case 'android':
          return '安卓'
          break
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
