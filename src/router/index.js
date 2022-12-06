import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuoteView from "../views/QuoteView.vue";
import CustomerInvoiceView from "../views/CustomerInvoiceView.vue";
import TradeInvoiceView from "../views/TradeInvoiceView.vue";
import TopSideWindow from "../views/layouts/TopSideWindow.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
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
    path: "/home",
    name: "home",
    component: HomeView,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
