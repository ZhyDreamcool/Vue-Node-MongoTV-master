<template>
    <div class="Carousel">
        <div class="picture"  v-for="(items, inde) in photo" :key="inde">
            <a href="javascript:;"><img :src="items.imgurl"></a>
        </div>
        <div class="picture inside" >
            <ul>
                <li id="name" v-for="(item, index) in text" :key="index">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            timer: 0,
            photo:[{
                imgurl : require('@/assets/images/pictures/slide-3.jpg'),
            },{
                imgurl : require('@/assets/images/pictures/slide-4.jpg'),
            },{
                imgurl : require('@/assets/images/pictures/slide-5.jpg'),
            },{
                imgurl : require('@/assets/images/pictures/slide-6.jpg'),
            }],
            text:[{
                name : '是很熟的味道呀',
            },{
                name : '战至巅峰',
            },{
                name : '开始推理吧',
            },{
                name : '五十公里桃花坞2',
            }]
        }
    },
    mounted: function(){
        var len = $(".picture").find("a");
        var fone = $(".inside").find("li");
        var pos = 0;
        fone.eq(pos).css("color","white")
		setInterval(function(){
			len.eq(pos).hide();//隐藏元素
            fone.eq(pos).css("color","gray");
            pos++;//变量值加1
            if(pos == len.length) pos=0;//变量值重新定义为0
            len.eq(pos).show();//显示元素
            if(pos == fone.length) pos=0;
            fone.eq(pos).css("color","white")
	    },3000);//每隔3秒钟切换元素
    }
}
</script>