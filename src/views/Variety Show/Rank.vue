<template>
    <div class="Banner-Rank Banner-Rank-1">
        <div class="right-rank">
            <div class="tab-handle clearfix">
                <h2>热门排行</h2>
                <ul id="top-rank">
                    <li class="active">
                        <a href="javascript">音乐</a>
                    </li>
                    <li>
                        <a href="javascript">喜剧</a>
                    </li>
                    <li>
                        <a href="javascript">竞技</a>
                    </li>
                </ul>
            </div>

            <div class="tab-content">
                <div class="tab-content-left">
                    <ul>
                        <li>
                            <span class="tab-content-left-text1">1</span>
                            <a href="javascript">奔跑吧！</a>
                            <i class="rank-trend"></i>
                        </li>
                        <li>
                            <span class="tab-content-left-text1">2</span>
                            <a href="javascript">极限挑战</a>
                            <i class="rank-trend"></i>
                        </li>
                        <li>
                            <span class="tab-content-left-text1">3</span>
                            <a href="javascript">喜欢你我也是</a>
                            <i class="rank-trend"></i>
                        </li>
                        <li v-for="(item,index) in data" :key="index">
                            <p>{{item.number}}</p>
                            <a href="javascript:">{{item.name}}</a>
                            <i>{{item.trend}}</i>
                        </li>
                    </ul>
                </div>

                <div class="tab-content-right">
                    <ul>
                        <li v-for="(item,index) in nums" :key="index">
                            <p>{{item.number}}</p>
                            <a href="javascript:">{{item.name}}</a>
                            <i>{{item.trend}}</i>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="in-rank-spacing"></div>
            <ul class="in-rank-recommend">
                <li class="recommend-left">
                    <i class="in-icon-jian"></i>
                    <a href="javascript">奇葩说</a>
                </li>
                <li class="recommend-right">
                    <i class="in-icon-jian"></i>
                    <a href="javascript">开播！情景喜剧</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     name:'rank',
    data:function(){
		return {
			data : [{
             	number:4,
                name:'喜剧总动员',
			},{
				number:5,
                name:'萌探探案',
			},{
			    number:6,
                name:'一起去露营吧',
            },{
			    number:7,
                name:'中国好声音',
            },{
			    number:8,
                name:'怦然心动20岁',
			}],
            nums : [{
             	number:9,
                name:'了不起舞社',
			},{
				number:10,
                name:'一起探恋爱',
			},{
			    number:11,
                name:'脱口秀大会',
            },{
			    number:12,
                name:'王牌对王牌',
            },{
			    number:13,
                name:'欢乐喜剧人 ',
             },{
			    number:14,
                name:'追光吧哥哥！',
             },{
			    number:15,
                name:'蒙面唱将',
             },{
			    number:16,
                name:'麻花特开心',
			}]
		}
	},
}
</script>