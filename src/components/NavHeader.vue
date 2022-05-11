<template>
    <div class="header">
        <!-- 最顶部导航开始 -->
        <div class="nav-topbar">
            <div class="container">
                <!-- 最顶部menu导航 -->
                <div class="topbar-menu">
                    <!-- javascript:;反正页面刷新 -->
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <!-- 最顶部user导航 -->
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" v-if="!username">注册</a>
                    <!-- 购物车有个icon图标 -->
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>购物车{{$store.state.cartCount}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 最顶部导航结束 -->
        <!-- 头部导航开始 -->
        <div class="nav-header">
            <div class="container">
                <div class="header-log">
                    <!-- 默认跳转到首页 -->
                    <a href="/#/index"></a>
                    <!-- 动画用过渡就好 -->
                </div>
                <!-- header menu菜单 因为是下拉菜单 不能用a标签了 div -->
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <!-- 用到了手写过滤器 -->
                                        <div class="pro-price">{{item.price |currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>红米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return {
            // 存放手机list
            phoneList:[],
        }
    },
    computed: {
      username() {
        return  this.$store.state.username
      }
    },
    // 手写了过滤器  价格
    filters:{
        currency(val){
            if(!val) return '0.00';
            return `￥${val.toFixed(2)}元`;
        }
    },
    mounted(){
        this.getProductList();
        console.log(this.$store.state.username)
    },
    methods:{
        // 点击登录跳转
        login(){
            this.$router.push('/login')
        },
        getProductList(){
            this.axios.get('/products',{
                // 传参
                params:{
                    // 该id是后台给的 查询头部组件手机列表
                    categoryId:'100012'
                }
            }).then((res)=>{
                console.log(res.list);
                if(res.list.length>6){
                    this.phoneList=res.list.slice(0,6);
                }else{
                    this.phoneList=res.list
                }
            })
        },
        // 点击购物车跳转
        goToCart(){
            this.$router.push('/cart')
        }
    }
}
</script>
<style lang="scss" scoped>
// 导入其他公共样式要加;结束
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/config.scss';
.header{
    // 最顶部导航开始
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333;
        color: #b0b0b0;
        font-size: 16px;
        .container{
            // flex弹性布局
            @include flex();
            a{
                display: inline-block;
                color: #b0b0b0;
                margin-right: 17px;
                // text-decoration:none;
            }
            .my-cart{
                width: 110px;
                background-color: #FF6600;               
                text-align: center;
                color: #fff;
                .icon-cart{
                    // span默认是行内元素 width靠内容撑开
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');;
                    margin-right: 4px;
                }
            }
        }
    }
    // header头部导航样式开始
    .nav-header {
        .container{
            height: 112px;
            @include flex();
            // 折叠栏定位的祖先级别元素
            position: relative;
            // 头部的logo
            .header-log {
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: #FF6600;
                a {
                    display: inline-block;
                    // 实际是放了两张照片 所以是55*2
                    width: 110px;
                    height: 55px;
                    // 伪类before
                    &:before{
                        content: '';
                        @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                        // 鼠标移走 margin恢复了原来
                        // 所以过渡添加在这里
                        transition: margin .2s;
                    }
                    // 伪类after
                    &:after{
                        content: '';
                        @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                    }
                    // 鼠标移上去的时候
                    &:hover{
                        margin-left: -55px;
                        // 移进去margin属性过渡0.2秒
                        transition: margin .2s;
                    }
                }
            }
            // 头部菜单
            .header-menu {
                display: inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menu {
                    display: inline-block;
                    color: #333;
                    font-weight: bold;
                    font-size: 16px;
                    // 行高和盒子的高度一样 就垂直居中了
                    line-height: 112px;
                    margin-right: 20px;
                    span {
                        cursor:pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children {
                            height: 220px;
                            opacity: 1;
                            transition: all .3s;
                        }
                    }
                    .children {
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width:1226px;
                        border-top: 1px solid #e5e5e5;
                        // 高度隐藏 同时溢出隐藏
                        transition: height .2s;
                        height: 0px;
                        overflow: hidden;
                        // 同时透明度为0
                        opacity: 0;
                        // 阴影
                        box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                        // border-radius: 8px;
                        font-size: 12px;
                        line-height: 12px;
                        text-align: center;
                        z-index: 10;
                        background-color: #fff;
                        .product {
                            // 每个分割线所要定位的祖先元素
                            // 就是每个li
                            position: relative;
                            // 让每个li都左浮动 
                            float: left;
                            // 一共6个
                            width: 16.6%;
                            height: 220px;
                            a{
                                display: inline-block;
                            }
                            img {
                                // 当定高或者定width后 另外一边要auto
                                // 否则图片就拉伸压缩了
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-name {
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price {
                                color: $colorA;
                            }
                            &::before{
                                // 定义分割线
                                content: '';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child::before{
                                display: none;
                            }
                        }
                    }
                }
            }
            // 头部搜索框
            .header-search {
                width:319px;
                .wrapper {
                    height: 50px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input {
                        box-sizing: border-box;
                        border: none;
                        border-right:1px solid #E0E0E0;
                        height: 50px;
                        width: 264px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
}
</style>
