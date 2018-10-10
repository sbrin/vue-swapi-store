<template lang="pug">
    .basket
        .basket__listing.listing
            BasketItem.listing__item(
                v-for="(item, index) in items",
                :key="index",
                :item="item",
            )
        hr
        .basket__total.summary(v-if="getBasketCount === 0") В корзине пусто
        .basket__total.summary(v-else="")
            .summary__total Всего 
            .summary__price {{ getBasketTotal }} КР
            .summary__buttons
                button(
                    @click="togglePopup(true)"
                ) Оформить заказ
        PopupOrder(
            v-if="popup",
            @togglePopup="togglePopup",
        )
</template>

<script>
import BasketItem from '@/components/BasketItem.vue';
import PopupOrder from '@/components/PopupOrder.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'Basket',
    components: {
        BasketItem,
        PopupOrder,
    },
    data() {
        return {
            popup: false,
        };
    },
    computed: {
        ...mapGetters([
            'getBasketTotal',
            'getBasketCount',
        ]),
        items() {
            return this.$store.state.basket;
        }
    },
    methods: {
        togglePopup(show = false) {
            this.popup = show;
        }
    },
}
</script>
<style scoped lang="sass">
.summary
    display: flex
    &__total
        flex-grow: 1
    &__buttons
        text-align: right
        width: 30%
</style>
