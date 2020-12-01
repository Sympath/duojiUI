

import Button from './button.vue';
import ButtonGroup from './button-group.vue';
import Icon from './icon.vue';


const install = (Vue) => {
    Vue.component(Button.name,Button);
    Vue.component(Icon.name,Icon);
    Vue.component(ButtonGroup.name,ButtonGroup);
}


// 考虑到有可能组件库会被直接用script标签引用
if(typeof window.Vue == 'function'){
    install(Vue)
}

export default {
    install
}



