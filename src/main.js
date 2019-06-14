import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  // 每次添加新的 js 文件，需要现 import, 然后在这里加入名称， 如：router, store
  router,
  store,
  render: h => h(App)
}).$mount("#app");
