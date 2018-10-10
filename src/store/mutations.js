export default {
    ITEMS_UPDATE_VEHICLES: (state, payload) => {
        const update = payload.filter(itemNew => !state.items.vehicles.find(item => item.name === itemNew.name))
            .map(item => ({
                ...item,
                random_price: Math.floor(Math.random() * 1000000) / 100,
            }));
        state.items.vehicles.push(...update);
        return state;
    },
    BASKET_ADD_ITEM: (state, payload) => {
        state.basket.push(payload);
        return state;
    },
    BASKET_DELETE_ITEM: (state, payload) => {
        state.basket = state.basket.filter(item => item.name !== payload.name);
        return state;
    },
    BASKET_CLEAR: (state) => {
        state.basket = [];
        return state;
    },
};