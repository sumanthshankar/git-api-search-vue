import Vue from 'vue'
import App from './App.vue'

import UserInput from './components/UserInput';

Vue.component('user-input', UserInput);

new Vue({
  el: '#app',
  render: h => h(App)
})
