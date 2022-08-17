<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/love-1.jpg" alt="喜欢你我也是" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">喜欢你我也是
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/love-2.jpg" alt="怎么办，脱口秀专场" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">怎么办，脱口秀专场
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/love-3.jpg" alt="青春环游记" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">青春环游记
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/love-4.jpg" alt="少年之名" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">少年之名
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/love-5.jpg" alt="王牌对王牌" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">王牌对王牌
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
     name:'emotion',
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