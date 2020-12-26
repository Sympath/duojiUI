import VueRouter from "vue-router";
let path = require('path');

const routes = [
    {path: '/',redirect:'/index'}
]



let install = (Vue,options)=>{
    let ctx =  require.context('../pages/', true, /\.vue$/);
    for (const key of ctx.keys()) {
        // key 是 相对src的相对路径   module 是 模块导出对象  es6的话要在default上取值
        let module = ctx(key)
        // console.log(key,module,path.relative('',key).split('.')[0]);
        routes.push({
            path:'/'+path.relative('',key).split('.')[0],
            component: module.default
        })
    }
    Vue.use(VueRouter);
    var router =  new VueRouter({
        routes
    })
    options.router = router;
}
export default {
    install
};