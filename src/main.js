/*
 * @Author: your name
 * @Date: 2020-12-17 20:18:49
 * @LastEditTime: 2020-12-18 22:30:25
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
import "xe-utils";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(VXETable);
// Vue.use(base);