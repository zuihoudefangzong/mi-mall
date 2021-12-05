import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderList from '../pages/orderList.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/aliPay.vue'


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
        path:'/detail:id',
        name:'detail',
        component:Detail,
      },
      {
        path:'/index',
        name:'index',
        component:Index,
      },
      {
        path:'/product/:id',
        name:'product',
        component:Product,
      }
    ]
  },
  {
    path:'/cart',
    name:'cart',
    component:Cart,
  },
  {
    path:'/order',
    name:'order',
    component:Order,
    children:[
      {
        path:'list',
        name:'order-list',
        component:OrderList,
      },
      {
        path:'confirm',
        name:'confirm',
        component:OrderConfirm,
      },
      {
        path:'pay',
        name:'order-pay',
        component:OrderPay,
      },
      {
        path:'alipay',
        name:'alipay',
        component:AliPay,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
