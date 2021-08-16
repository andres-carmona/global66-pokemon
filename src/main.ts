import "regenerator-runtime/runtime";
import Vue, { VNode } from "vue";

// Plugins
import "@/plugins/bootstrap-vue";
import "@/plugins/font-awesome";

// App
import App from "./App.vue";

// Configs
import store from "./store";
import router from "./router";

new Vue({
  store: store,
  router: router,
  render: (h): VNode => h(App),
}).$mount("#app");
