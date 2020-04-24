import Vue from 'vue';

import router from './router';
import App from './App.vue';


const app = new Vue({
  el: '#qr-covid-app',
  router,
  template: '<App/>',
  components: {App},
});
