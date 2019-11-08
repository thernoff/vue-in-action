import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex); // подключаем Vuex к Vue

export const store = new Vuex.Store({
  state: {
    products: {}
  },
  // объект mutations с функцией для инициализации хранилища
  mutations: {
    'SET_STORE'(state, products) {
      state.products = products;
    }
  },
  // объект actions с асинхронным кодом
  actions: {
    initStore: ({ commit }) => {
      axios.get("/static/products.json").then(response => {
        console.log(response.data.products);
        commit('SET_STORE', response.data.products);
      });
    }
  },
  getters: {
    products: state => state.products
  }
});