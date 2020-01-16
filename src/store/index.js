import Vue from "vue";
import Vuex from "vuex";
import { authenticateUser } from "../services/AuthenticationService";
import { me } from "../services/UserService";
// import VuexPersist from "vuex-persist";

Vue.use(Vuex);

// const vuexPersist = new VuexPersist({
//   storage: window.localStorage,
// });

export default new Vuex.Store({
  state: {
    auth: {
      token: null,
      refreshToken: null
    },
    user: null,
    notifications: []
  },
  mutations: {
    setToken(state, { token, refreshToken }) {
      state.auth = { token, refreshToken };
    },
    setUser(state, user) {
      state.user = user;
    },
    addNotification(state, { title, content }) {
      state.notifications.push({ title, content })
    }
  },
  actions: {
    async authenticateUser({ commit }, { mail, password }) {
      const tokens = await authenticateUser(mail, password);
      commit("setToken", {
        token: tokens.data.token,
        refreshToken: tokens.data.refreshToken
      });

      const user = await me();

      if (!user.data.isAdmin) {
        commit("setToken", { refreshToken: null, token: null });
        return false;
      }

      commit("setUser", user.data);
      return true;
    },
    logoutUser({ commit }) {
      commit("setToken", { refreshToken: null, token: null });
      commit("setUser", null);
    },
    addNotification({ commit }, { title, content }) {
      commit("addNotification", { title, content });
    }
  },
  modules: {},
  getters: {
    user: state => state.user,
    token: state => state.auth.token,
    notifications: state => state.notifications
  }
});
