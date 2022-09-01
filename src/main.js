import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/main.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/app.min.css";
import "./assets/libs/simplebar/simplebar.min.js";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
