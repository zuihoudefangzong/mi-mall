<template>
  <header class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <!-- 默认跳转到首页 -->
        <a href="/#/index"></a>
        <!-- 动画用过渡就好 -->
      </div>
      <div class="title">
        <h2>
          {{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </header>
</template>
<script>
// vuex
import { mapState } from 'vuex'
export default {
  name:'OrderHeader',
  props: {
    title: String,
  },
  computed: {
    // username() {
    //   return  this.$store.state.username
    // }
    ...mapState(['username'])
  },
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/mixin.scss';
.order-header {
  padding: 30px 0;
  .container {
    .header-logo { float: left; }
    .title, .username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      font-size: 26px;
      float: left;
      margin-left:54px;
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999999;
        font-weight: bold;
      }
    }
    .username {
      float: right;
      >a {
        color: #666;
        font-size: 16px;
      }
    }
  }
}
</style>