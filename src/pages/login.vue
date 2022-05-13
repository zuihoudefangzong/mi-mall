<template>
    <div class="login">
        <!-- login的header -->
        <div class="container">
            <a href="/#/index">
                <img src="/imgs/login-logo.png">
            </a>
        </div>
        <!-- 中间body包裹wrapper -->
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登录</span>
                        <span class="sep-lin">|</span>
                        <span>扫描登录</span>
                    </h3>
                    <!-- 账号input -->
                    <div class="input">
                        <input type="text" placeholder="请输入账号" v-model="username">
                    </div>
                    <!-- password input -->
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password">
                    </div>
                    <!-- login 按钮 -->
                    <div class="btn">
                        <a href="javascript:;" @click="login">登录</a>
                    </div>
                    <!-- tips 注册按钮register -->
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg" @click="register">立即注册<span>|</span>忘记密码？</div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="footer">
          <div class="footer-link">
              <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
              <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
              <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
              <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
          </div>
          <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>
<script>
import  NavFooter from '../components/NavFooter.vue';
// Vuex中的辅助函数 ES6解构语法从Vuex中解构出来map相关辅助语法
import {mapActions} from 'vuex';
export default {
    name:'login',
    components:{
        NavFooter
    },
    data(){
        return {
            username:this.$store.state.username || 'yeehua',
            password:'Wjy84967..',
            // 后面会用userId当做cookies
            userId:'',
        }
    },
    methods:{
      // 使用map辅助函数的时候在运用ES6的拓展运算符 ES6的语法可以先学先用
      ...mapActions(['saveUserName']),
      login(){
        // 在当前this解构出来
        let {username, password} = this;
        console.log('进来',username,password)
        this.axios.post('/user/login',{
            // key和value一样 就可以简写
            username,
            password,
        }).then((res)=>{
          if (res) {
            // 先在main.js到导入vue-cookies expires过期时间
            this.$cookie.set('userId',res.id,{expires:'Session'});
            // 先派发给actions里面的saveUsername
            // this.$store.dispatch('saveUserName',res.username);
            this.saveUserName(res.username);
            // 将 `this.saveUsername(res.username)` 映射为 `this.$store.dispatch('saveUsername',res.username)`
            this.$router.push('/index');
          }
          
        }).catch(res=> {
          console.log('登录错误',res)
        })
      },
      // 但没有写register页面
      register(){
          this.axios.post('/user/register',{
              // 举个form表单提交的例子
              username:'admin1',
              password:'admin1',
              email:'admin@163.com',
          }).then((res)=>{
              this.$message.success('注册成功')
              // 先在main.js到导入vue-cookies expires过期时间
              if(res) {
                this.$cookie.set('userId',res.id,{expires:'Session'});
              }
              // to-do 保存用户名
              // this.$router.push('/index');
              
          })
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.login{
  &>.container{
    height:113px;
    a{
        display: inline-block;
        img{
            width:auto;
            height:100%;
        }
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:33px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
          a{
              color: #ffffff;
          }
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>