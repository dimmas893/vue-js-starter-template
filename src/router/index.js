import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/login.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../components/componentBE/template/index.vue"),
    },
  ],
});

export default router;
