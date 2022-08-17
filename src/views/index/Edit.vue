<template>
    <div class="edit-main">
        <div class="edit-list">
            <ul>
                <li v-for="(item,index) in data" :key="index" @mouseenter="img" @mouseleave="leave">
                    <a @click="jump('',`${item.type}`)" >
                        <img :src="item.img" :title="item.name">
                    </a>
                    <p class="text2"><a href="javascript:;">{{item.name}}</a></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'edit',
    data:function(){
        return{
            data:[
                {
                    img:require('@/assets/images/edit-1.jpg'),
                    name:'我的青春恋爱物语',
                    type:'edit-1'
            },{
                    img:require('@/assets/images/edit-2.jpg'),
                    name:'玉子爱情故事',
                    type:'edit-2'
            },{
                    img:require('@/assets/images/edit-3.jpg'),
                    name:'魔女们的终与末',
                    type:'edit-3'
            },{
                    img:require('@/assets/images/edit-4.jpg'),
                    name:'我的青春',
                    type:'edit-4'
            },{
                    img:require('@/assets/images/edit-5.jpg'),
                    name:'狼崽养成指南',
                    type:'edit-5'
            },{
                    img:require('@/assets/images/edit-6.jpg'),
                    name:'偷偷藏不住',
                    type:'edit-6'
            },
            ]
        }
    },
    methods: {
			jump(index,type){
				if(type=='edit-1'){
				//该路由在router---index.js里已配置
					this.$router.push('/Detail');  
				}else if(type=='edit-2'){
					this.$router.push('/Light');
				}else if(type=='edit-6'){
					this.$router.push('/Steal');
				}
			}
		},
        
}
</script>

<style scoped>

</style>