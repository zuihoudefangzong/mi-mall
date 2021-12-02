// 在本地开发都是自己电脑的node.js server服务器
// 现网公司线上部署的时候用的比较多的是nginx server
// 既然在本地测试 就是用了node.js
// node.js模块化规范默认只支持CommonJS规范
module.exports ={
    // default_name devServer
    devServer:{
        host:'localhost',
        // default port 8080
        port:8081,
        // proxy代理
        // 这样就像访问自己接口
        // 实际是访问target的接口
        proxy:{
            // 当访问的是/api
            '/api':{
                // proxy代理目标是慕课网
                target:'http://mall-pre.springboot.cn',
                // 是否更改host header更改为target
                changeOrigin:true,
                pathRewrite:{
                    // 并'/api'置为空
                    '/api':'',
                }
            },
        }
    }
}