<template>
    <div class="recommend-left-main">
        <div class="recommend-left-main-left " @mouseenter="enter()" @mouseleave="leave()">
                    <div class="recommend-box lefts"> 
                        <img src="@/assets/images/recommend/TV/关于唐医生的一切.jpg" alt="">
                    </div>
                    <span class="recommend-font-top">关于唐医生的一切</span><br>
                    <span class="recommend-font-bottom">[更新至第14集]王耀庆出轨求秦岚复合</span>
        </div>
        <div class="recommend-left-main-right">
            <div class="recommend-main-right-box right1" v-for="(item, index) in lis" :key="index"
                @mouseenter="ente(index)" @mouseleave="leav()">
                <div class="recommend-box2"><img :src="item.imgurl" alt=""></div>
                <span class="recommend-fonts-top">{{item.name}}</span><br>
                <span class="recommend-fonts-bottom">{{item.names}}</span>
            </div>        
        </div>
         <div class="recommend-right">
            <div class="recommend-right-main mains" >
                <ul>
                    <li v-for="(items,index) in araye" :key="index"
                        @mouseenter="aray(index)" @mouseleave="arays()"
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
            araye : [{
                num:'1',
                name:'关于唐医生的一切',
                nums:'9.0',
            },{
                num:'2',
                name:'爱情应该有的样子',
                nums:'8.7',
            },{
                num:'3',
                name:'警察荣誉',
                nums:'8.5',
            },{
                num:'4',
                name:'破事精英',
                nums:'8.3',
            },{
                num:'5',
                name:'暗夜行者',
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
                imgurl : require('@/assets/images/recommend/TV/终于轮到我恋爱了.jpg'),
                name:'终于轮到我恋爱了',
                names:'罗正林昕宜偶数癖霸总误宠替身甜妻！'
            },{
                imgurl : require('@/assets/images/recommend/TV/二进制恋爱.jpg'),
                name:'二进制恋爱',
                names:'[第14集]王耀庆出轨求秦岚复合'
            },{
                imgurl : require('@/assets/images/recommend/TV/齐丑无艳之破镜重圆.jpg'),
                name:'齐丑无艳之破镜重圆',
                names:'战场女神定海神针，宣王追妻路漫漫！'
            },{
                imgurl : require('@/assets/images/recommend/TV/周生如故.jpg'),
                name:'周生如故',
                names:'为你明灯三千，为你花开满城'
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
        ente(index){
            $(".right1 img").eq(index).css({"transform": "scale(1.2)"});
        },
        leav(){
            $(".right1 img").css({"transform": "scale(1)"}); 
		},
        aray(index){
            $(".mains a").eq(index).css({"color":"rgb(255, 150, 80)"});
            $(".mains li").eq(index).css({"border": "3px solid rgb(238, 238, 238)","background-color": "rgb(230, 230, 230)"});
        },
        arays(){
            $(".mains a").css({"color": "black"});
            $(".mains li").css({"border": "","background-color": ""});
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