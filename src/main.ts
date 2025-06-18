// main.ts
import { createApp } from "vue";
import "./style.scss"; // Global styles
import { ElIcon } from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElIcon);
app.mount("#app");
