<template>
    <div class="recommend-left-main">
        <div class="recommend-left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="recommend-box lefts"> 
                        <img src="@/assets/images/recommend/TV/弱点.webp" alt="">
                    </div>
                    <span class="recommend-font-top">弱点</span><br>
                    <span class="recommend-font-bottom">老妇人培育运动明星</span>
        </div>
        <div class="recommend-left-main-right">
            <div class="recommend-main-right-box right1" v-for="(item, index) in lis" :key="index"
                @mouseenter="enters(index)" @mouseleave="leaves()">
                <div class="recommend-box2"><img :src="item.imgurl" alt=""></div>
                <span class="recommend-fonts-top">{{item.name}}</span><br>
                <span class="recommend-fonts-bottom">{{item.names}}</span>
            </div>        
        </div>
         <div class="recommend-right">
            <div class="recommend-right-main mainsss" >
                <ul>
                    <li v-for="(item,index) in araye2" :key="index"
                        @mouseenter="aray2(index)" @mouseleave="arays2()"
                        >
                        <span :class="sstt[index]">{{item.num}}</span>
                        <a href="javascript:">{{item.name}}</a>
                        <img src="@/assets/images/recommend/TV/豆瓣.png">
                        <p>{{item.nums}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            current: 'China',
            araye2 : [{
                num:'1',
                name:'月球陨落',
                nums:'9.0',
            },{
                num:'2',
                name:'龙岭迷窟',
                nums:'8.7',
            },{
                num:'3',
                name:'驱魔天师',
                nums:'8.5',
            },{
                num:'4',
                name:'边缘行者',
                nums:'8.3',
            },{
                num:'5',
                name:'大红狗',
                nums:'7.9',
            }],
            sstt:[
                "ss1",
                "ss2",
                "ss3",
                "ss4",
                "ss5"
            ],
            lis:[{
                imgurl : require('@/assets/images/recommend/TV/闻香识女人.webp'),
                name:'闻香识女人',
                names:'阿尔帕西诺最美探戈'
            },{
                imgurl : require('@/assets/images/recommend/TV/录取通知.webp'),
                name:'录取通知',
                names:'无厘头少年自办大学'
            },{
                imgurl : require('@/assets/images/recommend/TV/我是山姆.webp'),
                name:'我是山姆',
                names:'7岁爸爸暖心父女情'
            },{
                imgurl : require('@/assets/images/recommend/TV/美丽心灵.webp'),
                name:'美丽心灵',
                names:'精分数学家的传奇人生'
            }]
        }
    },
    
     methods:{
        show: function (value) {
			this.$router.push({name: value});//页面跳转
		},
		enter(){
            $(".lefts img").css({"transform": "scale(1.1)"});
        },
        leave(){
            $(".lefts img").css({"transform": "scale(1)"});
		},
        enters(index){
            $(".right1 img").eq(index).css({"transform": "scale(1.2)"});
        },
        leaves(){
            $(".right1 img").css({"transform": "scale(1)"}); 
		},
        aray2(index){
            $(".mainsss a").eq(index).css({"color":"rgb(255, 150, 80)"});
            $(".mainsss li").eq(index).css({"border": "3px solid rgb(238, 238, 238)","background-color": "rgb(230, 230, 230)"});
        },
        arays2(){
            $(".mainsss a").css({"color": "black"});
            $(".mainsss li").css({"border": "","background-color": ""});
		}
    }
}
</script>
<style scoped>
.active{
    background-color: #fa7373;
}
.ss1{
    color: #ff3a3a;
}
.ss2{
    color: #ff8b33;
}
.ss3 {
    color: #ffbd59;
}
.ss4,.ss5 {
    color: #adadad;
}
</style>