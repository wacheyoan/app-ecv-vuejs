import Vue from "vue";
import App from "./App.vue";
import store from "@/store/store";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import User from "@/components/User";
import vuetify from "./plugins/vuetify";
import Inscription from "@/components/Inscription";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    component: User,
  },
  {
    path: "/registration",
    component: Inscription
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
