<template>
    <div class="main-1">
			<div class="font-1"><span class="zb">今日重磅游戏 ↓</span></div>
            <div class="inner-1">
				<div class="look-1" v-for="(item,index) in zhongbang" :key="index">
					<div class="left-1">
						<a href=""><img :src="item.imgs" ></a>
					</div>
					<div class="center-1">
							<p class="center1">{{item.name}}</p>
							<p class="center2">{{item.more}}</p>
							<p class="center3">{{item.price}}</p>
							<a href=""><p class="center4">了解详情></p></a>
					</div>
				</div>
			</div>
    </div>
</template>
<script>

export default {
	data:function(){
		return{
			zhongbang:[{
				imgs:require('@/assets/images/books/01.jpg'),
				name:'《A Plague Tale: Requiem》',
				more:'《A Plague Tale: Requiem》- 将于 10 月 18 日推出，走进异象四起的残酷世界，踏上凄婉揪心的旅程。',
				price:'￥暂无价格',
			},{
				imgs:require('@/assets/images/books/02.jpg'),
				name:'《NARAKA: BLADEPOINT》',
				more:'挥舞利刃，斩杀！端起火枪，爆头！享受远近结合的华丽战斗！',
				price:'￥98.00',
			},{
				imgs:require('@/assets/images/books/03.jpg'),
				name:'《哥谭骑士》',
				more:'现在轮到蝙蝠家族来保卫哥谭市了。立即预购，并获得 233 自定义蝙蝠机车皮肤。',
				price:'￥298.00',
			}]	
		}

		
	}
}

</script>
<style scoped>

</style>