<template>
  <footer class="footer">
    <div class="footer__left">
      <div>
        <div class="column blue">
          <span class="head">ООО «***»</span>
          <span>Адрес: Бишкек, ул. Ч.Валиханова 2</span>
          <span>бывш. Ч-Атинская 2-й этаж</span>
        </div>
        <div class="column blue mt-1">
          <span class="head">Время работы:</span>
          <span>9.00 - 19.00</span>
          <span>без выходных</span>
        </div>
        <ul class="socials">
          <li class="socials__item">
            <a href="#"><i class="fa fa-facebook"/></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__right">
      <div class="footer__right__wrapper">
        <div class="column">
          <span class="head">Телефоны</span>
          <span><a href="tel:+12345">+11111111111</a></span>
          <span><a href="tel:+12345">+11111111111</a></span>
        </div>
        <div class="column">
          <span class="head">Компания</span>
          <span>О компании</span>
          <span>Доставка и Оплата</span>
          <span>Возврат и Гарантия</span>
          <span>Акции</span>
          <span>Гарантия лучшей цены</span>
          <span>Контакты</span>
          <span>Вопросы и Ответы</span>
        </div>
        <div class="column">
          <span class="head">Покупателям</span>
          <span>Комплекты</span>
          <span>Отзывы</span>
          <span>Контакты</span>
        </div>
      </div>
      <div class="reserved">
        <div>Компания **** © Все права защищены</div>
        <div>2018</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style scoped lang="stylus">
.footer
  display flex
  justify-content center
  align-items center
  overflow hidden
  position relative
.footer__left
  background-color #f8fbfe
  color $blue
  display flex
  flex-flow column wrap
  align-items flex-end
  justify-content center
  flex-basis 32%
  padding 1rem 2.75rem 1rem 0
  max-height 330px
.footer__right
  background-color: $blue;
  flex-grow 1
  padding 1rem 0
  max-height 330px
  &__wrapper
    display flex
    justify-content space-around
    max-width 60%

.socials
  margin 0
  padding 2rem 0 1rem 0
  display flex
  &__item
    list-style none
    border-radius 50%
    border 2px solid $blue
    display flex
    justify-content center
    align-items center
    will-change background-color, cursor
    transition .2s linear
    width 49px
    height 49px
    a
      color $blue
      font-size 1.2rem
      will-change color
      transition .2s linear
      padding 1.3rem
    &:hover
      background-color $blue
      a
        color #fff

.column
  display flex
  flex-flow column wrap
  color #fff
  a
    color #fff
  .head
    font-family MullerBold
    font-size 1rem
    line-height 1.5rem
  span
    margin .5rem 0

span
  &:hover
    cursor pointer
    color $darkgray

.blue
  color $blue
.reserved
  display flex
  justify-content space-between
  width 70%
  margin-left 5rem
  padding 2rem 0 1rem
  font-family MullerBold
  font-size 1rem
  color #fff
</style>
