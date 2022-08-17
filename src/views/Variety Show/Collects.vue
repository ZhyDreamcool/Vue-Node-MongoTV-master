<template>
   <div id="content">
       <div id="Top">
           <Carousel/>
       </div>
       <div id="center">
            <Hot/>
            <High/>
            <List/>
       </div>
       <div id="bottom">
           <div id="bottom-left">
               <Banner/>
           </div>
           <div id="bottom-right">
                <Rank/>
           </div>
       </div>
   </div>
</template>

<script>
import Carousel from '@/views/Variety Show/Carousel'
import Hot from '@/views/Variety Show/Hot'
import High from '@/views/Variety Show/High'
import List  from '@/views/Variety Show/List'
import Banner from '@/views/Variety Show/Banner'
import Rank from '@/views/Variety Show/Rank'
export default {
    name:'collects',
    components:{
        Carousel,
        List,
        Hot,
        High,
        Banner,
        Rank
    }
}
</script>

<style scoped>
@import '~@/assets/css/Variety Show.css';
</style>