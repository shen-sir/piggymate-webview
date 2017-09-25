<template>
  <div class="contain">
    <img class="top" src="../assets/choujiang-huanjie@2x.png">
    <div class="turntable">
      <img class="yinying" src="../assets/yinying@2x.png" >
      <img v-bind:style="styleObject" class="table" src="../assets/qiandao-zhuanpan@2x.png">
      <img v-bind:class="{cercleRotate:isRotate}" class="cercle" src="../assets/choujiang-yuandian@2x.png">
      <!-- <img class="cercle2" src="../assets/choujiang-yuandian@2x.png"> -->
      <img @click="luck" class="center" src="../assets/dianjichoujiang@2x.png">
    </div>
    <img class="bottom" src="../assets/huodongguize@2x.png" >
    <div v-show="winning" class="winning">
      <img class="info" src="../assets/zhongjiangkapian@2x.png" >
      <p>{{winningText}}</p>
      <img @click="btn" class="btn" src="../assets/queding@2x.png">
    </div>
    
  </div>
</template>

<script>
import http from './httprequest'
export default {
  name: 'luckDraw',
  data () {
    return {
      // sytle
      styleObject:{},
      // 装饰是否闪烁
      isRotate:false,
      // 是否还能抽奖
      isDraw:true,
      // 中奖提示框
      winning:false,
      // 中奖文字
      winningText:'-'
    }
  },
  computed:{

  },
  created(){
     
  },
  methods:{
    luck(){
      var that = this;
      if(!this.isDraw){
        return
      }
      this.isDraw = false;
      this.$http.post(http()+'/acts/turn/action').then(response => {
        console.log(response)
        var angle = Number(response.body.poolId)*60
        that.winningText = response.body.title;
        console.log(angle)
        that.styleObject = {
          transform:'rotate('+(360*20+angle)+'deg)',
          transitionProperty:'transform',
          transitionDuration:'8s'
        }
        /*周围闪烁*/
        var intervalId = setInterval(function(){
          that.isRotate = !that.isRotate
        },100)
        setTimeout(function(){
          clearInterval(intervalId)
          that.winning = true;
        },8000)
        /*周围闪烁*/

        
      }, response => {
        console.log(response)
        alert(response.body)
      });

     
    },
    btn(){
      this.isDraw = true;
      this.winning = false;
      this.styleObject = {
        transform : 'rotate(0deg)'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.contain{
  background: url(../assets/beijingg@2x.png) no-repeat;
  background-size:100% auto;
  overflow-x: hidden;
  .top{
    display: block;
    height: 1rem;
    margin: 0 auto;
    margin-top: 2.51rem;
  }
  .turntable{
    width: 3.12rem;
    height: 3.12rem;
    margin: 0 auto;
    position: relative;
    margin-top: .13rem;
    .table{
      position: absolute;
      width: 100%;
      transform:rotate(0deg);
    }
    .cercle{
      position: absolute;
      top:1.5px;
      left: 0px;
      transform:translate(-50%,-50%);
      transform:rotate(0deg);
      width: 100%;
    }
    .cercleRotate{
      transform:rotate(45deg);
    }
    .center{
      position: absolute;
      top:50%;
      left: 50%;
      transform:translate(-50%,-50%);
      width: .8rem;
    }
    .yinying{
      position: absolute;
      width: 3.20rem;
      bottom: -0.16rem;
    }
  }
  .bottom{
    display: block;
    height: 1.5rem;
    margin: 0 auto;
    margin-top: .25rem;
    margin-bottom: .32rem;
  }
  .winning{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background-color: rgba(6, 6, 6, 0.42);
    .info{
      width: 3.10rem;
      position: absolute;
      top:40%;
      left: 50%;
      transform:translate(-50%,-50%);
    }
    p{
      width: 3.10rem;
      text-align: center;
      position: absolute;
      top:40%;
      left: 50%;
      transform:translate(-50%,0.40rem);
      margin-top: 20px;
      color: #ffab00;
      font-size: .2rem;
      font-weight: bold;
      margin: 0;
    }
    .btn{
      position: absolute;
      width: 150px;
      left: 50%;
      top:50%;
      transform:translate(-50%,0.40rem);
    }
  }
}


</style>
