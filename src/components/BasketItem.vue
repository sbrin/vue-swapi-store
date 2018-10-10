<template lang="pug">
    .item
        .item__info
            .item__name {{ item.name }}
            .item__price {{ item.random_price }} КР
            .item__buttons
                button(@click="deleteFromBasket") Удалить из корзины
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'BasketItem',
    props: {
        item: Object,
    },
    methods: {
        ...mapActions(['API_GET_VEHICLES']),
        deleteFromBasket() {
            this.$store.commit('BASKET_DELETE_ITEM', this.item);
        }
    },
}
</script>
<style scoped lang="sass">
</style>
