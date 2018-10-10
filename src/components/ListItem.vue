<template lang="pug">
    .item
        .item__info(@click="loadItem")
            .item__name {{ item.name }}
            .item__price {{ item.random_price }} КР
            .item__buttons
                button(
                    @click.stop="addToBasket",
                    v-show="isAvailable",
                ) Добавить в корзину
                button(
                    @click.stop="deleteFromBasket",
                    v-show="!isAvailable",
                ) Удалить из корзины
        .item__description(:class="{ 'item__description_active': selected }")
            ul.item__props
                li.item__prop Производитель: {{ item.manufacturer }}
                li.item__prop Длина: {{ item.length }}
                li.item__prop Максимальная скорость: {{ item.max_atmosphering_speed }}
                li.item__prop Грудоподъемность: {{ item.cargo_capacity }}
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'ListItem',
    props: {
        item: Object,
        selected: Boolean,
        idx: Number,
    },
    computed: {
        isAvailable() {
            return !this.$store.state.basket.find(item => item.name === this.item.name);
        },
    },
    methods: {
        ...mapActions([
            'API_GET_VEHICLES',
        ]),
        addToBasket() {
            this.$store.commit('BASKET_ADD_ITEM', this.item);
        },
        deleteFromBasket() {
            this.$store.commit('BASKET_DELETE_ITEM', this.item);
        },
        loadItem() {
            if (this.selected) {
                this.$emit('selectItem', null);
            } else {
                this.$emit('selectItem', this.idx);
            }
        },
    },
}
</script>
<style scoped lang="sass">
</style>
