<template>
    <div class="edit-main">
        <div class="edit-list">
            <ul>
                <li v-for="(item,index) in data" :key="index" >
                    <a href="javascript:;">
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
                    img:require('@/assets/images/edita-7.jpg'),
                    name:'星辰于我',
                    num:'5万'
            },{
                    img:require('@/assets/images/edita-8.jpg'),
                    name:'再度与你',
                    num:'7万'
            },{
                    img:require('@/assets/images/edita-9.jpg'),
                    name:'嗨，树洞同学',
                    num:'6万'
            },{
                    img:require('@/assets/images/edita-11.jpg'),
                    name:'他那么撩',
                    num:'3万'
            },{
                    img:require('@/assets/images/edita-10.jpg'),
                    name:'不说谎恋人',
                    num:'13万'
            },{
                    img:require('@/assets/images/edita-12.jpg'),
                    name:'恋爱！从今天开始',
                    num:'1万'
            },
            ]
        }
    }
}
</script>