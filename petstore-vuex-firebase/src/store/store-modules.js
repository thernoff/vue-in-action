import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';

Vue.use(Vuex); // подключаем Vuex к Vue

export const store = new Vuex.Store({
  modules: {
    products
  }
});