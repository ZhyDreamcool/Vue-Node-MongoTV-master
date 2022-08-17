<template>
    <div class="contribute">
        <div class="contribute-newest">
            <span>热门推荐</span>
            <ul>
                <li><a :class="{active : current == 'Edit'}" @click="current='Edit'">日漫精选</a></li>
                <li><a :class="{active : current == 'Newest'}" @click="current='Newest'">国漫精选</a></li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Edit from '@/views/index/Edit'
import Newest from '@/views/index/Newest'
export default {
    name:'orignal',
    data:function(){
        return{
            current:'Edit'
        }
    },
    components:{
        Edit,
        Newest
    }
}
</script>