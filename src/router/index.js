import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Test2 from "@/views/test2.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/test2",
    //   name: "test2",
    //   component: Test2,
    // },
  ],
});

export default router;
