import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import XingkouView from "../views/XingkouView.vue";
import XiadingView from "../views/XiadingView.vue";
import SelectionView from "../views/SelectionView.vue";
import i18n from "../plugins/i18n";

const hostname = window.location.hostname;
const isXingkou = hostname.includes("xingkou");
const isXiading = hostname.includes("xiading");
const is3dugc = hostname.includes("3dugc");

// Determine which title key to use for root route
const rootTitleKey = isXingkou
  ? "xingkou"
  : isXiading
  ? "xiading"
  : is3dugc
  ? "3dugc"
  : "selection";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: isXingkou
        ? XingkouView
        : isXiading
        ? XiadingView
        : is3dugc
        ? HomeView
        : SelectionView,
      meta: { titleKey: rootTitleKey },
    },
    {
      path: "/3dugc",
      name: "home-explicit",
      component: HomeView,
      meta: { titleKey: "3dugc" },
    },
    {
      path: "/xingkou",
      name: "xingkou-explicit",
      component: XingkouView,
      meta: { titleKey: "xingkou" },
    },
    {
      path: "/xiading",
      name: "xiading-explicit",
      component: XiadingView,
      meta: { titleKey: "xiading" },
    },
  ],
});

// Update document title on each navigation
router.afterEach((to) => {
  const titleKey = (to.meta.titleKey as string) || "3dugc";
  const t = i18n.global.t;
  document.title = t(`pageTitle.${titleKey}`);
});

export default router;
