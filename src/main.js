/*
 * @Author: your name
 * @Date: 2020-12-17 20:18:49
 * @LastEditTime: 2020-12-22 16:07:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywssh\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import base from "./config/libs/base"

Vue.config.productionTip = false;
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

Vue.use(ElementUI);
Vue.use(VXETable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Vue.use(base);
