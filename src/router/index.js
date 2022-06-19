import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import HistoryView from "../views/HistoryView.vue";
import BudgetView from "../views/BudgetView.vue";
import BudgetTipsView from "../views/BudgetTipsView.vue";
import BudgetDetailView from "../views/BudgetDetailView.vue";
import CreateBudgetView from "../views/CreateBudgetView.vue";
import TipeBudgetingView from "../views/TipeBudgetingView.vue";
import RekomendasiBudgetingView from "../views/RekomendasiBudgetingView.vue";

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
    {
      path: "/budget",
      name: "budget",
      component: BudgetView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/budgetips",
      name: "budgetips",
      component: BudgetTipsView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/budget/:category/details",
      name: "budget detail",
      component: BudgetDetailView,
      props: true,
      meta: {
        auth: true,
      },
    },
    {
      path: "/pilihtipebudget",
      name: "pilih tipe budget",
      component: TipeBudgetingView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/createbudget",
      name: "create budget",
      component: CreateBudgetView,
      meta: {
        auth: true,
      },
    },
    {
      path: "/rekomendasibudget/:kota/:tipe/:budget",
      name: "rekomendasi budget",
      component: RekomendasiBudgetingView,
      props: true,
      meta: {
        auth: true,
      },
    },
    {
      path: "/connectbrick",
      name: "connectbrick",
      component: () => import("../views/ConnectBrickView.vue"),
    }
  ],
  linkExactActiveClass: "active",
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
