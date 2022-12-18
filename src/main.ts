import { createApp } from "vue";
import { createPinia } from "pinia";
import urql from "@urql/vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(urql, {
  url: "https://rickandmortyapi.com/graphql",
});
app.use(createPinia());
app.use(router);

app.mount("#app");
