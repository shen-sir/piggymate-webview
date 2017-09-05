//0代理
// const _test = 0;
//1 测试服
const _test = 1;
//2 正式服 
// const _test = 2;

export default function(){
	if(_test == 1){
		return 'http://test.api.xiugr.com'
	}else if(_test == 2){
		return 'http://api.xiugr.com'
	}else{
		return ''
	}
	
}