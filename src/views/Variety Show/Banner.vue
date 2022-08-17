<template>
    <div class="Nav-title">
        <ul  class="tags-list">
            <li><a :class="{active : current=='Music'}" @click="current='Music'">音乐</a></li>
            <li><a :class="{active : current=='Comedy'}" @click="current='Comedy'">喜剧</a></li>
            <li><a :class="{active : current=='Wisdom'}" @click="current='Wisdom'">益智</a></li>
            <li><a :class="{active : current=='Emotion'}" @click="current='Emotion'">情感</a></li>
            <li><a :class="{active : current=='Sports'}" @click="current='Sports'">竞技</a></li>     
        </ul>
        <component :is="current">
			
		    </component>
    </div>
</template>

<script>
import Music  from '@/views/Variety Show/Music'
import Comedy  from '@/views/Variety Show/Comedy'
import Wisdom  from '@/views/Variety Show/Wisdom'
import Emotion from '@/views/Variety Show/Emotion'
import Sports from '@/views/Variety Show/Sports'

export default {
    name:'banner',
    data: function(){
		return {
			current: 'Music' 
		}
	},
    components: {
  	Music,
    Comedy,
    Wisdom,
    Emotion,
    Sports
  }
}
</script>

<style scoped>

</style>