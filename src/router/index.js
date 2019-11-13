import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";

import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import UserEdit from "../views/UserEdit.vue";

Vue.use(VueRouter);

const requireLogin = (to, from, next) => {
  if (store.state.auth.token) {
    next();
  } else {
    next("/administration/login");
  }
};

const routes = [
  {
    path: "/administration/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/administration/logout",
    name: "logout",
    beforeEnter: requireLogin,
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/administration",
    name: "home",
    beforeEnter: requireLogin,
    component: Home
  },
  {
    path: "/administration/users",
    name: "users",
    beforeEnter: requireLogin,
    component: Users
  },
  {
    path: "/administration/users/edit/:id",
    name: "user-edit",
    beforeEnter: requireLogin,
    component: UserEdit
  },
  {
    path: "/users/activation",
    name: "user-activation",
    component: () => import("../views/UserActivation.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
});

export default router;
