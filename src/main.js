// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.config.productionTip = false;
Vue.config.silent = true
Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['X-Pig-UID'] = '10002';
if((typeof window.webview)!="undefined" && (typeof window.webview.authkey)!="undefined"){
	Vue.http.headers.common['Authorization'] = window.webview.authkey();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
