import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemsList from '@/components/ItemsList'
import Basket from '@/components/Basket'

Vue.use(VueRouter);

const MyRouter = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: ItemsList,
        },
        {
            path: '/basket',
            name: 'Basket',
            component: Basket,
        },
    ],
});

export default MyRouter;