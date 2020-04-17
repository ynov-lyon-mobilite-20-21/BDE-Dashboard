import Vue from "vue";
import Vuex from "vuex";
import { authenticateUser } from "../services/AuthenticationService";
import { getMe } from "../services/UserService";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: "vuex",
    storage: window.localStorage
});

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
            state.notifications.push({ title, content });
        }
    },
    actions: {
        async authenticateUser({ commit }, { mail, password }) {
            const tokens = await authenticateUser(mail, password);
            commit("setToken", {
                token: tokens.token,
                refreshToken: tokens.refreshToken
            });

            const user = await getMe();

            if (!user.isAdmin) {
                commit("setToken", { refreshToken: null, token: null });
            } else {
                commit("setUser", user);
            }
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
    },
    plugins: [vuexLocalStorage.plugin]
});
