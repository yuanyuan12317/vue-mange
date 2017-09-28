// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 饿了么框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueQuillEditor from 'vue-quill-editor'
// ueditor插件
import  './assets/js/plugins/ueditor/ueditor.config.js'
import  './assets/js/plugins/ueditor/ueditor.all.min.js'
import  './assets/js/plugins/ueditor/ueditor.parse.min.js'
import  './assets/js/plugins/ueditor/lang/zh-cn/zh-cn.js'

import Promise from 'promise-polyfill'; 
// jquery和jquery滚动插件
import './assets/js/plugins/jquery/dist/jquery.min.js'
import './assets/js/plugins/slimscroll/jquery.slimscroll.min.js'
//http请求插件
import axios from 'axios'
//路由配置
import router from './router'
// 公用样式--字体图标配置
import './style.less'

import App from './App'


console.log(axios)
Vue.prototype.axios = axios

// ie不识别promise
if (!window.Promise) {  
  window.Promise = Promise;  
} 

Vue.config.productionTip = false

Vue.use(ElementUI)

// Vue.use(VueQuillEditor)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
