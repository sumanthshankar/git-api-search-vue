import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';

import { routes } from './routes';
import App from './App.vue';
import UserInput from './components/UserInput.vue';
import SearchResult from './components/SearchResult.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://api.github.com/search/';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(Vuelidate);

Vue.component('user-input', UserInput);
Vue.component('search-result', SearchResult);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
