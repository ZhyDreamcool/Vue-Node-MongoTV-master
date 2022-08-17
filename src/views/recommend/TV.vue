<template>
    <div class="recommend-film " id="main">
        <div class="recommend-left">
            <div class="recommend-left-head ">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="电视剧" name="1">
                        <div>
                            <China/>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="综艺" name="2">
                        <div>
                            <Japan/>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="电影" name="3">
                        <div>
                            <USA/>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
    
</template>
<script>
import China from '@/views/recommend/TV/China.vue'
import Japan from '@/views/recommend/TV/Japan.vue'
import USA from '@/views/recommend/TV/USA.vue'
import $ from 'jquery'
export default {
    name:'TV',
    data(){
        return{
            activeNames: ['1','2','3'],
            
        show: function (value) {
			this.$router.push({name: value});//页面跳转
		},
 
        }
    },
    components: {
        China,
        Japan,
        USA
    },
     methods:{
        handleChange(val) {
            console.log(val);
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