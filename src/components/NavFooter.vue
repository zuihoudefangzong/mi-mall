<template>
    <footer class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.baidu.com" target="_blank">本人主页</a><span>|</span>
            <a href="https://www.baidu.com" target="_blank">Vue全栈课程</a><span>|</span>
            <a href="https://www.baidu.com" target="_blank">React全家桶课程</a><span>|</span>
            <a href="https://www.baidu.com" target="_blank">微信支付专项课程（H5+小程序+node+Mongo）</a>
        </div>
        <div class="copyright">Copyright ©2020
            <span class="domain">www.leaveheart.com</span>
            All Rights Reserved.
        </div>
    </footer>
</template>
<script>
export default {
    name:'NavFooter',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/base.scss';
.footer {
    height: 234px;
    border-top: 4px solid #f60;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        margin-bottom: 13px;
        a{
            color: #999;
            display: inline-block;
        }
        span {
            margin: 0 10px;
        }
    }
    .copyright {
        .domain {
            color:#ff6600;
        }
    }
}
</style>