import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
require('@/assets/css/bootstrap.min.css');
require('@/assets/css/app.css');
//import { store } from './store/store'; // импортируем хранилище
import { store } from './store/store-modules'; // импортируем хранилище с модулями

// В Firebase есть 2 вариант хранения: в Real Time Database и Cloud Firestore (в проекте используется Real Time Database)
// firestorePlugin if you need to use Cloud Firestore (often abreviated Firestore)
// rtdbPlugin if you need to use the original RTDB (Real Time Database)
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
