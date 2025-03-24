import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/test_select",
      name: "test_select",
      component: () => import("../views/TestSelect.vue"),
    },
    {
      path: "/test_sleep",
      name: "test_sleep",
      component: () => import("../views/TestSleep.vue"),
    },
  ],
});

export default router;
