require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import VuePageTransition from "vue-page-transition";
import router from "./Router/index";
import store from "./Store/index";
import axios from "axios";
import App from "./App.vue";

import "animate.css";

import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);

import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);

const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VuePageTransition);

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
