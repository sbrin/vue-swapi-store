<template lang="pug">
    .listing
        Item.listing__item(
            v-for="(item, index) in items",
            :key="index",
            :item="item",
        )
</template>

<script>
import Item from '@/components/Item.vue';
import { mapActions } from 'vuex';

export default {
    name: 'ItemsList',
    components: {
        Item,
    },
    data() {
        return {
            items: [],
            intervalGetVehicles: setInterval(() => { this.getVehicles(); }, 3000)
        };
    },
    methods: {
        ...mapActions(['API_GET_VEHICLES']),
        getVehicles() {
            this.API_GET_VEHICLES()
                .then(response => {
                    this.items = response;
                });
        }
    },
    created() {
        this.getVehicles();
    },
    beforeDestroy() {
        clearInterval(this.intervalGetVehicles);
    }
}
</script>
<style scoped lang="sass">

</style>
