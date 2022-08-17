<template>
    <div class="five-list">
        <div class="listing">
				<!-- <span class="ph">排行</span> -->
				<!-- <a href=""><span class="ckgd">查看更多</span></a> -->
			</div>

            <!-- 1 -->
        <div class="five-lists">
            <div class="lianzai">
                <div class="lz">
                    <span class="lzb">全新发行</span>
                    <a href=""><span class="ckgd">查看更多</span></a>
                    <!-- <p class="small">作品两日内有更新，按周热度排行</p> -->

                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in lian" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-info">
                                <a href=""><p class="rank-book">{{items.book}}</p></a>
                                <p class="rank-title">{{items.tit}}</p>
                                <a href=""><img src="@/assets/images/books/lihe.png" alt=""></a>
                                
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in zai" :key="index"> 
                      <div class="rank-numbers" >{{items.nums}}</div>
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
          </div>


          <!-- 2 -->
          <div class="qianli">
             <div class="lz">
                    <span class="lzb">最畅销</span>
                    <a href=""><span class="ckgd">查看更多</span></a>
                </div>


                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in qian" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-title">{{items.tit}}</p>
                                <a href=""><img src="@/assets/images/books/lihe.png" alt=""></a>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in li" :key="index"> 
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
         </div>

<!-- 3 -->
         <div class="qianli">
             <div class="lz">
                    <span class="lzb">即将推出</span>
                    <a href=""><span class="ckgd">查看更多</span></a>
                </div>

                <div class="five-top" >
                  <div class="rank" v-for="(items,index) in wan" :key="index">
                      <ul>
                          <li class="rank-book">
                              <div class="rank-info">
                                <a href=""><span class="rank-book">{{items.book}}</span></a>
                                <p class="rank-title">{{items.tit}}</p>
                                <a href=""><img src="@/assets/images/books/lihe.png" alt=""></a>
                              </div>
                              <div class="rank-pic">
                                  	<a href=""><img :src="items.imgs" ></a>
                                  
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div class="ranks" v-for="(items,index) in ben" :key="index"> 
                      <a href=""><span class="rank-book">{{items.books}}</span></a>
                      <span class="rank-titles">{{items.tits}}</span>
                  </div>
                  <a href=""><div class="five-bottom">查看详情</div></a>
                </div>
         </div>

        </div>
         
        </div>
  
    
</template>
<script>
export default {
    data(){
        return{
           lian:[{
               book:'《魔界战记 DISGAEA 6》完全版',
               tit:'￥494',
               imgs:require('@/assets/images/books/10.jpg')
           },{
               book:'Soulless - Ray Of Hope',
               tit:'￥14',
               imgs:require('@/assets/images/books/11.jpg')
           },{
               book:'Ruggnar',
               tit:'￥42',
               imgs:require('@/assets/images/books/12.jpg')
           },{
               book:'Car Mechanic Simulator 2018',
               tit:'￥60',
               imgs:require('@/assets/images/books/07.jpg')
           },{
               book:'A Game Of Thrones',
               tit:'￥60',
               imgs:require('@/assets/images/books/06.jpg')
           }],
        //    2
           qian:[{
               book:'Grand Theft Auto V: Premium Edition',
               tit:'￥118.50',
               imgs:require('@/assets/images/books/13.jpg')
           },{
               book:'Dead by Daylight',
               tit:'￥79',
               imgs:require('@/assets/images/books/14.jpg')
           },{
               book:'God of War',
               tit:'￥279',
               imgs:require('@/assets/images/books/15.jpg')
           },{
               book:'Tiny Tinas Wonderlands',
               tit:'￥199',
               imgs:require('@/assets/images/books/16.jpg')
           },{
               book:'Evil Dead: The Game',
               tit:'￥159',
               imgs:require('@/assets/images/books/17.jpg')
           }],
          
        //    3
           wan:[{
               book:'Men of War II',
               tit:'于 Q2, 2022 可用',
               imgs:require('@/assets/images/books/18.jpg')
           },{
               book:'One Lonely Outpost',
               tit:'于 Q2, 2022 可用',
               imgs:require('@/assets/images/books/19.jpg')
           },{
               book:'Mago',
               tit:'于 2022年6月 可用',
               imgs:require('@/assets/images/books/20.jpg')
           },{
               book:'The Machines Arena',
               tit:'于 Q2, 2022 可用',
               imgs:require('@/assets/images/books/21.jpg')
           },{
               book:'NERO',
               tit:'即将推出',
               imgs:require('@/assets/images/books/22.jpg')
           }],
        
        }
    },
}
</script>