import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Extra from "@/views/extra.vue";
import Drinks from "@/views/drinks.vue";
import Decert from "@/views/decert.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
