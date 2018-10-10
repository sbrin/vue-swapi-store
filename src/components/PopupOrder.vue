<template lang="pug">
.popup
    .popup__shadow(@click="closePopup")
    .popup__content
        form.form(@submit.prevent="submit")
            fieldset.form__wrapper
                .form__row
                    label(for="order_name") ФИО
                    input.form__input(
                        id="order_name",
                        type="text",
                        required,
                        v-model="order_name",
                    )
                .form__row
                    label(for="order_address") Адрес
                    input.form__input(
                        id="order_address",
                        type="text",
                        required,
                        v-model="order_address",
                    )
                .form__row
                    label(for="order_date") Дата доставки
                    input.form__input(
                        id="order_date",
                        type="date",
                        required,
                        v-model="order_date",
                    )
                .form__footer
                    button(
                        type="submit",
                    ) Подтвердить заказ
                    button(@click.prevent="closePopup") Отмена
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'PopupOrder',
    data() {
        return {
            order_name: '',
            order_address: '',
            order_date: '',
        }
    },
    computed: {
        basket() {
            return this.$store.state.basket;
        }
    },
    methods: {
        ...mapActions(['API_POST_ORDER']),
        closePopup() {
            this.$emit('togglePopup');
        },
        submit() {
            this.API_POST_ORDER({
                name: this.order_name,
                address: this.order_address,
                date: this.order_date,
                order: this.basket,
            })
                .then(() => {
                    this.$store.commit('BASKET_CLEAR');
                    this.$router.push('/');
                });
        }
    },
}
</script>
<style scoped lang="sass">
.popup
    position: fixed
    left: 0
    top: 0
    width: 100%
    height: 100%
    &__shadow
        background: rgba(0, 0, 0, 0.4)
        position: absolute
        left: 0
        top: 0
        width: 100%
        height: 100%
    &__content
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 400px
.form
    background: white
    box-shadow: 0 5px 20px #999
    padding: 20px
    &__wrapper
        border: none
    &__row
        padding-bottom: 10px
    &__input
        display: block
    &__footer
        display: flex
        justify-content: space-between
</style>
