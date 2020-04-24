import Vue from 'vue';
import Router from 'vue-router';

import IndexPage from './components/IndexPage.vue';
import SettingsPage from './components/SettingsPage.vue';
import GoingOutPage from './components/GoingOutPage.vue';


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
    },
    {
      path: '/going-out',
      name: 'going-out',
      component: GoingOutPage,
    },
  ],
});
