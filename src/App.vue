<template lang="pug">
    #app
        header.header
            h1.header__title
                router-link(to="/") Star Wars Vehicles Shop
            .header__buttons
                router-link(to="/basket")
                    button Basket
        section
            router-view
</template>

<script>
export default {
    name: 'app',
}
</script>

<style lang="sass">
#app
    margin: 60px auto
</style>
