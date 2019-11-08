import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
require('@/assets/css/bootstrap.min.css');
require('@/assets/css/app.css');
//import { store } from './store/store'; // импортируем хранилище
import { store } from './store/store-modules'; // импортируем хранилище с модулями
import firebase from 'firebase/app';
import 'firebase/firestore'
import './firebase';
import VueFire from 'vuefire';

//Vue.use(VueFire); // подключение VueFire в виде расширения
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
