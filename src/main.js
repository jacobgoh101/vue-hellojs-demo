// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const HelloJs = require('hellojs/dist/hello.all.min.js');
const VueHello = require('vue-hellojs');

Vue.config.productionTip = false

HelloJs.init({
  google: "1058748273114-6srsjvvag80n2kk6mc3v6fv2i3jdlllm.apps.googleusercontent.com",
  facebook: "152190588690642"
}, {redirect_uri: 'authcallback/'});
Vue.use(VueHello, HelloJs);

/* eslint-disable no-new */
new Vue({el: '#app', router, template: '<App/>', components: {
    App
  }})

// make sure the surge.sh page go to https
if (window.location.href.indexOf('http://localhost') == -1 && window.location.href.indexOf('http://') > -1) 
  window.location.href = window.location.href.replace('http://', 'https://');