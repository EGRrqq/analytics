import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "signUp",
    component: SignUpView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
