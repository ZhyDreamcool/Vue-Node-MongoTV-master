<template>
        <div class="likely">
			<div class="like">
				<span class="cnxh">猜你喜欢</span>
				<a href=""><span class="change">换一组</span></a>
			</div>
			<div class="work">
				<div class="work1" v-for="(item,index) in changxiao" :key="index">
					<a href=""><img :src="item.imgs" alt=""></a>
					<a href=""><p class="word1">{{item.name}}</p></a>
					<p class="word2">{{item.author}}</p>
					<p class="word3">{{item.introduce}}</p> 
				</div>
			</div>
        </div>
</template>
<script>
export default {
    data(){
		return{
			changxiao:[{
				imgs:require('@/assets/images/books/05.jpg'),
				name:'Fall Guys',
				author:'在这里比胜利更重要的，只有在赢得胜利时看上去越傻越好。抓上你最搞怪的套装，排好队伍——专题游戏秀即将开始！',
				introduce:'永久免费'
			},{
				imgs:require('@/assets/images/books/06.jpg'),
				name:'A Game Of Thrones',
				author:'The Board Game Digital Edition is the digital adaptation of the top-selling strategy board game.',
				introduce:'优惠截止于2022/6/30 23:00'
			},{
				imgs:require('@/assets/images/books/07.jpg'),
				name:'Car Mechanic Simulator 2018',
				author:'将挑战玩家修理、喷涂、与驾驶汽车的能力。',
				introduce:'优惠截止于2022/6/30 23:00'
			},{
				imgs:require('@/assets/images/books/08.jpg'),
				name:'Geneforge 1 - Mutagen',
				author:'一款独立制作的小众经典游戏，于独特世界中享受极高自由度。',
				introduce:'免费 6月30日-7月07日'
			}],
		}
	}
}
</script>