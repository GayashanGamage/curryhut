import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Extra from "@/views/extra.vue";
import Drinks from "@/views/drinks.vue";
import Decert from "@/views/decert.vue";
import Closed from "@/views/closed.vue";
import mobile from "@/views/Auth/mobile.vue";
import VerificationCode from "@/views/Auth/verificationCode.vue";
import Order from "@/views/order.vue";
import OrderSummery from "@/views/orderSummery.vue";
import Checkout from "@/views/checkout.vue";
import OrderType from "@/views/orderType.vue";
import { useUiStore } from "@/stores/ui";

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
      path: "/order",
      name: "order",
      component: Order,
    },
    {
      path: "/ordertype",
      name: "ordertype",
      component: OrderType,
    },
    {
      path: "/ordersummery",
      name: "ordersummery",
      component: OrderSummery,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout,
    },
    {
      path: "/mobile",
      name: "mobile",
      component: mobile,
    },
    {
      path: "/verification",
      name: "verification",
      component: VerificationCode,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
