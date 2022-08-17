<template>
    <div class="preview">
        <div class="preview-main" >
            <div class="preview-header">
                <span>继续看</span> 
            </div>    
            <div class="preview-boxes" v-for="(item,index) in ph" :key="index">
                <div class="preview-main-header" >
                    <div >
                        <img src="../../assets/images/recommend/preview/箭头灰.png" alt="">
                        <span>{{item.weeks}}</span>
                    </div>
                </div>
                <div class="preview-main-footer">
                    <div class="preview-inner" @mouseenter="begin(index)" @mouseleave="end()"
                     v-show="even">
                        <div class="preview-img">
                            <img style=" width: 270px;"  :src="item.img2" alt="">
                            <div class="img-bottom">
                                <div>
                                    <p>{{item.num}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="preview-font">
                            <span>{{item.name}}</span>
                            <p>{{item.names}}</p>
                        </div>
                    </div>
                    <div class="preview-inner-none" v-show="evens&&curr==index">
                        <div class="inner-none-video">
                            <video :src="item.videos" autoplay="autoplay" muted="muted" controls="controls"></video>
                        </div>
                        <div class="inner-none-box">
                            <div class="inner-none-box-fone"><span>{{item.name3}}</span></div>
                            <div class="inner-none-box-fone1">
                                <span>{{item.title1}}</span>
                                <span>{{item.title2}}</span>
                            </div>
                            <div class="inner-none-box-fone2">
                                <p>{{item.text}}</p>
                            </div>
                            <div class="inner-none-box-fone3">
                                <input type="button" value="立即观看"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            even:true,
            evens:false,
            curr:0,
            ph:[{
                weeks: '刚刚',
                img2 : require('@/assets/images/recommend/preview/嗨放派.webp'),
                num:'10-16期',
                name:'嗨放派之任嘉伦白鹿憋笑挑战憋到哭 魏大勋王嘉尔魔性播报新闻',
                names:'已看完',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'嗨放派之任嘉伦白鹿憋笑挑战憋到哭 魏大勋王嘉尔魔性播报新闻',
                title1:'搞笑',
                title2:'益智',
                text:'嗨放硬核大脑比拼即将开战！白鹿给嚼放派成员送石榴，任嘉伦憋笑挑战憋到哭，魏大勋王嘉尔魔性播报新闻，陈飞宇举手打报告也太可爱了行五人通过五个实验与大脑进行傅弃，一起看成员们如何花式应对。'
            },{
                weeks: '2天前',
                img2 : require('@/assets/images/recommend/preview/三个少年.webp'),
                num:'06-02期',
                name:'三个少年之吴彤问宋亚轩害怕过气吗 唐九洲现场开摆杂货铺',
                names:'已看81%',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'第10期 吴彤问宋亚轩害怕过气吗',
                title1:'内地',
                title2:'文化',
                text:'三个少年之吴彤问宋亚轩害怕过气吗 唐九洲现场开摆杂货铺'
            },{
                weeks: '2天前',
                img2 : require('@/assets/images/recommend/preview/中国说唱.webp'),
                num:'06-25期',
                name:'中国说唱巅峰对决先导片 24位顶级Rapper集结！热狗GAI金曲串烧',
                names:'已看99%',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'先导片 24位巅峰Rapper集结！',
                title1:'爱奇艺出演',
                title2:'竟演',
                text:'中国说唱巅峰对决先导片 24位顶级Rapper集结！热狗GAI金曲串烧'
            },{
                weeks: '一周前',
                img2 : require('@/assets/images/recommend/preview/遇见你真好.webp'),
                num:'02-23期',
                name:'第5期：神秘女四身材惊艳宣仪',
                names:'已看完',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'紫川',
                title1:'真人秀',
                title2:'爱情',
                text:'简介：《紫川》动画改编自老猪同名小说，由企鹅影视出品，讲述了神话般的西川大陆，一代代的热血传奇：人类帝国之内，遥远神秘的东方家族里，紫川三杰雄起！大哥帝林沉稳多谋冷酷理智，二哥斯特林统军有方忠君爱国，老三紫川秀被人称之为无赖，却又智勇双全。紫川家族内忧外患，紫川三杰各显神通：'
                +'紫川秀在关键时刻击退凶狠魔族，孤身闯虎穴追杀叛逆雷洪；斯特林以家族为重，无情而又深情惜别恋人…人类、魔族、兽族、远东各族，在这片大陆上纷纷扰扰，纠葛不断。在血与火的交融中，刀与剑的碰撞中，构成了庞大的史诗般的故事——紫川。动画描绘了一个独特奇妙的世界，将一群不同性格的人物，一个个展现出来，谱写了一曲既壮烈，又凄婉的传奇悲歌……'
            },{
                weeks: '两周前',
                img2 : require('@/assets/images/recommend/preview/紫川.png'),
                num:'地12集',
                name:'紫川',
                names:'已看完',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'紫川',
                title1:'2021',
                title2:'国内',
                text:'简介：《紫川》动画改编自老猪同名小说，由企鹅影视出品，讲述了神话般的西川大陆，一代代的热血传奇：人类帝国之内，遥远神秘的东方家族里，紫川三杰雄起！大哥帝林沉稳多谋冷酷理智，二哥斯特林统军有方忠君爱国，老三紫川秀被人称之为无赖，却又智勇双全。紫川家族内忧外患，紫川三杰各显神通：'
                +'紫川秀在关键时刻击退凶狠魔族，孤身闯虎穴追杀叛逆雷洪；斯特林以家族为重，无情而又深情惜别恋人…人类、魔族、兽族、远东各族，在这片大陆上纷纷扰扰，纠葛不断。在血与火的交融中，刀与剑的碰撞中，构成了庞大的史诗般的故事——紫川。动画描绘了一个独特奇妙的世界，将一群不同性格的人物，一个个展现出来，谱写了一曲既壮烈，又凄婉的传奇悲歌……'
            },{
                weeks: '两周前',
                img2 : require('@/assets/images/recommend/preview/黑狐之绝地营救.webp'),
                num:'%',
                name:'黑狐之绝地营救',
                names:'已看完',
                videos:require('@/assets/images/recommend/过.mp4'),
                name3:'紫川',
                title1:'2021',
                title2:'国内',
                text:'简介：《紫川》动画改编自老猪同名小说，由企鹅影视出品，讲述了神话般的西川大陆，一代代的热血传奇：人类帝国之内，遥远神秘的东方家族里，紫川三杰雄起！大哥帝林沉稳多谋冷酷理智，二哥斯特林统军有方忠君爱国，老三紫川秀被人称之为无赖，却又智勇双全。紫川家族内忧外患，紫川三杰各显神通：'
                +'紫川秀在关键时刻击退凶狠魔族，孤身闯虎穴追杀叛逆雷洪；斯特林以家族为重，无情而又深情惜别恋人…人类、魔族、兽族、远东各族，在这片大陆上纷纷扰扰，纠葛不断。在血与火的交融中，刀与剑的碰撞中，构成了庞大的史诗般的故事——紫川。动画描绘了一个独特奇妙的世界，将一群不同性格的人物，一个个展现出来，谱写了一曲既壮烈，又凄婉的传奇悲歌……'
            },]
        }
    },
    methods:{
        begin(index){
            this.curr=index,
            this.evens=true
        },
        end(){
            this.evens=false
        }
    }
}
</script>