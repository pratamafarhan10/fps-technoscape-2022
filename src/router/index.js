import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        unAuth: true,
      },
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/history",
      name: "history",
      component: HistoryView,
      meta: {
        auth: true,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      top: 0,
      left: 0,
    };
  },
});

router.beforeEach(function (to, _, next) {
  if (to.meta.auth && !store.getters["auth/isAuthenticated"]) {
    console.log('blm login');
    next("/login");
  } else if (to.meta.unAuth && store.getters["auth/isAuthenticated"]) {
    next("/");
  } else {
    next();
  }
});

export default router;
