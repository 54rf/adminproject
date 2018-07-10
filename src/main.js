// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import store from './store/index'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/reset.css'
Vue.config.productionTip = false
Vue.use(Element)
/* eslint-disable no-new */
//全局组件
import myheader from './components/myHeader'
Vue.component('myheader', myheader)



Vue.prototype.$ajax = axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
