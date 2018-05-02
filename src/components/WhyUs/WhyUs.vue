<template>
  <section class="about">
    <wrapper>
      <h1 class="main__title">Почему мы лучшие</h1>
      <div class="block__row">
        <div class="Adv__block">
          <span class="number">1</span>
          <img src="/medal.png" alt="icon">
          <h2 class="Adv__block__header">Качество</h2>
          <p>Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>
        </div>
        <div class="Adv__block">
          <span class="number">2</span>
          <img src="/diamond.png" alt="icon">
          <h2 class="Adv__block__header">Уникальность</h2>
          <p>Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>
        </div>
        <div class="Adv__block">
          <span class="number">3</span>
          <img src="/shield.png" alt="icon" style="height: 70px">
          <h2 class="Adv__block__header">Качество</h2>
          <p>Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>
        </div>
        <div class="Adv__block">
          <span class="number">4</span>
          <img src="/care.png" alt="icon" style="height: 70px">
          <h2 class="Adv__block__header">Качество</h2>
          <p>Равным образом новая модель организационной деятельности способствует подготовки и реализации систем массового участия.</p>
        </div>
      </div>
    </wrapper>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="stylus">
.about
  padding 5rem 0
  border-bottom 1px solid #ccc + 70%
  .main__title
    text-align center
    padding-bottom 2rem

.block__row
  display flex
  justify-content space-between
  padding 3rem 0
  .Adv__block__header
    position relative
    font-size 1.2rem
    line-height 1rem
    color $blue
    font-family MullerBold
    margin 2rem 0 1rem
  .Adv__block
    position relative
    margin 0 1rem
    p
      width 70%
  .Adv__block:nth-child(1),
  .Adv__block:nth-child(2),
  .Adv__block:nth-child(3)
    .Adv__block__header
      &:after
        content ""
        border 1px solid #eee
        position absolute
        top 50%
        right 10%
        transform translateY(-50%)
        width 60px
  .Adv__block:nth-child(1)
  .Adv__block:nth-child(3)
    .Adv__block__header
      &:after
        width 50%
  .Adv__block:nth-child(2)
    .Adv__block__header
      &:after
        width 40%

.number
  background-color $red
  border-radius 50%
  width 17px
  height 17px
  color #fff
  box-shadow 0 2px 6px rgba($red, .48)
  position absolute
  font-family MullerBold
  display flex
  justify-content center
  align-items center
  top 46%
  left -30px
  font-size 0.9rem
  text-align center
</style>
