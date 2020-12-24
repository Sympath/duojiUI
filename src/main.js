import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.config.productionTip = false

import dachuUi from './packages/index.js';
Vue.use(dachuUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
