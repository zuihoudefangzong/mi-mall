let baseURL;
// porcess.env.NODE_ENV 可以获取当前进程里面的环境变量
switch (process.env.NODE_ENV){
    case 'development':
        // 假的 为了模拟真实开发的服务
        baseURL='http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        // 假的 为了模拟真实开发的服务
        baseURL="http://test-mall-pre.springboot.cn/api"
        break
    case 'production':
        // 真实的廖师兄 真实后台接口
        baseURL="http://pro-mall-pre.springboot.cn/api"
        break
    default:
        baseURL="http://mall-pre.springboot.cn/api"
        break;
    
}

export default{
    baseURL
}