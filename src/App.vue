<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  data(){
    return {
      data:'',
    }
  },
  mounted(){
    if(this.$cookie.get('userId')){
      this.getUser()
      this.getCartCount()
    }
  },
  methods: {
    getUser(){
      this.axios.get('/user').then((res)=>{
        if(!res) {
          res = {}
        }
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
// css导入要前面加入@
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
