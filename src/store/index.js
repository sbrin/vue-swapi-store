import Vue from 'vue';
import Vuex from 'vuex';
import actions from '@/store/actions';
import mutations from '@/store/mutations';

Vue.use(Vuex);

const state = {
    items: [],
    basket: [],
};

const store = new Vuex.Store({
    state,
    actions,
    mutations,
});

export default store;