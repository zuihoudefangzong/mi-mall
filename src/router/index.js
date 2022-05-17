import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
// import Product from '../pages/product.vue'
// import Detail from '../pages/detail.vue'
// import Cart from '../pages/cart.vue'
// import Order from '../pages/order.vue'
// import OrderList from '../pages/orderList.vue'
// import OrderConfirm from '../pages/orderConfirm.vue'
// import OrderPay from '../pages/orderPay.vue'
// import AliPay from '../pages/aliPay.vue'
// import Login from '../pages/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    // path跳转的路径
    path: '/',
    // 路由命名
    name: 'Home',
    // 加载的组件
    component: Home,
    // 重定向
    redirect:'/index',
    children:[
      {
        path:'/index',
        name:'index',
        component:Index,
      },
      {
        path:'/detail/:id',
        name:'detail',
        component:() => import('../pages/detail.vue'),
      },
      {
        path:'/product/:id',
        name:'product',
        component:() => import('../pages/product.vue'),  
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../pages/login.vue'),
  },
  {
    path:'/cart',
    name:'cart',
    component:() => import('../pages/cart.vue'),
  },
  {
    path:'/order',
    name:'order',
    component:() => import('../pages/order.vue'),
    children:[
      {
        path:'list',
        name:'order-list',
        component:() => import('../pages/orderList.vue')
      },
      {
        path:'confirm',
        name:'confirm',
        component:() => import('../pages/orderConfirm.vue')
      },
      {
        path:'pay',
        name:'order-pay',
        component:() => import('../pages/orderPay.vue')
      },
      {
        path:'alipay',
        name:'alipay',
        component:() => import('../pages/aliPay.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
