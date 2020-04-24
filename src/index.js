import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';

import router from './router';
import App from './App.vue';


Vue.use(AsyncComputed);


const app = new Vue({
  el: '#qr-covid-app',
  router,
  template: '<App/>',
  components: {App},
});
