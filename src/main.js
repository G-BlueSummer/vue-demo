import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './route'

import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

const M = require('materialize-css');
const axios = require('axios');

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

M.AutoInit();