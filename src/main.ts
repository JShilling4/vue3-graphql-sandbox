import { createApp } from "vue";
import { createPinia } from "pinia";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "./api/graphql/apolloClient";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App).provide(DefaultApolloClient, apolloClient);

app.use(createPinia());
app.use(router);

app.mount("#app");
