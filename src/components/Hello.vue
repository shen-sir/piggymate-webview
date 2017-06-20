<template>
  <div class="hello">
    <div v-for="item in list" class="contain">
      <div class="info">
        <div class="headimg">
          <img :src="item.userAvatar">
        </div>
        <div class="text">
          <p class="top">
            <span class="name">{{item.imposterName}}</span><!-- 
             --><span>{{item.createdAt.substr(5, 2)+'月'+ item.createdAt.substr(8, 2) +'日'}}</span><!-- 
             --><span>{{item.createdAt.substr(11, 5)}}</span><!-- 
             --><span>{{item.amount}}局</span>
          </p>
          <p class="tag"><span>{{item.platform}}端</span><span>{{item.level | level}}</span><span>{{item.server.toUpperCase()}}</span><span>{{item.gameMode | level}}</span></p>
        </div>
      </div>
      <div class="state">
        <p>
          <span class="left">共计：{{item.totalPrice}}元</span>
          <span @click="link(item.status==23,item.rateFlag==0)" :class="item.status | classs(item.rateFlag)" class="right">
            {{item.status==23?(item.rateFlag==0?'去评价':'已完成'):item.status | stateText}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
      // this.userid = window.getinfo();
      console.log(this.getlist)
      this.getlist()
      var that = this;
      window.onscroll=function(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(document.body.scrollHeight-scrollTop-window.innerHeight)
        let scrtop = document.body.scrollHeight-scrollTop-window.innerHeight;
        if(scrtop<40){
          that.page++
          that.getlist();
        }
      }
  },
  methods:{
    getlist(){
      // alert('下一页')
      var that = this;
      if(this.isget&&this.noend){
        this.isget = false;
        this.$http.get('/wzry/users/10002/orders?page='+this.page).then(response => {
          that.isget = true;
          console.log(response)
          response.body.wzryImposterOrders.length==0?that.noend=false:that.noend=true;
          for(let i=0;i<response.body.wzryImposterOrders.length;i++){
            that.list.push(response.body.wzryImposterOrders[i])
          }
        }, response => {
          alert('失败')
        });
      }else{
        return
      }
      
    },
    link(v1,v2){
      if(v1&&v2){
        this.$router.push({ name: 'Evaluation', params: { userId: this.userid }})
      }else{
        return
      }
    }
  },
  filters:{
    level(val){
      switch(val){
        case 0:
        return '青铜';
        break;
        case 1:
        return '白银';
        break;
        case 2:
        return '黄金';
        break;
        case 3:
        return '铂金';
        break;
        case 4:
        return '钻石';
        break;
        case 5:
        return '王者';
        break;
        case 6:
        return '荣耀王者';
        break;
        case 'pair':
        return '匹配';
        break;
        case 'rank':
        return '排位';
        break;
      }
    },
    classs(v1,v2,v3){
      if(v1==23&&v2==0){
        // 去评价
        return 'evaluation'
      }else if(v1==23&&v2!=0){
        // 已完成
        return ''
      }else if(v1 == 0||v1 == 10){
        // 待付款
        return 'payment'
      }else if(v1 == 21||v1 == 20){
        // 进行中
        return 'processing'
      }else if(v1 == 22){
        // 已取消
        return ''
      }else{
        return ''
      }
      
    },
    stateText(val){
      switch(val){
        case 0:
        case 10:
        return '待付款';
        break;
        case 20:
        case 21:
        return '进行中'
        break;
        case 22:
        return '已取消'
        break;
        case 30:
        return '已退款'
        break;
        case '已完成':
        return '已完成';
        break;
        case '去评价':
        return '去评价'
        break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.contain{
  .info{
    height: .75rem;
    border-bottom: 1px solid #e5e5e5;
    .headimg{
      height: .51rem;
      width: .51rem;
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
      /*border: 1px solid red;*/
      p{
        margin: 0;
      }
      .top{
        margin-top: .12rem;
        span{
          margin-left: .2rem;
        }
        .name{
          margin: 0;
          overflow:hidden;
          white-space:nowrap;
          display: inline-block;
          text-overflow:ellipsis;
          width: .8rem;
        }
      }
      .tag{
        margin-top: .05rem;
        font-size: .14rem;
        color: #666666;
        span{
          margin-right: .2rem;
        }
      }
    }
  }
  .state{
    border-bottom: 1px solid #e5e5e5;
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
    }
    /*去评价*/
    .evaluation{
      background-color: #ffaa00;
      width: 1rem;
      height: .3rem;
      border-radius: .30rem;
      text-align: center;
      margin-top: .09rem;
      line-height: .32rem;
      color: white;
    }
  }
}


</style>
