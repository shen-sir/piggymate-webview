<template>
  <div class="contain">
    <div class="top">
      <p>订单详情</p>
      <span class="one">安卓端</span>
      <span class="two">安卓端</span>
      <span class="three">安卓端</span>
      <span class="four">安卓端</span>
    </div>
    <div class="user">
      <div class="head">
        <img src="../assets/h.jpg" >
      </div>
      <span class="name">我是小和蔼123123123</span>
      <span class="icon"></span>
      <span class="num">4.6分</span>
      <span class="Order">236单</span>
    </div>
    <div class="stars">
      <span class="h1">评分</span>
      <span class="star"></span> 
      <span class="star"></span> 
      <span class="star"></span> 
      <span class="star"></span> 
      <span class="star"></span>
    </div>
    <textarea name="" id="" cols="42" rows="10" placeholder="服务如何啊？是大腿吗？开黑过程爽不爽！快快写下评价让大家参考哦~"></textarea>
    <div class="quick">
      <p>快速评价</p>
      <span>水平太差太差</span><span class="cnt">水平太差太差</span><span>水平太差太差</span><span>水平太差太差</span><span class="cnt">水平太差太差</span><span>水平太差太差</span>
    </div>
    <div class="btn">
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
      
      // 
    }
  },
  computed:{

  },
  created(){
     /*this.$http.get().then(response => {
        console.log(response)
      }, response => {
        alert('失败')
      });*/
  },
  methods:{
    page(){
      alert('下一页')
      /*this.$http.get().then(response => {
        console.log(response)
      }, response => {
        alert('失败')
      });*/
    }
  },
  filters:{
    
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
    .cnt{
      margin: 0 .16rem 0 .16rem;
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
