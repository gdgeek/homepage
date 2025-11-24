import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import XingkouView from "../views/XingkouView.vue";
import SelectionView from "../views/SelectionView.vue";

const hostname = window.location.hostname;
const isXingkou = hostname.includes("xingkou");
const is3dugc = hostname.includes("3dugc");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: isXingkou ? XingkouView : is3dugc ? HomeView : SelectionView,
    },
    {
      path: "/3dugc",
      name: "home-explicit",
      component: HomeView,
    },
    {
      path: "/xingkou",
      name: "xingkou-explicit",
      component: XingkouView,
    },
  ],
});

export default router;
