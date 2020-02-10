import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/css/materialize.min.css'

const axios = require('axios');

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
