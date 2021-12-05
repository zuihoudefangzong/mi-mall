<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <!-- 左边的菜单栏开始 -->
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <!-- javascript:;是防止用户点击的时候跳转了刷新页面 -->
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <!-- ul循环出6个 -->
                                <ul v-for="item in menuList">
                                    <li v-for="sub in item">
                                        <a :href="sub?'/#/product/'+sub.id:'javascript:;'">
                                            <img 
                                            :src="sub?sub.img:'/imgs/item-box-1.png'"
                                            alt="">
                                            {{sub? sub.name:'小米CC9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 排插</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <!-- <div class="children"></div> -->
                        </li>
                    </ul>
                </div>

                <!-- 开始轮播 swiper组件 -->
                <swiper :options="swiperOption">
                    <swiper-slide
                    v-for="(item,index) in slideList" 
                    :key="index">
                        <a :href="'/#/product/'+item.id">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <!-- 如果需要分页器(轮播指示器) 插槽方式 -->
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- 如果需要导航按钮 插槽方式-->
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div> 
                </swiper>
            </div>

            <!-- 广告位的开始 -->
            <div class="ads-box">

            </div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from '../components/ServiceBar.vue';
// 不用全部导入 解构出一部分组件 按需导入
import {swiper,swiperSlide} from 'vue-awesome-swiper';
// 引入swiper的依赖样式文档 会在node_modules里面找
import 'swiper/dist/css/swiper.css';
export default {
    components:{
        swiper,
        swiperSlide,
        ServiceBar,
    },
    data(){
        return {
            // swiperOption轮播图的选项
            swiperOption:{
                // 自动播放
                autoplay:true,
                // 当点到最后一页 还能点击下一页
                loop:true,
                // 动画设置Slide的切换效果
                effect : 'cube',
                cubeEffect: {
                    // slideShadows：开启slide阴影。默认 true。
                    // shadow： 开启投影。默认 true。
                    slideShadows: true,
                    shadow: true,
                    // 阴影的距离和缩放比列
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
                // 轮播指示器的指定
                pagination:{
                    el:'.swiper-pagination',
                    // 为true时，点击分页器的指示点分页器会控制Swiper切换。
                    clickable:true,
                },
                // navigation 使用前进后退按钮来控制Swiper切换
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                },
            },
            // 轮播图的array
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-4.jpg'
                },
            ],

            // 菜单列表
            menuList:[
                // 内部有6个数组
                [
                    // 每个array有4个对象
                    {id:30,img:'/imgs/item-box-1.png',name:'小米CC9'},
                    {id:31,img:'/imgs/item-box-2.png',name:'小米8青春版'},
                    {id:32,img:'/imgs/item-box-3.jpg',name:'redmi k40'},
                    {id:33,img:'/imgs/item-box-4.jpg',name:'移动4G专区'},
                ],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
// 覆盖swiper组件的css
.index {
    .swiper-box {
        // 首页菜单栏的css
        .nav-menu {
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 999;
            padding: 26px 0;
            box-sizing: border-box;
            // background-color: #55585a;
            background-color: #55585a7a;
            .menu-wrap {
                .menu-item {
                    height: 50px;
                    line-height: 50px;
                    padding-left: 30px;
                    >a {
                        // 相对定位 加block
                        position: relative;
                        display: block;
                        font-size: 16px;
                        color: #fff;
                        &::after{
                            // 想对于a绝对定位了
                            position: absolute;
                            right: 30px;
                            top: 17.5px;
                            content: '';
                            @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                        }
                    }

                    &:hover{
                        background-color: $colorA;
                        cursor: pointer;
                        .children {
                            display: block;
                        }
                    }
                    .children {
                        display: none;
                        position: absolute;
                        top: 0;
                        left: 264px;
                        width: 962px;
                        height: 451px;
                        background: $colorG;  
                        border: 1px solid $colorH;  
                        ul{
                            display: flex;
                            justify-content: space-between;
                            height: 75px;
                            
                            li {
                                box-sizing: border-box;
                                height: 75px;
                                line-height: 75px;
                                width: 240px;
                                padding-left: 23px;
                                img {
                                    width: 42px;
                                    height: auto;
                                    vertical-align: middle;
                                }
                                a{
                                    color: $colorB;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
                
            }
        }
        // 轮播图指定width
        .swiper-container {
            height: 451px;
            // 移动一下 左边箭头 它是绝对定位的
            .swiper-button-prev{
                left: 274px;
            }
            img {
                width:100%;
                height: 100%;
            }
        }
    }

}

</style>
