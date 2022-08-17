<template>
        <div class="salable">
			<div class="sala"><span class="cxzp">限时免费</span></div>
			<div class="work">
				<div class="work1" v-for="(item,index) in changxiao" :key="index">
					<a href=""><img :src="item.imgs" alt=""></a>
					<a href=""><p class="word1">{{item.name}}</p></a>
					<p class="word2">{{item.author}}</p>
					<p class="word3">{{item.introduce}}</p>
					<!-- <div class="extra">
						<span class="word4"><img :src="item.icon" alt=""></span>
						<span class="word5">{{item.point}}</span>
						<span class="word6">|</span>
						<span class="word7">{{item.classify}}</span>
						<span class="word6">|</span>
						<span class="word7">{{item.classifies}}</span>
					</div> -->
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
				author:'免费',
				introduce:'在罗焰火心里，价高者得是铁律。而蒲晨来……则恰恰相反。',
				icon:require('@/assets/images/books/star.jpg'),
				point:'9.6',
				classify:'言情',
				classifies:'治愈'
			},{
				imgs:require('@/assets/images/books/06.jpg'),
				name:'世无双',
				author:'大姑娘浪',
				introduce:'前世被我坑惨的常二爷，他重生了！',
				icon:require('@/assets/images/books/star.jpg'),
				point:'10.0',
				classify:'言情',
				classifies:'志怪'
			},{
				imgs:require('@/assets/images/books/07.jpg'),
				name:'朋友的那个完美妻子',
				author:'东坡柚',
				introduce:'朋友娶了完美妻子，我们却被她引上绝路',
				icon:require('@/assets/images/books/graystar.jpg'),
				point:'暂无评分',
				classify:'悬疑',
				classifies:'人性'
			},{
				imgs:require('@/assets/images/books/08.jpg'),
				name:'好天气',
				author:'Judy侠',
				introduce:'在赵穆记忆里，林期作为她的初恋曾是年少最明亮的阳光。',
				icon:require('@/assets/images/books/graystar.jpg'),
				point:'暂无评分',
				classify:'言情',
				classifies:'现代言情'
			}],
		}
	}
}
</script>