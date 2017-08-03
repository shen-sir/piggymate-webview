const _LEVELS = {
	'1': '倔强青铜',
	'2': '秩序白银',
  '3': '荣耀黄金' ,
	'4':'尊贵铂金',
	'50':'永恒钻石5',
	'51': '永恒钻石4',
	'52':'永恒钻石3',
	'53':'永恒钻石2',
	'5':'永恒钻石1',
	'60':'至尊星曜5',
	'61':'至尊星曜4',
	'62':'至尊星曜3',
	'63':'至尊星曜2',
	'6': '至尊星曜1',
	'70':'最强王者1-10星',
	'71':'最强王者11-20星',
	'7':'最强王者21星以上'
};

const _SERVERS = {
  'all': '全部',
  'qq': 'QQ',
  'wechat': '微信'
};

const _PLATFORMS = {
  'all': '全部',
  'android': 'Android',
  'ios': 'iOS'
};

const _GAME_MODES = {
  'rank': '排位',
  'pair': '匹配',
  'others': '其他'
}


export default {
  level(lv){
    return _LEVELS[lv] 
  },
  server(svr){
    return _SERVERS[svr]
  },
  platform(platform){
    return _PLATFORMS[platform]
  },
  gameMode(mode){
    return _GAME_MODES[mode]
  },
  orderClass(status,notRated){
    switch(status){
      case 23:
        return notRated ? 'evaluation' : ''
      case 0:
      case 10:
        return 'payment'
      case 21:
      case 20:
        return 'processing'
      return 'cancel'
    }
  },  
  orderStatus(val){
    switch(val){
      case 0:
      case 10:
      return '去支付';
      case 20:
      case 21:
      return '进行中'
      case 22:
      case 24:
      return '已取消'
      case 90:
      return '已超时';
      case 30:
      return '已退款'
      case '已完成':
      return '已完成';
      case '去评价':
      return '去评价'
    }
  }
}
