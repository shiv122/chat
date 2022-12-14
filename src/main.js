import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/app.min.css";
import "./assets/libs/simplebar/simplebar.min.js";
import Toaster from "@meforma/vue-toaster";
import VueCookies from 'vue-cookies';
const app = createApp(App);

app.use(createPinia());
app.use(VueCookies);
app.use(Toaster);

app.mount("#app");
