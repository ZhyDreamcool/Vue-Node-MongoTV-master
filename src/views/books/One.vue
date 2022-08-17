<template>
<div>
	<div class="banner">
  	<div class="banner-1">
		<a href="javascript:;"><img src="@/assets/images/books/3.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/2.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/1.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/4.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/5.jpg" /></a>
		<a href="javascript:;"><img src="@/assets/images/books/6.jpg" /></a>
	</div>
	<div class="banner-2" >
		<ul v-for="(item,index) in youfenlei" :key="index">
			<li><a class="a1" href="">{{item.class}}</a></li>
		</ul>
	</div>
	</div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'banner-1',
	mounted: function(){
		var len = $(".banner-1").find("a");//获取广告图片
	var pos = 0;//定义变量值为0
	setInterval(function(){
		len.eq(pos).hide();//隐藏元素
    	pos++;//变量值加1
    	if(pos == len.length) pos=0;//变量值重新定义为0
    	len.eq(pos).show();//显示元素
	},2000);//每隔2秒钟切换元素
	},
	data(){
		return{
			youfenlei:[
				{class:'畅销排行'
			},{
				class:'免费游戏'
			},{
				class:'PC游戏'
			},{
				class:'主机游戏'
			},{
				class:'特惠游戏'
			},{
				class:'全新发行'
			},{
				class:'拥有游戏'
			},{
				class:'最近更新'
			},{
				class:'领券中心'
			},{
				class:'专题活动'
			},{
				class:'查看更多'
			}]
		}
	}
}
</script>
