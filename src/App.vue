<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>


<script>
import storage from './storage/index.js'
export default {
  data(){
    return {
      data:'',
    }
  },
  mounted(){
    console.log( storage.getItem("a",'user'))
    // console.log(storage.getStorage())
  }
}
</script>
