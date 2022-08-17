<template>
    <div id="main">
        <Carousel/>
        <Preview/>
        <Content/>
        <TV/>
        <Classify/>
    </div>
</template>
<script>
import Carousel from '@/views/recommend/Carousel.vue'
import Content from '@/views/recommend/Content.vue'
import TV from '@/views/recommend/TV.vue'
import Preview from '@/views/recommend/Preview.vue'
import Classify from '@/views/recommend/Classify.vue'
export default {
    name : 'v-video',
    components:{
        Carousel,
        Content,
        TV,
        Preview,
        Classify
    }
}
</script>
<style scoped>
@import '~@/assets/css/recommend.css';

</style>