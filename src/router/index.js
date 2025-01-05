import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Extra from "@/views/extra.vue";
import Drinks from "@/views/drinks.vue";
import Decert from "@/views/decert.vue";
import Closed from "@/views/closed.vue";
import BasicAuth from "@/views/Auth/basicAuth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/closed",
      name: "closed",
      component: Closed,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/extra",
      name: "extra",
      component: Extra,
    },
    {
      path: "/drinks",
      name: "drinks",
      component: Drinks,
    },
    {
      path: "/decert",
      name: "decert",
      component: Decert,
    },
    {
      path: "/auth",
      name: "authontication",
      component: BasicAuth,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
