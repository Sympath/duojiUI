
import {requireByDir} from '@/util.js';



const install = (Vue) => {
   requireByDir(
        require.context('./', true, /\.vue$/),
            (key,importObj)=>{
                Vue.component(importObj.default.name,importObj.default);
            }
        )
}


// 考虑到有可能组件库会被直接用script标签引用
if(window){
    if(typeof window.Vue == 'function'){
        install(Vue)
    }
}


export default {
    install
}



