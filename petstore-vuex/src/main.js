import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
require('@/assets/css/bootstrap.min.css');
require('@/assets/css/app.css');
import { store } from './store/store'; // импортируем хранилище

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
