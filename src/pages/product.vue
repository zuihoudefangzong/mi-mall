<template>
  <div class="product-container">
    <div class="container">
      <product-param title="小米8">
        <!-- 具名插槽 -->
        <template v-slot:buy>
          <button class="btn">立即购买</button>
        </template>
      </product-param>
        product
    </div>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam.vue'
export default {
  components: { ProductParam }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
@import '../assets/scss/base.scss';
.product-container {
  border-top: 1px solid $colorH;
  .container {
    button { margin-left: 10px;}
  }
}
</style>