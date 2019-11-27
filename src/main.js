import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import "bulma/css/bulma.css";

Vue.config.productionTip = false;
Vue.use(Buefy);

import VueCookies from "vue-cookies";
Vue.use(VueCookies);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
