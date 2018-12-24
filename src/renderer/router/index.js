import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Talk',
      component: () => import('../view/Talk')
    },
    {
      path: '/Talk',
      redirect: '/'
    }
  ]
});
