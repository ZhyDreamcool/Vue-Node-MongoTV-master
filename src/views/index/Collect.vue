<template>
    <div id="main">
        <div id="banner">
            <Banner/>
        </div>
        <div id="orignal">
            <Orignal/>
        </div>
        <div id="orignala">
            <Orignala/>
        </div>

        <div id="classify">
                <Classify/>
            </div>
        <div id="change">
            <Change/>
        </div>
    </div>
</template>

<script>
import Change from '@/views/index/Change'
import Classify from '@/views/index/Classify'
import Ranking from '@/views/index/Ranking'
import Banner from '@/views/index/Banner'
import Orignal from '@/views/index/Orignal'
import Orignala from '@/views/index/Orignala'
export default {
	name:'collect',
	components:{
		Banner,
        Orignal,
        Ranking,
        Classify,
        Change,
        Orignala
	}
}
</script>

<style scoped>
@import '~@/assets/css/collect.css';
</style>