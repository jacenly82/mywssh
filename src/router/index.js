/*
 * @Author: your name
 * @Date: 2020-12-17 20:18:49
 * @LastEditTime: 2020-12-29 11:45:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywssh\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import wssh from "../components/wssh.vue";
// import NewWssh from "../views/NewWssh.vue"
// import MyWebSSH from "../views/MyWebSSH.vue"
// import login from "../views/login/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/mywebssh",
    name: "wssh",
    component: wssh
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/login.vue")
  },
  {
    path: "/singup",
    name: "singup",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/login.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
