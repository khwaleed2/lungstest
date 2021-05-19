import Vue from 'vue';

import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tryAgain: false,
        showPage: 0,
        data: {},
        f_result: {},
    },
    getters: {
        getTryAgain(state) {
            return state.tryAgain;
        },
        getShowPage(state) {
            return state.showPage;
        },
        getData(state) {
            return state.data;
        },
        getResult(state) {
            return state.f_result;
        }
    },
    mutations: {
        setTryAgain(state, value) {
            state.tryAgain = value
        },
        setShowPage(state, value) {
            state.showPage = value
        },
        setData(state, value) {
            state.data = value
        },
        setResult(state, value) {
            state.f_result = value
        }
    },
    actions: {},

    modules: {
        auth
    },

    plugins: [createPersistedState()]
})

export default store;
