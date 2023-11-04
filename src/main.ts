import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomeView.vue";
import "tw-elements";

import { init } from "@emailjs/browser";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: HomePage }],
});

//Email JS init
init(import.meta.env.VITE_EMAIL_KEY);

let app = createApp(App);

app.use(router);

app.mount("#app");
