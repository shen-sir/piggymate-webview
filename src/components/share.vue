<template>
  <div class="contain">
    <img class="background" src="../assets/beijing@2x.png" >
    <img class="get" src="../assets/daijinquan-biaoti@2x.png" >
    <div v-if="hasTicket" class="ticket">
          <div class="text">
            <h1><small>￥</small>{{coupon.amount}}</h1>
            <p class="one">适用于所有段位</p>
            <p class="two">有效期{{coupon.validFrom}}至{{coupon.validTo}}</p>
          </div>
    </div>
    <a v-if="hasTicket" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.kingdowin.ptm"><img class="btn" src="../assets/lijishiyong-@2x.png" ></a>
    <img v-else class="noticket" src="../assets/quan-biankuang@2x.png">
    <img class="others" src="../assets/shouqibiaoti@2x.png" >
    <div v-for="item in list" class="context">
      <div class="left">
        <div class="headimg">
        <img :src="item.photoUrl">
        </div>
        <span>{{item.nickName}}</span>
      </div>
      
      <div class="text">
        <p>王者大神带你飞，好过瘾，来猪队友语音开黑</p>
      </div>
      <div class="right">
        <span class="top">已领:</span>
        <p class="mon">{{item.amount}}<span>元</span></p>
        <span class="time">{{item.validTo}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'share',
  data () {
    return {
      coupon:{
        amount:'',
        validFrom:'',
        validTo:''
      },
      hasTicket:true,
      list:[],
      ajaxmsg:{
        batchesId:window.location.href.split('=')[2].split('#')[0],
        code:window.location.href.split('=')[1].split('&')[0]
      }
    }
  },
  computed:{

  },
  created(){
    console.log(this.ajaxmsg)
    var that = this;
     this.$http.post(http()+'/acts/redBag/get',this.ajaxmsg).then(response => {
        console.log(response)
        if(typeof response.body.coupon=='undefined'){
          that.hasTicket = false;
        }
        that.coupon = response.body.coupon;
        that.list = response.body.list;
      }, response => {
        alert(response.body)
      });
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.contain{
  background-color: #fdbf01;
  padding-bottom: .2rem;
  .background{
    width: 100%;
    position: absolute;
    z-index: 1;
    top: 0;
  }
  .get{
    width: 1.4rem;
    margin-left: 1.2rem;
    margin-top: 2.5rem;
    position: relative;
    z-index: 2;
  }
  .ticket{
      /*border:1px solid red;*/
      position: relative;
    z-index: 2;
      margin-top: .2rem;
      height: 1.32rem;
      background: url(../assets/daijinquan@3x.png) center top / auto 1.31rem no-repeat;
      .text{
        /*border:1px solid blue;*/
        overflow: hidden;
        width: 2.2rem;
        margin-left: 1.18rem;
        text-align: center;
        h1{
          padding: 0;
          margin: .1rem 0 0 0;
          color: #ffab03;
          font-size: .49rem;
          font-weight: normal;
          small{
            font-size: .2rem;
          }
        }
        .one{
          margin: 0;
          margin-top: -0.1rem;
          font-size: .12rem;
        }
        .two{
          margin: .1rem 0 0 0;
          font-size: .12rem;
          /*margin-top: -0.2rem;*/
        }
      }
    }
  .btn{
    width: 1.22rem;
    margin-left: 1.3rem;
    margin-top: .15rem;
    position: relative;
    z-index: 2;
  }
  .noticket{
    height: 1.31rem;
    margin-left: .13rem;
    position: relative;
    z-index: 2;
  }
  .others{
    width: 1.40rem;
    margin-left: 1.3rem;
    margin-top: .15rem;
    position: relative;
    z-index: 2;
  }
  .context{
    // border: 1px solid black;
    position: relative;
    z-index: 2;
    text-align: center;
    .left{
      display: inline-block;
      width: .67rem;
      text-align: center;
      vertical-align: top;
      margin-top: 0.05rem;
      margin-right: 0.05rem;
      .headimg{
        width: .6rem;
        height: .6rem;
        border-radius: 100%;
        overflow: hidden;
        padding:0.01rem;
        // border:1px solid black;
        background: -webkit-linear-gradient( bottom, #fff 0%, #000 100%), -webkit-linear-gradient( bottom, #3ab6fe 0%, #a736f6 100% );
        background-clip: content-box, padding-box;
        img{
          width: 100%;
          border-radius: 100%;
        }
      }
      span{
        display: block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        width: .6rem;
        padding-top: .05rem;
        font-size: .12rem;
      }
    }
    .text{
      width: 1.88rem;
      height: 1.15rem;
      display: inline-block;
      background: url(../assets/shouqi-wenzi-beijingkuang@2x.png) no-repeat;
      background-position:center;
      background-size:contain;
      overflow: hidden;
      text-align: center;
      vertical-align: top;
      p{
        width: 80%;
        display: inline-block;
        word-wrap:break-word;
        text-align: left;
        
      }
    }
    .right{
      width: 0.8rem;
      height: 1.15rem;
      display: inline-block;
      background: url(../assets/kuang@2x.png) no-repeat;
      background-position:center;
      background-size:contain;
      overflow: hidden;
      color: white;
      text-align: center;
      margin-left: .04rem;
      .top{
        display: block;
        padding: .1rem 0 0 0;
        font-size: .16rem;
      }
      p{
        width: 0.53rem;
        border-bottom:1px dashed white;
        margin: 0 auto;
        padding: 0.03rem 0 0.08rem 0 ;
        font-size: .30rem;
        font-weight: bold;
        span{
          font-size: .14rem;
        }
      }
      .time{
        font-size: .14rem;
      }
    }
  }
}


</style>
