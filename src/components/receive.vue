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
        this.$router.push({ 
          name: 'AlreadyReceive', 
          params: { response: response }
        })
      }, response => {
        alert(response.body)
        this.ishttp = true;
      });
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
