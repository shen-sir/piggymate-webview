<template>
  <div class="hello">
    <div class="background">
      <div class="contain">
        <div class="text">
          <span class="left"></span>
          <input v-model="message" type="text">
          <span class="btn"></span>
        </div>
      </div>
      <div @click='send' v-show='showbtn' class="send"></div>
    </div>
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'invitation',
  data () {
    return {
      message:'',
      showbtn:false,
      uid:''
    }
  },
  computed:{

  },
  created(){
    var that = this;
     this.$http.post(http()+'/acts/newreg/invite').then(response => {
        that.message = response.body.code;
        that.uid = response.body.uid;
        that.showbtn = true;
      }, response => {
        alert('服务器开了个小差')
      });
  },
  methods:{
    send(){
      window.webview.invitation()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.background{
  min-height: 100vh;
  background: url(../assets/h5-yaoqing-beijing@2x.png) center top / 100vw no-repeat;
  background-color: #490b91;
  overflow: hidden;
  .contain{
    height: 2.65rem;
    width: 2.69rem;
    margin: 2.66rem auto 0 auto;
    /*border:1px solid red;*/
    background: url(../assets/h5-yaoqing-erweima@2x.png) center top / cover no-repeat;
    position: relative;
    .text{
      /*border: 1px solid blue;*/
      position: absolute;
      bottom: 0;
      margin-left: .27rem;
      margin-bottom: .1rem;
      .left{
        display: inline-block;
        width: .8rem;
        height: .18rem;
        /*margin-top: .02rem;*/
        /*border:1px solid blue;*/
        background: url(../assets/text@2x.png) center center / contain no-repeat;
      }
      input{
        width: .67rem;
        height: .18rem;
        padding:0;
        border:0;
        border-radius: .07rem;
        -webkit-user-select: auto !important;
        font-size: .12rem;
        vertical-align: top;
        text-align: center;
      }
      .btn{
        display: inline-block;
        width: .6rem;
        height: .18rem;
        /*border:1px solid black;*/
        background: url(../assets/copy@2x.png) center top / contain no-repeat;
      }
    }
  }
  .send{
    width: 1.38rem;
    height: .42rem;
    margin:.15rem auto 0 auto;
    background: url(../assets/h5-yaoqing-anniu@2x.png) center top / cover no-repeat;
  }
}

@media (min-device-width : 414px) and (max-device-width : 736px) and (-webkit-min-device-pixel-ratio : 3){
    /*iphone 6 plus*/
    .background{
      background: url(../assets/h5-yaoqing-beijing@3x.png) center top / 100vw no-repeat;
      background-color: #490b91;
      .contain{
        background: url(../assets/h5-yaoqing-erweima@3x.png) center top / cover no-repeat;
        .left{
          background: url(../assets/text@3x.png) center center / contain no-repeat;
        }
        .btn{
          background: url(../assets/copy@3x.png) center top / contain no-repeat;
        }
      }
      .send{
        background: url(../assets/h5-yaoqing-anniu@3x.png) center top / cover no-repeat;
      }
    }
}


</style>
