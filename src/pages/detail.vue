<template>
    <div class="detail">
      <product-param v-bind:title="product.name"></product-param>
      <div class="wrapper">
        <div class="container">
          <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
                <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
          <div class="content">
            <h2 class="item-title">{{product.name}}</h2>
            <p class="item-info">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红<br/>外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
            <div class="delivery">小米自营</div>
            <div class="item-price">{{product.price}}元<span class="del">1999元</span></div>
            <div class="line"></div>
            <div class="item-addr">
              <i class="icon-loc"></i>
              <div class="addr">北京 北京市 朝阳区 安定门街道</div>
              <div class="stock">有现货</div>
            </div>
            <div class="item-version clearfix">
              <h2>选择版本</h2>
              <div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
              <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>
            </div>
            <div class="item-color">
              <h2>选择颜色</h2>
              <div class="phone checked">
                <span class="color"></span>
                深空灰
              </div>
            </div>
            <div class="item-total">
              <div class="phone-info clearfix">
                <div class="fl">{{product.name}} {{version==1?'6GB+64GB 全网通':'4GB+64GB 移动4G'}} 深灰色</div>
                <div class="fr">{{product.price}}元</div>
              </div>
              <div class="phone-total">总计：{{product.price}}元</div>
            </div>
            <div class="btn-group">
              <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProductParam from './../components/ProductParam'
import ServiceBar from './../components/ServiceBar';
export default {
  name: 'Detail',
  components:{ swiper, swiperSlide, ProductParam, ServiceBar },
  data() {
    return {
      // 商品信息
      product: {
        id: 45,
        categoryId: 100012,
        name: "红米Note 7",
        subtitle: "4800万拍照千元机 / 品质“小金刚”",
        mainImage: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551869450.61563110.jpg",
        subImages: null,
        detail: null,
        price: 999,
        stock: 9999999,
        status: 1,
        createTime: "2019-10-14 21:06:38",
        updateTime: "2019-10-14 21:06:42",
        imageHost: "http://img.springboot.cn",
        parentCategoryId: 100002
      },
      version: 1,//商品版本切换
      
      // swiperOption轮播图的选项
      swiperOption:{
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      },

    }
  }
}
</script>