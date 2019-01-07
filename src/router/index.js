import Vue from 'vue';
import VueRouter from 'vue-router';

import movies from '../movies/movies.routing';
import tv from '../tv/tv.routing';
import person from '../person/person.routing';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/movies', ...movies },
    { path: '/tv', ...tv },
    { path: '/person', ...person },
    { path: '*', redirect: '/movies/popular' }
  ]
});
