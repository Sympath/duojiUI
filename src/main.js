import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import dachuUi from './packages/index.js';
Vue.use(dachuUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
