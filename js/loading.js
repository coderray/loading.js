var loading = loading || {};
var types = {
		"ball-pulse":3,
		"ball-grid-pulse":9,
		"ball-clip-rotate":1,
		"ball-clip-rotate-pulse":2,
		"square-spin":1,
		"ball-clip-rotate-multiple":2,
		"ball-pulse-rise":5,
		"ball-rotate":1,
		"cube-transition":2,
		"ball-zig-zag":2,
		"ball-zig-zag-deflect":2,
		"ball-triangle-path":3,
		"ball-scale":1,
		"line-scale":5,
		"line-scale-party":4,
		"ball-scale-multiple":3,
		"ball-pulse-sync":3,
		"ball-beat":3,
		"line-scale-pulse-out":5,
		"line-scale-pulse-out-rapid":5,
		"ball-scale-ripple":1,
		"ball-scale-ripple-multiple":3,
		"ball-spin-fade-loader":8,
		"line-spin-fade-loader":8,
		"triangle-skew-spin":1,
		"pacman":5,
		"ball-grid-beat":9,
		"semi-circle-spin":1
};
	var small = "15px";
	var normal = "25px";
	var big = "40px";
(function(loading) {
	var loaders = '<div class="loader"><div class="loader-inner ball-pulse"><div></div><div></div><div></div></div></div>';
	//初始化动画
	function _init () {		
		var obj = arguments[0];
		var ops = arguments[1];
		var cbFn = null;
		//第二参数为空则将其置为回调函数
		if(typeof(ops)=="function"){
			cbFn = ops;
		}else if(arguments.length==3){
			cbFn = arguments[2];
		}
		var ops2={
			size:"",
			fullscreen:false,
			type:"ball-pulse",
			color:"",
			bgColor:"#ed5565",
			imgs:[]
		};
		//将ops中设置的值赋ops2
		for (var key in ops) {
			ops2[key] = ops[key];
		};
		//重设
		ops = ops2;
		//获取ID	
		var target = document.getElementById(obj);
		if(target==null || !target){//容错
			target = obj;
		}
		//非默认类型
		if(ops.type!="ball-pulse"){
			var length = types[ops.type];
			var str = "";
			for(var i=0;i<length;i++){
				str+="<div></div>";
			}
			str = '<div class="loader"><div class="loader-inner ' + ops.type + '">'+ str + "</div></div>";
			loaders = str;
		}
		//全屏模式
		if(ops.fullscreen){
			var loadWrap = document.createElement("div");
			loadWrap.style.position = "absolute";
			loadWrap.style.width = "100%";
			loadWrap.style.height = "100%";
			loadWrap.style.left = 0;
			loadWrap.style.top = 0;
			document.body.appendChild(loadWrap);
			target = loadWrap;
		}
		//插入
		target.innerHTML = loaders;
		//颜色和大小
		var loader = target.children[0];
		var divs = loader.children[0].getElementsByTagName("div");
		for(var j=0;j<divs.length;j++){
			if(ops.color!=""||ops.color.length!=0){
				divs[j].style.backgroundColor = ops.color;
			}
			
			if(ops.size.length!=0){
				divs[j].style.width = ops.size;
				divs[j].style.height = ops.size;
			}
		}
		//背景
		if(ops.bgColor!=""||ops.bgColor.length>=0){
			loader.style.backgroundColor = ops.bgColor;
		}
		//居中
		loader.style.position = "absolute";
		loader.style.top = "50%";
		loader.style.left = "50%";
		loader.style.marginLeft = -loader.offsetWidth/2 + "px";
		loader.style.marginTop = -loader.offsetHeight/2 + "px";
		//加载
		if (ops.imgs.length>0) {
			loadingFn(ops.imgs,cbFn); 
		}else{
			//若空则加载页面所有img
			var imgs = document.getElementsByTagName("img");
			var srcs = [];
			for(var i=0;i<imgs.length;i++){
				srcs[i] = imgs[i].getAttribute("src");
			}
			loadingFn(srcs,cbFn);
		}	
	}
	//预加载图片
	function loadingFn(imgs,cbFn) {
		var index = 0;
		//若页面没有img
		if(imgs.length==0){
			cbFn && cbFn();
			return;
		}
		for (var i = 0; i < imgs.length; i++) {
			var img = new Image();
			img.src = imgs[i];
			img.onload = function  () {
				index++;
				if (index == imgs.length) {
					cbFn && cbFn();
				};
			}
		};
	}
	//绑定
	loading.init = _init;

})(loading)