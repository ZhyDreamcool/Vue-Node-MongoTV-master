<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li >
                    <a href="javascript">
                      <img src="@/assets/images/pictures/music-1.jpg" alt="少年说唱企划" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">少年说唱企划
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/music-2.jpg" alt="脱口秀大会" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">脱口秀大会
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/music-3.jpg" alt="中国好声音" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">中国好声音
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/music-4.jpg" alt="夏日音乐会" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">夏日音乐会
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/music-5.jpg" alt="中国说唱" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">中国说唱
                        <span class="icon-right"></span>
                    </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     name:'music',
    data:function(){
		return {
			
		}
	},

		methods: {
			show: function (value) {
				this.$router.push({name: value});//页面跳转
			}
		}
	}
</script>

<style scoped>
.in-banner img:hover{
  margin-top: 5px;
  margin-right: 5px;
}
</style>