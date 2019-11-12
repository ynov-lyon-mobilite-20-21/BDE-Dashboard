import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "SELF_BUY_YNOV",
  storage: window.localStorage,
  reducer: state => ({ auth: state.auth })
});

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      refreshToken: null
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin]
});
