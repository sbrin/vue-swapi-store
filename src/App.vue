<template lang="pug">
    #app
        header.header
            h1.header__title
                router-link(to="/") Star Wars Vehicles Shop
            .header__buttons
                router-link(to="/basket") Корзина:   
                div(v-if="getBasketCount === 0") В корзине пусто
                div(v-else="") Всего {{ getBasketCount }} шт. за {{ getBasketTotal }} КР
        section
            router-view
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'app',
    computed: {
        ...mapGetters([
            'getBasketCount',
            'getBasketTotal',
        ]),
    },
}
</script>

<style lang="sass">
button
    cursor: pointer
#app
    margin: 60px auto
    width: 800px
.header
    display: flex
    align-items: center
    &__title
        flex-grow: 1
    &__buttons
.item
    cursor: pointer
    padding: 5px
    &__info
        display: flex
    &__name
        flex-grow: 1
    &__price
    &__buttons
        text-align: right
        width: 30%
    &__description
        display: none
        &_active
            display: block
</style>
