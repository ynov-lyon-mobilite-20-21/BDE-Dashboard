import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const requireLogin = (to, from, next) => {
  if (store.state.auth.token) {
    next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/logout",
    name: "logout",
    beforeEnter: requireLogin,
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/",
    name: "home",
    beforeEnter: requireLogin,
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
});

export default router;
