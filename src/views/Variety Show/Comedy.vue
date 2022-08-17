<template>
    <div class="Banner-Rank">
        <div class="Banner-wr">
            <ul class="in-banner">
                <li>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role-1.jpg" alt="去野吧餐厅" class="img-1">
                    <span class="in-banner-name-1 in-banner-name-box">去野吧餐厅
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role-2.jpg" alt="追星星的人" class="img-2">
                    <span class="in-banner-name-2 in-banner-name-box">追星星的人
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role-4.jpg" alt="哈哈哈哈哈" class="img-3">
                    <span class="in-banner-name-3 in-banner-name-box">哈哈哈哈哈
                        <span class="icon-right"></span>
                    </span>
                    </a>
                     <a href="javascript">
                      <img src="@/assets/images/pictures/role-3.jpg" alt="萌探探案" class="img-4">
                    <span class="in-banner-name-4 in-banner-name-box">萌探探案
                        <span class="icon-right"></span>
                    </span>
                    </a>
                    <a href="javascript">
                      <img src="@/assets/images/pictures/role-5.jpg" alt="真相吧花花万物" class="img-5">
                    <span class="in-banner-name-5 in-banner-name-box">真相吧花花万物
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
     name:'comedy',
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
