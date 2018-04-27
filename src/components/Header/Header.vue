<template>
  <header class="header">
    <wrapper>
      <Toolbar />
      <div class="header__container">
        <h1 class="main__title">Постельное белье и аксессуары</h1>
        <h2>Мы сделаем ваш дом уютнее!</h2>
        <div>
          <Button class="btn mr-2">Перейти в каталог</Button>
          <Button class="btn">Читать о компании</Button>
        </div>
      </div>
      <div class="card__wrapper">
        <Card
          v-for="item in cardIcons"
          :key="item.id"
          :src="item.src"
        >
          <div class="card__text" v-html="item.text" />
        </Card>
      </div>
    </wrapper>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './Toolbar.vue';
import Card from './Card.vue';

interface Icon {
  src: string;
  text: string;
  id: number;
}

export default Vue.extend({
  components: { Toolbar, Card },
  data: () => ({
    cardIcons: [
      {
        src: '/firstcard.png',
        text: '<strong class="blue">Высокое</strong> качество <br> товара',
        id: 1,
      },
      {
        src: '/secondcard.png',
        text: '<strong class="blue">Выгодные</strong> цены и <br> постоянные скидки',
        id: 2,
      },
      {
        src: '/thirdcard.png',
        text: 'Курьерская доставка <br> <strong class="blue">по всей России</strong>',
        id: 3,
      },
    ] as Icon[],
  }),
});
</script>


<style scoped lang="stylus">
.header
  background url('/header.png') no-repeat
  background-size cover
  min-height 700px
  position relative
  &__container
    text-align center
    padding-top 16%
    h2
      font-size 3rem
      color $grey
      font-family Muller

.card__wrapper
  display flex
  position absolute
  bottom -4.2rem
  .card
    margin 0 1rem
  .card__text
    margin-right 2rem

</style>
