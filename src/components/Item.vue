<template lang="pug">
    .item
        .item__info
            .item__name {{ item.name }}
            .item__price 123
            .item__buttons
                button Buy
        .item__description
            ul.item__props
                li.item__prop Manufacturer: {{ item.manufacturer }}
</template>

<script>
export default {
    name: 'Item',
    props: {
        item: Object,
    },
}
</script>
<style scoped lang="sass">
.item
    &__title
    &__price
    &__buttons
    &__description
</style>
