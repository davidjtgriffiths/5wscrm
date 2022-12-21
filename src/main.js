import { createApp, markRaw } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import './styles/app.css';
import { createVuestic } from 'vuestic-ui'
import "vuestic-ui/styles/essential.css";
import "vuestic-ui/styles/grid.css";
import "vuestic-ui/styles/reset.css";
import "vuestic-ui/styles/typography.css";

const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

createApp(App)
  .use(pinia)
  .use(router)
  .use(createVuestic())
  .mount("#app");
