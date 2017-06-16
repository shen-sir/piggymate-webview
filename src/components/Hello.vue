<template>
  <div class="hello">
    <div v-for="item in list.list" class="contain">
      <div class="info">
        <div class="headimg">
          <img :src="item.imposterAvatar">
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
        <p><span class="left">共计：{{item.totalPrice}}元</span><span :class="item.status | classs(item.rateFlag)" class="right">{{item.status==23?(item.rateFlag==0?'去评价':'已完成'):item.status | stateText}}</span></p>
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
      list:{
        "list": [{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },
        {
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        },{
          "id": 1, //订单编号
          "imposterUid": 2, //代练UID,
          "imposterName": "带你超神带你飞",  //代练昵称
          "imposterAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //代练头像地址
          "uid": 1, //当前用户ID
          "roomId": 10000, //房间号
          "userName": "小白玩家",  //当前用户昵称
          "userAvatar": "http://og06849ak.bkt.clouddn.com/17-05-29_10:16:07575969.jpg", //用户头像地址
          "platform": "android", //设备平台， ios or android or both
          "level": 0, //适用玩家段位： 0:青铜，1:白银，2:黄金，3:铂金，4:钻石，5:王者，6:荣耀王者
          "server": "qq", //服务器， qq or wechat
          "platform": "android", //设备平台，android or ios
          "gameMode": "pair",   //游戏模式， pair:匹配， rank:排位, others: 其他
          "productId": 1,     //对应的商品ID
          "productName": "王者荣耀代练",     //商品名称
          "productUnit": "局",     //商品单位
          "rateFlag": 1, //评论标识， 0 - 未评论， 1 - 买家已评论， 2 - 卖家已评论， 3 - 已互评
          "amount": 10,    //购买数量
          "parPrice": 10.0,  //单价
          "totalPrice": 100.0, //总价
          "status": 20,  //订单状态, 0 - 待支付，10 - 支付中， 20 - 派单中,  21 - 订单进行中， 22 - 已取消， 23 - 已完成， 30 - 已退款
          "statusMsg": "已取消", //状态更新信息
          "createdAt": "2017-06-12 12:00:00",  //订单创建时间
          "updatdAt": "2017-06-12 14:00:00",  //订单最后更新时间
          "completedAt": "2017-06-14 14:00:00",  //订单完成时间，为空或不存在表示未完成
        }],
        "pagination": {  //分页信息
          "page": 1,  //当前页数
          "total": 100, //记录总数
          "totalPage": 30  //总页数
        }
      },
      page:''
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
