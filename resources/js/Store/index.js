import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tryAgain: false,
        showPage: 0,
    },
    getters: {
        getTryAgain(state) {
            return state.tryAgain
        },
        getShowPage(state) {
            return state.showPage
        }
    },
    mutations: {
        setTryAgain(state, value) {
            state.tryAgain = value
        },
        setShowPage(state, value) {
            state.showPage = value
        }
    },
    actions: {}
})

export default store;
