import Vue from "vue";

// styles
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "./styles/index.scss";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/plugins";

const test = require("./template/test.ejs");
console.log(test);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
