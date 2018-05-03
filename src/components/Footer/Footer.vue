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
            <a href="https://www.facebook.com/ParnaTisztitas/" target="_blank"><span class="fb"/></a>
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
          <span @click="isActive = true">О компании</span>
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
        <div>Компания **** &copy; Все права защищены</div>
        <div>2018</div>
      </div>
    </div>
    <Modal
      v-if="isActive"
      @close="isActive = !isActive"
    >
      <Company/>
    </Modal>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import Company from './Company.vue';

export default Vue.extend({
  components: { Company },
  data: () => ({ isActive: false }),
});
</script>


<style scoped lang="stylus">
.fb
  background-image url('../../assets/fb.svg')
  background-repeat no-repeat
  width 50px
  height 50px
  display flex
  justify-content center
  align-items center

.footer
  display flex
  justify-content center
  align-items center
.footer__left
  background-color #f8fbfe
  color $blue
  display flex
  flex-flow column wrap
  align-items flex-end
  justify-content center
  flex-basis 32%
  padding 1rem 2.75rem 1rem 0
  height 300px
.footer__right
  background-color: $blue;
  flex-grow 1
  padding 1rem 0
  height 300px
  &__wrapper
    display flex
    justify-content space-around
    max-width 60%

.socials
  margin 0
  padding 2rem 0 0 0
  display flex
  &__item
    list-style none

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
