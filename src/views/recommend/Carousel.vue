<template>
    <div class="recommend-Carousel">
        <div class="recommend-Carousel-img">
            <el-carousel  :interval="4000" type="card" height="400px">
                <el-carousel-item v-for="item in img" :key="item.id">
                    <img :src="item.imgs">
                </el-carousel-item>
            </el-carousel>
        </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
            
            img:[
                {
                    id:0,
                    name:1,
                    imgs:require("../../assets/images/recommend/Carousel/向往的生活.webp")
                },{
                    id:1,
                    name:12,
                    imgs:require("../../assets/images/recommend/Carousel/你好星期六.webp")
                },{
                    id:2,
                    name:123,
                    imgs:require("../../assets/images/recommend/Carousel/萌探探探案.webp")
                },{
                    id:3,
                    name:1234,
                    imgs:require("../../assets/images/recommend/Carousel/关于唐医生的一切.webp")
                }
            ]
        }
    },
    
}
</script>
