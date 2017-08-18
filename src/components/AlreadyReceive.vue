<template>
  <div class="hello">

    <div class="background">
      <div class="contain">
        <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.kingdowin.ptm"><img class="left" src="../assets/yaoqingshangxing-shangfen@2x.png"></a>
        <!-- <img @click="tip=true" class="right" src="../assets/yaoqingshangxing-chuandi@2x.png">
        <div style="clear:both;"></div> -->
      </div>
      <div class="list">
        <!-- <div v-for="item in list" class="ticket">
          <div class="text">
            <h1><small>￥</small>{{item.amount}}</h1>
            <p class="one">{{item.content}}</p>
            <p class="two">有效期{{item.validFrom | re}}至{{item.validTo | re}}</p>
          </div>
        </div> -->
        <div class="ticket">
          <div class="text">
            <h1><small>￥</small>10</h1>
            <p class="one">适用于所有段位</p>
            <!-- <p class="two">有效期{{item.validFrom | re}}至{{item.validTo | re}}</p> -->
          </div>
        </div>
      </div>
      <div v-show="tip" class="tip"></div>
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'AlreadyReceive',
  data () {
    return {
      response:this.$route.params.response,
      list:this.$route.params.response.body.coupons,
      tip:false
    }
  },
  computed:{

  },
  created(){
    this.$http.post(http()+'/wechat/signatures',{url:encodeURIComponent(window.location.href.split('#')[0])}).then(response => {
        console.log(response)
        let res = response.body;
        wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wx82e50d11681eed48', // 必填，公众号的唯一标识
        timestamp: res.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.noncestr, // 必填，生成签名的随机串
        signature: res.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
      }, response => {
        alert('服务器开了个小差')
      });
    

    wx.onMenuShareTimeline({
        title: '我送你王者荣耀免费上星券，快点来领吧！', // 分享标题
        link: 'http://api.xiugr.com/dist/index.html#/receive?uid='+this.$route.params.response.body.uid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://api.xiugr.com/dist/static/1.png', // 分享图标
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });

    wx.onMenuShareAppMessage({
        title: '我送你王者荣耀免费上星券，快点来领吧！', // 分享标题
        desc: '我送你王者荣耀免费上星券，快点来领吧！', // 分享描述
        link: 'http://api.xiugr.com/dist/index.html#/receive?uid='+this.$route.params.response.body.uid, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'http://api.xiugr.com/dist/static/1.png', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () { 
            // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
            // 用户取消分享后执行的回调函数
        }
    });
            
    wx.onMenuShareQQ({
        title: '我送你王者荣耀免费上星券，快点来领吧！', // 分享标题
        desc: '我送你王者荣耀免费上星券，快点来领吧！', // 分享描述
        link: 'http://api.xiugr.com/dist/index.html#/receive?uid='+this.$route.params.response.body.uid, // 分享链接
        imgUrl: 'http://api.xiugr.com/dist/static/1.png', // 分享图标
        success: function () { 
           // 用户确认分享后执行的回调函数
        },
        cancel: function () { 
           // 用户取消分享后执行的回调函数
        }
    });

  },
  filters:{
    re(value){
      return value.split(' ')[0];
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.background{
  min-height: 100vh;
  background: url(../assets/yaoqingshangxing-beijing@2x.png) center top / 100vw no-repeat;
  background-color: #490b91;
  overflow: hidden;
  .contain{
    width: 2.35rem;
    /*height: 2.65rem;*/
    margin: 3.38rem auto 0 auto;
    text-align: center;
    /*border:1px solid red;*/
    .left{
      width: 1.05rem;
      // float: left;
    }
    .right{
      width: 1.05rem;
      float: right;
    }
  }
  .list{
    /*border:1px solid black;*/
    margin-top: 1.1rem;
    .ticket{
      /*border:1px solid red;*/
      height: 1.15rem;
      background: url(../assets/youhuiquan-kapian@2x.png) center top / auto 1.15rem no-repeat;
      .text{
        /*border:1px solid blue;*/
        width: 2.2rem;
        margin-left: 1.18rem;
        text-align: center;
        h1{
          padding: 0;
          margin: 0;
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
          margin: 0;
          font-size: .12rem;
          /*margin-top: -0.2rem;*/
        }
      }
    }
  }
  .tip{
    
    /*border:2px solid red;*/
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    background: url(../assets/fenxiang-wenzi@2x.png) right top / 1.5rem no-repeat;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

@media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
    /*iphone 6 plus*/
    .background{
      background: url(../assets/yaoqingshangxing-beijing@3x.png) center top / 100vw no-repeat;
      background-color: #490b91;
    }
}


</style>
