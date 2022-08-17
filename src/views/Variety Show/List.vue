<template>
    <div>
        <div class="list-wr">
            <a class="list-big">猜你</a>
            <a class="list-small">喜欢</a>
        </div>
        <div class="list-img">
            <ul>
                <li v-for="(item, index) in data" :key="index" @mouseenter="stopMov(index)" @mouseleave="continueMov()">
                    <div class="list-box">
                        <div v-show="ever">
                            <a>
                                <img :src="item.imgUrl">
                            </a>
                        </div>
                        <div class="introduce" v-show="evers && curr == index">
                            <span class="tit">{{ item.name }}</span>
                            <span class="summary">{{ item.text }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'list',
    data: function () {
        return {
            ever: true,
            evers: false,
            curr: 0,
            data: [
                {
                    imgUrl: require('@/assets/images/pictures/list-1.jpg'),
                    name: '《开播！情景喜剧》',
                    text: '由北京春光好文化传媒有限公司出品制作的全国首档情景喜剧IP孵化真人秀。节目以情景喜剧“IP孵化”为核心，以“剧组”为主体，以“剧综结合”为目标，并通过影视化的呈现形式，最终选出一部情景喜剧。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-2.jpg'),
                    name: '《喜剧总动员》',
                    text: '是一档明星跨界喜剧竞演类节目，采用“明星主演加喜剧人助演”的组合形式进行喜剧竞演。每期节目通过两个战队PK的形式决出获胜战队，总决赛选出冠军。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-3.jpg'),
                    name: '《极限挑战》',
                    text: '第八季，一起挑战，共向未来！国民综艺，不断进阶，第三代极挑组合，形成新的默契感，打造新的团魂。节目将继续立足社会现实，不断创新，在兼顾综艺节目的娱乐与文化内涵中稳步前行，为观众提供具有“真、善、美”核心价值的内容。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-4.jpg'),
                    name: '《萌探探探案第2季》',
                    text: '第二季作为一档IP推理欢乐解压真人秀，每期根据一部经典IP，进行实景还原、改编、“穿越”，爆笑演绎原剧片段；八位嘉宾组成“萌探家族”，通过剧情疑点及趣味游戏，获取案件线索，欢乐寻找真相。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-5.jpg'),
                    name: '《一起露营吧》',
                    text: '节目将召集热爱生活但性格各异的潮玩明星，组成潮流露营家族，在五站画风极致的营地中，展开两天一夜由易到难、由浅入深的进阶露营生活，为观众输出一本露营潮玩白皮书。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-6.jpg'),
                    name: '《喜欢你我也是》',
                    text: '“唤醒季”选择多位具有恋爱困惑“黑凤梨恐惧症”的单身男女嘉宾为视角，聚焦青年单身群体的个人恋爱观成长变化，正视过往遗憾、直面自我不足、逐步清晰人生方向、解决恋爱困惑的全过程。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-7.jpg'),
                    name: '《火星情报局》',
                    text: '《火星情报局》第五季重磅回归！这一季是特工们的“生存季”，你会看到不一样的特工新面孔，来到这里”拼杀“，争夺高特席位，每一位特工都会从自身真实经历出发，分享抓马生活经历，发现不一样的地球人思维，在5.0时代的火星，你会看到比情景剧还好笑、比脱口秀还有梗的好看内容，我们也将拭目以待，谁能最终生存在火星情报局里，成为王牌“火星人”。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-8.jpg'),
                    name: '《蒙面唱将猜猜猜 第五季》',
                    text: '是由江苏卫视推出的音乐猜评题材的节目。该节目由艺人蒙面上台献唱，由大张伟、敖犬、张纯烨、刘畅、郭涛、沈南等组成的猜评团和全场观众共同进行猜测考验。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-9.jpg'),
                    name: '《师父！我要跳舞了》',
                    text: '第二季萌动回归，节目将14位热爱街舞的孩子和5名风格各异的师父聚集在街舞训练营，通过舞蹈教学和生活相处，建立真挚的师生情谊，提高舞艺，打造属于自己的街舞作品，传承街舞精神。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-10.jpg'),
                    name: '《奔跑吧 第六季》',
                    text: '是浙江卫视推出的户外竞技真人秀，由浙江卫视节目中心星图工作室制作，由李晨、Angelababy、郑恺、沙溢、蔡徐坤、白鹿、周深担任常驻MC，以 “奔跑不停，爱你不变”为主题，传递出满满的温暖、幸福及爱意，带领观众开启全新一季的浪漫旅程。'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-11.jpg'),
                    name: '《怦然心动20岁》',
                    text: '是由优酷推出的20岁群体的青春旅行社交真人秀。节目开篇第一季学长学姐限定返校，史无前例的最具传承感和校园感的00代恋综初见面，充满惊喜和意外的新人出场方式，迭代升级的内容机制让修罗场、名场面倍数级增长！'
                },
                {
                    imgUrl: require('@/assets/images/pictures/list-12.jpg'),
                    name: '《了不起！舞社》',
                    text: '是一档由优酷独播的女子齐舞舞社竞技真人秀节目。节目集结专业舞者、校园舞者、齐舞爱好者等在内的年轻舞蹈力量，组成舞蹈社团，参与国际级街舞齐舞赛事。'
                },

            ]
        }
    },
    methods: {
        stopMov(index) {
            this.curr = index,
                this.evers = true

        },
        continueMov() {
            this.evers = false
        }
    }
}
</script>

<style scoped>
</style>