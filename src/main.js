import Vue from "vue";
import App from "./App.vue";
import store from "@/store";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import User from "@/components/User";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    component: User
  }
];


const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");

