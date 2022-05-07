<template>
    <div class="product-param-container" :class="{'is_flxed': isFixed}">
      <div class="container">
        <div class="product-title">{{title}}</div>
        <div class="product-param">
          <a href="javascript:;">概述</a><span>|</span>
          <a href="javascript:;">参数</a><span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name:'ProductParam',
  props: {
    title:{
      type: String,
      require: true
    },
  },
  data() {
    return {
      // 是否吸顶
      isFixed: false
    }
  },
  methods: {
    initHeight() {
      // 获取当前浏览器滚动高度
      // 兼容性IE是document.body.scrollTop
      let scrollTop = document.documentElement.scrollTop ||
        window.pageYoffset || document.body.scrollTop
      // 当大于152px就定位flxed
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  destroyed() {
    // flase向上冒泡移除
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
// 商品参数容器 wrapper包裹
.product-param-container{
  height: 70px;
  line-height: 70px;
  background: $colorG;
  // 吸顶css
  &.is_flxed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px #ccc;
    z-index: 1;
  }
  .container{
    @include flex();
    .product-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .product-param {
      font-size: $fontJ;
      color: $colorC;
      >a {
        color: $colorC;
      }
      >span {
        margin: 0 10px
      }
    }
  }

}
</style>