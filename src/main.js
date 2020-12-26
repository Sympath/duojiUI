import Vue from 'vue'
import App from './App.vue'
import router from "./routes"
import dachuUi from './packages/index.js';
import iView from 'iview'
import 'iview/dist/styles/iview.css';
let options = {
  render: h => h(App),
};

Vue.use(iView)
Vue.use(dachuUi);
Vue.use(router,options)
Vue.config.productionTip = false





console.log(options);
new Vue(options).$mount('#app')
