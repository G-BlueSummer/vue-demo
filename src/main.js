import Vue from 'vue'
import App from './App.vue'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const M = require('materialize-css');
const axios = require('axios');

Vue.config.productionTip = false
Vue.prototype.$axios = axios

M.AutoInit();

new Vue({
  render: h => h(App),
}).$mount('#app')
