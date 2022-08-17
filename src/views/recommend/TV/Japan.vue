<template>
    <div class="recommend-left-main">
        <div class="recommend-left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="recommend-box lefts"> 
                        <img src="@/assets/images/recommend/TV/说唱.webp" alt="">
                    </div>
                    <span class="recommend-font-top">说唱巅峰</span><br>
                    <span class="recommend-font-bottom">第1期川湘说唱厂牌diss大战</span>
        </div>
        <div class="recommend-left-main-right">
            <div class="recommend-main-right-box right1" v-for="(item, index) in lists" :key="index"
                @mouseenter="enters(index)" @mouseleave="leaves()">
                <div class="recommend-box2"><img :src="item.imgurl" alt=""></div>
                <span class="recommend-fonts-top">{{item.name}}</span><br>
                <span class="recommend-fonts-bottom">{{item.names}}</span>
            </div>        
        </div>
        <div class="recommend-right">
            <div class="recommend-right-main mainss" >
                <ul>
                    <li v-for="(items,index) in araye1" :key="index"
                        @mouseenter="arayone(index)" @mouseleave="araysone()"
                        >
                        <span :class="sstt[index]">{{items.num}}</span>
                        <a href="javascript:">{{items.name}}</a>
                        <img src="@/assets/images/recommend/TV/豆瓣.png">
                        <p>{{items.nums}}</p>
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
            araye1 : [{
                num:'1',
                name:'奔跑吧第6季',
                nums:'9.0',
            },{
                num:'2',
                name:'中国说唱巅峰对决',
                nums:'8.7',
            },{
                num:'3',
                name:'萌探探探案第2季',
                nums:'8.5',
            },{
                num:'4',
                name:'极限挑战第8季',
                nums:'8.3',
            },{
                num:'5',
                name:'喜欢你我也是第3季',
                nums:'7.9',
            }],
            sstt:[
                "ss1",
                "ss2",
                "ss3",
                "ss4",
                "ss5"
            ],
            lists:[{
                imgurl : require('@/assets/images/recommend/TV/一起露营吧.webp'),
                name:'一起露营吧',
                names:'第9期：章若楠徒手劈柴看呆陈伟霆 '
            },{
                imgurl : require('@/assets/images/recommend/TV/上班啦妈妈.webp'),
                name:'上班啦妈妈',
                names:'第9期：马丽现场公布二胎计划'
            },{
                imgurl : require('@/assets/images/recommend/TV/萌探探探案2.webp'),
                name:'萌探探探案2',
                names:'第5期：金靖自曝看不起贾玲'
            },{
                imgurl : require('@/assets/images/recommend/TV/喜欢你我也是.webp'),
                name:'喜欢你我也是',
                names:'第12期：李俊良七七双双痛哭 '
            }]
        }
    },
    
     methods:{
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
        arayone(index){
            $(".mainss a").eq(index).css({"color":"rgb(255, 150, 80)"});
            $(".mainss li").eq(index).css({"border": "3px solid rgb(238, 238, 238)","background-color": "rgb(230, 230, 230)"});
        },
        araysone(){
            $(".mainss a").css({"color": "black"});
            $(".mainss li").css({"border": "","background-color": ""});
		},
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