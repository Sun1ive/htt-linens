<template>
  <form class="form" @submit.prevent="onSubmit">
    <div>
      <h2>Закажите <span class="blue">обратный звонок</span></h2>
      <h4>Оставье заявку и мы свяжемся с вами.</h4>
    </div>
    <div class="form__inputs">
      <div class="input__group">
        <label>Ваше имя</label>
        <input
          v-model.trim.lazy="FormData.username"
          type="text"
          placeholder="Ваше имя"
          class="input"
          required
        >
      </div>
      <div class="input__group">
        <label>Ваш телефон</label>
        <input
          v-model.trim.lazy.number="FormData.phoneNumber"
          type="text"
          placeholder="Ваш телефон"
          class="input"
          required
        >
      </div>
      <div class="input__group">
        <label>Ваш email</label>
        <input
          v-model.trim.lazy="FormData.email"
          type="email"
          placeholder="Ваш email"
          class="input"
          required
        >
      </div>
      <div class="input__group">
        <label>Добавьте комментарий</label>
        <input
          v-model.trim.lazy="FormData.comments"
          type="text"
          placeholder="Ваш комментарий"
          class="input"
        >
      </div>
    </div>
    <div class="button">
      <Button class="btn-blue" type="submit">Отправить</Button>
    </div>
    <Modal
      v-if="succeed"
      @close="closeModals"
    >
      <Thank/>
    </Modal>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import Thank from '../Shared/Thank.vue';

interface IFormData {
  username: string;
  phoneNumber: number | null;
  email: string;
  comments: string;
}

export default Vue.extend({
  components: { Thank },
  data: () => ({
    FormData: {
      username: '',
      phoneNumber: null,
      email: '',
      comments: '',
    } as IFormData,
    succeed: false as boolean,
  }),
  methods: {
    onSubmit() {
      this.succeed = true;
    },
    closeModals() {
      this.succeed = false;
      this.$emit('close');
    },
  },
});
</script>


<style scoped lang="stylus">
.form
  padding 2rem
  min-width 330px
  font-family Muller
  h4
    font-family Muller
    font-weight normal
  h2
    font-size responsive 1.3rem 2.1rem
    font-family MullerBold
  .button
    text-align center
.input
  display block
  border-radius 10px
  outline-color transparent
  padding 1rem
  width 90%
  box-shadow 0 2px 13px rgba(#fafafa, 0.5)
  border 2px solid rgba($blue, 0.1)
  color $darkgray
  font-size responsive 1rem 1.2rem
  &__group
    margin 2rem 0
    label
      font-weight bold
      display block
      margin 5px 2px
      font-size responsive 1rem 1.2rem
      color $darkgray

@media (min-width 1440px)
  .form
    width 600px

@media (min-width 900px)
  .form
    width 550px
</style>
