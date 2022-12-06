import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuoteView from "../views/QuoteView.vue";
import CustomerInvoiceView from "../views/CustomerInvoiceView.vue";
import TradeInvoiceView from "../views/TradeInvoiceView.vue";
import TopSideWindow from "../views/layouts/TopSideWindow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quote",
    name: "quote",
    component: QuoteView,
  },
  {
    path: "/customer",
    name: "customer",
    component: CustomerInvoiceView,
  },
  {
    path: "/trade",
    name: "trade",
    component: TradeInvoiceView,
  },
  {
    path: "/newhome",
    name: "newhome",
    component: TopSideWindow,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
