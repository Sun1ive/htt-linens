<template>
  <form class="form">
    <div>
      <h2>Закажите <span class="blue">обратный звонок</span></h2>
      <h4>Оставье заявку и мы свяжемся с вами.</h4>
    </div>
    <div class="form__inputs">
      <div class="input__group">
        <label>Ваше имя</label>
        <input type="text" placeholder="Ваше имя" class="input" required>
      </div>
      <div class="input__group">
        <label>Ваш телефон</label>
        <input type="text" placeholder="Ваш телефон" class="input" required>
      </div>
      <div class="input__group">
        <label>Ваш email</label>
        <input type="email" placeholder="Ваш email" class="input" required>
      </div>
      <div class="input__group">
        <label>Добавьте комментарий</label>
        <input type="email" placeholder="Ваш комментарий" class="input">
      </div>
    </div>
    <div class="button">
      <Button class="btn-blue">Отправить</Button>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped lang="stylus">
.form
  padding 2rem
  min-width 330px
  h4
    font-family Muller
    font-weight normal
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
</style>
