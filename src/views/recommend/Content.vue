<template>
    <div class="recommend-content">
        <div class="recommend-headings">
            <span>新片速递</span>
        </div>       

        <div class="recommend-box-outside" >
            <div class="recommend-box-inner">
                <div class="recommend-inner-box" v-for="(item,index) in photo" :key="index"
                @mouseenter="enter(index)" @mouseleave="leave()">
                    <ul>
                        <li v-show="arry"> 
                        <div class="recommend-inner-photo"   >    
                            <a href="javascript:" >
                                <img :src="item.img" alt="">
                                <div class="recommend-inner-font">{{item.inner}}</div>
                                <span class="recommend-font-top">{{item.name}}</span><br>
                                <span class="recommend-font-bottom">{{item.text}}</span>
                            </a>
                        </div>
                        </li>
                        <li  v-show="arrys&&index==current">
                            <div class="recommend-inner-video">
                                <a href="javascript:" >
                                    <ul>
                                        <li><video :src="item.video" controls="recommend-controls"></video></li>
                                        <li>
                                            <div class="recommend-two">
                                                <span class="recommend-twa">{{item.name}}</span><br>
                                                <span class="recommend-twb">&nbsp;{{item.title}}&nbsp;</span>
                                                <p>{{item.text1}}</p>
                                                <button>立即观看 </button>
                                            </div>
                                        </li>
                                    </ul>
                                </a>
                            </div>
                        </li>
                    </ul>    
                </div>
            </div>        
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            current:0,
            arry:true,
            arrys:false,
            photo:[{
                img : require('@/assets/images/recommend/content/爱情应该有的样子.webp'),
                inner : '更至19集' ,
                name : '爱情应该有的样子',
                text : '杨颖赖冠霖浪漫姐弟恋',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'偶像',
                text1:'简介：看似拥有完美人生的尹亦可，过着理所当然的35岁生活，无论在公司还是在家里，总能够周全妥帖，如同永不疲惫的神奇女侠一般，照顾着身边每一个人，却唯独忘了温暖自己。直至在便利店一角偶遇儿时经常去家里蹭饭、现在已是一位阳光少年的徐光兮，一抹阳光照进了她的内心。徐光兮留学归国后再遇亦可，儿时的依赖不知不觉变成了难以抑制的心动，但追逐亦可对于光兮而言并不是件容易的事，这意味着承受飞速快进的人生进度和超负荷的现实压力，但因为爱，在漫长岁月中，光兮变得愈发成熟，重新调整好步伐，坚定地走向亦可。两颗悸动的心一点点地靠近，也明白了最好的爱情不是相互牺牲，而是相互吸引，相互尊重，让彼此都',
            },{
                img : require('@/assets/images/recommend/content/关于唐医生的一切.webp'),
                inner : '更至14集' ,
                name : '关于唐医生的一切',
                text : '秦岚打造最强心外科',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'家庭',
                text1:'简介：在国外行医多年的女外科医生唐佳瑜，空降北京安和济生医院成立心脏中心，与医务处长欧阳真予不打不相识，和麻醉医生叶弈明渐渐发展为知己。同时，她带领重病组五位成员：秦大中、龙向东、周达、廖小波、江百列共同救治28起罕见心脏病例，并成功研发国产“全磁悬浮人工心脏“，改写了中国心外历史，最终实现自我救赎，收获了幸福的故事。',

            },{
                img : require('@/assets/images/recommend/content/警察荣誉.webp'),
                inner : '12集全' ,
                name : '警察荣誉',
                text : '奈何boss要娶我高甜原作',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'恋爱',
                text1:'简介：十八线女艺人夏林身患”血癌”，濒临萠溃的夏林为了活下去抓住了霸道总裁凌异洲抛出的带刺橄榄枝——要想得到配型骨髓就得和凌异洲结婚。'
                    +'为尽早接受骨髓移植，同时继续开展个人演绎事业，夏林和凌异洲协议隐婚，一段“蓄谋已久的”爱情就此拉开序幕。',

            },{
                img : require('@/assets/images/recommend/content/跑男.webp'),
                inner : '44集全' ,
                name : '奔跑吧兄弟第六季',
                text : '冷面王爷缠上刁蛮丫头',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'恋爱 其它',
                text1:'简介： “慕先生，说好了就当你女儿的保姆妈妈，你怎么越管越宽了？我和谁见面，我有几个男性朋友这种事不在契约范围内！'
                    +'还有，当初谁在契约里定的‘不允许爱上你’，你不会忘了吧？” “我毁约了，违约金是我和我女儿，还款期限是一辈子，章小姐，你愿意收下吗？”',

            },{
                img : require('@/assets/images/recommend/content/中国说唱巅峰对决.webp'),
                inner : '38集全' ,
                name : '中国说唱巅峰对决',
                text : '狄仁杰携重案组绝地追击',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'战斗 冒险 魔幻',
                text1:'简介：元芳杨戬平安醒来，重案组似乎回到了平稳的日常。但峡谷里暗流汹涌未曾停歇，黑幕仍未分明。'
                    +'敌暗我明，狄仁杰要如何带领众人破局？阴谋诡术与秩序侠义，谁更胜一筹？2月16日，《峡谷重案组》第二季为您呈现。',

            },{
                img : require('@/assets/images/recommend/content/破事精英.webp'),
                inner : '13集全' ,
                name : '破事精英',
                text : '热血少年误闯梦境救世界',
                video: require('@/assets/images/recommend/过.mp4'),
                title:'搞笑.战斗.冒险.魔幻',
                text1:'简介：逗比少年任小冲被两个看似可爱实则腹黑的老猫精拐骗到梦界，在美女塔主白姐姐的“调教”下成为了笛见塔新一任的化梦武士，'
                    +'然而在塔中竟然遇见了现实世界的死对头武伽！现实世界中的警官和小混混不得不组队化梦，梦界中的法则也随之揭开，任小冲从此开启了他一路挨打升级拯救世界的全新生活。',
            }]
        }
    },
    methods:{
		enter(index){
            $(".inner-box").css({"left": -190 * index});
            if(index==5){
                $(".inner-box").css({"left": -165 * index});
            }
            this.arrys=true;
            this.current = index;
        },
        leave(){
            $(".inner-box").css({"left": 0});
            this.arrys=false,
            this.arry=true
		}
    }
}
</script>