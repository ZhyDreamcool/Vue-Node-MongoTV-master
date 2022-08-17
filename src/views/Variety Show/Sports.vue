<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/cultivate-1.jpg" alt="战至巅峰" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">战至巅峰
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/cultivate-2.jpg" alt="一站到底" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">一站到底
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/cultivate-3.jpg" alt="令人心动的offer" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">令人心动的offer
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/cultivate-4.jpg" alt="开始推理吧" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">开始推理吧
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/cultivate-5.gif" alt="这就是街舞！" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">这就是街舞！
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
     name:'sports',
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
