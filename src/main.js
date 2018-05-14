import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import UserInput from './components/UserInput';

Vue.use(VueResource);
Vue.component('user-input', UserInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
