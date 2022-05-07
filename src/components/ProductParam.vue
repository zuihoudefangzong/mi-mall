<template>
    <div class="product-param-container">
        <div class="product-title">{{title}}</div>
        <div class="product-param">
          <a href="javascript:;">概述</a><span>|</span>
          <a href="javascript:;">参数</a><span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
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
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';
// 商品参数容器 wrapper包裹
.product-param-container{
  height: 70px;
  line-height: 70px;
  @include flex;
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
</style>