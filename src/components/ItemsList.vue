<template lang="pug">
    .listing
        ListItem.listing__item(
            v-for="(item, index) in items",
            :key="index",
            :item="item",
            :selected="index === selectedItem",
            :idx="index",
            @selectItem="selectItem",
        )
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import { mapActions } from 'vuex';

export default {
    name: 'ItemsList',
    components: {
        ListItem,
    },
    data() {
        return {
            intervalGetVehicles: setInterval(() => { this.API_GET_VEHICLES() }, 60000),
            selectedItem: null,
        };
    },
    computed: {
        items() {
            return this.$store.state.items.vehicles;
        }
    },
    methods: {
        ...mapActions(['API_GET_VEHICLES']),
        selectItem(idx) {
            this.selectedItem = idx;
        }
    },
    created() {
        this.API_GET_VEHICLES();
    },
    beforeDestroy() {
        clearInterval(this.intervalGetVehicles);
    }
}
</script>
<style scoped lang="sass">

</style>
