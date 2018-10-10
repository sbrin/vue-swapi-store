import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from '@/store/actions';
import mutations from '@/store/mutations';
import getters from '@/store/getters';

Vue.use(Vuex);

const state = {
    items: {
        vehicles: [],
    },
    basket: [],
};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
});

export default store;