<template>
  <div class="hello">
    <div class="background">
      <div class="contain">
        <input v-model="phone" type="tel" placeholder="请输入您的手机号">
        <div @click="send" class="btn"></div>
      </div>
      <!-- <div class="send"></div> -->
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'receive',
  data () {
    return {
      //邀请人uid
      prevuid:this.$route.query.uid,
      phone:'',
      ishttp:true
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
  methods:{
    send(){
      if(!(/^1[34578]\d{9}$/.test(this.phone)) && this.ishttp){ 
          alert("手机号码有误，请重填");  
          return false; 
      }
      this.ishttp = false;
      this.$http.post(http()+'/acts/newreg/'+this.prevuid+'/demand',{phone:this.phone}).then(response => {
        console.log(response)
      }, response => {
        // alert(response.body)
        this.ishttp = true;
      });
      this.$router.push({ 
          name: 'AlreadyReceive'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.background{
  min-height: 100vh;
  background: url(../assets/yaoqingshangfen-beijing@2x.png) center top / 100vw no-repeat;
  background-color: #490b91;
  overflow: hidden;
  .contain{
    height: 2.65rem;
    width: 2.69rem;
    margin: 2.86rem auto 0 auto;
    /*border:1px solid red;*/
    background: url(../assets/yaoqingshangfen-shoujihao@2x.png) center top / 2.65rem no-repeat;
    position: relative;
    input{
      padding: 0;
      border:0;
      width: 2.32rem;
      height: .4rem;
      border: .03rem solid #ffba00;
      border-radius: .3rem;
      margin-top: .5rem;
      margin-left: .15rem;
      text-align: center;
      -webkit-user-select: auto !important;
    }
    .btn{
      height: .45rem;
      width: 1.6rem;
      margin-top: .31rem;
      margin-left: .5rem;
    }
  }
}

@media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
    /*iphone 6 plus*/
    .background{
      background: url(../assets/yaoqingshangfen-beijing@3x.png) center top / 100vw no-repeat;
      background-color: #490b91;
      .contain{
        background: url(../assets/yaoqingshangfen-shoujihao@3x.png) center top / 2.65rem no-repeat;
        
      }
      .send{
        background: url(../assets/h5-yaoqing-anniu@3x.png) center top / cover no-repeat;
      }
    }
}


</style>
