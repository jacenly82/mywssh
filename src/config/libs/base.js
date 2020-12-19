/*
 * @Author: your name
 * @Date: 2020-12-17 23:00:19
 * @LastEditTime: 2020-12-17 23:00:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mywssh\src\config\libs\base.js
 */
import { WS } from "@/config/service/websocket.config";

const install = function(Vue) {
  const base = {
    //参数&方法 
    WS({ url, openFn, messageFn, errorFn, isInit = false } = {}) {
      return new WS({ url, openFn, messageFn, errorFn, isInit });
    },
  };
  Vue.prototype.base = base;
};

export default {
  install
};