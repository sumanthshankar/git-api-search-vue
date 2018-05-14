import UserInput from './components/UserInput.vue';
import SearchResult from './components/SearchResult.vue';

export const routes = [
  { path: '/', component: UserInput },
  { path: '/search', component: SearchResult }
];
