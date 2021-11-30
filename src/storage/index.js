// 存取值 localstorage 封装
const STORAGE_KEY='mall';
// 始终操作的是mail
export default {
    // 存储key/value
    setItem(key,value,module_name){
        if(moudule_name){
            let val =this.getItem(moudule_name);
            val[key]=value;
            this.setItem(module_name,val);
        }else{
            let val =this.getStorage();
            val[key]=value;
            // storget只能接受字符串
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },

    // 某个key的value
    // 获取某个模块的属性    user下面的userName
    //  'mail':{"user":{"userName":"jack","age":"30","sex":1}}
    getItem(key,module_name){ 
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val;
        }
        return this.getStorage()[key];

    },
    // 获取整个localStorage
    getStorage(){
        // 当window.sessionStorage.getItem有值 则返回对应value
        // 当window.sessionStorage.getItem为空则返回一个空object
        // 最后通过json.parse 转化为json格式
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },

    // 清空某一个key
    clear(key,module_name){
        let val =this.getStorage();
        if(moudule_name){
            // if( !val[module_name]) return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}
