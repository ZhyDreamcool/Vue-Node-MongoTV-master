<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports-1.jpg" alt="奇葩说第七季" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">奇葩说第七季
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports-2.jpg" alt="奔跑吧" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">奔跑吧
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports-3.jpg" alt="情景剧" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">情景剧
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/sports-4.jpg" alt="三个少年" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">三个少年
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/sports-5.jpg" alt="嗨放派" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">嗨放派
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
     name:'wisdom',
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
