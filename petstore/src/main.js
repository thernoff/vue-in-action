import Vue from 'vue'
import App from './App.vue'
import router from './router'
require('./assets/css/bootstrap.min.css');
require('./assets/css/app.css');

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
