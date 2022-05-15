<template>
    <div class="ali-pay">
      <loading v-if="loading"></loading>
       <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from './../components/Loading.vue'
export default {
  name: 'AliPay',
  components: { Loading },
  data() {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted() {
    this.paySubmit()
  },
  methods: {
    paySubmit() {
      this.axios.post(
        '/pay',
        {
          orderId:this.orderId,
          orderName: '实战电商项目',
          amount:0.01,//单位元 this.$route.params.amount
          payType:1 //1支付宝，2微信
        }
      ).then( res =>{
        this.content = res.content
        // 后端返回支付宝的签名 直接调用
        // 避免表单还没有渲染
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      })
    }
  }
}
</script>