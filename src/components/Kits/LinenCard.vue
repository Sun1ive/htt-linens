<template>
  <div class="card">
    <img :src="src" alt="img">
    <div class="card__box">
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
      <strong>{{ price }}</strong>
      <Button class="btn-red">Узнать цену</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: () => '/bed1.png',
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
});
</script>


<style scoped lang="stylus">
.card
  box-shadow 0px 2px 26px rgba(#a3bbc1, .25)
  border-radius 4px
  background-color #fff
  max-width 270px
  font-family MullerBold
  color $darkgrey
  &__box
    margin 1.5rem
    padding 1rem 0
    h3
      font-size 1.4rem
    strong
      margin 1rem 0
      display block
    p
      font-family Muller
</style>
