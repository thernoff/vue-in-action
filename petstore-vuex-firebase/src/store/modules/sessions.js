import axios from "axios";

const state = {
  session: false
};

const getters = {
  session: state => state.session
};

const actions = {
}

const mutations = {
  'SET_SESSION'(state, session) {
    state.session = session;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}