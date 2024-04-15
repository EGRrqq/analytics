import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import SignUpView from "@/views/SignUpView.vue";
import AnalyticsView from "@/views/AnalyticsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "signUp",
    component: SignUpView,
  },
  {
    path: "/analytics",
    name: "analytics",
    component: AnalyticsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
