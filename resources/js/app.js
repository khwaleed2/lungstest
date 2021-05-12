require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import VuePageTransition from 'vue-page-transition';

import 'animate.css';

import router from './Router/index';
import store from './Store/index';

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(VuePageTransition);

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
