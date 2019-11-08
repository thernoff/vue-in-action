import Vue from 'vue';
import Vuex from 'vuex';
import sessions from './modules/sessions';

Vue.use(Vuex); // подключаем Vuex к Vue

export const store = new Vuex.Store({
  modules: {
    sessions
  }
});