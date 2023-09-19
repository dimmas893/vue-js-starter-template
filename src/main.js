import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/template/css/styles.min.css";
const app = createApp(App);

app.use(router);

app.mount("#app");
