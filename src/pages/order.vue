<template>
    <div class="order">
      <order-header :title="title">
        <template v-slot:tip>
          <span>{{tip}}</span>
        </template>
      </order-header>
      <router-view></router-view>
      <service-bar></service-bar>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader';
import NavFooter from '../components/NavFooter';
import ServiceBar from '../components/ServiceBar'
const TITLE_TIP = {
  '/order/list': {title:'订单列表',tip: '请谨防钓鱼链接或诈骗电话，了解更多>'},
  '/order/confirm': {title:'订单确认',tip: '请确定好填写收货地址'},
  '/order/pay': {title:'订单支付',tip: '请谨防钓鱼链接或诈骗电话，了解更多>'},
} 
export default {
  name: 'order',
  components:{ OrderHeader, NavFooter, ServiceBar },
  data() {
    return {
      title: '',
      tip: ''
    }
  },
  mounted() {
    let {path} = this.$route
    this.title = TITLE_TIP[path].title
    this.tip = TITLE_TIP[path].tip
  }
}
</script>

<style lang="scss">
</style>