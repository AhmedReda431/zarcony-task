import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";


// i18n
import i18n from "./plugins/i18n"

// forLang
let lang = null;
lang = localStorage.getItem("lang") || "en";
document.documentElement.lang = lang;
if (lang === "ar") {
  document.documentElement.dir = "rtl";
}


/* add fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* add some free styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

//------ BootstrapVue -------------------
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);


Vue.config.productionTip = false;

import "./assets/scss/main.scss";
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
