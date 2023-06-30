import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import { routes } from './routes';

const app = createApp(App);
app.use(VueAxios, axios);

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

app.use(router);
app.mount('#app');

