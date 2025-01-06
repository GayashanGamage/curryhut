import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Extra from "@/views/extra.vue";
import Drinks from "@/views/drinks.vue";
import Decert from "@/views/decert.vue";
import Closed from "@/views/closed.vue";
import BasicAuth from "@/views/Auth/basicAuth.vue";
import CodeSend from "@/views/Auth/codeSend.vue";
import VerificationCode from "@/views/Auth/verificationCode.vue";
import PasswordReset from "@/views/Auth/passwordReset.vue";
import Login from "@/views/Auth/login.vue";

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
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/auth",
      name: "authontication",
      component: BasicAuth,
    },
    {
      path: "/code",
      name: "codesend",
      component: CodeSend,
      beforeEnter(to, from, next) {
        if (from.name === "authontication" || from.name === "login") {
          next();
        } else {
          next({ name: "authontication" });
        }
      },
    },
    {
      path: "/verification",
      name: "verification",
      component: VerificationCode,
      beforeEnter(to, from, next) {
        if (from.name === "codesend") {
          next();
        } else {
          next({ name: "authontication" });
        }
      },
    },
    {
      name: "passwordreset",
      path: "/passwordreset",
      component: PasswordReset,
      beforeEnter(to, from, next) {
        if (from.name === "verification") {
          next();
        } else {
          next({ name: "authontication" });
        }
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
