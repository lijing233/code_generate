import Vue from "vue";
// import i18n from "@/i18n";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "@/styles/element-ui.scss";

Vue.use(ElementUI, {
  // i18n: (key, value) => i18n.t(key, value),
  size: "small"
});
