<template>
  <header class="header">
    <wrapper>
      <Toolbar />
      <div class="header__container">
        <h1>Постельное белье и аксессуары</h1>
        <h2>Мы сделаем ваш дом уютнее!</h2>
        <div>
          <Button class="btn mr-2">Перейти в каталог</Button>
          <Button class="btn">Читать о компании</Button>
        </div>
      </div>
    </wrapper>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';

export default Vue.extend({
  components: { Toolbar },
});
</script>


<style scoped lang="stylus">
.header
  background url('/header.png') no-repeat
  background-size cover
  min-height 700px
  &__container
    text-align center
    padding-top 10%
    h1
      font-size 4.2rem
      color $blue
      font-family MullerBold
    h2
      font-size 3rem
      color $grey
      font-family Muller
</style>
