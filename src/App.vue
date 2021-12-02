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
  }
}
</script>

<style lang="scss">
// css导入要前面加入@
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
</style>
