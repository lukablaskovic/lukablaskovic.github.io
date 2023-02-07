import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomeView.vue";
import "tw-elements";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: HomePage }],
});

let app = createApp(App);

app.use(router);

app.mount("#app");
