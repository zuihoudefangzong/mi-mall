import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import App from './App.vue'
// 当是自定义的js文件 前面一定要加相对路径
// 否则会去node_module里面找npm包
// import env from './env'


// 根据前端前端的跨域方式做调整 设置请求的根路径
// 这次用了接口代理 /a/b =>/api/a/b
// 但是在vue.config.js转发的时候会'/api':''空, /a/b
axios.defaults.baseURL='/api';
// 可以根据不同的环境 输出不同版本的baseurl
// axios.defaults.baseURL=env.baseURL;
// 接口超时
axios.defaults.timeout=8000;
// 接口错误拦截
// axios相应response拦截器
axios.interceptors.response.use(
  function(response){
    // 接口的返回值
    let res =response.data;
    if(res.status==0){
      // 后端定义的成功是0
      return res.data;
    }else if(res.status == 10){
      // 后端定义的失败是10
      // 跳转到登录login页面
      window.location.href='/#/login';
      return Promise.reject(res)
    }else{
      // 真的报错了
      Message.warning(res.msg);
    }
  },
  // 对请求错误做些什么
  error => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
  }
)
// 全局使用对象也行 同等下面
// Vue.use(Message)
Vue.prototype.$message = Message;
Vue.use(VueAxios,axios)
Vue.use(VueLazyload,{
  // 图片的懒加载
  loading:"/imgs/loading-svg/loading-bars.svg",
});
Vue.use(VueCookie);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
