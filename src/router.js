import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Result from './views/Result.vue';

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    }
  ],
  mode: 'history'
})
