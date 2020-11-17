import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugins/element.js';
import axios from 'axios';

//创建一个axios的实例$http
Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
