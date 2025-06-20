import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToastService from "primevue/toastservice";
import router from "./router";
import { createPinia } from 'pinia'


import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";

const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)

app.use(ToastService);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.mount("#app");
