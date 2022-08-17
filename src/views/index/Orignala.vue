<template>
    <div class="contribute">
        <div class="contribute-newest">
            <span>热门类型</span>
            <ul>
                <li><a :class="{active : current == 'Edita'}" @click="current='Edita'">恋爱校园</a></li>
                <li><a :class="{active : current == 'Newesta'}" @click="current='Newesta'">悬疑惊悚</a></li>
            </ul>
        </div>
        <component :is="current"></component>
    </div>
</template>

<script>
import Edita from '@/views/index/Edita'
import Newesta from '@/views/index/Newesta'
export default {
    name:'orignala',
    data:function(){
        return{
            current:'Edita'
        }
    },
    components:{
        Edita,
        Newesta
    }
}
</script>