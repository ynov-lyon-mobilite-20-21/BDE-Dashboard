import Vue from "vue";
import Vuex from "vuex";
import { authenticateUser } from "../services/AuthenticationService";
import { getUserById } from "../services/UserService";
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
    user: null
  },
  mutations: {
    setToken(state, { token, refreshToken }) {
      state.auth = { token, refreshToken };
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    async authenticateUser({ commit }, { mail, password }) {
      const tokens = await authenticateUser(mail, password);
      commit("setToken", {
        token: tokens.token,
        refreshToken: tokens.refreshTokené
      });

      const user = await getUserById(tokens.userId);

      if (!user.isAdmin) {
        commit("setToken", { refreshToken: null, token: null });
        return false;
      }

      commit("setUser", user);
      return true;
    },
    logoutUser({ commit }) {
      commit("setToken", { refreshToken: null, token: null });
      commit("setUser", null);
    }
  },
  modules: {}
});
