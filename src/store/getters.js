export default {
    getBasketCount: (state) => {
        return state.basket.length;
    },
    getBasketTotal: (state) => {
        return Math.floor(state.basket.reduce((prev, current) => {
            return prev + current.random_price;
        }, 0) * 100) / 100;
    },
};